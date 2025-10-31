# DEV-INIT CANONICAL SPECIFICATION
**Version**: 1.0  
**Source**: Developer-Assignment-Plan-DEV-INIT.md + 1.prod-structure-other-structure.md  
**Purpose**: Single source of truth cho implementation - NEVER DEVIATE

---

## ⚠️ **CRITICAL IMPLEMENTATION RULES**

1. **EXACT VERSIONS**: `@psp/shared-core@1.2.0`, `@psp/shared-events@1.1.0`, `@psp/shared-database@1.0.5`
2. **EXACT STRUCTURE**: Follow cấu trúc thư mục below - NO modifications
3. **EXACT CODE PATTERNS**: Follow code examples below - NO creativity
4. **EXACT DEPENDENCIES**: Follow package.json templates below - NO additions

---

## 📦 **PACKAGE 1: @psp/shared-core@1.2.0**

### **File Structure (MANDATORY)**
```
shared-core/
├── src/
│   ├── core/
│   │   ├── Result.ts                    # ✅ MUST IMPLEMENT
│   │   ├── AggregateRoot.ts            # ✅ MUST IMPLEMENT  
│   │   ├── Entity.ts                   # ✅ MUST IMPLEMENT
│   │   ├── ValueObject.ts              # ✅ MUST IMPLEMENT
│   │   ├── UniqueEntityId.ts           # ✅ MUST IMPLEMENT
│   │   └── index.ts                    # ✅ Export all core classes
│   ├── utils/
│   │   ├── logger.utils.ts             # ✅ Winston-based logging
│   │   ├── validation.utils.ts         # ✅ Class-validator helpers  
│   │   ├── crypto.utils.ts             # ✅ Bcrypt & hashing
│   │   ├── guard.utils.ts              # ✅ Input validation guards
│   │   └── index.ts                    # ✅ Export all utils
│   └── index.ts                        # ✅ Main export - Re-export core + utils
├── package.json                        # ✅ EXACT template below
├── tsconfig.json                       # ✅ Standard TypeScript config
├── .npmignore                          # ✅ Standard npm ignore
├── README.md                           # ✅ Usage documentation
└── CHANGELOG.md                        # ✅ Version history
```

### **package.json (EXACT COPY)**
```json
{
  "name": "@psp/shared-core",
  "version": "1.2.0",
  "description": "Core DDD building blocks and utilities for PSP platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    "class-validator": "^0.14.0",
    "winston": "^3.8.0",
    "bcryptjs": "^2.4.3",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/bcryptjs": "^2.4.2",
    "@types/uuid": "^9.0.0"
  }
}
```

### **Code Examples (MUST FOLLOW)**

#### `src/core/Result.ts` Pattern:
```typescript
export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error?: string;
  private _value?: T;

  private constructor(isSuccess: boolean, error?: string, value?: T) { 
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }

  public getValue(): T {
    if (this.isFailure) {
      throw new Error('Cannot get value from failed result');
    }
    return this._value as T;
  }
}
```

---

## 📡 **PACKAGE 2: @psp/shared-events@1.1.0**

### **File Structure (MANDATORY)**
```
shared-events/
├── src/
│   ├── events/
│   │   ├── UserCreatedEvent.ts         # ✅ MUST IMPLEMENT
│   │   ├── UserUpdatedEvent.ts         # ✅ MUST IMPLEMENT
│   │   ├── UserDeletedEvent.ts         # ✅ MUST IMPLEMENT
│   │   ├── UserSyncedToCRMEvent.ts     # ✅ MUST IMPLEMENT
│   │   ├── OTPSentEvent.ts             # ✅ MUST IMPLEMENT
│   │   ├── SessionRevokedEvent.ts      # ✅ MUST IMPLEMENT
│   │   ├── RoleAssignedEvent.ts        # ✅ MUST IMPLEMENT
│   │   └── index.ts                    # ✅ Export all events
│   ├── types/
│   │   ├── BaseEvent.ts                # ✅ Base event interface
│   │   ├── EventMetadata.ts            # ✅ Metadata types
│   │   └── index.ts                    # ✅ Export all types
│   └── index.ts                        # ✅ Main export
├── package.json                        # ✅ EXACT template below
├── tsconfig.json                       # ✅ Standard config
├── README.md                           # ✅ Documentation
└── CHANGELOG.md                        # ✅ Version history
```

### **package.json (EXACT COPY)**
```json
{
  "name": "@psp/shared-events",
  "version": "1.1.0",
  "description": "Shared domain events for PSP platform microservices",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### **Code Examples (MUST FOLLOW)**

#### Event Pattern (ALL events follow this):
```typescript
// Refs: Part06.1.2 Event Bus
export interface UserCreatedEvent {
  userId: string;
  email: string;
  timestamp: Date;
  // MUST include these base fields in ALL events
}
```

---

## 🗄️ **PACKAGE 3: @psp/shared-database@1.0.5**

### **File Structure (MANDATORY)**
```
shared-database/
├── src/
│   ├── database/
│   │   ├── connection.ts               # ✅ PrismaClient wrapper
│   │   ├── PrismaClient.ts             # ✅ Client management
│   │   └── migration.utils.ts          # ✅ Migration helpers
│   └── index.ts                        # ✅ Main export
├── package.json                        # ✅ EXACT template below
├── tsconfig.json                       # ✅ Standard config
├── README.md                           # ✅ Documentation
└── CHANGELOG.md                        # ✅ Version history
```

### **package.json (EXACT COPY)**
```json
{
  "name": "@psp/shared-database",
  "version": "1.0.5",
  "description": "Database utilities for PSP platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    "@prisma/client": "^5.0.0"
  },
  "devDependencies": {
    "prisma": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

### **Code Examples (MUST FOLLOW)**

#### `src/database/connection.ts` Pattern:
```typescript
// Refs: Part07.1 Data Model Overview
import { PrismaClient } from '@prisma/client';

let client: PrismaClient;

export const getPrismaClient = () => {
  if (!client) client = new PrismaClient();
  return client;
};
```

---

## ✅ **DELIVERABLES CHECKLIST (EXACT)**

### **Build & Publishing (MANDATORY)**
- [ ] **3 repos created** (`shared-core`, `shared-events`, `shared-database`)
- [ ] **`package.json` with exact versions** (`1.2.0`, `1.1.0`, `1.0.5`) 
- [ ] **`npm run build` success** for all 3 packages
- [ ] **Published to NPM registry** (`npm publish --access public`)
- [ ] **DEV-0 can `npm install` all 3 packages**
- [ ] **`README.md` with usage guide** for each package
- [ ] **Semantic versioning & CHANGELOG.md**

### **Critical Success Criteria (EXACT)**
- [ ] `npm install @psp/shared-core@^1.2.0` → **no error**
- [ ] `import { Result } from '@psp/shared-core'` → **compiles**
- [ ] `import { UserCreatedEvent } from '@psp/shared-events'` → **OK**  
- [ ] `getPrismaClient()` → **returns PrismaClient**

---

## 🚫 **IMPLEMENTATION ANTI-PATTERNS**

### **❌ NEVER DO:**
1. **Change package versions** - Must be exactly 1.2.0, 1.1.0, 1.0.5
2. **Add extra dependencies** - Only use dependencies listed above
3. **Modify file structure** - Must match exactly
4. **Creative code patterns** - Follow templates exactly
5. **Skip any mandatory files** - All ✅ files must exist
6. **Change export patterns** - Follow index.ts structure exactly

### **✅ ALWAYS DO:**
1. **Reference SRS sections** - Add comments like `// Refs: Part07.1 Data Model`
2. **Follow naming conventions** - Exact naming as specified
3. **Use TypeScript strict mode** - All packages must be TypeScript
4. **Include proper exports** - Main exports through index.ts
5. **Test imports work** - Verify `npm install` and imports
6. **Document everything** - README with usage examples

---

## 🎯 **FINAL NOTIFICATION MESSAGE**

When complete, send exact message:
**"✅ Shared packages ready – DEV-0 can start"**

---

**THIS IS THE SINGLE SOURCE OF TRUTH. NO DEVIATIONS ALLOWED.**
