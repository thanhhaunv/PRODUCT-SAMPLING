#!/usr/bin/env ts-node
// ================================================================
// DATABASE MIGRATION RUNNER
// ================================================================
// Purpose: Execute SQL migrations in sequential order
// Usage: npm run migrate:up / npm run migrate:down
// ================================================================

import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

// ================================================================
// CONFIGURATION
// ================================================================

interface MigrationConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  ssl: boolean;
}

const getMigrationConfig = (): MigrationConfig => {
  return {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    database: process.env.DATABASE_NAME || 'identity_db',
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    ssl: process.env.DATABASE_SSL === 'true',
  };
};

// ================================================================
// MIGRATION TRACKER TABLE
// ================================================================

const MIGRATIONS_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS schema_migrations (
    id SERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL UNIQUE,
    executed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    execution_time_ms INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('SUCCESS', 'FAILED', 'ROLLED_BACK'))
);

CREATE INDEX IF NOT EXISTS idx_schema_migrations_migration_name 
    ON schema_migrations(migration_name);

CREATE INDEX IF NOT EXISTS idx_schema_migrations_executed_at 
    ON schema_migrations(executed_at);
`;

// ================================================================
// MIGRATION RUNNER CLASS
// ================================================================

class MigrationRunner {
  private pool: Pool;
  private migrationsDir: string;

  constructor(config: MigrationConfig) {
    this.pool = new Pool({
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: config.ssl ? { rejectUnauthorized: false } : false,
    });

    this.migrationsDir = path.join(__dirname, '../migrations');
  }

  /**
   * Initialize migrations table
   */
  async initialize(): Promise<void> {
    console.log('🔧 Initializing migration tracking...');
    await this.pool.query(MIGRATIONS_TABLE_SQL);
    console.log('✅ Migration tracking initialized\n');
  }

  /**
   * Get list of executed migrations
   */
  async getExecutedMigrations(): Promise<string[]> {
    const result = await this.pool.query(
      'SELECT migration_name FROM schema_migrations WHERE status = $1 ORDER BY id',
      ['SUCCESS']
    );
    return result.rows.map((row) => row.migration_name);
  }

  /**
   * Get list of pending migrations
   */
  async getPendingMigrations(): Promise<string[]> {
    const allMigrations = await this.getAllMigrationFiles();
    const executed = await this.getExecutedMigrations();
    return allMigrations.filter((m) => !executed.includes(m));
  }

  /**
   * Get all migration files sorted by name
   */
  async getAllMigrationFiles(): Promise<string[]> {
    const files = await readdir(this.migrationsDir);
    return files
      .filter((f) => f.endsWith('.sql'))
      .sort((a, b) => a.localeCompare(b));
  }

  /**
   * Execute a single migration
   */
  async executeMigration(migrationName: string): Promise<void> {
    const filePath = path.join(this.migrationsDir, migrationName);
    const sql = await readFile(filePath, 'utf-8');

    console.log(`📝 Executing migration: ${migrationName}`);
    const startTime = Date.now();

    const client = await this.pool.connect();

    try {
      await client.query('BEGIN');

      // Execute migration SQL
      await client.query(sql);

      // Record migration
      const executionTime = Date.now() - startTime;
      await client.query(
        `INSERT INTO schema_migrations (migration_name, execution_time_ms, status) 
         VALUES ($1, $2, $3)`,
        [migrationName, executionTime, 'SUCCESS']
      );

      await client.query('COMMIT');

      console.log(`✅ Migration successful (${executionTime}ms)\n`);
    } catch (error) {
      await client.query('ROLLBACK');

      // Record failed migration
      await client.query(
        `INSERT INTO schema_migrations (migration_name, execution_time_ms, status) 
         VALUES ($1, $2, $3)`,
        [migrationName, 0, 'FAILED']
      );

      console.error(`❌ Migration failed: ${migrationName}`);
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Run all pending migrations
   */
  async migrateUp(): Promise<void> {
    await this.initialize();

    const pending = await this.getPendingMigrations();

    if (pending.length === 0) {
      console.log('✨ No pending migrations\n');
      return;
    }

    console.log(`📦 Found ${pending.length} pending migration(s):\n`);
    pending.forEach((m, i) => console.log(`   ${i + 1}. ${m}`));
    console.log('');

    for (const migration of pending) {
      await this.executeMigration(migration);
    }

    console.log('🎉 All migrations completed successfully!\n');
  }

  /**
   * Rollback last migration (basic implementation)
   */
  async migrateDown(): Promise<void> {
    console.log('⚠️  Rollback functionality not implemented yet');
    console.log('Manual rollback required for now\n');
    // TODO: Implement rollback logic with down migrations
  }

  /**
   * Show migration status
   */
  async status(): Promise<void> {
    await this.initialize();

    const all = await this.getAllMigrationFiles();
    const executed = await this.getExecutedMigrations();
    const pending = await this.getPendingMigrations();

    console.log('📊 Migration Status\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log(`Total migrations: ${all.length}`);
    console.log(`Executed: ${executed.length}`);
    console.log(`Pending: ${pending.length}\n`);

    if (executed.length > 0) {
      console.log('✅ Executed Migrations:');
      executed.forEach((m, i) => console.log(`   ${i + 1}. ${m}`));
      console.log('');
    }

    if (pending.length > 0) {
      console.log('⏳ Pending Migrations:');
      pending.forEach((m, i) => console.log(`   ${i + 1}. ${m}`));
      console.log('');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  }

  /**
   * Reset database (drop all tables - use with caution!)
   */
  async reset(): Promise<void> {
    console.log('⚠️  WARNING: This will drop ALL tables!');
    console.log('Are you sure? This action cannot be undone.');
    
    // In production, you'd want to add a confirmation prompt here
    
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');

      // Drop all tables in cascade mode
      await client.query(`
        DO $$ DECLARE
            r RECORD;
        BEGIN
            FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
                EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
            END LOOP;
        END $$;
      `);

      await client.query('COMMIT');
      console.log('✅ Database reset completed\n');
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('❌ Database reset failed');
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Close database connection
   */
  async close(): Promise<void> {
    await this.pool.end();
  }
}

// ================================================================
// CLI INTERFACE
// ================================================================

async function main() {
  const command = process.argv[2] || 'up';
  const config = getMigrationConfig();
  const runner = new MigrationRunner(config);

  console.log('🚀 Database Migration Tool\n');
  console.log(`Database: ${config.database}@${config.host}:${config.port}\n`);

  try {
    switch (command) {
      case 'up':
        await runner.migrateUp();
        break;

      case 'down':
        await runner.migrateDown();
        break;

      case 'status':
        await runner.status();
        break;

      case 'reset':
        await runner.reset();
        break;

      default:
        console.error(`Unknown command: ${command}`);
        console.log('\nAvailable commands:');
        console.log('  up     - Run pending migrations');
        console.log('  down   - Rollback last migration');
        console.log('  status - Show migration status');
        console.log('  reset  - Reset database (drop all tables)\n');
        process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  } finally {
    await runner.close();
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

export default MigrationRunner;
