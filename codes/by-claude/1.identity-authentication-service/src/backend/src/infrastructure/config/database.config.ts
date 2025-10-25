// ================================================================
// DATABASE CONFIGURATION
// ================================================================
// Purpose: PostgreSQL connection configuration with pooling
// Reference: SRS-Grok-V2.md - Part07.1 Data Model Overview
//           Part02.8 Technical Requirements
// ================================================================

import { PrismaClient } from '@prisma/client';

// ================================================================
// DATABASE CONNECTION CONFIG
// ================================================================

export interface DatabaseConfig {
  url: string;
  poolSize: number;
  connectionTimeout: number;
  queryTimeout: number;
  logLevel: 'query' | 'info' | 'warn' | 'error';
  enableLogging: boolean;
}

// ================================================================
// ENVIRONMENT-BASED CONFIGURATION
// ================================================================

export const getDatabaseConfig = (): DatabaseConfig => {
  const environment = process.env.NODE_ENV || 'development';

  const baseConfig: DatabaseConfig = {
    url: process.env.DATABASE_URL || '',
    poolSize: parseInt(process.env.DB_POOL_SIZE || '10', 10),
    connectionTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT || '10000', 10),
    queryTimeout: parseInt(process.env.DB_QUERY_TIMEOUT || '30000', 10),
    logLevel: (process.env.DB_LOG_LEVEL as DatabaseConfig['logLevel']) || 'warn',
    enableLogging: process.env.DB_ENABLE_LOGGING === 'true',
  };

  // Environment-specific overrides
  switch (environment) {
    case 'production':
      return {
        ...baseConfig,
        poolSize: 20,
        logLevel: 'error',
        enableLogging: false,
      };

    case 'staging':
      return {
        ...baseConfig,
        poolSize: 15,
        logLevel: 'warn',
        enableLogging: true,
      };

    case 'test':
      return {
        ...baseConfig,
        poolSize: 5,
        logLevel: 'error',
        enableLogging: false,
      };

    case 'development':
    default:
      return {
        ...baseConfig,
        poolSize: 10,
        logLevel: 'query',
        enableLogging: true,
      };
  }
};

// ================================================================
// PRISMA CLIENT SINGLETON
// ================================================================
// Implements singleton pattern for database connection

class PrismaService {
  private static instance: PrismaClient | null = null;
  private static config: DatabaseConfig;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  /**
   * Get Prisma Client instance (Singleton)
   */
  public static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.config = getDatabaseConfig();

      PrismaService.instance = new PrismaClient({
        datasources: {
          db: {
            url: PrismaService.config.url,
          },
        },
        log: PrismaService.config.enableLogging
          ? [
              {
                emit: 'event',
                level: 'query',
              },
              {
                emit: 'event',
                level: 'error',
              },
              {
                emit: 'event',
                level: 'info',
              },
              {
                emit: 'event',
                level: 'warn',
              },
            ]
          : [],
      });

      // Setup event listeners for logging
      if (PrismaService.config.enableLogging) {
        PrismaService.setupEventListeners();
      }

      // Graceful shutdown handler
      PrismaService.setupShutdownHandlers();
    }

    return PrismaService.instance;
  }

  /**
   * Setup event listeners for Prisma queries
   */
  private static setupEventListeners(): void {
    if (!PrismaService.instance) return;

    // Query event
    PrismaService.instance.$on('query', (e: any) => {
      console.log('[DB Query]', {
        query: e.query,
        params: e.params,
        duration: `${e.duration}ms`,
        timestamp: new Date().toISOString(),
      });
    });

    // Error event
    PrismaService.instance.$on('error', (e: any) => {
      console.error('[DB Error]', {
        message: e.message,
        target: e.target,
        timestamp: new Date().toISOString(),
      });
    });

    // Info event
    PrismaService.instance.$on('info', (e: any) => {
      console.info('[DB Info]', {
        message: e.message,
        timestamp: new Date().toISOString(),
      });
    });

    // Warn event
    PrismaService.instance.$on('warn', (e: any) => {
      console.warn('[DB Warning]', {
        message: e.message,
        timestamp: new Date().toISOString(),
      });
    });
  }

  /**
   * Setup graceful shutdown handlers
   */
  private static setupShutdownHandlers(): void {
    const gracefulShutdown = async () => {
      console.log('Closing database connection...');
      await PrismaService.disconnect();
      process.exit(0);
    };

    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
  }

  /**
   * Connect to database (called automatically on first query)
   */
  public static async connect(): Promise<void> {
    const client = PrismaService.getInstance();
    try {
      await client.$connect();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to database:', error);
      throw error;
    }
  }

  /**
   * Disconnect from database
   */
  public static async disconnect(): Promise<void> {
    if (PrismaService.instance) {
      await PrismaService.instance.$disconnect();
      PrismaService.instance = null;
      console.log('Database disconnected');
    }
  }

  /**
   * Execute raw SQL query (use with caution)
   */
  public static async executeRaw(query: string, ...params: any[]): Promise<any> {
    const client = PrismaService.getInstance();
    return await client.$queryRawUnsafe(query, ...params);
  }

  /**
   * Check database connection health
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const client = PrismaService.getInstance();
      await client.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }

  /**
   * Get database statistics
   */
  public static async getStats(): Promise<{
    poolSize: number;
    activeConnections: number;
    idleConnections: number;
  }> {
    // Note: Prisma doesn't expose pool stats directly
    // This is a placeholder for monitoring integration
    return {
      poolSize: PrismaService.config.poolSize,
      activeConnections: 0, // Would need DB-level query
      idleConnections: 0, // Would need DB-level query
    };
  }
}

// ================================================================
// EXPORTS
// ================================================================

export const prisma = PrismaService.getInstance();
export const databaseConfig = getDatabaseConfig();

export default PrismaService;

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Transaction wrapper with retry logic
 */
export async function withTransaction<T>(
  callback: (tx: PrismaClient) => Promise<T>,
  maxRetries = 3
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await prisma.$transaction(async (tx) => {
        return await callback(tx as PrismaClient);
      });
    } catch (error) {
      lastError = error as Error;
      console.warn(`Transaction attempt ${attempt} failed:`, error);

      if (attempt < maxRetries) {
        // Exponential backoff
        const delay = Math.pow(2, attempt) * 100;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error('Transaction failed after max retries');
}

/**
 * Query with timeout
 */
export async function queryWithTimeout<T>(
  query: Promise<T>,
  timeoutMs: number = databaseConfig.queryTimeout
): Promise<T> {
  return Promise.race([
    query,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Query timeout')), timeoutMs)
    ),
  ]);
}

/**
 * Soft delete helper
 */
export async function softDelete(
  model: string,
  id: string
): Promise<void> {
  const client = prisma as any;
  await client[model].update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

/**
 * Restore soft-deleted record
 */
export async function restore(
  model: string,
  id: string
): Promise<void> {
  const client = prisma as any;
  await client[model].update({
    where: { id },
    data: { deletedAt: null },
  });
}
