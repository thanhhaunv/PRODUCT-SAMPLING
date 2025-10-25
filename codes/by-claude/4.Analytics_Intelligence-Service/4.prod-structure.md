# 🚀 Sub-Project 4: Analytics & Intelligence Service - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **🏗️ BACKEND DOMAIN** | | | | |
| Entities | `backend/src/domain/entities/AnalyticsEvent.ts` | Core analytics event entity với business rules | Part04.3.2 Real Time Analytics (FR-008) | Encapsulate event tracking logic |
| Entities | `backend/src/domain/entities/Experiment.ts` | A/B testing experiment entity | Part04.5.1 A/B Testing (FR-012) | Manage experiment lifecycle |
| Entities | `backend/src/domain/entities/ExperimentVariant.ts` | Experiment variant entity | Part04.5.1 A/B Testing (FR-012) | Handle variant configurations |
| Entities | `backend/src/domain/entities/Recommendation.ts` | ML recommendation entity | Part04.5.2 Recommendation Engine (FR-013) | Encapsulate recommendation logic |
| Entities | `backend/src/domain/entities/Report.ts` | Custom report entity | Part04.5.3 Advanced Reporting (FR-014) | Manage report generation |
| Entities | `backend/src/domain/entities/Dashboard.ts` | Analytics dashboard entity | Part04.3.2 Real Time Analytics (FR-008) | Configure dashboard layouts |
| Entities | `backend/src/domain/entities/Metric.ts` | Performance metric entity | Part04.3.2 Real Time Analytics (FR-008) | Define metric calculations |
| Entities | `backend/src/domain/entities/Cohort.ts` | User cohort analysis entity | Part04.3.2 Real Time Analytics (FR-008) | Group user behaviors |
| Value Objects | `backend/src/domain/value-objects/MetricValue.ts` | Metric value với validation | Part04.3.2 Real Time Analytics | Standardized metric values |
| Value Objects | `backend/src/domain/value-objects/TimeRange.ts` | Time period value object | Part04.3.2 Real Time Analytics | Consistent time handling |
| Value Objects | `backend/src/domain/value-objects/ConfidenceLevel.ts` | Statistical confidence level | Part04.5.1 A/B Testing | A/B test statistical validation |
| Value Objects | `backend/src/domain/value-objects/RecommendationScore.ts` | ML recommendation score | Part04.5.2 Recommendation Engine | Score validation (0-100) |
| Repositories | `backend/src/domain/repositories/IAnalyticsEventRepository.ts` | Analytics event repository interface | Part06.2.1 Layered Architecture | Event storage contract |
| Repositories | `backend/src/domain/repositories/IExperimentRepository.ts` | Experiment repository interface | Part06.2.1 Layered Architecture | A/B test data contract |
| Repositories | `backend/src/domain/repositories/IRecommendationRepository.ts` | Recommendation repository interface | Part06.2.1 Layered Architecture | ML data storage contract |
| Repositories | `backend/src/domain/repositories/IReportRepository.ts` | Report repository interface | Part06.2.1 Layered Architecture | Report storage contract |
| Repositories | `backend/src/domain/repositories/IDashboardRepository.ts` | Dashboard repository interface | Part06.2.1 Layered Architecture | Dashboard config contract |
| Domain Services | `backend/src/domain/services/StatisticalAnalysisDomainService.ts` | Statistical calculation business logic | Part04.5.1 A/B Testing (FR-012) | A/B test confidence calculations |
| Domain Services | `backend/src/domain/services/RecommendationEngineDomainService.ts` | ML recommendation business logic | Part04.5.2 Recommendation Engine (FR-013) | Collaborative filtering algorithms |
| Domain Services | `backend/src/domain/services/MetricCalculationDomainService.ts` | Metric computation business logic | Part04.3.2 Real Time Analytics (FR-008) | Real-time metric calculations |
| Domain Services | `backend/src/domain/services/CohortAnalysisDomainService.ts` | User cohort analysis logic | Part04.3.2 Real Time Analytics (FR-008) | Behavioral segmentation |
| **📄 BACKEND APPLICATION** | | | | |
| Use Cases | `backend/src/application/use-cases/analytics/CreateAnalyticsEventUseCase.ts` | Analytics event creation workflow | Part04.3.2 Real Time Analytics (FR-008) | Track user events |
| Use Cases | `backend/src/application/use-cases/analytics/GetDashboardMetricsUseCase.ts` | Dashboard metrics retrieval | Part04.3.2 Real Time Analytics (FR-008) | Real-time dashboard data |
| Use Cases | `backend/src/application/use-cases/analytics/GenerateReportUseCase.ts` | Custom report generation workflow | Part04.5.3 Advanced Reporting (FR-014) | Create custom reports |
| Use Cases | `backend/src/application/use-cases/analytics/CalculateMetricsUseCase.ts` | Real-time metric calculation | Part04.3.2 Real Time Analytics (FR-008) | Live metric updates |
| Use Cases | `backend/src/application/use-cases/experiments/CreateExperimentUseCase.ts` | A/B test experiment creation | Part04.5.1 A/B Testing (FR-012) | Setup A/B tests |
| Use Cases | `backend/src/application/use-cases/experiments/AssignUserToVariantUseCase.ts` | User variant assignment logic | Part04.5.1 A/B Testing (FR-012) | A/B test user allocation |
| Use Cases | `backend/src/application/use-cases/experiments/AnalyzeExperimentResultsUseCase.ts` | Statistical analysis of experiments | Part04.5.1 A/B Testing (FR-012) | A/B test result analysis |
| Use Cases | `backend/src/application/use-cases/experiments/GetExperimentMetricsUseCase.ts` | Experiment performance retrieval | Part04.5.1 A/B Testing (FR-012) | A/B test monitoring |
| Use Cases | `backend/src/application/use-cases/recommendations/GenerateRecommendationsUseCase.ts` | ML recommendation generation | Part04.5.2 Recommendation Engine (FR-013) | Personalized offers |
| Use Cases | `backend/src/application/use-cases/recommendations/TrainModelUseCase.ts` | ML model training workflow | Part04.5.2 Recommendation Engine (FR-013) | Update recommendation models |
| Use Cases | `backend/src/application/use-cases/recommendations/GetUserRecommendationsUseCase.ts` | User-specific recommendations | Part04.5.2 Recommendation Engine (FR-013) | Fetch personalized offers |
| Use Cases | `backend/src/application/use-cases/recommendations/UpdateRecommendationFeedbackUseCase.ts` | Recommendation feedback processing | Part04.5.2 Recommendation Engine (FR-013) | Improve ML accuracy |
| Use Cases | `backend/src/application/use-cases/reporting/ScheduleReportUseCase.ts` | Automated report scheduling | Part04.5.3 Advanced Reporting (FR-014) | Schedule report delivery |
| Use Cases | `backend/src/application/use-cases/reporting/ExportReportUseCase.ts` | Report export functionality | Part04.5.3 Advanced Reporting (FR-014) | Export reports (CSV/PDF) |
| Use Cases | `backend/src/application/use-cases/cohorts/AnalyzeCohortBehaviorUseCase.ts` | Cohort analysis workflow | Part04.3.2 Real Time Analytics (FR-008) | User behavior segmentation |
| Use Cases | `backend/src/application/use-cases/cohorts/CreateCohortUseCase.ts` | Cohort creation workflow | Part04.3.2 Real Time Analytics (FR-008) | Define user segments |
| DTOs | `backend/src/application/dto/AnalyticsDTO.ts` | Analytics data transfer objects | Part08.4.1 Analytics APIs | API contract definitions |
| DTOs | `backend/src/application/dto/ExperimentDTO.ts` | A/B testing DTOs | Part08.4.2 A/B Testing APIs | Experiment API contracts |
| DTOs | `backend/src/application/dto/RecommendationDTO.ts` | Recommendation DTOs | Part08.4.3 Recommendation APIs | ML API contracts |
| DTOs | `backend/src/application/dto/ReportDTO.ts` | Report generation DTOs | Part08.4.4 Custom Reports APIs | Reporting API contracts |
| DTOs | `backend/src/application/dto/DashboardDTO.ts` | Dashboard data DTOs | Part08.4.1 Analytics APIs | Dashboard API contracts |
| DTOs | `backend/src/application/dto/MetricDTO.ts` | Metric calculation DTOs | Part08.4.1 Analytics APIs | Metric API contracts |
| Ports | `backend/src/application/ports/IMLModelService.ts` | Machine learning service interface | Part09.3.1 ML Service Integration | External ML integration |
| Ports | `backend/src/application/ports/IEventStreamService.ts` | Event streaming service interface | Part06.1.2 Event Bus | Real-time event processing |
| Ports | `backend/src/application/ports/IReportGeneratorService.ts` | Report generation service interface | Part04.5.3 Advanced Reporting | External report tools |
| Ports | `backend/src/application/ports/INotificationService.ts` | Notification service interface | Part04.5.3 Advanced Reporting | Report delivery notifications |
| **🏗️ BACKEND INFRASTRUCTURE** | | | | |
| Repositories | `backend/src/infrastructure/persistence/repositories/AnalyticsEventRepository.ts` | PostgreSQL analytics event repository | Part07.5.1 Analytics_Event Table | Event data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/ExperimentRepository.ts` | Experiment data access implementation | Part07.5.2 AB_Test Table | A/B test data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/RecommendationRepository.ts` | MongoDB recommendation storage | Part07.5.3 Recommendation Collection | ML data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/ReportRepository.ts` | Report metadata storage | Part07.5.4 Report Table | Report configuration storage |
| Repositories | `backend/src/infrastructure/persistence/repositories/DashboardRepository.ts` | Dashboard configuration storage | Part07.5.5 Dashboard Table | Dashboard layout persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/CohortRepository.ts` | User cohort data access | Part07.5.6 Cohort Table | Cohort analysis storage |
| Models | `backend/src/infrastructure/persistence/models/AnalyticsEventModel.ts` | Prisma analytics event model | Part07.5.1 Analytics_Event Table | Event schema mapping |
| Models | `backend/src/infrastructure/persistence/models/ExperimentModel.ts` | A/B test database model | Part07.5.2 AB_Test Table | Experiment schema mapping |
| Models | `backend/src/infrastructure/persistence/models/RecommendationModel.ts` | MongoDB recommendation model | Part07.5.3 Recommendation Collection | ML schema mapping |
| Models | `backend/src/infrastructure/persistence/models/ReportModel.ts` | Report metadata model | Part07.5.4 Report Table | Report schema |
| Models | `backend/src/infrastructure/persistence/models/DashboardModel.ts` | Dashboard configuration model | Part07.5.5 Dashboard Table | Dashboard schema |
| Models | `backend/src/infrastructure/persistence/models/MetricModel.ts` | Metric calculation model | Part07.5.7 Metric Table | Metric schema mapping |
| Migrations | `backend/src/infrastructure/persistence/migrations/001_create_analytics_events.sql` | Analytics events table creation | Part07.5.1 Analytics_Event Table | Initial event schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/002_create_experiments.sql` | A/B testing tables creation | Part07.5.2 AB_Test Table | Experiment schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/003_create_reports.sql` | Report tables creation | Part07.5.4 Report Table | Report metadata schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/004_create_dashboards.sql` | Dashboard tables creation | Part07.5.5 Dashboard Table | Dashboard schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/005_create_metrics.sql` | Metric tables creation | Part07.5.7 Metric Table | Metric calculation schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/006_create_cohorts.sql` | Cohort analysis tables | Part07.5.6 Cohort Table | Cohort schema setup |
| External Services | `backend/src/infrastructure/external-services/MLModelAdapter.ts` | Machine learning model adapter | Part09.3.1 ML Service Integration | TensorFlow/PyTorch integration |
| External Services | `backend/src/infrastructure/external-services/EventStreamAdapter.ts` | Event streaming adapter | Part06.1.2 Event Bus | RabbitMQ/Kafka integration |
| External Services | `backend/src/infrastructure/external-services/ReportGeneratorAdapter.ts` | Report generation adapter | Part04.5.3 Advanced Reporting | PDF/CSV generation |
| External Services | `backend/src/infrastructure/external-services/NotificationAdapter.ts` | Notification service adapter | Part04.5.3 Advanced Reporting | Email/SMS notifications |
| External Services | `backend/src/infrastructure/external-services/CacheAdapter.ts` | Redis caching adapter | Part06.3.1 Caching Strategy | High-performance caching |
| Config | `backend/src/infrastructure/config/DatabaseConfig.ts` | Database configuration | Part15.2 Environment Configuration | Multi-DB connection setup |
| Config | `backend/src/infrastructure/config/MLModelConfig.ts` | ML model configuration | Part09.3.1 ML Service Integration | Model parameter settings |
| Config | `backend/src/infrastructure/config/EventStreamConfig.ts` | Event streaming configuration | Part06.1.2 Event Bus | Event processing settings |
| Config | `backend/src/infrastructure/config/CacheConfig.ts` | Redis cache configuration | Part06.3.1 Caching Strategy | Cache optimization settings |
| **🎮 BACKEND PRESENTATION** | | | | |
| Controllers | `backend/src/presentation/controllers/AnalyticsController.ts` | Analytics REST endpoints | Part08.4.1 Analytics APIs | Real-time analytics endpoints |
| Controllers | `backend/src/presentation/controllers/ExperimentController.ts` | A/B testing REST endpoints | Part08.4.2 A/B Testing APIs | Experiment management endpoints |
| Controllers | `backend/src/presentation/controllers/RecommendationController.ts` | Recommendation REST endpoints | Part08.4.3 Recommendation APIs | ML recommendation endpoints |
| Controllers | `backend/src/presentation/controllers/ReportController.ts` | Report generation REST endpoints | Part08.4.4 Custom Reports APIs | Report management endpoints |
| Controllers | `backend/src/presentation/controllers/DashboardController.ts` | Dashboard REST endpoints | Part08.4.1 Analytics APIs | Dashboard configuration endpoints |
| Controllers | `backend/src/presentation/controllers/CohortController.ts` | Cohort analysis REST endpoints | Part08.4.1 Analytics APIs | Cohort management endpoints |
| Middleware | `backend/src/presentation/middleware/AnalyticsAuthMiddleware.ts` | Analytics-specific authentication | Part05.3 Security Requirements | RBAC for analytics access |
| Middleware | `backend/src/presentation/middleware/RateLimitingMiddleware.ts` | API rate limiting | Part05.1 Performance Requirements | Prevent API abuse |
| Middleware | `backend/src/presentation/middleware/EventTrackingMiddleware.ts` | Automatic event tracking | Part04.3.2 Real Time Analytics | Auto-track API usage |
| Middleware | `backend/src/presentation/middleware/ErrorHandlingMiddleware.ts` | Centralized error handling | Part05.4 Error Handling | Consistent error responses |
| Routes | `backend/src/presentation/routes/AnalyticsRoutes.ts` | Analytics API route definitions | Part08.4.1 Analytics APIs | Route mapping |
| Routes | `backend/src/presentation/routes/ExperimentRoutes.ts` | A/B testing route definitions | Part08.4.2 A/B Testing APIs | Experiment route mapping |
| Routes | `backend/src/presentation/routes/RecommendationRoutes.ts` | Recommendation route definitions | Part08.4.3 Recommendation APIs | ML route mapping |
| Routes | `backend/src/presentation/routes/ReportRoutes.ts` | Report generation route definitions | Part08.4.4 Custom Reports APIs | Report route mapping |
| Routes | `backend/src/presentation/routes/DashboardRoutes.ts` | Dashboard route definitions | Part08.4.1 Analytics APIs | Dashboard route mapping |
| Routes | `backend/src/presentation/routes/CohortRoutes.ts` | Cohort analysis route definitions | Part08.4.1 Analytics APIs | Cohort route mapping |
| Validators | `backend/src/presentation/validators/AnalyticsValidator.ts` | Analytics input validation | Part05.7 Input Validation | Event data validation |
| Validators | `backend/src/presentation/validators/ExperimentValidator.ts` | A/B test input validation | Part05.7 Input Validation | Experiment data validation |
| Validators | `backend/src/presentation/validators/RecommendationValidator.ts` | Recommendation input validation | Part05.7 Input Validation | ML data validation |
| Validators | `backend/src/presentation/validators/ReportValidator.ts` | Report input validation | Part05.7 Input Validation | Report data validation |
| Validators | `backend/src/presentation/validators/MetricValidator.ts` | Metric input validation | Part05.7 Input Validation | Metric data validation |
| **🔧 BACKEND SHARED** | | | | |
| Constants | `backend/src/shared/constants/AnalyticsConstants.ts` | Analytics application constants | Part04.3.2 Real Time Analytics | Metric thresholds, limits |
| Constants | `backend/src/shared/constants/ExperimentConstants.ts` | A/B testing constants | Part04.5.1 A/B Testing | Statistical confidence levels |
| Constants | `backend/src/shared/constants/RecommendationConstants.ts` | ML model constants | Part04.5.2 Recommendation Engine | Model parameters, thresholds |
| Constants | `backend/src/shared/constants/ReportConstants.ts` | Report generation constants | Part04.5.3 Advanced Reporting | Export formats, limits |
| Exceptions | `backend/src/shared/exceptions/AnalyticsException.ts` | Analytics-specific exceptions | Part05.4 Error Handling | Custom analytics errors |
| Exceptions | `backend/src/shared/exceptions/ExperimentException.ts` | A/B testing exceptions | Part05.4 Error Handling | Experiment-specific errors |
| Exceptions | `backend/src/shared/exceptions/RecommendationException.ts` | ML model exceptions | Part05.4 Error Handling | ML-specific errors |
| Exceptions | `backend/src/shared/exceptions/ReportException.ts` | Report generation exceptions | Part05.4 Error Handling | Report-specific errors |
| Types | `backend/src/shared/types/AnalyticsTypes.ts` | Analytics TypeScript definitions | Part08.4.1 Analytics APIs | Event type definitions |
| Types | `backend/src/shared/types/ExperimentTypes.ts` | A/B testing type definitions | Part08.4.2 A/B Testing APIs | Experiment type definitions |
| Types | `backend/src/shared/types/RecommendationTypes.ts` | ML model type definitions | Part08.4.3 Recommendation APIs | ML type definitions |
| Types | `backend/src/shared/types/ReportTypes.ts` | Report type definitions | Part08.4.4 Custom Reports APIs | Report type definitions |
| Types | `backend/src/shared/types/MetricTypes.ts` | Metric calculation types | Part08.4.1 Analytics APIs | Metric type definitions |
| Utils | `backend/src/shared/utils/StatisticalUtils.ts` | Statistical calculation utilities | Part04.5.1 A/B Testing | A/B test statistical functions |
| Utils | `backend/src/shared/utils/DateTimeUtils.ts` | Date/time manipulation utilities | Part04.3.2 Real Time Analytics | Time series handling |
| Utils | `backend/src/shared/utils/DataTransformUtils.ts` | Data transformation utilities | Part04.3.2 Real Time Analytics | Metric data processing |
| Utils | `backend/src/shared/utils/ValidationUtils.ts` | Input validation utilities | Part05.7 Input Validation | Shared validation functions |
| Utils | `backend/src/shared/utils/CacheUtils.ts` | Cache management utilities | Part06.3.1 Caching Strategy | Redis cache helpers |
| **🧪 BACKEND TESTING** | | | | |
| Unit Tests | `backend/tests/unit/domain/entities/AnalyticsEvent.test.ts` | Analytics event entity tests | Part12.1 Unit Testing | Domain logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/Experiment.test.ts` | Experiment entity tests | Part12.1 Unit Testing | A/B test logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/Recommendation.test.ts` | Recommendation entity tests | Part12.1 Unit Testing | ML logic testing |
| Unit Tests | `backend/tests/unit/domain/services/StatisticalAnalysisService.test.ts` | Statistical service tests | Part12.1 Unit Testing | Statistical calculation testing |
| Unit Tests | `backend/tests/unit/domain/services/RecommendationEngineService.test.ts` | ML service tests | Part12.1 Unit Testing | ML algorithm testing |
| Unit Tests | `backend/tests/unit/application/use-cases/CreateExperiment.test.ts` | Create experiment use case tests | Part12.1 Unit Testing | A/B test workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/GenerateRecommendations.test.ts` | Generate recommendations tests | Part12.1 Unit Testing | ML workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/CalculateMetrics.test.ts` | Calculate metrics tests | Part12.1 Unit Testing | Metric calculation testing |
| Integration Tests | `backend/tests/integration/repositories/AnalyticsEventRepository.test.ts` | Analytics repository tests | Part12.2 Integration Testing | Database integration testing |
| Integration Tests | `backend/tests/integration/repositories/ExperimentRepository.test.ts` | Experiment repository tests | Part12.2 Integration Testing | A/B test data testing |
| Integration Tests | `backend/tests/integration/repositories/RecommendationRepository.test.ts` | Recommendation repository tests | Part12.2 Integration Testing | ML data testing |
| Integration Tests | `backend/tests/integration/external-services/MLModelAdapter.test.ts` | ML adapter tests | Part12.2 Integration Testing | External ML service testing |
| Integration Tests | `backend/tests/integration/external-services/EventStreamAdapter.test.ts` | Event stream tests | Part12.2 Integration Testing | Event bus testing |
| Integration Tests | `backend/tests/integration/external-services/ReportGeneratorAdapter.test.ts` | Report generator tests | Part12.2 Integration Testing | Report service testing |
| E2E Tests | `backend/tests/e2e/analytics/dashboard-metrics.test.ts` | Dashboard metrics E2E tests | Part12.3 E2E Testing | Complete analytics flow |
| E2E Tests | `backend/tests/e2e/experiments/ab-test-flow.test.ts` | A/B testing E2E tests | Part12.3 E2E Testing | Complete A/B test flow |
| E2E Tests | `backend/tests/e2e/recommendations/recommendation-flow.test.ts` | Recommendation E2E tests | Part12.3 E2E Testing | Complete ML flow |
| E2E Tests | `backend/tests/e2e/reports/report-generation.test.ts` | Report generation E2E tests | Part12.3 E2E Testing | Complete reporting flow |
| **📁 PROJECT CONFIGURATION** | | | | |
| Package Config | `backend/package.json` | Node.js dependencies và scripts | EMSA-v1.0 Package Standards | NestJS, Prisma, Redis dependencies |
| TypeScript Config | `backend/tsconfig.json` | TypeScript compilation settings | EMSA-v1.0 TypeScript Config | Strict type checking |
| Testing Config | `backend/jest.config.js` | Jest testing configuration | EMSA-v1.0 Testing Standards | Unit, integration, E2E setup |
| Linting Config | `backend/eslint.config.js` | ESLint code quality rules | EMSA-v1.0 ESLint Config | Code quality enforcement |
| Database Config | `backend/prisma/schema.prisma` | Database schema definition | Part07.5 Analytics Database Design | Multi-database schema |
| Docker Config | `backend/Dockerfile` | Container configuration | EMSA-v1.0 Docker Standards | Production-ready container |
| Environment | `backend/.env.example` | Environment variables template | Part15.2 Environment Configuration | Configuration management |
| Documentation | `backend/README.md` | Project documentation | EMSA-v1.0 Documentation Standards | Setup và usage guide |

---

## 🏗️ **EMSA-v1.0 FOLDER STRUCTURE**

```
analytics-intelligence-service/
└── backend/
    ├── src/
    │   ├── domain/                           # Domain Layer (Pure Business Logic)
    │   │   ├── entities/                     # Business Entities with Rules
    │   │   │   ├── AnalyticsEvent.ts         # Core event tracking entity
    │   │   │   ├── Experiment.ts             # A/B testing experiment entity
    │   │   │   ├── ExperimentVariant.ts      # Experiment variant entity
    │   │   │   ├── Recommendation.ts         # ML recommendation entity
    │   │   │   ├── Report.ts                 # Custom report entity
    │   │   │   ├── Dashboard.ts              # Analytics dashboard entity
    │   │   │   ├── Metric.ts                 # Performance metric entity
    │   │   │   └── Cohort.ts                 # User cohort entity
    │   │   ├── value-objects/                # Immutable Value Objects
    │   │   │   ├── MetricValue.ts            # Standardized metric values
    │   │   │   ├── TimeRange.ts              # Time period handling
    │   │   │   ├── ConfidenceLevel.ts        # Statistical confidence levels
    │   │   │   └── RecommendationScore.ts    # ML recommendation scores
    │   │   ├── repositories/                 # Repository Interfaces (Ports)
    │   │   │   ├── IAnalyticsEventRepository.ts
    │   │   │   ├── IExperimentRepository.ts
    │   │   │   ├── IRecommendationRepository.ts
    │   │   │   ├── IReportRepository.ts
    │   │   │   └── IDashboardRepository.ts
    │   │   └── services/                     # Domain Services (Complex Logic)
    │   │       ├── StatisticalAnalysisDomainService.ts
    │   │       ├── RecommendationEngineDomainService.ts
    │   │       ├── MetricCalculationDomainService.ts
    │   │       └── CohortAnalysisDomainService.ts
    │   ├── application/                      # Application Layer (Orchestration)
    │   │   ├── use-cases/                    # Use Cases (Application Workflows)
    │   │   │   ├── analytics/                # Real-time analytics workflows
    │   │   │   │   ├── CreateAnalyticsEventUseCase.ts
    │   │   │   │   ├── GetDashboardMetricsUseCase.ts
    │   │   │   │   ├── GenerateReportUseCase.ts
    │   │   │   │   └── CalculateMetricsUseCase.ts
    │   │   │   ├── experiments/              # A/B testing workflows
    │   │   │   │   ├── CreateExperimentUseCase.ts
    │   │   │   │   ├── AssignUserToVariantUseCase.ts
    │   │   │   │   ├── AnalyzeExperimentResultsUseCase.ts
    │   │   │   │   └── GetExperimentMetricsUseCase.ts
    │   │   │   ├── recommendations/          # ML recommendation workflows
    │   │   │   │   ├── GenerateRecommendationsUseCase.ts
    │   │   │   │   ├── TrainModelUseCase.ts
    │   │   │   │   ├── GetUserRecommendationsUseCase.ts
    │   │   │   │   └── UpdateRecommendationFeedbackUseCase.ts
    │   │   │   ├── reporting/                # Advanced reporting workflows
    │   │   │   │   ├── ScheduleReportUseCase.ts
    │   │   │   │   └── ExportReportUseCase.ts
    │   │   │   └── cohorts/                  # Cohort analysis workflows
    │   │   │       ├── AnalyzeCohortBehaviorUseCase.ts
    │   │   │       └── CreateCohortUseCase.ts
    │   │   ├── dto/                          # Data Transfer Objects
    │   │   │   ├── AnalyticsDTO.ts
    │   │   │   ├── ExperimentDTO.ts
    │   │   │   ├── RecommendationDTO.ts
    │   │   │   ├── ReportDTO.ts
    │   │   │   ├── DashboardDTO.ts
    │   │   │   └── MetricDTO.ts
    │   │   └── ports/                        # External Service Interfaces
    │   │       ├── IMLModelService.ts
    │   │       ├── IEventStreamService.ts
    │   │       ├── IReportGeneratorService.ts
    │   │       └── INotificationService.ts
    │   ├── infrastructure/                   # Infrastructure Layer (External Concerns)
    │   │   ├── persistence/                  # Database Implementation
    │   │   │   ├── repositories/             # Repository Implementations
    │   │   │   │   ├── AnalyticsEventRepository.ts
    │   │   │   │   ├── ExperimentRepository.ts
    │   │   │   │   ├── RecommendationRepository.ts
    │   │   │   │   ├── ReportRepository.ts
    │   │   │   │   ├── DashboardRepository.ts
    │   │   │   │   └── CohortRepository.ts
    │   │   │   ├── models/                   # ORM Models (Prisma)
    │   │   │   │   ├── AnalyticsEventModel.ts
    │   │   │   │   ├── ExperimentModel.ts
    │   │   │   │   ├── RecommendationModel.ts
    │   │   │   │   ├── ReportModel.ts
    │   │   │   │   ├── DashboardModel.ts
    │   │   │   │   └── MetricModel.ts
    │   │   │   └── migrations/               # Database Migrations
    │   │   │       ├── 001_create_analytics_events.sql
    │   │   │       ├── 002_create_experiments.sql
    │   │   │       ├── 003_create_reports.sql
    │   │   │       ├── 004_create_dashboards.sql
    │   │   │       ├── 005_create_metrics.sql
    │   │   │       └── 006_create_cohorts.sql
    │   │   ├── external-services/            # Third-party Service Adapters
    │   │   │   ├── MLModelAdapter.ts
    │   │   │   ├── EventStreamAdapter.ts
    │   │   │   ├── ReportGeneratorAdapter.ts
    │   │   │   ├── NotificationAdapter.ts
    │   │   │   └── CacheAdapter.ts
    │   │   └── config/                       # Configuration Management
    │   │       ├── DatabaseConfig.ts
    │   │       ├── MLModelConfig.ts
    │   │       ├── EventStreamConfig.ts
    │   │       └── CacheConfig.ts
    │   ├── presentation/                     # Presentation Layer (API Interface)
    │   │   ├── controllers/                  # REST Controllers
    │   │   │   ├── AnalyticsController.ts
    │   │   │   ├── ExperimentController.ts
    │   │   │   ├── RecommendationController.ts
    │   │   │   ├── ReportController.ts
    │   │   │   ├── DashboardController.ts
    │   │   │   └── CohortController.ts
    │   │   ├── middleware/                   # NestJS Middleware
    │   │   │   ├── AnalyticsAuthMiddleware.ts
    │   │   │   ├── RateLimitingMiddleware.ts
    │   │   │   ├── EventTrackingMiddleware.ts
    │   │   │   └── ErrorHandlingMiddleware.ts
    │   │   ├── routes/                       # Route Definitions
    │   │   │   ├── AnalyticsRoutes.ts
    │   │   │   ├── ExperimentRoutes.ts
    │   │   │   ├── RecommendationRoutes.ts
    │   │   │   ├── ReportRoutes.ts
    │   │   │   ├── DashboardRoutes.ts
    │   │   │   └── CohortRoutes.ts
    │   │   └── validators/                   # Input Validation
    │   │       ├── AnalyticsValidator.ts
    │   │       ├── ExperimentValidator.ts
    │   │       ├── RecommendationValidator.ts
    │   │       ├── ReportValidator.ts
    │   │       └── MetricValidator.ts
    │   └── shared/                           # Shared Utilities
    │       ├── constants/                    # Application Constants
    │       │   ├── AnalyticsConstants.ts
    │       │   ├── ExperimentConstants.ts
    │       │   ├── RecommendationConstants.ts
    │       │   └── ReportConstants.ts
    │       ├── exceptions/                   # Custom Exceptions
    │       │   ├── AnalyticsException.ts
    │       │   ├── ExperimentException.ts
    │       │   ├── RecommendationException.ts
    │       │   └── ReportException.ts
    │       ├── types/                        # TypeScript Type Definitions
    │       │   ├── AnalyticsTypes.ts
    │       │   ├── ExperimentTypes.ts
    │       │   ├── RecommendationTypes.ts
    │       │   ├── ReportTypes.ts
    │       │   └── MetricTypes.ts
    │       └── utils/                        # Utility Functions
    │           ├── StatisticalUtils.ts
    │           ├── DateTimeUtils.ts
    │           ├── DataTransformUtils.ts
    │           ├── ValidationUtils.ts
    │           └── CacheUtils.ts
    ├── tests/                                # Testing Structure
    │   ├── unit/                             # Unit Tests (Domain/Application)
    │   │   ├── domain/
    │   │   │   ├── entities/
    │   │   │   └── services/
    │   │   └── application/
    │   │       └── use-cases/
    │   ├── integration/                      # Integration Tests (Infrastructure)
    │   │   ├── repositories/
    │   │   └── external-services/
    │   └── e2e/                              # End-to-End Tests
    │       ├── analytics/
    │       ├── experiments/
    │       ├── recommendations/
    │       └── reports/
    ├── package.json                          # Dependencies + Scripts
    ├── tsconfig.json                         # TypeScript Configuration
    ├── jest.config.js                        # Testing Configuration
    ├── eslint.config.js                      # Code Quality Rules
    ├── prisma/schema.prisma                  # Database Schema
    ├── Dockerfile                            # Container Configuration
    ├── .env.example                          # Environment Variables Template
    └── README.md                             # Project Documentation
```

---

## 🚀 **IMPLEMENTATION CHECKLIST**

### **Phase 1: Core Analytics Infrastructure (Week 1-2)**
- [ ] **Setup project structure** theo EMSA-v1.0 standards
- [ ] **Configure NestJS** với TypeScript, Prisma, Redis
- [ ] **Implement Analytics Event entity** với business validation
- [ ] **Create analytics event repository** với PostgreSQL integration
- [ ] **Setup event tracking middleware** cho automatic event capture
- [ ] **Implement real-time metric calculation** service
- [ ] **Create basic analytics dashboard** endpoints
- [ ] **Setup Redis caching** cho high-performance metrics

### **Phase 2: A/B Testing Framework (Week 3-4)**
- [ ] **Implement Experiment entity** với statistical validation
- [ ] **Create experiment repository** với variant management
- [ ] **Implement statistical analysis** domain service (>95% confidence)
- [ ] **Create user assignment algorithm** cho A/B testing
- [ ] **Setup experiment results** calculation workflow
- [ ] **Implement A/B testing APIs** cho experiment management
- [ ] **Create experiment monitoring** dashboard
- [ ] **Setup automated result** analysis reporting

### **Phase 3: ML Recommendation Engine (Week 5-6)**
- [ ] **Implement Recommendation entity** với ML model integration
- [ ] **Create recommendation repository** với MongoDB
- [ ] **Setup ML model adapter** cho external ML services
- [ ] **Implement collaborative filtering** algorithms
- [ ] **Create recommendation generation** workflow
- [ ] **Setup model training** pipeline
- [ ] **Implement recommendation APIs** cho offer generation
- [ ] **Create recommendation feedback** loop

### **Phase 4: Advanced Reporting (Week 7-8)**
- [ ] **Implement Report entity** với custom query building
- [ ] **Create report repository** với template management
- [ ] **Setup report generation** service với PDF/CSV export
- [ ] **Implement scheduled reporting** workflow
- [ ] **Create custom report builder** API
- [ ] **Setup report delivery** via email/notifications
- [ ] **Implement report caching** cho performance
- [ ] **Create report analytics** và usage tracking

### **Phase 5: Cohort Analysis & Advanced Features (Week 9-10)**
- [ ] **Implement Cohort entity** với behavioral segmentation
- [ ] **Create cohort analysis** algorithms
- [ ] **Setup cohort tracking** workflow
- [ ] **Implement cohort APIs** cho segment management
- [ ] **Create advanced dashboard** features
- [ ] **Setup real-time alerting** system
- [ ] **Implement data export** functionality
- [ ] **Create analytics API** rate limiting

### **Phase 6: Testing & Optimization (Week 11-12)**
- [ ] **Write comprehensive unit tests** cho domain logic
- [ ] **Create integration tests** cho database operations
- [ ] **Implement E2E tests** cho complete workflows
- [ ] **Setup performance testing** cho high-load scenarios
- [ ] **Optimize database queries** với indexing strategies
- [ ] **Implement API documentation** với OpenAPI 3.0
- [ ] **Setup monitoring** và logging infrastructure
- [ ] **Create deployment** scripts và CI/CD pipeline

---

## 🎯 **CORE FEATURES IMPLEMENTATION**

### **FR-008: Real Time Analytics**
- **Event Tracking**: Automatic capture of user interactions với campaign
- **Real-time Dashboards**: Live metrics về clicks, scans, conversions
- **Performance Metrics**: Campaign ROI, engagement rates, funnel analysis
- **Data Export**: CSV/JSON export cho external analysis
- **GDPR Compliance**: Data anonymization và user consent management

### **FR-012: A/B Testing**
- **Experiment Management**: Create, manage, analyze A/B tests
- **Statistical Analysis**: >95% confidence level calculations
- **User Assignment**: Intelligent variant allocation algorithms
- **Result Monitoring**: Real-time experiment performance tracking
- **Automated Analysis**: Statistical significance detection

### **FR-013: Recommendation Engine**
- **ML Model Integration**: TensorFlow/PyTorch model support
- **Collaborative Filtering**: User-based và item-based recommendations
- **Real-time Generation**: <3s recommendation response time
- **Feedback Loop**: Continuous model improvement
- **Personalization**: User-specific offer recommendations

### **FR-014: Advanced Reporting**
- **Custom Reports**: Drag-and-drop report builder
- **Scheduled Delivery**: Automated report generation và distribution
- **Multiple Formats**: PDF, CSV, JSON export options
- **Template Management**: Reusable report templates
- **Audit Logging**: Complete report access tracking

---

## 🔗 **INTEGRATION POINTS**

### **Event Bus Integration**
```typescript
// Event Stream Adapter
@Injectable()
export class EventStreamAdapter implements IEventStreamService {
  async publishAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
    // RabbitMQ/Kafka integration
  }
}
```

### **ML Model Integration**
```typescript
// ML Model Adapter
@Injectable()
export class MLModelAdapter implements IMLModelService {
  async generateRecommendations(userId: string): Promise<Recommendation[]> {
    // TensorFlow/PyTorch integration
  }
}
```

### **Cache Integration**
```typescript
// Redis Cache Adapter
@Injectable()
export class CacheAdapter {
  async cacheMetrics(key: string, data: any, ttl: number): Promise<void> {
    // Redis caching implementation
  }
}
```

---

## 📊 **DATABASE DESIGN**

### **PostgreSQL Tables**
- **analytics_events**: Event tracking với JSON metadata
- **experiments**: A/B test configurations
- **experiment_variants**: Variant definitions
- **experiment_assignments**: User-variant mappings
- **reports**: Report metadata và configurations
- **dashboards**: Dashboard layout configurations
- **metrics**: Calculated metric values
- **cohorts**: User segmentation data

### **MongoDB Collections**
- **recommendations**: ML-generated recommendations
- **model_data**: ML model training data
- **user_profiles**: Enhanced user behavior profiles

### **Redis Cache**
- **real_time_metrics**: Live dashboard data
- **experiment_assignments**: Fast variant lookups
- **recommendation_cache**: Cached ML predictions

---

## 🔒 **SECURITY & COMPLIANCE**

### **RBAC Integration**
- **Brand Admin**: Full analytics access, experiment management
- **Brand Staff**: Read-only analytics, limited reporting
- **Platform Admin**: System-wide analytics, all experiments

### **Data Privacy**
- **GDPR Compliance**: Data anonymization, right to deletion
- **Audit Logging**: Complete access tracking
- **Data Encryption**: AES-256 cho sensitive analytics data

### **Rate Limiting**
- **API Protection**: Prevent abuse of analytics endpoints
- **Resource Management**: Fair usage across tenants
- **Performance Optimization**: Maintain sub-200ms response times

---

## 🚀 **DEPLOYMENT & SCALING**

### **Kubernetes Configuration**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: analytics-intelligence-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: analytics-intelligence
  template:
    spec:
      containers:
      - name: analytics-service
        image: analytics-intelligence:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
```

### **Horizontal Scaling**
- **Auto-scaling**: Based on CPU và memory utilization
- **Load Balancing**: Distribute traffic across instances
- **Database Sharding**: Scale analytics data across multiple DBs

### **Monitoring & Observability**
- **Prometheus**: Metrics collection
- **Grafana**: Dashboard visualization
- **ELK Stack**: Logging và search
- **Jaeger**: Distributed tracing

---

**🎯 Sub-Project 4 Implementation Ready! Analytics & Intelligence service sẵn sàng cho enterprise-scale deployment với complete feature coverage từ SRS-Grok-V2! 🚀**
