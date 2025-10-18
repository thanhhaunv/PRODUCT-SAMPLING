## 📋 **RULE (Ngắn gọn)**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn như ví dụ của bạn

---

## 🌲 **CÂY THƯ MỤC PART00**
```
Part00_Checklist_Overview/ ✅
├── 00.1_Purpose_and_Scope.md
├── 00.2_Progress_Tracking.md
├── 00.3_Dependencies_Matrix.md
├── 00.4_Critical_Path.md
└── 00.5_Success_Criteria.md
```

---

# PART00 - CHECKLIST & OVERVIEW

## 00.1 - Purpose_and_Scope - Mục đích và Phạm vi

**Mục đích:** Xác định lý do tồn tại của SRS và ranh giới dự án PSP

**Ý nghĩa:** Làm nền tảng alignment cho team và stakeholders, tránh hiểu lầm về scope

**Cách làm:** Tổng hợp từ BRD và Problem.md, viết ngắn gọn về audience và scope (in/out)

**Nội dung cần có:**
* Mô tả tổng quan dự án PSP: Hệ thống quản lý sampling hybrid để thu data chất lượng cao, giảm chi phí logistics
* In-scope: Campaign management, barcode issuance, OTP verification, CRM sync, PWA portal, fraud detection cơ bản
* Out-scope: Logistics vận chuyển mẫu vật lý, app native (chỉ PWA), blockchain traceability (phase 3)
* Audience: Dev team (implement specs), QA (test cases), PM (manage scope), stakeholders (align business goals)
* Lợi ích: Định hướng SRS tập trung MVP, tránh scope creep, hỗ trợ traceability từ business requirements

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.2 (Phạm vi in/out-scope chi tiết)
* Đầu vào từ: Problem.md § 1 (Phân loại mục tiêu Must-have core vs out-scope)
* Thể hiện yêu cầu: 02-SRS-V2.md Part00 (Purpose and Scope overview)
* Kết nối với: Product-Sampling-Vision-and-Strategy.md § 1 (Executive Summary vấn đề cốt lõi và scope)
* Kết nối với: 02-SRS-Pre.md Part01 (Foundation document cho scope)

**Mục đích của node này:** Cung cấp cái nhìn tổng quan ban đầu về SRS, giúp reader hiểu rõ scope trước khi đi sâu vào chi tiết

---

## 00.2 - Progress_Tracking - Theo dõi Tiến độ

**Mục đích:** Theo dõi tiến độ phát triển SRS, đảm bảo hoàn thành đúng hạn và không bị sót phần nào

**Ý nghĩa:** Giúp team quản lý thời gian, ưu tiên critical parts như Functional Requirements, hỗ trợ dự án PSP đạt MVP nhanh chóng

**Cách làm:** Sử dụng bảng tiến độ (hoàn thành/đang làm/sắp làm), cập nhật ước tính thời gian dựa trên team size, tích hợp công cụ như Jira

**Nội dung cần có:**
* Bảng tỷ lệ hoàn thành: Số Parts hoàn thành/tổng (e.g., 11/16 = 69%), tỷ lệ % theo trọng số
* Ước tính thời gian: Tổng thời gian (2-3 tuần), breakdown theo week (Week 1: Part01-04)
* Danh sách tình trạng: Mỗi Part với status (✅ Hoàn thành, ⏳ Đang thực hiện, 🔄 Sắp triển khai)
* Theo dõi rủi ro: Parts trễ hạn và lý do (e.g., dependencies từ BRD)
* Update log: Ngày cập nhật cuối, người chịu trách nhiệm

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md § Tiến độ tổng thể (progress table mẫu)
* Đầu vào từ: 01-BRD.md § 6 (Kế hoạch triển khai milestones và timeline)
* Thể hiện yêu cầu: 02-SRS-V2.md Part00 (progress tracking table)
* Kết nối với: Product-Sampling-Vision-and-Strategy.md § 6 (Technology & Product Roadmap phasing timeline)
* Kết nối với: SRS_STRUCTURE.md Part00 (status indicators như ✅)

**Mục đích của node này:** Cung cấp công cụ theo dõi realtime để PM và team điều chỉnh kế hoạch, đảm bảo SRS hoàn chỉnh kịp development

---

## 00.3 - Dependencies_Matrix - Ma trận Phụ thuộc

**Mục đích:** Lập ma trận phụ thuộc giữa các Parts để xác định thứ tự làm việc và rủi ro chain-effect

**Ý nghĩa:** Tránh bottleneck trong dự án PSP, ví dụ Part04 Functional phải hoàn thành trước Part06 Architecture, hỗ trợ parallel work

**Cách làm:** Vẽ bảng ma trận (hàng/cột là Parts), đánh dấu phụ thuộc (critical/parallel), sử dụng công cụ như Excel hoặc Mermaid diagram

**Nội dung cần có:**
* Ma trận phụ thuộc: Table với Parts làm rows/columns, dấu X cho phụ thuộc (e.g., Part05 NFR phụ thuộc Part04 FR)
* Critical dependencies: List key chains (Part01 Introduction → Part02 Overview → Part04 Functional)
* Parallel workstreams: Groups như Architecture Track (Part06-08), Testing Track (Part12-13)
* Rủi ro: Impact nếu delay (e.g., delay Part04 ảnh hưởng development)
* Visualization: Mermaid flowchart cho critical path

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md § Dependencies & Prerequisites (critical path và parallel)
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 (Yêu cầu kỹ thuật tổng quan dependencies giữa features)
* Thể hiện yêu cầu: 02-SRS-V2.md Part00 (dependencies matrix mẫu)
* Kết nối với: 01-BRD.md § 6.1 Phase 1 (parallel tracks như development/testing)
* Kết nối với: Part16.2_Traceability_Matrix (mapping dependencies to requirements)

**Mục đích của node này:** Xác định mối quan hệ giữa các thành phần SRS, giúp lập kế hoạch hiệu quả và giảm rủi ro trễ hạn

---

## 00.4 - Critical_Path - Đường Găng

**Mục đích:** Xác định đường găng (critical path) trong SRS để ưu tiên các phần ảnh hưởng lớn đến timeline

**Ý nghĩa:** Đảm bảo dự án PSP đạt MVP đúng hạn, tập trung vào core như Functional và Architecture, tránh delay chain

**Cách làm:** Sử dụng diagram Gantt hoặc Mermaid flowchart, tính toán dựa trên dependencies matrix, ước tính thời gian mỗi Part

**Nội dung cần có:**
* Đường găng chính: Sequence (Part01 → Part02 → Part04 → Part06 → Development), với thời gian tổng (e.g., 4 weeks)
* Key milestones: Week 1: Complete Part01-03; Week 2: Part04-05; Week 3: Part06-10
* Dependencies highlight: Critical links (e.g., NFRs phụ thuộc FRs)
* Buffer time: Thêm 20% buffer cho rủi ro (e.g., review delays)
* Visualization: Mermaid Gantt chart với bars cho mỗi Part

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md § Critical Path (mẫu path)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 6 (Roadmap phases timeline)
* Thể hiện yêu cầu: 02-SRS-V2.md Part00 (milestones trong critical path)
* Kết nối với: 01-BRD.md § 6.1 Phase 1 (milestones và timeline)
* Kết nối với: Part00 - 00.3_Dependencies_Matrix (dựa trên matrix để tính path)

**Mục đích của node này:** Hướng dẫn ưu tiên công việc, giúp team tập trung vào các phần quan trọng để tránh delay toàn dự án

---

## 00.5 - Success_Criteria - Tiêu chí Thành công

**Mục đích:** Định nghĩa tiêu chí thành công cho SRS, bao gồm quality, technical readiness và business alignment

**Ý nghĩa:** Đảm bảo SRS hỗ trợ đạt KPI dự án PSP như fraud ≤5%, scalability 10M users, traceable từ BRD

**Cách làm:** Liệt kê checklist với measurable criteria, sử dụng bullet hoặc bảng để kiểm tra, map từ BRD KPIs

**Nội dung cần có:**
* Documentation quality: Tất cả requirements traceable (zero contradictions), complete API specs
* Technical readiness: Architecture supports NFRs (e.g., 99.9% uptime), integration points defined
* Business alignment: MVP scope feasible (Q1-Q2 2025), KPIs achievable (CPL <0.4 USD), risk mitigation
* Stakeholder sign-off: Approved by PM/CTO/CFO, readiness for development
* Metrics đo lường: Coverage rate >95%, no major gaps vs BRD

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md § Success Criteria (checklist mẫu)
* Đầu vào từ: 01-BRD.md § 8 (Tiêu chí thành công & Phê duyệt quality gates và KPIs)
* Thể hiện yêu cầu: 02-SRS-V2.md Part00 (success definition với checkboxes)
* Kết nối với: Problem.md § 5 (Mở rộng KPIs như fraud <5%)
* Kết nối với: Part16.2_Traceability_Matrix (đo lường traceability)

**Mục đích của node này:** Xác định các chỉ số đo lường để đánh giá SRS có đạt chất lượng, hỗ trợ triển khai dự án hiệu quả

---

**✅ PART00 HOÀN THÀNH - 5/5 NODES**

Bạn check format có OK không? Nếu OK tôi tiếp tục gen **PART01** 🚀
## 📋 **RULE (Ngắn gọn)**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn như ví dụ

---

## 🌲 **CÂY THƯ MỤC PART01**
```
Part01_Introduction/ ✅
├── 01.1_Document_Purpose.md
├── 01.2_Project_Scope.md
│   ├── 01.2.1_In_Scope.md
│   └── 01.2.2_Out_of_Scope.md
├── 01.3_Definitions_and_Acronyms.md
├── 01.4_References.md
│   ├── 01.4.1_Input_Documents.md
│   └── 01.4.2_Standards.md
├── 01.5_Conventions.md
│   ├── 01.5.1_Requirement_IDs.md
│   ├── 01.5.2_Priority_Levels.md
│   └── 01.5.3_Status_Indicators.md
├── 01.6_Document_Structure.md
└── 01.7_Quality_Assurance.md
```

---

# PART01 - INTRODUCTION

## 01.1 - Document_Purpose - Mục đích Tài liệu

**Mục đích:** Mô tả mục tiêu của tài liệu SRS, xác định audience và vai trò trong dự án

**Ý nghĩa:** Giúp team hiểu SRS là cầu nối từ business requirements đến technical specs cho PSP

**Cách làm:** Viết ngắn gọn dựa trên BRD, liệt kê audience và purpose statement, sử dụng bullet cho clarity

**Nội dung cần có:**
* Mục tiêu SRS: Translate BRD thành functional/non-functional specs, guide development/testing
* Audience: Dev team (implement), QA (test), PM (scope), stakeholders (alignment)
* Tổng quan dự án: PSP giải quyết sampling giá thấp qua hybrid network, thu data verified
* Lợi ích: Đảm bảo consistency, hỗ trợ traceability từ problem đến solution
* Version info: Phiên bản SRS, date, author

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.1 (Mục đích tài liệu business to technical bridge)
* Đầu vào từ: Problem.md (mô tả bài toán cốt lõi làm foundation)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Document Purpose section)
* Kết nối với: 02-SRS-Pre.md Part01 (Mục tiêu của tài liệu SRS và audience)
* Kết nối với: Product-Sampling-Vision-and-Strategy.md § 1 (Executive Summary project purpose)

**Mục đích của node này:** Thiết lập ngữ cảnh cơ bản cho SRS, giúp reader nắm rõ vai trò của tài liệu trong toàn dự án

---

## 01.2 - Project_Scope - Phạm vi Dự án

**Mục đích:** Định nghĩa phạm vi tổng thể của dự án PSP trong SRS

**Ý nghĩa:** Giới hạn công việc để tập trung vào core features, tránh mở rộng không cần thiết

**Cách làm:** Gộp in/out-scope, sử dụng bảng để phân biệt, map từ BRD scope

**Nội dung cần có:**
* Tổng quan scope: Hybrid platform cho sampling SEA, thu data verified, tối ưu ROI
* Breakdown: In-scope (MVP core), out-scope (future phases), assumptions (e.g., brands cung cấp mẫu)
* Liên kết phases: MVP Q1-Q2 (core flow), Phase 2 (fraud AI)
* Rủi ro scope: Scope creep controls qua change management
* Metrics: Scope coverage vs BRD >95%

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.2 (Phạm vi in/out-scope tổng quát)
* Đầu vào từ: Problem.md § 1 (Phân loại mục tiêu scope theo MoSCoW)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Project Scope section)
* Kết nối với: System_Feature_Tree_Grok.md § 1-3 (Must/Should/Nice scope)
* Kết nối với: Part03_Scope_and_Objectives (detailed scope mapping)

**Mục đích của node này:** Rõ ràng hóa boundaries dự án, hỗ trợ planning và tránh hiểu lầm giữa team

---

## 01.2.1 - In_Scope - Trong Phạm vi

**Mục đích:** Liệt kê các yếu tố nằm trong phạm vi dự án để định giới hạn công việc

**Ý nghĩa:** Tránh scope creep, tập trung vào core như campaign management và OTP cho PSP

**Cách làm:** Sử dụng bullet list hoặc bảng, map từ BRD và feature tree, phân loại theo phase

**Nội dung cần có:**
* Core features: Campaign creation, barcode management, landing page form, OTP verification, POS redemption
* Integrations: CRM sync (HubSpot), SMS/Email (Twilio), analytics dashboard
* Scope MVP: Hybrid distribution tại VN, PWA portal, basic fraud rules
* User roles: 6 roles (Admin to User) với RBAC
* Metrics: Hỗ trợ KPIs như conversion ≥90%

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.2 (Phạm vi In-scope hybrid platform)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 Must-Have (core features list)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (In Scope sub-section)
* Kết nối với: Problem.md § 2 (Tính năng chính in-scope modules)
* Kết nối với: Access_Control_Tree_Grok.md § 1 (roles in scope)

**Mục đích của node này:** Rõ ràng hóa những gì dự án sẽ thực hiện, giúp quản lý kỳ vọng và nguồn lực

---

## 01.2.2 - Out_of_Scope - Ngoài Phạm vi

**Mục đích:** Liệt kê các yếu tố ngoài phạm vi để tránh mở rộng không cần thiết

**Ý nghĩa:** Giữ dự án PSP tập trung, loại bỏ logistics thực tế hoặc blockchain

**Cách làm:** Sử dụng bullet list, dựa trên assumptions và constraints từ BRD, note future phases

**Nội dung cần có:**
* Out-scope: Logistics vận chuyển mẫu, app native (chỉ PWA), blockchain traceability
* Exclusions: Full AI personalization (Phase 3), omnichannel expansion (e-commerce links)
* Lý do: Tập trung MVP core, budget constraints (seed 500K USD)
* Potential additions: Nếu approved qua change management
* Rủi ro: Misalignment nếu không rõ ràng

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.2 (Phạm vi Out-of-scope logistics)
* Đầu vào từ: Problem.md § 1 Must-have (out-scope như logistics)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Out of Scope sub-section)
* Kết nối với: Product-Sampling-Vision-and-Strategy.md § 2 Vision (long-term exclusions)
* Kết nối với: System_Feature_Tree_Grok.md § 3 Nice-to-Have (future out-scope)

**Mục đích của node này:** Ngăn chặn mở rộng scope, đảm bảo team chỉ làm những gì cần thiết cho MVP

---

## 01.3 - Definitions_and_Acronyms - Định nghĩa và Viết tắt

**Mục đích:** Định nghĩa thuật ngữ và viết tắt để đảm bảo ngôn ngữ thống nhất

**Ý nghĩa:** Tránh nhầm lẫn trong PSP, như Campaign, Barcode Pool, Verified User

**Cách làm:** Sử dụng bảng hoặc list alphabet, thu thập từ glossary toàn dự án, update iteratively

**Nội dung cần có:**
* Định nghĩa business: Campaign (Chiến dịch sampling với barcode và location)
* Technical terms: PWA (Progressive Web App - Ứng dụng web tiến bộ cho user portal)
* Acronyms: FR (Functional Requirement - Yêu cầu chức năng), NFR (Non-Functional Requirement - Yêu cầu phi chức năng)
* Industry terms: ROI (Return on Investment - Lợi nhuận đầu tư từ sampling)
* Glossary update: Phiên bản glossary, cross-ref với appendices

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part01 (Định nghĩa thuật ngữ như Campaign)
* Đầu vào từ: Problem.md § 2 (Tính năng chính terms như Barcode Pool)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Definitions section)
* Kết nối với: Access_Control_Tree_Grok.md § 1 (Vai trò roles acronyms như Admin Role)
* Kết nối với: Part16.1_Glossary (detailed glossary connection)

**Mục đích của node này:** Tạo ngôn ngữ chung cho team, giảm hiểu lầm khi đọc SRS

---

## 01.4 - References - Tài liệu Tham chiếu

**Mục đích:** Liệt kê tất cả tài liệu tham chiếu cho SRS

**Ý nghĩa:** Đảm bảo traceability và nguồn gốc dữ liệu trong PSP

**Cách làm:** Gộp input documents và standards, sử dụng bullet với version/link

**Nội dung cần có:**
* Tổng quan references: List tất cả files (BRD, Problem, Feature Tree)
* Breakdown: Input docs (BRD v3.0), standards (IEEE 830, GDPR)
* Links: Internal (Part16 Appendices), external (ISO 27001 docs)
* Update log: Ngày tham chiếu cuối
* Traceability: Map refs to Parts (e.g., BRD to Part04)

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part01 (Tài liệu tham chiếu như BRD)
* Đầu vào từ: All uploaded files (Problem.md, System_Feature_Tree_Grok.md as refs)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (References section)
* Kết nối với: 01-BRD.md (main reference)
* Kết nối với: Part16.7_References (expanded refs)

**Mục đích của node này:** Cung cấp nguồn gốc đầy đủ cho SRS, hỗ trợ audit và update

---

## 01.4.1 - Input_Documents - Tài liệu Đầu vào

**Mục đích:** Liệt kê tài liệu đầu vào để xây dựng SRS

**Ý nghĩa:** Đảm bảo SRS dựa trên nguồn business đáng tin, như BRD cho PSP

**Cách làm:** Bullet list với version/date/author, ưu tiên core docs

**Nội dung cần có:**
* List docs: 01-BRD.md (business reqs), Problem.md (problem statement)
* Details: Version (e.g., BRD v3.0, date 2025-10-17)
* Purpose each: BRD for goals, Feature Tree for functional breakdown
* Links: Internal refs to files
* Update: Nếu doc thay đổi, impact to SRS

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part01 (Tài liệu tham chiếu input)
* Đầu vào từ: 01-BRD.md (main input doc)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Input Documents sub-section)
* Kết nối với: Problem.md (input for problem description)
* Kết nối với: System_Feature_Tree_Grok.md (input for features)

**Mục đích của node này:** Cung cấp nguồn gốc dữ liệu cho SRS, hỗ trợ audit và update

---

## 01.4.2 - Standards - Tiêu chuẩn

**Mục đích:** Liệt kê tiêu chuẩn áp dụng cho SRS và dự án

**Ý nghĩa:** Đảm bảo PSP tuân thủ như IEEE SRS, GDPR, ISO 27001 cho security

**Cách làm:** Bullet list với mô tả ngắn, version standard nếu áp dụng

**Nội dung cần có:**
* Documentation standards: IEEE 830-1998 for SRS structure
* Compliance: GDPR/PDPA for data privacy, ISO 27001 for security
* Design: SOLID principles for architecture, WCAG 2.1 for accessibility
* Industry: FMCG sampling best practices (e.g., Peekage for AI)
* Application: Áp dụng cho all Parts (e.g., GDPR in Part11)

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3 (Yêu cầu kỹ thuật ISO 27001)
* Đầu vào từ: 01-BRD.md § 5.1 (Rủi ro compliance standards)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Standards sub-section)
* Kết nối với: Part06B_Design_Patterns (SOLID standards)
* Kết nối với: Part11_Security_Compliance (GDPR/PDPA)

**Mục đích của node này:** Xác định khung chuẩn để SRS và hệ thống đạt chất lượng chuyên nghiệp

---

## 01.5 - Conventions - Quy ước

**Mục đích:** Định nghĩa các quy ước ký hiệu và format trong SRS

**Ý nghĩa:** Đảm bảo consistency trong PSP docs, dễ đọc và trace

**Cách làm:** Gộp requirement IDs, priority, status, sử dụng bảng cho clarity

**Nội dung cần có:**
* Tổng quan conventions: Ký hiệu (FR-XXX for functional), format (bullet for lists)
* Application: Áp dụng cho all requirements (e.g., priority in Part04)
* Examples: FR-001 (high priority, ✅ complete)
* Update: Nếu thay đổi, notify team
* Liên kết: Với traceability matrix

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part01 (Quy ước ký hiệu)
* Đầu vào từ: Problem.md § 1 (MoSCoW for priority)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Conventions section)
* Kết nối với: System_Feature_Tree_Grok.md (FR-XXX examples)
* Kết nối với: Part00 - 00.5_Success_Criteria (status indicators)

**Mục đích của node này:** Chuẩn hóa ngôn ngữ và format SRS, giảm lỗi hiểu

---

## 01.5.1 - Requirement_IDs - ID Yêu cầu

**Mục đích:** Quy định cách đánh ID cho requirements để dễ trace

**Ý nghĩa:** Hỗ trợ traceability trong PSP, như FR-001 cho Campaign

**Cách làm:** Mô tả format (FR-XXX, NFR-XXX), ví dụ, rule unique ID

**Nội dung cần có:**
* Format: FR-XXX (Functional), NFR-XXX (Non-Functional), UC-XXX (Use Case)
* Examples: FR-001: Campaign Management; NFR-001: Performance ≤3s
* Rules: Sequential numbering, no duplicates, versioned if changed
* Application: Sử dụng trong Part04-05
* Tools: Jira for tracking IDs

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part01 (Quy ước ký hiệu FR-XXX)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 (FR examples như FR-001)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Requirement IDs sub-section)
* Kết nối với: Part04_Functional_Requirements (apply IDs)
* Kết nối với: Part16.2_Traceability_Matrix (ID mapping)

**Mục đích của node này:** Chuẩn hóa cách đánh mã requirements, dễ dàng tham chiếu và quản lý

---

## 01.5.2 - Priority_Levels - Mức độ Ưu tiên

**Mục đích:** Định nghĩa mức độ ưu tiên cho requirements

**Ý nghĩa:** Ưu tiên Must-Have cho MVP PSP, như OTP verification

**Cách làm:** Sử dụng scale (Critical/High/Medium/Low) hoặc MoSCoW, ví dụ từ feature tree

**Nội dung cần có:**
* Levels: Critical (Must-Have: core for MVP), High (Should-Have: optimization), Medium (Could-Have), Low (Nice-to-Have: future)
* Examples: Critical: FR-001 Campaign; Low: AI personalization
* Rules: Dựa trên business impact, ROI, rủi ro
* Application: Áp dụng trong Part04-05, ảnh hưởng phasing
* Update: Review priority quarterly

**Tài liệu tham khảo:**
* Đầu vào từ: Problem.md § 1 (Phân loại mục tiêu MoSCoW levels)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1-3 (Must/Should/Nice)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Priority Levels sub-section)
* Kết nối với: 01-BRD.md § 3 (Feature Prioritization must/should)
* Kết nối với: Part03.4_Feature_Prioritization (detailed priority)

**Mục đích của node này:** Hướng dẫn team ưu tiên phát triển, phù hợp với phasing MVP

---

## 01.5.3 - Status_Indicators - Chỉ số Trạng thái

**Mục đích:** Quy định indicator cho status của requirements

**Ý nghĩa:** Theo dõi progress trong SRS PSP, như Draft/Approved

**Cách làm:** Định nghĩa icons hoặc text (✅ Complete, ⏳ In Progress), ví dụ

**Nội dung cần có:**
* Status types: New (Mới), In Review (Đang review), Approved (Approved), Rejected (Rejected)
* Icons: ✅ Hoàn thành, ⏳ Đang thực hiện, 🔴 Chưa bắt đầu
* Rules: Update status sau review, link to progress tracking
* Application: Áp dụng cho each requirement in Part04-05
* Log: Change history for status

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part00 (status icons như ✅)
* Đầu vào từ: 01-BRD.md § 8.3 (Tiêu chí thành công checklist status)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Status Indicators sub-section)
* Kết nối với: Part00 - 00.2_Progress_Tracking (status in table)
* Kết nối với: Part16.6_Document_Approval (sign-off status)

**Mục đích của node này:** Giúp quản lý version và progress của requirements trong SRS

---

## 01.6 - Document_Structure - Cấu trúc Tài liệu

**Mục đích:** Mô tả cấu trúc tổng thể của SRS

**Ý nghĩa:** Hướng dẫn navigation qua các Parts trong PSP documentation, dễ tìm thông tin

**Cách làm:** Vẽ cây thư mục hoặc list hierarchically, sử dụng Mermaid nếu cần

**Nội dung cần có:**
* Overview: From Part00 Checklist to Part16 Appendices
* Breakdown: Part01 Introduction, Part04 Functional, etc., with brief desc
* Refs: Link to each Part (e.g., Part04 for FRs)
* Visualization: Tree structure like SRS_STRUCTURE.md
* Update: Nếu cấu trúc thay đổi, version note

**Tài liệu tham khảo:**
* Đầu vào từ: SRS_STRUCTURE.md (cấu trúc thư mục mẫu)
* Đầu vào từ: 02-SRS-Pre.md (chi tiết từng Part)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Document Structure section)
* Kết nối với: Part00 - 00.1_Purpose_and_Scope (scope in structure)
* Kết nối với: Part16_Appendices (end structure)

**Mục đích của node này:** Giúp reader dễ dàng tìm kiếm thông tin trong SRS lớn

---

## 01.7 - Quality_Assurance - Đảm bảo Chất lượng

**Mục đích:** Mô tả quy trình đảm bảo chất lượng cho SRS

**Ý nghĩa:** Đảm bảo SRS PSP không có contradictions, traceable đầy đủ, đạt chuẩn professional

**Cách làm:** Liệt kê steps review (peer review, stakeholder sign-off), tools như checklists

**Nội dung cần có:**
* Quy trình: Review cycles (draft → review → approve), traceability check
* Metrics: Zero contradictions, 100% traceable to BRD, coverage >95%
* Tools: Jira for tracking issues, checklists from success criteria
* Roles: BA review requirements, Tech Lead review architecture
* Log: QA history, issues resolved

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md § Documentation Quality (quality gates)
* Đầu vào từ: 01-BRD.md § 8 (Tiêu chí thành công quality assurance)
* Thể hiện yêu cầu: 02-SRS-V2.md Part01 (Quality Assurance section)
* Kết nối với: Part00 - 00.5_Success_Criteria (QA metrics)
* Kết nối với: Part16.6_Document_Approval (review checklist)

**Mục đích của node này:** Đảm bảo SRS đạt chuẩn chất lượng trước khi approve

---

**✅ PART01 HOÀN THÀNH - 13/13 NODES**

Tiếp tục **PART02** không bạn? 🚀

## 📋 **RULE (Ngắn gọn)**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn như ví dụ

---

## 🌲 **CÂY THƯ MỤC PART02**
```
Part02_System_Overview/ ✅
├── 02.1_System_Description.md
├── 02.2_System_Context.md
│   ├── 02.2.1_Business_Context.md
│   ├── 02.2.2_User_Personas.md
│   └── 02.2.3_Operating_Environment.md
├── 02.3_System_Actors.md
│   ├── 02.3.1_Admin_Role.md
│   ├── 02.3.2_Group_Admin_Role.md
│   ├── 02.3.3_Customer_Account_Role.md
│   ├── 02.3.4_Serving_Account_Role.md
│   ├── 02.3.5_Auditor_Role.md
│   └── 02.3.6_User_Role.md
├── 02.4_System_Dependencies.md
│   ├── 02.4.1_External_Systems.md
│   ├── 02.4.2_Third_Party_Services.md
│   └── 02.4.3_Integration_Points.md
└── 02.5_Assumptions_and_Constraints.md
```

---

# PART02 - SYSTEM OVERVIEW

## 02.1 - System_Description - Mô tả Hệ thống

**Mục đích:** Mô tả tổng quan hệ thống PSP, bao gồm chức năng chính và cách giải quyết vấn đề

**Ý nghĩa:** Cung cấp cái nhìn high-level về hệ thống hybrid, hỗ trợ thu data verified và tối ưu ROI

**Cách làm:** Viết mô tả ngắn gọn, sử dụng diagram (Mermaid system overview), dựa trên feature tree và BRD

**Nội dung cần có:**
* Tổng quan: PSP là platform SaaS hybrid cho sampling FMCG, giảm chi phí qua retail nodes
* Chức năng chính: Campaign creation, data collection, redemption, analytics
* Lợi ích: Data quality >95%, ROI uplift >20%, scale 10M users
* High-level flow: Brand → Customer verify → Redeem → CRM sync
* Assumptions: Cloud-based, mobile-first

**Tài liệu tham khảo:**
* Đầu vào từ: Problem.md § 1 Must-have (system description core)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 Must-Have (functions overview)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (System Description)
* Kết nối với: 01-BRD.md § 2 (Mô hình tài chính system benefits)
* Kết nối với: Part06_System_Architecture (detailed desc)

**Mục đích của node này:** Giới thiệu hệ thống để team nắm rõ bức tranh tổng thể trước khi đi sâu vào chi tiết

---

## 02.2 - System_Context - Ngữ cảnh Hệ thống

**Mục đích:** Mô tả ngữ cảnh sử dụng và môi trường của hệ thống PSP

**Ý nghĩa:** Giúp hiểu position của PSP trong ecosystem, bao gồm business/user/environment

**Cách làm:** Gộp business context, personas, environment, sử dụng diagrams cho context

**Nội dung cần có:**
* Tổng quan context: PSP trong market SEA FMCG, hybrid offline-online
* Breakdown: Business (goals ROI), user (personas), operating (cloud multi-tenant)
* Diagrams: Context diagram (system + external)
* Rủi ro: Intermittent network, compliance
* Liên kết: Với dependencies

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 3 (Market Opportunity context SEA)
* Đầu vào từ: 01-BRD.md § 1.3 (Stakeholders context users)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (System Context)
* Kết nối với: Access_Control_Tree_Grok.md § 1 (user context)
* Kết nối với: Part02 - 02.4_System_Dependencies (external context)

**Mục đích của node này:** Đặt hệ thống vào bối cảnh lớn, hỗ trợ design phù hợp

---

## 02.2.1 - Business_Context - Ngữ cảnh Kinh doanh

**Mục đích:** Mô tả ngữ cảnh kinh doanh của hệ thống, liên kết với goals của PSP

**Ý nghĩa:** Giúp hiểu cách hệ thống hỗ trợ brand thu data từ sampling giá thấp, giảm chi phí logistics

**Cách làm:** Sử dụng bullet hoặc diagram, map từ vision và BRD, bao gồm scenarios

**Nội dung cần có:**
* Business scenarios: Brand tạo campaign → Khách scan QR → Verify → Redeem → Analytics ROI
* Goals: Cost/lead ≤0.4 USD, conversion ≥90%, fraud ≤5%
* Market positioning: Dẫn đầu SEA sampling, cạnh tranh Sampler/SoPost
* Value chain: Từ quà rẻ → data lớn → remarketing
* Rủi ro kinh doanh: Market adoption, competition

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 3 (Market Opportunity business context SEA)
* Đầu vào từ: 01-BRD.md § 1.5 (Mục tiêu chiến lược & KPI business goals)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Business Context sub-section)
* Kết nối với: Problem.md § 3 (Flow vận hành business flows)
* Kết nối với: Part03.1_Business_Goals (detailed goals)

**Mục đích của node này:** Kết nối technical specs với business value, đảm bảo hệ thống align với chiến lược

---

## 02.2.2 - User_Personas - Nhóm Người dùng

**Mục đích:** Mô tả personas người dùng để thiết kế user-centric

**Ý nghĩa:** Hỗ trợ thiết kế cho các roles trong PSP, như brand manager hoặc end-user nhận quà

**Cách làm:** Sử dụng template persona (name, role, goals, pain points), dựa trên access tree, số lượng 6 personas tương ứng roles

**Nội dung cần có:**
* Personas: Admin (quản lý toàn hệ thống, goal: setup efficient), Group Admin (manage group campaigns)
* Details: Demographics (age, job), behaviors (daily tasks), pain points (e.g., fraud for brand)
* Goals: E.g., End User: Receive quà nhanh, verified easily
* Use cases: Link to each persona's interactions
* Visualization: Table or cards for personas

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 1 (Vai trò và quyền tổng quan 6 roles personas)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 User Stories (persona-based stories)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (User Personas sub-section)
* Kết nối với: 01-BRD.md § 1.3 (Stakeholders persona from stakeholders)
* Kết nối với: Part10_UI_UX_Design (personas for UX)

**Mục đích của node này:** Hướng dẫn thiết kế UX/UI phù hợp với nhu cầu người dùng thực tế

---

## 02.2.3 - Operating_Environment - Môi trường Vận hành

**Mục đích:** Mô tả môi trường vận hành của hệ thống

**Ý nghĩa:** Đảm bảo PSP chạy mượt trên cloud, multi-tenant, hỗ trợ offline tại retail nodes

**Cách làm:** Liệt kê hardware/software requirements, sử dụng bảng, bao gồm constraints

**Nội dung cần có:**
* Environment: Cloud (AWS/GCP), multi-tenant DB, PWA for mobile-first
* Hardware: Smartphone for POS scan, tablet for staff
* Software: Node.js/Go backend, React frontend, OS support (iOS/Android/browser)
* Constraints: Intermittent internet (offline sync), peak load 100K req/min
* Testing: Environment setup (dev/staging/prod)

**Tài liệu tham khảo:**
* Đầu vào từ: Problem.md § 3 (Flow vận hành offline mode at nodes)
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 (Yêu cầu kỹ thuật stack AWS/GCP)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Operating Environment sub-section)
* Kết nối với: 02-SRS-Pre.md Part02 (Operating environment cloud)
* Kết nối với: Part14_Deployment_Architecture (environment setup)

**Mục đích của node này:** Xác định yêu cầu môi trường để dev team thiết kế phù hợp

---

## 02.3 - System_Actors - Các Actor Hệ thống

**Mục đích:** Liệt kê và mô tả các actor (roles) tương tác với hệ thống

**Ý nghĩa:** Định nghĩa users trong PSP, hỗ trợ RBAC và use cases

**Cách làm:** Gộp descriptions của 6 roles, sử dụng bảng hoặc bullet, link to access tree

**Nội dung cần có:**
* Tổng quan: 6 actors (Admin to User Role), with brief desc
* Breakdown: Each role with responsibilities (e.g., Admin: full control)
* Interactions: High-level use cases per actor
* Diagram: Actor diagram (Mermaid)
* Extension: Future roles if needed

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 1 (Vai trò và quyền tổng quan 6 actors)
* Đầu vào từ: 01-BRD.md § 1.3 (Stakeholders actors from business)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (System Actors section)
* Kết nối với: System_Feature_Tree_Grok.md User Stories (actor-based)
* Kết nối với: Part09_Use_Cases (actor-use case matrix)

**Mục đích của node này:** Cung cấp foundation cho phân quyền và use cases, đảm bảo system user-focused

---

## 02.3.1 - Admin_Role - Vai trò Admin

**Mục đích:** Mô tả quyền hạn và trách nhiệm của Admin Role

**Ý nghĩa:** Đảm bảo toàn quyền quản lý hệ thống PSP, như setup API và user

**Cách làm:** Liệt kê permissions, sử dụng bullet từ access tree, bao gồm examples

**Nội dung cần có:**
* Quyền hạn: Toàn quyền (create users, config API/POS/CRM, manage all campaigns)
* Trách nhiệm: System setup, monitoring, audit logs
* Examples: Import barcode global, approve changes
* Limitations: None (top level)
* Liên kết: Với RBAC implementation

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (Phân quyền theo Module Admin permissions)
* Đầu vào từ: System_Feature_Tree_Grok.md User Stories (Admin tasks like create campaign)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Admin Role sub-section)
* Kết nối với: 01-BRD.md § 1.3 (Stakeholders Admin/Ops role)
* Kết nối với: Part04.2.8_FR-008_Access_Control (RBAC for Admin)

**Mục đích của node này:** Chi tiết hóa role để implement RBAC chính xác

---

## 02.3.2 - Group_Admin_Role - Vai trò Group Admin

**Mục đích:** Mô tả quyền hạn của Group Admin Role

**Ý nghĩa:** Quản lý group-specific trong PSP, không ảnh hưởng global, hỗ trợ multi-tenant

**Cách làm:** Bullet permissions, ví dụ từ access tree, so sánh với Admin

**Nội dung cần có:**
* Quyền hạn: Tạo/sửa campaign trong group, gán barcode/location, xem stats group
* Trách nhiệm: Manage group users, preview campaigns
* Examples: Import barcode for group, trigger auto-issue
* Limitations: Không xóa global resources
* Liên kết: Với group-based scalability

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (Group Admin permissions)
* Đầu vào từ: System_Feature_Tree_Grok.md User Stories (Group Admin like create group campaign)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Group Admin Role sub-section)
* Kết nối với: 01-BRD.md § 1.3 (Stakeholders Group management)
* Kết nối với: Part05_Non_Functional (multi-tenant for groups)

**Mục đích của node này:** Định nghĩa role để hỗ trợ multi-tenant management

---

## 02.3.3 - Customer_Account_Role - Vai trò Customer Account

**Mục đích:** Mô tả quyền hạn của Customer Account Role (brand users)

**Ý nghĩa:** Cho phép brand quản lý campaign riêng trong PSP, hỗ trợ self-service

**Cách làm:** Liệt kê permissions, liên kết với feature, examples brand tasks

**Nội dung cần có:**
* Quyền hạn: Tạo/sửa campaign riêng, import barcode, xem redemption stats, xuất data
* Trách nhiệm: Preview landing page, config quiz
* Examples: Trigger barcode issuance, export CSV analytics
* Limitations: Chỉ access own data
* Liên kết: Với dashboard customization

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (Customer Account permissions)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 (Customer tasks like create campaign)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Customer Account Role sub-section)
* Kết nối với: Problem.md § 2 (Quản lý Campaign brand role)
* Kết nối với: Part04.2_Must_Have_Requirements (FR-001 for customer)

**Mục đích của node này:** Hỗ trợ thiết kế cho end-user brand, đảm bảo security

---

## 02.3.4 - Serving_Account_Role - Vai trò Serving Account

**Mục đích:** Mô tả quyền hạn của Serving Account Role (staff retail)

**Ý nghĩa:** Hỗ trợ redeem tại POS trong PSP hybrid, đảm bảo operational efficiency

**Cách làm:** Bullet permissions, ví dụ scan, so sánh với other roles

**Nội dung cần có:**
* Quyền hạn: Scan barcode redeem, update status, xem ticket liên quan
* Trách nhiệm: Xác nhận stock tại node, report issues
* Examples: Offline redeem sync, view redemption logs
* Limitations: Chỉ access redeem tool, no create campaign
* Liên kết: Với POS integration

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2.6 (Serving Account permissions)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.5 Redemption (serving tasks)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Serving Account Role sub-section)
* Kết nối với: Problem.md § 3 (Flow vận hành redeem at POS)
* Kết nối với: Part04.2.5_FR-005_Redemption_POS (FR-005 for serving)

**Mục đích của node này:** Định nghĩa role cho operational users tại site

---

## 02.3.5 - Auditor_Role - Vai trò Auditor

**Mục đích:** Mô tả quyền hạn của Auditor Role

**Ý nghĩa:** Đảm bảo compliance và audit logs trong PSP, hỗ trợ regulatory

**Cách làm:** Liệt kê read-only permissions, examples audit tasks

**Nội dung cần có:**
* Quyền hạn: Xem logs/compliance reports, audit trails (read-only)
* Trách nhiệm: Check GDPR/PDPA, investigate fraud
* Examples: View redeem logs, export compliance data
* Limitations: No modify data
* Liên kết: Với security logs

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (Auditor permissions)
* Đầu vào từ: 01-BRD.md § 5.1 (Rủi ro compliance audit)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Auditor Role sub-section)
* Kết nối với: Part11_Security_Compliance (audit requirements)
* Kết nối với: Part15_Operations_Monitoring (post-mortem audit)

**Mục đích của node này:** Hỗ trợ kiểm toán, tuân thủ GDPR/PDPA

---

## 02.3.6 - User_Role - Vai trò User

**Mục đích:** Mô tả quyền hạn của User Role (khách hàng cuối)

**Ý nghĩa:** Hỗ trợ end-user truy cập PWA portal trong PSP, tăng engagement

**Cách làm:** Bullet permissions, ví dụ user interactions

**Nội dung cần có:**
* Quyền hạn: Điền form, verify OTP, xem barcode history, gửi ticket, withdraw consent
* Trách nhiệm: Opt-in marketing, participate quiz/survey
* Examples: Receive notification, check redeem status
* Limitations: No admin access
* Liên kết: Với privacy hub

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2.10 User Portal (User Role permissions)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.3 Landing Page (user interactions)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (User Role sub-section)
* Kết nối với: Problem.md § 3 (Flow vận hành user flow)
* Kết nối với: Part10_UI_UX_Design (user-centric design)

**Mục đích của node này:** Định nghĩa role cho khách hàng, đảm bảo UX tốt

---

## 02.4 - System_Dependencies - Phụ thuộc Hệ thống

**Mục đích:** Liệt kê dependencies của hệ thống PSP

**Ý nghĩa:** Xác định external factors để quản lý rủi ro integration

**Cách làm:** Gộp external systems, third-party, integration points, sử dụng bảng

**Nội dung cần có:**
* Tổng quan: Dependencies như POS, CRM, SMS providers
* Breakdown: External (POS Circle K), third-party (Twilio), points (webhook sync)
* Rủi ro: Fallback if down (e.g., offline mode)
* SLA: Requirements for dependencies (e.g., 99.9% uptime)
* Diagram: Dependency map

**Tài liệu tham khảo:**
* Đầu vào từ: 02-SRS-Pre.md Part02 (System Dependencies)
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 (Tích hợp dependencies như HubSpot)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Dependencies section)
* Kết nối với: Problem.md § 4 (Yêu cầu kỹ thuật external APIs)
* Kết nối với: Part15_Operations_Monitoring (monitoring dependencies)

**Mục đích của node này:** Lập kế hoạch integration, tránh rủi ro phụ thuộc

---

## 02.4.1 - External_Systems - Hệ thống Bên ngoài

**Mục đích:** Liệt kê hệ thống bên ngoài mà PSP phụ thuộc

**Ý nghĩa:** Xác định dependencies như POS, CRM để tích hợp seamless

**Cách làm:** Bullet list với desc, version if applicable

**Nội dung cần có:**
* Systems: POS (Circle K system for redeem), CRM (HubSpot/Salesforce for data sync)
* Details: API type (REST/webhook), data flow (push verified data)
* Requirements: Security (OAuth2), performance (≤3s response)
* Rủi ro: Downtime fallback
* Examples: Integration with ERP for barcode

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.5 (POS Integration external POS)
* Đầu vào từ: Problem.md § 2 (Tích hợp POS/CRM external systems)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (External Systems sub-section)
* Kết nối với: 01-BRD.md § 4 (Functional external sync)
* Kết nối với: Part08_API_Design (external APIs)

**Mục đích của node này:** Lập kế hoạch integration với external, đảm bảo compatibility

---

## 02.4.2 - Third_Party_Services - Dịch vụ Bên thứ ba

**Mục đích:** Liệt kê dịch vụ third-party sử dụng trong PSP

**Ý nghĩa:** Hỗ trợ chức năng như OTP (Twilio), fraud detection, giảm dev time

**Cách làm:** Bảng với service name, purpose, vendor

**Nội dung cần có:**
* Services: Twilio (SMS/OTP), Scandit (barcode scan SDK), MessageBird (email)
* Details: API key management, cost model (per message)
* Requirements: SLA (delivery >95%), security (PII encryption)
* Alternatives: Fallback vendors if needed
* Rủi ro: Vendor downtime, cost optimization

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 (Tích hợp Twilio, Scandit)
* Đầu vào từ: 01-BRD.md § 7.2 (Hạ tầng công nghệ third-party services)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Third Party Services sub-section)
* Kết nối với: Problem.md § 4 (Yêu cầu kỹ thuật third-party APIs)
* Kết nối với: Part15_Operations_Monitoring (third-party support)

**Mục đích của node này:** Xác định vendor để quản lý SLA và cost

---

## 02.4.3 - Integration_Points - Điểm Tích hợp

**Mục đích:** Mô tả điểm tích hợp giữa PSP và external systems

**Ý nghĩa:** Đảm bảo seamless data flow như webhook CRM trong PSP

**Cách làm:** Diagram hoặc list flows, sử dụng Mermaid sequence

**Nội dung cần có:**
* Points: Webhook for redeem update, API push to CRM, SDK for POS scan
* Details: Data format (JSON), error handling (retries)
* Flows: E.g., User verify → Barcode issue → POS redeem → CRM sync
* Security: TLS, OAuth2 at points
* Testing: Integration test requirements

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.6 (CRM Sync integration points)
* Đầu vào từ: Part08_API_Design (endpoints for integration)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Integration Points sub-section)
* Kết nối với: 01-BRD.md § 4 (Functional integration reqs)
* Kết nối với: Part13_System_Testing_Strategy (integration testing)

**Mục đích của node này:** Hướng dẫn dev implement integration an toàn

---

## 02.5 - Assumptions_and_Constraints - Giả định và Ràng buộc

**Mục đích:** Liệt kê assumptions và constraints ảnh hưởng đến hệ thống

**Ý nghĩa:** Xử lý rủi ro như intermittent internet tại nodes trong PSP, định hướng design

**Cách làm:** Bullet lists riêng cho assumptions/constraints, map rủi ro

**Nội dung cần có:**
* Assumptions: Brands cung cấp mẫu vật lý, retail nodes có smartphone scan
* Constraints: Peak load 100K req/min, budget seed 500K USD, internet intermittent (need offline)
* Impact: Assumptions fail → fallback (e.g., manual redeem)
* Mitigation: Offline sync for constraints
* Liên kết: Với NFRs

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.4 (Giả định và Ràng buộc assumptions như PII compliance)
* Đầu vào từ: Problem.md § 4 (Yêu cầu kỹ thuật constraints offline)
* Thể hiện yêu cầu: 02-SRS-V2.md Part02 (Assumptions and Constraints)
* Kết nối với: 02-SRS-Pre.md Part02 (Assumptions)
* Kết nối với: Part05_Non_Functional_Requirements (constraints to NFRs)

**Mục đích của node này:** Dự đoán rủi ro, hướng dẫn mitigation trong design

---

**✅ PART02 HOÀN THÀNH - 18/18 NODES**

Tiếp tục **PART03** không bạn? 🚀
## 📋 **RULE (Ngắn gọn)**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn như ví dụ

---

## 🌲 **CÂY THƯ MỤC PART03**
```
Part03_Scope_and_Objectives/ ✅
├── 03.1_Business_Goals.md
│   ├── 03.1.1_Primary_Objectives.md
│   ├── 03.1.2_Strategic_Value.md
│   └── 03.1.3_Success_Metrics.md
├── 03.2_Product_Vision.md
│   ├── 03.2.1_Vision_Statement.md
│   ├── 03.2.2_Market_Positioning.md
│   └── 03.2.3_Competitive_Advantage.md
├── 03.3_MVP_Definition.md
│   ├── 03.3.1_Core_Features.md
│   ├── 03.3.2_Phase_1_Scope.md
│   └── 03.3.3_Success_Criteria.md
├── 03.4_Feature_Prioritization.md
│   ├── 03.4.1_Must_Have_Features.md
│   ├── 03.4.2_Should_Have_Features.md
│   └── 03.4.3_Nice_to_Have_Features.md
└── 03.5_KPI_Mapping.md
```

---

Tôi sẽ tạo file markdown **Part03_Scope_and_Objectives.md** với đầy đủ 13 nodes ngay bây giờ:

<artifact identifier="part03-content" type="text/markdown" title="Part03_Scope_and_Objectives.md">
# PART03 - SCOPE AND OBJECTIVES

## 03.1 - Business_Goals - Mục tiêu Kinh doanh

**Mục đích:** Map business goals từ BRD thành objectives cho SRS

**Ý nghĩa:** Đảm bảo PSP align với strategic value, như ROI uplift từ sampling

**Cách làm:** Gộp primary objectives, strategic value, success metrics, sử dụng bảng

**Nội dung cần có:**
* Tổng quan goals: Giảm cost/lead, tăng conversion, giảm fraud
* Breakdown: Primary (CPL ≤0.4 USD), strategic (market leading SEA), metrics (ROI >20%)
* Alignment: Link to KPIs (MRR 50K USD by 2027)
* Visualization: Table goals vs metrics
* Review: Annual goal update

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.5 (Mục tiêu chiến lược & KPI business goals)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 8 (Success Metrics goals like adoption)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Business Goals section)
* Kết nối với: Problem.md § 1 Must-have (goals from core)
* Kết nối với: Part03.5_KPI_Mapping (detailed mapping)

**Mục đích của node này:** Kết nối SRS với business objectives, hướng dẫn prioritization

---

## 03.1.1 - Primary_Objectives - Mục tiêu Chính

**Mục đích:** Liệt kê các mục tiêu kinh doanh chính của dự án

**Ý nghĩa:** Định hướng SRS theo core goals, như giảm chi phí sampling hiệu quả

**Cách làm:** Bullet measurable objectives, map từ BRD

**Nội dung cần có:**
* Objectives: Cost per verified user ≤0.4 USD, conversion rate ≥90%, fraud rate ≤5%
* Details: Primary focus MVP (1M samples), link to phases
* Impact: Tăng brand adoption >50 in year 1
* Examples: Achieve through hybrid network
* Metrics: Track quarterly

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.5 (Mục tiêu chiến lược primary KPIs)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 8 (Success Metrics primary objectives)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Primary Objectives sub-section)
* Kết nối với: Problem.md § 1 Must-have (core objectives)
* Kết nối với: Part03.3_MVP_Definition (MVP objectives)

**Mục đích của node này:** Xác định focus kinh doanh cho SRS, hỗ trợ alignment

---

## 03.1.2 - Strategic_Value - Giá trị Chiến lược

**Mục đích:** Mô tả giá trị chiến lược của PSP

**Ý nghĩa:** Giải thích cách hệ thống tạo lợi thế cạnh tranh, như data moat từ sampling

**Cách làm:** Viết narrative, sử dụng bullet for values, từ vision

**Nội dung cần có:**
* Value: Biến sampling thành growth engine, data chất lượng cao cho remarketing
* Strategic: Dẫn đầu SEA market, ROI uplift >20%, sustainability tracking future
* Impact: Brand retention >70%, revenue from SaaS + services
* Examples: Co-sampling marketplace (phase 3)
* Alignment: Với long-term vision

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 2 Vision (strategic value)
* Đầu vào từ: 01-BRD.md § 2.1 (Mô hình doanh thu strategic ROI)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Strategic Value sub-section)
* Kết nối với: System_Feature_Tree_Grok.md § 3 Nice-to-Have (strategic features)
* Kết nối với: Part03.2_Product_Vision (vision statement)

**Mục đích của node này:** Nhấn mạnh lợi ích dài hạn, motivate team

---

## 03.1.3 - Success_Metrics - Chỉ số Thành công

**Mục đích:** Định nghĩa metrics đo lường success của business goals

**Ý nghĩa:** Đảm bảo PSP đạt KPI cụ thể, như conversion uplift

**Cách làm:** Bảng metrics với target, từ BRD

**Nội dung cần có:**
* Metrics: Conversion rate ≥90%, fraud ≤5%, user engagement >70%
* Targets: Short-term (MVP: 1M samples), long-term (10M users)
* Measurement: Tools (GA4 for funnel, dashboard for ROI)
* Breakdown: Per phase (Phase 1: 95% OTP success)
* Review: Quarterly metrics report

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.5 KPI (success metrics)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 8 (Success Metrics KPIs like ROI)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Success Metrics sub-section)
* Kết nối với: Part05_Non_Functional_Requirements (performance metrics)
* Kết nối với: Part03.5_KPI_Mapping (mapping to KPIs)

**Mục đích của node này:** Cung cấp measurable criteria để evaluate project success

---

## 03.2 - Product_Vision - Tầm nhìn Sản phẩm

**Mục đích:** Mô tả vision sản phẩm PSP từ vision document

**Ý nghĩa:** Định hướng long-term, từ cost center đến data-driven platform

**Cách làm:** Gộp vision statement, positioning, advantage, sử dụng quote from vision

**Nội dung cần có:**
* Vision overview: Transform sampling into growth engine for brands
* Statement: "Từ quà tặng nhỏ → dữ liệu lớn" for FMCG
* Positioning: Leading SEA platform, hybrid verified network
* Advantage: Fraud low, data quality high, AI optimizer future
* Roadmap link: Phase 1-3 vision

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 2 Vision (full vision)
* Đầu vào từ: 01-BRD.md § 1 Giới thiệu (product vision)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Product Vision section)
* Kết nối với: Problem.md (vision from problem solution)
* Kết nối với: Part03.3_MVP_Definition (vision to MVP)

**Mục đích của node này:** Inspire team với big picture, align SRS with long-term

---

## 03.2.1 - Vision_Statement - Tuyên bố Tầm nhìn

**Mục đích:** Viết statement vision ngắn gọn cho PSP

**Ý nghĩa:** Tóm tắt essence of product, motivate stakeholders

**Cách làm:** Quote or craft statement, 1-2 paragraphs

**Nội dung cần có:**
* Statement: "Transform product sampling from a cost center into a data-driven growth engine."
* Explanation: Focus on verified data, low-cost distribution, ROI max
* Key elements: Hybrid, SEA scale, AI future
* Alignment: With business goals
* Visual: Quote block

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 2 Vision (statement quote)
* Đầu vào từ: 01-BRD.md § 1 Giới thiệu (vision summary)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Vision Statement sub-section)
* Kết nối với: Part03.2.2_Market_Positioning (statement to positioning)
* Kết nối với: Part09_Use_Cases (vision in use cases)

**Mục đích của node này:** Cung cấp tuyên bố cốt lõi để guide all decisions

---

## 03.2.2 - Market_Positioning - Định vị Thị trường

**Mục đích:** Mô tả positioning của PSP trên thị trường

**Ý nghĩa:** Xác định lợi thế cạnh tranh, như focus SEA low-cost sampling

**Cách làm:** Sử dụng bảng so sánh competitors, từ strategy doc

**Nội dung cần có:**
* Positioning: "Sampling Intelligence Platform" for FMCG SEA
* Competitors: Vs Sampl, SoPost (focus SEA, hybrid)
* Unique: Verified network, fraud ML, cost <0.4 USD
* Market: 1.2B USD SEA, target VN/Thái/Indo
* Strategy: Pilot 5-10 brands, scale to 200

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 3 (Market Opportunity positioning)
* Đầu vào từ: 01-BRD.md § 2 (Mô hình tài chính market positioning)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Market Positioning sub-section)
* Kết nối với: Problem.md § 5 Mở rộng (market expansion)
* Kết nối với: Part03.2.3_Competitive_Advantage (positioning to advantage)

**Mục đích của node này:** Hướng dẫn features để tạo lợi thế thị trường

---

## 03.2.3 - Competitive_Advantage - Lợi thế Cạnh tranh

**Mục đích:** Mô tả lợi thế cạnh tranh của PSP

**Ý nghĩa:** Nhấn mạnh unique features như verified network, low fraud

**Cách làm:** Bullet advantages, so sánh with competitors from strategy

**Nội dung cần có:**
* Advantages: Hybrid model giảm cost, ML fraud <5%, AI optimizer (phase 2)
* Comparison: Vs Sampler (focus SEA, offline sync better)
* Value prop: Data quality 95%, ROI 20% uplift
* Future: Marketplace co-sampling
* Metrics: Brand retention >70%

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 4 (Strategic Positioning advantages)
* Đầu vào từ: System_Feature_Tree_Grok.md § 2 Should-have (fraud advantage)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Competitive Advantage sub-section)
* Kết nối với: 01-BRD.md § 2.1 Doanh thu (advantage in model)
* Kết nối với: Part03.4_Feature_Prioritization (advantage features)

**Mục đích của node này:** Xây dựng case for product uniqueness

---

## 03.3 - MVP_Definition - Định nghĩa MVP

**Mục đích:** Định nghĩa Minimum Viable Product cho PSP

**Ý nghĩa:** Tập trung scope Phase 1, đạt quick win với core features

**Cách làm:** Gộp core features, phase 1 scope, success criteria, từ roadmap

**Nội dung cần có:**
* MVP overview: Core flow tại VN (campaign → verify → redeem)
* Core features: Campaign, barcode, OTP, basic analytics
* Phase 1: Q1-Q2 2025, 1M samples, 20 brands
* Success: 95% OTP, fraud <5%, user 1M
* Risks: Limited to VN, no AI yet

**Tài liệu tham khảo:**
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 6 Roadmap (MVP phase)
* Đầu vào từ: 01-BRD.md § 6.1 Phase 1 (MVP development)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (MVP Definition section)
* Kết nối với: System_Feature_Tree_Grok.md § 1 Must-Have (MVP features)
* Kết nối với: Part03.5_KPI_Mapping (MVP KPIs)

**Mục đích của node này:** Guide implementation Phase 1, đảm bảo feasible timeline

---

## 03.3.1 - Core_Features - Tính năng Cốt lõi

**Mục đích:** Liệt kê core features cho MVP

**Ý nghĩa:** Định nghĩa minimum set to launch PSP, focus value

**Cách làm:** Bullet from must-have, prioritize

**Nội dung cần có:**
* Features: Campaign management, barcode issuance, landing form, OTP, redemption POS
* Details: Single-use barcode, basic funnel tracking
* Rationale: Solve core problem (low-cost sampling)
* Exclusions: Advanced AI (phase 2)
* Link: To FRs in Part04

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 Must-Have (core list)
* Đầu vào từ: Problem.md § 1 Must-have (core features)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Core Features sub-section)
* Kết nối với: 01-BRD.md § 4 Functional (core reqs)
* Kết nối với: Part04.2_Must_Have_Requirements (detailed core)

**Mục đích của node này:** Define MVP essentials for quick development

---

## 03.3.2 - Phase_1_Scope - Phạm vi Phase 1

**Mục đích:** Mô tả scope cụ thể cho Phase 1 (MVP)

**Ý nghĩa:** Giới hạn Phase 1 để achieve pilot success in VN

**Cách làm:** Bullet scope items, timeline, resources

**Nội dung cần có:**
* Scope: Core flow (VN pilot), 5-10 brands, 1M users
* Timeline: Q1-Q2 2025, milestones (Week 1 requirements)
* Resources: Team 8 people, budget 50-80K USD
* Exclusions: SEA scale (phase 2)
* Success: Pilot KPIs met

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 6.1 Phase 1 (scope and timeline)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 5 (Giai đoạn 1 pilot scope)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Phase 1 Scope sub-section)
* Kết nối với: Part00 - 00.4_Critical_Path (phase timeline)
* Kết nối với: Part03.3.3_Success_Criteria (phase success)

**Mục đích của node này:** Plan detailed for initial launch

---

## 03.3.3 - Success_Criteria - Tiêu chí Thành công

**Mục đích:** Định nghĩa criteria for MVP success

**Ý nghĩa:** Measure Phase 1 achievement, like user adoption

**Cách làm:** List measurable criteria, table with targets

**Nội dung cần có:**
* Criteria: OTP success >95%, redemption >98%, brands 20
* Targets: Quantitative (1M samples), qualitative (satisfaction >4.5/5)
* Measurement: Dashboard metrics, surveys
* Thresholds: Minimum for go-live
* Review: Post-MVP evaluation

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 8 (Tiêu chí thành công MVP criteria)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 8 (Success Metrics phase criteria)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Success Criteria sub-section)
* Kết nối với: Part03.1.3_Success_Metrics (overall metrics)
* Kết nối với: Part00 - 00.5_Success_Criteria (SRS criteria link)

**Mục đích của node này:** Set benchmarks for MVP validation

---

## 03.4 - Feature_Prioritization - Ưu tiên Tính năng

**Mục đích:** Prioritize features based on MoSCoW

**Ý nghĩa:** Guide development order, focus must-have for MVP

**Cách làm:** Gộp must/should/nice, table prioritization

**Nội dung cần có:**
* Overview: MoSCoW method for features
* Breakdown: Must-Have (core), Should-Have (optimization), Nice-to-Have (future)
* Criteria: Business impact, effort, risk
* Examples: Must: OTP; Nice: AI
* Update: Re-prioritize per phase

**Tài liệu tham khảo:**
* Đầu vào từ: Problem.md § 1 (Phân loại mục tiêu MoSCoW)
* Đầu vào từ: System_Feature_Tree_Grok.md § 1-3 (prioritized features)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Feature Prioritization section)
* Kết nối với: 01-BRD.md § 3 Feature Prioritization (must/should)
* Kết nối với: Part04_Functional_Requirements (prioritized FRs)

**Mục đích của node này:** Optimize resource allocation for features

---

## 03.4.1 - Must_Have_Features - Tính năng Phải có

**Mục đích:** List must-have features for MVP

**Ý nghĩa:** Ensure core functionality for launch

**Cách làm:** Bullet from feature tree, with rationale

**Nội dung cần có:**
* Features: Campaign, barcode, landing form, OTP, redemption
* Rationale: Solve problem (data collection, fraud prevention)
* Impact: Without, no MVP
* Link: To FRs
* Count: 8-10 core

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 Must-Have (list)
* Đầu vào từ: Problem.md § 1 Must-have (core)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Must Have sub-section)
* Kết nối với: Part04.2_Must_Have_Requirements (detailed)
* Kết nối với: Part03.3.1_Core_Features (MVP core)

**Mục đích của node này:** Define minimum for viable product

---

## 03.4.2 - Should_Have_Features - Tính năng Nên có

**Mục đích:** List should-have for Phase 2 optimization

**Ý nghĩa:** Enhance core, like fraud ML

**Cách làm:** Bullet with priority reasons

**Nội dung cần có:**
* Features: Fraud detection, A/B testing, consent management
* Rationale: Improve efficiency (fraud <5%)
* Impact: Post-MVP value
* Phase: 2026
* Dependencies: From must-have

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2 Should-have (list)
* Đầu vào từ: Problem.md § 1 Should-have (advanced)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Should Have sub-section)
* Kết nối với: Part04.3_Should_Have_Requirements (detailed)
* Kết nối với: Part03.3.2_Phase_1_Scope (post-phase)

**Mục đích của node này:** Plan enhancements after MVP

---

## 03.4.3 - Nice_to_Have_Features - Tính năng Hay có

**Mục đích:** List nice-to-have for future

**Ý nghĩa:** Add innovation, like AI personalization

**Cách làm:** Bullet with long-term value

**Nội dung cần có:**
* Features: AI optimizer, co-sampling marketplace, sustainability tracking
* Rationale: Competitive edge (predictive analytics)
* Impact: Phase 3 scale
* Dependencies: Data from earlier phases
* Potential: If budget allows

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 3 Nice-to-Have (list)
* Đầu vào từ: Problem.md § 1 Nice-to-Have (future-proof)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (Nice to Have sub-section)
* Kết nối với: Part04.4_Nice_to_Have_Requirements (detailed)
* Kết nối với: Product-Sampling-Vision-and-Strategy.md § 2 Vision (long-term)

**Mục đích của node này:** Outline growth opportunities

---

## 03.5 - KPI_Mapping - Ánh xạ KPI

**Mục đích:** Map KPIs to goals and features

**Ý nghĩa:** Measure success quantifiable

**Cách làm:** Table mapping KPI to objectives

**Nội dung cần có:**
* Table: KPI (CPL <0.4 USD) map to goal (cost reduction), feature (hybrid network)
* Details: Measurement method, target per phase
* Examples: Fraud KPI map to fraud detection
* Tools: Dashboard for tracking
* Review: Align with business metrics

**Tài liệu tham khảo:**
* Đầu vào từ: 01-BRD.md § 1.5 KPI (mapping)
* Đầu vào từ: Product-Sampling-Vision-and-Strategy.md § 8 Metrics (KPI list)
* Thể hiện yêu cầu: 02-SRS-V2.md Part03 (KPI Mapping section)
* Kết nối với: Part03.1.3_Success_Metrics (KPIs)
* Kết nối với: Part04.2.6_FR-006_Analytics_Dashboard (KPI tracking)

**Mục đích của node này:** Connect goals to measurable outcomes

---

**✅ PART03 HOÀN THÀNH - 13/13 NODES**
</artifact>

**✅ Đã tạo file Part03_Scope_and_Objectives.md với đầy đủ 13 nodes!**

Bạn check file xem format có OK không? Nếu OK tôi tiếp tục tạo file cho **PART04** (phần này sẽ dài nhất vì có 13 FR với nhiều sub-nodes) 🚀


## 📋 **RULE (Ngắn gọn)**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn như ví dụ

---

## 🌲 **CÂY THƯ MỤC PART04**
```
Part04_Functional_Requirements/ ✅
├── 04.1_Overview.md
├── 04.2_Must_Have_Requirements/ 🔴
│   ├── FR-001_Campaign_Management/
│   │   ├── 04.2.1.1_Overview.md
│   │   ├── 04.2.1.2_User_Stories.md
│   │   ├── 04.2.1.3_Functional_Specs.md
│   │   ├── 04.2.1.4_Business_Rules.md
│   │   ├── 04.2.1.5_API_Endpoints.md
│   │   └── 04.2.1.6_Acceptance_Criteria.md
│   ├── FR-002_Barcode_Management/
│   │   ├── 04.2.2.1_Overview.md
│   │   ├── 04.2.2.2_User_Stories.md
│   │   ├── 04.2.2.3_Barcode_Format.md
│   │   ├── 04.2.2.4_Import_Process.md
│   │   ├── 04.2.2.5_Status_Management.md
│   │   └── 04.2.2.6_Acceptance_Criteria.md
│   ├── FR-003_Landing_Page_Form/
│   │   ├── 04.2.3.1_Overview.md
│   │   ├── 04.2.3.2_Form_Fields.md
│   │   ├── 04.2.3.3_Validation_Rules.md
│   │   ├── 04.2.3.4_Consent_Management.md
│   │   └── 04.2.3.5_Acceptance_Criteria.md
│   ├── FR-004_OTP_Verification/
│   ├── FR-005_Redemption_POS/
│   ├── FR-006_Analytics_Dashboard/
│   ├── FR-007_CRM_Sync/
│   └── FR-008_Access_Control/
├── 04.3_Should_Have_Requirements/ 🟡
│   ├── FR-009_User_Portal/
│   ├── FR-010_Ads_Format_Management/
│   └── FR-011_Fraud_Detection/
├── 04.4_Nice_to_Have_Requirements/ 🟢
│   ├── FR-012_AB_Testing/
│   └── FR-013_AI_Personalization/
└── 04.5_Traceability_Matrix.md
```

---

Tôi sẽ tạo file markdown **Part04_Functional_Requirements.md** với đầy đủ nodes (khoảng 50+ nodes):

<artifact identifier="part04-content" type="text/markdown" title="Part04_Functional_Requirements.md">
# PART04 - FUNCTIONAL REQUIREMENTS

## 04.1 - Overview - Tổng quan

**Mục đích:** Giới thiệu tổng quan về các yêu cầu chức năng, định nghĩa phạm vi và cấu trúc phần Functional Requirements

**Ý nghĩa:** Làm nền tảng để chi tiết hóa chức năng hệ thống PSP, đảm bảo tính nhất quán và traceability từ business requirements

**Cách làm:** Viết ngắn gọn, liệt kê số lượng FR (13 FR chính), tham chiếu từ feature tree, sử dụng bảng để phân loại Must/Should/Nice

**Nội dung cần có:**
* Tổng quan FR: Giới thiệu 13 functional requirements, từ FR-001 Campaign đến FR-013 AI Personalization
* Cấu trúc: Phân loại theo priority (Must-Have 8 FR, Should-Have 3 FR, Nice-to-Have 2 FR)
* Traceability: Map FR đến business goals (e.g., FR-001 hỗ trợ ROI uplift)
* Phạm vi: Tập trung hybrid sampling, data collection, fraud prevention
* Liên kết: Đến sub-parts (04.2 Must-Have, etc.), update log nếu thay đổi

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1-3 (13 FR list và phân loại)
* Đầu vào từ: Problem.md § 2 (Tính năng chính functional overview)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Functional Overview section)
* Kết nối với: 01-BRD.md § 4 Functional Requirements (FR mapping)
* Kết nối với: Part16.2_Traceability_Matrix (FR to BRD mapping)

**Mục đích của node này:** Cung cấp cái nhìn tổng quan cho phần Functional, giúp navigation và align với priority

---

## 04.2 - Must_Have_Requirements - Yêu cầu Phải có

**Mục đích:** Chi tiết hóa các yêu cầu chức năng Must-Have cho MVP Phase 1

**Ý nghĩa:** Đảm bảo hệ thống PSP có core functions để vận hành cơ bản, như campaign và redemption, đạt MVP goals

**Cách làm:** Tạo sub-folders cho từng FR (FR-001 đến FR-008), viết specs dựa trên feature tree, sử dụng status 🔴 cho critical

**Nội dung cần có:**
* List FR: FR-001 Campaign Management đến FR-008 Access Control
* Tổng quan: Mô tả ngắn mỗi FR, priority critical, link to sub-files (overview, user stories, specs, etc.)
* Traceability: Map đến business KPIs (e.g., FR-005 hỗ trợ conversion ≥90%)
* Phạm vi MVP: Tập trung VN pilot, hybrid flow
* Acceptance: General criteria for all Must-Have (e.g., testable, measurable)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1 Must-Have (core FR list)
* Đầu vào từ: Problem.md § 1 Must-have (functional core)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Must Have Requirements section)
* Kết nối với: 01-BRD.md § 6.1 Phase 1 (MVP functional)
* Kết nối với: Part03.4.1_Must_Have_Features (priority link)

**Mục đích của node này:** Tổ chức chi tiết FR thiết yếu cho development MVP, đảm bảo no gaps in core

---

## 04.2.1 - FR-001_Campaign_Management - Quản lý Campaign

**Mục đích:** Chi tiết FR-001 cho quản lý campaign, từ tạo đến gán resources

**Ý nghĩa:** Là core function để brand triển khai sampling, hỗ trợ hybrid distribution và ROI tracking

**Cách làm:** Tạo sub-files (04.2.1.1 đến 04.2.1.6), dựa trên user stories và specs, sử dụng Mermaid cho flows

**Nội dung cần có:**
* Sub-structure: 04.2.1.1 Overview, 04.2.1.2 User Stories, 04.2.1.3 Functional Specs, 04.2.1.4 Business Rules, 04.2.1.5 API Endpoints, 04.2.1.6 Acceptance Criteria
* Phạm vi: Global/group level, UTM tracking, geo-targeting basic
* Importance: Foundation for other FRs (e.g., link barcode/ads)
* Liên kết: Với FR-002 Barcode, FR-010 Ads
* Status: 🔴 Critical for MVP

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.1 Campaign Management (detail FR-001)
* Đầu vào từ: Problem.md § 2.B (Quản lý Chiến dịch campaign specs)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-001 sub-section)
* Kết nối với: Access_Control_Tree_Grok.md § 2.2 Campaign (permissions)
* Kết nối với: Part08_API_Design (campaign APIs)

**Mục đích của node này:** Cung cấp specs đầy đủ cho feature campaign, hỗ trợ implement và test

---

## 04.2.1.1 - Overview - Tổng quan Campaign Management

**Mục đích:** Giới thiệu tổng quan cho FR-001 Campaign Management

**Ý nghĩa:** Làm rõ scope feature, giúp align trước khi chi tiết sub-parts

**Cách làm:** Viết ngắn, bao gồm definition và importance, link to sub

**Nội dung cần có:**
* Definition: Quản lý campaign với thời gian, location, barcode pool, ads format
* Importance: Core for sampling deployment, hybrid mode
* Scope: Create/edit/delete, preview, publish
* Liên kết: To user stories and specs
* Diagram: Basic campaign lifecycle

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.1 (campaign overview)
* Đầu vào từ: Problem.md § 2.B (campaign desc)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (overview sub for FR-001)
* Kết nối với: Part04.2.1.2_User_Stories (stories link)
* Kết nối với: Part03.3.1_Core_Features (campaign as core)

**Mục đích của node này:** Summarize feature to guide detailed sub-parts

---

## 04.2.1.2 - User_Stories - User Stories Campaign

**Mục đích:** Liệt kê user stories cho FR-001

**Ý nghĩa:** Capture user needs agile-way, đảm bảo feature user-focused

**Cách làm:** Format "As role, I want, so that", 4-6 stories per role

**Nội dung cần có:**
* Stories: As Admin, create global campaign; As Group Admin, assign barcode to group campaign
* Details: Acceptance criteria brief, priority
* Roles: Admin, Group Admin, Customer Account
* Liên kết: To functional specs
* Examples: As Customer, preview campaign before publish

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.1 User Stories (campaign stories)
* Đầu vào từ: Access_Control_Tree_Grok.md § 2.2 (user stories by role)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (user stories sub for FR-001)
* Kết nối với: Part09_Use_Cases (stories to cases)
* Kết nối với: Part04.2.1.6_Acceptance_Criteria (detailed criteria)

**Mục đích của node này:** Define requirements from user perspective for development

---

## 04.2.1.3 - Functional_Specs - Specs Chức năng Campaign

**Mục đích:** Chi tiết specs chức năng cho FR-001

**Ý nghĩa:** Guide implement, đảm bảo feature robust

**Cách làm:** Describe input/output, logic, using tables

**Nội dung cần có:**
* Input: Tên, mô tả, thời gian bắt đầu/kết thúc, location IDs, barcode CSV, ads format
* Output: Campaign ID, dynamic QR codes, UTM tracking links, status (active/inactive)
* Logic: Validation (time not overlap, barcode available), auto-generate QR, multi-tenant isolation
* Error handling: Invalid date (400 error), no barcode (alert)
* Performance: Create campaign <2s, support 100 concurrent

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.1 (functional specs)
* Đầu vào từ: Problem.md § 2.B (campaign logic)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (functional specs sub)
* Kết nối với: Part04.2.1.4_Business_Rules (rules link)
* Kết nối với: Part05_Non_Functional_Requirements (performance specs)

**Mục đích của node này:** Provide technical details for coding

---

## 04.2.1.4 - Business_Rules - Quy tắc Kinh doanh Campaign

**Mục đích:** Định nghĩa business rules for FR-001

**Ý nghĩa:** Ensure consistency, like campaign expiry rules

**Cách làm:** Bullet rules, with conditions/actions

**Nội dung cần có:**
* Rules: Campaign must have at least 1 barcode pool, start time > current, expiry > start
* Conditions: Geo-targeting basic (location-based), UTM auto-add
* Exceptions: Revoke if fraud detected, pause if budget cap
* Validation: Auto-check on create/edit, error messages
* Enforcement: In API and UI

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md (business rules in feature)
* Đầu vào từ: 01-BRD.md § 4 (business rules)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (business rules sub)
* Kết nối với: Part04.2.1.3_Functional_Specs (rules in specs)
* Kết nối với: Part11_Security_Compliance (fraud rules)

**Mục đích của node này:** Define logic business for feature

---

## 04.2.1.5 - API_Endpoints - Endpoint API Campaign

**Mục đích:** List API endpoints for FR-001

**Ý nghĩa:** Support integration, like create campaign API

**Cách làm:** Table with method, path, params, response

**Nội dung cần có:**
* Endpoints: POST /api/campaigns (create), GET /api/campaigns/{id} (view), PUT /api/campaigns/{id} (edit), DELETE /api/campaigns/{id} (delete)
* Details: Params (name string, start_date date, location array), response (JSON with ID, status)
* Auth: Bearer token, RBAC (Admin/Group/Customer)
* Error codes: 400 invalid input, 401 unauthorized, 404 not found
* Rate limiting: 100 req/min

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md (API in feature)
* Đầu vào từ: Part08_API_Design (endpoints)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (API sub)
* Kết nối với: Access_Control_Tree_Grok.md (API permissions)
* Kết nối với: Part14_Deployment_Architecture (API deploy)

**Mục đích của node này:** Guide API development for feature

---

## 04.2.1.6 - Acceptance_Criteria - Tiêu chí Chấp nhận Campaign

**Mục đích:** Define acceptance for FR-001

**Ý nghĩa:** Ensure testable, meet requirements

**Cách làm:** Bullet criteria, BDD format (Given/When/Then)

**Nội dung cần có:**
* Criteria: Given valid input, when POST /campaigns, then 201 created with ID; Given duplicate name, then 409 conflict
* Test types: Unit (validation), integration (barcode assign), E2E (create to preview)
* Metrics: Success rate >99%, time <2s
* Tools: Postman for API test
* Pass condition: All criteria met for release

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md User Stories (acceptance)
* Đầu vào từ: Part13_System_Testing_Strategy (test cases)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (acceptance sub)
* Kết nối với: Part04.2.1.2_User_Stories (criteria from stories)
* Kết nối với: Part00 - 00.5_Success_Criteria (overall acceptance)

**Mục đích của node này:** Set test standards for feature validation

---

## 04.2.2 - FR-002_Barcode_Management - Quản lý Barcode

**Mục đích:** Chi tiết FR-002 cho quản lý barcode, import và status

**Ý nghĩa:** Hỗ trợ single-use voucher, prevent double-claim, core for fraud prevention

**Cách làm:** Tạo sub-files (04.2.2.1 đến 04.2.2.6), specs with examples, Mermaid for process

**Nội dung cần có:**
* Sub-structure: 04.2.2.1 Overview, 04.2.2.2 User Stories, 04.2.2.3 Barcode Format, 04.2.2.4 Import Process, 04.2.2.5 Status Management, 04.2.2.6 Acceptance Criteria
* Phạm vi: Import CSV/API, track status (unissued/issued/redeemed/expired)
* Importance: Inventory accuracy >95%, link to campaign
* Liên kết: Với FR-001, FR-005
* Status: 🔴 Critical

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 Barcode Management (detail FR-002)
* Đầu vào từ: Problem.md § 2.A (Quản lý Barcode specs)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-002 sub-section)
* Kết nối với: Access_Control_Tree_Grok.md § 2.1 Barcode (permissions)
* Kết nối với: Part08_API_Design (barcode APIs)

**Mục đích của node này:** Specs for barcode feature

---

## 04.2.2.1 - Overview - Tổng quan Barcode Management

**Mục đích:** Giới thiệu tổng quan cho FR-002 Barcode Management

**Ý nghĩa:** Làm rõ scope feature, giúp align trước sub-parts

**Cách làm:** Viết ngắn, definition và importance

**Nội dung cần có:**
* Definition: Import, assign, track single-use barcode
* Importance: Prevent fraud, support redemption
* Scope: Status management, import process
* Liên kết: To sub-files
* Diagram: Barcode flow

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 (overview)
* Đầu vào từ: Problem.md § 2.A (desc)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (overview sub)
* Kết nối với: Part04.2.2.2_User_Stories
* Kết nối với: Part03.3.1_Core_Features

**Mục đích của node này:** Summarize for feature

---

## 04.2.2.2 - User_Stories - User Stories Barcode

**Mục đích:** Liệt kê user stories cho FR-002

**Ý nghĩa:** Capture needs for barcode

**Cách làm:** "As role, I want", 4-6 stories

**Nội dung cần có:**
* Stories: As Admin, import CSV barcode; As Customer, view status
* Details: Acceptance brief
* Roles: Admin, Group, Customer
* Liên kết: To specs
* Examples: As Group Admin, assign to group

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 User Stories
* Đầu vào từ: Access_Control_Tree_Grok.md § 2.1 (stories by role)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (stories sub)
* Kết nối với: Part09_Use_Cases
* Kết nối với: Part04.2.2.6_Acceptance_Criteria

**Mục đích của node này:** User perspective for development

---

## 04.2.2.3 - Barcode_Format - Định dạng Barcode

**Mục đích:** Define barcode format for FR-002

**Ý nghĩa:** Ensure compatibility, like QR single-use

**Cách làm:** Describe format, examples

**Nội dung cần có:**
* Format: QR code with encrypted data (barcode, expiry, campaign ID)
* Details: Size (safe zone), type (single-use, time-limited)
* Standards: Compatible Scandit SDK
* Validation: Unique ID, no duplicate
* Examples: Sample QR image/code

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 (format)
* Đầu vào từ: Problem.md § 2.A (barcode format)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (format sub)
* Kết nối với: Part04.2.2.4_Import_Process (format in import)
* Kết nối với: Part11_Security_Compliance (encryption)

**Mục đích của node này:** Standardize barcode for integration

---

## 04.2.2.4 - Import_Process - Quy trình Import Barcode

**Mục đích:** Detail import process for FR-002

**Ý nghĩa:** Support bulk import, accuracy

**Cách làm:** Step-by-step, diagram

**Nội dung cần có:**
* Steps: Upload CSV/API, validate (format check), assign status
* Details: File fields (barcode, product_name, expiry)
* Error: Invalid file reject
* Performance: Import 10K <1min
* Log: Audit trail

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 (import)
* Đầu vào từ: Problem.md § 2.A (import process)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (import sub)
* Kết nối với: Part04.2.2.3_Barcode_Format (validate format)
* Kết nối với: Part08_API_Design (import API)

**Mục đích của node này:** Guide import implementation

---

## 04.2.2.5 - Status_Management - Quản lý Trạng thái Barcode

**Mục đích:** Detail status management for FR-002

**Ý nghĩa:** Track lifecycle, prevent misuse

**Cách làm:** State diagram, rules

**Nội dung cần có:**
* Status: Chưa phát, Đã phát, Đã redeem, Hết hạn, Revoked
* Transitions: Issue → Redeem, auto-expire
* Rules: Atomic update, webhook notify
* Monitoring: Dashboard status count
* Error: Invalid transition reject

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.2 (status)
* Đầu vào từ: Problem.md § 2.A (status management)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (status sub)
* Kết nối với: Part04.2.2.4_Import_Process (initial status)
* Kết nối với: Part07_Database_Design (status fields)

**Mục đích của node này:** Define lifecycle for barcode

---

## 04.2.2.6 - Acceptance_Criteria - Tiêu chí Chấp nhận Barcode

**Mục đích:** Define acceptance for FR-002

**Ý nghĩa:** Ensure testable

**Cách làm:** BDD criteria

**Nội dung cần có:**
* Criteria: Given CSV valid, when import, then status unissued; Given redeem, then status redeemed
* Test: Unit (validation), integration (status update)
* Metrics: Accuracy >95%
* Tools: Postman
* Pass: All met

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md User Stories (acceptance)
* Đầu vào từ: Part13_System_Testing_Strategy (test cases)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (acceptance sub)
* Kết nối với: Part04.2.2.2_User_Stories (from stories)
* Kết nối với: Part00 - 00.5_Success_Criteria (overall)

**Mục đích của node này:** Set test standards

---

## 04.2.3 - FR-003_Landing_Page_Form - Form Landing Page

**Mục đích:** Detail FR-003 for landing page and form

**Ý nghĩa:** Thu data verified, increase value through quiz

**Cách làm:** Sub-files for overview, fields, validation, consent, acceptance

**Nội dung cần có:**
* Sub-structure: 04.2.3.1 Overview, 04.2.3.2 Form Fields, 04.2.3.3 Validation Rules, 04.2.3.4 Consent Management, 04.2.3.5 Acceptance Criteria
* Phạm vi: Custom form, CAPTCHA, quiz preferences
* Importance: Data quality >95%
* Liên kết: Với FR-004 OTP
* Status: 🔴 Critical

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.3 Landing Page (detail FR-003)
* Đầu vào từ: Problem.md § 2.D Landing Page (specs)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-003)
* Kết nối với: Access_Control_Tree_Grok.md § 2.4 Landing (permissions)
* Kết nối với: Part10_UI_UX_Design (form design)

**Mục đích của node này:** Specs for data collection feature

---

## 04.2.3.1 - Overview - Tổng quan Landing Page Form

**Mục đích:** Overview FR-003

**Ý nghĩa:** Introduce form for data

**Cách làm:** Short desc

**Nội dung cần có:**
* Definition: Custom landing with quiz, consent
* Importance: User data entry, 30s completion
* Scope: Mobile-first PWA
* Liên kết: Sub-files
* Diagram: Form flow

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.3 (overview)
* Đầu vào từ: Problem.md § 2.D (desc)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (overview sub)
* Kết nối với: Part04.2.3.2_Form_Fields
* Kết nối với: Part03.3.1_Core_Features

**Mục đích của node này:** Summarize for feature

---

## 04.2.3.2 - Form_Fields - Trường Form

**Mục đích:** Define form fields for FR-003

**Ý nghĩa:** Ensure relevant data collection

**Cách làm:** List fields, types

**Nội dung cần có:**
* Fields: Họ Tên (required string), Email (required email), SĐT (required phone), Age/Gender (optional)
* Details: Quiz questions (preferences, 3-5 choices)
* Custom: Brand config fields
* Validation: Regex for email/phone
* UI: Touch-friendly

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.3 (fields)
* Đầu vào từ: Problem.md § 2.D (form fields)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (fields sub)
* Kết nối với: Part04.2.3.3_Validation_Rules (validation)
* Kết nối với: Part10_UI_UX_Design (field design)

**Mục đích của node này:** Standardize data input

---

Không cần bạn! Tôi nhớ rõ:

## 📋 **RULE**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn

Tôi tiếp tục từ **04.2.3.3** trong file Part04:

<artifact identifier="part04-content-continue" type="text/markdown" title="Part04_Functional_Requirements.md">
# PART04 - FUNCTIONAL REQUIREMENTS (tiếp)

## 04.2.3.3 - Validation_Rules - Quy tắc Validation Form

**Mục đích:** Chi tiết validation cho FR-003 Landing Page Form

**Ý nghĩa:** Ngăn dữ liệu không hợp lệ, giảm spam, đảm bảo data quality >95%

**Cách làm:** Bullet rules, examples validation

**Nội dung cần có:**
* Rules: Email unique, phone format VN (+84), required fields mandatory
* CAPTCHA: reCAPTCHA v3, anti-bot score >0.5
* Rate-limiting: Max 3 submit/IP/minute
* Real-time error: Hiển thị ngay khi blur field
* Metrics: Validation success >98%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.3 (validation specs)
* Đầu vào từ: Problem.md § 2.D (form validation rules)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Validation sub)
* Kết nối với: Part04.2.3.2_Form_Fields (rules for fields)
* Kết nối với: Part11_Security_Compliance (anti-bot)

**Mục đích của node này:** Đảm bảo data integrity, giảm fraud từ form

---

## 04.2.3.4 - Consent_Management - Quản lý Consent

**Mục đích:** Chi tiết consent management cho FR-003

**Ý nghĩa:** Tuân thủ GDPR/PDPA, opt-in marketing

**Cách làm:** Mô tả process, checkboxes consent

**Nội dung cần có:**
* Opt-in flags: Marketing/Email/SMS (default opt-out)
* Versioned policy: Link privacy policy, track version
* Storage: Encrypted consent data
* Right-to-forget: API withdraw consent
* Metrics: Consent rate >80%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2.4 Consent
* Đầu vào từ: Problem.md § 2.D (consent requirements)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Consent sub)
* Kết nối với: Part11_Security_Compliance (GDPR)
* Kết nối với: Part04.2.3.5_Acceptance_Criteria

**Mục đích của node này:** Đảm bảo legal data collection

---

## 04.2.3.5 - Acceptance_Criteria - Tiêu chí Chấp nhận Form

**Mục đích:** Define acceptance cho FR-003

**Ý nghĩa:** Đảm bảo form testable và đạt completion >90%

**Cách làm:** BDD format criteria

**Nội dung cần có:**
* Given valid input, when submit, then success
* Given missing required, then error message
* E2E: Form completion <30s
* Unit: Validation logic
* Metrics: Completion rate >90%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md User Stories
* Đầu vào từ: Part13_System_Testing_Strategy
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Acceptance sub)
* Kết nối với: Part04.2.3.2_Form_Fields
* Kết nối với: Part00 - 00.5_Success_Criteria

**Mục đích của node này:** Set test standards cho form

---

## 04.2.4 - FR-004_OTP_Verification - Xác thực OTP

**Mục đích:** Chi tiết FR-004 cho OTP verification

**Ý nghĩa:** Anti-spam, đảm bảo verified users, fraud <5%

**Cách làm:** Mô tả flow OTP, integration Twilio

**Nội dung cần có:**
* Flow: Send SMS/Email OTP, 6 digits, 5min timeout
* Retries: Max 3 attempts
* Integration: Twilio API
* Device fingerprint: Track để detect fraud
* Metrics: Success >95%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.4 OTP
* Đầu vào từ: Problem.md § 2 (OTP verification)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-004)
* Kết nối với: Part04.2.3_FR-003 (after form submit)
* Kết nối với: Part11_Security_Compliance (OTP security)

**Mục đích của node này:** Specs cho verification feature

---

## 04.2.5 - FR-005_Redemption_POS - Redemption tại POS

**Mục đích:** Chi tiết FR-005 cho redemption tại Point of Sale

**Ý nghĩa:** Core hybrid flow, update status realtime, redemption >98%

**Cách làm:** Mô tả scan process, offline sync

**Nội dung cần có:**
* Flow: Staff scan QR → Verify status → Update → Sync
* Offline mode: Local storage, sync khi online
* Scandit SDK: Barcode scanning library
* Webhook: Notify CRM sau redeem
* Metrics: Redemption success >98%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.5 Redemption
* Đầu vào từ: Problem.md § 2.F (Đổi Sampling POS)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-005)
* Kết nối với: Access_Control_Tree_Grok.md § 2.6 Redemption
* Kết nối với: Part14_Deployment_Architecture (offline)

**Mục đích của node này:** Specs cho redemption tại site

---

## 04.2.6 - FR-006_Analytics_Dashboard - Dashboard Analytics

**Mục đích:** Chi tiết FR-006 cho analytics dashboard

**Ý nghĩa:** Đo lường ROI, funnel tracking, latency <3s

**Cách làm:** Mô tả dashboard features, metrics

**Nội dung cần có:**
* Features: Realtime funnel, conversion metrics, export CSV
* Metrics: Views/scans/redeems, fraud rate, ROI
* Visualization: Charts (line/bar/pie), filters (date/location)
* Integration: Metabase/custom dashboard
* Performance: Query <3s

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.6 Analytics
* Đầu vào từ: Problem.md § 2.H Báo cáo
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-006)
* Kết nối với: Part03.5_KPI_Mapping (KPIs)
* Kết nối với: Part10_UI_UX_Design (dashboard)

**Mục đích của node này:** Specs cho monitoring dashboard

---

## 04.2.7 - FR-007_CRM_Sync - Đồng bộ CRM

**Mục đích:** Chi tiết FR-007 cho CRM synchronization

**Ý nghĩa:** Push verified data cho remarketing, sync >99%

**Cách làm:** Mô tả webhook integration

**Nội dung cần có:**
* Flow: User verify → Push profile/preferences → HubSpot/Salesforce
* Data: Name, email, phone, quiz answers, consent flags
* Webhook: Real-time push, retry on failure
* Security: Encrypted PII, OAuth2
* Metrics: Sync success >99%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1.6 CRM Sync
* Đầu vào từ: Problem.md § 2 (CRM integration)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-007)
* Kết nối với: Part08_API_Design (webhook endpoints)
* Kết nối với: Part11_Security_Compliance (PII encryption)

**Mục đích của node này:** Specs cho data export to CRM

---

## 04.2.8 - FR-008_Access_Control - Kiểm soát Truy cập

**Mục đích:** Chi tiết FR-008 cho RBAC (Role-Based Access Control)

**Ý nghĩa:** Bảo mật hệ thống, phân quyền 6 roles, zero unauthorized

**Cách làm:** Mô tả RBAC implementation

**Nội dung cần có:**
* Roles: Admin, Group Admin, Customer, Serving, Auditor, User
* Auth: OAuth2/JWT, session management
* Permissions: Matrix role-resource-action
* Audit: Log tất cả access attempts
* Metrics: Zero unauthorized access

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (RBAC detail)
* Đầu vào từ: Problem.md § 2.I Phân quyền
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-008)
* Kết nối với: Part02.3_System_Actors (6 roles)
* Kết nối với: Part11_Security_Compliance (security)

**Mục đích của node này:** Specs cho access control system

---

## 04.3 - Should_Have_Requirements - Yêu cầu Nên có

**Mục đích:** Chi tiết Should-Have cho Phase 2 optimization

**Ý nghĩa:** Tăng cường core features, như fraud detection

**Cách làm:** Sub-folders cho 3 FR, status 🟡

**Nội dung cần có:**
* List: FR-009 User Portal, FR-010 Ads Management, FR-011 Fraud Detection
* Priority: High cho Phase 2
* Traceability: Map → optimization KPIs
* Phạm vi: Post-MVP enhancement
* Acceptance: Measurable improvement

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2 Should-Have
* Đầu vào từ: Problem.md § 1 Should-have
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Should Have)
* Kết nối với: 01-BRD.md § 6.2 Phase 2
* Kết nối với: Part03.4.2_Should_Have_Features

**Mục đích của node này:** Organize FR cho Phase 2

---

## 04.3.1 - FR-009_User_Portal - Portal Người dùng

**Mục đích:** Chi tiết FR-009 cho user portal PWA

**Ý nghĩa:** Tăng engagement >70%, view barcode history

**Cách làm:** Mô tả portal features

**Nội dung cần có:**
* Features: View barcode status, notifications, submit tickets
* PWA: Installable, push notifications
* Integration: Zendesk for support tickets
* UI: Mobile-first, accessible
* Metrics: User engagement >70%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2 User Portal
* Đầu vào từ: Access_Control_Tree_Grok.md § 2.10 Portal
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-009)
* Kết nối với: Part10_UI_UX_Design (portal design)
* Kết nối với: Part03.3.2_Phase_1_Scope (post-MVP)

**Mục đích của node này:** Specs cho user engagement portal

---

## 04.3.2 - FR-010_Ads_Format_Management - Quản lý Ads Format

**Mục đích:** Chi tiết FR-010 cho ads format management

**Ý nghĩa:** Customize ads cho sampling, scan conversion >90%

**Cách làm:** Mô tả upload, QR config

**Nội dung cần có:**
* Formats: 13 types (flyer, poster, standee, etc.)
* Upload: PNG/JPG, QR zone config, DPI >300
* Validation: Format, size, safe zone
* Integration: GA4 UTM tracking
* Metrics: Scan conversion >90%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2 Ads Format
* Đầu vào từ: Problem.md § 2.C Ads Format
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-010)
* Kết nối với: Part04.2.1_FR-001 (ads in campaign)
* Kết nối với: Part10_UI_UX_Design (ads design)

**Mục đích của node này:** Specs cho ads customization

---

## 04.3.3 - FR-011_Fraud_Detection - Phát hiện Gian lận

**Mục đích:** Chi tiết FR-011 cho fraud detection

**Ý nghĩa:** Giảm fraud <5%, ML detection >95%

**Cách làm:** Mô tả ML rules, alerts

**Nội dung cần có:**
* Rules: Velocity checks (max scans/day), device fingerprint, IP patterns
* ML model: Anomaly detection (scikit-learn)
* Dashboard: Fraud alerts, auto-block
* Integration: Email alerts to admin
* Metrics: Detection accuracy >95%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 2.3 Fraud
* Đầu vào từ: Problem.md § 2.G Fraud Detection
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-011)
* Kết nối với: Part11_Security_Compliance (fraud rules)
* Kết nối với: Part15_Operations_Monitoring (fraud incidents)

**Mục đích của node này:** Specs cho fraud prevention

---

## 04.4 - Nice_to_Have_Requirements - Yêu cầu Hay có

**Mục đích:** Chi tiết Nice-to-Have cho Phase 3

**Ý nghĩa:** Tăng competitive edge, như AI personalization

**Cách làm:** Sub-folders cho 2 FR, status 🟢

**Nội dung cần có:**
* List: FR-012 A/B Testing, FR-013 AI Personalization
* Priority: Low cho Phase 3
* Traceability: Map → innovation KPIs
* Phạm vi: Future enhancement
* Acceptance: Optional, measurable

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 3 Nice-to-Have
* Đầu vào từ: Problem.md § 1 Nice-to-Have
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Nice-to-Have)
* Kết nối với: 01-BRD.md § 6.3 Phase 3
* Kết nối với: Part03.4.3_Nice_to_Have_Features

**Mục đích của node này:** Organize FR cho future innovation

---

## 04.4.1 - FR-012_AB_Testing - A/B Testing

**Mục đích:** Chi tiết FR-012 cho A/B testing

**Ý nghĩa:** Tối ưu conversion, uplift ≥5%

**Cách làm:** Mô tả test setup, metrics

**Nội dung cần có:**
* Setup: 2-4 variations (landing/ads), auto-split traffic
* Metrics: Conversion rate, statistical significance
* Duration: Min 2 weeks for confidence
* Tools: Custom or Optimizely integration
* Success: Conversion uplift ≥5%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 3.1 A/B Testing
* Đầu vào từ: Problem.md § 2.J A/B Testing
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-012)
* Kết nối với: Part04.2.1_FR-001 (campaign variations)
* Kết nối với: Part04.2.6_FR-006 (analytics)

**Mục đích của node này:** Specs cho conversion optimization

---

## 04.4.2 - FR-013_AI_Personalization - Cá nhân hóa AI

**Mục đích:** Chi tiết FR-013 cho AI personalization

**Ý nghĩa:** Tăng engagement ≥10%, AI content

**Cách làm:** Mô tả ML model, dynamic content

**Nội dung cần có:**
* Model: Clustering/segmentation (user preferences)
* Content: Dynamic landing page/ads per segment
* Data: Age, gender, quiz answers
* Performance: Render <2s
* Metrics: Engagement uplift ≥10%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 3.2 AI Personalization
* Đầu vào từ: Problem.md § 2.K Personalization
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (FR-013)
* Kết nối với: Part04.2.3_FR-003 (landing page)
* Kết nối với: Part11_Security_Compliance (data privacy)

**Mục đích của node này:** Specs cho AI-driven UX

---

## 04.5 - Traceability_Matrix - Ma trận Truy xuất

**Mục đích:** Map FR → BRD/KPIs/Test cases

**Ý nghĩa:** Đảm bảo 100% FR traceable, no gaps

**Cách làm:** Bảng mapping với columns

**Nội dung cần có:**
* Table: FR ID | Tên | BRD Section | KPI | Test Case | Priority
* Coverage: 13 FR mapped
* Examples: FR-001 → BRD 4.1 → ROI >20% → TC-001-01
* Validation: Zero orphan requirements
* Update: Version control

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 1-3 (FR list)
* Đầu vào từ: 01-BRD.md § 4-6 (business requirements)
* Thể hiện yêu cầu: 02-SRS-V2.md Part04 (Traceability)
* Kết nối với: Part13_System_Testing_Strategy (test IDs)
* Kết nối với: Part16.2_Traceability_Matrix (full matrix)

**Mục đích của node này:** Đảm bảo traceability FR → BRD/test

---

**✅ PART04 HOÀN THÀNH - 35 NODES**

Tiếp **PART05** không bạn? 🚀
</artifact>

## 📋 **RULE**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn

---

## 🌲 **CÂY THƯ MỤC PART05 (Phần 1/2)**
```
Part05_Non_Functional_Requirements/ ✅
├── 05.1_Overview.md
├── 05.2_Performance_Requirements/
│   ├── NFR-P01_Response_Time.md
│   ├── NFR-P02_Throughput.md
│   ├── NFR-P03_Concurrent_Users.md
│   └── NFR-P04_Resource_Utilization.md
├── 05.3_Security_Requirements/
│   ├── NFR-S01_Authentication.md
│   ├── NFR-S02_Authorization_RBAC.md
│   ├── NFR-S03_Data_Encryption.md
│   ├── NFR-S04_Audit_Logging.md
│   └── NFR-S05_OWASP_Compliance.md
└── 05.4_Reliability_Requirements/
    ├── NFR-R01_Uptime_SLA.md
    ├── NFR-R02_Disaster_Recovery.md
    ├── NFR-R03_Backup_Strategy.md
    └── NFR-R04_Fault_Tolerance.md
```

Tôi tạo file **Part05_Non_Functional_Requirements_Part1.md**:

<artifact identifier="part05-nfr-part1" type="text/markdown" title="Part05_Non_Functional_Requirements_Part1.md">
# PART05 - NON-FUNCTIONAL REQUIREMENTS (Phần 1/2)

## 05.1 - Overview - Tổng quan

**Mục đích:** Giới thiệu tổng quan về yêu cầu phi chức năng, định nghĩa phạm vi và cấu trúc

**Ý nghĩa:** Đảm bảo hệ thống PSP đáp ứng hiệu suất, bảo mật, độ tin cậy cho MVP

**Cách làm:** Viết ngắn gọn, liệt kê nhóm NFR (Performance, Security, Reliability, Scalability, Usability, Compliance)

**Nội dung cần có:**
* Tổng quan: 6 nhóm NFR chính (Performance đến Compliance)
* Phân loại: Must-Have (Performance, Security, Reliability), Should-Have (Usability, Scalability), Nice-to-Have (Advanced Compliance)
* Traceability: Map NFR → business goals (e.g., Performance → conversion ≥90%)
* Phạm vi: VN pilot MVP, hybrid flow
* Standards: ISO 27001, GDPR/PDPA, WCAG 2.1

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 Non-Functional
* Đầu vào từ: Problem.md § 3 Non-Functional requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR Overview)
* Kết nối với: 01-BRD.md § 5 Non-Functional Requirements
* Kết nối với: Part16.2_Traceability_Matrix

**Mục đích của node này:** Cung cấp framework cho NFRs, align với quality goals

---

## 05.2 - Performance_Requirements - Yêu cầu Hiệu suất

**Mục đích:** Chi tiết yêu cầu hiệu suất cho hệ thống

**Ý nghĩa:** Đảm bảo response time <2s, throughput cao, hỗ trợ conversion ≥90%

**Cách làm:** Sub-folders cho 4 NFR-P, metrics cụ thể

**Nội dung cần có:**
* List: NFR-P01 Response Time đến NFR-P04 Resource Utilization
* Metrics: Response time, throughput, concurrent users, CPU/memory usage
* Scope: VN pilot 10K users/day
* Testing: Load test, stress test
* Acceptance: Measurable, testable

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.1 Performance
* Đầu vào từ: Problem.md § 3.1 Performance requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Performance)
* Kết nối với: Part12_Performance_Testing
* Kết nối với: Part03.1.3_Success_Metrics

**Mục đích của node này:** Define performance standards cho MVP

---

## 05.2.1 - NFR-P01_Response_Time - Thời gian Phản hồi

**Mục đích:** Định nghĩa yêu cầu response time

**Ý nghĩa:** Đảm bảo UX tốt, page load <3s, API <2s

**Cách làm:** Metrics table với targets

**Nội dung cần có:**
* API response: <2s (95th percentile)
* Page load: <3s (landing page)
* Form submit: <1s acknowledgment
* Dashboard query: <3s
* Measurement: APM tools (New Relic)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.1.1 Response Time
* Đầu vào từ: Problem.md § 3.1.A Performance specs
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-P01)
* Kết nối với: Part04.2.3_FR-003 (form response)
* Kết nối với: Part15_Operations_Monitoring

**Mục đích của node này:** Set performance baseline cho APIs/pages

---

## 05.2.2 - NFR-P02_Throughput - Thông lượng

**Mục đích:** Định nghĩa yêu cầu throughput

**Ý nghĩa:** Hỗ trợ 10K concurrent users, 100K req/min peak

**Cách làm:** Metrics với load scenarios

**Nội dung cần có:**
* Normal load: 10K users/day, 50 req/s
* Peak load: 100K req/min (campaign launch)
* Barcode import: 10K barcodes <1min
* Database: 1000 TPS (transactions/sec)
* Monitoring: Throughput metrics dashboard

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.1.2 Throughput
* Đầu vào từ: 01-BRD.md § 5.1 Performance targets
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-P02)
* Kết nối với: Part05.2.3_NFR-P03_Concurrent_Users
* Kết nối với: Part12_Performance_Testing

**Mục đích của node này:** Define capacity requirements

---

## 05.2.3 - NFR-P03_Concurrent_Users - Người dùng Đồng thời

**Mục đích:** Định nghĩa yêu cầu concurrent users

**Ý nghĩa:** Hỗ trợ 10K concurrent VN pilot, scale 100K future

**Cách làm:** User scenarios với load profiles

**Nội dung cần có:**
* MVP: 10K concurrent (VN pilot)
* Phase 2: 50K concurrent (SEA expansion)
* Phase 3: 100K+ concurrent (regional)
* User mix: 70% mobile, 30% desktop
* Testing: Load test scenarios

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.1.3 Concurrent Users
* Đầu vào từ: 01-BRD.md § 6.1 Phase 1 targets
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-P03)
* Kết nối với: Part05.5_Scalability_Requirements
* Kết nối với: Part03.3.2_Phase_1_Scope

**Mục đích của node này:** Plan for user growth

---

## 05.2.4 - NFR-P04_Resource_Utilization - Sử dụng Tài nguyên

**Mục đích:** Định nghĩa yêu cầu resource usage

**Ý nghĩa:** Tối ưu cost, CPU <70%, Memory <80%

**Cách làm:** Thresholds với monitoring

**Nội dung cần có:**
* CPU: <70% average, <90% peak
* Memory: <80% average, <95% peak
* Disk I/O: <80% capacity
* Network: <70% bandwidth
* Auto-scaling: Trigger at 80%

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.1.4 Resource
* Đầu vào từ: Problem.md § 3.1.D Resource optimization
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-P04)
* Kết nối với: Part14_Deployment_Architecture (cloud resources)
* Kết nối với: Part15_Operations_Monitoring

**Mục đích của node này:** Optimize infrastructure cost

---

## 05.3 - Security_Requirements - Yêu cầu Bảo mật

**Mục đích:** Chi tiết yêu cầu security cho hệ thống

**Ý nghĩa:** Bảo vệ PII, tuân thủ GDPR/PDPA, fraud ≤5%

**Cách làm:** Sub-folders cho 5 NFR-S, standards compliance

**Nội dung cần có:**
* List: NFR-S01 Authentication đến NFR-S05 OWASP
* Controls: Auth, RBAC, encryption, audit logs
* Compliance: GDPR/PDPA/ISO 27001
* Testing: Penetration test, vulnerability scan
* Acceptance: Zero critical vulnerabilities

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.2 Security
* Đầu vào từ: Access_Control_Tree_Grok.md § 3 Security requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Security)
* Kết nối với: Part11_Security_Compliance
* Kết nối với: Part04.2.8_FR-008_Access_Control

**Mục đích của node này:** Establish security baseline

---

## 05.3.1 - NFR-S01_Authentication - Xác thực

**Mục đích:** Định nghĩa yêu cầu authentication

**Ý nghĩa:** Đảm bảo secure login, MFA optional

**Cách làm:** Auth mechanisms với standards

**Nội dung cần có:**
* Methods: Email/password, OAuth2 (Google/Facebook)
* MFA: SMS OTP optional (high-value accounts)
* Session: JWT tokens, 24h expiry
* Password: Min 8 chars, complexity rules
* Brute-force: Rate limiting 5 attempts/15min

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.1 Authentication
* Đầu vào từ: Problem.md § 3.2.A Auth requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-S01)
* Kết nối với: Part04.2.4_FR-004_OTP_Verification
* Kết nối với: Part11_Security_Compliance

**Mục đích của node này:** Secure user authentication

---

## 05.3.2 - NFR-S02_Authorization_RBAC - Phân quyền RBAC

**Mục đích:** Định nghĩa yêu cầu RBAC

**Ý nghĩa:** Role-based access, 6 roles, zero unauthorized

**Cách làm:** Permission matrix với roles

**Nội dung cần có:**
* Roles: Admin, Group Admin, Customer, Serving, Auditor, User
* Model: Role-Resource-Action matrix
* Enforcement: API middleware, UI guards
* Audit: Log all access attempts
* Testing: Authorization test cases

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 RBAC detail
* Đầu vào từ: Part02.3_System_Actors (6 roles)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-S02)
* Kết nối với: Part04.2.8_FR-008_Access_Control
* Kết nối với: Part11_Security_Compliance

**Mục đích của node này:** Implement fine-grained access control

---

## 05.3.3 - NFR-S03_Data_Encryption - Mã hóa Dữ liệu

**Mục đích:** Định nghĩa yêu cầu encryption

**Ý nghĩa:** Bảo vệ PII, AES-256 at-rest, TLS 1.3 in-transit

**Cách làm:** Encryption standards cho data states

**Nội dung cần có:**
* At-rest: AES-256 (DB, backups)
* In-transit: TLS 1.3 (APIs, webhooks)
* PII fields: Name, email, phone, address
* Key management: AWS KMS/HashiCorp Vault
* Compliance: GDPR/PDPA requirements

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.2.3 Encryption
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.3 Data protection
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-S03)
* Kết nối với: Part11_Security_Compliance (GDPR)
* Kết nối với: Part07_Database_Design (encrypted fields)

**Mục đích của node này:** Protect sensitive data

---

## 05.3.4 - NFR-S04_Audit_Logging - Ghi log Kiểm toán

**Mục đích:** Định nghĩa yêu cầu audit logging

**Ý nghĩa:** Track all critical actions, compliance và forensics

**Cách làm:** Log events với retention policy

**Nội dung cần có:**
* Events: Login/logout, CRUD operations, permission changes, data access
* Format: JSON structured logs (timestamp, user, action, resource)
* Storage: Centralized (ELK stack)
* Retention: 90 days active, 1 year archive
* Access: Auditor role read-only

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.4 Audit logs
* Đầu vào từ: Problem.md § 3.2.D Audit requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-S04)
* Kết nối với: Part15_Operations_Monitoring (logging)
* Kết nối với: Part02.3.5_Auditor_Role

**Mục đích của node này:** Enable compliance audits

---

## 05.3.5 - NFR-S05_OWASP_Compliance - Tuân thủ OWASP

**Mục đích:** Định nghĩa yêu cầu OWASP Top 10

**Ý nghĩa:** Mitigate common vulnerabilities, zero critical issues

**Cách làm:** OWASP checklist với controls

**Nội dung cần có:**
* Top 10: Injection, Broken Auth, XSS, CSRF, Security Misconfiguration
* Controls: Input validation, output encoding, parameterized queries, CSRF tokens
* Testing: OWASP ZAP, Burp Suite scans
* Fix: Remediate critical <24h, high <7 days
* Training: Secure coding for dev team

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.5 OWASP
* Đầu vào từ: 01-BRD.md § 5.2 Security standards
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-S05)
* Kết nối với: Part11_Security_Compliance
* Kết nối với: Part13_System_Testing_Strategy (security tests)

**Mục đích của node này:** Prevent common web vulnerabilities

---

## 05.4 - Reliability_Requirements - Yêu cầu Độ tin cậy

**Mục đích:** Chi tiết yêu cầu reliability cho hệ thống

**Ý nghĩa:** Uptime >99.9%, MTTR <1h, hỗ trợ redemption >98%

**Cách làm:** Sub-folders cho 4 NFR-R, SLA targets

**Nội dung cần có:**
* List: NFR-R01 Uptime đến NFR-R04 Fault Tolerance
* SLA: Uptime, recovery time, backup frequency
* Scope: 24/7 operation, VN pilot
* Testing: Chaos engineering, failover drills
* Acceptance: Meet SLA targets

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.3 Reliability
* Đầu vào từ: Problem.md § 3.3 Reliability requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Reliability)
* Kết nối với: Part14_Deployment_Architecture (HA)
* Kết nối với: Part15_Operations_Monitoring

**Mục đích của node này:** Ensure system stability

---

## 05.4.1 - NFR-R01_Uptime_SLA - SLA Thời gian Hoạt động

**Mục đích:** Định nghĩa yêu cầu uptime SLA

**Ý nghĩa:** Đảm bảo availability >99.9%, downtime <43min/month

**Cách làm:** SLA metrics với measurement

**Nội dung cần có:**
* Target: 99.9% uptime (43.2 min downtime/month)
* Measurement: External monitoring (Pingdom)
* Exclusions: Planned maintenance windows
* Penalties: SLA credits if breach
* Monitoring: 24/7 alerting

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.3.1 Uptime
* Đầu vào từ: 01-BRD.md § 5.3 SLA targets
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-R01)
* Kết nối với: Part14_Deployment_Architecture (HA setup)
* Kết nối với: Part15_Operations_Monitoring

**Mục đích của node này:** Set availability standard

---

## 05.4.2 - NFR-R02_Disaster_Recovery - Khôi phục Thảm họa

**Mục đích:** Định nghĩa yêu cầu disaster recovery

**Ý nghĩa:** RTO <4h, RPO <1h, multi-region backup

**Cách làm:** DR plan với recovery procedures

**Nội dung cần có:**
* RTO: Recovery Time Objective <4h (critical systems)
* RPO: Recovery Point Objective <1h (max data loss)
* Strategy: Multi-region backups (AWS S3 cross-region)
* Failover: Automated DNS failover
* Testing: DR drill quarterly

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.3.2 DR
* Đầu vào từ: 01-BRD.md § 5.4 Business continuity
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-R02)
* Kết nối với: Part15_Operations_Monitoring (incident response)
* Kết nối với: Part05.4.3_NFR-R03_Backup_Strategy

**Mục đích của node này:** Plan for catastrophic failures

---

## 05.4.3 - NFR-R03_Backup_Strategy - Chiến lược Sao lưu

**Mục đích:** Định nghĩa yêu cầu backup

**Ý nghĩa:** Daily backups, 30 days retention, automated

**Cách làm:** Backup schedule với testing

**Nội dung cần có:**
* Frequency: Full daily, incremental hourly
* Retention: 30 days active, 1 year archive
* Scope: Database, file storage, configs
* Storage: S3 with versioning, multi-region
* Testing: Monthly restore drills

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.3.3 Backup
* Đầu vào từ: Problem.md § 3.3.C Backup requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-R03)
* Kết nối với: Part07_Database_Design (backup procedures)
* Kết nối với: Part15_Operations_Monitoring

**Mục đích của node này:** Protect against data loss

---

## 05.4.4 - NFR-R04_Fault_Tolerance - Khả năng Chịu lỗi

**Mục đích:** Định nghĩa yêu cầu fault tolerance

**Ý nghĩa:** Graceful degradation, no single point of failure

**Cách làm:** Redundancy với failover mechanisms

**Nội dung cần có:**
* Architecture: Multi-AZ deployment, load balancing
* Components: Redundant DB (master-slave), app servers (auto-scaling)
* Failover: Automatic (health checks), <30s switchover
* Degradation: Offline mode for POS, queue for async tasks
* Testing: Chaos engineering (kill random instances)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.3.4 Fault Tolerance
* Đầu vào từ: Problem.md § 3.3.D High availability
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-R04)
* Kết nối với: Part14_Deployment_Architecture (HA design)
* Kết nối với: Part04.2.5_FR-005_Redemption_POS (offline mode)

**Mục đích của node này:** Ensure resilient system

---

**✅ PART05 PHẦN 1 HOÀN THÀNH - 20 NODES**

Tiếp **PART05 Phần 2** (Scalability, Usability, Compliance) không bạn? 🚀
</artifact>

## 📋 **RULE**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn

---

## 🌲 **CÂY THƯ MỤC PART05 (Phần 2/2)**
```
Part05_Non_Functional_Requirements/ (tiếp)
├── 05.5_Scalability_Requirements/
│   ├── NFR-SC01_Horizontal_Scaling.md
│   ├── NFR-SC02_Multi_Tenant.md
│   ├── NFR-SC03_Load_Balancing.md
│   └── NFR-SC04_Caching_Strategy.md
├── 05.6_Usability_Requirements/
│   ├── NFR-U01_Mobile_First.md
│   ├── NFR-U02_Accessibility_WCAG.md
│   ├── NFR-U03_Internationalization.md
│   └── NFR-U04_User_Experience.md
├── 05.7_Compliance_Requirements/
│   ├── NFR-C01_GDPR.md
│   ├── NFR-C02_PDPA_Vietnam.md
│   └── NFR-C03_Data_Privacy.md
└── 05.8_Traceability_Matrix.md
```

Tôi tạo file **Part05_Non_Functional_Requirements_Part2.md**:

<artifact identifier="part05-nfr-part2" type="text/markdown" title="Part05_Non_Functional_Requirements_Part2.md">
# PART05 - NON-FUNCTIONAL REQUIREMENTS (Phần 2/2)

## 05.5 - Scalability_Requirements - Yêu cầu Khả năng Mở rộng

**Mục đích:** Chi tiết yêu cầu scalability cho hệ thống

**Ý nghĩa:** Hỗ trợ tăng trưởng 10K → 100K users/day, scale horizontal

**Cách làm:** Sub-folders cho 4 NFR-SC, architecture patterns

**Nội dung cần có:**
* List: NFR-SC01 Horizontal Scaling đến NFR-SC04 Caching
* Patterns: Auto-scaling, load balancing, caching, multi-tenant
* Scope: MVP 10K, Phase 2 50K, Phase 3 100K+ users
* Testing: Load testing, scale testing
* Acceptance: Linear scalability, no bottlenecks

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.4 Scalability
* Đầu vào từ: Problem.md § 3.4 Growth requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Scalability)
* Kết nối với: Part14_Deployment_Architecture (cloud scaling)
* Kết nối với: Part03.3.2_Phase_1_Scope (growth plan)

**Mục đích của node này:** Plan for system growth

---

## 05.5.1 - NFR-SC01_Horizontal_Scaling - Mở rộng Ngang

**Mục đích:** Định nghĩa yêu cầu horizontal scaling

**Ý nghĩa:** Scale-out bằng thêm instances, không bottleneck vertical

**Cách làm:** Stateless architecture với auto-scaling

**Nội dung cần có:**
* Architecture: Stateless app servers, session in Redis
* Auto-scaling: CPU >70% trigger scale-out, <30% scale-in
* Min/Max: Min 2 instances (HA), max 20 instances (MVP)
* Constraints: No sticky sessions, shared storage (S3)
* Testing: Scale from 2 → 10 instances under load

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.4.1 Horizontal Scaling
* Đầu vào từ: Problem.md § 3.4.A Scaling strategy
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-SC01)
* Kết nối với: Part14_Deployment_Architecture (K8s/ECS)
* Kết nối với: Part05.5.3_NFR-SC03_Load_Balancing

**Mục đích của node này:** Enable elastic scaling

---

## 05.5.2 - NFR-SC02_Multi_Tenant - Đa Khách hàng

**Mục đích:** Định nghĩa yêu cầu multi-tenant architecture

**Ý nghĩa:** Cô lập data/resources giữa brands, scale hiệu quả

**Cách làm:** Tenant isolation với shared infrastructure

**Nội dung cần có:**
* Model: Shared DB, tenant_id partition (logical isolation)
* Isolation: Row-level security, query filters
* Resources: Per-tenant quotas (campaigns, barcodes)
* Performance: No noisy neighbor (rate limiting per tenant)
* Testing: Cross-tenant access prevention tests

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.4.2 Multi-Tenant
* Đầu vào từ: Access_Control_Tree_Grok.md § 2 (Group isolation)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-SC02)
* Kết nối với: Part07_Database_Design (tenant schema)
* Kết nối với: Part02.3.2_Group_Admin_Role

**Mục đích của node này:** Support multiple brands efficiently

---

## 05.5.3 - NFR-SC03_Load_Balancing - Cân bằng Tải

**Mục đích:** Định nghĩa yêu cầu load balancing

**Ý nghĩa:** Phân phối traffic đều, high availability

**Cách làm:** LB algorithms với health checks

**Nội dung cần có:**
* Type: Application Load Balancer (L7), round-robin
* Health checks: /health endpoint, 30s interval
* Sticky sessions: Không sử dụng (stateless)
* SSL termination: TLS 1.3 tại LB
* Monitoring: Request distribution metrics

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.4.3 Load Balancing
* Đầu vào từ: Problem.md § 3.4.C Traffic distribution
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-SC03)
* Kết nối với: Part14_Deployment_Architecture (ALB/NLB)
* Kết nối với: Part05.5.1_NFR-SC01_Horizontal_Scaling

**Mục đích của node này:** Distribute load evenly

---

## 05.5.4 - NFR-SC04_Caching_Strategy - Chiến lược Cache

**Mục đích:** Định nghĩa yêu cầu caching

**Ý nghĩa:** Giảm DB load, improve response time <1s

**Cách làm:** Multi-layer cache với TTL

**Nội dung cần có:**
* Layers: CDN (static assets), Redis (session/API), browser cache
* Strategy: Cache-aside pattern, TTL 5-60 min
* Invalidation: Event-driven (campaign update → cache clear)
* Hit rate: Target >80% cache hit
* Storage: Redis Cluster (HA)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.4.4 Caching
* Đầu vào từ: Problem.md § 3.4.D Performance optimization
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-SC04)
* Kết nối với: Part14_Deployment_Architecture (Redis setup)
* Kết nối với: Part05.2.1_NFR-P01_Response_Time

**Mục đích của node này:** Optimize read performance

---

## 05.6 - Usability_Requirements - Yêu cầu Khả năng Sử dụng

**Mục đích:** Chi tiết yêu cầu usability cho hệ thống

**Ý nghĩa:** Mobile-first, accessible, completion rate >90%

**Cách làm:** Sub-folders cho 4 NFR-U, UX standards

**Nội dung cần có:**
* List: NFR-U01 Mobile First đến NFR-U04 User Experience
* Standards: WCAG 2.1 AA, mobile-first design
* Scope: Landing page, admin portal, user portal
* Testing: Usability testing, accessibility audit
* Acceptance: Completion >90%, satisfaction >4/5

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.5 Usability
* Đầu vào từ: Problem.md § 3.5 UX requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Usability)
* Kết nối với: Part10_UI_UX_Design
* Kết nối với: Part04.2.3_FR-003_Landing_Page_Form

**Mục đích của node này:** Ensure user-friendly design

---

## 05.6.1 - NFR-U01_Mobile_First - Ưu tiên Mobile

**Mục đích:** Định nghĩa yêu cầu mobile-first design

**Ý nghĩa:** 70% users mobile, optimize cho small screens

**Cách làm:** Responsive design với breakpoints

**Nội dung cần có:**
* Breakpoints: Mobile (<768px), tablet (768-1024px), desktop (>1024px)
* Touch targets: Min 44x44px (iOS HIG)
* Performance: Mobile page load <3s on 3G
* PWA: Installable, offline capable
* Testing: Cross-device testing (iOS/Android)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.5.1 Mobile First
* Đầu vào từ: Problem.md § 3.5.A Mobile requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-U01)
* Kết nối với: Part10_UI_UX_Design (mobile design)
* Kết nối với: Part02.2.3_Operating_Environment

**Mục đích của node này:** Optimize for mobile users

---

## 05.6.2 - NFR-U02_Accessibility_WCAG - Tiếp cận WCAG

**Mục đích:** Định nghĩa yêu cầu accessibility

**Ý nghĩa:** Tuân thủ WCAG 2.1 Level AA, inclusive design

**Cách làm:** WCAG checklist với testing

**Nội dung cần có:**
* Standards: WCAG 2.1 Level AA compliance
* Features: Screen reader support, keyboard navigation, alt text
* Contrast: Min 4.5:1 for normal text, 3:1 for large
* Testing: WAVE tool, screen reader testing
* Score: Lighthouse accessibility >90

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.5.2 Accessibility
* Đầu vào từ: Problem.md § 3.5.B Inclusive design
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-U02)
* Kết nối với: Part10_UI_UX_Design (accessibility)
* Kết nối với: Part13_System_Testing_Strategy (a11y tests)

**Mục đích của node này:** Ensure inclusive access

---

## 05.6.3 - NFR-U03_Internationalization - Quốc tế hóa

**Mục đích:** Định nghĩa yêu cầu i18n/l10n

**Ý nghĩa:** Hỗ trợ VN/EN, mở rộng SEA (Thái/Indo)

**Cách làm:** i18n framework với resource bundles

**Nội dung cần có:**
* Languages: Vietnamese (default), English
* Framework: i18next (React), locale files (JSON)
* Scope: UI strings, error messages, emails
* Date/time: Locale-aware formatting
* Future: Thai, Indonesian (Phase 2)

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.5.3 i18n
* Đầu vào từ: 01-BRD.md § 6.2 Phase 2 (SEA expansion)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-U03)
* Kết nối với: Part10_UI_UX_Design (multi-language)
* Kết nối với: Part03.2.2_Market_Positioning (SEA market)

**Mục đích của node này:** Support multi-language

---

## 05.6.4 - NFR-U04_User_Experience - Trải nghiệm Người dùng

**Mục đích:** Định nghĩa yêu cầu overall UX

**Ý nghĩa:** Form completion <30s, satisfaction >4/5

**Cách làm:** UX metrics với user testing

**Nội dung cần có:**
* Metrics: Task completion time, error rate, satisfaction score
* Targets: Form <30s, click-to-barcode <60s
* Feedback: Clear error messages, progress indicators
* Testing: User testing (10 users), A/B testing
* Iteration: Continuous improvement based on feedback

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.5.4 UX
* Đầu vào từ: Problem.md § 3.5.D User satisfaction
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-U04)
* Kết nối với: Part10_UI_UX_Design (UX principles)
* Kết nối với: Part03.1.3_Success_Metrics (UX KPIs)

**Mục đích của node này:** Ensure positive user experience

---

## 05.7 - Compliance_Requirements - Yêu cầu Tuân thủ

**Mục đích:** Chi tiết yêu cầu compliance cho hệ thống

**Ý nghĩa:** Tuân thủ GDPR/PDPA, data privacy, legal requirements

**Cách làm:** Sub-folders cho 3 NFR-C, legal framework

**Nội dung cần có:**
* List: NFR-C01 GDPR, NFR-C02 PDPA Vietnam, NFR-C03 Data Privacy
* Scope: EU users (GDPR), VN users (PDPA)
* Rights: Access, rectification, erasure, portability
* Testing: Compliance audit, data protection impact assessment
* Acceptance: Zero compliance violations

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.6 Compliance
* Đầu vào từ: Access_Control_Tree_Grok.md § 3 Legal requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Compliance)
* Kết nối với: Part11_Security_Compliance (detailed compliance)
* Kết nối với: Part04.2.3.4_Consent_Management

**Mục đích của node này:** Meet legal obligations

---

## 05.7.1 - NFR-C01_GDPR - GDPR

**Mục đích:** Định nghĩa yêu cầu GDPR compliance

**Ý nghĩa:** Tuân thủ EU GDPR, quyền người dùng EU

**Cách làm:** GDPR principles với implementation

**Nội dung cần có:**
* Principles: Lawfulness, purpose limitation, data minimization
* Rights: Right to access, rectification, erasure (RTBF), portability
* Consent: Explicit opt-in, withdraw anytime
* Breach: Notify within 72h if breach
* DPO: Data Protection Officer (if needed)

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.6 GDPR
* Đầu vào từ: 01-BRD.md § 5.5 Compliance (GDPR)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-C01)
* Kết nối với: Part11_Security_Compliance (GDPR details)
* Kết nối với: Part05.3.3_NFR-S03_Data_Encryption

**Mục đích của node này:** Comply with EU data protection

---

## 05.7.2 - NFR-C02_PDPA_Vietnam - PDPA Việt Nam

**Mục đích:** Định nghĩa yêu cầu PDPA VN compliance

**Ý nghĩa:** Tuân thủ luật bảo vệ dữ liệu cá nhân VN

**Cách làm:** PDPA requirements với local laws

**Nội dung cần có:**
* Scope: Personal data của VN residents
* Consent: Written consent for processing
* Storage: Data localization (VN servers preferred)
* Rights: Access, correction, deletion
* Authority: Report to MIC if breach

**Tài liệu tham khảo:**
* Đầu vào từ: Access_Control_Tree_Grok.md § 3.7 PDPA VN
* Đầu vào từ: 01-BRD.md § 5.5 Compliance (PDPA)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-C02)
* Kết nối với: Part11_Security_Compliance (PDPA details)
* Kết nối với: Part02.5_Assumptions_and_Constraints (VN laws)

**Mục đích của node này:** Comply with VN data protection

---

## 05.7.3 - NFR-C03_Data_Privacy - Quyền riêng tư Dữ liệu

**Mục đích:** Định nghĩa yêu cầu data privacy general

**Ý nghĩa:** Bảo vệ PII, minimize data collection

**Cách làm:** Privacy-by-design principles

**Nội dung cần có:**
* Principles: Data minimization, purpose limitation, storage limitation
* PII: Name, email, phone, address (encrypted)
* Anonymization: Analytics data anonymized
* Retention: Delete after purpose fulfilled or 2 years
* Privacy policy: Clear, accessible, versioned

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4.6.3 Data Privacy
* Đầu vào từ: Problem.md § 3.6.C Privacy requirements
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (NFR-C03)
* Kết nối với: Part11_Security_Compliance (privacy)
* Kết nối với: Part04.2.3.4_Consent_Management

**Mục đích của node này:** Protect user privacy

---

## 05.8 - Traceability_Matrix - Ma trận Truy xuất

**Mục đích:** Map NFR → BRD/KPIs/Test cases

**Ý nghĩa:** Đảm bảo 100% NFR traceable, no gaps

**Cách làm:** Bảng mapping với columns

**Nội dung cần có:**
* Table: NFR ID | Tên | BRD Section | KPI | Test Case | Priority
* Coverage: All NFRs (Performance, Security, Reliability, Scalability, Usability, Compliance)
* Examples: NFR-P01 → BRD 5.1 → Response <2s → TC-NFR-P01-01
* Validation: Zero orphan NFRs
* Update: Version control

**Tài liệu tham khảo:**
* Đầu vào từ: System_Feature_Tree_Grok.md § 4 (NFR list)
* Đầu vào từ: 01-BRD.md § 5 (non-functional requirements)
* Thể hiện yêu cầu: 02-SRS-V2.md Part05 (Traceability)
* Kết nối với: Part13_System_Testing_Strategy (NFR test IDs)
* Kết nối với: Part16.2_Traceability_Matrix (full matrix)

**Mục đích của node này:** Đảm bảo traceability NFR → BRD/test

---

**✅ PART05 PHẦN 2 HOÀN THÀNH - 16 NODES**

**✅ PART05 HOÀN TẤT - TỔNG 36 NODES (Phần 1: 20 + Phần 2: 16)**

Tiếp **PART06** (System Architecture) không bạn? 🚀
</artifact>
## 📋 **RULE**
1. Prefix = PartXX + tên node
2. 6 thành phần: Mục đích, Ý nghĩa, Cách làm, Nội dung cần có, Tài liệu tham khảo, Mục đích node
3. Song ngữ keyword, nội dung Việt
4. Format ngắn gọn

---





























