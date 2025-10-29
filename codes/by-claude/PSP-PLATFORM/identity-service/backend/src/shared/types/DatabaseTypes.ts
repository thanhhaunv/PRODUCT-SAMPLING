/**
 * DatabaseTypes.ts - Database-Related Type Definitions
 * 
 * SRS Reference: Part07.1 Data Model Overview
 * Architecture: Database Abstraction Layer Types
 * 
 * Purpose: Type definitions for database operations and entities
 * Usage: Import for type-safe database operations with Prisma/TypeORM
 */

import { AuditFields, SoftDeleteFields, EntityMetadata } from './CommonTypes';

// ========================
// DATABASE OPERATION TYPES
// ========================

export type DatabaseOperation = 'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'UPSERT';

export type QueryOperator = 
  | 'equals'
  | 'not' 
  | 'in'
  | 'notIn'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'between'
  | 'isNull'
  | 'isNotNull';

export type SortDirection = 'asc' | 'desc';

export type JoinType = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL';

// ========================
// QUERY BUILDING TYPES
// ========================

export interface WhereCondition {
  field: string;
  operator: QueryOperator;
  value: any;
  logicalOperator?: 'AND' | 'OR';
}

export interface SortCondition {
  field: string;
  direction: SortDirection;
}

export interface JoinCondition {
  type: JoinType;
  table: string;
  on: {
    left: string;
    right: string;
  };
  alias?: string;
}

export interface QueryOptions {
  where?: WhereCondition[];
  orderBy?: SortCondition[];
  limit?: number;
  offset?: number;
  include?: string[];
  select?: string[];
  distinct?: boolean;
  groupBy?: string[];
  having?: WhereCondition[];
}

export interface TransactionOptions {
  isolationLevel?: 'READ_UNCOMMITTED' | 'READ_COMMITTED' | 'REPEATABLE_READ' | 'SERIALIZABLE';
  timeout?: number;
  readOnly?: boolean;
}

// ========================
// DATABASE RESULT TYPES
// ========================

export interface QueryResult<T> {
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
  hasMore?: boolean;
}

export interface SingleResult<T> {
  data: T | null;
  found: boolean;
}

export interface InsertResult {
  id: string;
  affected: number;
  created: boolean;
}

export interface UpdateResult {
  affected: number;
  updated: boolean;
  modifiedFields?: string[];
}

export interface DeleteResult {
  affected: number;
  deleted: boolean;
}

export interface BulkOperationResult {
  total: number;
  processed: number;
  succeeded: number;
  failed: number;
  errors?: Array<{
    index: number;
    error: string;
    data?: any;
  }>;
}

// ========================
// DATABASE ENTITY TYPES
// ========================

export interface BaseEntity extends EntityMetadata, AuditFields {}

export interface SoftDeletableEntity extends BaseEntity, SoftDeleteFields {}

export interface VersionedEntity extends BaseEntity {
  version: number;
  lastModified: Date;
}

export interface TimestampedEntity {
  createdAt: Date;
  updatedAt: Date;
}

// ========================
// USER DOMAIN DATABASE TYPES
// ========================

export interface UserEntity extends SoftDeletableEntity {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  saltRounds: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  emailVerifiedAt?: Date;
  phoneVerifiedAt?: Date;
  lastLoginAt?: Date;
  failedLoginAttempts: number;
  lockedUntil?: Date;
  passwordChangedAt?: Date;
  profilePictureUrl?: string;
  timezone?: string;
  locale?: string;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  backupCodes?: string[];
  preferences?: any; // JSON
  metadata?: any; // JSON
}

export interface RoleEntity extends BaseEntity {
  id: string;
  name: string;
  description?: string;
  isSystem: boolean;
  isActive: boolean;
  permissions: PermissionEntity[];
  users: UserRoleEntity[];
}

export interface PermissionEntity extends BaseEntity {
  id: string;
  name: string;
  description?: string;
  resource: string;
  action: string;
  conditions?: any; // JSON
  isSystem: boolean;
  roles: RoleEntity[];
}

export interface UserRoleEntity extends BaseEntity {
  id: string;
  userId: string;
  roleId: string;
  assignedBy: string;
  assignedAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  user: UserEntity;
  role: RoleEntity;
}

export interface SessionEntity extends BaseEntity {
  id: string;
  userId: string;
  tokenHash: string;
  refreshTokenHash?: string;
  deviceId?: string;
  ipAddress?: string;
  userAgent?: string;
  platform?: string;
  location?: any; // JSON
  isActive: boolean;
  expiresAt: Date;
  lastActivityAt: Date;
  terminatedAt?: Date;
  terminatedBy?: string;
  terminationReason?: string;
  user: UserEntity;
}

export interface OTPEntity extends BaseEntity {
  id: string;
  userId: string;
  code: string;
  type: 'EMAIL' | 'SMS';
  purpose: 'VERIFICATION' | 'RESET_PASSWORD' | 'TWO_FACTOR';
  contact: string; // email or phone
  expiresAt: Date;
  attemptCount: number;
  maxAttempts: number;
  isUsed: boolean;
  usedAt?: Date;
  verifiedAt?: Date;
  user: UserEntity;
}

export interface AuditLogEntity extends BaseEntity {
  id: string;
  entityType: string;
  entityId: string;
  operation: DatabaseOperation;
  actorId: string;
  actorType: 'USER' | 'SYSTEM' | 'SERVICE';
  changes?: any; // JSON - before/after values
  reason?: string;
  ipAddress?: string;
  userAgent?: string;
  sessionId?: string;
  correlationId?: string;
  timestamp: Date;
}

export interface LoginAttemptEntity extends BaseEntity {
  id: string;
  userId?: string;
  email: string;
  ipAddress?: string;
  userAgent?: string;
  success: boolean;
  failureReason?: string;
  attemptedAt: Date;
  location?: any; // JSON
  deviceFingerprint?: string;
}

// ========================
// REPOSITORY INTERFACES
// ========================

export interface BaseRepository<T extends BaseEntity> {
  findById(id: string, options?: QueryOptions): Promise<SingleResult<T>>;
  findOne(conditions: WhereCondition[], options?: QueryOptions): Promise<SingleResult<T>>;
  findMany(conditions?: WhereCondition[], options?: QueryOptions): Promise<QueryResult<T>>;
  create(data: Partial<T>): Promise<InsertResult>;
  update(id: string, data: Partial<T>): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
  softDelete(id: string, deletedBy?: string): Promise<UpdateResult>;
  restore(id: string): Promise<UpdateResult>;
  exists(conditions: WhereCondition[]): Promise<boolean>;
  count(conditions?: WhereCondition[]): Promise<number>;
}

export interface QueryableRepository<T extends BaseEntity> extends BaseRepository<T> {
  query(sql: string, parameters?: any[]): Promise<QueryResult<T>>;
  rawQuery(sql: string, parameters?: any[]): Promise<any[]>;
}

export interface TransactionalRepository<T extends BaseEntity> extends BaseRepository<T> {
  withTransaction<R>(
    callback: (repo: BaseRepository<T>) => Promise<R>,
    options?: TransactionOptions
  ): Promise<R>;
}

export interface CacheableRepository<T extends BaseEntity> extends BaseRepository<T> {
  findByIdCached(id: string, ttl?: number): Promise<SingleResult<T>>;
  invalidateCache(id: string): Promise<void>;
  clearCache(): Promise<void>;
}

// ========================
// MIGRATION TYPES
// ========================

export interface MigrationInfo {
  version: string;
  name: string;
  description?: string;
  appliedAt?: Date;
  rollbackQuery?: string;
  checksum: string;
}

export interface MigrationResult {
  version: string;
  success: boolean;
  executionTime: number;
  error?: string;
}

// ========================
// DATABASE CONNECTION TYPES
// ========================

export interface DatabaseConnectionConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: {
    enabled: boolean;
    ca?: string;
    cert?: string;
    key?: string;
    rejectUnauthorized?: boolean;
  };
  pool?: {
    min: number;
    max: number;
    acquireTimeoutMillis: number;
    idleTimeoutMillis: number;
    createTimeoutMillis: number;
    destroyTimeoutMillis: number;
  };
  logging?: {
    enabled: boolean;
    level: 'error' | 'warn' | 'info' | 'debug';
    logQueries: boolean;
    logQueryParameters: boolean;
  };
  timezone?: string;
  charset?: string;
}

export interface ConnectionPool {
  totalConnections: number;
  activeConnections: number;
  idleConnections: number;
  waitingRequests: number;
}

export interface DatabaseHealth {
  isConnected: boolean;
  connectionPool: ConnectionPool;
  lastPingTime?: Date;
  responseTime?: number;
  version?: string;
  uptime?: number;
}

// ========================
// PERFORMANCE MONITORING TYPES
// ========================

export interface QueryPerformance {
  query: string;
  parameters?: any[];
  executionTime: number;
  rowsAffected?: number;
  timestamp: Date;
  success: boolean;
  error?: string;
}

export interface DatabaseMetrics {
  totalQueries: number;
  averageQueryTime: number;
  slowQueries: number;
  failedQueries: number;
  connectionPoolUsage: number;
  cacheHitRate?: number;
  indexUsage?: Record<string, number>;
}

// ========================
// BACKUP & RESTORE TYPES
// ========================

export interface BackupConfig {
  schedule?: string; // cron expression
  retentionDays: number;
  compression: boolean;
  encryptionKey?: string;
  excludeTables?: string[];
  includeTables?: string[];
}

export interface BackupInfo {
  backupId: string;
  filename: string;
  size: number;
  createdAt: Date;
  isCompressed: boolean;
  isEncrypted: boolean;
  checksum: string;
  metadata?: any;
}

export interface RestoreResult {
  backupId: string;
  success: boolean;
  restoredTables: string[];
  restoredRecords: number;
  executionTime: number;
  warnings?: string[];
  errors?: string[];
}

// ========================
// TYPE GUARDS
// ========================

export const DatabaseTypeGuards = {
  isBaseEntity: (obj: any): obj is BaseEntity => 
    obj && obj.id && obj.createdAt && obj.updatedAt,
  
  isSoftDeletableEntity: (obj: any): obj is SoftDeletableEntity => 
    obj && typeof obj.isDeleted === 'boolean',
  
  isVersionedEntity: (obj: any): obj is VersionedEntity => 
    obj && typeof obj.version === 'number',
  
  isValidQueryOperator: (op: string): op is QueryOperator => 
    ['equals', 'not', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'contains', 'startsWith', 'endsWith', 'between', 'isNull', 'isNotNull'].includes(op),
  
  isValidSortDirection: (dir: string): dir is SortDirection => 
    ['asc', 'desc'].includes(dir),
  
  hasRequiredFields: <T extends BaseEntity>(obj: any, fields: (keyof T)[]): obj is T => 
    fields.every(field => obj && obj[field] !== undefined)
};
