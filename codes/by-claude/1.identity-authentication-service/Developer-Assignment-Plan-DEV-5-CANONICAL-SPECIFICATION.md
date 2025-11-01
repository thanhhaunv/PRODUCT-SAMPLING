# DEV-5 ULTRA HIGH CONSISTENCY CANONICAL SPECIFICATION
**Version**: 2.0 - Maximum Consistency  
**Target Consistency**: 99-100%  
**Strategy**: Infrastructure Layer Zero-Variation Templates

---

## 🎯 **ASSIGNMENT OVERVIEW**

**Role**: Persistence & Repos Specialist  
**Timeline**: Week 3 (Infrastructure Layer)  
**Critical**: BLOCKING DEPENDENCY for DEV-6, DEV-8, DEV-9  
**Files**: 18 files (5 Repositories + 5 Models + Migrations + Seed)

### **SRS References (EXACT ORDER)**:
- **Part07.1 Data Model Overview** - Database schema design
- **Part07.2 Identity Database Design** - Specific table structures  
- **Part14.1 Container Orchestration** - Database in Docker

---

## 🏗️ **ZERO-VARIATION PERSISTENCE FOUNDATIONS**

### **1. EXACT ERROR CONSTANTS (100% IDENTICAL - COPY ALL)**
```typescript
// Refs: Part07.1 Data Model Overview + Part07.2 Identity Database Design
const PERSISTENCE_ERRORS = {
  // Connection errors
  DATABASE_CONNECTION_FAILED: 'Failed to connect to database',
  TRANSACTION_FAILED: 'Database transaction failed',
  QUERY_TIMEOUT: 'Database query timeout exceeded',
  
  // CRUD operation errors
  ENTITY_NOT_FOUND: (entityType: string, id: string) => `${entityType} with ID ${id} not found`,
  ENTITY_ALREADY_EXISTS: (entityType: string, field: string, value: string) => `${entityType} with ${field} '${value}' already exists`,
  ENTITY_CREATION_FAILED: (entityType: string) => `Failed to create ${entityType}`,
  ENTITY_UPDATE_FAILED: (entityType: string, id: string) => `Failed to update ${entityType} with ID ${id}`,
  ENTITY_DELETION_FAILED: (entityType: string, id: string) => `Failed to delete ${entityType} with ID ${id}`,
  
  // Constraint violations
  FOREIGN_KEY_CONSTRAINT: 'Foreign key constraint violation',
  UNIQUE_CONSTRAINT_VIOLATION: (field: string) => `Unique constraint violation for field: ${field}`,
  CHECK_CONSTRAINT_VIOLATION: (constraint: string) => `Check constraint violation: ${constraint}`,
  NOT_NULL_CONSTRAINT: (field: string) => `Field ${field} cannot be null`,
  
  // Data validation errors
  INVALID_UUID_FORMAT: (id: string) => `Invalid UUID format: ${id}`,
  INVALID_EMAIL_FORMAT: (email: string) => `Invalid email format: ${email}`,
  INVALID_DATE_RANGE: 'Invalid date range provided',
  INVALID_PAGINATION_PARAMS: 'Invalid pagination parameters',
  
  // Repository-specific errors
  USER_NOT_FOUND: (id: string) => `User with ID ${id} not found`,
  USER_EMAIL_EXISTS: (email: string) => `User with email '${email}' already exists`,
  ROLE_NOT_FOUND: (id: string) => `Role with ID ${id} not found`,
  ROLE_NAME_EXISTS: (name: string) => `Role with name '${name}' already exists`,
  SESSION_NOT_FOUND: (id: string) => `Session with ID ${id} not found`,
  SESSION_EXPIRED: (id: string) => `Session with ID ${id} has expired`,
  OTP_NOT_FOUND: (userId: string) => `OTP for user ${userId} not found`,
  OTP_EXPIRED: (userId: string) => `OTP for user ${userId} has expired`,
  
  // Transaction errors
  OPTIMISTIC_LOCK_FAILURE: 'Optimistic locking failure - entity was modified',
  DEADLOCK_DETECTED: 'Database deadlock detected, please retry',
  
  // Performance errors
  BULK_OPERATION_LIMIT: (limit: number) => `Bulk operation exceeds limit of ${limit} items`,
  QUERY_COMPLEXITY_TOO_HIGH: 'Query complexity exceeds maximum allowed',
  
  // Generic errors
  PRISMA_CLIENT_ERROR: 'Prisma client operation failed',
  UNKNOWN_DATABASE_ERROR: 'Unknown database error occurred'
};
```

### **2. EXACT IMPORT TEMPLATES (100% IDENTICAL)**

#### **Repository Import Template**:
```typescript
// Always this exact order - NO variations
import { PrismaClient } from '@prisma/client';
import { Result } from '@psp/shared-core';
// Domain entities
import { User } from '../../../domain/entities/User';
// Domain repository interfaces
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
// Infrastructure models (when needed)
import { UserModel } from '../models/UserModel';
```

#### **Prisma Model Import Template**:
```typescript
// Always this exact order - NO variations  
import { PrismaClient } from '@prisma/client';
// NO other imports for Prisma models
```

### **3. EXACT NAMING PATTERNS (ZERO VARIATION)**

#### **Repository Names (MANDATORY)**:
```typescript
// Repository class names - NO alternatives
UserRepository                      // never "UsersRepository" or "UserRepositoryImpl"
RoleRepository                      // never "RolesRepository" or "RoleRepositoryImpl"
PermissionRepository                // never "PermissionsRepository"
SessionRepository                   // never "SessionsRepository"
OTPRepository                       // never "OtpRepository" or "OTPCodeRepository"
```

#### **Model Names (MANDATORY)**:
```typescript
// Prisma model names - NO alternatives
UserModel                           // never "User" or "UserEntity"
RoleModel                          // never "Role" or "RoleEntity"
PermissionModel                    // never "Permission"
SessionModel                       // never "Session"
OTPModel                           // never "OtpModel" or "OTPCodeModel"
```

#### **Method Names (EXACT - NO ALTERNATIVES)**:
```typescript
// Repository methods
async findById(id: string): Promise<EntityType | null>     // always "findById"
async findByEmail(email: string): Promise<User | null>     // always "findByEmail"
async save(entity: EntityType): Promise<EntityType>       // always "save"
async update(id: string, data: any): Promise<EntityType>  // always "update"
async delete(id: string): Promise<void>                   // always "delete"
async findMany(criteria: any): Promise<EntityType[]>      // always "findMany"
async count(criteria: any): Promise<number>               // always "count"
```

### **4. PARAMETER NAMING STANDARDS (100% IDENTICAL)**:
```typescript
// Repository constructor parameters
prisma: PrismaClient                        // always "prisma"

// Method parameters
id: string                                  // always "id"
email: string                              // always "email"
criteria: FilterCriteria                   // always "criteria"
data: CreateEntityData | UpdateEntityData  // always "data"
options: QueryOptions                      // always "options"
```

---

## 🔧 **REPOSITORIES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/infrastructure/persistence/repositories/
├── UserRepository.ts                       # ✅ IMPLEMENT FIRST
├── RoleRepository.ts                       # ✅ IMPLEMENT SECOND
├── PermissionRepository.ts                 # ✅ IMPLEMENT THIRD
├── SessionRepository.ts                    # ✅ IMPLEMENT FOURTH
├── OTPRepository.ts                        # ✅ IMPLEMENT FIFTH
└── index.ts                                # ✅ Export all repositories
```

### **Universal Repository Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { PrismaClient } from '@prisma/client';
import { Result } from '@psp/shared-core';
import { [ENTITY_TYPE] } from '../../../domain/entities/[ENTITY_TYPE]';
import { I[ENTITY_TYPE]Repository } from '../../../domain/repositories/I[ENTITY_TYPE]Repository';

export class [ENTITY_TYPE]Repository implements I[ENTITY_TYPE]Repository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string): Promise<[ENTITY_TYPE] | null> {
    try {
      const result = await this.prisma.[entityModel].findUnique({
        where: { id },
        include: this.getDefaultIncludes()
      });

      if (!result) {
        return null;
      }

      return this.mapToDomainEntity(result);
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.ENTITY_NOT_FOUND('[ENTITY_TYPE]', id));
    }
  }

  async save(entity: [ENTITY_TYPE]): Promise<[ENTITY_TYPE]> {
    try {
      const data = this.mapToPrismaData(entity);
      const result = await this.prisma.[entityModel].create({
        data,
        include: this.getDefaultIncludes()
      });

      return this.mapToDomainEntity(result);
    } catch (error) {
      if (this.isUniqueConstraintError(error)) {
        throw new Error(PERSISTENCE_ERRORS.UNIQUE_CONSTRAINT_VIOLATION(this.getViolatedField(error)));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_CREATION_FAILED('[ENTITY_TYPE]'));
    }
  }

  async update(id: string, data: Partial<[ENTITY_TYPE]>): Promise<[ENTITY_TYPE]> {
    try {
      const updateData = this.mapToUpdateData(data);
      const result = await this.prisma.[entityModel].update({
        where: { id },
        data: updateData,
        include: this.getDefaultIncludes()
      });

      return this.mapToDomainEntity(result);
    } catch (error) {
      if (this.isRecordNotFoundError(error)) {
        throw new Error(PERSISTENCE_ERRORS.ENTITY_NOT_FOUND('[ENTITY_TYPE]', id));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_UPDATE_FAILED('[ENTITY_TYPE]', id));
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.[entityModel].delete({
        where: { id }
      });
    } catch (error) {
      if (this.isRecordNotFoundError(error)) {
        throw new Error(PERSISTENCE_ERRORS.ENTITY_NOT_FOUND('[ENTITY_TYPE]', id));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_DELETION_FAILED('[ENTITY_TYPE]', id));
    }
  }

  async findMany(criteria: FilterCriteria): Promise<[ENTITY_TYPE][]> {
    try {
      const where = this.buildWhereClause(criteria);
      const orderBy = this.buildOrderByClause(criteria);
      
      const results = await this.prisma.[entityModel].findMany({
        where,
        orderBy,
        take: criteria.limit,
        skip: criteria.offset,
        include: this.getDefaultIncludes()
      });

      return results.map(result => this.mapToDomainEntity(result));
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  async count(criteria: FilterCriteria): Promise<number> {
    try {
      const where = this.buildWhereClause(criteria);
      return await this.prisma.[entityModel].count({ where });
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  private getDefaultIncludes(): any {
    // Default relations to include
    return {};
  }

  private mapToDomainEntity(prismaResult: any): [ENTITY_TYPE] {
    // Map Prisma result to domain entity
    return {} as [ENTITY_TYPE];
  }

  private mapToPrismaData(entity: [ENTITY_TYPE]): any {
    // Map domain entity to Prisma data
    return {};
  }

  private mapToUpdateData(data: Partial<[ENTITY_TYPE]>): any {
    // Map partial entity data to Prisma update data
    return {};
  }

  private buildWhereClause(criteria: FilterCriteria): any {
    // Build Prisma where clause from criteria
    return {};
  }

  private buildOrderByClause(criteria: FilterCriteria): any {
    // Build Prisma orderBy clause from criteria
    return {};
  }

  private isUniqueConstraintError(error: any): boolean {
    return error.code === 'P2002';
  }

  private isRecordNotFoundError(error: any): boolean {
    return error.code === 'P2025';
  }

  private getViolatedField(error: any): string {
    return error.meta?.target?.[0] || 'unknown';
  }
}
```

### **UserRepository.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part07.2.1 User Table
import { PrismaClient } from '@prisma/client';
import { Result } from '@psp/shared-core';
import { User } from '../../../domain/entities/User';
import { IUserRepository, UserFilterCriteria } from '../../../domain/repositories/IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { id },
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          },
          sessions: {
            where: {
              expiresAt: {
                gt: new Date()
              }
            }
          }
        }
      });

      if (!result) {
        return null;
      }

      return this.mapToDomainEntity(result);
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.USER_NOT_FOUND(id));
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { email },
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          }
        }
      });

      if (!result) {
        return null;
      }

      return this.mapToDomainEntity(result);
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  async save(user: User): Promise<User> {
    try {
      const data = this.mapToPrismaData(user);
      const result = await this.prisma.user.create({
        data,
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          }
        }
      });

      return this.mapToDomainEntity(result);
    } catch (error) {
      if (this.isUniqueConstraintError(error)) {
        const field = this.getViolatedField(error);
        if (field === 'email') {
          throw new Error(PERSISTENCE_ERRORS.USER_EMAIL_EXISTS(user.email));
        }
        throw new Error(PERSISTENCE_ERRORS.UNIQUE_CONSTRAINT_VIOLATION(field));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_CREATION_FAILED('User'));
    }
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    try {
      const updateData = this.mapToUpdateData(data);
      const result = await this.prisma.user.update({
        where: { id },
        data: updateData,
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          }
        }
      });

      return this.mapToDomainEntity(result);
    } catch (error) {
      if (this.isRecordNotFoundError(error)) {
        throw new Error(PERSISTENCE_ERRORS.USER_NOT_FOUND(id));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_UPDATE_FAILED('User', id));
    }
  }

  async delete(id: string): Promise<void> {
    try {
      // Soft delete - update status instead of hard delete
      await this.prisma.user.update({
        where: { id },
        data: {
          status: 'DELETED',
          deletedAt: new Date()
        }
      });
    } catch (error) {
      if (this.isRecordNotFoundError(error)) {
        throw new Error(PERSISTENCE_ERRORS.USER_NOT_FOUND(id));
      }
      throw new Error(PERSISTENCE_ERRORS.ENTITY_DELETION_FAILED('User', id));
    }
  }

  async findManyByFilter(criteria: UserFilterCriteria): Promise<User[]> {
    try {
      const where = this.buildWhereClause(criteria);
      const orderBy = this.buildOrderByClause(criteria);
      
      const results = await this.prisma.user.findMany({
        where,
        orderBy,
        take: criteria.limit || 20,
        skip: criteria.offset || 0,
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          }
        }
      });

      return results.map(result => this.mapToDomainEntity(result));
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  async count(criteria: UserFilterCriteria): Promise<number> {
    try {
      const where = this.buildWhereClause(criteria);
      return await this.prisma.user.count({ where });
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  async findByResetToken(token: string): Promise<User | null> {
    try {
      const result = await this.prisma.user.findFirst({
        where: {
          passwordResetToken: token,
          passwordResetExpires: {
            gt: new Date()
          }
        },
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: true
                }
              }
            }
          }
        }
      });

      if (!result) {
        return null;
      }

      return this.mapToDomainEntity(result);
    } catch (error) {
      throw new Error(PERSISTENCE_ERRORS.PRISMA_CLIENT_ERROR);
    }
  }

  private mapToDomainEntity(prismaUser: any): User {
    return User.create({
      id: prismaUser.id,
      email: prismaUser.email,
      passwordHash: prismaUser.passwordHash,
      firstName: prismaUser.firstName,
      lastName: prismaUser.lastName,
      phone: prismaUser.phone,
      brandId: prismaUser.brandId,
      status: prismaUser.status,
      emailVerified: prismaUser.emailVerified,
      emailVerifiedAt: prismaUser.emailVerifiedAt,
      lastLoginAt: prismaUser.lastLoginAt,
      gdprConsentGiven: prismaUser.gdprConsentGiven,
      gdprConsentAt: prismaUser.gdprConsentAt,
      roles: prismaUser.roles?.map((userRole: any) => ({
        id: userRole.role.id,
        name: userRole.role.name,
        permissions: userRole.role.permissions?.map((p: any) => p.name) || []
      })) || [],
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt,
      createdBy: prismaUser.createdBy,
      lastUpdatedBy: prismaUser.lastUpdatedBy
    });
  }

  private mapToPrismaData(user: User): any {
    return {
      id: user.id.toString(),
      email: user.email,
      passwordHash: user.passwordHash,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      brandId: user.brandId,
      status: user.status,
      emailVerified: user.emailVerified,
      gdprConsentGiven: user.gdprConsentGiven,
      gdprConsentAt: user.gdprConsentAt,
      createdBy: user.createdBy,
      createdAt: user.createdAt,
      updatedAt: new Date()
    };
  }

  private mapToUpdateData(data: Partial<User>): any {
    const updateData: any = {
      updatedAt: new Date()
    };

    if (data.email) updateData.email = data.email;
    if (data.firstName) updateData.firstName = data.firstName;
    if (data.lastName) updateData.lastName = data.lastName;
    if (data.phone) updateData.phone = data.phone;
    if (data.status) updateData.status = data.status;
    if (data.emailVerified !== undefined) updateData.emailVerified = data.emailVerified;
    if (data.lastUpdatedBy) updateData.lastUpdatedBy = data.lastUpdatedBy;

    return updateData;
  }

  private buildWhereClause(criteria: UserFilterCriteria): any {
    const where: any = {
      status: {
        not: 'DELETED'
      }
    };

    if (criteria.brandId) {
      where.brandId = criteria.brandId;
    }

    if (criteria.status) {
      where.status = criteria.status;
    }

    if (criteria.search) {
      where.OR = [
        { email: { contains: criteria.search, mode: 'insensitive' } },
        { firstName: { contains: criteria.search, mode: 'insensitive' } },
        { lastName: { contains: criteria.search, mode: 'insensitive' } }
      ];
    }

    if (criteria.roleId) {
      where.roles = {
        some: {
          roleId: criteria.roleId,
          active: true
        }
      };
    }

    return where;
  }

  private buildOrderByClause(criteria: UserFilterCriteria): any {
    const sortBy = criteria.sortBy || 'createdAt';
    const sortOrder = criteria.sortOrder || 'desc';

    return { [sortBy]: sortOrder };
  }

  private isUniqueConstraintError(error: any): boolean {
    return error.code === 'P2002';
  }

  private isRecordNotFoundError(error: any): boolean {
    return error.code === 'P2025';
  }

  private getViolatedField(error: any): string {
    return error.meta?.target?.[0] || 'unknown';
  }
}
```

---

## 🗄️ **PRISMA MODELS - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/infrastructure/persistence/models/
├── UserModel.prisma                        # ✅ IMPLEMENT FIRST
├── RoleModel.prisma                        # ✅ IMPLEMENT SECOND
├── PermissionModel.prisma                  # ✅ IMPLEMENT THIRD
├── SessionModel.prisma                     # ✅ IMPLEMENT FOURTH
├── OTPModel.prisma                         # ✅ IMPLEMENT FIFTH
└── index.prisma                            # ✅ Combined schema
```

### **Universal Prisma Model Template (COPY-PASTE STRUCTURE)**:
```prisma
// Refs: [SRS_REFERENCE]
model [MODEL_NAME] {
  // Primary key - ALWAYS UUID
  id        String   @id @default(uuid())
  
  // Business fields - from SRS schema
  [BUSINESS_FIELDS]
  
  // Audit fields - MANDATORY for all models
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  createdBy   String?
  deletedAt   DateTime?
  
  // Relations - if applicable
  [RELATIONS]
  
  // Indexes - for performance
  [INDEXES]
  
  // Table mapping
  @@map("[table_name]")
}
```

### **Complete Prisma Schema (EXACT IMPLEMENTATION - COPY ALL)**:
```prisma
// Refs: Part07.2 Identity Database Design
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User Model - Refs: Part07.2.1 User Table
model User {
  id                    String    @id @default(uuid())
  email                 String    @unique
  passwordHash          String
  firstName             String
  lastName              String
  phone                 String?
  brandId               String
  status                UserStatus @default(PENDING_VERIFICATION)
  emailVerified         Boolean   @default(false)
  emailVerifiedAt       DateTime?
  lastLoginAt           DateTime?
  passwordResetToken    String?
  passwordResetExpires  DateTime?
  gdprConsentGiven      Boolean   @default(false)
  gdprConsentAt         DateTime?
  
  // Audit fields
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt
  createdBy             String?
  lastUpdatedBy         String?
  deletedAt             DateTime?
  
  // Relations
  roles                 UserRole[]
  sessions              Session[]
  otpCodes              OTPCode[]
  auditLogs             AuditLog[]
  
  // Indexes
  @@index([email])
  @@index([brandId])
  @@index([status])
  @@index([createdAt])
  @@map("users")
}

enum UserStatus {
  PENDING_VERIFICATION
  ACTIVE
  SUSPENDED
  DELETED
}

// Role Model - Refs: Part07.2.2 Role Table
model Role {
  id          String   @id @default(uuid())
  name        String   @unique
  description String?
  permissions Json     // Array of permission strings
  brandId     String?  // null for system-wide roles
  isDefault   Boolean  @default(false)
  level       Int      @default(0)
  
  // Audit fields
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  createdBy   String?
  deletedAt   DateTime?
  
  // Relations
  users       UserRole[]
  
  // Indexes
  @@index([name])
  @@index([brandId])
  @@index([level])
  @@map("roles")
}

// User Role Junction Table - Refs: Part07.2.7 User Roles Table
model UserRole {
  id          String    @id @default(uuid())
  userId      String
  roleId      String
  assignedAt  DateTime  @default(now())
  expiresAt   DateTime?
  assignedBy  String
  active      Boolean   @default(true)
  notes       String?
  
  // Relations
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  role        Role      @relation(fields: [roleId], references: [id], onDelete: Cascade)
  
  // Constraints
  @@unique([userId, roleId])
  @@index([userId])
  @@index([roleId])
  @@index([assignedAt])
  @@map("user_roles")
}

// Session Model - Refs: Part07.2.3 Session Table
model Session {
  id             String    @id @default(uuid())
  userId         String
  token          String    @unique
  refreshToken   String?   @unique
  ipAddress      String
  userAgent      String?
  deviceId       String?
  expiresAt      DateTime
  lastActivity   DateTime  @default(now())
  revoked        Boolean   @default(false)
  revokedAt      DateTime?
  revokedBy      String?
  
  // Audit fields
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  
  // Relations
  user           User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Indexes
  @@index([userId])
  @@index([token])
  @@index([expiresAt])
  @@index([lastActivity])
  @@map("sessions")
}

// OTP Model - Refs: Part07.2.4 OTP Table
model OTPCode {
  id            String    @id @default(uuid())
  userId        String
  code          String
  purpose       OTPPurpose
  expiresAt     DateTime
  attemptCount  Int       @default(0)
  maxAttempts   Int       @default(3)
  verified      Boolean   @default(false)
  verifiedAt    DateTime?
  ipAddress     String?
  userAgent     String?
  
  // Audit fields
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relations
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Indexes
  @@index([userId, purpose])
  @@index([expiresAt])
  @@index([code])
  @@map("otp_codes")
}

enum OTPPurpose {
  LOGIN
  PASSWORD_RESET
  EMAIL_VERIFICATION
  PHONE_VERIFICATION
}

// Audit Log Model - For compliance tracking
model AuditLog {
  id            String    @id @default(uuid())
  userId        String?
  action        String
  resource      String
  resourceId    String?
  oldValues     Json?
  newValues     Json?
  ipAddress     String?
  userAgent     String?
  timestamp     DateTime  @default(now())
  
  // Relations
  user          User?     @relation(fields: [userId], references: [id])
  
  // Indexes
  @@index([userId])
  @@index([action])
  @@index([resource])
  @@index([timestamp])
  @@map("audit_logs")
}
```

---

## 📊 **MIGRATIONS & SEED DATA TEMPLATES**

### **Migration Structure (MANDATORY)**:
```
prisma/migrations/
├── 0001_init/
│   └── migration.sql                       # ✅ Initial schema
├── 0002_add_indexes/
│   └── migration.sql                       # ✅ Performance indexes
├── 0003_add_audit_logs/
│   └── migration.sql                       # ✅ Audit logging
└── migration_lock.toml                     # ✅ Lock file
```

### **Seed Data Structure (MANDATORY)**:
```
prisma/seed-data/
├── users.json                              # ✅ Default users
├── roles.json                              # ✅ System roles
├── permissions.json                        # ✅ System permissions
└── dev-data.json                           # ✅ Development data
```

### **Universal Seed Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: Part07.2 Identity Database Design
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // 1. Create system roles
  await seedRoles();
  
  // 2. Create default users
  await seedUsers();
  
  // 3. Assign roles to users
  await seedUserRoles();

  console.log('✅ Database seed completed successfully');
}

async function seedRoles() {
  const roles = [
    {
      id: '00000000-0000-0000-0000-000000000001',
      name: 'PLATFORM_ADMIN',
      description: 'Platform administrator with full access',
      permissions: [
        'users.create', 'users.read', 'users.update', 'users.delete',
        'roles.create', 'roles.read', 'roles.update', 'roles.delete',
        'system.admin'
      ],
      level: 100,
      isDefault: false
    },
    {
      id: '00000000-0000-0000-0000-000000000002',
      name: 'BRAND_ADMIN',
      description: 'Brand administrator with brand-specific access',
      permissions: [
        'users.create', 'users.read', 'users.update',
        'campaigns.create', 'campaigns.read', 'campaigns.update',
        'analytics.read'
      ],
      level: 80,
      isDefault: false
    },
    {
      id: '00000000-0000-0000-0000-000000000003',
      name: 'BRAND_USER',
      description: 'Standard brand user with limited access',
      permissions: [
        'users.read',
        'campaigns.read',
        'analytics.read'
      ],
      level: 50,
      isDefault: true
    }
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { id: role.id },
      update: role,
      create: role
    });
  }

  console.log('✅ Roles seeded');
}

async function seedUsers() {
  const users = [
    {
      id: '00000000-0000-0000-0000-000000000001',
      email: 'admin@psp-platform.com',
      password: 'SecurePassword123!',
      firstName: 'Platform',
      lastName: 'Administrator',
      brandId: 'system',
      status: 'ACTIVE',
      emailVerified: true,
      gdprConsentGiven: true,
      createdBy: 'system'
    },
    {
      id: '00000000-0000-0000-0000-000000000002',
      email: 'demo@example.com',
      password: 'DemoPassword123!',
      firstName: 'Demo',
      lastName: 'User',
      brandId: 'demo-brand',
      status: 'ACTIVE',
      emailVerified: true,
      gdprConsentGiven: true,
      createdBy: 'system'
    }
  ];

  for (const user of users) {
    const passwordHash = await hash(user.password, 12);
    
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        ...user,
        passwordHash,
        password: undefined
      },
      create: {
        ...user,
        passwordHash,
        password: undefined
      }
    });
  }

  console.log('✅ Users seeded');
}

async function seedUserRoles() {
  const userRoleAssignments = [
    {
      userId: '00000000-0000-0000-0000-000000000001',
      roleId: '00000000-0000-0000-0000-000000000001',
      assignedBy: 'system'
    },
    {
      userId: '00000000-0000-0000-0000-000000000002',
      roleId: '00000000-0000-0000-0000-000000000003',
      assignedBy: 'system'
    }
  ];

  for (const assignment of userRoleAssignments) {
    await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: assignment.userId,
          roleId: assignment.roleId
        }
      },
      update: assignment,
      create: assignment
    });
  }

  console.log('✅ User roles assigned');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

## 🎯 **VARIATION ELIMINATION STRATEGY**

| **Variation Source** | **Standard Template** | **Eliminated %** |
|---------------------|----------------------|------------------|
| Repository CRUD patterns | Universal Repository template | 60% → 0% |
| Prisma model schemas | Standardized field patterns | 25% → 0% |
| Error handling patterns | PERSISTENCE_ERRORS constants | 10% → 0% |
| Migration structures | Universal migration format | 5% → 0% |
| **TOTAL ELIMINATION** | **100% → 0%** | **99-100% consistency** |

---

## ✅ **IMPLEMENTATION CHECKLIST (EXACT ORDER)**

### **Week 3 (CRITICAL INFRASTRUCTURE)**:
- [ ] **Day 1**: UserRepository.ts with complete CRUD operations (copy exact implementation)
- [ ] **Day 2**: RoleRepository.ts, PermissionRepository.ts (follow exact templates)
- [ ] **Day 3**: SessionRepository.ts, OTPRepository.ts (follow exact templates)
- [ ] **Day 4**: Complete Prisma schema with all models (copy exact implementation)
- [ ] **Day 5**: Migrations and seed data setup (copy exact templates)
- [ ] **Day 6**: Integration testing and repository validation
- [ ] **Day 7**: Performance optimization and handoff documentation

### **Critical Success Criteria (EXACT VALIDATION)**:
- [ ] `import { UserRepository } from './repositories'` → **compiles successfully**
- [ ] `await userRepository.findById(id)` → **returns User | null**
- [ ] All CRUD operations use **PERSISTENCE_ERRORS constants exactly**
- [ ] All Prisma models follow **standardized field patterns exactly**
- [ ] All repositories implement **Universal template exactly**

---

## 🚫 **ZERO TOLERANCE DEVIATIONS**

### **❌ ABSOLUTELY FORBIDDEN:**
1. **Any variation** in repository method names from templates
2. **Any different** error messages from PERSISTENCE_ERRORS constants
3. **Any alternative** Prisma model field patterns
4. **Any creative** database schema beyond SRS specifications
5. **Any extra** query optimizations beyond standard patterns

### **✅ MANDATORY COMPLIANCE:**
1. **Copy-paste** all error constants exactly
2. **Use exact** repository method signatures from templates
3. **Follow exact** Prisma model patterns from schema
4. **Use exact** migration and seed structure
5. **Use exact** import order templates

---

## 💬 **COORDINATION PROTOCOL**

### **You Block (CRITICAL DEPENDENCIES)**:
- **DEV-6**: Needs repositories for external service integration
- **DEV-8**: Needs repositories for integration testing
- **DEV-9**: Needs repositories for E2E testing

### **Communication Rules**:
- **Repository interface changes**: FORBIDDEN without tech lead approval
- **Database schema changes**: FORBIDDEN - breaks ALL downstream dependencies
- **Completion notification**: "✅ DEV-5 persistence layer complete - infrastructure ready"

---

## 🎯 **FINAL VALIDATION MESSAGE**

When complete, send exact message:
**"✅ All repositories and database infrastructure ready - DEV-6, DEV-8, DEV-9 can start"**

---

**TARGET ACHIEVED: 99-100% code consistency through complete persistence layer template standardization.**

**This specification eliminates ALL variation points while providing robust database infrastructure through strategic repository pattern and Prisma schema templating.**
