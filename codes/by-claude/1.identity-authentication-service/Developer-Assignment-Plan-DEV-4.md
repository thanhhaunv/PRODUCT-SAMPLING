
# PROMPT_DEV_4.md
```markdown
# 🤖 PROMPT CHO DEV-4: APP USE CASES (USER MGMT) SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-4 - App Use Cases (User Mgmt) Specialist
**Timeline**: Phase 2 (Week 2-3) - Application Layer
**Critical**: Bạn là blocking dependency cho DEV-6
```

---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-4:
- Part04.1.4 User Management (FR-004)
- Part05.3 Security Requirements (RBAC)
- Access_Control_Tree_Grok.md (Role system)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-4 – App Use Cases (User Mgmt) (16 files)"
Files assigned: 16 files (6 use cases + 10 DTOs)
Ưu tiên implement:
1. CreateUserUseCase.ts, UpdateUserUseCase.ts (Week 2 - Critical)
2. DeleteUserUseCase.ts, GetUserUseCase.ts (Week 2)
3. ListUsersUseCase.ts, AssignRoleUseCase.ts (Week 3)
4. All DTOs (Week 3)

```

### **DEV-4** – App Use Cases (User Mgmt) (16 files)

| File | Mô tả |
|------|------|
| `src/application/use-cases/user-management/CreateUserUseCase.ts` | |
| `src/application/use-cases/user-management/UpdateUserUseCase.ts` | |
| `src/application/use-cases/user-management/DeleteUserUseCase.ts` | |
| `src/application/use-cases/user-management/GetUserUseCase.ts` | |
| `src/application/use-cases/user-management/ListUsersUseCase.ts` | |
| `src/application/use-cases/user-management/AssignRoleUseCase.ts` | |
| `src/application/dto/CreateUserDto.ts` | |
| `src/application/dto/UpdateUserDto.ts` | |
| `src/application/dto/DeleteUserDto.ts` | |
| `src/application/dto/GetUserDto.ts` | |
| `src/application/dto/ListUsersQueryDto.ts` | |
| `src/application/dto/AssignRoleDto.ts` | |
| `src/application/dto/UserResponseDto.ts` | |
| `src/application/dto/UserListResponseDto.ts` | |
| `src/application/dto/UserErrorDto.ts` | |
| `src/application/dto/UserSuccessDto.ts` | |

---
### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/application/use-cases/user-management/CreateUserUseCase.ts
SRS Reference: Part04.1.4 User Management (FR-004)
Business Purpose: Portal user management
→ Đọc SRS-Grok-V2.md > Part04.1.4 → Implement CreateUserUseCase
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - APPLICATION LAYER**
### **Use Case Pattern**
```typescript
export class CreateUserUseCase {
  constructor(private userService: UserDomainService) {}
 
  execute(dto: CreateUserDto): Result<UserResponse> {
    // 1. Validate DTO
    // 2. Call domain service
    // 3. Handle result
    return this.userService.create(dto);
  }
}
```
### **DTO Pattern**
```typescript
export class CreateUserDto {
  @IsEmail() email: string;
  @IsString() password: string;
}
```
---
## 🔄 **WORKFLOW CHO DEV-4**
### **Week 2-3: User Flows**
```bash
Day 1-2:
- Đọc SRS Part04.1.4 hoàn toàn
- Implement CreateUserUseCase.ts
- Implement UpdateUserUseCase.ts
Day 3-4:
- Implement DeleteUserUseCase.ts
- Implement GetUserUseCase.ts
Day 5-7:
- Implement ListUsersUseCase.ts, AssignRoleUseCase.ts
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
## ✅ **DELIVERABLES CHO DEV-4**
### **End of Week 2**:
- [ ] CreateUserUseCase.ts, UpdateUserUseCase.ts
- [ ] DeleteUserUseCase.ts, GetUserUseCase.ts
- [ ] Unit tests 95%+ coverage
### **End of Week 3**:
- [ ] All 16 files implemented
- [ ] DTOs validated
---
## 💬 **COORDINATION CHO DEV-4**
### **Bạn Block (Critical Dependencies)**:
- **DEV-6**: Cần use cases để implement controllers
### **Communication**:
- Use case changes → Notify ALL immediately
- DTO schemas → Coordinate với DEV-6
---
**🎯 TÓM TẮT: Đọc SRS (focus Part04.1.4, Part05.3), implement 16 user mgmt files theo mapping table, hoàn thành Week 2-3 để unblock DEV-6.**
```
