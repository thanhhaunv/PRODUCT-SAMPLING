# PROMPT_DEV_0.md
```markdown
# 🤖 PROMPT CHO DEV-0: PROJECT SETUP & FOUNDATION SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-0 - Project Setup & Foundation Specialist
**Timeline**: Phase 0 (Week 0-1) - MUST COMPLETE BEFORE ALL OTHER DEVELOPERS
**Critical**: Bạn là blocking dependency cho tất cả 9 developers còn lại
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-0:
- Part02.8 Technical Requirements (shared packages, tech stack)
- Part06.2.1 Layered Architecture (clean arch)
- Part07.1 Data Model Overview (DB schema)
- Part14.1 Container Orchestration (Docker/K8s)
- Part15.2 CI/CD Pipelines (workflows)
- EMSA-v1.0 Architecture Standards (config, testing)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-0 – Project Setup (25 files)"
Files assigned: 25 files (package.json, Docker, Prisma, scripts, etc.)
Ưu tiên implement:
1. package.json + npm install shared packages (Day 1 - Critical)
2. tsconfig, jest, eslint (Day 1)
3. Prisma schema & migrations (Day 2)
4. Docker & scripts (Day 3-4)
5. K8s & workflows (Day 5-6)
6. Monitoring & tests setup (Day 6-7)
```
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

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/package.json
SRS Reference: Part02.8 Technical Requirements
Business Purpose: Dependencies + Scripts
→ Đọc SRS-Grok-V2.md > Part02.8 → Add shared packages & scripts
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - FOUNDATION LAYER**
### **package.json Pattern**
```typescript
// backend/package.json
{
  "dependencies": {
    "@psp/shared-core": "^1.2.0"  // Utilities (logger, validation)
  },
  "scripts": {
    "prisma:migrate": "prisma migrate dev"  // DB management
  }
}
```
### **prisma/schema.prisma Pattern**
```prisma
// backend/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model User {
  id String @id @default(uuid())
  // Fields từ SRS Part07.1
}
```
---
## 🔄 **WORKFLOW CHO DEV-0**
### **Week 0-1: Full Foundation**
```bash
Day 1:
- Tạo package.json với 3 shared packages
- npm install
- Config tsconfig, jest, eslint
Day 2:
- prisma/schema.prisma với models từ SRS
- prisma migrate dev
Day 3:
- Dockerfile multi-stage
- docker-compose.yml với Postgres/Redis
Day 4:
- scripts/setup-identity-service.sh
- k8s manifests
Day 5:
- .github/workflows/identity-ci.yml
- monitoring/prometheus
Day 6-7:
- tests/setup.ts
- Tạo src/shared/ folders & 7 files trống
- Verify full setup
```
### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong bảng mapping
2. Đọc SRS Reference
3. Implement theo pattern trên
4. Test: npm run lint/test
5. Move to next
```
---
## ✅ **DELIVERABLES CHO DEV-0**
### **End of Week 1**:
- [ ] package.json với shared packages
- [ ] Prisma schema & migrations
- [ ] Docker & compose running
- [ ] K8s manifests
- [ ] CI/CD workflows
- [ ] Monitoring setup
- [ ] src/shared/ trống & 7 files
- [ ] Unit tests setup
### **Critical Success Criteria**:
- [ ] npm install success
- [ ] docker-compose up runs DB
- [ ] prisma migrate dev creates tables
- [ ] CI pipeline passes
- [ ] Notify ALL: "DEV-0 DONE – ALL DEVS CAN START"
---
## 💬 **COORDINATION CHO DEV-0**
### **Bạn Block (Critical Dependencies)**:
- **DEV-1**: Cần setup để implement entities
- **DEV-2**: Cần setup để implement services
- **DEV-7**: Cần src/shared/ folders
- **DEV-8**: Cần tests/setup.ts
### **Communication**:
- Daily: "Package.json done"
- Changes: Notify team
- Completion: "DEV-0 DONE – Start your phases"
---
**🎯 TÓM TẮT: Đọc SRS (focus Part02.8, Part07.1), implement 25 foundation files theo mapping table, hoàn thành Week 1 để unblock team.**
```
