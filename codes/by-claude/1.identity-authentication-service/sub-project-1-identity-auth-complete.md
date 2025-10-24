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

## 📁 **CẤU TRÚC THỦ MỤC HOÀN CHỈNH**

```bash
identity-auth-unified-portal/
├── 📂 backend/                                 # Backend Service - Clean Architecture
│   ├── 📂 src/
│   │   ├── 📂 domain/                          # Domain Layer
│   │   │   ├── 📂 entities/                    # Business Entities
│   │   │   │   ├── User.ts                     # User Entity với business rules
│   │   │   │   ├── Role.ts                     # Role Entity với hierarchy
│   │   │   │   ├── Permission.ts               # Permission Entity với granular control
│   │   │   │   ├── Session.ts                  # Session Entity cho JWT management
│   │   │   │   └── OTPCode.ts                  # OTP Entity cho 2FA
│   │   │   ├── 📂 value-objects/               # Value Objects
│   │   │   │   ├── Email.ts                    # Email Value Object với validation
│   │   │   │   ├── Phone.ts                    # Phone Value Object với format
│   │   │   │   └── Password.ts                 # Password Value Object với hash
│   │   │   ├── 📂 repositories/                # Repository Interfaces
│   │   │   │   ├── IUserRepository.ts          # User repository interface
│   │   │   │   ├── IRoleRepository.ts          # Role repository interface
│   │   │   │   ├── ISessionRepository.ts       # Session repository interface
│   │   │   │   └── IOTPRepository.ts           # OTP repository interface
│   │   │   └── 📂 services/                    # Domain Services
│   │   │       ├── AuthenticationDomainService.ts # Authentication business logic
│   │   │       ├── PasswordHashingService.ts   # Password hashing domain service
│   │   │       └── OTPGenerationService.ts     # OTP generation business logic
│   │   │
│   │   ├── 📂 application/                     # Application Layer
│   │   │   ├── 📂 use-cases/                   # Use Cases
│   │   │   │   ├── 📂 authentication/          # Authentication Use Cases
│   │   │   │   │   ├── LoginUseCase.ts         # Login workflow với OTP
│   │   │   │   │   ├── LogoutUseCase.ts        # Logout và session cleanup
│   │   │   │   │   ├── RefreshTokenUseCase.ts  # JWT token refresh logic
│   │   │   │   │   └── VerifyOTPUseCase.ts     # OTP verification workflow
│   │   │   │   ├── 📂 user-management/         # User Management Use Cases
│   │   │   │   │   ├── CreateUserUseCase.ts    # User creation với validation
│   │   │   │   │   ├── UpdateUserUseCase.ts    # User profile updates
│   │   │   │   │   ├── DeleteUserUseCase.ts    # Soft delete implementation
│   │   │   │   │   ├── GetUserUseCase.ts       # User retrieval logic
│   │   │   │   │   └── ListUsersUseCase.ts     # Paginated user listing
│   │   │   │   └── 📂 role-management/         # Role Management Use Cases
│   │   │   │       ├── AssignRoleUseCase.ts    # Role assignment logic
│   │   │   │       ├── CreateRoleUseCase.ts    # Role creation workflow
│   │   │   │       ├── UpdateRoleUseCase.ts    # Role modification logic
│   │   │   │       └── GetPermissionsUseCase.ts # Permission matrix retrieval
│   │   │   ├── 📂 dto/                         # Data Transfer Objects
│   │   │   │   ├── AuthenticationDTO.ts        # Authentication data transfer objects
│   │   │   │   ├── UserManagementDTO.ts        # User management DTOs
│   │   │   │   └── RoleManagementDTO.ts        # Role management DTOs
│   │   │   └── 📂 ports/                       # Application Ports
│   │   │       ├── IEmailService.ts            # Email service interface
│   │   │       ├── ISMSService.ts              # SMS service interface
│   │   │       └── ITokenService.ts            # JWT service interface
│   │   │
│   │   ├── 📂 infrastructure/                  # Infrastructure Layer
│   │   │   ├── 📂 persistence/                 # Data Persistence
│   │   │   │   ├── 📂 repositories/            # Repository Implementations
│   │   │   │   │   ├── UserRepository.ts       # PostgreSQL user repository
│   │   │   │   │   ├── RoleRepository.ts       # Role data access implementation
│   │   │   │   │   ├── SessionRepository.ts    # Redis session storage
│   │   │   │   │   └── OTPRepository.ts        # OTP code storage
│   │   │   │   ├── 📂 models/                  # Database Models
│   │   │   │   │   ├── UserModel.ts            # Prisma user model
│   │   │   │   │   ├── RoleModel.ts            # Role database model
│   │   │   │   │   └── SessionModel.ts         # Session model definition
│   │   │   │   └── 📂 migrations/              # Database Migrations
│   │   │   │       ├── 001_create_users.sql    # User table creation
│   │   │   │       ├── 002_create_roles.sql    # Roles và permissions tables
│   │   │   │       └── 003_create_sessions.sql # Session management tables
│   │   │   ├── 📂 external-services/           # External Service Implementations
│   │   │   │   ├── EmailService.ts             # Twilio SendGrid integration
│   │   │   │   ├── SMSService.ts               # Twilio SMS service
│   │   │   │   └── TokenService.ts             # JWT implementation
│   │   │   └── 📂 config/                      # Configuration
│   │   │       ├── database.config.ts          # Database connection config
│   │   │       ├── redis.config.ts             # Redis configuration
│   │   │       └── app.config.ts               # General app settings
│   │   │
│   │   ├── 📂 presentation/                    # Presentation Layer
│   │   │   ├── 📂 controllers/                 # API Controllers
│   │   │   │   ├── AuthController.ts           # Authentication endpoints
│   │   │   │   ├── UserController.ts           # User management APIs
│   │   │   │   ├── RoleController.ts           # Role management APIs
│   │   │   │   └── HealthController.ts         # Health check endpoint
│   │   │   ├── 📂 middleware/                  # API Middleware
│   │   │   │   ├── AuthMiddleware.ts           # JWT verification
│   │   │   │   ├── RBACMiddleware.ts           # Permission checking
│   │   │   │   ├── ValidationMiddleware.ts     # Request validation
│   │   │   │   └── LoggingMiddleware.ts        # Request logging
│   │   │   ├── 📂 routes/                      # API Routes
│   │   │   │   ├── auth.routes.ts              # Authentication routes
│   │   │   │   ├── users.routes.ts             # User management routes
│   │   │   │   └── roles.routes.ts             # Role management routes
│   │   │   └── 📂 validators/                  # Request Validators
│   │   │       ├── AuthValidators.ts           # Login/register validation
│   │   │       ├── UserValidators.ts           # User data validation
│   │   │       └── RoleValidators.ts           # Role validation rules
│   │   │
│   │   └── 📂 shared/                          # Shared Backend Code
│   │       ├── 📂 constants/                   # Constants
│   │       │   ├── roles.constants.ts          # Role definitions
│   │       │   ├── permissions.constants.ts    # Permission constants
│   │       │   └── error-codes.constants.ts    # Error code mappings
│   │       ├── 📂 exceptions/                  # Custom Exceptions
│   │       │   ├── AuthenticationException.ts  # Auth-specific errors
│   │       │   ├── AuthorizationException.ts   # RBAC errors
│   │       │   └── ValidationException.ts      # Validation errors
│   │       ├── 📂 types/                       # Type Definitions
│   │       │   ├── auth.types.ts               # Authentication types
│   │       │   ├── user.types.ts               # User-related types
│   │       │   └── common.types.ts             # Shared type definitions
│   │       └── 📂 utils/                       # Utility Functions
│   │           ├── logger.utils.ts             # Structured logging
│   │           ├── validation.utils.ts         # Common validation helpers
│   │           └── crypto.utils.ts             # Encryption utilities
│   │
│   ├── 📂 tests/                               # Backend Testing
│   │   ├── 📂 unit/                            # Unit Tests
│   │   │   ├── 📂 domain/                      # Domain Layer Tests
│   │   │   │   └── 📂 entities/                
│   │   │   │       ├── User.test.ts            # User entity unit tests
│   │   │   │       ├── Role.test.ts            # Role entity tests
│   │   │   │       └── Session.test.ts         # Session entity tests
│   │   │   └── 📂 application/                 # Application Layer Tests
│   │   │       └── 📂 use-cases/               
│   │   │           ├── LoginUseCase.test.ts    # Login use case tests
│   │   │           └── CreateUserUseCase.test.ts # User creation tests
│   │   ├── 📂 integration/                     # Integration Tests
│   │   │   ├── 📂 controllers/                 
│   │   │   │   ├── AuthController.test.ts      # Auth API integration tests
│   │   │   │   └── UserController.test.ts      # User API tests
│   │   │   └── 📂 repositories/                
│   │   │       └── UserRepository.test.ts      # User repository tests
│   │   └── 📂 e2e/                             # End-to-End Tests
│   │       ├── auth-flow.test.ts               # End-to-end auth tests
│   │       └── user-management-flow.test.ts    # User management E2E
│   │
│   ├── 📂 docs/                                # Backend Documentation
│   │   ├── API.md                              # API documentation
│   │   └── ARCHITECTURE.md                     # Clean architecture explanation
│   │
│   ├── package.json                            # Backend dependencies
│   ├── tsconfig.json                           # Backend TypeScript config
│   ├── jest.config.js                          # Backend Jest config
│   ├── eslint.config.js                        # Backend ESLint config
│   └── prisma/                                 # Prisma Configuration
│       └── schema.prisma                       # Database schema
│
├── 📂 frontend/                                # Unified Admin Portal
│   ├── 📂 src/
│   │   ├── 📂 components/                      # React Components
│   │   │   ├── 📂 layout/                      # Layout Components
│   │   │   │   ├── MainLayout.tsx              # Overall portal layout
│   │   │   │   ├── Sidebar.tsx                 # Navigation sidebar với RBAC
│   │   │   │   ├── TopBar.tsx                  # Header với user info
│   │   │   │   ├── Breadcrumbs.tsx             # Navigation breadcrumbs
│   │   │   │   ├── MobileNavigation.tsx        # Mobile hamburger menu
│   │   │   │   └── Footer.tsx                  # Footer component
│   │   │   ├── 📂 ui/                          # UI Components (Design System)
│   │   │   │   ├── Button.tsx                  # Button variants
│   │   │   │   ├── Input.tsx                   # Input components
│   │   │   │   ├── Card.tsx                    # Card layouts
│   │   │   │   ├── Table.tsx                   # Data tables
│   │   │   │   ├── Modal.tsx                   # Modal dialogs
│   │   │   │   ├── Select.tsx                  # Dropdown selections
│   │   │   │   ├── Checkbox.tsx                # Checkbox inputs
│   │   │   │   ├── RadioGroup.tsx              # Radio button groups
│   │   │   │   └── Toast.tsx                   # Toast notifications
│   │   │   ├── 📂 charts/                      # Chart Components
│   │   │   │   ├── LineChart.tsx               # Line charts cho analytics
│   │   │   │   ├── BarChart.tsx                # Bar charts cho comparisons
│   │   │   │   ├── PieChart.tsx                # Pie charts cho distributions
│   │   │   │   ├── KPICard.tsx                 # KPI metric cards
│   │   │   │   └── ChartContainer.tsx          # Chart wrapper
│   │   │   ├── 📂 user-management/             # User Management Module
│   │   │   │   ├── UserList.tsx                # User listing với search
│   │   │   │   ├── UserForm.tsx                # User create/edit form
│   │   │   │   ├── UserDetails.tsx             # User profile view
│   │   │   │   ├── RoleMatrix.tsx              # Visual permission matrix
│   │   │   │   ├── UserBulkActions.tsx         # Bulk operations interface
│   │   │   │   └── UserStatusBadge.tsx         # Status indicators
│   │   │   ├── 📂 campaign-management/         # Campaign Management Module
│   │   │   │   ├── CampaignList.tsx            # Campaign listing
│   │   │   │   ├── CampaignForm.tsx            # Campaign creation form
│   │   │   │   ├── QRPreview.tsx               # QR code preview modal
│   │   │   │   ├── CampaignAnalytics.tsx       # Campaign metrics
│   │   │   │   └── CampaignStatus.tsx          # Status management
│   │   │   ├── 📂 analytics/                   # Analytics Module
│   │   │   │   ├── OverviewMetrics.tsx         # KPI overview
│   │   │   │   ├── FunnelAnalysis.tsx          # Conversion funnel
│   │   │   │   ├── CampaignPerformance.tsx     # Campaign metrics
│   │   │   │   ├── RealtimeUpdates.tsx         # Live data updates
│   │   │   │   └── ExportData.tsx              # Data export functionality
│   │   │   ├── 📂 barcode-management/          # Barcode Module
│   │   │   │   ├── BarcodePoolList.tsx         # Pool management
│   │   │   │   ├── ImportBarcodes.tsx          # Bulk import
│   │   │   │   ├── GenerateBarcodes.tsx        # Generation wizard
│   │   │   │   ├── BarcodePreview.tsx          # Visual preview
│   │   │   │   └── RedemptionMonitor.tsx       # Real-time tracking
│   │   │   ├── 📂 fraud-detection/             # Fraud Detection Module
│   │   │   │   ├── FraudDashboard.tsx          # Fraud overview
│   │   │   │   ├── FraudAlerts.tsx             # Alert management
│   │   │   │   ├── FraudScoring.tsx            # Score visualization
│   │   │   │   ├── DeviceFingerprint.tsx       # Device tracking
│   │   │   │   └── RiskAnalysis.tsx            # Risk assessment charts
│   │   │   ├── 📂 notifications/               # Notification Module
│   │   │   │   ├── NotificationList.tsx        # Message management
│   │   │   │   ├── NotificationComposer.tsx    # Message creation
│   │   │   │   ├── NotificationTemplates.tsx   # Template library
│   │   │   │   └── SendNotification.tsx        # Send interface
│   │   │   ├── 📂 system-settings/             # System Settings Module
│   │   │   │   ├── GeneralSettings.tsx         # System configuration
│   │   │   │   ├── APIConfiguration.tsx        # API management
│   │   │   │   ├── AuditLogs.tsx               # System audit trail
│   │   │   │   └── SecuritySettings.tsx        # Security configuration
│   │   │   ├── 📂 user-portal/                 # Customer Portal Module
│   │   │   │   ├── UserPortalDashboard.tsx     # Customer dashboard
│   │   │   │   ├── MyBarcodesCard.tsx          # User barcode display
│   │   │   │   ├── ProfileSettings.tsx         # Profile editing
│   │   │   │   ├── ConsentManagement.tsx       # Privacy controls
│   │   │   │   └── RecommendationList.tsx      # Personalized offers
│   │   │   └── 📂 shared/                      # Shared Components
│   │   │       ├── LoadingSpinner.tsx          # Loading states
│   │   │       ├── ErrorBoundary.tsx           # Error handling
│   │   │       ├── ConfirmDialog.tsx           # Confirmation dialogs
│   │   │       ├── DataTable.tsx               # Reusable data table
│   │   │       ├── FileUpload.tsx              # File upload component
│   │   │       ├── DateRangePicker.tsx         # Date range picker
│   │   │       ├── SearchBox.tsx               # Search input
│   │   │       ├── StatusBadge.tsx             # Status indicators
│   │   │       ├── ActionButton.tsx            # Action buttons
│   │   │       └── EmptyState.tsx              # Empty state display
│   │   │
│   │   ├── 📂 pages/                           # Page Components
│   │   │   ├── LoginPage.tsx                   # Login page
│   │   │   ├── DashboardPage.tsx               # Main dashboard
│   │   │   ├── UsersPage.tsx                   # User management page
│   │   │   ├── RolesPage.tsx                   # Role management page
│   │   │   ├── CampaignsPage.tsx               # Campaign management page
│   │   │   ├── AnalyticsPage.tsx               # Analytics dashboard page
│   │   │   ├── RedemptionPage.tsx              # Redemption monitoring page
│   │   │   ├── NotificationsPage.tsx           # Notifications management page
│   │   │   ├── SettingsPage.tsx                # System settings page
│   │   │   ├── ProfilePage.tsx                 # User profile page
│   │   │   └── NotFoundPage.tsx                # 404 error page
│   │   │
│   │   ├── 📂 hooks/                           # Custom React Hooks
│   │   │   ├── useAuth.ts                      # Authentication hook
│   │   │   ├── useUsers.ts                     # User management hook
│   │   │   ├── useRoles.ts                     # Role management hook
│   │   │   ├── useCampaigns.ts                 # Campaign operations hook
│   │   │   ├── useAnalytics.ts                 # Analytics data hook
│   │   │   ├── useNotifications.ts             # Notification management hook
│   │   │   ├── useLocalStorage.ts              # Local storage management
│   │   │   ├── useDebounce.ts                  # Debouncing hook
│   │   │   └── usePermissions.ts               # RBAC permissions hook
│   │   │
│   │   ├── 📂 store/                           # State Management
│   │   │   ├── index.ts                        # Store configuration
│   │   │   ├── 📂 slices/                      # Redux Slices
│   │   │   │   ├── authSlice.ts                # Authentication state
│   │   │   │   ├── userSlice.ts                # User management state
│   │   │   │   ├── campaignSlice.ts            # Campaign state
│   │   │   │   ├── analyticsSlice.ts           # Analytics state
│   │   │   │   └── notificationSlice.ts        # Notification state
│   │   │   └── 📂 api/                         # RTK Query APIs
│   │   │       ├── authApi.ts                  # Authentication API calls
│   │   │       ├── userApi.ts                  # User management API
│   │   │       ├── campaignApi.ts              # Campaign API
│   │   │       └── analyticsApi.ts             # Analytics API
│   │   │
│   │   ├── 📂 utils/                           # Frontend Utilities
│   │   │   ├── api.ts                          # API client configuration
│   │   │   ├── auth.ts                         # Authentication helpers
│   │   │   ├── validation.ts                   # Form validation utilities
│   │   │   ├── formatting.ts                   # Data formatting helpers
│   │   │   ├── constants.ts                    # Frontend constants
│   │   │   └── permissions.ts                  # Permission checking utilities
│   │   │
│   │   ├── 📂 styles/                          # Styling
│   │   │   ├── globals.css                     # Global styles
│   │   │   ├── components.css                  # Component-specific styles
│   │   │   ├── variables.css                   # CSS variables
│   │   │   └── themes.css                      # Theme definitions
│   │   │
│   │   ├── 📂 assets/                          # Static Assets
│   │   │   ├── 📂 icons/                       # SVG icons
│   │   │   ├── 📂 images/                      # Images và logos
│   │   │   └── 📂 fonts/                       # Typography assets
│   │   │
│   │   └── 📂 types/                           # TypeScript Types
│   │       ├── auth.types.ts                   # Authentication types
│   │       ├── user.types.ts                   # User-related types
│   │       ├── campaign.types.ts               # Campaign types
│   │       ├── analytics.types.ts              # Analytics types
│   │       └── common.types.ts                 # Shared type definitions
│   │
│   ├── 📂 tests/                               # Frontend Testing
│   │   ├── 📂 components/                      # Component Tests
│   │   │   ├── 📂 ui/                          
│   │   │   │   ├── Button.test.tsx             # Button component tests
│   │   │   │   ├── Input.test.tsx              # Input component tests
│   │   │   │   └── Table.test.tsx              # Table component tests
│   │   │   └── 📂 user-management/             
│   │   │       ├── UserList.test.tsx           # UserList component tests
│   │   │       └── UserForm.test.tsx           # UserForm component tests
│   │   ├── 📂 pages/                           # Page Tests
│   │   │   ├── LoginPage.test.tsx              # Login page tests
│   │   │   └── DashboardPage.test.tsx          # Dashboard page tests
│   │   ├── 📂 hooks/                           # Hook Tests
│   │   │   ├── useAuth.test.ts                 # useAuth hook tests
│   │   │   └── useUsers.test.ts                # useUsers hook tests
│   │   └── 📂 e2e/                             # End-to-End Tests
│   │       ├── user-management-flow.cy.ts      # User management E2E tests
│   │       └── portal-navigation.cy.ts         # Portal navigation E2E tests
│   │
│   ├── 📂 public/                              # Public Assets
│   │   ├── index.html                          # Main HTML template
│   │   ├── favicon.ico                         # Site favicon
│   │   └── manifest.json                       # PWA manifest
│   │
│   ├── 📂 docs/                                # Frontend Documentation
│   │   ├── COMPONENT-LIBRARY.md                # Component documentation
│   │   ├── STYLING-GUIDE.md                    # CSS và theming guide
│   │   └── TESTING-GUIDE.md                    # Testing best practices
│   │
│   ├── package.json                            # Frontend dependencies
│   ├── tsconfig.json                           # Frontend TypeScript config
│   ├── jest.config.js                          # Frontend Jest config
│   ├── eslint.config.js                        # Frontend ESLint config
│   ├── tailwind.config.js                      # Tailwind CSS config
│   └── vite.config.ts                          # Vite build config
│
├── 📂 shared/                                  # Shared Resources
│   ├── 📂 types/                               # Shared TypeScript types
│   │   ├── api.types.ts                        # API contract types
│   │   ├── auth.types.ts                       # Authentication types
│   │   └── common.types.ts                     # Common shared types
│   ├── 📂 constants/                           # Shared constants
│   │   ├── roles.constants.ts                  # Role definitions
│   │   ├── permissions.constants.ts            # Permission constants
│   │   └── api.constants.ts                    # API endpoints
│   └── 📂 utils/                               # Shared utilities
│       ├── validation.utils.ts                 # Common validation
│       └── date.utils.ts                       # Date formatting
│
├── 📂 deployment/                              # Deployment Configuration
│   ├── 📂 docker/                              # Docker files
│   │   ├── Dockerfile.backend                  # Backend container
│   │   ├── Dockerfile.frontend                 # Frontend container
│   │   └── docker-compose.yml                  # Development stack
│   ├── 📂 kubernetes/                          # Kubernetes manifests
│   │   ├── 📂 backend/                         # Backend K8s manifests
│   │   │   ├── deployment.yaml                 # Backend deployment
│   │   │   ├── service.yaml                    # Backend service
│   │   │   └── configmap.yaml                  # Backend configuration
│   │   ├── 📂 frontend/                        # Frontend K8s manifests
│   │   │   ├── deployment.yaml                 # Frontend deployment
│   │   │   ├── service.yaml                    # Frontend service
│   │   │   └── ingress.yaml                    # Frontend ingress
│   │   └── 📂 shared/                          # Shared resources
│   │       ├── namespace.yaml                  # Namespace definition
│   │       ├── secrets.yaml                    # Shared secrets
│   │       └── configmap.yaml                  # Shared configuration
│   └── 📂 helm/                                # Helm charts
│       ├── Chart.yaml                          # Helm chart definition
│       ├── values.yaml                         # Default values
│       └── 📂 templates/                       # Helm templates
│           ├── backend-deployment.yaml         # Backend deployment template
│           ├── frontend-deployment.yaml        # Frontend deployment template
│           └── ingress.yaml                    # Ingress template
│
├── 📂 docs/                                    # Project Documentation
│   ├── SETUP.md                                # Development setup guide
│   ├── API.md                                  # Complete API documentation
│   ├── FRONTEND.md                             # Frontend development guide
│   ├── DEPLOYMENT.md                           # Production deployment guide
│   ├── USER-MANUAL.md                          # End-user manual
│   ├── ARCHITECTURE.md                         # System architecture overview
│   └── 📂 diagrams/                            # Architecture diagrams
│       ├── unified-portal-architecture.png     # Overall system architecture
│       ├── navigation-flow.png                 # Portal navigation flow
│       ├── user-flow-diagram.png               # User interaction flows
│       └── database-schema.png                 # Database ERD
│
├── 📂 scripts/                                 # Automation Scripts
│   ├── setup-dev.sh                            # Development environment setup
│   ├── build-all.sh                            # Build backend + frontend
│   ├── deploy-staging.sh                       # Staging deployment
│   ├── deploy-production.sh                    # Production deployment
│   ├── backup-data.sh                          # Database backup
│   ├── run-tests.sh                            # Run all tests
│   └── update-dependencies.sh                  # Dependency updates
│
├── 📂 .github/                                 # GitHub Configuration
│   └── 📂 workflows/                           # GitHub Actions
│       ├── ci.yml                              # CI workflow
│       └── cd.yml                              # CD workflow
│
├── 📂 .storybook/                              # Storybook Configuration
│   └── main.js                                 # Storybook configuration
│
├── .env.example                                # Environment variables template
├── .gitignore                                  # Git ignore rules
├── package.json                                # Root package.json (monorepo)
├── docker-compose.yml                          # Full stack development
├── README.md                                   # Project overview và setup
└── CHANGELOG.md                                # Version history
```

---

## 📋 **ROADMAP CHI TIẾT - CHECKLIST IMPLEMENTATION HOÀN CHỈNH**

### **1. SETUP & CHUẨN BỊ DỰ ÁN** ⚙️

#### **1.1 Khởi tạo dự án monorepo**
- [ ] **Tạo repository và cấu trúc monorepo**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + Part10.3.1 Admin Portal UI
  - *Mô tả*: Thiết lập monorepo với backend (Clean Architecture) và frontend (Unified Portal)
  - *File tạo*: `package.json`, `README.md`, `.gitignore`, toàn bộ folder structure
  - *Ý nghĩa*: Single repository cho complete Identity + Portal solution, easier maintenance

- [ ] **Cấu hình workspace và shared dependencies**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Setup workspace với shared TypeScript configs, linting, shared types
  - *File tạo*: Root `tsconfig.json`, `eslint.config.js`, `shared/types/`, workspace configs
  - *Ý nghĩa*: Consistent development experience across backend/frontend, code reuse

- [ ] **Setup shared constants và types**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md + Part02.8 Technical Requirements
  - *Mô tả*: Shared TypeScript types, role constants, API contracts
  - *File tạo*: `shared/types/api.types.ts`, `shared/constants/roles.constants.ts`, `shared/utils/validation.utils.ts`
  - *Ý nghĩa*: Type safety và consistency across monorepo

#### **1.2 Configuration Files Setup**
- [ ] **Setup root configuration files**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Environment templates, Git configuration, project documentation
  - *File tạo*: `.env.example`, `CHANGELOG.md`, `.gitignore` với proper rules
  - *Ý nghĩa*: Project foundation và developer onboarding

- [ ] **Setup CI/CD workflows**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: GitHub Actions cho automated testing, building, deployment
  - *File tạo*: `.github/workflows/ci.yml`, `.github/workflows/cd.yml`
  - *Ý nghĩa*: Automated quality assurance và deployment pipeline

#### **1.3 Database Setup**
- [ ] **Thiết lập PostgreSQL cho user data**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview
  - *Mô tả*: PostgreSQL 15+ container với user management schema
  - *File tạo*: `backend/prisma/schema.prisma`, database connection configs
  - *Ý nghĩa*: ACID compliance cho sensitive user data và RBAC information

- [ ] **Thiết lập Redis cho sessions và cache**  
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.2.5 Session Management
  - *Mô tả*: Redis 7+ cho JWT sessions, OTP codes, portal cache
  - *File tạo*: `backend/src/infrastructure/config/redis.config.ts`
  - *Ý nghĩa*: High-performance session management và UI state caching

- [ ] **Create database migrations**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview + Access_Control_Tree_Grok.md
  - *Mô tả*: SQL migration files cho users, roles, permissions, sessions
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/001_create_users.sql`, `002_create_roles.sql`, `003_create_sessions.sql`
  - *Ý nghĩa*: Structured database evolution với version control

#### **1.4 Docker & Development Environment**
- [ ] **Setup Docker multi-stage builds**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture  
  - *Mô tả*: Multi-stage Dockerfile cho backend + frontend với optimization
  - *File tạo*: `deployment/docker/Dockerfile.backend`, `deployment/docker/Dockerfile.frontend`
  - *Ý nghĩa*: Efficient production containers với separate backend/frontend serving

- [ ] **Create development stack**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Docker Compose cho complete development environment
  - *File tạo*: `docker-compose.yml` với PostgreSQL, Redis, backend, frontend
  - *Ý nghĩa*: One-command development environment setup

- [ ] **Setup automation scripts**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Shell scripts cho development automation
  - *File tạo*: `scripts/setup-dev.sh`, `scripts/build-all.sh`, `scripts/run-tests.sh`
  - *Ý nghĩa*: Developer productivity và consistent workflows

### **2. BACKEND IMPLEMENTATION - CLEAN ARCHITECTURE** 🗂️

#### **2.1 Domain Layer Implementation**
- [ ] **Implement Core Entities với business rules**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004)
  - *Mô tả*: Core business entities với validation, invariants, business logic
  - *File tạo*: `backend/src/domain/entities/User.ts`, `Role.ts`, `Permission.ts`, `Session.ts`, `OTPCode.ts`
  - *Ý nghĩa*: Encapsulate business logic, ensure data integrity cho portal operations

- [ ] **Implement Value Objects cho data integrity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.7 Input Validation + Part05.3.2 Password Hashing
  - *Mô tả*: Immutable value objects với validation và business rules
  - *File tạo*: `backend/src/domain/value-objects/Email.ts`, `Phone.ts`, `Password.ts`
  - *Ý nghĩa*: Type safety, validation, và consistent data handling

- [ ] **Implement Repository Interfaces**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture
  - *Mô tả*: Domain layer interfaces cho data access, dependency inversion
  - *File tạo*: `backend/src/domain/repositories/IUserRepository.ts`, `IRoleRepository.ts`, `ISessionRepository.ts`, `IOTPRepository.ts`
  - *Ý nghĩa*: Clean separation of concerns, testable domain logic

- [ ] **Implement Domain Services**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication + Part04.1.5 OTP Verification
  - *Mô tả*: Complex business logic không thuộc về single entity
  - *File tạo*: `backend/src/domain/services/AuthenticationDomainService.ts`, `PasswordHashingService.ts`, `OTPGenerationService.ts`
  - *Ý nghĩa*: Complex business operations, cross-entity logic

#### **2.2 Application Layer Implementation**
- [ ] **Implement Authentication Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication (FR-003) + Part04.1.5 OTP Verification (FR-005)
  - *Mô tả*: Authentication workflows với OTP, session management
  - *File tạo*: `backend/src/application/use-cases/authentication/LoginUseCase.ts`, `LogoutUseCase.ts`, `RefreshTokenUseCase.ts`, `VerifyOTPUseCase.ts`
  - *Ý nghĩa*: Orchestrate authentication flows cho portal security

- [ ] **Implement User Management Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.4 User Management (FR-004) + Part10.8.4 Tables
  - *Mô tả*: Complete CRUD operations với validation, pagination
  - *File tạo*: `backend/src/application/use-cases/user-management/CreateUserUseCase.ts`, `UpdateUserUseCase.ts`, `DeleteUserUseCase.ts`, `GetUserUseCase.ts`, `ListUsersUseCase.ts`
  - *Ý nghĩa*: Support portal user management features với business logic

- [ ] **Implement Role Management Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration
  - *Mô tả*: RBAC operations, permission matrix, role hierarchy
  - *File tạo*: `backend/src/application/use-cases/role-management/AssignRoleUseCase.ts`, `CreateRoleUseCase.ts`, `UpdateRoleUseCase.ts`, `GetPermissionsUseCase.ts`
  - *Ý nghĩa*: Support sophisticated RBAC portal interface

- [ ] **Implement Data Transfer Objects**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs + Part08.1.2 User Management APIs
  - *Mô tả*: API contract definitions, request/response objects
  - *File tạo*: `backend/src/application/dto/AuthenticationDTO.ts`, `UserManagementDTO.ts`, `RoleManagementDTO.ts`
  - *Ý nghĩa*: Type-safe API contracts cho portal communication

- [ ] **Implement Application Ports/Interfaces**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.1 Twilio Integration + Part07.2.5 Session Management
  - *Mô tả*: Interfaces cho external services, dependency inversion
  - *File tạo*: `backend/src/application/ports/IEmailService.ts`, `ISMSService.ts`, `ITokenService.ts`
  - *Ý nghĩa*: Clean external service integration cho notifications

#### **2.3 Infrastructure Layer Implementation**
- [ ] **Implement Repository Implementations**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview + Part07.2.5 Session Management
  - *Mô tả*: Concrete repository implementations với Prisma ORM và Redis
  - *File tạo*: `backend/src/infrastructure/persistence/repositories/UserRepository.ts`, `RoleRepository.ts`, `SessionRepository.ts`, `OTPRepository.ts`
  - *Ý nghĩa*: Data access layer cho portal operations với performance optimization

- [ ] **Implement Database Models**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.1 Data Model Overview
  - *Mô tả*: Prisma models mapping domain entities to database schema
  - *File tạo*: `backend/src/infrastructure/persistence/models/UserModel.ts`, `RoleModel.ts`, `SessionModel.ts`
  - *Ý nghĩa*: ORM mapping layer với type safety

- [ ] **Implement External Service Adapters**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.1 Twilio Integration
  - *Mô tả*: External service implementations cho email, SMS, JWT
  - *File tạo*: `backend/src/infrastructure/external-services/EmailService.ts`, `SMSService.ts`, `TokenService.ts`
  - *Ý nghĩa*: External integration cho portal notifications và authentication

- [ ] **Implement Configuration Management**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Application configuration, database connections, environment management
  - *File tạo*: `backend/src/infrastructure/config/database.config.ts`, `redis.config.ts`, `app.config.ts`
  - *Ý nghĩa*: Centralized configuration management cho different environments

#### **2.4 Presentation Layer (API) Implementation**
- [ ] **Implement API Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs + Part08.1.2 User Management APIs  
  - *Mô tả*: REST API controllers cho portal endpoints
  - *File tạo*: `backend/src/presentation/controllers/AuthController.ts`, `UserController.ts`, `RoleController.ts`, `HealthController.ts`
  - *Ý nghĩa*: API endpoints supporting complete portal functionality

- [ ] **Implement Security Middleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements + Access_Control_Tree_Grok.md
  - *Mô tả*: Authentication, authorization, validation middleware
  - *File tạo*: `backend/src/presentation/middleware/AuthMiddleware.ts`, `RBACMiddleware.ts`, `ValidationMiddleware.ts`, `LoggingMiddleware.ts`
  - *Ý nghĩa*: Security enforcement cho portal API access

- [ ] **Implement API Routing**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design
  - *Mô tả*: Route definitions, middleware integration, API versioning
  - *File tạo*: `backend/src/presentation/routes/auth.routes.ts`, `users.routes.ts`, `roles.routes.ts`
  - *Ý nghĩa*: Structured API organization với proper routing

- [ ] **Implement Request Validators**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.7 Input Validation
  - *Mô tả*: Input validation rules, schema validation, error handling
  - *File tạo*: `backend/src/presentation/validators/AuthValidators.ts`, `UserValidators.ts`, `RoleValidators.ts`
  - *Ý nghĩa*: Input validation và security cho API endpoints

#### **2.5 Shared Backend Code Implementation**
- [ ] **Implement Constants và Error Codes**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md + Part05.8 Error Handling
  - *Mô tả*: Application constants, role definitions, error code mappings
  - *File tạo*: `backend/src/shared/constants/roles.constants.ts`, `permissions.constants.ts`, `error-codes.constants.ts`
  - *Ý nghĩa*: Centralized constants và consistent error handling

- [ ] **Implement Custom Exceptions**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.8 Error Handling
  - *Mô tả*: Domain-specific exception classes với proper error categorization
  - *File tạo*: `backend/src/shared/exceptions/AuthenticationException.ts`, `AuthorizationException.ts`, `ValidationException.ts`
  - *Ý nghĩa*: Structured error handling với clear error categories

- [ ] **Implement Utility Functions**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring + Part05.7 Input Validation
  - *Mô tả*: Logging utilities, validation helpers, crypto functions
  - *File tạo*: `backend/src/shared/utils/logger.utils.ts`, `validation.utils.ts`, `crypto.utils.ts`
  - *Ý nghĩa*: Reusable utilities cho backend operations

- [ ] **Implement Type Definitions**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design + Part02.8 Technical Requirements
  - *Mô tả*: TypeScript type definitions cho backend
  - *File tạo*: `backend/src/shared/types/auth.types.ts`, `user.types.ts`, `common.types.ts`
  - *Ý nghĩa*: Type safety và consistency across backend modules

#### **2.6 Backend Configuration Files**
- [ ] **Setup Backend Package Configuration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Package.json, TypeScript config, linting configuration
  - *File tạo*: `backend/package.json`, `backend/tsconfig.json`, `backend/eslint.config.js`, `backend/jest.config.js`
  - *Ý nghĩa*: Backend development environment với proper tooling

### **3. FRONTEND IMPLEMENTATION - UNIFIED PORTAL** 🖥️

#### **3.1 Design System Foundation theo Part10.1**
- [ ] **Setup Design Tokens từ Part10.1.5**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.5 Design Tokens + Part10.1.1 Color Palette
  - *Mô tả*: CSS variables, Tailwind config, design token system theo Part10
  - *File tạo*: `frontend/src/styles/variables.css`, `frontend/tailwind.config.js`, design token utilities
  - *Ý nghĩa*: Consistent visual foundation cho toàn bộ portal

- [ ] **Implement Typography System theo Part10.1.2**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.2 Typography
  - *Mô tả*: Typography components, font loading, text utilities theo Part10 specs
  - *File tạo*: `frontend/src/styles/typography.css`, `frontend/src/assets/fonts/`, typography utilities
  - *Ý nghĩa*: Consistent text styling across portal với proper font management

- [ ] **Setup Spacing và Grid System theo Part10.1.3**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.3 Spacing Grid
  - *Mô tả*: Spacing utilities, responsive grid, layout system theo Part10
  - *File tạo*: `frontend/src/styles/spacing.css`, grid utilities, responsive breakpoints
  - *Ý nghĩa*: Consistent layout spacing across portal components

- [ ] **Setup Color System và Icons theo Part10.1.1 & Part10.1.4**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1.1 Color Palette + Part10.1.4 Icons And Imagery
  - *Mô tả*: Color palette implementation, icon library, image optimization
  - *File tạo*: `frontend/src/styles/themes.css`, `frontend/src/assets/icons/`, image assets
  - *Ý nghĩa*: Complete visual asset system với accessibility compliance

#### **3.2 Core Portal Infrastructure theo Part10.3.1 & Part10.8.6**
- [ ] **Implement Main Layout System**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation + Part10.3.1 Admin Portal UI
  - *Mô tả*: Master layout component với responsive design
  - *File tạo*: `frontend/src/components/layout/MainLayout.tsx`
  - *Ý nghĩa*: Portal structure foundation supporting all admin modules

- [ ] **Implement Navigation Components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.6 Navigation + Access_Control_Tree_Grok.md
  - *Mô tả*: Sidebar, TopBar, Breadcrumbs, Mobile Navigation với RBAC
  - *File tạo*: `frontend/src/components/layout/Sidebar.tsx`, `TopBar.tsx`, `Breadcrumbs.tsx`, `MobileNavigation.tsx`, `Footer.tsx`
  - *Ý nghĩa*: Complete navigation system adapting to user permissions

#### **3.3 UI Component Library theo Part10.8**
- [ ] **Implement Basic UI Components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.1 Buttons + Part10.8.2 Forms + Part10.8.3 Cards
  - *Mô tả*: Core UI components theo design system specifications
  - *File tạo*: `frontend/src/components/ui/Button.tsx`, `Input.tsx`, `Card.tsx`, `Select.tsx`, `Checkbox.tsx`, `RadioGroup.tsx`, `Toast.tsx`
  - *Ý nghĩa*: Reusable UI foundation với consistent styling

- [ ] **Implement Advanced UI Components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.4 Tables + Part10.8.5 Modals + Part10.1.7 Color Contrast
  - *Mô tả*: Complex UI components với accessibility compliance
  - *File tạo*: `frontend/src/components/ui/Table.tsx`, `Modal.tsx`
  - *Ý nghĩa*: Advanced UI functionality với WCAG compliance

- [ ] **Implement Chart Components theo Part10.8.7**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8.7 Charts + Part10.2.5 Analytics Dashboard
  - *Mô tả*: Data visualization components cho analytics
  - *File tạo*: `frontend/src/components/charts/LineChart.tsx`, `BarChart.tsx`, `PieChart.tsx`, `KPICard.tsx`, `ChartContainer.tsx`
  - *Ý nghĩa*: Consistent data visualization across analytics modules

#### **3.4 Feature Modules Implementation**
- [ ] **Implement User Management Module theo Part10.3.1**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.8.4 Tables + Part04.1.4 User Management
  - *Mô tả*: Complete user administration interface với RBAC
  - *File tạo*: `frontend/src/components/user-management/UserList.tsx`, `UserForm.tsx`, `UserDetails.tsx`, `RoleMatrix.tsx`, `UserBulkActions.tsx`, `UserStatusBadge.tsx`
  - *Ý nghĩa*: Full-featured user management interface cho admin portal

- [ ] **Implement Campaign Management Module theo Part10.2.2**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.2 Campaign Management + Part10.8.2 Forms + Part10.8.5 Modals
  - *Mô tả*: Campaign administration với QR preview functionality
  - *File tạo*: `frontend/src/components/campaign-management/CampaignList.tsx`, `CampaignForm.tsx`, `QRPreview.tsx`, `CampaignAnalytics.tsx`, `CampaignStatus.tsx`
  - *Ý nghĩa*: Campaign management workflow với visual QR verification

- [ ] **Implement Analytics Dashboard Module theo Part10.2.5**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.5 Analytics Dashboard + Part10.8.7 Charts + Part04.2.8 Real Time Analytics
  - *Mô tả*: Business intelligence interface với real-time updates
  - *File tạo*: `frontend/src/components/analytics/OverviewMetrics.tsx`, `FunnelAnalysis.tsx`, `CampaignPerformance.tsx`, `RealtimeUpdates.tsx`, `ExportData.tsx`
  - *Ý nghĩa*: Comprehensive analytics interface cho business insights

- [ ] **Implement Barcode Management Module theo Part10.2.3**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.3 Barcode Management + Part10.8.2 Forms + Part10.8.4 Tables
  - *Mô tả*: Barcode inventory management với import/export capabilities
  - *File tạo*: `frontend/src/components/barcode-management/BarcodePoolList.tsx`, `ImportBarcodes.tsx`, `GenerateBarcodes.tsx`, `BarcodePreview.tsx`, `RedemptionMonitor.tsx`
  - *Ý nghĩa*: Complete barcode lifecycle management

- [ ] **Implement Fraud Detection Module theo Part10.2.4**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2.4 Fraud Detection + Part10.8.3 Cards + Part10.1.1 Color Palette
  - *Mô tả*: Security monitoring interface với visual indicators
  - *File tạo*: `frontend/src/components/fraud-detection/FraudDashboard.tsx`, `FraudAlerts.tsx`, `FraudScoring.tsx`, `DeviceFingerprint.tsx`, `RiskAnalysis.tsx`
  - *Ý nghĩa*: Fraud monitoring và risk assessment interface

- [ ] **Implement Notification Center Module**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.10 Notification System + Part10.8.2 Forms + Part10.8.4 Tables
  - *Mô tả*: Communication management hub trong portal
  - *File tạo*: `frontend/src/components/notifications/NotificationList.tsx`, `NotificationComposer.tsx`, `NotificationTemplates.tsx`, `SendNotification.tsx`
  - *Ý nghĩa*: Centralized communication management

- [ ] **Implement System Settings Module**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements + Part08 API Design + Part05.6 Auditability
  - *Mô tả*: System administration interface
  - *File tạo*: `frontend/src/components/system-settings/GeneralSettings.tsx`, `APIConfiguration.tsx`, `AuditLogs.tsx`, `SecuritySettings.tsx`
  - *Ý nghĩa*: Complete system administration capabilities

- [ ] **Implement User Portal Module theo Part10.5**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.5 User Portal + Part10.5.1.1 Portal Dashboard + Part10.5.4.1 Edit Profile
  - *Mô tả*: Customer-facing portal interface
  - *File tạo*: `frontend/src/components/user-portal/UserPortalDashboard.tsx`, `MyBarcodesCard.tsx`, `ProfileSettings.tsx`, `ConsentManagement.tsx`, `RecommendationList.tsx`
  - *Ý nghĩa*: User-friendly customer interface với personalization

#### **3.5 Shared Components Implementation**
- [ ] **Implement Utility Components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.8 Error Handling + Part10.1.4 Icons + Part10.1.2 Typography
  - *Mô tả*: Reusable utility components cho common functionality
  - *File tạo*: `frontend/src/components/shared/LoadingSpinner.tsx`, `ErrorBoundary.tsx`, `ConfirmDialog.tsx`, `DataTable.tsx`, `FileUpload.tsx`, `DateRangePicker.tsx`, `SearchBox.tsx`, `StatusBadge.tsx`, `ActionButton.tsx`, `EmptyState.tsx`
  - *Ý nghĩa*: Common UI patterns với consistent implementation

#### **3.6 Page Components Implementation**
- [ ] **Implement Portal Pages**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.2.1.1 Dashboard Wireframe
  - *Mô tả*: Top-level page components cho portal routing
  - *File tạo*: `frontend/src/pages/LoginPage.tsx`, `DashboardPage.tsx`, `UsersPage.tsx`, `RolesPage.tsx`, `CampaignsPage.tsx`, `AnalyticsPage.tsx`, `RedemptionPage.tsx`, `NotificationsPage.tsx`, `SettingsPage.tsx`, `ProfilePage.tsx`, `NotFoundPage.tsx`
  - *Ý nghĩa*: Complete portal navigation với proper page hierarchy

#### **3.7 React Hooks Implementation**
- [ ] **Implement Business Logic Hooks**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication + Part04.1.4 User Management + Access_Control_Tree_Grok.md
  - *Mô tả*: Custom hooks cho business operations
  - *File tạo*: `frontend/src/hooks/useAuth.ts`, `useUsers.ts`, `useRoles.ts`, `useCampaigns.ts`, `useAnalytics.ts`, `useNotifications.ts`, `usePermissions.ts`
  - *Ý nghĩa*: Reusable business logic với state management

- [ ] **Implement Utility Hooks**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.8.2 Forms
  - *Mô tả*: Utility hooks cho common patterns
  - *File tạo*: `frontend/src/hooks/useLocalStorage.ts`, `useDebounce.ts`
  - *Ý nghĩa*: Common utility patterns với performance optimization

#### **3.8 State Management Implementation**
- [ ] **Setup Redux Toolkit Store**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal Architecture + Part06 System Architecture
  - *Mô tả*: Global state management configuration
  - *File tạo*: `frontend/src/store/index.ts`
  - *Ý nghĩa*: Centralized state management cho complex portal

- [ ] **Implement Redux Slices**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication + Part04.1.4 User Management + Part10.2.2 Campaign Management
  - *Mô tả*: State slices cho different portal modules
  - *File tạo*: `frontend/src/store/slices/authSlice.ts`, `userSlice.ts`, `campaignSlice.ts`, `analyticsSlice.ts`, `notificationSlice.ts`
  - *Ý nghĩa*: Modular state management với clear separation

- [ ] **Implement RTK Query APIs**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs + Part08.1.2 User Management APIs + Part08.2 Campaign APIs
  - *Mô tả*: API integration với caching và real-time updates
  - *File tạo*: `frontend/src/store/api/authApi.ts`, `userApi.ts`, `campaignApi.ts`, `analyticsApi.ts`
  - *Ý nghĩa*: Efficient API communication với caching strategies

#### **3.9 Frontend Utilities Implementation**
- [ ] **Implement Core Utilities**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design + Part04.1.3 User Authentication + Part05.7 Input Validation
  - *Mô tả*: Common utility functions cho frontend operations
  - *File tạo*: `frontend/src/utils/api.ts`, `auth.ts`, `validation.ts`, `formatting.ts`, `constants.ts`, `permissions.ts`
  - *Ý nghĩa*: Reusable utility functions với consistent implementation

#### **3.10 Styling System Implementation**
- [ ] **Implement Comprehensive Styling System**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1 Design System + Part10.8 Component Library
  - *Mô tả*: Complete styling system với themes và responsive design
  - *File tạo*: `frontend/src/styles/globals.css`, `components.css`, `variables.css`, `themes.css`
  - *Ý nghĩa*: Consistent styling với theme support

#### **3.11 Type Definitions Implementation**
- [ ] **Implement Frontend Type System**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design + Part02.8 Technical Requirements
  - *Mô tả*: TypeScript definitions cho frontend modules
  - *File tạo*: `frontend/src/types/auth.types.ts`, `user.types.ts`, `campaign.types.ts`, `analytics.types.ts`, `common.types.ts`
  - *Ý nghĩa*: Type safety across frontend application

#### **3.12 Frontend Configuration Files**
- [ ] **Setup Frontend Development Environment**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements + Part10.9 Prototyping Testing
  - *Mô tả*: Package configuration, build tools, development setup
  - *File tạo*: `frontend/package.json`, `frontend/tsconfig.json`, `frontend/vite.config.ts`, `frontend/jest.config.js`, `frontend/eslint.config.js`
  - *Ý nghĩa*: Optimized development environment với proper tooling

- [ ] **Setup Storybook Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8 Component Library + Part10.9 Prototyping Testing
  - *Mô tả*: Component documentation và design system showcase
  - *File tạo*: `.storybook/main.js`, component stories
  - *Ý nghĩa*: Living documentation cho design system compliance

### **4. TESTING IMPLEMENTATION - COMPREHENSIVE QUALITY ASSURANCE** 🧪

#### **4.1 Backend Testing Strategy**
- [ ] **Implement Domain Layer Unit Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part06.2.1 Layered Architecture
  - *Mô tả*: Unit tests cho entities, value objects, domain services
  - *File tạo*: `backend/tests/unit/domain/entities/User.test.ts`, `Role.test.ts`, `Session.test.ts`, `backend/tests/unit/domain/value-objects/Email.test.ts`, `Phone.test.ts`, `Password.test.ts`
  - *Ý nghĩa*: Ensure domain logic correctness với >90% coverage

- [ ] **Implement Application Layer Unit Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part04.1.3 User Authentication
  - *Mô tả*: Unit tests cho use cases và application services
  - *File tạo*: `backend/tests/unit/application/use-cases/LoginUseCase.test.ts`, `CreateUserUseCase.test.ts`, `ListUsersUseCase.test.ts`
  - *Ý nghĩa*: Verify business workflow correctness

- [ ] **Implement Infrastructure Integration Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.2 Database Testing + Part07.1 Data Model Overview
  - *Mô tả*: Integration tests cho repositories, external services
  - *File tạo*: `backend/tests/integration/repositories/UserRepository.test.ts`, `SessionRepository.test.ts`, `backend/tests/integration/external-services/EmailService.test.ts`
  - *Ý nghĩa*: Verify data access và external integration

- [ ] **Implement API Integration Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing + Part08.1.1 Authentication APIs
  - *Mô tả*: API endpoint testing với authentication, RBAC validation
  - *File tạo*: `backend/tests/integration/controllers/AuthController.test.ts`, `UserController.test.ts`, `RoleController.test.ts`
  - *Ý nghĩa*: Verify API contract compliance và security

- [ ] **Implement End-to-End Backend Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing + Part04.1.3 User Authentication
  - *Mô tả*: Complete workflow testing từ API đến database
  - *File tạo*: `backend/tests/e2e/auth-flow.test.ts`, `user-management-flow.test.ts`
  - *Ý nghĩa*: Verify complete backend functionality

#### **4.2 Frontend Testing Strategy**
- [ ] **Implement UI Component Unit Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part10.8 Component Library
  - *Mô tả*: Unit tests cho design system components
  - *File tạo*: `frontend/tests/components/ui/Button.test.tsx`, `Input.test.tsx`, `Table.test.tsx`, `Modal.test.tsx`
  - *Ý nghĩa*: Ensure UI component reliability và accessibility

- [ ] **Implement Feature Component Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part10.3.1 Admin Portal
  - *Mô tả*: Tests cho business feature components
  - *File tạo*: `frontend/tests/components/user-management/UserList.test.tsx`, `UserForm.test.tsx`, `frontend/tests/components/campaign-management/CampaignList.test.tsx`
  - *Ý nghĩa*: Verify feature functionality với business logic

- [ ] **Implement Page Component Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part10.2.1.1 Dashboard Wireframe
  - *Mô tả*: Tests cho page-level components và routing
  - *File tạo*: `frontend/tests/pages/LoginPage.test.tsx`, `DashboardPage.test.tsx`, `UsersPage.test.tsx`
  - *Ý nghĩa*: Verify page functionality và navigation

- [ ] **Implement Custom Hook Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part04.1.3 User Authentication
  - *Mô tả*: Tests cho custom React hooks
  - *File tạo*: `frontend/tests/hooks/useAuth.test.ts`, `useUsers.test.ts`, `usePermissions.test.ts`
  - *Ý nghĩa*: Verify hook behavior và state management

- [ ] **Implement End-to-End Frontend Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing + Part10.8.6 Navigation
  - *Mô tả*: Complete user workflow testing với Cypress
  - *File tạo*: `frontend/tests/e2e/user-management-flow.cy.ts`, `portal-navigation.cy.ts`, `campaign-workflow.cy.ts`
  - *Ý nghĩa*: Verify complete portal user experience

#### **4.3 Quality Assurance Setup**
- [ ] **Setup Test Configuration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework + Part02.8 Technical Requirements
  - *Mô tả*: Jest configuration, testing utilities, mock setup
  - *File tạo*: `backend/jest.config.js`, `frontend/jest.config.js`, test utilities
  - *Ý nghĩa*: Consistent testing environment với proper tooling

- [ ] **Implement Storybook Testing**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8 Component Library + Part10.9 Prototyping Testing
  - *Mô tả*: Component documentation và visual testing
  - *File tạo*: `.storybook/main.js`, component stories cho Part10 components
  - *Ý nghĩa*: Visual component testing và design system validation

### **5. DEPLOYMENT & DEVOPS - PRODUCTION READINESS** 🚀

#### **5.1 Containerization Strategy**
- [ ] **Create Production Docker Images**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Multi-stage Dockerfiles với optimization cho production
  - *File tạo*: `deployment/docker/Dockerfile.backend`, `deployment/docker/Dockerfile.frontend`
  - *Ý nghĩa*: Efficient, secure production containers

- [ ] **Setup Development Stack**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Complete development environment với all services
  - *File tạo*: `docker-compose.yml` với PostgreSQL, Redis, backend, frontend
  - *Ý nghĩa*: Consistent development environment across team

#### **5.2 Kubernetes Orchestration**
- [ ] **Create Backend Kubernetes Manifests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Backend deployment, service, configuration manifests
  - *File tạo*: `deployment/kubernetes/backend/deployment.yaml`, `service.yaml`, `configmap.yaml`
  - *Ý nghĩa*: Scalable backend orchestration với configuration management

- [ ] **Create Frontend Kubernetes Manifests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Frontend deployment, service, ingress manifests
  - *File tạo*: `deployment/kubernetes/frontend/deployment.yaml`, `service.yaml`, `ingress.yaml`
  - *Ý nghĩa*: Frontend serving với load balancing và SSL termination

- [ ] **Create Shared Kubernetes Resources**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Namespace, secrets, shared configuration
  - *File tạo*: `deployment/kubernetes/shared/namespace.yaml`, `secrets.yaml`, `configmap.yaml`
  - *Ý nghĩa*: Organized resource management với security

#### **5.3 Helm Charts Implementation**
- [ ] **Create Helm Chart Package**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Parameterized deployment templates cho different environments
  - *File tạo*: `deployment/helm/Chart.yaml`, `values.yaml`, template files
  - *Ý nghĩa*: Flexible deployment configuration với environment-specific values

#### **5.4 CI/CD Pipeline Implementation**
- [ ] **Setup Continuous Integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: Automated testing, building, quality gates
  - *File tạo*: `.github/workflows/ci.yml`
  - *Ý nghĩa*: Automated quality assurance với fast feedback

- [ ] **Setup Continuous Deployment**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: Automated deployment to staging/production
  - *File tạo*: `.github/workflows/cd.yml`
  - *Ý nghĩa*: Reliable, repeatable deployment process

#### **5.5 Deployment Automation**
- [ ] **Create Deployment Scripts**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Deployment Overview
  - *Mô tả*: Automation scripts cho deployment workflows
  - *File tạo*: `scripts/deploy-staging.sh`, `scripts/deploy-production.sh`, `scripts/backup-data.sh`
  - *Ý nghĩa*: Consistent deployment process với rollback capabilities

### **6. MONITORING & OBSERVABILITY - OPERATIONAL EXCELLENCE** 📊

#### **6.1 Backend Monitoring Implementation**
- [ ] **Setup API Health Monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring + Part08 API Design
  - *Mô tả*: Health checks, metrics collection, error tracking cho backend APIs
  - *File tạo*: Health check endpoints, monitoring configuration
  - *Ý nghĩa*: Backend reliability monitoring với alerting

#### **6.2 Frontend Monitoring Implementation**
- [ ] **Setup Portal Performance Monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring + Part10.3.1 Portal
  - *Mô tả*: Core Web Vitals, user experience metrics, error tracking
  - *File tạo*: Performance monitoring utilities, error boundary implementations
  - *Ý nghĩa*: Portal UX optimization insights với real user monitoring

- [ ] **Implement User Analytics**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics + Part10.2.5 Analytics
  - *Mô tả*: Portal usage patterns, feature adoption, user behavior tracking
  - *File tạo*: Analytics tracking implementation
  - *Ý nghĩa*: Data-driven portal improvement insights

### **7. DOCUMENTATION & DELIVERY - KNOWLEDGE MANAGEMENT** 📚

#### **7.1 Technical Documentation Creation**
- [ ] **Create Comprehensive User Manual**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3.1 Admin Portal + Part10.5 User Portal
  - *Mô tả*: Complete guide cho tất cả portal features, role-specific instructions
  - *File tạo*: `docs/USER-MANUAL.md`
  - *Ý nghĩa*: User adoption support cho unified portal

- [ ] **Write Developer Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06 System Architecture + Part10.8 Component Library
  - *Mô tả*: Architecture overview, API documentation, component library guide
  - *File tạo*: `docs/ARCHITECTURE.md`, `docs/API.md`, `docs/FRONTEND.md`
  - *Ý nghĩa*: Developer onboarding và maintenance support

- [ ] **Create Deployment Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14 Deployment Architecture
  - *Mô tả*: Production deployment guide, infrastructure setup
  - *File tạo*: `docs/DEPLOYMENT.md`
  - *Ý nghĩa*: Operations team support cho production management

- [ ] **Create Setup Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Development environment setup, getting started guide
  - *File tạo*: `docs/SETUP.md`
  - *Ý nghĩa*: Developer onboarding acceleration

#### **7.2 Visual Documentation Creation**
- [ ] **Create Architecture Diagrams**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06 System Architecture + Part10.8.6 Navigation
  - *Mô tả*: System architecture visualization, navigation flow diagrams
  - *File tạo*: `docs/diagrams/unified-portal-architecture.png`, `navigation-flow.png`, `user-flow-diagram.png`, `database-schema.png`
  - *Ý nghĩa*: Visual understanding của system architecture và user flows

#### **7.3 Project Delivery Validation**
- [ ] **Conduct Performance Validation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.2.1 Load Testing Scenarios + NFR-001 Performance
  - *Mô tả*: Load testing cho backend APIs và frontend portal performance
  - *File tạo*: Performance test scripts, benchmark reports
  - *Ý nghĩa*: Complete solution performance verification meets SRS requirements

- [ ] **Conduct Security Audit**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.5.3 Security Testing + Part05.3 Security Requirements
  - *Mô tả*: Penetration testing, authentication security, RBAC validation
  - *File tạo*: Security test reports, vulnerability assessments
  - *Ý nghĩa*: Portal security assurance meets OWASP standards

- [ ] **Execute Production Deployment**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Deployment Overview
  - *Mô tả*: Production environment setup với monitoring, backup, go-live
  - *File tạo*: Production deployment scripts, runbooks, monitoring setup
  - *Ý nghĩa*: Complete solution availability cho end users

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
