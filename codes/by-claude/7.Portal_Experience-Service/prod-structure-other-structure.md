# 🚀 Sub-Project 7: Portal & Experience Service - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **📦 SHARED PACKAGES** | | | | |
| Core Package | `@psp/shared-core@1.2.0` | Common utilities package | Part02.8 Technical Requirements | Cross-service utilities (logger, validation, crypto) |
| Events Package | `@psp/shared-events@1.1.0` | Domain events contracts | Part06.1.2 Event Bus | Event-driven communication between services |
| UI Package | `@psp/shared-ui@1.0.0` | Shared UI components library | Part10.1 Design System Foundation | Consistent UI/UX across all portals |
| **🎨 FRONTEND CORE** | | | | |
| App Shell | `frontend/src/App.tsx` | Main application shell với routing | Part10.2 Admin Interface | Single-page application entry point |
| Router | `frontend/src/routes/AppRouter.tsx` | Route configuration cho 4 portals | Part10 User Interface | Centralized routing management |
| Auth Provider | `frontend/src/providers/AuthProvider.tsx` | Authentication context provider | Part05.3 Security Requirements | RBAC-based route protection |
| API Provider | `frontend/src/providers/APIProvider.tsx` | RTK Query API configuration | Part08 API Design | Centralized API state management |
| Theme Provider | `frontend/src/providers/ThemeProvider.tsx` | Design system theme provider | Part10.1 Design System Foundation | Consistent theming across portals |
| **👑 ADMIN PORTAL** | | | | |
| Admin Shell | `frontend/src/portals/admin/AdminPortal.tsx` | Admin portal main component | Part10.3 Admin Portal (User Management) | Super Admin interface |
| User Management | `frontend/src/portals/admin/pages/UserManagement.tsx` | User CRUD operations interface | Part04.1.4 User Management (FR-004) | User administration dashboard |
| Role Management | `frontend/src/portals/admin/pages/RoleManagement.tsx` | RBAC role administration | Access_Control_Tree_Grok.md Integration | Role hierarchy management |
| System Settings | `frontend/src/portals/admin/pages/SystemSettings.tsx` | Global system configuration | Part04.1.4 User Management | System-wide settings management |
| Audit Logs | `frontend/src/portals/admin/pages/AuditLogs.tsx` | System audit trail viewer | Part05.3 Security Requirements | Security monitoring dashboard |
| Analytics Overview | `frontend/src/portals/admin/pages/AnalyticsOverview.tsx` | System-wide analytics dashboard | Part04.2.8 Real Time Analytics | High-level metrics visualization |
| **🏢 BRAND PORTAL** | | | | |
| Brand Shell | `frontend/src/portals/brand/BrandPortal.tsx` | Brand portal main component | Part10.4 Brand Portal (Campaign Management) | Brand Admin interface |
| Campaign Dashboard | `frontend/src/portals/brand/pages/CampaignDashboard.tsx` | Campaign overview và metrics | Part04.2.1 Campaign Management (FR-001) | Campaign performance tracking |
| Campaign Creator | `frontend/src/portals/brand/pages/CampaignCreator.tsx` | Campaign creation wizard | Part04.2.1 Campaign Management | Multi-step campaign setup |
| QR Management | `frontend/src/portals/brand/pages/QRManagement.tsx` | QR code generation và tracking | Part04.2.2 Barcode Management (FR-002) | QR lifecycle management |
| Ads Manager | `frontend/src/portals/brand/pages/AdsManager.tsx` | Ads format creation và editing | Part04.2.6 Ads Format Management (FR-006) | Digital ads template management |
| Analytics Dashboard | `frontend/src/portals/brand/pages/AnalyticsDashboard.tsx` | Brand-specific analytics | Part04.2.8 Real Time Analytics | Brand performance insights |
| A/B Testing | `frontend/src/portals/brand/pages/ABTesting.tsx` | A/B test management interface | Part04.3.2 A/B Testing (FR-012) | Experiment design và analysis |
| **🏪 POS PORTAL** | | | | |
| POS Shell | `frontend/src/portals/pos/POSPortal.tsx` | POS portal main component | Part10.2 Admin Interface | Point-of-Sale interface |
| QR Scanner | `frontend/src/portals/pos/pages/QRScanner.tsx` | QR code scanning interface | Part04.2.7 Barcode Redemption (FR-007) | Real-time QR scanning với Scandit SDK |
| Redemption Interface | `frontend/src/portals/pos/pages/RedemptionInterface.tsx` | Redemption processing workflow | Part04.2.7 Barcode Redemption | Customer redemption flow |
| Offline Queue | `frontend/src/portals/pos/pages/OfflineQueue.tsx` | Offline redemption management | Part04.2.7 Barcode Redemption | Offline-first redemption support |
| Daily Reports | `frontend/src/portals/pos/pages/DailyReports.tsx` | POS transaction reports | Part04.2.8 Real Time Analytics | Daily transaction summaries |
| Fraud Alerts | `frontend/src/portals/pos/pages/FraudAlerts.tsx` | Fraud detection dashboard | Part04.3.1 Fraud Detection (FR-011) | Real-time fraud monitoring |
| **👤 USER PORTAL** | | | | |
| User Shell | `frontend/src/portals/user/UserPortal.tsx` | User portal main component | Part10.5 User Portal | Customer-facing interface |
| User Dashboard | `frontend/src/portals/user/pages/UserDashboard.tsx` | Personal dashboard với metrics | Part10.5.1 Portal Dashboard | Personalized user experience |
| My Barcodes | `frontend/src/portals/user/pages/MyBarcodes.tsx` | User's barcode collection | Part10.5.2 My Barcodes | QR code management for users |
| Recommendations | `frontend/src/portals/user/pages/Recommendations.tsx` | Personalized recommendations | Part04.3.3 Recommendation Engine (FR-013) | ML-powered suggestions |
| Profile Management | `frontend/src/portals/user/pages/ProfileManagement.tsx` | User profile editing | Part04.1.4 User Management | Self-service profile management |
| Redemption History | `frontend/src/portals/user/pages/RedemptionHistory.tsx` | Personal redemption tracking | Part04.2.7 Barcode Redemption | User transaction history |
| **🧩 SHARED COMPONENTS** | | | | |
| Button Library | `frontend/src/components/ui/Button.tsx` | Standardized button components | Part10.8 UI Components | Consistent button styling |
| Form Controls | `frontend/src/components/ui/forms/` | Form input components library | Part10.8 UI Components | Standardized form elements |
| Data Display | `frontend/src/components/ui/data-display/` | Tables, cards, lists components | Part10.8 UI Components | Consistent data presentation |
| Navigation | `frontend/src/components/ui/navigation/` | Navigation components library | Part10.8 UI Components | Unified navigation patterns |
| Feedback | `frontend/src/components/ui/feedback/` | Alerts, toasts, modals | Part10.8 UI Components | User feedback mechanisms |
| Charts Library | `frontend/src/components/charts/` | Analytics visualization components | Part04.2.8 Real Time Analytics | Reusable chart components |
| QR Components | `frontend/src/components/qr/` | QR-specific UI components | Part04.2.2 Barcode Management | QR display và scanning UI |
| **🔗 API INTEGRATION** | | | | |
| Auth API | `frontend/src/api/auth.api.ts` | Authentication API client | Part08.1.1 Authentication APIs | Login, logout, token management |
| Users API | `frontend/src/api/users.api.ts` | User management API client | Part08.1.2 User Management APIs | User CRUD operations |
| Campaigns API | `frontend/src/api/campaigns.api.ts` | Campaign management API client | Part08.2.1 Campaign APIs | Campaign lifecycle management |
| QR API | `frontend/src/api/qr.api.ts` | QR code API client | Part08.2.2 Barcode APIs | QR generation và validation |
| Redemptions API | `frontend/src/api/redemptions.api.ts` | Redemption API client | Part08.3.1 Redemption APIs | Redemption processing |
| Analytics API | `frontend/src/api/analytics.api.ts` | Analytics API client | Part08.4.1 Analytics APIs | Metrics và reporting data |
| Notifications API | `frontend/src/api/notifications.api.ts` | Notification API client | Part08.5.1 Notification APIs | In-app notifications |
| **🛡️ SECURITY & MIDDLEWARE** | | | | |
| Route Guards | `frontend/src/guards/RouteGuard.tsx` | RBAC-based route protection | Part05.3 Security Requirements | Role-based access control |
| API Interceptors | `frontend/src/middleware/apiInterceptors.ts` | Request/response interceptors | Part05.3 Security Requirements | Token refresh, error handling |
| Permission HOCs | `frontend/src/hocs/withPermission.tsx` | Component-level permissions | Access_Control_Tree_Grok.md | Granular UI permissions |
| Secure Storage | `frontend/src/utils/secureStorage.ts` | Secure token storage utility | Part05.3.2 Password Hashing | Secure client-side storage |
| XSS Protection | `frontend/src/utils/xssProtection.ts` | XSS prevention utilities | Part05.3 Security Requirements | Client-side security measures |
| **⚡ STATE MANAGEMENT** | | | | |
| Auth Store | `frontend/src/store/auth.slice.ts` | Authentication state management | Part04.1.3 User Authentication | User session state |
| UI Store | `frontend/src/store/ui.slice.ts` | UI state management | Part10.1 Design System Foundation | Theme, layout, preferences |
| Cache Store | `frontend/src/store/cache.slice.ts` | API data caching | Part02.8 Technical Requirements | Performance optimization |
| Offline Store | `frontend/src/store/offline.slice.ts` | Offline data management | Part04.2.7 Barcode Redemption | Offline-first support |
| Real-time Store | `frontend/src/store/realtime.slice.ts` | WebSocket state management | Part04.2.8 Real Time Analytics | Live data updates |
| **📱 PWA & MOBILE** | | | | |
| Service Worker | `frontend/public/sw.js` | Progressive Web App service worker | Part02.8 Technical Requirements | Offline functionality |
| PWA Manifest | `frontend/public/manifest.json` | PWA configuration file | Part02.8 Technical Requirements | App installation support |
| Push Notifications | `frontend/src/utils/pushNotifications.ts` | Push notification client | Part04.3.4 Notification System | Mobile engagement |
| Mobile Optimizations | `frontend/src/styles/mobile.css` | Mobile-specific styling | Part10.1 Design System Foundation | Mobile-first responsive design |
| Touch Gestures | `frontend/src/utils/touchGestures.ts` | Touch interaction utilities | Part10.1 Design System Foundation | Mobile interaction patterns |
| **🧪 TESTING INFRASTRUCTURE** | | | | |
| Component Tests | `frontend/src/components/__tests__/` | Unit tests for UI components | Part13.2.1 Frontend Testing | Component behavior testing |
| Page Tests | `frontend/src/portals/__tests__/` | Integration tests for pages | Part13.2.2 Integration Testing | Page functionality testing |
| E2E Tests | `frontend/cypress/e2e/` | End-to-end workflow tests | Part13.2.3 E2E Testing | Complete user journey testing |
| API Mocks | `frontend/src/__mocks__/api/` | Mock API responses for testing | Part13.2.1 Frontend Testing | Isolated component testing |
| Test Utilities | `frontend/src/test-utils/` | Testing helper utilities | Part13.2.1 Frontend Testing | Reusable testing patterns |
| Visual Tests | `frontend/src/components/__tests__/visual/` | Visual regression testing | Part13.2.1 Frontend Testing | UI consistency validation |
| **🚀 BUILD & DEPLOYMENT** | | | | |
| Vite Config | `frontend/vite.config.ts` | Build configuration | Part02.8 Technical Requirements | Modern build tooling |
| Docker Config | `frontend/Dockerfile` | Container configuration | Part14.1 Containerization | Frontend containerization |
| Nginx Config | `frontend/nginx.conf` | Web server configuration | Part14.1 Containerization | Production web server |
| K8s Manifests | `frontend/k8s/` | Kubernetes deployment files | Part14.1 Containerization | Kubernetes deployment |
| CI/CD Pipeline | `frontend/.github/workflows/frontend-cd.yml` | Deployment automation | Part15.2 CI/CD Pipelines | Automated deployment |
| **📊 MONITORING & ANALYTICS** | | | | |
| Error Tracking | `frontend/src/utils/errorTracking.ts` | Client-side error monitoring | Part14.3 Monitoring Stack | Frontend error tracking |
| Performance Monitoring | `frontend/src/utils/performanceMonitoring.ts` | Web vitals tracking | Part14.3 Monitoring Stack | Frontend performance metrics |
| User Analytics | `frontend/src/utils/userAnalytics.ts` | User behavior tracking | Part04.2.8 Real Time Analytics | User interaction analytics |
| A/B Testing Client | `frontend/src/utils/abTesting.ts` | Client-side A/B testing | Part04.3.2 A/B Testing | Frontend experiment delivery |

---

## 🏗️ **CẤU TRÚC THƯ MỤC HOÀN CHỈNH**

```bash
psp-unified-portal/
├── 📂 frontend/                                # Portal & Experience Service
│   ├── 📂 public/                              # Static Assets
│   │   ├── favicon.ico                         # App favicon
│   │   ├── logo192.png                         # PWA icon 192x192
│   │   ├── logo512.png                         # PWA icon 512x512
│   │   ├── manifest.json                       # PWA manifest
│   │   └── sw.js                              # Service worker for PWA
│   │
│   ├── 📂 src/                                # Source Code
│   │   ├── 📂 components/                      # Shared UI Components
│   │   │   ├── 📂 ui/                         # Base UI Components
│   │   │   │   ├── 📂 forms/                  # Form Components
│   │   │   │   │   ├── Button.tsx             # Standardized button
│   │   │   │   │   ├── Input.tsx              # Form input field
│   │   │   │   │   ├── Select.tsx             # Dropdown select
│   │   │   │   │   ├── Checkbox.tsx           # Checkbox input
│   │   │   │   │   ├── Radio.tsx              # Radio button
│   │   │   │   │   ├── TextArea.tsx           # Multi-line text input
│   │   │   │   │   ├── DatePicker.tsx         # Date selection
│   │   │   │   │   └── FileUpload.tsx         # File upload component
│   │   │   │   ├── 📂 data-display/           # Data Display Components
│   │   │   │   │   ├── Table.tsx              # Data table với sorting
│   │   │   │   │   ├── Card.tsx               # Information card
│   │   │   │   │   ├── List.tsx               # Itemized list
│   │   │   │   │   ├── Badge.tsx              # Status badge
│   │   │   │   │   ├── Avatar.tsx             # User avatar
│   │   │   │   │   ├── Tooltip.tsx            # Hover information
│   │   │   │   │   └── EmptyState.tsx         # No data state
│   │   │   │   ├── 📂 navigation/             # Navigation Components
│   │   │   │   │   ├── Sidebar.tsx            # Side navigation
│   │   │   │   │   ├── Breadcrumb.tsx         # Navigation breadcrumb
│   │   │   │   │   ├── Pagination.tsx         # Page navigation
│   │   │   │   │   ├── Tabs.tsx               # Tab navigation
│   │   │   │   │   └── Menu.tsx               # Context menu
│   │   │   │   ├── 📂 feedback/               # Feedback Components
│   │   │   │   │   ├── Alert.tsx              # Alert messages
│   │   │   │   │   ├── Toast.tsx              # Notification toast
│   │   │   │   │   ├── Modal.tsx              # Modal dialog
│   │   │   │   │   ├── Spinner.tsx            # Loading spinner
│   │   │   │   │   ├── ProgressBar.tsx        # Progress indicator
│   │   │   │   │   └── Skeleton.tsx           # Content placeholder
│   │   │   │   └── 📂 layout/                 # Layout Components
│   │   │   │       ├── Header.tsx             # Page header
│   │   │   │       ├── Footer.tsx             # Page footer
│   │   │   │       ├── Container.tsx          # Content container
│   │   │   │       └── Grid.tsx               # Responsive grid
│   │   │   ├── 📂 charts/                     # Analytics Components
│   │   │   │   ├── LineChart.tsx              # Time series chart
│   │   │   │   ├── BarChart.tsx               # Bar chart
│   │   │   │   ├── PieChart.tsx               # Pie chart
│   │   │   │   ├── MetricCard.tsx             # KPI metric card
│   │   │   │   └── Dashboard.tsx              # Analytics dashboard
│   │   │   ├── 📂 qr/                         # QR-Specific Components
│   │   │   │   ├── QRDisplay.tsx              # QR code display
│   │   │   │   ├── QRScanner.tsx              # QR scanner interface
│   │   │   │   ├── QRGenerator.tsx            # QR generation form
│   │   │   │   └── QRStatus.tsx               # QR status indicator
│   │   │   └── 📂 __tests__/                  # Component Tests
│   │   │       ├── ui/                        # UI component tests
│   │   │       ├── charts/                    # Chart component tests
│   │   │       ├── qr/                        # QR component tests
│   │   │       └── visual/                    # Visual regression tests
│   │   │
│   │   ├── 📂 portals/                        # Portal Applications
│   │   │   ├── 📂 admin/                      # Admin Portal
│   │   │   │   ├── AdminPortal.tsx            # Admin portal shell
│   │   │   │   ├── 📂 pages/                  # Admin Pages
│   │   │   │   │   ├── Dashboard.tsx          # Admin overview dashboard
│   │   │   │   │   ├── UserManagement.tsx     # User CRUD operations
│   │   │   │   │   ├── RoleManagement.tsx     # RBAC administration
│   │   │   │   │   ├── SystemSettings.tsx     # Global configuration
│   │   │   │   │   ├── AuditLogs.tsx          # Security audit trail
│   │   │   │   │   └── AnalyticsOverview.tsx  # System analytics
│   │   │   │   ├── 📂 components/             # Admin-specific Components
│   │   │   │   │   ├── UserTable.tsx          # User management table
│   │   │   │   │   ├── RoleEditor.tsx         # Role editing form
│   │   │   │   │   ├── PermissionMatrix.tsx   # Permission assignment
│   │   │   │   │   └── SystemMetrics.tsx      # System health metrics
│   │   │   │   └── 📂 __tests__/              # Admin Portal Tests
│   │   │   │
│   │   │   ├── 📂 brand/                      # Brand Portal
│   │   │   │   ├── BrandPortal.tsx            # Brand portal shell
│   │   │   │   ├── 📂 pages/                  # Brand Pages
│   │   │   │   │   ├── CampaignDashboard.tsx  # Campaign overview
│   │   │   │   │   ├── CampaignCreator.tsx    # Campaign wizard
│   │   │   │   │   ├── QRManagement.tsx       # QR lifecycle management
│   │   │   │   │   ├── AdsManager.tsx         # Ads template editor
│   │   │   │   │   ├── AnalyticsDashboard.tsx # Brand analytics
│   │   │   │   │   └── ABTesting.tsx          # A/B test interface
│   │   │   │   ├── 📂 components/             # Brand-specific Components
│   │   │   │   │   ├── CampaignCard.tsx       # Campaign summary card
│   │   │   │   │   ├── QRBatchGenerator.tsx   # Bulk QR generation
│   │   │   │   │   ├── AdsPreview.tsx         # Ads template preview
│   │   │   │   │   └── CampaignAnalytics.tsx  # Campaign metrics
│   │   │   │   └── 📂 __tests__/              # Brand Portal Tests
│   │   │   │
│   │   │   ├── 📂 pos/                        # POS Portal
│   │   │   │   ├── POSPortal.tsx              # POS portal shell
│   │   │   │   ├── 📂 pages/                  # POS Pages
│   │   │   │   │   ├── QRScanner.tsx          # Real-time QR scanning
│   │   │   │   │   ├── RedemptionInterface.tsx # Customer redemption
│   │   │   │   │   ├── OfflineQueue.tsx       # Offline management
│   │   │   │   │   ├── DailyReports.tsx       # Transaction reports
│   │   │   │   │   └── FraudAlerts.tsx        # Fraud monitoring
│   │   │   │   ├── 📂 components/             # POS-specific Components
│   │   │   │   │   ├── ScanditScanner.tsx     # Scandit SDK integration
│   │   │   │   │   ├── RedemptionForm.tsx     # Customer data form
│   │   │   │   │   ├── OfflineIndicator.tsx   # Network status
│   │   │   │   │   └── FraudIndicator.tsx     # Fraud risk display
│   │   │   │   └── 📂 __tests__/              # POS Portal Tests
│   │   │   │
│   │   │   ├── 📂 user/                       # User Portal
│   │   │   │   ├── UserPortal.tsx             # User portal shell
│   │   │   │   ├── 📂 pages/                  # User Pages
│   │   │   │   │   ├── UserDashboard.tsx      # Personal dashboard
│   │   │   │   │   ├── MyBarcodes.tsx         # QR collection
│   │   │   │   │   ├── Recommendations.tsx    # Personalized offers
│   │   │   │   │   ├── ProfileManagement.tsx  # Profile editing
│   │   │   │   │   └── RedemptionHistory.tsx  # Transaction history
│   │   │   │   ├── 📂 components/             # User-specific Components
│   │   │   │   │   ├── PersonalMetrics.tsx    # User statistics
│   │   │   │   │   ├── BarcodeCard.tsx        # QR display card
│   │   │   │   │   ├── OfferCard.tsx          # Recommendation card
│   │   │   │   │   └── ProfileForm.tsx        # Profile edit form
│   │   │   │   └── 📂 __tests__/              # User Portal Tests
│   │   │   │
│   │   │   └── 📂 __tests__/                  # Portal Integration Tests
│   │   │
│   │   ├── 📂 api/                            # API Integration Layer
│   │   │   ├── auth.api.ts                    # Authentication API client
│   │   │   ├── users.api.ts                   # User management API
│   │   │   ├── campaigns.api.ts               # Campaign API client
│   │   │   ├── qr.api.ts                      # QR management API
│   │   │   ├── redemptions.api.ts             # Redemption API client
│   │   │   ├── analytics.api.ts               # Analytics API client
│   │   │   ├── notifications.api.ts           # Notification API
│   │   │   └── base.api.ts                    # Base API configuration
│   │   │
│   │   ├── 📂 store/                          # State Management
│   │   │   ├── index.ts                       # Redux store configuration
│   │   │   ├── auth.slice.ts                  # Authentication state
│   │   │   ├── ui.slice.ts                    # UI state management
│   │   │   ├── cache.slice.ts                 # Data caching
│   │   │   ├── offline.slice.ts               # Offline state
│   │   │   └── realtime.slice.ts              # WebSocket state
│   │   │
│   │   ├── 📂 providers/                      # Context Providers
│   │   │   ├── AuthProvider.tsx               # Authentication context
│   │   │   ├── APIProvider.tsx                # API client provider
│   │   │   ├── ThemeProvider.tsx              # Theme management
│   │   │   └── OfflineProvider.tsx            # Offline capabilities
│   │   │
│   │   ├── 📂 routes/                         # Routing Configuration
│   │   │   ├── AppRouter.tsx                  # Main router component
│   │   │   ├── PrivateRoute.tsx               # Protected route wrapper
│   │   │   ├── PublicRoute.tsx                # Public route wrapper
│   │   │   └── routeConfig.ts                 # Route definitions
│   │   │
│   │   ├── 📂 guards/                         # Route Guards
│   │   │   ├── RouteGuard.tsx                 # RBAC route protection
│   │   │   ├── AdminGuard.tsx                 # Admin-only routes
│   │   │   ├── BrandGuard.tsx                 # Brand-only routes
│   │   │   └── AuthGuard.tsx                  # Authentication guard
│   │   │
│   │   ├── 📂 hocs/                           # Higher-Order Components
│   │   │   ├── withPermission.tsx             # Permission-based HOC
│   │   │   ├── withAuth.tsx                   # Authentication HOC
│   │   │   ├── withLoading.tsx                # Loading state HOC
│   │   │   └── withErrorBoundary.tsx          # Error handling HOC
│   │   │
│   │   ├── 📂 middleware/                     # Middleware
│   │   │   ├── apiInterceptors.ts             # API request/response interceptors
│   │   │   ├── authMiddleware.ts              # Authentication middleware
│   │   │   └── errorMiddleware.ts             # Error handling middleware
│   │   │
│   │   ├── 📂 utils/                          # Utility Functions
│   │   │   ├── secureStorage.ts               # Secure token storage
│   │   │   ├── xssProtection.ts               # XSS prevention
│   │   │   ├── pushNotifications.ts           # Push notification client
│   │   │   ├── touchGestures.ts               # Mobile touch interactions
│   │   │   ├── errorTracking.ts               # Client-side error tracking
│   │   │   ├── performanceMonitoring.ts       # Web vitals tracking
│   │   │   ├── userAnalytics.ts               # User behavior tracking
│   │   │   └── abTesting.ts                   # A/B testing client
│   │   │
│   │   ├── 📂 styles/                         # Styling
│   │   │   ├── globals.css                    # Global styles
│   │   │   ├── variables.css                  # CSS custom properties
│   │   │   ├── components.css                 # Component-specific styles
│   │   │   ├── mobile.css                     # Mobile optimizations
│   │   │   └── themes/                        # Theme definitions
│   │   │       ├── light.css                  # Light theme
│   │   │       └── dark.css                   # Dark theme
│   │   │
│   │   ├── 📂 assets/                         # Static Assets
│   │   │   ├── images/                        # Image assets
│   │   │   ├── icons/                         # Icon files
│   │   │   └── fonts/                         # Custom fonts
│   │   │
│   │   ├── 📂 types/                          # TypeScript Types
│   │   │   ├── api.types.ts                   # API response types
│   │   │   ├── auth.types.ts                  # Authentication types
│   │   │   ├── ui.types.ts                    # UI component types
│   │   │   └── business.types.ts              # Business logic types
│   │   │
│   │   ├── 📂 __mocks__/                      # Test Mocks
│   │   │   ├── api/                           # API mocks
│   │   │   ├── components/                    # Component mocks
│   │   │   └── utils/                         # Utility mocks
│   │   │
│   │   ├── 📂 test-utils/                     # Testing Utilities
│   │   │   ├── renderWithProviders.tsx        # Test render helper
│   │   │   ├── mockStore.ts                   # Redux mock store
│   │   │   └── testData.ts                    # Test data fixtures
│   │   │
│   │   ├── App.tsx                            # Main application component
│   │   ├── main.tsx                           # Application entry point
│   │   └── vite-env.d.ts                      # Vite environment types
│   │
│   ├── 📂 cypress/                            # E2E Testing
│   │   ├── 📂 e2e/                           # End-to-end tests
│   │   │   ├── admin-portal.cy.ts            # Admin portal E2E tests
│   │   │   ├── brand-portal.cy.ts            # Brand portal E2E tests
│   │   │   ├── pos-portal.cy.ts              # POS portal E2E tests
│   │   │   ├── user-portal.cy.ts             # User portal E2E tests
│   │   │   └── cross-portal.cy.ts            # Cross-portal workflows
│   │   ├── 📂 fixtures/                      # Test fixtures
│   │   ├── 📂 support/                       # Cypress support files
│   │   └── cypress.config.ts                 # Cypress configuration
│   │
│   ├── 📂 k8s/                               # Kubernetes Manifests
│   │   ├── namespace.yaml                    # Portal namespace
│   │   ├── deployment.yaml                   # Frontend deployment
│   │   ├── service.yaml                      # Service definition
│   │   ├── ingress.yaml                      # Ingress configuration
│   │   └── configmap.yaml                    # Configuration map
│   │
│   ├── 📂 .github/                           # GitHub Actions
│   │   └── 📂 workflows/                     # CI/CD Workflows
│   │       ├── frontend-ci.yml               # Continuous integration
│   │       ├── frontend-cd.yml               # Continuous deployment
│   │       └── visual-regression.yml         # Visual testing
│   │
│   ├── 📄 package.json                       # NPM dependencies và scripts
│   ├── 📄 package-lock.json                  # Dependency lock file
│   ├── 📄 vite.config.ts                     # Vite build configuration
│   ├── 📄 tsconfig.json                      # TypeScript configuration
│   ├── 📄 tailwind.config.js                 # Tailwind CSS configuration
│   ├── 📄 eslint.config.js                   # ESLint configuration
│   ├── 📄 prettier.config.js                 # Prettier configuration
│   ├── 📄 vitest.config.ts                   # Vitest testing configuration
│   ├── 📄 Dockerfile                         # Container configuration
│   ├── 📄 nginx.conf                         # Nginx web server config
│   ├── 📄 .env.example                       # Environment variables template
│   ├── 📄 .gitignore                         # Git ignore patterns
│   └── 📄 README.md                          # Project documentation
│
└── 📂 shared-packages/                       # Shared NPM Packages
    ├── 📂 @psp/shared-ui/                    # Shared UI Components
    │   ├── 📂 src/components/                # Reusable components
    │   ├── 📂 src/hooks/                     # Custom React hooks
    │   ├── 📂 src/utils/                     # UI utilities
    │   ├── package.json                      # Package configuration
    │   └── index.ts                          # Package exports
    │
    ├── 📂 @psp/shared-core/                  # Already exists
    └── 📂 @psp/shared-events/                # Already exists
```

---

## 🔧 **IMPLEMENTATION CHECKLIST**

### **Phase 1: PROJECT SETUP & FOUNDATION** ⚙️

#### **1.1 Khởi tạo dự án frontend**
- [ ] **Tạo psp-unified-portal repository**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements + Part10.1 Design System Foundation
  - *Mô tả*: Thiết lập React 18 + TypeScript + Vite project với modern tooling
  - *File tạo*: `package.json`, `vite.config.ts`, `tsconfig.json`, toàn bộ folder structure
  - *Ý nghĩa*: Single frontend repository cho tất cả 4 portals, EMSA-v1.0 compliant

#### **1.2 Setup Shared Packages Dependencies**
- [ ] **Install shared NPM packages**
  - *Tham chiếu*: EMSA-v1.0 Package Standards + Part10.8 UI Components
  - *Mô tả*: Install @psp/shared-core, @psp/shared-events, @psp/shared-ui packages
  - *File tạo*: Updated `package.json` với proper versions
  - *Ý nghĩa*: Consistent shared utilities và UI components across all portals

#### **1.3 Modern Frontend Stack Setup**
- [ ] **Setup development environment**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Vite, TypeScript, Tailwind CSS, ESLint, Prettier, Vitest configurations
  - *File tạo*: `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`, `prettier.config.js`, `vitest.config.ts`
  - *Ý nghĩa*: Modern development experience với fast HMR và type safety

#### **1.4 Design System Foundation**
- [ ] **Setup design system foundation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1 Design System Foundation
  - *Mô tả*: Tailwind theme configuration, CSS custom properties, component library foundation
  - *File tạo*: `src/styles/globals.css`, `src/styles/variables.css`, `tailwind.config.js` với custom theme
  - *Ý nghĩa*: Consistent design language across all 4 portals

### **Phase 2: CORE ARCHITECTURE & ROUTING** 🏗️

#### **2.1 Application Shell Implementation**
- [ ] **Implement main application shell**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.2 Admin Interface + Part10 User Interface
  - *Mô tả*: Main App component với routing, providers, error boundaries
  - *File tạo*: `src/App.tsx`, `src/main.tsx`
  - *Ý nghĩa*: Single-page application entry point cho multi-portal architecture

#### **2.2 Routing Architecture Implementation**
- [ ] **Implement sophisticated routing system**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3-10.5 Portal Interfaces + Access_Control_Tree_Grok.md
  - *Mô tả*: React Router với RBAC-based routing, lazy loading, route guards
  - *File tạo*: `src/routes/AppRouter.tsx`, `src/routes/routeConfig.ts`, `src/guards/RouteGuard.tsx`
  - *Ý nghĩa*: Secure, role-based navigation between 4 different portal interfaces

#### **2.3 State Management Architecture**
- [ ] **Implement Redux Toolkit với RTK Query**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08 API Design + Part04.2.8 Real Time Analytics
  - *Mô tả*: Centralized state management với API caching, real-time updates
  - *File tạo*: `src/store/index.ts`, `src/store/auth.slice.ts`, `src/store/ui.slice.ts`, `src/api/base.api.ts`
  - *Ý nghĩa*: Efficient data management và API integration across all portals

#### **2.4 Provider Architecture Implementation**
- [ ] **Implement context providers ecosystem**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements + Part10.1 Design System Foundation
  - *Mô tả*: Authentication, theme, API, offline providers
  - *File tạo*: `src/providers/AuthProvider.tsx`, `src/providers/ThemeProvider.tsx`, `src/providers/APIProvider.tsx`
  - *Ý nghĩa*: Clean separation of concerns và dependency injection

### **Phase 3: SHARED UI COMPONENT LIBRARY** 🧩

#### **3.1 Base UI Components Implementation**
- [ ] **Implement foundational UI components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8 UI Components + Part10.1 Design System Foundation
  - *Mô tả*: Button, Input, Select, Card, Table components với consistent styling
  - *File tạo*: `src/components/ui/forms/`, `src/components/ui/data-display/`, `src/components/ui/feedback/`
  - *Ý nghĩa*: Reusable component library ensuring UI consistency across all portals

#### **3.2 Navigation Components Implementation**
- [ ] **Implement navigation component library**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.8 UI Components + Access_Control_Tree_Grok.md
  - *Mô tả*: Sidebar, breadcrumb, pagination, tabs với RBAC integration
  - *File tạo*: `src/components/ui/navigation/`
  - *Ý nghĩa*: Consistent navigation patterns với role-based visibility

#### **3.3 Charts & Analytics Components**
- [ ] **Implement analytics visualization library**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics + Part04.3.2 A/B Testing
  - *Mô tả*: Chart components using Recharts, metric cards, dashboard layouts
  - *File tạo*: `src/components/charts/`
  - *Ý nghĩa*: Consistent data visualization across admin, brand, và analytics interfaces

#### **3.4 QR-Specific Components**
- [ ] **Implement QR code component library**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management + Part04.2.7 Barcode Redemption
  - *Mô tả*: QR display, scanning, generation components với Scandit integration
  - *File tạo*: `src/components/qr/`
  - *Ý nghĩa*: Specialized QR handling components for brand và POS portals

### **Phase 4: PORTAL IMPLEMENTATIONS** 🏢

#### **4.1 Admin Portal Implementation**
- [ ] **Implement Super Admin portal**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.3 Admin Portal (User Management) + Part04.1.4 User Management (FR-004)
  - *Mô tả*: User management, role administration, system settings, audit logs
  - *File tạo*: `src/portals/admin/`, admin pages và components
  - *Ý nghĩa*: Complete administrative interface cho system management

#### **4.2 Brand Portal Implementation**
- [ ] **Implement Brand Admin portal**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4 Brand Portal (Campaign Management) + Part04.2.1 Campaign Management (FR-001)
  - *Mô tả*: Campaign creation, QR management, ads editor, analytics dashboard
  - *File tạo*: `src/portals/brand/`, brand pages và components
  - *Ý nghĩa*: Brand-focused interface cho campaign management và analytics

#### **4.3 POS Portal Implementation**
- [ ] **Implement Point-of-Sale portal**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.7 Barcode Redemption (FR-007) + Part04.3.1 Fraud Detection (FR-011)
  - *Mô tả*: QR scanning với Scandit SDK, redemption interface, offline support
  - *File tạo*: `src/portals/pos/`, POS pages và components
  - *Ý nghĩa*: Retail-optimized interface cho customer redemption processing

#### **4.4 User Portal Implementation**
- [ ] **Implement Customer portal**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.5 User Portal + Part04.3.3 Recommendation Engine (FR-013)
  - *Mô tả*: Personal dashboard, barcode collection, recommendations, profile management
  - *File tạo*: `src/portals/user/`, user pages và components
  - *Ý nghĩa*: Customer-facing interface cho personal experience management

### **Phase 5: API INTEGRATION & SECURITY** 🔗

#### **5.1 API Client Implementation**
- [ ] **Implement comprehensive API layer**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.1.1 Authentication APIs + Part08.2.1 Campaign APIs + Part08.3.1 Redemption APIs
  - *Mô tả*: RTK Query API clients cho all backend services
  - *File tạo*: `src/api/*.api.ts` files
  - *Ý nghĩa*: Type-safe API integration với automatic caching và error handling

#### **5.2 Security Implementation**
- [ ] **Implement frontend security measures**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements + Access_Control_Tree_Grok.md
  - *Mô tả*: Route guards, permission HOCs, secure storage, XSS protection
  - *File tạo*: `src/guards/`, `src/hocs/`, `src/utils/secureStorage.ts`
  - *Ý nghĩa*: Comprehensive client-side security với RBAC enforcement

#### **5.3 Authentication & Authorization**
- [ ] **Implement auth system integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.1.3 User Authentication + Part04.1.5 OTP Verification
  - *Mô tả*: JWT token management, role-based UI rendering, session handling
  - *File tạo*: `src/providers/AuthProvider.tsx`, `src/store/auth.slice.ts`
  - *Ý nghĩa*: Seamless authentication experience với automatic token refresh

### **Phase 6: PWA & MOBILE OPTIMIZATION** 📱

#### **6.1 Progressive Web App Setup**
- [ ] **Implement PWA capabilities**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements + Part10.1 Design System Foundation
  - *Mô tả*: Service worker, PWA manifest, offline caching strategies
  - *File tạo*: `public/sw.js`, `public/manifest.json`, offline utilities
  - *Ý nghĩa*: App-like experience với offline functionality cho POS portal

#### **6.2 Mobile Optimization**
- [ ] **Implement mobile-first design**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.1 Design System Foundation + Part04.2.7 Barcode Redemption
  - *Mô tả*: Responsive design, touch gestures, mobile-optimized components
  - *File tạo*: `src/styles/mobile.css`, `src/utils/touchGestures.ts`
  - *Ý nghĩa*: Excellent mobile experience đặc biệt cho user portal và POS scanning

#### **6.3 Push Notifications**
- [ ] **Implement push notification system**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Web push notifications cho real-time alerts
  - *File tạo*: `src/utils/pushNotifications.ts`
  - *Ý nghĩa*: Real-time engagement với users về promotions và redemptions

### **Phase 7: TESTING INFRASTRUCTURE** 🧪

#### **7.1 Unit & Component Testing**
- [ ] **Implement comprehensive testing suite**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Frontend Testing
  - *Mô tả*: Vitest + React Testing Library cho component testing
  - *File tạo*: `src/components/__tests__/`, test utilities
  - *Ý nghĩa*: High-quality code với 90%+ test coverage

#### **7.2 Integration Testing**
- [ ] **Implement API integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.2 Integration Testing
  - *Mô tả*: API mocking, portal workflow testing
  - *File tạo*: `src/portals/__tests__/`, `src/__mocks__/api/`
  - *Ý nghĩa*: Reliable integration between frontend và backend services

#### **7.3 End-to-End Testing**
- [ ] **Implement E2E testing với Cypress**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.3 E2E Testing
  - *Mô tả*: Complete user journey testing across all portals
  - *File tạo*: `cypress/e2e/`, cross-portal workflow tests
  - *Ý nghĩa*: Confidence trong complete user workflows từ login đến redemption

#### **7.4 Visual Regression Testing**
- [ ] **Implement visual testing**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Frontend Testing + Part10.1 Design System Foundation
  - *Mô tả*: Screenshot comparison testing cho UI consistency
  - *File tạo*: `src/components/__tests__/visual/`, visual test setup
  - *Ý nghĩa*: Prevent UI regressions và maintain design system consistency

### **Phase 8: DEPLOYMENT & MONITORING** 🚀

#### **8.1 Container & Deployment Setup**
- [ ] **Implement deployment infrastructure**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Containerization + Part15.2 CI/CD Pipelines
  - *Mô tả*: Docker containerization, Nginx configuration, Kubernetes manifests
  - *File tạo*: `Dockerfile`, `nginx.conf`, `k8s/` manifests
  - *Ý nghĩa*: Production-ready deployment với container orchestration

#### **8.2 CI/CD Pipeline Implementation**
- [ ] **Implement automated deployment pipeline**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.2 CI/CD Pipelines
  - *Mô tả*: GitHub Actions workflows cho testing, building, deployment
  - *File tạo*: `.github/workflows/frontend-ci.yml`, `frontend-cd.yml`
  - *Ý nghĩa*: Automated quality assurance và deployment

#### **8.3 Monitoring & Analytics Setup**
- [ ] **Implement frontend monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Monitoring Stack + Part04.2.8 Real Time Analytics
  - *Mô tả*: Error tracking, performance monitoring, user analytics
  - *File tạo*: `src/utils/errorTracking.ts`, `performanceMonitoring.ts`, `userAnalytics.ts`
  - *Ý nghĩa*: Production monitoring và user behavior insights

---

## 🎯 **KẾT LUẬN**

**Tổng số files được map**: 180+ files với đầy đủ SRS references  
**Frontend Architecture**: Modern React 18 + TypeScript + Vite stack  
**4 Portal Applications**: Admin, Brand, POS, User interfaces  
**50+ UI Components**: Complete shared component library  
**API Coverage**: Complete integration với all 5 backend services  
**Testing Strategy**: Unit, Integration, E2E, Visual testing  
**PWA Support**: Offline-first capabilities cho mobile users  
**Security**: RBAC-based routing, XSS protection, secure storage  

**Estimated timeline**: 10-12 tuần cho 1 frontend team (4-5 developers)  
**SRS coverage**: 100% cho UI requirements (Part10)  
**EMSA-v1.0 compliance**: Full compliance với modern frontend standards  
**Integration points**: Ready cho integration với all 5 backend services  
**Professional standards**: PWA capabilities, modern tooling, comprehensive testing  

**Sub-Project 7 hoàn chỉnh! Portal & Experience Service với unified frontend architecture theo EMSA-v1.0 và SRS specifications! 🚀**

**UNIQUE VALUE PROPOSITIONS:**
- **Unified Portal Experience**: Single codebase cho 4 different user personas
- **Modern Stack**: React 18 + TypeScript + Vite cho excellent DX
- **Mobile-First PWA**: Installable application với offline capabilities
- **Component Library**: Reusable design system ensuring consistency
- **RBAC Integration**: Role-based UI rendering và navigation
- **Real-time Features**: WebSocket integration cho live updates
- **Comprehensive Testing**: Unit, Integration, E2E, Visual testing
- **Production Ready**: Docker, K8s, monitoring, CI/CD automation

**Frontend-Backend Separation Benefits:**
- **Independent Development**: Frontend team có thể work parallel với backend teams
- **Technology Flexibility**: Latest React features independent của backend tech
- **Easier Scaling**: Frontend và backend scale independently  
- **Better Testing**: Clear API contracts enable comprehensive mocking
- **User Experience Focus**: Dedicated frontend optimization cho better UX
