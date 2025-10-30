# PROMPT_DEV_7.md

# 🤖 PROMPT CHO DEV-7: SHARED (SERVICE-SPECIFIC) SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-7 - Shared (Service-Specific) Specialist
**Timeline**: Phase 1-4 (Week 1-4) - Shared Layer
**Critical**: Bạn là blocking dependency cho DEV-3, DEV-4, DEV-6 (DTOs & Services use shared types/utils)
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-7:
- Part07.2.5 Session Management (constants for JWT/session)
- Part05.8 Error Handling (custom exceptions)
- Part07.1 Data Model Overview (types for User/Auth)
- Part02.8 Technical Requirements (utils like password hashing)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-7 – Shared (Service-Specific) (7 files)"
Files assigned: 7 files (constants, exceptions, types, utils)
Ưu tiên implement:
1. constants/auth.constants.ts, constants/rbac.constants.ts (Week 1 - Critical)
2. types/auth.types.ts, types/user.types.ts (Week 2)
3. exceptions/AuthenticationException.ts, exceptions/AuthorizationException.ts (Week 3)
4. utils/password.utils.ts (Week 4)
```

### **DEV-7** – Shared (Service-Specific) (7 files)

| File | Mô tả |
|------|------|
| `src/shared/constants/auth.constants.ts` | JWT expiry |
| `src/shared/constants/rbac.constants.ts` | Role names |
| `src/shared/exceptions/AuthenticationException.ts` | |
| `src/shared/exceptions/AuthorizationException.ts` | |
| `src/shared/types/auth.types.ts` | `JWTPayload` |
| `src/shared/types/user.types.ts` | `CreateUserInput` |
| `src/shared/utils/password.utils.ts` | `hashPassword()` |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/shared/constants/auth.constants.ts
SRS Reference: Part07.2.5 Session Management
Business Purpose: JWT/session constants
→ Đọc SRS-Grok-V2.md > Part07.2.5 → Implement auth constants
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - SHARED LAYER**
### **Constants Pattern**
```typescript
// backend/src/shared/constants/auth.constants.ts
export const AUTH_CONSTANTS = {
  JWT_EXPIRY: '15m',  // Access token expiry từ SRS Part07.2.5
  REFRESH_EXPIRY: '7d',  // Refresh token
  OTP_LENGTH: 6  // OTP code length
} as const;
```
### **Exceptions Pattern**
```typescript
// backend/src/shared/exceptions/AuthenticationException.ts
export class AuthenticationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationException';  // Từ SRS Part05.8
  }
}
```
### **Types Pattern**
```typescript
// backend/src/shared/types/auth.types.ts
export interface JWTPayload {
  userId: string;
  roles: string[];  // Từ SRS Part05.3
  iat: number;
  exp: number;
}
```
### **Utils Pattern**
```typescript
// backend/src/shared/utils/password.utils.ts
export function hashPassword(password: string): Promise<string> {
  // Logic hashing từ SRS Part05.3.2
  return bcrypt.hash(password, 12);
}
```
---
## 🔄 **WORKFLOW CHO DEV-7**
### **Week 1-4: Shared Components**
```bash
Day 1-2:
- Đọc SRS Part07.2.5 hoàn toàn
- Implement auth.constants.ts, rbac.constants.ts
Day 3-4:
- Đọc SRS Part07.1
- Implement auth.types.ts, user.types.ts
Day 5-7:
- Đọc SRS Part05.8
- Implement AuthenticationException.ts, AuthorizationException.ts
Day 8-14:
- Đọc SRS Part02.8
- Implement password.utils.ts
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
## ✅ **DELIVERABLES CHO DEV-7**
### **End of Week 2**:
- [ ] auth.constants.ts, rbac.constants.ts, auth.types.ts, user.types.ts
- [ ] Unit tests với 95%+ coverage
### **End of Week 4**:
- [ ] All 7 files implemented
- [ ] Types & utils stable cho DTOs/services
---
## 💬 **COORDINATION CHO DEV-7**
### **Bạn Block (Critical Dependencies)**:
- **DEV-3**: Cần types/utils để auth DTOs
- **DEV-4**: Cần types/utils để user DTOs
- **DEV-6**: Cần exceptions để controllers
### **Communication**:
- Type changes → Notify ALL immediately
- Utils logic → Coordinate với DEV-2
---
**🎯 TÓM TẮT: Đọc SRS (focus Part07.2.5, Part05.8), implement 7 shared files theo mapping table, hoàn thành Week 1-4 để unblock other developers.**
```
