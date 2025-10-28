# 🤖 PROMPT CHO DEV-1: DOMAIN ENTITIES SPECIALIST

## 📋 **YOUR ASSIGNMENT**

**Role**: DEV-1 - Domain Entities Specialist  
**Timeline**: Phase 1 (Week 1-2) - Foundation Layer  
**Critical**: Bạn là blocking dependency cho DEV-2, DEV-4, DEV-6

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
File: Developer-Assignment-Plan-SubProject1.md
Section: "DEV-1: DOMAIN ENTITIES SPECIALIST"
Files assigned: 15 files (8 domain entities + 7 value objects)

Ưu tiên implement:
1. User.ts, Email.ts, Password.ts (Week 1 - Critical)
2. Role.ts, Permission.ts (Week 1 - RBAC foundation)  
3. Remaining entities/value objects (Week 2)
```

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

### **Week 1: Core Foundation**
```bash
Day 1-2: 
- Đọc SRS Part04.1.4 User Management hoàn toàn
- Implement User.ts theo business rules trong SRS
- Implement Email.ts, Password.ts (critical value objects)

Day 3-4:
- Đọc Access_Control_Tree_Grok.md  
- Implement Role.ts, Permission.ts
- Implement RoleId.ts value object

Day 5-7:
- Complete remaining entities: Session.ts, OTPCode.ts, UserProfile.ts, LoginAttempt.ts, AuditLog.ts
- Complete remaining value objects: Phone.ts, UserId.ts, SessionId.ts, OTPCode.ts
- Write comprehensive tests (95%+ coverage)
```

### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
2. Đọc "SRS Reference" → Mở section trong SRS-Grok-V2.md
3. Đọc hoàn toàn business requirements
4. Code entity/value object theo patterns trên
5. Add domain events cho state changes
6. Write unit tests
7. Move to next file
```

---

## ✅ **DELIVERABLES CHO DEV-1**

### **End of Week 1**:
- [ ] User.ts với complete business rules từ SRS Part04.1.4
- [ ] Email.ts, Password.ts với validation từ SRS Part05.7 + Part05.3.2
- [ ] Role.ts, Permission.ts với RBAC logic từ Access_Control_Tree_Grok.md
- [ ] Unit tests với 95%+ coverage

### **End of Week 2**:
- [ ] All 15 files implemented và tested
- [ ] Domain events defined cho all entity state changes  
- [ ] Interfaces stable cho DEV-2, DEV-4, DEV-6
- [ ] Documentation với JSDoc

---

## 💬 **COORDINATION CHO DEV-1**

### **Bạn Block (Critical Dependencies)**:
- **DEV-2**: Cần entities của bạn để implement domain services
- **DEV-4**: Cần entities của bạn để implement use cases
- **DEV-6**: Cần entities của bạn để implement repositories

### **Communication**:
- Entity interface changes → Notify ALL developers immediately
- Domain event schemas → Coordinate với DEV-2
- Business rule questions → Escalate to tech lead

---

**🎯 TÓM TẮT: Đọc SRS-Grok-V2.md (focus Part04.1.4, Part05.3, Access_Control_Tree_Grok.md), implement 15 domain files theo mapping table, hoàn thành Week 1-2 để unblock other developers.**
