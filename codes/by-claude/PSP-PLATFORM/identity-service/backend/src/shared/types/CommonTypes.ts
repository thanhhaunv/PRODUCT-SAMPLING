/**
 * CommonTypes.ts - Common Type Definitions
 * 
 * SRS Reference: Part02.8 Technical Requirements
 * Architecture: Shared Types for Cross-Service Consistency
 * 
 * Purpose: Common types used across all microservices
 * Usage: Import these types in domain entities, DTOs, APIs
 */

import { UniqueEntityId } from '../core/UniqueEntityId';

// ========================
// BASIC PRIMITIVE TYPES
// ========================

export type ID = string;
export type Timestamp = Date;
export type Email = string;
export type PhoneNumber = string;
export type URL = string;
export type JSONString = string;

// ========================
// PAGINATION TYPES
// ========================

export interface PaginationRequest {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface CursorPaginationRequest {
  limit: number;
  cursor?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export interface CursorPaginationResponse<T> {
  data: T[];
  pagination: {
    limit: number;
    nextCursor?: string;
    previousCursor?: string;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// ========================
// FILTER & SEARCH TYPES
// ========================

export interface SearchRequest {
  query: string;
  filters?: Record<string, any>;
  pagination?: PaginationRequest;
}

export interface FilterOption {
  field: string;
  operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'notIn';
  value: any;
}

export interface SortOption {
  field: string;
  direction: 'ASC' | 'DESC';
}

// ========================
// AUDIT & METADATA TYPES
// ========================

export interface AuditFields {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy?: ID;
  updatedBy?: ID;
}

export interface SoftDeleteFields {
  deletedAt?: Timestamp;
  deletedBy?: ID;
  isDeleted: boolean;
}

export interface VersionedEntity {
  version: number;
  lastModified: Timestamp;
}

export interface EntityMetadata {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  version?: number;
}

// ========================
// REQUEST/RESPONSE PATTERNS
// ========================

export interface BaseRequest {
  correlationId?: string;
  userId?: ID;
  sessionId?: ID;
  timestamp?: Timestamp;
}

export interface BaseResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    correlationId?: string;
    timestamp: Timestamp;
    processingTimeMs?: number;
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
  code?: string;
}

// ========================
// STATUS & STATE TYPES
// ========================

export type EntityStatus = 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'SUSPENDED' | 'DELETED';

export type ProcessingStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

export type OperationResult = 'SUCCESS' | 'FAILURE' | 'PARTIAL_SUCCESS';

// ========================
// AUTHENTICATION & AUTHORIZATION
// ========================

export interface UserContext {
  userId: ID;
  email: Email;
  roles: string[];
  permissions: string[];
  sessionId?: ID;
  correlationId?: string;
}

export interface TokenPayload {
  userId: ID;
  email: Email;
  roles: string[];
  sessionId: ID;
  iat: number;
  exp: number;
  iss: string;
  aud: string;
}

export interface RefreshTokenPayload {
  userId: ID;
  sessionId: ID;
  tokenVersion: number;
  iat: number;
  exp: number;
}

// ========================
// EVENT TYPES
// ========================

export interface BaseEvent {
  eventId: ID;
  eventType: string;
  occurredOn: Timestamp;
  aggregateId: ID;
  aggregateType: string;
  eventVersion: string;
  correlationId?: string;
  causationId?: string;
  userId?: ID;
}

export interface DomainEventPayload {
  [key: string]: any;
}

// ========================
// CONFIGURATION TYPES
// ========================

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  poolSize?: number;
  connectionTimeout?: number;
}

export interface CacheConfig {
  host: string;
  port: number;
  password?: string;
  ttl: number;
  maxMemory?: string;
}

export interface JWTConfig {
  secret: string;
  accessTokenExpiry: string;
  refreshTokenExpiry: string;
  issuer: string;
  audience: string;
}

// ========================
// FILE & UPLOAD TYPES
// ========================

export interface FileUploadInfo {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  uploadedAt: Timestamp;
  uploadedBy: ID;
}

export interface ImageInfo extends FileUploadInfo {
  width: number;
  height: number;
  format: 'jpeg' | 'png' | 'gif' | 'webp';
}

// ========================
// NOTIFICATION TYPES
// ========================

export interface NotificationPayload {
  recipientId: ID;
  type: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP';
  title: string;
  message: string;
  data?: Record<string, any>;
  priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
}

// ========================
// GEOLOCATION TYPES
// ========================

export interface Coordinates {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates?: Coordinates;
}

// ========================
// UTILITY TYPES
// ========================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type NonEmptyArray<T> = [T, ...T[]];
export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];

// ========================
// RESULT WRAPPER TYPE
// ========================

export type AsyncResult<T> = Promise<Result<T>>;

// Re-export from core for convenience
export type { Result } from '../core/Result';

// ========================
// TYPE GUARDS
// ========================

export const TypeGuards = {
  isString: (value: any): value is string => typeof value === 'string',
  isNumber: (value: any): value is number => typeof value === 'number' && !isNaN(value),
  isBoolean: (value: any): value is boolean => typeof value === 'boolean',
  isObject: (value: any): value is object => value !== null && typeof value === 'object',
  isArray: (value: any): value is any[] => Array.isArray(value),
  isDate: (value: any): value is Date => value instanceof Date,
  isDefined: <T>(value: T | undefined | null): value is T => value !== undefined && value !== null,
  isEmail: (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  isUUID: (value: string): boolean => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value),
  isPhoneNumber: (value: string): boolean => /^\+?[1-9]\d{1,14}$/.test(value.replace(/[\s\-\(\)]/g, ''))
};
