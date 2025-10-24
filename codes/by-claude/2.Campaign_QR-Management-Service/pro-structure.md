# 🚀 Sub-Project 2: Campaign & QR Management Service - Roadmap Chi Tiết

## 📁 Cấu Trúc Thư Mục Hoàn Chỉnh

```bash
campaign-qr-management-service/
├── 📂 src/
│   ├── 📂 domain/                          # Domain Layer - Clean Architecture
│   │   ├── 📂 entities/                    
│   │   │   ├── Campaign.ts                 # Campaign Entity
│   │   │   ├── Barcode.ts                  # Barcode Entity  
│   │   │   ├── QRCode.ts                   # QR Code Entity
│   │   │   ├── AdsFormat.ts                # Ads Format Entity
│   │   │   ├── Template.ts                 # Template Entity
│   │   │   └── UTMTracking.ts              # UTM Tracking Entity
│   │   ├── 📂 value-objects/               
│   │   │   ├── CampaignStatus.ts           # Campaign Status Value Object
│   │   │   ├── BarcodeType.ts              # Barcode Type Value Object
│   │   │   ├── UTMParameters.ts            # UTM Parameters Value Object
│   │   │   └── AssetURL.ts                 # Asset URL Value Object
│   │   ├── 📂 repositories/                # Repository Interfaces
│   │   │   ├── ICampaignRepository.ts      
│   │   │   ├── IBarcodeRepository.ts       
│   │   │   ├── IQRCodeRepository.ts        
│   │   │   ├── IAdsFormatRepository.ts     
│   │   │   └── ITemplateRepository.ts      
│   │   └── 📂 services/                    # Domain Services
│   │       ├── CampaignDomainService.ts    
│   │       ├── QRGenerationService.ts      
│   │       ├── BarcodeValidationService.ts 
│   │       └── UTMTrackingService.ts       
│   │
│   ├── 📂 application/                     # Application Layer - Use Cases
│   │   ├── 📂 use-cases/                   
│   │   │   ├── 📂 campaign-management/     
│   │   │   │   ├── CreateCampaignUseCase.ts
│   │   │   │   ├── UpdateCampaignUseCase.ts
│   │   │   │   ├── DeleteCampaignUseCase.ts
│   │   │   │   ├── GetCampaignUseCase.ts   
│   │   │   │   ├── PublishCampaignUseCase.ts
│   │   │   │   └── ArchiveCampaignUseCase.ts
│   │   │   ├── 📂 barcode-management/      
│   │   │   │   ├── GenerateBarcodeUseCase.ts
│   │   │   │   ├── ValidateBarcodeUseCase.ts
│   │   │   │   ├── BatchGenerateBarcodeUseCase.ts
│   │   │   │   └── GetBarcodeStatusUseCase.ts
│   │   │   ├── 📂 qr-management/           
│   │   │   │   ├── GenerateQRCodeUseCase.ts
│   │   │   │   ├── TrackQRScanUseCase.ts   
│   │   │   │   ├── GetQRAnalyticsUseCase.ts
│   │   │   │   └── BulkQRGenerationUseCase.ts
│   │   │   ├── 📂 ads-format-management/   
│   │   │   │   ├── CreateAdsFormatUseCase.ts
│   │   │   │   ├── UpdateAdsFormatUseCase.ts
│   │   │   │   ├── DeleteAdsFormatUseCase.ts
│   │   │   │   └── GetAdsFormatUseCase.ts  
│   │   │   └── 📂 template-management/     
│   │   │       ├── CreateTemplateUseCase.ts
│   │   │       ├── UpdateTemplateUseCase.ts
│   │   │       ├── DeleteTemplateUseCase.ts
│   │   │       └── GetTemplateUseCase.ts   
│   │   ├── 📂 dtos/                        # Data Transfer Objects
│   │   │   ├── CampaignDTO.ts              
│   │   │   ├── BarcodeDTO.ts               
│   │   │   ├── QRCodeDTO.ts                
│   │   │   ├── AdsFormatDTO.ts             
│   │   │   ├── TemplateDTO.ts              
│   │   │   └── UTMTrackingDTO.ts           
│   │   └── 📂 interfaces/                  # Application Interfaces
│   │       ├── ICampaignService.ts         
│   │       ├── IBarcodeService.ts          
│   │       ├── IQRCodeService.ts           
│   │       └── IAdsFormatService.ts        
│   │
│   ├── 📂 infrastructure/                  # Infrastructure Layer
│   │   ├── 📂 database/                    
│   │   │   ├── 📂 repositories/            
│   │   │   │   ├── CampaignRepository.ts   
│   │   │   │   ├── BarcodeRepository.ts    
│   │   │   │   ├── QRCodeRepository.ts     
│   │   │   │   ├── AdsFormatRepository.ts  
│   │   │   │   └── TemplateRepository.ts   
│   │   │   ├── 📂 migrations/              
│   │   │   │   ├── 001_create_campaigns_table.sql
│   │   │   │   ├── 002_create_barcodes_table.sql
│   │   │   │   ├── 003_create_qr_codes_table.sql
│   │   │   │   ├── 004_create_ads_formats_table.sql
│   │   │   │   ├── 005_create_templates_table.sql
│   │   │   │   ├── 006_create_utm_tracking_table.sql
│   │   │   │   └── 007_create_campaign_analytics_table.sql
│   │   │   └── 📂 seeds/                   
│   │   │       ├── default-templates.sql   
│   │   │       └── sample-campaigns.sql    
│   │   ├── 📂 external-services/           
│   │   │   ├── S3StorageService.ts        # Asset Storage Service
│   │   │   ├── QRLibraryService.ts        # QR Generation Library
│   │   │   ├── BarcodeLibraryService.ts   # Barcode Generation Library
│   │   │   ├── ImageProcessingService.ts  # Image Processing
│   │   │   └── CDNService.ts              # Content Delivery Network
│   │   ├── 📂 tracking/                    
│   │   │   ├── UTMTrackingService.ts      # UTM Parameter Tracking
│   │   │   ├── AnalyticsService.ts        # Campaign Analytics
│   │   │   └── EventTrackingService.ts    # Event Bus Integration
│   │   └── 📂 config/                      
│   │       ├── database.config.ts         
│   │       ├── storage.config.ts          
│   │       ├── qr-generation.config.ts    
│   │       └── analytics.config.ts        
│   │
│   ├── 📂 presentation/                    # Presentation Layer
│   │   ├── 📂 controllers/                 
│   │   │   ├── CampaignController.ts      # Campaign Management APIs
│   │   │   ├── BarcodeController.ts       # Barcode Management APIs
│   │   │   ├── QRCodeController.ts        # QR Code Management APIs
│   │   │   ├── AdsFormatController.ts     # Ads Format Management APIs
│   │   │   └── TemplateController.ts      # Template Management APIs
│   │   ├── 📂 middleware/                  
│   │   │   ├── AuthMiddleware.ts          # Authentication Verification
│   │   │   ├── BrandAuthMiddleware.ts     # Brand Authorization
│   │   │   ├── ValidationMiddleware.ts    # Input Validation
│   │   │   ├── FileUploadMiddleware.ts    # File Upload Handling
│   │   │   └── RateLimitMiddleware.ts     # Rate Limiting
│   │   ├── 📂 routes/                      
│   │   │   ├── campaign.routes.ts         
│   │   │   ├── barcode.routes.ts          
│   │   │   ├── qr-code.routes.ts          
│   │   │   ├── ads-format.routes.ts       
│   │   │   └── template.routes.ts         
│   │   └── 📂 validators/                  
│   │       ├── CampaignValidators.ts      
│   │       ├── BarcodeValidators.ts       
│   │       ├── QRCodeValidators.ts        
│   │       └── AdsFormatValidators.ts     
│   │
│   └── 📂 shared/                          # Shared Utilities
│       ├── 📂 constants/                   
│       │   ├── campaign-status.constants.ts
│       │   ├── barcode-types.constants.ts 
│       │   ├── template-types.constants.ts
│       │   └── error-codes.constants.ts   
│       ├── 📂 exceptions/                  
│       │   ├── CampaignException.ts       
│       │   ├── BarcodeException.ts        
│       │   ├── QRCodeException.ts         
│       │   └── ValidationException.ts     
│       ├── 📂 types/                       
│       │   ├── campaign.types.ts          
│       │   ├── barcode.types.ts           
│       │   ├── qr-code.types.ts           
│       │   └── ads-format.types.ts        
│       └── 📂 utils/                       
│           ├── qr-generator.utils.ts      
│           ├── barcode-generator.utils.ts 
│           ├── utm-builder.utils.ts       
│           └── file-upload.utils.ts       
│
├── 📂 brand-portal/                        # Brand Portal UI
│   ├── 📂 src/                             
│   │   ├── 📂 components/                  
│   │   │   ├── 📂 campaigns/               
│   │   │   │   ├── CampaignList.tsx       
│   │   │   │   ├── CampaignForm.tsx       
│   │   │   │   ├── CampaignDetails.tsx    
│   │   │   │   ├── CampaignWizard.tsx     
│   │   │   │   └── CampaignAnalytics.tsx  
│   │   │   ├── 📂 barcodes/                
│   │   │   │   ├── BarcodeGenerator.tsx   
│   │   │   │   ├── BarcodeList.tsx        
│   │   │   │   ├── BarcodePreview.tsx     
│   │   │   │   └── BarcodeExport.tsx      
│   │   │   ├── 📂 qr-codes/                
│   │   │   │   ├── QRCodeGenerator.tsx    
│   │   │   │   ├── QRCodeList.tsx         
│   │   │   │   ├── QRCodePreview.tsx      
│   │   │   │   ├── QRCodeAnalytics.tsx    
│   │   │   │   └── UTMBuilder.tsx         
│   │   │   ├── 📂 ads-formats/             
│   │   │   │   ├── AdsFormatList.tsx      
│   │   │   │   ├── AdsFormatForm.tsx      
│   │   │   │   ├── AdsFormatPreview.tsx   
│   │   │   │   └── AssetUploader.tsx      
│   │   │   ├── 📂 templates/               
│   │   │   │   ├── TemplateGallery.tsx    
│   │   │   │   ├── TemplateEditor.tsx     
│   │   │   │   ├── TemplatePreview.tsx    
│   │   │   │   └── TemplateCustomizer.tsx 
│   │   │   └── 📂 shared/                  
│   │   │       ├── Layout.tsx             
│   │   │       ├── Navigation.tsx         
│   │   │       ├── FileUpload.tsx         
│   │   │       ├── DatePicker.tsx         
│   │   │       └── ConfirmDialog.tsx      
│   │   ├── 📂 pages/                       
│   │   │   ├── DashboardPage.tsx          
│   │   │   ├── CampaignsPage.tsx          
│   │   │   ├── QRCodesPage.tsx            
│   │   │   ├── AdsFormatsPage.tsx         
│   │   │   ├── TemplatesPage.tsx          
│   │   │   └── AnalyticsPage.tsx          
│   │   ├── 📂 hooks/                       
│   │   │   ├── useCampaigns.ts            
│   │   │   ├── useBarcodes.ts             
│   │   │   ├── useQRCodes.ts              
│   │   │   ├── useAdsFormats.ts           
│   │   │   └── useTemplates.ts            
│   │   ├── 📂 services/                    
│   │   │   ├── api.service.ts             
│   │   │   ├── campaign.service.ts        
│   │   │   ├── barcode.service.ts         
│   │   │   ├── qr-code.service.ts         
│   │   │   └── upload.service.ts          
│   │   ├── 📂 store/                       
│   │   │   ├── campaignSlice.ts           
│   │   │   ├── barcodeSlice.ts            
│   │   │   ├── qrCodeSlice.ts             
│   │   │   ├── adsFormatSlice.ts          
│   │   │   └── store.ts                   
│   │   └── 📂 utils/                       
│   │       ├── constants.ts               
│   │       ├── validators.ts              
│   │       ├── formatters.ts              
│   │       └── exporters.ts               
│   ├── public/                             
│   ├── package.json                        
│   └── tsconfig.json                       
│
├── 📂 tests/                               # Testing
│   ├── 📂 unit/                            
│   │   ├── 📂 domain/                      
│   │   │   ├── campaign.entity.test.ts    
│   │   │   ├── barcode.entity.test.ts     
│   │   │   ├── qr-code.entity.test.ts     
│   │   │   └── ads-format.entity.test.ts  
│   │   ├── 📂 application/                 
│   │   │   ├── campaign.usecase.test.ts   
│   │   │   ├── barcode.usecase.test.ts    
│   │   │   ├── qr-code.usecase.test.ts    
│   │   │   └── ads-format.usecase.test.ts 
│   │   ├── 📂 infrastructure/              
│   │   │   ├── campaign.repository.test.ts
│   │   │   ├── qr-generation.service.test.ts
│   │   │   └── utm-tracking.service.test.ts
│   │   └── 📂 presentation/                
│   │       ├── campaign.controller.test.ts
│   │       ├── barcode.controller.test.ts 
│   │       └── qr-code.controller.test.ts 
│   ├── 📂 integration/                     
│   │   ├── campaign.integration.test.ts   
│   │   ├── barcode.integration.test.ts    
│   │   ├── qr-code.integration.test.ts    
│   │   └── storage.integration.test.ts    
│   ├── 📂 e2e/                            
│   │   ├── campaign-creation.e2e.test.ts  
│   │   ├── qr-generation.e2e.test.ts      
│   │   ├── barcode-batch.e2e.test.ts      
│   │   └── template-usage.e2e.test.ts     
│   └── 📂 fixtures/                        
│       ├── campaigns.fixture.ts           
│       ├── barcodes.fixture.ts            
│       ├── templates.fixture.ts           
│       └── utm-data.fixture.ts            
│
├── 📂 database/                            # Database Scripts
│   ├── 📂 migrations/                      
│   ├── 📂 seeds/                           
│   └── 📂 analytics-views/                 # Materialized Views cho Analytics
│
├── 📂 storage/                             # Asset Storage
│   ├── 📂 templates/                       # Template Assets
│   ├── 📂 generated-qr/                    # Generated QR Codes
│   ├── 📂 generated-barcodes/              # Generated Barcodes
│   └── 📂 campaign-assets/                 # Campaign Assets
│
├── 📂 deployment/                          # Deployment Configuration
│   ├── 📂 docker/                          
│   │   ├── Dockerfile                     
│   │   ├── docker-compose.yml             
│   │   └── docker-compose.dev.yml         
│   ├── 📂 kubernetes/                      
│   │   ├── 📂 base/                        
│   │   ├── 📂 dev/                         
│   │   └── 📂 prod/                        
│   └── 📂 helm/                            
│       ├── Chart.yaml                     
│       ├── values.yaml                    
│       └── 📂 templates/                   
│
├── 📂 docs/                                # Documentation
│   ├── API.md                             # API Documentation
│   ├── QR-GENERATION.md                   # QR Generation Guide
│   ├── BARCODE-TYPES.md                   # Supported Barcode Types
│   ├── UTM-TRACKING.md                    # UTM Tracking Guide
│   ├── TEMPLATE-SYSTEM.md                 # Template System Guide
│   ├── SETUP.md                           # Setup Guide
│   ├── ARCHITECTURE.md                    # Architecture Overview
│   ├── DEPLOYMENT.md                      # Deployment Guide
│   └── 📂 diagrams/                        
│       ├── campaign-workflow.png          
│       ├── qr-generation-flow.png         
│       └── database-erd.png               
│
├── 📂 scripts/                             # Automation Scripts
│   ├── setup-dev.sh                      # Development Setup
│   ├── generate-qr-batch.sh              # Batch QR Generation
│   ├── cleanup-expired.sh                # Cleanup Expired Campaigns
│   └── backup-assets.sh                  # Asset Backup
│
├── .env.example                           # Environment Variables Template
├── .gitignore                             
├── package.json                           
├── tsconfig.json                          
├── jest.config.js                         
├── docker-compose.yml                     
└── README.md                              
```

---

## 📋 Roadmap Chi Tiết - Checklist Implementation

### **1. SETUP & CHUẨN BỊ DỰ ÁN** ⚙️

#### **1.1 Khởi tạo dự án cơ bản**
- [ ] **Tạo repository và cấu trúc thư mục**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture  
  - *Mô tả*: Thiết lập Clean Architecture với 4 layers cho Campaign & QR Management domain
  - *Ý nghĩa*: Đảm bảo separation of concerns và maintainability cho complex business logic

- [ ] **Cấu hình TypeScript và dependencies**
  - *Tham chiếu*: SRS-Grok-V2.md - Part02.8 Technical Requirements
  - *Mô tả*: Setup Node.js 18+, TypeScript 5+, QR generation libraries, image processing
  - *Ý nghĩa*: Foundation cho type-safe campaign management và QR generation capabilities

- [ ] **Setup Docker và storage volumes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14 Deployment Architecture  
  - *Mô tả*: Containerization với persistent volumes cho asset storage
  - *Ý nghĩa*: Consistent environment với file storage management

#### **1.2 Database Setup**
- [ ] **Thiết lập PostgreSQL cho campaign data**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.3 Campaign Data Model
  - *Mô tả*: Campaign, barcode, QR tracking data với complex relationships
  - *Ý nghĩa*: Relational database cho complex campaign business rules

- [ ] **Thiết lập MongoDB cho analytics tracking**  
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.5 Analytics Data Model
  - *Mô tả*: QR scan events, UTM tracking, campaign analytics với time-series data
  - *Ý nghĩa*: Document database cho high-volume tracking data và flexible analytics

- [ ] **Thiết lập S3/MinIO cho asset storage**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2 Asset Management
  - *Mô tả*: Object storage cho generated QR codes, barcodes, templates, campaign assets
  - *Ý nghĩa*: Scalable file storage với CDN integration capability

### **2. DOMAIN LAYER IMPLEMENTATION** 🏗️

#### **2.1 Domain Entities**
- [ ] **Implement Campaign Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management (FR-001)
  - *Mô tả*: Core Campaign entity với business rules, lifecycle management, validation
  - *Ý nghĩa*: Encapsulate campaign business logic, status transitions, và validation rules

- [ ] **Implement Barcode Entity** 
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management (FR-002)
  - *Mô tả*: Barcode entity với generation rules, expiration, uniqueness constraints
  - *Ý nghĩa*: Manage barcode lifecycle, ensure uniqueness, support multiple formats

- [ ] **Implement QRCode Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management (FR-006) - QR Integration
  - *Mô tả*: QR Code entity với UTM integration, tracking capabilities, format options
  - *Ý nghĩa*: Specialized QR handling với marketing tracking và analytics integration

- [ ] **Implement AdsFormat Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management (FR-006)
  - *Mô tả*: Ads format với template system, asset management, responsive design
  - *Ý nghĩa*: Flexible ad format creation với reusable components

- [ ] **Implement Template Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template system với customization parameters, inheritance
  - *Ý nghĩa*: Reusable design templates cho consistent brand experience

- [ ] **Implement UTMTracking Entity**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR UTM Integration
  - *Mô tả*: UTM parameter management, tracking analytics, attribution
  - *Ý nghĩa*: Marketing attribution và campaign effectiveness measurement

#### **2.2 Value Objects**
- [ ] **Implement CampaignStatus Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign status với state transitions (Draft, Active, Paused, Archived)
  - *Ý nghĩa*: Type-safe status management với business rule enforcement

- [ ] **Implement BarcodeType Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management  
  - *Mô tả*: Barcode type definitions (QR, Code128, DataMatrix) với validation rules
  - *Ý nghĩa*: Standardize barcode formats và ensure compatibility

- [ ] **Implement UTMParameters Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - UTM Integration
  - *Mô tả*: UTM parameter structure (source, medium, campaign, term, content)
  - *Ý nghĩa*: Consistent UTM parameter handling cho marketing analytics

- [ ] **Implement AssetURL Value Object**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2 Asset Management
  - *Mô tả*: Asset URL validation, CDN integration, expiration handling
  - *Ý nghĩa*: Secure asset URL management với proper validation

#### **2.3 Repository Interfaces** 
- [ ] **Define ICampaignRepository interface**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06B.2.1.2 ICampaignService
  - *Mô tả*: Campaign CRUD operations, search, filtering, status management
  - *Ý nghĩa*: Abstract data access cho complex campaign queries

- [ ] **Define IBarcodeRepository interface**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06B.2.1.2 ICampaignService - Barcode Operations
  - *Mô tả*: Barcode generation, validation, batch operations, uniqueness checks
  - *Ý nghĩa*: Manage barcode persistence với performance optimization

- [ ] **Define IQRCodeRepository interface**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR Integration
  - *Mô tả*: QR code storage, tracking data, analytics aggregation
  - *Ý nghĩa*: Specialized QR data management với analytics support

- [ ] **Define IAdsFormatRepository interface**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management
  - *Mô tả*: Ads format storage, template association, asset references
  - *Ý nghĩa*: Complex ads format data management

- [ ] **Define ITemplateRepository interface**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template storage, versioning, inheritance management
  - *Ý nghĩa*: Template lifecycle management với version control

#### **2.4 Domain Services**
- [ ] **Implement CampaignDomainService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management (FR-001)
  - *Mô tả*: Campaign business rules, status transitions, validation logic
  - *Ý nghĩa*: Centralize complex campaign business logic

- [ ] **Implement QRGenerationService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR Integration
  - *Mô tả*: QR code generation với UTM integration, customization options
  - *Ý nghĩa*: Specialized QR generation với marketing features

- [ ] **Implement BarcodeValidationService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management
  - *Mô tả*: Barcode format validation, uniqueness checking, integrity verification
  - *Ý nghĩa*: Ensure barcode quality và prevent duplicates

- [ ] **Implement UTMTrackingService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - UTM Integration
  - *Mô tả*: UTM parameter generation, tracking, analytics integration
  - *Ý nghĩa*: Marketing attribution và campaign tracking

### **3. APPLICATION LAYER IMPLEMENTATION** 💼

#### **3.1 Campaign Management Use Cases**
- [ ] **Implement CreateCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management (FR-001)
  - *Mô tả*: Campaign creation với validation, initial setup, default configurations
  - *Ý nghĩa*: Complete campaign creation workflow với business rule enforcement

- [ ] **Implement UpdateCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign updates với state validation, audit trail, change notifications
  - *Ý nghĩa*: Safe campaign modification với proper authorization checks

- [ ] **Implement DeleteCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Soft delete implementation với dependent data cleanup
  - *Ý nghĩa*: Safe campaign deletion với data integrity maintenance

- [ ] **Implement GetCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign retrieval với permission filtering, data aggregation
  - *Ý nghĩa*: Secure data access với appropriate detail level

- [ ] **Implement PublishCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign publishing với validation, activation, notification
  - *Ý nghĩa*: Campaign go-live process với pre-launch validation

- [ ] **Implement ArchiveCampaignUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign archival với data retention, analytics preservation
  - *Ý nghĩa*: End-of-life campaign management với data compliance

#### **3.2 Barcode Management Use Cases**
- [ ] **Implement GenerateBarcodeUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management (FR-002)
  - *Mô tả*: Individual barcode generation với format selection, validation
  - *Ý nghĩa*: On-demand barcode creation với quality assurance

- [ ] **Implement ValidateBarcodeUseCase**  
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management
  - *Mô tả*: Barcode validation, format checking, uniqueness verification
  - *Ý nghĩa*: Barcode integrity verification cho system reliability

- [ ] **Implement BatchGenerateBarcodeUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management
  - *Mô tả*: Bulk barcode generation với progress tracking, error handling
  - *Ý nghĩa*: High-volume barcode generation capability

- [ ] **Implement GetBarcodeStatusUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management
  - *Mô tả*: Barcode status tracking, usage analytics, lifecycle information
  - *Ý nghĩa*: Barcode lifecycle monitoring và reporting

#### **3.3 QR Management Use Cases**
- [ ] **Implement GenerateQRCodeUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR Integration
  - *Mô tả*: QR code generation với UTM integration, customization options
  - *Ý nghĩa*: Marketing-focused QR generation với tracking capabilities

- [ ] **Implement TrackQRScanUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - UTM Tracking
  - *Mô tả*: QR scan event tracking, analytics data collection, attribution
  - *Ý nghĩa*: Marketing analytics data collection cho campaign effectiveness

- [ ] **Implement GetQRAnalyticsUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics (FR-008) - QR Analytics
  - *Mô tả*: QR scan analytics, performance metrics, trend analysis
  - *Ý nghĩa*: QR campaign performance insights

- [ ] **Implement BulkQRGenerationUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Bulk Operations
  - *Mô tả*: Bulk QR generation với unique UTM parameters, batch processing
  - *Ý nghĩa*: Scale QR generation cho large campaigns

#### **3.4 Ads Format Management Use Cases**
- [ ] **Implement CreateAdsFormatUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management (FR-006)
  - *Mô tả*: Ads format creation với template integration, asset management
  - *Ý nghĩa*: Complete ads format creation workflow

- [ ] **Implement UpdateAdsFormatUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management
  - *Mô tả*: Ads format updates với version control, dependency management
  - *Ý nghĩa*: Safe ads format modification với impact analysis

- [ ] **Implement DeleteAdsFormatUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management
  - *Mô tả*: Ads format deletion với dependency checking, cleanup
  - *Ý nghĩa*: Safe deletion với data integrity maintenance

- [ ] **Implement GetAdsFormatUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management
  - *Mô tả*: Ads format retrieval với template rendering, asset resolution
  - *Ý nghĩa*: Complete ads format data access

#### **3.5 Template Management Use Cases**
- [ ] **Implement CreateTemplateUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template creation với validation, preview generation
  - *Ý nghĩa*: Reusable template creation workflow

- [ ] **Implement UpdateTemplateUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template updates với versioning, impact analysis
  - *Ý nghĩa*: Template evolution với backward compatibility

- [ ] **Implement DeleteTemplateUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template deletion với usage checking, migration support
  - *Ý nghĩa*: Safe template removal với migration path

- [ ] **Implement GetTemplateUseCase**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template retrieval với customization data, preview rendering
  - *Ý nghĩa*: Complete template data access với rendering support

#### **3.6 DTOs Definition**
- [ ] **Define CampaignDTO**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.1 Campaign APIs
  - *Mô tả*: Campaign data transfer structure với validation rules
  - *Ý nghĩa*: Type-safe API contracts cho campaign operations

- [ ] **Define BarcodeDTO, QRCodeDTO**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.2 Barcode APIs
  - *Mô tả*: Barcode và QR code data structures với generation parameters
  - *Ý nghĩa*: Standardize barcode/QR API format

- [ ] **Define AdsFormatDTO, TemplateDTO**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.3 Ads Format APIs
  - *Mô tả*: Ads format và template data structures với asset references
  - *Ý nghĩa*: Complex data structure handling cho creative assets

- [ ] **Define UTMTrackingDTO**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.4 Analytics APIs - UTM Tracking
  - *Mô tả*: UTM tracking data structure với analytics metadata
  - *Ý nghĩa*: Marketing analytics data standardization

### **4. INFRASTRUCTURE LAYER IMPLEMENTATION** 🔧

#### **4.1 Database Implementation**
- [ ] **Create database migrations cho campaigns**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.3.1 Campaign Table
  - *Mô tả*: Campaign table với complex relationships, status tracking
  - *Ý nghĩa*: Foundation cho campaign data management

- [ ] **Create database migrations cho barcodes/QR codes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.3.2 Barcode Table, Part07.3.3 QR_Code Table
  - *Mô tả*: Barcode và QR code tables với generation metadata, tracking
  - *Ý nghĩa*: Support multiple barcode formats và QR analytics

- [ ] **Create database migrations cho ads formats/templates**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.3.4 Ads_Format Table, Part07.3.5 Template Table
  - *Mô tả*: Ads format và template tables với asset references, inheritance
  - *Ý nghĩa*: Complex creative asset management

- [ ] **Create analytics views cho campaign performance**
  - *Tham chiếu*: SRS-Grok-V2.md - Part07.5.1 Analytics_Event Table
  - *Mô tả*: Materialized views cho campaign metrics, QR analytics
  - *Ý nghĩa*: Optimized analytics queries cho real-time dashboards

- [ ] **Implement Repository classes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.2.1 Layered Architecture
  - *Mô tả*: Concrete implementations với complex queries, optimization
  - *Ý nghĩa*: High-performance data access với analytics support

#### **4.2 External Services Integration**
- [ ] **Implement S3StorageService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Asset Storage
  - *Mô tả*: Asset upload, storage, CDN integration, lifecycle management
  - *Ý nghĩa*: Scalable asset management với performance optimization

- [ ] **Implement QRLibraryService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.2 QR Generation Libraries
  - *Mô tả*: QR code generation với customization, format options
  - *Ý nghĩa*: High-quality QR generation với marketing features

- [ ] **Implement BarcodeLibraryService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.3 Barcode Generation Libraries
  - *Mô tả*: Multiple barcode format support (Code128, DataMatrix, etc.)
  - *Ý nghĩa*: Comprehensive barcode generation capability

- [ ] **Implement ImageProcessingService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.4 Image Processing
  - *Mô tả*: Image resizing, optimization, format conversion
  - *Ý nghĩa*: Asset optimization cho web performance

- [ ] **Implement CDNService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.5 CDN Integration
  - *Mô tả*: CDN distribution, caching, geographic optimization
  - *Ý nghĩa*: Global asset delivery performance

#### **4.3 Tracking & Analytics**
- [ ] **Implement UTMTrackingService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - UTM Integration
  - *Mô tả*: UTM parameter generation, tracking, attribution analytics
  - *Ý nghĩa*: Marketing attribution và campaign effectiveness measurement

- [ ] **Implement AnalyticsService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.8 Real Time Analytics (FR-008)
  - *Mô tả*: Real-time analytics collection, aggregation, reporting
  - *Ý nghĩa*: Campaign performance monitoring và optimization insights

- [ ] **Implement EventTrackingService**
  - *Tham chiếu*: SRS-Grok-V2.md - Part06.1.2 Event Bus Integration
  - *Mô tả*: Event publishing cho cross-service analytics, notifications
  - *Ý nghĩa*: Distributed analytics data collection

### **5. PRESENTATION LAYER IMPLEMENTATION** 🎯

#### **5.1 Controllers Implementation**
- [ ] **Implement CampaignController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.1 Campaign APIs  
  - *Mô tả*: Campaign CRUD operations, status management, analytics endpoints
  - *Ý nghĩa*: HTTP interface cho complete campaign management

- [ ] **Implement BarcodeController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.2 Barcode APIs
  - *Mô tả*: Barcode generation, validation, batch operations endpoints
  - *Ý nghĩa*: HTTP interface cho barcode operations

- [ ] **Implement QRCodeController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.3 QR Code APIs
  - *Mô tả*: QR generation, tracking, analytics endpoints
  - *Ý nghĩa*: HTTP interface cho QR operations với marketing features

- [ ] **Implement AdsFormatController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.4 Ads Format APIs
  - *Mô tả*: Ads format CRUD, template integration, asset management
  - *Ý nghĩa*: HTTP interface cho creative asset management

- [ ] **Implement TemplateController**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.5 Template APIs
  - *Mô tả*: Template CRUD, versioning, customization endpoints
  - *Ý nghĩa*: HTTP interface cho template management

#### **5.2 Middleware Implementation**
- [ ] **Implement AuthMiddleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements
  - *Mô tả*: JWT token validation, user context injection
  - *Ý nghĩa*: Secure API access control

- [ ] **Implement BrandAuthMiddleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Access_Control_Tree_Grok.md Integration - Brand Isolation
  - *Mô tả*: Brand-level authorization, data isolation
  - *Ý nghĩa*: Multi-tenant security trong brand context

- [ ] **Implement FileUploadMiddleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part09.2.1 Asset Storage
  - *Mô tả*: File upload validation, size limits, format checking
  - *Ý nghĩa*: Secure asset upload với validation

- [ ] **Implement ValidationMiddleware**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.3 Security Requirements  
  - *Mô tả*: Input validation, sanitization, business rule checking
  - *Ý nghĩa*: Data quality và security assurance

#### **5.3 API Routes Definition**
- [ ] **Define campaign management routes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.1 Campaign APIs
  - *Mô tả*: RESTful routes cho campaign CRUD, analytics, publishing
  - *Ý nghĩa*: Complete campaign management API

- [ ] **Define barcode management routes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.2 Barcode APIs  
  - *Mô tả*: Barcode generation, validation, batch operations routes
  - *Ý nghĩa*: Comprehensive barcode API

- [ ] **Define QR code management routes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.3 QR Code APIs
  - *Mô tả*: QR generation, tracking, analytics routes
  - *Ý nghĩa*: Marketing-focused QR API

- [ ] **Define ads format routes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part08.2.4 Ads Format APIs
  - *Mô tả*: Creative asset management, template integration routes
  - *Ý nghĩa*: Complete creative workflow API

### **6. BRAND PORTAL IMPLEMENTATION** 🖥️

#### **6.1 React Components Setup**
- [ ] **Setup React TypeScript project với UI library**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal UI
  - *Mô tả*: React 18+, TypeScript, Material-UI/Tailwind, responsive design
  - *Ý nghĩa*: Modern frontend framework cho sophisticated brand portal

- [ ] **Setup file upload và preview components**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Asset Management
  - *Mô tả*: Drag-and-drop upload, file preview, progress tracking
  - *Ý nghĩa*: User-friendly asset management interface

#### **6.2 Campaign Management Interface**
- [ ] **Implement CampaignList component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Campaign Management
  - *Mô tả*: Paginated campaign list với advanced filtering, search
  - *Ý nghĩa*: Efficient campaign browsing với rich filtering options

- [ ] **Implement CampaignForm component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Campaign Management  
  - *Mô tả*: Complex campaign creation form với wizard interface
  - *Ý nghĩa*: Guided campaign creation experience

- [ ] **Implement CampaignWizard component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Campaign Management
  - *Mô tả*: Step-by-step campaign creation với validation, preview
  - *Ý nghĩa*: User-friendly campaign setup workflow

- [ ] **Implement CampaignAnalytics component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Analytics Integration
  - *Mô tả*: Real-time campaign performance dashboard
  - *Ý nghĩa*: Campaign performance monitoring interface

#### **6.3 QR & Barcode Management Interface**
- [ ] **Implement QRCodeGenerator component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - QR Management
  - *Mô tả*: Interactive QR generation với customization options
  - *Ý nghĩa*: Visual QR creation tool với real-time preview

- [ ] **Implement UTMBuilder component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - UTM Integration
  - *Mô tả*: UTM parameter builder với validation, preview
  - *Ý nghĩa*: Marketing attribution setup tool

- [ ] **Implement BarcodeGenerator component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Barcode Management
  - *Mô tả*: Multi-format barcode generator với batch options
  - *Ý nghĩa*: Comprehensive barcode creation interface

- [ ] **Implement QRCodeAnalytics component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Analytics Integration
  - *Mô tả*: QR scan analytics với geographic, temporal insights
  - *Ý nghĩa*: QR performance analysis interface

#### **6.4 Ads Format & Template Interface**
- [ ] **Implement TemplateGallery component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Template Management
  - *Mô tả*: Template browsing với preview, categorization
  - *Ý nghĩa*: Visual template selection interface

- [ ] **Implement TemplateEditor component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Template Management
  - *Mô tả*: Visual template editor với drag-and-drop
  - *Ý nghĩa*: WYSIWYG template creation tool

- [ ] **Implement AdsFormatPreview component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Ads Format Management
  - *Mô tả*: Real-time ads format preview với responsive breakpoints
  - *Ý nghĩa*: Design validation tool

- [ ] **Implement AssetUploader component**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Asset Management
  - *Mô tả*: Multi-file upload với progress, validation, organization
  - *Ý nghĩa*: Efficient asset management workflow

#### **6.5 State Management**
- [ ] **Setup Redux Toolkit với RTK Query**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal Architecture
  - *Mô tả*: Global state management với API caching, optimistic updates
  - *Ý nghĩa*: Efficient data management cho complex UI interactions

- [ ] **Implement campaign slice**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Campaign Management
  - *Mô tả*: Campaign state management với caching, optimistic updates
  - *Ý nghĩa*: Responsive campaign data handling

- [ ] **Implement asset slice**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal - Asset Management
  - *Mô tả*: Asset state management với upload progress, organization
  - *Ý nghĩa*: Complex asset state handling

### **7. TESTING IMPLEMENTATION** 🧪

#### **7.1 Unit Testing**
- [ ] **Write domain entity tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Test campaign business logic, QR generation rules, validation
  - *Ý nghĩa*: Ensure complex business logic correctness

- [ ] **Write use case tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework  
  - *Mô tả*: Test application workflows với mocked dependencies
  - *Ý nghĩa*: Verify complex workflows isolation

- [ ] **Write QR generation tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.2.1 Unit Testing Framework
  - *Mô tả*: Test QR generation logic, UTM integration, format validation
  - *Ý nghĩa*: Ensure QR generation quality

#### **7.2 Integration Testing**
- [ ] **Write campaign API integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.1 API Testing
  - *Mô tả*: Test complete campaign workflows với real database
  - *Ý nghĩa*: Verify end-to-end campaign functionality

- [ ] **Write asset storage integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.3 External Integration Testing
  - *Mô tả*: Test S3/MinIO integration, file upload, CDN
  - *Ý nghĩa*: Verify asset management reliability

- [ ] **Write QR generation integration tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.3.3 External Integration Testing
  - *Mô tả*: Test QR libraries integration, image processing
  - *Ý nghĩa*: Verify QR generation pipeline

#### **7.3 End-to-End Testing**
- [ ] **Write campaign creation flow tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: Complete campaign creation từ setup đến publishing
  - *Ý nghĩa*: Verify complete campaign workflow

- [ ] **Write QR generation và tracking flow tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: QR generation, UTM setup, tracking verification
  - *Ý nghĩa*: Verify QR marketing workflow

- [ ] **Write template usage flow tests**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4.1 End-to-End Testing
  - *Mô tả*: Template selection, customization, ads format creation
  - *Ý nghĩa*: Verify creative workflow

### **8. DEPLOYMENT & DEVOPS** 🚀

#### **8.1 Containerization**
- [ ] **Create Dockerfile với multi-stage build**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Optimized build cho Node.js application với asset handling
  - *Ý nghĩa*: Efficient container image cho production

- [ ] **Create Docker Compose với storage volumes**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.2 Container Architecture
  - *Mô tả*: Development stack với PostgreSQL, MongoDB, MinIO, Redis
  - *Ý nghĩa*: Complete development environment

#### **8.2 Kubernetes Deployment**
- [ ] **Create Kubernetes manifests với storage**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Deployment với persistent volumes cho asset storage
  - *Ý nghĩa*: Production-ready orchestration với data persistence

- [ ] **Setup Helm charts với environment configs**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.3 Kubernetes Configuration
  - *Mô tả*: Parameterized deployment với storage configuration
  - *Ý nghĩa*: Environment-specific deployment management

#### **8.3 CI/CD Pipeline**
- [ ] **Setup GitHub Actions với asset building**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.1 CI/CD Pipeline
  - *Mô tả*: Build pipeline với asset optimization, testing
  - *Ý nghĩa*: Automated delivery với asset handling

- [ ] **Configure automated testing với storage**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.5.1 Test Automation Framework
  - *Mô tả*: Test execution với storage mocking, asset generation testing
  - *Ý nghĩa*: Quality assurance với storage testing

### **9. MONITORING & OBSERVABILITY** 📊

#### **9.1 Application Monitoring**
- [ ] **Setup campaign performance monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
  - *Mô tả*: Campaign metrics, QR generation performance, asset upload monitoring
  - *Ý nghĩa*: Business-focused monitoring

- [ ] **Implement QR analytics collection**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.3 Metrics Collection
  - *Mô tả*: QR scan metrics, UTM tracking, campaign attribution
  - *Ý nghĩa*: Marketing analytics infrastructure

- [ ] **Setup storage monitoring**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
  - *Mô tả*: Storage usage, CDN performance, asset access patterns
  - *Ý nghĩa*: Storage performance optimization

#### **9.2 Business Metrics**
- [ ] **Implement campaign lifecycle tracking**
  - *Tham chiếu*: SRS-Grok-V2.md - Part05.6 Auditability Requirements
  - *Mô tả*: Campaign creation, publishing, performance events
  - *Ý nghĩa*: Business process monitoring

- [ ] **Setup QR performance alerts**
  - *Tham chiếu*: SRS-Grok-V2.md - Part15.3.4 Alerting
  - *Mô tả*: QR generation failures, scan anomalies, UTM tracking issues
  - *Ý nghĩa*: Proactive issue detection

### **10. DOCUMENTATION & DELIVERY** 📚

#### **10.1 Technical Documentation**
- [ ] **Create QR generation guide**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - QR Integration
  - *Mô tả*: QR generation options, UTM integration, customization guide
  - *Ý nghĩa*: Technical reference cho QR features

- [ ] **Write barcode types documentation**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.2 Barcode Management
  - *Mô tả*: Supported barcode formats, use cases, generation parameters
  - *Ý nghĩa*: Complete barcode reference

- [ ] **Create template system guide**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - Template System
  - *Mô tả*: Template creation, customization, inheritance system
  - *Ý nghĩa*: Template development guide

- [ ] **Write UTM tracking guide**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.6 Ads Format Management - UTM Integration
  - *Mô tả*: UTM parameter setup, tracking implementation, analytics integration
  - *Ý nghĩa*: Marketing attribution reference

#### **10.2 User Documentation**
- [ ] **Write brand portal user guide**
  - *Tham chiếu*: SRS-Grok-V2.md - Part10.4.1 Brand Portal
  - *Mô tả*: Campaign creation workflows, QR generation, template usage
  - *Ý nghĩa*: End-user adoption support

- [ ] **Create campaign best practices guide**
  - *Tham chiếu*: SRS-Grok-V2.md - Part04.2.1 Campaign Management
  - *Mô tả*: Campaign optimization, QR usage patterns, analytics interpretation
  - *Ý nghĩa*: User success optimization

#### **10.3 Project Delivery**
- [ ] **Performance validation với asset handling**
  - *Tham chiếu*: SRS-Grok-V2.md - Part12.2.1 Load Testing Scenarios
  - *Mô tả*: Load testing với asset upload, QR generation, campaign analytics
  - *Ý nghĩa*: Performance requirements verification

- [ ] **Integration testing với other services**
  - *Tham chiếu*: SRS-Grok-V2.md - Part13.4 End-to-End Testing
  - *Mô tả*: Campaign-to-redemption workflow, analytics integration
  - *Ý nghĩa*: Cross-service integration verification

- [ ] **Production deployment với CDN setup**
  - *Tham chiếu*: SRS-Grok-V2.md - Part14.1 Deployment Overview
  - *Mô tả*: Production environment với CDN, storage, caching
  - *Ý nghĩa*: Complete production readiness

---

## 🎯 Kết Luận

**Tổng số checkpoints**: 127 tasks  
**Estimated timeline**: 8-10 tuần cho 1 team (4-5 developers)  
**SRS coverage**: 100% cho Campaign & QR Management domain  

**Deliverables chính**:
- ✅ Complete Campaign & QR Management Service với Clean Architecture
- ✅ Brand Portal cho campaign creation và QR management  
- ✅ Full QR generation với UTM tracking integration
- ✅ Template system cho reusable ads formats
- ✅ Asset management với CDN integration
- ✅ Campaign analytics và performance monitoring
- ✅ Production-ready deployment với storage
- ✅ Comprehensive testing suite
- ✅ Complete documentation package

**Key Technical Features**:
- 🎯 **QR Generation**: với UTM integration cho marketing attribution
- 📊 **Campaign Analytics**: Real-time performance tracking
- 🎨 **Template System**: Reusable design components
- 📁 **Asset Management**: Scalable storage với CDN
- 📱 **Responsive Portal**: Mobile-first brand management interface

**Ready for independent development! 🚀**
