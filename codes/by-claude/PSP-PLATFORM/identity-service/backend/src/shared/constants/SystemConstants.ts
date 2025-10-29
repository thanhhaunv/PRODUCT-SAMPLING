/**
 * SystemConstants.ts - System-Wide Constants
 * 
 * SRS Reference: Part02.8 Technical Requirements
 * Purpose: System configuration constants
 */

export const SystemConstants = {
  // Application Info
  APP_NAME: 'PSP Identity Service',
  APP_VERSION: '1.0.0',
  API_VERSION: 'v1',
  
  // Security
  JWT_ACCESS_TOKEN_EXPIRY: '15m',
  JWT_REFRESH_TOKEN_EXPIRY: '7d',
  PASSWORD_SALT_ROUNDS: 12,
  SESSION_EXPIRY: '24h',
  OTP_EXPIRY_MINUTES: 10,
  OTP_MAX_ATTEMPTS: 3,
  LOGIN_MAX_ATTEMPTS: 5,
  ACCOUNT_LOCK_DURATION: '30m',
  
  // Validation Rules
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 50,
  NAME_MAX_LENGTH: 100,
  PHONE_MAX_LENGTH: 20,
  EMAIL_MAX_LENGTH: 254,
  
  // Pagination
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  
  // Rate Limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100,
  
  // File Upload
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  
  // Database
  DB_CONNECTION_TIMEOUT: 30000,
  DB_POOL_MIN: 2,
  DB_POOL_MAX: 20,
  
  // Cache
  CACHE_DEFAULT_TTL: 3600, // 1 hour
  CACHE_USER_TTL: 1800, // 30 minutes
  CACHE_SESSION_TTL: 900, // 15 minutes
  
  // Retry
  DEFAULT_RETRY_ATTEMPTS: 3,
  DEFAULT_RETRY_DELAY: 1000,
  
  // Health Check
  HEALTH_CHECK_TIMEOUT: 5000,
  
  // Supported Locales
  SUPPORTED_LOCALES: ['en-US', 'vi-VN'],
  DEFAULT_LOCALE: 'en-US',
  
  // Supported Timezones
  DEFAULT_TIMEZONE: 'UTC',
  
  // Supported Themes
  SUPPORTED_THEMES: ['LIGHT', 'DARK', 'AUTO'],
  DEFAULT_THEME: 'LIGHT',
} as const;

export const HttpStatusCodes = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  
  // Redirection
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  
  // Client Error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  
  // Server Error
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

export const EventNames = {
  // User Events
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
  USER_LOGGED_IN: 'user.logged_in',
  USER_LOGGED_OUT: 'user.logged_out',
  
  // Session Events
  SESSION_CREATED: 'session.created',
  SESSION_EXPIRED: 'session.expired',
  SESSION_TERMINATED: 'session.terminated',
  
  // OTP Events
  OTP_GENERATED: 'otp.generated',
  OTP_VERIFIED: 'otp.verified',
  OTP_EXPIRED: 'otp.expired',
  
  // Security Events
  SECURITY_BREACH: 'security.breach',
  SUSPICIOUS_ACTIVITY: 'security.suspicious_activity',
  ACCOUNT_LOCKED: 'security.account_locked',
} as const;

export const ValidationRules = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
  UUID_REGEX: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  USERNAME_REGEX: /^[a-zA-Z0-9_.-]{3,50}$/,
  
  // File validation
  IMAGE_MIME_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  DOCUMENT_MIME_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
} as const;

export type SystemConstantKey = keyof typeof SystemConstants;
export type HttpStatusCode = typeof HttpStatusCodes[keyof typeof HttpStatusCodes];
export type EventName = typeof EventNames[keyof typeof EventNames];
