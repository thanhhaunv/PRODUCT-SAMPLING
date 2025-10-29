/**
 * ErrorTypes.ts - Error Type Definitions
 * 
 * SRS Reference: Part05.8 Error Handling
 * Architecture: Centralized Error Type Management
 * 
 * Purpose: Type definitions for all error scenarios across services
 * Usage: Import for type-safe error handling and API responses
 */

// ========================
// ERROR SEVERITY LEVELS
// ========================

export type ErrorSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

// ========================
// ERROR CATEGORIES
// ========================

export type ErrorCategory = 
  | 'VALIDATION'
  | 'AUTHENTICATION' 
  | 'AUTHORIZATION'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'BUSINESS_RULE'
  | 'INFRASTRUCTURE'
  | 'EXTERNAL_SERVICE'
  | 'RATE_LIMIT'
  | 'TIMEOUT'
  | 'NETWORK'
  | 'DATABASE'
  | 'CACHE'
  | 'FILE_SYSTEM'
  | 'UNKNOWN';

// ========================
// ERROR CODES
// ========================

export const ErrorCodes = {
  // Validation Errors (1000-1999)
  VALIDATION_ERROR: 'ERR_1000',
  INVALID_INPUT: 'ERR_1001',
  MISSING_REQUIRED_FIELD: 'ERR_1002',
  INVALID_EMAIL_FORMAT: 'ERR_1003',
  INVALID_PHONE_FORMAT: 'ERR_1004',
  INVALID_PASSWORD_FORMAT: 'ERR_1005',
  INVALID_UUID_FORMAT: 'ERR_1006',
  INVALID_DATE_FORMAT: 'ERR_1007',
  INVALID_JSON_FORMAT: 'ERR_1008',
  FIELD_TOO_LONG: 'ERR_1009',
  FIELD_TOO_SHORT: 'ERR_1010',
  INVALID_ENUM_VALUE: 'ERR_1011',

  // Authentication Errors (2000-2999)
  AUTHENTICATION_ERROR: 'ERR_2000',
  INVALID_CREDENTIALS: 'ERR_2001',
  TOKEN_EXPIRED: 'ERR_2002',
  TOKEN_INVALID: 'ERR_2003',
  TOKEN_MISSING: 'ERR_2004',
  REFRESH_TOKEN_EXPIRED: 'ERR_2005',
  REFRESH_TOKEN_INVALID: 'ERR_2006',
  SESSION_EXPIRED: 'ERR_2007',
  SESSION_INVALID: 'ERR_2008',
  ACCOUNT_LOCKED: 'ERR_2009',
  ACCOUNT_SUSPENDED: 'ERR_2010',
  ACCOUNT_NOT_VERIFIED: 'ERR_2011',
  PASSWORD_RESET_REQUIRED: 'ERR_2012',

  // Authorization Errors (3000-3999)
  AUTHORIZATION_ERROR: 'ERR_3000',
  ACCESS_DENIED: 'ERR_3001',
  INSUFFICIENT_PERMISSIONS: 'ERR_3002',
  ROLE_REQUIRED: 'ERR_3003',
  PERMISSION_REQUIRED: 'ERR_3004',
  RESOURCE_ACCESS_DENIED: 'ERR_3005',
  OPERATION_NOT_ALLOWED: 'ERR_3006',

  // Not Found Errors (4000-4999)
  NOT_FOUND: 'ERR_4000',
  USER_NOT_FOUND: 'ERR_4001',
  ROLE_NOT_FOUND: 'ERR_4002',
  PERMISSION_NOT_FOUND: 'ERR_4003',
  SESSION_NOT_FOUND: 'ERR_4004',
  RESOURCE_NOT_FOUND: 'ERR_4005',
  ENDPOINT_NOT_FOUND: 'ERR_4006',

  // Conflict Errors (5000-5999)
  CONFLICT_ERROR: 'ERR_5000',
  DUPLICATE_EMAIL: 'ERR_5001',
  DUPLICATE_USERNAME: 'ERR_5002',
  DUPLICATE_PHONE: 'ERR_5003',
  RESOURCE_ALREADY_EXISTS: 'ERR_5004',
  CONCURRENT_MODIFICATION: 'ERR_5005',
  VERSION_MISMATCH: 'ERR_5006',

  // Business Rule Errors (6000-6999)
  BUSINESS_RULE_VIOLATION: 'ERR_6000',
  PASSWORD_POLICY_VIOLATION: 'ERR_6001',
  ACCOUNT_CREATION_LIMIT: 'ERR_6002',
  LOGIN_ATTEMPT_LIMIT: 'ERR_6003',
  SESSION_LIMIT_EXCEEDED: 'ERR_6004',
  OTP_ATTEMPTS_EXCEEDED: 'ERR_6005',
  OTP_EXPIRED: 'ERR_6006',
  OTP_INVALID: 'ERR_6007',
  OPERATION_LIMIT_EXCEEDED: 'ERR_6008',

  // Infrastructure Errors (7000-7999)
  INFRASTRUCTURE_ERROR: 'ERR_7000',
  DATABASE_ERROR: 'ERR_7001',
  DATABASE_CONNECTION_FAILED: 'ERR_7002',
  DATABASE_QUERY_FAILED: 'ERR_7003',
  DATABASE_TRANSACTION_FAILED: 'ERR_7004',
  CACHE_ERROR: 'ERR_7005',
  CACHE_CONNECTION_FAILED: 'ERR_7006',
  CACHE_OPERATION_FAILED: 'ERR_7007',
  FILE_SYSTEM_ERROR: 'ERR_7008',
  FILE_NOT_FOUND: 'ERR_7009',
  FILE_UPLOAD_FAILED: 'ERR_7010',

  // External Service Errors (8000-8999)
  EXTERNAL_SERVICE_ERROR: 'ERR_8000',
  EMAIL_SERVICE_ERROR: 'ERR_8001',
  SMS_SERVICE_ERROR: 'ERR_8002',
  PAYMENT_SERVICE_ERROR: 'ERR_8003',
  THIRD_PARTY_API_ERROR: 'ERR_8004',
  WEBHOOK_DELIVERY_FAILED: 'ERR_8005',
  NOTIFICATION_FAILED: 'ERR_8006',

  // Network & Timeout Errors (9000-9999)
  NETWORK_ERROR: 'ERR_9000',
  CONNECTION_TIMEOUT: 'ERR_9001',
  REQUEST_TIMEOUT: 'ERR_9002',
  RATE_LIMIT_EXCEEDED: 'ERR_9003',
  SERVICE_UNAVAILABLE: 'ERR_9004',
  GATEWAY_TIMEOUT: 'ERR_9005',

  // Unknown Errors (9999)
  UNKNOWN_ERROR: 'ERR_9999'
} as const;

export type ErrorCode = typeof ErrorCodes[keyof typeof ErrorCodes];

// ========================
// ERROR DETAIL INTERFACES
// ========================

export interface BaseErrorDetail {
  code: ErrorCode;
  message: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: Date;
  correlationId?: string;
  userId?: string;
  operation?: string;
  context?: Record<string, any>;
}

export interface ValidationErrorDetail extends BaseErrorDetail {
  category: 'VALIDATION';
  field: string;
  value?: any;
  constraint: string;
  rejectedValue?: any;
}

export interface AuthenticationErrorDetail extends BaseErrorDetail {
  category: 'AUTHENTICATION';
  attemptCount?: number;
  remainingAttempts?: number;
  lockoutUntil?: Date;
}

export interface AuthorizationErrorDetail extends BaseErrorDetail {
  category: 'AUTHORIZATION';
  requiredPermissions?: string[];
  userPermissions?: string[];
  requiredRoles?: string[];
  userRoles?: string[];
}

export interface NotFoundErrorDetail extends BaseErrorDetail {
  category: 'NOT_FOUND';
  resourceType: string;
  resourceId?: string;
  searchCriteria?: Record<string, any>;
}

export interface ConflictErrorDetail extends BaseErrorDetail {
  category: 'CONFLICT';
  conflictingResource: string;
  conflictingValue: any;
  existingResourceId?: string;
}

export interface BusinessRuleErrorDetail extends BaseErrorDetail {
  category: 'BUSINESS_RULE';
  ruleName: string;
  ruleDescription: string;
  violatedConstraints: string[];
}

export interface InfrastructureErrorDetail extends BaseErrorDetail {
  category: 'INFRASTRUCTURE';
  service: string;
  operation: string;
  retryable: boolean;
  retryAfter?: number;
}

export interface ExternalServiceErrorDetail extends BaseErrorDetail {
  category: 'EXTERNAL_SERVICE';
  serviceName: string;
  serviceEndpoint?: string;
  serviceResponseCode?: number;
  serviceResponseMessage?: string;
  retryable: boolean;
}

export interface RateLimitErrorDetail extends BaseErrorDetail {
  category: 'RATE_LIMIT';
  limit: number;
  remaining: number;
  resetTime: Date;
  retryAfter: number;
}

// ========================
// ERROR UNION TYPE
// ========================

export type ErrorDetail = 
  | ValidationErrorDetail
  | AuthenticationErrorDetail
  | AuthorizationErrorDetail
  | NotFoundErrorDetail
  | ConflictErrorDetail
  | BusinessRuleErrorDetail
  | InfrastructureErrorDetail
  | ExternalServiceErrorDetail
  | RateLimitErrorDetail
  | BaseErrorDetail;

// ========================
// ERROR RESPONSE TYPES
// ========================

export interface ErrorResponse {
  success: false;
  error: {
    code: ErrorCode;
    message: string;
    details?: ErrorDetail;
    timestamp: Date;
    correlationId?: string;
    path?: string;
    method?: string;
  };
}

export interface ValidationErrorResponse extends ErrorResponse {
  error: ErrorResponse['error'] & {
    validationErrors: ValidationErrorDetail[];
  };
}

export interface MultipleErrorResponse extends ErrorResponse {
  error: ErrorResponse['error'] & {
    errors: ErrorDetail[];
  };
}

// ========================
// ERROR FACTORY TYPES
// ========================

export interface ErrorFactoryConfig {
  includeStackTrace: boolean;
  includeSensitiveData: boolean;
  defaultSeverity: ErrorSeverity;
  correlationIdRequired: boolean;
}

export interface ErrorContext {
  correlationId?: string;
  userId?: string;
  sessionId?: string;
  operation?: string;
  module?: string;
  metadata?: Record<string, any>;
}

// ========================
// ERROR METRICS TYPES
// ========================

export interface ErrorMetrics {
  errorCode: ErrorCode;
  category: ErrorCategory;
  severity: ErrorSeverity;
  count: number;
  firstOccurrence: Date;
  lastOccurrence: Date;
  avgResolutionTime?: number;
  affectedUsers?: number;
}

export interface ErrorRate {
  timeWindow: string; // '1m', '5m', '1h', '1d'
  totalRequests: number;
  errorCount: number;
  errorRate: number; // percentage
  threshold: number;
  breached: boolean;
}

// ========================
// ERROR HANDLING STRATEGY TYPES
// ========================

export type RetryStrategy = {
  maxAttempts: number;
  backoffMultiplier: number;
  maxDelay: number;
  retryableErrors: ErrorCode[];
};

export type CircuitBreakerState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';

export interface CircuitBreakerConfig {
  failureThreshold: number;
  recoveryTimeout: number;
  monitoringPeriod: number;
  halfOpenMaxCalls: number;
}

// ========================
// TYPE GUARDS
// ========================

export const ErrorTypeGuards = {
  isValidationError: (error: ErrorDetail): error is ValidationErrorDetail => 
    error.category === 'VALIDATION',
  
  isAuthenticationError: (error: ErrorDetail): error is AuthenticationErrorDetail => 
    error.category === 'AUTHENTICATION',
  
  isAuthorizationError: (error: ErrorDetail): error is AuthorizationErrorDetail => 
    error.category === 'AUTHORIZATION',
  
  isNotFoundError: (error: ErrorDetail): error is NotFoundErrorDetail => 
    error.category === 'NOT_FOUND',
  
  isConflictError: (error: ErrorDetail): error is ConflictErrorDetail => 
    error.category === 'CONFLICT',
  
  isBusinessRuleError: (error: ErrorDetail): error is BusinessRuleErrorDetail => 
    error.category === 'BUSINESS_RULE',
  
  isInfrastructureError: (error: ErrorDetail): error is InfrastructureErrorDetail => 
    error.category === 'INFRASTRUCTURE',
  
  isExternalServiceError: (error: ErrorDetail): error is ExternalServiceErrorDetail => 
    error.category === 'EXTERNAL_SERVICE',
  
  isRetryableError: (error: ErrorDetail): boolean => {
    return error.category === 'INFRASTRUCTURE' || 
           error.category === 'EXTERNAL_SERVICE' ||
           error.category === 'NETWORK';
  }
};
