# 🚀 SUB-PROJECT 1: IDENTITY & AUTHENTICATION - IMPLEMENTATION ROADMAP

*Tham chiếu: 1.prod-structure.md - Complete mapping 200+ files với SRS references*

---

## 📋 **OVERVIEW - TỔNG QUAN**

**Total Files**: 200+ files được map với đầy đủ SRS references  
**Architecture**: Clean Architecture + EMSA-v1.0 compliant  
**Timeline**: 8 phases, mỗi phase 1-2 ngày implementation  
**Approach**: Config first → Core layers → Testing → Deployment  

---

## 🎯 **PHASE 1: PROJECT FOUNDATION & CONFIGURATION SETUP**
*Duration: 1-2 days | Files: 15 files*

### **1.1 Monorepo & Root Configuration**
*Tham chiếu: 1.prod-structure.md - Section 1.1 & 1.2*

```
📁 Root Level (8 files)
├── 📄 package.json                    # Root monorepo config
├── 📄 README.md                       # Project overview  
├── 📄 .gitignore                      # Git ignore rules
├── 📄 .env.example                    # Environment template
├── 📄 CHANGELOG.md                    # Version history
├── 📄 tsconfig.json                   # Root TypeScript config
├── 📄 eslint.config.js                # Code quality rules
└── 📄 docker-compose.yml              # Development stack
```

### **1.2 CI/CD & GitHub Configuration**
*Tham chiếu: 1.prod-structure.md - Section 1.2*

```
📁 .github/ (2 files)
└── 📁 workflows/
    ├── 📄 ci.yml                      # Continuous Integration
    └── 📄 cd.yml                      # Continuous Deployment
```

### **1.3 Shared Types & Constants**
*Tham chiếu: 1.prod-structure.md - Section 1.1*

```
📁 shared/ (3 files)
├── 📁 types/
│   └── 📄 api.types.ts                # Shared API contracts
├── 📁 constants/
│   └── 📄 roles.constants.ts          # RBAC role definitions
└── 📁 utils/
    └── 📄 validation.utils.ts         # Shared validation utilities
```

### **1.4 Database Schema Setup**
*Tham chiếu: 1.prod-structure.md - Section 1.3*

```
📁 backend/ (2 files)
├── 📄 prisma/schema.prisma            # Database schema
└── 📁 src/infrastructure/config/
    └── 📄 database.config.ts          # Database connection
```

**📝 Implementation Priority:**
1. Root package.json với workspace setup
2. Docker compose với PostgreSQL + Redis
3. Prisma schema với User/Role/Permission tables
4. Basic CI/CD workflows
5. Shared types cho API contracts

---

## 🎯 **PHASE 2: BACKEND DOMAIN LAYER IMPLEMENTATION**
*Duration: 1-2 days | Files: 20 files*

### **2.1 Core Business Entities**
*Tham chiếu: 1.prod-structure.md - Section 2.1*

```
📁 backend/src/domain/entities/ (5 files)
├── 📄 User.ts                         # Core User entity với business rules
├── 📄 Role.ts                         # Role entity với hierarchy support  
├── 📄 Permission.ts                   # Permission entity với granular control
├── 📄 Session.ts                      # Session entity cho JWT management
└── 📄 OTPCode.ts                      # OTP entity cho 2FA verification
```

### **2.2 Value Objects**
*Tham chiếu: 1.prod-structure.md - Section 2.1*

```
📁 backend/src/domain/value-objects/ (3 files)
├── 📄 Email.ts                        # Email value object với validation
├── 📄 Phone.ts                        # Phone value object với formatting
└── 📄 Password.ts                     # Password value object với hashing
```

### **2.3 Repository Interfaces**
*Tham chiếu: 1.prod-structure.md - Section 2.1*

```
📁 backend/src/domain/repositories/ (4 files)
├── 📄 IUserRepository.ts              # User repository interface
├── 📄 IRoleRepository.ts              # Role repository interface  
├── 📄 ISessionRepository.ts           # Session repository interface
└── 📄 IOTPRepository.ts               # OTP repository interface
```

### **2.4 Domain Services**
*Tham chiếu: 1.prod-structure.md - Section 2.1*

```
📁 backend/src/domain/services/ (3 files)
├── 📄 AuthenticationDomainService.ts  # Authentication business logic
├── 📄 PasswordHashingService.ts       # Password hashing domain service
└── 📄 OTPGenerationService.ts         # OTP generation business logic
```

### **2.5 Shared Backend Code**
*Tham chiếu: 1.prod-structure.md - Section 2.5*

```
📁 backend/src/shared/ (5 files)
├── 📁 constants/
│   ├── 📄 roles.constants.ts          # Role definitions
│   ├── 📄 permissions.constants.ts    # Permission constants
│   └── 📄 error-codes.constants.ts    # Error code mappings
├── 📁 types/
│   ├── 📄 auth.types.ts               # Authentication types
│   └── 📄 user.types.ts               # User-related types
```

**📝 Implementation Priority:**
1. User entity với validation rules
2. Value objects (Email, Password, Phone)
3. Repository interfaces
4. Domain services cho authentication logic
5. Shared constants và types

---

## 🎯 **PHASE 3: BACKEND APPLICATION LAYER**
*Duration: 1-2 days | Files: 25 files*

### **3.1 Authentication Use Cases**
*Tham chiếu: 1.prod-structure.md - Section 2.2*

```
📁 backend/src/application/use-cases/authentication/ (4 files)
├── 📄 LoginUseCase.ts                 # Login workflow với OTP
├── 📄 LogoutUseCase.ts                # Logout và session cleanup
├── 📄 RefreshTokenUseCase.ts          # JWT token refresh logic
└── 📄 VerifyOTPUseCase.ts             # OTP verification workflow
```

### **3.2 User Management Use Cases**
*Tham chiếu: 1.prod-structure.md - Section 2.2*

```
📁 backend/src/application/use-cases/user-management/ (5 files)
├── 📄 CreateUserUseCase.ts            # User creation với validation
├── 📄 UpdateUserUseCase.ts            # User profile updates
├── 📄 DeleteUserUseCase.ts            # Soft delete implementation
├── 📄 GetUserUseCase.ts               # User retrieval logic
└── 📄 ListUsersUseCase.ts             # Paginated user listing
```

### **3.3 Role Management Use Cases**
*Tham chiếu: 1.prod-structure.md - Section 2.2*

```
📁 backend/src/application/use-cases/role-management/ (4 files)
├── 📄 AssignRoleUseCase.ts            # Role assignment logic
├── 📄 CreateRoleUseCase.ts            # Role creation workflow
├── 📄 UpdateRoleUseCase.ts            # Role modification logic
└── 📄 GetPermissionsUseCase.ts        # Permission matrix retrieval
```

### **3.4 Data Transfer Objects**
*Tham chiếu: 1.prod-structure.md - Section 2.2*

```
📁 backend/src/application/dto/ (3 files)
├── 📄 AuthenticationDTO.ts            # Authentication data transfer objects
├── 📄 UserManagementDTO.ts            # User management DTOs
└── 📄 RoleManagementDTO.ts            # Role management DTOs
```

### **3.5 External Service Ports**
*Tham chiếu: 1.prod-structure.md - Section 2.2*

```
📁 backend/src/application/ports/ (3 files)
├── 📄 IEmailService.ts                # Email service interface
├── 📄 ISMSService.ts                  # SMS service interface  
└── 📄 ITokenService.ts                # JWT service interface
```

### **3.6 Exception Handling**
*Tham chiếu: 1.prod-structure.md - Section 2.5*

```
📁 backend/src/shared/exceptions/ (3 files)
├── 📄 AuthenticationException.ts      # Auth-specific errors
├── 📄 AuthorizationException.ts       # RBAC errors
└── 📄 ValidationException.ts          # Validation errors
```

### **3.7 Utility Functions**
*Tham chiếu: 1.prod-structure.md - Section 2.5*

```
📁 backend/src/shared/utils/ (3 files)
├── 📄 logger.utils.ts                 # Structured logging
├── 📄 validation.utils.ts             # Common validation helpers
└── 📄 crypto.utils.ts                 # Encryption utilities
```

**📝 Implementation Priority:**
1. Authentication use cases (Login, Logout, OTP)
2. User management CRUD operations
3. Role assignment và permission checking
4. DTOs cho API contracts
5. Exception handling và logging

---

## 🎯 **PHASE 4: BACKEND INFRASTRUCTURE LAYER**
*Duration: 1-2 days | Files: 20 files*

### **4.1 Database Persistence**
*Tham chiếu: 1.prod-structure.md - Section 2.3*

```
📁 backend/src/infrastructure/persistence/ (12 files)
├── 📁 repositories/
│   ├── 📄 UserRepository.ts           # PostgreSQL user repository
│   ├── 📄 RoleRepository.ts           # Role data access implementation
│   ├── 📄 SessionRepository.ts        # Redis session storage
│   └── 📄 OTPRepository.ts            # OTP code storage
├── 📁 models/
│   ├── 📄 UserModel.ts                # Prisma user model
│   ├── 📄 RoleModel.ts                # Role database model
│   └── 📄 SessionModel.ts             # Session model definition
└── 📁 migrations/
    ├── 📄 001_create_users.sql        # User table creation
    ├── 📄 002_create_roles.sql        # Roles và permissions tables
    └── 📄 003_create_sessions.sql     # Session management tables
```

### **4.2 External Service Adapters**
*Tham chiếu: 1.prod-structure.md - Section 2.3*

```
📁 backend/src/infrastructure/external-services/ (3 files)
├── 📄 EmailService.ts                 # Twilio SendGrid integration
├── 📄 SMSService.ts                   # Twilio SMS service
└── 📄 TokenService.ts                 # JWT implementation
```

### **4.3 Configuration Management**
*Tham chiếu: 1.prod-structure.md - Section 2.3*

```
📁 backend/src/infrastructure/config/ (3 files)
├── 📄 database.config.ts              # Database connection config
├── 📄 redis.config.ts                 # Redis configuration
└── 📄 app.config.ts                   # General app settings
```

### **4.4 Backend Package Configuration**
*Tham chiếu: 1.prod-structure.md - Section 2.6*

```
📁 backend/ (2 files)
├── 📄 package.json                    # Backend dependencies
└── 📄 jest.config.js                  # Testing configuration
```

**📝 Implementation Priority:**
1. Database migrations và Prisma models
2. Repository implementations
3. External service adapters (Email, SMS, JWT)
4. Configuration files
5. Backend package.json với dependencies

---

## 🎯 **PHASE 5: BACKEND PRESENTATION LAYER (API)**
*Duration: 1-2 days | Files: 18 files*

### **5.1 API Controllers**
*Tham chiếu: 1.prod-structure.md - Section 2.4*

```
📁 backend/src/presentation/controllers/ (4 files)
├── 📄 AuthController.ts               # Authentication endpoints
├── 📄 UserController.ts               # User management APIs
├── 📄 RoleController.ts               # Role management APIs
└── 📄 HealthController.ts             # Health check endpoint
```

### **5.2 Security Middleware**
*Tham chiếu: 1.prod-structure.md - Section 2.4*

```
📁 backend/src/presentation/middleware/ (4 files)
├── 📄 AuthMiddleware.ts               # JWT verification
├── 📄 RBACMiddleware.ts               # Permission checking
├── 📄 ValidationMiddleware.ts         # Request validation
└── 📄 LoggingMiddleware.ts            # Request logging
```

### **5.3 API Routing**
*Tham chiếu: 1.prod-structure.md - Section 2.4*

```
📁 backend/src/presentation/routes/ (3 files)
├── 📄 auth.routes.ts                  # Authentication routes
├── 📄 users.routes.ts                 # User management routes
└── 📄 roles.routes.ts                 # Role management routes
```

### **5.4 Request Validators**
*Tham chiếu: 1.prod-structure.md - Section 2.4*

```
📁 backend/src/presentation/validators/ (3 files)
├── 📄 AuthValidators.ts               # Login/register validation
├── 📄 UserValidators.ts               # User data validation
└── 📄 RoleValidators.ts               # Role validation rules
```

### **5.5 Backend Configuration**
*Tham chiếu: 1.prod-structure.md - Section 2.6*

```
📁 backend/ (4 files)
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 eslint.config.js                # Code quality rules
├── 📄 src/main.ts                     # Application entry point
└── 📄 src/app.module.ts               # Root NestJS module
```

**📝 Implementation Priority:**
1. Health check controller và basic routing
2. Authentication controller với login/logout
3. Security middleware (Auth, RBAC)
4. User management APIs
5. Request validation và error handling

---

## 🎯 **PHASE 6: FRONTEND FOUNDATION & UI SYSTEM**
*Duration: 2 days | Files: 35 files*

### **6.1 Design System Foundation**
*Tham chiếu: 1.prod-structure.md - Section 3.1*

```
📁 frontend/src/styles/ (4 files)
├── 📄 globals.css                     # Global styles
├── 📄 variables.css                   # CSS variables và design tokens
├── 📄 components.css                  # Component-specific styles
└── 📄 themes.css                      # Theme system
```

### **6.2 Layout Components**
*Tham chiếu: 1.prod-structure.md - Section 3.2*

```
📁 frontend/src/components/layout/ (6 files)
├── 📄 MainLayout.tsx                  # Overall portal layout
├── 📄 Sidebar.tsx                     # Navigation sidebar với RBAC
├── 📄 TopBar.tsx                      # Header với user info
├── 📄 Breadcrumbs.tsx                 # Navigation breadcrumbs
├── 📄 MobileNavigation.tsx            # Mobile hamburger menu
└── 📄 Footer.tsx                      # Footer component
```

### **6.3 Base UI Components**
*Tham chiếu: 1.prod-structure.md - Section 3.3*

```
📁 frontend/src/components/ui/ (10 files)
├── 📄 Button.tsx                      # Button variants
├── 📄 Input.tsx                       # Input components
├── 📄 Card.tsx                        # Card layouts
├── 📄 Table.tsx                       # Data tables
├── 📄 Modal.tsx                       # Modal dialogs
├── 📄 Select.tsx                      # Dropdown selections
├── 📄 Badge.tsx                       # Status badges
├── 📄 Loading.tsx                     # Loading states
├── 📄 Alert.tsx                       # Alert notifications
└── 📄 Pagination.tsx                  # Pagination controls
```

### **6.4 Authentication Components**
*Tham chiếu: 1.prod-structure.md - Section 3.4*

```
📁 frontend/src/components/auth/ (3 files)
├── 📄 LoginForm.tsx                   # Login form với OTP
├── 📄 LogoutButton.tsx                # Logout functionality
└── 📄 ProtectedRoute.tsx              # Route protection
```

### **6.5 Page Components**
*Tham chiếu: 1.prod-structure.md - Section 3.5*

```
📁 frontend/src/pages/ (4 files)
├── 📄 LoginPage.tsx                   # Login page
├── 📄 DashboardPage.tsx               # Dashboard overview
├── 📄 UsersPage.tsx                   # User management page
└── 📄 RolesPage.tsx                   # Role management page
```

### **6.6 Custom Hooks**
*Tham chiếu: 1.prod-structure.md - Section 3.6*

```
📁 frontend/src/hooks/ (4 files)
├── 📄 useAuth.ts                      # Authentication state
├── 📄 useUsers.ts                     # User management hooks
├── 📄 usePermissions.ts               # Permission checking hooks
└── 📄 useApi.ts                       # API calling hooks
```

### **6.7 Frontend Configuration**
*Tham chiếu: 1.prod-structure.md - Section 3.12*

```
📁 frontend/ (4 files)
├── 📄 package.json                    # Frontend dependencies
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 vite.config.ts                  # Vite build configuration
└── 📄 tailwind.config.js              # Tailwind CSS configuration
```

**📝 Implementation Priority:**
1. Design system setup (colors, typography, spacing)
2. Base UI components (Button, Input, Card, Modal)
3. Layout system (MainLayout, Sidebar, TopBar)
4. Authentication components và pages
5. Custom hooks cho state management

---

## 🎯 **PHASE 7: TESTING IMPLEMENTATION**
*Duration: 1-2 days | Files: 25 files*

### **7.1 Backend Testing**
*Tham chiếu: 1.prod-structure.md - Section 4.1 & 4.2*

```
📁 backend/tests/ (15 files)
├── 📁 unit/
│   ├── 📄 User.entity.test.ts         # User entity tests
│   ├── 📄 AuthenticationService.test.ts # Auth service tests
│   ├── 📄 LoginUseCase.test.ts        # Login use case tests
│   ├── 📄 CreateUserUseCase.test.ts   # User creation tests
│   └── 📄 PasswordHashing.test.ts     # Password hashing tests
├── 📁 integration/
│   ├── 📄 UserRepository.test.ts      # User repository tests
│   ├── 📄 AuthController.test.ts      # Auth controller tests
│   ├── 📄 UserController.test.ts      # User controller tests
│   ├── 📄 RoleController.test.ts      # Role controller tests
│   └── 📄 database.integration.test.ts # Database integration tests
└── 📁 e2e/
    ├── 📄 auth-flow.e2e.test.ts       # Authentication flow
    ├── 📄 user-management.e2e.test.ts # User management flow
    ├── 📄 role-assignment.e2e.test.ts # Role assignment flow
    ├── 📄 permission-check.e2e.test.ts # Permission checking
    └── 📄 api-security.e2e.test.ts    # API security tests
```

### **7.2 Frontend Testing**
*Tham chiếu: 1.prod-structure.md - Section 4.2*

```
📁 frontend/tests/ (10 files)
├── 📁 components/
│   ├── 📄 LoginForm.test.tsx          # Login form tests
│   ├── 📄 UserTable.test.tsx          # User table tests
│   ├── 📄 Button.test.tsx             # Button component tests
│   └── 📄 Modal.test.tsx              # Modal component tests
├── 📁 pages/
│   ├── 📄 LoginPage.test.tsx          # Login page tests
│   ├── 📄 DashboardPage.test.tsx      # Dashboard page tests
│   └── 📄 UsersPage.test.tsx          # Users page tests
├── 📁 hooks/
│   ├── 📄 useAuth.test.ts             # Auth hook tests
│   └── 📄 useUsers.test.ts            # Users hook tests
└── 📁 e2e/
    └── 📄 user-management-flow.cy.ts  # End-to-end user flow
```

**📝 Implementation Priority:**
1. Core entity unit tests
2. Use case testing với mocking
3. Controller integration tests
4. Frontend component tests
5. End-to-end workflow tests

---

## 🎯 **PHASE 8: DEPLOYMENT & DOCUMENTATION**
*Duration: 1-2 days | Files: 25 files*

### **8.1 Docker & Kubernetes**
*Tham chiếu: 1.prod-structure.md - Section 5.1, 5.2, 5.3*

```
📁 deployment/ (15 files)
├── 📁 docker/
│   ├── 📄 Dockerfile.backend          # Backend production image
│   └── 📄 Dockerfile.frontend         # Frontend production image
├── 📁 kubernetes/
│   ├── 📁 backend/
│   │   ├── 📄 deployment.yaml         # Backend deployment
│   │   ├── 📄 service.yaml            # Backend service
│   │   └── 📄 configmap.yaml          # Backend configuration
│   ├── 📁 frontend/
│   │   ├── 📄 deployment.yaml         # Frontend deployment
│   │   ├── 📄 service.yaml            # Frontend service
│   │   └── 📄 ingress.yaml            # Ingress configuration
│   └── 📁 shared/
│       ├── 📄 namespace.yaml          # Kubernetes namespace
│       ├── 📄 secrets.yaml            # Secrets management
│       └── 📄 configmap.yaml          # Shared configuration
└── 📁 helm/
    ├── 📄 Chart.yaml                  # Helm chart definition
    ├── 📄 values.yaml                 # Default values
    └── 📁 templates/
        ├── 📄 backend-deployment.yaml # Backend template
        └── 📄 frontend-deployment.yaml # Frontend template
```

### **8.2 Automation Scripts**
*Tham chiếu: 1.prod-structure.md - Section 5.5*

```
📁 scripts/ (7 files)
├── 📄 setup-dev.sh                    # Development environment setup
├── 📄 build-all.sh                    # Build backend + frontend
├── 📄 deploy-staging.sh               # Staging deployment
├── 📄 deploy-production.sh            # Production deployment
├── 📄 backup-data.sh                  # Database backup
├── 📄 run-tests.sh                    # Run all tests
└── 📄 update-dependencies.sh          # Dependency updates
```

### **8.3 Documentation**
*Tham chiếu: 1.prod-structure.md - Section 7.1*

```
📁 docs/ (6 files)
├── 📄 SETUP.md                        # Development setup guide
├── 📄 API.md                          # Complete API documentation
├── 📄 FRONTEND.md                     # Frontend development guide
├── 📄 DEPLOYMENT.md                   # Production deployment guide
├── 📄 USER-MANUAL.md                  # End-user manual
└── 📄 ARCHITECTURE.md                 # System architecture overview
```

### **8.4 Storybook Setup**
*Tham chiếu: 1.prod-structure.md - Section 3.12 & 4.3*

```
📁 .storybook/ (1 file)
└── 📄 main.js                         # Storybook configuration
```

**📝 Implementation Priority:**
1. Docker files cho development và production
2. Kubernetes manifests cho deployment
3. Automation scripts cho CI/CD
4. API documentation và setup guides
5. Storybook configuration cho component docs

---

## 📊 **SUMMARY - TỔNG KẾT**

### **📈 Progress Tracking:**
- **Phase 1**: Foundation (15 files) - Config setup
- **Phase 2**: Domain Layer (20 files) - Business logic  
- **Phase 3**: Application Layer (25 files) - Use cases
- **Phase 4**: Infrastructure (20 files) - Data persistence
- **Phase 5**: Presentation (18 files) - API endpoints
- **Phase 6**: Frontend (35 files) - UI components
- **Phase 7**: Testing (25 files) - Quality assurance
- **Phase 8**: Deployment (25 files) - Production ready

### **🎯 Success Metrics:**
✅ **Total Files**: 183 files mapped to SRS references  
✅ **Architecture Compliance**: 100% EMSA-v1.0 compliant  
✅ **Testing Coverage**: Unit, Integration, E2E coverage  
✅ **Production Ready**: Docker, K8s, CI/CD pipelines  
✅ **Documentation**: Complete setup và user guides  

### **🚀 Final Deliverables:**
- **Complete Identity & Authentication Service** với RBAC
- **Unified Admin Portal** với role-based navigation  
- **Production deployment setup** với monitoring
- **Comprehensive testing suite** với automated CI/CD
- **Full documentation** cho developers và users

**Ready for implementation! Follow phases 1-8 để build complete Sub-Project 1! 🎉**
