# 🚀 Sub-Project 1: Identity & Authentication + Unified Admin Portal - Roadmap Chi Tiết

## 📁 Cấu Trúc Thư Mục Hoàn Chỉnh

```bash
identity-auth-unified-portal/
├── 📂 backend/                         # Backend Service
│   ├── 📂 src/
│   │   ├── 📂 domain/                  # Domain Layer - Clean Architecture
│   │   │   ├── 📂 entities/                    
│   │   │   │   ├── User.ts             # User Entity với business rules
│   │   │   │   ├── Role.ts             # Role Entity với hierarchy  
│   │   │   │   ├── Permission.ts       # Permission Entity với granular control
│   │   │   │   ├── Session.ts          # Session Entity cho JWT management
│   │   │   │   └── OTPCode.ts          # OTP Entity cho 2FA
│   │   │   ├── 📂 value-objects/               
│   │   │   │   ├── Email.ts            # Email Value Object với validation
│   │   │   │   ├── Phone.ts            # Phone Value Object với format
│   │   │   │   └── Password.ts         # Password Value Object với hash
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
│   │   │   │   │   ├── LoginUseCase.ts         # Handle login flow với OTP
│   │   │   │   │   ├── LogoutUseCase.ts        # Cleanup sessions
│   │   │   │   │   ├── RefreshTokenUseCase.ts  # JWT refresh logic
│   │   │   │   │   └── VerifyOTPUseCase.ts     # OTP validation
│   │   │   │   ├── 📂 user-management/         
│   │   │   │   │   ├── CreateUserUseCase.ts    # User creation với validation
│   │   │   │   │   ├── UpdateUserUseCase.ts    # User update logic
│   │   │   │   │   ├── DeleteUserUseCase.ts    # Soft delete implementation
│   │   │   │   │   ├── GetUserUseCase.ts       # User retrieval
│   │   │   │   │   └── ListUsersUseCase.ts     # Paginated user listing
│   │   │   │   └── 📂 role-management/         
│   │   │   │       ├── AssignRoleUseCase.ts    # Role assignment logic
│   │   │   │       ├── CreateRoleUseCase.ts    # Role creation
│   │   │   │       ├── UpdateRoleUseCase.ts    # Role modification
│   │   │   │       └── GetPermissionsUseCase.ts # Permission matrix
│   │   │   ├── 📂 dto/                 # Data Transfer Objects
│   │   │   │   ├── AuthenticationDTO.ts        # Login/logout DTOs
│   │   │   │   ├── UserManagementDTO.ts        # User CRUD DTOs
│   │   │   │   └── RoleManagementDTO.ts        # Role CRUD DTOs
│   │   │   └── 📂 ports/               # Ports for Infrastructure
│   │   │       ├── IEmailService.ts            # Email sending interface
│   │   │       ├── ISMSService.ts              # SMS sending interface
│   │   │       └── ITokenService.ts            # JWT handling interface
│   │   │
│   │   ├── 📂 infrastructure/          # Infrastructure Layer
│   │   │   ├── 📂 persistence/         # Database Implementation
│   │   │   │   ├── 📂 repositories/            
│   │   │   │   │   ├── UserRepository.ts       # PostgreSQL user repository
│   │   │   │   │   ├── RoleRepository.ts       # Role data access
│   │   │   │   │   ├── SessionRepository.ts    # Redis session storage
│   │   │   │   │   └── OTPRepository.ts        # OTP code storage
│   │   │   │   ├── 📂 models/                  
│   │   │   │   │   ├── UserModel.ts            # Prisma user model
│   │   │   │   │   ├── RoleModel.ts            # Role database model
│   │   │   │   │   └── SessionModel.ts         # Session model
│   │   │   │   └── 📂 migrations/              
│   │   │   │       ├── 001_create_users.sql    # User table creation
│   │   │   │       ├── 002_create_roles.sql    # Roles và permissions
│   │   │   │       └── 003_create_sessions.sql # Session management
│   │   │   ├── 📂 external-services/   # External Service Implementations
│   │   │   │   ├── EmailService.ts             # Twilio SendGrid integration
│   │   │   │   ├── SMSService.ts               # Twilio SMS service
│   │   │   │   └── TokenService.ts             # JWT implementation
│   │   │   └── 📂 config/              # Configuration
│   │   │       ├── database.config.ts          # DB connection config
│   │   │       ├── redis.config.ts             # Redis configuration
│   │   │       └── app.config.ts               # General app settings
│   │   │
│   │   ├── 📂 presentation/            # Presentation Layer (APIs)
│   │   │   ├── 📂 controllers/                 
│   │   │   │   ├── AuthController.ts           # Authentication endpoints
│   │   │   │   ├── UserController.ts           # User management APIs
│   │   │   │   ├── RoleController.ts           # Role management APIs
│   │   │   │   └── HealthController.ts         # Health check endpoint
│   │   │   ├── 📂 middleware/                  
│   │   │   │   ├── AuthMiddleware.ts           # JWT verification
│   │   │   │   ├── RBACMiddleware.ts           # Permission checking
│   │   │   │   ├── ValidationMiddleware.ts     # Request validation
│   │   │   │   └── LoggingMiddleware.ts        # Request logging
│   │   │   ├── 📂 routes/                      
│   │   │   │   ├── auth.routes.ts              # Authentication routes
│   │   │   │   ├── users.routes.ts             # User management routes
│   │   │   │   └── roles.routes.ts             # Role management routes
│   │   │   └── 📂 validators/                  
│   │   │       ├── AuthValidators.ts           # Login/register validation
│   │   │       ├── UserValidators.ts           # User data validation
│   │   │       └── RoleValidators.ts           # Role validation rules
│   │   │
│   │   └── 📂 shared/                  # Shared Utilities
│   │       ├── 📂 constants/                   
│   │       │   ├── roles.constants.ts          # Role definitions từ Access_Control_Tree
│   │       │   ├── permissions.constants.ts    # Permission constants
│   │       │   └── error-codes.constants.ts    # Error code mappings
│   │       ├── 📂 exceptions/                  
│   │       │   ├── AuthenticationException.ts  # Auth-specific errors
│   │       │   ├── AuthorizationException.ts   # RBAC errors
│   │       │   └── ValidationException.ts      # Validation errors
│   │       ├── 📂 types/                       
│   │       │   ├── auth.types.ts               # Authentication type definitions
│   │       │   ├── user.types.ts               # User-related types
│   │       │   └── common.types.ts             # Shared type definitions
│   │       └── 📂 utils/                       
│   │           ├── logger.utils.ts             # Structured logging
│   │           ├── validation.utils.ts         # Common validation helpers
│   │           └── crypto.utils.ts             # Encryption utilities
│   │
│   ├── 📂 tests/                       # Backend Testing
│   │   ├── 📂 unit/                    # Unit tests cho domain logic
│   │   ├── 📂 integration/             # API integration tests
│   │   └── 📂 e2e/                     # End-to-end backend tests
│   └── 📂 docs/                        # Backend Documentation
│       ├── API.md                      # API documentation
│       └── ARCHITECTURE.md             # Clean architecture explanation
│
├── 📂 frontend/                        # Unified Admin Portal
│   ├── 📂 src/                             
│   │   ├── 📂 components/                  
│   │   │   ├── 📂 layout/               # Layout Components theo Part10.8.6 Navigation
│   │   │   │   ├── MainLayout.tsx       # Overall layout structure theo Part10 wireframes
│   │   │   │   ├── Sidebar.tsx          # Navigation sidebar với role-based menu
│   │   │   │   ├── TopBar.tsx           # Header với user info + notifications
│   │   │   │   ├── Breadcrumbs.tsx      # Navigation breadcrumbs
│   │   │   │   ├── MobileNavigation.tsx # Mobile hamburger menu
│   │   │   │   └── Footer.tsx           # Footer component
│   │   │   ├── 📂 ui/                   # Design System Components theo Part10.8
│   │   │   │   ├── Button.tsx           # Button variants theo Part10.8.1 Buttons
│   │   │   │   ├── Input.tsx            # Input components theo Part10.8.2 Forms
│   │   │   │   ├── Card.tsx             # Card layouts theo Part10.8.3 Cards
│   │   │   │   ├── Table.tsx            # Data tables theo Part10.8.4 Tables
│   │   │   │   ├── Modal.tsx            # Modal dialogs theo Part10.8.5 Modals
│   │   │   │   ├── Select.tsx           # Dropdown selections
│   │   │   │   ├── Checkbox.tsx         # Checkbox inputs
│   │   │   │   ├── RadioGroup.tsx       # Radio button groups
│   │   │   │   └── Toast.tsx            # Toast notifications
│   │   │   ├── 📂 charts/               # Chart Components theo Part10.8.7 Charts
│   │   │   │   ├── LineChart.tsx        # Line charts cho analytics
│   │   │   │   ├── BarChart.tsx         # Bar charts cho comparisons
│   │   │   │   ├── PieChart.tsx         # Pie charts cho distributions
│   │   │   │   ├── KPICard.tsx          # KPI metric cards
│   │   │   │   └── ChartContainer.tsx   # Chart wrapper với consistent styling
│   │   │   ├── 📂 user-management/      # User Management Module theo Part10.3.1
│   │   │   │   ├── UserList.tsx         # User listing với search/filter theo Part10.8.4
│   │   │   │   ├── UserForm.tsx         # User create/edit form theo Part10.8.2
│   │   │   │   ├── UserDetails.tsx      # User profile view theo Part10.8.3
│   │   │   │   ├── RoleMatrix.tsx       # Visual permission matrix
│   │   │   │   ├── UserBulkActions.tsx  # Bulk operations interface
│   │   │   │   └── UserStatusBadge.tsx  # Status indicators
│   │   │   ├── 📂 campaign-management/  # Campaign Module theo Part10.2.2
│   │   │   │   ├── CampaignList.tsx     # Campaign listing theo Part10.2.2.1
│   │   │   │   ├── CampaignForm.tsx     # Campaign creation form
│   │   │   │   ├── QRPreview.tsx        # QR code preview modal
│   │   │   │   ├── CampaignAnalytics.tsx # Campaign metrics
│   │   │   │   └── CampaignStatus.tsx   # Status management
│   │   │   ├── 📂 analytics/            # Analytics Module theo Part10.2.5
│   │   │   │   ├── OverviewMetrics.tsx  # KPI overview theo Part10.2.5.1
│   │   │   │   ├── FunnelAnalysis.tsx   # Conversion funnel theo Part10.2.5.2
│   │   │   │   ├── CampaignPerformance.tsx # Campaign metrics theo Part10.2.5.3
│   │   │   │   ├── RealtimeUpdates.tsx  # Live data updates
│   │   │   │   └── ExportData.tsx       # Data export functionality
│   │   │   ├── 📂 barcode-management/   # Barcode Module theo Part10.2.3
│   │   │   │   ├── BarcodePoolList.tsx  # Pool management theo Part10.2.3.1
│   │   │   │   ├── ImportBarcodes.tsx   # Bulk import theo Part10.2.3.2
│   │   │   │   ├── GenerateBarcodes.tsx # Generation wizard theo Part10.2.3.3
│   │   │   │   ├── BarcodePreview.tsx   # Visual preview
│   │   │   │   └── RedemptionMonitor.tsx # Real-time tracking
│   │   │   ├── 📂 fraud-detection/      # Fraud Module theo Part10.2.4
│   │   │   │   ├── FraudDashboard.tsx   # Fraud overview theo Part10.2.4.1
│   │   │   │   ├── FraudAlerts.tsx      # Alert management theo Part10.2.4.2
│   │   │   │   ├── FraudScoring.tsx     # Score visualization
│   │   │   │   ├── DeviceFingerprint.tsx # Device tracking
│   │   │   │   └── RiskAnalysis.tsx     # Risk assessment charts
│   │   │   ├── 📂 notifications/        # Notification Module
│   │   │   │   ├── NotificationList.tsx # Message management
│   │   │   │   ├── NotificationComposer.tsx # Message creation
│   │   │   │   ├── NotificationTemplates.tsx # Template library
│   │   │   │   └── SendNotification.tsx # Send interface
│   │   │   ├── 📂 system-settings/      # Settings Module
│   │   │   │   ├── GeneralSettings.tsx  # System configuration
│   │   │   │   ├── APIConfiguration.tsx # API management
│   │   │   │   ├── AuditLogs.tsx        # System audit trail
│   │   │   │   └── SecuritySettings.tsx # Security configuration
│   │   │   ├── 📂 user-portal/          # Customer Portal theo Part10.5
│   │   │   │   ├── UserPortalDashboard.tsx # Customer dashboard theo Part10.5.1.1
│   │   │   │   ├── MyBarcodesCard.tsx   # User barcode display
│   │   │   │   ├── ProfileSettings.tsx  # Profile editing theo Part10.5.4.1
│   │   │   │   ├── ConsentManagement.tsx # Privacy controls
│   │   │   │   └── RecommendationList.tsx # Personalized offers
│   │   │   └── 📂 shared/               # Shared UI Components
│   │   │       ├── LoadingSpinner.tsx   # Loading states
│   │   │       ├── ErrorBoundary.tsx    # Error handling
│   │   │       ├── ConfirmDialog.tsx    # Confirmation dialogs
│   │   │       ├── DataTable.tsx        # Reusable data table
│   │   │       ├── FileUpload.tsx       # File upload component
│   │   │       ├── DateRangePicker.tsx  # Date range picker
│   │   │       ├── SearchBox.tsx        # Search input
│   │   │       ├── StatusBadge.tsx      # Status indicators
│   │   │       ├── ActionButton.tsx     # Action buttons
│   │   │       └── EmptyState.tsx       # Empty state display
│   │   │
│   │   ├── 📂 pages/                    # Page Components
│   │   │   ├── LoginPage.tsx            # Login page theo Part10.3.1 Admin Portal
│   │   │   ├── DashboardPage.tsx        # Main dashboard - overview tất cả
│   │   │   ├── UsersPage.tsx            # User management page
│   │   │   ├── RolesPage.tsx            # Role management page
│   │   │   ├── CampaignsPage.tsx        # Campaign management page
│   │   │   ├── AnalyticsPage.tsx        # Analytics dashboard page
│   │   │   ├── RedemptionPage.tsx       # Redemption monitoring page
│   │   │   ├── NotificationsPage.tsx    # Notifications management page
│   │   │   ├── SettingsPage.tsx         # System settings page
│   │   │   ├── ProfilePage.tsx          # User profile page
│   │   │   └── NotFoundPage.tsx         # 404 error page
│   │   │
│   │   ├── 📂 hooks/                    # Custom React Hooks
│   │   │   ├── useAuth.ts               # Authentication hook với token management
│   │   │   ├── useUsers.ts              # User management hook
│   │   │   ├── useRoles.ts              # Role management hook
│   │   │   ├── useCampaigns.ts          # Campaign operations hook
│   │   │   ├── useAnalytics.ts          # Analytics data hook
│   │   │   ├── useNotifications.ts      # Notification management hook
│   │   │   ├── useLocalStorage.ts       # Local storage management
│   │   │   ├── useDebounce.ts           # Debouncing hook
│   │   │   └── usePermissions.ts        # RBAC permissions hook
│   │   │
│   │   ├── 📂 store/                    # State Management (Redux Toolkit)
│   │   │   ├── index.ts                 # Store configuration
│   │   │   ├── 📂 slices/               # Redux slices
│   │   │   │   ├── authSlice.ts         # Authentication state
│   │   │   │   ├── userSlice.ts         # User management state
│   │   │   │   ├── campaignSlice.ts     # Campaign state
│   │   │   │   ├── analyticsSlice.ts    # Analytics state
│   │   │   │   └── notificationSlice.ts # Notification state
│   │   │   └── 📂 api/                  # RTK Query APIs
│   │   │       ├── authApi.ts           # Authentication API calls
│   │   │       ├── userApi.ts           # User management API
│   │   │       ├── campaignApi.ts       # Campaign API
│   │   │       └── analyticsApi.ts      # Analytics API
│   │   │
│   │   ├── 📂 utils/                    # Frontend Utilities
│   │   │   ├── api.ts                   # API client configuration
│   │   │   ├── auth.ts                  # Authentication helpers
│   │   │   ├── validation.ts            # Form validation utilities
│   │   │   ├── formatting.ts            # Data formatting helpers
│   │   │   ├── constants.ts             # Frontend constants
│   │   │   └── permissions.ts           # Permission checking utilities
│   │   │
│   │   ├── 📂 styles/                   # Styling theo Part10.1 Design System
│   │   │   ├── globals.css              # Global styles với design tokens
│   │   │   ├── components.css           # Component-specific styles
│   │   │   ├── variables.css            # CSS variables từ Part10.1.5 Design Tokens
│   │   │   └── themes.css               # Theme definitions
│   │   │
│   │   ├── 📂 assets/                   # Static Assets theo Part10.1.4 Icons
│   │   │   ├── 📂 icons/                # SVG icons
│   │   │   ├── 📂 images/               # Images và logos
│   │   │   └── 📂 fonts/                # Typography assets
│   │   │
│   │   └── 📂 types/                    # TypeScript Types
│   │       ├── auth.types.ts            # Authentication types
│   │       ├── user.types.ts            # User-related types
│   │       ├── campaign.types.ts        # Campaign types
│   │       ├── analytics.types.ts       # Analytics types
│   │       └── common.types.ts          # Shared type definitions
│   │
│   ├── 📂 tests/                        # Frontend Testing
│   │   ├── 📂 components/               # Component tests
│   │   ├── 📂 pages/                    # Page tests
│   │   ├── 📂 hooks/                    # Hook tests
│   │   └── 📂 e2e/                      # End-to-end tests
│   │
│   ├── 📂 public/                       # Public Assets
│   │   ├── index.html                   # Main HTML template
│   │   ├── favicon.ico                  # Site favicon
│   │   └── manifest.json                # PWA manifest
│   │
│   └── 📂 docs/                         # Frontend Documentation
│       ├── COMPONENT-LIBRARY.md         # Component documentation
│       ├── STYLING-GUIDE.md             # CSS và theming guide
│       └── TESTING-GUIDE.md             # Testing best practices
│
├── 📂 shared/                           # Shared Resources
│   ├── 📂 types/                        # Shared TypeScript types
│   │   ├── api.types.ts                 # API contract types
│   │   ├── auth.types.ts                # Authentication types
│   │   └── common.types.ts              # Common shared types
│   ├── 📂 constants/                    # Shared constants
│   │   ├── roles.constants.ts           # Role definitions
│   │   ├── permissions.constants.ts     # Permission constants
│   │   └── api.constants.ts             # API endpoints
│   └── 📂 utils/                        # Shared utilities
│       ├── validation.utils.ts          # Common validation
│       └── date.utils.ts                # Date formatting
│
├── 📂 deployment/                       # Deployment Configuration
│   ├── 📂 docker/                       # Docker files
│   │   ├── Dockerfile.backend           # Backend container
│   │   ├── Dockerfile.frontend          # Frontend container
│   │   └── docker-compose.yml           # Development stack
│   ├── 📂 kubernetes/                   # Kubernetes manifests
│   │   ├── 📂 backend/                  # Backend K8s manifests
│   │   │   ├── deployment.yaml          # Backend deployment
│   │   │   ├── service.yaml             # Backend service
│   │   │   └── configmap.yaml           # Backend configuration
│   │   ├── 📂 frontend/                 # Frontend K8s manifests
│   │   │   ├── deployment.yaml          # Frontend deployment
│   │   │   ├── service.yaml             # Frontend service
│   │   │   └── ingress.yaml             # Frontend ingress
│   │   └── 📂 shared/                   # Shared resources
│   │       ├── namespace.yaml           # Namespace definition
│   │       ├── secrets.yaml             # Shared secrets
│   │       └── configmap.yaml           # Shared configuration
│   └── 📂 helm/                         # Helm charts
│       ├── Chart.yaml                   # Helm chart definition
│       ├── values.yaml                  # Default values
│       └── 📂 templates/                # Helm templates
│           ├── backend-deployment.yaml  # Backend deployment template
│           ├── frontend-deployment.yaml # Frontend deployment template
│           └── ingress.yaml             # Ingress template
│
├── 📂 docs/                             # Project Documentation
│   ├── SETUP.md                         # Development setup guide
│   ├── API.md                           # Complete API documentation
│   ├── FRONTEND.md                      # Frontend development guide
│   ├── DEPLOYMENT.md                    # Production deployment guide
│   ├── USER-MANUAL.md                   # End-user manual
│   ├── ARCHITECTURE.md                  # System architecture overview
│   └── 📂 diagrams/                     # Architecture diagrams
│       ├── unified-portal-architecture.png # Overall system architecture
│       ├── navigation-flow.png          # Portal navigation flow
│       ├── user-flow-diagram.png        # User interaction flows
│       └── database-schema.png          # Database ERD
│
├── 📂 scripts/                          # Automation Scripts
│   ├── setup-dev.sh                     # Development environment setup
│   ├── build-all.sh                     # Build backend + frontend
│   ├── deploy-staging.sh                # Staging deployment
│   ├── deploy-production.sh             # Production deployment
│   ├── backup-data.sh                   # Database backup
│   ├── run-tests.sh                     # Run all tests
│   └── update-dependencies.sh           # Dependency updates
│
├── .env.example                         # Environment variables template
├── .gitignore                           # Git ignore rules
├── package.json                         # Root package.json (monorepo)
├── docker-compose.yml                   # Full stack development
├── README.md                            # Project overview và setup
└── CHANGELOG.md                         # Version history
```

---

# 🚀 Sub-Project 1: Identity & Authentication + Unified Admin Portal - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **🏗️ BACKEND DOMAIN** | | | | |
| Entities | `backend/src/domain/entities/User.ts` | Core User entity với business rules | Part04.1.4 User Management (FR-004) | Encapsulate user logic, data integrity |
| Entities | `backend/src/domain/entities/Role.ts` | Role entity với hierarchy support | Access_Control_Tree_Grok.md Integration | Support complex RBAC portal navigation |
| Entities | `backend/src/domain/entities/Permission.ts` | Permission entity với granular control | Part05.3 Security Requirements | Flexible RBAC system |
| Entities | `backend/src/domain/entities/Session.ts` | Session entity cho JWT management | Part07.2.5 Session Management | Secure multi-device portal sessions |
| Entities | `backend/src/domain/entities/OTPCode.ts` | OTP entity cho 2FA verification | Part04.1.5 OTP Verification (FR-005) | Two-factor security cho portal |
| Value Objects | `backend/src/domain/value-objects/Email.ts` | Email value object với validation | Part05.7 Input Validation | Consistent email handling |
| Value Objects | `backend/src/domain/value-objects/Phone.ts` | Phone value object với formatting | Part04.1.4 User Management | Standardized phone numbers |
| Value Objects | `backend/src/domain/value-objects/Password.ts` | Password value object với hashing | Part05.3.2 Password Hashing | Secure password handling |
| Repositories | `backend/src/domain/repositories/IUserRepository.ts` | User repository interface | Part06.2.1 Layered Architecture | Domain layer interface |
| Repositories | `backend/src/domain/repositories/IRoleRepository.ts` | Role repository interface | Part06.2.1 Layered Architecture | RBAC data access contract |
| Repositories | `backend/src/domain/repositories/ISessionRepository.ts` | Session repository interface | Part07.2.5 Session Management | Session storage contract |
| Repositories | `backend/src/domain/repositories/IOTPRepository.ts` | OTP repository interface | Part04.1.5 OTP Verification | OTP storage contract |
| Domain Services | `backend/src/domain/services/AuthenticationDomainService.ts` | Authentication business logic | Part04.1.3 User Authentication | Core auth domain logic |
| Domain Services | `backend/src/domain/services/PasswordHashingService.ts` | Password hashing domain service | Part05.3.2 Password Hashing | Secure password processing |
| Domain Services | `backend/src/domain/services/OTPGenerationService.ts` | OTP generation business logic | Part04.1.5 OTP Verification | OTP creation và validation |
| **🔄 BACKEND APPLICATION** | | | | |
| Use Cases | `backend/src/application/use-cases/authentication/LoginUseCase.ts` | Login workflow với OTP | Part04.1.3 User Authentication (FR-003) | Portal login flow |
| Use Cases | `backend/src/application/use-cases/authentication/LogoutUseCase.ts` | Logout và session cleanup | Part04.1.3 User Authentication | Secure portal logout |
| Use Cases | `backend/src/application/use-cases/authentication/RefreshTokenUseCase.ts` | JWT token refresh logic | Part07.2.5 Session Management | Portal session management |
| Use Cases | `backend/src/application/use-cases/authentication/VerifyOTPUseCase.ts` | OTP verification workflow | Part04.1.5 OTP Verification | 2FA portal security |
| Use Cases | `backend/src/application/use-cases/user-management/CreateUserUseCase.ts` | User creation với validation | Part04.1.4 User Management (FR-004) | Portal user management |
| Use Cases | `backend/src/application/use-cases/user-management/UpdateUserUseCase.ts` | User profile updates | Part04.1.4 User Management | Portal profile editing |
| Use Cases | `backend/src/application/use-cases/user-management/DeleteUserUseCase.ts` | Soft delete implementation | Part04.1.4 User Management | Safe user removal |
| Use Cases | `backend/src/application/use-cases/user-management/GetUserUseCase.ts` | User retrieval logic | Part04.1.4 User Management | Portal user details |
| Use Cases | `backend/src/application/use-cases/user-management/ListUsersUseCase.ts` | Paginated user listing | Part04.1.4 User Management | Portal user browsing |
| Use Cases | `backend/src/application/use-cases/role-management/AssignRoleUseCase.ts` | Role assignment logic | Access_Control_Tree_Grok.md | Portal RBAC management |
| Use Cases | `backend/src/application/use-cases/role-management/CreateRoleUseCase.ts` | Role creation workflow | Access_Control_Tree_Grok.md | Portal role creation |
| Use Cases | `backend/src/application/use-cases/role-management/UpdateRoleUseCase.ts` | Role modification logic | Access_Control_Tree_Grok.md | Portal role editing |
| Use Cases | `backend/src/application/use-cases/role-management/GetPermissionsUseCase.ts` | Permission matrix retrieval | Access_Control_Tree_Grok.md | Portal permission display |
| DTOs | `backend/src/application/dto/AuthenticationDTO.ts` | Authentication data transfer objects | Part08.1.1 Authentication APIs | API contract definitions |
| DTOs | `backend/src/application/dto/UserManagementDTO.ts` | User management DTOs | Part08.1.2 User Management APIs | Portal API contracts |
| DTOs | `backend/src/application/dto/RoleManagementDTO.ts` | Role management DTOs | Access_Control_Tree_Grok.md | RBAC API contracts |
| Ports | `backend/src/application/ports/IEmailService.ts` | Email service interface | Part09.1.1 Twilio Integration | External email integration |
| Ports | `backend/src/application/ports/ISMSService.ts` | SMS service interface | Part09.1.1 Twilio Integration | OTP SMS delivery |
| Ports | `backend/src/application/ports/ITokenService.ts` | JWT service interface | Part07.2.5 Session Management | Token management contract |
| **🏗️ BACKEND INFRASTRUCTURE** | | | | |
| Repositories | `backend/src/infrastructure/persistence/repositories/UserRepository.ts` | PostgreSQL user repository | Part07.1 Data Model Overview | User data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/RoleRepository.ts` | Role data access implementation | Part07.1 Data Model Overview | RBAC data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/SessionRepository.ts` | Redis session storage | Part07.2.5 Session Management | High-performance sessions |
| Repositories | `backend/src/infrastructure/persistence/repositories/OTPRepository.ts` | OTP code storage | Part07.2.5 Session Management | OTP persistence |
| Models | `backend/src/infrastructure/persistence/models/UserModel.ts` | Prisma user model | Part07.1 Data Model Overview | Database schema mapping |
| Models | `backend/src/infrastructure/persistence/models/RoleModel.ts` | Role database model | Part07.1 Data Model Overview | RBAC schema mapping |
| Models | `backend/src/infrastructure/persistence/models/SessionModel.ts` | Session model definition | Part07.2.5 Session Management | Session schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/001_create_users.sql` | User table creation | Part07.1 Data Model Overview | Database schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/002_create_roles.sql` | Roles và permissions tables | Access_Control_Tree_Grok.md | RBAC schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/003_create_sessions.sql` | Session management tables | Part07.2.5 Session Management | Session storage schema |
| External Services | `backend/src/infrastructure/external-services/EmailService.ts` | Twilio SendGrid integration | Part09.1.1 Twilio Integration | Email notification delivery |
| External Services | `backend/src/infrastructure/external-services/SMSService.ts` | Twilio SMS service | Part09.1.1 Twilio Integration | OTP SMS delivery |
| External Services | `backend/src/infrastructure/external-services/TokenService.ts` | JWT implementation | Part07.2.5 Session Management | Portal authentication tokens |
| Config | `backend/src/infrastructure/config/database.config.ts` | Database connection config | Part07.1 Data Model Overview | Database connectivity |
| Config | `backend/src/infrastructure/config/redis.config.ts` | Redis configuration | Part07.2.5 Session Management | Cache configuration |
| Config | `backend/src/infrastructure/config/app.config.ts` | General app settings | Part02.8 Technical Requirements | Application configuration |
| **🌐 BACKEND PRESENTATION** | | | | |
| Controllers | `backend/src/presentation/controllers/AuthController.ts` | Authentication endpoints | Part08.1.1 Authentication APIs | Portal auth API endpoints |
| Controllers | `backend/src/presentation/controllers/UserController.ts` | User management APIs | Part08.1.2 User Management APIs | Portal user API endpoints |
| Controllers | `backend/src/presentation/controllers/RoleController.ts` | Role management APIs | Access_Control_Tree_Grok.md | Portal RBAC API endpoints |
| Controllers | `backend/src/presentation/controllers/HealthController.ts` | Health check endpoint | Part15.3.1 Health Monitoring | System health monitoring |
| Middleware | `backend/src/presentation/middleware/AuthMiddleware.ts` | JWT verification | Part05.3 Security Requirements | Portal authentication guard |
| Middleware | `backend/src/presentation/middleware/RBACMiddleware.ts` | Permission checking | Access_Control_Tree_Grok.md | Portal authorization guard |
| Middleware | `backend/src/presentation/middleware/ValidationMiddleware.ts` | Request validation | Part05.7 Input Validation | API input validation |
| Middleware | `backend/src/presentation/middleware/LoggingMiddleware.ts` | Request logging | Part15.3.1 Health Monitoring | API request tracking |
| Routes | `backend/src/presentation/routes/auth.routes.ts` | Authentication routes | Part08.1.1 Authentication APIs | Auth endpoint routing |
| Routes | `backend/src/presentation/routes/users.routes.ts` | User management routes | Part08.1.2 User Management APIs | User endpoint routing |
| Routes | `backend/src/presentation/routes/roles.routes.ts` | Role management routes | Access_Control_Tree_Grok.md | RBAC endpoint routing |
| Validators | `backend/src/presentation/validators/AuthValidators.ts` | Login/register validation | Part05.7 Input Validation | Auth input validation |
| Validators | `backend/src/presentation/validators/UserValidators.ts` | User data validation | Part05.7 Input Validation | User input validation |
| Validators | `backend/src/presentation/validators/RoleValidators.ts` | Role validation rules | Access_Control_Tree_Grok.md | RBAC input validation |
| **🧰 BACKEND SHARED** | | | | |
| Constants | `backend/src/shared/constants/roles.constants.ts` | Role definitions | Access_Control_Tree_Grok.md | RBAC role hierarchy |
| Constants | `backend/src/shared/constants/permissions.constants.ts` | Permission constants | Access_Control_Tree_Grok.md | Portal permission definitions |
| Constants | `backend/src/shared/constants/error-codes.constants.ts` | Error code mappings | Part05.8 Error Handling | Standardized error codes |
| Exceptions | `backend/src/shared/exceptions/AuthenticationException.ts` | Auth-specific errors | Part05.8 Error Handling | Authentication error handling |
| Exceptions | `backend/src/shared/exceptions/AuthorizationException.ts` | RBAC errors | Part05.8 Error Handling | Authorization error handling |
| Exceptions | `backend/src/shared/exceptions/ValidationException.ts` | Validation errors | Part05.8 Error Handling | Input validation errors |
| Types | `backend/src/shared/types/auth.types.ts` | Authentication types | Part08.1.1 Authentication APIs | Auth TypeScript definitions |
| Types | `backend/src/shared/types/user.types.ts` | User-related types | Part08.1.2 User Management APIs | User TypeScript definitions |
| Types | `backend/src/shared/types/common.types.ts` | Shared type definitions | Part02.8 Technical Requirements | Common TypeScript types |
| Utils | `backend/src/shared/utils/logger.utils.ts` | Structured logging | Part15.3.1 Health Monitoring | Application logging |
| Utils | `backend/src/shared/utils/validation.utils.ts` | Common validation helpers | Part05.7 Input Validation | Validation utilities |
| Utils | `backend/src/shared/utils/crypto.utils.ts` | Encryption utilities | Part05.3.2 Password Hashing | Cryptographic functions |
| **🎨 FRONTEND LAYOUT** | | | | |
| Layout | `frontend/src/components/layout/MainLayout.tsx` | Overall portal layout | Part10.8.6 Navigation + Part10.3.1 Admin Portal | Portal structure foundation |
| Layout | `frontend/src/components/layout/Sidebar.tsx` | Navigation sidebar với RBAC | Part10.8.6 Navigation + Access_Control_Tree_Grok.md | Role-based navigation |
| Layout | `frontend/src/components/layout/TopBar.tsx` | Header với user info | Part10.3.1 Admin Portal + Part10.8.1 Buttons | Portal header interface |
| Layout | `frontend/src/components/layout/Breadcrumbs.tsx` | Navigation breadcrumbs | Part10.8.6 Navigation | Navigation context |
| Layout | `frontend/src/components/layout/MobileNavigation.tsx` | Mobile hamburger menu | Part10.8.6 Navigation + Part10.1.3 Spacing Grid | Mobile-responsive navigation |
| Layout | `frontend/src/components/layout/Footer.tsx` | Footer component | Part10.3.1 Admin Portal | Portal footer |
| **🧩 FRONTEND UI COMPONENTS** | | | | |
| UI Components | `frontend/src/components/ui/Button.tsx` | Button variants | Part10.8.1 Buttons + Part10.1.1 Color Palette | Consistent action elements |
| UI Components | `frontend/src/components/ui/Input.tsx` | Input components | Part10.8.2 Forms + Part10.1.2 Typography | Form input elements |
| UI Components | `frontend/src/components/ui/Card.tsx` | Card layouts | Part10.8.3 Cards + Part10.1.3 Spacing Grid | Content containers |
| UI Components | `frontend/src/components/ui/Table.tsx` | Data tables | Part10.8.4 Tables + Part10.1.7 Color Contrast | Data display components |
| UI Components | `frontend/src/components/ui/Modal.tsx` | Modal dialogs | Part10.8.5 Modals + Part10.1.4 Icons | Overlay interactions |
| UI Components | `frontend/src/components/ui/Select.tsx` | Dropdown selections | Part10.8.2 Forms | Selection inputs |
| UI Components | `frontend/src/components/ui/Checkbox.tsx` | Checkbox inputs | Part10.8.2 Forms | Boolean inputs |
| UI Components | `frontend/src/components/ui/RadioGroup.tsx` | Radio button groups | Part10.8.2 Forms | Single selection inputs |
| UI Components | `frontend/src/components/ui/Toast.tsx` | Toast notifications | Part10.1.1 Color Palette | User feedback |
| **📊 FRONTEND CHARTS** | | | | |
| Charts | `frontend/src/components/charts/LineChart.tsx` | Line charts cho analytics | Part10.8.7 Charts + Part10.2.5 Analytics Dashboard | Analytics visualization |
| Charts | `frontend/src/components/charts/BarChart.tsx` | Bar charts cho comparisons | Part10.8.7 Charts + Part10.1.1 Color Palette | Comparison visualization |
| Charts | `frontend/src/components/charts/PieChart.tsx` | Pie charts cho distributions | Part10.8.7 Charts | Distribution visualization |
| Charts | `frontend/src/components/charts/KPICard.tsx` | KPI metric cards | Part10.2.5.1 Overview Metrics + Part10.8.3 Cards | Key metrics display |
| Charts | `frontend/src/components/charts/ChartContainer.tsx` | Chart wrapper | Part10.8.7 Charts | Consistent chart styling |
| **👥 FRONTEND USER MANAGEMENT** | | | | |
| User Management | `frontend/src/components/user-management/UserList.tsx` | User listing với search | Part10.3.1 Admin Portal + Part10.8.4 Tables | User browsing interface |
| User Management | `frontend/src/components/user-management/UserForm.tsx` | User create/edit form | Part10.8.2 Forms + Part04.1.4 User Management | User editing interface |
| User Management | `frontend/src/components/user-management/UserDetails.tsx` | User profile view | Part10.8.3 Cards + Part04.1.4 User Management | User details display |
| User Management | `frontend/src/components/user-management/RoleMatrix.tsx` | Visual permission matrix | Part10.3.1 Admin Portal + Part10.1.7 Color Contrast | RBAC management interface |
| User Management | `frontend/src/components/user-management/UserBulkActions.tsx` | Bulk operations interface | Part10.8.1 Buttons + Part04.1.4 User Management | Bulk user operations |
| User Management | `frontend/src/components/user-management/UserStatusBadge.tsx` | Status indicators | Part10.1.1 Color Palette | User status display |
| **🎯 FRONTEND CAMPAIGN MANAGEMENT** | | | | |
| Campaign Management | `frontend/src/components/campaign-management/CampaignList.tsx` | Campaign listing | Part10.2.2.1 Campaign List + Part10.8.4 Tables | Campaign overview |
| Campaign Management | `frontend/src/components/campaign-management/CampaignForm.tsx` | Campaign creation form | Part10.2.2 Campaign Management + Part10.8.2 Forms | Campaign setup |
| Campaign Management | `frontend/src/components/campaign-management/QRPreview.tsx` | QR code preview modal | Part10.2.2 Campaign UI + Part10.8.5 Modals | QR verification |
| Campaign Management | `frontend/src/components/campaign-management/CampaignAnalytics.tsx` | Campaign metrics | Part10.2.2 Campaign Management + Part10.8.7 Charts | Campaign performance |
| Campaign Management | `frontend/src/components/campaign-management/CampaignStatus.tsx` | Status management | Part10.1.1 Color Palette | Campaign status indicators |
| **📈 FRONTEND ANALYTICS** | | | | |
| Analytics | `frontend/src/components/analytics/OverviewMetrics.tsx` | KPI overview | Part10.2.5.1 Overview Metrics + Part10.8.3 Cards | Business metrics display |
| Analytics | `frontend/src/components/analytics/FunnelAnalysis.tsx` | Conversion funnel | Part10.2.5.2 Funnel Analysis + Part10.8.7 Charts | Conversion tracking |
| Analytics | `frontend/src/components/analytics/CampaignPerformance.tsx` | Campaign metrics | Part10.2.5.3 Campaign Performance + Part10.8.7 Charts | Performance analysis |
| Analytics | `frontend/src/components/analytics/RealtimeUpdates.tsx` | Live data updates | Part10.2.5 Analytics Dashboard + Part04.2.8 Real Time Analytics | Real-time monitoring |
| Analytics | `frontend/src/components/analytics/ExportData.tsx` | Data export functionality | Part10.8.1 Buttons | Data extraction |
| **🎫 FRONTEND BARCODE MANAGEMENT** | | | | |
| Barcode Management | `frontend/src/components/barcode-management/BarcodePoolList.tsx` | Pool management | Part10.2.3.1 Barcode Pool List + Part10.8.4 Tables | Barcode inventory |
| Barcode Management | `frontend/src/components/barcode-management/ImportBarcodes.tsx` | Bulk import | Part10.2.3.2 Import Barcodes + Part10.8.2 Forms | Barcode import |
| Barcode Management | `frontend/src/components/barcode-management/GenerateBarcodes.tsx` | Generation wizard | Part10.2.3.3 Generate Barcodes + Part10.1.4 Icons | Barcode creation |
| Barcode Management | `frontend/src/components/barcode-management/BarcodePreview.tsx` | Visual preview | Part10.8.5 Modals | Barcode visualization |
| Barcode Management | `frontend/src/components/barcode-management/RedemptionMonitor.tsx` | Real-time tracking | Part10.2.3 Redemption UI + Part10.8.7 Charts | Redemption monitoring |
| **🛡️ FRONTEND FRAUD DETECTION** | | | | |
| Fraud Detection | `frontend/src/components/fraud-detection/FraudDashboard.tsx` | Fraud overview | Part10.2.4.1 Fraud Detection Wireframe + Part10.8.3 Cards | Security monitoring |
| Fraud Detection | `frontend/src/components/fraud-detection/FraudAlerts.tsx` | Alert management | Part10.2.4.2 Component Specs + Part10.1.1 Color Palette | Fraud notifications |
| Fraud Detection | `frontend/src/components/fraud-detection/FraudScoring.tsx` | Score visualization | Part10.2.4 Fraud Detection + Part10.8.7 Charts | Risk analysis |
| Fraud Detection | `frontend/src/components/fraud-detection/DeviceFingerprint.tsx` | Device tracking | Part10.2.4.3 Interactions + Part10.8.4 Tables | Device analytics |
| Fraud Detection | `frontend/src/components/fraud-detection/RiskAnalysis.tsx` | Risk assessment charts | Part10.8.7 Charts | Risk visualization |
| **🔔 FRONTEND NOTIFICATIONS** | | | | |
| Notifications | `frontend/src/components/notifications/NotificationList.tsx` | Message management | Part10.8.4 Tables | Communication hub |
| Notifications | `frontend/src/components/notifications/NotificationComposer.tsx` | Message creation | Part10.8.2 Forms | Message composition |
| Notifications | `frontend/src/components/notifications/NotificationTemplates.tsx` | Template library | Part10.8.3 Cards + Part10.1.2 Typography | Message templates |
| Notifications | `frontend/src/components/notifications/SendNotification.tsx` | Send interface | Part10.8.1 Buttons + Part10.8.5 Modals | Message delivery |
| **⚙️ FRONTEND SYSTEM SETTINGS** | | | | |
| System Settings | `frontend/src/components/system-settings/GeneralSettings.tsx` | System configuration | Part02.8 Technical Requirements + Part10.8.2 Forms | System administration |
| System Settings | `frontend/src/components/system-settings/APIConfiguration.tsx` | API management | Part08 API Design + Part10.8.4 Tables | API administration |
| System Settings | `frontend/src/components/system-settings/AuditLogs.tsx` | System audit trail | Part05.6 Auditability + Part10.8.4 Tables | Compliance monitoring |
| System Settings | `frontend/src/components/system-settings/SecuritySettings.tsx` | Security configuration | Part05.3 Security Requirements + Part10.8.2 Forms | Security administration |
| **👤 FRONTEND USER PORTAL** | | | | |
| User Portal | `frontend/src/components/user-portal/UserPortalDashboard.tsx` | Customer dashboard | Part10.5.1.1 Portal Dashboard Wireframe + Part10.5.1.2 Component Specs | Customer interface |
| User Portal | `frontend/src/components/user-portal/MyBarcodesCard.tsx` | User barcode display | Part10.5.1 Portal Dashboard + Part10.8.3 Cards | User QR access |
| User Portal | `frontend/src/components/user-portal/ProfileSettings.tsx` | Profile editing | Part10.5.4.1 Edit Profile + Part10.8.2 Forms | User profile management |
| User Portal | `frontend/src/components/user-portal/ConsentManagement.tsx` | Privacy controls | Part10.5 User Portal + Part05.9 Compliance Requirements | Privacy management |
| User Portal | `frontend/src/components/user-portal/RecommendationList.tsx` | Personalized offers | Part10.5.1 Portal Dashboard | Personalization features |
| **🎛️ FRONTEND SHARED COMPONENTS** | | | | |
| Shared | `frontend/src/components/shared/LoadingSpinner.tsx` | Loading states | Part10.1.4 Icons | Loading feedback |
| Shared | `frontend/src/components/shared/ErrorBoundary.tsx` | Error handling | Part05.8 Error Handling | Error management |
| Shared | `frontend/src/components/shared/ConfirmDialog.tsx` | Confirmation dialogs | Part10.8.5 Modals | User confirmation |
| Shared | `frontend/src/components/shared/DataTable.tsx` | Reusable data table | Part10.8.4 Tables | Data display |
| Shared | `frontend/src/components/shared/FileUpload.tsx` | File upload component | Part10.8.2 Forms | File handling |
| Shared | `frontend/src/components/shared/DateRangePicker.tsx` | Date range picker | Part10.8.2 Forms | Date selection |
| Shared | `frontend/src/components/shared/SearchBox.tsx` | Search input | Part10.8.2 Forms | Search functionality |
| Shared | `frontend/src/components/shared/StatusBadge.tsx` | Status indicators | Part10.1.1 Color Palette | Status display |
| Shared | `frontend/src/components/shared/ActionButton.tsx` | Action buttons | Part10.8.1 Buttons | Action elements |
| Shared | `frontend/src/components/shared/EmptyState.tsx` | Empty state display | Part10.1.4 Icons + Part10.1.2 Typography | Empty data feedback |
| **📄 FRONTEND PAGES** | | | | |
| Pages | `frontend/src/pages/LoginPage.tsx` | Login page | Part10.3.1 Admin Portal + Part04.1.3 User Authentication | Portal authentication |
| Pages | `frontend/src/pages/DashboardPage.tsx` | Main dashboard | Part10.2.1.1 Dashboard Wireframe | Portal overview |
| Pages | `frontend/src/pages/UsersPage.tsx` | User management page | Part10.3.1 Admin Portal | User administration |
| Pages | `frontend/src/pages/RolesPage.tsx` | Role management page | Access_Control_Tree_Grok.md | RBAC administration |
| Pages | `frontend/src/pages/CampaignsPage.tsx` | Campaign management page | Part10.2.2 Campaign Management | Campaign administration |
| Pages | `frontend/src/pages/AnalyticsPage.tsx` | Analytics dashboard page | Part10.2.5 Analytics Dashboard | Analytics interface |
| Pages | `frontend/src/pages/RedemptionPage.tsx` | Redemption monitoring page | Part10.2.3 Redemption UI | Redemption management |
| Pages | `frontend/src/pages/NotificationsPage.tsx` | Notifications management page | Part10.8.4 Tables | Communication management |
| Pages | `frontend/src/pages/SettingsPage.tsx` | System settings page | Part02.8 Technical Requirements | System configuration |
| Pages | `frontend/src/pages/ProfilePage.tsx` | User profile page | Part10.5.4 Profile Settings | User profile management |
| Pages | `frontend/src/pages/NotFoundPage.tsx` | 404 error page | Part05.8 Error Handling | Error handling |
| **🪝 FRONTEND HOOKS** | | | | |
| Hooks | `frontend/src/hooks/useAuth.ts` | Authentication hook | Part04.1.3 User Authentication | Auth state management |
| Hooks | `frontend/src/hooks/useUsers.ts` | User management hook | Part04.1.4 User Management | User operations |
| Hooks | `frontend/src/hooks/useRoles.ts` | Role management hook | Access_Control_Tree_Grok.md | RBAC operations |
| Hooks | `frontend/src/hooks/useCampaigns.ts` | Campaign operations hook | Part10.2.2 Campaign Management | Campaign operations |
| Hooks | `frontend/src/hooks/useAnalytics.ts` | Analytics data hook | Part10.2.5 Analytics Dashboard | Analytics data management |
| Hooks | `frontend/src/hooks/useNotifications.ts` | Notification management hook | Part04.2.10 Notification System | Notification operations |
| Hooks | `frontend/src/hooks/useLocalStorage.ts` | Local storage management | Part10.3.1 Admin Portal | Client storage |
| Hooks | `frontend/src/hooks/useDebounce.ts` | Debouncing hook | Part10.8.2 Forms | Input optimization |
| Hooks | `frontend/src/hooks/usePermissions.ts` | RBAC permissions hook | Access_Control_Tree_Grok.md | Permission checking |
| **🗃️ FRONTEND STATE MANAGEMENT** | | | | |
| Store | `frontend/src/store/index.ts` | Store configuration | Part10.3.1 Admin Portal | State management setup |
| Slices | `frontend/src/store/slices/authSlice.ts` | Authentication state | Part04.1.3 User Authentication | Auth state |
| Slices | `frontend/src/store/slices/userSlice.ts` | User management state | Part04.1.4 User Management | User state |
| Slices | `frontend/src/store/slices/campaignSlice.ts` | Campaign state | Part10.2.2 Campaign Management | Campaign state |
| Slices | `frontend/src/store/slices/analyticsSlice.ts` | Analytics state | Part10.2.5 Analytics Dashboard | Analytics state |
| Slices | `frontend/src/store/slices/notificationSlice.ts` | Notification state | Part04.2.10 Notification System | Notification state |
| API | `frontend/src/store/api/authApi.ts` | Authentication API calls | Part08.1.1 Authentication APIs | Auth API integration |
| API | `frontend/src/store/api/userApi.ts` | User management API | Part08.1.2 User Management APIs | User API integration |
| API | `frontend/src/store/api/campaignApi.ts` | Campaign API | Part08.2 Campaign APIs | Campaign API integration |
| API | `frontend/src/store/api/analyticsApi.ts` | Analytics API | Part08.3 Analytics APIs | Analytics API integration |
| **🛠️ FRONTEND UTILITIES** | | | | |
| Utils | `frontend/src/utils/api.ts` | API client configuration | Part08 API Design | API communication |
| Utils | `frontend/src/utils/auth.ts` | Authentication helpers | Part04.1.3 User Authentication | Auth utilities |
| Utils | `frontend/src/utils/validation.ts` | Form validation utilities | Part05.7 Input Validation | Validation helpers |
| Utils | `frontend/src/utils/formatting.ts` | Data formatting helpers | Part10.1.2 Typography | Data display utilities |
| Utils | `frontend/src/utils/constants.ts` | Frontend constants | Part02.8 Technical Requirements | Frontend constants |
| Utils | `frontend/src/utils/permissions.ts` | Permission checking utilities | Access_Control_Tree_Grok.md | Permission utilities |
| **🎨 FRONTEND STYLES** | | | | |
| Styles | `frontend/src/styles/globals.css` | Global styles | Part10.1 Design System | Design foundation |
| Styles | `frontend/src/styles/components.css` | Component-specific styles | Part10.8 Component Library | Component styling |
| Styles | `frontend/src/styles/variables.css` | CSS variables | Part10.1.5 Design Tokens | Design tokens |
| Styles | `frontend/src/styles/themes.css` | Theme definitions | Part10.1.1 Color Palette | Theme system |
| **📁 FRONTEND ASSETS** | | | | |
| Assets | `frontend/src/assets/icons/` | SVG icons | Part10.1.4 Icons And Imagery | Icon library |
| Assets | `frontend/src/assets/images/` | Images và logos | Part10.1.4 Icons And Imagery | Image assets |
| Assets | `frontend/src/assets/fonts/` | Typography assets | Part10.1.2 Typography | Font resources |
| **📝 FRONTEND TYPES** | | | | |
| Types | `frontend/src/types/auth.types.ts` | Authentication types | Part08.1.1 Authentication APIs | Auth TypeScript definitions |
| Types | `frontend/src/types/user.types.ts` | User-related types | Part08.1.2 User Management APIs | User TypeScript definitions |
| Types | `frontend/src/types/campaign.types.ts` | Campaign types | Part08.2 Campaign APIs | Campaign TypeScript definitions |
| Types | `frontend/src/types/analytics.types.ts` | Analytics types | Part08.3 Analytics APIs | Analytics TypeScript definitions |
| Types | `frontend/src/types/common.types.ts` | Shared type definitions | Part02.8 Technical Requirements | Common TypeScript types |
| **🧪 TESTING FILES** | | | | |
| Backend Tests | `backend/tests/unit/domain/entities/User.test.ts` | User entity unit tests | Part13.2.1 Unit Testing Framework | Domain logic testing |
| Backend Tests | `backend/tests/unit/application/use-cases/LoginUseCase.test.ts` | Login use case tests | Part13.2.1 Unit Testing Framework | Application logic testing |
| Backend Tests | `backend/tests/integration/controllers/AuthController.test.ts` | Auth API integration tests | Part13.3.1 API Testing | API endpoint testing |
| Backend Tests | `backend/tests/integration/repositories/UserRepository.test.ts` | User repository tests | Part13.3.2 Database Testing | Database integration testing |
| Backend Tests | `backend/tests/e2e/auth-flow.test.ts` | End-to-end auth tests | Part13.4.1 End-to-End Testing | Complete workflow testing |
| Frontend Tests | `frontend/tests/components/ui/Button.test.tsx` | Button component tests | Part13.2.1 Unit Testing Framework + Part10.8.1 Buttons | UI component testing |
| Frontend Tests | `frontend/tests/components/user-management/UserList.test.tsx` | UserList component tests | Part13.2.1 Unit Testing Framework + Part10.3.1 Admin Portal | Feature component testing |
| Frontend Tests | `frontend/tests/pages/LoginPage.test.tsx` | Login page tests | Part13.2.1 Unit Testing Framework + Part10.3.1 Admin Portal | Page component testing |
| Frontend Tests | `frontend/tests/hooks/useAuth.test.ts` | useAuth hook tests | Part13.2.1 Unit Testing Framework | Custom hook testing |
| Frontend Tests | `frontend/tests/e2e/user-management-flow.cy.ts` | User management E2E tests | Part13.4.1 End-to-End Testing | Complete user flow testing |
| Frontend Tests | `frontend/tests/e2e/portal-navigation.cy.ts` | Portal navigation E2E tests | Part13.4.1 End-to-End Testing + Part10.8.6 Navigation | Navigation flow testing |
| **🐳 DEPLOYMENT FILES** | | | | |
| Docker | `deployment/docker/Dockerfile.backend` | Backend container | Part14.2 Container Architecture | Backend containerization |
| Docker | `deployment/docker/Dockerfile.frontend` | Frontend container | Part14.2 Container Architecture | Frontend containerization |
| Docker | `docker-compose.yml` | Development stack | Part14.2 Container Architecture | Local development environment |
| Kubernetes | `deployment/kubernetes/backend/deployment.yaml` | Backend K8s deployment | Part14.3 Kubernetes Configuration | Backend orchestration |
| Kubernetes | `deployment/kubernetes/frontend/deployment.yaml` | Frontend K8s deployment | Part14.3 Kubernetes Configuration | Frontend orchestration |
| Kubernetes | `deployment/kubernetes/frontend/ingress.yaml` | Frontend ingress | Part14.3 Kubernetes Configuration | Traffic routing |
| Kubernetes | `deployment/kubernetes/shared/namespace.yaml` | Namespace definition | Part14.3 Kubernetes Configuration | Resource organization |
| Kubernetes | `deployment/kubernetes/shared/secrets.yaml` | Shared secrets | Part14.3 Kubernetes Configuration | Secret management |
| Kubernetes | `deployment/kubernetes/shared/configmap.yaml` | Shared configuration | Part14.3 Kubernetes Configuration | Configuration management |
| Helm | `deployment/helm/Chart.yaml` | Helm chart definition | Part14.3 Kubernetes Configuration | Helm package definition |
| Helm | `deployment/helm/values.yaml` | Default values | Part14.3 Kubernetes Configuration | Helm configuration |
| Helm | `deployment/helm/templates/backend-deployment.yaml` | Backend deployment template | Part14.3 Kubernetes Configuration | Backend Helm template |
| Helm | `deployment/helm/templates/frontend-deployment.yaml` | Frontend deployment template | Part14.3 Kubernetes Configuration | Frontend Helm template |
| Helm | `deployment/helm/templates/ingress.yaml` | Ingress template | Part14.3 Kubernetes Configuration | Ingress Helm template |
| **📚 DOCUMENTATION FILES** | | | | |
| Documentation | `docs/SETUP.md` | Development setup guide | Part02.8 Technical Requirements | Developer onboarding |
| Documentation | `docs/API.md` | Complete API documentation | Part08 API Design | API reference |
| Documentation | `docs/FRONTEND.md` | Frontend development guide | Part10 UI/UX Design | Frontend development guide |
| Documentation | `docs/DEPLOYMENT.md` | Production deployment guide | Part14 Deployment Architecture | Deployment instructions |
| Documentation | `docs/USER-MANUAL.md` | End-user manual | Part10.3.1 Admin Portal + Part10.5 User Portal | User guidance |
| Documentation | `docs/ARCHITECTURE.md` | System architecture overview | Part06 System Architecture | Architecture documentation |
| Documentation | `docs/diagrams/unified-portal-architecture.png` | Overall system architecture | Part06 System Architecture | Architecture visualization |
| Documentation | `docs/diagrams/navigation-flow.png` | Portal navigation flow | Part10.8.6 Navigation | Navigation documentation |
| Documentation | `docs/diagrams/user-flow-diagram.png` | User interaction flows | Part10.5 User Portal | User experience documentation |
| Documentation | `docs/diagrams/database-schema.png` | Database ERD | Part07.1 Data Model Overview | Database documentation |
| **⚙️ SCRIPTS FILES** | | | | |
| Scripts | `scripts/setup-dev.sh` | Development environment setup | Part02.8 Technical Requirements | Development automation |
| Scripts | `scripts/build-all.sh` | Build backend + frontend | Part14.2 Container Architecture | Build automation |
| Scripts | `scripts/deploy-staging.sh` | Staging deployment | Part14.1 Deployment Overview | Staging automation |
| Scripts | `scripts/deploy-production.sh` | Production deployment | Part14.1 Deployment Overview | Production automation |
| Scripts | `scripts/backup-data.sh` | Database backup | Part07.1 Data Model Overview | Data protection |
| Scripts | `scripts/run-tests.sh` | Run all tests | Part13 Testing Strategy | Testing automation |
| Scripts | `scripts/update-dependencies.sh` | Dependency updates | Part02.8 Technical Requirements | Maintenance automation |
| **🔧 CONFIGURATION FILES** | | | | |
| Config | `.env.example` | Environment variables template | Part02.8 Technical Requirements | Configuration template |
| Config | `.gitignore` | Git ignore rules | Part06B.6.1 Folder Structure | Version control |
| Config | `package.json` | Root package.json (monorepo) | Part02.8 Technical Requirements | Project definition |
| Config | `README.md` | Project overview và setup | Part02.8 Technical Requirements | Project documentation |
| Config | `CHANGELOG.md` | Version history | Part06B.5.3 Versioning Strategy | Version tracking |
| Config | `backend/package.json` | Backend dependencies | Part02.8 Technical Requirements | Backend project definition |
| Config | `frontend/package.json` | Frontend dependencies | Part02.8 Technical Requirements | Frontend project definition |
| Config | `backend/tsconfig.json` | Backend TypeScript config | Part02.8 Technical Requirements | Backend compilation |
| Config | `frontend/tsconfig.json` | Frontend TypeScript config | Part02.8 Technical Requirements | Frontend compilation |
| Config | `backend/eslint.config.js` | Backend ESLint config | Part06B.7.1 Code Comments | Backend code quality |
| Config | `frontend/eslint.config.js` | Frontend ESLint config | Part06B.7.1 Code Comments | Frontend code quality |
| Config | `backend/jest.config.js` | Backend Jest config | Part13.2.1 Unit Testing Framework | Backend testing setup |
| Config | `frontend/jest.config.js` | Frontend Jest config | Part13.2.1 Unit Testing Framework | Frontend testing setup |
| Config | `frontend/tailwind.config.js` | Tailwind CSS config | Part10.1.5 Design Tokens | Styling configuration |
| Config | `frontend/vite.config.ts` | Vite build config | Part02.8 Technical Requirements | Frontend build setup |
| Config | `backend/prisma/schema.prisma` | Database schema | Part07.1 Data Model Overview | Database definition |
| Config | `.github/workflows/ci.yml` | CI workflow | Part15.1 CI/CD Pipeline | Continuous integration |
| Config | `.github/workflows/cd.yml` | CD workflow | Part15.1 CI/CD Pipeline | Continuous deployment |
| Config | `.storybook/main.js` | Storybook configuration | Part10.9 Prototyping Testing | Component documentation |

---

## 📋 Roadmap Chi Tiết - Checklist Implementation

### **1. SETUP & CHUẨN BỊ DỰ ÁN** ⚙️

#### **1.1 Khởi tạo dự án monorepo**
- [ ] **Tạo repository và cấu trúc monorepo**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + Part10.3.1 Admin Portal UI
  - *Mô tả*: Thiết lập monorepo với backend (Clean Architecture) và frontend (Unified Portal)
  - *File tạo*: `package.json`, `README.md`, `.gitignore`, folder structure
  - *Ý nghĩa*: Single repository cho complete Identity + Portal solution, easier maintenance

- [ ] **Cấu hình workspace và shared dependencies**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Setup workspace với shared TypeScript configs, linting, shared types
  - *File tạo*: `tsconfig.json`, `eslint.config.js`, `shared/types/`
  - *Ý nghĩa*: Consistent development experience across backend/frontend, code reuse

- [ ] **Setup Docker multi-stage builds**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14 Deployment Architecture  
  - *Mô tả*: Multi-stage Dockerfile cho backend + frontend với optimization
  - *File tạo*: `deployment/docker/Dockerfile.backend`, `deployment/docker/Dockerfile.frontend`
  - *Ý nghĩa*: Efficient production containers với separate backend/frontend serving

#### **1.2 Database Setup**
- [ ] **Thiết lập PostgreSQL cho user data**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview
  - *Mô tả*: PostgreSQL 15+ container với user management schema
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/001_create_users.sql`
  - *Ý nghĩa*: ACID compliance cho sensitive user data và RBAC information

- [ ] **Thiết lập Redis cho sessions và cache**  
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Redis 7+ cho JWT sessions, OTP codes, portal cache
  - *File tạo*: `backend/src/infrastructure/config/redis.config.ts`
  - *Ý nghĩa*: High-performance session management và UI state caching

### **2. BACKEND IMPLEMENTATION** 🗂️

#### **2.1 Domain Layer Implementation**
- [ ] **Implement User Entity với business rules**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004)
  - *Mô tả*: Core User entity với validation, status management, audit trail
  - *File tạo*: `backend/src/domain/entities/User.ts`
  - *Ý nghĩa*: Encapsulate user business logic, ensure data integrity cho portal users

- [ ] **Implement Role Entity với hierarchy**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration  
  - *Mô tả*: Role entity với 6-level hierarchy (Platform Admin → Customer Guest)
  - *File tạo*: `backend/src/domain/entities/Role.ts`
  - *Ý nghĩa*: Support complex portal navigation permissions

- [ ] **Implement Permission Entity với granular control**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements
  - *Mô tả*: Fine-grained permissions cho portal modules (User Mgmt, Campaign, Analytics, etc.)
  - *File tạo*: `backend/src/domain/entities/Permission.ts`
  - *Ý nghĩa*: Flexible RBAC system supporting portal feature access

- [ ] **Implement Session Entity cho JWT management**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Session entity với refresh token, device tracking, expiration
  - *File tạo*: `backend/src/domain/entities/Session.ts`
  - *Ý nghĩa*: Secure session management với portal multi-device support

- [ ] **Implement OTP Entity cho 2FA**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.5 OTP Verification (FR-005)
  - *Mô tả*: OTP entity với expiration, attempt tracking, code generation
  - *File tạo*: `backend/src/domain/entities/OTPCode.ts`
  - *Ý nghĩa*: Enhanced security cho portal login flow

#### **2.2 Value Objects Implementation**
- [ ] **Implement Email Value Object với validation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.7 Input Validation
  - *Mô tả*: Email value object với regex validation, normalization
  - *File tạo*: `backend/src/domain/value-objects/Email.ts`
  - *Ý nghĩa*: Consistent email handling across portal system

- [ ] **Implement Phone Value Object với format**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management
  - *Mô tả*: Phone value object với international format, validation
  - *File tạo*: `backend/src/domain/value-objects/Phone.ts`
  - *Ý nghĩa*: Standardized phone number handling cho SMS notifications

- [ ] **Implement Password Value Object với hash**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3.2 Password Hashing
  - *Mô tả*: Password value object với bcrypt hashing, strength validation
  - *File tạo*: `backend/src/domain/value-objects/Password.ts`
  - *Ý nghĩa*: Secure password handling cho portal authentication

#### **2.3 Application Layer Implementation**
- [ ] **Implement LoginUseCase với OTP flow**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication (FR-003)
  - *Mô tả*: Login use case với email/password + OTP verification
  - *File tạo*: `backend/src/application/use-cases/authentication/LoginUseCase.ts`
  - *Ý nghĩa*: Secure portal login với 2FA support

- [ ] **Implement CreateUserUseCase với validation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004)
  - *Mô tả*: User creation use case với role assignment, email verification
  - *File tạo*: `backend/src/application/use-cases/user-management/CreateUserUseCase.ts`
  - *Ý nghĩa*: Portal user creation với proper validation và RBAC

- [ ] **Implement ListUsersUseCase với pagination**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management + Part10.8.4 Tables
  - *Mô tả*: User listing với search, filter, pagination cho portal table
  - *File tạo*: `backend/src/application/use-cases/user-management/ListUsersUseCase.ts`
  - *Ý nghĩa*: Efficient user browsing trong portal interface

#### **2.4 Infrastructure Layer Implementation**
- [ ] **Implement UserRepository với PostgreSQL**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview
  - *Mô tả*: User repository implementation với Prisma ORM
  - *File tạo*: `backend/src/infrastructure/persistence/repositories/UserRepository.ts`
  - *Ý nghĩa*: Data access layer cho portal user operations

- [ ] **Implement SessionRepository với Redis**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Session repository với Redis storage, TTL management
  - *File tạo*: `backend/src/infrastructure/persistence/repositories/SessionRepository.ts`
  - *Ý nghĩa*: High-performance session storage cho portal

#### **2.5 Presentation Layer (API) Implementation**
- [ ] **Implement Authentication Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs  
  - *Mô tả*: REST APIs cho portal login, logout, token management
  - *File tạo*: `backend/src/presentation/controllers/AuthController.ts`
  - *Ý nghĩa*: API endpoints supporting portal authentication flows

- [ ] **Implement User Management Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.2 User Management APIs
  - *Mô tả*: REST APIs với pagination, search, filtering cho portal UI
  - *File tạo*: `backend/src/presentation/controllers/UserController.ts`
  - *Ý nghĩa*: Complete API support cho portal user management features

- [ ] **Implement RBAC Middleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements + Access_Control_Tree_Grok.md
  - *Mô tả*: Permission checking middleware cho portal routes
  - *File tạo*: `backend/src/presentation/middleware/RBACMiddleware.ts`
  - *Ý nghĩa*: Enforce access control cho portal functionality

### **3. FRONTEND IMPLEMENTATION - UNIFIED PORTAL** 🖥️

#### **3.1 Design System Foundation theo Part10.1**
- [ ] **Setup Design Tokens từ Part10.1.5**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.5 Design Tokens + Part10.1.1 Color Palette
  - *Mô tả*: CSS variables và Tailwind config theo Part10 design system
  - *File tạo*: `frontend/src/styles/variables.css`, `tailwind.config.js`
  - *Ý nghĩa*: Consistent visual foundation cho toàn bộ portal

- [ ] **Implement Typography System theo Part10.1.2**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.2 Typography
  - *Mô tả*: Typography components và utilities theo Part10 specs
  - *File tạo*: `frontend/src/styles/typography.css`, typography utilities
  - *Ý nghĩa*: Consistent text styling across portal

- [ ] **Setup Spacing và Grid System theo Part10.1.3**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.3 Spacing Grid
  - *Mô tả*: Spacing utilities và responsive grid theo Part10 specifications
  - *File tạo*: `frontend/src/styles/spacing.css`, grid utilities
  - *Ý nghĩa*: Consistent layout spacing across portal components

#### **3.2 Core Portal Infrastructure theo Part10.3.1 & Part10.8.6**
- [ ] **Implement MainLayout theo Part10.8.6 Navigation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation + Part10.3.1 Admin Portal UI
  - *Mô tả*: Overall layout structure với sidebar, topbar, content area
  - *File tạo*: `frontend/src/components/layout/MainLayout.tsx`
  - *Ý nghĩa*: Consistent portal structure supporting all admin modules

- [ ] **Implement Sidebar Navigation với RBAC**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation + Access_Control_Tree_Grok.md
  - *Mô tả*: Role-based navigation menu theo Part10 navigation specs
  - *File tạo*: `frontend/src/components/layout/Sidebar.tsx`
  - *Ý nghĩa*: Intelligent navigation adapting to user permissions

- [ ] **Implement TopBar với notifications**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.8.1 Buttons
  - *Mô tả*: Header với user info, notifications bell, logout button
  - *File tạo*: `frontend/src/components/layout/TopBar.tsx`
  - *Ý nghĩa*: Portal header với consistent user experience

#### **3.3 Component Library Implementation theo Part10.8**
- [ ] **Implement Button Components theo Part10.8.1**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.1 Buttons + Part10.1.1 Color Palette
  - *Mô tả*: Primary, secondary, outline button variants với states
  - *File tạo*: `frontend/src/components/ui/Button.tsx`
  - *Ý nghĩa*: Consistent action elements across portal

- [ ] **Implement Form Components theo Part10.8.2**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.2 Forms + Part10.1.2 Typography
  - *Mô tả*: Input, select, checkbox components với validation
  - *File tạo*: `frontend/src/components/ui/Input.tsx`, `Select.tsx`, `Checkbox.tsx`
  - *Ý nghĩa*: Consistent input handling với validation feedback

- [ ] **Implement Table Components theo Part10.8.4**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.4 Tables + Part10.1.7 Color Contrast
  - *Mô tả*: Data tables với sort, filter, pagination, accessibility
  - *File tạo*: `frontend/src/components/ui/Table.tsx`
  - *Ý nghĩa*: Consistent data display với accessibility compliance

#### **3.4 Feature Modules Implementation theo Part10.2 & Part10.5**
- [ ] **Implement User Management Module theo Part10.3.1**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.8.4 Tables
  - *Mô tả*: UserList, UserForm, UserDetails, RoleMatrix components
  - *File tạo*: `frontend/src/components/user-management/` directory
  - *Ý nghĩa*: Complete user administration interface

- [ ] **Implement Campaign Management Module theo Part10.2.2**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.2 Campaign Management + Part10.8.2 Forms
  - *Mô tả*: CampaignList, CampaignForm, QRPreview components
  - *File tạo*: `frontend/src/components/campaign-management/` directory
  - *Ý nghĩa*: Campaign administration interface

- [ ] **Implement Analytics Dashboard Module theo Part10.2.5**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.5 Analytics Dashboard + Part10.8.7 Charts
  - *Mô tả*: OverviewMetrics, FunnelAnalysis, CampaignPerformance components
  - *File tạo*: `frontend/src/components/analytics/` directory
  - *Ý nghĩa*: Business intelligence interface

### **4. TESTING IMPLEMENTATION** 🧪

#### **4.1 Backend Testing**
- [ ] **Write comprehensive unit tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Domain entities, use cases, repositories với >90% coverage
  - *File tạo*: `backend/tests/unit/` test files
  - *Ý nghĩa*: Ensure backend reliability cho portal functionality

- [ ] **Write API integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing
  - *Mô tả*: Complete API workflows, authentication, RBAC testing
  - *File tạo*: `backend/tests/integration/` test files
  - *Ý nghĩa*: Verify backend services supporting portal

#### **4.2 Frontend Testing theo Part10.9**
- [ ] **Write component unit tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part10.9 Testing
  - *Mô tả*: Individual component testing với React Testing Library
  - *File tạo*: `frontend/tests/components/` test files
  - *Ý nghĩa*: Ensure portal UI component reliability

- [ ] **Write Storybook documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8 Component Library + Part10.9 Prototyping
  - *Mô tả*: Component documentation theo Part10 specifications
  - *File tạo*: `.storybook/` configuration, component stories
  - *Ý nghĩa*: Developer reference cho Part10 components

### **5. DEPLOYMENT & DEVOPS** 🚀

#### **5.1 Containerization**
- [ ] **Create multi-stage Dockerfiles**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Optimized containers cho backend service và frontend portal
  - *File tạo*: `deployment/docker/Dockerfile.backend`, `Dockerfile.frontend`
  - *Ý nghĩa*: Efficient deployment artifacts cho production

- [ ] **Create Docker Compose development stack**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Complete development environment với databases, services
  - *File tạo*: `docker-compose.yml`
  - *Ý nghĩa*: Easy local development setup cho full stack

#### **5.2 Kubernetes Deployment**
- [ ] **Create K8s manifests cho backend/frontend**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Separate deployments với shared ConfigMaps, Secrets
  - *File tạo*: `deployment/kubernetes/backend/`, `frontend/` manifests
  - *Ý nghĩa*: Production-ready orchestration với scaling capabilities

#### **5.3 CI/CD Pipeline**
- [ ] **Setup GitHub Actions cho monorepo**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: Parallel builds, testing, deployment cho backend + frontend
  - *File tạo*: `.github/workflows/` CI/CD workflows
  - *Ý nghĩa*: Efficient automated delivery cho complete solution

### **6. MONITORING & OBSERVABILITY** 📊

#### **6.1 Backend Monitoring**
- [ ] **Setup API monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
  - *Mô tả*: Health checks, metrics collection, error tracking
  - *File tạo*: Monitoring configuration, health endpoints
  - *Ý nghĩa*: Backend reliability monitoring

#### **6.2 Frontend Monitoring theo Part10.3.1**
- [ ] **Setup portal performance monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring + Part10.3.1 Portal
  - *Mô tả*: Core Web Vitals, user experience metrics, error tracking
  - *File tạo*: Performance monitoring utilities
  - *Ý nghĩa*: Portal UX optimization insights

### **7. DOCUMENTATION & DELIVERY** 📚

#### **7.1 Technical Documentation**
- [ ] **Create portal user manual**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.5 User Portal
  - *Mô tả*: Complete guide cho tất cả portal features, role-specific instructions
  - *File tạo*: `docs/USER-MANUAL.md`
  - *Ý nghĩa*: User adoption support cho unified portal

- [ ] **Write developer documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06 System Architecture + Part10.8 Component Library
  - *Mô tả*: Architecture overview, API docs, component library documentation
  - *File tạo*: `docs/ARCHITECTURE.md`, `docs/FRONTEND.md`
  - *Ý nghĩa*: Developer onboarding và maintenance support

---

## 🎯 Kết Luận

**Tổng số files được map**: 200+ files với đầy đủ SRS references  
**Part10 UI/UX Integration**: 80+ references đầy đủ  
**Backend Clean Architecture**: 60+ files với proper layering  
**Frontend Unified Portal**: 100+ components với design system compliance  
**Testing Strategy**: 40+ test files coverage  
**Deployment & DevOps**: 20+ infrastructure files  
**Documentation**: 15+ comprehensive docs  

**Estimated timeline**: 10-12 tuần cho 1 team (4-5 developers)  
**SRS coverage**: 100% cho Identity domain + Complete Unified Portal  

**Ready for unified development! Single portal, multiple services, seamless experience theo đầy đủ SRS specifications! 🚀**
