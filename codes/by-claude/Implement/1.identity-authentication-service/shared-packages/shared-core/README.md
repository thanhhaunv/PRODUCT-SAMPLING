# @psp/shared-core

Common utilities and DDD base classes for PSP Platform microservices.

## Installation

```bash
npm install @psp/shared-core@^1.2.0
```

## Features

### DDD Base Classes
- **Result**: Error handling pattern
- **Entity**: Base entity class with identity
- **ValueObject**: Immutable value objects
- **AggregateRoot**: Domain aggregate roots with events
- **UniqueEntityId**: Unique identifiers for entities

### Utilities
- **Logger**: Winston-based logging utility
- **ValidationUtils**: Input validation with class-validator
- **CryptoUtils**: Encryption, hashing, and security utilities
- **Guard**: Defensive programming guard clauses

## Usage Examples

### Result Pattern
```typescript
import { Result } from '@psp/shared-core';

const result = Result.ok({ id: '123', name: 'John' });
if (result.isSuccess) {
  const value = result.getValue();
  console.log(value.name);
}

const failResult = Result.fail('Invalid input');
if (failResult.isFailure) {
  console.log(failResult.errorValue());
}
```

### Entity Creation
```typescript
import { Entity, UniqueEntityId } from '@psp/shared-core';

interface UserProps {
  name: string;
  email: string;
}

class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: UniqueEntityId) {
    super(props, id);
  }

  get name(): string {
    return this.props.name;
  }
}
```

### Logging
```typescript
import { Logger } from '@psp/shared-core';

Logger.info('User created successfully', { userId: '123' });
Logger.error('Failed to create user', new Error('Database error'));
```

### Validation
```typescript
import { ValidationUtils } from '@psp/shared-core';

const isValid = ValidationUtils.isValidEmail('user@example.com');
const isSecure = ValidationUtils.isValidPassword('SecurePass123!');
```

### Cryptography
```typescript
import { CryptoUtils } from '@psp/shared-core';

// Hash password
const hashedPassword = await CryptoUtils.hashPassword('mypassword');

// Generate OTP
const otp = CryptoUtils.generateOTP(6);

// Generate secure token
const token = CryptoUtils.generateSecureToken(32);
```

### Guards
```typescript
import { Guard } from '@psp/shared-core';

Guard.againstNullOrUndefined(user, 'user');
Guard.againstInvalidEmail(email, 'email');
Guard.againstRange(age, 0, 120, 'age');
```

## Dependencies

- `class-validator`: Input validation
- `winston`: Logging
- `uuid`: Unique identifier generation
- `crypto`: Node.js crypto module

## License

MIT
