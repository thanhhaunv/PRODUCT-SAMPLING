
# DEV-INIT: Shared Libraries Engineer  
**Prompt – Phase -1 (Week -1)**  
**BLOCKING DEPENDENCY FOR DEV-0 & ALL 7 MICROSERVICES**

---

## YOUR ASSIGNMENT
| Field | Detail |
|------|--------|
| **Role** | `DEV-INIT` – Shared Libraries Engineer |
| **Timeline** | **Phase -1 (Week -1)** – **MUST COMPLETE BEFORE DEV-0 STARTS** |
| **Critical** | You are **BLOCKING DEPENDENCY** for **DEV-0 (Identity Service)** and **all 7 microservices** |
| **Goal** | Create **3 independent NPM packages**, **build**, **publish** to registry so every service can `npm install` |

---

## TÀI LIỆU ĐẶC TẢ
| File | Sections quan trọng |
|------|---------------------|
| `SRS-Grok-V2.md` | Part02.8 Technical Requirements<br>Part06.1.2 Event Bus<br>Part07.1 Data Model Overview<br>EMSA-v1.0 Architecture Standards |
| `1.prod-structure-other-structure.md` | Bảng **SHARED PACKAGES** → 3 packages:<br>`@psp/shared-core@1.2.0`<br>`@psp/shared-events@1.1.0`<br>`@psp/shared-database@1.0.5` |

---

## 3 SHARED PROJECTS – TẠO RIÊNG BIỆT

---

### 1. `@psp/shared-core@1.2.0`
**Repo**: `https://github.com/psp-platform/shared-core`  
**Purpose**: Common utilities (logger, validation, crypto, DDD base classes)

#### Cấu trúc thư mục
```text
shared-core/
├── src/
│   ├── core/
│   │   ├── Result.ts
│   │   ├── AggregateRoot.ts
│   │   ├── Entity.ts
│   │   ├── ValueObject.ts
│   │   └── UniqueEntityId.ts
│   ├── utils/
│   │   ├── logger.utils.ts
│   │   ├── validation.utils.ts
│   │   ├── crypto.utils.ts
│   │   └── guard.utils.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── README.md
└── .npmignore
```

#### `package.json`
```json
{
  "name": "@psp/shared-core",
  "version": "1.2.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    "class-validator": "^0.14.0",
    "winston": "^3.8.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

---

### 2. `@psp/shared-events@1.1.0`
**Repo**: `https://github.com/psp-platform/shared-events`  
**Purpose**: Domain event **contracts only** (interfaces, no implementation)

#### Cấu trúc thư mục
```text
shared-events/
├── src/
│   ├── events/
│   │   ├── UserCreatedEvent.ts
│   │   ├── UserUpdatedEvent.ts
│   │   ├── CampaignPublishedEvent.ts
│   │   └── RedemptionProcessedEvent.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

#### `package.json`
```json
{
  "name": "@psp/shared-events",
  "version": "1.1.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

---

### 3. `@psp/shared-database@1.0.5`
**Repo**: `https://github.com/psp-platform/shared-database`  
**Purpose**: Prisma connection wrapper, migration helpers

#### Cấu trúc thư mục
```text
shared-database/
├── src/
│   ├── database/
│   │   ├── PrismaClient.ts
│   │   ├── connection.ts
│   │   └── migration.utils.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

#### `package.json`
```json
{
  "name": "@psp/shared-database",
  "version": "1.0.5",
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

---

## IMPLEMENTATION EXAMPLES

### `shared-core/src/core/Result.ts`
```ts
// Refs: Part05.8 Error Handling
export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error?: string;
  private _value?: T;

  private constructor(isSuccess: boolean, error?: string, value?: T) { /* ... */ }

  public static ok<U>(value?: U): Result<U> { /* ... */ }
  public static fail<U>(error: string): Result<U> { /* ... */ }
}
```

### `shared-events/src/events/UserCreatedEvent.ts`
```ts
// Refs: Part06.1.2 Event Bus
export interface UserCreatedEvent {
  userId: string;
  email: string;
  timestamp: Date;
}
```

### `shared-database/src/database/connection.ts`
```ts
// Refs: Part07.1 Data Model Overview
import { PrismaClient } from '@prisma/client';

let client: PrismaClient;

export const getPrismaClient = () => {
  if (!client) client = new PrismaClient();
  return client;
};
```

---

## DELIVERABLES – END OF WEEK -1
- [ ] **3 repos created** (`shared-core`, `shared-events`, `shared-database`)
- [ ] **`package.json` with exact versions** (`1.2.0`, `1.1.0`, `1.0.5`)
- [ ] **`npm run build` success**
- [ ] **Published to NPM registry** (`npm publish --access public`)
- [ ] **DEV-0 can `npm install` all 3 packages**
- [ ] **`README.md` with usage guide**
- [ ] **Semantic versioning & CHANGELOG.md**

### Critical Success Criteria
- [ ] `npm install @psp/shared-core@^1.2.0` → **no error**
- [ ] `import { Result } from '@psp/shared-core'` → **compiles**
- [ ] `import { UserCreatedEvent } from '@psp/shared-events'` → **OK**
- [ ] `getPrismaClient()` → **returns PrismaClient**

---

## COORDINATION
| Bạn block | Chi tiết |
|----------|--------|
| **DEV-0 (Identity)** | Needs `npm install` 3 packages |
| **All 7 microservices** | Use shared packages |

**Communication**:
- Daily update: Build & publish status
- **Completion notification**: `"Shared packages ready – DEV-0 can start"`

---

## TÓM TẮT
**Create 3 independent NPM packages**:
1. `@psp/shared-core@1.2.0` → **common utils**
2. `@psp/shared-events@1.1.0` → **event contracts**
3. `@psp/shared-database@1.0.5` → **DB helpers**

**MUST COMPLETE BEFORE DEV-0**  
**Do NOT create inside any microservice**  
**Build → Publish → Notify**

---

**DEV-INIT: START NOW!**  
Create repos → implement → build → publish → notify DEV-0.
```
```
