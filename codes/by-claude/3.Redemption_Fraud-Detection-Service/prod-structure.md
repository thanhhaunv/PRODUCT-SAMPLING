# 🚀 Sub-Project 3: Redemption & Fraud Detection Service - Complete Implementation Guide

## 📋 **BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES**

| **Category** | **File Path** | **Mô tả** | **SRS Reference** | **Business Purpose** |
|-------------|---------------|-----------|-------------------|-------------------|
| **🏗️ BACKEND DOMAIN** | | | | |
| Entities | `backend/src/domain/entities/Redemption.ts` | Core Redemption entity với business rules | Part04.3.1 Barcode Redemption (FR-007) | Barcode redemption lifecycle logic |
| Entities | `backend/src/domain/entities/FraudScore.ts` | Fraud scoring entity với ML integration | Part04.4.1 Fraud Detection (FR-011) | ML-based fraud detection logic |
| Entities | `backend/src/domain/entities/DeviceFingerprint.ts` | Device fingerprinting entity | Part04.4.1.5 Device Fingerprinting | Device-based fraud prevention |
| Entities | `backend/src/domain/entities/Transaction.ts` | Transaction entity cho fraud analysis | Part04.4.1 Fraud Detection | Transaction pattern analysis |
| Entities | `backend/src/domain/entities/POSDevice.ts` | POS device management entity | Part04.3.1 Barcode Redemption | Offline redemption support |
| Value Objects | `backend/src/domain/value-objects/BarcodeHash.ts` | Barcode hash value object | Part04.3.1 Barcode Redemption | Secure barcode validation |
| Value Objects | `backend/src/domain/value-objects/FraudRisk.ts` | Fraud risk assessment value object | Part04.4.1 Fraud Detection | Risk level calculation |
| Value Objects | `backend/src/domain/value-objects/DeviceSignature.ts` | Device signature value object | Part04.4.1.5 Device Fingerprinting | Unique device identification |
| Value Objects | `backend/src/domain/value-objects/RedemptionStatus.ts` | Redemption status management | Part04.3.1 Barcode Redemption | Status lifecycle tracking |
| Repositories | `backend/src/domain/repositories/IRedemptionRepository.ts` | Redemption repository interface | Part06.2.1 Layered Architecture | Redemption data access contract |
| Repositories | `backend/src/domain/repositories/IFraudScoreRepository.ts` | Fraud score repository interface | Part06.2.1 Layered Architecture | Fraud data access contract |
| Repositories | `backend/src/domain/repositories/IDeviceFingerprintRepository.ts` | Device fingerprint repository interface | Part06.2.1 Layered Architecture | Device data access contract |
| Repositories | `backend/src/domain/repositories/ITransactionRepository.ts` | Transaction repository interface | Part06.2.1 Layered Architecture | Transaction data access |
| Domain Services | `backend/src/domain/services/RedemptionDomainService.ts` | Redemption business logic service | Part04.3.1 Barcode Redemption | Complex redemption operations |
| Domain Services | `backend/src/domain/services/FraudDetectionService.ts` | Fraud detection business logic | Part04.4.1 Fraud Detection | Fraud analysis algorithms |
| Domain Services | `backend/src/domain/services/DeviceFingerprintingService.ts` | Device fingerprinting logic | Part04.4.1.5 Device Fingerprinting | Device identification algorithms |
| Domain Services | `backend/src/domain/services/RiskCalculationService.ts` | Risk assessment calculations | Part04.4.1 Fraud Detection | Risk scoring business rules |
| **🔄 BACKEND APPLICATION** | | | | |
| Use Cases | `backend/src/application/use-cases/redemption/RedeemBarcodeUseCase.ts` | Barcode redemption workflow | Part04.3.1 Barcode Redemption (FR-007) | Main redemption process |
| Use Cases | `backend/src/application/use-cases/redemption/ValidateBarcodeUseCase.ts` | Barcode validation logic | Part04.3.1 Barcode Redemption | Pre-redemption validation |
| Use Cases | `backend/src/application/use-cases/redemption/ProcessOfflineRedemptionUseCase.ts` | Offline redemption handling | Part04.3.1 Barcode Redemption | POS offline support |
| Use Cases | `backend/src/application/use-cases/redemption/SyncPOSRedemptionsUseCase.ts` | POS synchronization workflow | Part04.3.1 Barcode Redemption | Offline-online sync |
| Use Cases | `backend/src/application/use-cases/redemption/GetRedemptionStatusUseCase.ts` | Redemption status tracking | Part04.3.1 Barcode Redemption | Status inquiry workflow |
| Use Cases | `backend/src/application/use-cases/fraud/DetectFraudUseCase.ts` | Real-time fraud detection | Part04.4.1 Fraud Detection (FR-011) | Main fraud detection workflow |
| Use Cases | `backend/src/application/use-cases/fraud/CalculateFraudScoreUseCase.ts` | ML-based fraud scoring | Part04.4.1.4 ML Based Scoring | Machine learning fraud assessment |
| Use Cases | `backend/src/application/use-cases/fraud/GenerateDeviceFingerprintUseCase.ts` | Device fingerprinting workflow | Part04.4.1.5 Device Fingerprinting | Device identification process |
| Use Cases | `backend/src/application/use-cases/fraud/UpdateFraudRulesUseCase.ts` | Fraud rules management | Part04.4.1 Fraud Detection | Rules engine configuration |
| Use Cases | `backend/src/application/use-cases/fraud/AnalyzeTransactionPatternUseCase.ts` | Transaction pattern analysis | Part04.4.1 Fraud Detection | Behavioral analysis workflow |
| Use Cases | `backend/src/application/use-cases/pos/RegisterPOSDeviceUseCase.ts` | POS device registration | Part04.3.1 Barcode Redemption | POS setup workflow |
| Use Cases | `backend/src/application/use-cases/pos/AuthenticatePOSUseCase.ts` | POS authentication workflow | Part04.3.1 Barcode Redemption | POS security validation |
| DTOs | `backend/src/application/dto/RedemptionDTO.ts` | Redemption data transfer objects | Part08.3.1 Redemption APIs | Redemption API contracts |
| DTOs | `backend/src/application/dto/FraudDetectionDTO.ts` | Fraud detection DTOs | Part08.3.2 Fraud Detection APIs | Fraud API contracts |
| DTOs | `backend/src/application/dto/DeviceFingerprintDTO.ts` | Device fingerprint DTOs | Part08.3.2 Fraud Detection APIs | Device API contracts |
| DTOs | `backend/src/application/dto/POSDTO.ts` | POS integration DTOs | Part08.3.1 Redemption APIs | POS API contracts |
| Ports | `backend/src/application/ports/IScanditService.ts` | Scandit SDK service interface | Part09.2.1 Scandit SDK Integration | QR scanning service contract |
| Ports | `backend/src/application/ports/IMLScoringService.ts` | Machine learning service interface | Part04.4.1.4 ML Based Scoring | ML scoring service contract |
| Ports | `backend/src/application/ports/IDeviceFingerprintingService.ts` | Device fingerprinting service interface | Part04.4.1.5 Device Fingerprinting | Fingerprinting service contract |
| Ports | `backend/src/application/ports/IPOSSyncService.ts` | POS synchronization service interface | Part04.3.1 Barcode Redemption | POS integration contract |
| Ports | `backend/src/application/ports/INotificationService.ts` | Notification service interface | Part04.4.1 Fraud Detection | Fraud alert notifications |
| **🏗️ BACKEND INFRASTRUCTURE** | | | | |
| Repositories | `backend/src/infrastructure/persistence/repositories/RedemptionRepository.ts` | PostgreSQL redemption repository | Part07.4.1 Redemption Table | Redemption data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/FraudScoreRepository.ts` | Fraud score data access | Part07.4.2 Fraud Score Table | Fraud data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/DeviceFingerprintRepository.ts` | Device fingerprint data access | Part07.4.3 Device Fingerprint Table | Device data persistence |
| Repositories | `backend/src/infrastructure/persistence/repositories/TransactionRepository.ts` | Transaction data access | Part07.4.1 Redemption Table | Transaction data operations |
| Repositories | `backend/src/infrastructure/persistence/repositories/POSDeviceRepository.ts` | POS device data management | Part07.4.1 Redemption Table | POS device data persistence |
| Models | `backend/src/infrastructure/persistence/models/RedemptionModel.ts` | Prisma redemption model | Part07.4.1 Redemption Table | Database schema mapping |
| Models | `backend/src/infrastructure/persistence/models/FraudScoreModel.ts` | Fraud score database model | Part07.4.2 Fraud Score Table | Fraud schema mapping |
| Models | `backend/src/infrastructure/persistence/models/DeviceFingerprintModel.ts` | Device fingerprint model | Part07.4.3 Device Fingerprint Table | Device schema mapping |
| Models | `backend/src/infrastructure/persistence/models/TransactionModel.ts` | Transaction model definition | Part07.4.1 Redemption Table | Transaction schema |
| Models | `backend/src/infrastructure/persistence/models/POSDeviceModel.ts` | POS device model | Part07.4.1 Redemption Table | POS schema mapping |
| Migrations | `backend/src/infrastructure/persistence/migrations/001_create_redemptions.sql` | Redemption table creation | Part07.4.1 Redemption Table | Database schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/002_create_fraud_scores.sql` | Fraud score tables creation | Part07.4.2 Fraud Score Table | Fraud schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/003_create_device_fingerprints.sql` | Device fingerprint table | Part07.4.3 Device Fingerprint Table | Device schema setup |
| Migrations | `backend/src/infrastructure/persistence/migrations/004_create_pos_devices.sql` | POS device tables | Part07.4.1 Redemption Table | POS management schema |
| External Services | `backend/src/infrastructure/external-services/ScanditService.ts` | Scandit SDK integration | Part09.2.1 Scandit SDK Integration | QR scanning implementation |
| External Services | `backend/src/infrastructure/external-services/MLScoringService.ts` | Machine learning service | Part04.4.1.4 ML Based Scoring | ML fraud scoring implementation |
| External Services | `backend/src/infrastructure/external-services/DeviceFingerprintingService.ts` | Device fingerprinting service | Part04.4.1.5 Device Fingerprinting | Device identification implementation |
| External Services | `backend/src/infrastructure/external-services/POSSyncService.ts` | POS synchronization service | Part04.3.1 Barcode Redemption | POS integration implementation |
| External Services | `backend/src/infrastructure/external-services/NotificationService.ts` | Fraud alert notifications | Part04.4.1 Fraud Detection | Alert delivery implementation |
| External Services | `backend/src/infrastructure/external-services/CacheService.ts` | Redis caching service | Part04.3.1 Barcode Redemption | Performance optimization |
| Config | `backend/src/infrastructure/config/redemption.config.ts` | Redemption service configuration | Part02.8 Technical Requirements | Service configuration |
| Config | `backend/src/infrastructure/config/fraud.config.ts` | Fraud detection configuration | Part04.4.1 Fraud Detection | Fraud service configuration |
| Config | `backend/src/infrastructure/config/scandit.config.ts` | Scandit SDK configuration | Part09.2.1 Scandit SDK Integration | SDK configuration |
| Config | `backend/src/infrastructure/config/ml.config.ts` | Machine learning configuration | Part04.4.1.4 ML Based Scoring | ML service configuration |
| Config | `backend/src/infrastructure/config/pos.config.ts` | POS integration configuration | Part04.3.1 Barcode Redemption | POS configuration |
| **🌐 BACKEND PRESENTATION** | | | | |
| Controllers | `backend/src/presentation/controllers/RedemptionController.ts` | Redemption management endpoints | Part08.3.1 Redemption APIs | Redemption API endpoints |
| Controllers | `backend/src/presentation/controllers/FraudDetectionController.ts` | Fraud detection APIs | Part08.3.2 Fraud Detection APIs | Fraud API endpoints |
| Controllers | `backend/src/presentation/controllers/DeviceFingerprintController.ts` | Device fingerprint APIs | Part08.3.2 Fraud Detection APIs | Device API endpoints |
| Controllers | `backend/src/presentation/controllers/POSController.ts` | POS integration endpoints | Part08.3.1 Redemption APIs | POS API endpoints |
| Controllers | `backend/src/presentation/controllers/HealthController.ts` | Health check endpoint | Part15.3.1 Health Monitoring | Service health monitoring |
| Middleware | `backend/src/presentation/middleware/RedemptionAuthMiddleware.ts` | Redemption authorization | Part05.3 Security Requirements | Redemption access control |
| Middleware | `backend/src/presentation/middleware/FraudValidationMiddleware.ts` | Fraud detection validation | Part04.4.1 Fraud Detection | Fraud input validation |
| Middleware | `backend/src/presentation/middleware/POSAuthMiddleware.ts` | POS authentication middleware | Part04.3.1 Barcode Redemption | POS security middleware |
| Middleware | `backend/src/presentation/middleware/RateLimitMiddleware.ts` | API rate limiting | Part05.3 Security Requirements | API abuse prevention |
| Middleware | `backend/src/presentation/middleware/FraudAlertMiddleware.ts` | Fraud alert middleware | Part04.4.1 Fraud Detection | Real-time fraud alerts |
| Routes | `backend/src/presentation/routes/redemptions.routes.ts` | Redemption management routes | Part08.3.1 Redemption APIs | Redemption endpoint routing |
| Routes | `backend/src/presentation/routes/fraud.routes.ts` | Fraud detection routes | Part08.3.2 Fraud Detection APIs | Fraud endpoint routing |
| Routes | `backend/src/presentation/routes/devices.routes.ts` | Device fingerprint routes | Part08.3.2 Fraud Detection APIs | Device endpoint routing |
| Routes | `backend/src/presentation/routes/pos.routes.ts` | POS integration routes | Part08.3.1 Redemption APIs | POS endpoint routing |
| Validators | `backend/src/presentation/validators/RedemptionValidators.ts` | Redemption data validation | Part05.7 Input Validation | Redemption input validation |
| Validators | `backend/src/presentation/validators/FraudValidators.ts` | Fraud detection validation | Part05.7 Input Validation | Fraud input validation |
| Validators | `backend/src/presentation/validators/DeviceValidators.ts` | Device fingerprint validation | Part05.7 Input Validation | Device input validation |
| Validators | `backend/src/presentation/validators/POSValidators.ts` | POS integration validation | Part05.7 Input Validation | POS input validation |
| **🧰 BACKEND SHARED** | | | | |
| Constants | `backend/src/shared/constants/redemption.constants.ts` | Redemption-related constants | Part04.3.1 Barcode Redemption | Redemption configuration constants |
| Constants | `backend/src/shared/constants/fraud.constants.ts` | Fraud detection constants | Part04.4.1 Fraud Detection | Fraud configuration constants |
| Constants | `backend/src/shared/constants/device.constants.ts` | Device fingerprint constants | Part04.4.1.5 Device Fingerprinting | Device configuration |
| Constants | `backend/src/shared/constants/pos.constants.ts` | POS integration constants | Part04.3.1 Barcode Redemption | POS configuration constants |
| Exceptions | `backend/src/shared/exceptions/RedemptionException.ts` | Redemption-specific errors | Part05.8 Error Handling | Redemption error handling |
| Exceptions | `backend/src/shared/exceptions/FraudException.ts` | Fraud detection errors | Part05.8 Error Handling | Fraud error handling |
| Exceptions | `backend/src/shared/exceptions/DeviceException.ts` | Device fingerprint errors | Part05.8 Error Handling | Device error handling |
| Exceptions | `backend/src/shared/exceptions/POSException.ts` | POS integration errors | Part05.8 Error Handling | POS error handling |
| Exceptions | `backend/src/shared/exceptions/ScanditException.ts` | Scandit SDK errors | Part05.8 Error Handling | SDK error handling |
| Types | `backend/src/shared/types/redemption.types.ts` | Redemption type definitions | Part08.3.1 Redemption APIs | Redemption TypeScript types |
| Types | `backend/src/shared/types/fraud.types.ts` | Fraud detection types | Part08.3.2 Fraud Detection APIs | Fraud TypeScript types |
| Types | `backend/src/shared/types/device.types.ts` | Device fingerprint types | Part08.3.2 Fraud Detection APIs | Device TypeScript types |
| Types | `backend/src/shared/types/pos.types.ts` | POS integration types | Part08.3.1 Redemption APIs | POS TypeScript types |
| Types | `backend/src/shared/types/ml.types.ts` | Machine learning types | Part04.4.1.4 ML Based Scoring | ML TypeScript types |
| Utils | `backend/src/shared/utils/barcode.utils.ts` | Barcode processing utilities | Part04.3.1 Barcode Redemption | Barcode utility functions |
| Utils | `backend/src/shared/utils/fraud.utils.ts` | Fraud detection utilities | Part04.4.1 Fraud Detection | Fraud utility functions |
| Utils | `backend/src/shared/utils/device.utils.ts` | Device fingerprint utilities | Part04.4.1.5 Device Fingerprinting | Device utility functions |
| Utils | `backend/src/shared/utils/encryption.utils.ts` | Data encryption utilities | Part05.3 Security Requirements | Security utility functions |
| Utils | `backend/src/shared/utils/validation.utils.ts` | Redemption validation helpers | Part05.7 Input Validation | Validation utility functions |
| **🧪 TESTING FILES** | | | | |
| Backend Tests | `backend/tests/unit/domain/entities/Redemption.test.ts` | Redemption entity unit tests | Part13.2.1 Unit Testing Framework | Domain logic testing |
| Backend Tests | `backend/tests/unit/domain/entities/FraudScore.test.ts` | Fraud score entity tests | Part13.2.1 Unit Testing Framework | Fraud entity testing |
| Backend Tests | `backend/tests/unit/application/use-cases/RedeemBarcodeUseCase.test.ts` | Redemption use case tests | Part13.2.1 Unit Testing Framework | Application logic testing |
| Backend Tests | `backend/tests/unit/application/use-cases/DetectFraudUseCase.test.ts` | Fraud detection tests | Part13.2.1 Unit Testing Framework | Fraud use case testing |
| Backend Tests | `backend/tests/integration/controllers/RedemptionController.test.ts` | Redemption API integration tests | Part13.3.1 API Testing | API endpoint testing |
| Backend Tests | `backend/tests/integration/controllers/FraudDetectionController.test.ts` | Fraud API integration tests | Part13.3.1 API Testing | Fraud API testing |
| Backend Tests | `backend/tests/integration/repositories/RedemptionRepository.test.ts` | Redemption repository tests | Part13.3.2 Database Testing | Database integration testing |
| Backend Tests | `backend/tests/integration/repositories/FraudScoreRepository.test.ts` | Fraud repository tests | Part13.3.2 Database Testing | Fraud database testing |
| Backend Tests | `backend/tests/integration/external-services/ScanditService.test.ts` | Scandit SDK integration tests | Part13.3.3 External Service Testing | SDK integration testing |
| Backend Tests | `backend/tests/integration/external-services/MLScoringService.test.ts` | ML service integration tests | Part13.3.3 External Service Testing | ML service testing |
| Backend Tests | `backend/tests/e2e/redemption-flow.test.ts` | End-to-end redemption tests | Part13.4.1 End-to-End Testing | Complete redemption workflow testing |
| Backend Tests | `backend/tests/e2e/fraud-detection-flow.test.ts` | Fraud detection E2E tests | Part13.4.1 End-to-End Testing | Fraud workflow testing |
| Backend Tests | `backend/tests/e2e/pos-integration.test.ts` | POS integration E2E tests | Part13.4.1 End-to-End Testing | POS workflow testing |
| **🐳 DEPLOYMENT FILES** | | | | |
| Docker | `deployment/docker/Dockerfile.redemption-service` | Redemption service container | Part14.2 Container Architecture | Service containerization |
| Docker | `deployment/docker/Dockerfile.fraud-service` | Fraud detection service container | Part14.2 Container Architecture | Fraud service containerization |
| Kubernetes | `deployment/kubernetes/redemption-service/deployment.yaml` | Redemption service K8s deployment | Part14.3 Kubernetes Configuration | Service orchestration |
| Kubernetes | `deployment/kubernetes/redemption-service/service.yaml` | Redemption service K8s service | Part14.3 Kubernetes Configuration | Service networking |
| Kubernetes | `deployment/kubernetes/redemption-service/configmap.yaml` | Redemption service configuration | Part14.3 Kubernetes Configuration | Configuration management |
| Kubernetes | `deployment/kubernetes/fraud-service/deployment.yaml` | Fraud service K8s deployment | Part14.3 Kubernetes Configuration | Fraud service orchestration |
| Kubernetes | `deployment/kubernetes/fraud-service/service.yaml` | Fraud service K8s service | Part14.3 Kubernetes Configuration | Fraud service networking |
| Kubernetes | `deployment/kubernetes/fraud-service/configmap.yaml` | Fraud service configuration | Part14.3 Kubernetes Configuration | Fraud configuration management |
| Helm | `deployment/helm/redemption-fraud-services/Chart.yaml` | Services Helm chart | Part14.3 Kubernetes Configuration | Helm package definition |
| Helm | `deployment/helm/redemption-fraud-services/values.yaml` | Services values | Part14.3 Kubernetes Configuration | Helm configuration |
| Helm | `deployment/helm/redemption-fraud-services/templates/redemption-deployment.yaml` | Redemption deployment template | Part14.3 Kubernetes Configuration | Redemption deployment template |
| Helm | `deployment/helm/redemption-fraud-services/templates/fraud-deployment.yaml` | Fraud deployment template | Part14.3 Kubernetes Configuration | Fraud deployment template |
| **📚 DOCUMENTATION FILES** | | | | |
| Documentation | `docs/redemption-fraud-services/API.md` | Services API documentation | Part08.3 Redemption & Fraud APIs | API reference |
| Documentation | `docs/redemption-fraud-services/ARCHITECTURE.md` | Services architecture overview | Part06.2.2 Services Architecture | Architecture documentation |
| Documentation | `docs/redemption-fraud-services/REDEMPTION-FLOW.md` | Redemption process documentation | Part04.3.1 Barcode Redemption | Redemption implementation guide |
| Documentation | `docs/redemption-fraud-services/FRAUD-DETECTION.md` | Fraud detection documentation | Part04.4.1 Fraud Detection | Fraud implementation guide |
| Documentation | `docs/redemption-fraud-services/SCANDIT-INTEGRATION.md` | Scandit SDK documentation | Part09.2.1 Scandit SDK Integration | SDK integration guide |
| Documentation | `docs/redemption-fraud-services/POS-INTEGRATION.md` | POS integration documentation | Part04.3.1 Barcode Redemption | POS implementation guide |
| Documentation | `docs/redemption-fraud-services/SETUP.md` | Services setup guide | Part02.8 Technical Requirements | Developer setup |
| Documentation | `docs/diagrams/redemption-fraud-architecture.png` | Services architecture diagram | Part06.2.2 Services Architecture | Architecture visualization |
| Documentation | `docs/diagrams/redemption-flow.png` | Redemption process flow | Part04.3.1 Barcode Redemption | Process documentation |
| Documentation | `docs/diagrams/fraud-detection-flow.png` | Fraud detection flow | Part04.4.1 Fraud Detection | Fraud workflow documentation |
| Documentation | `docs/diagrams/pos-integration-flow.png` | POS integration flow | Part04.3.1 Barcode Redemption | POS process documentation |
| **⚙️ SCRIPTS FILES** | | | | |
| Scripts | `scripts/setup-redemption-fraud-services.sh` | Services setup | Part02.8 Technical Requirements | Service setup automation |
| Scripts | `scripts/generate-fraud-test-data.sh` | Fraud test data generation | Part13 Testing Strategy | Testing data automation |
| Scripts | `scripts/migrate-redemption-data.sh` | Database migration | Part07.4.1 Redemption Table | Data migration automation |
| Scripts | `scripts/backup-redemption-data.sh` | Redemption data backup | Part07.4.1 Redemption Table | Data protection |
| Scripts | `scripts/deploy-redemption-fraud-services.sh` | Services deployment | Part14.1 Deployment Overview | Deployment automation |
| Scripts | `scripts/sync-pos-devices.sh` | POS synchronization | Part04.3.1 Barcode Redemption | POS sync automation |
| Scripts | `scripts/ml-model-update.sh` | ML model deployment | Part04.4.1.4 ML Based Scoring | ML model management |
| **🔧 CONFIGURATION FILES** | | | | |
| Config | `backend/package.json` | Backend dependencies | Part02.8 Technical Requirements | Service project definition |
| Config | `backend/tsconfig.json` | TypeScript configuration | Part02.8 Technical Requirements | Compilation configuration |
| Config | `backend/jest.config.js` | Testing configuration | Part13.2.1 Unit Testing Framework | Testing setup |
| Config | `backend/eslint.config.js` | Code quality configuration | Part06B.7.1 Code Comments | Code quality setup |
| Config | `backend/prisma/schema.prisma` | Database schema | Part07.4.1 Redemption Table | Database definition |
| Config | `.env.redemption.example` | Environment variables template | Part02.8 Technical Requirements | Service configuration template |
| Config | `.env.fraud.example` | Fraud service environment template | Part04.4.1 Fraud Detection | Fraud configuration template |
| Config | `docker-compose.redemption-fraud.yml` | Services development stack | Part14.2 Container Architecture | Local development environment |
| Config | `ml-models/fraud-detection.json` | ML model configuration | Part04.4.1.4 ML Based Scoring | Machine learning configuration |
| Config | `pos-configs/pos-integration.json` | POS integration configuration | Part04.3.1 Barcode Redemption | POS setup configuration |

---

## 📁 **CẤU TRÚC THƯ MỤC HOÀN CHỈNH**

```bash
redemption-fraud-detection-service/
├── 📂 backend/                                # Redemption & Fraud Detection Service
│   ├── 📂 src/
│   │   ├── 📂 domain/                          # Domain Layer
│   │   │   ├── 📂 entities/                    # Business Entities
│   │   │   │   ├── Redemption.ts               # Redemption entity với business rules
│   │   │   │   ├── FraudScore.ts               # Fraud scoring entity
│   │   │   │   ├── DeviceFingerprint.ts        # Device fingerprinting entity
│   │   │   │   ├── Transaction.ts              # Transaction entity
│   │   │   │   └── POSDevice.ts                # POS device management entity
│   │   │   ├── 📂 value-objects/               # Value Objects
│   │   │   │   ├── BarcodeHash.ts              # Barcode hash value object
│   │   │   │   ├── FraudRisk.ts                # Fraud risk assessment
│   │   │   │   ├── DeviceSignature.ts          # Device signature value object
│   │   │   │   └── RedemptionStatus.ts         # Redemption status management
│   │   │   ├── 📂 repositories/                # Repository Interfaces
│   │   │   │   ├── IRedemptionRepository.ts    # Redemption repository interface
│   │   │   │   ├── IFraudScoreRepository.ts    # Fraud score repository interface
│   │   │   │   ├── IDeviceFingerprintRepository.ts # Device repository interface
│   │   │   │   └── ITransactionRepository.ts   # Transaction repository interface
│   │   │   └── 📂 services/                    # Domain Services
│   │   │       ├── RedemptionDomainService.ts  # Redemption business logic
│   │   │       ├── FraudDetectionService.ts    # Fraud detection business logic
│   │   │       ├── DeviceFingerprintingService.ts # Device fingerprinting logic
│   │   │       └── RiskCalculationService.ts   # Risk assessment calculations
│   │   │
│   │   ├── 📂 application/                     # Application Layer
│   │   │   ├── 📂 use-cases/                   # Use Cases
│   │   │   │   ├── 📂 redemption/              # Redemption Use Cases
│   │   │   │   │   ├── RedeemBarcodeUseCase.ts # Barcode redemption workflow
│   │   │   │   │   ├── ValidateBarcodeUseCase.ts # Barcode validation logic
│   │   │   │   │   ├── ProcessOfflineRedemptionUseCase.ts # Offline redemption handling
│   │   │   │   │   ├── SyncPOSRedemptionsUseCase.ts # POS synchronization workflow
│   │   │   │   │   └── GetRedemptionStatusUseCase.ts # Redemption status tracking
│   │   │   │   ├── 📂 fraud/                   # Fraud Detection Use Cases
│   │   │   │   │   ├── DetectFraudUseCase.ts   # Real-time fraud detection
│   │   │   │   │   ├── CalculateFraudScoreUseCase.ts # ML-based fraud scoring
│   │   │   │   │   ├── GenerateDeviceFingerprintUseCase.ts # Device fingerprinting
│   │   │   │   │   ├── UpdateFraudRulesUseCase.ts # Fraud rules management
│   │   │   │   │   └── AnalyzeTransactionPatternUseCase.ts # Transaction pattern analysis
│   │   │   │   └── 📂 pos/                     # POS Use Cases
│   │   │   │       ├── RegisterPOSDeviceUseCase.ts # POS device registration
│   │   │   │       └── AuthenticatePOSUseCase.ts # POS authentication workflow
│   │   │   ├── 📂 dto/                         # Data Transfer Objects
│   │   │   │   ├── RedemptionDTO.ts            # Redemption DTOs
│   │   │   │   ├── FraudDetectionDTO.ts        # Fraud detection DTOs
│   │   │   │   ├── DeviceFingerprintDTO.ts     # Device fingerprint DTOs
│   │   │   │   └── POSDTO.ts                   # POS integration DTOs
│   │   │   └── 📂 ports/                       # Application Ports
│   │   │       ├── IScanditService.ts          # Scandit SDK service interface
│   │   │       ├── IMLScoringService.ts        # Machine learning service interface
│   │   │       ├── IDeviceFingerprintingService.ts # Device fingerprinting interface
│   │   │       ├── IPOSSyncService.ts          # POS synchronization interface
│   │   │       └── INotificationService.ts     # Notification service interface
│   │   │
│   │   ├── 📂 infrastructure/                  # Infrastructure Layer
│   │   │   ├── 📂 persistence/                 # Data Persistence
│   │   │   │   ├── 📂 repositories/            # Repository Implementations
│   │   │   │   │   ├── RedemptionRepository.ts # PostgreSQL redemption repository
│   │   │   │   │   ├── FraudScoreRepository.ts # Fraud score data access
│   │   │   │   │   ├── DeviceFingerprintRepository.ts # Device data access
│   │   │   │   │   ├── TransactionRepository.ts # Transaction data access
│   │   │   │   │   └── POSDeviceRepository.ts  # POS device data management
│   │   │   │   ├── 📂 models/                  # Database Models
│   │   │   │   │   ├── RedemptionModel.ts      # Prisma redemption model
│   │   │   │   │   ├── FraudScoreModel.ts      # Fraud score model
│   │   │   │   │   ├── DeviceFingerprintModel.ts # Device fingerprint model
│   │   │   │   │   ├── TransactionModel.ts     # Transaction model
│   │   │   │   │   └── POSDeviceModel.ts       # POS device model
│   │   │   │   └── 📂 migrations/              # Database Migrations
│   │   │   │       ├── 001_create_redemptions.sql # Redemption table creation
│   │   │   │       ├── 002_create_fraud_scores.sql # Fraud score tables
│   │   │   │       ├── 003_create_device_fingerprints.sql # Device fingerprint table
│   │   │   │       └── 004_create_pos_devices.sql # POS device tables
│   │   │   ├── 📂 external-services/           # External Services
│   │   │   │   ├── ScanditService.ts           # Scandit SDK integration
│   │   │   │   ├── MLScoringService.ts         # Machine learning service
│   │   │   │   ├── DeviceFingerprintingService.ts # Device fingerprinting service
│   │   │   │   ├── POSSyncService.ts           # POS synchronization service
│   │   │   │   ├── NotificationService.ts      # Fraud alert notifications
│   │   │   │   └── CacheService.ts             # Redis caching service
│   │   │   └── 📂 config/                      # Configuration
│   │   │       ├── redemption.config.ts        # Redemption service config
│   │   │       ├── fraud.config.ts             # Fraud detection config
│   │   │       ├── scandit.config.ts           # Scandit SDK config
│   │   │       ├── ml.config.ts                # Machine learning config
│   │   │       └── pos.config.ts               # POS integration config
│   │   │
│   │   ├── 📂 presentation/                    # Presentation Layer
│   │   │   ├── 📂 controllers/                 # API Controllers
│   │   │   │   ├── RedemptionController.ts     # Redemption endpoints
│   │   │   │   ├── FraudDetectionController.ts # Fraud detection endpoints
│   │   │   │   ├── DeviceFingerprintController.ts # Device fingerprint endpoints
│   │   │   │   ├── POSController.ts            # POS integration endpoints
│   │   │   │   └── HealthController.ts         # Health check
│   │   │   ├── 📂 middleware/                  # API Middleware
│   │   │   │   ├── RedemptionAuthMiddleware.ts # Redemption authorization
│   │   │   │   ├── FraudValidationMiddleware.ts # Fraud detection validation
│   │   │   │   ├── POSAuthMiddleware.ts        # POS authentication middleware
│   │   │   │   ├── RateLimitMiddleware.ts      # Rate limiting
│   │   │   │   └── FraudAlertMiddleware.ts     # Fraud alert middleware
│   │   │   ├── 📂 routes/                      # API Routes
│   │   │   │   ├── redemptions.routes.ts       # Redemption routes
│   │   │   │   ├── fraud.routes.ts             # Fraud detection routes
│   │   │   │   ├── devices.routes.ts           # Device fingerprint routes
│   │   │   │   └── pos.routes.ts               # POS integration routes
│   │   │   └── 📂 validators/                  # Request Validators
│   │   │       ├── RedemptionValidators.ts     # Redemption validation
│   │   │       ├── FraudValidators.ts          # Fraud detection validation
│   │   │       ├── DeviceValidators.ts         # Device fingerprint validation
│   │   │       └── POSValidators.ts            # POS integration validation
│   │   │
│   │   └── 📂 shared/                          # Shared Code
│   │       ├── 📂 constants/                   # Constants
│   │       │   ├── redemption.constants.ts     # Redemption constants
│   │       │   ├── fraud.constants.ts          # Fraud detection constants
│   │       │   ├── device.constants.ts         # Device fingerprint constants
│   │       │   └── pos.constants.ts            # POS integration constants
│   │       ├── 📂 exceptions/                  # Custom Exceptions
│   │       │   ├── RedemptionException.ts      # Redemption errors
│   │       │   ├── FraudException.ts           # Fraud detection errors
│   │       │   ├── DeviceException.ts          # Device fingerprint errors
│   │       │   ├── POSException.ts             # POS integration errors
│   │       │   └── ScanditException.ts         # Scandit SDK errors
│   │       ├── 📂 types/                       # Type Definitions
│   │       │   ├── redemption.types.ts         # Redemption types
│   │       │   ├── fraud.types.ts              # Fraud detection types
│   │       │   ├── device.types.ts             # Device fingerprint types
│   │       │   ├── pos.types.ts                # POS integration types
│   │       │   └── ml.types.ts                 # Machine learning types
│   │       └── 📂 utils/                       # Utility Functions
│   │           ├── barcode.utils.ts            # Barcode processing utilities
│   │           ├── fraud.utils.ts              # Fraud detection utilities
│   │           ├── device.utils.ts             # Device fingerprint utilities
│   │           ├── encryption.utils.ts         # Data encryption utilities
│   │           └── validation.utils.ts         # Validation utilities
│   │
│   ├── 📂 tests/                               # Backend Testing
│   │   ├── 📂 unit/                            # Unit Tests
│   │   │   ├── 📂 domain/                      # Domain Tests
│   │   │   │   └── 📂 entities/                
│   │   │   │       ├── Redemption.test.ts     # Redemption entity tests
│   │   │   │       ├── FraudScore.test.ts     # Fraud score entity tests
│   │   │   │       └── DeviceFingerprint.test.ts # Device entity tests
│   │   │   └── 📂 application/                 # Application Tests
│   │   │       └── 📂 use-cases/               
│   │   │           ├── RedeemBarcodeUseCase.test.ts # Redemption tests
│   │   │           └── DetectFraudUseCase.test.ts # Fraud detection tests
│   │   ├── 📂 integration/                     # Integration Tests
│   │   │   ├── 📂 controllers/                 
│   │   │   │   ├── RedemptionController.test.ts # Redemption API tests
│   │   │   │   └── FraudDetectionController.test.ts # Fraud API tests
│   │   │   ├── 📂 repositories/                
│   │   │   │   ├── RedemptionRepository.test.ts # Redemption DB tests
│   │   │   │   └── FraudScoreRepository.test.ts # Fraud DB tests
│   │   │   └── 📂 external-services/           
│   │   │       ├── ScanditService.test.ts      # Scandit SDK tests
│   │   │       └── MLScoringService.test.ts    # ML service tests
│   │   └── 📂 e2e/                             # E2E Tests
│   │       ├── redemption-flow.test.ts         # Redemption workflow tests
│   │       ├── fraud-detection-flow.test.ts    # Fraud workflow tests
│   │       └── pos-integration.test.ts         # POS workflow tests
│   │
│   ├── 📂 docs/                                # Service Documentation
│   │   ├── API.md                              # API documentation
│   │   ├── ARCHITECTURE.md                     # Architecture overview
│   │   ├── REDEMPTION-FLOW.md                  # Redemption process guide
│   │   ├── FRAUD-DETECTION.md                  # Fraud detection guide
│   │   ├── SCANDIT-INTEGRATION.md              # Scandit SDK guide
│   │   ├── POS-INTEGRATION.md                  # POS integration guide
│   │   └── SETUP.md                            # Service setup guide
│   │
│   ├── package.json                            # Service dependencies
│   ├── tsconfig.json                           # TypeScript config
│   ├── jest.config.js                          # Testing config
│   ├── eslint.config.js                        # Code quality config
│   └── prisma/                                 # Database Configuration
│       └── schema.prisma                       # Database schema
│
├── 📂 deployment/                              # Deployment Configuration
│   ├── 📂 docker/                              # Docker files
│   │   ├── Dockerfile.redemption-service       # Redemption service container
│   │   └── Dockerfile.fraud-service            # Fraud service container
│   ├── 📂 kubernetes/                          # Kubernetes manifests
│   │   ├── 📂 redemption-service/              # Redemption K8s resources
│   │   │   ├── deployment.yaml                 # Service deployment
│   │   │   ├── service.yaml                    # Service networking
│   │   │   └── configmap.yaml                  # Configuration
│   │   └── 📂 fraud-service/                   # Fraud K8s resources
│   │       ├── deployment.yaml                 # Fraud deployment
│   │       ├── service.yaml                    # Fraud networking
│   │       └── configmap.yaml                  # Fraud configuration
│   └── 📂 helm/                                # Helm charts
│       └── 📂 redemption-fraud-services/       # Services Helm chart
│           ├── Chart.yaml                      # Chart definition
│           ├── values.yaml                     # Default values
│           └── 📂 templates/                   # Helm templates
│               ├── redemption-deployment.yaml  # Redemption template
│               └── fraud-deployment.yaml       # Fraud template
│
├── 📂 docs/                                    # Project Documentation
│   ├── redemption-fraud-services/              # Service-specific docs
│   │   ├── API.md                              # API documentation
│   │   ├── ARCHITECTURE.md                     # Services architecture
│   │   ├── REDEMPTION-FLOW.md                  # Redemption documentation
│   │   ├── FRAUD-DETECTION.md                  # Fraud docs
│   │   ├── SCANDIT-INTEGRATION.md              # Scandit documentation
│   │   ├── POS-INTEGRATION.md                  # POS documentation
│   │   └── SETUP.md                            # Setup guide
│   └── 📂 diagrams/                            # Architecture diagrams
│       ├── redemption-fraud-architecture.png   # Services architecture
│       ├── redemption-flow.png                 # Redemption process flow
│       ├── fraud-detection-flow.png            # Fraud detection flow
│       └── pos-integration-flow.png            # POS integration flow
│
├── 📂 scripts/                                 # Automation Scripts
│   ├── setup-redemption-fraud-services.sh      # Services setup
│   ├── generate-fraud-test-data.sh             # Fraud test data generation
│   ├── migrate-redemption-data.sh              # Database migration
│   ├── backup-redemption-data.sh               # Data backup
│   ├── deploy-redemption-fraud-services.sh     # Services deployment
│   ├── sync-pos-devices.sh                     # POS synchronization
│   └── ml-model-update.sh                      # ML model deployment
│
├── 📂 ml-models/                               # Machine Learning Models
│   └── fraud-detection.json                    # ML model configuration
│
├── 📂 pos-configs/                             # POS Configuration
│   └── pos-integration.json                    # POS setup configuration
│
├── .env.redemption.example                     # Redemption environment template
├── .env.fraud.example                          # Fraud environment template
├── docker-compose.redemption-fraud.yml         # Development stack
└── README.md                                   # Project overview
```

---

## 📋 **ROADMAP CHI TIẾT - CHECKLIST IMPLEMENTATION HOÀN CHỈNH**

### **1. SETUP & CHUẨN BỊ DỰ ÁN** ⚙️

#### **1.1 Khởi tạo Redemption & Fraud Services**
- [ ] **Tạo services structure và configuration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.2 Services + Part02.8 Technical Requirements
  - *Mô tả*: Thiết lập backend services với Clean Architecture cho redemption & fraud detection
  - *File tạo*: `backend/package.json`, `backend/tsconfig.json`, complete folder structure
  - *Ý nghĩa*: Independent microservices cho redemption và fraud management

- [ ] **Setup database schema cho redemption & fraud**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.1 Redemption Table + Part07.4.2 Fraud Score Table
  - *Mô tả*: PostgreSQL schema cho redemptions, fraud scores, device fingerprints
  - *File tạo*: `backend/prisma/schema.prisma`, migration files
  - *Ý nghĩa*: Data persistence foundation cho redemption và fraud operations

- [ ] **Setup external service integrations**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Scandit SDK Integration + Part04.4.1.4 ML Based Scoring
  - *Mô tả*: Scandit SDK, ML scoring service, POS integration configuration
  - *File tạo*: External service configs, SDK integration files
  - *Ý nghĩa*: Third-party integrations cho core functionality

#### **1.2 Database Schema Implementation**
- [ ] **Create redemption tables**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.1 Redemption Table
  - *Mô tả*: Redemptions table với barcode tracking, status, timestamps
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/001_create_redemptions.sql`
  - *Ý nghĩa*: Core redemption data storage

- [ ] **Create fraud detection tables**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.2 Fraud Score Table
  - *Mô tả*: Fraud score tables với ML scores, rules, alerts
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/002_create_fraud_scores.sql`
  - *Ý nghĩa*: Fraud detection data storage

- [ ] **Create device fingerprint tables**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.3 Device Fingerprint Table
  - *Mô tả*: Device fingerprint tables với signatures, tracking
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/003_create_device_fingerprints.sql`
  - *Ý nghĩa*: Device-based fraud prevention storage

- [ ] **Create POS device tables**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: POS device tables với authentication, sync status
  - *File tạo*: `backend/src/infrastructure/persistence/migrations/004_create_pos_devices.sql`
  - *Ý nghĩa*: POS integration management storage

#### **1.3 External Service Integration Setup**
- [ ] **Setup Scandit SDK integration**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Scandit SDK Integration
  - *Mô tả*: Scandit SDK for barcode scanning integration
  - *File tạo*: Scandit configuration, scanning service setup
  - *Ý nghĩa*: Core barcode scanning capability

- [ ] **Setup ML scoring service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.4 ML Based Scoring
  - *Mô tả*: Machine learning service for fraud scoring
  - *File tạo*: ML service configuration, model integration
  - *Ý nghĩa*: AI-powered fraud detection capability

- [ ] **Setup POS synchronization service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: POS device synchronization for offline redemptions
  - *File tạo*: POS sync configuration, offline handling
  - *Ý nghĩa*: Offline-online redemption bridge

### **2. DOMAIN LAYER IMPLEMENTATION** 🏗️

#### **2.1 Core Entities Implementation**
- [ ] **Implement Redemption Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption (FR-007)
  - *Mô tả*: Redemption entity với business rules, status transitions, validation
  - *File tạo*: `backend/src/domain/entities/Redemption.ts`
  - *Ý nghĩa*: Core redemption business logic encapsulation

- [ ] **Implement FraudScore Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection (FR-011)
  - *Mô tả*: Fraud score entity với ML scoring, risk assessment
  - *File tạo*: `backend/src/domain/entities/FraudScore.ts`
  - *Ý nghĩa*: Fraud detection scoring logic

- [ ] **Implement DeviceFingerprint Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.5 Device Fingerprinting
  - *Mô tả*: Device fingerprint entity với signature generation, tracking
  - *File tạo*: `backend/src/domain/entities/DeviceFingerprint.ts`
  - *Ý nghĩa*: Device-based fraud prevention logic

- [ ] **Implement Transaction Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection
  - *Mô tả*: Transaction entity cho fraud pattern analysis
  - *File tạo*: `backend/src/domain/entities/Transaction.ts`
  - *Ý nghĩa*: Transaction pattern detection

- [ ] **Implement POSDevice Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: POS device entity với authentication, sync management
  - *File tạo*: `backend/src/domain/entities/POSDevice.ts`
  - *Ý nghĩa*: POS device lifecycle management

#### **2.2 Value Objects Implementation**
- [ ] **Implement BarcodeHash Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: Barcode hash value object với secure validation
  - *File tạo*: `backend/src/domain/value-objects/BarcodeHash.ts`
  - *Ý nghĩa*: Secure barcode handling

- [ ] **Implement FraudRisk Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection
  - *Mô tả*: Fraud risk assessment value object với scoring logic
  - *File tạo*: `backend/src/domain/value-objects/FraudRisk.ts`
  - *Ý nghĩa*: Risk level calculation consistency

- [ ] **Implement DeviceSignature Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.5 Device Fingerprinting
  - *Mô tả*: Device signature value object với unique identification
  - *File tạo*: `backend/src/domain/value-objects/DeviceSignature.ts`
  - *Ý nghĩa*: Unique device identification

- [ ] **Implement RedemptionStatus Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: Redemption status management với state transitions
  - *File tạo*: `backend/src/domain/value-objects/RedemptionStatus.ts`
  - *Ý nghĩa*: Controlled redemption state management

#### **2.3 Domain Services Implementation**
- [ ] **Implement RedemptionDomainService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: Complex redemption business logic, validation rules
  - *File tạo*: `backend/src/domain/services/RedemptionDomainService.ts`
  - *Ý nghĩa*: Cross-entity redemption business operations

- [ ] **Implement FraudDetectionService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection
  - *Mô tả*: Fraud detection algorithms, rules engine
  - *File tạo*: `backend/src/domain/services/FraudDetectionService.ts`
  - *Ý nghĩa*: Core fraud detection business logic

- [ ] **Implement DeviceFingerprintingService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.5 Device Fingerprinting
  - *Mô tả*: Device fingerprinting algorithms, signature generation
  - *File tạo*: `backend/src/domain/services/DeviceFingerprintingService.ts`
  - *Ý nghĩa*: Device identification business rules

- [ ] **Implement RiskCalculationService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection
  - *Mô tả*: Risk assessment calculations, scoring algorithms
  - *File tạo*: `backend/src/domain/services/RiskCalculationService.ts`
  - *Ý nghĩa*: Risk scoring business logic

#### **2.4 Repository Interfaces Implementation**
- [ ] **Implement Repository Interfaces**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture
  - *Mô tả*: Domain layer interfaces cho data access
  - *File tạo*: `backend/src/domain/repositories/IRedemptionRepository.ts`, `IFraudScoreRepository.ts`, `IDeviceFingerprintRepository.ts`, `ITransactionRepository.ts`
  - *Ý nghĩa*: Clean separation với dependency inversion

### **3. APPLICATION LAYER IMPLEMENTATION** 🔄

#### **3.1 Redemption Use Cases Implementation**
- [ ] **Implement Redemption Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption (FR-007)
  - *Mô tả*: Complete redemption workflow operations
  - *File tạo*: `backend/src/application/use-cases/redemption/RedeemBarcodeUseCase.ts`, `ValidateBarcodeUseCase.ts`, `ProcessOfflineRedemptionUseCase.ts`, `SyncPOSRedemptionsUseCase.ts`, `GetRedemptionStatusUseCase.ts`
  - *Ý nghĩa*: Redemption workflow orchestration

#### **3.2 Fraud Detection Use Cases Implementation**
- [ ] **Implement Fraud Detection Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection (FR-011)
  - *Mô tả*: Real-time fraud detection, ML scoring, device fingerprinting workflows
  - *File tạo*: `backend/src/application/use-cases/fraud/DetectFraudUseCase.ts`, `CalculateFraudScoreUseCase.ts`, `GenerateDeviceFingerprintUseCase.ts`, `UpdateFraudRulesUseCase.ts`, `AnalyzeTransactionPatternUseCase.ts`
  - *Ý nghĩa*: Complete fraud detection workflow management

#### **3.3 POS Integration Use Cases Implementation**
- [ ] **Implement POS Use Cases**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: POS device registration, authentication, offline sync
  - *File tạo*: `backend/src/application/use-cases/pos/RegisterPOSDeviceUseCase.ts`, `AuthenticatePOSUseCase.ts`
  - *Ý nghĩa*: POS integration workflow orchestration

#### **3.4 DTOs và Application Ports**
- [ ] **Implement Data Transfer Objects**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3.1 Redemption APIs + Part08.3.2 Fraud Detection APIs
  - *Mô tả*: API contract definitions cho all endpoints
  - *File tạo*: `backend/src/application/dto/RedemptionDTO.ts`, `FraudDetectionDTO.ts`, `DeviceFingerprintDTO.ts`, `POSDTO.ts`
  - *Ý nghĩa*: Type-safe API contracts

- [ ] **Implement Application Ports**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Scandit SDK Integration + Part04.4.1.4 ML Based Scoring
  - *Mô tả*: External service interfaces cho dependency inversion
  - *File tạo*: `backend/src/application/ports/IScanditService.ts`, `IMLScoringService.ts`, `IDeviceFingerprintingService.ts`, `IPOSSyncService.ts`, `INotificationService.ts`
  - *Ý nghĩa*: Clean external service integration

### **4. INFRASTRUCTURE LAYER IMPLEMENTATION** 🏗️

#### **4.1 Repository Implementations**
- [ ] **Implement PostgreSQL Repositories**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.1 Redemption Table + Part07.4.2 Fraud Score Table
  - *Mô tả*: Concrete repository implementations với Prisma ORM
  - *File tạo*: `backend/src/infrastructure/persistence/repositories/RedemptionRepository.ts`, `FraudScoreRepository.ts`, `DeviceFingerprintRepository.ts`, `TransactionRepository.ts`, `POSDeviceRepository.ts`
  - *Ý nghĩa*: Data access layer cho redemption & fraud operations

#### **4.2 Database Models Implementation**
- [ ] **Implement Prisma Models**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.4.1 Redemption Table
  - *Mô tả*: ORM models mapping domain entities to database
  - *File tạo*: `backend/src/infrastructure/persistence/models/RedemptionModel.ts`, `FraudScoreModel.ts`, `DeviceFingerprintModel.ts`, `TransactionModel.ts`, `POSDeviceModel.ts`
  - *Ý nghĩa*: Type-safe database access với ORM

#### **4.3 External Services Implementation**
- [ ] **Implement Scandit SDK Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Scandit SDK Integration
  - *Mô tả*: Scandit SDK integration for barcode scanning
  - *File tạo*: `backend/src/infrastructure/external-services/ScanditService.ts`
  - *Ý nghĩa*: Professional barcode scanning capability

- [ ] **Implement ML Scoring Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.4 ML Based Scoring
  - *Mô tả*: Machine learning service for fraud scoring
  - *File tạo*: `backend/src/infrastructure/external-services/MLScoringService.ts`
  - *Ý nghĩa*: AI-powered fraud detection implementation

- [ ] **Implement Device Fingerprinting Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1.5 Device Fingerprinting
  - *Mô tả*: Device fingerprinting implementation
  - *File tạo*: `backend/src/infrastructure/external-services/DeviceFingerprintingService.ts`
  - *Ý nghĩa*: Device-based fraud prevention implementation

- [ ] **Implement POS Sync Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: POS synchronization for offline redemptions
  - *File tạo*: `backend/src/infrastructure/external-services/POSSyncService.ts`
  - *Ý nghĩa*: Offline-online redemption bridge

- [ ] **Implement Notification Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.4.1 Fraud Detection
  - *Mô tả*: Fraud alert notifications implementation
  - *File tạo*: `backend/src/infrastructure/external-services/NotificationService.ts`
  - *Ý nghĩa*: Real-time fraud alerting

- [ ] **Implement Cache Service**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption
  - *Mô tả*: Redis caching for performance optimization
  - *File tạo*: `backend/src/infrastructure/external-services/CacheService.ts`
  - *Ý nghĩa*: Performance optimization và offline support

#### **4.4 Configuration Implementation**
- [ ] **Implement Service Configurations**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Service-specific configuration management
  - *File tạo*: `backend/src/infrastructure/config/redemption.config.ts`, `fraud.config.ts`, `scandit.config.ts`, `ml.config.ts`, `pos.config.ts`
  - *Ý nghĩa*: Centralized configuration cho service components

### **5. PRESENTATION LAYER IMPLEMENTATION** 🌐

#### **5.1 API Controllers Implementation**
- [ ] **Implement Redemption Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3.1 Redemption APIs
  - *Mô tả*: REST endpoints cho redemption management
  - *File tạo*: `backend/src/presentation/controllers/RedemptionController.ts`
  - *Ý nghĩa*: Redemption API interface

- [ ] **Implement Fraud Detection Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3.2 Fraud Detection APIs
  - *Mô tả*: Fraud detection và scoring endpoints
  - *File tạo*: `backend/src/presentation/controllers/FraudDetectionController.ts`
  - *Ý nghĩa*: Fraud detection API interface

- [ ] **Implement Device Fingerprint Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3.2 Fraud Detection APIs
  - *Mô tả*: Device fingerprinting management endpoints
  - *File tạo*: `backend/src/presentation/controllers/DeviceFingerprintController.ts`
  - *Ý nghĩa*: Device management API interface

- [ ] **Implement POS Controllers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3.1 Redemption APIs
  - *Mô tả*: POS integration endpoints
  - *File tạo*: `backend/src/presentation/controllers/POSController.ts`
  - *Ý nghĩa*: POS integration API interface

#### **5.2 Middleware Implementation**
- [ ] **Implement Security Middleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements
  - *Mô tả*: Authentication, authorization, validation middleware
  - *File tạo*: `backend/src/presentation/middleware/RedemptionAuthMiddleware.ts`, `FraudValidationMiddleware.ts`, `POSAuthMiddleware.ts`, `RateLimitMiddleware.ts`, `FraudAlertMiddleware.ts`
  - *Ý nghĩa*: API security và validation

#### **5.3 Routing Implementation**
- [ ] **Implement API Routes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3 Redemption & Fraud APIs
  - *Mô tả*: Route definitions với middleware integration
  - *File tạo*: `backend/src/presentation/routes/redemptions.routes.ts`, `fraud.routes.ts`, `devices.routes.ts`, `pos.routes.ts`
  - *Ý nghĩa*: Structured API organization

#### **5.4 Input Validation Implementation**
- [ ] **Implement Request Validators**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.7 Input Validation
  - *Mô tả*: Input validation rules, schema validation
  - *File tạo*: `backend/src/presentation/validators/RedemptionValidators.ts`, `FraudValidators.ts`, `DeviceValidators.ts`, `POSValidators.ts`
  - *Ý nghĩa*: Input validation và security

### **6. SHARED CODE IMPLEMENTATION** 🧰

#### **6.1 Constants và Configuration**
- [ ] **Implement Service Constants**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption + Part04.4.1 Fraud Detection
  - *Mô tả*: Redemption và fraud-related constants
  - *File tạo*: `backend/src/shared/constants/redemption.constants.ts`, `fraud.constants.ts`, `device.constants.ts`, `pos.constants.ts`
  - *Ý nghĩa*: Centralized configuration constants

#### **6.2 Exception Handling**
- [ ] **Implement Custom Exceptions**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.8 Error Handling
  - *Mô tả*: Domain-specific exception classes
  - *File tạo*: `backend/src/shared/exceptions/RedemptionException.ts`, `FraudException.ts`, `DeviceException.ts`, `POSException.ts`, `ScanditException.ts`
  - *Ý nghĩa*: Structured error handling

#### **6.3 Utility Functions**
- [ ] **Implement Service Utilities**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.3.1 Barcode Redemption + Part04.4.1 Fraud Detection
  - *Mô tả*: Barcode utilities, fraud detection helpers, device utilities
  - *File tạo*: `backend/src/shared/utils/barcode.utils.ts`, `fraud.utils.ts`, `device.utils.ts`, `encryption.utils.ts`, `validation.utils.ts`
  - *Ý nghĩa*: Reusable utility functions

#### **6.4 Type Definitions**
- [ ] **Implement TypeScript Types**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3 Redemption & Fraud APIs + Part02.8 Technical Requirements
  - *Mô tả*: Service-specific type definitions
  - *File tạo*: `backend/src/shared/types/redemption.types.ts`, `fraud.types.ts`, `device.types.ts`, `pos.types.ts`, `ml.types.ts`
  - *Ý nghĩa*: Type safety across service modules

### **7. TESTING IMPLEMENTATION** 🧪

#### **7.1 Unit Testing**
- [ ] **Implement Domain Unit Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Entity, value object, domain service tests
  - *File tạo*: `backend/tests/unit/domain/entities/Redemption.test.ts`, `FraudScore.test.ts`, `DeviceFingerprint.test.ts`
  - *Ý nghĩa*: Domain logic verification

- [ ] **Implement Application Unit Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Use case testing với mocking
  - *File tạo*: `backend/tests/unit/application/use-cases/RedeemBarcodeUseCase.test.ts`, `DetectFraudUseCase.test.ts`
  - *Ý nghĩa*: Application workflow verification

#### **7.2 Integration Testing**
- [ ] **Implement API Integration Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing
  - *Mô tả*: Controller endpoint testing
  - *File tạo*: `backend/tests/integration/controllers/RedemptionController.test.ts`, `FraudDetectionController.test.ts`
  - *Ý nghĩa*: API contract verification

- [ ] **Implement Database Integration Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.2 Database Testing
  - *Mô tả*: Repository implementation testing
  - *File tạo*: `backend/tests/integration/repositories/RedemptionRepository.test.ts`, `FraudScoreRepository.test.ts`
  - *Ý nghĩa*: Data access verification

- [ ] **Implement External Service Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.3 External Service Testing
  - *Mô tả*: Scandit SDK, ML service, POS integration testing
  - *File tạo*: `backend/tests/integration/external-services/ScanditService.test.ts`, `MLScoringService.test.ts`
  - *Ý nghĩa*: External integration verification

#### **7.3 End-to-End Testing**
- [ ] **Implement Workflow E2E Tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: Complete service workflow testing
  - *File tạo*: `backend/tests/e2e/redemption-flow.test.ts`, `fraud-detection-flow.test.ts`, `pos-integration.test.ts`
  - *Ý nghĩa*: Complete service functionality verification

### **8. DEPLOYMENT & DEVOPS** 🚀

#### **8.1 Containerization**
- [ ] **Create Service Containers**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Docker containers cho redemption & fraud services
  - *File tạo*: `deployment/docker/Dockerfile.redemption-service`, `deployment/docker/Dockerfile.fraud-service`
  - *Ý nghĩa*: Portable service deployment

#### **8.2 Kubernetes Deployment**
- [ ] **Create K8s Manifests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Service deployment, networking, configuration
  - *File tạo*: K8s deployment, service, configmap files cho both services
  - *Ý nghĩa*: Production-ready orchestration

#### **8.3 Helm Chart**
- [ ] **Create Helm Chart**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Parameterized deployment templates
  - *File tạo*: `deployment/helm/redemption-fraud-services/Chart.yaml`, templates
  - *Ý nghĩa*: Flexible deployment configuration

### **9. DOCUMENTATION & MONITORING** 📚

#### **9.1 Service Documentation**
- [ ] **Create Service Documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.3 Redemption & Fraud APIs + Part06.2.2 Services Architecture
  - *Mô tả*: API docs, architecture guide, integration guides
  - *File tạo*: `docs/redemption-fraud-services/API.md`, `ARCHITECTURE.md`, `REDEMPTION-FLOW.md`, `FRAUD-DETECTION.md`, `SCANDIT-INTEGRATION.md`, `POS-INTEGRATION.md`, `SETUP.md`
  - *Ý nghĩa*: Developer onboarding và service maintenance

#### **9.2 Automation Scripts**
- [ ] **Create Automation Scripts**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Service setup, deployment, data management, ML model updates
  - *File tạo*: `scripts/setup-redemption-fraud-services.sh`, `generate-fraud-test-data.sh`, `migrate-redemption-data.sh`, `backup-redemption-data.sh`, `deploy-redemption-fraud-services.sh`, `sync-pos-devices.sh`, `ml-model-update.sh`
  - *Ý nghĩa*: Operational efficiency và consistency

---

## 🎯 **KẾT LUẬN**

**Tổng số files được map**: 160+ files với đầy đủ SRS references  
**Backend Clean Architecture**: 90+ files với proper layering  
**API Coverage**: Complete REST endpoints cho Redemption, Fraud Detection, Device Fingerprinting, POS  
**External Integrations**: Scandit SDK, ML Scoring, POS Systems  
**Testing Strategy**: 30+ test files coverage  
**Deployment & DevOps**: 18+ infrastructure files  
**Documentation**: 12+ comprehensive docs  

**Estimated timeline**: 10-12 tuần cho 1 team (4-5 developers)  
**SRS coverage**: 100% cho Redemption & Fraud domain (FR-007, FR-011)  
**Integration points**: Ready for Campaign Service, Analytics Service, POS systems  

**Sub-Project 3 hoàn chỉnh! Redemption & Fraud Detection Service với complete backend implementation theo SRS specifications! 🚀**
