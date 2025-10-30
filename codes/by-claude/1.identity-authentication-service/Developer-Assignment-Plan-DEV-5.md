# PROMPT_DEV_5.md
```markdown
# 🤖 PROMPT CHO DEV-5: PERSISTENCE & REPOS SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-5 - Persistence & Repos Specialist
**Timeline**: Phase 3 (Week 3) - Infrastructure Layer
**Critical**: Bạn là blocking dependency cho DEV-6, DEV-8, DEV-9
```
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-5:
- Part07.1 Data Model Overview (models, relations)
- Part07.2 Identity Database Design
- Part14.1 Container Orchestration (DB in Docker)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-5 – Persistence & Repos (18 files)"
Files assigned: 18 files (5 repos + 5 models + migrations + seed)
Ưu tiên implement:
1. UserRepository.ts (Week 3 - Critical)
2. RoleRepository.ts, PermissionRepository.ts (Week 3)
3. SessionRepository.ts, OTPRepository.ts (Week 3)
4. Prisma models & migrations (Week 3)
5. Seed data & script (Week 3)
```
### **DEV-5** – Persistence & Repos (18 files)

| File | Mô tả |
|------|------|
| `src/infrastructure/persistence/repositories/UserRepository.ts` | Prisma impl |
| `src/infrastructure/persistence/repositories/RoleRepository.ts` | |
| `src/infrastructure/persistence/repositories/PermissionRepository.ts` | |
| `src/infrastructure/persistence/repositories/SessionRepository.ts` | |
| `src/infrastructure/persistence/repositories/OTPRepository.ts` | |
| `src/infrastructure/persistence/models/UserModel.prisma` | |
| `src/infrastructure/persistence/models/RoleModel.prisma` | |
| `src/infrastructure/persistence/models/PermissionModel.prisma` | |
| `src/infrastructure/persistence/models/SessionModel.prisma` | |
| `src/infrastructure/persistence/models/OTPModel.prisma` | |
| `prisma/migrations/0002_add_relations/` | |
| `prisma/migrations/0003_add_indexes/` | |
| `prisma/seed-data/users.json` | |
| `prisma/seed-data/roles.json` | |
| `prisma/seed-data/permissions.json` | |
| `prisma/seed.ts` | |
| `prisma/dev.db` | Local |
| `prisma/.env` | Local DB URL |

---
### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/src/infrastructure/persistence/repositories/UserRepository.ts
SRS Reference: Part06.2.1 Layered Architecture
Business Purpose: User data access contract
→ Đọc SRS-Grok-V2.md > Part07.1 → Implement UserRepository
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - INFRASTRUCTURE LAYER**
### **Repository Pattern**
```typescript
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}
 
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
 
  async create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user.toPrismaData() });
  }
}
```
### **Prisma Model Pattern**
```prisma
// backend/src/infrastructure/persistence/models/UserModel.prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  // Fields từ SRS Part07.1
}
```
---
## 🔄 **WORKFLOW CHO DEV-5**
### **Week 3: Persistence Full**
```bash
Day 1-2:
- Đọc SRS Part07.1 hoàn toàn
- Implement UserRepository.ts
- Implement Prisma models
Day 3-4:
- Implement RoleRepository.ts, PermissionRepository.ts
- Add migrations
Day 5-7:
- Implement SessionRepository.ts, OTPRepository.ts
- Implement seed.ts & data
- Test integration
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
## ✅ **DELIVERABLES CHO DEV-5**
### **End of Week 3**:
- [ ] All 5 repositories implemented
- [ ] Prisma models & migrations
- [ ] Seed script & data
- [ ] Integration tests pass
---
## 💬 **COORDINATION CHO DEV-5**
### **Bạn Block (Critical Dependencies)**:
- **DEV-6**: Cần repositories để implement external
- **DEV-8**: Cần repositories để test integration
- **DEV-9**: Cần repositories để E2E
### **Communication**:
- Repo changes → Notify ALL immediately
- Model schemas → Coordinate với DEV-0
---
**🎯 TÓM TẮT: Đọc SRS (focus Part07.1, Part07.2), implement 18 persistence files theo mapping table, hoàn thành Week 3 để unblock other developers.**
```
