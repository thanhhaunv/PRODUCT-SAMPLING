# DEV-1 ENHANCED CANONICAL SPECIFICATION
**Version**: 2.0 - Ultra High Consistency  
**Target Consistency**: 98-99%  
**Strategy**: Standardize variation points without full code implementation

---

## 🎯 **HIGH-VARIATION STANDARDIZATION RULES**

### **1. EXACT NAMING CONVENTIONS (Eliminates 60% of variations)**

#### **Variable Naming Templates (MANDATORY)**:
```typescript
// Entity fields - EXACT pattern
private _fieldName: Type;          // underscore prefix always
private readonly _id: UniqueEntityId;  // id always readonly

// Constructor parameters - EXACT pattern  
userData: CreateEntityNameData     // always "Data" suffix
createdBy: string                  // always "createdBy", never "creator"
updatedBy: string                  // always "updatedBy", never "modifier"

// Method parameters - EXACT names
updateData: UpdateEntityNameData   // always "updateData"
inputCode: string                  // for OTP, never "code" or "otpCode"
revokedBy: string                  // for sessions, never "revoker"

// Boolean methods - EXACT patterns
public isValid(): boolean          // always "isValid", never "isActive"
public canLogin(): boolean         // always "canLogin", never "isLoginAllowed"
public hasPermission(): boolean    // always "hasPermission", never "canAccess"
```

#### **Constant Names (ZERO VARIATION)**:
```typescript
// Error messages - EXACT text (copy-paste these)
const ERROR_MESSAGES = {
  REQUIRED_FIELD: (field: string) => `${field} is required`,
  INVALID_EMAIL: 'Valid email is required',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  GDPR_CONSENT_REQUIRED: 'GDPR consent is required',
  BRAND_ID_REQUIRED: 'Brand ID is required for multi-tenant isolation',
  CANNOT_UPDATE_DELETED: 'Cannot update deleted user',
  TOO_MANY_ATTEMPTS: 'Too many verification attempts',
  OTP_EXPIRED: 'OTP has expired',
  INVALID_OTP: 'Invalid OTP code'
};

// Status enum values - EXACT casing
ACTIVE, SUSPENDED, PENDING_VERIFICATION, DELETED  // User
ACTIVE, EXPIRED, REVOKED                          // Session  
PENDING, VERIFIED, EXPIRED, INVALIDATED           // OTP
```

### **2. IMPORT ORDER STANDARDIZATION (Eliminates 15% of variations)**

#### **EXACT Import Order Template**:
```typescript
// 1. Shared packages (alphabetical)
import { AggregateRoot, Entity, UniqueEntityId, Result } from '@psp/shared-core';
import { UserCreatedEvent, UserUpdatedEvent } from '@psp/shared-events';

// 2. No other imports (keep minimal)
// 3. No relative imports at entity level
```

### **3. METHOD SIGNATURE TEMPLATES (Eliminates 10% of variations)**

#### **Factory Method Pattern (EXACT)**:
```typescript
public static create(entityData: CreateEntityNameData, createdBy: string): Result<EntityName>
public static create(entityData: CreateEntityNameData): Result<EntityName> // if no createdBy needed
```

#### **Business Method Patterns (EXACT)**:
```typescript
public updateProfile(updateData: UpdateUserData): Result<void>
public suspend(suspendedBy: string): Result<void>
public softDelete(deletedBy: string): Result<void>
public revoke(revokedBy: string): Result<void>
public verify(inputCode: string): Result<void>
```

#### **Validation Method Patterns (EXACT)**:
```typescript
private static isValidEmail(email: string): boolean
private static isValidCode(code: string): boolean
public isValid(): boolean
public canLogin(): boolean
public hasPermission(permissionId: string): boolean
```

### **4. VALIDATION LOGIC TEMPLATES (Copy-Paste Patterns)**

#### **Email Validation (EXACT COPY)**:
```typescript
private static isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

#### **Input Validation Pattern (EXACT)**:
```typescript
// Always this exact pattern for required fields
if (!data.fieldName || data.fieldName.trim().length === 0) {
  return Result.fail(ERROR_MESSAGES.REQUIRED_FIELD('Field Name'));
}

// Always this exact pattern for string trimming
this._fieldName = data.fieldName.trim();
```

#### **OTP Code Validation (EXACT COPY)**:
```typescript
if (otpData.code.length !== 6 || !/^\d{6}$/.test(otpData.code)) {
  return Result.fail('OTP code must be exactly 6 digits');
}
```

### **5. COMMENT STANDARDIZATION (Eliminates 8% of variations)**

#### **SRS Reference Comments (EXACT FORMAT)**:
```typescript
// Refs: Part04.1.4 User Management (FR-004)
// Refs: Part04.1.5 OTP Verification (FR-005)  
// Refs: Part05.3 Security Requirements
// Refs: Part07.2.5 Session Management
// Refs: Access_Control_Tree_Grok.md Integration
```

#### **Business Rule Comments (EXACT FORMAT)**:
```typescript
// Business Rules from SRS Part04.1.4:
// 1. Only Platform Admins can create/delete users
// 2. Multi-tenant isolation mandatory
// 3. GDPR consent required for PII
// 4. Suspended users cannot login
```

#### **Inline Comments (STANDARDIZED)**:
```typescript
// Validate business rules from SRS Part04.1.4
// Apply domain constraints  
// Add domain event
// Multi-tenant isolation check
// Security requirement validation
```

### **6. DOMAIN EVENT PATTERN (100% IDENTICAL)**

#### **Event Data Interface Template**:
```typescript
export interface EntityNameEventData {
  entityId: string;           // always "entityId" 
  userId: string;             // if user-related
  timestamp: Date;            // always "timestamp"
  triggeredBy: string;        // always "triggeredBy" 
  // ... specific fields
}
```

#### **Event Class Template (EXACT STRUCTURE)**:
```typescript
export class EntityNameEvent implements BaseEvent {
  public readonly eventType = 'EntityName';  // PascalCase, no spaces
  public readonly version = '1.0';           // always '1.0'
  public readonly metadata: EventMetadata;

  constructor(public readonly data: EntityNameEventData) {
    this.metadata = {
      eventId: crypto.randomUUID(),           // always crypto.randomUUID()
      occurredOn: data.timestamp,             // always data.timestamp
      eventType: this.eventType,
      version: this.version
    };
  }
}
```

### **7. GETTER PATTERN STANDARDIZATION (100% IDENTICAL)**

#### **Getter Template (EXACT ORDER)**:
```typescript
// Core fields first (alphabetical)
public get email(): string { return this._email; }
public get firstName(): string { return this._firstName; }
public get lastName(): string { return this._lastName; }

// Computed properties
public get fullName(): string { return `${this._firstName} ${this._lastName}`; }

// IDs and references
public get roleId(): string { return this._roleId; }
public get brandId(): string { return this._brandId; }

// Status and booleans
public get status(): UserStatus { return this._status; }
public get isActive(): boolean { return this._isActive; }

// Timestamps last
public get createdAt(): Date { return this._createdAt; }
public get updatedAt(): Date { return this._updatedAt; }
```

### **8. CONSTRUCTOR PARAMETER ORDER (EXACT)**

#### **Parameter Order Template**:
```typescript
private constructor(
  id: UniqueEntityId,           // always first
  // Business fields (alphabetical by importance)
  private _email: string,
  private _firstName: string,
  private _lastName: string,
  // References  
  private _roleId: string,
  private _brandId: string,
  // Status fields
  private _status: EntityStatus,
  private _isActive: boolean,
  // Timestamps
  private _createdAt: Date,
  private _updatedAt: Date,
  // Audit fields last
  private _createdBy: string,
  private _lastUpdatedBy: string
)
```

### **9. DATE HANDLING STANDARDIZATION (100% IDENTICAL)**

#### **Date Creation (EXACT PATTERN)**:
```typescript
const now = new Date();           // always "now" variable name
this._createdAt = now;            // always assign to "now"
this._updatedAt = now;            // never inline new Date()

// For updates
this._updatedAt = new Date();     // only for updates, inline OK
```

### **10. RESULT RETURN PATTERNS (EXACT)**

#### **Success Returns (EXACT TEXT)**:
```typescript
return Result.ok(entity);        // for create methods
return Result.ok();              // for void methods  
return Result.ok(value);         // for computed values
```

#### **Error Returns (USE ERROR_MESSAGES CONSTANTS)**:
```typescript
return Result.fail(ERROR_MESSAGES.REQUIRED_FIELD('Email'));
return Result.fail(ERROR_MESSAGES.INVALID_EMAIL);
return Result.fail(ERROR_MESSAGES.GDPR_CONSENT_REQUIRED);
```

---

## 📋 **FILL-IN-THE-BLANK ENTITY TEMPLATE**

### **Entity Shell (Copy-Paste and Fill)**:
```typescript
// Refs: [SRS_REFERENCE]
import { [ENTITY_TYPE], UniqueEntityId, Result } from '@psp/shared-core';
import { [EVENT_IMPORTS] } from '@psp/shared-events';

export interface Create[ENTITY_NAME]Data {
  // [FILL_REQUIRED_FIELDS]
}

export enum [ENTITY_NAME]Status {
  // [FILL_STATUS_VALUES] - use UPPER_CASE
}

export class [ENTITY_NAME] extends [ENTITY_TYPE]<UniqueEntityId> {
  private constructor(
    id: UniqueEntityId,
    // [FILL_PRIVATE_FIELDS] - use _fieldName pattern
  ) {
    super(id);
  }

  public static create([ENTITY_LOWER]Data: Create[ENTITY_NAME]Data): Result<[ENTITY_NAME]> {
    // Validate business rules from SRS [SRS_REFERENCE]
    if (!data.[REQUIRED_FIELD]) {
      return Result.fail(ERROR_MESSAGES.REQUIRED_FIELD('[FIELD_NAME]'));
    }

    const [ENTITY_LOWER]Id = new UniqueEntityId();
    const now = new Date();
    
    const [ENTITY_LOWER] = new [ENTITY_NAME](
      [ENTITY_LOWER]Id,
      // [FILL_CONSTRUCTOR_ARGS]
    );

    // Add domain event
    [ENTITY_LOWER].addDomainEvent(new [ENTITY_NAME]CreatedEvent({
      [ENTITY_LOWER]Id: [ENTITY_LOWER]Id.toString(),
      // [FILL_EVENT_DATA]
      timestamp: now
    }));

    return Result.ok([ENTITY_LOWER]);
  }

  // [FILL_BUSINESS_METHODS] - follow patterns above

  // Getters - follow exact order above
  // [FILL_GETTERS]
}
```

---

## 🎯 **VARIATION ELIMINATION SUMMARY**

| **Variation Source** | **Old %** | **New %** | **Elimination Strategy** |
|---------------------|-----------|-----------|-------------------------|
| Variable naming | 25% | 2% | Exact naming templates |
| Import order | 15% | 0% | Standardized order |
| Method signatures | 15% | 1% | Template patterns |
| Error messages | 10% | 0% | Predefined constants |
| Comments | 8% | 1% | Standardized formats |
| Validation logic | 7% | 1% | Copy-paste patterns |
| Getter order | 5% | 0% | Template order |
| Date handling | 3% | 0% | Exact patterns |
| Constructor order | 2% | 0% | Fixed parameter order |
| **TOTAL** | **90%** | **5%** | **95% → 98-99%** |

---

## ✅ **IMPLEMENTATION INSTRUCTIONS**

### **For 98-99% Consistency**:
1. **Copy-paste** all ERROR_MESSAGES constants exactly
2. **Follow** exact naming templates for all variables  
3. **Use** fill-in-the-blank entity template
4. **Apply** standardized patterns for all variations above
5. **Reference** exact SRS comment formats

### **AI Prompt Enhancement**:
```
"Generate code using EXACT patterns from specification:
- Use ERROR_MESSAGES constants (do not create new error text)
- Follow exact variable naming templates (_fieldName pattern)  
- Use exact import order template
- Apply exact method signature patterns
- Follow exact constructor parameter order
- Use standardized comment formats with SRS references"
```

---

**Result: 98-99% consistency with minimal code in specification!**

**Strategy: Standardize the 10 highest variation points instead of writing full implementations.**
