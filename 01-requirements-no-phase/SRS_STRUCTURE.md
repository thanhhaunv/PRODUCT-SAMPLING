# PSP SRS Structure - Kiến Trúc Microservices 🆕

**Phiên bản**: 2.0 🆕
**Cập nhật lần cuối**: 2025-10-20 🆕
**Kiến trúc**: Microservices từ ngày đầu 🆕

---

## 🎯 Tổng Quan Cấu Trúc

Tài liệu SRS được tổ chức theo **16 Parts** chính, với tổng cộng **~320+ nodes** 🆕.

**Thay đổi chính trong v2.0**: 🆕
- ✅ Bỏ phân chia Phase 1/2/3 trong features 🆕
- ✅ Thêm sections về Service Ownership 🆕
- ✅ Thêm Microservices Architecture details 🆕
- ✅ Thêm Service Dependencies & Communication Patterns 🆕
- ✅ Thêm Ads Format Management feature 🆕

---

## 📂 Cấu Trúc Thư Mục Đầy Đủ

```markdown
PSP_SRS_V2/
│
├── Part00_Document_Information/
│   ├── 00.1_Title_Page.md
│   ├── 00.2_Version_History.md
│   ├── 00.3_Approval_Sign_Off.md
│   ├── 00.4_Document_Metadata.md
│   └── 00.5_Glossary_Of_Terms.md
│
├── Part01_Introduction/
│   ├── 01.1_Purpose_Of_Document.md
│   ├── 01.2_Project_Scope.md
│   ├── 01.3_Intended_Audience.md
│   ├── 01.4_Product_Overview.md
│   ├── 01.5_Stakeholders.md
│   ├── 01.6_Definitions_And_Acronyms.md
│   ├── 01.7_References.md
│   └── 01.8_Document_Conventions.md
│
├── Part02_System_Overview/
│   ├── 02.1_System_Context.md
│   ├── 02.2_System_Objectives.md
│   ├── 02.3_System_Constraints.md
│   ├── 02.4_Assumptions_And_Dependencies.md
│   ├── 02.5_Success_Criteria.md
│   ├── 02.6_Out_Of_Scope.md
│   ├── 02.7_Business_Requirements_Summary.md
│   ├── 02.8_Technical_Requirements_Summary.md
│   ├── 02.9_Microservices_Architecture_Overview.md 🆕
│   └── 02.10_Risk_Assessment.md
│
├── Part03_User_Personas_And_Use_Cases/
│   ├── 03.1_User_Personas_Overview.md
│   ├── 03.2_Persona_1_Platform_Admin.md
│   ├── 03.3_Persona_2_Brand_Admin.md
│   ├── 03.4_Persona_3_Brand_Staff.md
│   ├── 03.5_Persona_4_Customer_Account.md
│   ├── 03.6_Persona_5_Customer.md
│   ├── 03.7_Persona_6_POS_Staff.md
│   └── 03.8_User_Journey_Maps.md
│
├── Part04_Functional_Requirements/
│   ├── 04.1_Overview.md
│   │
│   ├── 04.2_Core_Features/ 🔄 (6 features 🆕)
│   │   ├── 04.2.1_FR-001_Campaign_Management/
│   │   │   ├── 04.2.1.1_Overview.md
│   │   │   ├── 04.2.1.2_User_Stories.md
│   │   │   ├── 04.2.1.3_Functional_Specifications.md
│   │   │   ├── 04.2.1.4_Business_Rules.md
│   │   │   ├── 04.2.1.5_Service_Ownership.md 🆕
│   │   │   └── 04.2.1.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.2_FR-002_Barcode_Management/
│   │   │   ├── 04.2.2.1_Overview.md
│   │   │   ├── 04.2.2.2_User_Stories.md
│   │   │   ├── 04.2.2.3_Functional_Specifications.md
│   │   │   ├── 04.2.2.4_Business_Rules.md
│   │   │   ├── 04.2.2.5_Service_Ownership.md 🆕
│   │   │   └── 04.2.2.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.3_FR-003_User_Authentication/
│   │   │   ├── 04.2.3.1_Overview.md
│   │   │   ├── 04.2.3.2_User_Stories.md
│   │   │   ├── 04.2.3.3_Functional_Specifications.md
│   │   │   ├── 04.2.3.4_Business_Rules.md
│   │   │   ├── 04.2.3.5_Service_Ownership.md 🆕
│   │   │   └── 04.2.3.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.4_FR-004_User_Management/
│   │   │   ├── 04.2.4.1_Overview.md
│   │   │   ├── 04.2.4.2_User_Stories.md
│   │   │   ├── 04.2.4.3_Functional_Specifications.md
│   │   │   ├── 04.2.4.4_Business_Rules.md
│   │   │   ├── 04.2.4.5_Service_Ownership.md 🆕
│   │   │   └── 04.2.4.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.5_FR-005_OTP_Verification/
│   │   │   ├── 04.2.5.1_Overview.md
│   │   │   ├── 04.2.5.2_User_Stories.md
│   │   │   ├── 04.2.5.3_Functional_Specifications.md
│   │   │   ├── 04.2.5.4_Business_Rules.md
│   │   │   ├── 04.2.5.5_Service_Ownership.md 🆕
│   │   │   └── 04.2.5.6_Acceptance_Criteria.md
│   │   │
│   │   └── 04.2.6_FR-006_Ads_Format_Management/ 🆕
│   │       ├── 04.2.6.1_Overview.md 🆕
│   │       ├── 04.2.6.2_User_Stories.md 🆕
│   │       ├── 04.2.6.3_Template_Management.md 🆕
│   │       ├── 04.2.6.4_Asset_Management.md 🆕
│   │       ├── 04.2.6.5_Service_Ownership.md 🆕
│   │       └── 04.2.6.6_Acceptance_Criteria.md 🆕
│   │
│   ├── 04.3_Operational_Features/ 🔄 (4 features)
│   │   ├── 04.3.1_FR-007_Barcode_Redemption/
│   │   │   ├── 04.3.1.1_Overview.md
│   │   │   ├── 04.3.1.2_User_Stories.md
│   │   │   ├── 04.3.1.3_Online_Redemption.md
│   │   │   ├── 04.3.1.4_Offline_Redemption.md
│   │   │   ├── 04.3.1.5_Service_Ownership.md 🆕
│   │   │   └── 04.3.1.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.3.2_FR-008_Real_Time_Analytics/
│   │   │   ├── 04.3.2.1_Overview.md
│   │   │   ├── 04.3.2.2_User_Stories.md
│   │   │   ├── 04.3.2.3_Dashboard_Metrics.md
│   │   │   ├── 04.3.2.4_Advanced_Analytics.md 🔄
│   │   │   ├── 04.3.2.5_Service_Ownership.md 🆕
│   │   │   └── 04.3.2.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.3.3_FR-009_CRM_Integration/
│   │   │   ├── 04.3.3.1_Overview.md
│   │   │   ├── 04.3.3.2_User_Stories.md
│   │   │   ├── 04.3.3.3_HubSpot_Integration.md
│   │   │   ├── 04.3.3.4_Salesforce_Integration.md
│   │   │   ├── 04.3.3.5_Service_Ownership.md 🆕
│   │   │   └── 04.3.3.6_Acceptance_Criteria.md
│   │   │
│   │   └── 04.3.4_FR-010_Notification_System/
│   │       ├── 04.3.4.1_Overview.md
│   │       ├── 04.3.4.2_User_Stories.md
│   │       ├── 04.3.4.3_SMS_Notifications.md
│   │       ├── 04.3.4.4_Email_Notifications.md
│   │       ├── 04.3.4.5_Push_Notifications.md 🆕
│   │       ├── 04.3.4.6_Service_Ownership.md 🆕
│   │       └── 04.3.4.7_Acceptance_Criteria.md
│   │
│   ├── 04.4_Advanced_Features/ 🆕 (1 feature 🆕)
│   │   └── 04.4.1_FR-011_Fraud_Detection/ 🆕
│   │       ├── 04.4.1.1_Overview.md 🆕
│   │       ├── 04.4.1.2_User_Stories.md 🆕
│   │       ├── 04.4.1.3_Fraud_Rules_Engine.md 🆕
│   │       ├── 04.4.1.4_ML_Based_Scoring.md 🆕
│   │       ├── 04.4.1.5_Device_Fingerprinting.md 🆕
│   │       ├── 04.4.1.6_Service_Ownership.md 🆕
│   │       └── 04.4.1.7_Acceptance_Criteria.md 🆕
│   │
│   ├── 04.5_Intelligence_Features/ 🆕 (3 features 🆕)
│   │   ├── 04.5.1_FR-012_AB_Testing/ 🆕
│   │   │   ├── 04.5.1.1_Overview.md 🆕
│   │   │   ├── 04.5.1.2_User_Stories.md 🆕
│   │   │   ├── 04.5.1.3_Experiment_Management.md 🆕
│   │   │   ├── 04.5.1.4_Statistical_Analysis.md 🆕
│   │   │   ├── 04.5.1.5_Service_Ownership.md 🆕
│   │   │   └── 04.5.1.6_Acceptance_Criteria.md 🆕
│   │   │
│   │   ├── 04.5.2_FR-013_Recommendation_Engine/ 🆕
│   │   │   ├── 04.5.2.1_Overview.md 🆕
│   │   │   ├── 04.5.2.2_User_Stories.md 🆕
│   │   │   ├── 04.5.2.3_Collaborative_Filtering.md 🆕
│   │   │   ├── 04.5.2.4_ML_Models.md 🆕
│   │   │   ├── 04.5.2.5_Service_Ownership.md 🆕
│   │   │   └── 04.5.2.6_Acceptance_Criteria.md 🆕
│   │   │
│   │   └── 04.5.3_FR-014_Advanced_Reporting/ 🆕
│   │       ├── 04.5.3.1_Overview.md 🆕
│   │       ├── 04.5.3.2_User_Stories.md 🆕
│   │       ├── 04.5.3.3_Custom_Report_Builder.md 🆕
│   │       ├── 04.5.3.4_Scheduled_Reports.md 🆕
│   │       ├── 04.5.3.5_Service_Ownership.md 🆕
│   │       └── 04.5.3.6_Acceptance_Criteria.md 🆕
│   │
│   └── 04.6_Feature_Traceability_Matrix.md 🔄
│
├── Part05_Non_Functional_Requirements/
│   ├── 05.1_Overview.md
│   ├── 05.2_NFR-001_Performance.md
│   ├── 05.3_NFR-002_Scalability.md 🔄
│   ├── 05.4_NFR-003_Security.md 🔄
│   ├── 05.5_NFR-004_Reliability.md 🔄
│   ├── 05.6_NFR-005_Maintainability.md
│   ├── 05.7_NFR-006_Auditability.md
│   ├── 05.8_NFR-007_Usability.md
│   ├── 05.9_NFR-008_Compliance.md
│   └── 05.10_NFR_Priorities_Matrix.md
│
├── Part06_System_Architecture/
│   ├── 06.1_Architecture_Overview.md 🔄
│   │
│   ├── 06.2_Logical_Architecture/
│   │   ├── 06.2.1_Layered_Architecture.md
│   │   ├── 06.2.2_Microservices_Design.md 🔄
│   │   ├── 06.2.3_Service_Boundaries.md 🆕
│   │   ├── 06.2.4_Service_Dependencies.md 🆕
│   │   └── 06.2.5_Service_Catalog.md 🆕
│   │
│   ├── 06.3_Physical_Architecture/
│   │   ├── 06.3.1_Deployment_Diagram.md 🔄
│   │   ├── 06.3.2_Infrastructure_Components.md 🔄
│   │   ├── 06.3.3_Network_Topology.md
│   │   ├── 06.3.4_Kubernetes_Architecture.md 🆕
│   │   └── 06.3.5_Service_Mesh_Design.md 🆕
│   │
│   ├── 06.4_Technology_Stack/
│   │   ├── 06.4.1_Frontend_Technologies.md
│   │   ├── 06.4.2_Backend_Technologies.md
│   │   ├── 06.4.3_Database_Technologies.md 🔄
│   │   ├── 06.4.4_Integration_Technologies.md
│   │   ├── 06.4.5_DevOps_Tools.md 🔄
│   │   └── 06.4.6_Observability_Stack.md 🆕
│   │
│   ├── 06.5_Communication_Patterns/
│   │   ├── 06.5.1_Synchronous_Communication.md 🔄
│   │   ├── 06.5.2_Asynchronous_Communication.md 🔄
│   │   ├── 06.5.3_Event_Driven_Architecture.md 🔄
│   │   ├── 06.5.4_Message_Queue_Design.md
│   │   └── 06.5.5_Service_Discovery.md 🆕
│   │
│   └── 06.6_Scalability_Patterns/
│       ├── 06.6.1_Horizontal_Scaling.md 🔄
│       ├── 06.6.2_Caching_Strategy.md
│       ├── 06.6.3_Load_Balancing.md 🔄
│       └── 06.6.4_Database_Partitioning.md 🔄
│
├── Part06B_Design_Patterns/
│   ├── 06B.1_Design_Patterns_Catalog/
│   │   ├── 06B.1.1_Creational_Patterns/
│   │   │   ├── 06B.1.1.1_Factory_Pattern.md
│   │   │   ├── 06B.1.1.2_Builder_Pattern.md
│   │   │   ├── 06B.1.1.3_Singleton_Pattern.md
│   │   │   └── 06B.1.1.4_Prototype_Pattern.md
│   │   │
│   │   ├── 06B.1.2_Structural_Patterns/
│   │   │   ├── 06B.1.2.1_Adapter_Pattern.md
│   │   │   ├── 06B.1.2.2_Facade_Pattern.md
│   │   │   ├── 06B.1.2.3_Proxy_Pattern.md
│   │   │   └── 06B.1.2.4_Decorator_Pattern.md
│   │   │
│   │   └── 06B.1.3_Behavioral_Patterns/
│   │       ├── 06B.1.3.1_Strategy_Pattern.md
│   │       ├── 06B.1.3.2_Observer_Pattern.md
│   │       ├── 06B.1.3.3_Command_Pattern.md
│   │       └── 06B.1.3.4_Chain_Of_Responsibility_Pattern.md
│   │
│   ├── 06B.2_Interface_Definitions/
│   │   ├── 06B.2.1_Service_Interfaces/ 🔄
│   │   │   ├── 06B.2.1.1_ICampaignService.md
│   │   │   ├── 06B.2.1.2_IBarcodeService.md
│   │   │   ├── 06B.2.1.3_IAuthService.md
│   │   │   ├── 06B.2.1.4_IUserService.md
│   │   │   ├── 06B.2.1.5_IAnalyticsService.md
│   │   │   ├── 06B.2.1.6_INotificationService.md
│   │   │   ├── 06B.2.1.7_IFraudDetectionService.md 🆕
│   │   │   ├── 06B.2.1.8_IABTestingService.md 🆕
│   │   │   └── 06B.2.1.9_IRecommendationService.md 🆕
│   │   │
│   │   ├── 06B.2.2_Repository_Interfaces/ 🔄
│   │   │   ├── 06B.2.2.1_IRepository_Base.md
│   │   │   ├── 06B.2.2.2_ICampaignRepository.md
│   │   │   ├── 06B.2.2.3_IUserRepository.md
│   │   │   ├── 06B.2.2.4_IBarcodeRepository.md
│   │   │   ├── 06B.2.2.5_IFraudScoreRepository.md 🆕
│   │   │   ├── 06B.2.2.6_IUserPreferenceRepository.md 🆕
│   │   │   ├── 06B.2.2.7_IExperimentRepository.md 🆕
│   │   │   └── 06B.2.2.8_IRecommendationRepository.md 🆕
│   │   │
│   │   └── 06B.2.3_External_Integration_Interfaces/
│   │       ├── 06B.2.3.1_ICRMConnector.md
│   │       ├── 06B.2.3.2_ISMSProvider.md
│   │       ├── 06B.2.3.3_IEmailProvider.md
│   │       └── 06B.2.3.4_IPOSConnector.md
│   │
│   ├── 06B.3_Abstract_Base_Classes/
│   │   ├── 06B.3.1_BaseService.md
│   │   ├── 06B.3.2_BaseRepository.md
│   │   ├── 06B.3.3_BaseController.md
│   │   └── 06B.3.4_BaseValidator.md
│   │
│   ├── 06B.4_Dependency_Injection/
│   │   ├── 06B.4.1_DI_Container_Setup.md
│   │   ├── 06B.4.2_Service_Registration.md
│   │   ├── 06B.4.3_Lifetime_Management.md
│   │   └── 06B.4.4_Configuration_Pattern.md
│   │
│   ├── 06B.5_Module_Independence/
│   │   ├── 06B.5.1_Module_Boundaries.md
│   │   ├── 06B.5.2_Inter_Module_Communication.md 🔄
│   │   ├── 06B.5.3_Event_Bus_Pattern.md
│   │   ├── 06B.5.4_API_Contracts.md
│   │   └── 06B.5.5_Versioning_Strategy.md
│   │
│   ├── 06B.6_Code_Organization/
│   │   ├── 06B.6.1_Folder_Structure.md 🔄
│   │   ├── 06B.6.2_Naming_Conventions.md
│   │   ├── 06B.6.3_File_Organization.md
│   │   └── 06B.6.4_Package_Structure.md 🔄
│   │
│   └── 06B.7_Documentation_Standards/
│       ├── 06B.7.1_Code_Comments.md
│       ├── 06B.7.2_API_Documentation.md
│       ├── 06B.7.3_Architecture_Decision_Records.md
│       └── 06B.7.4_README_Templates.md
│
├── Part07_Database_Design/
│   ├── 07.1_Data_Model_Overview.md 🔄
│   ├── 07.2_Entity_Relationship_Diagram.md 🔄
│   │
│   ├── 07.3_Table_Schemas/
│   │   │
│   │   ├── 07.3.1_Campaign_Management_Service_Tables/ 🆕
│   │   │   ├── 07.3.1.1_Brands_Table.md 🆕
│   │   │   ├── 07.3.1.2_Campaigns_Table.md
│   │   │   ├── 07.3.1.3_Barcode_Pools_Table.md 🆕
│   │   │   ├── 07.3.1.4_Barcodes_Table.md
│   │   │   └── 07.3.1.5_Ads_Formats_Table.md 🆕
│   │   │
│   │   ├── 07.3.2_Identity_Service_Tables/ 🆕
│   │   │   ├── 07.3.2.1_Users_Table.md
│   │   │   ├── 07.3.2.2_User_Profiles_Table.md 🆕
│   │   │   ├── 07.3.2.3_User_Preferences_Table.md 🆕
│   │   │   ├── 07.3.2.4_Consent_History_Table.md 🆕
│   │   │   ├── 07.3.2.5_Sessions_Table.md
│   │   │   ├── 07.3.2.6_Roles_Table.md 🆕
│   │   │   └── 07.3.2.7_User_Roles_Table.md 🆕
│   │   │
│   │   ├── 07.3.3_Redemption_Service_Tables/ 🆕
│   │   │   ├── 07.3.3.1_Redemptions_Table.md
│   │   │   └── 07.3.3.2_Locations_Table.md 🆕
│   │   │
│   │   ├── 07.3.4_Fraud_Service_Tables/ 🆕
│   │   │   ├── 07.3.4.1_Fraud_Scores_Table.md 🆕
│   │   │   ├── 07.3.4.2_Device_Fingerprints_Table.md 🆕
│   │   │   └── 07.3.4.3_Fraud_Rules_Table.md 🆕
│   │   │
│   │   ├── 07.3.5_Intelligence_Service_Tables/ 🆕
│   │   │   ├── 07.3.5.1_Experiments_Table.md 🆕
│   │   │   ├── 07.3.5.2_Experiment_Variants_Table.md 🆕
│   │   │   └── 07.3.5.3_Experiment_Assignments_Table.md 🆕
│   │   │
│   │   ├── 07.3.6_Analytics_Service_Collections/ 🆕 (MongoDB)
│   │   │   ├── 07.3.6.1_Events_Collection.md 🆕
│   │   │   ├── 07.3.6.2_User_Journey_Collection.md 🆕
│   │   │   ├── 07.3.6.3_Cohorts_Collection.md 🆕
│   │   │   ├── 07.3.6.4_Aggregations_Collection.md 🆕
│   │   │   └── 07.3.6.5_Recommendations_Collection.md 🆕 (Intelligence Service shared)
│   │   │
│   │   └── 07.3.7_Shared_Tables/ 🆕
│   │       └── 07.3.7.1_Audit_Logs_Table.md
│   │
│   ├── 07.4_Indexes_And_Constraints.md 🔄
│   ├── 07.5_Data_Relationships.md 🔄
│   ├── 07.6_Migration_Strategy.md 🔄
│   ├── 07.7_Data_Archival_Policy.md
│   └── 07.8_Database_Per_Service_Strategy.md 🆕
│
├── Part08_API_Design/
│   ├── 08.1_API_Overview.md 🔄
│   │
│   ├── 08.2_REST_API_Endpoints/
│   │   │
│   │   ├── 08.2.1_Campaign_Management_Service_APIs/ 🔄
│   │   │   ├── 08.2.1.1_Campaign_APIs.md
│   │   │   ├── 08.2.1.2_Barcode_APIs.md
│   │   │   └── 08.2.1.3_Ads_Format_APIs.md 🆕
│   │   │
│   │   ├── 08.2.2_Identity_Service_APIs/ 🔄
│   │   │   ├── 08.2.2.1_Authentication_APIs.md
│   │   │   ├── 08.2.2.2_User_APIs.md
│   │   │   ├── 08.2.2.3_Consent_APIs.md 🆕
│   │   │   └── 08.2.2.4_Portal_APIs.md 🆕
│   │   │
│   │   ├── 08.2.3_Redemption_Service_APIs/
│   │   │   ├── 08.2.3.1_Redemption_APIs.md
│   │   │   └── 08.2.3.2_Offline_Sync_APIs.md
│   │   │
│   │   ├── 08.2.4_Analytics_Service_APIs/ 🔄
│   │   │   ├── 08.2.4.1_Dashboard_APIs.md
│   │   │   ├── 08.2.4.2_Funnel_Metrics_APIs.md
│   │   │   ├── 08.2.4.3_Cohort_Analysis_APIs.md 🆕
│   │   │   └── 08.2.4.4_Custom_Reports_APIs.md 🆕
│   │   │
│   │   ├── 08.2.5_Notification_Service_APIs/
│   │   │   ├── 08.2.5.1_OTP_APIs.md
│   │   │   ├── 08.2.5.2_SMS_APIs.md
│   │   │   ├── 08.2.5.3_Email_APIs.md
│   │   │   ├── 08.2.5.4_Push_Notification_APIs.md 🆕
│   │   │   └── 08.2.5.5_CRM_Sync_APIs.md
│   │   │
│   │   ├── 08.2.6_Fraud_Service_APIs/ 🆕
│   │   │   ├── 08.2.6.1_Fraud_Check_APIs.md 🆕
│   │   │   ├── 08.2.6.2_Fraud_Rules_APIs.md 🆕
│   │   │   ├── 08.2.6.3_Device_Tracking_APIs.md 🆕
│   │   │   └── 08.2.6.4_Fraud_Alerts_APIs.md 🆕
│   │   │
│   │   └── 08.2.7_Intelligence_Service_APIs/ 🆕
│   │       ├── 08.2.7.1_AB_Testing_APIs.md 🆕
│   │       ├── 08.2.7.2_Recommendation_APIs.md 🆕
│   │       └── 08.2.7.3_ML_Model_APIs.md 🆕
│   │
│   ├── 08.3_Webhook_Endpoints/
│   │   ├── 08.3.1_CRM_Webhooks.md
│   │   ├── 08.3.2_SMS_Delivery_Webhooks.md
│   │   └── 08.3.3_Email_Delivery_Webhooks.md
│   │
│   ├── 08.4_API_Gateway_Configuration/ 🆕
│   │   ├── 08.4.1_Routing_Rules.md 🆕
│   │   ├── 08.4.2_Rate_Limiting.md 🔄
│   │   ├── 08.4.3_Authentication.md 🔄
│   │   └── 08.4.4_Load_Balancing.md 🆕
│   │
│   ├── 08.5_Service_To_Service_APIs/ 🆕
│   │   ├── 08.5.1_Internal_API_Contracts.md 🆕
│   │   ├── 08.5.2_mTLS_Configuration.md 🆕
│   │   └── 08.5.3_Circuit_Breaker_Pattern.md 🆕
│   │
│   ├── 08.6_Error_Handling/
│   │   ├── 08.6.1_Error_Response_Format.md
│   │   ├── 08.6.2_HTTP_Status_Codes.md
│   │   └── 08.6.3_Error_Code_Catalog.md
│   │
│   ├── 08.7_API_Versioning/
│   │   ├── 08.7.1_Versioning_Strategy.md
│   │   └── 08.7.2_Deprecation_Policy.md
│   │
│   └── 08.8_OpenAPI_Specification/ 🔄
│       ├── 08.8.1_OpenAPI_Schema_Per_Service.md 🆕
│       └── 08.8.2_Swagger_Documentation.md
│
├── Part09_Use_Cases/
│   ├── 09.1_Use_Case_Overview.md 🔄
│   │
│   ├── 09.2_Core_Use_Cases/ 🔄
│   │   ├── 09.2.1_UC-001_Create_Campaign/
│   │   │   ├── 09.2.1.1_Basic_Flow.md
│   │   │   ├── 09.2.1.2_Alternative_Flows.md
│   │   │   ├── 09.2.1.3_Exception_Flows.md
│   │   │   └── 09.2.1.4_Sequence_Diagram.md 🔄 (cross-service)
│   │   │
│   │   ├── 09.2.2_UC-002_Import_Barcodes/
│   │   │   ├── 09.2.2.1_Basic_Flow.md
│   │   │   ├── 09.2.2.2_Alternative_Flows.md
│   │   │   ├── 09.2.2.3_Exception_Flows.md
│   │   │   └── 09.2.2.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.3_UC-003_User_Registration/
│   │   │   ├── 09.2.3.1_Basic_Flow.md
│   │   │   ├── 09.2.3.2_Alternative_Flows.md
│   │   │   ├── 09.2.3.3_Exception_Flows.md
│   │   │   └── 09.2.3.4_Sequence_Diagram.md 🔄 (cross-service)
│   │   │
│   │   ├── 09.2.4_UC-004_Verify_OTP/
│   │   │   ├── 09.2.4.1_Basic_Flow.md
│   │   │   ├── 09.2.4.2_Alternative_Flows.md
│   │   │   ├── 09.2.4.3_Exception_Flows.md
│   │   │   └── 09.2.4.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.5_UC-005_Issue_Barcode/
│   │   │   ├── 09.2.5.1_Basic_Flow.md
│   │   │   ├── 09.2.5.2_Alternative_Flows.md
│   │   │   ├── 09.2.5.3_Exception_Flows.md
│   │   │   └── 09.2.5.4_Sequence_Diagram.md 🔄 (cross-service)
│   │   │
│   │   ├── 09.2.6_UC-006_Redeem_Barcode/
│   │   │   ├── 09.2.6.1_Basic_Flow.md
│   │   │   ├── 09.2.6.2_Alternative_Flows.md
│   │   │   ├── 09.2.6.3_Exception_Flows.md
│   │   │   └── 09.2.6.4_Sequence_Diagram.md 🔄 (cross-service)
│   │   │
│   │   ├── 09.2.7_UC-007_View_Analytics/
│   │   │   ├── 09.2.7.1_Basic_Flow.md
│   │   │   ├── 09.2.7.2_Alternative_Flows.md
│   │   │   ├── 09.2.7.3_Exception_Flows.md
│   │   │   └── 09.2.7.4_Sequence_Diagram.md
│   │   │
│   │   └── 09.2.8_UC-008_Sync_To_CRM/
│   │       ├── 09.2.8.1_Basic_Flow.md
│   │       ├── 09.2.8.2_Alternative_Flows.md
│   │       ├── 09.2.8.3_Exception_Flows.md
│   │       └── 09.2.8.4_Sequence_Diagram.md
│   │
│   ├── 09.3_Advanced_Use_Cases/ 🆕
│   │   ├── 09.3.1_UC-009_Detect_Fraud/ 🆕
│   │   │   ├── 09.3.1.1_Basic_Flow.md 🆕
│   │   │   ├── 09.3.1.2_Alternative_Flows.md 🆕
│   │   │   ├── 09.3.1.3_Exception_Flows.md 🆕
│   │   │   └── 09.3.1.4_Sequence_Diagram.md 🆕
│   │   │
│   │   ├── 09.3.2_UC-010_Manage_Consent/ 🆕
│   │   │   ├── 09.3.2.1_Basic_Flow.md 🆕
│   │   │   ├── 09.3.2.2_Alternative_Flows.md 🆕
│   │   │   ├── 09.3.2.3_Exception_Flows.md 🆕
│   │   │   └── 09.3.2.4_Sequence_Diagram.md 🆕
│   │   │
│   │   └── 09.3.3_UC-011_Analyze_Cohorts/ 🆕
│   │       ├── 09.3.3.1_Basic_Flow.md 🆕
│   │       ├── 09.3.3.2_Alternative_Flows.md 🆕
│   │       ├── 09.3.3.3_Exception_Flows.md 🆕
│   │       └── 09.3.3.4_Sequence_Diagram.md 🆕
│   │
│   ├── 09.4_Intelligence_Use_Cases/ 🆕
│   │   ├── 09.4.1_UC-012_Run_AB_Test/ 🆕
│   │   │   ├── 09.4.1.1_Basic_Flow.md 🆕
│   │   │   ├── 09.4.1.2_Alternative_Flows.md 🆕
│   │   │   ├── 09.4.1.3_Exception_Flows.md 🆕
│   │   │   └── 09.4.1.4_Sequence_Diagram.md 🆕
│   │   │
│   │   ├── 09.4.2_UC-013_Generate_Recommendations/ 🆕
│   │   │   ├── 09.4.2.1_Basic_Flow.md 🆕
│   │   │   ├── 09.4.2.2_Alternative_Flows.md 🆕
│   │   │   ├── 09.4.2.3_Exception_Flows.md 🆕
│   │   │   └── 09.4.2.4_Sequence_Diagram.md 🆕
│   │   │
│   │   └── 09.4.3_UC-014_Create_Custom_Report/ 🆕
│   │       ├── 09.4.3.1_Basic_Flow.md 🆕
│   │       ├── 09.4.3.2_Alternative_Flows.md 🆕
│   │       ├── 09.4.3.3_Exception_Flows.md 🆕
│   │       └── 09.4.3.4_Sequence_Diagram.md 🆕
│   │
│   └── 09.5_Use_Case_Traceability_Matrix.md 🔄
│
├── Part10_UI_UX_Design/
│   ├── 10.1_Design_System/
│   │   ├── 10.1.1_Color_Palette.md
│   │   ├── 10.1.2_Typography.md
│   │   ├── 10.1.3_Spacing_Grid.md
│   │   ├── 10.1.4_Icons_And_Imagery.md
│   │   └── 10.1.5_Design_Tokens.md
│   │
│   ├── 10.2_Admin_Interface/ 🔄
│   │   ├── 10.2.1_Dashboard/
│   │   │   ├── 10.2.1.1_Wireframe.md
│   │   │   ├── 10.2.1.2_Component_Specs.md
│   │   │   └── 10.2.1.3_Interactions.md
│   │   │
│   │   ├── 10.2.2_Campaign_Management/
│   │   │   ├── 10.2.2.1_Campaign_List.md
│   │   │   ├── 10.2.2.2_Create_Campaign.md
│   │   │   ├── 10.2.2.3_Edit_Campaign.md
│   │   │   ├── 10.2.2.4_Campaign_Details.md
│   │   │   └── 10.2.2.5_Ads_Format_Manager.md 🆕
│   │   │
│   │   ├── 10.2.3_Barcode_Management/
│   │   │   ├── 10.2.3.1_Barcode_Pool_List.md
│   │   │   ├── 10.2.3.2_Import_Barcodes.md
│   │   │   ├── 10.2.3.3_Generate_Barcodes.md
│   │   │   └── 10.2.3.4_Barcode_Status.md
│   │   │
│   │   ├── 10.2.4_User_Management/
│   │   │   ├── 10.2.4.1_User_List.md
│   │   │   ├── 10.2.4.2_Create_User.md
│   │   │   ├── 10.2.4.3_Edit_User.md
│   │   │   └── 10.2.4.4_Role_Assignment.md
│   │   │
│   │   ├── 10.2.5_Analytics_Dashboard/ 🔄
│   │   │   ├── 10.2.5.1_Overview_Metrics.md
│   │   │   ├── 10.2.5.2_Funnel_Analysis.md
│   │   │   ├── 10.2.5.3_Campaign_Performance.md
│   │   │   ├── 10.2.5.4_Cohort_Analysis.md 🆕
│   │   │   └── 10.2.5.5_Export_Reports.md
│   │   │
│   │   ├── 10.2.6_Fraud_Detection_Dashboard/ 🆕
│   │   │   ├── 10.2.6.1_Fraud_Alerts.md 🆕
│   │   │   ├── 10.2.6.2_Suspicious_Users.md 🆕
│   │   │   ├── 10.2.6.3_Fraud_Rules_Config.md 🆕
│   │   │   └── 10.2.6.4_Fraud_Analytics.md 🆕
│   │   │
│   │   ├── 10.2.7_AB_Testing_Dashboard/ 🆕
│   │   │   ├── 10.2.7.1_Experiment_List.md 🆕
│   │   │   ├── 10.2.7.2_Create_Experiment.md 🆕
│   │   │   ├── 10.2.7.3_Experiment_Results.md 🆕
│   │   │   └── 10.2.7.4_Statistical_Analysis.md 🆕
│   │   │
│   │   └── 10.2.8_Custom_Reports_Builder/ 🆕
│   │       ├── 10.2.8.1_Report_Designer.md 🆕
│   │       ├── 10.2.8.2_Data_Source_Selection.md 🆕
│   │       ├── 10.2.8.3_Schedule_Reports.md 🆕
│   │       └── 10.2.8.4_Report_Gallery.md 🆕
│   │
│   ├── 10.3_Landing_Pages/
│   │   ├── 10.3.1_Campaign_Landing_Page.md
│   │   ├── 10.3.2_Registration_Form.md
│   │   ├── 10.3.3_OTP_Verification.md
│   │   ├── 10.3.4_Success_Page.md
│   │   └── 10.3.5_Error_Pages.md
│   │
│   ├── 10.4_User_Registration_Flow/
│   │   ├── 10.4.1_Multi_Step_Form.md
│   │   ├── 10.4.2_Form_Validation.md
│   │   ├── 10.4.3_Progress_Indicator.md
│   │   └── 10.4.4_Success_Feedback.md
│   │
│   ├── 10.5_User_Portal/ 🆕
│   │   ├── 10.5.1_Portal_Dashboard/ 🆕
│   │   │   ├── 10.5.1.1_Wireframe.md 🆕
│   │   │   ├── 10.5.1.2_Component_Specs.md 🆕
│   │   │   └── 10.5.1.3_Interactions.md 🆕
│   │   │
│   │   ├── 10.5.2_My_Barcodes/ 🆕
│   │   │   ├── 10.5.2.1_Barcode_List.md 🆕
│   │   │   ├── 10.5.2.2_Barcode_Details.md 🆕
│   │   │   └── 10.5.2.3_Download_Barcode.md 🆕
│   │   │
│   │   ├── 10.5.3_Consent_Management/ 🆕
│   │   │   ├── 10.5.3.1_Consent_Settings.md 🆕
│   │   │   ├── 10.5.3.2_Consent_History.md 🆕
│   │   │   └── 10.5.3.3_Data_Download.md 🆕
│   │   │
│   │   ├── 10.5.4_Profile_Settings/ 🆕
│   │   │   ├── 10.5.4.1_Edit_Profile.md 🆕
│   │   │   ├── 10.5.4.2_Change_Password.md 🆕
│   │   │   └── 10.5.4.3_Delete_Account.md 🆕
│   │   │
│   │   └── 10.5.5_PWA_Features/ 🆕
│   │       ├── 10.5.5.1_Offline_Mode.md 🆕
│   │       ├── 10.5.5.2_Push_Notifications.md 🆕
│   │       ├── 10.5.5.3_Add_To_Home_Screen.md 🆕
│   │       └── 10.5.5.4_Service_Worker.md 🆕
│   │
│   ├── 10.6_Mobile_Responsive_Design/
│   │   ├── 10.6.1_Breakpoints.md
│   │   ├── 10.6.2_Mobile_Navigation.md
│   │   ├── 10.6.3_Touch_Interactions.md
│   │   └── 10.6.4_Responsive_Components.md
│   │
│   ├── 10.7_Accessibility_Guidelines/
│   │   ├── 10.7.1_WCAG_2.1_Compliance.md
│   │   ├── 10.7.2_Keyboard_Navigation.md
│   │   ├── 10.7.3_Screen_Reader_Support.md
│   │   └── 10.7.4_Color_Contrast.md
│   │
│   └── 10.8_Component_Library/
│       ├── 10.8.1_Buttons.md
│       ├── 10.8.2_Forms.md
│       ├── 10.8.3_Tables.md
│       ├── 10.8.4_Charts.md
│       ├── 10.8.5_Modals.md
│       └── 10.8.6_Navigation.md
│
├── Part11_Security_And_Compliance/
│   ├── 11.1_Security_Overview.md
│   ├── 11.2_Authentication_And_Authorization/
│   │   ├── 11.2.1_JWT_Token_Management.md
│   │   ├── 11.2.2_Role_Based_Access_Control.md
│   │   ├── 11.2.3_Session_Management.md
│   │   ├── 11.2.4_Password_Policy.md
│   │   └── 11.2.5_Service_To_Service_Auth.md 🆕 (mTLS)
│   │
│   ├── 11.3_Data_Protection/
│   │   ├── 11.3.1_Encryption_At_Rest.md
│   │   ├── 11.3.2_Encryption_In_Transit.md
│   │   ├── 11.3.3_PII_Protection.md
│   │   └── 11.3.4_Data_Masking.md
│   │
│   ├── 11.4_API_Security/
│   │   ├── 11.4.1_API_Authentication.md
│   │   ├── 11.4.2_Rate_Limiting.md
│   │   ├── 11.4.3_Input_Validation.md
│   │   ├── 11.4.4_CORS_Policy.md
│   │   └── 11.4.5_API_Gateway_Security.md 🆕
│   │
│   ├── 11.5_Compliance/
│   │   ├── 11.5.1_GDPR_Compliance.md
│   │   ├── 11.5.2_PDPA_Compliance.md
│   │   ├── 11.5.3_Data_Retention_Policy.md
│   │   └── 11.5.4_Audit_Trail.md
│   │
│   └── 11.6_Security_Testing/
│       ├── 11.6.1_Penetration_Testing.md
│       ├── 11.6.2_Vulnerability_Scanning.md
│       └── 11.6.3_Security_Code_Review.md
│
├── Part12_Performance_Testing/
│   ├── 12.1_Performance_Testing_Overview.md
│   ├── 12.2_Load_Testing/
│   │   ├── 12.2.1_Test_Scenarios.md 🔄
│   │   ├── 12.2.2_Load_Profiles.md 🔄
│   │   ├── 12.2.3_Performance_Benchmarks.md 🔄
│   │   └── 12.2.4_Service_Level_Testing.md 🆕
│   │
│   ├── 12.3_Stress_Testing/
│   │   ├── 12.3.1_Test_Scenarios.md
│   │   ├── 12.3.2_Failure_Points.md 🔄
│   │   └── 12.3.3_Service_Degradation_Testing.md 🆕
│   │
│   ├── 12.4_Scalability_Testing/
│   │   ├── 12.4.1_Horizontal_Scaling.md 🔄
│   │   ├── 12.4.2_Database_Performance.md 🔄
│   │   └── 12.4.3_Service_To_Service_Latency.md 🆕
│   │
│   └── 12.5_Performance_Monitoring/
│       ├── 12.5.1_Metrics_Collection.md
│       ├── 12.5.2_APM_Tools.md
│       ├── 12.5.3_Performance_Dashboards.md
│       └── 12.5.4_Distributed_Tracing.md 🆕
│
├── Part13_System_Testing/
│   ├── 13.1_Test_Strategy.md
│   ├── 13.2_Unit_Testing/
│   │   ├── 13.2.1_Test_Coverage.md 🔄 (per service)
│   │   ├── 13.2.2_Mocking_Strategy.md
│   │   └── 13.2.3_Test_Frameworks.md
│   │
│   ├── 13.3_Integration_Testing/
│   │   ├── 13.3.1_API_Testing.md
│   │   ├── 13.3.2_Database_Testing.md
│   │   ├── 13.3.3_External_Integration_Testing.md
│   │   └── 13.3.4_Service_Integration_Testing.md 🆕
│   │
│   ├── 13.4_End_To_End_Testing/
│   │   ├── 13.4.1_Test_Scenarios.md 🔄 (cross-service flows)
│   │   ├── 13.4.2_Automation_Framework.md
│   │   └── 13.4.3_Test_Data_Management.md
│   │
│   ├── 13.5_Acceptance_Testing/
│   │   ├── 13.5.1_UAT_Plan.md
│   │   ├── 13.5.2_Test_Cases.md
│   │   └── 13.5.3_Sign_Off_Criteria.md
│   │
│   └── 13.6_Test_Automation/
│       ├── 13.6.1_CI_CD_Integration.md 🔄
│       ├── 13.6.2_Test_Reporting.md
│       ├── 13.6.3_Test_Maintenance.md
│       └── 13.6.4_Contract_Testing.md 🆕 (service contracts)
│
├── Part14_Deployment_Architecture/
│   ├── 14.1_Deployment_Overview.md 🔄
│   │
│   ├── 14.2_Infrastructure/
│   │   ├── 14.2.1_AWS_Architecture.md 🔄
│   │   ├── 14.2.2_Kubernetes_Setup.md 🆕
│   │   ├── 14.2.3_Service_Mesh_Configuration.md 🆕
│   │   ├── 14.2.4_Load_Balancers.md 🔄
│   │   └── 14.2.5_CDN_Configuration.md
│   │
│   ├── 14.3_CI_CD_Pipeline/
│   │   ├── 14.3.1_Build_Pipeline_Per_Service.md 🔄
│   │   ├── 14.3.2_Test_Pipeline_Per_Service.md 🔄
│   │   ├── 14.3.3_Deployment_Pipeline_Per_Service.md 🔄
│   │   └── 14.3.4_Rollback_Strategy.md 🔄
│   │
│   ├── 14.4_Environment_Setup/
│   │   ├── 14.4.1_Development_Environment.md
│   │   ├── 14.4.2_Staging_Environment.md
│   │   ├── 14.4.3_Production_Environment.md
│   │   ├── 14.4.4_DR_Environment.md
│   │   └── 14.4.5_Service_Namespaces.md 🆕
│   │
│   └── 14.5_Deployment_Strategy/
│       ├── 14.5.1_Blue_Green_Deployment.md
│       ├── 14.5.2_Canary_Deployment.md
│       ├── 14.5.3_Rolling_Deployment.md
│       └── 14.5.4_Service_By_Service_Rollout.md 🆕
│
├── Part15_Operations_And_Monitoring/
│   ├── 15.1_Operations_Overview.md
│   │
│   ├── 15.2_Monitoring/
│   │   ├── 15.2.1_Application_Monitoring.md 🔄
│   │   ├── 15.2.2_Infrastructure_Monitoring.md 🔄
│   │   ├── 15.2.3_Business_Metrics.md
│   │   ├── 15.2.4_Alerting_Rules.md
│   │   ├── 15.2.5_Service_Health_Checks.md 🆕
│   │   └── 15.2.6_Distributed_Tracing.md 🆕
│   │
│   ├── 15.3_Logging/
│   │   ├── 15.3.1_Log_Aggregation.md 🔄 (centralized logging)
│   │   ├── 15.3.2_Log_Retention.md
│   │   ├── 15.3.3_Log_Analysis.md
│   │   └── 15.3.4_Structured_Logging.md 🆕
│   │
│   ├── 15.4_Incident_Management/
│   │   ├── 15.4.1_Incident_Response.md
│   │   ├── 15.4.2_Escalation_Procedures.md
│   │   ├── 15.4.3_Post_Mortem_Process.md
│   │   └── 15.4.4_Service_Level_Incidents.md 🆕
│   │
│   ├── 15.5_Backup_And_Recovery/
│   │   ├── 15.5.1_Backup_Strategy.md 🔄 (per service DB)
│   │   ├── 15.5.2_Disaster_Recovery.m
│   │   ├── 15.5.2_Disaster_Recovery.md 🔄
│   │   ├── 15.5.3_RTO_RPO_Targets.md 🔄
│   │   └── 15.5.4_Service_Recovery_Procedures.md 🆕
│   │
│   └── 15.6_Capacity_Planning/
│       ├── 15.6.1_Resource_Forecasting.md 🔄
│       ├── 15.6.2_Scaling_Triggers.md 🔄
│       ├── 15.6.3_Cost_Optimization.md
│       └── 15.6.4_Service_Level_Capacity.md 🆕
│
└── Part16_Appendices/
    ├── 16.1_Glossary.md 🔄
    ├── 16.2_Acronyms.md 🔄
    ├── 16.3_References.md
    ├── 16.4_Change_Log.md
    ├── 16.5_Approval_Matrix.md
    ├── 16.6_Data_Dictionary.md
    ├── 16.7_Business_Rules_Catalog.md
    ├── 16.8_Compliance_Checklist.md
    ├── 16.9_Service_Catalog.md 🆕
    └── 16.10_Microservices_Patterns_Reference.md 🆕
```

## 📝 Ghi Chú Quan Trọng

### **Convention cho Service Ownership** 🆕

Mỗi Functional Requirement (FR) giờ có thêm section:
```
XX.X.5_Service_Ownership.md
