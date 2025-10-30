# PROMPT_DEV_1.md
```markdown
# 🤖 PROMPT CHO DEV-1: DOMAIN ENTITIES SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-1 - Domain Entities Specialist
**Timeline**: Phase 1 (Week 1-2) - Foundation Layer
**Critical**: Bạn là blocking dependency cho DEV-2, DEV-4, DEV-6
```
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-1:
- Part04.1.4 User Management (FR-004)
- Part04.1.5 OTP Verification (FR-005)
- Part05.3 Security Requirements
- Access_Control_Tree_Grok.md (RBAC system)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-1 – Domain Entities & Events (12 files)"
Files assigned: 12 files (5 entities + 7 events)
Ưu tiên implement:
1. User.ts (Week 1 - Critical)
2. Role.ts, Permission.ts (Week 1 - RBAC)
3. Session.ts, OTPCode.ts (Week 1-2)
4. 7 events (Week 2)
```
### **DEV-1** – Domain Entities & Events (12 files)

| File | Mô tả |
|------|------|
| `src/domain/entities/User.ts` | `AggregateRoot`, validation |
| `src/domain/entities/Role.ts` | Hierarchy |
| `src/domain/entities/Permission.ts` | Granular |
| `src/domain/entities/Session.ts` | JWT |
| `src/domain/entities/OTPCode.ts` | 2FA |
| `src/domain/events/UserCreatedEvent.ts` | |
| `src/domain/events/UserUpdatedEvent.ts` | |
| `src/domain/events/UserDeletedEvent.ts` | |
| `src/domain/events/UserSyncedToCRMEvent.ts` | |
| `src/domain/events/OTPSentEvent.ts` | |
| `src/domain/events/SessionRevokedEvent.ts` | |
| `src/domain/events/RoleAssignedEvent.ts` | |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/domain/entities/User.ts
SRS Reference: Part04.1.4 User Management (FR-004)
Business Purpose: Encapsulate user logic, data integrity
→ Đọc SRS-Grok-V2.md > Part04.1.4 → Implement User entity
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - DOMAIN LAYER**
### **Domain Entity Pattern**
```typescript
export class User extends AggregateRoot {
  private constructor(/* private fields */) { super(); }
 
  // Factory method - REQUIRED
  public static create(userData: CreateUserData): Result<User> {
    // 1. Validate business rules từ SRS
    // 2. Create value objects
    // 3. Apply domain constraints
    // 4. Add domain event
    return Result.ok(new User(...));
  }
 
  // Business methods
  public changePassword(newPassword: Password): Result<void> {
    // Business logic + domain event
    this.addDomainEvent(new UserPasswordChangedEvent(...));
    return Result.ok();
  }
 
  // Read-only getters
  public get id(): UserId { return this._id; }
}
```
### **Value Object Pattern**
```typescript
export class Email {
  private constructor(private readonly value: string) {}
 
  public static create(email: string): Result<Email> {
    // Validation logic từ SRS Part05.7
    if (!isValid) return Result.fail('Invalid email');
    return Result.ok(new Email(normalizedEmail));
  }
 
  public getValue(): string { return this.value; }
  public equals(other: Email): boolean { return this.value === other.value; }
}
```
---
## 🔄 **WORKFLOW CHO DEV-1**
### **Week 1-2: Core Domain**
```bash
Day 1-2:
- Đọc SRS Part04.1.4 hoàn toàn
- Implement User.ts theo business rules
Day 3-4:
- Đọc Access_Control_Tree_Grok.md
- Implement Role.ts, Permission.ts
Day 5-7:
- Implement Session.ts, OTPCode.ts
- Implement 7 events
- Write unit tests
```
### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong bảng mapping
2. Đọc SRS Reference
3. Implement theo pattern trên
4. Test: npm test
5. Move to next
```
---
## ✅ **DELIVERABLES CHO DEV-1**
### **End of Week 1**:
- [ ] User.ts, Role.ts, Permission.ts hoàn chỉnh
- [ ] Unit tests với 95%+ coverage
### **End of Week 2**:
- [ ] All 12 files implemented
- [ ] Domain events cho all state changes
- [ ] Interfaces stable cho DEV-2
---
## 💬 **COORDINATION CHO DEV-1**
### **Bạn Block (Critical Dependencies)**:
- **DEV-2**: Cần entities để implement services
- **DEV-4**: Cần entities để implement use cases
- **DEV-6**: Cần entities để implement repositories
### **Communication**:
- Entity changes → Notify ALL immediately
- Business rules → Escalate to tech lead
---
**🎯 TÓM TẮT: Đọc SRS (focus Part04.1.4, Part05.3, Access_Control_Tree_Grok.md), implement 12 domain files theo mapping table, hoàn thành Week 1-2 để unblock other developers.**
```
