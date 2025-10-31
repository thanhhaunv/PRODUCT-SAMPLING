/**
 * @fileoverview Utility functions export
 * @package @psp/shared-core  
 * @version 1.2.0
 * 
 * Exports all utility functions:
 * - Logger: Winston-based logging utilities
 * - Validation: Class-validator helpers and custom validators
 * - Crypto: Bcrypt hashing and encryption utilities
 * - Guard: Input validation and type guards
 */

// Logger utilities
export {
  createLogger,
  getLogger,
  logInfo,
  logError,
  logWarn,
  logDebug
} from './logger.utils';

// Validation utilities  
export {
  validateObject,
  validateEmail,
  validatePhone,
  validatePassword,
  sanitizeInput,
  isValidUUID
} from './validation.utils';

// Crypto utilities
export {
  hashPassword,
  comparePassword,
  generateSalt,
  encryptData,
  decryptData,
  generateSecureToken
} from './crypto.utils';

// Guard utilities
export {
  Guard,
  isNullOrUndefined,
  isEmptyString,
  isValidNumber,
  isValidDate,
  againstNullOrUndefined,
  againstEmptyString,
  againstInvalidLength
} from './guard.utils';

// Type exports for better TypeScript support
export type {
  LoggerOptions,
  LogLevel,
  LoggerInstance
} from './logger.utils';

export type {
  ValidationResult,
  ValidationOptions,
  EmailValidationOptions,
  PhoneValidationOptions,
  PasswordValidationOptions
} from './validation.utils';

export type {
  HashOptions,
  EncryptionOptions,
  TokenGenerationOptions
} from './crypto.utils';

export type {
  GuardResult,
  GuardArgumentCollection
} from './guard.utils';
