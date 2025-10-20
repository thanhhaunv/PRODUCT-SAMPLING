# 📂 **SRS_STRUCTURE.md - FULL REVISED VERSION**

### **Legend:**
- ✅ **Giữ nguyên** (không đổi)
- 🆕 **Thêm mới** (Should-Have / Nice-to-Have)

---

```
PSP_SRS_V2/
│
├── Part00_Document_Information/ ✅
│   ├── 00.1_Title_Page.md
│   ├── 00.2_Version_History.md
│   ├── 00.3_Approval_Sign_Off.md
│   ├── 00.4_Document_Metadata.md
│   └── 00.5_Glossary_Of_Terms.md
│
├── Part01_Introduction/ ✅
│   ├── 01.1_Purpose_Of_Document.md
│   ├── 01.2_Project_Scope.md
│   ├── 01.3_Intended_Audience.md
│   ├── 01.4_Product_Overview.md
│   ├── 01.5_Stakeholders.md
│   ├── 01.6_Definitions_And_Acronyms.md
│   ├── 01.7_References.md
│   └── 01.8_Document_Conventions.md
│
├── Part02_System_Overview/ ✅
│   ├── 02.1_System_Context.md
│   ├── 02.2_System_Objectives.md
│   ├── 02.3_System_Constraints.md
│   ├── 02.4_Assumptions_And_Dependencies.md
│   ├── 02.5_Success_Criteria.md
│   ├── 02.6_Out_Of_Scope.md
│   ├── 02.7_Business_Requirements_Summary.md
│   ├── 02.8_Technical_Requirements_Summary.md
│   ├── 02.9_Project_Phases.md
│   └── 02.10_Risk_Assessment.md
│
├── Part03_User_Personas_And_Use_Cases/ ✅
│   ├── 03.1_User_Personas_Overview.md
│   ├── 03.2_Persona_1_Platform_Admin.md
│   ├── 03.3_Persona_2_Brand_Admin.md
│   ├── 03.4_Persona_3_Brand_Staff.md
│   ├── 03.5_Persona_4_Customer_Account.md
│   ├── 03.6_Persona_5_Customer.md
│   ├── 03.7_Persona_6_POS_Staff.md
│   └── 03.8_User_Journey_Maps.md
│
├── Part04_Functional_Requirements/ 🔄
│   ├── 04.1_Overview.md ✅
│   ├── 04.2_Core_Features/ 🔄 (Must-Have - Phase 1)
│   │   ├── 04.2.1_FR-001_Campaign_Management/ ✅
│   │   │   ├── 04.2.1.1_Overview.md
│   │   │   ├── 04.2.1.2_User_Stories.md
│   │   │   ├── 04.2.1.3_Functional_Specifications.md
│   │   │   ├── 04.2.1.4_Business_Rules.md
│   │   │   ├── 04.2.1.5_API_Endpoints.md
│   │   │   └── 04.2.1.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.2_FR-002_Barcode_Management/ ✅
│   │   │   ├── 04.2.2.1_Overview.md
│   │   │   ├── 04.2.2.2_User_Stories.md
│   │   │   ├── 04.2.2.3_Functional_Specifications.md
│   │   │   ├── 04.2.2.4_Business_Rules.md
│   │   │   ├── 04.2.2.5_API_Endpoints.md
│   │   │   └── 04.2.2.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.3_FR-003_User_Authentication/ ✅
│   │   │   ├── 04.2.3.1_Overview.md
│   │   │   ├── 04.2.3.2_User_Stories.md
│   │   │   ├── 04.2.3.3_Functional_Specifications.md
│   │   │   ├── 04.2.3.4_Business_Rules.md
│   │   │   ├── 04.2.3.5_API_Endpoints.md
│   │   │   └── 04.2.3.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.4_FR-004_OTP_Verification/ ✅
│   │   │   ├── 04.2.4.1_Overview.md
│   │   │   ├── 04.2.4.2_User_Stories.md
│   │   │   ├── 04.2.4.3_Functional_Specifications.md
│   │   │   ├── 04.2.4.4_Business_Rules.md
│   │   │   ├── 04.2.4.5_API_Endpoints.md
│   │   │   └── 04.2.4.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.5_FR-005_Notification_System/ ✅
│   │   │   ├── 04.2.5.1_Overview.md
│   │   │   ├── 04.2.5.2_User_Stories.md
│   │   │   ├── 04.2.5.3_Functional_Specifications.md
│   │   │   ├── 04.2.5.4_Business_Rules.md
│   │   │   ├── 04.2.5.5_API_Endpoints.md
│   │   │   └── 04.2.5.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.6_FR-006_Analytics_Dashboard/ ✅
│   │   │   ├── 04.2.6.1_Overview.md
│   │   │   ├── 04.2.6.2_User_Stories.md
│   │   │   ├── 04.2.6.3_Functional_Specifications.md
│   │   │   ├── 04.2.6.4_Business_Rules.md
│   │   │   ├── 04.2.6.5_API_Endpoints.md
│   │   │   └── 04.2.6.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.2.7_FR-007_CRM_Integration/ ✅
│   │   │   ├── 04.2.7.1_Overview.md
│   │   │   ├── 04.2.7.2_User_Stories.md
│   │   │   ├── 04.2.7.3_Functional_Specifications.md
│   │   │   ├── 04.2.7.4_Business_Rules.md
│   │   │   ├── 04.2.7.5_API_Endpoints.md
│   │   │   └── 04.2.7.6_Acceptance_Criteria.md
│   │   │
│   │   └── 04.2.8_FR-008_POS_Redemption/ ✅
│   │       ├── 04.2.8.1_Overview.md
│   │       ├── 04.2.8.2_User_Stories.md
│   │       ├── 04.2.8.3_Functional_Specifications.md
│   │       ├── 04.2.8.4_Business_Rules.md
│   │       ├── 04.2.8.5_API_Endpoints.md
│   │       └── 04.2.8.6_Acceptance_Criteria.md
│   │
│   ├── 04.3_Should_Have_Features/ 🆕 (Phase 2)
│   │   ├── 04.3.1_FR-009_Fraud_Detection/ 🆕
│   │   │   ├── 04.3.1.1_Overview.md
│   │   │   ├── 04.3.1.2_User_Stories.md
│   │   │   ├── 04.3.1.3_Fraud_Rules.md
│   │   │   ├── 04.3.1.4_ML_Model_Specifications.md
│   │   │   ├── 04.3.1.5_API_Endpoints.md
│   │   │   └── 04.3.1.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.3.2_FR-010_User_Portal/ 🆕
│   │   │   ├── 04.3.2.1_Overview.md
│   │   │   ├── 04.3.2.2_User_Stories.md
│   │   │   ├── 04.3.2.3_Portal_Features.md
│   │   │   ├── 04.3.2.4_PWA_Requirements.md
│   │   │   ├── 04.3.2.5_API_Endpoints.md
│   │   │   └── 04.3.2.6_Acceptance_Criteria.md
│   │   │
│   │   └── 04.3.3_FR-011_Advanced_Analytics/ 🆕
│   │       ├── 04.3.3.1_Overview.md
│   │       ├── 04.3.3.2_User_Stories.md
│   │       ├── 04.3.3.3_Cohort_Analysis.md
│   │       ├── 04.3.3.4_User_Journey_Tracking.md
│   │       ├── 04.3.3.5_Predictive_Analytics.md
│   │       └── 04.3.3.6_Acceptance_Criteria.md
│   │
│   ├── 04.4_Nice_To_Have_Features/ 🆕 (Phase 3)
│   │   ├── 04.4.1_FR-012_AB_Testing/ 🆕
│   │   │   ├── 04.4.1.1_Overview.md
│   │   │   ├── 04.4.1.2_User_Stories.md
│   │   │   ├── 04.4.1.3_Experiment_Design.md
│   │   │   ├── 04.4.1.4_Statistical_Analysis.md
│   │   │   ├── 04.4.1.5_API_Endpoints.md
│   │   │   └── 04.4.1.6_Acceptance_Criteria.md
│   │   │
│   │   ├── 04.4.2_FR-013_Recommendation_Engine/ 🆕
│   │   │   ├── 04.4.2.1_Overview.md
│   │   │   ├── 04.4.2.2_User_Stories.md
│   │   │   ├── 04.4.2.3_Recommendation_Algorithms.md
│   │   │   ├── 04.4.2.4_ML_Model_Specifications.md
│   │   │   ├── 04.4.2.5_API_Endpoints.md
│   │   │   └── 04.4.2.6_Acceptance_Criteria.md
│   │   │
│   │   └── 04.4.3_FR-014_Advanced_Reporting/ 🆕
│   │       ├── 04.4.3.1_Overview.md
│   │       ├── 04.4.3.2_User_Stories.md
│   │       ├── 04.4.3.3_Custom_Report_Builder.md
│   │       ├── 04.4.3.4_Scheduled_Reports.md
│   │       ├── 04.4.3.5_Export_Formats.md
│   │       └── 04.4.3.6_Acceptance_Criteria.md
│   │
│   └── 04.5_Feature_Comparison_Matrix.md 🔄 (update với Should/Nice-to-Have)
│
├── Part05_Non_Functional_Requirements/ ✅
│   ├── 05.1_Overview.md
│   ├── 05.2_NFR-001_Performance.md
│   ├── 05.3_NFR-002_Scalability.md
│   ├── 05.4_NFR-003_Security.md
│   ├── 05.5_NFR-004_Reliability.md
│   ├── 05.6_NFR-005_Maintainability.md
│   ├── 05.7_NFR-006_Auditability.md
│   ├── 05.8_NFR-007_Usability.md
│   ├── 05.9_NFR-008_Compliance.md
│   └── 05.10_NFR_Priorities_Matrix.md
│
├── Part06_System_Architecture/ ✅
│   ├── 06.1_Architecture_Overview.md
│   ├── 06.2_Logical_Architecture/
│   │   ├── 06.2.1_Layered_Architecture.md
│   │   ├── 06.2.2_Microservices_Design.md
│   │   ├── 06.2.3_Module_Dependencies.md
│   │   └── 06.2.4_Service_Boundaries.md
│   │
│   ├── 06.3_Physical_Architecture/
│   │   ├── 06.3.1_Deployment_Diagram.md
│   │   ├── 06.3.2_Infrastructure_Components.md
│   │   ├── 06.3.3_Network_Topology.md
│   │   └── 06.3.4_Cloud_Architecture.md
│   │
│   ├── 06.4_Technology_Stack/
│   │   ├── 06.4.1_Frontend_Technologies.md
│   │   ├── 06.4.2_Backend_Technologies.md
│   │   ├── 06.4.3_Database_Technologies.md
│   │   ├── 06.4.4_Integration_Technologies.md
│   │   └── 06.4.5_DevOps_Tools.md
│   │
│   ├── 06.5_Communication_Patterns/
│   │   ├── 06.5.1_Synchronous_Communication.md
│   │   ├── 06.5.2_Asynchronous_Communication.md
│   │   ├── 06.5.3_Event_Driven_Architecture.md
│   │   └── 06.5.4_Message_Queue_Design.md
│   │
│   └── 06.6_Scalability_Patterns/
│       ├── 06.6.1_Horizontal_Scaling.md
│       ├── 06.6.2_Caching_Strategy.md
│       ├── 06.6.3_Load_Balancing.md
│       └── 06.6.4_Database_Sharding.md
│
├── Part06B_Design_Patterns/ 🔄
│   ├── 06B.1_Design_Patterns_Catalog/
│   │   ├── 06B.1.1_Creational_Patterns/
│   │   │   ├── 06B.1.1.1_Factory_Pattern.md ✅
│   │   │   ├── 06B.1.1.2_Builder_Pattern.md ✅
│   │   │   ├── 06B.1.1.3_Singleton_Pattern.md ✅
│   │   │   └── 06B.1.1.4_Prototype_Pattern.md ✅
│   │   │
│   │   ├── 06B.1.2_Structural_Patterns/
│   │   │   ├── 06B.1.2.1_Adapter_Pattern.md ✅
│   │   │   ├── 06B.1.2.2_Facade_Pattern.md ✅
│   │   │   ├── 06B.1.2.3_Proxy_Pattern.md ✅
│   │   │   └── 06B.1.2.4_Decorator_Pattern.md ✅
│   │   │
│   │   └── 06B.1.3_Behavioral_Patterns/
│   │       ├── 06B.1.3.1_Strategy_Pattern.md ✅
│   │       ├── 06B.1.3.2_Observer_Pattern.md ✅
│   │       ├── 06B.1.3.3_Command_Pattern.md ✅
│   │       └── 06B.1.3.4_Chain_Of_Responsibility_Pattern.md ✅
│   │
│   ├── 06B.2_Interface_Definitions/
│   │   ├── 06B.2.1_Service_Interfaces/ 🔄
│   │   │   ├── 06B.2.1.1_ICampaignService.md ✅
│   │   │   ├── 06B.2.1.2_IBarcodeService.md ✅
│   │   │   ├── 06B.2.1.3_IAuthService.md ✅
│   │   │   ├── 06B.2.1.4_IAnalyticsService.md ✅
│   │   │   ├── 06B.2.1.5_INotificationService.md ✅
│   │   │   ├── 06B.2.1.6_IFraudDetectionService.md 🆕 (Should-Have)
│   │   │   ├── 06B.2.1.7_IUserPortalService.md 🆕 (Should-Have)
│   │   │   ├── 06B.2.1.8_IABTestingService.md 🆕 (Nice-to-Have)
│   │   │   └── 06B.2.1.9_IRecommendationService.md 🆕 (Nice-to-Have)
│   │   │
│   │   ├── 06B.2.2_Repository_Interfaces/ 🔄
│   │   │   ├── 06B.2.2.1_IRepository_Base.md ✅
│   │   │   ├── 06B.2.2.2_ICampaignRepository.md ✅
│   │   │   ├── 06B.2.2.3_IUserRepository.md ✅
│   │   │   ├── 06B.2.2.4_IBarcodeRepository.md ✅
│   │   │   ├── 06B.2.2.5_IFraudScoreRepository.md 🆕 (Should-Have)
│   │   │   ├── 06B.2.2.6_IUserPreferenceRepository.md 🆕 (Should-Have)
│   │   │   ├── 06B.2.2.7_IExperimentRepository.md 🆕 (Nice-to-Have)
│   │   │   └── 06B.2.2.8_IRecommendationRepository.md 🆕 (Nice-to-Have)
│   │   │
│   │   └── 06B.2.3_External_Integration_Interfaces/ ✅
│   │       ├── 06B.2.3.1_ICRMConnector.md
│   │       ├── 06B.2.3.2_ISMSProvider.md
│   │       ├── 06B.2.3.3_IEmailProvider.md
│   │       └── 06B.2.3.4_IPOSConnector.md
│   │
│   ├── 06B.3_Abstract_Base_Classes/ ✅
│   │   ├── 06B.3.1_BaseService.md
│   │   ├── 06B.3.2_BaseRepository.md
│   │   ├── 06B.3.3_BaseController.md
│   │   └── 06B.3.4_BaseValidator.md
│   │
│   ├── 06B.4_Dependency_Injection/ ✅
│   │   ├── 06B.4.1_DI_Container_Setup.md
│   │   ├── 06B.4.2_Service_Registration.md
│   │   ├── 06B.4.3_Lifetime_Management.md
│   │   └── 06B.4.4_Configuration_Pattern.md
│   │
│   ├── 06B.5_Module_Independence/ ✅
│   │   ├── 06B.5.1_Module_Boundaries.md
│   │   ├── 06B.5.2_Inter_Module_Communication.md
│   │   ├── 06B.5.3_Event_Bus_Pattern.md
│   │   ├── 06B.5.4_API_Contracts.md
│   │   └── 06B.5.5_Versioning_Strategy.md
│   │
│   ├── 06B.6_Code_Organization/ ✅
│   │   ├── 06B.6.1_Folder_Structure.md
│   │   ├── 06B.6.2_Naming_Conventions.md
│   │   ├── 06B.6.3_File_Organization.md
│   │   └── 06B.6.4_Package_Structure.md
│   │
│   └── 06B.7_Documentation_Standards/ ✅
│       ├── 06B.7.1_Code_Comments.md
│       ├── 06B.7.2_API_Documentation.md
│       ├── 06B.7.3_Architecture_Decision_Records.md
│       └── 06B.7.4_README_Templates.md
│
├── Part07_Database_Design/ 🔄
│   ├── 07.1_Data_Model_Overview.md 🔄 (update với Phase 2-3)
│   ├── 07.2_Entity_Relationship_Diagram.md 🔄 (update ERD với Phase 2-3)
│   │
│   ├── 07.3_Table_Schemas/
│   │   ├── 07.3.1_Core_Tables/ 🔄 (Phase 1 - MVP)
│   │   │   ├── 07.3.1.1_Brands_Table.md 🆕
│   │   │   ├── 07.3.1.2_Campaigns_Table.md ✅
│   │   │   ├── 07.3.1.3_Barcode_Pools_Table.md 🆕
│   │   │   ├── 07.3.1.4_Barcodes_Table.md ✅
│   │   │   ├── 07.3.1.5_Users_Table.md ✅
│   │   │   ├── 07.3.1.6_Roles_Table.md 🆕
│   │   │   ├── 07.3.1.7_User_Roles_Table.md 🆕
│   │   │   ├── 07.3.1.8_Locations_Table.md 🆕
│   │   │   ├── 07.3.1.9_Redemptions_Table.md ✅
│   │   │   ├── 07.3.1.10_Sessions_Table.md ✅
│   │   │   └── 07.3.1.11_Audit_Logs_Table.md ✅
│   │   │
│   │   ├── 07.3.2_Phase_2_Tables/ 🆕 (Should-Have)
│   │   │   ├── 07.3.2.1_Fraud_Scores_Table.md 🆕
│   │   │   ├── 07.3.2.2_Device_Fingerprints_Table.md 🆕
│   │   │   ├── 07.3.2.3_Fraud_Rules_Table.md 🆕
│   │   │   ├── 07.3.2.4_User_Preferences_Table.md 🆕
│   │   │   ├── 07.3.2.5_Consent_History_Table.md 🆕
│   │   │   ├── 07.3.2.6_User_Journey_Events_Collection.md 🆕 (MongoDB)
│   │   │   ├── 07.3.2.7_Cohorts_Collection.md 🆕 (MongoDB)
│   │   │   └── 07.3.2.8_Analytics_Aggregations_Collection.md 🆕 (MongoDB)
│   │   │
│   │   └── 07.3.3_Phase_3_Tables/ 🆕 (Nice-to-Have)
│   │       ├── 07.3.3.1_Experiments_Table.md 🆕
│   │       ├── 07.3.3.2_Experiment_Variants_Table.md 🆕
│   │       ├── 07.3.3.3_Experiment_Assignments_Table.md 🆕
│   │       ├── 07.3.3.4_Recommendations_Table.md 🆕
│   │       ├── 07.3.3.5_User_Item_Interactions_Table.md 🆕
│   │       ├── 07.3.3.6_Custom_Reports_Table.md 🆕
│   │       └── 07.3.3.7_Scheduled_Reports_Table.md 🆕
│   │
│   ├── 07.4_Indexes_And_Constraints.md 🔄 (update với Phase 2-3)
│   ├── 07.5_Data_Relationships.md 🔄 (update với Phase 2-3)
│   ├── 07.6_Migration_Strategy.md 🔄 (Phase 1→2→3 migration)
│   ├── 07.7_Data_Archival_Policy.md ✅
│   └── 07.8_MongoDB_Collections_Design.md 🆕 (Analytics collections)
│
├── Part08_API_Design/ 🔄
│   ├── 08.1_API_Overview.md 🔄
│   │
│   ├── 08.2_REST_API_Endpoints/
│   │   ├── 08.2.1_Campaign_APIs/ ✅
│   │   │   ├── 08.2.1.1_Create_Campaign.md
│   │   │   ├── 08.2.1.2_Get_Campaign.md
│   │   │   ├── 08.2.1.3_Update_Campaign.md
│   │   │   ├── 08.2.1.4_Delete_Campaign.md
│   │   │   ├── 08.2.1.5_Publish_Campaign.md
│   │   │   └── 08.2.1.6_Pause_Campaign.md
│   │   │
│   │   ├── 08.2.2_Barcode_APIs/ ✅
│   │   │   ├── 08.2.2.1_Import_Barcodes.md
│   │   │   ├── 08.2.2.2_Generate_Barcodes.md
│   │   │   ├── 08.2.2.3_Assign_Barcode.md
│   │   │   └── 08.2.2.4_Get_Barcode_Status.md
│   │   │
│   │   ├── 08.2.3_Authentication_APIs/ ✅
│   │   │   ├── 08.2.3.1_Login.md
│   │   │   ├── 08.2.3.2_Logout.md
│   │   │   ├── 08.2.3.3_Refresh_Token.md
│   │   │   └── 08.2.3.4_Change_Password.md
│   │   │
│   │   ├── 08.2.4_User_APIs/ ✅
│   │   │   ├── 08.2.4.1_Register_User.md
│   │   │   ├── 08.2.4.2_Get_User_Profile.md
│   │   │   ├── 08.2.4.3_Update_User_Profile.md
│   │   │   └── 08.2.4.4_Delete_User.md
│   │   │
│   │   ├── 08.2.5_OTP_APIs/ ✅
│   │   │   ├── 08.2.5.1_Send_OTP.md
│   │   │   ├── 08.2.5.2_Verify_OTP.md
│   │   │   └── 08.2.5.3_Resend_OTP.md
│   │   │
│   │   ├── 08.2.6_Redemption_APIs/ ✅
│   │   │   ├── 08.2.6.1_Redeem_Barcode.md
│   │   │   ├── 08.2.6.2_Get_Redemption_History.md
│   │   │   └── 08.2.6.3_Sync_Offline_Redemptions.md
│   │   │
│   │   ├── 08.2.7_Analytics_APIs/ ✅
│   │   │   ├── 08.2.7.1_Get_Campaign_Metrics.md
│   │   │   ├── 08.2.7.2_Get_Funnel_Metrics.md
│   │   │   ├── 08.2.7.3_Get_Redemption_Analytics.md
│   │   │   └── 08.2.7.4_Export_Analytics.md
│   │   │
│   │   ├── 08.2.8_Notification_APIs/ ✅
│   │   │   ├── 08.2.8.1_Send_SMS.md
│   │   │   ├── 08.2.8.2_Send_Email.md
│   │   │   └── 08.2.8.3_Get_Notification_Status.md
│   │   │
Vâng! Tiếp tục phần còn lại của **Full SRS Structure**! 🚀

---

```
│   │   ├── 08.2.9_CRM_Integration_APIs/ ✅
│   │   │   ├── 08.2.9.1_Sync_To_CRM.md
│   │   │   ├── 08.2.9.2_Get_Sync_Status.md
│   │   │   └── 08.2.9.3_Configure_CRM_Mapping.md
│   │   │
│   │   ├── 08.2.10_Fraud_Detection_APIs/ 🆕 (Should-Have)
│   │   │   ├── 08.2.10.1_Check_Fraud_Score.md 🆕
│   │   │   ├── 08.2.10.2_Get_Fraud_History.md 🆕
│   │   │   ├── 08.2.10.3_Update_Fraud_Rules.md 🆕
│   │   │   └── 08.2.10.4_Block_Suspicious_User.md 🆕
│   │   │
│   │   ├── 08.2.11_User_Portal_APIs/ 🆕 (Should-Have)
│   │   │   ├── 08.2.11.1_Get_My_Barcodes.md 🆕
│   │   │   ├── 08.2.11.2_Update_Consent.md 🆕
│   │   │   ├── 08.2.11.3_Get_Consent_History.md 🆕
│   │   │   └── 08.2.11.4_Download_User_Data.md 🆕
│   │   │
│   │   ├── 08.2.12_Advanced_Analytics_APIs/ 🆕 (Should-Have)
│   │   │   ├── 08.2.12.1_Get_Cohort_Analysis.md 🆕
│   │   │   ├── 08.2.12.2_Get_User_Journey.md 🆕
│   │   │   ├── 08.2.12.3_Get_Predictive_Insights.md 🆕
│   │   │   └── 08.2.12.4_Create_Custom_Cohort.md 🆕
│   │   │
│   │   ├── 08.2.13_AB_Testing_APIs/ 🆕 (Nice-to-Have)
│   │   │   ├── 08.2.13.1_Create_Experiment.md 🆕
│   │   │   ├── 08.2.13.2_Assign_Variant.md 🆕
│   │   │   ├── 08.2.13.3_Track_Conversion.md 🆕
│   │   │   ├── 08.2.13.4_Get_Experiment_Results.md 🆕
│   │   │   └── 08.2.13.5_Stop_Experiment.md 🆕
│   │   │
│   │   ├── 08.2.14_Recommendation_APIs/ 🆕 (Nice-to-Have)
│   │   │   ├── 08.2.14.1_Get_Campaign_Recommendations.md 🆕
│   │   │   ├── 08.2.14.2_Track_User_Interaction.md 🆕
│   │   │   ├── 08.2.14.3_Update_Preferences.md 🆕
│   │   │   └── 08.2.14.4_Get_Similar_Campaigns.md 🆕
│   │   │
│   │   └── 08.2.15_Custom_Reporting_APIs/ 🆕 (Nice-to-Have)
│   │       ├── 08.2.15.1_Create_Custom_Report.md 🆕
│   │       ├── 08.2.15.2_Schedule_Report.md 🆕
│   │       ├── 08.2.15.3_Get_Report_Status.md 🆕
│   │       └── 08.2.15.4_Download_Report.md 🆕
│   │
│   ├── 08.3_Webhook_Endpoints/ ✅
│   │   ├── 08.3.1_CRM_Webhooks.md
│   │   ├── 08.3.2_SMS_Delivery_Webhooks.md
│   │   └── 08.3.3_Email_Delivery_Webhooks.md
│   │
│   ├── 08.4_API_Authentication/ ✅
│   │   ├── 08.4.1_JWT_Authentication.md
│   │   ├── 08.4.2_API_Key_Authentication.md
│   │   └── 08.4.3_OAuth2_Flow.md
│   │
│   ├── 08.5_Rate_Limiting/ ✅
│   │   ├── 08.5.1_Rate_Limit_Strategy.md
│   │   └── 08.5.2_Throttling_Rules.md
│   │
│   ├── 08.6_Error_Handling/ ✅
│   │   ├── 08.6.1_Error_Response_Format.md
│   │   ├── 08.6.2_HTTP_Status_Codes.md
│   │   └── 08.6.3_Error_Code_Catalog.md
│   │
│   ├── 08.7_API_Versioning/ ✅
│   │   ├── 08.7.1_Versioning_Strategy.md
│   │   └── 08.7.2_Deprecation_Policy.md
│   │
│   └── 08.8_OpenAPI_Specification/ 🔄 (update với Phase 2-3)
│       ├── 08.8.1_OpenAPI_Schema.md
│       └── 08.8.2_Swagger_Documentation.md
│
├── Part09_Use_Cases/ 🔄
│   ├── 09.1_Use_Case_Overview.md 🔄
│   │
│   ├── 09.2_Core_Use_Cases/ 🔄 (Phase 1)
│   │   ├── 09.2.1_UC-001_Create_Campaign/ ✅
│   │   │   ├── 09.2.1.1_Basic_Flow.md
│   │   │   ├── 09.2.1.2_Alternative_Flows.md
│   │   │   ├── 09.2.1.3_Exception_Flows.md
│   │   │   └── 09.2.1.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.2_UC-002_Import_Barcodes/ ✅
│   │   │   ├── 09.2.2.1_Basic_Flow.md
│   │   │   ├── 09.2.2.2_Alternative_Flows.md
│   │   │   ├── 09.2.2.3_Exception_Flows.md
│   │   │   └── 09.2.2.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.3_UC-003_User_Registration/ ✅
│   │   │   ├── 09.2.3.1_Basic_Flow.md
│   │   │   ├── 09.2.3.2_Alternative_Flows.md
│   │   │   ├── 09.2.3.3_Exception_Flows.md
│   │   │   └── 09.2.3.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.4_UC-004_Verify_OTP/ ✅
│   │   │   ├── 09.2.4.1_Basic_Flow.md
│   │   │   ├── 09.2.4.2_Alternative_Flows.md
│   │   │   ├── 09.2.4.3_Exception_Flows.md
│   │   │   └── 09.2.4.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.5_UC-005_Issue_Barcode/ ✅
│   │   │   ├── 09.2.5.1_Basic_Flow.md
│   │   │   ├── 09.2.5.2_Alternative_Flows.md
│   │   │   ├── 09.2.5.3_Exception_Flows.md
│   │   │   └── 09.2.5.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.6_UC-006_Redeem_Barcode/ ✅
│   │   │   ├── 09.2.6.1_Basic_Flow.md
│   │   │   ├── 09.2.6.2_Alternative_Flows.md
│   │   │   ├── 09.2.6.3_Exception_Flows.md
│   │   │   └── 09.2.6.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.2.7_UC-007_View_Analytics/ ✅
│   │   │   ├── 09.2.7.1_Basic_Flow.md
│   │   │   ├── 09.2.7.2_Alternative_Flows.md
│   │   │   ├── 09.2.7.3_Exception_Flows.md
│   │   │   └── 09.2.7.4_Sequence_Diagram.md
│   │   │
│   │   └── 09.2.8_UC-008_Sync_To_CRM/ ✅
│   │       ├── 09.2.8.1_Basic_Flow.md
│   │       ├── 09.2.8.2_Alternative_Flows.md
│   │       ├── 09.2.8.3_Exception_Flows.md
│   │       └── 09.2.8.4_Sequence_Diagram.md
│   │
│   ├── 09.3_Should_Have_Use_Cases/ 🆕 (Phase 2)
│   │   ├── 09.3.1_UC-009_Detect_Fraud/ 🆕
│   │   │   ├── 09.3.1.1_Basic_Flow.md
│   │   │   ├── 09.3.1.2_Alternative_Flows.md
│   │   │   ├── 09.3.1.3_Exception_Flows.md
│   │   │   └── 09.3.1.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.3.2_UC-010_Manage_Consent/ 🆕
│   │   │   ├── 09.3.2.1_Basic_Flow.md
│   │   │   ├── 09.3.2.2_Alternative_Flows.md
│   │   │   ├── 09.3.2.3_Exception_Flows.md
│   │   │   └── 09.3.2.4_Sequence_Diagram.md
│   │   │
│   │   └── 09.3.3_UC-011_Analyze_Cohorts/ 🆕
│   │       ├── 09.3.3.1_Basic_Flow.md
│   │       ├── 09.3.3.2_Alternative_Flows.md
│   │       ├── 09.3.3.3_Exception_Flows.md
│   │       └── 09.3.3.4_Sequence_Diagram.md
│   │
│   ├── 09.4_Nice_To_Have_Use_Cases/ 🆕 (Phase 3)
│   │   ├── 09.4.1_UC-012_Run_AB_Test/ 🆕
│   │   │   ├── 09.4.1.1_Basic_Flow.md
│   │   │   ├── 09.4.1.2_Alternative_Flows.md
│   │   │   ├── 09.4.1.3_Exception_Flows.md
│   │   │   └── 09.4.1.4_Sequence_Diagram.md
│   │   │
│   │   ├── 09.4.2_UC-013_Generate_Recommendations/ 🆕
│   │   │   ├── 09.4.2.1_Basic_Flow.md
│   │   │   ├── 09.4.2.2_Alternative_Flows.md
│   │   │   ├── 09.4.2.3_Exception_Flows.md
│   │   │   └── 09.4.2.4_Sequence_Diagram.md
│   │   │
│   │   └── 09.4.3_UC-014_Create_Custom_Report/ 🆕
│   │       ├── 09.4.3.1_Basic_Flow.md
│   │       ├── 09.4.3.2_Alternative_Flows.md
│   │       ├── 09.4.3.3_Exception_Flows.md
│   │       └── 09.4.3.4_Sequence_Diagram.md
│   │
│   └── 09.5_Use_Case_Traceability_Matrix.md 🔄 (update với Phase 2-3)
│
├── Part10_UI_UX_Design/ 🔄
│   ├── 10.1_Design_System/ ✅
│   │   ├── 10.1.1_Color_Palette.md
│   │   ├── 10.1.2_Typography.md
│   │   ├── 10.1.3_Spacing_Grid.md
│   │   ├── 10.1.4_Icons_And_Imagery.md
│   │   └── 10.1.5_Design_Tokens.md
│   │
│   ├── 10.2_Admin_Interface/ 🔄
│   │   ├── 10.2.1_Dashboard/ ✅
│   │   │   ├── 10.2.1.1_Wireframe.md
│   │   │   ├── 10.2.1.2_Component_Specs.md
│   │   │   └── 10.2.1.3_Interactions.md
│   │   │
│   │   ├── 10.2.2_Campaign_Management/ ✅
│   │   │   ├── 10.2.2.1_Campaign_List.md
│   │   │   ├── 10.2.2.2_Create_Campaign.md
│   │   │   ├── 10.2.2.3_Edit_Campaign.md
│   │   │   └── 10.2.2.4_Campaign_Details.md
│   │   │
│   │   ├── 10.2.3_Barcode_Management/ ✅
│   │   │   ├── 10.2.3.1_Barcode_Pool_List.md
│   │   │   ├── 10.2.3.2_Import_Barcodes.md
│   │   │   ├── 10.2.3.3_Generate_Barcodes.md
│   │   │   └── 10.2.3.4_Barcode_Status.md
│   │   │
│   │   ├── 10.2.4_User_Management/ ✅
│   │   │   ├── 10.2.4.1_User_List.md
│   │   │   ├── 10.2.4.2_Create_User.md
│   │   │   ├── 10.2.4.3_Edit_User.md
│   │   │   └── 10.2.4.4_Role_Assignment.md
│   │   │
│   │   ├── 10.2.5_Analytics_Dashboard/ ✅
│   │   │   ├── 10.2.5.1_Overview_Metrics.md
│   │   │   ├── 10.2.5.2_Funnel_Analysis.md
│   │   │   ├── 10.2.5.3_Campaign_Performance.md
│   │   │   └── 10.2.5.4_Export_Reports.md
│   │   │
│   │   ├── 10.2.6_Fraud_Detection_Dashboard/ 🆕 (Should-Have)
│   │   │   ├── 10.2.6.1_Fraud_Alerts.md 🆕
│   │   │   ├── 10.2.6.2_Suspicious_Users.md 🆕
│   │   │   ├── 10.2.6.3_Fraud_Rules_Config.md 🆕
│   │   │   └── 10.2.6.4_Fraud_Analytics.md 🆕
│   │   │
│   │   ├── 10.2.7_AB_Testing_Dashboard/ 🆕 (Nice-to-Have)
│   │   │   ├── 10.2.7.1_Experiment_List.md 🆕
│   │   │   ├── 10.2.7.2_Create_Experiment.md 🆕
│   │   │   ├── 10.2.7.3_Experiment_Results.md 🆕
│   │   │   └── 10.2.7.4_Statistical_Analysis.md 🆕
│   │   │
│   │   └── 10.2.8_Custom_Reports_Builder/ 🆕 (Nice-to-Have)
│   │       ├── 10.2.8.1_Report_Designer.md 🆕
│   │       ├── 10.2.8.2_Data_Source_Selection.md 🆕
│   │       ├── 10.2.8.3_Schedule_Reports.md 🆕
│   │       └── 10.2.8.4_Report_Gallery.md 🆕
│   │
│   ├── 10.3_Landing_Pages/ ✅
│   │   ├── 10.3.1_Campaign_Landing_Page.md
│   │   ├── 10.3.2_Registration_Form.md
│   │   ├── 10.3.3_OTP_Verification.md
│   │   ├── 10.3.4_Success_Page.md
│   │   └── 10.3.5_Error_Pages.md
│   │
│   ├── 10.4_User_Registration_Flow/ ✅
│   │   ├── 10.4.1_Multi_Step_Form.md
│   │   ├── 10.4.2_Form_Validation.md
│   │   ├── 10.4.3_Progress_Indicator.md
│   │   └── 10.4.4_Success_Feedback.md
│   │
│   ├── 10.5_User_Portal/ 🆕 (Should-Have - Phase 2)
│   │   ├── 10.5.1_Portal_Dashboard/ 🆕
│   │   │   ├── 10.5.1.1_Wireframe.md
│   │   │   ├── 10.5.1.2_Component_Specs.md
│   │   │   └── 10.5.1.3_Interactions.md
│   │   │
│   │   ├── 10.5.2_My_Barcodes/ 🆕
│   │   │   ├── 10.5.2.1_Barcode_List.md
│   │   │   ├── 10.5.2.2_Barcode_Details.md
│   │   │   └── 10.5.2.3_Download_Barcode.md
│   │   │
│   │   ├── 10.5.3_Consent_Management/ 🆕
│   │   │   ├── 10.5.3.1_Consent_Settings.md
│   │   │   ├── 10.5.3.2_Consent_History.md
│   │   │   └── 10.5.3.3_Data_Download.md
│   │   │
│   │   ├── 10.5.4_Profile_Settings/ 🆕
│   │   │   ├── 10.5.4.1_Edit_Profile.md
│   │   │   ├── 10.5.4.2_Change_Password.md
│   │   │   └── 10.5.4.3_Delete_Account.md
│   │   │
│   │   └── 10.5.5_PWA_Features/ 🆕
│   │       ├── 10.5.5.1_Offline_Mode.md
│   │       ├── 10.5.5.2_Push_Notifications.md
│   │       ├── 10.5.5.3_Add_To_Home_Screen.md
│   │       └── 10.5.5.4_Service_Worker.md
│   │
│   ├── 10.6_Mobile_Responsive_Design/ ✅
│   │   ├── 10.6.1_Breakpoints.md
│   │   ├── 10.6.2_Mobile_Navigation.md
│   │   ├── 10.6.3_Touch_Interactions.md
│   │   └── 10.6.4_Responsive_Components.md
│   │
│   ├── 10.7_Accessibility_Guidelines/ ✅
│   │   ├── 10.7.1_WCAG_2.1_Compliance.md
│   │   ├── 10.7.2_Keyboard_Navigation.md
│   │   ├── 10.7.3_Screen_Reader_Support.md
│   │   └── 10.7.4_Color_Contrast.md
│   │
│   └── 10.8_Component_Library/ ✅
│       ├── 10.8.1_Buttons.md
│       ├── 10.8.2_Forms.md
│       ├── 10.8.3_Tables.md
│       ├── 10.8.4_Charts.md
│       ├── 10.8.5_Modals.md
│       └── 10.8.6_Navigation.md
│
├── Part11_Security_And_Compliance/ ✅
│   ├── 11.1_Security_Overview.md
│   ├── 11.2_Authentication_And_Authorization/
│   │   ├── 11.2.1_JWT_Token_Management.md
│   │   ├── 11.2.2_Role_Based_Access_Control.md
│   │   ├── 11.2.3_Session_Management.md
│   │   └── 11.2.4_Password_Policy.md
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
│   │   └── 11.4.4_CORS_Policy.md
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
├── Part12_Performance_Testing/ ✅
│   ├── 12.1_Performance_Testing_Overview.md
│   ├── 12.2_Load_Testing/
│   │   ├── 12.2.1_Test_Scenarios.md
│   │   ├── 12.2.2_Load_Profiles.md
│   │   └── 12.2.3_Performance_Benchmarks.md
│   │
│   ├── 12.3_Stress_Testing/
│   │   ├── 12.3.1_Test_Scenarios.md
│   │   └── 12.3.2_Failure_Points.md
│   │
│   ├── 12.4_Scalability_Testing/
│   │   ├── 12.4.1_Horizontal_Scaling.md
│   │   └── 12.4.2_Database_Performance.md
│   │
│   └── 12.5_Performance_Monitoring/
│       ├── 12.5.1_Metrics_Collection.md
│       ├── 12.5.2_APM_Tools.md
│       └── 12.5.3_Performance_Dashboards.md
│
├── Part13_System_Testing/ ✅
│   ├── 13.1_Test_Strategy.md
│   ├── 13.2_Unit_Testing/
│   │   ├── 13.2.1_Test_Coverage.md
│   │   ├── 13.2.2_Mocking_Strategy.md
│   │   └── 13.2.3_Test_Frameworks.md
│   │
│   ├── 13.3_Integration_Testing/
│   │   ├── 13.3.1_API_Testing.md
│   │   ├── 13.3.2_Database_Testing.md
│   │   └── 13.3.3_External_Integration_Testing.md
│   │
│   ├── 13.4_End_To_End_Testing/
│   │   ├── 13.4.1_Test_Scenarios.md
│   │   ├── 13.4.2_Automation_Framework.md
│   │   └── 13.4.3_Test_Data_Management.md
│   │
│   ├── 13.5_Acceptance_Testing/
│   │   ├── 13.5.1_UAT_Plan.md
│   │   ├── 13.5.2_Test_Cases.md
│   │   └── 13.5.3_Sign_Off_Criteria.md
│   │
│   └── 13.6_Test_Automation/
│       ├── 13.6.1_CI_CD_Integration.md
│       ├── 13.6.2_Test_Reporting.md
│       └── 13.6.3_Test_Maintenance.md
│
├── Part14_Deployment_Architecture/ ✅
│   ├── 14.1_Deployment_Overview.md
│   ├── 14.2_Infrastructure/
│   │   ├── 14.2.1_AWS_Architecture.md
│   │   ├── 14.2.2_Kubernetes_Setup.md
│   │   ├── 14.2.3_Load_Balancers.md
│   │   └── 14.2.4_CDN_Configuration.md
│   │
│   ├── 14.3_CI_CD_Pipeline/
│   │   ├── 14.3.1_Build_Pipeline.md
│   │   ├── 14.3.2_Test_Pipeline.md
│   │   ├── 14.3.3_Deployment_Pipeline.md
│   │   └── 14.3.4_Rollback_Strategy.md
│   │
│   ├── 14.4_Environment_Setup/
│   │   ├── 14.4.1_Development_Environment.md
│   │   ├── 14.4.2_Staging_Environment.md
│   │   ├── 14.4.3_Production_Environment.md
│   │   └── 14.4.4_DR_Environment.md
│   │
│   └── 14.5_Deployment_Strategy/
│       ├── 14.5.1_Blue_Green_Deployment.md
│       ├── 14.5.2_Canary_Deployment.md
│       └── 14.5.3_Rolling_Deployment.md
│
├── Part15_Operations_And_Monitoring/ ✅
│   ├── 15.1_Operations_Overview.md
│   ├── 15.2_Monitoring/
│   │   ├── 15.2.1_Application_Monitoring.md
│   │   ├── 15.2.2_Infrastructure_Monitoring.md
│   │   ├── 15.2.3_Business_Metrics.md
│   │   └── 15.2.4_Alerting_Rules.md
│   │
│   ├── 15.3_Logging/
│   │   ├── 15.3.1_Log_Aggregation.md
│   │   ├── 15.3.2_Log_Retention.md
│   │   └── 15.3.3_Log_Analysis.md
│   │
│   ├── 15.4_Incident_Management/
│   │   ├── 15.4.1_Incident_Response.md
│   │   ├── 15.4.2_Escalation_Procedures.md
│   │   └── 15.4.3_Post_Mortem_Process.md
│   │
│   ├── 15.5_Backup_And_Recovery/
│   │   ├── 15.5.1_Backup_Strategy.md
│   │   ├── 15.5.2_Disaster_Recovery.md
│   │   └── 15.5.3_RTO_RPO_Targets.md
│   │
│   └── 15.6_Capacity_Planning/
│       ├── 15.6.1_Resource_Forecasting.md
│       ├── 15.6.2_Scaling_Triggers.md
│       └── 15.6.3_Cost_Optimization.md
│
└── Part16_Appendices/ ✅
    ├── 16.1_Glossary.md
    ├── 16.2_Acronyms.md
    ├── 16.3_References.md
    ├── 16.4_Change_Log.md
    ├── 16.5_Approval_Matrix.md
    ├── 16.6_Data_Dictionary.md
    ├── 16.7_Business_Rules_Catalog.md
    └── 16.8_Compliance_Checklist.md
```

---

## 📊 **TỔNG KẾT THỐNG KÊ REVISED STRUCTURE**

### **Nodes Count Summary:**

| Part | Nodes trước | Nodes sau | Thêm mới | Status |
|------|-------------|-----------|----------|--------|
| **Part00** | 5 | 5 | 0 | ✅ Giữ nguyên |
| **Part01** | 8 | 8 | 0 | ✅ Giữ nguyên |
| **Part02** | 10 | 10 | 0 | ✅ Giữ nguyên |
| **Part03** | 8 | 8 | 0 | ✅ Giữ nguyên |
| **Part04** | 24 | 42 | **+18** | 🔄 Thêm Should/Nice-to-Have |
| **Part05** | 10 | 10 | 0 | ✅ Giữ nguyên |
| **Part06** | 25 | 25 | 0 | ✅ Giữ nguyên |
| **Part06B** | 52 | 60 | **+8** | 🔄 Thêm interfaces mới |
| **Part07** | 12 | 30 | **+18** | 🔄 Thêm Phase 2-3 tables |
| **Part08** | 15 | 21 | **+6** | 🔄 Thêm APIs mới |
| **Part09** | 10 | 16 | **+6** | 🔄 Thêm use cases mới |
| **Part10** | 25 | 30 | **+5** | 🔄 Thêm User Portal UI |
| **Part11** | 15 | 15 | 0 | ✅ Giữ nguyên |
| **Part12** | 10 | 10 | 0 | ✅ Giữ nguyên |
| **Part13** | 12 | 12 | 0 | ✅ Giữ nguyên |
| **Part14** | 12 | 12 | 0 | ✅ Giữ nguyên |
| **Part15** | 15 | 15 | 0 | ✅ Giữ nguyên |
| **Part16** | 8 | 8 | 0 | ✅ Giữ nguyên |
| **TOTAL** | **256** | **317** | **+61** | 📈 **+23.8%** |

---

### **Breakdown theo Priority:**

#### **🟢 Phase 1 - Must-Have (MVP)**
**Status**: ✅ Đã có trong structure cũ
- Part04: FR-001 to FR-008 (8 FRs)
- Part06B: 5 service interfaces + 4 repository interfaces
- Part07: 11 core tables
- Part08: 9 API groups (Campaign, Barcode, Auth, User, OTP, Redemption, Analytics, Notification, CRM)
- Part09: UC-001 to UC-008 (8 use cases)
- Part10: Admin UI + Landing Pages

**Total MVP nodes**: ~180 nodes

---

#### **🟡 Phase 2 - Should-Have**
**Status**: 🆕 Thêm mới trong revised structure
- Part04: FR-009 (Fraud), FR-010 (Portal), FR-011 (Advanced Analytics) - **18 nodes**
- Part06B: IFraudDetectionService, IUserPortalService + 2 repositories - **4 nodes**
- Part07: 8 Phase 2 tables (fraud_scores, user_preferences, cohorts...) - **8 nodes**
- Part08: 3 API groups (Fraud, Portal, Advanced Analytics) - **12 nodes**
- Part09: UC-009, UC-010, UC-011 - **12 nodes**
- Part10: User Portal UI (5 screens) + Fraud Dashboard - **9 nodes**

**Total Should-Have nodes**: ~35 nodes

---

#### **🔵 Phase 3 - Nice-to-Have**
**Status**: 🆕 Thêm mới trong revised structure
- Part04: FR-012 (A/B), FR-013 (Recommend), FR-014 (Reports) - **18 nodes**
- Part06B: IABTestingService, IRecommendationService + 2 repositories - **4 nodes**
- Part07: 7 Phase 3 tables (experiments, recommendations...) - **7 nodes**
- Part08: 3 API groups (A/B Testing, Recommendation, Custom Reports) - **15 nodes**
- Part09: UC-012, UC-013, UC-014 - **12 nodes**
- Part10: A/B Testing Dashboard + Custom Reports Builder - **8 nodes**

**Total Nice-to-Have nodes**: ~26 nodes

---

### **Phase Distribution:**

```
📊 NODES DISTRIBUTION BY PHASE

Phase 1 (MVP):        ████████████████████████ 180 nodes (56.8%)
Phase 2 (Should):     ██████ 35 nodes (11.0%)
Phase 3 (Nice):       ████ 26 nodes (8.2%)
Generic (All):        ████████████ 76 nodes (24.0%)
                      ─────────────────────────────────
                      TOTAL: 317 nodes
```

---

### **Parts cần BỔ SUNG nội dung (Priority Order):**

| Priority | Part | Nodes thêm | Effort | Phase |
|----------|------|------------|--------|-------|
| 🔴 **P0** | **Part07** | +18 nodes | High | 2-3 |
| 🔴 **P0** | **Part04** | +18 nodes | High | 2-3 |
| 🟡 **P1** | **Part08** | +6 nodes | Medium | 2-3 |
| 🟡 **P1** | **Part09** | +6 nodes | Medium | 2-3 |
| 🟢 **P2** | **Part06B** | +8 nodes | Low | 2-3 |
| 🟢 **P2** | **Part10** | +5 nodes | Low | 2-3 |

---

### **File Structure Changes:**

#### **New Folders Added:**
```
04.3_Should_Have_Features/ 🆕
04.4_Nice_To_Have_Features/ 🆕
07.3.2_Phase_2_Tables/ 🆕
07.3.3_Phase_3_Tables/ 🆕
08.2.10_Fraud_Detection_APIs/ 🆕
08.2.11_User_Portal_APIs/ 🆕
08.2.12_Advanced_Analytics_APIs/ 🆕
08.2.13_AB_Testing_APIs/ 🆕
08.2.14_Recommendation_APIs/ 🆕
08.2.15_Custom_Reporting_APIs/ 🆕
09.3_Should_Have_Use_Cases/ 🆕
09.4_Nice_To_Have_Use_Cases/ 🆕
10.2.6_Fraud_Detection_Dashboard/ 🆕
10.2.7_AB_Testing_Dashboard/ 🆕
10.2.8_Custom_Reports_Builder/ 🆕
10.5_User_Portal/ 🆕 (with 5 sub-folders)
```

#### **Modified Files:**
```
04.5_Feature_Comparison_Matrix.md 🔄 (add Phase 2-3)
07.1_Data_Model_Overview.md 🔄 (add Phase 2-3 overview)
07.2_Entity_Relationship_Diagram.md 🔄 (update ERD)
07.4_Indexes_And_Constraints.md 🔄 (add Phase 2-3 indexes)
07.5_Data_Relationships.md 🔄 (add Phase 2-3 relationships)
07.6_Migration_Strategy.md 🔄 (add Phase 1→2→3 migration)
08.1_API_Overview.md 🔄 (add Phase 2-3 APIs)
08.8_OpenAPI_Specification.md 🔄 (update spec)
09.1_Use_Case_Overview.md 🔄 (add Phase 2-3 use cases)
09.5_Use_Case_Traceability_Matrix.md 🔄 (add Phase 2-3)
```

---

## 📝 **HIGHLIGHTS KEY CHANGES:**

### **1. Part04 - Functional Requirements** 🔴
**Before**: 8 FRs (FR-001 to FR-008) - Must-Have only
**After**: 14 FRs - Must-Have (8) + Should-Have (3) + Nice-to-Have (3)
**New structure**:
```
04.2_Core_Features/ (FR-001 to FR-008) ✅
04.3_Should_Have_Features/ (FR-009 to FR-011) 🆕
04.4_Nice_To_Have_Features/ (FR-012 to FR-014) 🆕
```

---

### **2. Part06B - Design Patterns** 🟢
**Before**: 13 interfaces (5 services + 4 repositories + 4 external)
**After**: 21 interfaces (9 services + 8 repositories + 4 external)
**New interfaces**:
```
Service Interfaces 🆕:
- IFraudDetectionService (Should-Have)
- IUserPortalService (Should-Have)
- IABTestingService (Nice-to-Have)
- IRecommendationService (Nice-to-Have)

Repository Interfaces 🆕:
- IFraudScoreRepository (Should-Have)
- IUserPreferenceRepository (Should-Have)
- IExperimentRepository (Nice-to-Have)
- IRecommendationRepository (Nice-to-Have)
```

---

### **3. Part07 - Database Design** 🔴
**Before**: 6 core tables (Campaigns, Users, Barcodes, Redemptions, AuditLogs, Sessions)
**After**: 26 tables across 3 phases
**New structure**:
```
07.3.1_Core_Tables/ (11 tables - bổ sung 5 tables thiếu) 🔄
07.3.2_Phase_2_Tables/ (8 tables) 🆕
07.3.3_Phase_3_Tables/ (7 tables) 🆕
```

**Missing MVP tables added** 🆕:
- Brands_Table
- Locations_Table
- Barcode_Pools_Table
- Roles_Table
- User_Roles_Table

---

### **4. Part08 - API Design** 🟡
**Before**: 9 API groups (Must-Have only)
**After**: 15 API groups
**New API groups** 🆕:
- Fraud Detection APIs (4 endpoints)
- User Portal APIs (4 endpoints)
- Advanced Analytics APIs (4 endpoints)
- A/B Testing APIs (5 endpoints)
- Recommendation APIs (4 endpoints)
- Custom Reporting APIs (4 endpoints)

---

### **5. Part09 - Use Cases** 🟡
**Before**: 8 core use cases (UC-001 to UC-008)
**After**: 14 use cases
**New use cases** 🆕:
- UC-009: Detect Fraud (Should-Have)
- UC-010: Manage Consent (Should-Have)
- UC-011: Analyze Cohorts (Should-Have)
- UC-012: Run A/B Test (Nice-to-Have)
- UC-013: Generate Recommendations (Nice-to-Have)
- UC-014: Create Custom Report (Nice-to-Have)

---

### **6. Part10 - UI/UX Design** 🟢
**Before**: Admin UI + Landing Pages only
**After**: Admin UI + Landing Pages + User Portal + Advanced Dashboards
**New screens** 🆕:
- Fraud Detection Dashboard (Should-Have)
- User Portal (5 screens - Should-Have)
- A/B Testing Dashboard (Nice-to-Have)
- Custom Reports Builder (Nice-to-Have)

---

## ✅ **VALIDATION CHECKLIST**

### **Coverage Check:**

- ✅ **Must-Have features**: Fully covered (FR-001 to FR-008)
- ✅ **Should-Have features**: Now covered (FR-009 to FR-011)
- ✅ **Nice-to-Have features**: Now covered (FR-012 to FR-014)
- ✅ **All interfaces**: Service + Repository interfaces for all phases
- ✅ **All database tables**: Phase 1 + Phase 2 + Phase 3
- ✅ **All APIs**: Endpoints for all features
- ✅ **All use cases**: Core + Should-Have + Nice-to-Have
- ✅ **All UI screens**: Admin + Landing + Portal + Advanced

### **Consistency Check:**

- ✅ Naming conventions consistent (FR-001 to FR-014)
- ✅ Folder structure logical (Core → Should → Nice)
- ✅ File naming follows pattern
- ✅ Phase labels clear (Phase 1, 2, 3)
- ✅ Traceability maintained (FR → Tables → APIs → Use Cases → UI)
