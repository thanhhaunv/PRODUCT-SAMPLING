# PROMPT_DEV_3.md
```markdown
# 🤖 PROMPT CHO DEV-3: APP USE CASES (AUTH + OTP) SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-3 - App Use Cases (Auth + OTP) Specialist
**Timeline**: Phase 2 (Week 2-3) - Application Layer
**Critical**: Bạn là blocking dependency cho DEV-6
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-3:
- Part04.1.3 User Authentication (FR-003)
- Part04.1.5 OTP Verification (FR-005)
- Part07.2.5 Session Management
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-3 – App Use Cases (Auth + OTP) (16 files)"
Files assigned: 16 files (6 use cases + 10 DTOs)
Ưu tiên implement:
1. LoginUseCase.ts, VerifyOTPUseCase.ts (Week 2 - Critical)
2. RefreshTokenUseCase.ts, LogoutUseCase.ts (Week 2)
3. SendOTPUseCase.ts, RevokeSessionUseCase.ts (Week 3)
4. All DTOs (Week 3)
```
### **DEV-3** – App Use Cases (Auth + OTP) (16 files)

| File | Mô tả |
|------|------|
| `src/application/use-cases/authentication/LoginUseCase.ts` | |
| `src/application/use-cases/authentication/LogoutUseCase.ts` | |
| `src/application/use-cases/authentication/RefreshTokenUseCase.ts` | |
| `src/application/use-cases/authentication/VerifyOTPUseCase.ts` | |
| `src/application/use-cases/authentication/SendOTPUseCase.ts` | |
| `src/application/use-cases/authentication/RevokeSessionUseCase.ts` | |
| `src/application/dto/LoginDto.ts` | |
| `src/application/dto/VerifyOTPDto.ts` | |
| `src/application/dto/SendOTPDto.ts` | |
| `src/application/dto/RefreshTokenDto.ts` | |
| `src/application/dto/LogoutDto.ts` | |
| `src/application/dto/RevokeSessionDto.ts` | |
| `src/application/dto/JWTResponseDto.ts` | |
| `src/application/dto/OTPResponseDto.ts` | |
| `src/application/dto/AuthErrorDto.ts` | |
| `src/application/dto/AuthSuccessDto.ts` | |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/application/use-cases/authentication/LoginUseCase.ts
SRS Reference: Part04.1.3 User Authentication (FR-003)
Business Purpose: Portal login flow
→ Đọc SRS-Grok-V2.md > Part04.1.3 → Implement LoginUseCase
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - APPLICATION LAYER**
### **Use Case Pattern**
```typescript
export class LoginUseCase {
  constructor(private authService: AuthenticationDomainService) {}
 
  execute(dto: LoginDto): Result<JWTResponse> {
    // 1. Validate DTO (class-validator)
    // 2. Call domain service
    // 3. Handle result
    return this.authService.authenticate(dto.email, dto.password);
  }
}
```
### **DTO Pattern**
```typescript
export class LoginDto {
  @IsEmail() email: string;
  @IsString() password: string;
}
```
---
## 🔄 **WORKFLOW CHO DEV-3**
### **Week 2-3: Auth Flows**
```bash
Day 1-2:
- Đọc SRS Part04.1.3 hoàn toàn
- Implement LoginUseCase.ts
- Implement VerifyOTPUseCase.ts
Day 3-4:
- Implement RefreshTokenUseCase.ts
- Implement LogoutUseCase.ts
Day 5-7:
- Implement SendOTPUseCase.ts, RevokeSessionUseCase.ts
- Implement all DTOs
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
## ✅ **DELIVERABLES CHO DEV-3**
### **End of Week 2**:
- [ ] LoginUseCase.ts, VerifyOTPUseCase.ts
- [ ] RefreshTokenUseCase.ts, LogoutUseCase.ts
- [ ] Unit tests 95%+ coverage
### **End of Week 3**:
- [ ] All 16 files implemented
- [ ] DTOs validated
---
## 💬 **COORDINATION CHO DEV-3**
### **Bạn Block (Critical Dependencies)**:
- **DEV-6**: Cần use cases để implement controllers
### **Communication**:
- Use case changes → Notify ALL immediately
- DTO schemas → Coordinate với DEV-6
---
**🎯 TÓM TẮT: Đọc SRS (focus Part04.1.3, Part04.1.5), implement 16 auth files theo mapping table, hoàn thành Week 2-3 để unblock DEV-6.**
```
