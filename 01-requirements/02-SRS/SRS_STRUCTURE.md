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
# Part00 - 00.1_Purpose_and_Scope.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Xác định lý do tồn tại và ranh giới của toàn bộ SRS, làm nền tảng để align team và stakeholders.

**Ý nghĩa (Significance):** Giúp tránh hiểu lầm về dự án PSP, đảm bảo tập trung vào hybrid sampling và verified data, hỗ trợ đo lường ROI từ quà giá thấp.

**Cách làm (How to do):** Thu thập từ BRD và Problem, viết ngắn gọn với định nghĩa scope (in/out), sử dụng bảng hoặc bullet để phân biệt.

**Nội dung cần có (Required Content):** Mô tả tổng quan dự án, in-scope (campaign management, OTP verification), out-scope (logistics, native apps), audience (dev team, PM, stakeholders).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part00; 01-BRD.md Section 1.2 Phạm vi; Problem.md Section 1 Phân loại mục tiêu (in/out-scope); Product-Sampling-Vision-and-Strategy Document.md Section 1 Executive Summary (vấn đề cốt lõi)].

**Mục đích của node này:** Cung cấp cái nhìn tổng quan ban đầu về SRS, giúp reader hiểu rõ scope trước khi đi sâu vào chi tiết.

---

# Part00 - 00.2_Progress_Tracking.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Theo dõi tiến độ phát triển SRS, đảm bảo hoàn thành đúng hạn và không bỏ sót phần nào.

**Ý nghĩa (Significance):** Giúp team quản lý thời gian, ưu tiên critical parts như Functional Requirements, hỗ trợ dự án PSP đạt MVP nhanh chóng.

**Cách làm (How to do):** Sử dụng bảng tiến độ (hoàn thành/đang làm/sắp làm), cập nhật ước tính thời gian dựa trên team size.

**Nội dung cần có (Required Content):** Bảng tỷ lệ hoàn thành (e.g., 69% như mẫu), ước tính thời gian (2-3 tuần), danh sách tình trạng từng Part.

**Tài liệu tham khảo (References):** [Ref: 02-SRS-Pre.md Section Tiến độ tổng thể; 02-SRS-V2.md Part00 (progress table); 01-BRD.md Section 6 Kế hoạch triển khai (milestones); Product-Sampling-Vision-and-Strategy Document.md Section 6 Technology & Product Roadmap].

**Mục đích của node này:** Cung cấp công cụ theo dõi realtime để PM và team điều chỉnh kế hoạch, đảm bảo SRS hoàn chỉnh kịp development.

---

# Part00 - 00.3_Dependencies_Matrix.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Lập ma trận phụ thuộc giữa các Parts để xác định thứ tự làm việc và rủi ro chain-effect.

**Ý nghĩa (Significance):** Tránh bottleneck trong dự án PSP, ví dụ Part04 Functional phải hoàn thành trước Part06 Architecture.

**Cách làm (How to do):** Vẽ bảng ma trận (hàng/cột là Parts), đánh dấu phụ thuộc (critical/parallel), sử dụng công cụ như Excel hoặc Mermaid.

**Nội dung cần có (Required Content):** Ma trận phụ thuộc (e.g., Part01 → Part02 → Part04), critical path (requirements → design), parallel workstreams (architecture/testing).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-Pre.md Section Dependencies & Prerequisites; 02-SRS-V2.md Part00 (dependencies); System_Feature_Tree_Grok.md Section 4 Yêu cầu kỹ thuật tổng quan (dependencies); 01-BRD.md Section 6.1 Phase 1 (parallel tracks)].

**Mục đích của node này:** Xác định mối quan hệ giữa các thành phần SRS, giúp lập kế hoạch hiệu quả và giảm rủi ro trễ hạn.

---

# Part00 - 00.4_Critical_Path.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Xác định đường găng (critical path) trong SRS để ưu tiên các phần ảnh hưởng lớn đến timeline.

**Ý nghĩa (Significance):** Đảm bảo dự án PSP đạt MVP đúng hạn, tập trung vào core như Functional và Architecture.

**Cách làm (How to do):** Sử dụng diagram Gantt hoặc Mermaid flowchart, tính toán dựa trên dependencies matrix.

**Nội dung cần có (Required Content):** Đường găng (e.g., Part01 → Part02 → Part04 → Part06 → Development), key milestones (Week 1: Part01-04).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-Pre.md Section Critical Path; 02-SRS-V2.md Part00 (milestones); Product-Sampling-Vision-and-Strategy Document.md Section 6 Roadmap (phases); 01-BRD.md Section 6.1 Phase 1 (milestones)].

**Mục đích của node này:** Hướng dẫn ưu tiên công việc, giúp team tập trung vào các phần quan trọng để tránh delay toàn dự án.

---

# Part00 - 00.5_Success_Criteria.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Định nghĩa tiêu chí thành công cho SRS, bao gồm quality, technical readiness và business alignment.

**Ý nghĩa (Significance):** Đảm bảo SRS hỗ trợ đạt KPI dự án PSP như fraud ≤5%, scalability 10M users.

**Cách làm (How to do):** Liệt kê checklist với measurable criteria, sử dụng bullet hoặc bảng để kiểm tra.

**Nội dung cần có (Required Content):** Documentation quality (traceable requirements), technical readiness (NFRs support), business alignment (MVP feasible, KPIs achievable), stakeholder sign-off.

**Tài liệu tham khảo (References):** [Ref: 02-SRS-Pre.md Section Success Criteria; 02-SRS-V2.md Part00 (success definition); 01-BRD.md Section 8 Tiêu chí thành công; Problem.md Section 5 Mở rộng (KPIs như fraud <5%)].

**Mục đích của node này:** Xác định các chỉ số đo lường để đánh giá SRS có đạt chất lượng, hỗ trợ triển khai dự án hiệu quả.

---

# Part01 - 01.1_Document_Purpose.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Mô tả mục tiêu của tài liệu SRS, xác định audience và vai trò trong dự án.

**Ý nghĩa (Significance):** Giúp team hiểu rõ SRS là cầu nối từ BRD đến development, tập trung vào PSP hybrid sampling.

**Cách làm (How to do):** Viết ngắn gọn dựa trên BRD, liệt kê audience và purpose statement.

**Nội dung cần có (Required Content):** Mục tiêu SRS (translate business to technical), audience (Dev, QA, PM), tổng quan dự án.

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Part01 (Mục tiêu tài liệu); 01-BRD.md Section 1.1 Mục đích tài liệu; Problem.md (mô tả bài toán cốt lõi)].

**Mục đích của node này:** Thiết lập ngữ cảnh cơ bản cho SRS, giúp reader nắm rõ vai trò của tài liệu trong toàn dự án.

---

# Part01 - 01.2.1_In_Scope.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Liệt kê các yếu tố nằm trong phạm vi dự án để định giới hạn công việc.

**Ý nghĩa (Significance):** Tránh scope creep, tập trung vào core như campaign management và OTP cho PSP.

**Cách làm (How to do):** Sử dụng bullet list hoặc bảng, map từ BRD và feature tree.

**Nội dung cần có (Required Content):** In-scope items (hybrid sampling, data collection, CRM sync, PWA portal).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 01-BRD.md Section 1.2 Phạm vi (In-scope); Problem.md Section 1 Must-have (core features); System_Feature_Tree_Grok.md Section 1 Must-Have].

**Mục đích của node này:** Rõ ràng hóa những gì dự án sẽ thực hiện, giúp quản lý kỳ vọng và nguồn lực.

---

# Part01 - 01.2.2_Out_of_Scope.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Liệt kê các yếu tố ngoài phạm vi để tránh mở rộng không cần thiết.

**Ý nghĩa (Significance):** Giữ dự án PSP tập trung, loại bỏ logistics thực tế hoặc blockchain.

**Cách làm (How to do):** Sử dụng bullet list, dựa trên assumptions và constraints từ BRD.

**Nội dung cần có (Required Content):** Out-scope items (logistics vận chuyển, app native, blockchain traceability).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 01-BRD.md Section 1.2 Phạm vi (Out-of-scope); Problem.md Section 1 Must-have (out-scope như logistics); Product-Sampling-Vision-and-Strategy Document.md Section 2 Vision (long-term exclusions)].

**Mục đích của node này:** Ngăn chặn mở rộng scope, đảm bảo team chỉ làm những gì cần thiết cho MVP.

---

# Part01 - 01.3_Definitions_and_Acronyms.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Định nghĩa thuật ngữ và viết tắt để đảm bảo ngôn ngữ thống nhất.

**Ý nghĩa (Significance):** Tránh nhầm lẫn trong PSP, như Campaign, Barcode Pool, Verified User.

**Cách làm (How to do):** Sử dụng bảng hoặc list alphabet, thu thập từ glossary toàn dự án.

**Nội dung cần có (Required Content):** Định nghĩa (e.g., PSP: Product Sampling Platform), acronyms (FR: Functional Requirement).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Part01 (Định nghĩa thuật ngữ); Problem.md Section 2 Tính năng chính (terms như Barcode Pool); Access_Control_Tree_Grok.md Section 1 Vai trò (roles acronyms)].

**Mục đích của node này:** Tạo ngôn ngữ chung cho team, giảm hiểu lầm khi đọc SRS.

---

# Part01 - 01.4.1_Input_Documents.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Liệt kê tài liệu đầu vào để xây dựng SRS.

**Ý nghĩa (Significance):** Đảm bảo traceability từ business đến technical trong PSP.

**Cách làm (How to do):** Bullet list với version/date, link nếu có.

**Nội dung cần có (Required Content):** Tài liệu như BRD, Problem.md, Feature Tree, Vision-Strategy.

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Part01 (Tài liệu tham chiếu); 01-BRD.md (input chính); All uploaded files như Problem.md, System_Feature_Tree_Grok.md].

**Mục đích của node này:** Cung cấp nguồn gốc dữ liệu cho SRS, hỗ trợ audit và update.

---

# Part01 - 01.4.2_Standards.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Liệt kê tiêu chuẩn áp dụng cho SRS và dự án.

**Ý nghĩa (Significance):** Đảm bảo PSP tuân thủ như IEEE SRS, GDPR, ISO 27001.

**Cách làm (How to do):** Bullet list với mô tả ngắn.

**Nội dung cần có (Required Content):** Tiêu chuẩn (IEEE 830 for SRS, GDPR/PDPA for compliance, SOLID for design).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; Access_Control_Tree_Grok.md Section 3 Yêu cầu kỹ thuật (ISO 27001); 01-BRD.md Section 5.1 Rủi ro (compliance standards); Part06B_Design_Patterns (SOLID Principles)].

**Mục đích của node này:** Xác định khung chuẩn để SRS và hệ thống đạt chất lượng chuyên nghiệp.

---

# Part01 - 01.5.1_Requirement_IDs.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Quy định cách đánh ID cho requirements để dễ trace.

**Ý nghĩa (Significance):** Hỗ trợ traceability trong PSP, như FR-001 cho Campaign.

**Cách làm (How to do):** Mô tả format (FR-XXX, NFR-XXX), ví dụ.

**Nội dung cần có (Required Content):** Format ID (e.g., FR-001: Functional, UC-XXX: Use Case).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Part01 (Quy ước ký hiệu FR-XXX); System_Feature_Tree_Grok.md Section 1 (FR examples); Part04_Functional_Requirements (FR-001 to FR-013)].

**Mục đích của node này:** Chuẩn hóa cách đánh mã requirements, dễ dàng tham chiếu và quản lý.

---

# Part01 - 01.5.2_Priority_Levels.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Định nghĩa mức độ ưu tiên cho requirements.

**Ý nghĩa (Significance):** Ưu tiên Must-Have cho MVP PSP, như OTP verification.

**Cách làm (How to do):** Sử dụng scale (High/Medium/Low) hoặc MoSCoW.

**Nội dung cần có (Required Content):** Mô tả levels (Critical: Must-Have, High: Should-Have, Low: Nice-to-Have).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; Problem.md Section 1 Phân loại mục tiêu (MoSCoW); System_Feature_Tree_Grok.md Section 1-3 (Must/Should/Nice); 01-BRD.md Section 3 Feature Prioritization].

**Mục đích của node này:** Hướng dẫn team ưu tiên phát triển, phù hợp với phasing MVP.

---

# Part01 - 01.5.3_Status_Indicators.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Quy định indicator cho status của requirements.

**Ý nghĩa (Significance):** Theo dõi progress trong SRS PSP, như Draft/Approved.

**Cách làm (How to do):** Định nghĩa icons hoặc text (✅ Complete, ⏳ In Progress).

**Nội dung cần có (Required Content):** Status types (New, In Review, Approved, Rejected).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Part00 (status icons như ✅); 01-BRD.md Section 8.3 Tiêu chí thành công (checklist status)].

**Mục đích của node này:** Giúp quản lý version và status của requirements trong SRS.

---

# Part01 - 01.6_Document_Structure.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Mô tả cấu trúc tổng thể của SRS.

**Ý nghĩa (Significance):** Hướng dẫn navigation qua các Parts trong PSP documentation.

**Cách làm (How to do):** Vẽ cây thư mục hoặc list hierarchically.

**Nội dung cần có (Required Content):** Overview cấu trúc (Part00 to Part16), với refs.

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; SRS_STRUCTURE.md (cấu trúc thư mục); 02-SRS-Pre.md (chi tiết từng Part)].

**Mục đích của node này:** Giúp reader dễ dàng tìm kiếm thông tin trong SRS lớn.

---

# Part01 - 01.7_Quality_Assurance.md

## Menu
- [Mục đích (Purpose)](#mục-đích-purpose)
- [Ý nghĩa (Significance)](#ý-nghĩa-significance)
- [Cách làm (How to do)](#cách-làm-how-to-do)
- [Nội dung cần có (Required Content)](#nội-dung-cần-có-required-content)
- [Tài liệu tham khảo (References)](#tài-liệu-tham-khảo-references)
- [Mục đích của node này](#mục-đích-của-node-này)

**Mục đích (Purpose):** Mô tả quy trình đảm bảo chất lượng cho SRS.

**Ý nghĩa (Significance):** Đảm bảo SRS PSP không có contradictions, traceable đầy đủ.

**Cách làm (How to do):** Liệt kê steps review, tools như peer review.

**Nội dung cần có (Required Content):** Quy trình QA (review cycles, traceability check), metrics (zero contradictions).

**Tài liệu tham khảo (References):** [Ref: 02-SRS-V2.md Part01; 02-SRS-Pre.md Section Documentation Quality; 01-BRD.md Section 8 Tiêu chí thành công (quality gates); Part16.2_Traceability_Matrix].

**Mục đích của node này:** Đảm bảo SRS đạt chuẩn chất lượng trước khi approve.

