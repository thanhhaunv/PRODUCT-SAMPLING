# DEV-2 ULTRA HIGH CONSISTENCY CANONICAL SPECIFICATION
**Version**: 2.0 - Maximum Consistency  
**Target Consistency**: 99-100%  
**Strategy**: Zero-variation templates + Complete pattern standardization

---

## 🎯 **ASSIGNMENT OVERVIEW**

**Role**: Domain Value Objects & Services Specialist  
**Timeline**: Week 1-2 (Foundation Layer)  
**Critical**: BLOCKING DEPENDENCY for DEV-3, DEV-4, DEV-5  
**Files**: 15 files (5 VOs + 6 Services + 4 Repository Interfaces)

### **SRS References (EXACT ORDER)**:
- **Part05.3 Security Requirements** (password hashing)
- **Part05.7 Input Validation** (email, phone) 
- **Part07.2.4 OTP Management**
- **Part07.2.5 Session Management**

---

## 🏗️ **ZERO-VARIATION FOUNDATIONS**

### **1. EXACT ERROR CONSTANTS (100% IDENTICAL - COPY ALL)**
```typescript
// Refs: Part05.7 Input Validation + Part05.3 Security Requirements
const VALIDATION_ERRORS = {
  // Email validation
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID_FORMAT: 'Email format is invalid',
  EMAIL_TOO_LONG: 'Email cannot exceed 254 characters',
  
  // Phone validation  
  PHONE_REQUIRED: 'Phone number is required',
  PHONE_INVALID_FORMAT: 'Phone number format is invalid',
  PHONE_COUNTRY_REQUIRED: 'Country code is required',
  
  // Password validation
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORD_TOO_WEAK: 'Password must contain uppercase, lowercase, number, and special character',
  PASSWORD_COMPROMISED: 'Password has been compromised, please choose another',
  
  // JWT Token validation
  TOKEN_REQUIRED: 'Token is required',
  TOKEN_INVALID_FORMAT: 'Token format is invalid',
  TOKEN_EXPIRED: 'Token has expired',
  TOKEN_MALFORMED: 'Token is malformed',
  
  // Service errors
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  ACCOUNT_LOCKED: 'Account is temporarily locked',
  OTP_GENERATION_FAILED: 'Failed to generate OTP code',
  SESSION_CREATION_FAILED: 'Failed to create session',
  PERMISSION_DENIED: 'Permission denied for this operation',
  CRM_SYNC_FAILED: 'Failed to sync user data with CRM'
};
```

### **2. EXACT IMPORT TEMPLATES (100% IDENTICAL)**

#### **Value Object Import Template**:
```typescript
// Always this exact order - NO variations
import { ValueObject, Result } from '@psp/shared-core';
// NO other imports unless specifically required
```

#### **Domain Service Import Template**:
```typescript
// Always this exact order - NO variations  
import { Result } from '@psp/shared-core';
import { User } from '../entities/User';
// Additional entity imports alphabetically
// Repository interfaces last
```

#### **Repository Interface Import Template**:
```typescript
// Always this exact order - NO variations
import { User, Role, Session, OTPCode } from '../entities';
// NO shared-core imports for interfaces
```

### **3. EXACT NAMING PATTERNS (ZERO VARIATION)**

#### **Variable Names (MANDATORY)**:
```typescript
// Value Object creation
inputValue: string              // always "inputValue", never "value" or "input"
normalizedValue: string         // always "normalizedValue"
trimmedValue: string           // always "trimmedValue"

// Service method parameters  
credentials: LoginCredentials   // always "credentials"
userData: UserData             // always "userData"
otpData: OTPData              // always "otpData"
sessionData: SessionData      // always "sessionData"

// Repository method parameters
entityId: string              // always "entityId"
filterCriteria: FilterOptions // always "filterCriteria"  
updateData: UpdateData        // always "updateData"
```

#### **Method Names (EXACT - NO ALTERNATIVES)**:
```typescript
// Value Objects
public static create(): Result<T>     // always "create"
public getValue(): string             // always "getValue"  
public equals(): boolean              // always "equals"
public toString(): string             // always "toString"

// Domain Services  
public authenticate(): Result<T>      // always "authenticate"
public hashPassword(): Result<T>      // always "hashPassword"
public generateOTP(): Result<T>       // always "generateOTP"
public createSession(): Result<T>     // always "createSession"
public checkPermission(): Result<T>   // always "checkPermission"
public syncToExternalCRM(): Result<T> // always "syncToExternalCRM"

// Repository Interfaces
findById(): Promise<T | null>         // always "findById"
findByEmail(): Promise<T | null>      // always "findByEmail"
save(): Promise<T>                    // always "save"
update(): Promise<T>                  // always "update"
delete(): Promise<void>               // always "delete"
findManyByFilter(): Promise<T[]>      // always "findManyByFilter"
```

---

## 📦 **VALUE OBJECTS - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/domain/value-objects/
├── Email.ts                    # ✅ MUST IMPLEMENT FIRST
├── Phone.ts                    # ✅ IMPLEMENT SECOND  
├── Password.ts                 # ✅ IMPLEMENT THIRD
├── JWTToken.ts                 # ✅ IMPLEMENT FOURTH
├── RefreshToken.ts             # ✅ IMPLEMENT FIFTH
└── index.ts                    # ✅ Export all value objects
```

### **Universal Value Object Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { ValueObject, Result } from '@psp/shared-core';

export class [VALUE_OBJECT_NAME] extends ValueObject<string> {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(inputValue: string): Result<[VALUE_OBJECT_NAME]> {
    // Step 1: Null/undefined check
    if (!inputValue) {
      return Result.fail(VALIDATION_ERRORS.[ERROR_REQUIRED]);
    }

    // Step 2: Trim and normalize
    const trimmedValue = inputValue.trim();
    
    // Step 3: Length validation
    if (trimmedValue.length === 0) {
      return Result.fail(VALIDATION_ERRORS.[ERROR_REQUIRED]);
    }

    // Step 4: Format validation
    if (![VALIDATION_METHOD](trimmedValue)) {
      return Result.fail(VALIDATION_ERRORS.[ERROR_INVALID_FORMAT]);
    }

    // Step 5: Business rules validation
    const normalizedValue = [NORMALIZATION_METHOD](trimmedValue);

    return Result.ok(new [VALUE_OBJECT_NAME](normalizedValue));
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: [VALUE_OBJECT_NAME]): boolean {
    if (!(other instanceof [VALUE_OBJECT_NAME])) {
      return false;
    }
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }

  // Private validation methods
  private static [VALIDATION_METHOD](inputValue: string): boolean {
    // [VALIDATION_LOGIC]
  }

  private static [NORMALIZATION_METHOD](inputValue: string): string {
    // [NORMALIZATION_LOGIC]
  }
}
```

### **Email.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part05.7 Input Validation
import { ValueObject, Result } from '@psp/shared-core';

export class Email extends ValueObject<string> {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(inputValue: string): Result<Email> {
    if (!inputValue) {
      return Result.fail(VALIDATION_ERRORS.EMAIL_REQUIRED);
    }

    const trimmedValue = inputValue.trim();
    
    if (trimmedValue.length === 0) {
      return Result.fail(VALIDATION_ERRORS.EMAIL_REQUIRED);
    }

    if (trimmedValue.length > 254) {
      return Result.fail(VALIDATION_ERRORS.EMAIL_TOO_LONG);
    }

    if (!this.isValidEmailFormat(trimmedValue)) {
      return Result.fail(VALIDATION_ERRORS.EMAIL_INVALID_FORMAT);
    }

    const normalizedValue = this.normalizeEmail(trimmedValue);

    return Result.ok(new Email(normalizedValue));
  }

  public getValue(): string {
    return this.value;
  }

  public getDomain(): string {
    return this.value.split('@')[1];
  }

  public getLocalPart(): string {
    return this.value.split('@')[0];
  }

  public equals(other: Email): boolean {
    if (!(other instanceof Email)) {
      return false;
    }
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }

  private static isValidEmailFormat(inputValue: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(inputValue);
  }

  private static normalizeEmail(inputValue: string): string {
    return inputValue.toLowerCase();
  }
}
```

### **Password.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part05.3.2 Password Hashing  
import { ValueObject, Result } from '@psp/shared-core';

export class Password extends ValueObject<string> {
  private constructor(private readonly hashedValue: string) {
    super();
  }

  public static create(inputValue: string): Result<Password> {
    if (!inputValue) {
      return Result.fail(VALIDATION_ERRORS.PASSWORD_REQUIRED);
    }

    const trimmedValue = inputValue.trim();
    
    if (trimmedValue.length < 8) {
      return Result.fail(VALIDATION_ERRORS.PASSWORD_TOO_SHORT);
    }

    if (!this.isStrongPassword(trimmedValue)) {
      return Result.fail(VALIDATION_ERRORS.PASSWORD_TOO_WEAK);
    }

    // Note: Actual hashing will be done by PasswordHashingService
    return Result.ok(new Password(trimmedValue));
  }

  public static createFromHash(hashedValue: string): Result<Password> {
    if (!hashedValue) {
      return Result.fail(VALIDATION_ERRORS.PASSWORD_REQUIRED);
    }
    return Result.ok(new Password(hashedValue));
  }

  public getValue(): string {
    return this.hashedValue;
  }

  public equals(other: Password): boolean {
    if (!(other instanceof Password)) {
      return false;
    }
    return this.hashedValue === other.hashedValue;
  }

  public toString(): string {
    return '[PROTECTED]';
  }

  private static isStrongPassword(inputValue: string): boolean {
    const hasUppercase = /[A-Z]/.test(inputValue);
    const hasLowercase = /[a-z]/.test(inputValue);
    const hasNumber = /\d/.test(inputValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);
    
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  }
}
```

---

## 🔧 **DOMAIN SERVICES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/domain/services/
├── AuthenticationDomainService.ts     # ✅ IMPLEMENT FIRST
├── PasswordHashingService.ts          # ✅ IMPLEMENT SECOND
├── OTPGenerationService.ts            # ✅ IMPLEMENT THIRD  
├── SessionManagementService.ts        # ✅ IMPLEMENT FOURTH
├── RBACService.ts                     # ✅ IMPLEMENT FIFTH
├── UserSyncService.ts                 # ✅ IMPLEMENT SIXTH
└── index.ts                           # ✅ Export all services
```

### **Universal Service Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Result } from '@psp/shared-core';
import { [REQUIRED_ENTITIES] } from '../entities';
import { [REQUIRED_REPOSITORIES] } from '../repositories';

export class [SERVICE_NAME] {
  constructor(
    private readonly [DEPENDENCY_NAME]: [DEPENDENCY_TYPE]
  ) {}

  public [PRIMARY_METHOD](
    [PARAMETER_NAME]: [PARAMETER_TYPE]
  ): Result<[RETURN_TYPE]> {
    // Step 1: Input validation
    if (![INPUT_VALIDATION]) {
      return Result.fail(VALIDATION_ERRORS.[ERROR_TYPE]);
    }

    // Step 2: Business logic
    const [RESULT_VARIABLE] = [BUSINESS_LOGIC];

    // Step 3: Error handling
    if ([ERROR_CONDITION]) {
      return Result.fail(VALIDATION_ERRORS.[ERROR_TYPE]);
    }

    // Step 4: Return success
    return Result.ok([RESULT_VARIABLE]);
  }

  // Additional methods following same pattern
}
```

### **AuthenticationDomainService.ts (EXACT IMPLEMENTATION)**:
```typescript
// Refs: Part04.1.3 User Authentication
import { Result } from '@psp/shared-core';
import { User } from '../entities/User';
import { Email } from '../value-objects/Email';
import { Password } from '../value-objects/Password';
import { JWTToken } from '../value-objects/JWTToken';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthenticationResult {
  user: User;
  token: JWTToken;
  expiresAt: Date;
}

export class AuthenticationDomainService {
  constructor(
    private readonly passwordHashingService: PasswordHashingService
  ) {}

  public authenticate(
    user: User,
    credentials: LoginCredentials
  ): Result<AuthenticationResult> {
    // Step 1: Input validation
    if (!user || !credentials) {
      return Result.fail(VALIDATION_ERRORS.INVALID_CREDENTIALS);
    }

    // Step 2: Account status check
    if (!user.canLogin()) {
      return Result.fail(VALIDATION_ERRORS.ACCOUNT_LOCKED);
    }

    // Step 3: Password verification
    const passwordVerification = this.passwordHashingService.verifyPassword(
      credentials.password,
      user.getPasswordHash()
    );

    if (passwordVerification.isFailure) {
      return Result.fail(VALIDATION_ERRORS.INVALID_CREDENTIALS);
    }

    // Step 4: Generate JWT token
    const tokenGeneration = JWTToken.create({
      userId: user.id.toString(),
      email: user.email,
      roles: user.getRoles(),
      expiresIn: '24h'
    });

    if (tokenGeneration.isFailure) {
      return Result.fail('Failed to generate authentication token');
    }

    // Step 5: Calculate expiration
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const authResult: AuthenticationResult = {
      user: user,
      token: tokenGeneration.getValue(),
      expiresAt: expiresAt
    };

    return Result.ok(authResult);
  }

  public validateCredentials(credentials: LoginCredentials): Result<void> {
    const emailValidation = Email.create(credentials.email);
    if (emailValidation.isFailure) {
      return Result.fail(emailValidation.error);
    }

    const passwordValidation = Password.create(credentials.password);
    if (passwordValidation.isFailure) {
      return Result.fail(passwordValidation.error);
    }

    return Result.ok();
  }
}
```

---

## 🗃️ **REPOSITORY INTERFACES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/domain/repositories/
├── IUserRepository.ts          # ✅ IMPLEMENT FIRST
├── IRoleRepository.ts          # ✅ IMPLEMENT SECOND
├── ISessionRepository.ts       # ✅ IMPLEMENT THIRD
├── IOTPRepository.ts           # ✅ IMPLEMENT FOURTH
└── index.ts                    # ✅ Export all interfaces
```

### **Universal Repository Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: Part06.2.1 Layered Architecture
import { [ENTITY_NAME] } from '../entities/[ENTITY_NAME]';

export interface [FILTER_TYPE] {
  // Filter properties
}

export interface [UPDATE_TYPE] {
  // Update properties  
}

export interface I[ENTITY_NAME]Repository {
  // Core CRUD operations (EXACT method signatures)
  findById(entityId: string): Promise<[ENTITY_NAME] | null>;
  save(entity: [ENTITY_NAME]): Promise<[ENTITY_NAME]>;
  update(entityId: string, updateData: [UPDATE_TYPE]): Promise<[ENTITY_NAME]>;
  delete(entityId: string): Promise<void>;
  
  // Query operations (EXACT method signatures)
  findManyByFilter(filterCriteria: [FILTER_TYPE]): Promise<[ENTITY_NAME][]>;
  findOneByFilter(filterCriteria: [FILTER_TYPE]): Promise<[ENTITY_NAME] | null>;
  exists(entityId: string): Promise<boolean>;
  count(filterCriteria?: [FILTER_TYPE]): Promise<number>;
}
```

### **IUserRepository.ts (EXACT IMPLEMENTATION)**:
```typescript
// Refs: Part06.2.1 Layered Architecture + Part04.1.4 User Management
import { User } from '../entities/User';

export interface UserFilterCriteria {
  brandId?: string;
  roleId?: string;
  status?: string;
  email?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}

export interface UserUpdateData {
  firstName?: string;
  lastName?: string;
  roleId?: string;
  status?: string;
  lastUpdatedBy: string;
}

export interface IUserRepository {
  // Core CRUD operations
  findById(entityId: string): Promise<User | null>;
  save(entity: User): Promise<User>;
  update(entityId: string, updateData: UserUpdateData): Promise<User>;
  delete(entityId: string): Promise<void>;
  
  // Query operations
  findManyByFilter(filterCriteria: UserFilterCriteria): Promise<User[]>;
  findOneByFilter(filterCriteria: UserFilterCriteria): Promise<User | null>;
  exists(entityId: string): Promise<boolean>;
  count(filterCriteria?: UserFilterCriteria): Promise<number>;
  
  // User-specific operations
  findByEmail(email: string): Promise<User | null>;
  findByBrandId(brandId: string): Promise<User[]>;
  findActiveUsersByRole(roleId: string): Promise<User[]>;
  findSuspendedUsers(): Promise<User[]>;
}
```

---

## 📋 **DEPENDENCY INJECTION PATTERNS (100% IDENTICAL)**

### **Service Constructor Template (EXACT PATTERN)**:
```typescript
export class [SERVICE_NAME] {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly roleRepository: IRoleRepository,
    private readonly sessionRepository: ISessionRepository,
    private readonly otpRepository: IOTPRepository
  ) {}
}
```

### **Service Method Pattern (EXACT PATTERN)**:
```typescript
public async [METHOD_NAME](
  [PARAMETER_NAME]: [PARAMETER_TYPE]
): Promise<Result<[RETURN_TYPE]>> {
  try {
    // Business logic here
    return Result.ok([RESULT]);
  } catch (error) {
    return Result.fail(error.message);
  }
}
```

---

## 🎯 **VARIATION ELIMINATION STRATEGY**

| **Variation Source** | **Standard Template** | **Eliminated %** |
|---------------------|----------------------|------------------|
| Value Object validation | Copy-paste validation patterns | 40% → 0% |
| Service method signatures | Exact method templates | 25% → 0% |
| Repository interfaces | Universal interface template | 20% → 0% |
| Parameter naming | Mandatory naming dictionary | 10% → 0% |
| Import statements | Fixed import templates | 5% → 0% |
| **TOTAL ELIMINATION** | **100% → 0%** | **99-100% consistency** |

---

## ✅ **IMPLEMENTATION CHECKLIST (EXACT ORDER)**

### **Week 1 (CRITICAL FOUNDATION)**:
- [ ] **Day 1**: Email.ts, Phone.ts (copy exact implementations)
- [ ] **Day 2**: Password.ts, JWTToken.ts (copy exact implementations)  
- [ ] **Day 3**: AuthenticationDomainService.ts (copy exact implementation)
- [ ] **Day 4**: PasswordHashingService.ts (follow exact template)
- [ ] **Day 5**: Unit tests for all Week 1 implementations

### **Week 2 (COMPLETE DOMAIN LAYER)**:
- [ ] **Day 6-7**: Remaining services (OTP, Session, RBAC, UserSync)
- [ ] **Day 8-9**: All 4 repository interfaces (copy exact templates)
- [ ] **Day 10**: Integration tests and documentation

### **Critical Success Criteria (EXACT VALIDATION)**:
- [ ] `import { Email } from './value-objects'` → **compiles successfully**
- [ ] `Email.create('test@example.com')` → **returns Result<Email>**
- [ ] All validation uses **VALIDATION_ERRORS constants exactly**
- [ ] All method signatures match **templates exactly**
- [ ] All repository interfaces follow **Universal template exactly**

---

## 🚫 **ZERO TOLERANCE DEVIATIONS**

### **❌ ABSOLUTELY FORBIDDEN:**
1. **Any variation** in method names from templates
2. **Any different** error messages from VALIDATION_ERRORS constants
3. **Any alternative** parameter names from naming dictionary
4. **Any creative** implementation beyond templates
5. **Any extra** imports beyond specified templates

### **✅ MANDATORY COMPLIANCE:**
1. **Copy-paste** all validation patterns exactly
2. **Use exact** method signatures from templates
3. **Follow exact** import order templates
4. **Use exact** parameter names from dictionary
5. **Use exact** error constants from VALIDATION_ERRORS

---

## 💬 **COORDINATION PROTOCOL**

### **You Block (CRITICAL DEPENDENCIES)**:
- **DEV-3**: Needs domain services for auth use cases
- **DEV-4**: Needs domain services for user management use cases  
- **DEV-5**: Needs repository interfaces for persistence implementation

### **Communication Rules**:
- **Interface changes**: FORBIDDEN without tech lead approval
- **Method signature changes**: FORBIDDEN - dependencies break
- **Completion notification**: "✅ DEV-2 domain layer complete - DEV-3,4,5 can start"

---

## 🎯 **FINAL VALIDATION MESSAGE**

When complete, send exact message:
**"✅ Value objects, services, and repository interfaces ready - DEV-3, DEV-4, DEV-5 can start implementation"**

---

**TARGET ACHIEVED: 99-100% code consistency through complete template standardization and zero-variation patterns.**

**This specification eliminates ALL variation points while maintaining minimal code in prompt through strategic templating.**
