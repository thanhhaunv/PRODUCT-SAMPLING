# 🔧 DEV-0: PROJECT SETUP & INFRASTRUCTURE SPECIALIST

## 📋 **YOUR ASSIGNMENT**

**Role**: DEV-0 - Project Setup & Infrastructure Specialist  
**Timeline**: Phase 0 (Week 0-1) - MUST COMPLETE BEFORE ALL OTHER DEVELOPERS  
**Critical**: Bạn là BLOCKING DEPENDENCY cho tất cả 9 developers còn lại

---

## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**

### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Sections quan trọng cho DEV-0:
- Part02.8 Technical Requirements
- Part06.2.1 Layered Architecture  
- Part07.1 Data Model Overview
- Part14.1 Container Orchestration
- Part15.2 Environment Configuration
- EMSA-v1.0 Architecture Standards
```

### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"

Tìm tất cả files có Category:
- "SHARED PACKAGES"
- "BACKEND SHARED"  
- Configuration files
- DevOps setup files
```

---

## 🗂️ **CRITICAL SETUP FILES - PHASE 0**

### **🔥 Priority 1: Project Foundation (Day 1-2)**
```bash
# Project Root Configuration
├── package.json                          # Node.js project setup + dependencies
├── tsconfig.json                         # TypeScript strict configuration
├── .eslintrc.js                         # ESLint rules for team consistency
├── .prettierrc                          # Prettier formatting rules
├── jest.config.js                       # Jest testing configuration
├── .gitignore                           # Git ignore patterns
├── .env.example                         # Environment variables template
├── .dockerignore                        # Docker ignore patterns
└── README.md                            # Project setup documentation

# Workspace Setup
├── .vscode/
│   ├── settings.json                    # VSCode workspace settings
│   ├── launch.json                      # Debug configurations
│   └── extensions.json                  # Recommended extensions
```

### **🔥 Priority 2: Shared Core Library (Day 2-3) - BLOCKS DEV-1**
```bash
# backend/src/shared/core/ - CRITICAL cho DEV-1
├── Result.ts                            # Error handling pattern
├── AggregateRoot.ts                     # Domain entity base class
├── DomainEvent.ts                       # Domain event base interface
├── Entity.ts                           # Entity base class
├── ValueObject.ts                       # Value object base class
├── UniqueEntityId.ts                    # Entity ID implementation
├── Guard.ts                            # Input validation utilities
├── Logger.ts                           # Logging interface & implementation
├── Either.ts                           # Functional error handling
└── AppError.ts                         # Application error types

# SRS References for each:
# Result.ts → Part05.8 Error Handling
# AggregateRoot.ts → Part06.2.1 Layered Architecture
# DomainEvent.ts → Part06.1.2 Event Bus
```

### **🔥 Priority 3: Shared Types & Constants (Day 3-4)**
```bash
# backend/src/shared/types/
├── CommonTypes.ts                       # Common type definitions
├── ErrorTypes.ts                        # Error type definitions
├── EventTypes.ts                        # Event type definitions
├── ApiTypes.ts                         # API request/response types
└── DatabaseTypes.ts                    # Database-related types

# backend/src/shared/constants/
├── ErrorMessages.ts                     # Standardized error messages
├── ValidationRules.ts                   # Validation constants
├── SystemConstants.ts                   # System-wide constants
├── HttpStatusCodes.ts                   # HTTP status codes
└── EventNames.ts                        # Domain event names

# backend/src/shared/utils/
├── DateUtils.ts                        # Date manipulation utilities
├── StringUtils.ts                      # String processing utilities
├── ValidationUtils.ts                  # Common validation functions
└── CryptoUtils.ts                      # Cryptographic utilities
```

### **🔥 Priority 4: Database Infrastructure (Day 4-5)**
```bash
# backend/prisma/
├── schema.prisma                        # Complete database schema
├── migrations/                          # Database migration files
├── seed.ts                             # Database seeding script
└── seed-data/                          # Seed data files
    ├── users.json
    ├── roles.json
    └── permissions.json

# Database Scripts
├── scripts/
│   ├── db-reset.sh                     # Database reset script
│   ├── db-migrate.sh                   # Migration script
│   ├── db-seed.sh                      # Seeding script
│   └── db-backup.sh                    # Backup script

# SRS Reference: Part07.2 Identity Database Design
```

### **🔥 Priority 5: Testing Infrastructure (Day 5-6)**
```bash
# backend/tests/
├── setup.ts                           # Jest test environment setup
├── teardown.ts                        # Test cleanup
├── jest.config.js                     # Test configuration
└── globalSetup.ts                     # Global test setup

# Mock Infrastructure
├── tests/mocks/
│   ├── MockUserRepository.ts          # Repository mocks
│   ├── MockEmailService.ts            # Email service mock
│   ├── MockSMSService.ts              # SMS service mock
│   ├── MockEventBus.ts                # Event bus mock
│   └── MockDatabase.ts                # Database mock

# Test Utilities
├── tests/utils/
│   ├── TestDataFactory.ts             # Test data generation
│   ├── DatabaseTestUtils.ts           # Database test helpers
│   ├── ApiTestUtils.ts                # API testing utilities
│   └── MockFactory.ts                 # Mock creation utilities

# SRS Reference: Part13.2 Unit Testing Framework
```

### **🔥 Priority 6: DevOps Foundation (Day 6-7)**
```bash
# Container Configuration
├── Dockerfile                          # Multi-stage Docker build
├── docker-compose.yml                  # Local development environment
├── docker-compose.test.yml             # Testing environment
├── docker-compose.prod.yml             # Production-like environment
└── .dockerignore                       # Docker ignore patterns

# CI/CD Pipeline
├── .github/workflows/
│   ├── ci.yml                          # Continuous Integration
│   ├── test.yml                        # Automated testing
│   ├── build.yml                       # Build validation
│   └── deploy.yml                      # Deployment pipeline

# Kubernetes Setup (Foundation)
├── k8s/
│   ├── namespace.yaml                  # Kubernetes namespace
│   ├── configmap.yaml                  # Configuration mapping
│   ├── secrets.yaml                    # Secrets template
│   └── service-account.yaml            # Service account

# SRS References: 
# Part14.1 Container Orchestration
# Part15.2 CI/CD Pipelines
```

---

## 🏗️ **IMPLEMENTATION EXAMPLES**

### **Result.ts Pattern - CRITICAL cho tất cả developers**
```typescript
// backend/src/shared/core/Result.ts
export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error?: string;
  private _value?: T;

  private constructor(isSuccess: boolean, error?: string, value?: T) {
    if (isSuccess && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Cant retrieve the value from a failed result. Use getErrorValue instead.');
    }
    return this._value as T;
  }

  public getErrorValue(): string {
    return this.error as string;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }
}
```

### **AggregateRoot.ts Pattern**
```typescript
// backend/src/shared/core/AggregateRoot.ts
import { DomainEvent } from './DomainEvent';
import { Entity } from './Entity';
import { UniqueEntityId } from './UniqueEntityId';

export abstract class AggregateRoot extends Entity {
  private _domainEvents: DomainEvent[] = [];

  protected constructor(id?: UniqueEntityId) {
    super(id);
  }

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }
}
```

---

## ✅ **DELIVERABLES CHO DEV-0**

### **End of Week 1 - BLOCKING cho tất cả developers khác**:
- [ ] **Project foundation** complete (package.json, tsconfig, etc.)
- [ ] **Shared core library** implemented và tested (Result, AggregateRoot, etc.)
- [ ] **Database schema** defined và migration scripts ready
- [ ] **Testing infrastructure** setup complete
- [ ] **DevOps foundation** containerization ready
- [ ] **Development environment** functional cho team
- [ ] **Documentation** complete cho project setup

### **Critical Success Criteria**:
- [ ] DEV-1 có thể import và sử dụng shared/core classes
- [ ] Database connection working
- [ ] Tests có thể run successfully
- [ ] Docker environment functional
- [ ] All configuration files working

---

## 💬 **COORDINATION CHO DEV-0**

### **Bạn Block (Critical - TẤT CẢ)**:
- **DEV-1**: Cần shared/core để implement domain entities
- **DEV-2**: Cần shared/core và event infrastructure  
- **DEV-3**: Cần shared/core cho repository interfaces
- **DEV-4**: Cần shared/core cho use cases
- **DEV-6**: Cần database setup
- **ALL OTHERS**: Cần project foundation để start development

### **Communication**:
- **Daily updates**: Report progress to tech lead
- **Breaking changes**: Alert entire team immediately  
- **Completion notification**: Must notify all developers when Phase 0 complete

---

**🎯 TÓM TẮT: Setup complete project foundation, shared libraries, database, testing infrastructure. MUST COMPLETE Week 1 để unblock tất cả 9 developers còn lại. Priority: shared/core library là CRITICAL nhất.**
