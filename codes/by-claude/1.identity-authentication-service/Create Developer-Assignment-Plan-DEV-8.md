# PROMPT_DEV_8.md

# 🤖 PROMPT CHO DEV-8: TESTING (UNIT + INTEGRATION) SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-8 - Testing (Unit + Integration) Specialist
**Timeline**: Phase 4 (Week 4-5) - Testing Layer
**Critical**: Bạn là blocking dependency cho DEV-9 (E2E tests)
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-8:
- Part13.2 Unit Testing Framework
- Part13.3 Integration Testing
- Part05.8 Error Handling (test exceptions)
- EMSA-v1.0 Testing Standards (coverage 80%)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-8 – Testing Unit/Integration (15 files)"
Files assigned: 15 files (unit tests for domain/application, integration for infrastructure, mocks/utils/fixtures)
Ưu tiên implement:
1. tests/unit/domain/entities/*.test.ts (Week 4 - Critical)
2. tests/unit/application/use-cases/*.test.ts (Week 4)
3. tests/integration/infrastructure/*.test.ts (Week 5)
4. tests/mocks/* & tests/utils/* (Week 5)
```
### **DEV-8** – Testing Unit/Integration (15 files)

| File | Mô tả |
|------|------|
| `tests/unit/domain/entities/User.test.ts` | |
| `tests/unit/domain/value-objects/Email.test.ts` | |
| `tests/unit/domain/services/AuthenticationDomainService.test.ts` | |
| `tests/unit/application/use-cases/LoginUseCase.test.ts` | |
| `tests/unit/application/use-cases/CreateUserUseCase.test.ts` | |
| `tests/integration/infrastructure/UserRepository.test.ts` | |
| `tests/integration/infrastructure/SessionRepository.test.ts` | |
| `tests/mocks/MockUserRepository.ts` | |
| `tests/mocks/MockOTPAdapter.ts` | |
| `tests/mocks/MockEventBus.ts` | |
| `tests/utils/TestDatabase.ts` | |
| `tests/utils/TestFactory.ts` | |
| `tests/fixtures/user.fixture.ts` | |
| `tests/fixtures/session.fixture.ts` | |
| `tests/fixtures/otp.fixture.ts` | |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/tests/unit/domain/entities/User.test.ts
SRS Reference: Part13.2 Unit Testing
Business Purpose: Test User entity logic
→ Đọc SRS-Grok-V2.md > Part13.2 → Implement User.test.ts
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - TESTING LAYER**
### **Unit Test Pattern**
```typescript
// tests/unit/domain/entities/User.test.ts
describe('User Entity', () => {
  it('should create user with valid data', () => {
    const user = User.create({ email: 'test@example.com' });
    expect(user.isSuccess).toBe(true);
  });

  it('should fail with invalid email', () => {
    const user = User.create({ email: 'invalid' });
    expect(user.isFailure).toBe(true);
  });
});
```
### **Integration Test Pattern**
```typescript
// tests/integration/infrastructure/UserRepository.test.ts
describe('UserRepository', () => {
  it('should save and retrieve user', async () => {
    const user = User.create({ ... });
    await repo.save(user.getValue());
    const found = await repo.findById(user.id);
    expect(found).not.toBeNull();
  });
});
```
---
## 🔄 **WORKFLOW CHO DEV-8**
### **Week 4-5: Full Testing**
```bash
Day 1-2:
- Đọc SRS Part13.2 hoàn toàn
- Implement unit/domain/entities/*.test.ts
Day 3-4:
- Implement unit/application/use-cases/*.test.ts
Day 5-7:
- Implement integration/infrastructure/*.test.ts
- Implement mocks/utils/fixtures
- Run coverage report
```
### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong bảng mapping
2. Đọc SRS Reference
3. Implement theo pattern trên
4. Test: npm test --coverage
5. Move to next
```
---
## ✅ **DELIVERABLES CHO DEV-8**
### **End of Week 4**:
- [ ] Unit tests for domain/entities & application/use-cases
- [ ] Coverage 95%+
### **End of Week 5**:
- [ ] All 15 files implemented
- [ ] Integration tests pass
---
## 💬 **COORDINATION CHO DEV-8**
### **Bạn Block (Critical Dependencies)**:
- **DEV-9**: Cần unit/integration tests để build E2E
### **Communication**:
- Test failures → Notify ALL immediately
- Coverage issues → Coordinate with DEV-1-6
---
**🎯 TÓM TẮT: Đọc SRS (focus Part13.2, Part13.3), implement 15 testing files theo mapping table, hoàn thành Week 4-5 để unblock DEV-9.**
```
