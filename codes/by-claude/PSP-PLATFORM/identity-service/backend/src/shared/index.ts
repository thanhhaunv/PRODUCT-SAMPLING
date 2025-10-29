/**
 * Shared Module - Main Index
 * 
 * Export all shared modules for convenient importing
 * Usage Examples:
 * 
 * // Import all from main shared module
 * import { Result, Entity, UserInfo, ErrorCodes, ValidationUtils } from '../shared';
 * 
 * // Or import from specific sub-modules
 * import { Result } from '../shared/core';
 * import { UserInfo } from '../shared/types';
 * import { ValidationRules } from '../shared/constants';
 * import { CryptoUtils } from '../shared/utils';
 */

// ========================
// CORE DOMAIN PATTERNS
// ========================
export * from './core';

// ========================
// TYPE DEFINITIONS
// ========================
export * from './types';

// ========================
// CONSTANTS & CONFIGURATION
// ========================
export * from './constants';

// ========================
// UTILITY FUNCTIONS
// ========================
export * from './utils';

// ========================
// CONVENIENCE RE-EXPORTS
// ========================

// Most commonly used core patterns
export { Result } from './core/Result';
export { Entity } from './core/Entity';
export { AggregateRoot } from './core/AggregateRoot';
export { ValueObject } from './core/ValueObject';
export { DomainEvent } from './core/DomainEvent';
export { AppError } from './core/AppError';
export { Guard } from './core/Guard';
export { Logger } from './core/Logger';

// Most commonly used types
export type { 
  ApiResponse,
  UserInfo,
  PaginationResponse,
  BaseRequest,
  ErrorDetail,
  DomainEvent as DomainEventType,
  BaseEntity
} from './types';

// Most commonly used constants
export { 
  ErrorCodes,
  ErrorMessages,
  HttpStatusCodes,
  ValidationRules,
  SystemConstants,
  EventNames
} from './constants';

// Most commonly used utilities
export { 
  DateUtils,
  StringUtils,
  ValidationUtils,
  CryptoUtils
} from './utils';
