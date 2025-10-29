/**
 * ErrorMessages.ts - Standardized Error Messages
 * 
 * SRS Reference: Part05.8 Error Handling
 * Purpose: Centralized error message constants for consistency
 * Usage: Import for standardized user-facing error messages
 */

export const ErrorMessages = {
  // Generic Messages
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again later.',
  SERVER_ERROR: 'Internal server error. Please contact support if the problem persists.',
  SERVICE_UNAVAILABLE: 'Service is temporarily unavailable. Please try again later.',
  
  // Validation Messages
  VALIDATION_FAILED: 'Validation failed. Please check your input and try again.',
  REQUIRED_FIELD: (field: string) => `${field} is required.`,
  INVALID_FORMAT: (field: string) => `${field} has an invalid format.`,
  FIELD_TOO_SHORT: (field: string, min: number) => `${field} must be at least ${min} characters long.`,
  FIELD_TOO_LONG: (field: string, max: number) => `${field} must not exceed ${max} characters.`,
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  INVALID_PASSWORD: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match.',
  INVALID_UUID: 'Invalid identifier format.',
  INVALID_DATE: 'Invalid date format.',
  INVALID_JSON: 'Invalid JSON format.',
  
  // Authentication Messages
  AUTHENTICATION_FAILED: 'Authentication failed. Please check your credentials.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  ACCOUNT_NOT_FOUND: 'Account not found.',
  ACCOUNT_LOCKED: 'Account is locked due to multiple failed login attempts. Please try again later or reset your password.',
  ACCOUNT_SUSPENDED: 'Account has been suspended. Please contact support.',
  ACCOUNT_NOT_VERIFIED: 'Account is not verified. Please check your email for verification instructions.',
  PASSWORD_RESET_REQUIRED: 'Password reset is required. Please check your email for reset instructions.',
  TOKEN_EXPIRED: 'Your session has expired. Please log in again.',
  TOKEN_INVALID: 'Invalid session token. Please log in again.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  SESSION_NOT_FOUND: 'Session not found. Please log in again.',
  REFRESH_TOKEN_EXPIRED: 'Refresh token has expired. Please log in again.',
  
  // Authorization Messages
  ACCESS_DENIED: 'Access denied. You do not have permission to perform this action.',
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions to access this resource.',
  ROLE_REQUIRED: (role: string) => `${role} role is required to access this resource.`,
  PERMISSION_REQUIRED: (permission: string) => `${permission} permission is required to perform this action.`,
  
  // Resource Messages
  USER_NOT_FOUND: 'User not found.',
  ROLE_NOT_FOUND: 'Role not found.',
  PERMISSION_NOT_FOUND: 'Permission not found.',
  SESSION_NOT_FOUND_MSG: 'Session not found.',
  RESOURCE_NOT_FOUND: (resource: string) => `${resource} not found.`,
  
  // Conflict Messages
  EMAIL_ALREADY_EXISTS: 'An account with this email address already exists.',
  USERNAME_ALREADY_EXISTS: 'This username is already taken.',
  PHONE_ALREADY_EXISTS: 'An account with this phone number already exists.',
  RESOURCE_ALREADY_EXISTS: (resource: string) => `${resource} already exists.`,
  DUPLICATE_ENTRY: 'Duplicate entry detected.',
  
  // Business Rule Messages
  PASSWORD_POLICY_VIOLATION: 'Password does not meet security requirements.',
  ACCOUNT_CREATION_LIMIT: 'Account creation limit exceeded. Please try again later.',
  LOGIN_ATTEMPT_LIMIT: 'Too many login attempts. Please try again later.',
  SESSION_LIMIT_EXCEEDED: 'Maximum number of active sessions exceeded.',
  OTP_ATTEMPTS_EXCEEDED: 'Too many OTP verification attempts. Please request a new code.',
  OTP_EXPIRED: 'OTP code has expired. Please request a new code.',
  OTP_INVALID: 'Invalid OTP code. Please try again.',
  OPERATION_LIMIT_EXCEEDED: 'Operation limit exceeded. Please try again later.',
  
  // Database Messages
  DATABASE_ERROR: 'Database operation failed. Please try again.',
  RECORD_NOT_FOUND: 'Record not found.',
  DUPLICATE_KEY: 'Duplicate key constraint violation.',
  FOREIGN_KEY_VIOLATION: 'Foreign key constraint violation.',
  CONNECTION_FAILED: 'Database connection failed.',
  TRANSACTION_FAILED: 'Transaction failed. Please try again.',
  
  // External Service Messages
  EMAIL_SERVICE_ERROR: 'Failed to send email. Please try again later.',
  SMS_SERVICE_ERROR: 'Failed to send SMS. Please try again later.',
  PAYMENT_SERVICE_ERROR: 'Payment processing failed. Please try again.',
  THIRD_PARTY_SERVICE_ERROR: 'External service error. Please try again later.',
  WEBHOOK_DELIVERY_FAILED: 'Webhook delivery failed.',
  NOTIFICATION_FAILED: 'Failed to send notification.',
  
  // File Upload Messages
  FILE_TOO_LARGE: (maxSize: string) => `File size exceeds the maximum limit of ${maxSize}.`,
  INVALID_FILE_TYPE: 'Invalid file type. Please upload a supported file format.',
  FILE_UPLOAD_FAILED: 'File upload failed. Please try again.',
  FILE_NOT_FOUND: 'File not found.',
  
  // Rate Limiting Messages
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded. Please try again later.',
  TOO_MANY_REQUESTS: 'Too many requests. Please slow down.',
  
  // Network Messages
  CONNECTION_TIMEOUT: 'Connection timeout. Please check your internet connection and try again.',
  REQUEST_TIMEOUT: 'Request timeout. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  
  // Success Messages
  SUCCESS: 'Operation completed successfully.',
  USER_CREATED: 'User account created successfully.',
  USER_UPDATED: 'User profile updated successfully.',
  USER_DELETED: 'User account deleted successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
  PASSWORD_RESET: 'Password reset successfully.',
  EMAIL_VERIFIED: 'Email address verified successfully.',
  PHONE_VERIFIED: 'Phone number verified successfully.',
  OTP_SENT: 'Verification code sent successfully.',
  OTP_VERIFIED: 'Verification code verified successfully.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  ROLE_ASSIGNED: 'Role assigned successfully.',
  ROLE_UNASSIGNED: 'Role unassigned successfully.',
  SESSION_TERMINATED: 'Session terminated successfully.',
} as const;

export const ValidationMessages = {
  EMAIL: {
    REQUIRED: ErrorMessages.REQUIRED_FIELD('Email'),
    INVALID: ErrorMessages.INVALID_EMAIL,
    ALREADY_EXISTS: ErrorMessages.EMAIL_ALREADY_EXISTS,
  },
  PASSWORD: {
    REQUIRED: ErrorMessages.REQUIRED_FIELD('Password'),
    INVALID: ErrorMessages.INVALID_PASSWORD,
    TOO_SHORT: ErrorMessages.FIELD_TOO_SHORT('Password', 8),
    TOO_LONG: ErrorMessages.FIELD_TOO_LONG('Password', 128),
    MISMATCH: ErrorMessages.PASSWORDS_DO_NOT_MATCH,
  },
  USERNAME: {
    REQUIRED: ErrorMessages.REQUIRED_FIELD('Username'),
    TOO_SHORT: ErrorMessages.FIELD_TOO_SHORT('Username', 3),
    TOO_LONG: ErrorMessages.FIELD_TOO_LONG('Username', 50),
    ALREADY_EXISTS: ErrorMessages.USERNAME_ALREADY_EXISTS,
  },
  PHONE: {
    REQUIRED: ErrorMessages.REQUIRED_FIELD('Phone number'),
    INVALID: ErrorMessages.INVALID_PHONE,
    ALREADY_EXISTS: ErrorMessages.PHONE_ALREADY_EXISTS,
  },
  NAME: {
    FIRST_NAME_REQUIRED: ErrorMessages.REQUIRED_FIELD('First name'),
    LAST_NAME_REQUIRED: ErrorMessages.REQUIRED_FIELD('Last name'),
    TOO_LONG: ErrorMessages.FIELD_TOO_LONG('Name', 100),
  },
} as const;

export type ErrorMessageKey = keyof typeof ErrorMessages;
export type ValidationMessageKey = keyof typeof ValidationMessages;
