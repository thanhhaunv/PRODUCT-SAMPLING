# 🏗️ Shared Core Library

## Import the core patterns:
```typescript
import { Entity, Result, Guard, UniqueEntityId } from '../shared/core';
```

**CRITICAL**: This is a **BLOCKING DEPENDENCY** for ALL developers. DEV-1 through DEV-9 MUST use these patterns.

## 📋 Overview

The shared core library provides essential domain patterns and utilities following **Clean Architecture** and **Domain-Driven Design (DDD)** principles as specified in the SRS documentation.

## 🎯 SRS References

- **Part06.2.1**: Layered Architecture - Domain Layer
- **Part05.8**: Error Handling Patterns  
- **Part06.1.2**: Event Bus - Domain Events
- **Part15.3.1**: Health Monitoring & Logging

## 📦 What's Included

### Core Domain Patterns
- **Entity**: Base class for domain entities with identity
- **AggregateRoot**: Base class for aggregate roots with domain events
- **ValueObject**: Base class for immutable value objects
- **UniqueEntityId**: Type-safe entity identifiers
- **DomainEvent**: Event-driven architecture support

### Error Handling
- **Result\<T>**: Railway-oriented programming pattern
- **Either\<L, R>**: Functional error handling
- **AppError**: Typed application error hierarchy
- **Guard**: Input validation utilities

### Infrastructure
- **Logger**: Structured logging with context
- **PerformanceLogger**: Performance measurement utilities

## 🚀 Quick Start

### Import Patterns
```typescript
// ✅ Recommended: Import specific items
import { Result, Entity, AggregateRoot, Guard } from '../shared/core';

// ✅ For types only
import type { DomainEvent, LogContext } from '../shared/core';

// ❌ Avoid: Don't import everything
// import * as Core from '../shared/core';
```

### Basic Usage Examples

#### 1. Creating Domain Entities
```typescript
import { Entity, UniqueEntityId, Guard, Result } from '../shared/core';

interface UserProps {
  email: string;
  username: string;
  createdAt: Date;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: UniqueEntityId) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityId): Result<User> {
    // Validation using Guard
    const guardResult = Guard.combine([
      Guard.againstNullOrUndefinedOrEmpty(props.email, 'email'),
      Guard.againstInvalidEmail(props.email, 'email'),
      Guard.againstNullOrUndefinedOrEmpty(props.username, 'username')
    ]);

    if (!guardResult.succeeded) {
      return Result.fail<User>(guardResult.message!);
    }

    const user = new User(props, id);
    return Result.ok<User>(user);
  }

  get email(): string {
    return this.props.email;
  }

  get username(): string {
    return this.props.username;
  }
}
```

#### 2. Creating Value Objects
```typescript
import { ValueObject, Guard } from '../shared/core';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props);
  }

  public static create(email: string): Result<Email> {
    const guardResult = Guard.againstInvalidEmail(email, 'email');
    
    if (!guardResult.succeeded) {
      return Result.fail<Email>(guardResult.message!);
    }

    return Result.ok<Email>(new Email({ value: email }));
  }

  get value(): string {
    return this.props.value;
  }

  protected validate(props: EmailProps): void {
    // Additional validation if needed
  }
}
```

#### 3. Using Result Pattern
```typescript
import { Result } from '../shared/core';

// ✅ Function that can fail
function divideNumbers(a: number, b: number): Result<number> {
  if (b === 0) {
    return Result.fail<number>('Cannot divide by zero');
  }
  
  return Result.ok<number>(a / b);
}

// ✅ Using the result
const result = divideNumbers(10, 2);

if (result.isSuccess) {
  console.log('Result:', result.getValue()); // 5
} else {
  console.error('Error:', result.getErrorValue());
}

// ✅ Chaining operations
const chainedResult = divideNumbers(10, 2)
  .map(value => value * 2)
  .bind(value => divideNumbers(value, 5));
```

#### 4. Creating Aggregate Roots with Events
```typescript
import { AggregateRoot, UniqueEntityId, BaseDomainEvent } from '../shared/core';

// Domain Event
export class UserCreatedEvent extends BaseDomainEvent {
  public payload: {
    userId: string;
    email: string;
    username: string;
  };

  constructor(userId: UniqueEntityId, email: string, username: string) {
    super('UserCreated', userId);
    this.payload = {
      userId: userId.toString(),
      email,
      username
    };
  }
}

// Aggregate Root
export class User extends AggregateRoot<UserProps> {
  public static create(props: UserProps): Result<User> {
    // ... validation logic ...
    
    const user = new User(props);
    
    // Add domain event
    user.addDomainEvent(
      new UserCreatedEvent(user.id, props.email, props.username)
    );
    
    return Result.ok<User>(user);
  }
}
```

#### 5. Error Handling
```typescript
import { 
  ValidationError, 
  NotFoundError, 
  AuthenticationError,
  ErrorFactory 
} from '../shared/core';

// ✅ Creating specific errors
throw ValidationError.create('email', 'Invalid email format');
throw NotFoundError.user('123e4567-e89b-12d3-a456-426614174000');
throw AuthenticationError.invalidCredentials();

// ✅ Error handling in use cases
export class LoginUseCase {
  async execute(email: string, password: string): Promise<Result<LoginResult>> {
    try {
      // ... business logic ...
      return Result.ok(loginResult);
    } catch (error) {
      const appError = ErrorFactory.wrapError(error);
      return Result.fail(appError.message);
    }
  }
}
```

#### 6. Logging
```typescript
import { logger, LoggerFactory } from '../shared/core';

// ✅ Basic logging
logger.info('User login attempt', {
  userId: user.id.toString(),
  correlationId: 'req-123',
  operation: 'login'
});

// ✅ Create child logger with context
const userLogger = LoggerFactory.createChildLogger({
  userId: user.id.toString(),
  module: 'UserService'
});

userLogger.info('Processing user update');
userLogger.error('Update failed', { error: new Error('Database error') });

// ✅ Performance logging
import { PerformanceLogger } from '../shared/core';

const result = await PerformanceLogger.measureAsync(
  'user-login',
  async () => {
    return await authService.login(email, password);
  },
  { userId: user.id.toString() }
);
```

## 🔒 Critical Rules for ALL Developers

### ✅ DO
- **ALWAYS** use `Result<T>` for operations that can fail
- **ALWAYS** use `Guard` for input validation
- **ALWAYS** extend `Entity` for domain entities
- **ALWAYS** extend `AggregateRoot` for aggregates that publish events
- **ALWAYS** extend `ValueObject` for value objects
- **ALWAYS** use the logger for all logging needs
- **ALWAYS** handle errors using the error hierarchy

### ❌ DON'T
- **NEVER** throw raw JavaScript errors - use AppError hierarchy
- **NEVER** use `console.log` - use the logger
- **NEVER** return `null` or `undefined` from domain operations - use `Result<T>`
- **NEVER** create entities without validation
- **NEVER** modify value objects after creation (they're immutable)
- **NEVER** bypass the Guard validation utilities

## 🧪 Testing Examples

```typescript
import { User, Email } from '../domain/entities';
import { Result } from '../shared/core';

describe('User Entity', () => {
  it('should create user with valid data', () => {
    // Arrange
    const props = {
      email: 'test@example.com',
      username: 'testuser',
      createdAt: new Date()
    };

    // Act
    const result = User.create(props);

    // Assert
    expect(result.isSuccess).toBe(true);
    expect(result.getValue().email).toBe('test@example.com');
  });

  it('should fail to create user with invalid email', () => {
    // Arrange
    const props = {
      email: 'invalid-email',
      username: 'testuser',
      createdAt: new Date()
    };

    // Act
    const result = User.create(props);

    // Assert
    expect(result.isFailure).toBe(true);
    expect(result.getErrorValue()).toContain('valid email');
  });
});
```

## 📞 Support

If you have questions about using the shared core library:

1. **Check this README first**
2. **Review the SRS documentation** (Part06.2.1, Part05.8, Part06.1.2)
3. **Look at the type definitions** in each file
4. **Contact DEV-0** (the infrastructure specialist who created this)

## 🚨 Breaking Changes

**IMPORTANT**: Any changes to this shared core library are BREAKING CHANGES that affect ALL developers. 

If you need to modify these files:
1. **Coordinate with the entire team first**
2. **Update ALL dependent code**
3. **Update this documentation**
4. **Run ALL tests across ALL services**

---

**Built by**: DEV-0 - Project Setup & Infrastructure Specialist  
**Status**: ✅ **COMPLETE** - Ready for use by DEV-1 through DEV-9  
**Last Updated**: Phase 0, Week 1
