# 🧩 Part00 – Document Information  
**References:** SRS_STRUCTURE.md (Section 00), BRD.md (Section 1), System_Feature_Tree.md (Section 1)

---

## 00.1_Title_Page.md

**Mục đích:**  
Giới thiệu thông tin chính thức của tài liệu **Software Requirements Specification (SRS)** cho dự án **Product Sampling Platform (PSP)** – nền tảng quản lý, triển khai và tối ưu hóa chiến dịch sampling sản phẩm.

**Ý nghĩa:**  
Giúp các bên liên quan dễ dàng xác định phiên bản, phạm vi, và tình trạng hiện tại của tài liệu.

**Cách làm:**  
Thu thập thông tin từ BRD và repository nội bộ, thể hiện ở dạng bảng metadata để thuận tiện tra cứu.

**Nội dung:**

| Field | Value |
|--------|--------|
| **Document Title** | Software Requirements Specification – Product Sampling Platform |
| **Project Name** | PSP (Product Sampling Platform) |
| **Prepared by** | Technical Writing Team – AdTrue Global |
| **Reviewed by** | Product Owner & Engineering Manager |
| **Version** | 1.0.0 |
| **Release Date** | 2025-10-21 |
| **Status** | Draft (Pending Review) |

**Assumptions / Constraints:**  
- Document phát hành nội bộ.  
- Cập nhật định kỳ khi có thay đổi feature set hoặc kiến trúc.

**Dependencies / Risks:**  
- Phụ thuộc vào BRD để đảm bảo thống nhất thuật ngữ.  
- Rủi ro: sử dụng bản cũ → Mitigation: kiểm tra Version History trước dùng.

**Acceptance Criteria / Testable Items:**  
- Có đủ metadata (title, version, owner, status).  
- Hiển thị nhất quán với các phần kế tiếp.  

**Approval Sign-Off:**

| Role | Name | Signature | Date |
|------|------|------------|------|
| Product Owner | Nguyen Thanh Hau | ✅ | 2025-10-21 |
| Tech Lead | TBD | ☐ | TBD |
| QA Lead | TBD | ☐ | TBD |

---

## 00.2_Version_History.md

**Mục đích:**  
Theo dõi các phiên bản và thay đổi của tài liệu SRS PSP.

**Ý nghĩa:**  
Bảo đảm tính minh bạch, truy xuất được các chỉnh sửa và nguồn thay đổi.

**Cách làm:**  
Lưu thay đổi trong bảng log, mỗi lần commit hoặc phê duyệt tạo một entry mới.

**Nội dung:**

| Version | Date | Author | Description | Status |
|----------|------|---------|-------------|---------|
| 0.9 | 2025-10-20 | System AutoGen | Draft đầu tiên tổng hợp từ BRD + Feature Tree | Draft |
| 1.0 | 2025-10-21 | GPT-5 (Tech Writer) | Hoàn thiện Part00 theo format mở rộng | Draft |
| 1.1 | TBD | Project Team | Review & bổ sung thuật ngữ | Pending |

**Dependencies / Risks:**  
- Phụ thuộc công cụ version control (Git).  
- Rủi ro: thiếu cập nhật manual → Mitigation: gắn CI check version header.

**Acceptance Criteria / Testable Items:**  
- Mỗi version có author, date, description rõ ràng.  
- Có thể truy xuất toàn bộ thay đổi qua Git log.  

---

## 00.3_Approval_Sign_Off.md

**Mục đích:**  
Xác nhận sự phê duyệt của các bên liên quan trước khi tài liệu SRS được sử dụng làm baseline phát triển.

**Ý nghĩa:**  
Là bằng chứng chính thức đảm bảo tính hợp lệ của yêu cầu và nội dung SRS.

**Cách làm:**  
Ký số (digital sign-off) hoặc xác nhận qua email nội bộ với tracking ID.

**Nội dung:**

| Role | Name | Title | Approval Date | Signature |
|------|------|--------|----------------|------------|
| Product Owner | Nguyen Thanh Hau | Head of Product | 2025-10-21 | ✅ |
| Business Analyst | TBD | BA Lead | TBD | ☐ |
| Technical Lead | TBD | Engineering Manager | TBD | ☐ |
| QA Manager | TBD | QA Lead | TBD | ☐ |
| UI/UX Lead | TBD | Design Manager | TBD | ☐ |

**Assumptions / Constraints:**  
- PO & Tech Lead sign-off trước khi chuyển sang Phase Development.  

**Dependencies / Risks:**  
- Chậm sign-off → trì hoãn timeline release.  

**Acceptance Criteria / Testable Items:**  
- Có ít nhất hai chữ ký (PO, Tech Lead).  
- Bảng sign-off cập nhật mỗi major release.  

---

## 00.4_Document_Metadata.md

**Mục đích:**  
Mô tả các thuộc tính nhận dạng, phạm vi và lưu trữ của tài liệu.

**Ý nghĩa:**  
Hỗ trợ quản lý vòng đời tài liệu (Document Lifecycle Management) và tự động hóa truy xuất.

**Cách làm:**  
Lưu metadata dưới dạng bảng và header YAML để dễ đọc bằng công cụ parser.

**Nội dung:**

| Field | Description |
|--------|-------------|
| **Document ID** | SRS-PSP-2025-V1.0 |
| **Project Name** | Product Sampling Platform |
| **Document Type** | Software Requirements Specification |
| **Confidentiality** | Internal Use Only |
| **Target Audience** | PO, BA, Dev, QA, UI/UX |
| **Repository Path** | /docs/srs/psp/ |
| **Format** | Markdown (.md), PDF export |
| **Maintainer** | Product Department |
| **Lifecycle Status** | Draft → Review → Approved → Archived |

**Assumptions / Constraints:**  
- Tài liệu được lưu trữ và version hóa trong Git.  
- PDF bản in chỉ dùng để review, không là nguồn chuẩn.

**Dependencies / Risks:**  
- Phụ thuộc công cụ CI export PDF.  
- Rủi ro: metadata mismatch → Mitigation: sync bằng script parser.

**Acceptance Criteria / Testable Items:**  
- Metadata đúng chuẩn, đầy đủ trường bắt buộc.  
- Có thể trích xuất tự động bằng parser nội bộ.  

---

## 00.5_Glossary_Of_Terms.md

**Mục đích:**  
Tạo bảng thuật ngữ và định nghĩa chuẩn sử dụng xuyên suốt toàn bộ SRS.

**Ý nghĩa:**  
Đảm bảo đội ngũ phát triển, QA và khách hàng có cùng hiểu biết khi đọc tài liệu.

**Cách làm:**  
Kết hợp từ BRD, Access Control Tree, và System Feature Tree. Cập nhật động mỗi khi thêm module mới.

**Nội dung:**

| Term | Definition |
|------|-------------|
| **PSP** | Product Sampling Platform – nền tảng quản lý chiến dịch sampling. |
| **Campaign** | Chiến dịch sampling gồm barcode, landing page, tracking. |
| **Barcode Pool** | Kho mã QR single-use cấp phát cho người dùng. |
| **Redeem** | Hành vi đổi mã tại POS (Point of Sale). |
| **POS** | Point of Sale – điểm đổi mẫu hoặc cửa hàng liên kết. |
| **User Portal** | Ứng dụng PWA cho người dùng cuối. |
| **Admin Portal** | Cổng quản trị cho Admin, Brand Admin, Staff. |
| **Serving Account** | Tài khoản POS dùng để quét & xác nhận barcode. |
| **Group Admin** | Quản lý nhóm chiến dịch, không có quyền global. |
| **CPL** | Cost per Lead – chi phí cho mỗi khách hàng hợp lệ. |
| **GA4 / Meta Pixel** | Hệ thống theo dõi hành vi người dùng. |
| **GDPR / PDPA** | Quy định bảo vệ dữ liệu cá nhân. |
| **RBAC** | Role-Based Access Control – phân quyền theo vai trò. |
| **Funnel** | Chuỗi hành động từ Scan → Form → Redeem. |
| **Fraud Detection** | Cơ chế phát hiện gian lận dựa trên ML. |

**Assumptions / Constraints:**  
- Glossary cập nhật mỗi sprint khi có thuật ngữ mới.  

**Dependencies / Risks:**  
- Phụ thuộc BA & PO để duyệt định nghĩa chính thức.  

**Acceptance Criteria / Testable Items:**  
- Không có thuật ngữ mâu thuẫn trong tài liệu.  
- Glossary đủ để đọc hiểu toàn bộ SRS.  

**Approval Sign-Off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | Nguyen Thanh Hau | ✅ | 2025-10-21 |
| BA Lead | TBD | ☐ | TBD |

---

📘 *End of Part00 – Document Information*


# 🧩 Part01 – Introduction

## 01.1_Purpose_Of_Document.md

### Purpose
Xác định mục đích của tài liệu SRS cho dự án **Product Sampling Platform (PSP)** – nền tảng giúp doanh nghiệp triển khai, quản lý và tối ưu hóa các chiến dịch phát mẫu sản phẩm.

### Scope & Context
Tài liệu mô tả toàn bộ yêu cầu phần mềm của PSP bao gồm: nghiệp vụ, chức năng, phi chức năng, phân quyền, UI/UX, và yêu cầu kỹ thuật.  
Là cơ sở chính thức để đội phát triển, QA, UI/UX và PM triển khai hệ thống.

### Specifications
- Được xây dựng dựa trên **Business Requirements (BRD)** và **Feature Tree**.  
- Hướng dẫn toàn bộ quy trình phát triển từ requirement → design → coding → testing.  
- Là tài liệu tham chiếu cho các tài liệu con (Architecture, UI/UX, Test Plan…).  

### Acceptance Criteria / KPIs
- Mô tả chính xác mục tiêu và phạm vi SRS.  
- Được PO và BA xác nhận trước khi triển khai Part02.  

---

## 01.2_Project_Scope.md

### Purpose
Mô tả phạm vi dự án Product Sampling Platform – hệ thống cho phép quản lý chiến dịch sampling, phân phối barcode, và thu thập dữ liệu khách hàng.

### Scope & Context
Phạm vi bao gồm các module:
- **Admin Portal:** quản lý chiến dịch, barcode, người dùng, báo cáo, A/B testing, fraud detection.  
- **User Portal (PWA):** người dùng cuối xem barcode, redeem, tham gia khảo sát.  
- **POS Integration:** đồng bộ dữ liệu redeem với hệ thống bán hàng.  
- **Analytics Layer:** báo cáo campaign performance, funnel, cohort, ROI.  

Không bao gồm:  
- Quản lý logistics, vận chuyển hàng mẫu.  
- Xử lý thanh toán online.  

### Specifications
- Loại hệ thống: SaaS, multi-tenant.  
- Người dùng chính: Admin, Group Admin, Customer Account, Serving Account, End User.  
- Tích hợp: ERP, CRM, GA4, Meta Pixel, Voucherify API.  

### Acceptance Criteria / KPIs
- Phạm vi rõ ràng, không trùng hoặc chồng với hệ thống bên ngoài.  
- Có thể mapping 1-1 với Feature Tree.  

---

## 01.3_Intended_Audience.md

### Purpose
Xác định các nhóm người đọc chính của tài liệu SRS và mục tiêu của họ khi sử dụng tài liệu này.

### Scope & Context
Tài liệu phục vụ cho nhiều vai trò trong quy trình phát triển PSP.

### Specifications
| Vai trò | Mục tiêu khi đọc SRS |
|----------|---------------------|
| **Product Owner** | Đảm bảo yêu cầu đáp ứng mục tiêu kinh doanh. |
| **Business Analyst** | Theo dõi traceability giữa BRD và chức năng. |
| **Developers** | Triển khai code theo đặc tả và interface. |
| **QA / Tester** | Tạo test case và kịch bản kiểm thử. |
| **UI/UX Team** | Thiết kế layout và interaction theo yêu cầu chức năng. |
| **Auditor / Compliance** | Kiểm tra tính tuân thủ GDPR/PDPA. |

### Acceptance Criteria / KPIs
- Mỗi vai trò có mục tiêu sử dụng tài liệu rõ ràng.  
- Không thiếu nhóm stakeholder chính.  

---

## 01.4_Product_Overview.md

### Purpose
Tổng quan về PSP – giải pháp sampling tập trung giúp doanh nghiệp phân phối sản phẩm thử, đo lường hiệu quả marketing và tối ưu ROI.

### Scope & Context
Nền tảng PSP được thiết kế dạng microservices, hỗ trợ cả web và PWA, phục vụ nhiều nhóm người dùng (Admin, Group Admin, Customer, End User).

### Specifications
- **Business Goal:** giảm chi phí sampling (CPL < 0.4 USD) và tăng conversion scan-to-submit > 90%.  
- **Core Functions:** Campaign setup, barcode issuance, landing page builder, redeem tracking, analytics.  
- **System Strengths:** modular architecture, API-first design, offline PWA.  
- **Key Metrics:** campaign setup < 2 days, redemption success > 98%.  

### Acceptance Criteria / KPIs
- Mô tả được giá trị cốt lõi và ưu điểm hệ thống.  
- Align 100% với phần Product Vision trong BRD.  

---

## 01.5_Stakeholders.md

### Purpose
Xác định các bên liên quan (stakeholders) ảnh hưởng hoặc tham gia vào dự án PSP.

### Scope & Context
Liệt kê stakeholder nội bộ và bên ngoài để đảm bảo đầy đủ khi phân tích yêu cầu.

### Specifications

| Nhóm | Tên / Vai trò | Mục tiêu / Lợi ích chính |
|-------|----------------|--------------------------|
| **Internal** | Product Owner | Tăng hiệu quả chiến dịch sampling |
| | Business Analyst | Chuẩn hóa quy trình và dữ liệu |
| | Developer Team | Xây dựng hệ thống ổn định, modular |
| | QA / Tester | Kiểm thử logic và dữ liệu |
| | UI/UX Designer | Tối ưu trải nghiệm người dùng |
| **External** | Brand / Client | Tổ chức chiến dịch sampling dễ dàng |
| | POS Staff | Quét barcode, redeem nhanh chóng |
| | End User | Nhận và đánh giá sản phẩm thử |

### Acceptance Criteria / KPIs
- Mỗi stakeholder có vai trò rõ ràng và mục tiêu gắn với hệ thống.  
- Thống nhất giữa BA và PO trước khi phê duyệt.  

---

## 01.6_Definitions_And_Acronyms.md

### Purpose
Định nghĩa thuật ngữ và từ viết tắt dùng xuyên suốt trong tài liệu.

### Scope & Context
Kế thừa từ Glossary (Part00) và mở rộng thêm thuật ngữ đặc thù cho phần giới thiệu.

### Specifications

| Term | Definition |
|------|-------------|
| **Admin Portal** | Cổng quản trị PSP dành cho nhà quảng cáo. |
| **User Portal** | Ứng dụng PWA cho người dùng cuối. |
| **Sampling Campaign** | Chuỗi hoạt động phát mẫu sản phẩm có mã barcode riêng. |
| **Redemption** | Hành vi đổi mã barcode tại POS. |
| **Funnel** | Chuỗi hành trình người dùng từ scan đến submit form. |
| **Cohort** | Nhóm người dùng được phân tích hành vi theo thời gian. |
| **KPI** | Chỉ số đo lường hiệu quả hoạt động (Key Performance Indicator). |

### Acceptance Criteria / KPIs
- Không có thuật ngữ mâu thuẫn với BRD hoặc Glossary Part00.  
- Được cập nhật xuyên suốt khi thêm module mới.  

---

## 01.7_References.md

### Purpose
Liệt kê tài liệu nguồn và chuẩn mà SRS dựa vào.

### Scope & Context
Bao gồm các tài liệu nội bộ và tiêu chuẩn công nghiệp có liên quan đến dự án PSP.

### Specifications

| Reference | Description |
|------------|-------------|
| `BRD.md` | Business Requirement Document của dự án PSP |
| `System_Feature_Tree.md` | Cây chức năng hệ thống |
| `Access_Control_Tree_Grok.md` | Cấu trúc phân quyền người dùng |
| `SRS_STRUCTURE.md` | Khung cấu trúc tài liệu SRS |
| ISO/IEC/IEEE 29148:2018 | Tiêu chuẩn viết Software Requirements Specification |
| GDPR / PDPA Regulations | Chuẩn bảo vệ dữ liệu người dùng |

### Acceptance Criteria / KPIs
- Danh sách reference đầy đủ và hợp lệ.  
- Tất cả link nội bộ đều truy cập được trong repository.  

---

## 01.8_Document_Conventions.md

### Purpose
Định nghĩa các quy ước trình bày, ký hiệu, và format được sử dụng xuyên suốt trong tài liệu SRS.

### Scope & Context
Áp dụng cho toàn bộ Part00–Part15 của tài liệu SRS PSP.

### Specifications
- **Ngôn ngữ:** English (primary) / Vietnamese (for stakeholder notes).  
- **Định dạng Markdown:** Tiêu đề = `#`, Subsection = `##`.  
- **Thuật ngữ kỹ thuật:** viết in đậm **bold** lần đầu xuất hiện.  
- **Chú thích đặc biệt:**  
  - ⚙️ Functional Specification  
  - 🧩 Architecture Section  
  - 🔐 Security / Access Control  
  - 🎨 UI/UX Elements  
- **Version Control:** dùng Git + Pull Request để duyệt tài liệu.  

### Acceptance Criteria / KPIs
- Mọi Part tuân theo conventions này.  
- Dev/QA có thể dễ dàng tìm và parse nội dung tự động.  

---

📘 *End of Part01 – Introduction*
# 🧩 Part02 – System Overview

## 02.1_System_Context.md

### Purpose
Cung cấp cái nhìn tổng thể về hệ thống **Product Sampling Platform (PSP)**, bao gồm các thành phần chính và mối quan hệ với các hệ thống bên ngoài.

### Scope & Context
PSP là nền tảng SaaS giúp doanh nghiệp triển khai chiến dịch sampling, phân phối barcode, và thu thập dữ liệu người dùng.  
Hệ thống gồm hai nhóm chính:
- **Internal Systems:** Admin Portal, API Gateway, Analytics Engine.  
- **External Systems:** POS, CRM, ERP, GA4, Meta Pixel, Voucherify.

### Specifications
- **Actors:**  
  - Admin / Group Admin → Quản lý chiến dịch.  
  - Customer Account → Theo dõi Campaign riêng.  
  - End User → Scan, redeem, gửi form.  
  - POS System → Nhận và xác nhận barcode.  
- **External Interfaces:**  
  - REST API (voucher, redeem, analytics).  
  - Webhook (ERP/CRM sync).  
  - OAuth2.0 Authentication.  

### Acceptance Criteria / KPIs
- Có sơ đồ hoặc mô tả thể hiện rõ ràng các tác nhân và hệ thống tương tác.  
- Các kết nối API và event flow được xác định đầy đủ.  


---

## 02.2_System_Objectives.md

### Purpose
Xác định mục tiêu tổng thể của PSP – lý do hệ thống được phát triển và các kết quả mong đợi.

### Scope & Context
Hệ thống PSP được thiết kế để giải quyết các vấn đề trong phát mẫu truyền thống: tốn chi phí, dữ liệu phân tán, khó đo lường ROI.

### Specifications
- **Mục tiêu kinh doanh:**  
  - Giảm **CPL (Cost per Lead)** xuống < 0.4 USD.  
  - Tăng **data quality** > 95%.  
  - Cho phép doanh nghiệp thiết lập chiến dịch sampling trong ≤ 2 ngày.  
- **Mục tiêu kỹ thuật:**  
  - Hỗ trợ **multi-tenant architecture**.  
  - Tích hợp POS và CRM tự động.  
  - Cung cấp **real-time analytics** trong vòng 24h.  

### Acceptance Criteria / KPIs
- Đạt 100% alignment với mục tiêu trong BRD.  
- Mục tiêu có thể đo lường bằng dữ liệu thực tế từ hệ thống.  


---

## 02.3_System_Constraints.md

### Purpose
Liệt kê các ràng buộc (constraints) ảnh hưởng đến thiết kế, phát triển và vận hành hệ thống PSP.

### Scope & Context
Bao gồm giới hạn kỹ thuật, pháp lý và vận hành.

### Specifications
- **Kỹ thuật:**  
  - Giới hạn 1B+ log/ngày → yêu cầu Big Data backend (ClickHouse/BigQuery).  
  - PWA offline sync giới hạn dung lượng IndexedDB < 50MB.  
- **Bảo mật:**  
  - Tuân thủ GDPR/PDPA.  
  - Audit trail immutable (không sửa được log).  
- **Kinh doanh:**  
  - Chi phí server < 0.05 USD / 1K requests.  
  - API uptime ≥ 99.5%.  

### Acceptance Criteria / KPIs
- Ràng buộc được xác định và mapping với Non-Functional Requirements (Part05).  
- Tất cả constraint đều có thể kiểm thử hoặc xác minh được.  


---

## 02.4_Assumptions_And_Dependencies.md

### Purpose
Ghi rõ các giả định (assumptions) và phụ thuộc (dependencies) có thể ảnh hưởng đến tiến độ hoặc tính năng của PSP.

### Scope & Context
Được dùng để quản lý rủi ro và đảm bảo kế hoạch triển khai thực tế.

### Specifications
- **Assumptions:**  
  - Người dùng có kết nối Internet khi redeem.  
  - POS có khả năng quét mã QR.  
  - ERP/CRM hỗ trợ API webhook.  
- **Dependencies:**  
  - Dữ liệu barcode do đối tác cung cấp đúng định dạng.  
  - Dịch vụ Voucherify, GA4, Meta Pixel luôn sẵn sàng.  
  - PWA cập nhật Service Worker tự động khi có version mới.  

### Acceptance Criteria / KPIs
- Mọi dependency đều có owner rõ ràng.  
- Assumption được kiểm chứng lại trước mỗi milestone phát triển.  


---

## 02.5_Success_Criteria.md

### Purpose
Xác định tiêu chí đánh giá thành công của dự án PSP.

### Scope & Context
Các tiêu chí này dùng để xác minh rằng hệ thống đạt mục tiêu về nghiệp vụ, kỹ thuật và trải nghiệm người dùng.

### Specifications
- **Kinh doanh:**  
  - CPL < 0.4 USD, ROI ≥ 200%.  
- **Người dùng:**  
  - Conversion Scan → Submit ≥ 90%.  
  - Redeem success ≥ 98%.  
- **Hệ thống:**  
  - Response time < 500ms / API.  
  - Data accuracy > 95%.  
- **Vận hành:**  
  - Tích hợp POS & CRM ổn định 99%.  

### Acceptance Criteria / KPIs
- Mỗi success metric có thể đo lường qua dashboard analytics.  
- PO xác nhận khi các KPI đạt ngưỡng định sẵn.  


---

## 02.6_Out_Of_Scope.md

### Purpose
Nêu rõ những hạng mục **không nằm trong phạm vi** của hệ thống PSP để tránh hiểu lầm giữa các nhóm.

### Scope & Context
Giúp định ranh giới rõ giữa hệ thống PSP và các hệ thống bên ngoài.

### Specifications
- Không xử lý thanh toán hoặc giao hàng mẫu.  
- Không thay thế ERP, CRM hiện có.  
- Không lưu trữ hình ảnh người dùng (chỉ metadata).  
- Không cung cấp module quản lý sản phẩm hoặc tồn kho nâng cao.  

### Acceptance Criteria / KPIs
- Không có chức năng ngoài scope trong backlog.  
- Phạm vi được xác nhận bởi BA và PO trước phát hành bản 1.0.  


---

## 02.7_Business_Requirements_Summary.md

### Purpose
Tóm tắt yêu cầu kinh doanh chính được chuyển từ BRD sang SRS.

### Scope & Context
Kết nối trực tiếp giữa mục tiêu kinh doanh và yêu cầu phần mềm.

### Specifications
| ID | Business Requirement | Priority |
|----|----------------------|-----------|
| BR-01 | Giảm chi phí sampling và tối ưu ROI | High |
| BR-02 | Cung cấp công cụ tạo chiến dịch sampling tự động | High |
| BR-03 | Theo dõi real-time performance theo kênh | High |
| BR-04 | Cho phép người dùng cuối redeem bằng PWA | Medium |
| BR-05 | Hỗ trợ A/B Testing và Fraud Detection | Medium |
| BR-06 | Đảm bảo tuân thủ GDPR/PDPA | High |

### Acceptance Criteria / KPIs
- 100% BR trong BRD được trace sang chức năng tương ứng trong Part04.  
- Không bỏ sót requirement trọng yếu.  


---

## 02.8_Technical_Requirements_Summary.md

### Purpose
Tóm tắt yêu cầu kỹ thuật then chốt mà PSP cần đáp ứng.

### Scope & Context
Dựa trên định hướng trong System_Feature_Tree.md và ràng buộc kỹ thuật từ Access_Control_Tree_Grok.md.

### Specifications
| ID | Technical Requirement | Category | Priority |
|----|------------------------|-----------|-----------|
| TR-01 | Kiến trúc microservices, API-first | Architecture | High |
| TR-02 | Multi-tenant DB isolation | Database | High |
| TR-03 | RBAC phân quyền theo vai trò | Security | High |
| TR-04 | PWA offline mode + push notification | Frontend | Medium |
| TR-05 | BigQuery / ClickHouse analytics backend | Data | High |
| TR-06 | Metabase embed cho dashboard | Reporting | Medium |
| TR-07 | OAuth2 + JWT auth flow | Security | High |
| TR-08 | CSV/Excel import/export engine | Integration | Medium |

### Acceptance Criteria / KPIs
- Mỗi TR có thể mapping 1-1 với module hoặc component trong Part06.  
- Dev xác nhận khả thi kỹ thuật trước khi vào sprint.  


---

## 02.9_Microservices_Architecture_Overview.md

### Purpose
Mô tả tổng quan kiến trúc microservices của PSP, xác định thành phần, vai trò, và luồng tương tác chính.

### Scope & Context
PSP được xây dựng theo hướng **modular + scalable**, mỗi service đảm nhiệm một domain riêng.

### Specifications
- **Core Services:**  
  - `auth-service` – xác thực, phân quyền (OAuth2, JWT).  
  - `campaign-service` – quản lý chiến dịch, UTM, barcode pool.  
  - `ads-service` – quản lý định dạng quảng cáo & landing page.  
  - `redeem-service` – xử lý redeem POS & sync ERP.  
  - `analytics-service` – funnel, cohort, report export.  
  - `notification-service` – email, push, SMS gateway.  
- **Shared Components:**  
  - API Gateway  
  - Event Bus (Kafka)  
  - Config & Secrets Manager  
  - Audit & Logging service (immutable logs)  

### Acceptance Criteria / KPIs
- Tất cả service có rõ domain, input/output và dependency.  
- Dev có thể dùng sơ đồ này làm blueprint khi thiết kế API contract.  


---

## 02.10_Risk_Assessment.md

### Purpose
Xác định và đánh giá rủi ro chính ảnh hưởng đến tiến độ hoặc chất lượng hệ thống PSP.

### Scope & Context
Bao gồm rủi ro kỹ thuật, nghiệp vụ và vận hành.

### Specifications
| ID | Risk Description | Impact | Likelihood | Mitigation |
|----|------------------|---------|-------------|-------------|
| R-01 | Dữ liệu barcode trùng / không hợp lệ | High | Medium | CSV validation + checksum |
| R-02 | Downtime của dịch vụ POS hoặc CRM | High | Medium | Retry queue + webhook logs |
| R-03 | Vi phạm quy định dữ liệu cá nhân (GDPR/PDPA) | High | Low | Consent management + audit logs |
| R-04 | PWA cache lỗi dẫn đến hiển thị sai trạng thái barcode | Medium | Medium | Service Worker auto-update |
| R-05 | Load analytics vượt ngưỡng BigQuery quota | Medium | Low | Partition + scheduled exports |

### Acceptance Criteria / KPIs
- Mỗi rủi ro có chiến lược giảm thiểu cụ thể.  
- Risk matrix được cập nhật mỗi release cycle.  

---

📘 *End of Part02 – System Overview*

# 🧩 Part03 – User Personas & Use Cases

## 03.1_User_Personas_Overview.md

### Purpose
Cung cấp cái nhìn tổng quan về các nhóm người dùng (personas) trong hệ thống **Product Sampling Platform (PSP)**, mô tả đặc điểm, mục tiêu và hành vi sử dụng chính.

### Scope & Context
PSP phục vụ nhiều nhóm người dùng thuộc cả phía doanh nghiệp (admin, brand) và người tiêu dùng (customer, POS).  
Mỗi persona có nhu cầu và quyền hạn khác nhau, được phản ánh trong Access Control Tree.

### Specifications
| Persona | Mô tả | Mục tiêu chính |
|----------|--------|----------------|
| Platform Admin | Quản trị hệ thống toàn cầu | Vận hành và bảo trì nền tảng |
| Brand Admin | Đại diện thương hiệu, quản lý chiến dịch sampling | Tăng reach và ROI |
| Brand Staff | Thực thi chiến dịch của brand | Giám sát & xuất báo cáo |
| Customer Account | Quản lý chiến dịch riêng | Theo dõi hiệu suất sampling |
| Customer (End User) | Người dùng cuối | Nhận mẫu, feedback sản phẩm |
| POS Staff | Nhân viên tại điểm redeem | Quét và xác nhận barcode |

### Acceptance Criteria / KPIs
- Toàn bộ persona khớp với cấu trúc role trong Access Control Tree.  
- Mỗi persona có thể mapping với ít nhất 1 module trong Feature Tree.  


---

## 03.2_Persona_1_Platform_Admin.md

### Purpose
Mô tả vai trò, hành vi và mục tiêu của **Platform Admin** – người quản trị cao nhất của PSP.

### Scope & Context
Platform Admin thuộc nhóm **Internal User**, có toàn quyền quản trị hệ thống, chịu trách nhiệm về cấu hình, bảo mật, và vận hành tổng thể.

### Specifications
- **Thông tin chung:**  
  - **Vai trò:** Toàn quyền setup API, POS, CRM, user portal.  
  - **Năng lực:** Hiểu hệ thống, có quyền thay đổi global config.  
- **Mục tiêu sử dụng:**  
  - Đảm bảo uptime ≥ 99.5%.  
  - Quản lý phân quyền, dữ liệu và giám sát toàn hệ thống.  
- **Use Cases:**  
  1. Thiết lập và cấu hình POS/CRM API.  
  2. Import/export barcode toàn hệ thống.  
  3. Theo dõi logs & compliance audit.  
  4. Phân quyền cho Group Admins và tạo user.  

### Acceptance Criteria / KPIs
- Có thể thực hiện mọi thao tác hệ thống mà không xung đột quyền.  
- Đạt mức audit compliance ≥ 100%.  


---

## 03.3_Persona_2_Brand_Admin.md

### Purpose
Mô tả persona của **Brand Admin** – người quản lý chiến dịch sampling trong phạm vi thương hiệu.

### Scope & Context
Brand Admin thuộc nhóm **External (Business User)**, có quyền quản lý campaign và barcode trong phạm vi nhóm mình.

### Specifications
- **Vai trò:** Tạo, sửa, xóa campaign; quản lý barcode pool; xem báo cáo Group-level.  
- **Mục tiêu:**  
  - Thiết lập campaign mới < 2 ngày.  
  - Theo dõi performance sampling theo kênh.  
- **Use Cases:**  
  1. Tạo chiến dịch sampling mới.  
  2. Import barcode vào nhóm.  
  3. Theo dõi funnel conversion và ROI.  
  4. Export data để gửi cho brand partner.  

### Acceptance Criteria / KPIs
- Có thể thao tác đầy đủ các chức năng trong module Campaign Management.  
- Data report hiển thị đúng phạm vi group.  


---

## 03.4_Persona_3_Brand_Staff.md

### Purpose
Đại diện cho **Brand Staff** – người thực thi chiến dịch sampling trong thương hiệu.

### Scope & Context
Brand Staff là user được Brand Admin phân quyền, hỗ trợ vận hành và giám sát chiến dịch.

### Specifications
- **Vai trò:** Xem và giám sát chiến dịch, export báo cáo, theo dõi ticket redeem.  
- **Mục tiêu:**  
  - Đảm bảo chiến dịch hoạt động đúng tiến độ.  
  - Phát hiện lỗi barcode hoặc data sai lệch.  
- **Use Cases:**  
  1. Xem danh sách chiến dịch đang hoạt động.  
  2. Xem chi tiết barcode và redeem log.  
  3. Xuất file CSV báo cáo.  
  4. Theo dõi error tickets từ người dùng.  

### Acceptance Criteria / KPIs
- Truy cập được đầy đủ dashboard được phân quyền.  
- Data export đúng cấu trúc định dạng.  


---

## 03.5_Persona_4_Customer_Account.md

### Purpose
Đại diện **Customer Account** – doanh nghiệp chạy chiến dịch sampling riêng (không thuộc brand global).

### Scope & Context
Nhóm user này sử dụng PSP để triển khai và theo dõi chiến dịch sampling nhỏ hoặc độc lập.

### Specifications
- **Vai trò:** Tạo và quản lý campaign riêng; import barcode; xem dữ liệu khách hàng.  
- **Mục tiêu:**  
  - Quản lý chi phí sampling hợp lý.  
  - Đánh giá hiệu quả qua dashboard.  
- **Use Cases:**  
  1. Tạo chiến dịch riêng với barcode tùy chỉnh.  
  2. Theo dõi lead form và survey.  
  3. Export danh sách khách hàng đã redeem.  

### Acceptance Criteria / KPIs
- Có thể tự vận hành chiến dịch mà không cần Group Admin.  
- Báo cáo campaign có thể xuất file CSV.  


---

## 03.6_Persona_5_Customer.md

### Purpose
Đại diện **người dùng cuối (End User / Customer)** – người nhận mẫu sản phẩm qua campaign PSP.

### Scope & Context
Customer là người dùng hệ thống qua **User Portal (PWA)** trên điện thoại hoặc trình duyệt.

### Specifications
- **Vai trò:** Điền form, redeem barcode, tham gia survey.  
- **Mục tiêu:**  
  - Nhận mẫu sản phẩm dễ dàng.  
  - Theo dõi trạng thái redeem và lịch sử tham gia.  
- **Use Cases:**  
  1. Truy cập landing page → điền form đăng ký.  
  2. Nhận barcode → quét tại POS.  
  3. Xem trạng thái redeem trong User Portal.  
  4. Gửi đánh giá sau khi dùng sản phẩm.  

### Acceptance Criteria / KPIs
- Conversion rate từ scan đến submit ≥ 90%.  
- Redeem thành công ≥ 98%.  


---

## 03.7_Persona_6_POS_Staff.md

### Purpose
Mô tả **POS Staff** – nhân viên tại điểm bán, phụ trách quét barcode và xác nhận redeem.

### Scope & Context
POS Staff thuộc nhóm **Operational User**, chỉ dùng module Redeem Tool.

### Specifications
- **Vai trò:** Quét mã, xác thực, cập nhật trạng thái barcode.  
- **Mục tiêu:**  
  - Xử lý nhanh chóng tại quầy (≤ 5 giây/mã).  
  - Giảm gian lận redeem < 5%.  
- **Use Cases:**  
  1. Đăng nhập Redeem Tool.  
  2. Quét barcode → xác thực hợp lệ.  
  3. Ghi nhận redeem status (success/fail).  
  4. Xem ticket lỗi nếu barcode không hợp lệ.  

### Acceptance Criteria / KPIs
- Thời gian xử lý trung bình < 5s mỗi lượt quét.  
- Tỷ lệ fraud redeem < 5%.  


---

## 03.8_User_Journey_Maps.md

### Purpose
Mô tả hành trình người dùng chính (User Journey) trong hệ thống PSP từ góc nhìn từng persona.

### Scope & Context
Giúp định hình các luồng tương tác (flows) quan trọng trong trải nghiệm tổng thể.

### Specifications
**1️⃣ Customer Journey (End User)**  
- **Stage 1:** Gặp quảng cáo → click QR → mở Landing Page.  
- **Stage 2:** Điền form → nhận barcode qua email/PWA.  
- **Stage 3:** Đến POS → quét mã → nhận sản phẩm.  
- **Stage 4:** Nhận thông báo → tham gia khảo sát.  

**2️⃣ Brand Admin Journey**  
- **Stage 1:** Đăng nhập → tạo campaign.  
- **Stage 2:** Import barcode → setup UTM.  
- **Stage 3:** Theo dõi performance → export báo cáo.  

**3️⃣ Platform Admin Journey**  
- **Stage 1:** Thiết lập tenant, user, và quyền.  
- **Stage 2:** Theo dõi logs, audit, compliance.  

**4️⃣ POS Staff Journey**  
- **Stage 1:** Nhận hướng dẫn redeem.  
- **Stage 2:** Quét và xác nhận barcode.  

### Acceptance Criteria / KPIs
- Các journey thể hiện đầy đủ 4 nhóm hành vi chính: tạo → tham gia → redeem → phân tích.  
- Mỗi hành trình mapping với module trong Feature Tree.  

---

📘 *End of Part03 – User Personas & Use Cases*
