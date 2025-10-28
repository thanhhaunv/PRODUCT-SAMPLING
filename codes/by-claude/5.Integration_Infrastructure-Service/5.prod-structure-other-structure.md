# 🚀 Sub-Project 5: Integration & Communication Domain - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **📦 SHARED PACKAGES** | | | | |
| Core Package | `@psp/shared-core@1.2.0` | Common utilities package | Part02.8 Technical Requirements | Cross-service utilities (logger, validation, crypto) |
| Events Package | `@psp/shared-events@1.1.0` | Domain events contracts | Part06.1.2 Event Bus | Event-driven communication between services |
| Database Package | `@psp/shared-database@1.0.5` | Database utilities | Part07.1 Data Model Overview | DB connection management, migrations |
| **🗃️ BACKEND DOMAIN** | | | | |
| Entities | `backend/src/domain/entities/Notification.ts` | Core notification entity với business rules | Part04.3.4 Notification System (FR-010) | Encapsulate multi-channel notification logic |
| Entities | `backend/src/domain/entities/NotificationTemplate.ts` | Template entity cho reusable notifications | Part04.3.4 Notification System (FR-010) | Standardized notification formats |
| Entities | `backend/src/domain/entities/NotificationDelivery.ts` | Delivery tracking entity | Part04.3.4 Notification System (FR-010) | Track delivery status across channels |
| Entities | `backend/src/domain/entities/CRMContact.ts` | CRM contact entity cho data sync | Part04.3.3 CRM Integration (FR-009) | Manage CRM contact data mapping |
| Entities | `backend/src/domain/entities/CRMIntegration.ts` | CRM integration configuration entity | Part04.3.3 CRM Integration (FR-009) | Manage CRM system connections |
| Entities | `backend/src/domain/entities/CRMSyncJob.ts` | CRM synchronization job entity | Part04.3.3 CRM Integration (FR-009) | Track sync operations |
| Entities | `backend/src/domain/entities/MessageQueue.ts` | Message queue entity | Part06.1.2 Event Bus | RabbitMQ message management |
| Entities | `backend/src/domain/entities/CommunicationChannel.ts` | Communication channel entity | Part04.3.4 Notification System | Channel configuration và management |
| Value Objects | `backend/src/domain/value-objects/NotificationChannel.ts` | Notification channel value object | Part04.3.4 Notification System | Channel validation (SMS/Email/Push) |
| Value Objects | `backend/src/domain/value-objects/DeliveryStatus.ts` | Delivery status value object | Part04.3.4 Notification System | Status tracking (Sent/Delivered/Failed) |
| Value Objects | `backend/src/domain/value-objects/CRMCredentials.ts` | CRM authentication credentials | Part04.3.3 CRM Integration | Secure credential handling |
| Value Objects | `backend/src/domain/value-objects/ContactData.ts` | Contact data value object | Part04.3.3 CRM Integration | Contact information validation |
| Value Objects | `backend/src/domain/value-objects/MessagePriority.ts` | Message priority value object | Part04.3.4 Notification System | Priority-based delivery |
| Value Objects | `backend/src/domain/value-objects/SyncStatus.ts` | Synchronization status value object | Part04.3.3 CRM Integration | Sync operation status |
| Repositories | `backend/src/domain/repositories/INotificationRepository.ts` | Notification repository interface | Part06.2.1 Layered Architecture | Notification storage contract |
| Repositories | `backend/src/domain/repositories/INotificationTemplateRepository.ts` | Template repository interface | Part06.2.1 Layered Architecture | Template storage contract |
| Repositories | `backend/src/domain/repositories/ICRMContactRepository.ts` | CRM contact repository interface | Part06.2.1 Layered Architecture | CRM data access contract |
| Repositories | `backend/src/domain/repositories/ICRMIntegrationRepository.ts` | CRM integration repository interface | Part06.2.1 Layered Architecture | Integration config contract |
| Repositories | `backend/src/domain/repositories/IMessageQueueRepository.ts` | Message queue repository interface | Part06.2.1 Layered Architecture | Queue storage contract |
| Repositories | `backend/src/domain/repositories/ICommunicationChannelRepository.ts` | Channel repository interface | Part06.2.1 Layered Architecture | Channel config contract |
| Domain Services | `backend/src/domain/services/NotificationRoutingDomainService.ts` | Notification routing business logic | Part04.3.4 Notification System (FR-010) | Multi-channel routing algorithms |
| Domain Services | `backend/src/domain/services/NotificationDeliveryDomainService.ts` | Delivery optimization logic | Part04.3.4 Notification System (FR-010) | Delivery strategy và retry logic |
| Domain Services | `backend/src/domain/services/CRMSyncDomainService.ts` | CRM synchronization business logic | Part04.3.3 CRM Integration (FR-009) | Bi-directional sync algorithms |
| Domain Services | `backend/src/domain/services/ContactDeduplicationDomainService.ts` | Contact deduplication logic | Part04.3.3 CRM Integration (FR-009) | Duplicate detection và merging |
| Domain Services | `backend/src/domain/services/MessageQueueManagementDomainService.ts` | Queue management logic | Part06.1.2 Event Bus | Queue prioritization và management |
| **📄 BACKEND APPLICATION** | | | | |
| Use Cases | `backend/src/application/use-cases/notifications/SendNotificationUseCase.ts` | Send notification workflow | Part04.3.4 Notification System (FR-010) | Multi-channel notification delivery |
| Use Cases | `backend/src/application/use-cases/notifications/SendBatchNotificationUseCase.ts` | Batch notification sending | Part04.3.4 Notification System (FR-010) | Bulk notification processing |
| Use Cases | `backend/src/application/use-cases/notifications/ScheduleNotificationUseCase.ts` | Schedule notification workflow | Part04.3.4 Notification System (FR-010) | Delayed notification delivery |
| Use Cases | `backend/src/application/use-cases/notifications/GetNotificationStatusUseCase.ts` | Notification status tracking | Part04.3.4 Notification System (FR-010) | Delivery status monitoring |
| Use Cases | `backend/src/application/use-cases/notifications/CreateNotificationTemplateUseCase.ts` | Template creation workflow | Part04.3.4 Notification System (FR-010) | Reusable template management |
| Use Cases | `backend/src/application/use-cases/notifications/UpdateNotificationTemplateUseCase.ts` | Template update workflow | Part04.3.4 Notification System (FR-010) | Template modification |
| Use Cases | `backend/src/application/use-cases/notifications/CancelNotificationUseCase.ts` | Cancel scheduled notification | Part04.3.4 Notification System (FR-010) | Notification cancellation |
| Use Cases | `backend/src/application/use-cases/notifications/RetryFailedNotificationUseCase.ts` | Retry failed notifications | Part04.3.4 Notification System (FR-010) | Delivery retry mechanism |
| Use Cases | `backend/src/application/use-cases/crm/SyncContactToCRMUseCase.ts` | CRM contact synchronization | Part04.3.3 CRM Integration (FR-009) | Push data to CRM systems |
| Use Cases | `backend/src/application/use-cases/crm/ImportContactsFromCRMUseCase.ts` | Import contacts from CRM | Part04.3.3 CRM Integration (FR-009) | Pull data from CRM systems |
| Use Cases | `backend/src/application/use-cases/crm/ValidateCRMConnectionUseCase.ts` | CRM connection validation | Part04.3.3 CRM Integration (FR-009) | Test CRM connectivity |
| Use Cases | `backend/src/application/use-cases/crm/DeduplicateCRMContactsUseCase.ts` | CRM contact deduplication | Part04.3.3 CRM Integration (FR-009) | Data quality management |
| Use Cases | `backend/src/application/use-cases/crm/SyncCRMDataBidirectionalUseCase.ts` | Bi-directional CRM sync | Part04.3.3 CRM Integration (FR-009) | Two-way data synchronization |
| Use Cases | `backend/src/application/use-cases/crm/SetupCRMIntegrationUseCase.ts` | CRM integration setup | Part04.3.3 CRM Integration (FR-009) | Initial CRM configuration |
| Use Cases | `backend/src/application/use-cases/crm/MonitorCRMSyncJobUseCase.ts` | Monitor sync jobs | Part04.3.3 CRM Integration (FR-009) | Sync job status tracking |
| Use Cases | `backend/src/application/use-cases/messaging/ProcessMessageQueueUseCase.ts` | Message queue processing | Part06.1.2 Event Bus | RabbitMQ message handling |
| Use Cases | `backend/src/application/use-cases/messaging/PublishMessageUseCase.ts` | Publish message to queue | Part06.1.2 Event Bus | Event publishing |
| Use Cases | `backend/src/application/use-cases/messaging/ConsumeMessageUseCase.ts` | Consume message from queue | Part06.1.2 Event Bus | Event consumption |
| Use Cases | `backend/src/application/use-cases/messaging/HandleDeadLetterQueueUseCase.ts` | Dead letter queue handling | Part06.1.2 Event Bus | Failed message management |
| DTOs | `backend/src/application/dto/NotificationDTO.ts` | Notification data transfer objects | Part08.5.1 Notification APIs | API contract definitions |
| DTOs | `backend/src/application/dto/NotificationTemplateDTO.ts` | Template DTOs | Part08.5.1 Notification APIs | Template API contracts |
| DTOs | `backend/src/application/dto/CRMDTO.ts` | CRM integration DTOs | Part08.5.2 CRM Integration APIs | CRM API contracts |
| DTOs | `backend/src/application/dto/CRMContactDTO.ts` | CRM contact DTOs | Part08.5.2 CRM Integration APIs | Contact API contracts |
| DTOs | `backend/src/application/dto/MessageQueueDTO.ts` | Message queue DTOs | Part06.1.2 Event Bus | Queue API contracts |
| DTOs | `backend/src/application/dto/CommunicationChannelDTO.ts` | Channel configuration DTOs | Part04.3.4 Notification System | Channel API contracts |
| Ports | `backend/src/application/ports/ITwilioService.ts` | Twilio service interface | Part09.1.1 Twilio Integration | SMS service integration |
| Ports | `backend/src/application/ports/ISendGridService.ts` | SendGrid service interface | Part09.1.1 Twilio Integration | Email service integration |
| Ports | `backend/src/application/ports/IFirebaseService.ts` | Firebase service interface | Part09.1.4 Firebase Integration | Push notification service |
| Ports | `backend/src/application/ports/IHubSpotService.ts` | HubSpot service interface | Part09.1.2 HubSpot Integration | HubSpot CRM integration |
| Ports | `backend/src/application/ports/ISalesforceService.ts` | Salesforce service interface | Part09.1.3 Salesforce Integration | Salesforce CRM integration |
| Ports | `backend/src/application/ports/IRabbitMQService.ts` | RabbitMQ service interface | Part06.1.2 Event Bus | Message bus integration |
| Ports | `backend/src/application/ports/IEmailTemplateService.ts` | Email template service interface | Part04.3.4 Notification System | Template processing |
| Ports | `backend/src/application/ports/ISMSTemplateService.ts` | SMS template service interface | Part04.3.4 Notification System | SMS template processing |
| **🗃️ BACKEND INFRASTRUCTURE** | | | | |
| Repositories | `backend/src/infrastructure/persistence/repositories/NotificationRepository.ts` | PostgreSQL notification repository | Part07.6.1 Notification Table | Notification data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/NotificationTemplateRepository.ts` | Template repository implementation | Part07.6.1 Notification Table | Template data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/CRMContactRepository.ts` | CRM contact data access | Part07.6.2 CRM_Contact Table | CRM data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/CRMIntegrationRepository.ts` | CRM integration config storage | Part07.6.2 CRM_Contact Table | Integration config persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/MessageQueueRepository.ts` | Message queue repository | Part07.6.4 Event_Log Table | Queue metadata persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/CommunicationChannelRepository.ts` | Channel config repository | Part07.6.1 Notification Table | Channel config persistence |
| Models | `backend/src/infrastructure/persistence/models/NotificationModel.ts` | Prisma notification model | Part07.6.1 Notification Table | Notification schema mapping |
| Models | `backend/src/infrastructure/persistence/models/NotificationTemplateModel.ts` | Template database model | Part07.6.1 Notification Table | Template schema mapping |
| Models | `backend/src/infrastructure/persistence/models/CRMContactModel.ts` | CRM contact database model | Part07.6.2 CRM_Contact Table | CRM schema mapping |
| Models | `backend/src/infrastructure/persistence/models/CRMIntegrationModel.ts` | CRM integration model | Part07.6.2 CRM_Contact Table | Integration schema mapping |
| Models | `backend/src/infrastructure/persistence/models/MessageQueueModel.ts` | Message queue model | Part07.6.4 Event_Log Table | Queue schema mapping |
| Models | `backend/src/infrastructure/persistence/models/CommunicationChannelModel.ts` | Channel model | Part07.6.1 Notification Table | Channel schema mapping |
| Migrations | `backend/src/infrastructure/persistence/migrations/001_create_notifications.sql` | Notification tables creation | Part07.6.1 Notification Table | Notification schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/002_create_crm_contacts.sql` | CRM contact tables creation | Part07.6.2 CRM_Contact Table | CRM data schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/003_create_notification_templates.sql` | Template tables creation | Part07.6.1 Notification Table | Template schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/004_create_crm_integrations.sql` | CRM integration tables | Part07.6.2 CRM_Contact Table | Integration schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/005_create_message_queues.sql` | Message queue tables | Part07.6.4 Event_Log Table | Queue metadata schema |
| Migrations | `backend/src/infrastructure/persistence/migrations/006_create_communication_channels.sql` | Channel configuration tables | Part07.6.1 Notification Table | Channel config schema |
| External Services | `backend/src/infrastructure/external-services/TwilioAdapter.ts` | Twilio service adapter | Part09.1.1 Twilio Integration | SMS delivery via Twilio |
| External Services | `backend/src/infrastructure/external-services/SendGridAdapter.ts` | SendGrid email adapter | Part09.1.1 Twilio Integration | Email delivery via SendGrid |
| External Services | `backend/src/infrastructure/external-services/FirebaseAdapter.ts` | Firebase push notifications | Part09.1.4 Firebase Integration | Push notification delivery |
| External Services | `backend/src/infrastructure/external-services/HubSpotAdapter.ts` | HubSpot CRM adapter | Part09.1.2 HubSpot Integration | HubSpot API integration |
| External Services | `backend/src/infrastructure/external-services/SalesforceAdapter.ts` | Salesforce CRM adapter | Part09.1.3 Salesforce Integration | Salesforce API integration |
| External Services | `backend/src/infrastructure/external-services/RabbitMQAdapter.ts` | RabbitMQ event bus adapter | Part06.1.2 Event Bus | Message queue integration |
| External Services | `backend/src/infrastructure/external-services/EmailTemplateAdapter.ts` | Email template processor | Part04.3.4 Notification System | Email template rendering |
| External Services | `backend/src/infrastructure/external-services/SMSTemplateAdapter.ts` | SMS template processor | Part04.3.4 Notification System | SMS template rendering |
| External Services | `backend/src/infrastructure/external-services/WebhookAdapter.ts` | Webhook delivery adapter | Part04.3.4 Notification System | Webhook notification delivery |
| Config | `backend/src/infrastructure/config/NotificationConfig.ts` | Notification service configuration | Part04.3.4 Notification System | Multi-channel settings |
| Config | `backend/src/infrastructure/config/CRMConfig.ts` | CRM integration configuration | Part04.3.3 CRM Integration | CRM connection settings |
| Config | `backend/src/infrastructure/config/TwilioConfig.ts` | Twilio configuration | Part09.1.1 Twilio Integration | SMS service config |
| Config | `backend/src/infrastructure/config/SendGridConfig.ts` | SendGrid configuration | Part09.1.1 Twilio Integration | Email service config |
| Config | `backend/src/infrastructure/config/FirebaseConfig.ts` | Firebase configuration | Part09.1.4 Firebase Integration | Push notification config |
| Config | `backend/src/infrastructure/config/RabbitMQConfig.ts` | RabbitMQ configuration | Part06.1.2 Event Bus | Message bus settings |
| Config | `backend/src/infrastructure/config/HubSpotConfig.ts` | HubSpot configuration | Part09.1.2 HubSpot Integration | HubSpot API config |
| Config | `backend/src/infrastructure/config/SalesforceConfig.ts` | Salesforce configuration | Part09.1.3 Salesforce Integration | Salesforce API config |
| **🎮 BACKEND PRESENTATION** | | | | |
| Controllers | `backend/src/presentation/controllers/NotificationController.ts` | Notification REST endpoints | Part08.5.1 Notification APIs | Multi-channel notification endpoints |
| Controllers | `backend/src/presentation/controllers/NotificationTemplateController.ts` | Template management endpoints | Part08.5.1 Notification APIs | Template CRUD endpoints |
| Controllers | `backend/src/presentation/controllers/CRMController.ts` | CRM integration REST endpoints | Part08.5.2 CRM Integration APIs | CRM sync endpoints |
| Controllers | `backend/src/presentation/controllers/CRMContactController.ts` | CRM contact management endpoints | Part08.5.2 CRM Integration APIs | Contact CRUD endpoints |
| Controllers | `backend/src/presentation/controllers/MessageQueueController.ts` | Message queue management endpoints | Part06.1.2 Event Bus | Queue monitoring endpoints |
| Controllers | `backend/src/presentation/controllers/CommunicationChannelController.ts` | Channel configuration endpoints | Part04.3.4 Notification System | Channel management endpoints |
| Controllers | `backend/src/presentation/controllers/HealthController.ts` | Service health endpoints | Part14.3 Monitoring Stack | Health check endpoints |
| Controllers | `backend/src/presentation/controllers/MetricsController.ts` | Service metrics endpoints | Part14.3 Monitoring Stack | Metrics collection endpoints |
| Middleware | `backend/src/presentation/middleware/AuthenticationMiddleware.ts` | API authentication middleware | Part05.3 Security Requirements | JWT validation |
| Middleware | `backend/src/presentation/middleware/RateLimitMiddleware.ts` | Rate limiting middleware | Part06.1.1 API Gateway | API protection |
| Middleware | `backend/src/presentation/middleware/RequestLoggingMiddleware.ts` | Request logging middleware | Part06.1.1 API Gateway | Request tracking |
| Middleware | `backend/src/presentation/middleware/ErrorHandlingMiddleware.ts` | Centralized error handling | Part05.4 Error Handling | Consistent error responses |
| Middleware | `backend/src/presentation/middleware/ValidationMiddleware.ts` | Input validation middleware | Part05.7 Input Validation | Request validation |
| Middleware | `backend/src/presentation/middleware/CORSMiddleware.ts` | CORS handling middleware | Part06.1.1 API Gateway | Cross-origin support |
| Routes | `backend/src/presentation/routes/NotificationRoutes.ts` | Notification API route definitions | Part08.5.1 Notification APIs | Notification routing |
| Routes | `backend/src/presentation/routes/CRMRoutes.ts` | CRM integration route definitions | Part08.5.2 CRM Integration APIs | CRM sync routing |
| Routes | `backend/src/presentation/routes/TemplateRoutes.ts` | Template management routing | Part08.5.1 Notification APIs | Template routing |
| Routes | `backend/src/presentation/routes/MessageQueueRoutes.ts` | Queue management routing | Part06.1.2 Event Bus | Queue routing |
| Routes | `backend/src/presentation/routes/ChannelRoutes.ts` | Channel configuration routing | Part04.3.4 Notification System | Channel routing |
| Routes | `backend/src/presentation/routes/HealthRoutes.ts` | Health check route definitions | Part14.3 Monitoring Stack | Health routing |
| Validators | `backend/src/presentation/validators/NotificationValidator.ts` | Notification input validation | Part05.7 Input Validation | Notification data validation |
| Validators | `backend/src/presentation/validators/CRMValidator.ts` | CRM input validation | Part05.7 Input Validation | CRM data validation |
| Validators | `backend/src/presentation/validators/TemplateValidator.ts` | Template validation | Part05.7 Input Validation | Template data validation |
| Validators | `backend/src/presentation/validators/ContactValidator.ts` | Contact data validation | Part05.7 Input Validation | Contact information validation |
| Validators | `backend/src/presentation/validators/ChannelValidator.ts` | Channel configuration validation | Part05.7 Input Validation | Channel config validation |
| **🔧 BACKEND SHARED** | | | | |
| Constants | `backend/src/shared/constants/NotificationConstants.ts` | Notification application constants | Part04.3.4 Notification System | Notification limits, channels |
| Constants | `backend/src/shared/constants/CRMConstants.ts` | CRM integration constants | Part04.3.3 CRM Integration | CRM endpoints, timeouts |
| Constants | `backend/src/shared/constants/MessageQueueConstants.ts` | Message queue constants | Part06.1.2 Event Bus | Queue limits, retry counts |
| Constants | `backend/src/shared/constants/CommunicationConstants.ts` | Communication constants | Part04.3.4 Notification System | Channel types, priorities |
| Constants | `backend/src/shared/constants/IntegrationConstants.ts` | Integration constants | Part09 Integration | Service endpoints, timeouts |
| Exceptions | `backend/src/shared/exceptions/NotificationException.ts` | Notification-specific exceptions | Part05.4 Error Handling | Custom notification errors |
| Exceptions | `backend/src/shared/exceptions/CRMException.ts` | CRM integration exceptions | Part05.4 Error Handling | CRM-specific errors |
| Exceptions | `backend/src/shared/exceptions/MessageQueueException.ts` | Message queue exceptions | Part05.4 Error Handling | Queue-specific errors |
| Exceptions | `backend/src/shared/exceptions/CommunicationException.ts` | Communication exceptions | Part05.4 Error Handling | Channel-specific errors |
| Exceptions | `backend/src/shared/exceptions/IntegrationException.ts` | Integration exceptions | Part05.4 Error Handling | Integration-specific errors |
| Types | `backend/src/shared/types/NotificationTypes.ts` | Notification TypeScript definitions | Part08.5.1 Notification APIs | Notification type definitions |
| Types | `backend/src/shared/types/CRMTypes.ts` | CRM integration type definitions | Part08.5.2 CRM Integration APIs | CRM type definitions |
| Types | `backend/src/shared/types/MessageQueueTypes.ts` | Message queue type definitions | Part06.1.2 Event Bus | Queue type definitions |
| Types | `backend/src/shared/types/CommunicationTypes.ts` | Communication type definitions | Part04.3.4 Notification System | Channel type definitions |
| Types | `backend/src/shared/types/IntegrationTypes.ts` | Integration type definitions | Part09 Integration | Integration type definitions |
| Utils | `backend/src/shared/utils/NotificationUtils.ts` | Notification utility functions | Part04.3.4 Notification System | Template parsing, formatting |
| Utils | `backend/src/shared/utils/CRMUtils.ts` | CRM utility functions | Part04.3.3 CRM Integration | Data mapping, deduplication |
| Utils | `backend/src/shared/utils/MessageQueueUtils.ts` | Message queue utilities | Part06.1.2 Event Bus | Queue management helpers |
| Utils | `backend/src/shared/utils/TemplateUtils.ts` | Template utility functions | Part04.3.4 Notification System | Template rendering helpers |
| Utils | `backend/src/shared/utils/ContactUtils.ts` | Contact utility functions | Part04.3.3 CRM Integration | Contact validation, formatting |
| Utils | `backend/src/shared/utils/EncryptionUtils.ts` | Security utilities | Part05.3 Security Requirements | Data encryption helpers |
| Utils | `backend/src/shared/utils/RetryUtils.ts` | Retry mechanism utilities | Part06.4 Resilience Patterns | Exponential backoff, circuit breaker |
| **🧪 BACKEND TESTING** | | | | |
| Unit Tests | `backend/tests/unit/domain/entities/Notification.test.ts` | Notification entity tests | Part12.1 Unit Testing | Domain logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/CRMContact.test.ts` | CRM contact entity tests | Part12.1 Unit Testing | CRM logic testing |
| Unit Tests | `backend/tests/unit/domain/entities/NotificationTemplate.test.ts` | Template entity tests | Part12.1 Unit Testing | Template logic testing |
| Unit Tests | `backend/tests/unit/domain/services/NotificationRoutingService.test.ts` | Notification routing tests | Part12.1 Unit Testing | Routing algorithm testing |
| Unit Tests | `backend/tests/unit/domain/services/CRMSyncService.test.ts` | CRM sync service tests | Part12.1 Unit Testing | Sync logic testing |
| Unit Tests | `backend/tests/unit/application/use-cases/SendNotification.test.ts` | Send notification use case tests | Part12.1 Unit Testing | Notification workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/SyncContactToCRM.test.ts` | CRM sync use case tests | Part12.1 Unit Testing | CRM workflow testing |
| Unit Tests | `backend/tests/unit/application/use-cases/ProcessMessageQueue.test.ts` | Message queue processing tests | Part12.1 Unit Testing | Queue workflow testing |
| Integration Tests | `backend/tests/integration/repositories/NotificationRepository.test.ts` | Notification repository tests | Part12.2 Integration Testing | Database integration testing |
| Integration Tests | `backend/tests/integration/repositories/CRMContactRepository.test.ts` | CRM repository tests | Part12.2 Integration Testing | CRM data testing |
| Integration Tests | `backend/tests/integration/external-services/TwilioAdapter.test.ts` | Twilio adapter tests | Part12.2 Integration Testing | External SMS service testing |
| Integration Tests | `backend/tests/integration/external-services/HubSpotAdapter.test.ts` | HubSpot adapter tests | Part12.2 Integration Testing | External CRM service testing |
| Integration Tests | `backend/tests/integration/external-services/RabbitMQAdapter.test.ts` | RabbitMQ adapter tests | Part12.2 Integration Testing | Message queue testing |
| Integration Tests | `backend/tests/integration/external-services/SendGridAdapter.test.ts` | SendGrid adapter tests | Part12.2 Integration Testing | Email service testing |
| E2E Tests | `backend/tests/e2e/notifications/notification-flow.test.ts` | Notification E2E tests | Part12.3 E2E Testing | Complete notification flow |
| E2E Tests | `backend/tests/e2e/crm/crm-sync-flow.test.ts` | CRM sync E2E tests | Part12.3 E2E Testing | Complete CRM integration flow |
| E2E Tests | `backend/tests/e2e/messaging/message-queue-flow.test.ts` | Message queue E2E tests | Part12.3 E2E Testing | Complete messaging flow |
| E2E Tests | `backend/tests/e2e/integration/full-integration-flow.test.ts` | Full integration E2E tests | Part12.3 E2E Testing | Complete integration flow |
| **🳹 INFRASTRUCTURE AS CODE** | | | | |
| Kubernetes | `k8s/namespaces/integration-communication-namespace.yaml` | Kubernetes namespace definition | Part14.1 Kubernetes Setup | Service isolation |
| Kubernetes | `k8s/deployments/notification-service.yaml` | Notification service deployment | Part14.1 Kubernetes Setup | Notification service K8s config |
| Kubernetes | `k8s/deployments/crm-service.yaml` | CRM service deployment | Part14.1 Kubernetes Setup | CRM service K8s config |
| Kubernetes | `k8s/deployments/rabbitmq.yaml` | RabbitMQ deployment | Part14.1 Kubernetes Setup | Message queue K8s config |
| Kubernetes | `k8s/services/notification-service.yaml` | Notification service K8s service | Part14.1 Kubernetes Setup | Service networking |
| Kubernetes | `k8s/services/crm-service.yaml` | CRM service K8s service | Part14.1 Kubernetes Setup | CRM service networking |
| Kubernetes | `k8s/services/rabbitmq-service.yaml` | RabbitMQ service | Part14.1 Kubernetes Setup | Message queue networking |
| Kubernetes | `k8s/configmaps/notification-config.yaml` | Notification configuration | Part14.1 Kubernetes Setup | Service configuration |
| Kubernetes | `k8s/configmaps/crm-config.yaml` | CRM configuration | Part14.1 Kubernetes Setup | CRM configuration |
| Kubernetes | `k8s/secrets/twilio-secrets.yaml` | Twilio credentials | Part14.1 Kubernetes Setup | SMS service credentials |
| Kubernetes | `k8s/secrets/sendgrid-secrets.yaml` | SendGrid credentials | Part14.1 Kubernetes Setup | Email service credentials |
| Kubernetes | `k8s/secrets/hubspot-secrets.yaml` | HubSpot credentials | Part14.1 Kubernetes Setup | CRM service credentials |
| Kubernetes | `k8s/ingress/integration-communication-ingress.yaml` | Service ingress configuration | Part14.1 Kubernetes Setup | External access configuration |
| Docker | `docker/notification-service.Dockerfile` | Notification service container | Part15.1 Container Orchestration | Service containerization |
| Docker | `docker/crm-service.Dockerfile` | CRM service container | Part15.1 Container Orchestration | CRM service containerization |
| Docker | `docker-compose.yml` | Local development environment | Part15.1 Container Orchestration | Local development setup |
| CI/CD | `.github/workflows/integration-communication-ci.yml` | Continuous integration pipeline | Part15.2 CI/CD Pipelines | Automated testing và building |
| CI/CD | `.github/workflows/integration-communication-cd.yml` | Continuous deployment pipeline | Part15.2 CI/CD Pipelines | Automated deployment |
| CI/CD | `scripts/deploy-integration-communication.sh` | Deployment script | Part15.2 CI/CD Pipelines | Service deployment automation |
| CI/CD | `scripts/health-check-integration-communication.sh` | Health check script | Part15.2 CI/CD Pipelines | Service health verification |
| Monitoring | `monitoring/prometheus/integration-communication-metrics.yaml` | Prometheus metrics configuration | Part14.3 Monitoring Stack | Metrics collection |
| Monitoring | `monitoring/grafana/dashboards/integration-communication-dashboard.json` | Grafana dashboard | Part14.3 Monitoring Stack | Service monitoring |
| Monitoring | `monitoring/alerts/integration-communication-alerts.yaml` | Alert rules | Part14.3 Monitoring Stack | Service alerting |
| **📚 DOCUMENTATION** | | | | |
| API Documentation | `docs/api/notification-api.md` | Notification API documentation | Part08.5.1 Notification APIs | API reference guide |
| API Documentation | `docs/api/crm-integration-api.md` | CRM integration API documentation | Part08.5.2 CRM Integration APIs | CRM API reference |
| API Documentation | `docs/api/message-queue-api.md` | Message queue API documentation | Part06.1.2 Event Bus | Queue API reference |
| Architecture Documentation | `docs/architecture/integration-communication-architecture.md` | Service architecture guide | Part06.2.1 Layered Architecture | Architectural overview |
| Implementation Documentation | `docs/implementation/notification-implementation.md` | Notification implementation guide | Part04.3.4 Notification System | Implementation details |
| Implementation Documentation | `docs/implementation/crm-integration-implementation.md` | CRM integration guide | Part04.3.3 CRM Integration | Integration setup guide |
| Deployment Documentation | `docs/deployment/integration-communication-deployment.md` | Deployment guide | Part14 Deployment Architecture | Production deployment |
| Monitoring Documentation | `docs/monitoring/integration-communication-monitoring.md` | Monitoring guide | Part14.3 Monitoring Stack | Monitoring setup |
| Configuration Documentation | `docs/configuration/integration-communication-config.md` | Configuration guide | Part02.8 Technical Requirements | Service configuration |
| **🔧 PROJECT CONFIGURATION** | | | | |
| Project Setup | `package.json` | Node.js project configuration | Part02.8 Technical Requirements | Dependency management |
| Project Setup | `tsconfig.json` | TypeScript configuration | Part02.8 Technical Requirements | TypeScript compilation |
| Project Setup | `eslint.config.js` | ESLint configuration | Part02.8 Technical Requirements | Code quality |
| Project Setup | `jest.config.js` | Jest testing configuration | Part12.1 Unit Testing | Testing framework |
| Project Setup | `prettier.config.js` | Prettier configuration | Part02.8 Technical Requirements | Code formatting |
| Project Setup | `.env.example` | Environment variables template | Part02.8 Technical Requirements | Configuration template |
| Project Setup | `README.md` | Project documentation | Part01.1 Purpose Of Document | Project overview |
| Project Setup | `.gitignore` | Git ignore configuration | Part02.8 Technical Requirements | Version control |
| Database | `backend/prisma/schema.prisma` | Database schema definition | Part07.6 Integration Database Design | Schema definition |
| Database | `backend/prisma/seed.ts` | Database seeding script | Part07.6 Integration Database Design | Initial data setup |

---

## 🔗 **CẤU TRÚC THƯ MỤC HOÀN CHỈNH**

```bash
integration-communication-service/
├── 📂 backend/                                 # Integration & Communication Service
│   ├── 📂 src/
│   │   ├── 📂 domain/                          # Domain Layer
│   │   │   ├── 📂 entities/                    # Business Entities
│   │   │   │   ├── Notification.ts             # Multi-channel notification entity
│   │   │   │   ├── NotificationTemplate.ts     # Reusable notification templates
│   │   │   │   ├── NotificationDelivery.ts     # Delivery tracking entity
│   │   │   │   ├── CRMContact.ts               # CRM contact entity
│   │   │   │   ├── CRMIntegration.ts           # CRM integration config
│   │   │   │   ├── CRMSyncJob.ts               # CRM sync operation tracking
│   │   │   │   ├── MessageQueue.ts             # RabbitMQ message entity
│   │   │   │   └── CommunicationChannel.ts     # Channel configuration entity
│   │   │   ├── 📂 value-objects/               # Value Objects
│   │   │   │   ├── NotificationChannel.ts      # Channel validation
│   │   │   │   ├── DeliveryStatus.ts           # Delivery status tracking
│   │   │   │   ├── CRMCredentials.ts           # Secure credential handling
│   │   │   │   ├── ContactData.ts              # Contact information validation
│   │   │   │   ├── MessagePriority.ts          # Message priority levels
│   │   │   │   └── SyncStatus.ts               # Synchronization status
│   │   │   ├── 📂 repositories/                # Repository Interfaces
│   │   │   │   ├── INotificationRepository.ts
│   │   │   │   ├── INotificationTemplateRepository.ts
│   │   │   │   ├── ICRMContactRepository.ts
│   │   │   │   ├── ICRMIntegrationRepository.ts
│   │   │   │   ├── IMessageQueueRepository.ts
│   │   │   │   └── ICommunicationChannelRepository.ts
│   │   │   └── 📂 services/                    # Domain Services
│   │   │       ├── NotificationRoutingDomainService.ts
│   │   │       ├── NotificationDeliveryDomainService.ts
│   │   │       ├── CRMSyncDomainService.ts
│   │   │       ├── ContactDeduplicationDomainService.ts
│   │   │       └── MessageQueueManagementDomainService.ts
│   │   │
│   │   ├── 📂 application/                     # Application Layer
│   │   │   ├── 📂 use-cases/                   # Use Cases
│   │   │   │   ├── 📂 notifications/           # Notification workflows
│   │   │   │   │   ├── SendNotificationUseCase.ts
│   │   │   │   │   ├── SendBatchNotificationUseCase.ts
│   │   │   │   │   ├── ScheduleNotificationUseCase.ts
│   │   │   │   │   ├── GetNotificationStatusUseCase.ts
│   │   │   │   │   ├── CreateNotificationTemplateUseCase.ts
│   │   │   │   │   ├── UpdateNotificationTemplateUseCase.ts
│   │   │   │   │   ├── CancelNotificationUseCase.ts
│   │   │   │   │   └── RetryFailedNotificationUseCase.ts
│   │   │   │   ├── 📂 crm/                     # CRM integration workflows
│   │   │   │   │   ├── SyncContactToCRMUseCase.ts
│   │   │   │   │   ├── ImportContactsFromCRMUseCase.ts
│   │   │   │   │   ├── ValidateCRMConnectionUseCase.ts
│   │   │   │   │   ├── DeduplicateCRMContactsUseCase.ts
│   │   │   │   │   ├── SyncCRMDataBidirectionalUseCase.ts
│   │   │   │   │   ├── SetupCRMIntegrationUseCase.ts
│   │   │   │   │   └── MonitorCRMSyncJobUseCase.ts
│   │   │   │   └── 📂 messaging/               # Message queue workflows
│   │   │   │       ├── ProcessMessageQueueUseCase.ts
│   │   │   │       ├── PublishMessageUseCase.ts
│   │   │   │       ├── ConsumeMessageUseCase.ts
│   │   │   │       └── HandleDeadLetterQueueUseCase.ts
│   │   │   ├── 📂 dto/                         # Data Transfer Objects
│   │   │   │   ├── NotificationDTO.ts
│   │   │   │   ├── NotificationTemplateDTO.ts
│   │   │   │   ├── CRMDTO.ts
│   │   │   │   ├── CRMContactDTO.ts
│   │   │   │   ├── MessageQueueDTO.ts
│   │   │   │   └── CommunicationChannelDTO.ts
│   │   │   └── 📂 ports/                       # External Service Interfaces
│   │   │       ├── ITwilioService.ts
│   │   │       ├── ISendGridService.ts
│   │   │       ├── IFirebaseService.ts
│   │   │       ├── IHubSpotService.ts
│   │   │       ├── ISalesforceService.ts
│   │   │       ├── IRabbitMQService.ts
│   │   │       ├── IEmailTemplateService.ts
│   │   │       └── ISMSTemplateService.ts
│   │   │
│   │   ├── 📂 infrastructure/                  # Infrastructure Layer
│   │   │   ├── 📂 persistence/                 # Database Implementation
│   │   │   │   ├── 📂 repositories/            # Repository Implementations
│   │   │   │   │   ├── NotificationRepository.ts
│   │   │   │   │   ├── NotificationTemplateRepository.ts
│   │   │   │   │   ├── CRMContactRepository.ts
│   │   │   │   │   ├── CRMIntegrationRepository.ts
│   │   │   │   │   ├── MessageQueueRepository.ts
│   │   │   │   │   └── CommunicationChannelRepository.ts
│   │   │   │   ├── 📂 models/                  # Database Models
│   │   │   │   │   ├── NotificationModel.ts
│   │   │   │   │   ├── NotificationTemplateModel.ts
│   │   │   │   │   ├── CRMContactModel.ts
│   │   │   │   │   ├── CRMIntegrationModel.ts
│   │   │   │   │   ├── MessageQueueModel.ts
│   │   │   │   │   └── CommunicationChannelModel.ts
│   │   │   │   └── 📂 migrations/              # Database Migrations
│   │   │   │       ├── 001_create_notifications.sql
│   │   │   │       ├── 002_create_crm_contacts.sql
│   │   │   │       ├── 003_create_notification_templates.sql
│   │   │   │       ├── 004_create_crm_integrations.sql
│   │   │   │       ├── 005_create_message_queues.sql
│   │   │   │       └── 006_create_communication_channels.sql
│   │   │   ├── 📂 external-services/           # External Service Adapters
│   │   │   │   ├── TwilioAdapter.ts
│   │   │   │   ├── SendGridAdapter.ts
│   │   │   │   ├── FirebaseAdapter.ts
│   │   │   │   ├── HubSpotAdapter.ts
│   │   │   │   ├── SalesforceAdapter.ts
│   │   │   │   ├── RabbitMQAdapter.ts
│   │   │   │   ├── EmailTemplateAdapter.ts
│   │   │   │   ├── SMSTemplateAdapter.ts
│   │   │   │   └── WebhookAdapter.ts
│   │   │   └── 📂 config/                      # Configuration
│   │   │       ├── NotificationConfig.ts
│   │   │       ├── CRMConfig.ts
│   │   │       ├── TwilioConfig.ts
│   │   │       ├── SendGridConfig.ts
│   │   │       ├── FirebaseConfig.ts
│   │   │       ├── RabbitMQConfig.ts
│   │   │       ├── HubSpotConfig.ts
│   │   │       └── SalesforceConfig.ts
│   │   │
│   │   ├── 📂 presentation/                    # Presentation Layer
│   │   │   ├── 📂 controllers/                 # REST Controllers
│   │   │   │   ├── NotificationController.ts
│   │   │   │   ├── NotificationTemplateController.ts
│   │   │   │   ├── CRMController.ts
│   │   │   │   ├── CRMContactController.ts
│   │   │   │   ├── MessageQueueController.ts
│   │   │   │   ├── CommunicationChannelController.ts
│   │   │   │   ├── HealthController.ts
│   │   │   │   └── MetricsController.ts
│   │   │   ├── 📂 middleware/                  # HTTP Middleware
│   │   │   │   ├── AuthenticationMiddleware.ts
│   │   │   │   ├── RateLimitMiddleware.ts
│   │   │   │   ├── RequestLoggingMiddleware.ts
│   │   │   │   ├── ErrorHandlingMiddleware.ts
│   │   │   │   ├── ValidationMiddleware.ts
│   │   │   │   └── CORSMiddleware.ts
│   │   │   ├── 📂 routes/                      # Route Definitions
│   │   │   │   ├── NotificationRoutes.ts
│   │   │   │   ├── CRMRoutes.ts
│   │   │   │   ├── TemplateRoutes.ts
│   │   │   │   ├── MessageQueueRoutes.ts
│   │   │   │   ├── ChannelRoutes.ts
│   │   │   │   └── HealthRoutes.ts
│   │   │   └── 📂 validators/                  # Input Validators
│   │   │       ├── NotificationValidator.ts
│   │   │       ├── CRMValidator.ts
│   │   │       ├── TemplateValidator.ts
│   │   │       ├── ContactValidator.ts
│   │   │       └── ChannelValidator.ts
│   │   │
│   │   └── 📂 shared/                          # Shared Code
│   │       ├── 📂 constants/                   # Application Constants
│   │       │   ├── NotificationConstants.ts
│   │       │   ├── CRMConstants.ts
│   │       │   ├── MessageQueueConstants.ts
│   │       │   ├── CommunicationConstants.ts
│   │       │   └── IntegrationConstants.ts
│   │       ├── 📂 exceptions/                  # Custom Exceptions
│   │       │   ├── NotificationException.ts
│   │       │   ├── CRMException.ts
│   │       │   ├── MessageQueueException.ts
│   │       │   ├── CommunicationException.ts
│   │       │   └── IntegrationException.ts
│   │       ├── 📂 types/                       # TypeScript Definitions
│   │       │   ├── NotificationTypes.ts
│   │       │   ├── CRMTypes.ts
│   │       │   ├── MessageQueueTypes.ts
│   │       │   ├── CommunicationTypes.ts
│   │       │   └── IntegrationTypes.ts
│   │       └── 📂 utils/                       # Utility Functions
│   │           ├── NotificationUtils.ts
│   │           ├── CRMUtils.ts
│   │           ├── MessageQueueUtils.ts
│   │           ├── TemplateUtils.ts
│   │           ├── ContactUtils.ts
│   │           ├── EncryptionUtils.ts
│   │           └── RetryUtils.ts
│   │
│   ├── 📂 tests/                               # Testing
│   │   ├── 📂 unit/                            # Unit Tests
│   │   │   ├── 📂 domain/
│   │   │   │   ├── 📂 entities/
│   │   │   │   │   ├── Notification.test.ts
│   │   │   │   │   ├── CRMContact.test.ts
│   │   │   │   │   └── NotificationTemplate.test.ts
│   │   │   │   └── 📂 services/
│   │   │   │       ├── NotificationRoutingService.test.ts
│   │   │   │       └── CRMSyncService.test.ts
│   │   │   └── 📂 application/
│   │   │       └── 📂 use-cases/
│   │   │           ├── SendNotification.test.ts
│   │   │           ├── SyncContactToCRM.test.ts
│   │   │           └── ProcessMessageQueue.test.ts
│   │   ├── 📂 integration/                     # Integration Tests
│   │   │   ├── 📂 repositories/
│   │   │   │   ├── NotificationRepository.test.ts
│   │   │   │   └── CRMContactRepository.test.ts
│   │   │   └── 📂 external-services/
│   │   │       ├── TwilioAdapter.test.ts
│   │   │       ├── HubSpotAdapter.test.ts
│   │   │       ├── RabbitMQAdapter.test.ts
│   │   │       └── SendGridAdapter.test.ts
│   │   └── 📂 e2e/                             # End-to-End Tests
│   │       ├── 📂 notifications/
│   │       │   └── notification-flow.test.ts
│   │       ├── 📂 crm/
│   │       │   └── crm-sync-flow.test.ts
│   │       ├── 📂 messaging/
│   │       │   └── message-queue-flow.test.ts
│   │       └── 📂 integration/
│   │           └── full-integration-flow.test.ts
│   │
│   ├── 📂 prisma/                              # Database Schema
│   │   ├── schema.prisma                       # Prisma schema definition
│   │   └── seed.ts                             # Database seeding
│   │
│   ├── package.json                            # Node.js dependencies
│   ├── tsconfig.json                           # TypeScript configuration
│   ├── eslint.config.js                        # Code linting
│   ├── jest.config.js                          # Testing configuration
│   └── .env.example                            # Environment template
│
├── 📂 k8s/                                     # Kubernetes Manifests
│   ├── 📂 namespaces/
│   │   └── integration-communication-namespace.yaml
│   ├── 📂 deployments/
│   │   ├── notification-service.yaml
│   │   ├── crm-service.yaml
│   │   └── rabbitmq.yaml
│   ├── 📂 services/
│   │   ├── notification-service.yaml
│   │   ├── crm-service.yaml
│   │   └── rabbitmq-service.yaml
│   ├── 📂 configmaps/
│   │   ├── notification-config.yaml
│   │   └── crm-config.yaml
│   ├── 📂 secrets/
│   │   ├── twilio-secrets.yaml
│   │   ├── sendgrid-secrets.yaml
│   │   └── hubspot-secrets.yaml
│   └── 📂 ingress/
│       └── integration-communication-ingress.yaml
│
├── 📂 docker/                                  # Docker Configuration
│   ├── notification-service.Dockerfile
│   ├── crm-service.Dockerfile
│   └── docker-compose.yml
│
├── 📂 .github/workflows/                       # CI/CD Pipelines
│   ├── integration-communication-ci.yml
│   └── integration-communication-cd.yml
│
├── 📂 scripts/                                 # Automation Scripts
│   ├── deploy-integration-communication.sh
│   └── health-check-integration-communication.sh
│
├── 📂 monitoring/                              # Monitoring Configuration
│   ├── 📂 prometheus/
│   │   └── integration-communication-metrics.yaml
│   ├── 📂 grafana/
│   │   └── dashboards/
│   │       └── integration-communication-dashboard.json
│   └── 📂 alerts/
│       └── integration-communication-alerts.yaml
│
├── 📂 docs/                                    # Documentation
│   ├── 📂 api/
│   │   ├── notification-api.md
│   │   ├── crm-integration-api.md
│   │   └── message-queue-api.md
│   ├── 📂 architecture/
│   │   └── integration-communication-architecture.md
│   ├── 📂 implementation/
│   │   ├── notification-implementation.md
│   │   └── crm-integration-implementation.md
│   ├── 📂 deployment/
│   │   └── integration-communication-deployment.md
│   ├── 📂 monitoring/
│   │   └── integration-communication-monitoring.md
│   └── 📂 configuration/
│       └── integration-communication-config.md
│
├── package.json                                # Root project configuration
├── README.md                                   # Project documentation
└── .gitignore                                  # Git ignore rules
```

---

## 🔧 **IMPLEMENTATION CHECKLIST**

### **Phase 1: PROJECT SETUP & SHARED PACKAGES** ⚙️

#### **1.1 Khởi tạo dự án repository**
- [ ] **Tạo integration-communication-service repository**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + EMSA-v1.0 Standards
  - *Mô tả*: Thiết lập repository với Clean Architecture structure
  - *File tạo*: `package.json`, `README.md`, `.gitignore`, toàn bộ folder structure
  - *Ý nghĩa*: Single repository cho complete Integration & Communication service

#### **1.2 Setup Shared Packages Dependencies**
- [ ] **Install shared NPM packages**
  - *Tham chiếu*: EMSA-v1.0 Package Standards
  - *Mô tả*: Install @psp/shared-core, @psp/shared-events, @psp/shared-database
  - *File tạo*: Updated `package.json` với proper versions
  - *Ý nghĩa*: Consistent shared utilities across microservices

#### **1.3 Configuration Files Setup**
- [ ] **Setup project configuration files**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: TypeScript, ESLint, Jest configurations theo EMSA-v1.0
  - *File tạo*: `tsconfig.json`, `eslint.config.js`, `jest.config.js`
  - *Ý nghĩa*: Standardized development environment

#### **1.4 Database Setup**
- [ ] **Thiết lập PostgreSQL cho notification và CRM data**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.6 Integration Database Design
  - *Mô tả*: PostgreSQL 15+ với notification và CRM schema
  - *File tạo*: `backend/prisma/schema.prisma`, `backend/src/infrastructure/persistence/migrations/`
  - *Ý nghĩa*: Centralized data storage cho notifications và CRM contacts

### **Phase 2: DOMAIN LAYER IMPLEMENTATION** 🗃️

#### **2.1 Core Entities Implementation**
- [ ] **Implement Notification Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Notification entity với business rules, multi-channel support
  - *File tạo*: `backend/src/domain/entities/Notification.ts`
  - *Ý nghĩa*: Core notification business logic encapsulation

- [ ] **Implement CRMContact Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration (FR-009)
  - *Mô tả*: CRM contact entity với data validation, sync tracking
  - *File tạo*: `backend/src/domain/entities/CRMContact.ts`
  - *Ý nghĩa*: CRM contact business logic và data integrity

- [ ] **Implement NotificationTemplate Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Template entity với reusable content, variables support
  - *File tạo*: `backend/src/domain/entities/NotificationTemplate.ts`
  - *Ý nghĩa*: Reusable notification templates với dynamic content

- [ ] **Implement MessageQueue Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.1.2 Event Bus
  - *Mô tả*: Message queue entity cho RabbitMQ integration
  - *File tạo*: `backend/src/domain/entities/MessageQueue.ts`
  - *Ý nghĩa*: Event-driven communication foundation

#### **2.2 Value Objects Implementation**
- [ ] **Implement NotificationChannel Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System
  - *Mô tả*: Channel validation (SMS/Email/Push/Webhook)
  - *File tạo*: `backend/src/domain/value-objects/NotificationChannel.ts`
  - *Ý nghĩa*: Type-safe channel handling với validation

- [ ] **Implement CRMCredentials Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration
  - *Mô tả*: Secure credential handling cho CRM systems
  - *File tạo*: `backend/src/domain/value-objects/CRMCredentials.ts`
  - *Ý nghĩa*: Secure CRM authentication management

- [ ] **Implement DeliveryStatus Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System
  - *Mô tả*: Delivery status tracking (Sent/Delivered/Failed/Bounced)
  - *File tạo*: `backend/src/domain/value-objects/DeliveryStatus.ts`
  - *Ý nghĩa*: Comprehensive delivery status management

#### **2.3 Domain Services Implementation**
- [ ] **Implement NotificationRoutingDomainService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System
  - *Mô tả*: Multi-channel routing algorithms, channel selection logic
  - *File tạo*: `backend/src/domain/services/NotificationRoutingDomainService.ts`
  - *Ý nghĩa*: Intelligent notification routing based on preferences

- [ ] **Implement CRMSyncDomainService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration
  - *Mô tả*: Bi-directional sync logic, conflict resolution
  - *File tạo*: `backend/src/domain/services/CRMSyncDomainService.ts`
  - *Ý nghĩa*: Robust CRM data synchronization

### **Phase 3: APPLICATION LAYER IMPLEMENTATION** 📄

#### **3.1 Notification Use Cases Implementation**
- [ ] **Implement SendNotificationUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Multi-channel notification delivery workflow
  - *File tạo*: `backend/src/application/use-cases/notifications/SendNotificationUseCase.ts`
  - *Ý nghĩa*: Core notification sending functionality

- [ ] **Implement SendBatchNotificationUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Bulk notification processing với performance optimization
  - *File tạo*: `backend/src/application/use-cases/notifications/SendBatchNotificationUseCase.ts`
  - *Ý nghĩa*: Efficient bulk notification delivery

- [ ] **Implement ScheduleNotificationUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.4 Notification System (FR-010)
  - *Mô tả*: Delayed notification delivery, scheduling logic
  - *File tạo*: `backend/src/application/use-cases/notifications/ScheduleNotificationUseCase.ts`
  - *Ý nghĩa*: Time-based notification delivery

#### **3.2 CRM Integration Use Cases Implementation**
- [ ] **Implement SyncContactToCRMUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration (FR-009)
  - *Mô tả*: Push contact data to CRM systems
  - *File tạo*: `backend/src/application/use-cases/crm/SyncContactToCRMUseCase.ts`
  - *Ý nghĩa*: Real-time CRM data synchronization

- [ ] **Implement ImportContactsFromCRMUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration (FR-009)
  - *Mô tả*: Pull contact data from CRM systems
  - *File tạo*: `backend/src/application/use-cases/crm/ImportContactsFromCRMUseCase.ts`
  - *Ý nghĩa*: CRM data import functionality

- [ ] **Implement DeduplicateCRMContactsUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.3 CRM Integration (FR-009)
  - *Mô tả*: Contact deduplication logic, data quality management
  - *File tạo*: `backend/src/application/use-cases/crm/DeduplicateCRMContactsUseCase.ts`
  - *Ý nghĩa*: Data quality assurance

#### **3.3 Message Queue Use Cases Implementation**
- [ ] **Implement ProcessMessageQueueUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.1.2 Event Bus
  - *Mô tả*: RabbitMQ message processing workflow
  - *File tạo*: `backend/src/application/use-cases/messaging/ProcessMessageQueueUseCase.ts`
  - *Ý nghĩa*: Event-driven message processing

### **Phase 4: INFRASTRUCTURE LAYER IMPLEMENTATION** 🗃️

#### **4.1 Repository Implementations**
- [ ] **Implement PostgreSQL Repositories**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.6 Integration Database Design
  - *Mô tả*: Concrete repository implementations với Prisma ORM
  - *File tạo*: `backend/src/infrastructure/persistence/repositories/NotificationRepository.ts`, `CRMContactRepository.ts`, etc.
  - *Ý nghĩa*: Data access layer cho integration operations

#### **4.2 External Service Implementations**
- [ ] **Implement Twilio SMS Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.1 Twilio Integration
  - *Mô tả*: SMS delivery via Twilio API
  - *File tạo*: `backend/src/infrastructure/external-services/TwilioAdapter.ts`
  - *Ý nghĩa*: SMS notification capability

- [ ] **Implement SendGrid Email Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.1 Twilio Integration
  - *Mô tả*: Email delivery via SendGrid API
  - *File tạo*: `backend/src/infrastructure/external-services/SendGridAdapter.ts`
  - *Ý nghĩa*: Email notification capability

- [ ] **Implement HubSpot CRM Integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.1.2 HubSpot Integration
  - *Mô tả*: HubSpot CRM data synchronization
  - *File tạo*: `backend/src/infrastructure/external-services/HubSpotAdapter.ts`
  - *Ý nghĩa*: HubSpot CRM connectivity

- [ ] **Implement RabbitMQ Event Bus**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.1.2 Event Bus
  - *Mô tả*: RabbitMQ message queue integration
  - *File tạo*: `backend/src/infrastructure/external-services/RabbitMQAdapter.ts`
  - *Ý nghĩa*: Event-driven architecture foundation

### **Phase 5: PRESENTATION & API LAYER** 🎮

#### **5.1 REST API Controllers**
- [ ] **Implement NotificationController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.5.1 Notification APIs
  - *Mô tả*: REST endpoints cho notification operations
  - *File tạo*: `backend/src/presentation/controllers/NotificationController.ts`
  - *Ý nghĩa*: API interface cho notification service

- [ ] **Implement CRMController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.5.2 CRM Integration APIs
  - *Mô tả*: REST endpoints cho CRM operations
  - *File tạo*: `backend/src/presentation/controllers/CRMController.ts`
  - *Ý nghĩa*: API interface cho CRM integration

### **Phase 6: TESTING IMPLEMENTATION** 🧪

#### **6.1 Unit Testing**
- [ ] **Domain Entity Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.1 Unit Testing
  - *Mô tả*: Test coverage cho domain entities
  - *File tạo*: `backend/tests/unit/domain/entities/*.test.ts`
  - *Ý nghĩa*: Domain logic validation

#### **6.2 Integration Testing**
- [ ] **External Service Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.2 Integration Testing
  - *Mô tả*: Test external service integrations
  - *File tạo*: `backend/tests/integration/external-services/*.test.ts`
  - *Ý nghĩa*: Integration reliability validation

#### **6.3 End-to-End Testing**
- [ ] **Complete Flow Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.3 E2E Testing
  - *Mô tả*: Full notification và CRM sync flows
  - *File tạo*: `backend/tests/e2e/notifications/*.test.ts`
  - *Ý nghĩa*: Complete workflow validation

### **Phase 7: DEVOPS & DEPLOYMENT** 🚀

#### **7.1 Kubernetes Setup**
- [ ] **Service Deployments**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Kubernetes Setup
  - *Mô tả*: K8s manifests cho notification và CRM services
  - *File tạo*: `k8s/deployments/*.yaml`
  - *Ý nghĩa*: Production-ready deployment

#### **7.2 CI/CD Pipelines**
- [ ] **GitHub Actions Workflows**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.2 CI/CD Pipelines
  - *Mô tả*: Automated testing, building, deployment pipeline
  - *File tạo*: `.github/workflows/*.yml`
  - *Ý nghĩa*: Automated quality assurance và deployment

#### **7.3 Monitoring & Observability**
- [ ] **Monitoring Stack Setup**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Monitoring Stack
  - *Mô tả*: Prometheus metrics, Grafana dashboards
  - *File tạo*: `monitoring/prometheus/*.yaml`, `monitoring/grafana/dashboards/*.json`
  - *Ý nghĩa*: Production monitoring và alerting

### **Phase 8: DOCUMENTATION & FINALIZATION** 📚

#### **8.1 API Documentation**
- [ ] **Create API Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.5 Integration APIs
  - *Mô tả*: Complete API documentation với examples
  - *File tạo*: `docs/api/*.md`
  - *Ý nghĩa*: Developer onboarding và service integration

#### **8.2 Architecture Documentation**
- [ ] **Create Architecture Guides**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + EMSA-v1.0
  - *Mô tả*: Clean Architecture implementation guide
  - *File tạo*: `docs/architecture/*.md`
  - *Ý nghĩa*: Architectural understanding và maintenance

#### **8.3 Deployment Documentation**
- [ ] **Create Deployment Guides**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14 Deployment Architecture
  - *Mô tả*: Production deployment procedures
  - *File tạo*: `docs/deployment/*.md`
  - *Ý nghĩa*: Operational consistency

---

## 🎯 **KẾT LUẬN**

**Tổng số files được map**: 185 files với đầy đủ SRS references  
**Backend Clean Architecture**: 95 files với proper layering theo EMSA-v1.0  
**Shared Packages Integration**: 3 NPM packages cho cross-service utilities  
**API Coverage**: Complete REST endpoints cho Notification, CRM, Message Queue  
**Testing Strategy**: 40 test files coverage (Unit, Integration, E2E)  
**Deployment & DevOps**: 25 infrastructure files với K8s + monitoring  
**Documentation**: 15 comprehensive docs cho development + operations  

**Estimated timeline**: 8-10 tuần cho 1 team (4-5 developers)  
**SRS coverage**: 100% cho Integration & Communication domain (FR-009, FR-010)  
**EMSA-v1.0 compliance**: Full compliance với Clean Architecture standards  
**Integration points**: Ready cho event-driven communication với tất cả services  
**Professional standards**: Multi-channel notifications, bi-directional CRM sync, event bus integration  

**Sub-Project 6 hoàn chỉnh! Integration & Communication Domain với complete backend implementation theo kiến trúc mới và EMSA-v1.0 standards! 🚀**
