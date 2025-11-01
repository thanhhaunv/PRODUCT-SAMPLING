# DEV-0 CANONICAL SPECIFICATION
**Version**: 1.0  
**Source**: Developer-Assignment-Plan-DEV-0.md + SubProject1.md + SRS References  
**Purpose**: Single source of truth cho DEV-0 implementation - NEVER DEVIATE

---

## ⚠️ **CRITICAL IMPLEMENTATION RULES**

1. **EXACT ROLE**: Project Setup & Foundation Specialist - BLOCKING DEPENDENCY
2. **EXACT TIMELINE**: Phase 0 (Week 0-1) - Must complete before all other developers
3. **EXACT FILES**: 25 files mandatory - NO exceptions
4. **EXACT WORKFLOW**: Day 1-7 schedule - NO reordering
5. **EXACT DEPENDENCIES**: Requires DEV-INIT packages first
6. **EXACT NOTIFICATION**: "DEV-0 DONE – ALL DEVS CAN START"

---

## 🎯 **ASSIGNMENT OVERVIEW**

### **Role Definition**
```bash
Role: DEV-0 - Project Setup & Foundation Specialist
Critical: Blocking dependency cho tất cả 9 developers còn lại (DEV-1 → DEV-10)
Timeline: Phase 0 (Week 0-1) - MUST COMPLETE BEFORE ALL OTHER DEVELOPERS
Goal: Setup complete foundation infrastructure để enable tất cả developers
```

### **Prerequisites (MANDATORY)**
```bash
✅ DEV-INIT COMPLETED: 3 shared packages published
   - @psp/shared-core@1.2.0
   - @psp/shared-events@1.1.0  
   - @psp/shared-database@1.0.5
✅ Access to SRS documents
✅ Development environment ready
```

---

## 📚 **MANDATORY READING SEQUENCE**

### **1. SRS-Grok-V2.md (CRITICAL SECTIONS)**
```bash
Part02.8 Technical Requirements → shared packages, tech stack
Part06.2.1 Layered Architecture → clean architecture structure  
Part07.1 Data Model Overview → database schema design
Part14.1 Container Orchestration → Docker/K8s setup
Part15.2 CI/CD Pipelines → GitHub workflows
EMSA-v1.0 Architecture Standards → config standards, testing requirements
```

### **2. 1.prod-structure-other-structure.md**
```bash
Section: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
Purpose: File-to-SRS mapping for implementation guidance
Usage Pattern:
  1. Find file in mapping table
  2. Read corresponding SRS Reference  
  3. Implement according to specification
  4. Test: npm run lint/test
  5. Move to next file
```

---

## 📋 **EXACT FILE LIST (25 FILES MANDATORY)**

### **Category 1: Core Configuration (7 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `package.json` | Add 3 shared packages + NestJS, Prisma, Jest | Part02.8 Technical Requirements | 1 |
| `tsconfig.json` | Strict mode TypeScript config | EMSA-v1.0 Standards | 1 |
| `jest.config.js` | Coverage 80% testing setup | EMSA-v1.0 Testing | 1 |
| `eslint.config.js` | EMSA linting rules | EMSA-v1.0 Code Quality | 1 |
| `.prettierrc` | Code formatting standards | EMSA-v1.0 Standards | 1 |
| `.gitignore` | VCS ignore patterns | EMSA-v1.0 Standards | 1 |
| `.dockerignore` | Docker ignore patterns | Part14.1 Containers | 1 |

### **Category 2: Environment & Documentation (2 files)**  
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `.env.example` | `DATABASE_URL`, `JWT_SECRET`, `TWILIO_SID` | Part07.1 Data Model | 1 |
| `README.md` | Full setup guide for developers | EMSA-v1.0 Documentation | 1 |

### **Category 3: Database Setup (3 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `prisma/schema.prisma` | Initial models from SRS Part07.1 | Part07.1 Data Model Overview | 2 |
| `prisma/migrations/0001_init/` | Initial migration | Part07.1 Data Model | 2 |
| `docker-compose.yml` | PostgreSQL + Redis containers | Part07.1 + Part14.1 | 3 |

### **Category 4: Containerization (2 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `Dockerfile` | Multi-stage build for production | Part14.1 Container Orchestration | 3 |
| `docker-compose.yml` | Local development environment | Part14.1 Container Orchestration | 3 |

### **Category 5: Scripts (3 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `scripts/setup-identity-service.sh` | `prisma generate` automation | Part15.2 CI/CD | 4 |
| `scripts/migrate-database.sh` | Database migration automation | Part07.1 Data Model | 4 |
| `scripts/backup-identity-data.sh` | Data backup automation | Part05.6 Compliance | 4 |

### **Category 6: Kubernetes (4 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `k8s/identity-deployment.yaml` | Service deployment manifest | Part14.1 Container Orchestration | 4 |
| `k8s/identity-service.yaml` | Service exposure manifest | Part14.1 Container Orchestration | 4 |
| `k8s/identity-configmap.yaml` | Configuration management | Part14.1 Container Orchestration | 4 |
| `k8s/identity-secrets.yaml` | Secrets management | Part14.1 Container Orchestration | 4 |

### **Category 7: CI/CD (2 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `.github/workflows/identity-ci.yml` | Test + Build pipeline | Part15.2 CI/CD Pipelines | 5 |
| `.github/workflows/identity-cd.yml` | Deployment pipeline | Part15.2 CI/CD Pipelines | 5 |

### **Category 8: Monitoring (2 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `monitoring/prometheus/identity-metrics.yaml` | Metrics collection | Part14.3 Monitoring Stack | 5 |
| `monitoring/grafana/dashboards/identity-dashboard.json` | Service visualization | Part14.3 Monitoring Stack | 5 |

### **Category 9: Testing Setup (2 files)**
| File | Purpose | SRS Reference | Day |
|------|---------|---------------|-----|
| `tests/setup.ts` | Jest test environment setup | EMSA-v1.0 Testing Strategy | 6 |
| `tests/teardown.ts` | Jest test cleanup | EMSA-v1.0 Testing Strategy | 6 |

---

## 🏗️ **EXACT CODE PATTERNS (MUST FOLLOW)**

### **package.json Pattern**
```json
{
  "name": "identity-auth-service",
  "version": "1.0.0",
  "description": "Identity and Authentication microservice for PSP platform",
  "main": "dist/main.js",
  "scripts": {
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:deploy": "prisma migrate deploy",
    "prisma:studio": "prisma studio"
  },
  "dependencies": {
    "@psp/shared-core": "^1.2.0",
    "@psp/shared-events": "^1.1.0", 
    "@psp/shared-database": "^1.0.5",
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/jwt": "^10.1.0",
    "@nestjs/passport": "^10.0.0",
    "@prisma/client": "^5.0.0",
    "bcryptjs": "^2.4.3",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.1",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.1",
    "passport-local": "^1.0.0",
    "redis": "^4.6.0"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/node": "^20.3.1",
    "@types/supertest": "^2.0.12",
    "@types/bcryptjs": "^2.4.2",
    "@types/passport-jwt": "^3.0.8",
    "@types/passport-local": "^1.0.35",
    "@typescript-eslint/eslint-plugin": "^5.59.11",
    "@typescript-eslint/parser": "^5.59.11",
    "eslint": "^8.42.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "jest": "^29.5.0",
    "prettier": "^2.8.8",
    "prisma": "^5.0.0",
    "source-map-support": "^0.5.21",
    "supertest": "^6.3.3",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.2.1",
    "typescript": "^5.1.3"
  }
}
```

### **prisma/schema.prisma Pattern**
```prisma
// References: SRS Part07.1 Data Model Overview
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  phone     String?  @unique
  password  String
  firstName String?
  lastName  String?
  status    UserStatus @default(ACTIVE)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  sessions  Session[]
  otpCodes  OTPCode[]
  roles     UserRole[]
  
  @@map("users")
}

model Role {
  id          String   @id @default(uuid())
  name        String   @unique
  description String?
  permissions String[] // JSON array of permission codes
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  users UserRole[]
  
  @@map("roles")
}

model UserRole {
  id     String @id @default(uuid())
  userId String
  roleId String
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  role Role @relation(fields: [roleId], references: [id], onDelete: Cascade)
  
  @@unique([userId, roleId])
  @@map("user_roles")
}

model Session {
  id        String   @id @default(uuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  ipAddress String?
  userAgent String?
  createdAt DateTime @default(now())
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("sessions")
}

model OTPCode {
  id        String   @id @default(uuid())
  userId    String
  code      String
  purpose   OTPPurpose
  expiresAt DateTime
  attempts  Int      @default(0)
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("otp_codes")
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  PENDING_VERIFICATION
}

enum OTPPurpose {
  LOGIN
  REGISTRATION  
  PASSWORD_RESET
  EMAIL_VERIFICATION
  PHONE_VERIFICATION
}
```

### **docker-compose.yml Pattern**
```yaml
# References: SRS Part14.1 Container Orchestration + Part07.1 Data Model
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: identity_postgres
    environment:
      POSTGRES_DB: identity_db
      POSTGRES_USER: psp_user
      POSTGRES_PASSWORD: secure_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./scripts/init-db.sql:/docker-entrypoint-initdb.d/init-db.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U psp_user -d identity_db"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    container_name: identity_redis
    command: redis-server --requirepass redis_password
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

  identity-service:
    build:
      context: .
      dockerfile: Dockerfile
      target: development
    container_name: identity_service
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://psp_user:secure_password@postgres:5432/identity_db?schema=public
      REDIS_URL: redis://:redis_password@redis:6379
      JWT_SECRET: your-super-secret-jwt-key
      JWT_EXPIRATION: 24h
      TWILIO_SID: your-twilio-sid
      TWILIO_AUTH_TOKEN: your-twilio-auth-token
    ports:
      - "3000:3000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run start:dev

volumes:
  postgres_data:
  redis_data:
```

---

## 🔄 **EXACT WORKFLOW SCHEDULE**

### **Day 1 (CRITICAL): Core Configuration**
```bash
✅ MORNING (4 hours):
- Create package.json with exact dependencies above
- npm install (verify shared packages install correctly)  
- Setup tsconfig.json (strict mode)
- Setup jest.config.js (80% coverage requirement)

✅ AFTERNOON (4 hours):
- Setup eslint.config.js (EMSA rules)
- Setup .prettierrc (code formatting)
- Create .gitignore & .dockerignore
- Create .env.example with all required vars
- Create basic README.md
```

### **Day 2: Database Foundation**
```bash
✅ MORNING (4 hours):
- Create prisma/schema.prisma (exact schema above)
- Configure DATABASE_URL in .env
- Run: npx prisma generate
- Run: npx prisma migrate dev --name init

✅ AFTERNOON (4 hours):
- Verify database connection
- Test prisma queries
- Document database setup in README
```

### **Day 3: Containerization**
```bash
✅ MORNING (4 hours):
- Create Dockerfile (multi-stage build)
- Create docker-compose.yml (exact config above)
- Test: docker-compose up -d
- Verify all services running

✅ AFTERNOON (4 hours):
- Test database connectivity in containers
- Verify Redis connection
- Document Docker setup
```

### **Day 4: Scripts & Kubernetes**
```bash
✅ MORNING (4 hours):
- Create scripts/setup-identity-service.sh
- Create scripts/migrate-database.sh  
- Create scripts/backup-identity-data.sh
- Test all scripts

✅ AFTERNOON (4 hours):
- Create k8s/identity-deployment.yaml
- Create k8s/identity-service.yaml
- Create k8s/identity-configmap.yaml
- Create k8s/identity-secrets.yaml
```

### **Day 5: CI/CD & Monitoring**
```bash
✅ MORNING (4 hours):
- Create .github/workflows/identity-ci.yml
- Create .github/workflows/identity-cd.yml
- Test CI pipeline triggers

✅ AFTERNOON (4 hours):
- Create monitoring/prometheus/identity-metrics.yaml
- Create monitoring/grafana/dashboards/identity-dashboard.json
- Document monitoring setup
```

### **Day 6-7: Testing & Finalization**
```bash
✅ Day 6 MORNING (4 hours):
- Create tests/setup.ts (Jest environment)
- Create tests/teardown.ts (cleanup)
- Test complete test environment

✅ Day 6 AFTERNOON (4 hours):
- Create src/shared/ folders (DEV-7 dependency)
- Create 7 empty files in shared structure
- Verify complete folder structure

✅ Day 7: Final Verification (8 hours):
- Run complete test suite
- Verify all 25 files created
- Test docker-compose up
- Test CI pipeline
- Document final setup
- Send completion notification
```

---

## ✅ **EXACT DELIVERABLES CHECKLIST**

### **Critical Success Criteria (MANDATORY)**
- [ ] **npm install success** - All shared packages install without error
- [ ] **docker-compose up runs DB** - PostgreSQL + Redis containers healthy
- [ ] **prisma migrate dev creates tables** - Database schema deployed
- [ ] **CI pipeline passes** - GitHub Actions workflows execute successfully
- [ ] **All 25 files created** - Complete file checklist verified
- [ ] **src/shared/ folders created** - Foundation for DEV-7
- [ ] **tests/setup.ts works** - Test environment functional

### **Final Deliverables**
```bash
✅ package.json với shared packages (@psp/shared-core@1.2.0, etc.)
✅ Prisma schema & migrations (identity_db with all tables)
✅ Docker & compose running (PostgreSQL + Redis containers)
✅ K8s manifests (deployment, service, configmap, secrets)
✅ CI/CD workflows (identity-ci.yml, identity-cd.yml)
✅ Monitoring setup (Prometheus + Grafana configs)
✅ src/shared/ structure + 7 empty files (constants, exceptions, types, utils)
✅ Unit tests setup (Jest configuration + setup/teardown)
```

---

## 🚫 **IMPLEMENTATION ANTI-PATTERNS**

### **❌ NEVER DO:**
1. **Skip any of the 25 files** - All are mandatory
2. **Change workflow order** - Day 1-7 sequence is critical
3. **Modify shared package versions** - Must use exact versions from DEV-INIT
4. **Skip database setup** - PostgreSQL + Prisma is foundational
5. **Ignore SRS references** - Each file must follow SRS specification
6. **Start without DEV-INIT** - Shared packages must be available first

### **✅ ALWAYS DO:**
1. **Follow exact timeline** - Day 1-7 schedule strictly
2. **Reference SRS sections** - Add comments like `// Refs: Part07.1 Data Model`
3. **Test after each day** - Verify functionality before proceeding
4. **Document thoroughly** - Update README.md continuously  
5. **Use exact patterns** - Follow code templates exactly
6. **Notify completion** - Send exact message when done

---

## 💬 **COORDINATION REQUIREMENTS**

### **Dependencies (Who DEV-0 Blocks)**
```bash
🚫 DEV-1: Needs package.json + src/ structure to implement domain entities
🚫 DEV-2: Needs setup to implement domain services  
🚫 DEV-3: Needs foundation to implement use cases
🚫 DEV-4: Needs foundation to implement use cases
🚫 DEV-5: Needs Prisma setup to implement repositories
🚫 DEV-6: Needs complete foundation for controllers
🚫 DEV-7: Needs src/shared/ folders to implement shared utilities
🚫 DEV-8: Needs tests/setup.ts to implement unit tests
🚫 DEV-9: Needs complete foundation for E2E tests
🚫 DEV-10: Needs everything for documentation
```

### **Communication Requirements**
```bash
📅 Daily Updates:
- Day 1: "package.json + config files done"
- Day 2: "Database schema + migrations done"  
- Day 3: "Docker containerization done"
- Day 4: "Scripts + K8s manifests done"
- Day 5: "CI/CD + monitoring done"
- Day 6: "Testing setup done"
- Day 7: "Complete foundation ready"

🎯 Final Notification (EXACT MESSAGE):
"DEV-0 DONE – ALL DEVS CAN START"
```

---

## 🔗 **INTEGRATION POINTS**

### **With DEV-INIT (Prerequisites)**
```bash
✅ Requires: @psp/shared-core@1.2.0 published
✅ Requires: @psp/shared-events@1.1.0 published  
✅ Requires: @psp/shared-database@1.0.5 published
📋 Verify: npm install works for all shared packages
```

### **With Subsequent Developers**
```bash
➡️ DEV-1: Provides src/ structure + Entity base classes
➡️ DEV-2: Provides domain interfaces + ValueObject base classes
➡️ DEV-5: Provides Prisma client + database connection
➡️ DEV-7: Provides src/shared/ folder structure
➡️ DEV-8: Provides tests/setup.ts + Jest configuration
```

---

**🎯 SUMMARY: DEV-0 creates complete foundation infrastructure in 7 days, enabling all subsequent developers to begin their specialized implementations. NO DEVIATIONS FROM THIS SPECIFICATION ALLOWED.**
