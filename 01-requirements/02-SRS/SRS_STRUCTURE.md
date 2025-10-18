## Cấu trúc thư mục tài liệu
```
SRS_Product_Sampling_Platform/
│
├── Part00_Checklist_Overview/
│   ├── 00.1_Purpose_and_Scope.md
│   ├── 00.2_Progress_Tracking.md
│   ├── 00.3_Dependencies_Matrix.md
│   ├── 00.4_Critical_Path.md
│   └── 00.5_Success_Criteria.md
│   [Ref: 02-SRS-V2.md Part00]
│
├── Part01_Introduction/
│   ├── 01.1_Document_Purpose.md
│   ├── 01.2_Project_Scope/
│   │   ├── 01.2.1_In_Scope.md
│   │   └── 01.2.2_Out_of_Scope.md
│   ├── 01.3_Definitions_and_Acronyms.md
│   ├── 01.4_References/
│   │   ├── 01.4.1_Input_Documents.md
│   │   └── 01.4.2_Standards.md
│   ├── 01.5_Conventions/
│   │   ├── 01.5.1_Requirement_IDs.md
│   │   ├── 01.5.2_Priority_Levels.md
│   │   └── 01.5.3_Status_Indicators.md
│   ├── 01.6_Document_Structure.md
│   └── 01.7_Quality_Assurance.md
│   [Ref: 02-SRS-V2.md Part01, Problem.md, 01-BRD.md]
│
├── Part02_System_Overview/
│   ├── 02.1_System_Description.md
│   ├── 02.2_System_Context/
│   │   ├── 02.2.1_Business_Context.md
│   │   ├── 02.2.2_User_Personas.md
│   │   └── 02.2.3_Operating_Environment.md
│   ├── 02.3_System_Actors/
│   │   ├── 02.3.1_Admin_Role.md
│   │   ├── 02.3.2_Group_Admin_Role.md
│   │   ├── 02.3.3_Customer_Account_Role.md
│   │   ├── 02.3.4_Serving_Account_Role.md
│   │   ├── 02.3.5_Auditor_Role.md
│   │   └── 02.3.6_User_Role.md
│   ├── 02.4_System_Dependencies/
│   │   ├── 02.4.1_External_Systems.md
│   │   ├── 02.4.2_Third_Party_Services.md
│   │   └── 02.4.3_Integration_Points.md
│   └── 02.5_Assumptions_and_Constraints.md
│   [Ref: 02-SRS-V2.md Part02, Access_Control_Tree_Grok.md]
│
├── Part03_Scope_and_Objectives/
│   ├── 03.1_Business_Goals/
│   │   ├── 03.1.1_Primary_Objectives.md
│   │   ├── 03.1.2_Strategic_Value.md
│   │   └── 03.1.3_Success_Metrics.md
│   ├── 03.2_Product_Vision/
│   │   ├── 03.2.1_Vision_Statement.md
│   │   ├── 03.2.2_Market_Positioning.md
│   │   └── 03.2.3_Competitive_Advantage.md
│   ├── 03.3_MVP_Definition/
│   │   ├── 03.3.1_Core_Features.md
│   │   ├── 03.3.2_Phase_1_Scope.md
│   │   └── 03.3.3_Success_Criteria.md
│   ├── 03.4_Feature_Prioritization/
│   │   ├── 03.4.1_Must_Have_Features.md
│   │   ├── 03.4.2_Should_Have_Features.md
│   │   └── 03.4.3_Nice_to_Have_Features.md
│   └── 03.5_KPI_Mapping.md
│   [Ref: 02-SRS-V2.md Part03, 01-BRD.md, Problem.md]
│
├── Part04_Functional_Requirements/
│   ├── 04.1_Overview.md
│   ├── 04.2_Must_Have_Requirements/
│   │   ├── FR-001_Campaign_Management/
│   │   ├── FR-002_Barcode_Management/
│   │   ├── FR-003_Landing_Page_Form/
│   │   ├── FR-004_OTP_Verification/
│   │   ├── FR-005_Redemption_POS/
│   │   ├── FR-006_Analytics_Dashboard/
│   │   ├── FR-007_CRM_Sync/
│   │   └── FR-008_Access_Control/
│   ├── 04.3_Should_Have_Requirements/
│   ├── 04.4_Nice_to_Have_Requirements/
│   └── 04.5_Traceability_Matrix.md
│   [Ref: 02-SRS-V2.md Part04, System_Feature_Tree_Grok.md]
│
├── Part05_Non_Functional_Requirements/
│   ├── 05.1_Overview.md
│   ├── 05.2_Performance_Requirements/
│   ├── 05.3_Security_Requirements/
│   ├── 05.4_Reliability_Requirements/
│   ├── 05.5_Scalability_Requirements/
│   ├── 05.6_Usability_Requirements/
│   └── 05.7_Compliance_Requirements/
│   [Ref: 02-SRS-V2.md Part05, 01-BRD.md NFRs]
│
├── Part06_System_Architecture/
│   ├── 06.1_Architecture_Overview.md
│   ├── 06.2_Logical_Architecture/
│   ├── 06.3_Physical_Architecture/
│   ├── 06.4_Technology_Stack/
│   ├── 06.5_Communication_Patterns/
│   ├── 06.6_Scalability_Patterns.md
│   └── 06.7_Integration_Architecture.md       ⭐ **(NEW - nối với API & CRM Sync)**
│   [Ref: 02-SRS-V2.md Part06, 01-BRD.md Technical Stack]
│
├── Part06B_Design_Patterns/
│   ├── 06B.1_Design_Patterns_Catalog/
│   ├── 06B.2_Interface_Definitions/
│   ├── 06B.3_Abstract_Base_Classes/
│   ├── 06B.4_Dependency_Injection/
│   ├── 06B.5_Module_Independence/
│   ├── 06B.6_Code_Organization/
│   └── 06B.7_Documentation_Standards/
│   [Ref: Clean Architecture, SOLID Principles]
│
├── Part07_Database_Design/
│   ├── 07.1_Data_Architecture_Overview.md
│   ├── 07.2_Entity_Relationship_Diagram/
│   ├── 07.3_MongoDB_Collections/
│   ├── 07.4_PostgreSQL_Tables/
│   ├── 07.5_Data_Flow_Diagrams.md
│   ├── 07.6_Indexing_Strategy.md
│   ├── 07.7_Data_Partitioning.md
│   └── 07.8_Backup_Recovery.md
│   [Ref: 02-SRS-V2.md Part07]
│
├── Part08_API_Design/
│   ├── 08.1_API_Overview.md
│   ├── 08.2_RESTful_Endpoints/
│   ├── 08.3_Request_Response_Schemas.md
│   ├── 08.4_Error_Handling.md
│   ├── 08.5_Rate_Limiting.md
│   ├── 08.6_Versioning_Strategy.md
│   ├── 08.7_API_Security.md
│   └── 08.8_OpenAPI_Specification.md          ⭐ **(NEW - JSON/YAML schema cho Swagger)**
│   [Ref: 02-SRS-V2.md Part08]
│
├── Part09_Use_Cases/
│   ├── 09.1_Use_Case_Overview.md
│   ├── 09.2_Actor_Use_Case_Matrix.md
│   ├── 09.3_Detailed_Use_Cases/
│   └── 09.4_Use_Case_Diagrams.md
│   [Ref: 02-SRS-V2.md Part09]
│
├── Part10_UI_UX_Design/
│   ├── Part10A_User_Flows/
│   ├── Part10B_Wireframes/
│   ├── Part10C_Design_System/
│   ├── Part10D_Accessibility/
│   └── Part10E_UX_Metrics/
│   [Ref: 02-SRS-V2.md Part10 + Figma references]
│
├── Part11_Security_Compliance/
│   ├── 11.1_Security_Overview.md
│   ├── 11.2_GDPR_Compliance/
│   ├── 11.3_PDPA_Vietnam_Compliance/
│   ├── 11.4_Data_Encryption/
│   ├── 11.5_Authentication_Authorization/
│   ├── 11.6_Secure_Coding_Practices/
│   ├── 11.7_Penetration_Testing/
│   ├── 11.8_Security_Audit/
│   └── 11.9_Vulnerability_Management.md       ⭐ **(NEW - CVE/CVSS Tracking)**
│   [Ref: 01-BRD.md compliance, Access_Control_Tree_Grok.md security]
│
├── Part12_Performance_Testing/
│   ├── 12.1_Testing_Strategy_Overview.md
│   ├── 12.2_Load_Testing/
│   ├── 12.3_Stress_Testing/
│   ├── 12.4_Performance_Benchmarks/
│   ├── 12.5_Scalability_Testing/
│   ├── 12.6_Performance_Monitoring/
│   └── 12.7_Performance_Optimization/
│   [Ref: 02-SRS-V2.md Part05 NFRs, 01-BRD.md KPIs]
│
├── Part13_System_Testing_Strategy/
│   ├── 13.1_Testing_Overview.md
│   ├── 13.2_Unit_Testing/
│   ├── 13.3_Integration_Testing/
│   ├── 13.4_End_to_End_Testing/
│   ├── 13.5_API_Testing/
│   ├── 13.6_Security_Testing/
│   ├── 13.7_Regression_Testing/
│   ├── 13.8_UAT_Strategy/
│   ├── 13.9_Test_Automation/
│   └── 13.10_Test_Data_Management.md          ⭐ **(NEW - shared datasets, mocks)**
│   [Ref: 02-SRS-V2.md Part04 + Part06B testability]
│
├── Part14_Deployment_Architecture/
│   ├── 14.1_Deployment_Overview.md
│   ├── 14.2_Environment_Strategy/
│   ├── 14.3_CI_CD_Pipeline/
│   ├── 14.4_Container_Orchestration/
│   ├── 14.5_Infrastructure_as_Code/
│   ├── 14.6_Configuration_Management/
│   ├── 14.7_Database_Migration/
│   ├── 14.8_Deployment_Checklist/
│   └── 14.9_Release_Notes_and_Versioning.md   ⭐ **(NEW - version control doc)**
│   [Ref: 02-SRS-V2.md Part06 Architecture, DevOps Best Practices]
│
├── Part15_Operations_Monitoring/
│   ├── 15.1_Operations_Overview.md
│   ├── 15.2_Logging_Strategy/
│   ├── 15.3_Monitoring_and_Observability/
│   ├── 15.4_Alerting/
│   ├── 15.5_Incident_Management/
│   ├── 15.6_Backup_and_Recovery/
│   ├── 15.7_Capacity_Planning/
│   └── 15.8_Support_Operations/
│   [Ref: 02-SRS-V2.md Part05 NFRs Reliability, 01-BRD.md SLA targets]
│
└── Part16_Appendices/
    ├── 16.1_Glossary/
    ├── 16.2_Traceability_Matrix/
    ├── 16.3_Architecture_Decision_Records/
    ├── 16.4_Sample_Data/
    ├── 16.5_Change_Management/
    ├── 16.6_Document_Approval/
    └── 16.7_References/
    [Ref: All previous parts, 01-BRD.md, System_Feature_Tree_Grok.md]
```
