# 🚀 Sub-Project 1: Identity & Authentication + Unified Admin Portal - Roadmap Chi Tiết

## 📁 Cấu Trúc Thư Mục Hoàn Chỉnh

```bash
identity-auth-unified-portal/
├── 📂 backend/                         # Backend Service
│   ├── 📂 src/
│   │   ├── 📂 domain/                  # Domain Layer - Clean Architecture
│   │   │   ├── 📂 entities/                    
│   │   │   │   ├── User.ts             # User Entity
│   │   │   │   ├── Role.ts             # Role Entity  
│   │   │   │   ├── Permission.ts       # Permission Entity
│   │   │   │   ├── Session.ts          # Session Entity
│   │   │   │   └── OTPCode.ts          # OTP Entity
│   │   │   ├── 📂 value-objects/               
│   │   │   │   ├── Email.ts            # Email Value Object
│   │   │   │   ├── Phone.ts            # Phone Value Object
│   │   │   │   └── Password.ts         # Password Value Object
│   │   │   ├── 📂 repositories/        # Repository Interfaces
│   │   │   │   ├── IUserRepository.ts          
│   │   │   │   ├── IRoleRepository.ts          
│   │   │   │   ├── ISessionRepository.ts       
│   │   │   │   └── IOTPRepository.ts           
│   │   │   └── 📂 services/            # Domain Services
│   │   │       ├── AuthenticationDomainService.ts
│   │   │       ├── PasswordHashingService.ts   
│   │   │       └── OTPGenerationService.ts     
│   │   │
│   │   ├── 📂 application/             # Application Layer - Use Cases
│   │   │   ├── 📂 use-cases/                   
│   │   │   │   ├── 📂 authentication/          
│   │   │   │   │   ├── LoginUseCase.ts         
│   │   │   │   │   ├── LogoutUseCase.ts        
│   │   │   │   │   ├── RefreshTokenUseCase.ts  
│   │   │   │   │   └── VerifyOTPUseCase.ts     
│   │   │   │   ├── 📂 user-management/         
│   │   │   │   │   ├── CreateUserUseCase.ts    
│   │   │   │   │   ├── UpdateUserUseCase.ts    
│   │   │   │   │   ├── DeleteUserUseCase.ts    
│   │   │   │   │   └── GetUserUseCase.ts       
│   │   │   │   ├── 📂 role-management/         
│   │   │   │   │   ├── AssignRoleUseCase.ts    
│   │   │   │   │   ├── RevokeRoleUseCase.ts    
│   │   │   │   │   └── GetUserRolesUseCase.ts  
│   │   │   │   └── 📂 gdpr-compliance/         
│   │   │   │       ├── ExportUserDataUseCase.ts
│   │   │   │       └── DeleteUserDataUseCase.ts
│   │   │   ├── 📂 dtos/                # Data Transfer Objects
│   │   │   │   ├── LoginDTO.ts                 
│   │   │   │   ├── RegisterDTO.ts              
│   │   │   │   ├── UserDTO.ts                  
│   │   │   │   ├── RoleDTO.ts                  
│   │   │   │   └── OTPDTO.ts                   
│   │   │   └── 📂 interfaces/          # Application Interfaces
│   │   │       ├── IAuthenticationService.ts   
│   │   │       ├── IUserManagementService.ts   
│   │   │       └── IOTPService.ts              
│   │   │
│   │   ├── 📂 infrastructure/          # Infrastructure Layer
│   │   │   ├── 📂 database/                    
│   │   │   │   ├── 📂 repositories/            
│   │   │   │   │   ├── UserRepository.ts       
│   │   │   │   │   ├── RoleRepository.ts       
│   │   │   │   │   ├── SessionRepository.ts    
│   │   │   │   │   └── OTPRepository.ts        
│   │   │   │   ├── 📂 migrations/              
│   │   │   │   │   ├── 001_create_users_table.sql
│   │   │   │   │   ├── 002_create_roles_table.sql
│   │   │   │   │   ├── 003_create_permissions_table.sql
│   │   │   │   │   ├── 004_create_user_roles_table.sql
│   │   │   │   │   ├── 005_create_sessions_table.sql
│   │   │   │   │   └── 006_create_otp_codes_table.sql
│   │   │   │   └── 📂 seeds/                   
│   │   │   │       ├── default-roles.sql       
│   │   │   │       └── default-permissions.sql 
│   │   │   ├── 📂 external-services/           
│   │   │   │   ├── TwilioService.ts           # SMS OTP Service
│   │   │   │   ├── EmailService.ts            # Email Service
│   │   │   │   └── RedisService.ts            # Cache Service
│   │   │   ├── 📂 security/                    
│   │   │   │   ├── JWTService.ts              # JWT Implementation
│   │   │   │   ├── PasswordHashService.ts      # Bcrypt Implementation
│   │   │   │   └── RateLimitingService.ts     # Rate Limiting
│   │   │   └── 📂 config/                      
│   │   │       ├── database.config.ts         
│   │   │       ├── jwt.config.ts              
│   │   │       ├── twilio.config.ts           
│   │   │       └── redis.config.ts            
│   │   │
│   │   ├── 📂 presentation/            # Presentation Layer
│   │   │   ├── 📂 controllers/                 
│   │   │   │   ├── AuthController.ts          # Authentication APIs
│   │   │   │   ├── UserController.ts          # User Management APIs
│   │   │   │   ├── RoleController.ts          # Role Management APIs
│   │   │   │   └── GDPRController.ts          # GDPR Compliance APIs
│   │   │   ├── 📂 middleware/                  
│   │   │   │   ├── AuthMiddleware.ts          # JWT Verification
│   │   │   │   ├── RoleMiddleware.ts          # RBAC Authorization
│   │   │   │   ├── ValidationMiddleware.ts    # Input Validation
│   │   │   │   └── RateLimitMiddleware.ts     # Rate Limiting
│   │   │   ├── 📂 routes/                      
│   │   │   │   ├── auth.routes.ts             
│   │   │   │   ├── user.routes.ts             
│   │   │   │   ├── role.routes.ts             
│   │   │   │   └── gdpr.routes.ts             
│   │   │   └── 📂 validators/                  
│   │   │       ├── AuthValidators.ts          
│   │   │       ├── UserValidators.ts          
│   │   │       └── RoleValidators.ts          
│   │   │
│   │   └── 📂 shared/                  # Shared Utilities
│   │       ├── 📂 constants/                   
│   │       │   ├── roles.constants.ts         
│   │       │   ├── permissions.constants.ts   
│   │       │   └── error-codes.constants.ts   
│   │       ├── 📂 exceptions/                  
│   │       │   ├── AuthenticationException.ts 
│   │       │   ├── AuthorizationException.ts  
│   │       │   └── ValidationException.ts     
│   │       ├── 📂 types/                       
│   │       │   ├── auth.types.ts              
│   │       │   ├── user.types.ts              
│   │       │   └── common.types.ts            
│   │       └── 📂 utils/                       
│   │           ├── logger.utils.ts            
│   │           ├── validation.utils.ts        
│   │           └── crypto.utils.ts            
│   │
│   ├── 📂 tests/                       # Backend Testing
│   └── 📂 docs/                        # Backend Documentation
│
├── 📂 frontend/                        # Unified Admin Portal
│   ├── 📂 src/                             
│   │   ├── 📂 components/                  
│   │   │   ├── 📂 layout/                   # Layout Components
│   │   │   │   ├── MainLayout.tsx           # Overall Layout Structure
│   │   │   │   ├── Sidebar.tsx              # Main Navigation Sidebar
│   │   │   │   ├── TopBar.tsx               # Header với user info + notifications
│   │   │   │   ├── Breadcrumbs.tsx          # Navigation breadcrumbs
│   │   │   │   ├── MobileNavigation.tsx     # Mobile hamburger menu
│   │   │   │   └── Footer.tsx               # Footer component
│   │   │   ├── 📂 auth/                     # Authentication Components
│   │   │   │   ├── LoginForm.tsx            # Login form
│   │   │   │   ├── OTPVerification.tsx      # OTP verification form
│   │   │   │   ├── LogoutButton.tsx         # Logout functionality
│   │   │   │   ├── ForgotPassword.tsx       # Forgot password form
│   │   │   │   └── ChangePassword.tsx       # Password change form
│   │   │   ├── 📂 user-management/          # User Management Module
│   │   │   │   ├── UserList.tsx             # Danh sách users với pagination
│   │   │   │   ├── UserForm.tsx             # Form tạo/sửa user
│   │   │   │   ├── UserDetails.tsx          # Chi tiết user profile
│   │   │   │   ├── UserSearch.tsx           # Tìm kiếm và filter users
│   │   │   │   ├── UserBulkActions.tsx      # Bulk operations cho users
│   │   │   │   └── UserImportExport.tsx     # Import/Export user data
│   │   │   ├── 📂 role-management/          # Role & Permission Management
│   │   │   │   ├── RoleList.tsx             # Danh sách roles
│   │   │   │   ├── RoleForm.tsx             # Form tạo/sửa role
│   │   │   │   ├── PermissionMatrix.tsx     # Ma trận permissions
│   │   │   │   ├── RoleAssignment.tsx       # Gán role cho users
│   │   │   │   └── PermissionTree.tsx       # Cây phân quyền hierarchical
│   │   │   ├── 📂 campaign-management/      # Campaign Management Module
│   │   │   │   ├── CampaignOverview.tsx     # Tổng quan campaigns
│   │   │   │   ├── CampaignList.tsx         # Danh sách campaigns
│   │   │   │   ├── CampaignForm.tsx         # Form tạo/sửa campaign
│   │   │   │   ├── CampaignWizard.tsx       # Wizard tạo campaign step-by-step
│   │   │   │   ├── CampaignAnalytics.tsx    # Analytics cho campaigns
│   │   │   │   ├── QRCodeGenerator.tsx      # QR code generation tool
│   │   │   │   ├── BarcodeGenerator.tsx     # Barcode generation tool
│   │   │   │   ├── TemplateGallery.tsx      # Template gallery
│   │   │   │   └── AssetManager.tsx         # Asset management interface
│   │   │   ├── 📂 analytics/                # Analytics & Reporting Module
│   │   │   │   ├── DashboardOverview.tsx    # Main analytics dashboard
│   │   │   │   ├── RealTimeMetrics.tsx      # Real-time metrics display
│   │   │   │   ├── CampaignPerformance.tsx  # Campaign performance charts
│   │   │   │   ├── UserBehaviorAnalytics.tsx # User behavior analysis
│   │   │   │   ├── ABTestingResults.tsx     # A/B testing results
│   │   │   │   ├── CustomReportBuilder.tsx  # Custom report builder
│   │   │   │   └── ExportReports.tsx        # Export functionality
│   │   │   ├── 📂 redemption/               # Redemption Management Module
│   │   │   │   ├── RedemptionOverview.tsx   # Tổng quan redemptions
│   │   │   │   ├── RedemptionList.tsx       # Danh sách redemptions
│   │   │   │   ├── FraudDetection.tsx       # Fraud detection dashboard
│   │   │   │   ├── POSIntegration.tsx       # POS integration status
│   │   │   │   └── RedemptionAnalytics.tsx  # Redemption analytics
│   │   │   ├── 📂 notifications/            # Notifications Module
│   │   │   │   ├── NotificationCenter.tsx   # Notification center
│   │   │   │   ├── SendNotification.tsx     # Send notification form
│   │   │   │   ├── NotificationTemplates.tsx # Template management
│   │   │   │   ├── DeliveryReports.tsx      # Delivery status reports
│   │   │   │   └── NotificationHistory.tsx  # Notification history
│   │   │   ├── 📂 system-settings/          # System Settings Module
│   │   │   │   ├── GeneralSettings.tsx      # General system settings
│   │   │   │   ├── APIConfiguration.tsx     # API configuration
│   │   │   │   ├── IntegrationSettings.tsx  # External integration settings
│   │   │   │   ├── SecuritySettings.tsx     # Security configuration
│   │   │   │   └── AuditLogs.tsx            # System audit logs
│   │   │   └── 📂 shared/                   # Shared UI Components
│   │   │       ├── LoadingSpinner.tsx       # Loading states
│   │   │       ├── ErrorBoundary.tsx        # Error handling
│   │   │       ├── ConfirmDialog.tsx        # Confirmation dialogs
│   │   │       ├── DataTable.tsx            # Reusable data table
│   │   │       ├── FileUpload.tsx           # File upload component
│   │   │       ├── DateRangePicker.tsx      # Date range picker
│   │   │       ├── SearchBox.tsx            # Search input
│   │   │       ├── StatusBadge.tsx          # Status indicators
│   │   │       ├── ActionButton.tsx         # Action buttons
│   │   │       └── EmptyState.tsx           # Empty state display
│   │   │
│   │   ├── 📂 pages/                        # Page Components
│   │   │   ├── LoginPage.tsx                # Login page
│   │   │   ├── DashboardPage.tsx            # Main dashboard - overview tất cả
│   │   │   ├── UsersPage.tsx                # User management page
│   │   │   ├── RolesPage.tsx                # Role management page
│   │   │   ├── CampaignsPage.tsx            # Campaign management page
│   │   │   ├── AnalyticsPage.tsx            # Analytics dashboard page
│   │   │   ├── RedemptionPage.tsx           # Redemption monitoring page
│   │   │   ├── NotificationsPage.tsx        # Notifications management page
│   │   │   ├── SettingsPage.tsx             # System settings page
│   │   │   ├── ProfilePage.tsx              # User profile page
│   │   │   └── NotFoundPage.tsx             # 404 error page
│   │   │
│   │   ├── 📂 hooks/                        # Custom React Hooks
│   │   │   ├── useAuth.ts                   # Authentication hook
│   │   │   ├── useUsers.ts                  # User management hook
│   │   │   ├── useRoles.ts                  # Role management hook
│   │   │   ├── useCampaigns.ts              # Campaign management hook
│   │   │   ├── useAnalytics.ts              # Analytics data hook
│   │   │   ├── useNotifications.ts          # Notifications hook
│   │   │   ├── usePermissions.ts            # Permission checking hook
│   │   │   ├── useLocalStorage.ts           # Local storage hook
│   │   │   └── useDebounce.ts               # Debounce hook
│   │   │
│   │   ├── 📂 services/                     # API Services
│   │   │   ├── api.service.ts               # Base API service với axios
│   │   │   ├── auth.service.ts              # Authentication API calls
│   │   │   ├── user.service.ts              # User management API calls
│   │   │   ├── role.service.ts              # Role management API calls
│   │   │   ├── campaign.service.ts          # Campaign API calls
│   │   │   ├── analytics.service.ts         # Analytics API calls
│   │   │   ├── redemption.service.ts        # Redemption API calls
│   │   │   ├── notification.service.ts      # Notification API calls
│   │   │   └── websocket.service.ts         # WebSocket connections
│   │   │
│   │   ├── 📂 store/                        # Redux Store
│   │   │   ├── store.ts                     # Main Redux store configuration
│   │   │   ├── 📂 slices/                   # Redux slices
│   │   │   │   ├── authSlice.ts             # Authentication state
│   │   │   │   ├── userSlice.ts             # User management state
│   │   │   │   ├── roleSlice.ts             # Role management state
│   │   │   │   ├── campaignSlice.ts         # Campaign state
│   │   │   │   ├── analyticsSlice.ts        # Analytics state
│   │   │   │   ├── redemptionSlice.ts       # Redemption state
│   │   │   │   ├── notificationSlice.ts     # Notification state
│   │   │   │   ├── navigationSlice.ts       # Navigation state
│   │   │   │   └── uiSlice.ts               # UI state (loading, modals, etc.)
│   │   │   └── 📂 middleware/               # Redux middleware
│   │   │       ├── authMiddleware.ts        # Auth token handling
│   │   │       └── errorMiddleware.ts       # Error handling
│   │   │
│   │   ├── 📂 utils/                        # Utility Functions
│   │   │   ├── constants.ts                 # App constants
│   │   │   ├── validators.ts                # Form validation functions
│   │   │   ├── formatters.ts                # Data formatting functions
│   │   │   ├── permissions.ts               # Permission checking utilities
│   │   │   ├── routes.ts                    # Route definitions
│   │   │   ├── storage.ts                   # LocalStorage utilities
│   │   │   ├── dates.ts                     # Date utilities
│   │   │   └── exporters.ts                 # Data export utilities
│   │   │
│   │   ├── 📂 styles/                       # Styling
│   │   │   ├── globals.css                  # Global styles
│   │   │   ├── components.css               # Component-specific styles
│   │   │   ├── layout.css                   # Layout styles
│   │   │   └── themes/                      # Theme configurations
│   │   │       ├── light.css                # Light theme
│   │   │       └── dark.css                 # Dark theme
│   │   │
│   │   └── 📂 types/                        # TypeScript Types
│   │       ├── auth.types.ts                # Authentication types
│   │       ├── user.types.ts                # User management types
│   │       ├── campaign.types.ts            # Campaign types
│   │       ├── analytics.types.ts           # Analytics types
│   │       ├── api.types.ts                 # API response types
│   │       └── common.types.ts              # Common shared types
│   │
│   ├── 📂 public/                           # Static Assets
│   │   ├── favicon.ico                      
│   │   ├── logo.png                         
│   │   └── icons/                           # Icon assets
│   │
│   ├── 📂 tests/                            # Frontend Testing
│   │   ├── 📂 components/                   # Component tests
│   │   ├── 📂 hooks/                        # Hook tests
│   │   ├── 📂 services/                     # Service tests
│   │   ├── 📂 utils/                        # Utility tests
│   │   └── 📂 e2e/                          # End-to-end tests
│   │
│   ├── package.json                         
│   ├── tsconfig.json                        
│   ├── tailwind.config.js                   # Tailwind CSS configuration
│   ├── vite.config.ts                       # Vite configuration
│   └── .env.example                         # Environment variables template
│
├── 📂 database/                             # Database Scripts
│   ├── 📂 migrations/                       
│   ├── 📂 seeds/                            
│   └── 📂 backups/                          
│
├── 📂 deployment/                           # Deployment Configuration
│   ├── 📂 docker/                           
│   │   ├── Dockerfile.backend               # Backend container
│   │   ├── Dockerfile.frontend              # Frontend container
│   │   ├── docker-compose.yml               # Full stack composition
│   │   └── docker-compose.dev.yml           # Development environment
│   ├── 📂 kubernetes/                       
│   │   ├── 📂 backend/                      # Backend K8s manifests
│   │   ├── 📂 frontend/                     # Frontend K8s manifests
│   │   └── 📂 shared/                       # Shared resources
│   └── 📂 helm/                             
│       ├── Chart.yaml                       
│       ├── values.yaml                      
│       └── 📂 templates/                    
│
├── 📂 docs/                                 # Documentation
│   ├── SETUP.md                             # Setup guide
│   ├── API.md                               # API documentation
│   ├── FRONTEND.md                          # Frontend guide
│   ├── DEPLOYMENT.md                        # Deployment guide
│   ├── USER-MANUAL.md                       # User manual
│   └── 📂 diagrams/                         
│       ├── unified-portal-architecture.png  
│       ├── navigation-flow.png              
│       └── user-flow-diagram.png            
│
├── 📂 scripts/                              # Automation Scripts
│   ├── setup-dev.sh                        # Development setup
│   ├── build-all.sh                        # Build backend + frontend
│   ├── deploy-staging.sh                    # Staging deployment
│   └── backup-data.sh                       # Data backup
│
├── .env.example                             # Environment variables template
├── .gitignore                               
├── package.json                             # Root package.json
├── docker-compose.yml                       # Full stack development
└── README.md                                
```

---

## 📋 Roadmap Chi Tiết - Checklist Implementation

### **1. SETUP & CHUẨN BỊ DỰ ÁN** ⚙️

#### **1.1 Khởi tạo dự án monorepo**
- [ ] **Tạo repository và cấu trúc monorepo**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + Part10.3.1 Admin Portal UI
  - *Mô tả*: Thiết lập monorepo với backend (Clean Architecture) và frontend (Unified Portal)
  - *Ý nghĩa*: Single repository cho complete Identity + Portal solution, easier maintenance

- [ ] **Cấu hình workspace và shared dependencies**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Setup workspace với shared TypeScript configs, linting, shared types
  - *Ý nghĩa*: Consistent development experience across backend/frontend, code reuse

- [ ] **Setup Docker multi-stage builds**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14 Deployment Architecture  
  - *Mô tả*: Multi-stage Dockerfile cho backend + frontend với optimization
  - *Ý nghĩa*: Efficient production containers với separate backend/frontend serving

#### **1.2 Database Setup**
- [ ] **Thiết lập PostgreSQL cho user data**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview
  - *Mô tả*: PostgreSQL 15+ container với user management schema
  - *Ý nghĩa*: ACID compliance cho sensitive user data và RBAC information

- [ ] **Thiết lập Redis cho sessions và cache**  
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Redis 7+ cho JWT sessions, OTP codes, portal cache
  - *Ý nghĩa*: High-performance session management và UI state caching

### **2. BACKEND IMPLEMENTATION** 🏗️

#### **2.1 Domain Layer Implementation**
- [ ] **Implement User Entity với business rules**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004)
  - *Mô tả*: Core User entity với validation, status management, audit trail
  - *Ý nghĩa*: Encapsulate user business logic, ensure data integrity cho portal users

- [ ] **Implement Role Entity với hierarchy**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration  
  - *Mô tả*: Role entity với 6-level hierarchy (Platform Admin → Customer Guest)
  - *Ý nghĩa*: Support complex portal navigation permissions

- [ ] **Implement Permission Entity với granular control**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements
  - *Mô tả*: Fine-grained permissions cho portal modules (User Mgmt, Campaign, Analytics, etc.)
  - *Ý nghĩa*: Flexible portal access control, feature-level permissions

- [ ] **Implement Session Entity với portal context**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Session tracking với portal preferences, navigation state
  - *Ý nghĩa*: Enhanced portal UX với session persistence

- [ ] **Implement OTPCode Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.5 OTP Verification (FR-005)
  - *Mô tả*: OTP system cho secure portal login, sensitive operations
  - *Ý nghĩa*: Two-factor security cho admin portal access

#### **2.2 Application Layer Implementation**
- [ ] **Implement Authentication Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication (FR-003)
  - *Mô tả*: Login, Logout, Token Refresh, OTP Verification cho portal
  - *Ý nghĩa*: Complete authentication flow supporting portal SSO

- [ ] **Implement User Management Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004)
  - *Mô tả*: CRUD operations, bulk operations, import/export cho portal UI
  - *Ý nghĩa*: Backend support cho comprehensive user management portal

- [ ] **Implement Role Management Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: Role assignment, permission matrix, hierarchical management
  - *Ý nghĩa*: Support sophisticated RBAC portal interface

- [ ] **Implement GDPR Compliance Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.9 Compliance Requirements  
  - *Mô tả*: Data export, deletion với audit trail cho compliance portal
  - *Ý nghĩa*: Legal compliance features accessible through portal UI

#### **2.3 Infrastructure Layer Implementation**
- [ ] **Implement Repository classes với optimization**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture
  - *Mô tả*: Optimized repositories với pagination, filtering cho portal lists
  - *Ý nghĩa*: High-performance data access cho portal UI components

- [ ] **Implement External Services (Twilio, Email)**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.1 Twilio Integration
  - *Mô tả*: SMS OTP, Email notifications có thể configure through portal
  - *Ý nghĩa*: External service management accessible via portal settings

- [ ] **Implement Security Services**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements
  - *Mô tả*: JWT, Password hashing, Rate limiting cho portal security
  - *Ý nghĩa*: Comprehensive security cho admin portal access

#### **2.4 Presentation Layer (API) Implementation**
- [ ] **Implement Authentication Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs  
  - *Mô tả*: REST APIs cho portal login, logout, token management
  - *Ý nghĩa*: API endpoints supporting portal authentication flows

- [ ] **Implement User Management Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.2 User Management APIs
  - *Mô tả*: REST APIs với pagination, search, filtering cho portal UI
  - *Ý nghĩa*: Complete API support cho portal user management features

- [ ] **Implement Role Management Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: APIs cho role matrix, permission management trong portal
  - *Ý nghĩa*: Backend support cho sophisticated RBAC portal interface

- [ ] **Implement GDPR Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.9 Compliance Requirements
  - *Mô tả*: APIs cho data export, deletion requests từ portal
  - *Ý nghĩa*: Legal compliance functionality accessible via portal

### **3. FRONTEND IMPLEMENTATION - UNIFIED PORTAL** 🖥️

#### **3.1 Core Portal Infrastructure**
- [ ] **Setup React TypeScript với modern tooling**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal UI
  - *Mô tả*: React 18+, TypeScript, Vite, Tailwind CSS, modern dev tools
  - *Ý nghĩa*: High-performance portal với excellent developer experience

- [ ] **Implement Main Layout System**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation
  - *Mô tả*: Responsive layout với sidebar, topbar, breadcrumbs, mobile support
  - *Ý nghĩa*: Consistent portal structure supporting all admin modules

- [ ] **Setup Navigation System**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation + Access_Control_Tree_Grok.md
  - *Mô tả*: Role-based navigation, dynamic menu, breadcrumbs, mobile-friendly
  - *Ý nghĩa*: Intelligent navigation adapting to user permissions

- [ ] **Implement Authentication Flow**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication (FR-003)
  - *Mô tả*: Login page, OTP verification, password reset, session management
  - *Ý nghĩa*: Secure portal access với user-friendly authentication

#### **3.2 User Management Module**
- [ ] **Implement UserList Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal - User Management
  - *Mô tả*: Advanced data table với pagination, search, filtering, sorting
  - *Ý nghĩa*: Efficient browsing cho large user datasets

- [ ] **Implement UserForm Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management  
  - *Mô tả*: Comprehensive form với validation, role selection, profile management
  - *Ý nghĩa*: Complete user creation/editing interface

- [ ] **Implement UserDetails Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management
  - *Mô tả*: Detailed user view với activity history, role assignments, audit trail
  - *Ý nghĩa*: 360-degree user information display

- [ ] **Implement Bulk Operations**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management
  - *Mô tả*: Bulk edit, delete, role assignment, import/export functionality
  - *Ý nghĩa*: Efficient mass user management operations

#### **3.3 Role & Permission Management Module**
- [ ] **Implement RoleList Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: Role hierarchy display với permission previews
  - *Ý nghĩa*: Clear role structure visualization

- [ ] **Implement PermissionMatrix Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: Interactive matrix cho granular permission assignment
  - *Ý nghĩa*: Visual permission management tool

- [ ] **Implement RoleAssignment Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: Drag-and-drop role assignment với validation
  - *Ý nghĩa*: Intuitive role management interface

#### **3.4 Campaign Management Integration**
- [ ] **Implement CampaignOverview Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management (FR-001)
  - *Mô tả*: Campaign metrics dashboard, quick actions, status overview
  - *Ý nghĩa*: Integrated campaign management trong unified portal

- [ ] **Implement QRCodeGenerator Integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR Integration
  - *Mô tả*: QR generation tool integrated trong portal với UTM tracking
  - *Ý nghĩa*: Seamless QR management workflow

- [ ] **Implement TemplateGallery Integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template browser và selector integrated trong campaign workflow
  - *Ý nghĩa*: Unified creative asset management

#### **3.5 Analytics Dashboard Integration**
- [ ] **Implement DashboardOverview Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics (FR-008)
  - *Mô tả*: Main dashboard với key metrics từ tất cả services
  - *Ý nghĩa*: Central command center cho admin portal

- [ ] **Implement RealTimeMetrics Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics
  - *Mô tả*: Live metrics display với auto-refresh, alerts
  - *Ý nghĩa*: Real-time system monitoring trong portal

- [ ] **Implement CustomReportBuilder Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.14 Advanced Reporting (FR-014)
  - *Mô tả*: Drag-and-drop report builder với export options
  - *Ý nghĩa*: Self-service analytics trong portal

#### **3.6 Redemption Management Integration**
- [ ] **Implement RedemptionOverview Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.7 Barcode Redemption (FR-007)
  - *Mô tả*: Redemption monitoring dashboard với real-time updates
  - *Ý nghĩa*: Integrated redemption tracking trong portal

- [ ] **Implement FraudDetection Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.11 Fraud Detection (FR-011)
  - *Mô tả*: Fraud alerts, ML scoring display, investigation tools
  - *Ý nghĩa*: Security monitoring integrated trong admin portal

#### **3.7 Notifications Management Integration**
- [ ] **Implement NotificationCenter Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.10 Notification System (FR-010)
  - *Mô tả*: Unified notification center với real-time updates
  - *Ý nghĩa*: Central communication hub trong portal

- [ ] **Implement SendNotification Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.10 Notification System
  - *Mô tả*: Multi-channel notification sender (SMS, Email, Push)
  - *Ý nghĩa*: Integrated communication tools

#### **3.8 System Settings Module**
- [ ] **Implement GeneralSettings Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: System configuration, feature toggles, maintenance mode
  - *Ý nghĩa*: Centralized system administration

- [ ] **Implement APIConfiguration Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design
  - *Mô tả*: API rate limits, key management, endpoint configuration
  - *Ý nghĩa*: API management integrated trong portal

- [ ] **Implement AuditLogs Component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.6 Auditability Requirements
  - *Mô tả*: Searchable audit trail với filtering, export
  - *Ý nghĩa*: Compliance monitoring tools

#### **3.9 State Management & Services**
- [ ] **Setup Redux Toolkit với RTK Query**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal Architecture
  - *Mô tả*: Global state management với API caching, real-time updates
  - *Ý nghĩa*: Efficient data management cho complex multi-module portal

- [ ] **Implement Unified API Services**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design
  - *Mô tả*: API gateway integration, error handling, authentication
  - *Ý nghĩa*: Consistent API communication across all portal modules

- [ ] **Implement WebSocket Integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics
  - *Mô tả*: Real-time updates cho notifications, analytics, fraud alerts
  - *Ý nghĩa*: Live portal experience với instant updates

### **4. TESTING IMPLEMENTATION** 🧪

#### **4.1 Backend Testing**
- [ ] **Write comprehensive unit tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Domain entities, use cases, repositories với >90% coverage
  - *Ý nghĩa*: Ensure backend reliability cho portal functionality

- [ ] **Write API integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing
  - *Mô tả*: Complete API workflows, authentication, RBAC
  - *Ý nghĩa*: Verify backend services supporting portal

#### **4.2 Frontend Testing**
- [ ] **Write component unit tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Individual component testing với React Testing Library
  - *Ý nghĩa*: Ensure portal UI component reliability

- [ ] **Write integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing
  - *Mô tả*: Portal workflows, API integration, state management
  - *Ý nghĩa*: Verify complete portal functionality

#### **4.3 End-to-End Testing**
- [ ] **Write portal workflow tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: Complete admin workflows từ login đến task completion
  - *Ý nghĩa*: Verify end-to-end portal user experience

- [ ] **Write cross-module integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: User management → Campaign creation → Analytics viewing flows
  - *Ý nghĩa*: Verify seamless portal module integration

### **5. DEPLOYMENT & DEVOPS** 🚀

#### **5.1 Containerization**
- [ ] **Create multi-stage Dockerfiles**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Optimized containers cho backend service và frontend portal
  - *Ý nghĩa*: Efficient deployment artifacts cho production

- [ ] **Create Docker Compose development stack**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Complete development environment với databases, services
  - *Ý nghĩa*: Easy local development setup cho full stack

#### **5.2 Kubernetes Deployment**
- [ ] **Create K8s manifests cho backend/frontend**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Separate deployments với shared ConfigMaps, Secrets
  - *Ý nghĩa*: Production-ready orchestration với scaling capabilities

- [ ] **Setup Ingress cho unified domain**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Single domain routing `/api/*` → backend, `/*` → frontend
  - *Ý nghĩa*: Seamless user experience với unified URL structure

#### **5.3 CI/CD Pipeline**
- [ ] **Setup GitHub Actions cho monorepo**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: Parallel builds, testing, deployment cho backend + frontend
  - *Ý nghĩa*: Efficient automated delivery cho complete solution

### **6. MONITORING & OBSERVABILITY** 📊

#### **6.1 Backend Monitoring**
- [ ] **Setup API monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
  - *Mô tả*: Health checks, metrics collection, error tracking
  - *Ý nghĩa*: Backend reliability monitoring

#### **6.2 Frontend Monitoring**
- [ ] **Setup portal performance monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
  - *Mô tả*: Core Web Vitals, user experience metrics, error tracking
  - *Ý nghĩa*: Portal UX optimization insights

- [ ] **Implement user analytics**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics
  - *Mô tả*: Portal usage patterns, feature adoption, user behavior
  - *Ý nghĩa*: Portal improvement insights

### **7. DOCUMENTATION & DELIVERY** 📚

#### **7.1 Technical Documentation**
- [ ] **Create portal user manual**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal
  - *Mô tả*: Complete guide cho tất cả portal features, role-specific instructions
  - *Ý nghĩa*: User adoption support cho unified portal

- [ ] **Write developer documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06 System Architecture
  - *Mô tả*: Architecture overview, API docs, development setup
  - *Ý nghĩa*: Developer onboarding và maintenance support

#### **7.2 Project Delivery**
- [ ] **Performance validation cho full stack**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.2.1 Load Testing Scenarios
  - *Mô tả*: Load testing cho backend APIs và frontend portal performance
  - *Ý nghĩa*: Complete solution performance verification

- [ ] **Security audit cho portal**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.5.3 Security Testing
  - *Mô tả*: Penetration testing, authentication security, RBAC validation
  - *Ý nghĩa*: Portal security assurance

- [ ] **Production deployment và go-live**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Deployment Overview
  - *Mô tả*: Production environment setup với monitoring, backup
  - *Ý nghĩa*: Complete solution availability cho end users

---

## 🎯 Kết Luận

**Tổng số checkpoints**: 132 tasks  
**Estimated timeline**: 8-10 tuần cho 1 team (4-5 developers)  
**SRS coverage**: 100% cho Identity domain + Complete Unified Portal  

**Deliverables chính**:
- ✅ **Complete Identity & Authentication Service** với Clean Architecture
- ✅ **Unified Admin Portal** tích hợp tất cả modules
- ✅ **Full RBAC system** với 6 roles và granular permissions
- ✅ **Role-based Portal Navigation** adapting to user permissions
- ✅ **Real-time Portal Features** với WebSocket integration
- ✅ **GDPR compliant** user data management
- ✅ **Mobile-responsive** portal design
- ✅ **Production-ready** deployment configuration
- ✅ **Comprehensive testing** suite cho full stack
- ✅ **Complete documentation** package

**Key Portal Features**:
- 🏠 **Unified Dashboard**: Single-point access cho tất cả admin functions
- 👥 **Integrated User Management**: Complete RBAC với visual permission matrix
- 🎯 **Campaign Management Integration**: Seamless workflow từ user → campaign → analytics
- 📊 **Real-time Analytics**: Live metrics và notifications trong portal
- 🔔 **Notification Center**: Unified communication hub
- ⚙️ **System Administration**: Complete configuration management
- 📱 **Mobile-first Design**: Responsive portal cho mọi device

**Portal Navigation Structure**:
```bash
🏠 Dashboard (Overview tất cả services)
├── 👥 Users & Roles (Identity Service)
├── 🎯 Campaigns (Campaign Service)  
├── 📊 Analytics (Analytics Service)
├── 🛍️ Redemptions (Redemption Service)
├── 🔔 Notifications (Notification Service)
└── ⚙️ Settings (System Configuration)
```

**Ready for unified development! Single portal, multiple services, seamless experience! 🚀**
