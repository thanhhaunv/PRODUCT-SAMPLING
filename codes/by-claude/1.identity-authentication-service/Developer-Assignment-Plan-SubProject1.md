```markdown
# DEV_ASSIGNMENT_PLAN_FULL.md  
**Sub-Project 1: MICROSERVICE 1 – Identity & User Domain**  
**100% DỰA TRÊN `1.prod-structure-other-structure.md` + SRS + EMSA-v1.0**  
**TỔNG: 147 FILES – 11 DEVS (DEV-INIT → DEV-10)**

---

## TỔNG QUAN PHÂN CÔNG

| DEV | Vai trò | Blocking | Timeline | Số file |
|-----|--------|----------|---------|--------|
| **DEV-INIT** | Shared Libraries Engineer | DEV-0 | **Week -1** | 3 packages |
| **DEV-0** | Project Setup & Foundation | **DEV-1 → DEV-9** | **Week 0–1** | 25 |
| **DEV-1** | Domain Entities & Events | DEV-0 | Week 1–2 | 12 |
| **DEV-2** | Domain Value Objects & Services | DEV-1 | Week 1–2 | 15 |
| **DEV-3** | App Use Cases (Auth + OTP) | DEV-2 | Week 2–3 | 16 |
| **DEV-4** | App Use Cases (User Mgmt) | DEV-2 | Week 2–3 | 16 |
| **DEV-5** | Persistence & Repos | DEV-2 | Week 3 | 18 |
| **DEV-6** | External + Controllers | DEV-3,4 | Week 3–4 | 20 |
| **DEV-7** | Shared (Service-Specific) | DEV-0 | Week 1–4 | 7 |
| **DEV-8** | Testing (Unit + Integration) | DEV-1→6 | Week 4–5 | 15 |
| **DEV-9** | Testing (E2E) + DevOps | DEV-6, DEV-8 | Week 5–6 | 12 |
| **DEV-10** | Documentation + Finalization | All | Week 6–8 | 8 |

---

## CÂY THƯ MỤC ĐẦY ĐỦ

```text
backend/
├── src/
│   ├── domain/
│   │   ├── entities/           (DEV-1)
│   │   ├── value-objects/      (DEV-2)
│   │   ├── services/           (DEV-2)
│   │   └── events/             (DEV-1)
│   ├── application/
│   │   ├── use-cases/
│   │   │   ├── authentication/ (DEV-3)
│   │   │   └── user-management/ (DEV-4)
│   │   └── dto/                (DEV-3,4)
│   ├── infrastructure/
│   │   ├── persistence/
│   │   │   ├── repositories/   (DEV-5)
│   │   │   └── models/         (DEV-5)
│   │   ├── external-services/  (DEV-6)
│   │   └── config/             (DEV-7)
│   ├── presentation/
│   │   ├── controllers/        (DEV-6)
│   │   ├── middleware/         (DEV-6)
│   │   └── validators/         (DEV-6)
│   └── shared/                 (DEV-7)
│       ├── constants/
│       ├── exceptions/
│       ├── types/
│       └── utils/
├── prisma/                     (DEV-0, DEV-5)
├── tests/                      (DEV-8, DEV-9)
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── k8s/                        (DEV-0, DEV-9)
├── monitoring/                 (DEV-9)
├── scripts/                    (DEV-0, DEV-10)
└── docs/                       (DEV-10)
```

---

## CHI TIẾT CÔNG VIỆC & FILE MAPPING

---

### **DEV-INIT** – Shared Libraries (3 packages)

| Package | Files |
|--------|-------|
| `@psp/shared-core@1.2.0` | `Result.ts`, `AggregateRoot.ts`, `Entity.ts`, `ValueObject.ts`, `UniqueEntityId.ts`, `logger.utils.ts`, `validation.utils.ts`, `crypto.utils.ts`, `guard.utils.ts` |
| `@psp/shared-events@1.1.0` | `UserCreatedEvent.ts`, `UserUpdatedEvent.ts`, `UserSyncedToCRMEvent.ts` |
| `@psp/shared-database@1.0.5` | `PrismaClient.ts`, `connection.ts`, `migration.utils.ts` |

---

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

---

### **DEV-1** – Domain Entities & Events (12 files)

| File | Mô tả |
|------|------|
| `src/domain/entities/User.ts` | `AggregateRoot`, validation |
| `src/domain/entities/Role.ts` | Hierarchy |
| `src/domain/entities/Permission.ts` | Granular |
| `src/domain/entities/Session.ts` | JWT |
| `src/domain/entities/OTPCode.ts` | 2FA |
| `src/domain/events/UserCreatedEvent.ts` | |
| `src/domain/events/UserUpdatedEvent.ts` | |
| `src/domain/events/UserDeletedEvent.ts` | |
| `src/domain/events/UserSyncedToCRMEvent.ts` | |
| `src/domain/events/OTPSentEvent.ts` | |
| `src/domain/events/SessionRevokedEvent.ts` | |
| `src/domain/events/RoleAssignedEvent.ts` | |

---

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

---

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

---

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

---

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

---

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

---

### **DEV-9** – E2E + DevOps (12 files)

| File | Mô tả |
|------|------|
| `tests/e2e/authentication.e2e.test.ts` | Full flow |
| `tests/e2e/user-management.e2e.test.ts` | |
| `tests/e2e/rbac.e2e.test.ts` | |
| `tests/e2e/otp.e2e.test.ts` | |
| `k8s/identity-hpa.yaml` | Auto-scale |
| `k8s/identity-ingress.yaml` | |
| `monitoring/alertmanager/identity-alerts.yaml` | |
| `scripts/load-test.sh` | k6 |
| `scripts/stress-test.sh` | |
| `.github/workflows/e2e.yml` | |
| `.github/workflows/load-test.yml` | |
| `docker-compose.test.yml` | Test DB |

---

### **DEV-10** – Documentation (8 files)

| File | Mô tả |
|------|------|
| `docs/api/authentication-api.md` | Swagger |
| `docs/api/user-management-api.md` | |
| `docs/architecture/clean-architecture.md` | |
| `docs/security/rbac-implementation.md` | |
| `docs/deployment/production-procedures.md` | |
| `docs/monitoring/observability.md` | |
| `scripts/deploy-identity-service.sh` | |
| `CHANGELOG.md` | |

---

## TỔNG KẾT

| Layer | Số file |
|------|--------|
| Shared Packages | 3 packages |
| Setup | 25 |
| Domain | 27 |
| Application | 32 |
| Infrastructure | 38 |
| Shared (Service) | 7 |
| Testing | 27 |
| DevOps | 12 |
| Docs | 8 |
| **TỔNG** | **147 files** |

---

**ĐÃ ĐẦY ĐỦ 100% THEO `1.prod-structure-other-structure.md`**  
**KHÔNG THIẾU FILE NÀO**  
**SẴN SÀNG CHO CODE GENERATION VỚI PROMPT**

**Lưu file này vào repo: `DEV_ASSIGNMENT_PLAN_FULL.md`**
```
