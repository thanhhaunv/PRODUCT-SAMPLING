/**
 * ValidationRules.ts - Validation Constants and Rules
 * 
 * SRS Reference: Part05.7 Input Validation
 * Purpose: Centralized validation rules and constants
 * Usage: Import for consistent validation across all services
 */

// ========================
// FIELD LENGTH CONSTRAINTS
// ========================

export const FieldLengths = {
  // User fields
  EMAIL_MIN: 5,
  EMAIL_MAX: 254,
  USERNAME_MIN: 3,
  USERNAME_MAX: 50,
  PASSWORD_MIN: 8,
  PASSWORD_MAX: 128,
  FIRST_NAME_MAX: 50,
  LAST_NAME_MAX: 50,
  FULL_NAME_MAX: 100,
  
  // Phone and contact
  PHONE_MIN: 10,
  PHONE_MAX: 20,
  
  // Content fields
  TITLE_MAX: 200,
  DESCRIPTION_MAX: 1000,
  COMMENT_MAX: 500,
  MESSAGE_MAX: 2000,
  
  // System fields
  UUID_LENGTH: 36,
  OTP_CODE_LENGTH: 6,
  SESSION_ID_LENGTH: 32,
  
  // File fields
  FILENAME_MAX: 255,
  FILE_PATH_MAX: 500,
  
  // URL fields
  URL_MAX: 2048,
} as const;

// ========================
// REGEX PATTERNS
// ========================

export const RegexPatterns = {
  // Email validation (RFC 5322 compliant)
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  
  // Phone validation (international format)
  PHONE: /^\+?[1-9]\d{1,14}$/,
  PHONE_LOOSE: /^[\+]?[0-9\s\-\(\)]{10,20}$/,
  
  // Password validation (strong password)
  PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  PASSWORD_MEDIUM: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
  
  // Username validation
  USERNAME: /^[a-zA-Z0-9_.-]{3,50}$/,
  USERNAME_STRICT: /^[a-zA-Z][a-zA-Z0-9_.-]{2,49}$/,
  
  // Name validation
  NAME: /^[a-zA-ZÀ-ÿ\s\-'\.]{1,100}$/,
  FIRST_NAME: /^[a-zA-ZÀ-ÿ\-'\.]{1,50}$/,
  LAST_NAME: /^[a-zA-ZÀ-ÿ\s\-'\.]{1,50}$/,
  
  // UUID validation
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  
  // Numeric validation
  INTEGER: /^-?\d+$/,
  POSITIVE_INTEGER: /^\d+$/,
  DECIMAL: /^-?\d+(\.\d+)?$/,
  POSITIVE_DECIMAL: /^\d+(\.\d+)?$/,
  
  // OTP code validation
  OTP_CODE: /^\d{6}$/,
  OTP_CODE_ALPHA: /^[A-Z0-9]{6}$/,
  
  // URL validation
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  URL_STRICT: /^https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  
  // Domain validation
  DOMAIN: /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/,
  
  // IP address validation
  IP_V4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  IP_V6: /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
  
  // Color codes
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  RGB_COLOR: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
  
  // Date formats
  DATE_ISO: /^\d{4}-\d{2}-\d{2}$/,
  DATE_TIME_ISO: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/,
  
  // File extensions
  IMAGE_EXT: /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i,
  DOCUMENT_EXT: /\.(pdf|doc|docx|txt|rtf)$/i,
  AUDIO_EXT: /\.(mp3|wav|ogg|m4a|aac)$/i,
  VIDEO_EXT: /\.(mp4|avi|mkv|mov|wmv|flv)$/i,
  
  // Security patterns
  NO_SCRIPT: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  NO_HTML: /<[^>]*>/g,
  SQL_INJECTION: /(union|select|insert|update|delete|drop|create|alter|exec|execute)/i,
  
  // Common formats
  CREDIT_CARD: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
  POSTAL_CODE_US: /^\d{5}(-\d{4})?$/,
  POSTAL_CODE_CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  
  // Language codes
  LANGUAGE_CODE: /^[a-z]{2}(-[A-Z]{2})?$/,
  
  // Currency codes
  CURRENCY_CODE: /^[A-Z]{3}$/,
} as const;

// ========================
// VALIDATION RULES OBJECTS
// ========================

export const EmailValidation = {
  required: true,
  pattern: RegexPatterns.EMAIL,
  minLength: FieldLengths.EMAIL_MIN,
  maxLength: FieldLengths.EMAIL_MAX,
  trim: true,
  lowercase: true,
} as const;

export const PasswordValidation = {
  required: true,
  pattern: RegexPatterns.PASSWORD_STRONG,
  minLength: FieldLengths.PASSWORD_MIN,
  maxLength: FieldLengths.PASSWORD_MAX,
  noTrim: true, // Don't trim passwords
  rules: [
    'At least 8 characters long',
    'At least one uppercase letter',
    'At least one lowercase letter', 
    'At least one number',
    'At least one special character (@$!%*?&)'
  ],
} as const;

export const UsernameValidation = {
  required: true,
  pattern: RegexPatterns.USERNAME,
  minLength: FieldLengths.USERNAME_MIN,
  maxLength: FieldLengths.USERNAME_MAX,
  trim: true,
  lowercase: true,
  rules: [
    'Must start with a letter or number',
    'Can contain letters, numbers, dots, hyphens, and underscores',
    'Must be 3-50 characters long'
  ],
} as const;

export const PhoneValidation = {
  required: false,
  pattern: RegexPatterns.PHONE,
  minLength: FieldLengths.PHONE_MIN,
  maxLength: FieldLengths.PHONE_MAX,
  trim: true,
  rules: [
    'Must be in international format (+1234567890)',
    'Must be 10-20 digits long'
  ],
} as const;

export const NameValidation = {
  required: true,
  pattern: RegexPatterns.NAME,
  maxLength: FieldLengths.FULL_NAME_MAX,
  trim: true,
  rules: [
    'Can contain letters, spaces, hyphens, apostrophes, and dots',
    'Must be 1-100 characters long'
  ],
} as const;

export const UUIDValidation = {
  required: true,
  pattern: RegexPatterns.UUID,
  length: FieldLengths.UUID_LENGTH,
  trim: true,
  lowercase: true,
} as const;

export const OTPValidation = {
  required: true,
  pattern: RegexPatterns.OTP_CODE,
  length: FieldLengths.OTP_CODE_LENGTH,
  trim: true,
  numeric: true,
} as const;

// ========================
// FILE VALIDATION RULES
// ========================

export const FileValidation = {
  maxSize: {
    IMAGE: 5 * 1024 * 1024, // 5MB
    DOCUMENT: 10 * 1024 * 1024, // 10MB
    AUDIO: 50 * 1024 * 1024, // 50MB
    VIDEO: 100 * 1024 * 1024, // 100MB
    DEFAULT: 1 * 1024 * 1024, // 1MB
  },
  allowedTypes: {
    IMAGE: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENT: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    AUDIO: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
    VIDEO: ['video/mp4', 'video/quicktime', 'video/x-msvideo'],
  },
  allowedExtensions: {
    IMAGE: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    DOCUMENT: ['.pdf', '.doc', '.docx', '.txt'],
    AUDIO: ['.mp3', '.wav', '.ogg'],
    VIDEO: ['.mp4', '.mov', '.avi'],
  },
} as const;

// ========================
// BUSINESS RULE CONSTRAINTS
// ========================

export const BusinessRules = {
  // Security constraints
  MAX_LOGIN_ATTEMPTS: 5,
  ACCOUNT_LOCK_DURATION_MINUTES: 30,
  PASSWORD_HISTORY_COUNT: 5,
  SESSION_TIMEOUT_MINUTES: 30,
  OTP_EXPIRY_MINUTES: 10,
  OTP_MAX_ATTEMPTS: 3,
  
  // Rate limiting
  API_RATE_LIMIT_PER_MINUTE: 60,
  LOGIN_RATE_LIMIT_PER_HOUR: 5,
  EMAIL_RATE_LIMIT_PER_HOUR: 10,
  SMS_RATE_LIMIT_PER_HOUR: 5,
  
  // Pagination
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE_SIZE: 20,
  
  // Content limits
  MAX_UPLOAD_FILES: 10,
  MAX_BULK_OPERATIONS: 1000,
  
  // Age constraints
  MIN_USER_AGE: 13,
  MAX_USER_AGE: 120,
  
  // Geography
  SUPPORTED_COUNTRIES: ['US', 'CA', 'VN', 'UK', 'AU'],
  DEFAULT_COUNTRY: 'US',
  
  // Timezone
  SUPPORTED_TIMEZONES: [
    'UTC',
    'America/New_York',
    'America/Los_Angeles', 
    'Europe/London',
    'Asia/Ho_Chi_Minh',
    'Asia/Tokyo',
    'Australia/Sydney'
  ],
  DEFAULT_TIMEZONE: 'UTC',
} as const;

// ========================
// VALIDATION ERROR MESSAGES
// ========================

export const ValidationErrorMessages = {
  REQUIRED: (field: string) => `${field} is required`,
  INVALID_FORMAT: (field: string) => `${field} has an invalid format`,
  TOO_SHORT: (field: string, min: number) => `${field} must be at least ${min} characters`,
  TOO_LONG: (field: string, max: number) => `${field} must not exceed ${max} characters`,
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  WEAK_PASSWORD: 'Password does not meet security requirements',
  INVALID_UUID: 'Invalid identifier format',
  INVALID_URL: 'Please enter a valid URL',
  INVALID_DATE: 'Please enter a valid date',
  FILE_TOO_LARGE: (max: string) => `File size must not exceed ${max}`,
  INVALID_FILE_TYPE: 'File type is not supported',
  NUMERIC_ONLY: 'Only numeric values are allowed',
  ALPHA_ONLY: 'Only alphabetic characters are allowed',
  ALPHANUMERIC_ONLY: 'Only letters and numbers are allowed',
} as const;

// ========================
// HELPER FUNCTIONS
// ========================

export const ValidationHelpers = {
  /**
   * Get validation rule for field type
   */
  getRule: (fieldType: 'email' | 'password' | 'username' | 'phone' | 'name' | 'uuid' | 'otp') => {
    const rules = {
      email: EmailValidation,
      password: PasswordValidation,
      username: UsernameValidation,
      phone: PhoneValidation,
      name: NameValidation,
      uuid: UUIDValidation,
      otp: OTPValidation,
    };
    return rules[fieldType];
  },
  
  /**
   * Get pattern for field type
   */
  getPattern: (fieldType: string) => {
    return (RegexPatterns as any)[fieldType.toUpperCase()];
  },
  
  /**
   * Get length constraint for field
   */
  getLength: (fieldType: string) => {
    const field = fieldType.toUpperCase();
    return {
      min: (FieldLengths as any)[`${field}_MIN`],
      max: (FieldLengths as any)[`${field}_MAX`],
    };
  },
} as const;

// ========================
// TYPE DEFINITIONS
// ========================

export type ValidationRule = {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  length?: number;
  trim?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  noTrim?: boolean;
  numeric?: boolean;
  rules?: string[];
};

export type FieldType = 'email' | 'password' | 'username' | 'phone' | 'name' | 'uuid' | 'otp';
export type FileType = 'IMAGE' | 'DOCUMENT' | 'AUDIO' | 'VIDEO';

// Export all for convenience
export const ValidationRules = {
  FieldLengths,
  RegexPatterns,
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
  PhoneValidation,
  NameValidation,
  UUIDValidation,
  OTPValidation,
  FileValidation,
  BusinessRules,
  ValidationErrorMessages,
  ValidationHelpers,
} as const;
