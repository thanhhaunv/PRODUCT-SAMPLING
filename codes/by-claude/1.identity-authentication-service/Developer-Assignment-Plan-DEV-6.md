# PROMPT_DEV_6.md
```markdown
# 🤖 PROMPT CHO DEV-6: EXTERNAL SERVICES & CONTROLLERS SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-6 - External Services & Controllers Specialist
**Timeline**: Phase 3 (Week 3-4) - Infrastructure + Presentation Layer
**Critical**: Bạn là blocking dependency cho DEV-8, DEV-9
```
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-6:
- Part08.1 API Design (endpoints)
- Part07.2.4 OTP (Twilio/Email adapters)
- Part05.3 Security (middleware)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-6 – External + Controllers (20 files)"
Files assigned: 20 files (4 controllers + 3 adapters + 4 middleware + 9 validators)
Ưu tiên implement:
1. AuthenticationController.ts (Week 3 - Critical)
2. UserController.ts (Week 3)
3. External adapters (Week 3-4)
4. Middleware & validators (Week 4)
```
### **DEV-6** – External + Controllers (20 files)

| File | Mô tả |
|------|------|
| `src/infrastructure/external-services/TwilioOTPAdapter.ts` | SMS |
| `src/infrastructure/external-services/EmailOTPAdapter.ts` | |
| `src/infrastructure/external-services/CRMIntegrationAdapter.ts` | |
| `src/infrastructure/external-services/JWTService.ts` | |
| `src/presentation/controllers/AuthenticationController.ts` | `/api/auth/*` |
| `src/presentation/controllers/UserController.ts` | `/api/users/*` |
| `src/presentation/controllers/OTPController.ts` | `/api/otp/*` |
| `src/presentation/controllers/SessionController.ts` | `/api/sessions/*` |
| `src/presentation/middleware/AuthMiddleware.ts` | JWT |
| `src/presentation/middleware/RBACMiddleware.ts` | |
| `src/presentation/middleware/RateLimitMiddleware.ts` | |
| `src/presentation/middleware/ValidationMiddleware.ts` | |
| `src/presentation/validators/LoginValidator.ts` | |
| `src/presentation/validators/CreateUserValidator.ts` | |
| `src/presentation/validators/VerifyOTPValidator.ts` | |
| `src/presentation/validators/AssignRoleValidator.ts` | |
| `src/presentation/validators/UpdateUserValidator.ts` | |
| `src/presentation/validators/RefreshTokenValidator.ts` | |
| `src/presentation/validators/LogoutValidator.ts` | |
| `src/presentation/validators/RevokeSessionValidator.ts` | |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/presentation/controllers/AuthenticationController.ts
SRS Reference: Part08.1 API Design
Business Purpose: /api/auth endpoints
→ Đọc SRS-Grok-V2.md > Part08.1 → Implement AuthenticationController
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - PRESENTATION LAYER**
### **Controller Pattern**
```typescript
@Controller('auth')
export class AuthenticationController {
  constructor(private loginUseCase: LoginUseCase) {}
 
  @Post('login')
  async login(@Body() dto: LoginDto): Promise<JWTResponse> {
    // Call use case
    return this.loginUseCase.execute(dto).getValue();
  }
}
```
### **Middleware Pattern**
```typescript
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Verify JWT từ SRS Part05.3
    if (!valid) throw new AuthenticationException();
    next();
  }
}
```
---
## 🔄 **WORKFLOW CHO DEV-6**
### **Week 3-4: API & External**
```bash
Day 1-2:
- Đọc SRS Part08.1 hoàn toàn
- Implement AuthenticationController.ts
- Implement UserController.ts
Day 3-4:
- Implement TwilioOTPAdapter.ts
- Implement CRMIntegrationAdapter.ts
Day 5-7:
- Implement middleware: AuthMiddleware.ts, RBACMiddleware.ts
- Implement validators
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
## ✅ **DELIVERABLES CHO DEV-6**
### **End of Week 3**:
- [ ] AuthenticationController.ts, UserController.ts
- [ ] External adapters
- [ ] Unit tests 95%+ coverage
### **End of Week 4**:
- [ ] All 20 files implemented
- [ ] Middleware & validators stable
---
## 💬 **COORDINATION CHO DEV-6**
### **Bạn Block (Critical Dependencies)**:
- **DEV-8**: Cần controllers để test integration
- **DEV-9**: Cần controllers để E2E
### **Communication**:
- API changes → Notify ALL immediately
- Adapter schemas → Coordinate với DEV-5
---
**🎯 TÓM TẮT: Đọc SRS (focus Part08.1, Part07.2.4), implement 20 external & controller files theo mapping table, hoàn thành Week 3-4 để unblock other developers.**
```
