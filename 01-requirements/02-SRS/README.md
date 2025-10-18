## Cấu trúc thư mục tài liệu
```
SRS_Product_Sampling_Platform/
│
├── Part00_Checklist_Overview/ ✅
│   ├── 00.1_Purpose_and_Scope.md
│   ├── 00.2_Progress_Tracking.md
│   ├── 00.3_Dependencies_Matrix.md
│   ├── 00.4_Critical_Path.md
│   └── 00.5_Success_Criteria.md
│   [Ref: 02-SRS-V2.md Part00]
│
├── Part01_Introduction/ ✅
│   ├── 01.1_Document_Purpose.md
│   ├── 01.2_Project_Scope.md
│   │   ├── 01.2.1_In_Scope.md
│   │   └── 01.2.2_Out_of_Scope.md
│   ├── 01.3_Definitions_and_Acronyms.md
│   ├── 01.4_References.md
│   │   ├── 01.4.1_Input_Documents.md
│   │   └── 01.4.2_Standards.md
│   ├── 01.5_Conventions.md
│   │   ├── 01.5.1_Requirement_IDs.md
│   │   ├── 01.5.2_Priority_Levels.md
│   │   └── 01.5.3_Status_Indicators.md
│   ├── 01.6_Document_Structure.md
│   └── 01.7_Quality_Assurance.md
│   [Ref: 02-SRS-V2.md Part01, Problem.md, 01-BRD.md]
│
├── Part02_System_Overview/ ✅
│   ├── 02.1_System_Description.md
│   ├── 02.2_System_Context.md
│   │   ├── 02.2.1_Business_Context.md
│   │   ├── 02.2.2_User_Personas.md
│   │   └── 02.2.3_Operating_Environment.md
│   ├── 02.3_System_Actors.md
│   │   ├── 02.3.1_Admin_Role.md
│   │   ├── 02.3.2_Group_Admin_Role.md
│   │   ├── 02.3.3_Customer_Account_Role.md
│   │   ├── 02.3.4_Serving_Account_Role.md
│   │   ├── 02.3.5_Auditor_Role.md
│   │   └── 02.3.6_User_Role.md
│   ├── 02.4_System_Dependencies.md
│   │   ├── 02.4.1_External_Systems.md
│   │   ├── 02.4.2_Third_Party_Services.md
│   │   └── 02.4.3_Integration_Points.md
│   └── 02.5_Assumptions_and_Constraints.md
│   [Ref: 02-SRS-V2.md Part02, Access_Control_Tree_Grok.md]
│
├── Part03_Scope_and_Objectives/ ✅
│   ├── 03.1_Business_Goals.md
│   │   ├── 03.1.1_Primary_Objectives.md
│   │   ├── 03.1.2_Strategic_Value.md
│   │   └── 03.1.3_Success_Metrics.md
│   ├── 03.2_Product_Vision.md
│   │   ├── 03.2.1_Vision_Statement.md
│   │   ├── 03.2.2_Market_Positioning.md
│   │   └── 03.2.3_Competitive_Advantage.md
│   ├── 03.3_MVP_Definition.md
│   │   ├── 03.3.1_Core_Features.md
│   │   ├── 03.3.2_Phase_1_Scope.md
│   │   └── 03.3.3_Success_Criteria.md
│   ├── 03.4_Feature_Prioritization.md
│   │   ├── 03.4.1_Must_Have_Features.md
│   │   ├── 03.4.2_Should_Have_Features.md
│   │   └── 03.4.3_Nice_to_Have_Features.md
│   └── 03.5_KPI_Mapping.md
│   [Ref: 02-SRS-V2.md Part03, 01-BRD.md, Problem.md]
│
├── Part04_Functional_Requirements/ ✅
│   ├── 04.1_Overview.md
│   ├── 04.2_Must_Have_Requirements/ 🔴
│   │   ├── FR-001_Campaign_Management/
│   │   │   ├── 04.2.1.1_Overview.md
│   │   │   ├── 04.2.1.2_User_Stories.md
│   │   │   ├── 04.2.1.3_Functional_Specs.md
│   │   │   ├── 04.2.1.4_Business_Rules.md
│   │   │   ├── 04.2.1.5_API_Endpoints.md
│   │   │   └── 04.2.1.6_Acceptance_Criteria.md
│   │   ├── FR-002_Barcode_Management/
│   │   │   ├── 04.2.2.1_Overview.md
│   │   │   ├── 04.2.2.2_User_Stories.md
│   │   │   ├── 04.2.2.3_Barcode_Format.md
│   │   │   ├── 04.2.2.4_Import_Process.md
│   │   │   ├── 04.2.2.5_Status_Management.md
│   │   │   └── 04.2.2.6_Acceptance_Criteria.md
│   │   ├── FR-003_Landing_Page_Form/
│   │   │   ├── 04.2.3.1_Overview.md
│   │   │   ├── 04.2.3.2_Form_Fields.md
│   │   │   ├── 04.2.3.3_Validation_Rules.md
│   │   │   ├── 04.2.3.4_Consent_Management.md
│   │   │   └── 04.2.3.5_Acceptance_Criteria.md
│   │   ├── FR-004_OTP_Verification/
│   │   ├── FR-005_Redemption_POS/
│   │   ├── FR-006_Analytics_Dashboard/
│   │   ├── FR-007_CRM_Sync/
│   │   └── FR-008_Access_Control/
│   ├── 04.3_Should_Have_Requirements/ 🟡
│   │   ├── FR-009_User_Portal/
│   │   ├── FR-010_Ads_Format_Management/
│   │   └── FR-011_Fraud_Detection/
│   ├── 04.4_Nice_to_Have_Requirements/ 🟢
│   │   ├── FR-012_AB_Testing/
│   │   └── FR-013_AI_Personalization/
│   └── 04.5_Traceability_Matrix.md
│   [Ref: 02-SRS-V2.md Part04, System_Feature_Tree_Grok.md]
│
├── Part05_Non_Functional_Requirements/ ✅
│   ├── 05.1_Overview.md
│   ├── 05.2_Performance_Requirements/
│   │   ├── NFR-P01_Response_Time.md
│   │   ├── NFR-P02_Throughput.md
│   │   ├── NFR-P03_Concurrent_Users.md
│   │   └── NFR-P04_Resource_Utilization.md
│   ├── 05.3_Security_Requirements/
│   │   ├── NFR-S01_Authentication.md
│   │   ├── NFR-S02_Authorization_RBAC.md
│   │   ├── NFR-S03_Data_Encryption.md
│   │   ├── NFR-S04_Audit_Logging.md
│   │   └── NFR-S05_OWASP_Compliance.md
│   ├── 05.4_Reliability_Requirements/
│   │   ├── NFR-R01_Uptime_SLA.md
│   │   ├── NFR-R02_Disaster_Recovery.md
│   │   ├── NFR-R03_Backup_Strategy.md
│   │   └── NFR-R04_Fault_Tolerance.md
│   ├── 05.5_Scalability_Requirements/
│   │   ├── NFR-SC01_Horizontal_Scaling.md
│   │   ├── NFR-SC02_Multi_Tenant.md
│   │   ├── NFR-SC03_Load_Balancing.md
│   │   └── NFR-SC04_Caching_Strategy.md
│   ├── 05.6_Usability_Requirements/
│   │   ├── NFR-U01_Mobile_First.md
│   │   ├── NFR-U02_Accessibility_WCAG.md
│   │   ├── NFR-U03_Internationalization.md
│   │   └── NFR-U04_User_Experience.md
│   └── 05.7_Compliance_Requirements/
│       ├── NFR-C01_GDPR.md
│       ├── NFR-C02_PDPA_Vietnam.md
│       └── NFR-C03_Data_Privacy.md
│   [Ref: 02-SRS-V2.md Part05, 01-BRD.md NFRs]
│
├── Part06_System_Architecture/ ✅
│   ├── 06.1_Architecture_Overview.md
│   ├── 06.2_Logical_Architecture/
│   │   ├── 06.2.1_Microservices_Design.md
│   │   ├── 06.2.2_Service_Boundaries.md
│   │   ├── 06.2.3_Component_Diagram.md
│   │   └── 06.2.4_Data_Flow_Diagram.md
│   ├── 06.3_Physical_Architecture/
│   │   ├── 06.3.1_Deployment_Diagram.md
│   │   ├── 06.3.2_Infrastructure_Topology.md
│   │   ├── 06.3.3_Network_Architecture.md
│   │   └── 06.3.4_Cloud_Services.md
│   ├── 06.4_Technology_Stack/
│   │   ├── 06.4.1_Backend_Technologies.md
│   │   ├── 06.4.2_Frontend_Technologies.md
│   │   ├── 06.4.3_Database_Technologies.md
│   │   ├── 06.4.4_Integration_Technologies.md
│   │   └── 06.4.5_DevOps_Tools.md
│   ├── 06.5_Communication_Patterns/
│   │   ├── 06.5.1_Synchronous_Communication.md
│   │   ├── 06.5.2_Asynchronous_Messaging.md
│   │   ├── 06.5.3_Event_Driven_Architecture.md
│   │   └── 06.5.4_API_Gateway_Pattern.md
│   └── 06.6_Scalability_Patterns.md
│   [Ref: 02-SRS-V2.md Part06, 01-BRD.md Technical Stack]
│
├── Part06B_Design_Patterns/ 📄 🔴 [YÊU CẦU CỦA BẠN - THIẾU]
│   ├── 06B.1_Design_Patterns_Catalog/
│   │   ├── 06B.1.1_Creational_Patterns/
│   │   │   ├── 06B.1.1.1_Factory_Pattern.md
│   │   │   ├── 06B.1.1.2_Builder_Pattern.md
│   │   │   ├── 06B.1.1.3_Singleton_Pattern.md
│   │   │   └── 06B.1.1.4_Prototype_Pattern.md
│   │   ├── 06B.1.2_Structural_Patterns/
│   │   │   ├── 06B.1.2.1_Adapter_Pattern.md
│   │   │   ├── 06B.1.2.2_Facade_Pattern.md
│   │   │   ├── 06B.1.2.3_Proxy_Pattern.md
│   │   │   └── 06B.1.2.4_Decorator_Pattern.md
│   │   └── 06B.1.3_Behavioral_Patterns/
│   │       ├── 06B.1.3.1_Strategy_Pattern.md
│   │       ├── 06B.1.3.2_Observer_Pattern.md
│   │       ├── 06B.1.3.3_Command_Pattern.md
│   │       └── 06B.1.3.4_Chain_of_Responsibility.md
│   ├── 06B.2_Interface_Definitions/
│   │   ├── 06B.2.1_Service_Interfaces/
│   │   │   ├── 06B.2.1.1_ICampaignService.md
│   │   │   ├── 06B.2.1.2_IBarcodeService.md
│   │   │   ├── 06B.2.1.3_IAuthService.md
│   │   │   ├── 06B.2.1.4_IAnalyticsService.md
│   │   │   └── 06B.2.1.5_INotificationService.md
│   │   ├── 06B.2.2_Repository_Interfaces/
│   │   │   ├── 06B.2.2.1_IRepository_Base.md
│   │   │   ├── 06B.2.2.2_ICampaignRepository.md
│   │   │   ├── 06B.2.2.3_IUserRepository.md
│   │   │   └── 06B.2.2.4_IBarcodeRepository.md
│   │   └── 06B.2.3_External_Integration_Interfaces/
│   │       ├── 06B.2.3.1_ICRMConnector.md
│   │       ├── 06B.2.3.2_ISMSProvider.md
│   │       ├── 06B.2.3.3_IEmailProvider.md
│   │       └── 06B.2.3.4_IPOSConnector.md
│   ├── 06B.3_Abstract_Base_Classes/
│   │   ├── 06B.3.1_BaseService.md
│   │   ├── 06B.3.2_BaseRepository.md
│   │   ├── 06B.3.3_BaseController.md
│   │   └── 06B.3.4_BaseValidator.md
│   ├── 06B.4_Dependency_Injection/
│   │   ├── 06B.4.1_DI_Container_Setup.md
│   │   ├── 06B.4.2_Service_Registration.md
│   │   ├── 06B.4.3_Lifetime_Management.md
│   │   └── 06B.4.4_Configuration_Pattern.md
│   ├── 06B.5_Module_Independence/
│   │   ├── 06B.5.1_Module_Boundaries.md
│   │   ├── 06B.5.2_Inter_Module_Communication.md
│   │   ├── 06B.5.3_Event_Bus_Pattern.md
│   │   ├── 06B.5.4_API_Contracts.md
│   │   └── 06B.5.5_Versioning_Strategy.md
│   ├── 06B.6_Code_Organization/
│   │   ├── 06B.6.1_Folder_Structure.md
│   │   ├── 06B.6.2_Naming_Conventions.md
│   │   ├── 06B.6.3_File_Organization.md
│   │   └── 06B.6.4_Package_Structure.md
│   └── 06B.7_Documentation_Standards/
│       ├── 06B.7.1_Code_Comments.md
│       ├── 06B.7.2_API_Documentation.md
│       ├── 06B.7.3_Architecture_Decision_Records.md
│       └── 06B.7.4_README_Templates.md
│   [Ref: YÊU CẦU CỦA BẠN, Clean Architecture, SOLID Principles]
│
├── Part07_Database_Design/ ✅
│   ├── 07.1_Data_Architecture_Overview.md
│   ├── 07.2_Entity_Relationship_Diagram/
│   │   ├── 07.2.1_Logical_ERD.md
│   │   ├── 07.2.2_Physical_ERD.md
│   │   └── 07.2.3_Relationship_Types.md
│   ├── 07.3_MongoDB_Collections/
│   │   ├── 07.3.1_Campaigns_Collection.md
│   │   ├── 07.3.2_Users_Collection.md
│   │   ├── 07.3.3_Barcodes_Collection.md
│   │   ├── 07.3.4_Redemptions_Collection.md
│   │   └── 07.3.5_Analytics_Collection.md
│   ├── 07.4_PostgreSQL_Tables/
│   │   ├── 07.4.1_Transactional_Tables.md
│   │   ├── 07.4.2_Audit_Tables.md
│   │   └── 07.4.3_Configuration_Tables.md
│   ├── 07.5_Data_Flow_Diagrams.md
│   ├── 07.6_Indexing_Strategy.md
│   ├── 07.7_Data_Partitioning.md
│   └── 07.8_Backup_Recovery.md
│   [Ref: 02-SRS-V2.md Part07]
│
├── Part08_API_Design/ ✅
│   ├── 08.1_API_Overview.md
│   ├── 08.2_RESTful_Endpoints/
│   │   ├── 08.2.1_Authentication_APIs.md
│   │   ├── 08.2.2_Campaign_APIs.md
│   │   ├── 08.2.3_Barcode_APIs.md
│   │   ├── 08.2.4_User_APIs.md
│   │   ├── 08.2.5_Analytics_APIs.md
│   │   └── 08.2.6_Admin_APIs.md
│   ├── 08.3_Request_Response_Schemas.md
│   ├── 08.4_Error_Handling.md
│   ├── 08.5_Rate_Limiting.md
│   ├── 08.6_Versioning_Strategy.md
│   └── 08.7_API_Security.md
│   [Ref: 02-SRS-V2.md Part08]
│
├── Part09_Use_Cases/ ✅
│   ├── 09.1_Use_Case_Overview.md
│   ├── 09.2_Actor_Use_Case_Matrix.md
│   ├── 09.3_Detailed_Use_Cases/
│   │   ├── UC-001_Campaign_Creation/
│   │   │   ├── 09.3.1.1_Overview.md
│   │   │   ├── 09.3.1.2_Preconditions.md
│   │   │   ├── 09.3.1.3_Main_Flow.md
│   │   │   ├── 09.3.1.4_Alternative_Flows.md
│   │   │   ├── 09.3.1.5_Exception_Flows.md
│   │   │   └── 09.3.1.6_Postconditions.md
│   │   ├── UC-002_User_Registration/
│   │   ├── UC-003_Barcode_Redemption/
│   │   ├── UC-004_Analytics_View/
│   │   ├── UC-005_Admin_Management/
│   │   ├── UC-006_POS_Integration/
│   │   ├── UC-007_CRM_Sync/
│   │   └── UC-008_Fraud_Detection/
│   └── 09.4_Use_Case_Diagrams.md
│   [Ref: 02-SRS-V2.md Part09]
│
Part10_UI_UX_Design/
│
├── Part10A_User_Flows/
│   │
│   ├── Part10A1_End_User_Journey/
│   │   ├── 10A1.1_User_Personas_Success_Criteria.md
│   │   ├── 10A1.2_Complete_User_Journey_Flow.md
│   │   ├── 10A1.3_Mobile_Interface_Form_Validation.md
│   │   ├── 10A1.4_Progressive_Enhancement_PWA.md
│   │   ├── 10A1.5_Error_Scenarios_Fraud_Detection.md
│   │   └── 10A1.6_UX_Principles_Accessibility.md
│   │
│   ├── Part10A2_Brand_Admin_Journey/
│   │   │
│   │   ├── Part10A2-1_Overview_Dashboard/
│   │   │   ├── 10A2-1.1_Multi_Method_Authentication.md
│   │   │   ├── 10A2-1.2_Responsive_Dashboard_Layout.md
│   │   │   ├── 10A2-1.3_Realtime_Metric_Cards.md
│   │   │   ├── 10A2-1.4_Navigation_With_Permissions.md
│   │   │   └── 10A2-1.5_Quick_Actions_Shortcuts.md
│   │   │
│   │   ├── Part10A2-2_Campaign_Creation/
│   │   │   ├── 10A2-2.1_Wizard_Overview_Progress.md
│   │   │   ├── 10A2-2.2_Step1_Basic_Information.md
│   │   │   ├── 10A2-2.3_Step2_Schedule_Timezone.md
│   │   │   ├── 10A2-2.4_Step3_Location_Selection.md
│   │   │   ├── 10A2-2.5_Step4_Barcode_Import.md
│   │   │   ├── 10A2-2.6_Draft_Management_Autosave.md
│   │   │   └── 10A2-2.7_Success_Metrics_Tracking.md
│   │   │
│   │   ├── Part10A2-3_Ads_Format_Management/
│   │   │   ├── 10A2-3.1_Format_Type_Selection.md
│   │   │   ├── 10A2-3.2_Design_File_Upload.md
│   │   │   ├── 10A2-3.3_QR_Zone_Configuration.md
│   │   │   ├── 10A2-3.4_Validation_Engine.md
│   │   │   ├── 10A2-3.5_Preview_Testing.md
│   │   │   ├── 10A2-3.6_Dynamic_QR_Generation.md
│   │   │   └── 10A2-3.7_Version_Management.md
│   │   │
│   │   ├── Part10A2-4_Campaign_Lifecycle/
│   │   │   ├── 10A2-4.1_State_Management.md
│   │   │   ├── 10A2-4.2_Publishing_Workflow.md
│   │   │   ├── 10A2-4.3_Active_Campaign_Monitoring.md
│   │   │   ├── 10A2-4.4_Edit_While_Active.md
│   │   │   ├── 10A2-4.5_Pause_Resume_Operations.md
│   │   │   ├── 10A2-4.6_Campaign_Completion.md
│   │   │   └── 10A2-4.7_Archival_Process.md
│   │   │
│   │   ├── Part10A2-5_Analytics_Reporting/
│   │   │   ├── 10A2-5.1_Conversion_Funnel_Visualization.md
│   │   │   ├── 10A2-5.2_Location_Performance_Geo.md
│   │   │   ├── 10A2-5.3_Time_Based_Analytics.md
│   │   │   ├── 10A2-5.4_User_Behavior_Analysis.md
│   │   │   ├── 10A2-5.5_Export_Capabilities.md
│   │   │   ├── 10A2-5.6_Custom_Dashboards.md
│   │   │   ├── 10A2-5.7_Realtime_Monitoring.md
│   │   │   ├── 10A2-5.8_Comparative_Analysis.md
│   │   │   ├── 10A2-5.9_Predictive_Analytics.md
│   │   │   ├── 10A2-5.10_Data_Visualization_Best_Practices.md
│   │   │   ├── 10A2-5.11_Analytics_Performance_Metrics.md
│   │   │   └── 10A2-5.12_Implementation_Roadmap.md
│   │   │
│   │   ├── Part10A2-6_Collaboration_Approvals/
│   │   │   ├── 10A2-6.1_Comment_System_Threading.md
│   │   │   ├── 10A2-6.2_Version_History_Diff.md
│   │   │   ├── 10A2-6.3_Approval_Workflows.md
│   │   │   └── 10A2-6.4_Activity_Feeds.md
│   │   │
│   │   ├── Part10A2-7_AB_Testing_Optimization/
│   │   │   ├── 10A2-7.1_AB_Test_Setup_Interface.md
│   │   │   ├── 10A2-7.2_Statistical_Significance.md
│   │   │   └── 10A2-7.3_Optimization_Recommendations.md
│   │   │
│   │   ├── Part10A2-8_Integrations/
│   │   │   ├── 10A2-8.1_CRM_Integration_Setup.md
│   │   │   ├── 10A2-8.2_Analytics_Platform_Connections.md
│   │   │   ├── 10A2-8.3_POS_System_Integration.md
│   │   │   └── 10A2-8.4_Email_SMS_Provider_Config.md
│   │   │
│   │   ├── Part10A2-9_RBAC_Permissions/
│   │   │   ├── 10A2-9.1_Role_Management_Interface.md
│   │   │   ├── 10A2-9.2_Permission_Assignment_UI.md
│   │   │   ├── 10A2-9.3_Access_Control_Visualization.md
│   │   │   └── 10A2-9.4_Audit_Logs_Viewer_Interface.md          ⭐ NEW
│   │   │
│   │   └── Part10A2-10_UX_Features_Metrics/
│   │       ├── 10A2-10.1_Shortcuts_Power_User_Features.md
│   │       ├── 10A2-10.2_Notification_Preferences.md
│   │       └── 10A2-10.3_UX_Performance_KPIs.md
│   │
│   ├── Part10A3_Serving_Account_Journey/
│   │   ├── 10A3.1_POS_Authentication_Role_Setup.md
│   │   ├── 10A3.2_Barcode_Scanning_Interface.md
│   │   ├── 10A3.3_Redemption_Workflow_Validation.md
│   │   ├── 10A3.4_Offline_Mode_Handling.md
│   │   └── 10A3.5_Staff_Training_Interface.md
│   │
│   └── Part10A4_User_Portal_Journey/
│       ├── 10A4.1_PWA_Portal_Access_Auth.md
│       ├── 10A4.2_Barcode_History_Status_Tracking.md
│       ├── 10A4.3_Notification_Preferences.md
│       ├── 10A4.4_Support_Ticket_System.md
│       └── 10A4.5_Loyalty_Program_Integration.md
│
├── Part10B_Wireframes/
│   │
│   ├── Part10B1_Desktop_Wireframes/
│   │   ├── 10B1.1_Admin_Dashboard_Layout_1440px.md
│   │   ├── 10B1.2_Campaign_Creation_Wizard_Screens.md
│   │   ├── 10B1.3_Analytics_Dashboard_With_Charts.md
│   │   └── 10B1.4_Audit_Logs_Viewer_Screen.md                   ⭐ NEW
│   │
│   ├── Part10B2_Mobile_Wireframes/
│   │   ├── 10B2.1_Mobile_User_Journey_Screens.md
│   │   ├── 10B2.2_Mobile_Admin_Interface.md
│   │   └── 10B2.3_PWA_Portal_Screens.md
│   │
│   ├── Part10B3_Tablet_Wireframes/
│   │   ├── 10B3.1_POS_Interface_Retail_Staff.md
│   │   └── 10B3.2_Field_Marketing_Interface.md
│   │
│   └── Part10B4_Interactive_Prototypes/
│       ├── 10B4.1_User_Journey_Prototype.md
│       └── 10B4.2_Admin_Workflow_Prototypes.md
│
├── Part10C_Design_System/
│   │
│   ├── Part10C1_Component_Library/
│   │   ├── 10C1.1_Form_Components_Validation_States.md
│   │   ├── 10C1.2_Navigation_Components.md
│   │   ├── 10C1.3_Data_Display_Components.md
│   │   ├── 10C1.4_Interactive_Components.md
│   │   └── 10C1.5_Audit_Log_Components.md                       ⭐ NEW
│   │
│   ├── Part10C2_Visual_Design_Standards/
│   │   ├── 10C2.1_Color_Palette_Accessibility.md
│   │   ├── 10C2.2_Typography_System.md
│   │   ├── 10C2.3_Spacing_Layout_Grid.md
│   │   └── 10C2.4_Iconography_Standards.md
│   │
│   └── Part10C3_Brand_Guidelines/
│       ├── 10C3.1_Logo_Usage_Placement.md
│       ├── 10C3.2_Brand_Voice_UI_Copy.md
│       └── 10C3.3_Photography_Imagery_Guidelines.md
│
├── Part10D_Accessibility/
│   │
│   ├── Part10D1_WCAG_2.1_AA_Implementation/
│   │   ├── 10D1.1_Screen_Reader_Optimization.md
│   │   ├── 10D1.2_Keyboard_Navigation_Support.md
│   │   ├── 10D1.3_Color_Contrast_Validation.md
│   │   └── 10D1.4_Motion_Animation_Guidelines.md
│   │
│   └── Part10D2_Inclusive_Design_Practices/
│       ├── 10D2.1_Cognitive_Accessibility.md
│       ├── 10D2.2_Multilingual_Support.md
│       └── 10D2.3_Device_Accessibility.md
│
├── Part10E_UX_Metrics/
|   │
|   ├── Part10E1_User_Experience_KPIs/
|   │   ├── 10E1.1_Conversion_Funnel_Metrics.md
|   │   ├── 10E1.2_Task_Completion_Rates.md
|   │   ├── 10E1.3_User_Satisfaction_Scores.md
|   │   └── 10E1.4_Performance_Impact_On_UX.md
|   │
|   ├── Part10E2_Productivity_Metrics/
|   │   ├── 10E2.1_Admin_Workflow_Efficiency.md
|   │   ├── 10E2.2_Error_Reduction_Tracking.md
|   │   └── 10E2.3_Feature_Adoption_Rates.md
|   │
|   ├── Part10E3_Usability_Testing_Framework/
|   │   ├── 10E3.1_User_Testing_Procedures.md
|   │   ├── 10E3.2_AB_Testing_Framework.md
|   │   └── 10E3.3_Accessibility_Testing_Procedures.md
|   │
|   └── Part10E4_Continuous_Improvement_Process/
|       ├── 10E4.1_Data_Collection_Strategy.md
|       ├── 10E4.2_UX_Review_Cycles.md
|       └── 10E4.3_User_Feedback_Integration.md
│
├── Part11_Security_Compliance/ 📄 🔴 [CHƯA XONG - BLOCKING]
│   ├── 11.1_Security_Overview.md
│   ├── 11.2_GDPR_Compliance/
│   │   ├── 11.2.1_Data_Protection_Principles.md
│   │   ├── 11.2.2_User_Consent_Management.md
│   │   ├── 11.2.3_Right_to_Erasure.md
│   │   ├── 11.2.4_Data_Portability.md
│   │   └── 11.2.5_Breach_Notification.md
│   ├── 11.3_PDPA_Vietnam_Compliance/
│   │   ├── 11.3.1_Legal_Basis_for_Processing.md
│   │   ├── 11.3.2_Data_Localization.md
│   │   ├── 11.3.3_Cross_Border_Transfer.md
│   │   └── 11.3.4_Authority_Notification.md
│   ├── 11.4_Data_Encryption/
│   │   ├── 11.4.1_Encryption_at_Rest.md
│   │   ├── 11.4.2_Encryption_in_Transit.md
│   │   ├── 11.4.3_Key_Management.md
│   │   └── 11.4.4_PII_Pseudonymization.md
│   ├── 11.5_Authentication_Authorization/
│   │   ├── 11.5.1_Multi_Factor_Authentication.md
│   │   ├── 11.5.2_Session_Management.md
│   │   ├── 11.5.3_Password_Policies.md
│   │   └── 11.5.4_OAuth2_Implementation.md
│   ├── 11.6_Secure_Coding_Practices/
│   │   ├── 11.6.1_Input_Validation.md
│   │   ├── 11.6.2_Output_Encoding.md
│   │   ├── 11.6.3_SQL_Injection_Prevention.md
│   │   └── 11.6.4_XSS_Prevention.md
│   ├── 11.7_Penetration_Testing/
│   │   ├── 11.7.1_Test_Scope.md
│   │   ├── 11.7.2_Test_Methodology.md
│   │   ├── 11.7.3_Vulnerability_Remediation.md
│   │   └── 11.7.4_Reporting_Requirements.md
│   └── 11.8_Security_Audit/
│       ├── 11.8.1_Audit_Logging.md
│       ├── 11.8.2_Log_Retention.md
│       ├── 11.8.3_Audit_Procedures.md
│       └── 11.8.4_Compliance_Reports.md
│   [Ref: 01-BRD.md compliance, Access_Control_Tree_Grok.md security]
│
├── Part12_Performance_Testing/ 📄 🟡 [CHƯA XONG]
│   ├── 12.1_Testing_Strategy_Overview.md
│   ├── 12.2_Load_Testing/
│   │   ├── 12.2.1_Test_Scenarios.md
│   │   ├── 12.2.2_Concurrent_User_Tests.md
│   │   ├── 12.2.3_Peak_Load_Tests.md
│   │   └── 12.2.4_Sustained_Load_Tests.md
│   ├── 12.3_Stress_Testing/
│   │   ├── 12.3.1_System_Breaking_Points.md
│   │   ├── 12.3.2_Recovery_Testing.md
│   │   └── 12.3.3_Failover_Testing.md
│   ├── 12.4_Performance_Benchmarks/
│   │   ├── 12.4.1_API_Response_Times.md
│   │   ├── 12.4.2_Database_Query_Performance.md
│   │   ├── 12.4.3_Page_Load_Times.md
│   │   └── 12.4.4_Transaction_Throughput.md
│   ├── 12.5_Scalability_Testing/
│   │   ├── 12.5.1_Horizontal_Scaling_Tests.md
│   │   ├── 12.5.2_Database_Scaling_Tests.md
│   │   └── 12.5.3_Auto_Scaling_Validation.md
│   ├── 12.6_Performance_Monitoring/
│   │   ├── 12.6.1_APM_Tools_Setup.md
│   │   ├── 12.6.2_Metrics_Collection.md
│   │   ├── 12.6.3_Performance_Dashboards.md
│   │   └── 12.6.4_Alerting_Rules.md
│   └── 12.7_Performance_Optimization/
│       ├── 12.7.1_Caching_Strategy.md
│       ├── 12.7.2_Query_Optimization.md
│       ├── 12.7.3_CDN_Configuration.md
│       └── 12.7.4_Code_Profiling.md
│   [Ref: 02-SRS-V2.md Part05 NFRs, 01-BRD.md Performance KPIs]
│
├── Part13_System_Testing_Strategy/ 📄 🟡 [CHƯA XONG]
│   ├── 13.1_Testing_Overview.md
│   ├── 13.2_Unit_Testing/
│   │   ├── 13.2.1_Test_Coverage_Requirements.md
│   │   ├── 13.2.2_Testing_Frameworks.md
│   │   ├── 13.2.3_Mock_Strategy.md
│   │   ├── 13.2.4_Test_Naming_Conventions.md
│   │   └── 13.2.5_Code_Coverage_Goals.md
│   ├── 13.3_Integration_Testing/
│   │   ├── 13.3.1_Service_Integration_Tests.md
│   │   ├── 13.3.2_Database_Integration_Tests.md
│   │   ├── 13.3.3_External_API_Integration_Tests.md
│   │   ├── 13.3.4_Message_Queue_Tests.md
│   │   └── 13.3.5_Test_Data_Management.md
│   ├── 13.4_End_to_End_Testing/
│   │   ├── 13.4.1_E2E_Test_Scenarios/
│   │   │   ├── 13.4.1.1_User_Registration_Flow.md
│   │   │   ├── 13.4.1.2_Campaign_Creation_Flow.md
│   │   │   ├── 13.4.1.3_Redemption_Flow.md
│   │   │   └── 13.4.1.4_Analytics_Flow.md
│   │   ├── 13.4.2_Automation_Framework.md
│   │   ├── 13.4.3_Test_Environment_Setup.md
│   │   └── 13.4.4_Cross_Browser_Testing.md
│   ├── 13.5_API_Testing/
│   │   ├── 13.5.1_Functional_API_Tests.md
│   │   ├── 13.5.2_Contract_Testing.md
│   │   ├── 13.5.3_API_Security_Tests.md
│   │   └── 13.5.4_API_Performance_Tests.md
│   ├── 13.6_Security_Testing/
│   │   ├── 13.6.1_OWASP_Top_10_Tests.md
│   │   ├── 13.6.2_Authentication_Tests.md
│   │   ├── 13.6.3_Authorization_Tests.md
│   │   └── 13.6.4_Data_Protection_Tests.md
│   ├── 13.7_Regression_Testing/
│   │   ├── 13.7.1_Test_Suite_Management.md
│   │   ├── 13.7.2_Automated_Regression_Tests.md
│   │   └── 13.7.3_Smoke_Tests.md
│   ├── 13.8_UAT_Strategy/
│   │   ├── 13.8.1_UAT_Planning.md
│   │   ├── 13.8.2_Test_Cases_for_Business.md
│   │   ├── 13.8.3_Stakeholder_Sign_off.md
│   │   └── 13.8.4_UAT_Environment.md
│   └── 13.9_Test_Automation/
│       ├── 13.9.1_CI_CD_Integration.md
│       ├── 13.9.2_Test_Execution_Pipeline.md
│       ├── 13.9.3_Test_Reporting.md
│       └── 13.9.4_Failed_Test_Management.md
│   [Ref: 02-SRS-V2.md Part04 Acceptance Criteria, Part06B DI for testability]
│
├── Part14_Deployment_Architecture/ 📄 🟠 [CHƯA XONG]
│   ├── 14.1_Deployment_Overview.md
│   ├── 14.2_Environment_Strategy/
│   │   ├── 14.2.1_Development_Environment.md
│   │   ├── 14.2.2_Staging_Environment.md
│   │   ├── 14.2.3_Production_Environment.md
│   │   └── 14.2.4_Environment_Parity.md
│   ├── 14.3_CI_CD_Pipeline/
│   │   ├── 14.3.1_Source_Control_Strategy/
│   │   │   ├── 14.3.1.1_Git_Workflow.md
│   │   │   ├── 14.3.1.2_Branching_Strategy.md
│   │   │   ├── 14.3.1.3_Code_Review_Process.md
│   │   │   └── 14.3.1.4_Commit_Standards.md
│   │   ├── 14.3.2_Build_Pipeline/
│   │   │   ├── 14.3.2.1_Build_Triggers.md
│   │   │   ├── 14.3.2.2_Build_Steps.md
│   │   │   ├── 14.3.2.3_Artifact_Management.md
│   │   │   └── 14.3.2.4_Build_Notifications.md
│   │   ├── 14.3.3_Test_Automation_Pipeline/
│   │   │   ├── 14.3.3.1_Unit_Test_Execution.md
│   │   │   ├── 14.3.3.2_Integration_Test_Execution.md
│   │   │   ├── 14.3.3.3_E2E_Test_Execution.md
│   │   │   └── 14.3.3.4_Test_Reporting.md
│   │   ├── 14.3.4_Deployment_Pipeline/
│   │   │   ├── 14.3.4.1_Deployment_Stages.md
│   │   │   ├── 14.3.4.2_Approval_Gates.md
│   │   │   ├── 14.3.4.3_Rollback_Strategy.md
│   │   │   └── 14.3.4.4_Blue_Green_Deployment.md
│   │   └── 14.3.5_Pipeline_Tools/
│   │       ├── 14.3.5.1_GitHub_Actions.md
│   │       ├── 14.3.5.2_Jenkins_Configuration.md
│   │       └── 14.3.5.3_GitLab_CI.md
│   ├── 14.4_Container_Orchestration/
│   │   ├── 14.4.1_Docker_Configuration/
│   │   │   ├── 14.4.1.1_Dockerfile_Standards.md
│   │   │   ├── 14.4.1.2_Multi_Stage_Builds.md
│   │   │   ├── 14.4.1.3_Image_Optimization.md
│   │   │   └── 14.4.1.4_Registry_Management.md
│   │   ├── 14.4.2_Kubernetes_Setup/
│   │   │   ├── 14.4.2.1_Cluster_Architecture.md
│   │   │   ├── 14.4.2.2_Namespace_Strategy.md
│   │   │   ├── 14.4.2.3_Pod_Configuration.md
│   │   │   ├── 14.4.2.4_Service_Discovery.md
│   │   │   └── 14.4.2.5_Ingress_Configuration.md
│   │   └── 14.4.3_ECS_Alternative/
│   │       ├── 14.4.3.1_Task_Definitions.md
│   │       ├── 14.4.3.2_Service_Configuration.md
│   │       └── 14.4.3.3_Load_Balancing.md
│   ├── 14.5_Infrastructure_as_Code/
│   │   ├── 14.5.1_Terraform_Configuration.md
│   │   ├── 14.5.2_CloudFormation_Templates.md
│   │   ├── 14.5.3_Resource_Provisioning.md
│   │   └── 14.5.4_State_Management.md
│   ├── 14.6_Configuration_Management/
│   │   ├── 14.6.1_Environment_Variables.md
│   │   ├── 14.6.2_Secrets_Management.md
│   │   ├── 14.6.3_Feature_Flags.md
│   │   └── 14.6.4_Config_Updates.md
│   ├── 14.7_Database_Migration/
│   │   ├── 14.7.1_Migration_Scripts.md
│   │   ├── 14.7.2_Version_Control.md
│   │   ├── 14.7.3_Rollback_Procedures.md
│   │   └── 14.7.4_Data_Seeding.md
│   └── 14.8_Deployment_Checklist/
│       ├── 14.8.1_Pre_Deployment_Tasks.md
│       ├── 14.8.2_Deployment_Verification.md
│       ├── 14.8.3_Post_Deployment_Tasks.md
│       └── 14.8.4_Rollback_Checklist.md
│   [Ref: 02-SRS-V2.md Part06 Architecture, DevOps best practices]
│
├── Part15_Operations_Monitoring/ 📄 🟠 [CHƯA XONG]
│   ├── 15.1_Operations_Overview.md
│   ├── 15.2_Logging_Strategy/
│   │   ├── 15.2.1_Structured_Logging/
│   │   │   ├── 15.2.1.1_Log_Format_Standards.md
│   │   │   ├── 15.2.1.2_Log_Levels.md
│   │   │   ├── 15.2.1.3_Context_Enrichment.md
│   │   │   └── 15.2.1.4_Correlation_IDs.md
│   │   ├── 15.2.2_Log_Aggregation/
│   │   │   ├── 15.2.2.1_ELK_Stack_Setup.md
│   │   │   ├── 15.2.2.2_CloudWatch_Logs.md
│   │   │   ├── 15.2.2.3_Log_Retention.md
│   │   │   └── 15.2.2.4_Log_Analysis.md
│   │   └── 15.2.3_Application_Logging/
│   │       ├── 15.2.3.1_Error_Logging.md
│   │       ├── 15.2.3.2_Audit_Logging.md
│   │       ├── 15.2.3.3_Performance_Logging.md
│   │       └── 15.2.3.4_Security_Logging.md
│   ├── 15.3_Monitoring_and_Observability/
│   │   ├── 15.3.1_Metrics_Collection/
│   │   │   ├── 15.3.1.1_Application_Metrics.md
│   │   │   ├── 15.3.1.2_Infrastructure_Metrics.md
│   │   │   ├── 15.3.1.3_Business_Metrics.md
│   │   │   └── 15.3.1.4_Custom_Metrics.md
│   │   ├── 15.3.2_APM_Tools/
│   │   │   ├── 15.3.2.1_New_Relic_Setup.md
│   │   │   ├── 15.3.2.2_Datadog_Configuration.md
│   │   │   ├── 15.3.2.3_Distributed_Tracing.md
│   │   │   └── 15.3.2.4_Transaction_Monitoring.md
│   │   ├── 15.3.3_Dashboards/
│   │   │   ├── 15.3.3.1_System_Health_Dashboard.md
│   │   │   ├── 15.3.3.2_Business_KPI_Dashboard.md
│   │   │   ├── 15.3.3.3_Error_Rate_Dashboard.md
│   │   │   └── 15.3.3.4_Performance_Dashboard.md
│   │   └── 15.3.4_Synthetic_Monitoring/
│   │       ├── 15.3.4.1_Uptime_Checks.md
│   │       ├── 15.3.4.2_API_Health_Checks.md
│   │       └── 15.3.4.3_User_Journey_Tests.md
│   ├── 15.4_Alerting/
│   │   ├── 15.4.1_Alert_Rules/
│   │   │   ├── 15.4.1.1_Critical_Alerts.md
│   │   │   ├── 15.4.1.2_Warning_Alerts.md
│   │   │   ├── 15.4.1.3_Info_Alerts.md
│   │   │   └── 15.4.1.4_Alert_Thresholds.md
│   │   ├── 15.4.2_Notification_Channels/
│   │   │   ├── 15.4.2.1_PagerDuty_Integration.md
│   │   │   ├── 15.4.2.2_Slack_Notifications.md
│   │   │   ├── 15.4.2.3_Email_Alerts.md
│   │   │   └── 15.4.2.4_SMS_Alerts.md
│   │   └── 15.4.3_On_Call_Management/
│   │       ├── 15.4.3.1_Rotation_Schedule.md
│   │       ├── 15.4.3.2_Escalation_Policy.md
│   │       └── 15.4.3.3_Incident_Response.md
│   ├── 15.5_Incident_Management/
│   │   ├── 15.5.1_Incident_Classification.md
│   │   ├── 15.5.2_Response_Procedures/
│   │   │   ├── 15.5.2.1_P1_Critical_Incidents.md
│   │   │   ├── 15.5.2.2_P2_High_Priority.md
│   │   │   ├── 15.5.2.3_P3_Medium_Priority.md
│   │   │   └── 15.5.2.4_P4_Low_Priority.md
│   │   ├── 15.5.3_Post_Mortem_Process.md
│   │   └── 15.5.4_Incident_Documentation.md
│   ├── 15.6_Backup_and_Recovery/
│   │   ├── 15.6.1_Backup_Strategy/
│   │   │   ├── 15.6.1.1_Database_Backups.md
│   │   │   ├── 15.6.1.2_File_Storage_Backups.md
│   │   │   ├── 15.6.1.3_Configuration_Backups.md
│   │   │   └── 15.6.1.4_Backup_Schedule.md
│   │   ├── 15.6.2_Disaster_Recovery/
│   │   │   ├── 15.6.2.1_DR_Plan.md
│   │   │   ├── 15.6.2.2_RTO_RPO_Targets.md
│   │   │   ├── 15.6.2.3_Failover_Procedures.md
│   │   │   └── 15.6.2.4_DR_Testing.md
│   │   └── 15.6.3_Recovery_Procedures/
│   │       ├── 15.6.3.1_Database_Recovery.md
│   │       ├── 15.6.3.2_Application_Recovery.md
│   │       └── 15.6.3.3_Data_Validation.md
│   ├── 15.7_Capacity_Planning/
│   │   ├── 15.7.1_Resource_Monitoring.md
│   │   ├── 15.7.2_Growth_Projections.md
│   │   ├── 15.7.3_Scaling_Triggers.md
│   │   └── 15.7.4_Cost_Optimization.md
│   └── 15.8_Support_Operations/
│       ├── 15.8.1_Support_Tiers/
│       │   ├── 15.8.1.1_L1_Support.md
│       │   ├── 15.8.1.2_L2_Support.md
│       │   └── 15.8.1.3_L3_Support.md
│       ├── 15.8.2_Runbooks/
│       │   ├── 15.8.2.1_Common_Issues.md
│       │   ├── 15.8.2.2_Troubleshooting_Guide.md
│       │   └── 15.8.2.3_System_Restart_Procedures.md
│       ├── 15.8.3_Support_Tools.md
│       └── 15.8.4_Escalation_Matrix.md
│   [Ref: 02-SRS-V2.md Part05 NFRs Reliability, 01-BRD.md SLA targets]
│
└── Part16_Appendices/ 📄 🟢 [CHƯA XONG]
    ├── 16.1_Glossary/
    │   ├── 16.1.1_Business_Terms.md
    │   ├── 16.1.2_Technical_Terms.md
    │   ├── 16.1.3_Acronyms.md
    │   └── 16.1.4_Industry_Terms.md
    ├── 16.2_Traceability_Matrix/
    │   ├── 16.2.1_BRD_to_Functional_Requirements.md
    │   ├── 16.2.2_Functional_to_API_Mapping.md
    │   ├── 16.2.3_Requirements_to_Test_Cases.md
    │   └── 16.2.4_NFR_to_Architecture_Decisions.md
    ├── 16.3_Architecture_Decision_Records/
    │   ├── 16.3.1_ADR_Template.md
    │   ├── 16.3.2_ADR_001_Microservices_Architecture.md
    │   ├── 16.3.3_ADR_002_Database_Selection.md
    │   ├── 16.3.4_ADR_003_API_Gateway_Choice.md
    │   └── 16.3.5_ADR_Index.md
    ├── 16.4_Sample_Data/
    │   ├── 16.4.1_Sample_API_Requests.md
    │   ├── 16.4.2_Sample_API_Responses.md
    │   ├── 16.4.3_Test_Datasets.md
    │   └── 16.4.4_Mock_Data_Generation.md
    ├── 16.5_Change_Management/
    │   ├── 16.5.1_Change_Request_Process.md
    │   ├── 16.5.2_Impact_Analysis_Template.md
    │   ├── 16.5.3_Approval_Workflow.md
    │   └── 16.5.4_Change_Log.md
    ├── 16.6_Document_Approval/
    │   ├── 16.6.1_Review_Checklist.md
    │   ├── 16.6.2_Sign_Off_Sheet.md
    │   └── 16.6.3_Version_History.md
    └── 16.7_References/
        ├── 16.7.1_External_Documentation_Links.md
        ├── 16.7.2_API_Documentation_Links.md
        ├── 16.7.3_Third_Party_Service_Docs.md
        └── 16.7.4_Industry_Standards.md
    [Ref: All previous parts, 01-BRD.md, System_Feature_Tree_Grok.md]
```
