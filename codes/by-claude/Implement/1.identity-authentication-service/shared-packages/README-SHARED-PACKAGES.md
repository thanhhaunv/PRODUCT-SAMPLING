# PSP Platform Shared Packages

**3 NPM packages for PSP Platform microservices foundation**

## 📦 Packages Overview

### 1. @psp/shared-core@1.2.0
Common utilities and DDD base classes for all microservices.

**Installation**:
```bash
npm install @psp/shared-core@^1.2.0
```

**Key Features**:
- **DDD Base Classes**: Result, Entity, ValueObject, AggregateRoot, UniqueEntityId
- **Logger**: Winston-based structured logging
- **Validation**: Email, phone, password validation
- **Crypto**: Secure password hashing, encryption, OTP generation
- **Guards**: Defensive programming utilities

**Usage Example**:
```typescript
import { Result, Logger, ValidationUtils, CryptoUtils } from '@psp/shared-core';

// Result pattern for error handling
const result = Result.ok({ userId: '123', name: 'John' });
if (result.isSuccess) {
  const user = result.getValue();
}

// Structured logging
Logger.info('User action completed', { 
  userId: '123', 
  action: 'login',
  timestamp: new Date() 
});

// Validation
const isValidEmail = ValidationUtils.isValidEmail('user@example.com');
const isSecurePassword = ValidationUtils.isValidPassword('SecurePass123!');

// Crypto operations
const hashedPassword = await CryptoUtils.hashPassword('mypassword');
const otp = CryptoUtils.generateOTP(6);
```

### 2. @psp/shared-events@1.1.0
Domain event contracts for microservices communication.

**Installation**:
```bash
npm install @psp/shared-events@^1.1.0
```

**Event Types**:
- **User Events**: UserCreatedEvent, UserUpdatedEvent, UserSyncedToCRMEvent
- **Campaign Events**: CampaignPublishedEvent
- **Redemption Events**: RedemptionProcessedEvent

**Usage Example**:
```typescript
import { UserCreatedEvent, EventTypes, DomainEvent } from '@psp/shared-events';

// Publishing an event
const event: UserCreatedEvent = {
  eventId: 'evt_123',
  aggregateId: 'user_456',
  userId: 'user_456',
  email: 'john@example.com',
  phone: '+1234567890',
  roles: ['customer'],
  timestamp: new Date(),
  eventType: EventTypes.USER_CREATED,
  version: 1,
  metadata: {
    source: 'identity-service',
    userAgent: 'Mozilla/5.0...',
    ipAddress: '192.168.1.1'
  }
};

// Event handler with type safety
function handleEvent(event: DomainEvent) {
  switch (event.eventType) {
    case EventTypes.USER_CREATED:
      console.log(`User ${event.userId} created with email ${event.email}`);
      break;
    case EventTypes.CAMPAIGN_PUBLISHED:
      console.log(`Campaign ${event.campaignId} published`);
      break;
  }
}
```

### 3. @psp/shared-database@1.0.5
Prisma connection management and database utilities.

**Installation**:
```bash
npm install @psp/shared-database@^1.0.5
```

**Key Features**:
- **Connection Management**: Singleton Prisma client with connection pooling
- **Migration Utilities**: Auto-migration, backup/restore, status tracking
- **Environment Configs**: Development, test, staging, production settings
- **Health Monitoring**: Connection health checks, database statistics
- **Transaction Support**: Retry logic and error handling

**Usage Example**:
```typescript
import { 
  getPrismaClient, 
  connectWithRetry,
  checkDatabaseHealth,
  MigrationUtils 
} from '@psp/shared-database';

// Initialize database connection
const client = await connectWithRetry(5, 2000);

// Use Prisma client
const users = await client.user.findMany();
const newUser = await client.user.create({
  data: {
    email: 'user@example.com',
    phone: '+1234567890'
  }
});

// Health monitoring
const health = await checkDatabaseHealth();
console.log('Database health:', health.isHealthy, 'Latency:', health.latency + 'ms');

// Migration management
const needsMigration = await MigrationUtils.needsMigration();
if (needsMigration) {
  const result = await MigrationUtils.autoMigrate();
  console.log('Migration completed:', result.success);
}
```

## 🏗️ Architecture Patterns

### Domain-Driven Design (DDD)
All packages follow DDD principles with proper separation of concerns:

```typescript
// Entity example using shared-core
import { Entity, UniqueEntityId } from '@psp/shared-core';

interface UserProps {
  email: string;
  phone?: string;
}

class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: UniqueEntityId) {
    super(props, id);
  }

  get email(): string {
    return this.props.email;
  }

  get phone(): string | undefined {
    return this.props.phone;
  }
}
```

### Event-Driven Architecture
Events enable loose coupling between microservices:

```typescript
// Publishing events
import { UserCreatedEvent } from '@psp/shared-events';

class UserService {
  async createUser(userData: CreateUserDto): Promise<Result<User>> {
    // Create user logic...
    
    // Publish domain event
    const event: UserCreatedEvent = {
      eventId: uuidv4(),
      aggregateId: user.id.toString(),
      userId: user.id.toString(),
      email: user.email,
      eventType: 'USER_CREATED',
      timestamp: new Date(),
      version: 1
    };
    
    await this.eventBus.publish(event);
    return Result.ok(user);
  }
}
```

### Database Pattern
Centralized database connection management:

```typescript
// Service setup
import { setupDatabaseForEnvironment } from '@psp/shared-database';

export class IdentityService {
  private db: PrismaClient;

  constructor() {
    this.db = setupDatabaseForEnvironment('production');
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({
      where: { email }
    });
  }
}
```

## 🚀 Getting Started

### 1. Install All Packages
```bash
npm install @psp/shared-core@^1.2.0
npm install @psp/shared-events@^1.1.0  
npm install @psp/shared-database@^1.0.5
```

### 2. Environment Setup
```bash
# .env file
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
NODE_ENV=development
LOG_LEVEL=info
```

### 3. Basic Service Structure
```typescript
import { Logger, Result } from '@psp/shared-core';
import { UserCreatedEvent } from '@psp/shared-events';
import { getPrismaClient } from '@psp/shared-database';

export class MyService {
  private db = getPrismaClient();

  async createUser(email: string): Promise<Result<User>> {
    try {
      const user = await this.db.user.create({
        data: { email }
      });

      Logger.info('User created successfully', { userId: user.id });
      
      return Result.ok(user);
    } catch (error) {
      Logger.error('Failed to create user', error);
      return Result.fail('User creation failed');
    }
  }
}
```

## 📋 Best Practices

### Error Handling
Always use Result pattern instead of throwing exceptions:
```typescript
// Good ✅
async function validateUser(email: string): Promise<Result<boolean>> {
  if (!ValidationUtils.isValidEmail(email)) {
    return Result.fail('Invalid email format');
  }
  return Result.ok(true);
}

// Avoid ❌
function validateUser(email: string): boolean {
  if (!ValidationUtils.isValidEmail(email)) {
    throw new Error('Invalid email format');
  }
  return true;
}
```

### Logging
Use structured logging with context:
```typescript
// Good ✅
Logger.info('User operation completed', {
  operation: 'create',
  userId: user.id,
  email: user.email,
  duration: Date.now() - startTime
});

// Avoid ❌
console.log('User created: ' + user.email);
```

### Database Operations
Always handle database errors gracefully:
```typescript
// Good ✅
async function getUser(id: string): Promise<Result<User>> {
  try {
    const user = await client.user.findUnique({ where: { id } });
    if (!user) {
      return Result.fail('User not found');
    }
    return Result.ok(user);
  } catch (error) {
    Logger.error('Database query failed', error);
    return Result.fail('Database error occurred');
  }
}
```

## 🔧 Development Guidelines

### TypeScript Configuration
All packages require TypeScript strict mode:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

### Testing
Use the provided utilities for testing:
```typescript
import { Result } from '@psp/shared-core';

describe('UserService', () => {
  test('should create user successfully', async () => {
    const result = await userService.createUser('test@example.com');
    
    expect(result.isSuccess).toBe(true);
    expect(result.getValue().email).toBe('test@example.com');
  });
});
```

---

## 📞 Support

For questions or issues with the shared packages:
1. Check the individual package README files
2. Review the usage examples above
3. Ensure you're using the correct versions
4. Verify your TypeScript configuration

**Package Versions**:
- `@psp/shared-core`: 1.2.0
- `@psp/shared-events`: 1.1.0
- `@psp/shared-database`: 1.0.5

**Status**: ✅ Ready for production use
**Last Updated**: October 31, 2025
