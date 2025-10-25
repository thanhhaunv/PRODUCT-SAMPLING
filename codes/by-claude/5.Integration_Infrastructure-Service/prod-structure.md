# 🚀 Sub-Project 5: Integration & Infrastructure Service - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **🏗️ BACKEND DOMAIN** | | | | |
| Entities | `backend/src/domain/entities/Notification.ts` | Core notification entity với business rules | Part04.3.4 Notification System (FR-010) | Encapsulate notification logic, multi-channel |
| Entities | `backend/src/domain/entities/NotificationTemplate.ts` | Template entity cho reusable notifications | Part04.3.4 Notification System (FR-010) | Standardized notification formats |
| Entities | `backend/src/domain/entities/CRMContact.ts` | CRM contact entity cho data sync | Part04.3.3 CRM Integration (FR-009) | Manage CRM data mapping |
| Entities | `backend/src/domain/entities/APIGatewayRoute.ts` | API gateway route configuration entity | Part06.1.1 API Gateway | Route management và configuration |
| Entities | `backend/src/domain/entities/EventMessage.ts` | Event bus message entity | Part06.1.2 Event Bus | Event-driven communication |
| Entities | `backend/src/domain/entities/Integration.ts` | External integration entity | Part09 Integration | Manage external service connections |
| Entities | `backend/src/domain/entities/InfrastructureComponent.ts` | Infrastructure component entity | Part14 Deployment Architecture | Infrastructure resource management |
| Entities | `backend/src/domain/entities/ServiceMesh.ts` | Service mesh configuration entity | Part14.2 Service Mesh (Istio) | Istio configuration management |
| Value Objects | `backend/src/domain/value-objects/NotificationChannel.ts` | Notification channel value object | Part04.3.4 Notification System | Channel validation (SMS/Email/Push) |
| Value Objects | `backend/src/domain/value-objects/CRMCredentials.ts` | CRM authentication credentials | Part04.3.3 CRM Integration | Secure credential handling |
| Value Objects | `backend/src/domain/value-objects/APIEndpoint.ts` | API endpoint value object | Part06.1.1 API Gateway | Endpoint validation và routing |
| Value Objects | `backend/src/domain/value-objects/EventType.ts` | Event type classification | Part06.1.2 Event Bus | Event categorization |
| Repositories | `backend/src/domain/repositories/INotificationRepository.ts` | Notification repository interface | Part06.2.1 Layered Architecture | Notification storage contract |
| Repositories | `backend/src/domain/repositories/ICRMContactRepository.ts` | CRM contact repository interface | Part06.2.1 Layered Architecture | CRM data access contract |
| Repositories | `backend/src/domain/repositories/IAPIGatewayRepository.ts` | API gateway repository interface | Part06.2.1 Layered Architecture | Gateway config contract |
| Repositories | `backend/src/domain/repositories/IEventRepository.ts` | Event repository interface | Part06.2.1 Layered Architecture | Event storage contract |
| Repositories | `backend/src/domain/repositories/IIntegrationRepository.ts` | Integration repository interface | Part06.2.1 Layered Architecture | Integration config contract |
| Domain Services | `backend/src/domain/services/NotificationRoutingDomainService.ts` | Notification routing business logic | Part04.3.4 Notification System (FR-010) | Multi-channel routing algorithms |
| Domain Services | `backend/src/domain/services/CRMSyncDomainService.ts` | CRM synchronization business logic | Part04.3.3 CRM Integration (FR-009) | Bi-directional sync logic |
| Domain Services | `backend/src/domain/services/APIGatewayRoutingDomainService.ts` | API gateway routing logic | Part06.1.1 API Gateway | Request routing algorithms |
| Domain Services | `backend/src/domain/services/EventProcessingDomainService.ts` | Event processing business logic | Part06.1.2 Event Bus | Event handling workflows |
| **📄 BACKEND APPLICATION** | | | | |
| Use Cases | `backend/src/application/use-cases/notifications/SendNotificationUseCase.ts` | Send notification workflow | Part04.3.4 Notification System (FR-010) | Multi-channel notification delivery |
| Use Cases | `backend/src/application/use-cases/notifications/SendBatchNotificationUseCase.ts` | Batch notification sending | Part04.3.4 Notification System (FR-010) | Bulk notification processing |
| Use Cases | `backend/src/application/use-cases/notifications/ScheduleNotificationUseCase.ts` | Schedule notification workflow | Part04.3.4 Notification System (FR-010) | Delayed notification delivery |
| Use Cases | `backend/src/application/use-cases/notifications/GetNotificationStatusUseCase.ts` | Notification status tracking | Part04.3.4 Notification System (FR-010) | Delivery status monitoring |
| Use Cases | `backend/src/application/use-cases/crm/SyncContactToCRMUseCase.ts` | CRM contact synchronization | Part04.3.3 CRM Integration (FR-009) | Push data to CRM systems |
| Use Cases | `backend/src/application/use-cases/crm/ImportContactsFromCRMUseCase.ts` | Import contacts from CRM | Part04.3.3 CRM Integration (FR-009) | Pull data from CRM systems |
| Use Cases | `backend/src/application/use-cases/crm/ValidateCRMConnectionUseCase.ts` | CRM connection validation | Part04.3.3 CRM Integration (FR-009) | Test CRM connectivity |
| Use Cases | `backend/src/application/use-cases/crm/DeduplicateCRMContactsUseCase.ts` | CRM contact deduplication | Part04.3.3 CRM Integration (FR-009) | Data quality management |
| Use Cases | `backend/src/application/use-cases/gateway/RouteRequestUseCase.ts` | API gateway request routing | Part06.1.1 API Gateway | Route requests to services |
| Use Cases | `backend/src/application/use-cases/gateway/ValidateAPIKeyUseCase.ts` | API key validation | Part06.1.1 API Gateway | Authentication middleware |
| Use Cases | `backend/src/application/use-cases/gateway/RateLimitRequestUseCase.ts` | Request rate limiting | Part06.1.1 API Gateway | API protection |
| Use Cases | `backend/src/application/use-cases/gateway/LogAPIRequestUseCase.ts` | API request logging | Part06.1.1 API Gateway | Request tracking |
| Use Cases | `backend/src/application/use-cases/events/PublishEventUseCase.ts` | Event publishing workflow | Part06.1.2 Event Bus | Publish events to message bus |
| Use Cases | `backend/src/application/use-cases/events/ConsumeEventUseCase.ts` | Event consumption workflow | Part06.1.2 Event Bus | Process incoming events |
| Use Cases | `backend/src/application/use-cases/events/RetryFailedEventUseCase.ts` | Event retry mechanism | Part06.1.2 Event Bus | Handle event processing failures |
| Use Cases | `backend/src/application/use-cases/events/ProcessEventBatchUseCase.ts` | Batch event processing | Part06.1.2 Event Bus | Bulk event handling |
| Use Cases | `backend/src/application/use-cases/infrastructure/DeployServiceUseCase.ts` | Service deployment workflow | Part14 Deployment Architecture | Kubernetes deployment |
| Use Cases | `backend/src/application/use-cases/infrastructure/ScaleServiceUseCase.ts` | Service scaling workflow | Part14 Deployment Architecture | Auto-scaling management |
| Use Cases | `backend/src/application/use-cases/infrastructure/MonitorServiceHealthUseCase.ts` | Service health monitoring | Part14.3 Monitoring Stack | Health check processing |
| Use Cases | `backend/src/application/use-cases/infrastructure/ConfigureServiceMeshUseCase.ts` | Service mesh configuration | Part14.2 Service Mesh (Istio) | Istio configuration management |
| DTOs | `backend/src/application/dto/NotificationDTO.ts` | Notification data transfer objects | Part08.5.1 Notification APIs | API contract definitions |
| DTOs | `backend/src/application/dto/CRMDTO.ts` | CRM integration DTOs | Part08.5.2 CRM Integration APIs | CRM API contracts |
| DTOs | `backend/src/application/dto/APIGatewayDTO.ts` | API gateway DTOs | Part06.1.1 API Gateway | Gateway API contracts |
| DTOs | `backend/src/application/dto/EventDTO.ts` | Event bus DTOs | Part06.1.2 Event Bus | Event message contracts |
| DTOs | `backend/src/application/dto/InfrastructureDTO.ts` | Infrastructure DTOs | Part14 Deployment Architecture | Infrastructure API contracts |
| DTOs | `backend/src/application/dto/MonitoringDTO.ts` | Monitoring DTOs | Part14.3 Monitoring Stack | Monitoring API contracts |
| Ports | `backend/src/application/ports/ITwilioService.ts` | Twilio service interface | Part09.1.1 Twilio Integration | SMS/Email service integration |
| Ports | `backend/src/application/ports/IHubSpotService.ts` | HubSpot service interface | Part09.1.2 HubSpot Integration | HubSpot CRM integration |
| Ports | `backend/src/application/ports/ISalesforceService.ts` | Salesforce service interface | Part09.1.3 Salesforce Integration | Salesforce CRM integration |
| Ports | `backend/src/application/ports/IEventBusService.ts` | Event bus service interface | Part06.1.2 Event Bus | Message bus integration |
| Ports | `backend/src/application/ports/IKubernetesService.ts` | Kubernetes service interface | Part14.1 Kubernetes Setup | K8s cluster management |
| Ports | `backend/src/application/ports/IIstioService.ts` | Istio service interface | Part14.2 Service Mesh (Istio) | Service mesh management |
| Ports | `backend/src/application/ports/IPrometheusService.ts` | Prometheus service interface | Part14.3 Monitoring Stack | Metrics collection |
| Ports | `backend/src/application/ports/ICloudProviderService.ts` | Cloud provider interface | Part15 Infrastructure | Multi-cloud abstraction |
| **🏗️ BACKEND INFRASTRUCTURE** | | | | |
| Repositories | `backend/src/infrastructure/persistence/repositories/NotificationRepository.ts` | PostgreSQL notification repository | Part07.6.1 Notification Table | Notification data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/CRMContactRepository.ts` | CRM contact data access | Part07.6.2 CRM_Contact Table | CRM data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/APIGatewayRepository.ts` | API gateway config storage | Part07.6.3 Gateway_Config Table | Gateway configuration storage |
| Repositories | `backend/src/infrastructure/persistence/repositories/EventRepository.ts` | Event data access implementation | Part07.6.4 Event_Log Table | Event audit persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/IntegrationRepository.ts` | Integration config storage | Part07.6.5 Integration_Config Table | External service configs |
| Repositories | `backend/src/infrastructure/persistence/repositories/InfrastructureRepository.ts` | Infrastructure metadata storage | Part07.6.6 Infrastructure_Resource Table | Infrastructure resource tracking |
| Models | `backend/src/infrastructure/persistence/models/NotificationModel.ts` | Prisma notification model | Part07.6.1 Notification Table | Notification schema mapping |
| Models | `backend/src/infrastructure/persistence/models/CRMContactModel.ts` | CRM contact database model | Part07.6.2 CRM_Contact Table | CRM schema mapping |
| Models | `backend/src/infrastructure/persistence/models/APIGatewayModel.ts` | API gateway configuration model | Part07.6.3 Gateway_Config Table | Gateway schema mapping |
| Models | `backend/src/infrastructure/persistence/models/EventModel.ts` | Event log database model | Part07.6.4 Event_Log Table | Event schema mapping |
| Models | `backend/src/infrastructure/persistence/models/IntegrationModel.ts` | Integration configuration model | Part07.6.5 Integration_Config Table | Integration schema mapping |
| Models | `backend/src/infrastructure/persistence/models/InfrastructureModel.ts` | Infrastructure resource model | Part07.6.6 Infrastructure_Resource Table | Infrastructure schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/001_create_notifications.sql` | Notification tables creation | Part07.6.1 Notification Table | Notification schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/002_create_crm_contacts.sql` | CRM contact tables creation | Part07.6.2 CRM_Contact Table | CRM data schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/003_create_gateway_config.sql` | API gateway config tables | Part07.6.3 Gateway_Config Table | Gateway configuration schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/004_create_event_logs.sql` | Event logging tables | Part07.6.4 Event_Log Table | Event audit schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/005_create_integrations.sql` | Integration config tables | Part07.6.5 Integration_Config Table | Integration schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/006_create_infrastructure.sql` | Infrastructure resource tables | Part07.6.6 Infrastructure_Resource Table | Infrastructure tracking schema |
| External Services | `backend/src/infrastructure/external-services/TwilioAdapter.ts` | Twilio service adapter | Part09.1.1 Twilio Integration | SMS/Email delivery via Twilio |
| External Services | `backend/src/infrastructure/external-services/SendGridAdapter.ts` | SendGrid email adapter | Part09.1.1 Twilio Integration | Email delivery via SendGrid |
| External Services | `backend/src/infrastructure/external-services/FirebaseAdapter.ts` | Firebase push notifications | Part04.3.4 Notification System | Push notification delivery |
| External Services | `backend/src/infrastructure/external-services/HubSpotAdapter.ts` | HubSpot CRM adapter | Part09.1.2 HubSpot Integration | HubSpot API integration |
| External Services | `backend/src/infrastructure/external-services/SalesforceAdapter.ts` | Salesforce CRM adapter | Part09.1.3 Salesforce Integration | Salesforce API integration |
| External Services | `backend/src/infrastructure/external-services/RabbitMQAdapter.ts` | RabbitMQ event bus adapter | Part06.1.2 Event Bus | Message queue integration |
| External Services | `backend/src/infrastructure/external-services/KafkaAdapter.ts` | Apache Kafka adapter | Part06.1.2 Event Bus | Kafka streaming integration |
| External Services | `backend/src/infrastructure/external-services/KubernetesAdapter.ts` | Kubernetes cluster adapter | Part14.1 Kubernetes Setup | K8s cluster management |
| External Services | `backend/src/infrastructure/external-services/IstioAdapter.ts` | Istio service mesh adapter | Part14.2 Service Mesh (Istio) | Service mesh configuration |
| External Services | `backend/src/infrastructure/external-services/PrometheusAdapter.ts` | Prometheus metrics adapter | Part14.3 Monitoring Stack | Metrics collection |
| External Services | `backend/src/infrastructure/external-services/GrafanaAdapter.ts` | Grafana dashboard adapter | Part14.3 Monitoring Stack | Dashboard management |
| External Services | `backend/src/infrastructure/external-services/AWSAdapter.ts` | AWS cloud provider adapter | Part15 Infrastructure | AWS service integration |
| External Services | `backend/src/infrastructure/external-services/RedisAdapter.ts` | Redis caching adapter | Part06.3.1 Caching Strategy | High-performance caching |
| Config | `backend/src/infrastructure/config/NotificationConfig.ts` | Notification service configuration | Part04.3.4 Notification System | Multi-channel settings |
| Config | `backend/src/infrastructure/config/CRMConfig.ts` | CRM integration configuration | Part04.3.3 CRM Integration | CRM connection settings |
| Config | `backend/src/infrastructure/config/APIGatewayConfig.ts` | API gateway configuration | Part06.1.1 API Gateway | Gateway settings |
| Config | `backend/src/infrastructure/config/EventBusConfig.ts` | Event bus configuration | Part06.1.2 Event Bus | Message bus settings |
| Config | `backend/src/infrastructure/config/KubernetesConfig.ts` | Kubernetes configuration | Part14.1 Kubernetes Setup | K8s cluster config |
| Config | `backend/src/infrastructure/config/IstioConfig.ts` | Istio configuration | Part14.2 Service Mesh (Istio) | Service mesh config |
| Config | `backend/src/infrastructure/config/MonitoringConfig.ts` | Monitoring stack configuration | Part14.3 Monitoring Stack | Monitoring settings |
| Config | `backend/src/infrastructure/config/CloudConfig.ts` | Cloud provider configuration | Part15 Infrastructure | Multi-cloud settings |
| **🎮 BACKEND PRESENTATION** | | | | |
| Controllers | `backend/src/presentation/controllers/NotificationController.ts` | Notification REST endpoints | Part08.5.1 Notification APIs | Multi-channel notification endpoints |
| Controllers | `backend/src/presentation/controllers/CRMController.ts` | CRM integration REST endpoints | Part08.5.2 CRM Integration APIs | CRM sync endpoints |
| Controllers | `backend/src/presentation/controllers/APIGatewayController.ts` | API gateway management endpoints | Part06.1.1 API Gateway | Gateway configuration endpoints |
| Controllers | `backend/src/presentation/controllers/EventController.ts` | Event bus management endpoints | Part06.1.2 Event Bus | Event handling endpoints |
| Controllers | `backend/src/presentation/controllers/InfrastructureController.ts` | Infrastructure management endpoints | Part14 Deployment Architecture | Infrastructure endpoints |
| Controllers | `backend/src/presentation/controllers/MonitoringController.ts` | Monitoring endpoints | Part14.3 Monitoring Stack | Monitoring data endpoints |
| Controllers | `backend/src/presentation/controllers/HealthController.ts` | Health check endpoints | Part14.3 Monitoring Stack | Service health endpoints |
| Controllers | `backend/src/presentation/controllers/MetricsController.ts` | Metrics collection endpoints | Part14.3 Monitoring Stack | Metrics API endpoints |
| Middleware | `backend/src/presentation/middleware/APIGatewayMiddleware.ts` | API gateway routing middleware | Part06.1.1 API Gateway | Request routing logic |
| Middleware | `backend/src/presentation/middleware/RateLimitMiddleware.ts` | Rate limiting middleware | Part06.1.1 API Gateway | API protection |
| Middleware | `backend/src/presentation/middleware/AuthenticationMiddleware.ts` | Gateway authentication | Part06.1.1 API Gateway | JWT validation |
| Middleware | `backend/src/presentation/middleware/RequestLoggingMiddleware.ts` | Request logging middleware | Part06.1.1 API Gateway | Request tracking |
| Middleware | `backend/src/presentation/middleware/ErrorHandlingMiddleware.ts` | Centralized error handling | Part05.4 Error Handling | Consistent error responses |
| Middleware | `backend/src/presentation/middleware/CORSMiddleware.ts` | CORS handling middleware | Part06.1.1 API Gateway | Cross-origin support |
| Routes | `backend/src/presentation/routes/NotificationRoutes.ts` | Notification API route definitions | Part08.5.1 Notification APIs | Notification routing |
| Routes | `backend/src/presentation/routes/CRMRoutes.ts` | CRM integration route definitions | Part08.5.2 CRM Integration APIs | CRM sync routing |
| Routes | `backend/src/presentation/routes/APIGatewayRoutes.ts` | API gateway route definitions | Part06.1.1 API Gateway | Gateway management routing |
| Routes | `backend/src/presentation/routes/EventRoutes.ts` | Event bus route definitions | Part06.1.2 Event Bus | Event handling routing |
| Routes | `backend/src/presentation/routes/InfrastructureRoutes.ts` | Infrastructure route definitions | Part14 Deployment Architecture | Infrastructure routing |
| Routes | `backend/src/presentation/routes/MonitoringRoutes.ts` | Monitoring route definitions | Part14.3 Monitoring Stack | Monitoring routing |
| Routes | `backend/src/presentation/routes/HealthRoutes.ts` | Health check route definitions | Part14.3 Monitoring Stack | Health routing |
| Validators | `backend/src/presentation/validators/NotificationValidator.ts` | Notification input validation | Part05.7 Input Validation | Notification data validation |
| Validators | `backend/src/presentation/validators/CRMValidator.ts` | CRM input validation | Part05.7 Input Validation | CRM data validation |
| Validators | `backend/src/presentation/validators/APIGatewayValidator.ts` | API gateway input validation | Part05.7 Input Validation | Gateway config validation |
| Validators | `backend/src/presentation/validators/EventValidator.ts` | Event input validation | Part05.7 Input Validation | Event data validation |
| Validators | `backend/src/presentation/validators/InfrastructureValidator.ts` | Infrastructure input validation | Part05.7 Input Validation | Infrastructure config validation |
| **🔧 BACKEND SHARED** | | | | |
| Constants | `backend/src/shared/constants/NotificationConstants.ts` | Notification application constants | Part04.3.4 Notification System | Notification limits, channels |
| Constants | `backend/src/shared/constants/CRMConstants.ts` | CRM integration constants | Part04.3.3 CRM Integration | CRM endpoints, timeouts |
| Constants | `backend/src/shared/constants/APIGatewayConstants.ts` | API gateway constants | Part06.1.1 API Gateway | Rate limits, timeouts |
| Constants | `backend/src/shared/constants/EventConstants.ts` | Event bus constants | Part06.1.2 Event Bus | Event types, retry limits |
| Constants | `backend/src/shared/constants/InfrastructureConstants.ts` | Infrastructure constants | Part14 Deployment Architecture | Resource limits, scaling |
| Constants | `backend/src/shared/constants/MonitoringConstants.ts` | Monitoring constants | Part14.3 Monitoring Stack | Metric thresholds, alerts |
| Exceptions | `backend/src/shared/exceptions/NotificationException.ts` | Notification-specific exceptions | Part05.4 Error Handling | Custom notification errors |
| Exceptions | `backend/src/shared/exceptions/CRMException.ts` | CRM integration exceptions | Part05.4 Error Handling | CRM-specific errors |
| Exceptions | `backend/src/shared/exceptions/APIGatewayException.ts` | API gateway exceptions | Part05.4 Error Handling | Gateway-specific errors |
| Exceptions | `backend/src/shared/exceptions/EventException.ts` | Event bus exceptions | Part05.4 Error Handling | Event-specific errors |
| Exceptions | `backend/src/shared/exceptions/InfrastructureException.ts` | Infrastructure exceptions | Part05.4 Error Handling | Infrastructure-specific errors |
| Types | `backend/src/shared/types/NotificationTypes.ts` | Notification TypeScript definitions | Part08.5.1 Notification APIs | Notification type definitions |
| Types | `backend/src/shared/types/CRMTypes.ts` | CRM integration type definitions | Part08.5.2 CRM Integration APIs | CRM type definitions |
| Types | `backend/src/shared/types/APIGatewayTypes.ts` | API gateway type definitions | Part06.1.1 API Gateway | Gateway type definitions |
| Types | `backend/src/shared/types/EventTypes.ts` | Event bus type definitions | Part06.1.2 Event Bus | Event type definitions |
| Types | `backend/src/shared/types/InfrastructureTypes.ts` | Infrastructure type definitions | Part14 Deployment Architecture | Infrastructure type definitions |
| Types | `backend/src/shared/types/MonitoringTypes.ts` | Monitoring type definitions | Part14.3 Monitoring Stack | Monitoring type definitions |
| Utils | `backend/src/shared/utils/NotificationUtils.ts` | Notification utility functions | Part04.3.4 Notification System | Template parsing, formatting |
| Utils | `backend/src/shared/utils/CRMUtils.ts` | CRM utility functions | Part04.3.3 CRM Integration | Data mapping, deduplication |
| Utils | `backend/src/shared/utils/APIGatewayUtils.ts` | API gateway utilities | Part06.1.1 API Gateway | Routing helpers, validation |
| Utils | `backend/src/shared/utils/EventUtils.ts` | Event processing utilities | Part06.1.2 Event Bus | Event serialization, validation |
| Utils | `backend/src/shared/utils/KubernetesUtils.ts` | Kubernetes utilities | Part14.1 Kubernetes Setup | K8s resource helpers |
| Utils | `backend/src/shared/utils/MonitoringUtils.ts` | Monitoring utilities | Part14.3 Monitoring Stack | Metrics formatting, alerts |
| Utils | `backend/src/shared/utils/EncryptionUtils.ts` | Security utilities | Part05.3 Security Requirements | Data encryption helpers |
| Utils | `backend/src/shared/utils/RetryUtils.ts` | Retry mechanism utilities | Part06.4 Resilience Patterns | Exponential backoff, circuit breaker |
| **🧪 BACKEND TESTING** | | | | |
| Unit Tests | `backend/tests/unit/domain/entities/Notification.test.ts` | Notification entity tests | Part12.1 Unit Testing | Domain logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/CRMContact.test.ts` | CRM contact entity tests | Part12.1 Unit Testing | CRM logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/APIGatewayRoute.test.ts` | API gateway route tests | Part12.1 Unit Testing | Gateway logic testing |
| Unit Tests | `backend/tests/unit/domain/services/NotificationRoutingService.test.ts` | Notification routing tests | Part12.1 Unit Testing | Routing algorithm testing |
| Unit Tests | `backend/tests/unit/domain/services/CRMSyncService.test.ts` | CRM sync service tests | Part12.1 Unit Testing | Sync logic testing |
| Unit Tests | `backend/tests/unit/application/use-cases/SendNotification.test.ts` | Send notification use case tests | Part12.1 Unit Testing | Notification workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/SyncContactToCRM.test.ts` | CRM sync use case tests | Part12.1 Unit Testing | CRM workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/RouteRequest.test.ts` | API gateway routing tests | Part12.1 Unit Testing | Gateway workflow testing |
| Integration Tests | `backend/tests/integration/repositories/NotificationRepository.test.ts` | Notification repository tests | Part12.2 Integration Testing | Database integration testing |
| Integration Tests | `backend/tests/integration/repositories/CRMContactRepository.test.ts` | CRM repository tests | Part12.2 Integration Testing | CRM data testing |
| Integration Tests | `backend/tests/integration/external-services/TwilioAdapter.test.ts` | Twilio adapter tests | Part12.2 Integration Testing | External SMS service testing |
| Integration Tests | `backend/tests/integration/external-services/HubSpotAdapter.test.ts` | HubSpot adapter tests | Part12.2 Integration Testing | External CRM service testing |
| Integration Tests | `backend/tests/integration/external-services/KubernetesAdapter.test.ts` | Kubernetes adapter tests | Part12.2 Integration Testing | Infrastructure service testing |
| Integration Tests | `backend/tests/integration/external-services/EventBusAdapter.test.ts` | Event bus adapter tests | Part12.2 Integration Testing | Message bus testing |
| E2E Tests | `backend/tests/e2e/notifications/notification-flow.test.ts` | Notification E2E tests | Part12.3 E2E Testing | Complete notification flow |
| E2E Tests | `backend/tests/e2e/crm/crm-sync-flow.test.ts` | CRM sync E2E tests | Part12.3 E2E Testing | Complete CRM integration flow |
| E2E Tests | `backend/tests/e2e/gateway/api-gateway-flow.test.ts` | API gateway E2E tests | Part12.3 E2E Testing | Complete gateway flow |
| E2E Tests | `backend/tests/e2e/infrastructure/deployment-flow.test.ts` | Infrastructure E2E tests | Part12.3 E2E Testing | Complete deployment flow |
| **🐳 INFRASTRUCTURE AS CODE** | | | | |
| Kubernetes | `k8s/namespaces/integration-namespace.yaml` | Kubernetes namespace definition | Part14.1 Kubernetes Setup | Service isolation |
| Kubernetes | `k8s/deployments/notification-service.yaml` | Notification service deployment | Part14.1 Kubernetes Setup | Notification service K8s config |
| Kubernetes | `k8s/deployments/crm-service.yaml` | CRM service deployment | Part14.1 Kubernetes Setup | CRM service K8s config |
| Kubernetes | `k8s/deployments/api-gateway.yaml` | API gateway deployment | Part14.1 Kubernetes Setup | Gateway K8s config |
| Kubernetes | `k8s/deployments/event-bus.yaml` | Event bus deployment | Part14.1 Kubernetes Setup | Event bus K8s config |
| Kubernetes | `k8s/services/notification-service.yaml` | Notification service K8s service | Part14.1 Kubernetes Setup | Service networking |
| Kubernetes | `k8s/services/api-gateway-service.yaml` | API gateway K8s service | Part14.1 Kubernetes Setup | Gateway service |
| Kubernetes | `k8s/configmaps/notification-config.yaml` | Notification configuration | Part14.1 Kubernetes Setup | Configuration management |
| Kubernetes | `k8s/configmaps/crm-config.yaml` | CRM configuration | Part14.1 Kubernetes Setup | CRM settings |
| Kubernetes | `k8s/secrets/twilio-secrets.yaml` | Twilio credentials | Part14.1 Kubernetes Setup | Secure credential storage |
| Kubernetes | `k8s/secrets/crm-secrets.yaml` | CRM credentials | Part14.1 Kubernetes Setup | CRM credential storage |
| Kubernetes | `k8s/ingress/api-gateway-ingress.yaml` | API gateway ingress | Part14.1 Kubernetes Setup | External access |
| Istio | `istio/gateway/integration-gateway.yaml` | Istio gateway configuration | Part14.2 Service Mesh (Istio) | Service mesh entry point |
| Istio | `istio/virtual-services/notification-vs.yaml` | Notification virtual service | Part14.2 Service Mesh (Istio) | Traffic routing |
| Istio | `istio/virtual-services/crm-vs.yaml` | CRM virtual service | Part14.2 Service Mesh (Istio) | CRM traffic routing |
| Istio | `istio/destination-rules/notification-dr.yaml` | Notification destination rules | Part14.2 Service Mesh (Istio) | Load balancing rules |
| Istio | `istio/security/auth-policy.yaml` | Istio authorization policy | Part14.2 Service Mesh (Istio) | mTLS security |
| Istio | `istio/security/peer-auth.yaml` | Peer authentication | Part14.2 Service Mesh (Istio) | Service-to-service auth |
| Terraform | `terraform/aws/main.tf` | AWS infrastructure main config | Part15 Infrastructure | AWS resource definitions |
| Terraform | `terraform/aws/vpc.tf` | VPC configuration | Part15 Infrastructure | Network infrastructure |
| Terraform | `terraform/aws/eks.tf` | EKS cluster configuration | Part15 Infrastructure | Kubernetes cluster |
| Terraform | `terraform/aws/rds.tf` | RDS database configuration | Part15 Infrastructure | Database infrastructure |
| Terraform | `terraform/aws/elasticache.tf` | ElastiCache Redis configuration | Part15 Infrastructure | Caching infrastructure |
| Terraform | `terraform/aws/s3.tf` | S3 storage configuration | Part15 Infrastructure | Object storage |
| Terraform | `terraform/aws/iam.tf` | IAM roles và policies | Part15 Infrastructure | Security permissions |
| Terraform | `terraform/aws/cloudwatch.tf` | CloudWatch monitoring | Part15 Infrastructure | AWS monitoring |
| Monitoring | `monitoring/prometheus/config.yaml` | Prometheus configuration | Part14.3 Monitoring Stack | Metrics collection config |
| Monitoring | `monitoring/grafana/dashboards/integration.json` | Integration dashboard | Part14.3 Monitoring Stack | Service monitoring dashboard |
| Monitoring | `monitoring/grafana/dashboards/infrastructure.json` | Infrastructure dashboard | Part14.3 Monitoring Stack | Infrastructure monitoring |
| Monitoring | `monitoring/alertmanager/alerts.yaml` | Alert manager configuration | Part14.3 Monitoring Stack | Alert routing |
| CI/CD | `.github/workflows/integration-ci.yml` | GitHub Actions CI pipeline | Part15.2 CI/CD Pipelines | Continuous integration |
| CI/CD | `.github/workflows/infrastructure-cd.yml` | Infrastructure deployment pipeline | Part15.2 CI/CD Pipelines | Infrastructure deployment |
| CI/CD | `scripts/deploy.sh` | Deployment script | Part15.2 CI/CD Pipelines | Automated deployment |
| CI/CD | `scripts/rollback.sh` | Rollback script | Part15.2 CI/CD Pipelines | Emergency rollback |
| Docker | `docker/notification-service/Dockerfile` | Notification service container | Part15.1 Container Orchestration | Service containerization |
| Docker | `docker/crm-service/Dockerfile` | CRM service container | Part15.1 Container Orchestration | CRM service container |
| Docker | `docker/api-gateway/Dockerfile` | API gateway container | Part15.1 Container Orchestration | Gateway containerization |
| Docker | `docker-compose.yml` | Local development environment | Part15.1 Container Orchestration | Development setup |
| Docker | `docker-compose.prod.yml` | Production environment | Part15.1 Container Orchestration | Production setup |
| **📁 PROJECT CONFIGURATION** | | | | |
| Package Config | `backend/package.json` | Node.js dependencies và scripts | EMSA-v1.0 Package Standards | NestJS, Infrastructure deps |
| TypeScript Config | `backend/tsconfig.json` | TypeScript compilation settings | EMSA-v1.0 TypeScript Config | Strict type checking |
| Testing Config | `backend/jest.config.js` | Jest testing configuration | EMSA-v1.0 Testing Standards | Unit, integration, E2E setup |
| Linting Config | `backend/eslint.config.js` | ESLint code quality rules | EMSA-v1.0 ESLint Config | Code quality enforcement |
| Database Config | `backend/prisma/schema.prisma` | Database schema definition | Part07.6 Integration Database Design | Multi-service schema |
| Docker Config | `backend/Dockerfile` | Container configuration | EMSA-v1.0 Docker Standards | Production-ready container |
| Environment | `backend/.env.example` | Environment variables template | Part15.2 Environment Configuration | Configuration management |
| Documentation | `backend/README.md` | Project documentation | EMSA-v1.0 Documentation Standards | Setup và usage guide |
| Documentation | `docs/api-gateway-guide.md` | API Gateway implementation guide | Part06.1.1 API Gateway | Gateway setup documentation |
| Documentation | `docs/service-mesh-guide.md` | Service Mesh implementation guide | Part14.2 Service Mesh (Istio) | Istio setup documentation |
| Documentation | `docs/monitoring-guide.md` | Monitoring setup guide | Part14.3 Monitoring Stack | Monitoring implementation |
| Documentation | `docs/deployment-guide.md` | Deployment guide | Part14 Deployment Architecture | Production deployment |

---

## 🏗️ **EMSA-v1.0 FOLDER STRUCTURE**

```
integration-infrastructure-service/
└── backend/
    ├── src/
    │   ├── domain/                           # Domain Layer (Pure Business Logic)
    │   │   ├── entities/                     # Business Entities with Rules
    │   │   │   ├── Notification.ts           # Multi-channel notification entity
    │   │   │   ├── NotificationTemplate.ts   # Reusable notification templates
    │   │   │   ├── CRMContact.ts             # CRM contact data entity
    │   │   │   ├── APIGatewayRoute.ts        # Gateway routing entity
    │   │   │   ├── EventMessage.ts           # Event bus message entity
    │   │   │   ├── Integration.ts            # External integration entity
    │   │   │   ├── InfrastructureComponent.ts # Infrastructure resource entity
    │   │   │   └── ServiceMesh.ts            # Service mesh configuration entity
    │   │   ├── value-objects/                # Immutable Value Objects
    │   │   │   ├── NotificationChannel.ts    # Channel validation (SMS/Email/Push)
    │   │   │   ├── CRMCredentials.ts         # Secure credential handling
    │   │   │   ├── APIEndpoint.ts            # Endpoint validation
    │   │   │   └── EventType.ts              # Event categorization
    │   │   ├── repositories/                 # Repository Interfaces (Ports)
    │   │   │   ├── INotificationRepository.ts
    │   │   │   ├── ICRMContactRepository.ts
    │   │   │   ├── IAPIGatewayRepository.ts
    │   │   │   ├── IEventRepository.ts
    │   │   │   └── IIntegrationRepository.ts
    │   │   └── services/                     # Domain Services (Complex Logic)
    │   │       ├── NotificationRoutingDomainService.ts
    │   │       ├── CRMSyncDomainService.ts
    │   │       ├── APIGatewayRoutingDomainService.ts
    │   │       └── EventProcessingDomainService.ts
    │   ├── application/                      # Application Layer (Orchestration)
    │   │   ├── use-cases/                    # Use Cases (Application Workflows)
    │   │   │   ├── notifications/            # Notification workflows
    │   │   │   │   ├── SendNotificationUseCase.ts
    │   │   │   │   ├── SendBatchNotificationUseCase.ts
    │   │   │   │   ├── ScheduleNotificationUseCase.ts
    │   │   │   │   └── GetNotificationStatusUseCase.ts
    │   │   │   ├── crm/                      # CRM integration workflows
    │   │   │   │   ├── SyncContactToCRMUseCase.ts
    │   │   │   │   ├── ImportContactsFromCRMUseCase.ts
    │   │   │   │   ├── ValidateCRMConnectionUseCase.ts
    │   │   │   │   └── DeduplicateCRMContactsUseCase.ts
    │   │   │   ├── gateway/                  # API gateway workflows
    │   │   │   │   ├── RouteRequestUseCase.ts
    │   │   │   │   ├── ValidateAPIKeyUseCase.ts
    │   │   │   │   ├── RateLimitRequestUseCase.ts
    │   │   │   │   └── LogAPIRequestUseCase.ts
    │   │   │   ├── events/                   # Event bus workflows
    │   │   │   │   ├── PublishEventUseCase.ts
    │   │   │   │   ├── ConsumeEventUseCase.ts
    │   │   │   │   ├── RetryFailedEventUseCase.ts
    │   │   │   │   └── ProcessEventBatchUseCase.ts
    │   │   │   └── infrastructure/           # Infrastructure workflows
    │   │   │       ├── DeployServiceUseCase.ts
    │   │   │       ├── ScaleServiceUseCase.ts
    │   │   │       ├── MonitorServiceHealthUseCase.ts
    │   │   │       └── ConfigureServiceMeshUseCase.ts
    │   │   ├── dto/                          # Data Transfer Objects
    │   │   │   ├── NotificationDTO.ts
    │   │   │   ├── CRMDTO.ts
    │   │   │   ├── APIGatewayDTO.ts
    │   │   │   ├── EventDTO.ts
    │   │   │   ├── InfrastructureDTO.ts
    │   │   │   └── MonitoringDTO.ts
    │   │   └── ports/                        # External Service Interfaces
    │   │       ├── ITwilioService.ts
    │   │       ├── IHubSpotService.ts
    │   │       ├── ISalesforceService.ts
    │   │       ├── IEventBusService.ts
    │   │       ├── IKubernetesService.ts
    │   │       ├── IIstioService.ts
    │   │       ├── IPrometheusService.ts
    │   │       └── ICloudProviderService.ts
    │   ├── infrastructure/                   # Infrastructure Layer (External Concerns)
    │   │   ├── persistence/                  # Database Implementation
    │   │   │   ├── repositories/             # Repository Implementations
    │   │   │   │   ├── NotificationRepository.ts
    │   │   │   │   ├── CRMContactRepository.ts
    │   │   │   │   ├── APIGatewayRepository.ts
    │   │   │   │   ├── EventRepository.ts
    │   │   │   │   ├── IntegrationRepository.ts
    │   │   │   │   └── InfrastructureRepository.ts
    │   │   │   ├── models/                   # ORM Models (Prisma)
    │   │   │   │   ├── NotificationModel.ts
    │   │   │   │   ├── CRMContactModel.ts
    │   │   │   │   ├── APIGatewayModel.ts
    │   │   │   │   ├── EventModel.ts
    │   │   │   │   ├── IntegrationModel.ts
    │   │   │   │   └── InfrastructureModel.ts
    │   │   │   └── migrations/               # Database Migrations
    │   │   │       ├── 001_create_notifications.sql
    │   │   │       ├── 002_create_crm_contacts.sql
    │   │   │       ├── 003_create_gateway_config.sql
    │   │   │       ├── 004_create_event_logs.sql
    │   │   │       ├── 005_create_integrations.sql
    │   │   │       └── 006_create_infrastructure.sql
    │   │   ├── external-services/            # Third-party Service Adapters
    │   │   │   ├── TwilioAdapter.ts
    │   │   │   ├── SendGridAdapter.ts
    │   │   │   ├── FirebaseAdapter.ts
    │   │   │   ├── HubSpotAdapter.ts
    │   │   │   ├── SalesforceAdapter.ts
    │   │   │   ├── RabbitMQAdapter.ts
    │   │   │   ├── KafkaAdapter.ts
    │   │   │   ├── KubernetesAdapter.ts
    │   │   │   ├── IstioAdapter.ts
    │   │   │   ├── PrometheusAdapter.ts
    │   │   │   ├── GrafanaAdapter.ts
    │   │   │   ├── AWSAdapter.ts
    │   │   │   └── RedisAdapter.ts
    │   │   └── config/                       # Configuration Management
    │   │       ├── NotificationConfig.ts
    │   │       ├── CRMConfig.ts
    │   │       ├── APIGatewayConfig.ts
    │   │       ├── EventBusConfig.ts
    │   │       ├── KubernetesConfig.ts
    │   │       ├── IstioConfig.ts
    │   │       ├── MonitoringConfig.ts
    │   │       └── CloudConfig.ts
    │   ├── presentation/                     # Presentation Layer (API Interface)
    │   │   ├── controllers/                  # REST Controllers
    │   │   │   ├── NotificationController.ts
    │   │   │   ├── CRMController.ts
    │   │   │   ├── APIGatewayController.ts
    │   │   │   ├── EventController.ts
    │   │   │   ├── InfrastructureController.ts
    │   │   │   ├── MonitoringController.ts
    │   │   │   ├── HealthController.ts
    │   │   │   └── MetricsController.ts
    │   │   ├── middleware/                   # NestJS Middleware
    │   │   │   ├── APIGatewayMiddleware.ts
    │   │   │   ├── RateLimitMiddleware.ts
    │   │   │   ├── AuthenticationMiddleware.ts
    │   │   │   ├── RequestLoggingMiddleware.ts
    │   │   │   ├── ErrorHandlingMiddleware.ts
    │   │   │   └── CORSMiddleware.ts
    │   │   ├── routes/                       # Route Definitions
    │   │   │   ├── NotificationRoutes.ts
    │   │   │   ├── CRMRoutes.ts
    │   │   │   ├── APIGatewayRoutes.ts
    │   │   │   ├── EventRoutes.ts
    │   │   │   ├── InfrastructureRoutes.ts
    │   │   │   ├── MonitoringRoutes.ts
    │   │   │   └── HealthRoutes.ts
    │   │   └── validators/                   # Input Validation
    │   │       ├── NotificationValidator.ts
    │   │       ├── CRMValidator.ts
    │   │       ├── APIGatewayValidator.ts
    │   │       ├── EventValidator.ts
    │   │       └── InfrastructureValidator.ts
    │   └── shared/                           # Shared Utilities
    │       ├── constants/                    # Application Constants
    │       │   ├── NotificationConstants.ts
    │       │   ├── CRMConstants.ts
    │       │   ├── APIGatewayConstants.ts
    │       │   ├── EventConstants.ts
    │       │   ├── InfrastructureConstants.ts
    │       │   └── MonitoringConstants.ts
    │       ├── exceptions/                   # Custom Exceptions
    │       │   ├── NotificationException.ts
    │       │   ├── CRMException.ts
    │       │   ├── APIGatewayException.ts
    │       │   ├── EventException.ts
    │       │   └── InfrastructureException.ts
    │       ├── types/                        # TypeScript Type Definitions
    │       │   ├── NotificationTypes.ts
    │       │   ├── CRMTypes.ts
    │       │   ├── APIGatewayTypes.ts
    │       │   ├── EventTypes.ts
    │       │   ├── InfrastructureTypes.ts
    │       │   └── MonitoringTypes.ts
    │       └── utils/                        # Utility Functions
    │           ├── NotificationUtils.ts
    │           ├── CRMUtils.ts
    │           ├── APIGatewayUtils.ts
    │           ├── EventUtils.ts
    │           ├── KubernetesUtils.ts
    │           ├── MonitoringUtils.ts
    │           ├── EncryptionUtils.ts
    │           └── RetryUtils.ts
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
    │       ├── notifications/
    │       ├── crm/
    │       ├── gateway/
    │       └── infrastructure/
    ├── k8s/                                  # Kubernetes Configurations
    │   ├── namespaces/
    │   ├── deployments/
    │   ├── services/
    │   ├── configmaps/
    │   ├── secrets/
    │   └── ingress/
    ├── istio/                                # Istio Service Mesh Configurations
    │   ├── gateway/
    │   ├── virtual-services/
    │   ├── destination-rules/
    │   └── security/
    ├── terraform/                            # Infrastructure as Code
    │   └── aws/
    │       ├── main.tf
    │       ├── vpc.tf
    │       ├── eks.tf
    │       ├── rds.tf
    │       ├── elasticache.tf
    │       ├── s3.tf
    │       ├── iam.tf
    │       └── cloudwatch.tf
    ├── monitoring/                           # Monitoring Configurations
    │   ├── prometheus/
    │   ├── grafana/
    │   └── alertmanager/
    ├── docker/                               # Docker Configurations
    │   ├── notification-service/
    │   ├── crm-service/
    │   └── api-gateway/
    ├── scripts/                              # Deployment Scripts
    │   ├── deploy.sh
    │   └── rollback.sh
    ├── docs/                                 # Documentation
    │   ├── api-gateway-guide.md
    │   ├── service-mesh-guide.md
    │   ├── monitoring-guide.md
    │   └── deployment-guide.md
    ├── package.json                          # Dependencies + Scripts
    ├── tsconfig.json                         # TypeScript Configuration
    ├── jest.config.js                        # Testing Configuration
    ├── eslint.config.js                      # Code Quality Rules
    ├── prisma/schema.prisma                  # Database Schema
    ├── Dockerfile                            # Container Configuration
    ├── docker-compose.yml                    # Development Environment
    ├── docker-compose.prod.yml               # Production Environment
    ├── .env.example                          # Environment Variables Template
    └── README.md                             # Project Documentation
```

---

## 🚀 **CHI TIẾT IMPLEMENTATION GUIDE**

### **Phase 1: Core Infrastructure Foundation (Week 1-3)**

#### **1.1 API Gateway Implementation**
```typescript
// backend/src/domain/entities/APIGatewayRoute.ts
export class APIGatewayRoute {
  constructor(
    private readonly id: RouteId,
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly targetService: ServiceTarget,
    private readonly middlewares: Middleware[],
    private readonly rateLimit: RateLimit
  ) {}

  public canHandle(request: APIRequest): boolean {
    return this.path.match(request.path) && 
           this.method === request.method &&
           this.rateLimit.allowRequest(request.clientId);
  }

  public route(request: APIRequest): RoutedRequest {
    const processedRequest = this.applyMiddlewares(request);
    return new RoutedRequest(
      processedRequest,
      this.targetService,
      this.generateTraceId()
    );
  }

  private applyMiddlewares(request: APIRequest): APIRequest {
    return this.middlewares.reduce(
      (req, middleware) => middleware.process(req),
      request
    );
  }
}
```

#### **1.2 Event Bus Implementation**
```typescript
// backend/src/infrastructure/external-services/RabbitMQAdapter.ts
@Injectable()
export class RabbitMQAdapter implements IEventBusService {
  private connection: Connection;
  private channel: Channel;

  async publishEvent(event: EventMessage): Promise<void> {
    const routingKey = this.getRoutingKey(event.type);
    const message = Buffer.from(JSON.stringify(event.payload));
    
    await this.channel.publish(
      'psp.events',
      routingKey,
      message,
      {
        persistent: true,
        messageId: event.id,
        timestamp: event.timestamp.getTime(),
        headers: {
          'event-type': event.type,
          'source-service': event.source,
          'correlation-id': event.correlationId
        }
      }
    );

    this.logger.log(`Event published: ${event.type} to ${routingKey}`);
  }

  async subscribeToEvents(
    eventTypes: string[],
    handler: EventHandler
  ): Promise<void> {
    const queueName = `psp.${this.serviceName}.${eventTypes.join('.')}`;
    
    await this.channel.assertQueue(queueName, {
      durable: true,
      exclusive: false,
      autoDelete: false
    });

    for (const eventType of eventTypes) {
      const routingKey = this.getRoutingKey(eventType);
      await this.channel.bindQueue(queueName, 'psp.events', routingKey);
    }

    await this.channel.consume(queueName, async (msg) => {
      if (msg) {
        try {
          const event = JSON.parse(msg.content.toString());
          await handler.handle(event);
          this.channel.ack(msg);
        } catch (error) {
          this.logger.error(`Event processing failed: ${error.message}`);
          this.channel.nack(msg, false, true); // Requeue for retry
        }
      }
    });
  }

  private getRoutingKey(eventType: string): string {
    return `${eventType}.${this.environment}`;
  }
}
```

#### **1.3 Notification System Implementation**
```typescript
// backend/src/application/use-cases/notifications/SendNotificationUseCase.ts
@Injectable()
export class SendNotificationUseCase {
  constructor(
    private readonly notificationRepository: INotificationRepository,
    private readonly twilioService: ITwilioService,
    private readonly firebaseService: IFirebaseService,
    private readonly templateService: ITemplateService,
    private readonly eventBus: IEventBusService
  ) {}

  async execute(dto: SendNotificationDTO): Promise<NotificationResult> {
    // Validate notification request
    const notification = await this.createNotification(dto);
    
    // Apply template if specified
    const content = await this.applyTemplate(notification, dto.templateId);
    
    // Route to appropriate channel
    const results = await this.routeNotification(notification, content);
    
    // Save notification record
    await this.notificationRepository.save(notification);
    
    // Publish notification event
    await this.publishNotificationEvent(notification, results);
    
    return new NotificationResult(
      notification.getId(),
      results,
      notification.getStatus()
    );
  }

  private async routeNotification(
    notification: Notification,
    content: NotificationContent
  ): Promise<ChannelResult[]> {
    const channels = notification.getChannels();
    const results: ChannelResult[] = [];

    for (const channel of channels) {
      try {
        const result = await this.sendToChannel(channel, content);
        results.push(result);
      } catch (error) {
        results.push(new ChannelResult(
          channel,
          ChannelStatus.FAILED,
          error.message
        ));
      }
    }

    return results;
  }

  private async sendToChannel(
    channel: NotificationChannel,
    content: NotificationContent
  ): Promise<ChannelResult> {
    switch (channel.type) {
      case 'SMS':
        const smsResult = await this.twilioService.sendSMS(
          channel.destination,
          content.text,
          { from: channel.from }
        );
        return new ChannelResult(channel, ChannelStatus.SENT, smsResult.id);

      case 'EMAIL':
        const emailResult = await this.twilioService.sendEmail(
          channel.destination,
          content.subject,
          content.html,
          { from: channel.from }
        );
        return new ChannelResult(channel, ChannelStatus.SENT, emailResult.id);

      case 'PUSH':
        const pushResult = await this.firebaseService.sendPush(
          channel.destination,
          content.title,
          content.body,
          content.data
        );
        return new ChannelResult(channel, ChannelStatus.SENT, pushResult.id);

      default:
        throw new UnsupportedChannelException(channel.type);
    }
  }
}
```

### **Phase 2: CRM Integration Implementation (Week 4-6)**

#### **2.1 HubSpot Integration**
```typescript
// backend/src/infrastructure/external-services/HubSpotAdapter.ts
@Injectable()
export class HubSpotAdapter implements IHubSpotService {
  private readonly hubSpotClient: Client;

  constructor(private readonly config: HubSpotConfig) {
    this.hubSpotClient = new Client({
      accessToken: config.accessToken,
      basePath: config.basePath
    });
  }

  async syncContactToHubSpot(contact: CRMContact): Promise<HubSpotSyncResult> {
    try {
      // Check if contact exists
      const existingContact = await this.findContactByEmail(contact.email);
      
      if (existingContact) {
        return await this.updateContact(existingContact.id, contact);
      } else {
        return await this.createContact(contact);
      }
    } catch (error) {
      throw new HubSpotSyncException(
        `Failed to sync contact ${contact.email}: ${error.message}`
      );
    }
  }

  private async createContact(contact: CRMContact): Promise<HubSpotSyncResult> {
    const contactInput = {
      properties: {
        email: contact.email,
        firstname: contact.firstName,
        lastname: contact.lastName,
        phone: contact.phone,
        company: contact.company,
        // PSP-specific properties
        psp_source_campaign: contact.sourceCampaign,
        psp_lead_score: contact.leadScore.toString(),
        psp_last_qr_scan: contact.lastQRScan?.toISOString(),
        psp_total_redemptions: contact.totalRedemptions.toString()
      }
    };

    const response = await this.hubSpotClient.crm.contacts.basicApi.create(contactInput);
    
    return new HubSpotSyncResult(
      SyncStatus.CREATED,
      response.id,
      response.properties,
      new Date()
    );
  }

  private async updateContact(
    contactId: string,
    contact: CRMContact
  ): Promise<HubSpotSyncResult> {
    const updateInput = {
      properties: {
        firstname: contact.firstName,
        lastname: contact.lastName,
        phone: contact.phone,
        company: contact.company,
        psp_lead_score: contact.leadScore.toString(),
        psp_last_qr_scan: contact.lastQRScan?.toISOString(),
        psp_total_redemptions: contact.totalRedemptions.toString(),
        psp_last_updated: new Date().toISOString()
      }
    };

    const response = await this.hubSpotClient.crm.contacts.basicApi.update(
      contactId,
      updateInput
    );

    return new HubSpotSyncResult(
      SyncStatus.UPDATED,
      response.id,
      response.properties,
      new Date()
    );
  }

  async importContactsFromHubSpot(
    lastSyncDate?: Date
  ): Promise<CRMContact[]> {
    const filter = lastSyncDate ? {
      filterGroups: [{
        filters: [{
          propertyName: 'lastmodifieddate',
          operator: 'GT',
          value: lastSyncDate.toISOString()
        }]
      }]
    } : undefined;

    const searchRequest = {
      filterGroups: filter?.filterGroups,
      properties: [
        'email', 'firstname', 'lastname', 'phone', 'company',
        'psp_source_campaign', 'psp_lead_score', 'psp_last_qr_scan'
      ],
      limit: 100
    };

    const contacts: CRMContact[] = [];
    let hasMore = true;
    let after = undefined;

    while (hasMore) {
      const response = await this.hubSpotClient.crm.contacts.searchApi.doSearch({
        ...searchRequest,
        after
      });

      for (const hubspotContact of response.results) {
        contacts.push(this.mapHubSpotContactToDomain(hubspotContact));
      }

      hasMore = response.paging?.next?.after !== undefined;
      after = response.paging?.next?.after;
    }

    return contacts;
  }

  private mapHubSpotContactToDomain(hubspotContact: any): CRMContact {
    const props = hubspotContact.properties;
    
    return new CRMContact(
      new ContactId(hubspotContact.id),
      props.email,
      props.firstname,
      props.lastname,
      props.phone,
      props.company,
      {
        sourceCampaign: props.psp_source_campaign,
        leadScore: parseInt(props.psp_lead_score || '0'),
        lastQRScan: props.psp_last_qr_scan ? new Date(props.psp_last_qr_scan) : undefined,
        totalRedemptions: parseInt(props.psp_total_redemptions || '0')
      }
    );
  }
}
```

### **Phase 3: Infrastructure as Code Implementation (Week 7-10)**

#### **3.1 Kubernetes Deployment Configuration**
```yaml
# k8s/deployments/notification-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notification-service
  namespace: integration
  labels:
    app: notification-service
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: notification-service
      version: v1
  template:
    metadata:
      labels:
        app: notification-service
        version: v1
      annotations:
        sidecar.istio.io/inject: "true"
        prometheus.io/scrape: "true"
        prometheus.io/port: "3000"
        prometheus.io/path: "/metrics"
    spec:
      serviceAccountName: notification-service
      containers:
      - name: notification-service
        image: psp/notification-service:1.0.0
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
          name: http
        - containerPort: 9090
          name: metrics
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-secret
              key: notification-db-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: redis-secret
              key: redis-url
        - name: TWILIO_ACCOUNT_SID
          valueFrom:
            secretKeyRef:
              name: twilio-secret
              key: account-sid
        - name: TWILIO_AUTH_TOKEN
          valueFrom:
            secretKeyRef:
              name: twilio-secret
              key: auth-token
        - name: HUBSPOT_ACCESS_TOKEN
          valueFrom:
            secretKeyRef:
              name: hubspot-secret
              key: access-token
        - name: RABBITMQ_URL
          valueFrom:
            secretKeyRef:
              name: rabbitmq-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        volumeMounts:
        - name: config-volume
          mountPath: /app/config
          readOnly: true
      volumes:
      - name: config-volume
        configMap:
          name: notification-config
      imagePullSecrets:
      - name: psp-registry-secret
---
apiVersion: v1
kind: Service
metadata:
  name: notification-service
  namespace: integration
  labels:
    app: notification-service
spec:
  selector:
    app: notification-service
  ports:
  - name: http
    port: 80
    targetPort: 3000
  - name: metrics
    port: 9090
    targetPort: 9090
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: notification-service-hpa
  namespace: integration
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: notification-service
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  - type: Pods
    pods:
      metric:
        name: notifications_per_second
      target:
        type: AverageValue
        averageValue: "1000"
```

#### **3.2 Istio Service Mesh Configuration**
```yaml
# istio/gateway/integration-gateway.yaml
apiVersion: networking.istio.io/v1beta1
kind: Gateway
metadata:
  name: integration-gateway
  namespace: integration
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - api.psp.example.com
    tls:
      httpsRedirect: true
  - port:
      number: 443
      name: https
      protocol: HTTPS
    tls:
      mode: SIMPLE
      credentialName: psp-tls-cert
    hosts:
    - api.psp.example.com
---
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: notification-vs
  namespace: integration
spec:
  hosts:
  - api.psp.example.com
  gateways:
  - integration-gateway
  http:
  - match:
    - uri:
        prefix: /notifications/
    route:
    - destination:
        host: notification-service.integration.svc.cluster.local
        port:
          number: 80
      weight: 100
    fault:
      delay:
        percentage:
          value: 0.1
        fixedDelay: 100ms
    retries:
      attempts: 3
      perTryTimeout: 2s
      retryOn: 5xx,reset,connect-failure,refused-stream
    timeout: 10s
  - match:
    - uri:
        prefix: /crm/
    route:
    - destination:
        host: crm-service.integration.svc.cluster.local
        port:
          number: 80
      weight: 100
    timeout: 30s
---
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: notification-dr
  namespace: integration
spec:
  host: notification-service.integration.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: LEAST_CONN
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 50
        http2MaxRequests: 100
        maxRequestsPerConnection: 2
        maxRetries: 3
        consecutiveGatewayErrors: 5
        interval: 30s
        baseEjectionTime: 30s
        maxEjectionPercent: 50
    circuitBreaker:
      consecutiveGatewayErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
      minHealthPercent: 50
---
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: integration
spec:
  mtls:
    mode: STRICT
---
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: notification-authz
  namespace: integration
spec:
  selector:
    matchLabels:
      app: notification-service
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/integration/sa/api-gateway"]
    - source:
        principals: ["cluster.local/ns/campaign/sa/campaign-service"]
  - to:
    - operation:
        methods: ["GET", "POST"]
        paths: ["/notifications/*", "/health"]
```

#### **3.3 Terraform AWS Infrastructure**
```hcl
# terraform/aws/main.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.11"
    }
  }

  backend "s3" {
    bucket = "psp-terraform-state"
    key    = "integration-infrastructure/terraform.tfstate"
    region = "ap-southeast-1"
    
    dynamodb_table = "psp-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = "PSP"
      Environment = var.environment
      ManagedBy   = "Terraform"
      Component   = "Integration"
    }
  }
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}
data "aws_availability_zones" "available" {
  state = "available"
}

locals {
  cluster_name = "psp-${var.environment}-eks"
  
  common_tags = {
    Project     = "PSP"
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

# VPC Configuration
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "psp-${var.environment}-vpc"
  cidr = var.vpc_cidr

  azs             = data.aws_availability_zones.available.names
  private_subnets = var.private_subnet_cidrs
  public_subnets  = var.public_subnet_cidrs

  enable_nat_gateway   = true
  enable_vpn_gateway   = false
  enable_dns_hostnames = true
  enable_dns_support   = true

  enable_flow_log                      = true
  create_flow_log_cloudwatch_iam_role  = true
  create_flow_log_cloudwatch_log_group = true

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
    "kubernetes.io/cluster/${local.cluster_name}" = "owned"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
    "kubernetes.io/cluster/${local.cluster_name}" = "owned"
  }

  tags = local.common_tags
}

# EKS Cluster
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"

  cluster_name    = local.cluster_name
  cluster_version = var.kubernetes_version

  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets
  control_plane_subnet_ids = module.vpc.private_subnets

  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access_cidrs = var.cluster_endpoint_public_access_cidrs

  cluster_enabled_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]

  cluster_addons = {
    coredns = {
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
    vpc-cni = {
      most_recent = true
    }
    aws-ebs-csi-driver = {
      most_recent = true
    }
  }

  eks_managed_node_groups = {
    integration = {
      name = "integration-ng"
      
      instance_types = ["m5.large", "m5.xlarge"]
      capacity_type  = "ON_DEMAND"
      
      min_size     = 3
      max_size     = 10
      desired_size = 5

      ami_type = "AL2_x86_64"
      
      disk_size = 50
      disk_type = "gp3"

      labels = {
        role = "integration"
      }

      taints = []

      update_config = {
        max_unavailable_percentage = 25
      }

      tags = merge(local.common_tags, {
        "kubernetes.io/cluster/${local.cluster_name}" = "owned"
      })
    }

    infrastructure = {
      name = "infrastructure-ng"
      
      instance_types = ["m5.2xlarge"]
      capacity_type  = "ON_DEMAND"
      
      min_size     = 2
      max_size     = 6
      desired_size = 3

      ami_type = "AL2_x86_64"
      
      disk_size = 100
      disk_type = "gp3"

      labels = {
        role = "infrastructure"
      }

      taints = [
        {
          key    = "infrastructure"
          value  = "true"
          effect = "NO_SCHEDULE"
        }
      ]

      tags = merge(local.common_tags, {
        "kubernetes.io/cluster/${local.cluster_name}" = "owned"
      })
    }
  }

  node_security_group_additional_rules = {
    ingress_self_all = {
      description = "Node to node all ports/protocols"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "ingress"
      self        = true
    }
    
    ingress_cluster_to_node_all_traffic = {
      description                   = "Cluster API to nodes"
      protocol                      = "-1"
      from_port                     = 0
      to_port                       = 0
      type                          = "ingress"
      source_cluster_security_group = true
    }
  }

  tags = local.common_tags
}

# RDS Database
resource "aws_db_subnet_group" "psp" {
  name       = "psp-${var.environment}-db-subnet-group"
  subnet_ids = module.vpc.private_subnets

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-db-subnet-group"
  })
}

resource "aws_security_group" "rds" {
  name_prefix = "psp-${var.environment}-rds-"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [module.eks.node_security_group_id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-rds-sg"
  })
}

resource "aws_db_instance" "psp" {
  identifier = "psp-${var.environment}-db"

  engine         = "postgres"
  engine_version = "15.4"
  instance_class = var.db_instance_class

  allocated_storage     = var.db_allocated_storage
  max_allocated_storage = var.db_max_allocated_storage
  storage_type          = "gp3"
  storage_encrypted     = true

  db_name  = "psp"
  username = var.db_username
  password = var.db_password

  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.psp.name

  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"

  skip_final_snapshot = var.environment != "production"
  deletion_protection = var.environment == "production"

  performance_insights_enabled = true
  monitoring_interval          = 60
  monitoring_role_arn         = aws_iam_role.rds_monitoring.arn

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-db"
  })
}

# ElastiCache Redis
resource "aws_elasticache_subnet_group" "psp" {
  name       = "psp-${var.environment}-cache-subnet"
  subnet_ids = module.vpc.private_subnets

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-cache-subnet"
  })
}

resource "aws_security_group" "elasticache" {
  name_prefix = "psp-${var.environment}-cache-"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [module.eks.node_security_group_id]
  }

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-cache-sg"
  })
}

resource "aws_elasticache_replication_group" "psp" {
  replication_group_id       = "psp-${var.environment}-redis"
  description                = "PSP Redis cluster"

  port               = 6379
  parameter_group_name = "default.redis7"
  node_type          = var.redis_node_type
  num_cache_clusters = var.redis_num_cache_nodes

  subnet_group_name  = aws_elasticache_subnet_group.psp.name
  security_group_ids = [aws_security_group.elasticache.id]

  at_rest_encryption_enabled = true
  transit_encryption_enabled = true
  auth_token                 = var.redis_auth_token

  automatic_failover_enabled = true
  multi_az_enabled          = true

  snapshot_retention_limit = 5
  snapshot_window         = "03:00-05:00"

  tags = merge(local.common_tags, {
    Name = "psp-${var.environment}-redis"
  })
}

# Output values
output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}

output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = module.eks.cluster_name
}

output "database_endpoint" {
  description = "RDS instance endpoint"
  value       = aws_db_instance.psp.endpoint
  sensitive   = true
}

output "redis_endpoint" {
  description = "ElastiCache Redis endpoint"
  value       = aws_elasticache_replication_group.psp.configuration_endpoint_address
  sensitive   = true
}
```

### **Phase 4: Monitoring & Observability (Week 11-12)**

#### **4.1 Prometheus Configuration**
```yaml
# monitoring/prometheus/config.yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s
  external_labels:
    cluster: 'psp-production'
    environment: 'production'

rule_files:
  - "/etc/prometheus/rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  # Kubernetes API Server
  - job_name: 'kubernetes-apiservers'
    kubernetes_sd_configs:
    - role: endpoints
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
    - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
      action: keep
      regex: default;kubernetes;https

  # Kubernetes Nodes
  - job_name: 'kubernetes-nodes'
    kubernetes_sd_configs:
    - role: node
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
    - action: labelmap
      regex: __meta_kubernetes_node_label_(.+)

  # PSP Services
  - job_name: 'psp-notification-service'
    kubernetes_sd_configs:
    - role: pod
    relabel_configs:
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
      action: keep
      regex: true
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
      action: replace
      target_label: __metrics_path__
      regex: (.+)
    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
      action: replace
      regex: ([^:]+)(?::\d+)?;(\d+)
      replacement: $1:$2
      target_label: __address__
    - action: labelmap
      regex: __meta_kubernetes_pod_label_(.+)
    - source_labels: [__meta_kubernetes_namespace]
      action: replace
      target_label: kubernetes_namespace
    - source_labels: [__meta_kubernetes_pod_name]
      action: replace
      target_label: kubernetes_pod_name

  # Istio Metrics
  - job_name: 'istio-mesh'
    kubernetes_sd_configs:
    - role: endpoints
      namespaces:
        names:
        - istio-system
        - integration
    relabel_configs:
    - source_labels: [__meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
      action: keep
      regex: istio-proxy;http-monitoring
    - source_labels: [__address__, __meta_kubernetes_endpoint_port]
      action: replace
      regex: ([^:]+):(\d+)
      replacement: $1:15090
      target_label: __address__
    - action: labelmap
      regex: __meta_kubernetes_service_label_(.+)
    - source_labels: [__meta_kubernetes_namespace]
      action: replace
      target_label: source_namespace
    - source_labels: [__meta_kubernetes_service_name]
      action: replace
      target_label: source_service

  # RabbitMQ
  - job_name: 'rabbitmq'
    static_configs:
    - targets: ['rabbitmq-exporter:9419']
    scrape_interval: 30s
    metrics_path: /metrics

  # Redis
  - job_name: 'redis'
    static_configs:
    - targets: ['redis-exporter:9121']
    scrape_interval: 30s

  # PostgreSQL
  - job_name: 'postgres'
    static_configs:
    - targets: ['postgres-exporter:9187']
    scrape_interval: 30s
```

#### **4.2 Grafana Dashboard Configuration**
```json
{
  "dashboard": {
    "id": null,
    "title": "PSP Integration Services",
    "tags": ["psp", "integration", "microservices"],
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Service Health Overview",
        "type": "stat",
        "targets": [
          {
            "expr": "up{job=~\"psp-.*\"}",
            "legendFormat": "{{kubernetes_pod_name}}"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "thresholds"
            },
            "mappings": [
              {
                "options": {
                  "0": {
                    "text": "DOWN",
                    "color": "red"
                  },
                  "1": {
                    "text": "UP",
                    "color": "green"
                  }
                },
                "type": "value"
              }
            ],
            "thresholds": {
              "steps": [
                {
                  "color": "red",
                  "value": 0
                },
                {
                  "color": "green",
                  "value": 1
                }
              ]
            }
          }
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 0
        }
      },
      {
        "id": 2,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total{job=~\"psp-.*\"}[5m])) by (service)",
            "legendFormat": "{{service}}"
          }
        ],
        "yAxes": [
          {
            "label": "Requests/sec",
            "min": 0
          }
        ],
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 0
        }
      },
      {
        "id": 3,
        "title": "Response Time P95",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket{job=~\"psp-.*\"}[5m])) by (le, service))",
            "legendFormat": "{{service}} P95"
          }
        ],
        "yAxes": [
          {
            "label": "Seconds",
            "min": 0
          }
        ],
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 8
        }
      },
      {
        "id": 4,
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total{job=~\"psp-.*\", status=~\"5..\"}[5m])) by (service) / sum(rate(http_requests_total{job=~\"psp-.*\"}[5m])) by (service)",
            "legendFormat": "{{service}} Error Rate"
          }
        ],
        "yAxes": [
          {
            "label": "Percentage",
            "min": 0,
            "max": 1
          }
        ],
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 8
        }
      },
      {
        "id": 5,
        "title": "Notification Delivery Success Rate",
        "type": "stat",
        "targets": [
          {
            "expr": "sum(rate(notifications_sent_total{status=\"success\"}[5m])) / sum(rate(notifications_sent_total[5m]))",
            "legendFormat": "Success Rate"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "unit": "percentunit",
            "min": 0,
            "max": 1,
            "thresholds": {
              "steps": [
                {
                  "color": "red",
                  "value": 0
                },
                {
                  "color": "yellow",
                  "value": 0.95
                },
                {
                  "color": "green",
                  "value": 0.99
                }
              ]
            }
          }
        },
        "gridPos": {
          "h": 4,
          "w": 6,
          "x": 0,
          "y": 16
        }
      },
      {
        "id": 6,
        "title": "CRM Sync Success Rate",
        "type": "stat",
        "targets": [
          {
            "expr": "sum(rate(crm_sync_total{status=\"success\"}[5m])) / sum(rate(crm_sync_total[5m]))",
            "legendFormat": "Success Rate"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "unit": "percentunit",
            "min": 0,
            "max": 1,
            "thresholds": {
              "steps": [
                {
                  "color": "red",
                  "value": 0
                },
                {
                  "color": "yellow",
                  "value": 0.95
                },
                {
                  "color": "green",
                  "value": 0.99
                }
              ]
            }
          }
        },
        "gridPos": {
          "h": 4,
          "w": 6,
          "x": 6,
          "y": 16
        }
      },
      {
        "id": 7,
        "title": "Event Processing Rate",
        "type": "stat",
        "targets": [
          {
            "expr": "sum(rate(events_processed_total[5m]))",
            "legendFormat": "Events/sec"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "unit": "reqps",
            "min": 0
          }
        },
        "gridPos": {
          "h": 4,
          "w": 6,
          "x": 12,
          "y": 16
        }
      },
      {
        "id": 8,
        "title": "Infrastructure Resource Usage",
        "type": "graph",
        "targets": [
          {
            "expr": "avg(rate(container_cpu_usage_seconds_total{namespace=\"integration\"}[5m])) by (pod)",
            "legendFormat": "CPU - {{pod}}"
          },
          {
            "expr": "avg(container_memory_usage_bytes{namespace=\"integration\"}) by (pod) / 1024 / 1024",
            "legendFormat": "Memory MB - {{pod}}"
          }
        ],
        "yAxes": [
          {
            "label": "Usage"
          }
        ],
        "gridPos": {
          "h": 8,
          "w": 24,
          "x": 0,
          "y": 20
        }
      }
    ],
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "refresh": "10s"
  }
}
```

---

## 🔗 **CORE FEATURES IMPLEMENTATION DETAILS**

### **FR-009: CRM Integration**
- **Bi-directional Sync**: Real-time data synchronization với HubSpot và Salesforce
- **Data Deduplication**: >95% accuracy trong việc xử lý duplicate contacts
- **Batch Processing**: Handle 10K records per batch với efficient processing
- **Error Handling**: Comprehensive retry logic với exponential backoff
- **GDPR Compliance**: Data anonymization và consent management

### **FR-010: Notification System**
- **Multi-channel Support**: SMS (Twilio), Email (SendGrid), Push (Firebase)
- **Template Management**: Reusable notification templates với dynamic content
- **Rate Limiting**: 5 notifications per minute per user để prevent spam
- **Delivery Tracking**: Real-time delivery status monitoring
- **Fallback Channels**: Automatic failover when primary channel fails

### **API Gateway Features**
- **Request Routing**: Intelligent routing based on path, method, headers
- **Rate Limiting**: Configurable rate limits per API key/user
- **Authentication**: JWT validation với RBAC integration
- **Load Balancing**: Multiple routing algorithms (round-robin, least-conn)
- **Circuit Breaker**: Protection against cascading failures

### **Event Bus Features**
- **Message Durability**: Persistent message storage với RabbitMQ/Kafka
- **Dead Letter Queue**: Failed message handling với retry mechanisms
- **Event Ordering**: Guaranteed message ordering per partition/queue
- **Scalable Processing**: Horizontal scaling của event consumers
- **Event Replay**: Ability to replay events from specific timestamps

### **Infrastructure Management**
- **Auto-scaling**: CPU/Memory based scaling với custom metrics
- **Blue-Green Deployment**: Zero-downtime deployments với traffic switching
- **Health Monitoring**: Comprehensive health checks và alerting
- **Resource Management**: Efficient resource allocation và cost optimization
- **Security**: mTLS service-to-service communication với Istio

---

## 📊 **DATABASE DESIGN**

### **PostgreSQL Tables**
- **notifications**: Notification records với delivery status
- **crm_contacts**: Synchronized contact data từ multiple CRMs
- **gateway_configs**: API gateway routing configurations
- **event_logs**: Audit trail cho all system events
- **integration_configs**: External service connection settings
- **infrastructure_resources**: Infrastructure resource metadata

### **Redis Cache**
- **api_rate_limits**: Rate limiting data cho API gateway
- **notification_templates**: Cached notification templates
- **crm_sync_status**: Real-time CRM sync status
- **event_processing_state**: Event consumer state management

---

## 🚀 **DEPLOYMENT STRATEGY**

### **Kubernetes Deployment**
- **Namespace Isolation**: Separate namespaces cho different environments
- **Resource Quotas**: CPU/Memory limits để prevent resource hogging
- **Pod Disruption Budgets**: Maintain availability during updates
- **Horizontal Pod Autoscaling**: Auto-scale based on metrics
- **Service Mesh**: Istio cho security và observability

### **CI/CD Pipeline**
```yaml
# .github/workflows/integration-ci.yml
name: Integration Service CI/CD

on:
  push:
    branches: [main, develop]
    paths: ['integration-infrastructure-service/**']
  pull_request:
    branches: [main]
    paths: ['integration-infrastructure-service/**']

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
          POSTGRES_DB: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: integration-infrastructure-service/backend/package-lock.json
    
    - name: Install dependencies
      working-directory: integration-infrastructure-service/backend
      run: npm ci
    
    - name: Run linting
      working-directory: integration-infrastructure-service/backend
      run: npm run lint
    
    - name: Run type checking
      working-directory: integration-infrastructure-service/backend
      run: npm run type-check
    
    - name: Run unit tests
      working-directory: integration-infrastructure-service/backend
      run: npm run test:unit
      env:
        DATABASE_URL: postgresql://postgres:test@localhost:5432/test
        REDIS_URL: redis://localhost:6379
    
    - name: Run integration tests
      working-directory: integration-infrastructure-service/backend
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:test@localhost:5432/test
        REDIS_URL: redis://localhost:6379
    
    - name: Build Docker image
      run: |
        docker build -t psp/integration-service:${{ github.sha }} \
          integration-infrastructure-service/backend/
    
    - name: Run E2E tests
      working-directory: integration-infrastructure-service/backend
      run: npm run test:e2e
      env:
        DOCKER_IMAGE: psp/integration-service:${{ github.sha }}

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ap-southeast-1
    
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    
    - name: Build and push Docker image
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        ECR_REPOSITORY: psp/integration-service
        IMAGE_TAG: ${{ github.sha }}
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG \
          integration-infrastructure-service/backend/
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG \
          $ECR_REGISTRY/$ECR_REPOSITORY:latest
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest
    
    - name: Deploy to EKS
      run: |
        aws eks update-kubeconfig --region ap-southeast-1 --name psp-production-eks
        kubectl set image deployment/notification-service \
          notification-service=$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG \
          -n integration
        kubectl rollout status deployment/notification-service -n integration
```

---

**🎯 Sub-Project 5 Implementation Ready! Integration & Infrastructure service đã sẵn sàng cho enterprise-scale deployment với complete infrastructure automation và production-grade monitoring! 🚀**
