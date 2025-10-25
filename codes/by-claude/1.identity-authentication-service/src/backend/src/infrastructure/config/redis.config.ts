// ================================================================
// REDIS CONFIGURATION
// ================================================================
// Purpose: Redis connection for session management and caching
// Reference: SRS-Grok-V2.md - Part07.2.5 Session Management
//           Part02.8 Technical Requirements
// ================================================================

import { createClient, RedisClientType, RedisClientOptions } from 'redis';

// ================================================================
// REDIS CONNECTION CONFIG
// ================================================================

export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db: number;
  keyPrefix: string;
  enableTLS: boolean;
  maxRetries: number;
  retryDelay: number;
  connectTimeout: number;
  commandTimeout: number;
  enableOfflineQueue: boolean;
}

// ================================================================
// ENVIRONMENT-BASED CONFIGURATION
// ================================================================

export const getRedisConfig = (): RedisConfig => {
  const environment = process.env.NODE_ENV || 'development';

  const baseConfig: RedisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB || '0', 10),
    keyPrefix: process.env.REDIS_KEY_PREFIX || 'identity:',
    enableTLS: process.env.REDIS_TLS === 'true',
    maxRetries: parseInt(process.env.REDIS_MAX_RETRIES || '3', 10),
    retryDelay: parseInt(process.env.REDIS_RETRY_DELAY || '1000', 10),
    connectTimeout: parseInt(process.env.REDIS_CONNECT_TIMEOUT || '10000', 10),
    commandTimeout: parseInt(process.env.REDIS_COMMAND_TIMEOUT || '5000', 10),
    enableOfflineQueue: process.env.REDIS_OFFLINE_QUEUE !== 'false',
  };

  // Environment-specific overrides
  switch (environment) {
    case 'production':
      return {
        ...baseConfig,
        enableTLS: true,
        maxRetries: 5,
      };

    case 'staging':
      return {
        ...baseConfig,
        enableTLS: true,
        maxRetries: 4,
      };

    case 'test':
      return {
        ...baseConfig,
        db: 15, // Use separate DB for testing
        maxRetries: 1,
      };

    case 'development':
    default:
      return baseConfig;
  }
};

// ================================================================
// REDIS CLIENT SINGLETON
// ================================================================

class RedisService {
  private static instance: RedisClientType | null = null;
  private static config: RedisConfig;
  private static isConnecting = false;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  /**
   * Get Redis Client instance (Singleton)
   */
  public static getInstance(): RedisClientType {
    if (!RedisService.instance && !RedisService.isConnecting) {
      RedisService.isConnecting = true;
      RedisService.config = getRedisConfig();

      const options: RedisClientOptions = {
        socket: {
          host: RedisService.config.host,
          port: RedisService.config.port,
          connectTimeout: RedisService.config.connectTimeout,
          tls: RedisService.config.enableTLS,
          reconnectStrategy: (retries: number) => {
            if (retries > RedisService.config.maxRetries) {
              console.error('Max Redis reconnection attempts reached');
              return new Error('Max retries reached');
            }
            return RedisService.config.retryDelay * retries;
          },
        },
        password: RedisService.config.password,
        database: RedisService.config.db,
        commandsQueueMaxLength: RedisService.config.enableOfflineQueue ? undefined : 0,
      };

      RedisService.instance = createClient(options);

      // Setup event listeners
      RedisService.setupEventListeners();

      // Setup graceful shutdown
      RedisService.setupShutdownHandlers();

      RedisService.isConnecting = false;
    }

    return RedisService.instance!;
  }

  /**
   * Setup event listeners for Redis client
   */
  private static setupEventListeners(): void {
    if (!RedisService.instance) return;

    RedisService.instance.on('connect', () => {
      console.log('[Redis] Connecting...');
    });

    RedisService.instance.on('ready', () => {
      console.log('[Redis] Ready');
    });

    RedisService.instance.on('error', (error) => {
      console.error('[Redis] Error:', error);
    });

    RedisService.instance.on('reconnecting', () => {
      console.warn('[Redis] Reconnecting...');
    });

    RedisService.instance.on('end', () => {
      console.log('[Redis] Connection closed');
    });
  }

  /**
   * Setup graceful shutdown handlers
   */
  private static setupShutdownHandlers(): void {
    const gracefulShutdown = async () => {
      console.log('Closing Redis connection...');
      await RedisService.disconnect();
      process.exit(0);
    };

    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
  }

  /**
   * Connect to Redis
   */
  public static async connect(): Promise<void> {
    const client = RedisService.getInstance();

    if (!client.isOpen) {
      try {
        await client.connect();
        console.log('Redis connected successfully');
      } catch (error) {
        console.error('Failed to connect to Redis:', error);
        throw error;
      }
    }
  }

  /**
   * Disconnect from Redis
   */
  public static async disconnect(): Promise<void> {
    if (RedisService.instance && RedisService.instance.isOpen) {
      await RedisService.instance.quit();
      RedisService.instance = null;
      console.log('Redis disconnected');
    }
  }

  /**
   * Check Redis connection health
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const client = RedisService.getInstance();
      if (!client.isOpen) {
        return false;
      }
      await client.ping();
      return true;
    } catch (error) {
      console.error('Redis health check failed:', error);
      return false;
    }
  }

  /**
   * Get Redis info
   */
  public static async getInfo(): Promise<string> {
    const client = RedisService.getInstance();
    return await client.info();
  }

  /**
   * Flush current database (use with caution!)
   */
  public static async flushDb(): Promise<void> {
    const client = RedisService.getInstance();
    await client.flushDb();
    console.log('Redis database flushed');
  }

  /**
   * Get all keys matching pattern
   */
  public static async keys(pattern: string): Promise<string[]> {
    const client = RedisService.getInstance();
    return await client.keys(pattern);
  }
}

// ================================================================
// REDIS CACHE SERVICE
// ================================================================

export class RedisCacheService {
  private client: RedisClientType;
  private keyPrefix: string;

  constructor() {
    this.client = RedisService.getInstance();
    this.keyPrefix = getRedisConfig().keyPrefix;
  }

  /**
   * Build full key with prefix
   */
  private buildKey(key: string): string {
    return `${this.keyPrefix}${key}`;
  }

  /**
   * Set value with optional expiration (in seconds)
   */
  async set(key: string, value: any, expirationSeconds?: number): Promise<void> {
    const fullKey = this.buildKey(key);
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

    if (expirationSeconds) {
      await this.client.setEx(fullKey, expirationSeconds, stringValue);
    } else {
      await this.client.set(fullKey, stringValue);
    }
  }

  /**
   * Get value by key
   */
  async get<T = any>(key: string): Promise<T | null> {
    const fullKey = this.buildKey(key);
    const value = await this.client.get(fullKey);

    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }

  /**
   * Delete key
   */
  async delete(key: string): Promise<void> {
    const fullKey = this.buildKey(key);
    await this.client.del(fullKey);
  }

  /**
   * Check if key exists
   */
  async exists(key: string): Promise<boolean> {
    const fullKey = this.buildKey(key);
    const result = await this.client.exists(fullKey);
    return result === 1;
  }

  /**
   * Set expiration on existing key
   */
  async expire(key: string, seconds: number): Promise<void> {
    const fullKey = this.buildKey(key);
    await this.client.expire(fullKey, seconds);
  }

  /**
   * Get TTL for key
   */
  async ttl(key: string): Promise<number> {
    const fullKey = this.buildKey(key);
    return await this.client.ttl(fullKey);
  }

  /**
   * Increment value
   */
  async increment(key: string, by: number = 1): Promise<number> {
    const fullKey = this.buildKey(key);
    return await this.client.incrBy(fullKey, by);
  }

  /**
   * Decrement value
   */
  async decrement(key: string, by: number = 1): Promise<number> {
    const fullKey = this.buildKey(key);
    return await this.client.decrBy(fullKey, by);
  }

  /**
   * Set hash field
   */
  async hSet(key: string, field: string, value: any): Promise<void> {
    const fullKey = this.buildKey(key);
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    await this.client.hSet(fullKey, field, stringValue);
  }

  /**
   * Get hash field
   */
  async hGet<T = any>(key: string, field: string): Promise<T | null> {
    const fullKey = this.buildKey(key);
    const value = await this.client.hGet(fullKey, field);

    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }

  /**
   * Get all hash fields
   */
  async hGetAll<T = any>(key: string): Promise<Record<string, T>> {
    const fullKey = this.buildKey(key);
    const data = await this.client.hGetAll(fullKey);

    const result: Record<string, T> = {};
    for (const [field, value] of Object.entries(data)) {
      try {
        result[field] = JSON.parse(value) as T;
      } catch {
        result[field] = value as T;
      }
    }

    return result;
  }

  /**
   * Delete hash field
   */
  async hDel(key: string, field: string): Promise<void> {
    const fullKey = this.buildKey(key);
    await this.client.hDel(fullKey, field);
  }

  /**
   * Add to set
   */
  async sAdd(key: string, ...members: string[]): Promise<void> {
    const fullKey = this.buildKey(key);
    await this.client.sAdd(fullKey, members);
  }

  /**
   * Get set members
   */
  async sMembers(key: string): Promise<string[]> {
    const fullKey = this.buildKey(key);
    return await this.client.sMembers(fullKey);
  }

  /**
   * Check if member exists in set
   */
  async sIsMember(key: string, member: string): Promise<boolean> {
    const fullKey = this.buildKey(key);
    return await this.client.sIsMember(fullKey, member);
  }

  /**
   * Remove from set
   */
  async sRem(key: string, ...members: string[]): Promise<void> {
    const fullKey = this.buildKey(key);
    await this.client.sRem(fullKey, members);
  }
}

// ================================================================
// SESSION STORE (Redis-backed)
// ================================================================

export class SessionStore {
  private cache: RedisCacheService;
  private sessionPrefix = 'session:';
  private defaultTTL = 24 * 60 * 60; // 24 hours

  constructor() {
    this.cache = new RedisCacheService();
  }

  async createSession(userId: string, sessionData: any, ttl?: number): Promise<string> {
    const sessionId = this.generateSessionId();
    const key = `${this.sessionPrefix}${sessionId}`;
    const data = {
      userId,
      ...sessionData,
      createdAt: new Date().toISOString(),
    };

    await this.cache.set(key, data, ttl || this.defaultTTL);
    return sessionId;
  }

  async getSession(sessionId: string): Promise<any | null> {
    const key = `${this.sessionPrefix}${sessionId}`;
    return await this.cache.get(key);
  }

  async updateSession(sessionId: string, sessionData: any): Promise<void> {
    const key = `${this.sessionPrefix}${sessionId}`;
    const existing = await this.cache.get(key);
    if (!existing) throw new Error('Session not found');

    const ttl = await this.cache.ttl(key);
    await this.cache.set(key, { ...existing, ...sessionData }, ttl > 0 ? ttl : undefined);
  }

  async deleteSession(sessionId: string): Promise<void> {
    const key = `${this.sessionPrefix}${sessionId}`;
    await this.cache.delete(key);
  }

  async refreshSession(sessionId: string, ttl?: number): Promise<void> {
    const key = `${this.sessionPrefix}${sessionId}`;
    await this.cache.expire(key, ttl || this.defaultTTL);
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }
}

// ================================================================
// EXPORTS
// ================================================================

export const redisClient = RedisService.getInstance();
export const redisConfig = getRedisConfig();
export const cacheService = new RedisCacheService();
export const sessionStore = new SessionStore();

export default RedisService;
