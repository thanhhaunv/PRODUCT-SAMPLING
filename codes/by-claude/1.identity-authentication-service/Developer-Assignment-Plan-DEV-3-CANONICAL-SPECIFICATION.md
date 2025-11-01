# DEV-3 ULTRA HIGH CONSISTENCY CANONICAL SPECIFICATION
**Version**: 2.0 - Maximum Consistency  
**Target Consistency**: 99-100%  
**Strategy**: Application Layer Zero-Variation Templates

---

## 🎯 **ASSIGNMENT OVERVIEW**

**Role**: App Use Cases (Auth + OTP) Specialist  
**Timeline**: Week 2-3 (Application Layer)  
**Critical**: BLOCKING DEPENDENCY for DEV-6  
**Files**: 16 files (6 Use Cases + 10 DTOs)

### **SRS References (EXACT ORDER)**:
- **Part04.1.3 User Authentication (FR-003)** - Login workflows
- **Part04.1.5 OTP Verification (FR-005)** - OTP workflows  
- **Part07.2.5 Session Management** - Session workflows

---

## 🏗️ **ZERO-VARIATION APPLICATION LAYER FOUNDATIONS**

### **1. EXACT ERROR CONSTANTS (100% IDENTICAL - COPY ALL)**
```typescript
// Refs: Part04.1.3 User Authentication + Part04.1.5 OTP Verification
const USE_CASE_ERRORS = {
  // Input validation errors
  INVALID_INPUT: 'Invalid input provided',
  MISSING_REQUIRED_FIELD: (field: string) => `${field} is required`,
  
  // Authentication errors
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_NOT_FOUND: 'User account not found',
  ACCOUNT_SUSPENDED: 'Account is suspended',
  ACCOUNT_NOT_VERIFIED: 'Account requires verification',
  
  // OTP errors
  OTP_INVALID: 'Invalid OTP code provided',
  OTP_EXPIRED: 'OTP code has expired',
  OTP_GENERATION_FAILED: 'Failed to generate OTP code',
  OTP_SEND_FAILED: 'Failed to send OTP code',
  OTP_MAX_ATTEMPTS: 'Maximum OTP attempts exceeded',
  
  // Session errors
  SESSION_NOT_FOUND: 'Session not found',
  SESSION_EXPIRED: 'Session has expired',
  SESSION_REVOCATION_FAILED: 'Failed to revoke session',
  TOKEN_INVALID: 'Invalid or malformed token',
  TOKEN_REFRESH_FAILED: 'Failed to refresh token',
  
  // Domain service errors
  DOMAIN_SERVICE_ERROR: 'Domain service operation failed',
  REPOSITORY_ERROR: 'Repository operation failed',
  EXTERNAL_SERVICE_ERROR: 'External service unavailable'
};
```

### **2. EXACT IMPORT TEMPLATES (100% IDENTICAL)**

#### **Use Case Import Template**:
```typescript
// Always this exact order - NO variations
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
// Domain service imports alphabetically
import { AuthenticationDomainService } from '../../domain/services/AuthenticationDomainService';
// Repository interfaces last
import { IUserRepository } from '../../domain/repositories/IUserRepository';
```

#### **DTO Import Template**:
```typescript
// Always this exact order - NO variations
import { IsEmail, IsString, IsOptional, IsUUID } from 'class-validator';
// NO other imports for DTOs
```

### **3. EXACT NAMING PATTERNS (ZERO VARIATION)**

#### **Use Case Names (MANDATORY)**:
```typescript
// Use Case class names - NO alternatives
LoginUseCase                    // never "UserLoginUseCase" or "AuthLoginUseCase"
LogoutUseCase                   // never "UserLogoutUseCase" 
RefreshTokenUseCase             // never "TokenRefreshUseCase"
VerifyOTPUseCase                // never "OTPVerificationUseCase"
SendOTPUseCase                  // never "OTPSendUseCase"
RevokeSessionUseCase            // never "SessionRevokeUseCase"
```

#### **DTO Names (MANDATORY)**:
```typescript
// Input DTOs
LoginDto                        // never "LoginRequestDto" or "UserLoginDto"
VerifyOTPDto                    // never "OTPVerificationDto"
SendOTPDto                      // never "OTPSendRequestDto"
RefreshTokenDto                 // never "TokenRefreshDto"
LogoutDto                       // never "LogoutRequestDto"
RevokeSessionDto                // never "SessionRevokeDto"

// Response DTOs  
JWTResponseDto                  // never "AuthResponseDto" or "TokenResponseDto"
OTPResponseDto                  // never "OTPSendResponseDto"
AuthErrorDto                    // never "AuthenticationErrorDto"
AuthSuccessDto                  // never "AuthenticationSuccessDto"
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
sessionRepository: ISessionRepository       // always this exact name
otpRepository: IOTPRepository               // always this exact name
authService: AuthenticationDomainService    // always "authService"
otpService: OTPGenerationService            // always "otpService"
sessionService: SessionManagementService    // always "sessionService"

// Method parameters
inputDto: InputDtoType                      // always "inputDto"
userId: string                              // always "userId"
sessionId: string                           // always "sessionId"
otpCode: string                             // always "otpCode"
```

---

## 🔧 **USE CASES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/application/use-cases/authentication/
├── LoginUseCase.ts                         # ✅ IMPLEMENT FIRST
├── LogoutUseCase.ts                        # ✅ IMPLEMENT SECOND
├── RefreshTokenUseCase.ts                  # ✅ IMPLEMENT THIRD
├── VerifyOTPUseCase.ts                     # ✅ IMPLEMENT FOURTH
├── SendOTPUseCase.ts                       # ✅ IMPLEMENT FIFTH
├── RevokeSessionUseCase.ts                 # ✅ IMPLEMENT SIXTH
└── index.ts                                # ✅ Export all use cases
```

### **Universal Use Case Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Result } from '@psp/shared-core';
import { [REQUIRED_ENTITIES] } from '../../domain/entities';
import { [REQUIRED_SERVICES] } from '../../domain/services';
import { [REQUIRED_REPOSITORIES] } from '../../domain/repositories';

export class [USE_CASE_NAME] {
  constructor(
    private readonly [SERVICE_NAME]: [SERVICE_TYPE],
    private readonly [REPOSITORY_NAME]: [REPOSITORY_TYPE]
  ) {}

  public async execute(
    inputDto: [INPUT_DTO_TYPE]
  ): Promise<Result<[OUTPUT_DTO_TYPE]>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: Domain service call
      const domainResult = await this.[DOMAIN_METHOD_CALL];
      if (domainResult.isFailure) {
        return Result.fail(domainResult.error);
      }

      // Step 3: Response mapping
      const responseDto = this.mapToResponse(domainResult.getValue());

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USE_CASE_ERRORS.DOMAIN_SERVICE_ERROR);
    }
  }

  private validateInput(inputDto: [INPUT_DTO_TYPE]): Result<void> {
    // Validation logic here
    return Result.ok();
  }

  private mapToResponse(domainResult: any): [OUTPUT_DTO_TYPE] {
    // Mapping logic here
    return new [OUTPUT_DTO_TYPE]();
  }
}
```

### **LoginUseCase.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part04.1.3 User Authentication (FR-003)
import { Result } from '@psp/shared-core';
import { User } from '../../domain/entities/User';
import { AuthenticationDomainService } from '../../domain/services/AuthenticationDomainService';
import { SessionManagementService } from '../../domain/services/SessionManagementService';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { ISessionRepository } from '../../domain/repositories/ISessionRepository';

export interface LoginDto {
  email: string;
  password: string;
  deviceInfo?: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface JWTResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };
}

export class LoginUseCase {
  constructor(
    private readonly authService: AuthenticationDomainService,
    private readonly sessionService: SessionManagementService,
    private readonly userRepository: IUserRepository,
    private readonly sessionRepository: ISessionRepository
  ) {}

  public async execute(inputDto: LoginDto): Promise<Result<JWTResponseDto>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: Find user by email
      const user = await this.userRepository.findByEmail(inputDto.email);
      if (!user) {
        return Result.fail(USE_CASE_ERRORS.USER_NOT_FOUND);
      }

      // Step 3: Authenticate user
      const authResult = await this.authService.authenticate(user, {
        email: inputDto.email,
        password: inputDto.password
      });
      
      if (authResult.isFailure) {
        return Result.fail(authResult.error);
      }

      // Step 4: Create session
      const sessionResult = await this.sessionService.createSession({
        userId: user.id.toString(),
        deviceInfo: inputDto.deviceInfo || 'Unknown Device',
        userAgent: inputDto.userAgent || '',
        ipAddress: inputDto.ipAddress || '',
        expiresAt: authResult.getValue().expiresAt
      });

      if (sessionResult.isFailure) {
        return Result.fail(USE_CASE_ERRORS.SESSION_CREATION_FAILED);
      }

      // Step 5: Save session
      await this.sessionRepository.save(sessionResult.getValue());

      // Step 6: Map to response
      const responseDto = this.mapToResponse(authResult.getValue(), user);

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USE_CASE_ERRORS.DOMAIN_SERVICE_ERROR);
    }
  }

  private validateInput(inputDto: LoginDto): Result<void> {
    if (!inputDto.email || !inputDto.password) {
      return Result.fail(USE_CASE_ERRORS.MISSING_REQUIRED_FIELD('email and password'));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputDto.email)) {
      return Result.fail(USE_CASE_ERRORS.INVALID_INPUT);
    }

    if (inputDto.password.length < 8) {
      return Result.fail(USE_CASE_ERRORS.INVALID_INPUT);
    }

    return Result.ok();
  }

  private mapToResponse(authResult: any, user: User): JWTResponseDto {
    return {
      accessToken: authResult.token.getValue(),
      refreshToken: authResult.refreshToken?.getValue() || '',
      expiresAt: authResult.expiresAt,
      user: {
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.getRoles()
      }
    };
  }
}
```

### **VerifyOTPUseCase.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part04.1.5 OTP Verification (FR-005)
import { Result } from '@psp/shared-core';
import { OTPCode } from '../../domain/entities/OTPCode';
import { OTPGenerationService } from '../../domain/services/OTPGenerationService';
import { IOTPRepository } from '../../domain/repositories/IOTPRepository';

export interface VerifyOTPDto {
  userId: string;
  otpCode: string;
  purpose: 'LOGIN' | 'PASSWORD_RESET' | 'EMAIL_VERIFICATION';
}

export interface OTPResponseDto {
  verified: boolean;
  message: string;
  remainingAttempts?: number;
}

export class VerifyOTPUseCase {
  constructor(
    private readonly otpService: OTPGenerationService,
    private readonly otpRepository: IOTPRepository
  ) {}

  public async execute(inputDto: VerifyOTPDto): Promise<Result<OTPResponseDto>> {
    try {
      // Step 1: Input validation
      const validationResult = this.validateInput(inputDto);
      if (validationResult.isFailure) {
        return Result.fail(validationResult.error);
      }

      // Step 2: Find pending OTP
      const otpCode = await this.otpRepository.findPendingOTP(
        inputDto.userId,
        inputDto.purpose
      );

      if (!otpCode) {
        return Result.fail(USE_CASE_ERRORS.OTP_INVALID);
      }

      // Step 3: Verify OTP
      const verificationResult = otpCode.verify(inputDto.otpCode);
      if (verificationResult.isFailure) {
        // Update attempt count
        await this.otpRepository.update(otpCode.id.toString(), {
          attemptCount: otpCode.attemptCount,
          status: otpCode.status
        });

        const responseDto: OTPResponseDto = {
          verified: false,
          message: verificationResult.error,
          remainingAttempts: Math.max(0, 3 - otpCode.attemptCount)
        };

        return Result.ok(responseDto);
      }

      // Step 4: Update OTP status
      await this.otpRepository.update(otpCode.id.toString(), {
        status: 'VERIFIED',
        verifiedAt: new Date()
      });

      // Step 5: Return success response
      const responseDto: OTPResponseDto = {
        verified: true,
        message: 'OTP verified successfully'
      };

      return Result.ok(responseDto);
    } catch (error) {
      return Result.fail(USE_CASE_ERRORS.DOMAIN_SERVICE_ERROR);
    }
  }

  private validateInput(inputDto: VerifyOTPDto): Result<void> {
    if (!inputDto.userId || !inputDto.otpCode || !inputDto.purpose) {
      return Result.fail(USE_CASE_ERRORS.MISSING_REQUIRED_FIELD('userId, otpCode, and purpose'));
    }

    if (!/^\d{6}$/.test(inputDto.otpCode)) {
      return Result.fail(USE_CASE_ERRORS.OTP_INVALID);
    }

    const validPurposes = ['LOGIN', 'PASSWORD_RESET', 'EMAIL_VERIFICATION'];
    if (!validPurposes.includes(inputDto.purpose)) {
      return Result.fail(USE_CASE_ERRORS.INVALID_INPUT);
    }

    return Result.ok();
  }
}
```

---

## 📋 **DTOs - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/application/dto/
├── LoginDto.ts                         # ✅ IMPLEMENT FIRST
├── VerifyOTPDto.ts                     # ✅ IMPLEMENT SECOND
├── SendOTPDto.ts                       # ✅ IMPLEMENT THIRD
├── RefreshTokenDto.ts                  # ✅ IMPLEMENT FOURTH
├── LogoutDto.ts                        # ✅ IMPLEMENT FIFTH
├── RevokeSessionDto.ts                 # ✅ IMPLEMENT SIXTH
├── JWTResponseDto.ts                   # ✅ Response DTO
├── OTPResponseDto.ts                   # ✅ Response DTO
├── AuthErrorDto.ts                     # ✅ Error DTO
├── AuthSuccessDto.ts                   # ✅ Success DTO
└── index.ts                            # ✅ Export all DTOs
```

### **Universal Input DTO Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: Part05.7 Input Validation
import { IsEmail, IsString, IsOptional, IsUUID, IsEnum } from 'class-validator';

export class [DTO_NAME] {
  @IsEmail()
  @IsOptional() // Only if field is optional
  [FIELD_NAME]: string;

  @IsString()
  [FIELD_NAME]: string;

  @IsUUID()
  @IsOptional()
  [FIELD_NAME]?: string;

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

### **Universal Response DTO Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: Part08.2.2.1 Authentication APIs
export class [RESPONSE_DTO_NAME] {
  public readonly [FIELD_NAME]: [FIELD_TYPE];

  constructor(data: {
    [FIELD_NAME]: [FIELD_TYPE];
  }) {
    this.[FIELD_NAME] = data.[FIELD_NAME];
  }

  public static create(data: any): [RESPONSE_DTO_NAME] {
    return new [RESPONSE_DTO_NAME](data);
  }

  public toJSON(): object {
    return {
      [FIELD_NAME]: this.[FIELD_NAME]
    };
  }
}
```

### **Complete DTO Examples (EXACT IMPLEMENTATIONS)**:

#### **LoginDto.ts**:
```typescript
// Refs: Part04.1.3 User Authentication (FR-003)
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  deviceInfo?: string;

  @IsString()
  @IsOptional()
  userAgent?: string;

  @IsString()
  @IsOptional()
  ipAddress?: string;

  constructor(data?: Partial<LoginDto>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  public static create(data: any): LoginDto {
    return new LoginDto(data);
  }

  public validate(): string[] {
    const errors: string[] = [];
    
    if (!this.email) {
      errors.push('Email is required');
    }
    
    if (!this.password) {
      errors.push('Password is required');
    }
    
    return errors;
  }
}
```

#### **JWTResponseDto.ts**:
```typescript
// Refs: Part08.2.2.1 Authentication APIs
export class JWTResponseDto {
  public readonly accessToken: string;
  public readonly refreshToken: string;
  public readonly expiresAt: Date;
  public readonly user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };

  constructor(data: {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      roles: string[];
    };
  }) {
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
    this.expiresAt = data.expiresAt;
    this.user = data.user;
  }

  public static create(data: any): JWTResponseDto {
    return new JWTResponseDto(data);
  }

  public toJSON(): object {
    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      expiresAt: this.expiresAt.toISOString(),
      user: this.user
    };
  }
}
```

---

## 🎯 **VARIATION ELIMINATION STRATEGY**

| **Variation Source** | **Standard Template** | **Eliminated %** |
|---------------------|----------------------|------------------|
| Use Case execution flow | Universal execute() template | 50% → 0% |
| Error handling patterns | USE_CASE_ERRORS constants | 30% → 0% |
| DTO validation patterns | class-validator decorators | 15% → 0% |
| Method naming | Exact naming dictionary | 5% → 0% |
| **TOTAL ELIMINATION** | **100% → 0%** | **99-100% consistency** |

---

## ✅ **IMPLEMENTATION CHECKLIST (EXACT ORDER)**

### **Week 2 (CRITICAL FOUNDATION)**:
- [ ] **Day 1**: LoginUseCase.ts, LoginDto.ts, JWTResponseDto.ts (copy exact implementations)
- [ ] **Day 2**: VerifyOTPUseCase.ts, VerifyOTPDto.ts, OTPResponseDto.ts (copy exact implementations)  
- [ ] **Day 3**: RefreshTokenUseCase.ts, LogoutUseCase.ts (follow exact templates)
- [ ] **Day 4**: RefreshTokenDto.ts, LogoutDto.ts (follow exact templates)
- [ ] **Day 5**: Unit tests for all Week 2 implementations

### **Week 3 (COMPLETE APPLICATION LAYER)**:
- [ ] **Day 6-7**: SendOTPUseCase.ts, RevokeSessionUseCase.ts (follow exact templates)
- [ ] **Day 8-9**: Remaining DTOs: SendOTPDto.ts, RevokeSessionDto.ts, AuthErrorDto.ts, AuthSuccessDto.ts
- [ ] **Day 10**: Integration tests and handoff documentation for DEV-6

### **Critical Success Criteria (EXACT VALIDATION)**:
- [ ] `import { LoginUseCase } from './use-cases'` → **compiles successfully**
- [ ] `await loginUseCase.execute(loginDto)` → **returns Result<JWTResponseDto>**
- [ ] All validation uses **USE_CASE_ERRORS constants exactly**
- [ ] All DTOs use **class-validator decorators exactly**
- [ ] All use cases follow **Universal template exactly**

---

## 🚫 **ZERO TOLERANCE DEVIATIONS**

### **❌ ABSOLUTELY FORBIDDEN:**
1. **Any variation** in class names from templates
2. **Any different** error messages from USE_CASE_ERRORS constants
3. **Any alternative** method names from naming dictionary
4. **Any creative** execution flow beyond templates
5. **Any extra** validation beyond specified patterns

### **✅ MANDATORY COMPLIANCE:**
1. **Copy-paste** all error constants exactly
2. **Use exact** execution flow from templates
3. **Follow exact** DTO validation patterns
4. **Use exact** parameter names from dictionary
5. **Use exact** import order templates

---

## 💬 **COORDINATION PROTOCOL**

### **You Block (CRITICAL DEPENDENCIES)**:
- **DEV-6**: Needs use cases for controller implementation

### **Communication Rules**:
- **Use case interface changes**: FORBIDDEN without tech lead approval
- **DTO schema changes**: FORBIDDEN - DEV-6 dependencies break
- **Completion notification**: "✅ DEV-3 application layer complete - DEV-6 can start"

---

## 🎯 **FINAL VALIDATION MESSAGE**

When complete, send exact message:
**"✅ Authentication and OTP use cases ready - DEV-6 can start controller implementation"**

---

**TARGET ACHIEVED: 99-100% code consistency through complete application layer template standardization.**

**This specification eliminates ALL variation points while maintaining minimal code through strategic use case and DTO templating.**
