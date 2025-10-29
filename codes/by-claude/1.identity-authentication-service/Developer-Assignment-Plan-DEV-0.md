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

### **DEV-0** – Project Setup (25 files)

| File | Mô tả |
|------|------|
| `package.json` | Add 3 shared packages + NestJS, Prisma, Jest |
| `tsconfig.json` | Strict mode |
| `jest.config.js` | Coverage 80% |
| `eslint.config.js` | EMSA rules |
| `.prettierrc` | Format |
| `.gitignore`, `.dockerignore` | |
| `.env.example` | `DATABASE_URL`, `JWT_SECRET`, `TWILIO_SID` |
| `README.md` | Full setup guide |
| `Dockerfile` | Multi-stage build |
| `docker-compose.yml` | PostgreSQL + Redis |
| `prisma/schema.prisma` | Initial models |
| `prisma/migrations/0001_init/` | Migration |
| `scripts/setup-identity-service.sh` | `prisma generate` |
| `scripts/migrate-database.sh` | |
| `scripts/backup-identity-data.sh` | |
| `k8s/identity-deployment.yaml` | |
| `k8s/identity-service.yaml` | |
| `k8s/identity-configmap.yaml` | |
| `k8s/identity-secrets.yaml` | |
| `.github/workflows/identity-ci.yml` | Test + Build |
| `.github/workflows/identity-cd.yml` | Deploy |
| `monitoring/prometheus/identity-metrics.yaml` | |
| `monitoring/grafana/dashboards/identity-dashboard.json` | |
| `tests/setup.ts`, `tests/teardown.ts` | Jest setup |
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
