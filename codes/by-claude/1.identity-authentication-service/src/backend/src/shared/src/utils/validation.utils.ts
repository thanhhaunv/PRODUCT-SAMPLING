// ==============================================================================
// VALIDATION UTILITIES - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: SRS-Grok-V2.md - Part05.7 Input Validation + Part05.3.2 Password Hashing
// Purpose: Comprehensive validation utilities for frontend and backend
// ==============================================================================

import type { ValidationResult, ValidationError, FieldValidation, FieldType } from '../types/common.types';

// ==============================================================================
// VALIDATION REGEX PATTERNS
// ==============================================================================

export const VALIDATION_PATTERNS = {
  // Email validation (RFC 5322 compliant)
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  
  // Phone number validation (international format)
  PHONE: /^\+?[1-9]\d{1,14}$/,
  
  // UUID validation (v4)
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  
  // URL validation
  URL: /^https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?)?$/,
  
  // Password validation (at least 8 chars, 1 upper, 1 lower, 1 number, 1 special)
  PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  
  // Username validation (alphanumeric, underscore, hyphen, 3-30 chars)
  USERNAME: /^[a-zA-Z0-9_-]{3,30}$/,
  
  // Name validation (letters, spaces, apostrophes, hyphens)
  NAME: /^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+([ '-][a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+)*$/,
  
  // Alphanumeric only
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  
  // Numbers only
  NUMERIC: /^\d+$/,
  
  // Decimal numbers
  DECIMAL: /^\d+(\.\d+)?$/,
  
  // Hex color
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  
  // Base64
  BASE64: /^[A-Za-z0-9+/]*={0,2}$/,
  
  // JWT token
  JWT: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  
  // IP Address (v4)
  IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  
  // IP Address (v6)
  IPV6: /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
  
  // Credit card number (basic)
  CREDIT_CARD: /^\d{13,19}$/,
  
  // Postal code (flexible)
  POSTAL_CODE: /^[A-Za-z0-9][\w\s-]{1,10}$/,
  
  // Slug (URL-friendly)
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  
  // Version number (semantic versioning)
  VERSION: /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/
} as const;

// ==============================================================================
// VALIDATION CONSTRAINTS
// ==============================================================================

export const VALIDATION_CONSTRAINTS = {
  // String lengths
  EMAIL_MAX_LENGTH: 254,
  EMAIL_MIN_LENGTH: 5,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 100,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
  DESCRIPTION_MAX_LENGTH: 1000,
  TITLE_MAX_LENGTH: 200,
  
  // Numeric constraints
  AGE_MIN: 13,
  AGE_MAX: 150,
  PERCENTAGE_MIN: 0,
  PERCENTAGE_MAX: 100,
  
  // File constraints
  FILE_SIZE_MAX: 10 * 1024 * 1024, // 10MB
  IMAGE_SIZE_MAX: 5 * 1024 * 1024, // 5MB
  
  // Array constraints
  ARRAY_MIN_LENGTH: 1,
  ARRAY_MAX_LENGTH: 100,
  
  // Rate limiting
  LOGIN_ATTEMPTS_MAX: 5,
  OTP_ATTEMPTS_MAX: 3,
  
  // Phone number constraints
  PHONE_MIN_LENGTH: 7,
  PHONE_MAX_LENGTH: 15
} as const;

// ==============================================================================
// ERROR MESSAGES
// ==============================================================================

export const VALIDATION_MESSAGES = {
  // Required field errors
  REQUIRED: 'This field is required',
  
  // Type validation errors
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_URL: 'Please enter a valid URL',
  INVALID_UUID: 'Invalid UUID format',
  INVALID_NUMBER: 'Please enter a valid number',
  INVALID_DATE: 'Please enter a valid date',
  INVALID_BOOLEAN: 'Invalid boolean value',
  
  // String validation errors
  TOO_SHORT: (min: number) => `Must be at least ${min} characters long`,
  TOO_LONG: (max: number) => `Must be no more than ${max} characters long`,
  INVALID_FORMAT: 'Invalid format',
  INVALID_CHARACTERS: 'Contains invalid characters',
  
  // Numeric validation errors
  TOO_SMALL: (min: number) => `Must be at least ${min}`,
  TOO_LARGE: (max: number) => `Must be no more than ${max}`,
  NOT_INTEGER: 'Must be a whole number',
  NOT_POSITIVE: 'Must be a positive number',
  
  // Password validation errors
  PASSWORD_TOO_WEAK: 'Password is too weak',
  PASSWORD_NO_UPPERCASE: 'Password must contain at least one uppercase letter',
  PASSWORD_NO_LOWERCASE: 'Password must contain at least one lowercase letter',
  PASSWORD_NO_NUMBER: 'Password must contain at least one number',
  PASSWORD_NO_SPECIAL: 'Password must contain at least one special character',
  PASSWORD_COMMON: 'Password is too common, please choose a different one',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  
  // Array validation errors
  ARRAY_TOO_SHORT: (min: number) => `Must contain at least ${min} items`,
  ARRAY_TOO_LONG: (max: number) => `Must contain no more than ${max} items`,
  INVALID_ARRAY: 'Must be an array',
  
  // File validation errors
  FILE_TOO_LARGE: (max: string) => `File size must not exceed ${max}`,
  INVALID_FILE_TYPE: (types: string[]) => `File type must be one of: ${types.join(', ')}`,
  FILE_REQUIRED: 'Please select a file',
  
  // Custom validation errors
  ALREADY_EXISTS: 'This value already exists',
  NOT_FOUND: 'Value not found',
  INVALID_CREDENTIALS: 'Invalid credentials',
  EXPIRED: 'This value has expired',
  
  // Role and permission errors
  INVALID_ROLE: 'Invalid role specified',
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions',
  ROLE_CONFLICT: 'Role conflict detected',
  
  // Business logic errors
  ACCOUNT_LOCKED: 'Account is locked',
  ACCOUNT_SUSPENDED: 'Account is suspended',
  EMAIL_NOT_VERIFIED: 'Email address is not verified',
  PHONE_NOT_VERIFIED: 'Phone number is not verified'
} as const;

// ==============================================================================
// CORE VALIDATION FUNCTIONS
// ==============================================================================

/**
 * Check if value is empty (null, undefined, empty string, empty array)
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Check if value is a valid string with minimum length
 */
export const isValidString = (value: unknown, minLength = 0, maxLength = Infinity): boolean => {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
};

/**
 * Check if value is a valid number within range
 */
export const isValidNumber = (value: unknown, min = -Infinity, max = Infinity): boolean => {
  const num = Number(value);
  return !isNaN(num) && isFinite(num) && num >= min && num <= max;
};

/**
 * Check if value is a valid integer within range
 */
export const isValidInteger = (value: unknown, min = -Infinity, max = Infinity): boolean => {
  return isValidNumber(value, min, max) && Number.isInteger(Number(value));
};

/**
 * Check if value is a valid boolean
 */
export const isValidBoolean = (value: unknown): boolean => {
  return typeof value === 'boolean' || value === 'true' || value === 'false';
};

/**
 * Check if value is a valid date
 */
export const isValidDate = (value: unknown): boolean => {
  if (value instanceof Date) return !isNaN(value.getTime());
  if (typeof value === 'string') return !isNaN(Date.parse(value));
  return false;
};

/**
 * Check if value is a valid array with length constraints
 */
export const isValidArray = (value: unknown, minLength = 0, maxLength = Infinity): boolean => {
  return Array.isArray(value) && value.length >= minLength && value.length <= maxLength;
};

// ==============================================================================
// SPECIFIC VALIDATION FUNCTIONS
// ==============================================================================

/**
 * Validate email address
 */
export const isValidEmail = (email: unknown): boolean => {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim().toLowerCase();
  return (
    trimmed.length >= VALIDATION_CONSTRAINTS.EMAIL_MIN_LENGTH &&
    trimmed.length <= VALIDATION_CONSTRAINTS.EMAIL_MAX_LENGTH &&
    VALIDATION_PATTERNS.EMAIL.test(trimmed)
  );
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone: unknown): boolean => {
  if (typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return (
    cleaned.length >= VALIDATION_CONSTRAINTS.PHONE_MIN_LENGTH &&
    cleaned.length <= VALIDATION_CONSTRAINTS.PHONE_MAX_LENGTH &&
    VALIDATION_PATTERNS.PHONE.test(cleaned)
  );
};

/**
 * Validate URL
 */
export const isValidUrl = (url: unknown): boolean => {
  if (typeof url !== 'string') return false;
  return VALIDATION_PATTERNS.URL.test(url.trim());
};

/**
 * Validate UUID
 */
export const isValidUuid = (uuid: unknown): boolean => {
  if (typeof uuid !== 'string') return false;
  return VALIDATION_PATTERNS.UUID.test(uuid.trim());
};

/**
 * Validate password strength
 */
export const validatePassword = (password: unknown): ValidationResult => {
  const errors: ValidationError[] = [];
  
  if (typeof password !== 'string') {
    errors.push({
      field: 'password',
      code: 'INVALID_TYPE',
      message: 'Password must be a string',
      value: password
    });
    return { isValid: false, errors, warnings: [] };
  }
  
  const pwd = password.trim();
  
  // Check minimum length
  if (pwd.length < VALIDATION_CONSTRAINTS.PASSWORD_MIN_LENGTH) {
    errors.push({
      field: 'password',
      code: 'TOO_SHORT',
      message: VALIDATION_MESSAGES.TOO_SHORT(VALIDATION_CONSTRAINTS.PASSWORD_MIN_LENGTH),
      value: pwd
    });
  }
  
  // Check maximum length
  if (pwd.length > VALIDATION_CONSTRAINTS.PASSWORD_MAX_LENGTH) {
    errors.push({
      field: 'password',
      code: 'TOO_LONG',
      message: VALIDATION_MESSAGES.TOO_LONG(VALIDATION_CONSTRAINTS.PASSWORD_MAX_LENGTH),
      value: pwd
    });
  }
  
  // Check for uppercase letter
  if (!/[A-Z]/.test(pwd)) {
    errors.push({
      field: 'password',
      code: 'NO_UPPERCASE',
      message: VALIDATION_MESSAGES.PASSWORD_NO_UPPERCASE,
      value: pwd
    });
  }
  
  // Check for lowercase letter
  if (!/[a-z]/.test(pwd)) {
    errors.push({
      field: 'password',
      code: 'NO_LOWERCASE',
      message: VALIDATION_MESSAGES.PASSWORD_NO_LOWERCASE,
      value: pwd
    });
  }
  
  // Check for number
  if (!/\d/.test(pwd)) {
    errors.push({
      field: 'password',
      code: 'NO_NUMBER',
      message: VALIDATION_MESSAGES.PASSWORD_NO_NUMBER,
      value: pwd
    });
  }
  
  // Check for special character
  if (!/[@$!%*?&]/.test(pwd)) {
    errors.push({
      field: 'password',
      code: 'NO_SPECIAL',
      message: VALIDATION_MESSAGES.PASSWORD_NO_SPECIAL,
      value: pwd
    });
  }
  
  return { isValid: errors.length === 0, errors, warnings: [] };
};

/**
 * Validate username
 */
export const isValidUsername = (username: unknown): boolean => {
  if (typeof username !== 'string') return false;
  const trimmed = username.trim();
  return (
    trimmed.length >= VALIDATION_CONSTRAINTS.USERNAME_MIN_LENGTH &&
    trimmed.length <= VALIDATION_CONSTRAINTS.USERNAME_MAX_LENGTH &&
    VALIDATION_PATTERNS.USERNAME.test(trimmed)
  );
};

/**
 * Validate name (first name, last name)
 */
export const isValidName = (name: unknown): boolean => {
  if (typeof name !== 'string') return false;
  const trimmed = name.trim();
  return (
    trimmed.length >= VALIDATION_CONSTRAINTS.NAME_MIN_LENGTH &&
    trimmed.length <= VALIDATION_CONSTRAINTS.NAME_MAX_LENGTH &&
    VALIDATION_PATTERNS.NAME.test(trimmed)
  );
};

// ==============================================================================
// SANITIZATION FUNCTIONS
// ==============================================================================

/**
 * Sanitize string by trimming and normalizing
 */
export const sanitizeString = (value: unknown): string => {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ');
};

/**
 * Sanitize email
 */
export const sanitizeEmail = (email: unknown): string => {
  if (typeof email !== 'string') return '';
  return email.trim().toLowerCase();
};

/**
 * Sanitize phone number
 */
export const sanitizePhone = (phone: unknown): string => {
  if (typeof phone !== 'string') return '';
  return phone.replace(/[\s\-\(\)]/g, '');
};

/**
 * Sanitize HTML to prevent XSS
 */
export const sanitizeHtml = (html: unknown): string => {
  if (typeof html !== 'string') return '';
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Sanitize for SQL injection prevention
 */
export const sanitizeSql = (value: unknown): string => {
  if (typeof value !== 'string') return '';
  return value.replace(/'/g, "''").replace(/;/g, '');
};

// ==============================================================================
// FIELD VALIDATION FUNCTION
// ==============================================================================

/**
 * Validate a single field based on validation rules
 */
export const validateField = (
  value: unknown,
  rules: FieldValidation,
  fieldName = 'field'
): ValidationResult => {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];
  
  // Check required
  if (rules.required && isEmpty(value)) {
    errors.push({
      field: fieldName,
      code: 'REQUIRED',
      message: VALIDATION_MESSAGES.REQUIRED,
      value
    });
    return { isValid: false, errors, warnings };
  }
  
  // Skip further validation if value is empty and not required
  if (isEmpty(value)) {
    return { isValid: true, errors, warnings };
  }
  
  // Type validation
  if (rules.type) {
    switch (rules.type) {
      case FieldType.STRING:
        if (typeof value !== 'string') {
          errors.push({
            field: fieldName,
            code: 'INVALID_TYPE',
            message: 'Must be a string',
            value
          });
        }
        break;
        
      case FieldType.NUMBER:
        if (!isValidNumber(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_NUMBER',
            message: VALIDATION_MESSAGES.INVALID_NUMBER,
            value
          });
        }
        break;
        
      case FieldType.EMAIL:
        if (!isValidEmail(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_EMAIL',
            message: VALIDATION_MESSAGES.INVALID_EMAIL,
            value
          });
        }
        break;
        
      case FieldType.PHONE:
        if (!isValidPhone(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_PHONE',
            message: VALIDATION_MESSAGES.INVALID_PHONE,
            value
          });
        }
        break;
        
      case FieldType.URL:
        if (!isValidUrl(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_URL',
            message: VALIDATION_MESSAGES.INVALID_URL,
            value
          });
        }
        break;
        
      case FieldType.UUID:
        if (!isValidUuid(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_UUID',
            message: VALIDATION_MESSAGES.INVALID_UUID,
            value
          });
        }
        break;
        
      case FieldType.DATE:
        if (!isValidDate(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_DATE',
            message: VALIDATION_MESSAGES.INVALID_DATE,
            value
          });
        }
        break;
        
      case FieldType.BOOLEAN:
        if (!isValidBoolean(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_BOOLEAN',
            message: VALIDATION_MESSAGES.INVALID_BOOLEAN,
            value
          });
        }
        break;
        
      case FieldType.ARRAY:
        if (!Array.isArray(value)) {
          errors.push({
            field: fieldName,
            code: 'INVALID_ARRAY',
            message: VALIDATION_MESSAGES.INVALID_ARRAY,
            value
          });
        }
        break;
        
      case FieldType.PASSWORD:
        const passwordResult = validatePassword(value);
        errors.push(...passwordResult.errors);
        break;
    }
  }
  
  // Length validation for strings
  if (typeof value === 'string') {
    if (rules.minLength !== undefined && value.length < rules.minLength) {
      errors.push({
        field: fieldName,
        code: 'TOO_SHORT',
        message: VALIDATION_MESSAGES.TOO_SHORT(rules.minLength),
        value
      });
    }
    
    if (rules.maxLength !== undefined && value.length > rules.maxLength) {
      errors.push({
        field: fieldName,
        code: 'TOO_LONG',
        message: VALIDATION_MESSAGES.TOO_LONG(rules.maxLength),
        value
      });
    }
  }
  
  // Numeric range validation
  if (typeof value === 'number') {
    if (rules.min !== undefined && value < rules.min) {
      errors.push({
        field: fieldName,
        code: 'TOO_SMALL',
        message: VALIDATION_MESSAGES.TOO_SMALL(rules.min),
        value
      });
    }
    
    if (rules.max !== undefined && value > rules.max) {
      errors.push({
        field: fieldName,
        code: 'TOO_LARGE',
        message: VALIDATION_MESSAGES.TOO_LARGE(rules.max),
        value
      });
    }
  }
  
  // Pattern validation
  if (rules.pattern && typeof value === 'string') {
    if (!rules.pattern.test(value)) {
      errors.push({
        field: fieldName,
        code: 'INVALID_FORMAT',
        message: VALIDATION_MESSAGES.INVALID_FORMAT,
        value
      });
    }
  }
  
  // Custom validation
  if (rules.custom) {
    const customResult = rules.custom(value);
    errors.push(...customResult.errors);
    warnings.push(...customResult.warnings);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

// ==============================================================================
// UTILITY FUNCTIONS
// ==============================================================================

/**
 * Format file size for display
 */
export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
};

/**
 * Check if file type is allowed
 */
export const isValidFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type) || 
         allowedTypes.some(type => file.name.toLowerCase().endsWith(type.replace('image/', '.')));
};

/**
 * Validate file size
 */
export const isValidFileSize = (file: File, maxSize: number): boolean => {
  return file.size <= maxSize;
};

/**
 * Generate validation error for field
 */
export const createValidationError = (
  field: string,
  code: string,
  message: string,
  value?: unknown
): ValidationError => ({
  field,
  code,
  message,
  value
});

// ==============================================================================
// EXPORT ALL VALIDATION UTILITIES
// ==============================================================================

export {
  // Patterns and constraints
  VALIDATION_PATTERNS,
  VALIDATION_CONSTRAINTS,
  VALIDATION_MESSAGES,
  
  // Core validation functions
  isEmpty,
  isValidString,
  isValidNumber,
  isValidInteger,
  isValidBoolean,
  isValidDate,
  isValidArray,
  
  // Specific validation functions
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isValidUuid,
  validatePassword,
  isValidUsername,
  isValidName,
  
  // Sanitization functions
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeHtml,
  sanitizeSql,
  
  // Field validation
  validateField,
  
  // Utility functions
  formatFileSize,
  isValidFileType,
  isValidFileSize,
  createValidationError
};
