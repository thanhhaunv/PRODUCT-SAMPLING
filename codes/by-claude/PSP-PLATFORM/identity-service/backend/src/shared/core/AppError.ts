/**
 * AppError.ts - Application Error Types
 * 
 * SRS Reference: Part05.8 Error Handling
 * Architecture: Clean Architecture - Error Management
 * 
 * Purpose: Centralized error types and handling for the application
 * Pattern: Exception hierarchy with type safety
 * Usage: Used across all layers for consistent error handling
 */

export interface ErrorMetadata {
  timestamp: Date;
  correlationId?: string;
  userId?: string;
  operation?: string;
  context?: Record<string, any>;
  stackTrace?: string;
}

/**
 * Base application error class
 */
export abstract class AppError extends Error {
  public readonly isAppError = true;
  public readonly errorCode: string;
  public readonly statusCode: number;
  public readonly metadata: ErrorMetadata;

  constructor(
    message: string,
    errorCode: string,
    statusCode: number = 500,
    metadata?: Partial<ErrorMetadata>
  ) {
    super(message);
    
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.metadata = {
      timestamp: new Date(),
      stackTrace: this.stack,
      ...metadata
    };

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
    
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Convert error to JSON for logging/serialization
   */
  public toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      metadata: this.metadata
    };
  }

  /**
   * Create a sanitized version for client responses
   */
  public toClientError(): {
    message: string;
    errorCode: string;
    statusCode: number;
    timestamp: Date;
  } {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      timestamp: this.metadata.timestamp
    };
  }
}

/**
 * Domain-specific errors
 */
export class DomainError extends AppError {
  constructor(message: string, errorCode: string, metadata?: Partial<ErrorMetadata>) {
    super(message, errorCode, 400, metadata);
  }

  static create(message: string, errorCode: string, metadata?: Partial<ErrorMetadata>): DomainError {
    return new DomainError(message, errorCode, metadata);
  }
}

/**
 * Validation errors
 */
export class ValidationError extends AppError {
  public readonly validationErrors: Array<{
    field: string;
    message: string;
    value?: any;
  }>;

  constructor(
    message: string,
    validationErrors: Array<{ field: string; message: string; value?: any }>,
    metadata?: Partial<ErrorMetadata>
  ) {
    super(message, 'VALIDATION_ERROR', 400, metadata);
    this.validationErrors = validationErrors;
  }

  static create(
    field: string, 
    message: string, 
    value?: any, 
    metadata?: Partial<ErrorMetadata>
  ): ValidationError {
    return new ValidationError(
      `Validation failed for field: ${field}`,
      [{ field, message, value }],
      metadata
    );
  }

  static createMultiple(
    validationErrors: Array<{ field: string; message: string; value?: any }>,
    metadata?: Partial<ErrorMetadata>
  ): ValidationError {
    return new ValidationError(
      'Multiple validation errors occurred',
      validationErrors,
      metadata
    );
  }

  public toClientError(): {
    message: string;
    errorCode: string;
    statusCode: number;
    timestamp: Date;
    validationErrors: Array<{ field: string; message: string; value?: any }>;
  } {
    return {
      ...super.toClientError(),
      validationErrors: this.validationErrors
    };
  }
}

/**
 * Authentication errors
 */
export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication failed', metadata?: Partial<ErrorMetadata>) {
    super(message, 'AUTHENTICATION_ERROR', 401, metadata);
  }

  static invalidCredentials(metadata?: Partial<ErrorMetadata>): AuthenticationError {
    return new AuthenticationError('Invalid credentials provided', metadata);
  }

  static tokenExpired(metadata?: Partial<ErrorMetadata>): AuthenticationError {
    return new AuthenticationError('Authentication token has expired', metadata);
  }

  static invalidToken(metadata?: Partial<ErrorMetadata>): AuthenticationError {
    return new AuthenticationError('Invalid authentication token', metadata);
  }
}

/**
 * Authorization errors
 */
export class AuthorizationError extends AppError {
  constructor(message: string = 'Access denied', metadata?: Partial<ErrorMetadata>) {
    super(message, 'AUTHORIZATION_ERROR', 403, metadata);
  }

  static insufficientPermissions(
    requiredPermission: string, 
    metadata?: Partial<ErrorMetadata>
  ): AuthorizationError {
    return new AuthorizationError(
      `Insufficient permissions. Required: ${requiredPermission}`,
      metadata
    );
  }

  static roleRequired(requiredRole: string, metadata?: Partial<ErrorMetadata>): AuthorizationError {
    return new AuthorizationError(
      `Access denied. Required role: ${requiredRole}`,
      metadata
    );
  }
}

/**
 * Resource not found errors
 */
export class NotFoundError extends AppError {
  constructor(resource: string, identifier?: string, metadata?: Partial<ErrorMetadata>) {
    const message = identifier 
      ? `${resource} with identifier '${identifier}' not found`
      : `${resource} not found`;
    
    super(message, 'NOT_FOUND', 404, metadata);
  }

  static user(userId: string, metadata?: Partial<ErrorMetadata>): NotFoundError {
    return new NotFoundError('User', userId, metadata);
  }

  static role(roleId: string, metadata?: Partial<ErrorMetadata>): NotFoundError {
    return new NotFoundError('Role', roleId, metadata);
  }

  static session(sessionId: string, metadata?: Partial<ErrorMetadata>): NotFoundError {
    return new NotFoundError('Session', sessionId, metadata);
  }
}

/**
 * Conflict errors (e.g., duplicate resources)
 */
export class ConflictError extends AppError {
  constructor(message: string, metadata?: Partial<ErrorMetadata>) {
    super(message, 'CONFLICT_ERROR', 409, metadata);
  }

  static duplicateEmail(email: string, metadata?: Partial<ErrorMetadata>): ConflictError {
    return new ConflictError(`User with email '${email}' already exists`, metadata);
  }

  static duplicateUsername(username: string, metadata?: Partial<ErrorMetadata>): ConflictError {
    return new ConflictError(`User with username '${username}' already exists`, metadata);
  }
}

/**
 * Infrastructure errors
 */
export class InfrastructureError extends AppError {
  constructor(message: string, errorCode: string, metadata?: Partial<ErrorMetadata>) {
    super(message, errorCode, 500, metadata);
  }

  static database(operation: string, metadata?: Partial<ErrorMetadata>): InfrastructureError {
    return new InfrastructureError(
      `Database operation failed: ${operation}`,
      'DATABASE_ERROR',
      metadata
    );
  }

  static externalService(service: string, metadata?: Partial<ErrorMetadata>): InfrastructureError {
    return new InfrastructureError(
      `External service error: ${service}`,
      'EXTERNAL_SERVICE_ERROR',
      metadata
    );
  }

  static cache(operation: string, metadata?: Partial<ErrorMetadata>): InfrastructureError {
    return new InfrastructureError(
      `Cache operation failed: ${operation}`,
      'CACHE_ERROR',
      metadata
    );
  }
}

/**
 * Business rule errors
 */
export class BusinessRuleError extends AppError {
  constructor(ruleName: string, message: string, metadata?: Partial<ErrorMetadata>) {
    super(message, `BUSINESS_RULE_${ruleName.toUpperCase()}`, 422, metadata);
  }

  static passwordPolicy(message: string, metadata?: Partial<ErrorMetadata>): BusinessRuleError {
    return new BusinessRuleError('PASSWORD_POLICY', message, metadata);
  }

  static accountLocked(metadata?: Partial<ErrorMetadata>): BusinessRuleError {
    return new BusinessRuleError(
      'ACCOUNT_LOCKED',
      'Account is locked due to security policy',
      metadata
    );
  }

  static sessionExpired(metadata?: Partial<ErrorMetadata>): BusinessRuleError {
    return new BusinessRuleError(
      'SESSION_EXPIRED',
      'Session has expired',
      metadata
    );
  }
}

/**
 * Error factory for common error creation patterns
 */
export class ErrorFactory {
  static fromGuardResult(guardResult: any, metadata?: Partial<ErrorMetadata>): ValidationError {
    return ValidationError.create(
      'validation',
      guardResult.message || 'Validation failed',
      undefined,
      metadata
    );
  }

  static wrapError(error: Error, metadata?: Partial<ErrorMetadata>): AppError {
    if (error instanceof AppError) {
      return error;
    }

    return new InfrastructureError(
      error.message,
      'UNKNOWN_ERROR',
      {
        ...metadata,
        originalError: error.name,
        originalStack: error.stack
      }
    );
  }
}

/**
 * Type guards for error checking
 */
export const ErrorUtils = {
  isAppError(error: any): error is AppError {
    return error && error.isAppError === true;
  },

  isDomainError(error: any): error is DomainError {
    return error instanceof DomainError;
  },

  isValidationError(error: any): error is ValidationError {
    return error instanceof ValidationError;
  },

  isAuthenticationError(error: any): error is AuthenticationError {
    return error instanceof AuthenticationError;
  },

  isAuthorizationError(error: any): error is AuthorizationError {
    return error instanceof AuthorizationError;
  },

  isNotFoundError(error: any): error is NotFoundError {
    return error instanceof NotFoundError;
  },

  isConflictError(error: any): error is ConflictError {
    return error instanceof ConflictError;
  },

  isInfrastructureError(error: any): error is InfrastructureError {
    return error instanceof InfrastructureError;
  }
};
