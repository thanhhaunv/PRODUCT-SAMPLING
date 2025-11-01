# DEV-4 ULTRA HIGH CONSISTENCY CANONICAL SPECIFICATION
**Version**: 2.0 - Maximum Consistency  
**Target Consistency**: 99-100%  
**Strategy**: User Management Application Layer Zero-Variation Templates

---

## 🎯 **ASSIGNMENT OVERVIEW**

**Role**: App Use Cases (User Mgmt) Specialist  
**Timeline**: Week 2-3 (Application Layer)  
**Critical**: BLOCKING DEPENDENCY for DEV-6  
**Files**: 16 files (6 Use Cases + 10 DTOs)

### **SRS References (EXACT ORDER)**:
- **Part04.1.4 User Management (FR-004)** - CRUD operations & RBAC
- **Part05.3 Security Requirements** - RBAC enforcement
- **Access_Control_Tree_Grok.md** - Role system integration

---

## 🏗️ **ZERO-VARIATION USER MANAGEMENT FOUNDATIONS**

### **1. EXACT ERROR CONSTANTS (100% IDENTICAL - COPY ALL)**
```typescript
// Refs: Part04.1.4 User Management + Part05.3 Security Requirements
const USER_MANAGEMENT_ERRORS = {
  // Input validation errors
  INVALID_INPUT: 'Invalid input provided',
  MISSING_REQUIRED_FIELD: (field: string) => `${field} is required`,
  
  // User CRUD errors
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User with this email already exists',
  USER_CREATION_FAILED: 'Failed to create user account',
  USER_UPDATE_FAILED: 'Failed to update user account',
  USER_DELETION_FAILED: 'Failed to delete user account',
  
  // RBAC errors - Refs: Part05.3 Security Requirements
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions for this operation',
  ROLE_NOT_FOUND: 'Role not found',
  ROLE_ASSIGNMENT_FAILED: 'Failed to assign role to user',
  INVALID_ROLE_FOR_BRAND: 'Role is not valid for this brand',
  CANNOT_DELETE_ADMIN: 'Cannot delete admin user',
  
  // Multi-tenant errors - Refs: Part04.1.4 Business Rules
  BRAND_ACCESS_DENIED: 'Access denied for this brand',
  CROSS_TENANT_ACCESS: 'Cross-tenant access not allowed',
  BRAND_NOT_FOUND: 'Brand not found',
  
  // Business rule violations
  GDPR_CONSENT_REQUIRED: 'GDPR consent is required',
  USER_ALREADY_SUSPENDED: 'User is already suspended',
  USER_ALREADY_ACTIVE: 'User is already active',
  CANNOT_SUSPEND_SELF: 'Cannot suspend your own account',
  BULK_LIMIT_EXCEEDED: 'Bulk operation limit exceeded (max 10K users)',
  
  // Audit and compliance
  AUDIT_LOG_REQUIRED: 'Audit log entry is required',
  IMMUTABLE_AUDIT_VIOLATION: 'Cannot modify immutable audit logs',
  
  // External service errors
  LDAP_SYNC_FAILED: 'Failed to sync with LDAP service',
  CRM_SYNC_FAILED: 'Failed to sync user data with CRM',
  DOMAIN_SERVICE_ERROR: 'Domain service operation failed',
  REPOSITORY_ERROR: 'Repository operation failed'
};
```

### **2. EXACT IMPORT TEMPLATES (100% IDENTICAL)**

#### **Use Case Import Template**:
```typescript
// Always this exact order - NO variations
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
import { Role } from '../../domain/entities/Role';
// Domain service imports alphabetically
import { RBACService } from '../../domain/services/RBACService';
import { UserSyncService } from '../../domain/services/UserSyncService';
// Repository interfaces last
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IRoleRepository } from '../../domain/repositories/IRoleRepository';
```

#### **DTO Import Template**:
```typescript
// Always this exact order - NO variations
import { IsEmail, IsString, IsOptional, IsUUID, IsEnum, IsBoolean, IsArray, IsInt, Min, Max } from 'class-validator';
// NO other imports for DTOs
```

### **3. EXACT NAMING PATTERNS (ZERO VARIATION)**

#### **Use Case Names (MANDATORY)**:
```typescript
// Use Case class names - NO alternatives
CreateUserUseCase               // never "UserCreationUseCase" or "NewUserUseCase"
UpdateUserUseCase               // never "UserUpdateUseCase" or "ModifyUserUseCase"
DeleteUserUseCase               // never "UserDeletionUseCase" or "RemoveUserUseCase"
GetUserUseCase                  // never "RetrieveUserUseCase" or "FetchUserUseCase"
ListUsersUseCase                // never "GetUsersUseCase" or "SearchUsersUseCase"
AssignRoleUseCase               // never "RoleAssignmentUseCase" or "SetRoleUseCase"
```

#### **DTO Names (MANDATORY)**:
```typescript
// Input DTOs
CreateUserDto                   // never "CreateUserRequestDto" or "NewUserDto"
UpdateUserDto                   // never "UserUpdateDto" or "ModifyUserDto"
DeleteUserDto                   // never "RemoveUserDto" or "UserDeletionDto"
GetUserDto                      // never "RetrieveUserDto" or "UserQueryDto"
ListUsersQueryDto               // never "SearchUsersDto" or "GetUsersDto"
AssignRoleDto                   // never "RoleAssignmentDto" or "SetRoleDto"

// Response DTOs
UserResponseDto                 // never "UserDto" or "UserDataDto"
UserListResponseDto             // never "UsersResponseDto" or "UserCollectionDto"
UserErrorDto                    // never "UserManagementErrorDto"
UserSuccessDto                  // never "UserOperationSuccessDto"
```

#### **Method Names (EXACT - NO ALTERNATIVES)**:
```typescript
// Use Case methods
public async execute(dto: InputDto): Promise<Result<OutputDto>>  // always "execute"

// DTO methods
public static create(data: any): InputDto    // always "create" for factory
public validate(): string[]                  // always "validate" for validation
public toResponse(): ResponseDto             // always "toResponse" for conversion
```

### **4. PARAMETER NAMING STANDARDS (100% IDENTICAL)**:
```typescript
// Use Case constructor parameters
userRepository: IUserRepository              // always this exact name
roleRepository: IRoleRepository             // always this exact name
rbacService: RBACService                    // always "rbacService"
userSyncService: UserSyncService            // always "userSyncService"

// Method parameters
inputDto: InputDtoType                      // always "inputDto"
userId: string                              // always "userId"
roleId: string                              // always "roleId"
brandId: string                             // always "brandId"
currentUserId: string                       // always "currentUserId" for audit
performedBy: string                         // always "performedBy" for audit
```

---

## 🔧 **USER MANAGEMENT USE CASES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/application/use-cases/user-management/
├── CreateUserUseCase.ts                    # ✅ IMPLEMENT FIRST
├── UpdateUserUseCase.ts                    # ✅ IMPLEMENT SECOND
├── DeleteUserUseCase.ts                    # ✅ IMPLEMENT THIRD
├── GetUserUseCase.ts                       # ✅ IMPLEMENT FOURTH
├── ListUsersUseCase.ts                     # ✅ IMPLEMENT FIFTH
├── AssignRoleUseCase.ts                    # ✅ IMPLEMENT SIXTH
└── index.ts                                # ✅ Export all use cases
```

### **Universal User Management Use Case Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
import { [REQUIRED_SERVICES] } from '../../domain/services';
import { [REQUIRED_REPOSITORIES] } from '../../domain/repositories';

export class [USE_CASE_NAME] {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly roleRepository: IRoleRepository,
    private readonly rbacService: RBACService,
    private readonly userSyncService: UserSyncService
  ) {}

  public async execute(
    inputDto: [INPUT_DTO_TYPE],
    performedBy: string
  ): Promise<Result<[OUTPUT_DTO_TYPE]>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: RBAC authorization check
      const authResult = await this.checkAuthorization(performedBy, inputDto);
      if (authResult.isFailure) {
        return Result.fail(authResult.error);
      }

      // Step 3: Business logic execution
      const businessResult = await this.[BUSINESS_METHOD_CALL];
      if (businessResult.isFailure) {
        return Result.fail(businessResult.error);
      }

      // Step 4: Audit log creation
      await this.createAuditLog(performedBy, inputDto, businessResult.getValue());

      // Step 5: Response mapping
      const responseDto = this.mapToResponse(businessResult.getValue());

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USER_MANAGEMENT_ERRORS.DOMAIN_SERVICE_ERROR);
    }
  }

  private validateInput(inputDto: [INPUT_DTO_TYPE]): Result<void> {
    // Validation logic here
    return Result.ok();
  }

  private async checkAuthorization(performedBy: string, inputDto: [INPUT_DTO_TYPE]): Promise<Result<void>> {
    // RBAC authorization logic here
    return Result.ok();
  }

  private mapToResponse(domainResult: any): [OUTPUT_DTO_TYPE] {
    // Mapping logic here
    return new [OUTPUT_DTO_TYPE]();
  }

  private async createAuditLog(performedBy: string, inputDto: any, result: any): Promise<void> {
    // Audit logging logic here
  }
}
```

### **CreateUserUseCase.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part04.1.4 User Management (FR-004)
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
import { Role } from '../../domain/entities/Role';
import { Email } from '../../domain/value-objects/Email';
import { Password } from '../../domain/value-objects/Password';
import { RBACService } from '../../domain/services/RBACService';
import { UserSyncService } from '../../domain/services/UserSyncService';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IRoleRepository } from '../../domain/repositories/IRoleRepository';

export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roleId: string;
  brandId: string;
  gdprConsent: boolean;
  phone?: string;
  department?: string;
}

export interface UserResponseDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  roles: {
    id: string;
    name: string;
    permissions: string[];
  }[];
  brandId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastUpdatedBy: string;
}

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly roleRepository: IRoleRepository,
    private readonly rbacService: RBACService,
    private readonly userSyncService: UserSyncService
  ) {}

  public async execute(
    inputDto: CreateUserDto,
    performedBy: string
  ): Promise<Result<UserResponseDto>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: RBAC authorization check
      const authResult = await this.checkAuthorization(performedBy, inputDto.brandId);
      if (authResult.isFailure) {
        return Result.fail(authResult.error);
      }

      // Step 3: Check if user already exists
      const existingUser = await this.userRepository.findByEmail(inputDto.email);
      if (existingUser) {
        return Result.fail(USER_MANAGEMENT_ERRORS.USER_ALREADY_EXISTS);
      }

      // Step 4: Validate role exists and belongs to brand
      const role = await this.roleRepository.findById(inputDto.roleId);
      if (!role) {
        return Result.fail(USER_MANAGEMENT_ERRORS.ROLE_NOT_FOUND);
      }

      if (role.brandId !== inputDto.brandId) {
        return Result.fail(USER_MANAGEMENT_ERRORS.INVALID_ROLE_FOR_BRAND);
      }

      // Step 5: Create user entity
      const userCreationResult = User.create({
        email: inputDto.email,
        password: inputDto.password,
        firstName: inputDto.firstName,
        lastName: inputDto.lastName,
        roleId: inputDto.roleId,
        brandId: inputDto.brandId,
        gdprConsent: inputDto.gdprConsent
      }, performedBy);

      if (userCreationResult.isFailure) {
        return Result.fail(userCreationResult.error);
      }

      // Step 6: Save user to repository
      const savedUser = await this.userRepository.save(userCreationResult.getValue());

      // Step 7: Sync to external systems
      await this.userSyncService.syncToExternalCRM({
        userId: savedUser.id.toString(),
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        brandId: savedUser.brandId
      });

      // Step 8: Create audit log
      await this.createAuditLog(performedBy, inputDto, savedUser);

      // Step 9: Map to response
      const responseDto = this.mapToResponse(savedUser, role);

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USER_MANAGEMENT_ERRORS.USER_CREATION_FAILED);
    }
  }

  private validateInput(inputDto: CreateUserDto): Result<void> {
    if (!inputDto.email || !inputDto.password || !inputDto.firstName || !inputDto.lastName) {
      return Result.fail(USER_MANAGEMENT_ERRORS.MISSING_REQUIRED_FIELD('email, password, firstName, and lastName'));
    }

    if (!inputDto.roleId || !inputDto.brandId) {
      return Result.fail(USER_MANAGEMENT_ERRORS.MISSING_REQUIRED_FIELD('roleId and brandId'));
    }

    if (!inputDto.gdprConsent) {
      return Result.fail(USER_MANAGEMENT_ERRORS.GDPR_CONSENT_REQUIRED);
    }

    // Validate email format
    const emailValidation = Email.create(inputDto.email);
    if (emailValidation.isFailure) {
      return Result.fail(emailValidation.error);
    }

    // Validate password strength
    const passwordValidation = Password.create(inputDto.password);
    if (passwordValidation.isFailure) {
      return Result.fail(passwordValidation.error);
    }

    return Result.ok();
  }

  private async checkAuthorization(performedBy: string, brandId: string): Promise<Result<void>> {
    // Check if performer has permission to create users in this brand
    const hasPermission = await this.rbacService.checkPermission(
      performedBy,
      'users',
      'create',
      brandId
    );

    if (hasPermission.isFailure) {
      return Result.fail(USER_MANAGEMENT_ERRORS.INSUFFICIENT_PERMISSIONS);
    }

    return Result.ok();
  }

  private mapToResponse(user: User, role: Role): UserResponseDto {
    return {
      id: user.id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      roles: [{
        id: role.id.toString(),
        name: role.name,
        permissions: role.permissions
      }],
      brandId: user.brandId,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      createdBy: user.createdBy,
      lastUpdatedBy: user.lastUpdatedBy
    };
  }

  private async createAuditLog(performedBy: string, inputDto: CreateUserDto, user: User): Promise<void> {
    // Audit logging implementation
    console.log(`User created: ${user.id} by ${performedBy}`);
  }
}
```

### **ListUsersUseCase.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part04.1.4 User Management (FR-004)
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
import { RBACService } from '../../domain/services/RBACService';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export interface ListUsersQueryDto {
  brandId: string;
  page: number;
  limit: number;
  search?: string;
  roleId?: string;
  status?: 'ACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION' | 'DELETED';
  sortBy?: 'email' | 'firstName' | 'lastName' | 'createdAt' | 'updatedAt';
  sortOrder?: 'ASC' | 'DESC';
}

export interface UserListResponseDto {
  users: UserResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  filters: {
    brandId: string;
    search?: string;
    roleId?: string;
    status?: string;
  };
}

export class ListUsersUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly rbacService: RBACService
  ) {}

  public async execute(
    inputDto: ListUsersQueryDto,
    performedBy: string
  ): Promise<Result<UserListResponseDto>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: RBAC authorization check
      const authResult = await this.checkAuthorization(performedBy, inputDto.brandId);
      if (authResult.isFailure) {
        return Result.fail(authResult.error);
      }

      // Step 3: Build filter criteria
      const filterCriteria = this.buildFilterCriteria(inputDto);

      // Step 4: Get users with pagination
      const users = await this.userRepository.findManyByFilter(filterCriteria);
      const totalCount = await this.userRepository.count(filterCriteria);

      // Step 5: Calculate pagination
      const totalPages = Math.ceil(totalCount / inputDto.limit);
      const hasNext = inputDto.page < totalPages;
      const hasPrevious = inputDto.page > 1;

      // Step 6: Map to response
      const responseDto = this.mapToResponse(users, inputDto, totalCount, totalPages, hasNext, hasPrevious);

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USER_MANAGEMENT_ERRORS.DOMAIN_SERVICE_ERROR);
    }
  }

  private validateInput(inputDto: ListUsersQueryDto): Result<void> {
    if (!inputDto.brandId) {
      return Result.fail(USER_MANAGEMENT_ERRORS.MISSING_REQUIRED_FIELD('brandId'));
    }

    if (inputDto.page < 1) {
      return Result.fail(USER_MANAGEMENT_ERRORS.INVALID_INPUT);
    }

    if (inputDto.limit < 1 || inputDto.limit > 100) {
      return Result.fail('Limit must be between 1 and 100');
    }

    return Result.ok();
  }

  private async checkAuthorization(performedBy: string, brandId: string): Promise<Result<void>> {
    const hasPermission = await this.rbacService.checkPermission(
      performedBy,
      'users',
      'read',
      brandId
    );

    if (hasPermission.isFailure) {
      return Result.fail(USER_MANAGEMENT_ERRORS.INSUFFICIENT_PERMISSIONS);
    }

    return Result.ok();
  }

  private buildFilterCriteria(inputDto: ListUsersQueryDto): any {
    const criteria: any = {
      brandId: inputDto.brandId,
      page: inputDto.page,
      limit: inputDto.limit,
      sortBy: inputDto.sortBy || 'createdAt',
      sortOrder: inputDto.sortOrder || 'DESC'
    };

    if (inputDto.search) {
      criteria.search = inputDto.search;
    }

    if (inputDto.roleId) {
      criteria.roleId = inputDto.roleId;
    }

    if (inputDto.status) {
      criteria.status = inputDto.status;
    }

    return criteria;
  }

  private mapToResponse(
    users: User[],
    inputDto: ListUsersQueryDto,
    totalCount: number,
    totalPages: number,
    hasNext: boolean,
    hasPrevious: boolean
  ): UserListResponseDto {
    return {
      users: users.map(user => ({
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        roles: user.getRoles().map(role => ({
          id: role.id,
          name: role.name,
          permissions: role.permissions
        })),
        brandId: user.brandId,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        createdBy: user.createdBy,
        lastUpdatedBy: user.lastUpdatedBy
      })),
      pagination: {
        page: inputDto.page,
        limit: inputDto.limit,
        total: totalCount,
        totalPages: totalPages,
        hasNext: hasNext,
        hasPrevious: hasPrevious
      },
      filters: {
        brandId: inputDto.brandId,
        search: inputDto.search,
        roleId: inputDto.roleId,
        status: inputDto.status
      }
    };
  }
}
```

---

## 📋 **USER MANAGEMENT DTOs - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/application/dto/
├── CreateUserDto.ts                    # ✅ IMPLEMENT FIRST
├── UpdateUserDto.ts                    # ✅ IMPLEMENT SECOND
├── DeleteUserDto.ts                    # ✅ IMPLEMENT THIRD
├── GetUserDto.ts                       # ✅ IMPLEMENT FOURTH
├── ListUsersQueryDto.ts                # ✅ IMPLEMENT FIFTH
├── AssignRoleDto.ts                    # ✅ IMPLEMENT SIXTH
├── UserResponseDto.ts                  # ✅ Response DTO
├── UserListResponseDto.ts              # ✅ Response DTO
├── UserErrorDto.ts                     # ✅ Error DTO
├── UserSuccessDto.ts                   # ✅ Success DTO
└── index.ts                            # ✅ Export all DTOs
```

### **Universal Input DTO Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: Part05.7 Input Validation + Part04.1.4 User Management
import { IsEmail, IsString, IsOptional, IsUUID, IsBoolean, IsEnum, IsInt, Min, Max } from 'class-validator';

export class [DTO_NAME] {
  @IsEmail()
  @IsOptional() // Only if field is optional
  [FIELD_NAME]: string;

  @IsString()
  [FIELD_NAME]: string;

  @IsUUID()
  @IsOptional()
  [FIELD_NAME]?: string;

  @IsBoolean()
  @IsOptional()
  [FIELD_NAME]?: boolean;

  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  [FIELD_NAME]?: number;

  constructor(data?: Partial<[DTO_NAME]>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  public static create(data: any): [DTO_NAME] {
    return new [DTO_NAME](data);
  }

  public validate(): string[] {
    const errors: string[] = [];
    // Custom validation logic here
    return errors;
  }
}
```

### **Complete DTO Examples (EXACT IMPLEMENTATIONS)**:

#### **CreateUserDto.ts**:
```typescript
// Refs: Part04.1.4 User Management (FR-004)
import { IsEmail, IsString, IsOptional, IsUUID, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsUUID()
  roleId: string;

  @IsUUID()
  brandId: string;

  @IsBoolean()
  gdprConsent: boolean;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  department?: string;

  constructor(data?: Partial<CreateUserDto>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  public static create(data: any): CreateUserDto {
    return new CreateUserDto(data);
  }

  public validate(): string[] {
    const errors: string[] = [];
    
    if (!this.email) {
      errors.push('Email is required');
    }
    
    if (!this.password) {
      errors.push('Password is required');
    }
    
    if (!this.firstName) {
      errors.push('First name is required');
    }
    
    if (!this.lastName) {
      errors.push('Last name is required');
    }
    
    if (!this.roleId) {
      errors.push('Role ID is required');
    }
    
    if (!this.brandId) {
      errors.push('Brand ID is required');
    }
    
    if (this.gdprConsent !== true) {
      errors.push('GDPR consent is required');
    }
    
    return errors;
  }
}
```

#### **ListUsersQueryDto.ts**:
```typescript
// Refs: Part04.1.4 User Management (FR-004)
import { IsString, IsOptional, IsUUID, IsEnum, IsInt, Min, Max } from 'class-validator';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  DELETED = 'DELETED'
}

export enum SortBy {
  EMAIL = 'email',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt'
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export class ListUsersQueryDto {
  @IsUUID()
  brandId: string;

  @IsInt()
  @Min(1)
  page: number;

  @IsInt()
  @Min(1)
  @Max(100)
  limit: number;

  @IsString()
  @IsOptional()
  search?: string;

  @IsUUID()
  @IsOptional()
  roleId?: string;

  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus;

  @IsEnum(SortBy)
  @IsOptional()
  sortBy?: SortBy;

  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: SortOrder;

  constructor(data?: Partial<ListUsersQueryDto>) {
    if (data) {
      Object.assign(this, data);
      this.page = data.page || 1;
      this.limit = data.limit || 20;
      this.sortBy = data.sortBy || SortBy.CREATED_AT;
      this.sortOrder = data.sortOrder || SortOrder.DESC;
    }
  }

  public static create(data: any): ListUsersQueryDto {
    return new ListUsersQueryDto(data);
  }

  public validate(): string[] {
    const errors: string[] = [];
    
    if (!this.brandId) {
      errors.push('Brand ID is required');
    }
    
    if (this.page < 1) {
      errors.push('Page must be greater than 0');
    }
    
    if (this.limit < 1 || this.limit > 100) {
      errors.push('Limit must be between 1 and 100');
    }
    
    return errors;
  }
}
```

---

## 🎯 **VARIATION ELIMINATION STRATEGY**

| **Variation Source** | **Standard Template** | **Eliminated %** |
|---------------------|----------------------|------------------|
| User CRUD execution flow | Universal execute() template | 45% → 0% |
| RBAC authorization patterns | Standard checkAuthorization() | 35% → 0% |
| Error handling | USER_MANAGEMENT_ERRORS constants | 15% → 0% |
| DTO validation patterns | class-validator decorators | 5% → 0% |
| **TOTAL ELIMINATION** | **100% → 0%** | **99-100% consistency** |

---

## ✅ **IMPLEMENTATION CHECKLIST (EXACT ORDER)**

### **Week 2 (CRITICAL FOUNDATION)**:
- [ ] **Day 1**: CreateUserUseCase.ts, CreateUserDto.ts, UserResponseDto.ts (copy exact implementations)
- [ ] **Day 2**: UpdateUserUseCase.ts, UpdateUserDto.ts (follow exact templates)
- [ ] **Day 3**: DeleteUserUseCase.ts, GetUserUseCase.ts (follow exact templates)
- [ ] **Day 4**: DeleteUserDto.ts, GetUserDto.ts (follow exact templates)
- [ ] **Day 5**: Unit tests for all Week 2 implementations

### **Week 3 (COMPLETE USER MANAGEMENT LAYER)**:
- [ ] **Day 6-7**: ListUsersUseCase.ts, AssignRoleUseCase.ts (copy exact implementations)
- [ ] **Day 8-9**: Remaining DTOs: ListUsersQueryDto.ts, AssignRoleDto.ts, UserListResponseDto.ts, UserErrorDto.ts, UserSuccessDto.ts
- [ ] **Day 10**: Integration tests and handoff documentation for DEV-6

### **Critical Success Criteria (EXACT VALIDATION)**:
- [ ] `import { CreateUserUseCase } from './use-cases'` → **compiles successfully**
- [ ] `await createUserUseCase.execute(createUserDto, performedBy)` → **returns Result<UserResponseDto>**
- [ ] All validation uses **USER_MANAGEMENT_ERRORS constants exactly**
- [ ] All DTOs use **class-validator decorators exactly**
- [ ] All use cases follow **Universal template exactly**

---

## 🚫 **ZERO TOLERANCE DEVIATIONS**

### **❌ ABSOLUTELY FORBIDDEN:**
1. **Any variation** in class names from templates
2. **Any different** error messages from USER_MANAGEMENT_ERRORS constants
3. **Any alternative** method names from naming dictionary
4. **Any creative** RBAC authorization beyond standard patterns
5. **Any extra** validation beyond specified patterns

### **✅ MANDATORY COMPLIANCE:**
1. **Copy-paste** all error constants exactly
2. **Use exact** execution flow from templates
3. **Follow exact** RBAC authorization patterns
4. **Use exact** parameter names from dictionary
5. **Use exact** import order templates

---

## 💬 **COORDINATION PROTOCOL**

### **You Block (CRITICAL DEPENDENCIES)**:
- **DEV-6**: Needs user management use cases for controller implementation

### **Communication Rules**:
- **Use case interface changes**: FORBIDDEN without tech lead approval
- **DTO schema changes**: FORBIDDEN - DEV-6 dependencies break
- **Completion notification**: "✅ DEV-4 user management layer complete - DEV-6 can start"

---

## 🎯 **FINAL VALIDATION MESSAGE**

When complete, send exact message:
**"✅ User management use cases and DTOs ready - DEV-6 can start controller implementation"**

---

**TARGET ACHIEVED: 99-100% code consistency through complete user management template standardization.**

**This specification eliminates ALL variation points while maintaining minimal code through strategic CRUD and RBAC templating.**
