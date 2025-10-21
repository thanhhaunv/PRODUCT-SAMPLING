# 🧩 Part00 – Document Information

## 00.1_Title_Page.md

### Purpose
Cung cấp thông tin nhận diện chính thức của tài liệu Software Requirements Specification (SRS) cho dự án **Product Sampling Platform (PSP)**.

### Scope & Context
Tài liệu này được phát hành cho toàn bộ team phát triển PSP, bao gồm Product Owner, Business Analyst, Developer, QA, và các bên liên quan khác. Là phần mở đầu trong bộ tài liệu SRS (Part00–Part15).

### Specifications
- **Document Title:** Software Requirements Specification – Product Sampling Platform  
- **Project Name:** PSP (Product Sampling Platform)  
- **Prepared by:** Technical Writer Team  
- **Owner:** Product Department – AdTrue Global  
- **Version:** 1.0.0  
- **Release Date:** 2025-10-21  
- **Status:** Draft (Pending Review)

### Acceptance Criteria / KPIs
- Có đầy đủ thông tin định danh dự án.  
- Được duyệt bởi PO và BA trước khi chuyển sang Part01.  


---

## 00.2_Version_History.md

### Purpose
Theo dõi các thay đổi trong suốt vòng đời tài liệu để đảm bảo tính minh bạch và khả năng truy xuất nguồn gốc.

### Scope & Context
Áp dụng cho toàn bộ các phần của tài liệu SRS PSP. Mọi chỉnh sửa đều phải ghi rõ người thực hiện, ngày, và nội dung thay đổi.

### Specifications

| Version | Date | Author | Description | Status |
|----------|------|---------|-------------|---------|
| 0.9 | 2025-10-20 | System AutoGen | Draft khởi tạo từ BRD + Feature Tree | Draft |
| 1.0 | 2025-10-21 | GPT-5 (Technical Writer) | Hoàn thiện Part00 – Document Information | Draft |
| 1.1 | TBD | Project Team | Cập nhật glossary, metadata | Pending |

### Acceptance Criteria / KPIs
- Mỗi thay đổi đều có timestamp và tác giả.  
- Dễ dàng truy xuất được lịch sử chỉnh sửa qua version table.  


---

## 00.3_Approval_Sign_Off.md

### Purpose
Xác nhận tài liệu SRS được duyệt bởi các bên liên quan trước khi đưa vào triển khai kỹ thuật.

### Scope & Context
Áp dụng cho toàn bộ tài liệu SRS PSP. Mỗi lần cập nhật major version, phần Sign-Off cần được ký lại.

### Specifications

| Role | Name | Title | Approval Date | Signature |
|------|------|--------|----------------|------------|
| Product Owner | Nguyen Thanh Hau | Head of Product | 2025-10-21 | ✅ |
| Business Analyst | — | BA Lead | — | ☐ |
| Technical Lead | — | Engineering Manager | — | ☐ |
| QA Manager | — | QA Lead | — | ☐ |
| UI/UX Lead | — | Design Manager | — | ☐ |

### Acceptance Criteria / KPIs
- Có ít nhất 2 chữ ký: PO và Tech Lead trước khi sang giai đoạn dev.  
- Mỗi lần cập nhật major version đều cập nhật bảng sign-off mới.  


---

## 00.4_Document_Metadata.md

### Purpose
Cung cấp metadata mô tả cấu trúc, phạm vi và các thuộc tính liên quan đến tài liệu SRS PSP.

### Scope & Context
Lưu trữ dữ liệu mô tả phục vụ cho quản lý vòng đời tài liệu (Document Lifecycle Management).

### Specifications

| Field | Description |
|--------|-------------|
| **Document ID** | SRS-PSP-2025-V1.0 |
| **Project Name** | Product Sampling Platform |
| **Document Type** | Software Requirements Specification |
| **Confidentiality** | Internal Use Only |
| **Target Audience** | Product Owner, BA, Developer, QA, Designer |
| **Storage Location** | Internal Repository /docs/srs/psp/ |
| **Format** | Markdown (.md), PDF export available |
| **Maintenance Owner** | Product Department |

### Acceptance Criteria / KPIs
- Metadata phải nhất quán với version hiện hành.  
- Có thể trích xuất metadata qua công cụ document parser (YAML header hoặc JSON).  


---

## 00.5_Glossary_Of_Terms.md

### Purpose
Định nghĩa các thuật ngữ, từ viết tắt, và khái niệm sử dụng xuyên suốt tài liệu SRS để đảm bảo thống nhất hiểu biết.

### Scope & Context
Áp dụng cho tất cả người đọc tài liệu PSP SRS (Dev, QA, BA, PM, UI/UX, Stakeholder).

### Specifications

| Term | Definition |
|------|-------------|
| **PSP** | Product Sampling Platform – nền tảng quản lý và phân phối mẫu sản phẩm dùng thử. |
| **Campaign** | Chiến dịch sampling – tập hợp barcode, landing page, và tracking để người dùng nhận mẫu. |
| **Barcode Pool** | Kho barcode đại diện cho các mẫu sản phẩm có thể phân phối. |
| **Redeem** | Hành động người dùng đổi barcode tại POS (Point of Sale). |
| **POS** | Point of Sale – nơi người dùng đổi hoặc nhận mẫu. |
| **User Portal** | PWA giao diện người dùng cuối để xem, quản lý barcode và thông tin sampling. |
| **Admin Portal** | Giao diện quản trị, nơi tạo và theo dõi chiến dịch, barcode, người dùng, và báo cáo. |
| **Serving Account** | Tài khoản cấp phát tại điểm POS. |
| **Group Admin** | Quản lý nhóm chiến dịch trong phạm vi riêng, không ảnh hưởng tài nguyên global. |
| **CPL** | Cost per Lead – chi phí để có 1 người dùng hoàn thành quy trình sampling. |
| **GA4 / Meta Pixel** | Công cụ tracking hành vi người dùng từ Google và Meta. |
| **GDPR / PDPA** | Quy định bảo vệ dữ liệu cá nhân tại EU và APAC. |

### Acceptance Criteria / KPIs
- Mỗi thuật ngữ xuất hiện trong SRS đều có định nghĩa rõ ràng trong bảng này.  
- Glossary được cập nhật khi có thuật ngữ mới phát sinh trong các Part sau.  

---

📘 *End of Part00 – Document Information*
