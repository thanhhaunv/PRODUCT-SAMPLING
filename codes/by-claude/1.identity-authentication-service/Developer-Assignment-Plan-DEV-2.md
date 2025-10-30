# PROMPT_DEV_2.md
```markdown
# 🤖 PROMPT CHO DEV-2: DOMAIN VALUE OBJECTS & SERVICES SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-2 - Domain Value Objects & Services Specialist
**Timeline**: Phase 1 (Week 1-2) - Foundation Layer
**Critical**: Bạn là blocking dependency cho DEV-3, DEV-4, DEV-5
```
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-2:
- Part05.3 Security Requirements (password hashing)
- Part05.7 Input Validation (email, phone)
- Part07.2.4 OTP Management
- Part07.2.5 Session Management
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-2 – Domain VO & Services (15 files)"
Files assigned: 15 files (5 value objects + 6 services + 4 repositories)
Ưu tiên implement:
1. Email.ts, Phone.ts, Password.ts (Week 1 - Critical)
2. AuthenticationDomainService.ts (Week 1)
3. Remaining VO/services/repositories (Week 2)
```
### **DEV-2** – Domain VO & Services (15 files)

| File | Mô tả |
|------|------|
| `src/domain/value-objects/Email.ts` | Immutable |
| `src/domain/value-objects/Phone.ts` | |
| `src/domain/value-objects/Password.ts` | Hash |
| `src/domain/value-objects/JWTToken.ts` | |
| `src/domain/value-objects/RefreshToken.ts` | |
| `src/domain/services/AuthenticationDomainService.ts` | Login logic |
| `src/domain/services/PasswordHashingService.ts` | |
| `src/domain/services/OTPGenerationService.ts` | |
| `src/domain/services/SessionManagementService.ts` | |
| `src/domain/services/RBACService.ts` | Check permission |
| `src/domain/services/UserSyncService.ts` | CRM |
| `src/domain/repositories/IUserRepository.ts` | Interface |
| `src/domain/repositories/IRoleRepository.ts` | |
| `src/domain/repositories/ISessionRepository.ts` | |
| `src/domain/repositories/IOTPRepository.ts` | |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/domain/value-objects/Email.ts
SRS Reference: Part05.7 Input Validation
Business Purpose: Consistent email handling
→ Đọc SRS-Grok-V2.md > Part05.7 → Implement Email VO
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - DOMAIN LAYER**
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
### **Domain Service Pattern**
```typescript
export class AuthenticationDomainService {
  public authenticate(user: User, password: string): Result<JWTToken> {
    // Business logic từ SRS Part04.1.3
    if (!user.password.matches(password)) return Result.fail('Invalid credentials');
    // Generate token
    return Result.ok(new JWTToken(...));
  }
}
```
---
## 🔄 **WORKFLOW CHO DEV-2**
### **Week 1-2: Domain Logic**
```bash
Day 1-2:
- Đọc SRS Part05.3 hoàn toàn
- Implement Email.ts, Phone.ts, Password.ts
Day 3-4:
- Implement AuthenticationDomainService.ts
- Implement PasswordHashingService.ts
Day 5-7:
- Implement remaining services: OTPGenerationService.ts, etc.
- Implement 4 repository interfaces
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
## ✅ **DELIVERABLES CHO DEV-2**
### **End of Week 1**:
- [ ] Email.ts, Phone.ts, Password.ts với validation
- [ ] AuthenticationDomainService.ts, PasswordHashingService.ts
- [ ] Unit tests 95%+ coverage
### **End of Week 2**:
- [ ] All 15 files implemented
- [ ] Repository interfaces stable
---
## 💬 **COORDINATION CHO DEV-2**
### **Bạn Block (Critical Dependencies)**:
- **DEV-3**: Cần services để implement auth use cases
- **DEV-4**: Cần services để implement user use cases
- **DEV-5**: Cần repositories để implement persistence
### **Communication**:
- Service changes → Notify ALL immediately
- Validation rules → Coordinate với DEV-1
---
**🎯 TÓM TẮT: Đọc SRS (focus Part05.3, Part05.7), implement 15 domain files theo mapping table, hoàn thành Week 1-2 để unblock other developers.**
```
