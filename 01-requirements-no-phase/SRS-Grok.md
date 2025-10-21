# Part00 - Document Information

## Structure of Part00

```
Part00_Document_Information/
├── 00.1_Title_Page.md
├── 00.2_Version_History.md
├── 00.3_Approval_Sign_Off.md
├── 00.4_Document_Metadata.md
└── 00.5_Glossary_Of_Terms.md
```

---

## 00.1 Title Page

**References**: BRD.md (Section 24), System_Feature_Tree.md (Glossary), Product-Sampling-Vision-and-Strategy Document.md (Section 1)

**Mục đích**: Cung cấp trang tiêu đề và thông tin tổng quan cho tài liệu SRS của Product Sampling Platform (PSP).

**Ý nghĩa**: Đảm bảo traceability và xác định rõ phiên bản, tác giả, phạm vi tài liệu, hỗ trợ audit và collaboration giữa các stakeholders.

**Cách làm**: Tổng hợp thông tin từ BRD, Vision Document, và System Feature Tree, sử dụng markdown với định dạng chuẩn hóa.

**Nội dung cần có**:

- **Tiêu đề**: Software Requirements Specification (SRS) for Product Sampling Platform (PSP)
- **Phiên bản**: 2.0 - Microservices Architecture
- **Ngày phát hành**: 2025-10-20
- **Tác giả**: Product Management Team, Technical Writing Team
- **Phạm vi**: Xác định yêu cầu chức năng và phi chức năng cho hệ thống PSP, bao gồm 7 microservices (Campaign Management, Identity, Redemption, Analytics, Notification, Fraud, Intelligence) hỗ trợ quản lý chiến dịch sampling, thu thập dữ liệu khách hàng, và tối ưu ROI.
- **Đối tượng sử dụng**: Product Manager, Technical Lead, Development Teams, QA Team, DevOps Team, Design Team
- **Liên hệ**:
  - **Product Manager**: pm@psp.vn
  - **Technical Lead**: techlead@psp.vn
  - **Architecture Team**: architecture@psp.vn

**Tài liệu tham khảo**:

- **Đầu vào từ**: BRD.md (Section 1, 24), Product-Sampling-Vision-and-Strategy Document.md (Section 1)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features, 7 services)
- **Kết nối với**: Part01_Introduction

**Mục đích của node này**: Cung cấp thông tin tổng quan và metadata cơ bản cho SRS.

**Assumptions/Constraints**:

- Assumes tất cả stakeholders đã đọc BRD và Vision Document.
- Constraint: Phải tuân thủ GDPR/PDPA cho dữ liệu khách hàng.

**Dependencies/Risks**:

- Dependencies: Part01_Introduction để mô tả chi tiết mục đích hệ thống.
- Risks: Thiếu sự đồng thuận từ stakeholders về phạm vi → Mitigation: Review và phê duyệt bởi PM và Tech Lead.

**Acceptance Criteria/Testable Items**:

- Title Page chứa đầy đủ thông tin (version, date, authors, scope).
- Liên hệ stakeholder chính xác và có thể truy cập.

**Approval Sign-Off**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| PM | \[TBD\] | \- | \- |
| Tech Lead | \[TBD\] | \- | \- |

---

## 00.2 Version History

**References**: BRD.md (Section 1), System_Feature_Tree.md (Change History)

**Mục đích**: Ghi lại lịch sử các phiên bản của tài liệu SRS để đảm bảo traceability và quản lý thay đổi.

**Ý nghĩa**: Giúp stakeholders theo dõi tiến trình phát triển tài liệu, đảm bảo mọi thay đổi được ghi nhận và phê duyệt.

**Cách làm**: Tổng hợp từ lịch sử phiên bản trong BRD và System Feature Tree, trình bày dưới dạng bảng markdown.

**Nội dung cần có**:

| Phiên bản | Ngày | Thay đổi | Tác giả |
| --- | --- | --- | --- |
| 1.0 | 2025-09-15 | Phiên bản đầu với phương án phát triển theo giai đoạn | Product Management Team |
| 2.0 | 2025-10-20 | Chuyển sang kiến trúc microservices, bỏ phân chia giai đoạn, thêm Service Ownership và Ads Format Management | Product Management Team, Technical Writing Team |

**Tài liệu tham khảo**:

- **Đầu vào từ**: BRD.md (Section 1), System_Feature_Tree.md (Section 1)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Ghi nhận lịch sử phiên bản và thay đổi của SRS.

**Assumptions/Constraints**:

- Assumes tất cả thay đổi được lưu trong Git repository.
- Constraint: Mọi thay đổi phải được phê duyệt bởi PM.

**Dependencies/Risks**:

- Dependencies: Part00.3_Approval_Sign_Off để xác nhận thay đổi.
- Risks: Thiếu ghi nhận thay đổi → Mitigation: Sử dụng Git commits và review hàng tháng.

**Acceptance Criteria/Testable Items**:

- Bảng Version History chứa đầy đủ cột (Phiên bản, Ngày, Thay đổi, Tác giả).
- Mỗi phiên bản có ngày và tác giả rõ ràng.

**Approval Sign-Off**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| PM | \[TBD\] | \- | \- |
| Tech Lead | \[TBD\] | \- | \- |

---

## 00.3 Approval Sign-Off

**References**: BRD.md (Section 20.1), Product-Sampling-Vision-and-Strategy Document.md (Section 7)

**Mục đích**: Cung cấp bảng phê duyệt để các stakeholder chính thức đồng ý với nội dung SRS.

**Ý nghĩa**: Đảm bảo sự đồng thuận từ các bên liên quan, tăng tính minh bạch và trách nhiệm.

**Cách làm**: Tạo bảng phê duyệt với các vai trò chính, dựa trên BRD và danh sách stakeholders.

**Nội dung cần có**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Business Owner | \[TBD\] | \- | \- |
| Product Manager | \[TBD\] | \- | \- |
| Technical Lead | \[TBD\] | \- | \- |
| QA Lead | \[TBD\] | \- | \- |
| DevOps Lead | \[TBD\] | \- | \- |
| Security Lead | \[TBD\] | \- | \- |

**Tài liệu tham khảo**:

- **Đầu vào từ**: BRD.md (Section 20.1)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Xác nhận sự phê duyệt chính thức từ stakeholders.

**Assumptions/Constraints**:

- Assumes tất cả stakeholders có mặt trong quá trình review.
- Constraint: Phê duyệt phải hoàn tất trước khi triển khai.

**Dependencies/Risks**:

- Dependencies: Part00.2_Version_History để theo dõi thay đổi trước phê duyệt.
- Risks: Chậm phê duyệt → Mitigation: Tổ chức meeting review hàng tuần.

**Acceptance Criteria/Testable Items**:

- Bảng Sign-Off chứa đầy đủ vai trò chính (PM, Tech Lead, QA, DevOps, Security).
- Ngày phê duyệt được ghi nhận chính xác.

**Approval Sign-Off**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| PM | \[TBD\] | \- | \- |
| Tech Lead | \[TBD\] | \- | \- |

---

## 00.4 Document Metadata

**References**: BRD.md (Section 24), System_Feature_Tree.md (Document Control)

**Mục đích**: Cung cấp metadata chi tiết về tài liệu SRS, bao gồm thông tin liên hệ, trạng thái, và kiểm soát phiên bản.

**Ý nghĩa**: Hỗ trợ quản lý tài liệu, đảm bảo traceability và dễ dàng truy cập thông tin liên quan.

**Cách làm**: Tổng hợp metadata từ BRD và Vision Document, trình bày dưới dạng danh sách có cấu trúc.

**Nội dung cần có**:

- **Tiêu đề**: Software Requirements Specification - PSP Platform
- **Phiên bản**: 2.0 - Microservices Architecture
- **Trạng thái**: Đã phê duyệt
- **Ngày tạo**: 2025-09-15
- **Ngày cập nhật cuối**: 2025-10-20
- **Chu kỳ review**: Hàng tháng (Next Review: 2025-11-20)
- **Distribution List**:
  - Business Owner
  - Product Manager
  - Technical Lead
  - Development Teams (Core Operations, Identity & Notification, Analytics & Intelligence)
  - QA Team
  - DevOps Team
  - Design Team
- **Kiểm soát phiên bản**:
  - Stored in: \[Git repository URL\]
  - Change tracking: Git commits
- **Liên hệ**:
  - **Document Owner**: Product Manager (pm@psp.vn)
  - **Technical Contact**: Technical Lead (techlead@psp.vn)
  - **Support**: support@psp.vn, Slack #psp-project

**Tài liệu tham khảo**:

- **Đầu vào từ**: BRD.md (Section 24), System_Feature_Tree.md (Contact Information)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Cung cấp metadata chi tiết để quản lý tài liệu SRS.

**Assumptions/Constraints**:

- Assumes Git repository được sử dụng cho version control.
- Constraint: Metadata phải được cập nhật sau mỗi review.

**Dependencies/Risks**:

- Dependencies: Part00.2_Version_History để đồng bộ phiên bản.
- Risks: Metadata không đầy đủ → Mitigation: Review metadata trong mỗi chu kỳ.

**Acceptance Criteria/Testable Items**:

- Metadata chứa đầy đủ thông tin (title, version, status, dates, contacts).
- Distribution List bao gồm tất cả stakeholders chính.

**Approval Sign-Off**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| PM | \[TBD\] | \- | \- |
| Tech Lead | \[TBD\] | \- | \- |

---

## 00.5 Glossary Of Terms

**References**: System_Feature_Tree.md (Glossary), BRD.md (Section 21), Access_Control_Tree_Grok.md (Section 1)

**Mục đích**: Cung cấp định nghĩa các thuật ngữ chính được sử dụng trong SRS để đảm bảo tính thống nhất và rõ ràng.

**Ý nghĩa**: Giảm thiểu hiểu lầm giữa các stakeholders, đặc biệt khi làm việc với kiến trúc microservices và các tính năng kỹ thuật.

**Cách làm**: Tổng hợp thuật ngữ từ System Feature Tree, BRD, và Access Control Tree, trình bày dưới dạng bảng markdown.

**Nội dung cần có**:

| Thuật Ngữ | Định Nghĩa |
| --- | --- |
| Microservices | Kiến trúc phần mềm với các service độc lập, loosely coupled, có database riêng và deployment riêng. |
| Service Mesh | Infrastructure layer (Istio) quản lý giao tiếp service-to-service, observability, và traffic control. |
| Event Bus | Message broker (RabbitMQ) cho giao tiếp bất đồng bộ giữa các services. |
| Polyglot Persistence | Sử dụng nhiều loại database khác nhau (PostgreSQL, MongoDB, Redis) cho từng service. |
| Campaign | Chương trình sampling được tạo bởi Brand Admin để phát sản phẩm mẫu. |
| Barcode | Mã unique (QR/Code128/DataMatrix) được cấp cho user để redeem sản phẩm mẫu. |
| Redemption | Hành động sử dụng barcode tại POS để nhận sản phẩm mẫu. |
| OTP | One-Time Password dùng để xác thực email/số điện thoại. |
| RBAC | Role-Based Access Control, với 6 vai trò: Platform Admin, Brand Admin, Brand Staff, Customer Account, Customer, POS Staff. |
| Fraud Score | Điểm số (0-100) do ML tạo ra, đánh giá khả năng gian lận trong redemption. |
| A/B Test | Thử nghiệm so sánh các biến thể campaign để tối ưu hiệu quả. |
| Recommendation | Gợi ý campaign được tạo bởi ML dựa trên dữ liệu khách hàng. |
| Ads Format | Template cho các tài liệu campaign (landing pages, banners, emails). |

**Tài liệu tham khảo**:

- **Đầu vào từ**: System_Feature_Tree.md (Glossary), BRD.md (Section 21), Access_Control_Tree_Grok.md (Section 1)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part01_Introduction, Part16_Appendices

**Mục đích của node này**: Định nghĩa thuật ngữ để thống nhất ngôn ngữ trong SRS.

**Assumptions/Constraints**:

- Assumes các thuật ngữ được sử dụng nhất quán trong toàn bộ tài liệu.
- Constraint: Thuật ngữ phải rõ ràng, không gây nhầm lẫn.

**Dependencies/Risks**:

- Dependencies: Part01.6_Definitions_And_Acronyms để bổ sung chi tiết.
- Risks: Thiếu thuật ngữ quan trọng → Mitigation: Review glossary bởi Tech Lead và PM.

**Acceptance Criteria/Testable Items**:

- Glossary chứa ít nhất 10 thuật ngữ chính, bao gồm định nghĩa rõ ràng.
- Tất cả thuật ngữ được tham chiếu trong các phần khác của SRS.

**Approval Sign-Off**:

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| PM | \[TBD\] | \- | \- |
| Tech Lead | \[TBD\] | \- | \- |

# Part01 - Introduction

## Structure of Part01
```
Part01_Introduction/
├── 01.1_Purpose_Of_Document.md
├── 01.2_Project_Scope.md
├── 01.3_Intended_Audience.md
├── 01.4_Product_Overview.md
├── 01.5_Stakeholders.md
├── 01.6_Definitions_And_Acronyms.md
├── 01.7_References.md
└── 01.8_Document_Conventions.md
```

---

## 01.1 Purpose Of Document

**References**: BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1), System_Feature_Tree.md (Section 2)

**Mục đích**: Xác định mục đích của tài liệu SRS, cung cấp roadmap kỹ thuật cho việc phát triển Product Sampling Platform (PSP).

**Ý nghĩa**: Đảm bảo tất cả stakeholders hiểu rõ phạm vi, yêu cầu, và mục tiêu của hệ thống, hỗ trợ quá trình phát triển và kiểm thử.

**Cách làm**: Tổng hợp từ BRD, Vision Document, và System Feature Tree, trình bày mục đích rõ ràng trong định dạng markdown.

**Nội dung cần có**:
- Tài liệu này xác định yêu cầu chức năng (FR) và phi chức năng (NFR) cho PSP, một nền tảng quản lý chiến dịch sampling sản phẩm, thu thập dữ liệu khách hàng, và tối ưu ROI.
- Hỗ trợ phát triển hệ thống với 7 microservices (Campaign Management, Identity, Redemption, Analytics, Notification, Fraud, Intelligence).
- Đảm bảo traceability từ business requirements (BRD) đến technical specifications.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part00_Document_Information, Part02_System_Overview

**Mục đích của node này**: Định nghĩa vai trò của SRS trong dự án PSP.

**Assumptions/Constraints**:
- Assumes stakeholders đã đọc BRD và Vision Document.
- Constraint: SRS phải tuân thủ GDPR/PDPA cho dữ liệu khách hàng.

**Dependencies/Risks**:
- Dependencies: Part00_Document_Information để xác định metadata.
- Risks: Phạm vi không rõ ràng → Mitigation: Review với PM và Tech Lead.

**Acceptance Criteria/Testable Items**:
- Mục đích được nêu rõ, liên kết với BRD và Vision Document.
- Nội dung dễ hiểu, không gây nhầm lẫn cho stakeholders.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.2 Project Scope

**References**: BRD.md (Section 3), Product-Sampling-Vision-and-Strategy Document.md (Section 6), System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định phạm vi dự án PSP, bao gồm các tính năng, kiến trúc, và giới hạn.

**Ý nghĩa**: Định hình ranh giới phát triển, đảm bảo đội dev tập trung vào các yêu cầu cốt lõi và tránh scope creep.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, mô tả phạm vi với danh sách tính năng và microservices.

**Nội dung cần có**:
- **Trong phạm vi**:
  - 7 microservices: Campaign Management, Identity, Redemption, Analytics, Notification, Fraud, Intelligence.
  - 14 tính năng: Campaign CRUD, Barcode Management, Authentication, User Management, OTP Verification, Ads Format Management, Redemption, Real-time Analytics, etc.
  - Tech stack: Node.js/TypeScript, PostgreSQL, MongoDB, Redis, RabbitMQ, Kubernetes, Istio.
  - Tích hợp: CRM (HubSpot, Salesforce), POS, Twilio, GA4/Meta Pixel.
- **Ngoài phạm vi**:
  - Phát triển mobile app native (chỉ hỗ trợ PWA).
  - Tích hợp với các hệ thống ERP không chuẩn.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part02_System_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Xác định ranh giới và phạm vi phát triển của PSP.

**Assumptions/Constraints**:
- Assumes sử dụng Kubernetes/AWS cho deployment.
- Constraint: Hệ thống phải hỗ trợ 100K-500K users/ngày.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa tính năng.
- Risks: Scope creep → Mitigation: Change control process (BRD Section 20.2).

**Acceptance Criteria/Testable Items**:
- Phạm vi liệt kê đầy đủ 14 tính năng và 7 microservices.
- Ngoài phạm vi được xác định rõ, không gây nhầm lẫn.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.3 Intended Audience

**References**: BRD.md (Section 24), Product-Sampling-Vision-and-Strategy Document.md (Section 7)

**Mục đích**: Xác định đối tượng sử dụng tài liệu SRS.

**Ý nghĩa**: Đảm bảo tài liệu được viết phù hợp với nhu cầu của các stakeholders, từ kỹ thuật đến kinh doanh.

**Cách làm**: Tổng hợp danh sách stakeholders từ BRD và Vision Document, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Đối tượng**:
  - Business Owner: Hiểu phạm vi và mục tiêu kinh doanh.
  - Product Manager: Quản lý yêu cầu và tiến độ.
  - Technical Lead: Hướng dẫn đội dev triển khai.
  - Development Teams (3 teams): Core Operations, Identity & Notification, Analytics & Intelligence.
  - QA Team: Xây dựng test cases từ SRS.
  - DevOps Team: Cấu hình CI/CD, Kubernetes, Istio.
  - Design Team: Thiết kế UI/UX cho User Portal, Landing Pages.
- **Cách sử dụng**:
  - Dev teams tham chiếu Part04 để triển khai tính năng.
  - QA teams sử dụng Part05 để kiểm thử.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 24), Product-Sampling-Vision-and-Strategy Document.md (Section 7)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Xác định rõ đối tượng sử dụng SRS.

**Assumptions/Constraints**:
- Assumes stakeholders có kiến thức cơ bản về microservices.
- Constraint: Tài liệu phải dễ hiểu cho cả technical và non-technical audiences.

**Dependencies/Risks**:
- Dependencies: Part00.4_Document_Metadata để xác định distribution list.
- Risks: Thiếu stakeholder chính → Mitigation: Review distribution list.

**Acceptance Criteria/Testable Items**:
- Danh sách đối tượng bao gồm tất cả stakeholders chính.
- Cách sử dụng được mô tả rõ ràng cho từng nhóm.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.4 Product Overview

**References**: BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1), System_Feature_Tree.md (Section 2)

**Mục đích**: Cung cấp cái nhìn tổng quan về sản phẩm PSP và các tính năng chính.

**Ý nghĩa**: Giúp stakeholders hiểu rõ mục tiêu và giá trị của hệ thống, làm nền tảng cho các phần yêu cầu chi tiết.

**Cách làm**: Tổng hợp từ BRD, Vision Document, và System Feature Tree, sử dụng mô tả ngắn gọn và sơ đồ Mermaid.

**Nội dung cần có**:
- **Mô tả sản phẩm**: PSP là nền tảng quản lý chiến dịch sampling sản phẩm, hỗ trợ thương hiệu FMCG thu thập dữ liệu khách hàng chất lượng cao, giảm chi phí logistics, chống gian lận, và tối ưu ROI.
- **Tính năng chính**:
  - Quản lý chiến dịch (CRUD, scheduling, Ads Format).
  - Phát hành và quản lý barcode (QR, single-use).
  - Xác thực user qua OTP (SMS, Email).
  - Theo dõi redemption (online/offline, POS integration).
  - Phân tích real-time và báo cáo nâng cao.
  - Phát hiện gian lận (ML-based).
  - A/B testing và gợi ý cá nhân hóa.
- **Kiến trúc**:
  ```mermaid
  graph TB
      subgraph External[Hệ Thống Bên Ngoài]
          Client[Web/Mobile Clients]
          CRM[CRM Systems]
          POS[POS Systems]
      end
      subgraph Infrastructure[Hạ Tầng]
          Gateway[API Gateway - Kong]
          EventBus[Event Bus - RabbitMQ]
          ServiceMesh[Service Mesh - Istio]
      end
      subgraph Services[Các Services]
          Campaign[Campaign Management]
          Identity[Identity]
          Redemption[Redemption]
          Analytics[Analytics]
          Notification[Notification]
          Fraud[Fraud]
          Intelligence[Intelligence]
      end
      Client --> Gateway
      Gateway --> Campaign
      Gateway --> Identity
      Gateway --> Redemption
      Gateway --> Analytics
      Campaign --> EventBus
      Identity --> EventBus
      Redemption --> EventBus
      EventBus --> Analytics
      EventBus --> Notification
      EventBus --> Fraud
      Notification --> CRM
      Redemption --> POS
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 1), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part02_System_Overview

**Mục đích của node này**: Giới thiệu tổng quan về PSP và kiến trúc hệ thống.

**Assumptions/Constraints**:
- Assumes sử dụng microservices với polyglot persistence.
- Constraint: Hệ thống phải đạt 99.9% uptime.

**Dependencies/Risks**:
- Dependencies: Part02_System_Overview để chi tiết hóa kiến trúc.
- Risks: Hiểu sai tính năng → Mitigation: Validate với BRD.

**Acceptance Criteria/Testable Items**:
- Mô tả sản phẩm phù hợp với BRD và Vision Document.
- Sơ đồ kiến trúc phản ánh đúng 7 microservices.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.5 Stakeholders

**References**: BRD.md (Section 24), Product-Sampling-Vision-and-Strategy Document.md (Section 7)

**Mục đích**: Liệt kê các stakeholders liên quan đến dự án PSP.

**Ý nghĩa**: Đảm bảo mọi bên liên quan được xác định, hỗ trợ giao tiếp và phê duyệt.

**Cách làm**: Tổng hợp từ BRD và Vision Document, trình bày dưới dạng bảng.

**Nội dung cần có**:
| Stakeholder | Vai trò | Trách nhiệm |
|-------------|---------|-------------|
| Business Owner | Quyết định phạm vi, ngân sách | Phê duyệt BRD, SRS |
| Product Manager | Quản lý yêu cầu, tiến độ | Điều phối giữa teams |
| Technical Lead | Giám sát triển khai kỹ thuật | Đảm bảo tính khả thi |
| Development Teams | Phát triển 7 microservices | Triển khai tính năng |
| QA Team | Kiểm thử hệ thống | Đảm bảo chất lượng |
| DevOps Team | Quản lý CI/CD, Kubernetes | Đảm bảo deployment |
| Design Team | Thiết kế UI/UX | User Portal, Landing Pages |
| Brand Admins | Sử dụng hệ thống | Tạo campaigns, quản lý data |
| POS Staff | Redeem barcode | Tương tác tại điểm bán |

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 24), Product-Sampling-Vision-and-Strategy Document.md (Section 7)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00.4_Document_Metadata

**Mục đích của node này**: Xác định các stakeholders và trách nhiệm của họ.

**Assumptions/Constraints**:
- Assumes tất cả stakeholders tham gia review SRS.
- Constraint: Phải có đại diện từ mỗi team trong quá trình phê duyệt.

**Dependencies/Risks**:
- Dependencies: Part00.3_Approval_Sign_Off để xác nhận phê duyệt.
- Risks: Thiếu stakeholder chính → Mitigation: Review distribution list.

**Acceptance Criteria/Testable Items**:
- Bảng stakeholders bao gồm tất cả vai trò chính.
- Trách nhiệm được mô tả rõ ràng, không chồng lấn.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.6 Definitions And Acronyms

**References**: System_Feature_Tree.md (Glossary), BRD.md (Section 21), Access_Control_Tree_Grok.md (Section 1)

**Mục đích**: Cung cấp danh sách định nghĩa và viết tắt để thống nhất ngôn ngữ trong SRS.

**Ý nghĩa**: Giảm thiểu hiểu nhầm giữa các stakeholders, đặc biệt với các thuật ngữ kỹ thuật.

**Cách làm**: Tổng hợp từ Glossary trong System Feature Tree và BRD, trình bày dưới dạng bảng.

**Nội dung cần có**:
| Acronym/Term | Definition |
|--------------|------------|
| PSP | Product Sampling Platform |
| Microservices | Kiến trúc với các service độc lập, loosely coupled |
| API Gateway | Layer quản lý API requests (Kong) |
| Event Bus | Message broker (RabbitMQ) cho giao tiếp bất đồng bộ |
| RBAC | Role-Based Access Control |
| OTP | One-Time Password |
| Fraud Score | Điểm số ML đánh giá gian lận |
| A/B Test | Thử nghiệm so sánh biến thể campaign |
| Ads Format | Template cho tài liệu campaign |
| PWA | Progressive Web App |

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Glossary), BRD.md (Section 21)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00.5_Glossary_Of_Terms

**Mục đích của node này**: Thống nhất các định nghĩa và viết tắt trong SRS.

**Assumptions/Constraints**:
- Assumes các thuật ngữ được sử dụng nhất quán.
- Constraint: Phải bao gồm tất cả thuật ngữ chính từ System Feature Tree.

**Dependencies/Risks**:
- Dependencies: Part00.5_Glossary_Of_Terms để đảm bảo đồng bộ.
- Risks: Thiếu acronym quan trọng → Mitigation: Review bởi Tech Lead.

**Acceptance Criteria/Testable Items**:
- Bảng chứa ít nhất 10 acronym/term chính.
- Định nghĩa rõ ràng, không gây nhầm lẫn.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.7 References

**References**: BRD.md (Section 23), System_Feature_Tree.md (Section 5)

**Mục đích**: Liệt kê các tài liệu tham khảo để hỗ trợ traceability và cung cấp nguồn tham khảo.

**Ý nghĩa**: Đảm bảo SRS được xây dựng dựa trên các tài liệu chính thức, tăng tính minh bạch.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Internal Documents**:
  - BRD.md (Version 2.0)
  - System_Feature_Tree.md (Version 2.0)
  - Access_Control_Tree_Grok.md (Version 2.2)
  - Product-Sampling-Vision-and-Strategy Document.md (Version 1.0)
- **External References**:
  - Microservices Architecture Patterns (Martin Fowler)
  - Domain-Driven Design (Eric Evans)
  - Kubernetes Documentation (kubernetes.io)
  - Istio Service Mesh Documentation (istio.io)
  - GDPR Compliance Guidelines
  - PDPA Compliance Guidelines (Vietnam)

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 23), System_Feature_Tree.md (Section 5)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Cung cấp nguồn tham khảo để hỗ trợ phát triển SRS.

**Assumptions/Constraints**:
- Assumes các tài liệu nội bộ được lưu trữ trong Git repository.
- Constraint: Tài liệu tham khảo phải liên quan trực tiếp đến PSP.

**Dependencies/Risks**:
- Dependencies: Part00_Document_Information để đồng bộ metadata.
- Risks: Thiếu tài liệu tham khảo → Mitigation: Review bởi PM.

**Acceptance Criteria/Testable Items**:
- Danh sách chứa ít nhất 4 tài liệu nội bộ và 4 tài liệu bên ngoài.
- Mỗi tài liệu có mô tả ngắn gọn về mục đích.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 01.8 Document Conventions

**References**: STANDARD_PROMT.md (Section 2, 3), SRS_STRUCTURE.md

**Mục đích**: Xác định các quy ước định dạng và ngôn ngữ được sử dụng trong SRS.

**Ý nghĩa**: Đảm bảo tính thống nhất trong cách trình bày, giúp tài liệu dễ đọc và dễ triển khai.

**Cách làm**: Dựa trên STANDARD_PROMT.md, mô tả các quy ước về naming, ngôn ngữ, và định dạng.

**Nội dung cần có**:
- **File Naming**: PartXX_Section_Name/XX.Y_Node_Name.md (e.g., 01.2_Project_Scope.md).
- **Title Format**: ## PartXX - XX.Y_Node_Name - Tiêu đề Tiếng Việt.
- **Ngôn ngữ**:
  - Keywords/technical terms: Tiếng Anh (e.g., Campaign, Microservices).
  - Explanations/descriptions: Tiếng Việt (e.g., "Quản lý chiến dịch sampling").
  - Code/examples: Tiếng Anh (e.g., JSON schemas, SQL).
- **Diagrams**: Sử dụng Mermaid cho flowcharts/ERD.
- **Tables**: Markdown tables cho schemas, metrics, acceptance criteria.
- **Traceability**: Sử dụng IDs (FR-001, NFR-001) và cross-references.
- **Best Practices**: Nội dung unambiguous, measurable, testable; chỉ định nghĩa interfaces, không chứa code cụ thể.

**Tài liệu tham khảo**:
- **Đầu vào từ**: STANDARD_PROMT.md (Section 2, 3), SRS_STRUCTURE.md
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part00_Document_Information

**Mục đích của node này**: Định nghĩa quy ước để đảm bảo tính thống nhất của SRS.

**Assumptions/Constraints**:
- Assumes dev teams quen thuộc với markdown và Mermaid.
- Constraint: Phải tuân thủ cấu trúc trong SRS_STRUCTURE.md.

**Dependencies/Risks**:
- Dependencies: Part00_Document_Information để đồng bộ metadata.
- Risks: Quy ước không thống nhất → Mitigation: Review bởi Technical Writer.

**Acceptance Criteria/Testable Items**:
- Quy ước bao gồm naming, ngôn ngữ, và định dạng.
- Tất cả node trong SRS tuân thủ quy ước này.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part02 - System Overview

## Structure of Part02
```
Part02_System_Overview/
├── 02.1_System_Context.md
├── 02.2_System_Objectives.md
├── 02.3_System_Constraints.md
├── 02.4_Assumptions_And_Dependencies.md
├── 02.5_Success_Criteria.md
├── 02.6_Out_Of_Scope.md
├── 02.7_Business_Requirements_Summary.md
├── 02.8_Technical_Requirements_Summary.md
├── 02.9_Microservices_Architecture_Overview.md
└── 02.10_Risk_Assessment.md
```

---

## 02.1 System Context

**References**: System_Feature_Tree.md (Section 3), BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1)

**Mục đích**: Mô tả bối cảnh hệ thống PSP và các tương tác với các thành phần bên ngoài.

**Ý nghĩa**: Cung cấp cái nhìn tổng quan về cách PSP tương tác với users, hệ thống bên ngoài, và các service nội bộ, hỗ trợ thiết kế và tích hợp.

**Cách làm**: Tổng hợp từ System Feature Tree và BRD, sử dụng sơ đồ Mermaid để minh họa.

**Nội dung cần có**:
- **Bối cảnh**: PSP là nền tảng quản lý chiến dịch sampling sản phẩm, tích hợp với Web/Mobile Clients, CRM, POS, SMS/Email providers, hỗ trợ thu thập dữ liệu khách hàng và tối ưu ROI.
- **Tương tác bên ngoài**:
  - Web/Mobile Clients: User Portal (PWA) để khách hàng truy cập barcode, điền form, nhận thông báo.
  - CRM Systems: HubSpot, Salesforce để đồng bộ dữ liệu khách hàng.
  - POS Systems: Tích hợp để scan/redeem barcode.
  - SMS/Email Providers: Twilio cho OTP và thông báo.
- **Sơ đồ hệ thống**:
  ```mermaid
  graph TB
      subgraph External[Hệ Thống Bên Ngoài]
          Client[Web/Mobile Clients]
          CRM[CRM Systems]
          SMS[SMS Provider]
          Email[Email Provider]
          POS[POS Systems]
      end
      subgraph PSP_System[Hệ Thống PSP]
          Gateway[API Gateway - Kong]
          EventBus[Event Bus - RabbitMQ]
          ServiceMesh[Service Mesh - Istio]
          Campaign[Campaign Management]
          Identity[Identity]
          Redemption[Redemption]
          Analytics[Analytics]
          Notification[Notification]
          Fraud[Fraud]
          Intelligence[Intelligence]
      end
      Client --> Gateway
      Gateway --> Campaign
      Gateway --> Identity
      Gateway --> Redemption
      Gateway --> Analytics
      Campaign --> EventBus
      Identity --> EventBus
      Redemption --> EventBus
      EventBus --> Analytics
      EventBus --> Notification
      EventBus --> Fraud
      Notification --> SMS
      Notification --> Email
      Analytics --> CRM
      Redemption --> POS
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Section 3), BRD.md (Section 1)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part01.4_Product_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả bối cảnh và tương tác của hệ thống PSP.

**Assumptions/Constraints**:
- Assumes tích hợp với CRM/POS qua API chuẩn.
- Constraint: Phải hỗ trợ đa kênh (online/offline).

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa tính năng.
- Risks: Tích hợp bên ngoài thất bại → Mitigation: API contracts và mock testing.

**Acceptance Criteria/Testable Items**:
- Sơ đồ hệ thống phản ánh đúng 7 microservices và các tương tác bên ngoài.
- Tất cả thành phần bên ngoài được liệt kê đầy đủ.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.2 System Objectives

**References**: BRD.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 2)

**Mục đích**: Xác định các mục tiêu chính của hệ thống PSP.

**Ý nghĩa**: Định hướng phát triển, đảm bảo hệ thống đáp ứng nhu cầu kinh doanh và kỹ thuật.

**Cách làm**: Tổng hợp mục tiêu từ BRD và Vision Document, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Mục tiêu kinh doanh**:
  - Digitalize campaign management, giảm thời gian setup từ 2-3 tuần xuống 2-3 ngày.
  - Tăng redemption rate từ 40% lên 70%+.
  - Giảm fraud rate từ 15% xuống dưới 5% với ML-based detection.
  - Đồng bộ dữ liệu khách hàng với CRM, đạt 95%+ data accuracy.
- **Mục tiêu kỹ thuật**:
  - Xây dựng 7 microservices độc lập, deploy trên Kubernetes.
  - Đạt 99.9% uptime cho mỗi service.
  - Đảm bảo API response time < 200ms (95th percentile).
  - Hỗ trợ 100K-500K users/ngày.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 2)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (Section 4)
- **Kết nối với**: Part02.5_Success_Criteria

**Mục đích của node này**: Xác định mục tiêu kinh doanh và kỹ thuật của PSP.

**Assumptions/Constraints**:
- Assumes dữ liệu khách hàng tuân thủ GDPR/PDPA.
- Constraint: Hệ thống phải xử lý 10K campaigns đồng thời.

**Dependencies/Risks**:
- Dependencies: Part02.5_Success_Criteria để đo lường mục tiêu.
- Risks: Không đạt KPI → Mitigation: Load testing và optimization.

**Acceptance Criteria/Testable Items**:
- Mục tiêu được liệt kê đầy đủ, liên kết với BRD.
- Mỗi mục tiêu có KPI đo lường được.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.3 System Constraints

**References**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định các ràng buộc của hệ thống PSP.

**Ý nghĩa**: Đảm bảo đội dev hiểu các giới hạn kỹ thuật, pháp lý, và kinh doanh khi triển khai.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Ràng buộc kỹ thuật**:
  - Phải sử dụng Node.js/TypeScript, PostgreSQL, MongoDB, Redis.
  - Deployment trên Kubernetes/AWS với service mesh (Istio).
  - API response time < 200ms.
- **Ràng buộc pháp lý**:
  - Tuân thủ GDPR/PDPA cho dữ liệu khách hàng.
  - PII phải được mã hóa (AES).
- **Ràng buộc kinh doanh**:
  - Hỗ trợ 100K-500K users/ngày.
  - Chi phí per verified user < 0.4 USD.
- **Ràng buộc thời gian**: Hoàn thành trong 6-9 tháng.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part02.4_Assumptions_And_Dependencies

**Mục đích của node này**: Liệt kê các ràng buộc ảnh hưởng đến phát triển.

**Assumptions/Constraints**:
- Assumes AWS là cloud provider chính.
- Constraint: Không hỗ trợ mobile app native.

**Dependencies/Risks**:
- Dependencies: Part02.4_Assumptions_And_Dependencies để bổ sung chi tiết.
- Risks: Ràng buộc pháp lý phức tạp → Mitigation: Tư vấn GDPR/PDPA.

**Acceptance Criteria/Testable Items**:
- Tất cả ràng buộc được liệt kê rõ ràng.
- Ràng buộc có thể kiểm chứng qua test cases.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.4 Assumptions And Dependencies

**References**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định các giả định và phụ thuộc của hệ thống PSP.

**Ý nghĩa**: Giúp đội dev hiểu các điều kiện tiên quyết và mối liên hệ với các hệ thống khác.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Giả định**:
  - Các thương hiệu sử dụng CRM (HubSpot, Salesforce) có API chuẩn.
  - POS systems hỗ trợ tích hợp qua API/webhook.
  - Users có thiết bị hỗ trợ PWA (browser hiện đại).
- **Phụ thuộc**:
  - Campaign Management phụ thuộc Identity Service cho user authentication.
  - Redemption Service phụ thuộc POS integration.
  - Notification Service phụ thuộc Twilio cho SMS/Email.
  - Analytics Service phụ thuộc MongoDB và RabbitMQ.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (Section 3)
- **Kết nối với**: Part02.3_System_Constraints

**Mục đích của node này**: Xác định giả định và phụ thuộc để giảm rủi ro triển khai.

**Assumptions/Constraints**:
- Assumes Twilio API ổn định.
- Constraint: Phụ thuộc bên ngoài phải được test trước.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa service dependencies.
- Risks: Tích hợp bên ngoài thất bại → Mitigation: Mock APIs và integration testing.

**Acceptance Criteria/Testable Items**:
- Tất cả giả định và phụ thuộc được liệt kê.
- Phụ thuộc có thể kiểm chứng qua integration tests.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.5 Success Criteria

**References**: BRD.md (Section 2.2), System_Feature_Tree.md (Section 4), Product-Sampling-Vision-and-Strategy Document.md (Section 8)

**Mục đích**: Xác định các tiêu chí thành công để đánh giá hiệu quả của hệ thống PSP.

**Ý nghĩa**: Đảm bảo hệ thống đáp ứng KPI kinh doanh và kỹ thuật, hỗ trợ đo lường tiến độ.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng bảng.

**Nội dung cần có**:
| Loại | Tiêu chí | Mục tiêu |
|------|----------|----------|
| System | Uptime per service | 99.9% |
| System | API response time (95th percentile) | < 200ms |
| System | Zero downtime deployments | Blue-green deployment |
| Business | Users/ngày | 100K-500K |
| Business | Concurrent active campaigns | 10K |
| Business | Barcode tracking accuracy | 95%+ |
| Business | Dashboard load time | < 2s |
| Business | User satisfaction (NPS) | > 50 |
| Advanced | Fraud detection false positive rate | < 5% |
| Advanced | A/B testing statistical confidence | 95%+ |
| Advanced | Recommendation CTR | > 10% |

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 2.2), System_Feature_Tree.md (Section 4)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (Section 4)
- **Kết nối với**: Part02.2_System_Objectives

**Mục đích của node này**: Định nghĩa KPI để đo lường thành công của PSP.

**Assumptions/Constraints**:
- Assumes dữ liệu đo lường được thu thập qua Prometheus/Grafana.
- Constraint: KPI phải đạt trong môi trường production.

**Dependencies/Risks**:
- Dependencies: Part15_Operations_And_Monitoring để thiết lập đo lường.
- Risks: Không đạt KPI → Mitigation: Load testing và tuning.

**Acceptance Criteria/Testable Items**:
- Tất cả KPI được liệt kê với mục tiêu đo lường được.
- KPI liên kết với BRD và System Feature Tree.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.6 Out Of Scope

**References**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định các hạng mục không nằm trong phạm vi phát triển của PSP.

**Ý nghĩa**: Ngăn chặn scope creep, giúp đội dev tập trung vào các yêu cầu cốt lõi.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- Phát triển mobile app native (chỉ hỗ trợ PWA).
- Tích hợp với ERP không chuẩn.
- Hỗ trợ ngôn ngữ ngoài tiếng Anh và tiếng Việt.
- Xây dựng AI chatbot cho User Portal.
- Tích hợp với hệ thống thanh toán.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part01.2_Project_Scope

**Mục đích của node này**: Làm rõ các hạng mục ngoài phạm vi.

**Assumptions/Constraints**:
- Assumes stakeholders đồng ý với phạm vi đã định.
- Constraint: Không mở rộng scope trong 6-9 tháng.

**Dependencies/Risks**:
- Dependencies: Part01.2_Project_Scope để đồng bộ phạm vi.
- Risks: Yêu cầu mở rộng scope → Mitigation: Change control process.

**Acceptance Criteria/Testable Items**:
- Danh sách ngoài phạm vi rõ ràng, không mâu thuẫn với trong phạm vi.
- Stakeholders đồng ý với danh sách này.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.7 Business Requirements Summary

**References**: BRD.md (Section 1, 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1, 2)

**Mục đích**: Tóm tắt các yêu cầu kinh doanh chính của PSP.

**Ý nghĩa**: Cung cấp cái nhìn tổng quan về mục tiêu kinh doanh, hỗ trợ đội dev hiểu giá trị của hệ thống.

**Cách làm**: Tổng hợp từ BRD và Vision Document, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- Centralized campaign management để thay thế Excel/email.
- Real-time analytics để theo dõi hiệu quả campaign.
- ML-based fraud detection để giảm fraud rate < 5%.
- Seamless CRM integration (HubSpot, Salesforce).
- Offline-first redemption với POS integration.
- A/B testing và personalized recommendations để tối ưu ROI.

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 1, 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1, 2)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part04_Functional_Requirements

**Mục đích của node này**: Tóm tắt yêu cầu kinh doanh từ BRD.

**Assumptions/Constraints**:
- Assumes brands cần dữ liệu khách hàng chất lượng cao.
- Constraint: Hệ thống phải hỗ trợ 10K campaigns đồng thời.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa.
- Risks: Yêu cầu kinh doanh thay đổi → Mitigation: Change control process.

**Acceptance Criteria/Testable Items**:
- Tóm tắt bao gồm tất cả yêu cầu kinh doanh chính từ BRD.
- Yêu cầu có thể truy xuất đến System Feature Tree.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.8 Technical Requirements Summary

**References**: System_Feature_Tree.md (Section 3), BRD.md (Section 3)

**Mục đích**: Tóm tắt các yêu cầu kỹ thuật chính của PSP.

**Ý nghĩa**: Định hướng triển khai kỹ thuật, đảm bảo đội dev hiểu các yêu cầu về kiến trúc và hiệu năng.

**Cách làm**: Tổng hợp từ System Feature Tree và BRD, trình bày dưới dạng danh sách.

**Nội dung cần có**:
- **Kiến trúc**: 7 microservices, polyglot persistence (PostgreSQL, MongoDB, Redis).
- **Tech stack**: Node.js/TypeScript, Express/NestJS, RabbitMQ, Kubernetes, Istio.
- **Hiệu năng**: 99.9% uptime, API response time < 200ms, hỗ trợ 100K-500K users/ngày.
- **Bảo mật**: PII mã hóa (AES), tuân thủ GDPR/PDPA.
- **Tích hợp**: CRM, POS, Twilio, GA4/Meta Pixel.

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Section 3), BRD.md (Section 3)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (Section 3)
- **Kết nối với**: Part02.9_Microservices_Architecture_Overview

**Mục đích của node này**: Tóm tắt yêu cầu kỹ thuật để định hướng triển khai.

**Assumptions/Constraints**:
- Assumes sử dụng AWS và Kubernetes.
- Constraint: Hệ thống phải đạt 99.9% uptime.

**Dependencies/Risks**:
- Dependencies: Part02.9_Microservices_Architecture_Overview để chi tiết hóa kiến trúc.
- Risks: Không đạt hiệu năng → Mitigation: Performance testing.

**Acceptance Criteria/Testable Items**:
- Tóm tắt bao gồm tất cả yêu cầu kỹ thuật chính.
- Yêu cầu có thể kiểm chứng qua test cases.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.9 Microservices Architecture Overview

**References**: System_Feature_Tree.md (Section 3), BRD.md (Section 3)

**Mục đích**: Cung cấp cái nhìn tổng quan về kiến trúc microservices của PSP.

**Ý nghĩa**: Đảm bảo đội dev hiểu cấu trúc hệ thống, cách các service tương tác, và chiến lược deployment.

**Cách làm**: Tổng hợp từ System Feature Tree, sử dụng sơ đồ Mermaid và bảng danh mục services.

**Nội dung cần có**:
- **Kiến trúc**: 7 microservices độc lập (Campaign Management, Identity, Redemption, Analytics, Notification, Fraud, Intelligence).
- **Giao tiếp**: Event-driven qua RabbitMQ, API Gateway (Kong), Service Mesh (Istio).
- **Database**: Polyglot persistence (PostgreSQL, MongoDB, Redis).
- **Danh mục services**:
  | Service | Repository | Database | Trách nhiệm |
  |---------|------------|----------|-------------|
  | Campaign Management | psp-campaign-service | PostgreSQL (campaigns_db) | Quản lý campaigns, barcodes, ads formats |
  | Identity | psp-identity-service | PostgreSQL (identity_db) | Authentication, user management, consent |
  | Redemption | psp-redemption-service | PostgreSQL (redemptions_db) | Theo dõi barcode redemptions |
  | Analytics | psp-analytics-service | MongoDB (analytics_db) | Real-time metrics, advanced reporting |
  | Notification | psp-notification-service | Redis (queue) | Thông báo đa kênh, OTP, CRM sync |
  | Fraud | psp-fraud-service | PostgreSQL (fraud_db) | Phát hiện và ngăn chặn gian lận |
  | Intelligence | psp-intelligence-service | PostgreSQL + MongoDB | A/B testing, recommendations |
- **Sơ đồ**:
  ```mermaid
  graph TB
      subgraph Services[Các Services]
          Campaign[Campaign Management]
          Identity[Identity]
          Redemption[Redemption]
          Analytics[Analytics]
          Notification[Notification]
          Fraud[Fraud]
          Intelligence[Intelligence]
      end
      Campaign -->|Events| Notification
      Campaign -->|Events| Analytics
      Identity -->|Events| Notification
      Redemption -->|Events| Analytics
      Redemption -->|Events| Fraud
      Analytics -->|Data| Intelligence
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Section 3), BRD.md (Section 3)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (Section 3)
- **Kết nối với**: Part14_Deployment_And_Infrastructure

**Mục đích của node này**: Mô tả kiến trúc microservices và cách các service tương tác.

**Assumptions/Constraints**:
- Assumes mỗi service có CI/CD riêng.
- Constraint: Service-to-service latency < 50ms.

**Dependencies/Risks**:
- Dependencies: Part14_Deployment_And_Infrastructure để chi tiết hóa deployment.
- Risks: Service communication thất bại → Mitigation: Service Mesh và retry mechanisms.

**Acceptance Criteria/Testable Items**:
- Sơ đồ và bảng phản ánh đúng 7 microservices.
- Mô tả giao tiếp và database rõ ràng.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 02.10 Risk Assessment

**References**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định các rủi ro tiềm ẩn và biện pháp giảm thiểu khi phát triển PSP.

**Ý nghĩa**: Giúp đội dev chuẩn bị cho các vấn đề tiềm năng, đảm bảo dự án đúng tiến độ.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, trình bày dưới dạng bảng.

**Nội dung cần có**:
| Rủi ro | Mức độ | Biện pháp giảm thiểu |
|--------|--------|----------------------|
| Tích hợp CRM/POS thất bại | Cao | Mock APIs, integration testing |
| Không đạt KPI hiệu năng | Cao | Load testing, performance tuning |
| Vi phạm GDPR/PDPA | Cao | Tư vấn pháp lý, audit trails |
| Scope creep | Trung bình | Change control process |
| Service-to-service latency cao | Trung bình | Service Mesh, retry mechanisms |
| Fraud detection không chính xác | Trung bình | ML model validation, A/B testing |

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 3), System_Feature_Tree.md (Section 3)
- **Thể hiện yêu cầu**: N/A
- **Kết nối với**: Part15_Operations_And_Monitoring

**Mục đích của node này**: Đánh giá rủi ro và đề xuất biện pháp giảm thiểu.

**Assumptions/Constraints**:
- Assumes đội dev có kinh nghiệm với microservices.
- Constraint: Rủi ro phải được review hàng tháng.

**Dependencies/Risks**:
- Dependencies: Part15_Operations_And_Monitoring để theo dõi rủi ro.
- Risks: Thiếu biện pháp giảm thiểu → Mitigation: Review với Tech Lead.

**Acceptance Criteria/Testable Items**:
- Bảng rủi ro liệt kê ít nhất 5 rủi ro chính.
- Mỗi rủi ro có biện pháp giảm thiểu cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part03 - User Personas And Use Cases

## Structure of Part03
```
Part03_User_Personas_And_Use_Cases/
├── 03.1_User_Personas_Overview.md
├── 03.2_Persona_1_Platform_Admin.md
├── 03.3_Persona_2_Brand_Admin.md
├── 03.4_Persona_3_Brand_Staff.md
├── 03.5_Persona_4_Customer_Account.md
├── 03.6_Persona_5_Customer.md
├── 03.7_Persona_6_POS_Staff.md
└── 03.8_User_Journey_Maps.md
```

---

## 03.1 User Personas Overview

**References**: Access_Control_Tree_Grok.md (Section 1), BRD.md (Section 1), System_Feature_Tree.md (Section 3)

**Mục đích**: Cung cấp cái nhìn tổng quan về các personas sử dụng hệ thống PSP và vai trò của họ.

**Ý nghĩa**: Đảm bảo yêu cầu hệ thống được thiết kế dựa trên nhu cầu thực tế của người dùng, hỗ trợ phát triển user-centric.

**Cách làm**: Tổng hợp từ Access Control Tree và BRD, trình bày dưới dạng bảng tóm tắt các personas.

**Nội dung cần có**:
- **Tổng quan**: Hệ thống PSP phục vụ 6 personas chính, mỗi người có vai trò và nhu cầu riêng trong việc quản lý, sử dụng, hoặc giám sát các chiến dịch sampling sản phẩm.
- **Danh sách personas**:
  | Persona | Vai trò | Mô tả ngắn |
  |---------|---------|------------|
  | Platform Admin | Quản trị toàn hệ thống | Quản lý tất cả module, API, tích hợp, và user permissions |
  | Brand Admin | Quản lý nhóm thương hiệu | Tạo/sửa campaign, barcode, ads format trong phạm vi group |
  | Brand Staff | Nhân viên thương hiệu | Hỗ trợ vận hành campaign, xem báo cáo cơ bản |
  | Customer Account | Đại diện thương hiệu | Quản lý campaign riêng, xuất dữ liệu khách hàng |
  | Customer | Khách hàng cuối | Điền form, nhận barcode, redeem sản phẩm qua User Portal |
  | POS Staff | Nhân viên điểm bán | Scan/redeem barcode, xem ticket liên quan |

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 1), BRD.md (Section 1)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part03.2–03.7 (Persona-specific files), Part04_Functional_Requirements

**Mục đích của node này**: Tóm tắt các personas và vai trò của họ trong hệ thống PSP.

**Assumptions/Constraints**:
- Assumes mỗi persona có quyền truy cập phù hợp với RBAC.
- Constraint: Hệ thống phải hỗ trợ đa ngôn ngữ (Anh/Việt) cho User Portal.

**Dependencies/Risks**:
- Dependencies: Part03.2–03.7 để chi tiết hóa personas.
- Risks: Thiếu nhu cầu của persona → Mitigation: Review với stakeholders.

**Acceptance Criteria/Testable Items**:
- Bảng personas liệt kê đầy đủ 6 vai trò chính.
- Mô tả ngắn gọn, liên kết với Access Control Tree.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.2 Persona 1 Platform Admin

**References**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 3), System_Feature_Tree.md (Section 3)

**Mục đích**: Mô tả chi tiết persona Platform Admin và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo các tính năng quản trị được thiết kế phù hợp với nhu cầu của admin toàn hệ thống.

**Cách làm**: Tổng hợp từ Access Control Tree, liệt kê trách nhiệm và use cases chính.

**Nội dung cần có**:
- **Mô tả**: Platform Admin là người quản trị toàn bộ hệ thống PSP, chịu trách nhiệm cấu hình, tích hợp, và quản lý user permissions.
- **Nhu cầu**:
  - Tạo/sửa/xóa campaigns, barcodes, ads formats (global).
  - Cài đặt API/webhook cho CRM, POS, Twilio.
  - Quản lý user roles và permissions (RBAC).
  - Xem và xuất báo cáo toàn hệ thống.
  - Config User Portal (notifications, FAQ, tickets).
- **Use cases**:
  - UC-001: Cấu hình API Gateway và Service Mesh.
  - UC-002: Import barcode batch qua CSV.
  - UC-003: Quản lý ticket từ User Portal.
  - UC-004: Xem logs và báo cáo compliance (GDPR/PDPA).

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 3)
- **Thể hiện yêu cầu**: FR-001 (Campaign Management), FR-003 (Authentication)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của Platform Admin.

**Assumptions/Constraints**:
- Assumes Platform Admin có kiến thức về microservices và DevOps.
- Constraint: Phải đảm bảo zero unauthorized access.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: Quyền admin quá rộng → Mitigation: RBAC và audit trails.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.3 Persona 2 Brand Admin

**References**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1), System_Feature_Tree.md (Section 3)

**Mục đích**: Mô tả chi tiết persona Brand Admin và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo các tính năng quản lý nhóm thương hiệu đáp ứng nhu cầu vận hành campaign.

**Cách làm**: Tổng hợp từ Access Control Tree, liệt kê trách nhiệm và use cases.

**Nội dung cần có**:
- **Mô tả**: Brand Admin quản lý campaigns, barcodes, và ads formats trong phạm vi group, không có quyền xóa global resources.
- **Nhu cầu**:
  - Tạo/sửa campaigns trong group.
  - Gán barcode pools, locations, ads formats.
  - Xem báo cáo hiệu quả campaign trong group.
  - Quản lý users trong group (tạo/sửa roles).
- **Use cases**:
  - UC-005: Tạo campaign mới với ads format.
  - UC-006: Import barcode cho group.
  - UC-007: Xem analytics dashboard của group.
  - UC-008: Preview Landing Page trước khi publish.

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1)
- **Thể hiện yêu cầu**: FR-001 (Campaign Management), FR-002 (Barcode Management)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của Brand Admin.

**Assumptions/Constraints**:
- Assumes Brand Admin có quyền giới hạn trong group.
- Constraint: Không cho phép xóa global resources.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: Quyền group không rõ ràng → Mitigation: RBAC chi tiết.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.4 Persona 3 Brand Staff

**References**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1)

**Mục đích**: Mô tả chi tiết persona Brand Staff và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo tính năng hỗ trợ vận hành campaign phù hợp với nhân viên thương hiệu.

**Cách làm**: Tổng hợp từ Access Control Tree, liệt kê trách nhiệm và use cases.

**Nội dung cần có**:
- **Mô tả**: Brand Staff hỗ trợ vận hành campaigns trong group, tập trung vào các tác vụ thực thi và báo cáo cơ bản.
- **Nhu cầu**:
  - Xem trạng thái campaigns và barcodes trong group.
  - Hỗ trợ import barcode và redeem logs.
  - Xem báo cáo cơ bản (funnel metrics).
- **Use cases**:
  - UC-009: Xem trạng thái barcode trong group.
  - UC-010: Import redeem logs cho campaign.
  - UC-011: Xem báo cáo hiệu quả campaign.

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1)
- **Thể hiện yêu cầu**: FR-002 (Barcode Management), FR-007 (Analytics)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của Brand Staff.

**Assumptions/Constraints**:
- Assumes Brand Staff chỉ có quyền view/edit trong group.
- Constraint: Không có quyền tạo/sửa campaign.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: Quyền hạn không đủ → Mitigation: RBAC chi tiết.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.5 Persona 4 Customer Account

**References**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1), System_Feature_Tree.md (Section 3)

**Mục đích**: Mô tả chi tiết persona Customer Account và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo tính năng quản lý campaign riêng đáp ứng nhu cầu của đại diện thương hiệu.

**Cách làm**: Tổng hợp từ Access Control Tree, liệt kê trách nhiệm và use cases.

**Nội dung cần có**:
- **Mô tả**: Customer Account là đại diện thương hiệu, quản lý campaigns riêng, tập trung vào dữ liệu khách hàng và hiệu quả campaign.
- **Nhu cầu**:
  - Tạo/sửa campaign riêng.
  - Gán barcode, locations, ads formats cho campaign.
  - Xem và xuất dữ liệu khách hàng (CSV/API).
  - Preview Landing Page và ads formats.
- **Use cases**:
  - UC-012: Tạo campaign mới với barcode pool.
  - UC-013: Xuất dữ liệu khách hàng qua CSV.
  - UC-014: Preview Landing Page trước khi publish.
  - UC-015: Xem redemption stats của campaign.

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 1)
- **Thể hiện yêu cầu**: FR-001 (Campaign Management), FR-007 (Analytics)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của Customer Account.

**Assumptions/Constraints**:
- Assumes Customer Account chỉ quản lý campaign riêng.
- Constraint: Không có quyền sửa global resources.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: Dữ liệu khách hàng không chính xác → Mitigation: Data validation.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.6 Persona 5 Customer

**References**: Access_Control_Tree_Grok.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1)

**Mục đích**: Mô tả chi tiết persona Customer và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo User Portal và các tính năng khách hàng cuối được thiết kế thân thiện và hiệu quả.

**Cách làm**: Tổng hợp từ Access Control Tree và Vision Document, liệt kê trách nhiệm và use cases.

**Nội dung cần có**:
- **Mô tả**: Customer là khách hàng cuối, sử dụng User Portal (PWA) để điền form, nhận barcode, và redeem sản phẩm mẫu.
- **Nhu cầu**:
  - Điền form (tên, email, SĐT, opt-in).
  - Nhận và xem barcode qua User Portal.
  - Redeem barcode tại POS hoặc online.
  - Nhận thông báo (SMS/Email/PWA).
  - Gửi ticket hỗ trợ và withdraw consent.
- **Use cases**:
  - UC-016: Điền form để nhận barcode.
  - UC-017: Xem trạng thái barcode trong User Portal.
  - UC-018: Redeem barcode tại POS.
  - UC-019: Gửi ticket hỗ trợ qua User Portal.

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1)
- **Thể hiện yêu cầu**: FR-005 (OTP Verification), FR-006 (Redemption)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của Customer.

**Assumptions/Constraints**:
- Assumes Customer sử dụng thiết bị hỗ trợ PWA.
- Constraint: Form completion phải đạt >90%.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: User engagement thấp → Mitigation: UX optimization.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.7 Persona 6 POS Staff

**References**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 3)

**Mục đích**: Mô tả chi tiết persona POS Staff và nhu cầu sử dụng hệ thống.

**Ý nghĩa**: Đảm bảo tính năng redemption tại POS được thiết kế phù hợp với nhân viên điểm bán.

**Cách làm**: Tổng hợp từ Access Control Tree, liệt kê trách nhiệm và use cases.

**Nội dung cần có**:
- **Mô tả**: POS Staff sử dụng Redeem Tool (web/app) để scan barcode và cập nhật trạng thái redemption.
- **Nhu cầu**:
  - Scan barcode qua Redeem Tool.
  - Cập nhật trạng thái redemption (Đã redeem).
  - Xem ticket liên quan đến redemption.
- **Use cases**:
  - UC-020: Scan barcode tại POS.
  - UC-021: Cập nhật trạng thái redemption.
  - UC-022: Xem ticket hỗ trợ liên quan.

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), BRD.md (Section 3)
- **Thể hiện yêu cầu**: FR-006 (Redemption)
- **Kết nối với**: Part03.1_User_Personas_Overview, Part04_Functional_Requirements

**Mục đích của node này**: Mô tả chi tiết vai trò và use cases của POS Staff.

**Assumptions/Constraints**:
- Assumes POS Staff sử dụng thiết bị hỗ trợ Scandit SDK.
- Constraint: Redemption success phải đạt >98%.

**Dependencies/Risks**:
- Dependencies: Part04_Functional_Requirements để chi tiết hóa use cases.
- Risks: Lỗi scan barcode → Mitigation: Offline sync và retry.

**Acceptance Criteria/Testable Items**:
- Mô tả bao gồm tất cả trách nhiệm chính từ Access Control Tree.
- Use cases liên kết với FRs cụ thể.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 03.8 User Journey Maps

**References**: Access_Control_Tree_Grok.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1), System_Feature_Tree.md (Section 3)

**Mục đích**: Mô tả hành trình người dùng cho các personas chính để minh họa cách họ tương tác với hệ thống.

**Ý nghĩa**: Giúp đội dev và design hiểu trải nghiệm người dùng, tối ưu hóa UX và tính năng.

**Cách làm**: Tổng hợp từ Access Control Tree và Vision Document, sử dụng Mermaid flowcharts để mô tả hành trình.

**Nội dung cần có**:
- **Hành trình Platform Admin**:
  ```mermaid
  graph TD
      A[Login] --> B[Config API Gateway]
      B --> C[Create Campaign]
      C --> D[Assign Barcode Pool]
      D --> E[View System Reports]
      E --> F[Manage User Permissions]
  ```
- **Hành trình Brand Admin**:
  ```mermaid
  graph TD
      A[Login] --> B[Create Group Campaign]
      B --> C[Upload Ads Format]
      C --> D[Assign Barcode]
      D --> E[Preview Landing Page]
      E --> F[View Group Analytics]
  ```
- **Hành trình Customer**:
  ```mermaid
  graph TD
      A[Access User Portal] --> B[Fill Form]
      B --> C[Receive OTP]
      C --> D[Get Barcode]
      D --> E[Redeem at POS]
      E --> F[View Redemption Status]
      F --> G[Submit Support Ticket]
  ```
- **Hành trình POS Staff**:
  ```mermaid
  graph TD
      A[Login Redeem Tool] --> B[Scan Barcode]
      B --> C[Update Redemption Status]
      C --> D[View Related Tickets]
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: Access_Control_Tree_Grok.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1)
- **Thể hiện yêu cầu**: FR-001, FR-002, FR-005, FR-006
- **Kết nối với**: Part03.1_User_Personas_Overview, Part10_UI_UX_Design

**Mục đích của node này**: Minh họa hành trình người dùng cho các personas chính.

**Assumptions/Constraints**:
- Assumes hành trình phản ánh đúng use cases từ Access Control Tree.
- Constraint: Hành trình phải tối ưu cho UX (form completion >90%).

**Dependencies/Risks**:
- Dependencies: Part10_UI_UX_Design để thiết kế giao diện.
- Risks: Hành trình phức tạp → Mitigation: UX testing.

**Acceptance Criteria/Testable Items**:
- Mỗi persona chính có hành trình được mô tả bằng flowchart.
- Hành trình liên kết với use cases và FRs.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part04 - Functional Requirements

## Structure of Part04
```
Part04_Functional_Requirements/
├── 04.1_Overview.md
├── 04.2_Core_Features/
│   ├── 04.2.1_FR-001_Campaign_Management/
│   │   ├── 04.2.1.1_Overview.md
│   │   ├── 04.2.1.2_User_Stories.md
│   │   ├── 04.2.1.3_Functional_Specifications.md
│   │   ├── 04.2.1.4_Business_Rules.md
│   │   ├── 04.2.1.5_Service_Ownership.md
│   │   └── 04.2.1.6_Acceptance_Criteria.md
│   ├── 04.2.2_FR-002_Barcode_Management/
│   │   ├── 04.2.2.1_Overview.md
│   │   ├── 04.2.2.2_User_Stories.md
│   │   ├── 04.2.2.3_Functional_Specifications.md
│   │   ├── 04.2.2.4_Business_Rules.md
│   │   ├── 04.2.2.5_Service_Ownership.md
│   │   └── 04.2.2.6_Acceptance_Criteria.md
│   ├── 04.2.3_FR-003_User_Authentication/
│   │   ├── 04.2.3.1_Overview.md
│   │   ├── 04.2.3.2_User_Stories.md
│   │   ├── 04.2.3.3_Functional_Specifications.md
│   │   ├── 04.2.3.4_Business_Rules.md
│   │   ├── 04.2.3.5_Service_Ownership.md
│   │   └── 04.2.3.6_Acceptance_Criteria.md
│   ├── 04.2.4_FR-004_User_Management/
│   │   ├── 04.2.4.1_Overview.md
│   │   ├── 04.2.4.2_User_Stories.md
│   │   ├── 04.2.4.3_Functional_Specifications.md
│   │   ├── 04.2.4.4_Business_Rules.md
│   │   ├── 04.2.4.5_Service_Ownership.md
│   │   └── 04.2.4.6_Acceptance_Criteria.md
│   ├── 04.2.5_FR-005_OTP_Verification/
│   │   ├── 04.2.5.1_Overview.md
│   │   ├── 04.2.5.2_User_Stories.md
│   │   ├── 04.2.5.3_Functional_Specifications.md
│   │   ├── 04.2.5.4_Business_Rules.md
│   │   ├── 04.2.5.5_Service_Ownership.md
│   │   └── 04.2.5.6_Acceptance_Criteria.md
│   ├── 04.2.6_FR-006_Ads_Format_Management/
│   │   ├── 04.2.6.1_Overview.md
│   │   ├── 04.2.6.2_User_Stories.md
│   │   ├── 04.2.6.3_Template_Management.md
│   │   ├── 04.2.6.4_Asset_Management.md
│   │   ├── 04.2.6.5_Service_Ownership.md
│   │   └── 04.2.6.6_Acceptance_Criteria.md
├── 04.3_Operational_Features/
│   ├── 04.3.1_FR-007_Barcode_Redemption/
│   │   ├── 04.3.1.1_Overview.md
│   │   ├── 04.3.1.2_User_Stories.md
│   │   ├── 04.3.1.3_Online_Redemption.md
│   │   ├── 04.3.1.4_Offline_Redemption.md
│   │   ├── 04.3.1.5_Service_Ownership.md
│   │   └── 04.3.1.6_Acceptance_Criteria.md
│   ├── 04.3.2_FR-008_Real_Time_Analytics/
│   │   ├── 04.3.2.1_Overview.md
│   │   ├── 04.3.2.2_User_Stories.md
│   │   ├── 04.3.2.3_Dashboard_Metrics.md
│   │   ├── 04.3.2.4_Advanced_Analytics.md
│   │   ├── 04.3.2.5_Service_Ownership.md
│   │   └── 04.3.2.6_Acceptance_Criteria.md
│   ├── 04.3.3_FR-009_CRM_Integration/
│   │   ├── 04.3.3.1_Overview.md
│   │   ├── 04.3.3.2_User_Stories.md
│   │   ├── 04.3.3.3_HubSpot_Integration.md
│   │   ├── 04.3.3.4_Salesforce_Integration.md
│   │   ├── 04.3.3.5_Service_Ownership.md
│   │   └── 04.3.3.6_Acceptance_Criteria.md
│   ├── 04.3.4_FR-010_Notification_System/
│   │   ├── 04.3.4.1_Overview.md
│   │   ├── 04.3.4.2_User_Stories.md
│   │   ├── 04.3.4.3_SMS_Notifications.md
│   │   ├── 04.3.4.4_Email_Notifications.md
│   │   ├── 04.3.4.5_Push_Notifications.md
│   │   ├── 04.3.4.6_Service_Ownership.md
│   │   └── 04.3.4.7_Acceptance_Criteria.md
├── 04.4_Advanced_Features/
│   ├── 04.4.1_FR-011_Fraud_Detection/
│   │   ├── 04.4.1.1_Overview.md
│   │   ├── 04.4.1.2_User_Stories.md
│   │   ├── 04.4.1.3_Fraud_Rules_Engine.md
│   │   ├── 04.4.1.4_ML_Based_Scoring.md
│   │   ├── 04.4.1.5_Device_Fingerprinting.md
│   │   ├── 04.4.1.6_Service_Ownership.md
│   │   └── 04.4.1.7_Acceptance_Criteria.md
├── 04.5_Intelligence_Features/
│   ├── 04.5.1_FR-012_AB_Testing/
│   │   ├── 04.5.1.1_Overview.md
│   │   ├── 04.5.1.2_User_Stories.md
│   │   ├── 04.5.1.3_Experiment_Management.md
│   │   ├── 04.5.1.4_Statistical_Analysis.md
│   │   ├── 04.5.1.5_Service_Ownership.md
│   │   └── 04.5.1.6_Acceptance_Criteria.md
│   ├── 04.5.2_FR-013_Recommendation_Engine/
│   │   ├── 04.5.2.1_Overview.md
│   │   ├── 04.5.2.2_User_Stories.md
│   │   ├── 04.5.2.3_Collaborative_Filtering.md
│   │   ├── 04.5.2.4_ML_Models.md
│   │   ├── 04.5.2.5_Service_Ownership.md
│   │   └── 04.5.2.6_Acceptance_Criteria.md
│   ├── 04.5.3_FR-014_Advanced_Reporting/
│   │   ├── 04.5.3.1_Overview.md
│   │   ├── 04.5.3.2_User_Stories.md
│   │   ├── 04.5.3.3_Custom_Report_Builder.md
│   │   ├── 04.5.3.4_Scheduled_Reports.md
│   │   ├── 04.5.3.5_Service_Ownership.md
│   │   └── 04.5.3.6_Acceptance_Criteria.md
├── 04.6_Feature_Traceability_Matrix.md
```

---

## 04.1 Overview

**References**: System_Feature_Tree.md (Section 3), BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1)

**Mục đích**: Tóm tắt các yêu cầu chức năng (FRs) của hệ thống PSP, phân bổ theo 4 nhóm tính năng: Core, Operational, Advanced, Intelligence.

**Ý nghĩa**: Định hướng đội phát triển về 14 FRs, đảm bảo tính toàn vẹn và khả năng kiểm thử.

**Cách làm**: Tổng hợp từ System Feature Tree và BRD, liệt kê FRs theo nhóm tính năng.

**Nội dung cần có**:
- **Tổng quan**: Hệ thống PSP hỗ trợ quản lý chiến dịch sampling, xác thực, redemption, analytics, notification, fraud detection, và tối ưu hóa bằng AI, với 14 FRs được chia thành Core Features (6), Operational Features (4), Advanced Features (1), và Intelligence Features (3).
- **Danh sách FRs**:
  | Nhóm | FR ID | Tính năng |
  |------|-------|-----------|
  | Core | FR-001 | Campaign Management |
  | Core | FR-002 | Barcode Management |
  | Core | FR-003 | User Authentication |
  | Core | FR-004 | User Management |
  | Core | FR-005 | OTP Verification |
  | Core | FR-006 | Ads Format Management |
  | Operational | FR-007 | Barcode Redemption |
  | Operational | FR-008 | Real-Time Analytics |
  | Operational | FR-009 | CRM Integration |
  | Operational | FR-010 | Notification System |
  | Advanced | FR-011 | Fraud Detection |
  | Intelligence | FR-012 | A/B Testing |
  | Intelligence | FR-013 | Recommendation Engine |
  | Intelligence | FR-014 | Advanced Reporting |

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Section 3), BRD.md (Section 1)
- **Thể hiện yêu cầu**: System_Feature_Tree.md (14 features)
- **Kết nối với**: Part03_User_Personas_And_Use_Cases, Part04.2–04.5

**Mục đích của node này**: Tóm tắt và phân bổ 14 FRs theo 4 nhóm tính năng.

**Assumptions/Constraints**:
- Assumes mỗi FR được triển khai trong microservice riêng (PostgreSQL/MongoDB/Redis).
- Constraint: Tất cả FRs phải tuân thủ GDPR/PDPA.

**Dependencies/Risks**:
- Dependencies: Part03 để ánh xạ use cases và personas.
- Risks: Thiếu FR hoặc phân bổ sai → Mitigation: Review với stakeholders.

**Acceptance Criteria/Testable Items**:
- Danh sách bao gồm 14 FRs, ánh xạ đúng nhóm tính năng.
- Mỗi FR có ID duy nhất và mô tả rõ ràng.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 04.2 Core Features

### 04.2.1 FR-001 Campaign Management

#### 04.2.1.1 Overview
**References**: System_Feature_Tree.md (Section 3.1), BRD.md (Section 1)
- **Mô tả**: Cho phép tạo, đọc, cập nhật, xóa (CRUD) các chiến dịch sampling với thông tin như tên, thời gian, địa điểm, barcode pool.
- **Mục đích**: Hỗ trợ Platform Admin, Brand Admin, Customer Account quản lý campaigns hiệu quả.
- **Ý nghĩa**: Tăng khả năng triển khai chiến dịch linh hoạt, tối ưu thu thập dữ liệu khách hàng.

#### 04.2.1.2 User Stories
- **US-001**: As a Platform Admin, I want to create a campaign with specific locations and barcode pools, so I can manage sampling distribution.
- **US-002**: As a Brand Admin, I want to update campaign details, so I can adjust to market feedback.
- **US-003**: As a Customer Account, I want to delete my campaign, so I can remove outdated promotions.

#### 04.2.1.3 Functional Specifications
- **API Endpoints**:
  - `POST /api/campaigns`: Tạo campaign.
  - `GET /api/campaigns/:id`: Lấy thông tin campaign.
  - `PUT /api/campaigns/:id`: Cập nhật campaign.
  - `DELETE /api/campaigns/:id`: Xóa campaign (soft delete).
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor User
      participant UI
      participant CampaignAPI
      participant Database
      User->>UI: Create Campaign
      UI->>CampaignAPI: POST /api/campaigns
      CampaignAPI->>Database: Save campaign (PostgreSQL)
      Database-->>CampaignAPI: Success
      CampaignAPI-->>UI: Campaign ID
      UI-->>User: Campaign Created
  ```
- **Input/Output**:
  - Input: JSON `{name, start_date, end_date, location_ids, barcode_pool_id}`
  - Output: JSON `{campaign_id, status}`

#### 04.2.1.4 Business Rules
- Campaign phải có ít nhất 1 barcode pool và 1 location.
- Chỉ Platform Admin, Brand Admin, Customer Account có quyền CRUD (RBAC).
- Dữ liệu campaign tuân thủ GDPR/PDPA (e.g., no PII in campaign metadata).

#### 04.2.1.5 Service Ownership
- **Owner**: Campaign Management Service
- **Database**: PostgreSQL (campaigns_db)
- **Dependencies**: FR-002 (Barcode Management), FR-006 (Ads Format Management)

#### 04.2.1.6 Acceptance Criteria
- Campaign creation hoàn tất trong < 1s.
- API endpoints thực hiện đúng CRUD operations.
- RBAC được áp dụng chính xác theo Access Control Tree.
- Dữ liệu campaign được lưu trữ và truy xuất chính xác.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.2.2 FR-002 Barcode Management

#### 04.2.2.1 Overview
**References**: System_Feature_Tree.md (Section 3.2), BRD.md (Section 3)
- **Mô tả**: Quản lý barcode (tạo, gán, theo dõi trạng thái: unused, used, expired) cho campaigns.
- **Mục đích**: Đảm bảo barcode được phát hành và sử dụng hiệu quả, hỗ trợ redemption.
- **Ý nghĩa**: Tăng khả năng phân phối quà mẫu ($1 hoặc thấp hơn) với kiểm soát chặt chẽ.

#### 04.2.2.2 User Stories
- **US-004**: As a Brand Admin, I want to create a batch of barcodes, so I can distribute them to customers.
- **US-005**: As a Brand Staff, I want to view barcode status, so I can monitor redemption progress.
- **US-006**: As a Customer, I want my barcode to be unique, so I can redeem my gift securely.

#### 04.2.2.3 Functional Specifications
- **API Endpoints**:
  - `POST /api/barcodes`: Tạo barcode batch.
  - `GET /api/barcodes/:id`: Lấy thông tin barcode.
  - `PUT /api/barcodes/:id/assign`: Gán barcode vào campaign.
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor User
      participant UI
      participant BarcodeAPI
      participant Database
      User->>UI: Create Barcode Batch
      UI->>BarcodeAPI: POST /api/barcodes
      BarcodeAPI->>Database: Save barcodes (PostgreSQL)
      Database-->>BarcodeAPI: Success
      BarcodeAPI-->>UI: Barcode IDs
      UI-->>User: Barcodes Created
  ```
- **Input/Output**:
  - Input: JSON `{batch_size, campaign_id, barcode_type: "QR/Code128/DataMatrix"}`
  - Output: JSON `{barcode_ids, status}`

#### 04.2.2.4 Business Rules
- Barcode phải unique, single-use, hết hạn sau 30 ngày nếu không redeem.
- Chỉ Platform Admin, Brand Admin có quyền tạo/gán barcodes.
- Barcode hỗ trợ Scandit SDK (QR/Code128/DataMatrix).

#### 04.2.2.5 Service Ownership
- **Owner**: Campaign Management Service
- **Database**: PostgreSQL (barcodes_db)
- **Dependencies**: FR-001 (Campaign Management), FR-007 (Barcode Redemption)

#### 04.2.2.6 Acceptance Criteria
- Tạo 10K barcodes trong < 5s.
- Barcode trạng thái (unused/used/expired) được cập nhật chính xác.
- API endpoints hỗ trợ tạo, gán, tra cứu barcode.
- RBAC được áp dụng đúng.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.2.3 FR-003 User Authentication

#### 04.2.3.1 Overview
**References**: System_Feature_Tree.md (Section 3.3), Access_Control_Tree_Grok.md (Section 2)
- **Mô tả**: Cung cấp xác thực người dùng qua email/password và SSO (OAuth2).
- **Mục đích**: Đảm bảo chỉ người dùng hợp lệ truy cập hệ thống theo RBAC.
- **Ý nghĩa**: Bảo vệ dữ liệu khách hàng và hệ thống, tăng độ tin cậy.

#### 04.2.3.2 User Stories
- **US-007**: As a Platform Admin, I want to log in with SSO, so I can access the system securely.
- **US-008**: As a Customer, I want to log in with email/password, so I can access my barcodes.
- **US-009**: As a POS Staff, I want to log out securely, so my session is protected.

#### 04.2.3.3 Functional Specifications
- **API Endpoints**:
  - `POST /api/auth/login`: Đăng nhập với email/password.
  - `POST /api/auth/sso`: Đăng nhập với SSO.
  - `POST /api/auth/logout`: Đăng xuất.
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor User
      participant UI
      participant AuthAPI
      participant Database
      User->>UI: Enter credentials
      UI->>AuthAPI: POST /api/auth/login
      AuthAPI->>Database: Verify credentials (PostgreSQL)
      Database-->>AuthAPI: User data
      AuthAPI-->>UI: JWT token
      UI-->>User: Login success
  ```
- **Input/Output**:
  - Input: JSON `{email, password}` hoặc `{oauth_token}`
  - Output: JSON `{jwt_token, user_role}`

#### 04.2.3.4 Business Rules
- JWT hết hạn sau 24h, hỗ trợ refresh token.
- Hỗ trợ 6 roles: Platform Admin, Brand Admin, Brand Staff, Customer Account, Customer, POS Staff.
- PII được mã hóa (AES-256).

#### 04.2.3.5 Service Ownership
- **Owner**: Identity Service
- **Database**: PostgreSQL (users_db)
- **Dependencies**: FR-004 (User Management)

#### 04.2.3.6 Acceptance Criteria
- Login response time < 500ms.
- RBAC áp dụng đúng theo Access Control Tree.
- SSO hỗ trợ OAuth2 (Google, Okta).
- Logout hủy session tức thì.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.2.4 FR-004 User Management

#### 04.2.4.1 Overview
**References**: System_Feature_Tree.md (Section 3.4), Access_Control_Tree_Grok.md (Section 2)
- **Mô tả**: Quản lý tài khoản người dùng và phân quyền (RBAC).
- **Mục đích**: Cho phép Platform Admin và Brand Admin tạo, sửa, xóa users và gán roles.
- **Ý nghĩa**: Đảm bảo phân quyền chính xác, hỗ trợ quản lý hệ thống.

#### 04.2.4.2 User Stories
- **US-010**: As a Platform Admin, I want to create a Brand Admin account, so I can delegate campaign management.
- **US-011**: As a Brand Admin, I want to assign roles to Brand Staff, so they can support campaigns.
- **US-012**: As a Platform Admin, I want to deactivate a user, so I can revoke access.

#### 04.2.4.3 Functional Specifications
- **API Endpoints**:
  - `POST /api/users`: Tạo user.
  - `GET /api/users/:id`: Lấy thông tin user.
  - `PUT /api/users/:id`: Cập nhật user.
  - `DELETE /api/users/:id`: Xóa user (soft delete).
  - `PUT /api/users/:id/roles`: Gán role.
- **Input/Output**:
  - Input: JSON `{email, name, role, group_id}`
  - Output: JSON `{user_id, role}`

#### 04.2.4.4 Business Rules
- Chỉ Platform Admin và Brand Admin có quyền quản lý users.
- Roles được định nghĩa theo Access Control Tree (6 roles).
- User data tuân thủ GDPR/PDPA (audit trail cho thay đổi).

#### 04.2.4.5 Service Ownership
- **Owner**: Identity Service
- **Database**: PostgreSQL (users_db)
- **Dependencies**: FR-003 (User Authentication)

#### 04.2.4.6 Acceptance Criteria
- User creation trong < 1s.
- API endpoints hỗ trợ CRUD và role assignment.
- RBAC được áp dụng đúng, ngăn unauthorized access.
- Audit trail lưu trữ thay đổi trong 12 tháng.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.2.5 FR-005 OTP Verification

#### 04.2.5.1 Overview
**References**: System_Feature_Tree.md (Section 3.5), BRD.md (Section 3)
- **Mô tả**: Xác thực khách hàng qua OTP gửi qua SMS/Email.
- **Mục đích**: Đảm bảo danh tính khách hàng khi đăng ký hoặc redeem.
- **Ý nghĩa**: Tăng độ an toàn và độ tin cậy của dữ liệu thu thập.

#### 04.2.5.2 User Stories
- **US-013**: As a Customer, I want to receive an OTP via SMS, so I can verify my identity to get a barcode.
- **US-014**: As a Customer, I want to resend an OTP, so I can verify if I miss the first one.
- **US-015**: As a Platform Admin, I want OTP logs, so I can audit verification attempts.

#### 04.2.5.3 Functional Specifications
- **API Endpoints**:
  - `POST /api/otp/send`: Gửi OTP.
  - `POST /api/otp/verify`: Xác thực OTP.
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor Customer
      participant UI
      participant OTPAPI
      participant Notification
      Customer->>UI: Request OTP
      UI->>OTPAPI: POST /api/otp/send
      OTPAPI->>Notification: Send OTP via Twilio
      Notification-->>Customer: OTP (SMS/Email)
      Customer->>UI: Enter OTP
      UI->>OTPAPI: POST /api/otp/verify
      OTPAPI-->>UI: Verification success
  ```
- **Input/Output**:
  - Input: JSON `{phone_number/email, campaign_id}`
  - Output: JSON `{otp_status: "sent/verified"}`

#### 04.2.5.4 Business Rules
- OTP hết hạn sau 5 phút, giới hạn 3 lần gửi lại/giờ.
- OTP phải secure (hashed trong DB).
- Hỗ trợ Twilio cho SMS/Email delivery.

#### 04.2.5.5 Service Ownership
- **Owner**: Identity Service
- **Dependencies**: FR-010 (Notification System)
- **Database**: Redis (OTP cache), PostgreSQL (logs)

#### 04.2.5.6 Acceptance Criteria
- OTP gửi trong < 5s, verification trong < 500ms.
- Success rate >98%.
- OTP logs lưu trữ ít nhất 30 ngày.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.2.6 FR-006 Ads Format Management

#### 04.2.6.1 Overview
**References**: System_Feature_Tree.md (Section 3.6), BRD.md (Section 3)
- **Mô tả**: Quản lý template quảng cáo (landing pages, banners, emails) cho campaigns.
- **Mục đích**: Tùy chỉnh nội dung quảng cáo, tăng engagement cho quà mẫu giá trị thấp (~$1).
- **Ý nghĩa**: Thu hút khách hàng hoàn thành form để nhận quà.

#### 04.2.6.2 User Stories
- **US-016**: As a Brand Admin, I want to create a landing page, so I can promote my campaign.
- **US-017**: As a Customer Account, I want to preview ads formats, so I can ensure they attract customers.
- **US-018**: As a Customer, I want a simple landing page, so I can quickly complete the form.

#### 04.2.6.3 Template Management
- **API Endpoints**:
  - `POST /api/ads-formats`: Tạo template.
  - `GET /api/ads-formats/:id`: Lấy template.
  - `PUT /api/ads-formats/:id`: Cập nhật template.
  - `DELETE /api/ads-formats/:id`: Xóa template.
- **Details**: Hỗ trợ HTML/CSS/JS templates, đa ngôn ngữ (Anh/Việt), responsive design.

#### 04.2.6.4 Asset Management
- **API Endpoints**:
  - `POST /api/ads-formats/assets`: Upload assets (images, videos).
  - `GET /api/ads-formats/assets/:id`: Lấy asset.
- **Details**: Assets lưu trên AWS S3, tối ưu load time với CDN.

#### 04.2.6.5 Service Ownership
- **Owner**: Campaign Management Service
- **Database**: PostgreSQL (templates_db), AWS S3 (assets)
- **Dependencies**: FR-001 (Campaign Management)

#### 04.2.6.6 Acceptance Criteria
- Template creation/preview trong < 2s.
- Assets load trong < 1s trên PWA.
- RBAC giới hạn quyền cho Platform Admin, Brand Admin, Customer Account.
- Landing page đạt form completion rate >90%.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 04.3 Operational Features

### 04.3.1 FR-007 Barcode Redemption

#### 04.3.1.1 Overview
**References**: System_Feature_Tree.md (Section 3.7), BRD.md (Section 3)
- **Mô tả**: Theo dõi và xử lý redemption của barcode tại POS hoặc online.
- **Mục đích**: Đảm bảo khách hàng redeem quà mẫu ($1) chính xác.
- **Ý nghĩa**: Tăng trải nghiệm khách hàng và độ tin cậy của hệ thống.

#### 04.3.1.2 User Stories
- **US-019**: As a Customer, I want to redeem my barcode at POS, so I can get my gift.
- **US-020**: As a POS Staff, I want to scan barcodes easily, so I can process redemptions quickly.
- **US-021**: As a Brand Admin, I want redemption logs, so I can track campaign performance.

#### 04.3.1.3 Online Redemption
- **API Endpoints**:
  - `POST /api/redemptions/online`: Redeem barcode online.
  - **Input**: JSON `{barcode_id, user_id, campaign_id}`
  - **Output**: JSON `{redemption_id, status}`

#### 04.3.1.4 Offline Redemption
- **Details**: Redeem Tool lưu redemption offline, đồng bộ khi online.
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor POS_Staff
      participant RedeemTool
      participant LocalDB
      participant RedemptionAPI
      POS_Staff->>RedeemTool: Scan Barcode (Offline)
      RedeemTool->>LocalDB: Store redemption
      LocalDB-->>RedeemTool: Success
      RedeemTool->>RedemptionAPI: Sync when online
      RedemptionAPI-->>RedeemTool: Sync success
  ```

#### 04.3.1.5 Service Ownership
- **Owner**: Redemption Service
- **Database**: PostgreSQL (redemptions_db), LocalDB (offline)
- **Dependencies**: FR-002 (Barcode Management)

#### 04.3.1.6 Acceptance Criteria
- Redemption ghi nhận trong < 1s (online), < 5s (offline sync).
- Barcode chỉ redeem 1 lần.
- Success rate >98%.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.3.2 FR-008 Real-Time Analytics

#### 04.3.2.1 Overview
**References**: System_Feature_Tree.md (Section 3.8), BRD.md (Section 2)
- **Mô tả**: Cung cấp dashboard metrics theo thời gian thực (redemption rate, user engagement).
- **Mục đích**: Giúp Brand Admin, Customer Account theo dõi hiệu quả campaign.
- **Ý nghĩa**: Tăng khả năng ra quyết định nhanh dựa trên dữ liệu.

#### 04.3.2.2 User Stories
- **US-022**: As a Brand Admin, I want to see real-time redemption rates, so I can adjust campaign strategies.
- **US-023**: As a Customer Account, I want to view click-through rates, so I can optimize ads.
- **US-024**: As a Platform Admin, I want system-wide analytics, so I can monitor performance.

#### 04.3.2.3 Dashboard Metrics
- **API Endpoints**:
  - `GET /api/analytics/realtime`: Lấy metrics.
  - **Input**: JSON `{campaign_id, time_range}`
  - **Output**: JSON `{redemption_count, click_rate, form_completion_rate}`

#### 04.3.2.4 Advanced Analytics
- **Details**: Hỗ trợ funnel analysis (form views → completions → redemptions).
- **Metrics**: Conversion rate, drop-off rate, ROI.

#### 04.3.2.5 Service Ownership
- **Owner**: Analytics Service
- **Database**: MongoDB (analytics_db)
- **Dependencies**: FR-007 (Barcode Redemption)

#### 04.3.2.6 Acceptance Criteria
- Dashboard load trong < 2s.
- Metrics cập nhật mỗi 5s.
- Hỗ trợ 10K concurrent users.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.3.3 FR-009 CRM Integration

#### 04.3.3.1 Overview
**References**: System_Feature_Tree.md (Section 3.9), BRD.md (Section 3)
- **Mô tả**: Đồng bộ dữ liệu khách hàng (name, email, phone, consent) với HubSpot/Salesforce.
- **Mục đích**: Tích hợp dữ liệu khách hàng vào CRM để quản lý và marketing.
- **Ý nghĩa**: Tăng giá trị dữ liệu thu thập từ quà mẫu.

#### 04.3.3.2 User Stories
- **US-025**: As a Customer Account, I want to sync customer data to HubSpot, so I can run marketing campaigns.
- **US-026**: As a Brand Admin, I want to export customer data to Salesforce, so I can track leads.
- **US-027**: As a Customer, I want my consent status synced, so my preferences are respected.

#### 04.3.3.3 HubSpot Integration
- **API Endpoints**:
  - `POST /api/crm/hubspot/sync`: Đồng bộ với HubSpot.
  - **Input**: JSON `{user_id, campaign_id, customer_data}`
  - **Output**: JSON `{sync_status}`

#### 04.3.3.4 Salesforce Integration
- **API Endpoints**:
  - `POST /api/crm/salesforce/sync`: Đồng bộ với Salesforce.
  - **Input**: JSON `{user_id, campaign_id, customer_data}`
  - **Output**: JSON `{sync_status}`

#### 04.3.3.5 Service Ownership
- **Owner**: Notification Service
- **Dependencies**: FR-005 (OTP Verification)
- **Database**: PostgreSQL (crm_sync_logs)

#### 04.3.3.6 Acceptance Criteria
- Đồng bộ 1K records trong < 5s.
- Data accuracy >95%.
- Tuân thủ GDPR/PDPA (e.g., consent status).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.3.4 FR-010 Notification System

#### 04.3.4.1 Overview
**References**: System_Feature_Tree.md (Section 3.10), BRD.md (Section 3)
- **Mô tả**: Gửi thông báo qua SMS, Email, PWA push notifications.
- **Mục đích**: Thông báo khách hàng về barcode, redemption, và hỗ trợ.
- **Ý nghĩa**: Tăng engagement, đặc biệt với quà mẫu giá trị thấp (~$1).

#### 04.3.4.2 User Stories
- **US-028**: As a Customer, I want to receive an SMS with my barcode, so I can redeem my gift.
- **US-029**: As a Customer, I want push notifications for campaign updates, so I stay informed.
- **US-030**: As a Platform Admin, I want to configure notification channels, so I can optimize delivery.

#### 04.3.4.3 SMS Notifications
- **API Endpoints**:
  - `POST /api/notifications/sms`: Gửi SMS.
  - **Input**: JSON `{phone_number, message, campaign_id}`
  - **Output**: JSON `{notification_status}`

#### 04.3.4.4 Email Notifications
- **API Endpoints**:
  - `POST /api/notifications/email`: Gửi Email.
  - **Input**: JSON `{email, subject, content, campaign_id}`
  - **Output**: JSON `{notification_status}`

#### 04.3.4.5 Push Notifications
- **API Endpoints**:
  - `POST /api/notifications/push`: Gửi push notification.
  - **Input**: JSON `{user_id, message, campaign_id}`
  - **Output**: JSON `{notification_status}`

#### 04.3.4.6 Service Ownership
- **Owner**: Notification Service
- **Dependencies**: FR-005 (OTP Verification)
- **Database**: Redis (message queue), PostgreSQL (logs)

#### 04.3.4.7 Acceptance Criteria
- Notification gửi trong < 5s.
- Delivery rate >95%.
- Hỗ trợ đa ngôn ngữ (Anh/Việt).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 04.4 Advanced Features

### 04.4.1 FR-011 Fraud Detection

#### 04.4.1.1 Overview
**References**: System_Feature_Tree.md (Section 3.11), BRD.md (Section 2)
- **Mô tả**: Phát hiện gian lận trong redemption bằng rules engine, ML scoring, và device fingerprinting.
- **Mục đích**: Giảm fraud rate xuống <5%.
- **Ý nghĩa**: Bảo vệ hệ thống và đảm bảo quà mẫu đến đúng đối tượng.

#### 04.4.1.2 User Stories
- **US-031**: As a Platform Admin, I want to detect multiple redemptions, so I can prevent fraud.
- **US-032**: As a POS Staff, I want fraud alerts, so I can verify suspicious redemptions.
- **US-033**: As a Brand Admin, I want fraud reports, so I can assess campaign integrity.

#### 04.4.1.3 Fraud Rules Engine
- **Details**: Áp dụng rules như “max 1 redemption/user/day”.
- **API Endpoints**:
  - `POST /api/fraud/rules`: Tạo rule.
  - **Input**: JSON `{rule_type, conditions, campaign_id}`
  - **Output**: JSON `{rule_id}`

#### 04.4.1.4 ML-Based Scoring
- **Details**: Tính fraud score (0-100) dựa trên user behavior, redemption frequency.
- **API Endpoints**:
  - `POST /api/fraud/score`: Tính score.
  - **Input**: JSON `{barcode_id, user_id, pos_id}`
  - **Output**: JSON `{fraud_score}`

#### 04.4.1.5 Device Fingerprinting
- **Details**: Thu thập device_id, IP, user-agent để phát hiện gian lận.
- **API Endpoints**:
  - `POST /api/fraud/fingerprint`: Ghi nhận fingerprint.
  - **Input**: JSON `{device_id, ip, user_agent}`
  - **Output**: JSON `{fingerprint_id}`

#### 04.4.1.6 Service Ownership
- **Owner**: Fraud Detection Service
- **Database**: MongoDB (fraud_db)
- **Dependencies**: FR-007 (Barcode Redemption)

#### 04.4.1.7 Acceptance Criteria
- Fraud detection time < 500ms.
- False positive rate <5%.
- Rules engine và ML scoring hoạt động chính xác.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 04.5 Intelligence Features

### 04.5.1 FR-012 A/B Testing

#### 04.5.1.1 Overview
**References**: System_Feature_Tree.md (Section 3.12), BRD.md (Section 2)
- **Mô tả**: Hỗ trợ A/B testing cho ads formats để tối ưu campaign.
- **Mục đích**: So sánh hiệu quả các biến thể (e.g., landing page designs).
- **Ý nghĩa**: Tăng form completion rate (>90%) cho quà mẫu giá trị thấp.

#### 04.5.1.2 User Stories
- **US-034**: As a Brand Admin, I want to run an A/B test, so I can choose the best landing page.
- **US-035**: As a Customer Account, I want to see A/B test results, so I can optimize my campaign.
- **US-036**: As a Customer, I want a seamless landing page experience, so I can complete the form easily.

#### 04.5.1.3 Experiment Management
- **API Endpoints**:
  - `POST /api/ab-tests`: Tạo A/B test.
  - **Input**: JSON `{campaign_id, variants, metrics}`
  - **Output**: JSON `{test_id}`

#### 04.5.1.4 Statistical Analysis
- **Details**: Phân tích CTR, conversion rate với statistical confidence >95%.
- **API Endpoints**:
  - `GET /api/ab-tests/:id`: Lấy kết quả test.
  - **Output**: JSON `{ctr, conversion_rate, confidence}`

#### 04.5.1.5 Service Ownership
- **Owner**: Intelligence Service
- **Database**: MongoDB (analytics_db)
- **Dependencies**: FR-006 (Ads Format Management)

#### 04.5.1.6 Acceptance Criteria
- A/B test setup trong < 5s.
- Kết quả đạt confidence >95%.
- Hỗ trợ 10K users/test.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.5.2 FR-013 Recommendation Engine

#### 04.5.2.1 Overview
**References**: System_Feature_Tree.md (Section 3.13), BRD.md (Section 2)
- **Mô tả**: Gợi ý campaigns cá nhân hóa dựa trên user behavior và demographics.
- **Mục đích**: Tăng engagement với quà mẫu giá trị thấp (~$1).
- **Ý nghĩa**: Thu hút khách hàng tham gia nhiều campaign hơn.

#### 04.5.2.2 User Stories
- **US-037**: As a Customer, I want personalized campaign suggestions, so I can find relevant gifts.
- **US-038**: As a Brand Admin, I want recommendation analytics, so I can assess engagement.
- **US-039**: As a Platform Admin, I want to configure recommendation models, so I can optimize performance.

#### 04.5.2.3 Collaborative Filtering
- **Details**: Sử dụng collaborative filtering để gợi ý dựa trên user interactions.
- **API Endpoints**:
  - `GET /api/recommendations`: Lấy gợi ý.
  - **Input**: JSON `{user_id, campaign_id}`
  - **Output**: JSON `{recommended_campaigns}`

#### 04.5.2.4 ML Models
- **Details**: Sử dụng ML models (e.g., matrix factorization) với user data.
- **Dependencies**: Historical data từ FR-008 (Real-Time Analytics).

#### 04.5.2.5 Service Ownership
- **Owner**: Intelligence Service
- **Database**: MongoDB (recommendations_db)
- **Dependencies**: FR-008 (Real-Time Analytics)

#### 04.5.2.6 Acceptance Criteria
- Recommendation response time < 500ms.
- CTR của gợi ý >10%.
- Tuân thủ GDPR/PDPA (no PII trong recommendations).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 04.5.3 FR-014 Advanced Reporting

#### 04.5.3.1 Overview
**References**: System_Feature_Tree.md (Section 3.14), BRD.md (Section 2)
- **Mô tả**: Cung cấp báo cáo tùy chỉnh và định kỳ về hiệu quả campaign.
- **Mục đích**: Hỗ trợ Platform Admin, Brand Admin phân tích dữ liệu chi tiết.
- **Ý nghĩa**: Cải thiện chiến lược campaign dựa trên insights.

#### 04.5.3.2 User Stories
- **US-040**: As a Brand Admin, I want to build custom reports, so I can analyze specific metrics.
- **US-041**: As a Customer Account, I want scheduled reports, so I can receive updates regularly.
- **US-042**: As a Platform Admin, I want exportable reports, so I can share with stakeholders.

#### 04.5.3.3 Custom Report Builder
- **API Endpoints**:
  - `POST /api/reports/custom`: Tạo báo cáo tùy chỉnh.
  - **Input**: JSON `{campaign_id, metrics, filters}`
  - **Output**: JSON `{report_id, report_data}`

#### 04.5.3.4 Scheduled Reports
- **API Endpoints**:
  - `POST /api/reports/schedule`: Lập lịch báo cáo.
  - **Input**: JSON `{report_id, schedule, format: "CSV/PDF"}`
  - **Output**: JSON `{schedule_id}`

#### 04.5.3.5 Service Ownership
- **Owner**: Intelligence Service
- **Database**: MongoDB (reports_db)
- **Dependencies**: FR-008 (Real-Time Analytics)

#### 04.5.3.6 Acceptance Criteria
- Báo cáo tạo trong < 5s, export trong < 10s.
- Hỗ trợ CSV, PDF formats.
- Báo cáo chính xác, tuân thủ GDPR/PDPA.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 04.6 Feature Traceability Matrix

**References**: System_Feature_Tree.md (Section 3), Access_Control_Tree_Grok.md (Section 2), Part03_User_Personas_And_Use_Cases

**Mục đích**: Ánh xạ FRs với use cases và personas để đảm bảo traceability.

**Ý nghĩa**: Đảm bảo mọi FR đều liên kết với nhu cầu người dùng và use cases.

**Cách làm**: Tổng hợp từ Part03 và System Feature Tree, trình bày dưới dạng bảng.

**Nội dung cần có**:
- **Traceability Matrix**:
  | FR ID | Tính năng | Use Case | Persona |
  |-------|-----------|----------|---------|
  | FR-001 | Campaign Management | UC-001, UC-005, UC-012 | Platform Admin, Brand Admin, Customer Account |
  | FR-002 | Barcode Management | UC-002, UC-006, UC-009 | Platform Admin, Brand Admin, Brand Staff |
  | FR-003 | User Authentication | UC-001, UC-005, UC-012, UC-016, UC-020 | All Personas |
  | FR-004 | User Management | UC-001, UC-007 | Platform Admin, Brand Admin |
  | FR-005 | OTP Verification | UC-016 | Customer |
  | FR-006 | Ads Format Management | UC-005, UC-008, UC-014 | Platform Admin, Brand Admin, Customer Account |
  | FR-007 | Barcode Redemption | UC-018, UC-020 | Customer, POS Staff |
  | FR-008 | Real-Time Analytics | UC-007, UC-011, UC-015 | Platform Admin, Brand Admin, Brand Staff, Customer Account |
  | FR-009 | CRM Integration | UC-013 | Customer Account |
  | FR-010 | Notification System | UC-016, UC-019 | Customer |
  | FR-011 | Fraud Detection | UC-020 | Platform Admin, POS Staff |
  | FR-012 | A/B Testing | UC-008 | Brand Admin, Customer Account |
  | FR-013 | Recommendation Engine | UC-016 | Customer |
  | FR-014 | Advanced Reporting | UC-007, UC-011, UC-015 | Platform Admin, Brand Admin, Customer Account |

**Tài liệu tham khảo**:
- **Đầu vào từ**: System_Feature_Tree.md (Section 3), Part03_User_Personas_And_Use_Cases
- **Thể hiện yêu cầu**: All 14 FRs
- **Kết nối với**: Part03_User_Personas_And_Use_Cases

**Mục đích của node này**: Đảm bảo mọi FR đều ánh xạ với use case và persona.

**Assumptions/Constraints**:
- Assumes tất cả use cases được định nghĩa trong Part03.
- Constraint: Mỗi FR phải liên kết ít nhất 1 use case.

**Dependencies/Risks**:
- Dependencies: Part03_User_Personas_And_Use_Cases.
- Risks: Thiếu ánh xạ → Mitigation: Review với stakeholders.

**Acceptance Criteria/Testable Items**:
- Traceability matrix bao gồm tất cả 14 FRs.
- Mỗi FR ánh xạ đúng với use case và persona.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |


# Part05 - Non-Functional Requirements

## Structure of Part05
```
Part05_Non_Functional_Requirements/
├── 05.1_Overview.md
├── 05.2_NFR-001_Performance.md
├── 05.3_NFR-002_Scalability.md
├── 05.4_NFR-003_Security.md
├── 05.5_NFR-004_Reliability.md
├── 05.6_NFR-005_Maintainability.md
├── 05.7_NFR-006_Auditability.md
├── 05.8_NFR-007_Usability.md
├── 05.9_NFR-008_Compliance.md
└── 05.10_NFR_Priorities_Matrix.md
```

---

## 05.1 Overview

**References**: BRD.md (Section 2), Product-Sampling-Vision-and-Strategy Document.md (Section 1), System_Feature_Tree.md (Section 3)

**Mục đích**: Tóm tắt các yêu cầu phi chức năng (NFRs) của hệ thống PSP, đảm bảo hiệu suất, bảo mật, và trải nghiệm người dùng hỗ trợ phân phối quà mẫu giá trị thấp (~$1).

**Ý nghĩa**: Định hướng đội phát triển về các tiêu chuẩn chất lượng, đảm bảo hệ thống đáp ứng nhu cầu stakeholders.

**Cách làm**: Tổng hợp từ BRD và System Feature Tree, liệt kê 8 NFRs với metrics cụ thể.

**Nội dung cần có**:
- **Tổng quan**: PSP yêu cầu 8 NFRs (Performance, Scalability, Security, Reliability, Maintainability, Auditability, Usability, Compliance) để hỗ trợ quản lý chiến dịch, xác thực, redemption, và analytics, tối ưu hóa engagement cho quà mẫu giá trị thấp.
- **Danh sách NFRs**:
  | NFR ID | Tính năng | Mô tả ngắn |
  |--------|-----------|------------|
  | NFR-001 | Performance | Đảm bảo hệ thống phản hồi nhanh (<500ms cho API, <2s cho UI). |
  | NFR-002 | Scalability | Hỗ trợ 10K concurrent users, scale tự động. |
  | NFR-003 | Security | Bảo vệ dữ liệu khách hàng, tuân thủ RBAC và AES-256. |
  | NFR-004 | Reliability | Uptime 99.9%, recovery time <1h. |
  | NFR-005 | Maintainability | Code modular, CI/CD pipeline, 80% test coverage. |
  | NFR-006 | Auditability | Lưu audit logs 12 tháng, truy xuất <5s. |
  | NFR-007 | Usability | Form completion rate >90%, UI load <2s. |
  | NFR-008 | Compliance | Tuân thủ GDPR/PDPA, audit hàng quý. |

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 2), System_Feature_Tree.md (Section 3)
- **Kết nối với**: Part03_User_Personas_And_Use_Cases, Part04_Functional_Requirements

**Mục đích của node này**: Tóm tắt 8 NFRs và vai trò trong hệ thống PSP.

**Assumptions/Constraints**:
- Assumes triển khai trên AWS (ECS, RDS, S3).
- Constraint: NFRs phải hỗ trợ quà mẫu giá trị thấp (~$1) với engagement cao.

**Dependencies/Risks**:
- Dependencies: Part04 để ánh xạ NFRs với FRs.
- Risks: Thiếu metrics cụ thể → Mitigation: Review với stakeholders.

**Acceptance Criteria/Testable Items**:
- Danh sách bao gồm 8 NFRs với metrics rõ ràng.
- Mỗi NFR liên kết với ít nhất 1 use case/persona từ Part03.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.2 NFR-001 Performance

**References**: BRD.md (Section 2.2), System_Feature_Tree.md (Section 3)

**Mục đích**: Đảm bảo hệ thống phản hồi nhanh để hỗ trợ trải nghiệm mượt mà khi đăng ký và redeem quà mẫu (~$1).

**Ý nghĩa**: Tăng form completion rate (>90%) và satisfaction cho Customer, POS Staff.

**Cách làm**: Định nghĩa metrics về response time, throughput, và latency.

**Nội dung cần có**:
- **NFR ID**: NFR-001
- **Mô tả**: Hệ thống phải đạt response time <500ms cho API calls, <2s cho UI load, và throughput 1K requests/s.
- **Metrics**:
  - API response time: <500ms (95th percentile).
  - UI load time: <2s (PWA, mobile/desktop).
  - Throughput: 1K requests/s tại peak load.
- **Test Scenarios**:
  - Load test với 10K concurrent users trên AWS ECS.
  - Measure form submission time cho Customer persona.
- **Dependencies**: FR-001 (Campaign Management), FR-007 (Barcode Redemption).

**Assumptions/Constraints**:
- Assumes sử dụng Redis caching cho API calls.
- Constraint: Performance phải ổn định trên 3G/4G networks.

**Dependencies/Risks**:
- Dependencies: AWS infrastructure (ECS, CloudFront).
- Risks: Bottlenecks tại DB → Mitigation: Optimize queries, use indexes.

**Acceptance Criteria/Testable Items**:
- API response time <500ms trong 95% test cases.
- UI load time <2s trên Chrome, Safari (mobile/desktop).
- Throughput đạt 1K requests/s trong load test.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.3 NFR-002 Scalability

**References**: BRD.md (Section 2.3), System_Feature_Tree.md (Section 3)

**Mục đích**: Hỗ trợ mở rộng hệ thống để xử lý 10K concurrent users trong các chiến dịch lớn.

**Ý nghĩa**: Đảm bảo PSP đáp ứng nhu cầu tăng đột biến khi phân phối quà mẫu.

**Cách làm**: Định nghĩa auto-scaling policies và load balancing.

**Nội dung cần có**:
- **NFR ID**: NFR-002
- **Mô tả**: Hệ thống tự động scale để hỗ trợ 10K concurrent users, tăng từ 1K lên 10K users trong <5 phút.
- **Metrics**:
  - Scale-up time: <5 phút.
  - Max concurrent users: 10K.
  - Horizontal scaling: AWS ECS với auto-scaling groups.
- **Test Scenarios**:
  - Simulate 10K users redeeming barcodes đồng thời.
  - Test auto-scaling triggers trên AWS CloudWatch.
- **Dependencies**: FR-007 (Barcode Redemption), FR-008 (Real-Time Analytics).

**Assumptions/Constraints**:
- Assumes triển khai trên AWS ECS với ELB.
- Constraint: Scaling không được làm gián đoạn dịch vụ.

**Dependencies/Risks**:
- Dependencies: AWS CloudWatch, ELB.
- Risks: Over-scaling dẫn đến chi phí cao → Mitigation: Optimize scaling thresholds.

**Acceptance Criteria/Testable Items**:
- Scale từ 1K lên 10K users trong <5 phút.
- Không có downtime trong load test.
- ELB phân phối traffic đều, latency <500ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.4 NFR-003 Security

**References**: BRD.md (Section 2.4), Access_Control_Tree_Grok.md (Section 2)

**Mục đích**: Bảo vệ dữ liệu khách hàng (PII) và hệ thống khỏi unauthorized access.

**Ý nghĩa**: Đảm bảo độ tin cậy và tuân thủ GDPR/PDPA khi thu thập dữ liệu qua quà mẫu.

**Cách làm**: Áp dụng RBAC, mã hóa, và secure APIs.

**Nội dung cần có**:
- **NFR ID**: NFR-003
- **Mô tả**: Hệ thống sử dụng AES-256 cho PII, JWT cho authentication, và RBAC cho access control.
- **Metrics**:
  - Encryption: AES-256 cho PII (name, email, phone).
  - JWT expiry: 24h với refresh token.
  - Penetration test: 0 critical vulnerabilities.
- **Test Scenarios**:
  - Penetration test với OWASP Top 10.
  - RBAC test với 6 personas (Platform Admin, Brand Admin, etc.).
- **Dependencies**: FR-003 (User Authentication), FR-004 (User Management).

**Assumptions/Constraints**:
- Assumes sử dụng AWS KMS cho key management.
- Constraint: Không lưu PII plaintext trong DB.

**Dependencies/Risks**:
- Dependencies: AWS KMS, Okta (SSO).
- Risks: Data breach → Mitigation: Regular security audits.

**Acceptance Criteria/Testable Items**:
- PII được mã hóa AES-256 trước khi lưu.
- RBAC ngăn 100% unauthorized access trong test.
- Penetration test không phát hiện critical vulnerabilities.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.5 NFR-004 Reliability

**References**: BRD.md (Section 2.5), System_Feature_Tree.md (Section 3)

**Mục đích**: Đảm bảo hệ thống hoạt động liên tục với uptime 99.9%.

**Ý nghĩa**: Tăng độ tin cậy cho khách hàng khi redeem quà mẫu.

**Cách làm**: Định nghĩa SLA và disaster recovery plan.

**Nội dung cần có**:
- **NFR ID**: NFR-004
- **Mô tả**: Hệ thống đạt uptime 99.9%, recovery time <1h sau failure.
- **Metrics**:
  - Uptime: 99.9% (SLA).
  - Mean Time to Recovery (MTTR): <1h.
  - Backup frequency: Daily.
- **Test Scenarios**:
  - Simulate DB failure và test recovery.
  - Monitor uptime với AWS CloudWatch.
- **Dependencies**: FR-007 (Barcode Redemption), FR-010 (Notification System).

**Assumptions/Constraints**:
- Assumes sử dụng AWS RDS Multi-AZ.
- Constraint: Recovery không được làm mất dữ liệu.

**Dependencies/Risks**:
- Dependencies: AWS RDS, CloudWatch.
- Risks: Single point of failure → Mitigation: Multi-AZ deployment.

**Acceptance Criteria/Testable Items**:
- Uptime đạt 99.9% trong 3 tháng test.
- Recovery time <1h trong simulated failures.
- Daily backups được lưu trữ 30 ngày.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.6 NFR-005 Maintainability

**References**: BRD.md (Section 2.6), System_Feature_Tree.md (Section 3)

**Mục đích**: Đảm bảo code và hệ thống dễ bảo trì, cập nhật.

**Ý nghĩa**: Giảm chi phí và thời gian bảo trì, hỗ trợ phát triển liên tục.

**Cách làm**: Áp dụng modular design, CI/CD, và test coverage.

**Nội dung cần có**:
- **NFR ID**: NFR-005
- **Mô tả**: Codebase modular, CI/CD pipeline với 80% test coverage, và tài liệu API đầy đủ.
- **Metrics**:
  - Test coverage: 80% (unit, integration).
  - Deployment frequency: Daily (CI/CD).
  - Technical debt: <5% codebase.
- **Test Scenarios**:
  - Run CI/CD pipeline với GitHub Actions.
  - Measure test coverage với SonarQube.
- **Dependencies**: All FRs (Part04).

**Assumptions/Constraints**:
- Assumes sử dụng TypeScript/Node.js cho microservices.
- Constraint: Tài liệu API phải cập nhật real-time.

**Dependencies/Risks**:
- Dependencies: GitHub Actions, Swagger.
- Risks: Technical debt tích lũy → Mitigation: Code reviews hàng tuần.

**Acceptance Criteria/Testable Items**:
- Test coverage đạt 80% trong SonarQube.
- CI/CD pipeline chạy không lỗi trong 95% deployments.
- API docs được generate tự động qua Swagger.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.7 NFR-006 Auditability

**References**: BRD.md (Section 2.7), Access_Control_Tree_Grok.md (Section 2)

**Mục đích**: Lưu trữ và truy xuất audit logs để theo dõi hoạt động hệ thống.

**Ý nghĩa**: Đảm bảo traceability và tuân thủ quy định cho dữ liệu khách hàng.

**Cách làm**: Lưu audit logs với timestamp, user_id, và action details.

**Nội dung cần có**:
- **NFR ID**: NFR-006
- **Mô tả**: Hệ thống lưu audit logs (user actions, system events) trong 12 tháng, truy xuất <5s.
- **Metrics**:
  - Log retention: 12 tháng.
  - Query time: <5s.
  - Log completeness: 100% critical actions (login, redemption, user updates).
- **Test Scenarios**:
  - Query logs cho redemption events.
  - Verify log retention trong AWS S3.
- **Dependencies**: FR-003 (User Authentication), FR-007 (Barcode Redemption).

**Assumptions/Constraints**:
- Assumes logs lưu trên AWS S3 với lifecycle policy.
- Constraint: Logs phải tuân thủ GDPR/PDPA (no PII plaintext).

**Dependencies/Risks**:
- Dependencies: AWS S3, CloudTrail.
- Risks: Log loss → Mitigation: Redundant storage.

**Acceptance Criteria/Testable Items**:
- Logs lưu đầy đủ 100% critical actions.
- Query time <5s trong 95% test cases.
- Logs được lưu trữ 12 tháng, truy xuất chính xác.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.8 NFR-007 Usability

**References**: BRD.md (Section 2.8), Part03_User_Personas_And_Use_Cases

**Mục đích**: Đảm bảo hệ thống dễ sử dụng, đặc biệt cho Customer và POS Staff.

**Ý nghĩa**: Tăng form completion rate (>90%) và satisfaction cho quà mẫu giá trị thấp.

**Cách làm**: Định nghĩa UX metrics và test với personas.

**Nội dung cần có**:
- **NFR ID**: NFR-007
- **Mô tả**: UI/UX đạt form completion rate >90%, System Usability Scale (SUS) score >80.
- **Metrics**:
  - Form completion rate: >90%.
  - SUS score: >80.
  - UI load time: <2s (PWA, mobile/desktop).
- **Test Scenarios**:
  - Usability test với 50 Customers và 20 POS Staff.
  - Measure form completion time cho landing pages.
- **Dependencies**: FR-006 (Ads Format Management), FR-007 (Barcode Redemption).

**Assumptions/Constraints**:
- Assumes PWA sử dụng React, Tailwind CSS.
- Constraint: UI phải hỗ trợ đa ngôn ngữ (Anh/Việt).

**Dependencies/Risks**:
- Dependencies: Part10_UI_UX_Design.
- Risks: UX phức tạp làm giảm completion rate → Mitigation: Iterative testing.

**Acceptance Criteria/Testable Items**:
- Form completion rate >90% trong usability tests.
- SUS score >80 trong user feedback.
- UI load time <2s trên 3G/4G networks.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.9 NFR-008 Compliance

**References**: BRD.md (Section 2.9), Access_Control_Tree_Grok.md (Section 2)

**Mục đích**: Đảm bảo hệ thống tuân thủ GDPR/PDPA cho dữ liệu khách hàng.

**Ý nghĩa**: Tránh phạt pháp lý, tăng độ tin cậy của PSP.

**Cách làm**: Áp dụng quy trình compliance và audit định kỳ.

**Nội dung cần có**:
- **NFR ID**: NFR-008
- **Mô tả**: Hệ thống tuân thủ GDPR/PDPA, hỗ trợ consent management và audit hàng quý.
- **Metrics**:
  - Compliance audit frequency: Hàng quý.
  - Consent opt-in rate: >95% cho Customers.
  - Data breach incidents: 0.
- **Test Scenarios**:
  - Audit GDPR/PDPA compliance với third-party auditors.
  - Test consent management flow cho Customer persona.
- **Dependencies**: FR-003 (User Authentication), FR-005 (OTP Verification).

**Assumptions/Constraints**:
- Assumes sử dụng AWS Shield cho DDoS protection.
- Constraint: Consent phải được ghi nhận trước khi thu thập PII.

**Dependencies/Risks**:
- Dependencies: AWS Shield, Okta (SSO).
- Risks: Non-compliance dẫn đến phạt → Mitigation: Quarterly audits.

**Acceptance Criteria/Testable Items**:
- 100% Customers được yêu cầu consent trước khi thu thập PII.
- Audit hàng quý không phát hiện vi phạm GDPR/PDPA.
- 0 data breach incidents trong test.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 05.10 NFR Priorities Matrix

**References**: BRD.md (Section 2), Part03_User_Personas_And_Use_Cases, Part04_Functional_Requirements

**Mục đích**: Xếp hạng ưu tiên các NFRs để định hướng phát triển và test.

**Ý nghĩa**: Đảm bảo tập trung vào NFRs quan trọng nhất cho PSP.

**Cách làm**: Đánh giá NFRs dựa trên impact và feasibility.

**Nội dung cần có**:
- **Priorities Matrix**:
  | NFR ID | Tính năng | Priority | Impact | Feasibility | Dependencies |
  |--------|-----------|----------|--------|-------------|--------------|
  | NFR-001 | Performance | High | Tăng form completion rate (>90%) | Cao (AWS ECS, Redis) | FR-001, FR-007 |
  | NFR-002 | Scalability | High | Hỗ trợ 10K users | Cao (AWS auto-scaling) | FR-007, FR-008 |
  | NFR-003 | Security | Critical | Bảo vệ PII, tránh breach | Cao (AES-256, Okta) | FR-003, FR-004 |
  | NFR-004 | Reliability | High | Uptime 99.9% | Cao (AWS Multi-AZ) | FR-007, FR-010 |
  | NFR-005 | Maintainability | Medium | Giảm chi phí bảo trì | Cao (CI/CD, TypeScript) | All FRs |
  | NFR-006 | Auditability | Medium | Tuân thủ GDPR/PDPA | Cao (AWS S3, CloudTrail) | FR-003, FR-007 |
  | NFR-007 | Usability | High | Tăng engagement (~$1 gifts) | Cao (React, Tailwind) | FR-006, FR-007 |
  | NFR-008 | Compliance | Critical | Tránh phạt pháp lý | Cao (AWS Shield, audits) | FR-003, FR-005 |

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md (Section 2), Part03, Part04
- **Kết nối với**: Part03_User_Personas_And_Use_Cases, Part04_Functional_Requirements

**Mục đích của node này**: Xác định ưu tiên NFRs để phân bổ nguồn lực.

**Assumptions/Constraints**:
- Assumes ưu tiên dựa trên impact đến Customer và Brand Admin.
- Constraint: Critical NFRs (Security, Compliance) phải đạt 100% trước release.

**Dependencies/Risks**:
- Dependencies: Part04 để ánh xạ NFRs với FRs.
- Risks: Sai ưu tiên → Mitigation: Stakeholder review.

**Acceptance Criteria/Testable Items**:
- Matrix bao gồm 8 NFRs với priority rõ ràng.
- Priority được stakeholders phê duyệt.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |




# Part06 - System Architecture

## Structure of Part06 (Section 1)
```
Part06_System_Architecture/
├── 06.1_Architecture_Overview.md
├── 06.2_Logical_Architecture/
│   ├── 06.2.1_Layered_Architecture.md
│   ├── 06.2.2_Microservices_Design.md
│   ├── 06.2.3_Service_Boundaries.md
│   ├── 06.2.4_Service_Dependencies.md
│   └── 06.2.5_Service_Catalog.md
```

---

## 06.1 Architecture Overview

**References**: BRD.md (Section 1), Product-Sampling-Vision-and-Strategy Document.md (Section 1), System_Feature_Tree.md (Section 3), Part04_Functional_Requirements, Part05_Non_Functional_Requirements

**Mục đích**: Cung cấp cái nhìn tổng quan về kiến trúc hệ thống PSP, định hướng triển khai 7 microservices để hỗ trợ phân phối quà mẫu giá trị thấp (~$1).

**Ý nghĩa**: Đảm bảo đội phát triển hiểu rõ cấu trúc hệ thống, đáp ứng các yêu cầu chức năng (Part04) và phi chức năng (Part05).

**Cách làm**: Mô tả kiến trúc microservices, công nghệ sử dụng, và cách hỗ trợ các FRs/NFRs.

**Nội dung cần có**:
- **Tổng quan**: Hệ thống PSP sử dụng kiến trúc microservices triển khai trên AWS, với 7 dịch vụ chính: Campaign Management, Identity, Redemption, Analytics, Notification, Fraud Detection, Intelligence. Hệ thống hỗ trợ 14 FRs (Part04) và 8 NFRs (Part05), tối ưu hóa thu thập dữ liệu khách hàng qua quà mẫu giá trị thấp với engagement cao (>90% form completion rate).
- **Kiến trúc tổng quan**:
  ```mermaid
  graph TD
      A[Client: PWA] -->|HTTPS| B[API Gateway: AWS API Gateway]
      B --> C[Campaign Management Service]
      B --> D[Identity Service]
      B --> E[Redemption Service]
      B --> F[Analytics Service]
      B --> G[Notification Service]
      B --> H[Fraud Detection Service]
      B --> I[Intelligence Service]
      C --> J[PostgreSQL: campaigns_db]
      D --> K[PostgreSQL: users_db]
      E --> L[PostgreSQL: redemptions_db]
      F --> M[MongoDB: analytics_db]
      G --> N[Redis: message_queue]
      H --> O[MongoDB: fraud_db]
      I --> P[MongoDB: recommendations_db]
      G --> Q[Twilio: SMS/Email]
      E --> R[POS Devices: Offline Sync]
      B --> S[AWS CloudWatch: Monitoring]
      B --> T[AWS S3: Assets]
  ```
- **Công nghệ sử dụng**:
  - **Frontend**: PWA (React, Tailwind CSS).
  - **Backend**: TypeScript/Node.js, AWS ECS (Docker).
  - **Databases**: PostgreSQL (campaigns, users, redemptions), MongoDB (analytics, fraud, recommendations), Redis (caching, queues).
  - **Infra**: AWS API Gateway, ELB, CloudWatch, S3, KMS, Shield.
  - **External Services**: Twilio (SMS/Email), Okta (SSO), Scandit (barcode scanning).
- **Mục tiêu kiến trúc**:
  - Hỗ trợ 10K concurrent users (NFR-002).
  - API response time <500ms (NFR-001).
  - Uptime 99.9% (NFR-004).
  - Tuân thủ GDPR/PDPA (NFR-008).

**Tài liệu tham khảo**:
- **Đầu vào từ**: BRD.md, System_Feature_Tree.md, Part04, Part05
- **Kết nối với**: Part03_User_Personas_And_Use_Cases, Part04, Part05

**Mục đích của node này**: Tóm tắt kiến trúc và công nghệ, cung cấp context cho Logical Architecture.

**Assumptions/Constraints**:
- Assumes triển khai trên AWS với microservices độc lập.
- Constraint: Hệ thống phải hỗ trợ PWA trên 3G/4G networks.

**Dependencies/Risks**:
- Dependencies: Part04 (FRs), Part05 (NFRs).
- Risks: Service coupling dẫn đến lỗi → Mitigation: Strict service boundaries.

**Acceptance Criteria/Testable Items**:
- Diagram phản ánh đúng 7 microservices và dependencies.
- Tech stack được phê duyệt bởi Tech Lead.
- Architecture hỗ trợ tất cả FRs/NFRs.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06.2 Logical Architecture

### 06.2.1 Layered Architecture

**References**: BRD.md (Section 2), Part04_Functional_Requirements, Part05_Non_Functional_Requirements

**Mục đích**: Định nghĩa các tầng kiến trúc (Presentation, Application, Data) để hỗ trợ microservices.

**Ý nghĩa**: Đảm bảo sự phân tách rõ ràng giữa các tầng, tăng maintainability (NFR-005).

**Cách làm**: Mô tả các tầng và vai trò trong PSP.

**Nội dung cần có**:
- **Mô tả**:
  - **Presentation Layer**: PWA (React, Tailwind CSS) cung cấp UI cho Customer, POS Staff, Brand Admin, Platform Admin. Hỗ trợ responsive design, đa ngôn ngữ (Anh/Việt), và form completion rate >90% (NFR-007).
  - **Application Layer**: 7 microservices (TypeScript/Node.js) chạy trên AWS ECS, giao tiếp qua AWS API Gateway. Xử lý logic nghiệp vụ (FR-001 đến FR-014).
  - **Data Layer**: PostgreSQL (structured data: campaigns, users, redemptions), MongoDB (unstructured: analytics, fraud, recommendations), Redis (caching, queues).
- **Diagram**:
  ```mermaid
  graph TD
      A[Presentation Layer: PWA] -->|HTTPS| B[Application Layer: Microservices]
      B --> C[Campaign Management]
      B --> D[Identity]
      B --> E[Redemption]
      B --> F[Analytics]
      B --> G[Notification]
      B --> H[Fraud Detection]
      B --> I[Intelligence]
      B --> J[API Gateway: AWS]
      C --> K[Data Layer: PostgreSQL]
      D --> K
      E --> K
      F --> L[MongoDB]
      H --> L
      I --> L
      G --> M[Redis]
      J --> N[AWS CloudWatch]
      J --> O[AWS S3]
  ```
- **Dependencies**: FR-006 (Ads Format Management), NFR-001 (Performance), NFR-007 (Usability).

**Assumptions/Constraints**:
- Assumes PWA sử dụng service workers cho offline redemption.
- Constraint: Data layer phải hỗ trợ sharding cho MongoDB.

**Dependencies/Risks**:
- Dependencies: AWS ECS, API Gateway.
- Risks: Layer coupling → Mitigation: Use RESTful APIs và event-driven design.

**Acceptance Criteria/Testable Items**:
- Presentation layer load trong <2s (NFR-007).
- Application layer xử lý 1K requests/s (NFR-001).
- Data layer đảm bảo data consistency trong 95% test cases.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.2.2 Microservices Design

**References**: System_Feature_Tree.md (Section 3), Part04_Functional_Requirements

**Mục đích**: Mô tả thiết kế microservices với 7 dịch vụ chính.

**Ý nghĩa**: Đảm bảo mỗi dịch vụ độc lập, dễ scale (NFR-002), và maintainable (NFR-005).

**Cách làm**: Mô tả chức năng, công nghệ, và giao tiếp của mỗi microservice.

**Nội dung cần có**:
- **Mô tả**:
  - **Campaign Management Service**: Xử lý FR-001 (Campaign CRUD), FR-002 (Barcode Management), FR-006 (Ads Format Management). Tech: TypeScript/Node.js, PostgreSQL.
  - **Identity Service**: Xử lý FR-003 (User Authentication), FR-004 (User Management), FR-005 (OTP Verification). Tech: TypeScript/Node.js, PostgreSQL, Redis.
  - **Redemption Service**: Xử lý FR-007 (Barcode Redemption). Tech: TypeScript/Node.js, PostgreSQL, LocalDB (offline sync).
  - **Analytics Service**: Xử lý FR-008 (Real-Time Analytics). Tech: TypeScript/Node.js, MongoDB.
  - **Notification Service**: Xử lý FR-009 (CRM Integration), FR-010 (Notification System). Tech: TypeScript/Node.js, Redis, Twilio.
  - **Fraud Detection Service**: Xử lý FR-011 (Fraud Detection). Tech: TypeScript/Node.js, MongoDB.
  - **Intelligence Service**: Xử lý FR-012 (A/B Testing), FR-013 (Recommendation Engine), FR-014 (Advanced Reporting). Tech: TypeScript/Node.js, MongoDB.
- **Giao tiếp**: RESTful APIs qua AWS API Gateway, event-driven với AWS SNS/SQS cho async tasks (e.g., notifications).
- **Diagram**:
  ```mermaid
  graph TD
      A[API Gateway] -->|REST| B[Campaign Management]
      A -->|REST| C[Identity]
      A -->|REST| D[Redemption]
      A -->|REST| E[Analytics]
      A -->|SQS| F[Notification]
      A -->|REST| G[Fraud Detection]
      A -->|REST| H[Intelligence]
      F -->|SNS| I[Twilio]
      D -->|Offline| J[POS Devices]
      B --> K[PostgreSQL]
      C --> K
      D --> K
      E --> L[MongoDB]
      G --> L
      H --> L
      F --> M[Redis]
  ```

**Assumptions/Constraints**:
- Assumes mỗi microservice có repository riêng (GitHub).
- Constraint: API phải stateless, hỗ trợ horizontal scaling.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS, API Gateway.
- Risks: Service downtime → Mitigation: Health checks và retries.

**Acceptance Criteria/Testable Items**:
- Mỗi microservice xử lý đúng FRs được gán.
- APIs đạt response time <500ms (NFR-001).
- Event-driven tasks (e.g., notifications) hoàn tất trong <5s.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.2.3 Service Boundaries

**References**: Part04_Functional_Requirements, System_Feature_Tree.md (Section 3)

**Mục đích**: Xác định ranh giới trách nhiệm của từng microservice.

**Ý nghĩa**: Ngăn service coupling, tăng maintainability (NFR-005) và scalability (NFR-002).

**Cách làm**: Mô tả trách nhiệm và data ownership của mỗi microservice.

**Nội dung cần có**:
- **Mô tả**:
  - **Campaign Management Service**: Quản lý campaigns, barcodes, ads formats (FR-001, FR-002, FR-006). Data: Campaign metadata, barcode pools, template assets.
  - **Identity Service**: Quản lý users, authentication, OTP (FR-003, FR-004, FR-005). Data: User profiles, roles, OTP cache.
  - **Redemption Service**: Xử lý barcode redemption (online/offline) (FR-007). Data: Redemption logs, offline sync data.
  - **Analytics Service**: Cung cấp real-time metrics, advanced analytics (FR-008). Data: Metrics, funnel data.
  - **Notification Service**: Gửi SMS/Email/Push, đồng bộ CRM (FR-009, FR-010). Data: Notification queue, CRM sync logs.
  - **Fraud Detection Service**: Phát hiện gian lận (FR-011). Data: Fraud scores, device fingerprints.
  - **Intelligence Service**: A/B testing, recommendations, advanced reporting (FR-012, FR-013, FR-014). Data: Experiment data, recommendation models.
- **Boundaries**:
  - Mỗi service chỉ truy cập database riêng (e.g., Campaign Management không truy cập users_db).
  - Giao tiếp giữa services qua REST APIs hoặc SQS/SNS.
- **Diagram**:
  ```mermaid
  classDiagram
      class Campaign_Management {
          +FR-001, FR-002, FR-006
          +campaigns_db: PostgreSQL
          +Assets: AWS S3
      }
      class Identity {
          +FR-003, FR-004, FR-005
          +users_db: PostgreSQL
          +OTP_cache: Redis
      }
      class Redemption {
          +FR-007
          +redemptions_db: PostgreSQL
          +LocalDB: Offline
      }
      class Analytics {
          +FR-008
          +analytics_db: MongoDB
      }
      class Notification {
          +FR-009, FR-010
          +message_queue: Redis
          +Twilio: External
      }
      class Fraud_Detection {
          +FR-011
          +fraud_db: MongoDB
      }
      class Intelligence {
          +FR-012, FR-013, FR-014
          +recommendations_db: MongoDB
      }
      Campaign_Management --> Notification : SQS
      Identity --> Notification : SQS
      Redemption --> Fraud_Detection : REST
      Analytics --> Intelligence : REST
  ```

**Assumptions/Constraints**:
- Assumes Domain-Driven Design (DDD) cho service boundaries.
- Constraint: Không có direct DB access giữa các services.

**Dependencies/Risks**:
- Dependencies: FR-001 đến FR-014.
- Risks: Boundary overlap → Mitigation: DDD workshops với dev team.

**Acceptance Criteria/Testable Items**:
- Mỗi service chỉ truy cập database được gán.
- No direct DB coupling trong integration tests.
- Service boundaries được phê duyệt bởi Tech Lead.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.2.4 Service Dependencies

**References**: Part04_Functional_Requirements, System_Feature_Tree.md (Section 3)

**Mục đích**: Mô tả dependencies giữa các microservices để đảm bảo integration.

**Ý nghĩa**: Giảm rủi ro lỗi tích hợp, hỗ trợ scalability (NFR-002).

**Cách làm**: Liệt kê dependencies và giao tiếp (sync/async).

**Nội dung cần có**:
- **Dependencies**:
  | Service | Depends On | Type | Description |
  |---------|------------|------|-------------|
  | Campaign Management | Notification | Async (SQS) | Gửi thông báo khi campaign được tạo. |
  | Identity | Notification | Async (SQS) | Gửi OTP qua SMS/Email. |
  | Redemption | Campaign Management | Sync (REST) | Validate barcode với campaign. |
  | Redemption | Fraud Detection | Sync (REST) | Kiểm tra fraud score trước khi redeem. |
  | Analytics | Redemption | Sync (REST) | Thu thập redemption data cho metrics. |
  | Notification | Identity | Sync (REST) | Validate user trước khi gửi notification. |
  | Fraud Detection | Redemption | Sync (REST) | Nhận redemption events để tính fraud score. |
  | Intelligence | Analytics | Sync (REST) | Sử dụng analytics data cho A/B testing, recommendations. |
- **Diagram**:
  ```mermaid
  graph TD
      A[Campaign Management] -->|SQS| B[Notification]
      C[Identity] -->|SQS| B
      D[Redemption] -->|REST| A
      D -->|REST| E[Fraud Detection]
      F[Analytics] -->|REST| D
      B -->|REST| C
      E -->|REST| D
      G[Intelligence] -->|REST| F
  ```

**Assumptions/Constraints**:
- Assumes sử dụng AWS SNS/SQS cho async communication.
- Constraint: REST APIs phải idempotent.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS, API Gateway.
- Risks: Dependency loops → Mitigation: Circuit breakers, retries.

**Acceptance Criteria/Testable Items**:
- Dependencies được xác định chính xác cho 7 services.
- Async tasks (SQS) hoàn tất trong <5s.
- REST calls giữa services đạt latency <500ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.2.5 Service Catalog

**References**: Part04_Functional_Requirements, System_Feature_Tree.md (Section 3)

**Mục đích**: Cung cấp danh mục chi tiết của 7 microservices với API endpoints và trách nhiệm.

**Ý nghĩa**: Hỗ trợ dev team triển khai và test các services.

**Cách làm**: Liệt kê mỗi service với FRs, APIs, và tech stack.

**Nội dung cần có**:
- **Service Catalog**:
  | Service | FRs | APIs | Tech Stack | Database |
  |---------|-----|------|------------|----------|
  | Campaign Management | FR-001, FR-002, FR-006 | POST/GET/PUT/DELETE /api/campaigns, /api/barcodes, /api/ads-formats | TypeScript/Node.js, AWS ECS | PostgreSQL, AWS S3 |
  | Identity | FR-003, FR-004, FR-005 | POST /api/auth/login, /api/auth/sso, /api/users, /api/otp | TypeScript/Node.js, AWS ECS | PostgreSQL, Redis |
  | Redemption | FR-007 | POST/GET /api/redemptions | TypeScript/Node.js, AWS ECS | PostgreSQL, LocalDB |
  | Analytics | FR-008 | GET /api/analytics/realtime | TypeScript/Node.js, AWS ECS | MongoDB |
  | Notification | FR-009, FR-010 | POST /api/notifications/sms, /email, /push, /crm | TypeScript/Node.js, AWS ECS | Redis, PostgreSQL |
  | Fraud Detection | FR-011 | POST /api/fraud/score, /rules, /fingerprint | TypeScript/Node.js, AWS ECS | MongoDB |
  | Intelligence | FR-012, FR-013, FR-014 | POST/GET /api/ab-tests, /recommendations, /reports | TypeScript/Node.js, AWS ECS | MongoDB |

**Assumptions/Constraints**:
- Assumes mỗi service có Swagger docs cho APIs.
- Constraint: APIs phải tuân thủ REST standards.

**Dependencies/Risks**:
- Dependencies: AWS API Gateway, Swagger.
- Risks: API mismatch → Mitigation: API-first design với contract testing.

**Acceptance Criteria/Testable Items**:
- Catalog bao gồm đầy đủ 7 services với APIs chính xác.
- Mỗi service ánh xạ đúng FRs từ Part04.
- Swagger docs được generate và phê duyệt.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |


# Part06 - System Architecture (Section 2)

## Structure of Part06 (Section 2)
```
Part06_System_Architecture/
├── 06.3_Physical_Architecture/
│   ├── 06.3.1_Deployment_Diagram.md
│   ├── 06.3.2_Infrastructure_Components.md
│   ├── 06.3.3_Network_Topology.md
│   ├── 06.3.4_Kubernetes_Architecture.md
│   └── 06.3.5_Service_Mesh_Design.md
├── 06.4_Technology_Stack/
│   ├── 06.4.1_Frontend_Technologies.md
│   ├── 06.4.2_Backend_Technologies.md
│   ├── 06.4.3_Database_Technologies.md
│   ├── 06.4.4_Integration_Technologies.md
│   ├── 06.4.5_DevOps_Tools.md
│   └── 06.4.6_Observability_Stack.md
```

---

## 06.3 Physical Architecture

### 06.3.1 Deployment Diagram

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements, 06.2_Logical_Architecture

**Mục đích**: Mô tả cách triển khai 7 microservices trên hạ tầng vật lý (AWS EKS).

**Ý nghĩa**: Đảm bảo hệ thống đáp ứng NFR-002 (Scalability, 10K concurrent users) và NFR-004 (Reliability, 99.9% uptime).

**Cách làm**: Cung cấp deployment diagram với các thành phần vật lý và mối quan hệ.

**Nội dung cần có**:
- **Mô tả**: Hệ thống PSP triển khai trên AWS EKS với 7 microservices, sử dụng AWS API Gateway, ELB, và Multi-AZ RDS. PWA được phục vụ qua CloudFront, hỗ trợ offline redemption cho POS devices.
- **Deployment Diagram**:
  ```mermaid
  graph TD
      A[Client: PWA] -->|HTTPS| B[CloudFront: CDN]
      B -->|HTTPS| C[API Gateway]
      C -->|HTTPS| D[ELB: Load Balancer]
      D --> E[EKS Cluster]
      E --> F[Campaign Management Pod]
      E --> G[Identity Pod]
      E --> H[Redemption Pod]
      E --> I[Analytics Pod]
      E --> J[Notification Pod]
      E --> K[Fraud Detection Pod]
      E --> L[Intelligence Pod]
      F --> M[RDS PostgreSQL: Multi-AZ]
      G --> M
      H --> M
      I --> N[DocumentDB: MongoDB]
      K --> N
      L --> N
      J --> O[ElastiCache: Redis]
      J --> P[Twilio: SMS/Email]
      H --> Q[POS Devices: Offline Sync]
      E --> R[CloudWatch: Monitoring]
      F --> S[S3: Assets]
      C --> T[KMS: Encryption]
      C --> U[Shield: DDoS Protection]
  ```
- **Dependencies**: FR-001 to FR-014, NFR-001 (Performance), NFR-003 (Security).

**Assumptions/Constraints**:
- Assumes EKS cluster với minimum 3 nodes (t3.medium).
- Constraint: Deployment phải hỗ trợ auto-scaling và zero-downtime updates.

**Dependencies/Risks**:
- Dependencies: AWS EKS, RDS, CloudFront.
- Risks: Misconfigured EKS → Mitigation: Use Infrastructure as Code (Terraform).

**Acceptance Criteria/Testable Items**:
- Deployment diagram phản ánh đúng 7 microservices và components.
- EKS cluster xử lý 10K concurrent users trong load test.
- Zero-downtime deployment trong 95% test cases.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.3.2 Infrastructure Components

**References**: Part05_Non_Functional_Requirements, 06.2_Logical_Architecture

**Mục đích**: Liệt kê và mô tả các thành phần hạ tầng vật lý của PSP.

**Ý nghĩa**: Đảm bảo hạ tầng hỗ trợ NFR-002 (Scalability) và NFR-004 (Reliability).

**Cách làm**: Mô tả chi tiết các thành phần AWS và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **AWS EKS**: Chạy 7 microservices (TypeScript/Node.js) trong Docker containers, hỗ trợ auto-scaling.
  - **AWS API Gateway**: Quản lý API requests, rate limiting, và authentication.
  - **AWS ELB**: Phân phối traffic đến EKS pods, đảm bảo latency <500ms (NFR-001).
  - **AWS RDS PostgreSQL (Multi-AZ)**: Lưu campaigns, users, redemptions, đảm bảo 99.9% uptime (NFR-004).
  - **AWS DocumentDB (MongoDB)**: Lưu analytics, fraud, recommendations data, hỗ trợ sharding.
  - **AWS ElastiCache (Redis)**: Caching và message queue cho OTP, notifications.
  - **AWS CloudFront**: Phục vụ PWA assets, đảm bảo UI load <2s (NFR-007).
  - **AWS S3**: Lưu ads assets (images, videos).
  - **AWS KMS**: Quản lý encryption keys cho PII (NFR-003).
  - **AWS Shield**: Bảo vệ chống DDoS (NFR-003).
  - **AWS CloudWatch**: Monitoring và logging, hỗ trợ NFR-006 (Auditability).
  - **POS Devices**: Redeem Tool với LocalDB cho offline sync (FR-007).
- **Dependencies**: FR-001 to FR-014, NFR-001 to NFR-008.

**Assumptions/Constraints**:
- Assumes EKS cluster sử dụng t3.medium instances, scale tối đa 10 nodes.
- Constraint: RDS và DocumentDB phải hỗ trợ Multi-AZ và backups.

**Dependencies/Risks**:
- Dependencies: AWS EKS, RDS, DocumentDB.
- Risks: Infra costs vượt ngân sách → Mitigation: Optimize instance types, use reserved instances.

**Acceptance Criteria/Testable Items**:
- Tất cả components được liệt kê và ánh xạ đúng với FRs/NFRs.
- RDS Multi-AZ đạt 99.9% uptime trong test.
- CloudFront đảm bảo asset load time <1s.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.3.3 Network Topology

**References**: Part05_Non_Functional_Requirements, 06.2_Logical_Architecture

**Mục đích**: Mô tả cấu trúc mạng để đảm bảo bảo mật và hiệu suất.

**Ý nghĩa**: Hỗ trợ NFR-003 (Security) và NFR-001 (Performance).

**Cách làm**: Cung cấp network diagram và mô tả VPC, subnets, security groups.

**Nội dung cần có**:
- **Mô tả**:
  - **VPC**: Single VPC (us-east-1) với public và private subnets.
  - **Public Subnets**: CloudFront, API Gateway, ELB.
  - **Private Subnets**: EKS cluster, RDS, DocumentDB, ElastiCache.
  - **Security Groups**:
    - API Gateway: Allow HTTPS (port 443) từ Internet.
    - EKS: Allow traffic từ ELB (port 80/443).
    - RDS/DocumentDB: Allow traffic từ EKS (port 5432/27017).
    - ElastiCache: Allow traffic từ Notification Service (port 6379).
  - **NAT Gateway**: Cho private subnets truy cập Twilio, Okta.
  - **VPC Endpoints**: S3, CloudWatch để tránh public Internet.
- **Network Diagram**:
  ```mermaid
  graph TD
      A[Internet] -->|HTTPS| B[CloudFront]
      A -->|HTTPS| C[API Gateway]
      C -->|HTTPS| D[ELB]
      B --> E[VPC: us-east-1]
      D --> E
      E --> F[Public Subnet: CloudFront, API Gateway, ELB]
      E --> G[Private Subnet: EKS Cluster]
      E --> H[Private Subnet: RDS PostgreSQL]
      E --> I[Private Subnet: DocumentDB]
      E --> J[Private Subnet: ElastiCache]
      G --> K[Campaign Management]
      G --> L[Identity]
      G --> M[Redemption]
      G --> N[Analytics]
      G --> O[Notification]
      G --> P[Fraud Detection]
      G --> Q[Intelligence]
      K --> H
      L --> H
      M --> H
      N --> I
      P --> I
      Q --> I
      O --> J
      O -->|HTTPS| R[Twilio]
      E --> S[NAT Gateway]
      S --> R
      E --> T[VPC Endpoint: S3, CloudWatch]
  ```

**Assumptions/Constraints**:
- Assumes VPC với 2 AZs (us-east-1a, us-east-1b).
- Constraint: Chỉ HTTPS traffic được phép vào public subnets.

**Dependencies/Risks**:
- Dependencies: AWS VPC, NAT Gateway.
- Risks: Network misconfiguration → Mitigation: Use Terraform, network tests.

**Acceptance Criteria/Testable Items**:
- VPC hỗ trợ traffic từ 10K concurrent users.
- Security groups chặn 100% unauthorized access trong test.
- Latency giữa EKS và RDS/DocumentDB <100ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.3.4 Kubernetes Architecture

**References**: Part05_Non_Functional_Requirements, 06.2_Logical_Architecture

**Mục đích**: Mô tả cách triển khai microservices trên AWS EKS.

**Ý nghĩa**: Đảm bảo NFR-002 (Scalability) và NFR-004 (Reliability) với Kubernetes.

**Cách làm**: Mô tả EKS cluster, node groups, và pod configurations.

**Nội dung cần có**:
- **Mô tả**:
  - **EKS Cluster**: Single cluster (us-east-1) với 2 node groups (app, db).
  - **Node Group: App**: t3.medium instances, auto-scaling từ 3-10 nodes, chạy 7 microservices.
  - **Node Group: DB**: r5.large instances, fixed 2 nodes, chạy sidecar proxies cho RDS/DocumentDB.
  - **Pod Configurations**:
    - Mỗi microservice chạy trong pod riêng (1 container/pod).
    - Health checks: `/health` endpoint, liveness/readiness probes.
    - Resource limits: 0.5 CPU, 1GB RAM/pod.
  - **Horizontal Pod Autoscaler (HPA)**: Scale pods dựa trên CPU (80%) và memory (80%).
  - **Cluster Autoscaler**: Scale node group dựa trên pod demand.
- **Diagram**:
  ```mermaid
  graph TD
      A[EKS Cluster: us-east-1]
      A --> B[Node Group: App]
      A --> C[Node Group: DB]
      B --> D[Campaign Management Pod]
      B --> E[Identity Pod]
      B --> F[Redemption Pod]
      B --> G[Analytics Pod]
      B --> H[Notification Pod]
      B --> I[Fraud Detection Pod]
      B --> J[Intelligence Pod]
      C --> K[RDS Proxy]
      C --> L[DocumentDB Proxy]
      D --> M[Container: TypeScript/Node.js]
      E --> N[Container: TypeScript/Node.js]
      F --> O[Container: TypeScript/Node.js]
      G --> P[Container: TypeScript/Node.js]
      H --> Q[Container: TypeScript/Node.js]
      I --> R[Container: TypeScript/Node.js]
      J --> S[Container: TypeScript/Node.js]
      A --> T[CloudWatch: Metrics]
      A --> U[HPA: Auto-scaling]
  ```

**Assumptions/Constraints**:
- Assumes EKS version 1.28, Kubernetes 1.28.
- Constraint: Pods phải restart trong <30s sau failure.

**Dependencies/Risks**:
- Dependencies: AWS EKS, CloudWatch.
- Risks: Pod crashes → Mitigation: Liveness/readiness probes, logging.

**Acceptance Criteria/Testable Items**:
- EKS cluster scale từ 3-10 nodes trong <5 phút.
- Pods đạt 99.9% uptime trong test.
- HPA triggers chính xác tại 80% CPU/memory.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.3.5 Service Mesh Design

**References**: Part05_Non_Functional_Requirements, 06.2_Logical_Architecture

**Mục đích**: Triển khai service mesh để quản lý giao tiếp giữa microservices.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-006 (Auditability) với observability và mTLS.

**Cách làm**: Sử dụng Istio trên EKS để quản lý traffic, security, và monitoring.

**Nội dung cần có**:
- **Mô tả**:
  - **Istio Service Mesh**: Chạy trên EKS, cung cấp mTLS, traffic management, và observability.
  - **Components**:
    - **Istio Gateway**: Proxy cho API Gateway traffic.
    - **Sidecar Proxies**: Envoy proxies tiêm vào mỗi pod, xử lý mTLS và logging.
    - **Istio Control Plane**: Quản lý policies, telemetry.
  - **Features**:
    - mTLS: Encrypt traffic giữa services (NFR-003).
    - Traffic routing: Canary deployments cho FR-012 (A/B Testing).
    - Observability: Metrics và traces qua Prometheus/Grafana.
  - **Configuration**:
    - mTLS: Strict mode.
    - Rate limiting: 1K requests/s/service.
    - Circuit breaking: Retry 3 lần, timeout 5s.
- **Diagram**:
  ```mermaid
  graph TD
      A[API Gateway] -->|HTTPS| B[Istio Gateway]
      B --> C[EKS Cluster]
      C --> D[Campaign Management Pod + Envoy]
      C --> E[Identity Pod + Envoy]
      C --> F[Redemption Pod + Envoy]
      C --> G[Analytics Pod + Envoy]
      C --> H[Notification Pod + Envoy]
      C --> I[Fraud Detection Pod + Envoy]
      C --> J[Intelligence Pod + Envoy]
      C --> K[Istio Control Plane]
      K --> L[Prometheus: Metrics]
      K --> M[Grafana: Dashboards]
      D -->|mTLS| E
      E -->|mTLS| H
      F -->|mTLS| I
      G -->|mTLS| J
      H -->|mTLS| N[Twilio]
  ```

**Assumptions/Constraints**:
- Assumes Istio 1.17 trên EKS.
- Constraint: Service mesh không được tăng latency quá 50ms.

**Dependencies/Risks**:
- Dependencies: Istio, Prometheus, Grafana.
- Risks: Istio misconfiguration → Mitigation: Automated Istio configs via Helm.

**Acceptance Criteria/Testable Items**:
- mTLS được áp dụng cho 100% inter-service traffic.
- Latency do service mesh <50ms trong test.
- Prometheus/Grafana thu thập metrics chính xác.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06.4 Technology Stack

### 06.4.1 Frontend Technologies

**References**: Part04_Functional_Requirements (FR-006), Part05_Non_Functional_Requirements (NFR-007)

**Mục đích**: Mô tả tech stack cho PWA để hỗ trợ UX và engagement (quà mẫu ~$1).

**Ý nghĩa**: Đảm bảo NFR-007 (Usability, form completion rate >90%).

**Cách làm**: Liệt kê công nghệ và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **React (18.x)**: Framework cho PWA, hỗ trợ responsive UI.
  - **Tailwind CSS (3.x)**: Styling cho landing pages, banners (FR-006).
  - **Service Workers**: Hỗ trợ offline redemption (FR-007).
  - **TypeScript (5.x)**: Type safety cho frontend code.
  - **Vite (5.x)**: Build tool, đảm bảo build time <10s.
  - **CDN**: AWS CloudFront, đảm bảo asset load <1s (NFR-007).
- **Dependencies**: FR-006 (Ads Format Management), NFR-007 (Usability).

**Assumptions/Constraints**:
- Assumes PWA hỗ trợ Chrome, Safari (mobile/desktop).
- Constraint: UI phải đa ngôn ngữ (Anh/Việt).

**Dependencies/Risks**:
- Dependencies: AWS CloudFront, React.
- Risks: PWA không tương thích với old browsers → Mitigation: Polyfills, browser testing.

**Acceptance Criteria/Testable Items**:
- PWA load time <2s trên 3G/4G (NFR-007).
- Form completion rate >90% trong usability tests.
- Offline redemption hoạt động trên POS devices.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.4.2 Backend Technologies

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-001, NFR-005)

**Mục đích**: Mô tả tech stack cho 7 microservices.

**Ý nghĩa**: Đảm bảo NFR-001 (Performance, <500ms API response) và NFR-005 (Maintainability).

**Cách làm**: Liệt kê công nghệ và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **TypeScript (5.x)**: Ngôn ngữ chính, type safety.
  - **Node.js (20.x)**: Runtime cho microservices, hỗ trợ async I/O.
  - **Express (4.x)**: Framework cho REST APIs.
  - **Docker (24.x)**: Containerization cho EKS deployment.
  - **AWS SDK**: Tích hợp với S3, CloudWatch, KMS.
- **Dependencies**: FR-001 to FR-014, NFR-001, NFR-005.

**Assumptions/Constraints**:
- Assumes mỗi microservice có repository riêng (GitHub).
- Constraint: APIs phải stateless, RESTful.

**Dependencies/Risks**:
- Dependencies: AWS ECS, Docker.
- Risks: Dependency conflicts → Mitigation: Lock file versioning.

**Acceptance Criteria/Testable Items**:
- APIs đạt response time <500ms (NFR-001).
- Codebase đạt 80% test coverage (NFR-005).
- Docker images build và deploy không lỗi.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.4.3 Database Technologies

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-004)

**Mục đích**: Mô tả database stack để lưu trữ và truy xuất dữ liệu.

**Ý nghĩa**: Đảm bảo NFR-004 (Reliability, 99.9% uptime) và NFR-003 (Security).

**Cách làm**: Liệt kê databases và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **PostgreSQL (15.x)**: Lưu campaigns, users, redemptions (FR-001, FR-003, FR-004, FR-007). Multi-AZ, backups daily.
  - **MongoDB (DocumentDB, 5.x)**: Lưu analytics, fraud, recommendations (FR-008, FR-011, FR-012, FR-013, FR-014). Sharding enabled.
  - **Redis (ElastiCache, 7.x)**: Caching (OTP, sessions) và message queue (notifications) (FR-005, FR-010).
  - **LocalDB (SQLite)**: Lưu offline redemption data trên POS devices (FR-007).
- **Dependencies**: FR-001 to FR-014, NFR-004.

**Assumptions/Constraints**:
- Assumes RDS PostgreSQL và DocumentDB chạy Multi-AZ.
- Constraint: PII phải được mã hóa (AES-256, NFR-003).

**Dependencies/Risks**:
- Dependencies: AWS RDS, DocumentDB, ElastiCache.
- Risks: Data inconsistency → Mitigation: Transactional queries, sharding.

**Acceptance Criteria/Testable Items**:
- PostgreSQL/DocumentDB đạt 99.9% uptime.
- Redis latency <10ms cho caching.
- LocalDB sync offline data trong <5s khi online.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.4.4 Integration Technologies

**References**: Part04_Functional_Requirements (FR-009, FR-010), Part05_Non_Functional_Requirements

**Mục đích**: Mô tả công nghệ tích hợp với external services (Twilio, Okta, etc.).

**Ý nghĩa**: Hỗ trợ FR-009 (CRM Integration), FR-010 (Notification System), và NFR-003 (Security).

**Cách làm**: Liệt kê integration tools và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **AWS SNS/SQS**: Async messaging cho notifications, CRM sync (FR-009, FR-010).
  - **Twilio (API v2010)**: Gửi SMS/Email cho OTP và notifications (FR-005, FR-010).
  - **Okta (OAuth2)**: SSO cho authentication (FR-003).
  - **Scandit SDK**: Barcode scanning (QR/Code128/DataMatrix) cho redemption (FR-007).
  - **HubSpot/Salesforce APIs**: Đồng bộ customer data (FR-009).
- **Dependencies**: FR-003, FR-005, FR-007, FR-009, FR-010.

**Assumptions/Constraints**:
- Assumes Twilio và Okta có uptime 99.9%.
- Constraint: Integration APIs phải idempotent.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS, Twilio, Okta.
- Risks: Third-party downtime → Mitigation: Fallback mechanisms, retries.

**Acceptance Criteria/Testable Items**:
- SNS/SQS xử lý 1K messages/s.
- Twilio gửi SMS/Email trong <5s.
- Okta SSO response time <500ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.4.5 DevOps Tools

**References**: Part05_Non_Functional_Requirements (NFR-005), 06.2_Logical_Architecture

**Mục đích**: Mô tả DevOps tools để hỗ trợ CI/CD và maintainability.

**Ý nghĩa**: Đảm bảo NFR-005 (Maintainability, 80% test coverage) và zero-downtime deployments.

**Cách làm**: Liệt kê tools và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **GitHub**: Source control, repository cho mỗi microservice.
  - **GitHub Actions**: CI/CD pipeline, build/test/deploy trong <10 phút.
  - **Terraform (1.x)**: Infrastructure as Code cho VPC, EKS, RDS.
  - **Helm (3.x)**: Quản lý Kubernetes manifests, Istio configs.
  - **SonarQube**: Code quality, đảm bảo 80% test coverage.
  - **Swagger (OpenAPI 3.0)**: API documentation.
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes CI/CD pipeline chạy trên GitHub Actions.
- Constraint: Deployments phải zero-downtime.

**Dependencies/Risks**:
- Dependencies: GitHub, Terraform, Helm.
- Risks: Pipeline failures → Mitigation: Automated rollback, testing.

**Acceptance Criteria/Testable Items**:
- CI/CD pipeline hoàn tất trong <10 phút.
- Test coverage đạt 80% trên SonarQube.
- Terraform scripts deploy infra không lỗi.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.4.6 Observability Stack

**References**: Part05_Non_Functional_Requirements (NFR-006), 06.3.5_Service_Mesh_Design

**Mục đích**: Mô tả observability tools để monitoring và auditing.

**Ý nghĩa**: Đảm bảo NFR-006 (Auditability, logs truy xuất <5s) và NFR-001 (Performance).

**Cách làm**: Liệt kê tools và vai trò.

**Nội dung cần có**:
- **Mô tả**:
  - **AWS CloudWatch**: Thu thập logs, metrics, và alarms cho EKS, RDS, API Gateway.
  - **Prometheus (2.x)**: Metrics cho Istio service mesh, pod performance.
  - **Grafana (9.x)**: Dashboards cho real-time monitoring (e.g., API latency, redemption rates).
  - **AWS CloudTrail**: Audit logs cho user actions, infra changes (NFR-006).
  - **Loki**: Log aggregation cho microservices.
- **Dependencies**: NFR-006 (Auditability), FR-008 (Real-Time Analytics).

**Assumptions/Constraints**:
- Assumes CloudWatch và Prometheus tích hợp với Istio.
- Constraint: Logs phải truy xuất <5s (NFR-006).

**Dependencies/Risks**:
- Dependencies: AWS CloudWatch, Prometheus, Grafana.
- Risks: Log volume vượt quota → Mitigation: Log rotation, S3 archival.

**Acceptance Criteria/Testable Items**:
- CloudWatch logs truy xuất <5s.
- Grafana dashboards hiển thị metrics real-time (<5s refresh).
- CloudTrail lưu audit logs 12 tháng.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part06 - System Architecture (Section 3)

## Structure of Part06 (Section 3)
```
Part06_System_Architecture/
├── 06.5_Communication_Patterns/
│   ├── 06.5.1_Synchronous_Communication.md
│   ├── 06.5.2_Asynchronous_Communication.md
│   ├── 06.5.3_Event_Driven_Architecture.md
│   ├── 06.5.4_Message_Queue_Design.md
│   └── 06.5.5_Service_Discovery.md
├── 06.6_Scalability_Patterns/
│   ├── 06.6.1_Horizontal_Scaling.md
│   ├── 06.6.2_Caching_Strategy.md
│   ├── 06.6.3_Load_Balancing.md
│   └── 06.6.4_Database_Partitioning.md
```

---

## 06.5 Communication Patterns

### 06.5.1 Synchronous Communication

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-001, NFR-003), 06.2_Logical_Architecture

**Mục đích**: Mô tả giao tiếp đồng bộ (REST APIs) giữa các microservices để xử lý real-time requests.

**Ý nghĩa**: Đảm bảo NFR-001 (Performance, <500ms API response) và NFR-003 (Security, mTLS).

**Cách làm**: Mô tả RESTful APIs, endpoints, và Istio integration.

**Nội dung cần có**:
- **Mô tả**:
  - Synchronous communication sử dụng REST APIs qua AWS API Gateway và Istio (mTLS).
  - Áp dụng cho: Redemption validation (FR-007), Fraud scoring (FR-011), Analytics queries (FR-008).
  - **Key Endpoints**:
    - `POST /api/redemptions/online` (Redemption → Campaign Management): Validate barcode.
    - `POST /api/fraud/score` (Redemption → Fraud Detection): Tính fraud score.
    - `GET /api/analytics/realtime` (Analytics → Client): Lấy metrics.
  - **Security**: mTLS (Istio), JWT authentication (FR-003).
  - **Performance**: Latency <500ms (NFR-001).
- **Diagram**:
  ```mermaid
  sequenceDiagram
      participant Client
      participant API_Gateway
      participant Istio
      participant Redemption
      participant Fraud_Detection
      Client->>API_Gateway: POST /api/redemptions/online
      API_Gateway->>Istio: Forward request (mTLS)
      Istio->>Redemption: Route to pod
      Redemption->>Fraud_Detection: POST /api/fraud/score (mTLS)
      Fraud_Detection-->>Redemption: Fraud score
      Redemption-->>Istio: Redemption result
      Istio-->>API_Gateway: Response
      API_Gateway-->>Client: Success
  ```
- **Dependencies**: FR-003, FR-007, FR-008, FR-011, NFR-001, NFR-003.

**Assumptions/Constraints**:
- Assumes APIs là stateless, idempotent.
- Constraint: Latency phải <500ms kể cả với mTLS.

**Dependencies/Risks**:
- Dependencies: AWS API Gateway, Istio.
- Risks: API overload → Mitigation: Rate limiting, circuit breakers.

**Acceptance Criteria/Testable Items**:
- REST APIs đạt latency <500ms trong 95% test cases.
- mTLS được áp dụng cho 100% synchronous calls.
- Rate limiting xử lý 1K requests/s/service.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.5.2 Asynchronous Communication

**References**: Part04_Functional_Requirements (FR-009, FR-010), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Mô tả giao tiếp bất đồng bộ (message queues) cho notifications và CRM sync.

**Ý nghĩa**: Đảm bảo NFR-001 (Performance, <5s for async tasks) và NFR-002 (Scalability).

**Cách làm**: Mô tả AWS SNS/SQS usage và workflows.

**Nội dung cần có**:
- **Mô tả**:
  - Asynchronous communication sử dụng AWS SNS/SQS cho notifications (FR-010) và CRM sync (FR-009).
  - **Key Workflows**:
    - Notification Service: Gửi SMS/Email/Push (FR-010) qua SQS queue.
    - CRM Integration: Đồng bộ customer data (FR-009) qua SQS.
  - **Queue Config**: Dead Letter Queue (DLQ) cho failed messages, retry 3 lần.
  - **Performance**: Message processing <5s (NFR-001).
- **Diagram**:
  ```mermaid
  sequenceDiagram
      participant Campaign_Management
      participant SQS
      participant Notification
      participant Twilio
      Campaign_Management->>SQS: Publish campaign creation event
      SQS->>Notification: Poll message
      Notification->>Twilio: Send SMS/Email
      Twilio-->>Notification: Success
      Notification-->>SQS: Acknowledge
      Note right of SQS: DLQ for failed messages
  ```
- **Dependencies**: FR-009, FR-010, NFR-001, NFR-002.

**Assumptions/Constraints**:
- Assumes SQS throughput 1K messages/s.
- Constraint: Messages phải được xử lý trong <5s.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS, Twilio.
- Risks: Message loss → Mitigation: DLQ, idempotent consumers.

**Acceptance Criteria/Testable Items**:
- SQS messages xử lý trong <5s trong 95% test cases.
- DLQ lưu failed messages chính xác.
- 100% notifications gửi thành công qua Twilio.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.5.3 Event-Driven Architecture

**References**: Part04_Functional_Requirements (FR-009, FR-010, FR-012), Part05_Non_Functional_Requirements (NFR-002)

**Mục đích**: Mô tả kiến trúc event-driven để xử lý A/B testing, notifications, và CRM sync.

**Ý nghĩa**: Tăng NFR-002 (Scalability) và hỗ trợ async workflows.

**Cách làm**: Mô tả event producers, consumers, và event types.

**Nội dung cần có**:
- **Mô tả**:
  - Event-driven architecture sử dụng AWS SNS/SQS cho loose coupling.
  - **Event Types**:
    - `campaign.created`: Trigger notifications (FR-010).
    - `redemption.completed`: Trigger analytics, fraud detection (FR-007, FR-008, FR-011).
    - `ab_test.started`: Trigger A/B testing (FR-012).
  - **Producers**: Campaign Management, Redemption, Intelligence.
  - **Consumers**: Notification, Analytics, Fraud Detection, Intelligence.
- **Diagram**:
  ```mermaid
  graph TD
      A[Campaign Management] -->|SNS| B[Topic: campaign.created]
      B --> C[SQS: Notification Queue]
      C --> D[Notification Service]
      E[Redemption] -->|SNS| F[Topic: redemption.completed]
      F --> G[SQS: Analytics Queue]
      F --> H[SQS: Fraud Queue]
      G --> I[Analytics Service]
      H --> J[Fraud Detection Service]
      K[Intelligence] -->|SNS| L[Topic: ab_test.started]
      L --> M[SQS: Intelligence Queue]
      M --> K
  ```
- **Dependencies**: FR-007, FR-008, FR-009, FR-010, FR-011, FR-012.

**Assumptions/Constraints**:
- Assumes SNS topics có fan-out tới multiple SQS queues.
- Constraint: Events phải idempotent để tránh duplicates.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS.
- Risks: Event duplication → Mitigation: Idempotent consumers, deduplication.

**Acceptance Criteria/Testable Items**:
- Events được publish và consume trong <5s.
- 100% events được xử lý không duplicate.
- SNS fan-out hỗ trợ 10K messages/s.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.5.4 Message Queue Design

**References**: Part04_Functional_Requirements (FR-009, FR-010), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Mô tả thiết kế message queues để xử lý notifications và CRM sync.

**Ý nghĩa**: Đảm bảo NFR-001 (Performance, <5s async tasks) và NFR-002 (Scalability).

**Cách làm**: Mô tả SQS queues, DLQ, và scaling.

**Nội dung cần có**:
- **Mô tả**:
  - **Queues**:
    - `notification-queue`: Xử lý SMS/Email/Push (FR-010).
    - `crm-sync-queue`: Đồng bộ HubSpot/Salesforce (FR-009).
    - `analytics-queue`: Thu thập redemption data (FR-008).
  - **DLQ**: `notification-dlq`, `crm-sync-dlq`, `analytics-dlq` cho failed messages.
  - **Config**:
    - Visibility timeout: 30s.
    - Retention period: 7 days.
    - Max retries: 3.
  - **Scaling**: Auto-scale consumers (Notification Service) dựa trên queue length.
- **Diagram**:
  ```mermaid
  graph TD
      A[SNS: campaign.created] --> B[SQS: notification-queue]
      A --> C[SQS: crm-sync-queue]
      D[SNS: redemption.completed] --> E[SQS: analytics-queue]
      B --> F[Notification Service]
      C --> G[Notification Service]
      E --> H[Analytics Service]
      B --> I[SQS: notification-dlq]
      C --> J[SQS: crm-sync-dlq]
      E --> K[SQS: analytics-dlq]
      F --> L[Twilio]
      G --> M[HubSpot/Salesforce]
  ```

**Assumptions/Constraints**:
- Assumes SQS queues xử lý 1K messages/s.
- Constraint: DLQ phải lưu failed messages ít nhất 7 ngày.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS, Twilio.
- Risks: Queue backlog → Mitigation: Auto-scale consumers, monitor queue length.

**Acceptance Criteria/Testable Items**:
- Queues xử lý 1K messages/s trong <5s.
- DLQ lưu 100% failed messages.
- Consumers scale tự động khi queue length >100.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.5.5 Service Discovery

**References**: Part05_Non_Functional_Requirements (NFR-002), 06.3.4_Kubernetes_Architecture

**Mục đích**: Mô tả cơ chế service discovery để microservices giao tiếp trong EKS.

**Ý nghĩa**: Hỗ trợ NFR-002 (Scalability) và giảm latency trong inter-service communication.

**Cách làm**: Mô tả Kubernetes DNS và Istio service discovery.

**Nội dung cần có**:
- **Mô tả**:
  - **Kubernetes DNS**: Sử dụng CoreDNS cho service discovery trong EKS cluster.
  - **Istio Service Registry**: Đăng ký và quản lý service endpoints.
  - **Discovery Process**:
    - Pods truy vấn DNS (e.g., `campaign-management.default.svc.cluster.local`).
    - Istio Envoy proxies route traffic dựa trên service registry.
  - **Config**:
    - TTL: 30s cho DNS cache.
    - Health checks: `/health` endpoint mỗi 10s.
- **Diagram**:
  ```mermaid
  graph TD
      A[Redemption Pod] -->|DNS Query| B[CoreDNS]
      A -->|Istio Proxy| C[Istio Service Registry]
      B --> D[Campaign Management Pod]
      C --> D
      D --> E[Envoy Proxy]
      E --> F[Campaign Management Service]
      C --> G[CloudWatch: Metrics]
  ```

**Assumptions/Constraints**:
- Assumes CoreDNS và Istio tích hợp với EKS.
- Constraint: Service discovery phải resolve trong <50ms.

**Dependencies/Risks**:
- Dependencies: Kubernetes CoreDNS, Istio.
- Risks: DNS failures → Mitigation: Redundant DNS servers.

**Acceptance Criteria/Testable Items**:
- Service discovery resolve trong <50ms.
- 100% pods được đăng ký trong Istio registry.
- Health checks phát hiện failed pods trong <10s.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06.6 Scalability Patterns

### 06.6.1 Horizontal Scaling

**References**: Part05_Non_Functional_Requirements (NFR-002), 06.3.4_Kubernetes_Architecture

**Mục đích**: Mô tả chiến lược horizontal scaling để hỗ trợ 10K concurrent users.

**Ý nghĩa**: Đảm bảo NFR-002 (Scalability) và NFR-004 (Reliability, 99.9% uptime).

**Cách làm**: Mô tả Kubernetes HPA và Cluster Autoscaler.

**Nội dung cần có**:
- **Mô tả**:
  - **HPA**: Scale pods dựa trên CPU (80%) và memory (80%).
  - **Cluster Autoscaler**: Scale EKS node group (t3.medium) từ 3-10 nodes.
  - **Scaling Triggers**:
    - API requests >1K/s.
    - Queue length >100 messages (Notification Service).
  - **Config**:
    - Min pods: 2/service.
    - Max pods: 20/service.
    - Scale-up cooldown: 60s.
    - Scale-down cooldown: 300s.
- **Diagram**:
  ```mermaid
  graph TD
      A[EKS Cluster]
      A --> B[HPA]
      A --> C[Cluster Autoscaler]
      B --> D[Campaign Management Pods: 2-20]
      B --> E[Identity Pods: 2-20]
      B --> F[Redemption Pods: 2-20]
      C --> G[Node Group: 3-10 nodes]
      B --> H[CloudWatch: Metrics]
      C --> H
  ```

**Assumptions/Constraints**:
- Assumes EKS node group sử dụng t3.medium instances.
- Constraint: Scaling không được gây downtime.

**Dependencies/Risks**:
- Dependencies: AWS EKS, CloudWatch.
- Risks: Over-scaling tăng chi phí → Mitigation: Optimize thresholds.

**Acceptance Criteria/Testable Items**:
- HPA scale pods trong <60s khi CPU >80%.
- Cluster Autoscaler scale nodes trong <5 phút.
- Hệ thống xử lý 10K concurrent users không lỗi.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.6.2 Caching Strategy

**References**: Part04_Functional_Requirements (FR-005, FR-008), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Mô tả chiến lược caching để giảm latency và tăng performance.

**Ý nghĩa**: Hỗ trợ NFR-001 (Performance, <500ms API response) và FR-005 (OTP Verification).

**Cách làm**: Mô tả Redis caching và cache policies.

**Nội dung cần có**:
- **Mô tả**:
  - **Redis (ElastiCache)**: Cache OTP (FR-005), session data (FR-003), analytics metrics (FR-008).
  - **Cache Policies**:
    - TTL: 5 phút (OTP), 24h (sessions), 1h (analytics).
    - Cache-aside: Load từ DB nếu cache miss.
    - Write-through: Update cache khi DB thay đổi (e.g., redemption status).
  - **Use Cases**:
    - OTP verification: Cache OTP để giảm DB queries.
    - Analytics: Cache real-time metrics để giảm load trên MongoDB.
- **Diagram**:
  ```mermaid
  sequenceDiagram
      participant Client
      participant Redemption
      participant Redis
      participant PostgreSQL
      Client->>Redemption: POST /api/redemptions/online
      Redemption->>Redis: Check cache (barcode status)
      alt Cache hit
          Redis-->>Redemption: Status
      else Cache miss
          Redemption->>PostgreSQL: Query status
          PostgreSQL-->>Redemption: Status
          Redemption->>Redis: Update cache
      end
      Redemption-->>Client: Response
  ```

**Assumptions/Constraints**:
- Assumes Redis ElastiCache với 1 primary, 1 replica.
- Constraint: Cache hit rate >90%.

**Dependencies/Risks**:
- Dependencies: AWS ElastiCache, PostgreSQL.
- Risks: Cache inconsistency → Mitigation: Write-through, TTL.

**Acceptance Criteria/Testable Items**:
- Cache hit rate >90% trong load test.
- Redis latency <10ms.
- Cache updates đồng bộ với DB trong <100ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.6.3 Load Balancing

**References**: Part05_Non_Functional_Requirements (NFR-002), 06.3.3_Network_Topology

**Mục đích**: Mô tả load balancing để phân phối traffic hiệu quả.

**Ý nghĩa**: Đảm bảo NFR-002 (Scalability, 10K concurrent users) và NFR-001 (Performance).

**Cách làm**: Mô tả AWS ELB và Istio load balancing.

**Nội dung cần có**:
- **Mô tả**:
  - **AWS ELB**: Application Load Balancer phân phối traffic tới EKS pods.
  - **Istio Load Balancing**: Round-robin routing trong service mesh.
  - **Config**:
    - Health checks: `/health` endpoint, interval 10s.
    - Sticky sessions: Disabled để hỗ trợ horizontal scaling.
    - Max connections: 10K/service.
- **Diagram**:
  ```mermaid
  graph TD
      A[API Gateway] --> B[ELB]
      B --> C[EKS Cluster]
      C --> D[Istio Gateway]
      D --> E[Campaign Management Pods]
      D --> F[Identity Pods]
      D --> G[Redemption Pods]
      E --> H[Envoy Proxy]
      F --> I[Envoy Proxy]
      G --> J[Envoy Proxy]
      B --> K[CloudWatch: Health Checks]
  ```

**Assumptions/Constraints**:
- Assumes ELB sử dụng ALB với 2 AZs.
- Constraint: Load balancing không được tăng latency quá 50ms.

**Dependencies/Risks**:
- Dependencies: AWS ELB, Istio.
- Risks: Uneven load distribution → Mitigation: Health checks, weighted routing.

**Acceptance Criteria/Testable Items**:
- ELB phân phối traffic đều, latency <50ms.
- Health checks phát hiện failed pods trong <10s.
- Hệ thống xử lý 10K connections không lỗi.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06.6.4 Database Partitioning

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-002, NFR-004)

**Mục đích**: Mô tả chiến lược partitioning để hỗ trợ scalability và performance.

**Ý nghĩa**: Đảm bảo NFR-002 (Scalability) và NFR-004 (Reliability) cho databases.

**Cách làm**: Mô tả sharding và replication cho PostgreSQL/MongoDB.

**Nội dung cần có**:
- **Mô tả**:
  - **PostgreSQL (RDS)**:
    - **Sharding**: Theo `campaign_id` cho campaigns/redemptions tables.
    - **Replication**: Multi-AZ, 1 primary + 1 read replica.
    - **Use Cases**: Campaign queries (FR-001), redemption logs (FR-007).
  - **MongoDB (DocumentDB)**:
    - **Sharding**: Theo `user_id` cho analytics, fraud, recommendations.
    - **Replication**: 3 replicas/AZ.
    - **Use Cases**: Real-time analytics (FR-008), fraud scoring (FR-011).
  - **Config**:
    - Shard key index: `campaign_id`, `user_id`.
    - Backup retention: 30 days.
- **Diagram**:
  ```mermaid
  graph TD
      A[RDS PostgreSQL]
      A --> B[Primary: campaigns]
      A --> C[Read Replica: campaigns]
      A --> D[Primary: redemptions]
      A --> E[Read Replica: redemptions]
      F[DocumentDB MongoDB]
      F --> G[Shard 1: analytics]
      F --> H[Shard 2: fraud]
      F --> I[Shard 3: recommendations]
      G --> J[Replica 1]
      G --> K[Replica 2]
      G --> L[Replica 3]
  ```

**Assumptions/Constraints**:
- Assumes sharding keys được tối ưu cho read/write patterns.
- Constraint: Data consistency phải đạt 95% trong sharded DBs.

**Dependencies/Risks**:
- Dependencies: AWS RDS, DocumentDB.
- Risks: Shard imbalance → Mitigation: Monitor shard distribution.

**Acceptance Criteria/Testable Items**:
- Sharding hỗ trợ 10K queries/s.
- Replication đảm bảo 99.9% uptime.
- Data consistency đạt 95% trong test.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part06B - Design Patterns

## Structure of Part06B (Section 1)
```
Part06B_Design_Patterns/
├── 06B.1_Design_Patterns_Catalog/
│   ├── 06B.1.1_Creational_Patterns/
│   │   ├── 06B.1.1.1_Factory_Pattern.md
│   │   ├── 06B.1.1.2_Builder_Pattern.md
│   │   ├── 06B.1.1.3_Singleton_Pattern.md
│   │   └── 06B.1.1.4_Prototype_Pattern.md
│   ├── 06B.1.2_Structural_Patterns/
│   │   ├── 06B.1.2.1_Adapter_Pattern.md
│   │   ├── 06B.1.2.2_Facade_Pattern.md
│   │   ├── 06B.1.2.3_Proxy_Pattern.md
│   │   └── 06B.1.2.4_Decorator_Pattern.md
│   └── 06B.1.3_Behavioral_Patterns/
│       ├── 06B.1.3.1_Strategy_Pattern.md
│       ├── 06B.1.3.2_Observer_Pattern.md
│       ├── 06B.1.3.3_Command_Pattern.md
│       └── 06B.1.3.4_Chain_Of_Responsibility_Pattern.md
```

---

## 06B.1 Design Patterns Catalog

### 06B.1.1 Creational Patterns

#### 06B.1.1.1 Factory Pattern

**References**: Part04_Functional_Requirements (FR-006), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Tạo các đối tượng quảng cáo (Ads Format) mà không cần chỉ định trực tiếp class cụ thể.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách tách logic tạo đối tượng khỏi business logic.

**Cách làm**: Sử dụng Factory Pattern để tạo các loại Ads Format (Banner, Video, QR) trong Campaign Management Service.

**Nội dung cần có**:
- **Mô tả**: Factory Pattern được áp dụng trong Campaign Management Service để tạo các đối tượng `AdsFormat` (FR-006). Client chỉ gọi factory method mà không cần biết class cụ thể (e.g., `BannerAds`, `VideoAds`).
- **Use Case**: Tạo Ads Format cho chiến dịch quảng cáo với các định dạng khác nhau.
- **Code Example**:
```typescript
interface AdsFormat {
  render(): string;
}

class BannerAds implements AdsFormat {
  render() { return "Banner Ad HTML"; }
}

class VideoAds implements AdsFormat {
  render() { return "Video Ad URL"; }
}

class AdsFormatFactory {
  static createAdsFormat(type: string): AdsFormat {
    switch (type) {
      case "banner": return new BannerAds();
      case "video": return new VideoAds();
      default: throw new Error("Invalid ads format");
    }
  }
}

// Usage
const ads = AdsFormatFactory.createAdsFormat("banner");
console.log(ads.render()); // Output: Banner Ad HTML
```
- **Diagram**:
  ```mermaid
  classDiagram
      class AdsFormat {
          <<interface>>
          +render() string
      }
      class BannerAds {
          +render() string
      }
      class VideoAds {
          +render() string
      }
      class AdsFormatFactory {
          +createAdsFormat(type: string) AdsFormat
      }
      AdsFormat <|.. BannerAds
      AdsFormat <|.. VideoAds
      AdsFormatFactory --> AdsFormat
  ```
- **Dependencies**: FR-006 (Ads Format Management), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes Ads Formats được định nghĩa trước (banner, video, QR).
- Constraint: Factory phải hỗ trợ thêm format mới mà không sửa code.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Factory trở nên phức tạp khi có nhiều formats → Mitigation: Use configuration-based factory.

**Acceptance Criteria/Testable Items**:
- Factory tạo đúng Ads Format dựa trên type.
- Thêm format mới không yêu cầu sửa code client.
- Unit tests đạt 80% coverage (NFR-005).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.1.2 Builder Pattern

**References**: Part04_Functional_Requirements (FR-001), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Xây dựng đối tượng Campaign phức tạp với các thuộc tính tùy chọn.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách tách logic xây dựng campaign khỏi constructor.

**Cách làm**: Sử dụng Builder Pattern trong Campaign Management Service để tạo `Campaign` với các thuộc tính như name, startDate, adsFormat.

**Nội dung cần có**:
- **Mô tả**: Builder Pattern được áp dụng để tạo `Campaign` objects (FR-001), cho phép cấu hình linh hoạt các thuộc tính.
- **Use Case**: Tạo campaign với các tùy chọn như ads format, barcode pool, và schedule.
- **Code Example**:
```typescript
class Campaign {
  name: string;
  startDate: Date;
  adsFormat?: string;
  constructor(builder: CampaignBuilder) {
    this.name = builder.name;
    this.startDate = builder.startDate;
    this.adsFormat = builder.adsFormat;
  }
}

class CampaignBuilder {
  name: string;
  startDate: Date;
  adsFormat?: string;
  
  constructor(name: string, startDate: Date) {
    this.name = name;
    this.startDate = startDate;
  }
  
  setAdsFormat(format: string) {
    this.adsFormat = format;
    return this;
  }
  
  build(): Campaign {
    return new Campaign(this);
  }
}

// Usage
const campaign = new CampaignBuilder("Summer Sale", new Date())
  .setAdsFormat("banner")
  .build();
```
- **Diagram**:
  ```mermaid
  classDiagram
      class Campaign {
          -name: string
          -startDate: Date
          -adsFormat: string
      }
      class CampaignBuilder {
          -name: string
          -startDate: Date
          -adsFormat: string
          +setAdsFormat(format: string) CampaignBuilder
          +build() Campaign
      }
      CampaignBuilder --> Campaign
  ```
- **Dependencies**: FR-001 (Campaign Management), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes Campaign có ít nhất name và startDate.
- Constraint: Builder phải hỗ trợ thêm thuộc tính mới dễ dàng.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Builder quá phức tạp → Mitigation: Keep builder methods simple.

**Acceptance Criteria/Testable Items**:
- Builder tạo Campaign với đúng thuộc tính.
- Thêm thuộc tính mới không sửa code client.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.1.3 Singleton Pattern

**References**: Part04_Functional_Requirements (FR-003), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Đảm bảo chỉ có một instance của AuthService để quản lý authentication.

**Ý nghĩa**: Tăng NFR-003 (Security) bằng cách kiểm soát duy nhất authentication logic.

**Cách làm**: Áp dụng Singleton Pattern trong Identity Service cho `AuthService`.

**Nội dung cần có**:
- **Mô tả**: Singleton Pattern đảm bảo chỉ một instance của `AuthService` được tạo, quản lý JWT và SSO (FR-003).
- **Use Case**: Quản lý authentication tokens toàn hệ thống.
- **Code Example**:
```typescript
class AuthService {
  private static instance: AuthService;
  private constructor() {}
  
  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }
  
  authenticate(user: string, password: string): string {
    return "JWT_TOKEN";
  }
}

// Usage
const authService = AuthService.getInstance();
console.log(authService.authenticate("user", "pass")); // JWT_TOKEN
```
- **Diagram**:
  ```mermaid
  classDiagram
      class AuthService {
          -instance: AuthService
          -constructor()
          +getInstance() AuthService
          +authenticate(user, pass) string
      }
  ```
- **Dependencies**: FR-003 (User Authentication), NFR-003 (Security).

**Assumptions/Constraints**:
- Assumes AuthService không cần state ngoài JWT cache.
- Constraint: Singleton phải thread-safe trong Node.js.

**Dependencies/Risks**:
- Dependencies: Identity Service.
- Risks: Memory leaks → Mitigation: Avoid storing large state.

**Acceptance Criteria/Testable Items**:
- Chỉ một instance AuthService được tạo.
- Authenticate trả về JWT hợp lệ.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.1.4 Prototype Pattern

**References**: Part04_Functional_Requirements (FR-002), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Tạo bản sao của Barcode objects để tái sử dụng template.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách sao chép Barcode configurations.

**Cách làm**: Áp dụng Prototype Pattern trong Campaign Management Service cho `Barcode`.

**Nội dung cần có**:
- **Mô tả**: Prototype Pattern cho phép sao chép `Barcode` objects (FR-002) với các cấu hình như format (QR, Code128).
- **Use Case**: Tạo nhiều Barcode từ một template cho chiến dịch.
- **Code Example**:
```typescript
interface ICloneable {
  clone(): this;
}

class Barcode implements ICloneable {
  format: string;
  value: string;
  
  constructor(format: string, value: string) {
    this.format = format;
    this.value = value;
  }
  
  clone(): this {
    return new Barcode(this.format, this.value) as this;
  }
}

// Usage
const template = new Barcode("QR", "12345");
const newBarcode = template.clone();
newBarcode.value = "67890";
```
- **Diagram**:
  ```mermaid
  classDiagram
      class ICloneable {
          <<interface>>
          +clone() this
      }
      class Barcode {
          -format: string
          -value: string
          +clone() Barcode
      }
      ICloneable <|.. Barcode
  ```
- **Dependencies**: FR-002 (Barcode Management), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes Barcode có thuộc tính cố định.
- Constraint: Clone phải giữ nguyên format.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Deep copy errors → Mitigation: Ensure proper cloning.

**Acceptance Criteria/Testable Items**:
- Clone tạo Barcode với đúng format.
- Thay đổi clone không ảnh hưởng template.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.1.2 Structural Patterns

#### 06B.1.2.1 Adapter Pattern

**References**: Part04_Functional_Requirements (FR-009), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Tích hợp CRM systems (HubSpot, Salesforce) với interface thống nhất.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách chuẩn hóa CRM integration.

**Cách làm**: Áp dụng Adapter Pattern trong Notification Service cho CRM sync.

**Nội dung cần có**:
- **Mô tả**: Adapter Pattern chuyển đổi API của HubSpot/Salesforce thành interface chung `ICRMConnector` (FR-009).
- **Use Case**: Đồng bộ customer data với nhiều CRM systems.
- **Code Example**:
```typescript
interface ICRMConnector {
  syncCustomer(data: Customer): void;
}

class HubSpotAdapter implements ICRMConnector {
  private hubSpotClient: HubSpotClient;
  constructor(client: HubSpotClient) {
    this.hubSpotClient = client;
  }
  syncCustomer(data: Customer) {
    this.hubSpotClient.createContact(data);
  }
}

class SalesforceAdapter implements ICRMConnector {
  private salesforceClient: SalesforceClient;
  constructor(client: SalesforceClient) {
    this.salesforceClient = client;
  }
  syncCustomer(data: Customer) {
    this.salesforceClient.upsertLead(data);
  }
}

// Usage
const hubSpot = new HubSpotAdapter(new HubSpotClient());
hubSpot.syncCustomer({ name: "John", email: "john@example.com" });
```
- **Diagram**:
  ```mermaid
  classDiagram
      class ICRMConnector {
          <<interface>>
          +syncCustomer(data: Customer)
      }
      class HubSpotAdapter {
          -hubSpotClient: HubSpotClient
          +syncCustomer(data: Customer)
      }
      class SalesforceAdapter {
          -salesforceClient: SalesforceClient
          +syncCustomer(data: Customer)
      }
      ICRMConnector <|.. HubSpotAdapter
      ICRMConnector <|.. SalesforceAdapter
  ```
- **Dependencies**: FR-009 (CRM Integration), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes HubSpot/Salesforce APIs ổn định.
- Constraint: Adapter phải xử lý lỗi API bên thứ ba.

**Dependencies/Risks**:
- Dependencies: Notification Service.
- Risks: API thay đổi → Mitigation: Versioned adapters.

**Acceptance Criteria/Testable Items**:
- Adapter đồng bộ customer data đúng với CRM.
- Thêm CRM mới không sửa code client.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.2.2 Facade Pattern

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-007)

**Mục đích**: Đơn giản hóa giao diện redemption cho POS Staff.

**Ý nghĩa**: Tăng NFR-007 (Usability, form completion rate >90%).

**Cách làm**: Áp dụng Facade Pattern trong Redemption Service để đơn giản hóa redemption process.

**Nội dung cần có**:
- **Mô tả**: Facade Pattern cung cấp giao diện đơn giản cho redemption (FR-007), che giấu complexity của barcode validation, fraud check, và DB update.
- **Use Case**: POS Staff gọi một method duy nhất để redeem barcode.
- **Code Example**:
```typescript
class RedemptionFacade {
  private barcodeService: IBarcodeService;
  private fraudService: IFraudDetectionService;
  private dbService: IRepository;
  
  constructor(barcodeService: IBarcodeService, fraudService: IFraudDetectionService, dbService: IRepository) {
    this.barcodeService = barcodeService;
    this.fraudService = fraudService;
    this.dbService = dbService;
  }
  
  async redeemBarcode(barcode: string): Promise<boolean> {
    const isValid = await this.barcodeService.validate(barcode);
    if (!isValid) return false;
    const score = await this.fraudService.checkFraud(barcode);
    if (score > 0.8) return false;
    await this.dbService.saveRedemption(barcode);
    return true;
  }
}

// Usage
const facade = new RedemptionFacade(barcodeService, fraudService, dbService);
await facade.redeemBarcode("12345"); // true or false
```
- **Diagram**:
  ```mermaid
  classDiagram
      class RedemptionFacade {
          -barcodeService: IBarcodeService
          -fraudService: IFraudDetectionService
          -dbService: IRepository
          +redeemBarcode(barcode: string) boolean
      }
      class IBarcodeService {
          <<interface>>
          +validate(barcode: string)
      }
      class IFraudDetectionService {
          <<interface>>
          +checkFraud(barcode: string)
      }
      class IRepository {
          <<interface>>
          +saveRedemption(barcode: string)
      }
      RedemptionFacade --> IBarcodeService
      RedemptionFacade --> IFraudDetectionService
      RedemptionFacade --> IRepository
  ```
- **Dependencies**: FR-007 (Barcode Redemption), NFR-007 (Usability).

**Assumptions/Constraints**:
- Assumes redemption process gồm 3 bước (validate, fraud check, save).
- Constraint: Facade phải xử lý lỗi trong <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: Redemption Service, Fraud Detection Service.
- Risks: Facade quá phức tạp → Mitigation: Keep interface simple.

**Acceptance Criteria/Testable Items**:
- Facade xử lý redemption trong <500ms.
- POS Staff hoàn thành redemption với 1 method call.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.2.3 Proxy Pattern

**References**: Part04_Functional_Requirements (FR-003), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Kiểm soát truy cập và caching cho authentication requests.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-001 (Performance).

**Cách làm**: Áp dụng Proxy Pattern trong Identity Service để cache JWT tokens.

**Nội dung cần có**:
- **Mô tả**: Proxy Pattern kiểm soát truy cập vào `AuthService` và cache JWT trong Redis (FR-003).
- **Use Case**: Giảm DB queries bằng cách cache authentication results.
- **Code Example**:
```typescript
interface IAuthService {
  authenticate(user: string, password: string): string;
}

class AuthService implements IAuthService {
  authenticate(user: string, password: string): string {
    return "JWT_TOKEN";
  }
}

class AuthProxy implements IAuthService {
  private authService: IAuthService;
  private cache: Map<string, string>;
  
  constructor(authService: IAuthService) {
    this.authService = authService;
    this.cache = new Map(); // Simulate Redis
  }
  
  authenticate(user: string, password: string): string {
    const key = `${user}:${password}`;
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }
    const token = this.authService.authenticate(user, password);
    this.cache.set(key, token);
    return token;
  }
}

// Usage
const proxy = new AuthProxy(new AuthService());
console.log(proxy.authenticate("user", "pass")); // JWT_TOKEN (cached)
```
- **Diagram**:
  ```mermaid
  classDiagram
      class IAuthService {
          <<interface>>
          +authenticate(user, pass) string
      }
      class AuthService {
          +authenticate(user, pass) string
      }
      class AuthProxy {
          -authService: IAuthService
          -cache: Map
          +authenticate(user, pass) string
      }
      IAuthService <|.. AuthService
      IAuthService <|.. AuthProxy
      AuthProxy --> AuthService
  ```
- **Dependencies**: FR-003 (User Authentication), NFR-001, NFR-003.

**Assumptions/Constraints**:
- Assumes Redis cache với TTL 24h cho JWT.
- Constraint: Proxy không được lưu plaintext passwords.

**Dependencies/Risks**:
- Dependencies: Identity Service, Redis.
- Risks: Cache staleness → Mitigation: TTL and cache invalidation.

**Acceptance Criteria/Testable Items**:
- Proxy cache JWT trong <10ms.
- Cache hit rate >90%.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.2.4 Decorator Pattern

**References**: Part04_Functional_Requirements (FR-010), Part05_Non_Functional_Requirements (NFR-006)

**Mục đích**: Thêm logging cho notifications mà không sửa code chính.

**Ý nghĩa**: Tăng NFR-006 (Auditability) với audit logs cho Notification Service.

**Cách làm**: Áp dụng Decorator Pattern để thêm logging vào `NotificationService`.

**Nội dung cần có**:
- **Mô tả**: Decorator Pattern thêm logging cho SMS/Email notifications (FR-010) mà không sửa code `NotificationService`.
- **Use Case**: Ghi log mỗi khi gửi notification để audit.
- **Code Example**:
```typescript
interface INotificationService {
  send(message: string): void;
}

class NotificationService implements INotificationService {
  send(message: string) {
    console.log(`Sending: ${message}`);
  }
}

class LoggingDecorator implements INotificationService {
  private service: INotificationService;
  constructor(service: INotificationService) {
    this.service = service;
  }
  send(message: string) {
    console.log(`Log: Sending message at ${new Date()}`);
    this.service.send(message);
  }
}

// Usage
const service = new LoggingDecorator(new NotificationService());
service.send("Welcome!"); // Log: Sending message at [date], Sending: Welcome!
```
- **Diagram**:
  ```mermaid
  classDiagram
      class INotificationService {
          <<interface>>
          +send(message: string)
      }
      class NotificationService {
          +send(message: string)
      }
      class LoggingDecorator {
          -service: INotificationService
          +send(message: string)
      }
      INotificationService <|.. NotificationService
      INotificationService <|.. LoggingDecorator
      LoggingDecorator --> NotificationService
  ```
- **Dependencies**: FR-010 (Notification System), NFR-006 (Auditability).

**Assumptions/Constraints**:
- Assumes logs được lưu vào CloudWatch.
- Constraint: Logging không được tăng latency quá 10ms.

**Dependencies/Risks**:
- Dependencies: Notification Service, CloudWatch.
- Risks: Log overhead → Mitigation: Async logging.

**Acceptance Criteria/Testable Items**:
- Logs được ghi trước khi gửi notification.
- Logging latency <10ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.1.3 Behavioral Patterns

#### 06B.1.3.1 Strategy Pattern

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Chọn thuật toán fraud detection động.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách cho phép thay đổi thuật toán fraud detection.

**Cách làm**: Áp dụng Strategy Pattern trong Fraud Detection Service.

**Nội dung cần có**:
- **Mô tả**: Strategy Pattern cho phép chọn thuật toán fraud detection (rule-based, ML-based) tại runtime (FR-011).
- **Use Case**: Áp dụng rule-based hoặc ML-based fraud scoring tùy cấu hình.
- **Code Example**:
```typescript
interface IFraudStrategy {
  calculateScore(data: FraudData): number;
}

class RuleBasedFraudStrategy implements IFraudStrategy {
  calculateScore(data: FraudData): number {
    return data.attempts > 5 ? 0.9 : 0.1;
  }
}

class MLBasedFraudStrategy implements IFraudStrategy {
  calculateScore(data: FraudData): number {
    return 0.7; // Simulate ML model
  }
}

class FraudDetectionService {
  private strategy: IFraudStrategy;
  constructor(strategy: IFraudStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: IFraudStrategy) {
    this.strategy = strategy;
  }
  calculateScore(data: FraudData): number {
    return this.strategy.calculateScore(data);
  }
}

// Usage
const fraudService = new FraudDetectionService(new RuleBasedFraudStrategy());
console.log(fraudService.calculateScore({ attempts: 6 })); // 0.9
```
- **Diagram**:
  ```mermaid
  classDiagram
      class IFraudStrategy {
          <<interface>>
          +calculateScore(data: FraudData) number
      }
      class RuleBasedFraudStrategy {
          +calculateScore(data: FraudData) number
      }
      class MLBasedFraudStrategy {
          +calculateScore(data: FraudData) number
      }
      class FraudDetectionService {
          -strategy: IFraudStrategy
          +setStrategy(strategy: IFraudStrategy)
          +calculateScore(data: FraudData) number
      }
      IFraudStrategy <|.. RuleBasedFraudStrategy
      IFraudStrategy <|.. MLBasedFraudStrategy
      FraudDetectionService --> IFraudStrategy
  ```
- **Dependencies**: FR-011 (Fraud Detection), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes ít nhất 2 thuật toán (rule-based, ML-based).
- Constraint: Thay đổi strategy không được gây downtime.

**Dependencies/Risks**:
- Dependencies: Fraud Detection Service.
- Risks: Strategy không tối ưu → Mitigation: Performance tests.

**Acceptance Criteria/Testable Items**:
- Strategy trả về fraud score đúng.
- Thay đổi strategy tại runtime không lỗi.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.3.2 Observer Pattern

**References**: Part04_Functional_Requirements (FR-010), Part05_Non_Functional_Requirements (NFR-006)

**Mục đích**: Thông báo multiple services khi redemption hoàn tất.

**Ý nghĩa**: Tăng NFR-006 (Auditability) và hỗ trợ async notifications.

**Cách làm**: Áp dụng Observer Pattern trong Redemption Service để thông báo Analytics và Notification Services.

**Nội dung cần có**:
- **Mô tả**: Observer Pattern cho phép Analytics và Notification Services đăng ký để nhận redemption events (FR-010).
- **Use Case**: Gửi thông báo và cập nhật analytics khi barcode được redeem.
- **Code Example**:
```typescript
interface IObserver {
  update(event: RedemptionEvent): void;
}

class RedemptionService {
  private observers: IObserver[] = [];
  addObserver(observer: IObserver) {
    this.observers.push(observer);
  }
  async redeem(barcode: string) {
    const event = { barcode, timestamp: new Date() };
    this.observers.forEach(observer => observer.update(event));
  }
}

class AnalyticsObserver implements IObserver {
  update(event: RedemptionEvent) {
    console.log(`Analytics: Redemption ${event.barcode}`);
  }
}

class NotificationObserver implements IObserver {
  update(event: RedemptionEvent) {
    console.log(`Notification: Redemption ${event.barcode}`);
  }
}

// Usage
const redemptionService = new RedemptionService();
redemptionService.addObserver(new AnalyticsObserver());
redemptionService.addObserver(new NotificationObserver());
redemptionService.redeem("12345");
```
- **Diagram**:
  ```mermaid
  classDiagram
      class IObserver {
          <<interface>>
          +update(event: RedemptionEvent)
      }
      class RedemptionService {
          -observers: IObserver[]
          +addObserver(observer: IObserver)
          +redeem(barcode: string)
      }
      class AnalyticsObserver {
          +update(event: RedemptionEvent)
      }
      class NotificationObserver {
          +update(event: RedemptionEvent)
      }
      IObserver <|.. AnalyticsObserver
      IObserver <|.. NotificationObserver
      RedemptionService --> IObserver
  ```
- **Dependencies**: FR-007, FR-010, NFR-006 (Auditability).

**Assumptions/Constraints**:
- Assumes events được xử lý async qua SQS.
- Constraint: Observers không được block redemption process.

**Dependencies/Risks**:
- Dependencies: Redemption Service, Notification Service.
- Risks: Observer overload → Mitigation: Async processing.

**Acceptance Criteria/Testable Items**:
- Observers nhận đúng redemption events.
- Event processing <5s (NFR-001).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.3.3 Command Pattern

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Quản lý A/B testing commands trong Intelligence Service.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách tách logic A/B testing.

**Cách làm**: Áp dụng Command Pattern để xử lý A/B testing experiments (FR-012).

**Nội dung cần có**:
- **Mô tả**: Command Pattern tách logic khởi tạo, chạy, và phân tích A/B tests.
- **Use Case**: Tạo và chạy A/B test cho ads formats.
- **Code Example**:
```typescript
interface ICommand {
  execute(): void;
}

class StartABTestCommand implements ICommand {
  private experimentId: string;
  constructor(experimentId: string) {
    this.experimentId = experimentId;
  }
  execute() {
    console.log(`Starting A/B test: ${this.experimentId}`);
  }
}

class ABTestingService {
  executeCommand(command: ICommand) {
    command.execute();
  }
}

// Usage
const abTestService = new ABTestingService();
abTestService.executeCommand(new StartABTestCommand("exp123"));
```
- **Diagram**:
  ```mermaid
  classDiagram
      class ICommand {
          <<interface>>
          +execute()
      }
      class StartABTestCommand {
          -experimentId: string
          +execute()
      }
      class ABTestingService {
          +executeCommand(command: ICommand)
      }
      ICommand <|.. StartABTestCommand
      ABTestingService --> ICommand
  ```
- **Dependencies**: FR-012 (A/B Testing), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes commands là idempotent.
- Constraint: Commands phải xử lý trong <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service.
- Risks: Command complexity → Mitigation: Keep commands simple.

**Acceptance Criteria/Testable Items**:
- Commands thực thi đúng A/B test logic.
- Command execution <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.1.3.4 Chain of Responsibility Pattern

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Xử lý redemption requests qua chuỗi validation steps.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-007 (Usability) bằng cách chia nhỏ validation logic.

**Cách làm**: Áp dụng Chain of Responsibility trong Redemption Service.

**Nội dung cần có**:
- **Mô tả**: Chain of Responsibility xử lý redemption (FR-007) qua các bước: barcode validation, fraud check, DB save.
- **Use Case**: Validate barcode trước khi redeem.
- **Code Example**:
```typescript
interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: RedemptionRequest): boolean;
}

class BarcodeValidator implements IHandler {
  private next: IHandler | null = null;
  setNext(handler: IHandler): IHandler {
    this.next = handler;
    return handler;
  }
  handle(request: RedemptionRequest): boolean {
    if (!request.isValidBarcode) return false;
    return this.next ? this.next.handle(request) : true;
  }
}

class FraudChecker implements IHandler {
  private next: IHandler | null = null;
  setNext(handler: IHandler): IHandler {
    this.next = handler;
    return handler;
  }
  handle(request: RedemptionRequest): boolean {
    if (request.fraudScore > 0.8) return false;
    return this.next ? this.next.handle(request) : true;
  }
}

// Usage
const validator = new BarcodeValidator();
const fraudChecker = new FraudChecker();
validator.setNext(fraudChecker);
const result = validator.handle({ isValidBarcode: true, fraudScore: 0.5 }); // true
```
- **Diagram**:
  ```mermaid
  classDiagram
      class IHandler {
          <<interface>>
          +setNext(handler: IHandler)
          +handle(request: RedemptionRequest) boolean
      }
      class BarcodeValidator {
          -next: IHandler
          +setNext(handler: IHandler)
          +handle(request: RedemptionRequest) boolean
      }
      class FraudChecker {
          -next: IHandler
          +setNext(handler: IHandler)
          +handle(request: RedemptionRequest) boolean
      }
      IHandler <|.. BarcodeValidator
      IHandler <|.. FraudChecker
      BarcodeValidator --> FraudChecker
  ```
- **Dependencies**: FR-007 (Barcode Redemption), NFR-003, NFR-007.

**Assumptions/Constraints**:
- Assumes chuỗi validation gồm 3 bước.
- Constraint: Mỗi handler xử lý trong <100ms.

**Dependencies/Risks**:
- Dependencies: Redemption Service, Fraud Detection Service.
- Risks: Chain quá dài → Mitigation: Limit handlers.

**Acceptance Criteria/Testable Items**:
- Chain xử lý redemption request đúng.
- Tổng latency <500ms (NFR-001).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part06B - Design Patterns (Section 2)

## Structure of Part06B (Section 2)
```
Part06B_Design_Patterns/
├── 06B.2_Interface_Definitions/
│   ├── 06B.2.1_Service_Interfaces/
│   │   ├── 06B.2.1.1_ICampaignService.md
│   │   ├── 06B.2.1.2_IBarcodeService.md
│   │   ├── 06B.2.1.3_IAuthService.md
│   │   ├── 06B.2.1.4_IUserService.md
│   │   ├── 06B.2.1.5_IAnalyticsService.md
│   │   ├── 06B.2.1.6_INotificationService.md
│   │   ├── 06B.2.1.7_IFraudDetectionService.md
│   │   ├── 06B.2.1.8_IABTestingService.md
│   │   └── 06B.2.1.9_IRecommendationService.md
│   ├── 06B.2.2_Repository_Interfaces/
│   │   ├── 06B.2.2.1_IRepository_Base.md
│   │   ├── 06B.2.2.2_ICampaignRepository.md
│   │   ├── 06B.2.2.3_IUserRepository.md
│   │   ├── 06B.2.2.4_IBarcodeRepository.md
│   │   ├── 06B.2.2.5_IFraudScoreRepository.md
│   │   ├── 06B.2.2.6_IUserPreferenceRepository.md
│   │   ├── 06B.2.2.7_IExperimentRepository.md
│   │   └── 06B.2.2.8_IRecommendationRepository.md
│   ├── 06B.2.3_External_Integration_Interfaces/
│   │   ├── 06B.2.3.1_ICRMConnector.md
│   │   ├── 06B.2.3.2_ISMSProvider.md
│   │   ├── 06B.2.3.3_IEmailProvider.md
│   │   └── 06B.2.3.4_IPOSConnector.md
```

---

## 06B.2 Interface Definitions

### 06B.2.1 Service Interfaces

#### 06B.2.1.1 ICampaignService

**References**: Part04_Functional_Requirements (FR-001, FR-002, FR-006), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho Campaign Management Service để quản lý chiến dịch và quảng cáo.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) bằng cách chuẩn hóa các phương thức quản lý campaign.

**Cách làm**: Cung cấp interface TypeScript với các phương thức CRUD và ads format management.

**Nội dung cần có**:
- **Mô tả**: `ICampaignService` xử lý các chức năng liên quan đến chiến dịch (FR-001), barcode (FR-002), và ads format (FR-006).
- **Interface Definition**:
```typescript
interface ICampaignService {
  createCampaign(campaign: CampaignDTO): Promise<Campaign>;
  updateCampaign(id: string, campaign: CampaignDTO): Promise<Campaign>;
  deleteCampaign(id: string): Promise<void>;
  getCampaign(id: string): Promise<Campaign>;
  listCampaigns(filter: CampaignFilter): Promise<Campaign[]>;
  generateBarcode(campaignId: string, format: string): Promise<Barcode>;
  createAdsFormat(campaignId: string, format: AdsFormatDTO): Promise<AdsFormat>;
}
```
- **Dependencies**: FR-001 (Campaign CRUD), FR-002 (Barcode Management), FR-006 (Ads Format Management), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes CampaignDTO chứa name, startDate, endDate, adsFormat.
- Constraint: Methods phải idempotent và trả về trong <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: Campaign Management Service, PostgreSQL.
- Risks: Input validation errors → Mitigation: Use BaseValidator (06B.3.4).

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-001, FR-002, FR-006.
- Methods trả về đúng data types.
- Unit tests đạt 80% coverage (NFR-005).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.2 IBarcodeService

**References**: Part04_Functional_Requirements (FR-002, FR-007), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho Barcode Service để quản lý và validate barcode.

**Ý nghĩa**: Hỗ trợ FR-007 (Barcode Redemption) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho barcode generation và validation.

**Nội dung cần có**:
- **Mô tả**: `IBarcodeService` xử lý tạo và validate barcode (FR-002, FR-007).
- **Interface Definition**:
```typescript
interface IBarcodeService {
  generateBarcode(campaignId: string, format: "QR" | "Code128" | "DataMatrix"): Promise<Barcode>;
  validateBarcode(barcodeId: string): Promise<boolean>;
  getBarcode(barcodeId: string): Promise<Barcode>;
}
```
- **Dependencies**: FR-002 (Barcode Management), FR-007 (Barcode Redemption), NFR-001 (Performance).

**Assumptions/Constraints**:
- Assumes barcode formats là QR, Code128, DataMatrix.
- Constraint: Validation phải hoàn tất trong <100ms.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service, Redemption Service.
- Risks: Barcode collision → Mitigation: Unique barcode IDs.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-002, FR-007.
- Validation latency <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.3 IAuthService

**References**: Part04_Functional_Requirements (FR-003, FR-005), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Định nghĩa interface cho authentication trong Identity Service.

**Ý nghĩa**: Tăng NFR-003 (Security) với chuẩn hóa authentication logic.

**Cách làm**: Cung cấp interface TypeScript cho login, SSO, và OTP.

**Nội dung cần có**:
- **Mô tả**: `IAuthService` xử lý user authentication và OTP verification (FR-003, FR-005).
- **Interface Definition**:
```typescript
interface IAuthService {
  login(credentials: CredentialsDTO): Promise<JWTToken>;
  loginSSO(provider: string, token: string): Promise<JWTToken>;
  generateOTP(userId: string): Promise<string>;
  verifyOTP(userId: string, otp: string): Promise<boolean>;
}
```
- **Dependencies**: FR-003 (User Authentication), FR-005 (OTP Verification), NFR-003 (Security).

**Assumptions/Constraints**:
- Assumes JWT tokens có TTL 24h.
- Constraint: OTP verification phải <100ms.

**Dependencies/Risks**:
- Dependencies: Identity Service, Redis.
- Risks: Token leakage → Mitigation: mTLS, KMS encryption.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-003, FR-005.
- OTP verification latency <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.4 IUserService

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Định nghĩa interface cho quản lý user profiles.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-005 (Maintainability) cho user management.

**Cách làm**: Cung cấp interface TypeScript cho CRUD user.

**Nội dung cần có**:
- **Mô tả**: `IUserService` xử lý tạo, cập nhật, và quản lý user profiles (FR-004).
- **Interface Definition**:
```typescript
interface IUserService {
  createUser(user: UserDTO): Promise<User>;
  updateUser(id: string, user: UserDTO): Promise<User>;
  deleteUser(id: string): Promise<void>;
  getUser(id: string): Promise<User>;
  listUsers(filter: UserFilter): Promise<User[]>;
}
```
- **Dependencies**: FR-004 (User Management), NFR-003, NFR-005.

**Assumptions/Constraints**:
- Assumes UserDTO chứa name, email, role.
- Constraint: PII phải được mã hóa (NFR-003).

**Dependencies/Risks**:
- Dependencies: Identity Service, PostgreSQL.
- Risks: Data leakage → Mitigation: AES-256 encryption.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-004.
- CRUD operations hoàn tất trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.5 IAnalyticsService

**References**: Part04_Functional_Requirements (FR-008), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho real-time analytics.

**Ý nghĩa**: Hỗ trợ FR-008 (Real-Time Analytics) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho metrics và analytics.

**Nội dung cần có**:
- **Mô tả**: `IAnalyticsService` cung cấp real-time metrics và funnel analytics (FR-008).
- **Interface Definition**:
```typescript
interface IAnalyticsService {
  getRealTimeMetrics(campaignId: string): Promise<Metrics>;
  getFunnelAnalytics(campaignId: string, period: DateRange): Promise<FunnelData>;
}
```
- **Dependencies**: FR-008 (Real-Time Analytics), NFR-001 (Performance).

**Assumptions/Constraints**:
- Assumes metrics được lưu trong MongoDB.
- Constraint: Queries phải trả về trong <500ms.

**Dependencies/Risks**:
- Dependencies: Analytics Service, MongoDB.
- Risks: Query performance → Mitigation: Index optimization.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-008.
- Metrics queries <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.6 INotificationService

**References**: Part04_Functional_Requirements (FR-009, FR-010), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho notification và CRM sync.

**Ý nghĩa**: Hỗ trợ FR-010 (Notification System) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho SMS, Email, và CRM sync.

**Nội dung cần có**:
- **Mô tả**: `INotificationService` xử lý gửi SMS/Email/Push và đồng bộ CRM (FR-009, FR-010).
- **Interface Definition**:
```typescript
interface INotificationService {
  sendSMS(phone: string, message: string): Promise<void>;
  sendEmail(email: string, subject: string, body: string): Promise<void>;
  sendPush(userId: string, message: string): Promise<void>;
  syncToCRM(user: UserDTO): Promise<void>;
}
```
- **Dependencies**: FR-009 (CRM Integration), FR-010 (Notification System), NFR-001.

**Assumptions/Constraints**:
- Assumes Twilio xử lý SMS/Email.
- Constraint: Notifications phải gửi trong <5s.

**Dependencies/Risks**:
- Dependencies: Notification Service, Twilio, SQS.
- Risks: Third-party downtime → Mitigation: Retries, DLQ.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-009, FR-010.
- Notifications gửi trong <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.7 IFraudDetectionService

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Định nghĩa interface cho fraud detection.

**Ý nghĩa**: Tăng NFR-003 (Security) với fraud scoring logic.

**Cách làm**: Cung cấp interface TypeScript cho fraud score và rules.

**Nội dung cần có**:
- **Mô tả**: `IFraudDetectionService` tính fraud score và quản lý rules (FR-011).
- **Interface Definition**:
```typescript
interface IFraudDetectionService {
  calculateFraudScore(data: FraudData): Promise<number>;
  addFraudRule(rule: FraudRule): Promise<void>;
  getFraudHistory(deviceId: string): Promise<FraudRecord[]>;
}
```
- **Dependencies**: FR-011 (Fraud Detection), NFR-003 (Security).

**Assumptions/Constraints**:
- Assumes fraud score từ 0-1.
- Constraint: Scoring phải <100ms.

**Dependencies/Risks**:
- Dependencies: Fraud Detection Service, MongoDB.
- Risks: False positives → Mitigation: Rule tuning.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-011.
- Scoring latency <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.8 IABTestingService

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho A/B testing.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho A/B testing experiments.

**Cách làm**: Cung cấp interface TypeScript cho quản lý experiments.

**Nội dung cần có**:
- **Mô tả**: `IABTestingService` quản lý và chạy A/B tests (FR-012).
- **Interface Definition**:
```typescript
interface IABTestingService {
  createExperiment(experiment: ExperimentDTO): Promise<Experiment>;
  runExperiment(experimentId: string): Promise<void>;
  getExperimentResults(experimentId: string): Promise<ExperimentResults>;
}
```
- **Dependencies**: FR-012 (A/B Testing), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes experiments có variants (A/B).
- Constraint: Results trả về trong <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service, MongoDB.
- Risks: Experiment bias → Mitigation: Randomization.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-012.
- Experiment results trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.1.9 IRecommendationService

**References**: Part04_Functional_Requirements (FR-013), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho recommendation engine.

**Ý nghĩa**: Hỗ trợ FR-013 (Recommendation Engine) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho recommendations.

**Nội dung cần có**:
- **Mô tả**: `IRecommendationService` cung cấp gợi ý quà tặng dựa trên user preferences (FR-013).
- **Interface Definition**:
```typescript
interface IRecommendationService {
  getRecommendations(userId: string): Promise<Recommendation[]>;
  updateUserPreferences(userId: string, preferences: PreferenceDTO): Promise<void>;
}
```
- **Dependencies**: FR-013 (Recommendation Engine), NFR-001 (Performance).

**Assumptions/Constraints**:
- Assumes recommendations dựa trên collaborative filtering.
- Constraint: Recommendations trả về trong <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service, MongoDB.
- Risks: Low-quality recommendations → Mitigation: Model training.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-013.
- Recommendations latency <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.2.2 Repository Interfaces

#### 06B.2.2.1 IRepository_Base

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa base interface cho tất cả repositories.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với chuẩn hóa repository operations.

**Cách làm**: Cung cấp interface TypeScript generic cho CRUD operations.

**Nội dung cần có**:
- **Mô tả**: `IRepository` là base interface cho các repository, cung cấp CRUD methods chung.
- **Interface Definition**:
```typescript
interface IRepository<T> {
  create(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T | null>;
  findAll(filter: Partial<T>): Promise<T[]>;
}
```
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes generic type T cho mọi entity.
- Constraint: Methods phải thread-safe.

**Dependencies/Risks**:
- Dependencies: All Repository Interfaces.
- Risks: Interface quá chung → Mitigation: Specific repository interfaces.

**Acceptance Criteria/Testable Items**:
- Interface được implement bởi tất cả repositories.
- Methods trả về đúng data types.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.2 ICampaignRepository

**References**: Part04_Functional_Requirements (FR-001), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho repository của Campaign.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho campaign data access.

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `ICampaignRepository` xử lý truy cập dữ liệu campaigns (FR-001).
- **Interface Definition**:
```typescript
interface ICampaignRepository extends IRepository<Campaign> {
  findByDateRange(start: Date, end: Date): Promise<Campaign[]>;
}
```
- **Dependencies**: FR-001 (Campaign CRUD), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes campaigns lưu trong PostgreSQL.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service, PostgreSQL.
- Risks: Query performance → Mitigation: Indexing.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-001.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.3 IUserRepository

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Định nghĩa interface cho repository của User.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-005 (Maintainability).

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IUserRepository` xử lý truy cập dữ liệu users (FR-004).
- **Interface Definition**:
```typescript
interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
```
- **Dependencies**: FR-004 (User Management), NFR-003, NFR-005.

**Assumptions/Constraints**:
- Assumes users lưu trong PostgreSQL.
- Constraint: PII phải mã hóa (NFR-003).

**Dependencies/Risks**:
- Dependencies: Identity Service, PostgreSQL.
- Risks: Data leakage → Mitigation: Encryption.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-004.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.4 IBarcodeRepository

**References**: Part04_Functional_Requirements (FR-002, FR-007), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho repository của Barcode.

**Ý nghĩa**: Hỗ trợ FR-002, FR-007 và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IBarcodeRepository` xử lý truy cập dữ liệu barcodes (FR-002, FR-007).
- **Interface Definition**:
```typescript
interface IBarcodeRepository extends IRepository<Barcode> {
  findByCampaignId(campaignId: string): Promise<Barcode[]>;
  markAsRedeemed(barcodeId: string): Promise<void>;
}
```
- **Dependencies**: FR-002 (Barcode Management), FR-007 (Barcode Redemption), NFR-001.

**Assumptions/Constraints**:
- Assumes barcodes lưu trong PostgreSQL.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service, Redemption Service.
- Risks: Barcode collision → Mitigation: Unique constraints.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-002, FR-007.
- Queries trả về trong <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.5 IFraudScoreRepository

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Định nghĩa interface cho repository của Fraud Scores.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-005 (Maintainability).

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IFraudScoreRepository` xử lý truy cập dữ liệu fraud scores (FR-011).
- **Interface Definition**:
```typescript
interface IFraudScoreRepository extends IRepository<FraudScore> {
  findByDeviceId(deviceId: string): Promise<FraudScore[]>;
}
```
- **Dependencies**: FR-011 (Fraud Detection), NFR-003, NFR-005.

**Assumptions/Constraints**:
- Assumes fraud scores lưu trong MongoDB.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Fraud Detection Service, MongoDB.
- Risks: Data volume → Mitigation: Sharding.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-011.
- Queries trả về trong <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.6 IUserPreferenceRepository

**References**: Part04_Functional_Requirements (FR-013), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho repository của User Preferences.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho recommendation engine.

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IUserPreferenceRepository` xử lý truy cập dữ liệu user preferences (FR-013).
- **Interface Definition**:
```typescript
interface IUserPreferenceRepository extends IRepository<UserPreference> {
  findByUserId(userId: string): Promise<UserPreference[]>;
}
```
- **Dependencies**: FR-013 (Recommendation Engine), NFR-005.

**Assumptions/Constraints**:
- Assumes preferences lưu trong MongoDB.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service, MongoDB.
- Risks: Data growth → Mitigation: Sharding.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-013.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.7 IExperimentRepository

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho repository của A/B Testing Experiments.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho A/B testing.

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IExperimentRepository` xử lý truy cập dữ liệu experiments (FR-012).
- **Interface Definition**:
```typescript
interface IExperimentRepository extends IRepository<Experiment> {
  findByCampaignId(campaignId: string): Promise<Experiment[]>;
}
```
- **Dependencies**: FR-012 (A/B Testing), NFR-005.

**Assumptions/Constraints**:
- Assumes experiments lưu trong MongoDB.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service, MongoDB.
- Risks: Data volume → Mitigation: Indexing.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-012.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.2.8 IRecommendationRepository

**References**: Part04_Functional_Requirements (FR-013), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho repository của Recommendations.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho recommendation engine.

**Cách làm**: Cung cấp interface TypeScript kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `IRecommendationRepository` xử lý truy cập dữ liệu recommendations (FR-013).
- **Interface Definition**:
```typescript
interface IRecommendationRepository extends IRepository<Recommendation> {
  findByUserId(userId: string): Promise<Recommendation[]>;
}
```
- **Dependencies**: FR-013 (Recommendation Engine), NFR-005.

**Assumptions/Constraints**:
- Assumes recommendations lưu trong MongoDB.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Intelligence Service, MongoDB.
- Risks: Data growth → Mitigation: Sharding.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-013.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.2.3 External Integration Interfaces

#### 06B.2.3.1 ICRMConnector

**References**: Part04_Functional_Requirements (FR-009), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Định nghĩa interface cho tích hợp CRM (HubSpot, Salesforce).

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với chuẩn hóa CRM sync.

**Cách làm**: Cung cấp interface TypeScript cho CRM integration.

**Nội dung cần có**:
- **Mô tả**: `ICRMConnector` xử lý đồng bộ customer data với CRM (FR-009).
- **Interface Definition**:
```typescript
interface ICRMConnector {
  syncCustomer(customer: CustomerDTO): Promise<void>;
  syncCampaign(campaign: CampaignDTO): Promise<void>;
}
```
- **Dependencies**: FR-009 (CRM Integration), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes HubSpot/Salesforce APIs ổn định.
- Constraint: Sync phải idempotent.

**Dependencies/Risks**:
- Dependencies: Notification Service, HubSpot/Salesforce.
- Risks: API downtime → Mitigation: Retries, DLQ.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-009.
- Sync hoàn tất trong <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.3.2 ISMSProvider

**References**: Part04_Functional_Requirements (FR-010), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho SMS provider (Twilio).

**Ý nghĩa**: Hỗ trợ FR-010 (Notification System) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho SMS notifications.

**Nội dung cần có**:
- **Mô tả**: `ISMSProvider` xử lý gửi SMS notifications (FR-010).
- **Interface Definition**:
```typescript
interface ISMSProvider {
  sendSMS(phone: string, message: string): Promise<void>;
}
```
- **Dependencies**: FR-010 (Notification System), NFR-001 (Performance).

**Assumptions/Constraints**:
- Assumes Twilio API xử lý SMS.
- Constraint: SMS gửi trong <5s.

**Dependencies/Risks**:
- Dependencies: Notification Service, Twilio.
- Risks: Twilio downtime → Mitigation: Fallback providers.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-010.
- SMS gửi trong <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.3.3 IEmailProvider

**References**: Part04_Functional_Requirements (FR-010), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Định nghĩa interface cho Email provider (Twilio).

**Ý nghĩa**: Hỗ trợ FR-010 (Notification System) và NFR-001 (Performance).

**Cách làm**: Cung cấp interface TypeScript cho Email notifications.

**Nội dung cần có**:
- **Mô tả**: `IEmailProvider` xử lý gửi Email notifications (FR-010).
- **Interface Definition**:
```typescript
interface IEmailProvider {
  sendEmail(email: string, subject: string, body: string): Promise<void>;
}
```
- **Dependencies**: FR-010 (Notification System), NFR-001 (Performance).

**Assumptions/Constraints**:
- Assumes Twilio API xử lý Email.
- Constraint: Email gửi trong <5s.

**Dependencies/Risks**:
- Dependencies: Notification Service, Twilio.
- Risks: Email delivery failures → Mitigation: Retries, DLQ.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-010.
- Email gửi trong <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 06B.2.3.4 IPOSConnector

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-007)

**Mục đích**: Định nghĩa interface cho POS device integration.

**Ý nghĩa**: Hỗ trợ FR-007 (Barcode Redemption) và NFR-007 (Usability).

**Cách làm**: Cung cấp interface TypeScript cho offline redemption.

**Nội dung cần có**:
- **Mô tả**: `IPOSConnector` xử lý redemption trên POS devices (FR-007).
- **Interface Definition**:
```typescript
interface IPOSConnector {
  redeemOffline(barcode: string): Promise<boolean>;
  syncOfflineData(): Promise<void>;
}
```
- **Dependencies**: FR-007 (Barcode Redemption), NFR-007 (Usability).

**Assumptions/Constraints**:
- Assumes POS devices sử dụng LocalDB (SQLite).
- Constraint: Offline redemption phải <500ms.

**Dependencies/Risks**:
- Dependencies: Redemption Service, LocalDB.
- Risks: Sync failures → Mitigation: Retry mechanisms.

**Acceptance Criteria/Testable Items**:
- Interface hỗ trợ đầy đủ FR-007.
- Offline redemption latency <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part06B - Design Patterns (Section 3)

## Structure of Part06B (Section 3)
```
Part06B_Design_Patterns/
├── 06B.3_Abstract_Base_Classes/
│   ├── 06B.3.1_BaseService.md
│   ├── 06B.3.2_BaseRepository.md
│   ├── 06B.3.3_BaseController.md
│   ├── 06B.3.4_BaseValidator.md
├── 06B.4_Dependency_Injection/
│   ├── 06B.4.1_DI_Container_Setup.md
│   ├── 06B.4.2_Service_Registration.md
│   ├── 06B.4.3_Lifetime_Management.md
│   ├── 06B.4.4_Configuration_Pattern.md
├── 06B.5_Module_Independence/
│   ├── 06B.5.1_Module_Boundaries.md
│   ├── 06B.5.2_Inter_Module_Communication.md
│   ├── 06B.5.3_Event_Bus_Pattern.md
│   ├── 06B.5.4_API_Contracts.md
│   ├── 06B.5.5_Versioning_Strategy.md
├── 06B.6_Code_Organization/
│   ├── 06B.6.1_Folder_Structure.md
│   ├── 06B.6.2_Naming_Conventions.md
│   ├── 06B.6.3_File_Organization.md
│   ├── 06B.6.4_Package_Structure.md
├── 06B.7_Documentation_Standards/
│   ├── 06B.7.1_Code_Comments.md
│   ├── 06B.7.2_API_Documentation.md
│   ├── 06B.7.3_Architecture_Decision_Records.md
│   ├── 06B.7.4_README_Templates.md
```

---

## 06B.3 Abstract Base Classes

### 06B.3.1 BaseService

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Cung cấp base class cho tất cả services để chuẩn hóa logic chung.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với logging và error handling thống nhất.

**Cách làm**: Định nghĩa abstract TypeScript class với logging và error handling.

**Nội dung cần có**:
- **Mô tả**: `BaseService` cung cấp các phương thức chung như logging và error handling cho các services (Campaign, Identity, etc.).
- **Code Example**:
```typescript
import { Logger } from "winston";

abstract class BaseService {
  protected logger: Logger;
  
  constructor(logger: Logger) {
    this.logger = logger;
  }
  
  protected async execute<T>(operation: string, fn: () => Promise<T>): Promise<T> {
    try {
      this.logger.info(`Executing ${operation}`);
      const result = await fn();
      this.logger.info(`Completed ${operation}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in ${operation}: ${error.message}`);
      throw new Error(`Failed to execute ${operation}: ${error.message}`);
    }
  }
}

// Usage in CampaignService
class CampaignService extends BaseService implements ICampaignService {
  async createCampaign(campaign: CampaignDTO): Promise<Campaign> {
    return this.execute("createCampaign", async () => {
      // Implementation
      return { id: "123", ...campaign };
    });
  }
}
```
- **Dependencies**: NFR-005 (Maintainability), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes Winston logger được cấu hình với CloudWatch.
- Constraint: Logging không được tăng latency quá 10ms.

**Dependencies/Risks**:
- Dependencies: Winston, CloudWatch.
- Risks: Log overhead → Mitigation: Async logging.

**Acceptance Criteria/Testable Items**:
- BaseService log mọi operation đúng format.
- Error handling trả về lỗi rõ ràng.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.3.2 BaseRepository

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Cung cấp base class cho tất cả repositories để chuẩn hóa data access.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với CRUD operations chung.

**Cách làm**: Định nghĩa abstract TypeScript class kế thừa `IRepository`.

**Nội dung cần có**:
- **Mô tả**: `BaseRepository` cung cấp triển khai chung cho CRUD operations, kết nối DB (PostgreSQL/MongoDB).
- **Code Example**:
```typescript
import { IRepository } from "./IRepository";

abstract class BaseRepository<T> implements IRepository<T> {
  protected db: any; // PostgreSQL/MongoDB client
  
  constructor(db: any) {
    this.db = db;
  }
  
  async create(entity: T): Promise<T> {
    // Generic DB insert
    return entity;
  }
  
  async update(id: string, entity: Partial<T>): Promise<T> {
    // Generic DB update
    return { id, ...entity } as T;
  }
  
  async delete(id: string): Promise<void> {
    // Generic DB delete
  }
  
  async findById(id: string): Promise<T | null> {
    // Generic DB find
    return null;
  }
  
  async findAll(filter: Partial<T>): Promise<T[]> {
    // Generic DB query
    return [];
  }
}

// Usage in CampaignRepository
class CampaignRepository extends BaseRepository<Campaign> implements ICampaignRepository {
  async findByDateRange(start: Date, end: Date): Promise<Campaign[]> {
    // Specific implementation
    return [];
  }
}
```
- **Dependencies**: NFR-005 (Maintainability), 06B.2.2.1 (IRepository_Base).

**Assumptions/Constraints**:
- Assumes DB client được inject qua constructor.
- Constraint: Operations phải <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: PostgreSQL, MongoDB.
- Risks: DB connection errors → Mitigation: Connection pooling.

**Acceptance Criteria/Testable Items**:
- BaseRepository hỗ trợ đầy đủ CRUD.
- Operations trả về đúng data types.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.3.3 BaseController

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Cung cấp base class cho REST controllers để chuẩn hóa API handling.

**Ý nghĩa**: Tăng NFR-001 (Performance) và NFR-005 (Maintainability).

**Cách làm**: Định nghĩa abstract TypeScript class cho REST API endpoints.

**Nội dung cần có**:
- **Mô tả**: `BaseController` chuẩn hóa xử lý API requests với error handling và logging.
- **Code Example**:
```typescript
import { Request, Response } from "express";
import { Logger } from "winston";

abstract class BaseController {
  protected logger: Logger;
  
  constructor(logger: Logger) {
    this.logger = logger;
  }
  
  protected async handleRequest<T>(req: Request, res: Response, fn: () => Promise<T>) {
    try {
      const result = await fn();
      res.status(200).json(result);
    } catch (error) {
      this.logger.error(`Error in ${req.path}: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }
}

// Usage in CampaignController
class CampaignController extends BaseController {
  constructor(logger: Logger, private campaignService: ICampaignService) {
    super(logger);
  }
  
  async createCampaign(req: Request, res: Response) {
    await this.handleRequest(req, res, () => this.campaignService.createCampaign(req.body));
  }
}
```
- **Dependencies**: NFR-001 (Performance), NFR-005 (Maintainability), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes Express.js cho API routing.
- Constraint: API responses phải <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: Express.js, Winston.
- Risks: Error handling thiếu → Mitigation: Comprehensive try-catch.

**Acceptance Criteria/Testable Items**:
- BaseController xử lý API requests đúng.
- Responses trả về trong <500ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.3.4 BaseValidator

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Cung cấp base class cho input validation.

**Ý nghĩa**: Tăng NFR-003 (Security) với input validation thống nhất.

**Cách làm**: Định nghĩa abstract TypeScript class với validation logic.

**Nội dung cần có**:
- **Mô tả**: `BaseValidator` cung cấp phương thức validate chung, tích hợp Joi hoặc Zod.
- **Code Example**:
```typescript
import { z, ZodError } from "zod";

abstract class BaseValidator<T> {
  protected schema: z.ZodSchema<T>;
  
  constructor(schema: z.ZodSchema<T>) {
    this.schema = schema;
  }
  
  validate(data: unknown): T {
    try {
      return this.schema.parse(data);
    } catch (error) {
      throw new ZodError((error as ZodError).errors);
    }
  }
}

// Usage in CampaignValidator
const campaignSchema = z.object({
  name: z.string().min(3),
  startDate: z.date(),
});

class CampaignValidator extends BaseValidator<CampaignDTO> {
  constructor() {
    super(campaignSchema);
  }
}
```
- **Dependencies**: NFR-003 (Security), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes Zod cho validation.
- Constraint: Validation phải <10ms.

**Dependencies/Risks**:
- Dependencies: Zod.
- Risks: Schema complexity → Mitigation: Modular schemas.

**Acceptance Criteria/Testable Items**:
- BaseValidator validate input đúng.
- Validation latency <10ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06B.4 Dependency Injection

### 06B.4.1 DI Container Setup

**References**: Part05_Non_Functional_Requirements (NFR-005), 06B.2.1 (Service Interfaces)

**Mục đích**: Mô tả setup DI container với inversifyJS.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với DI thống nhất.

**Cách làm**: Cung cấp cấu hình inversifyJS cho microservices.

**Nội dung cần có**:
- **Mô tả**: Sử dụng inversifyJS để quản lý dependencies cho 7 microservices.
- **Code Example**:
```typescript
import { Container } from "inversify";
import { ICampaignService } from "./ICampaignService";
import { CampaignService } from "./CampaignService";

const container = new Container();
container.bind<ICampaignService>("ICampaignService").to(CampaignService).inSingletonScope();
```
- **Dependencies**: NFR-005 (Maintainability), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes inversifyJS là DI container.
- Constraint: Container setup không được tăng startup time quá 100ms.

**Dependencies/Risks**:
- Dependencies: inversifyJS.
- Risks: Misconfiguration → Mitigation: Unit tests.

**Acceptance Criteria/Testable Items**:
- Container bind đúng services.
- Startup time <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.4.2 Service Registration

**References**: Part05_Non_Functional_Requirements (NFR-005), 06B.2.1 (Service Interfaces)

**Mục đích**: Mô tả cách đăng ký services vào DI container.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với service registration thống nhất.

**Cách làm**: Cung cấp code đăng ký services với inversifyJS.

**Nội dung cần có**:
- **Mô tả**: Đăng ký tất cả services (Campaign, Identity, etc.) vào container.
- **Code Example**:
```typescript
import { Container } from "inversify";
import { TYPES } from "./types";

const container = new Container();
container.bind<ICampaignService>(TYPES.ICampaignService).to(CampaignService).inSingletonScope();
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
container.bind<INotificationService>(TYPES.INotificationService).to(NotificationService).inTransientScope();
```
- **Dependencies**: NFR-005 (Maintainability), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes TYPES là enum cho service identifiers.
- Constraint: Registration phải hoàn tất trong <100ms.

**Dependencies/Risks**:
- Dependencies: inversifyJS.
- Risks: Wrong scope → Mitigation: Scope validation.

**Acceptance Criteria/Testable Items**:
- Tất cả services được bind đúng.
- Registration time <100ms.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.4.3 Lifetime Management

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả quản lý lifetime của dependencies.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với scope phù hợp.

**Cách làm**: Mô tả singleton, transient, và request scopes.

**Nội dung cần có**:
- **Mô tả**: 
  - **Singleton**: AuthService, CampaignService (shared instance).
  - **Transient**: NotificationService (new instance mỗi request).
  - **Request**: Controllers (per HTTP request).
- **Code Example**:
```typescript
import { Container } from "inversify";

const container = new Container();
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
container.bind<INotificationService>(TYPES.INotificationService).to(NotificationService).inTransientScope();
container.bind<CampaignController>(TYPES.CampaignController).to(CampaignController).inRequestScope();
```
- **Dependencies**: NFR-005 (Maintainability), 06B.4.1 (DI Container Setup).

**Assumptions/Constraints**:
- Assumes inversifyJS hỗ trợ request scope.
- Constraint: Singleton không được giữ large state.

**Dependencies/Risks**:
- Dependencies: inversifyJS.
- Risks: Memory leaks → Mitigation: Monitor memory usage.

**Acceptance Criteria/Testable Items**:
- Singleton services duy trì 1 instance.
- Transient services tạo instance mới mỗi request.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.4.4 Configuration Pattern

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả cách quản lý configuration qua DI.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với config injection.

**Cách làm**: Cung cấp code inject configuration vào services.

**Nội dung cần có**:
- **Mô tả**: Sử dụng DI để inject configuration (e.g., DB URLs, API keys).
- **Code Example**:
```typescript
import { Container } from "inversify";

interface IConfig {
  dbUrl: string;
  twilioApiKey: string;
}

class ConfigService {
  constructor(private config: IConfig) {}
  getDbUrl() { return this.config.dbUrl; }
}

const container = new Container();
container.bind<IConfig>(TYPES.IConfig).toConstantValue({
  dbUrl: process.env.DB_URL,
  twilioApiKey: process.env.TWILIO_API_KEY,
});
container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
```
- **Dependencies**: NFR-005 (Maintainability), 06B.4.1 (DI Container Setup).

**Assumptions/Constraints**:
- Assumes configs từ environment variables.
- Constraint: Configs phải immutable sau khởi tạo.

**Dependencies/Risks**:
- Dependencies: inversifyJS, dotenv.
- Risks: Missing env vars → Mitigation: Default configs.

**Acceptance Criteria/Testable Items**:
- Configs được inject đúng vào services.
- Immutable configs được duy trì.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06B.5 Module Independence

### 06B.5.1 Module Boundaries

**References**: Part05_Non_Functional_Requirements (NFR-002, NFR-005), 06B.2.1 (Service Interfaces)

**Mục đích**: Mô tả ranh giới giữa các microservices.

**Ý nghĩa**: Tăng NFR-002 (Scalability) và NFR-005 (Maintainability) với loose coupling.

**Cách làm**: Mô tả ranh giới và dependencies giữa 7 microservices.

**Nội dung cần có**:
- **Mô tả**: Mỗi microservice (Campaign, Identity, etc.) có ranh giới rõ ràng, giao tiếp qua REST APIs hoặc SQS.
- **Diagram**:
  ```mermaid
  graph TD
      A[Campaign Management] -->|REST| B[Identity]
      A -->|SQS| C[Notification]
      D[Redemption] -->|REST| E[Fraud Detection]
      D -->|SQS| F[Analytics]
      G[Intelligence] -->|SQS| F
  ```
- **Dependencies**: NFR-002, NFR-005, 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes REST APIs và SQS cho inter-service communication.
- Constraint: Services phải độc lập về DB.

**Dependencies/Risks**:
- Dependencies: AWS API Gateway, SQS.
- Risks: Tight coupling → Mitigation: Strict API contracts.

**Acceptance Criteria/Testable Items**:
- Services giao tiếp chỉ qua APIs/SQS.
- Không có DB sharing giữa services.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.5.2 Inter-Module Communication

**References**: Part05_Non_Functional_Requirements (NFR-001, NFR-002), 06B.5.1 (Module Boundaries)

**Mục đích**: Mô tả giao tiếp giữa các modules (REST, SQS).

**Ý nghĩa**: Tăng NFR-001 (Performance) và NFR-002 (Scalability).

**Cách làm**: Mô tả REST APIs và SQS cho inter-service communication.

**Nội dung cần có**:
- **Mô tả**: 
  - **REST**: Synchronous calls (e.g., Redemption → Fraud Detection).
  - **SQS**: Async events (e.g., Redemption → Analytics).
- **Diagram**:
  ```mermaid
  sequenceDiagram
      participant Redemption
      participant FraudDetection
      participant SQS
      participant Analytics
      Redemption->>FraudDetection: POST /api/fraud/score (REST)
      FraudDetection-->>Redemption: Score
      Redemption->>SQS: Publish redemption.completed
      SQS->>Analytics: Poll event
  ```
- **Dependencies**: NFR-001, NFR-002, 06B.5.1 (Module Boundaries).

**Assumptions/Constraints**:
- Assumes mTLS cho REST, DLQ cho SQS.
- Constraint: REST latency <500ms, SQS <5s.

**Dependencies/Risks**:
- Dependencies: AWS API Gateway, SQS.
- Risks: Message loss → Mitigation: DLQ.

**Acceptance Criteria/Testable Items**:
- REST calls hoàn tất trong <500ms.
- SQS events xử lý trong <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.5.3 Event Bus Pattern

**References**: Part04_Functional_Requirements (FR-010), Part05_Non_Functional_Requirements (NFR-002)

**Mục đích**: Mô tả event bus cho async communication.

**Ý nghĩa**: Tăng NFR-002 (Scalability) với loose coupling.

**Cách làm**: Mô tả AWS SNS/SQS cho event bus.

**Nội dung cần có**:
- **Mô tả**: Event bus sử dụng SNS/SQS cho events như `redemption.completed`, `campaign.created`.
- **Code Example**:
```typescript
import { SNS } from "aws-sdk";

class EventBus {
  private sns: SNS;
  constructor() {
    this.sns = new SNS();
  }
  
  async publish(event: string, data: any) {
    await this.sns.publish({
      TopicArn: `arn:aws:sns:us-east-1:123456789:events`,
      Message: JSON.stringify({ event, data }),
    }).promise();
  }
}

// Usage
const eventBus = new EventBus();
await eventBus.publish("redemption.completed", { barcode: "12345" });
```
- **Dependencies**: FR-010 (Notification System), NFR-002 (Scalability).

**Assumptions/Constraints**:
- Assumes SNS topics được cấu hình trước.
- Constraint: Events xử lý trong <5s.

**Dependencies/Risks**:
- Dependencies: AWS SNS/SQS.
- Risks: Event duplication → Mitigation: Idempotent consumers.

**Acceptance Criteria/Testable Items**:
- Events được publish và consume đúng.
- Event processing <5s.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.5.4 API Contracts

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả API contracts giữa microservices.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với API specs rõ ràng.

**Cách làm**: Cung cấp OpenAPI specs cho key endpoints.

**Nội dung cần có**:
- **Mô tả**: API contracts sử dụng OpenAPI 3.0 cho REST endpoints.
- **Code Example**:
```yaml
openapi: 3.0.3
paths:
  /api/redemptions/online:
    post:
      summary: Redeem a barcode
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                barcode: { type: string }
      responses:
        "200":
          content:
            application/json:
              schema:
                type: boolean
```
- **Dependencies**: NFR-005 (Maintainability), 06B.2.1 (Service Interfaces).

**Assumptions/Constraints**:
- Assumes OpenAPI 3.0 cho API documentation.
- Constraint: Contracts phải versioned.

**Dependencies/Risks**:
- Dependencies: Swagger/OpenAPI.
- Risks: Inconsistent contracts → Mitigation: Automated validation.

**Acceptance Criteria/Testable Items**:
- API contracts đúng với service interfaces.
- OpenAPI specs validate thành công.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.5.5 Versioning Strategy

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả chiến lược versioning cho APIs.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với backward compatibility.

**Cách làm**: Mô tả URI versioning và deprecation policy.

**Nội dung cần có**:
- **Mô tả**: 
  - **URI Versioning**: `/api/v1/redemptions`.
  - **Deprecation**: 6-month notice cho API versions cũ.
- **Code Example**:
```typescript
// Express route with version
app.post("/api/v1/redemptions/online", async (req, res) => {
  // Redemption logic
});
```
- **Dependencies**: NFR-005 (Maintainability), 06B.5.4 (API Contracts).

**Assumptions/Constraints**:
- Assumes version tăng với breaking changes.
- Constraint: Backward compatibility phải duy trì 6 tháng.

**Dependencies/Risks**:
- Dependencies: Express.js.
- Risks: Version proliferation → Mitigation: Deprecation policy.

**Acceptance Criteria/Testable Items**:
- APIs hỗ trợ versioning qua URI.
- Deprecation notice được document.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06B.6 Code Organization

### 06B.6.1 Folder Structure

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả folder structure cho microservices.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với tổ chức code rõ ràng.

**Cách làm**: Cung cấp cấu trúc thư mục cho mỗi microservice.

**Nội dung cần có**:
- **Mô tả**: Mỗi microservice có cấu trúc:
  ```
  campaign-management/
  ├── src/
  │   ├── controllers/
  │   ├── services/
  │   ├── repositories/
  │   ├── validators/
  │   ├── models/
  │   ├── types/
  │   └── config/
  ├── tests/
  ├── package.json
  └── Dockerfile
  ```
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes monorepo cho 7 microservices.
- Constraint: Structure phải hỗ trợ CI/CD.

**Dependencies/Risks**:
- Dependencies: Node.js, Docker.
- Risks: Inconsistent structures → Mitigation: Enforce linter.

**Acceptance Criteria/Testable Items**:
- Mỗi microservice tuân theo folder structure.
- CI/CD pipeline tương thích structure.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.6.2 Naming Conventions

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả naming conventions cho code.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với tên nhất quán.

**Cách làm**: Mô tả camelCase, PascalCase, và prefix conventions.

**Nội dung cần có**:
- **Mô tả**:
  - **Classes**: PascalCase (e.g., `CampaignService`).
  - **Interfaces**: PascalCase với prefix `I` (e.g., `ICampaignService`).
  - **Variables/Methods**: camelCase (e.g., `createCampaign`).
  - **Files**: kebab-case (e.g., `campaign-service.ts`).
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes ESLint để enforce conventions.
- Constraint: Tên phải rõ ràng, không quá 50 ký tự.

**Dependencies/Risks**:
- Dependencies: ESLint.
- Risks: Inconsistent naming → Mitigation: Linter rules.

**Acceptance Criteria/Testable Items**:
- Code tuân theo naming conventions.
- ESLint không báo lỗi naming.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.6.3 File Organization

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả tổ chức file trong microservices.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với file placement rõ ràng.

**Cách làm**: Mô tả placement của controllers, services, repositories.

**Nội dung cần có**:
- **Mô tả**:
  - **Controllers**: `src/controllers/*.controller.ts`
  - **Services**: `src/services/*.service.ts`
  - **Repositories**: `src/repositories/*.repository.ts`
  - **Validators**: `src/validators/*.validator.ts`
- **Dependencies**: NFR-005 (Maintainability), 06B.6.1 (Folder Structure).

**Assumptions/Constraints**:
- Assumes 1 file per class.
- Constraint: File size <500 lines.

**Dependencies/Risks**:
- Dependencies: Node.js.
- Risks: Large files → Mitigation: Enforce file splitting.

**Acceptance Criteria/Testable Items**:
- Files được đặt đúng thư mục.
- File size <500 lines.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.6.4 Package Structure

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả package structure cho monorepo.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với quản lý dependencies.

**Cách làm**: Mô tả package.json và monorepo setup.

**Nội dung cần có**:
- **Mô tả**: Monorepo với `package.json` riêng cho mỗi microservice, sử dụng Yarn workspaces.
- **Code Example**:
```json
{
  "name": "campaign-management",
  "version": "1.0.0",
  "dependencies": {
    "inversify": "^6.0.0",
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```
- **Dependencies**: NFR-005 (Maintainability), 06B.6.1 (Folder Structure).

**Assumptions/Constraints**:
- Assumes Yarn workspaces cho monorepo.
- Constraint: Dependencies phải pinned versions.

**Dependencies/Risks**:
- Dependencies: Yarn, Node.js.
- Risks: Dependency conflicts → Mitigation: Yarn resolutions.

**Acceptance Criteria/Testable Items**:
- Package.json đúng cấu hình.
- No dependency conflicts.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 06B.7 Documentation Standards

### 06B.7.1 Code Comments

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả chuẩn comment code.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với comments rõ ràng.

**Cách làm**: Mô tả JSDoc và inline comments.

**Nội dung cần có**:
- **Mô tả**:
  - **JSDoc**: Cho classes, methods, interfaces.
  - **Inline Comments**: Giải thích complex logic.
- **Code Example**:
```typescript
/**
 * Creates a new campaign
 * @param campaign - Campaign data
 * @returns Created campaign
 */
async createCampaign(campaign: CampaignDTO): Promise<Campaign> {
  // Validate input using Zod
  const validated = this.validator.validate(campaign);
  return this.repository.create(validated);
}
```
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes JSDoc cho public APIs.
- Constraint: Comments không được dài quá 80 ký tự.

**Dependencies/Risks**:
- Dependencies: JSDoc.
- Risks: Over-commenting → Mitigation: Focus on critical logic.

**Acceptance Criteria/Testable Items**:
- JSDoc cho 100% public APIs.
- Inline comments cho complex logic.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.7.2 API Documentation

**References**: Part05_Non_Functional_Requirements (NFR-005), 06B.5.4 (API Contracts)

**Mục đích**: Mô tả chuẩn API documentation với OpenAPI.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với API specs rõ ràng.

**Cách làm**: Mô tả sử dụng Swagger/OpenAPI.

**Nội dung cần có**:
- **Mô tả**: API documentation sử dụng OpenAPI 3.0, lưu trong `api-docs.yaml`.
- **Code Example**:
```yaml
openapi: 3.0.3
paths:
  /api/v1/campaigns:
    post:
      summary: Create a campaign
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CampaignDTO"
      responses:
        "201":
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Campaign"
```
- **Dependencies**: NFR-005 (Maintainability), 06B.5.4 (API Contracts).

**Assumptions/Constraints**:
- Assumes Swagger UI cho API visualization.
- Constraint: Docs phải cập nhật sau mỗi release.

**Dependencies/Risks**:
- Dependencies: Swagger/OpenAPI.
- Risks: Outdated docs → Mitigation: Automated generation.

**Acceptance Criteria/Testable Items**:
- API docs đúng với OpenAPI 3.0.
- Swagger UI hiển thị đúng endpoints.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.7.3 Architecture Decision Records

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả chuẩn ADR để ghi lại quyết định kiến trúc.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với lịch sử quyết định.

**Cách làm**: Mô tả template ADR và lưu trữ.

**Nội dung cần có**:
- **Mô tả**: ADRs lưu trong `docs/adr/`, sử dụng template:
  - Title, Context, Decision, Status, Consequences.
- **Code Example**:
```markdown
# ADR-001: Use inversifyJS for DI
**Context**: Need DI for maintainability.
**Decision**: Use inversifyJS for TypeScript compatibility.
**Status**: Approved
**Consequences**: Faster service injection, learning curve.
```
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes ADRs được review bởi Tech Lead.
- Constraint: ADRs phải được cập nhật trước release.

**Dependencies/Risks**:
- Dependencies: Markdown.
- Risks: Missing ADRs → Mitigation: Enforce in CI/CD.

**Acceptance Criteria/Testable Items**:
- ADRs tuân theo template.
- Mỗi major decision có ADR.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 06B.7.4 README Templates

**References**: Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Mô tả chuẩn README cho microservices.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với hướng dẫn rõ ràng.

**Cách làm**: Cung cấp template README.

**Nội dung cần có**:
- **Mô tả**: README chứa: Overview, Setup, Run, Test, Dependencies.
- **Code Example**:
```markdown
# Campaign Management Service
## Overview
Manages campaigns and barcodes for PSP.
## Setup
1. `yarn install`
2. Configure `.env`
## Run
`yarn start`
## Test
`yarn test`
## Dependencies
- Node.js 18
- TypeScript 5
```
- **Dependencies**: NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes README lưu ở root mỗi microservice.
- Constraint: README phải <500 từ.

**Dependencies/Risks**:
- Dependencies: Markdown.
- Risks: Outdated README → Mitigation: CI/CD validation.

**Acceptance Criteria/Testable Items**:
- README tuân theo template.
- Hướng dẫn setup/test chạy đúng.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part07 - Database Design (Session 1)

## Structure of Part07 (Session 1)
```
Part07_Database_Design/
├── 07.1_Data_Model_Overview.md
├── 07.2_Entity_Relationship_Diagram.md
├── 07.3_Table_Schemas/
│   ├── 07.3.1_Campaign_Management_Service_Tables/
│   │   ├── 07.3.1.1_Brands_Table.md
│   │   ├── 07.3.1.2_Campaigns_Table.md
│   │   ├── 07.3.1.3_Barcode_Pools_Table.md
│   │   ├── 07.3.1.4_Barcodes_Table.md
│   │   └── 07.3.1.5_Ads_Formats_Table.md
│   ├── 07.3.2_Identity_Service_Tables/
│   │   ├── 07.3.2.1_Users_Table.md
│   │   ├── 07.3.2.2_User_Profiles_Table.md
│   │   ├── 07.3.2.3_User_Preferences_Table.md
│   │   ├── 07.3.2.4_Consent_History_Table.md
│   │   ├── 07.3.2.5_Sessions_Table.md
│   │   ├── 07.3.2.6_Roles_Table.md
│   │   └── 07.3.2.7_User_Roles_Table.md
```

---

## 07.1 Data Model Overview

**References**: Part04_Functional_Requirements (FR-001, FR-002, FR-003, FR-004, FR-006), Part05_Non_Functional_Requirements (NFR-001, NFR-002, NFR-003, NFR-005), Part06B (Interface Definitions)

**Mục đích**: Cung cấp cái nhìn tổng quan về data model cho PSP.

**Ý nghĩa**: Đảm bảo NFR-005 (Maintainability) và NFR-002 (Scalability) với thiết kế database tối ưu.

**Cách làm**: Mô tả các entities chính, relationships, và database choices (PostgreSQL cho Campaign Management và Identity Services, MongoDB cho Analytics và Intelligence).

**Nội dung cần có**:
- **Mô tả**: Data model bao gồm:
  - **Entities**: Brands, Campaigns, Barcode Pools, Barcodes, Ads Formats (Campaign Management Service); Users, User Profiles, User Preferences, Consent History, Sessions, Roles, User Roles (Identity Service).
  - **Database Choices**: PostgreSQL cho dữ liệu có cấu trúc (Campaign Management, Identity); MongoDB cho dữ liệu phi cấu trúc (Analytics, Intelligence); Redis cho caching (sessions, JWT tokens).
  - **Relationships**: 1:N (Brands-Campaigns, Campaigns-Barcode Pools, Barcode Pools-Barcodes); N:N (Users-Roles via User Roles).
  - **Normalization**: 3NF cho PostgreSQL để đảm bảo consistency và giảm redundancy.
- **Dependencies**: FR-001 (Campaign CRUD), FR-002 (Barcode Management), FR-003 (User Authentication), FR-004 (User Management), FR-006 (Ads Format Management), NFR-001, NFR-002, NFR-003, NFR-005.

**Assumptions/Constraints**:
- Assumes PostgreSQL 15 cho Campaign Management và Identity Services.
- Constraint: Queries phải hoàn tất trong <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: PostgreSQL, MongoDB, Redis.
- Risks: Data inconsistency → Mitigation: ACID transactions, constraints.

**Acceptance Criteria/Testable Items**:
- Data model hỗ trợ đầy đủ FR-001, FR-002, FR-003, FR-004, FR-006.
- Queries trả về trong <500ms.
- Unit tests đạt 80% coverage (NFR-005).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 07.2 Entity Relationship Diagram

**References**: Part04_Functional_Requirements, Part05_Non_Functional_Requirements (NFR-002, NFR-005), 07.1 (Data Model Overview)

**Mục đích**: Cung cấp ERD cho Campaign Management và Identity Services.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với visualization của relationships.

**Cách làm**: Sử dụng Mermaid để vẽ ERD cho các tables trong PostgreSQL.

**Nội dung cần có**:
- **Mô tả**: ERD mô tả entities và relationships giữa Brands, Campaigns, Barcode Pools, Barcodes, Ads Formats, Users, User Profiles, User Preferences, Consent History, Sessions, Roles, và User Roles.
- **Diagram**:
  ```mermaid
  erDiagram
      Brands ||--o{ Campaigns : owns
      Campaigns ||--o{ Barcode_Pools : contains
      Barcode_Pools ||--o{ Barcodes : manages
      Campaigns ||--o{ Ads_Formats : has
      Users ||--o{ User_Profiles : has
      Users ||--o{ User_Preferences : has
      Users ||--o{ Consent_History : tracks
      Users ||--o{ Sessions : has
      Users }o--o{ Roles : assigned
      Users ||--o{ User_Roles : maps
      Roles ||--o{ User_Roles : maps

      Brands {
          uuid brand_id PK
          string name
          string description
          timestamp created_at
          timestamp updated_at
      }
      Campaigns {
          uuid campaign_id PK
          uuid brand_id FK
          string name
          date start_date
          date end_date
          timestamp created_at
          timestamp updated_at
      }
      Barcode_Pools {
          uuid pool_id PK
          uuid campaign_id FK
          string pool_name
          integer total_barcodes
          timestamp created_at
          timestamp updated_at
      }
      Barcodes {
          uuid barcode_id PK
          uuid pool_id FK
          string code
          string format
          boolean is_redeemed
          timestamp created_at
          timestamp updated_at
      }
      Ads_Formats {
          uuid ads_format_id PK
          uuid campaign_id FK
          string format_type
          string content
          JSONB qr_zone
          INTEGER qr_size
          string utm_tag
          timestamp created_at
          timestamp updated_at
      }
      Users {
          uuid user_id PK
          string email
          string password_hash
          timestamp created_at
          timestamp updated_at
      }
      User_Profiles {
          uuid profile_id PK
          uuid user_id FK
          string full_name
          string phone
          timestamp created_at
          timestamp updated_at
      }
      User_Preferences {
          uuid preference_id PK
          uuid user_id FK
          string preference_key
          string preference_value
          timestamp created_at
          timestamp updated_at
      }
      Consent_History {
          uuid consent_id PK
          uuid user_id FK
          string consent_type
          boolean is_granted
          timestamp granted_at
          timestamp revoked_at
      }
      Sessions {
          uuid session_id PK
          uuid user_id FK
          string token
          timestamp expires_at
          timestamp created_at
      }
      Roles {
          uuid role_id PK
          string role_name
          string description
          timestamp created_at
          timestamp updated_at
      }
      User_Roles {
          uuid user_id FK
          uuid role_id FK
          timestamp assigned_at
      }
  ```
- **Dependencies**: NFR-002 (Scalability), NFR-005 (Maintainability), 07.1 (Data Model Overview).

**Assumptions/Constraints**:
- Assumes 1:N và N:N relationships như mô tả.
- Constraint: ERD phải phản ánh đúng schemas trong 07.3.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Complex relationships → Mitigation: Proper indexing.

**Acceptance Criteria/Testable Items**:
- ERD phản ánh đúng relationships.
- Tất cả entities có PK và FK đúng.
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 07.3 Table Schemas

### 07.3.1 Campaign Management Service Tables

#### 07.3.1.1 Brands Table

**References**: Part04_Functional_Requirements (FR-001), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về các brands tham gia PSP.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với schema rõ ràng.

**Cách làm**: Định nghĩa SQL schema cho Brands table trong PostgreSQL.

**Nội dung cần có**:
- **Mô tả**: Lưu brand details (name, description) cho Campaign Management Service.
- **Schema**:
```sql
CREATE TABLE Brands (
    brand_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_brand_name UNIQUE (name)
);
CREATE INDEX idx_brands_name ON Brands(name);
```
- **Dependencies**: FR-001 (Campaign CRUD), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes `name` là unique để tránh trùng brand.
- Constraint: `name` <100 ký tự.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Duplicate brands → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng brand data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.1.2 Campaigns Table

**References**: Part04_Functional_Requirements (FR-001), Part05_Non_Functional_Requirements (NFR-001, NFR-005)

**Mục đích**: Lưu thông tin về các chiến dịch quảng cáo.

**Ý nghĩa**: Hỗ trợ FR-001 (Campaign CRUD) và NFR-001 (Performance).

**Cách làm**: Định nghĩa SQL schema cho Campaigns table.

**Nội dung cần có**:
- **Mô tả**: Lưu campaign details (name, dates) liên kết với Brands.
- **Schema**:
```sql
CREATE TABLE Campaigns (
    campaign_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL REFERENCES Brands(brand_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_campaign_name_per_brand UNIQUE (brand_id, name),
    CONSTRAINT check_dates CHECK (end_date IS NULL OR end_date >= start_date)
);
CREATE INDEX idx_campaigns_brand_id ON Campaigns(brand_id);
CREATE INDEX idx_campaigns_dates ON Campaigns(start_date, end_date);
```
- **Dependencies**: FR-001 (Campaign CRUD), NFR-001, NFR-005.

**Assumptions/Constraints**:
- Assumes `end_date` có thể null nếu campaign ongoing.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Brands table, PostgreSQL.
- Risks: Invalid dates → Mitigation: Check constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng campaign data.
- Indexes hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.1.3 Barcode Pools Table

**References**: Part04_Functional_Requirements (FR-002), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về barcode pools cho mỗi campaign.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với quản lý barcode pools.

**Cách làm**: Định nghĩa SQL schema cho Barcode Pools table.

**Nội dung cần có**:
- **Mô tả**: Lưu barcode pool details (name, total barcodes) liên kết với Campaigns.
- **Schema**:
```sql
CREATE TABLE Barcode_Pools (
    pool_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES Campaigns(campaign_id) ON DELETE CASCADE,
    pool_name VARCHAR(100) NOT NULL,
    total_barcodes INTEGER NOT NULL CHECK (total_barcodes >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_pool_name_per_campaign UNIQUE (campaign_id, pool_name)
);
CREATE INDEX idx_barcode_pools_campaign_id ON Barcode_Pools(campaign_id);
```
- **Dependencies**: FR-002 (Barcode Management), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes `total_barcodes` không âm.
- Constraint: Pool name unique trong campaign.

**Dependencies/Risks**:
- Dependencies: Campaigns table, PostgreSQL.
- Risks: Pool size errors → Mitigation: Check constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng barcode pool data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.1.4 Barcodes Table

**References**: Part04_Functional_Requirements (FR-002, FR-007), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Lưu thông tin về từng barcode.

**Ý nghĩa**: Hỗ trợ FR-002 (Barcode Management), FR-007 (Barcode Redemption), và NFR-001 (Performance).

**Cách làm**: Định nghĩa SQL schema cho Barcodes table.

**Nội dung cần có**:
- **Mô tả**: Lưu barcode details (code, format, redemption status) liên kết với Barcode Pools.
- **Schema**:
```sql
CREATE TABLE Barcodes (
    barcode_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pool_id UUID NOT NULL REFERENCES Barcode_Pools(pool_id) ON DELETE CASCADE,
    code VARCHAR(50) NOT NULL,
    format VARCHAR(20) NOT NULL CHECK (format IN ('QR', 'Code128', 'DataMatrix')),
    is_redeemed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_barcode_code UNIQUE (code)
);
CREATE INDEX idx_barcodes_pool_id ON Barcodes(pool_id);
CREATE INDEX idx_barcodes_code ON Barcodes(code);
```
- **Dependencies**: FR-002, FR-007, NFR-001.

**Assumptions/Constraints**:
- Assumes `format` giới hạn ở QR, Code128, DataMatrix.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Barcode Pools table, PostgreSQL.
- Risks: Barcode collision → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng barcode data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.1.5 Ads Formats Table

**References**: Part04_Functional_Requirements (FR-006), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về ads formats cho campaigns.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với quản lý ads formats.

**Cách làm**: Định nghĩa SQL schema cho Ads Formats table.

**Nội dung cần có**:
- **Mô tả**: Lưu ads format details (type, content) liên kết với Campaigns.
- **Schema**:
```sql
CREATE TABLE Ads_Formats (
    ads_format_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES Campaigns(campaign_id) ON DELETE CASCADE,
    format_type VARCHAR(20) NOT NULL CHECK (format_type IN ('Banner', 'Video', 'QR')),
    content TEXT NOT NULL,
    qr_zone JSONB,
    qr_size INTEGER,
    utm_tag STRING,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_ads_formats_campaign_id ON Ads_Formats(campaign_id);
```
- **Dependencies**: FR-006 (Ads Format Management), NFR-005.

**Assumptions/Constraints**:
- Assumes `format_type` giới hạn ở Banner, Video, QR.
- Constraint: Content phải <10MB.

**Dependencies/Risks**:
- Dependencies: Campaigns table, PostgreSQL.
- Risks: Large content → Mitigation: Content size limit.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng ads format data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 07.3.2 Identity Service Tables

#### 07.3.2.1 Users Table

**References**: Part04_Functional_Requirements (FR-003, FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu thông tin về users trong PSP.

**Ý nghĩa**: Tăng NFR-003 (Security) với quản lý user credentials.

**Cách làm**: Định nghĩa SQL schema cho Users table.

**Nội dung cần có**:
- **Mô tả**: Lưu user credentials (email, password hash) cho Identity Service.
- **Schema**:
```sql
CREATE TABLE Users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_email UNIQUE (email)
);
CREATE INDEX idx_users_email ON Users(email);
```
- **Dependencies**: FR-003 (User Authentication), FR-004 (User Management), NFR-003.

**Assumptions/Constraints**:
- Assumes password_hash sử dụng bcrypt.
- Constraint: Email phải unique, PII mã hóa (NFR-003).

**Dependencies/Risks**:
- Dependencies: PostgreSQL, AWS KMS.
- Risks: PII leakage → Mitigation: AES-256 encryption.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng user data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.2 User Profiles Table

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu thông tin profile của users.

**Ý nghĩa**: Tăng NFR-003 (Security) và NFR-005 (Maintainability).

**Cách làm**: Định nghĩa SQL schema cho User Profiles table.

**Nội dung cần có**:
- **Mô tả**: Lưu user profile details (full name, phone) liên kết với Users.
- **Schema**:
```sql
CREATE TABLE User_Profiles (
    profile_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_user_profiles_user_id ON User_Profiles(user_id);
```
- **Dependencies**: FR-004 (User Management), NFR-003, NFR-005.

**Assumptions/Constraints**:
- Assumes `phone` có thể null.
- Constraint: PII phải mã hóa (NFR-003).

**Dependencies/Risks**:
- Dependencies: Users table, PostgreSQL.
- Risks: PII leakage → Mitigation: Encryption.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng profile data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.3 User Preferences Table

**References**: Part04_Functional_Requirements (FR-013), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu user preferences cho recommendation engine.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho Intelligence Service.

**Cách làm**: Định nghĩa SQL schema cho User Preferences table.

**Nội dung cần có**:
- **Mô tả**: Lưu key-value preferences của users liên kết với Users.
- **Schema**:
```sql
CREATE TABLE User_Preferences (
    preference_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    preference_key VARCHAR(50) NOT NULL,
    preference_value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_user_preferences_user_id ON User_Preferences(user_id);
```
- **Dependencies**: FR-013 (Recommendation Engine), NFR-005.

**Assumptions/Constraints**:
- Assumes key-value pairs cho preferences.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Users table, PostgreSQL.
- Risks: Large preference data → Mitigation: Data size limits.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng preference data.
- Index hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.4 Consent History Table

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu lịch sử consent của users.

**Ý nghĩa**: Tăng NFR-003 (Security) với audit trail cho consent.

**Cách làm**: Định nghĩa SQL schema cho Consent History table.

**Nội dung cần có**:
- **Mô tả**: Lưu consent details (type, granted/revoked) liên kết với Users.
- **Schema**:
```sql
CREATE TABLE Consent_History (
    consent_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    consent_type VARCHAR(50) NOT NULL CHECK (consent_type IN ('marketing', 'data_sharing')),
    is_granted BOOLEAN NOT NULL,
    granted_at TIMESTAMP WITH TIME ZONE,
    revoked_at TIMESTAMP WITH TIME ZONE,
    CONSTRAINT check_consent_dates CHECK (revoked_at IS NULL OR revoked_at >= granted_at)
);
CREATE INDEX idx_consent_history_user_id ON Consent_History(user_id);
```
- **Dependencies**: FR-004 (User Management), NFR-003.

**Assumptions/Constraints**:
- Assumes `consent_type` giới hạn ở marketing, data_sharing.
- Constraint: Consent history immutable.

**Dependencies/Risks**:
- Dependencies: Users table, PostgreSQL.
- Risks: Data volume → Mitigation: Archiving.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng consent data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.5 Sessions Table

**References**: Part04_Functional_Requirements (FR-003), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu thông tin sessions cho user authentication.

**Ý nghĩa**: Tăng NFR-003 (Security) với quản lý sessions.

**Cách làm**: Định nghĩa SQL schema cho Sessions table.

**Nội dung cần có**:
- **Mô tả**: Lưu session details (token, expiry) liên kết với Users.
- **Schema**:
```sql
CREATE TABLE Sessions (
    session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_session_token UNIQUE (token)
);
CREATE INDEX idx_sessions_user_id ON Sessions(user_id);
CREATE INDEX idx_sessions_token ON Sessions(token);
```
- **Dependencies**: FR-003 (User Authentication), NFR-003.

**Assumptions/Constraints**:
- Assumes `token` là JWT với TTL 24h.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Users table, PostgreSQL, Redis (caching).
- Risks: Token leakage → Mitigation: mTLS, KMS.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng session data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.6 Roles Table

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu thông tin về roles trong PSP.

**Ý nghĩa**: Tăng NFR-003 (Security) với RBAC.

**Cách làm**: Định nghĩa SQL schema cho Roles table.

**Nội dung cần có**:
- **Mô tả**: Lưu role details (name, description) cho Identity Service.
- **Schema**:
```sql
CREATE TABLE Roles (
    role_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_name VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_role_name UNIQUE (role_name)
);
CREATE INDEX idx_roles_role_name ON Roles(role_name);
```
- **Dependencies**: FR-004 (User Management), NFR-003.

**Assumptions/Constraints**:
- Assumes `role_name` là unique.
- Constraint: Role names <50 ký tự.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Role conflicts → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng role data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.2.7 User Roles Table

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu mapping giữa users và roles (N:N).

**Ý nghĩa**: Tăng NFR-003 (Security) với RBAC implementation.

**Cách làm**: Định nghĩa SQL schema cho User Roles table.

**Nội dung cần có**:
- **Mô tả**: Lưu mapping giữa Users và Roles để hỗ trợ RBAC.
- **Schema**:
```sql
CREATE TABLE User_Roles (
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES Roles(role_id) ON DELETE CASCADE,
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id)
);
CREATE INDEX idx_user_roles_user_id ON User_Roles(user_id);
CREATE INDEX idx_user_roles_role_id ON User_Roles(role_id);
```
- **Dependencies**: FR-004 (User Management), NFR-003.

**Assumptions/Constraints**:
- Assumes composite PK (user_id, role_id).
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Users table, Roles table, PostgreSQL.
- Risks: Duplicate mappings → Mitigation: Composite PK.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng user-role mappings.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part07 - Database Design (Session 2)

## Structure of Part07 (Session 2)
```
Part07_Database_Design/
├── 07.3_Table_Schemas/
│   ├── 07.3.3_Redemption_Service_Tables/
│   │   ├── 07.3.3.1_Redemptions_Table.md
│   │   └── 07.3.3.2_Locations_Table.md
│   ├── 07.3.4_Fraud_Service_Tables/
│   │   ├── 07.3.4.1_Fraud_Scores_Table.md
│   │   ├── 07.3.4.2_Device_Fingerprints_Table.md
│   │   └── 07.3.4.3_Fraud_Rules_Table.md
│   ├── 07.3.5_Intelligence_Service_Tables/
│   │   ├── 07.3.5.1_Experiments_Table.md
│   │   ├── 07.3.5.2_Experiment_Variants_Table.md
│   │   └── 07.3.5.3_Experiment_Assignments_Table.md
│   ├── 07.3.6_Analytics_Service_Collections/
│   │   ├── 07.3.6.1_Events_Collection.md
│   │   ├── 07.3.6.2_User_Journey_Collection.md
│   │   ├── 07.3.6.3_Cohorts_Collection.md
│   │   ├── 07.3.6.4_Aggregations_Collection.md
│   │   └── 07.3.6.5_Recommendations_Collection.md
│   ├── 07.3.7_Shared_Tables/
│   │   └── 07.3.7.1_Audit_Logs_Table.md
```

---

## 07.3 Table Schemas (Continued)

### 07.3.3 Redemption Service Tables

#### 07.3.3.1 Redemptions Table

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-001, NFR-003)

**Mục đích**: Lưu thông tin về redemption transactions.

**Ý nghĩa**: Hỗ trợ FR-007 (Barcode Redemption) và NFR-001 (Performance).

**Cách làm**: Định nghĩa SQL schema cho Redemptions table trong PostgreSQL.

**Nội dung cần có**:
- **Mô tả**: Lưu redemption details (barcode, user, location, timestamp) liên kết với Barcodes và Users.
- **Schema**:
```sql
CREATE TABLE Redemptions (
    redemption_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barcode_id UUID NOT NULL REFERENCES Barcodes(barcode_id) ON DELETE RESTRICT,
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE RESTRICT,
    location_id UUID REFERENCES Locations(location_id),
    redemption_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_online BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_redemptions_barcode_id ON Redemptions(barcode_id);
CREATE INDEX idx_redemptions_user_id ON Redemptions(user_id);
CREATE INDEX idx_redemptions_redemption_time ON Redemptions(redemption_time);
```
- **Dependencies**: FR-007 (Barcode Redemption), NFR-001 (Performance), NFR-003 (Security), 07.3.1.4 (Barcodes Table), 07.3.2.1 (Users Table).

**Assumptions/Constraints**:
- Assumes `location_id` có thể null cho online redemptions.
- Constraint: Queries phải <100ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: Barcodes table, Users table, Locations table, PostgreSQL.
- Risks: Duplicate redemptions → Mitigation: Unique barcode_id per redemption.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng redemption data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage (NFR-005).

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.3.2 Locations Table

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về redemption locations.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với quản lý location data.

**Cách làm**: Định nghĩa SQL schema cho Locations table.

**Nội dung cần có**:
- **Mô tả**: Lưu location details (name, coordinates) cho offline redemptions.
- **Schema**:
```sql
CREATE TABLE Locations (
    location_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_locations_coordinates ON Locations(latitude, longitude);
```
- **Dependencies**: FR-007 (Barcode Redemption), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes `latitude` và `longitude` có thể null nếu không có tọa độ.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Inaccurate coordinates → Mitigation: Validation rules.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng location data.
- Index hỗ trợ geospatial queries (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 07.3.4 Fraud Service Tables

#### 07.3.4.1 Fraud Scores Table

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu fraud scores cho redemption attempts.

**Ý nghĩa**: Tăng NFR-003 (Security) với fraud detection data.

**Cách làm**: Định nghĩa SQL schema cho Fraud Scores table.

**Nội dung cần có**:
- **Mô tả**: Lưu fraud scores (score, device fingerprint) liên kết với Users và Device Fingerprints.
- **Schema**:
```sql
CREATE TABLE Fraud_Scores (
    score_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE RESTRICT,
    device_fingerprint_id UUID REFERENCES Device_Fingerprints(fingerprint_id),
    score DECIMAL(3,2) NOT NULL CHECK (score BETWEEN 0 AND 1),
    calculated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_fraud_scores_user_id ON Fraud_Scores(user_id);
CREATE INDEX idx_fraud_scores_calculated_at ON Fraud_Scores(calculated_at);
```
- **Dependencies**: FR-011 (Fraud Detection), NFR-003 (Security), 07.3.2.1 (Users Table), 07.3.4.2 (Device Fingerprints Table).

**Assumptions/Constraints**:
- Assumes `score` từ 0.00 đến 1.00.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Users table, Device Fingerprints table, PostgreSQL.
- Risks: False positives → Mitigation: Score calibration.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng fraud score data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.4.2 Device Fingerprints Table

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu device fingerprints cho fraud detection.

**Ý nghĩa**: Tăng NFR-003 (Security) với device tracking.

**Cách làm**: Định nghĩa SQL schema cho Device Fingerprints table.

**Nội dung cần có**:
- **Mô tả**: Lưu device fingerprint details (hash, metadata).
- **Schema**:
```sql
CREATE TABLE Device_Fingerprints (
    fingerprint_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fingerprint_hash VARCHAR(255) NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_fingerprint_hash UNIQUE (fingerprint_hash)
);
CREATE INDEX idx_device_fingerprints_hash ON Device_Fingerprints(fingerprint_hash);
```
- **Dependencies**: FR-011 (Fraud Detection), NFR-003 (Security).

**Assumptions/Constraints**:
- Assumes `fingerprint_hash` là unique.
- Constraint: JSONB metadata <1MB.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Fingerprint collisions → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng fingerprint data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.4.3 Fraud Rules Table

**References**: Part04_Functional_Requirements (FR-011), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu fraud detection rules.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) với rule management.

**Cách làm**: Định nghĩa SQL schema cho Fraud Rules table.

**Nội dung cần có**:
- **Mô tả**: Lưu rule details (name, logic) cho Fraud Detection Service.
- **Schema**:
```sql
CREATE TABLE Fraud_Rules (
    rule_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rule_name VARCHAR(100) NOT NULL,
    rule_logic JSONB NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_rule_name UNIQUE (rule_name)
);
CREATE INDEX idx_fraud_rules_is_active ON Fraud_Rules(is_active);
```
- **Dependencies**: FR-011 (Fraud Detection), NFR-005 (Maintainability).

**Assumptions/Constraints**:
- Assumes `rule_logic` lưu trong JSONB (e.g., { "max_attempts": 3 }).
- Constraint: JSONB <1MB.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Invalid rule logic → Mitigation: Validation before save.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng rule data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 07.3.5 Intelligence Service Tables

#### 07.3.5.1 Experiments Table

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về A/B testing experiments.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho Intelligence Service.

**Cách làm**: Định nghĩa SQL schema cho Experiments table.

**Nội dung cần có**:
- **Mô tả**: Lưu experiment details (name, campaign) liên kết với Campaigns.
- **Schema**:
```sql
CREATE TABLE Experiments (
    experiment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES Campaigns(campaign_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_experiment_name_per_campaign UNIQUE (campaign_id, name),
    CONSTRAINT check_experiment_dates CHECK (end_date IS NULL OR end_date >= start_date)
);
CREATE INDEX idx_experiments_campaign_id ON Experiments(campaign_id);
```
- **Dependencies**: FR-012 (A/B Testing), NFR-005 (Maintainability), 07.3.1.2 (Campaigns Table).

**Assumptions/Constraints**:
- Assumes `end_date` có thể null nếu experiment ongoing.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: Campaigns table, PostgreSQL.
- Risks: Invalid dates → Mitigation: Check constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng experiment data.
- Index hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.5.2 Experiment Variants Table

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu thông tin về experiment variants.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho A/B testing.

**Cách làm**: Định nghĩa SQL schema cho Experiment Variants table.

**Nội dung cần có**:
- **Mô tả**: Lưu variant details (name, configuration) liên kết với Experiments.
- **Schema**:
```sql
CREATE TABLE Experiment_Variants (
    variant_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    experiment_id UUID NOT NULL REFERENCES Experiments(experiment_id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    configuration JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_variant_name_per_experiment UNIQUE (experiment_id, name)
);
CREATE INDEX idx_experiment_variants_experiment_id ON Experiment_Variants(experiment_id);
```
- **Dependencies**: FR-012 (A/B Testing), NFR-005 (Maintainability), 07.3.5.1 (Experiments Table).

**Assumptions/Constraints**:
- Assumes `configuration` lưu trong JSONB (e.g., { "button_color": "blue" }).
- Constraint: JSONB <1MB.

**Dependencies/Risks**:
- Dependencies: Experiments table, PostgreSQL.
- Risks: Invalid configuration → Mitigation: Validation before save.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng variant data.
- Index hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.5.3 Experiment Assignments Table

**References**: Part04_Functional_Requirements (FR-012), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu mapping giữa users và experiment variants.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho A/B testing assignments.

**Cách làm**: Định nghĩa SQL schema cho Experiment Assignments table.

**Nội dung cần có**:
- **Mô tả**: Lưu assignment details (user, variant) liên kết với Users và Experiment Variants.
- **Schema**:
```sql
CREATE TABLE Experiment_Assignments (
    assignment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    variant_id UUID NOT NULL REFERENCES Experiment_Variants(variant_id) ON DELETE CASCADE,
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_experiment_assignments_user_id ON Experiment_Assignments(user_id);
CREATE INDEX idx_experiment_assignments_variant_id ON Experiment_Assignments(variant_id);
```
- **Dependencies**: FR-012 (A/B Testing), NFR-005 (Maintainability), 07.3.2.1 (Users Table), 07.3.5.2 (Experiment Variants Table).

**Assumptions/Constraints**:
- Assumes 1 user chỉ được assign 1 variant per experiment.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: Users table, Experiment Variants table, PostgreSQL.
- Risks: Duplicate assignments → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng assignment data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 07.3.6 Analytics Service Collections (MongoDB)

#### 07.3.6.1 Events Collection

**References**: Part04_Functional_Requirements (FR-008), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Lưu analytics events cho user interactions.

**Ý nghĩa**: Hỗ trợ FR-008 (Real-Time Analytics) và NFR-001 (Performance).

**Cách làm**: Định nghĩa MongoDB schema cho Events collection.

**Nội dung cần có**:
- **Mô tả**: Lưu event details (type, user, timestamp) cho Analytics Service.
- **Schema**:
```json
{
  "_id": "ObjectId",
  "event_type": "string", // e.g., "page_view", "redemption"
  "user_id": "UUID",
  "campaign_id": "UUID",
  "timestamp": "ISODate",
  "metadata": {
    "page": "string",
    "action": "string"
  },
  "created_at": "ISODate"
}
```
- **Indexes**:
```javascript
db.events.createIndex({ user_id: 1, timestamp: -1 });
db.events.createIndex({ campaign_id: 1 });
```
- **Dependencies**: FR-008 (Real-Time Analytics), NFR-001 (Performance), 07.3.2.1 (Users Table), 07.3.1.2 (Campaigns Table).

**Assumptions/Constraints**:
- Assumes `event_type` được định nghĩa trước.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: MongoDB.
- Risks: High data volume → Mitigation: TTL indexes, sharding.

**Acceptance Criteria/Testable Items**:
- Collection lưu trữ đúng event data.
- Indexes hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.6.2 User Journey Collection

**References**: Part04_Functional_Requirements (FR-008), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Lưu user journey data cho funnel analytics.

**Ý nghĩa**: Hỗ trợ FR-008 (Real-Time Analytics) và NFR-001 (Performance).

**Cách làm**: Định nghĩa MongoDB schema cho User Journey collection.

**Nội dung cần có**:
- **Mô tả**: Lưu user journey steps (user, funnel stage, timestamp).
- **Schema**:
```json
{
  "_id": "ObjectId",
  "user_id": "UUID",
  "funnel_id": "string",
  "stage": "string", // e.g., "view", "register", "redeem"
  "timestamp": "ISODate",
  "metadata": {
    "campaign_id": "UUID",
    "source": "string"
  },
  "created_at": "ISODate"
}
```
- **Indexes**:
```javascript
db.user_journey.createIndex({ user_id: 1, timestamp: -1 });
db.user_journey.createIndex({ funnel_id: 1, stage: 1 });
```
- **Dependencies**: FR-008 (Real-Time Analytics), NFR-001 (Performance), 07.3.2.1 (Users Table).

**Assumptions/Constraints**:
- Assumes `funnel_id` định danh unique funnel.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: MongoDB.
- Risks: Data volume → Mitigation: Sharding, aggregation pipelines.

**Acceptance Criteria/Testable Items**:
- Collection lưu trữ đúng journey data.
- Indexes hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.6.3 Cohorts Collection

**References**: Part04_Functional_Requirements (FR-008), Part05_Non_Functional_Requirements (NFR-005)

**Mục đích**: Lưu cohort data cho analytics segmentation.

**Ý nghĩa**: Tăng NFR-005 (Maintainability) cho cohort analysis.

**Cách làm**: Định nghĩa MongoDB schema cho Cohorts collection.

**Nội dung cần có**:
- **Mô tả**: Lưu cohort details (name, criteria, users).
- **Schema**:
```json
{
  "_id": "ObjectId",
  "cohort_name": "string",
  "criteria": {
    "start_date": "ISODate",
    "end_date": "ISODate",
    "attributes": {}
  },
  "user_ids": ["UUID"],
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```
- **Indexes**:
```javascript
db.cohorts.createIndex({ cohort_name: 1 });
db.cohorts.createIndex({ "criteria.start_date": 1, "criteria.end_date": 1 });
```
- **Dependencies**: FR-008 (Real-Time Analytics), NFR-005 (Maintainability), 07.3.2.1 (Users Table).

**Assumptions/Constraints**:
- Assumes `criteria` linh hoạt với JSONB-like structure.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: MongoDB.
- Risks: Large user_ids array → Mitigation: Pagination.

**Acceptance Criteria/Testable Items**:
- Collection lưu trữ đúng cohort data.
- Indexes hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.6.4 Aggregations Collection

**References**: Part04_Functional_Requirements (FR-008), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Lưu pre-computed analytics aggregations.

**Ý nghĩa**: Hỗ trợ FR-008 (Real-Time Analytics) và NFR-001 (Performance).

**Cách làm**: Định nghĩa MongoDB schema cho Aggregations collection.

**Nội dung cần có**:
- **Mô tả**: Lưu aggregated metrics (e.g., redemption count, campaign performance).
- **Schema**:
```json
{
  "_id": "ObjectId",
  "aggregation_type": "string", // e.g., "daily_redemptions"
  "campaign_id": "UUID",
  "metrics": {
    "count": "number",
    "average": "number"
  },
  "period_start": "ISODate",
  "period_end": "ISODate",
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```
- **Indexes**:
```javascript
db.aggregations.createIndex({ campaign_id: 1, period_start: -1 });
db.aggregations.createIndex({ aggregation_type: 1 });
```
- **Dependencies**: FR-008 (Real-Time Analytics), NFR-001 (Performance), 07.3.1.2 (Campaigns Table).

**Assumptions/Constraints**:
- Assumes aggregations được cập nhật hàng ngày.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: MongoDB.
- Risks: Stale aggregations → Mitigation: Scheduled jobs.

**Acceptance Criteria/Testable Items**:
- Collection lưu trữ đúng aggregation data.
- Indexes hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 07.3.6.5 Recommendations Collection

**References**: Part04_Functional_Requirements (FR-013), Part05_Non_Functional_Requirements (NFR-001)

**Mục đích**: Lưu recommendations cho Intelligence Service.

**Ý nghĩa**: Hỗ trợ FR-013 (Recommendation Engine) và NFR-001 (Performance).

**Cách làm**: Định nghĩa MongoDB schema cho Recommendations collection.

**Nội dung cần có**:
- **Mô tả**: Lưu recommendation details (user, items) cho Intelligence Service, shared với Analytics.
- **Schema**:
```json
{
  "_id": "ObjectId",
  "user_id": "UUID",
  "recommendations": [
    {
      "item_id": "UUID", // e.g., campaign_id
      "score": "number",
      "reason": "string"
    }
  ],
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```
- **Indexes**:
```javascript
db.recommendations.createIndex({ user_id: 1, created_at: -1 });
```
- **Dependencies**: FR-013 (Recommendation Engine), NFR-001 (Performance), 07.3.2.1 (Users Table).

**Assumptions/Constraints**:
- Assumes `recommendations` array <100 items.
- Constraint: Queries phải <500ms.

**Dependencies/Risks**:
- Dependencies: MongoDB.
- Risks: Low-quality recommendations → Mitigation: Model validation.

**Acceptance Criteria/Testable Items**:
- Collection lưu trữ đúng recommendation data.
- Index hỗ trợ query nhanh (<500ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 07.3.7 Shared Tables

#### 07.3.7.1 Audit Logs Table

**References**: Part04_Functional_Requirements (FR-004, FR-011), Part05_Non_Functional_Requirements (NFR-003)

**Mục đích**: Lưu audit logs cho tất cả microservices.

**Ý nghĩa**: Tăng NFR-003 (Security) với audit trail.

**Cách làm**: Định nghĩa SQL schema cho Audit Logs table.

**Nội dung cần có**:
- **Mô tả**: Lưu audit log details (user, action, timestamp) cho tất cả services.
- **Schema**:
```sql
CREATE TABLE Audit_Logs (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES Users(user_id),
    service_name VARCHAR(50) NOT NULL,
    action VARCHAR(100) NOT NULL,
    details JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_audit_logs_user_id ON Audit_Logs(user_id);
CREATE INDEX idx_audit_logs_timestamp ON Audit_Logs(timestamp);
```
- **Dependencies**: FR-004 (User Management), FR-011 (Fraud Detection), NFR-003 (Security), 07.3.2.1 (Users Table).

**Assumptions/Constraints**:
- Assumes `user_id` có thể null nếu action không liên quan user.
- Constraint: Queries phải <100ms.

**Dependencies/Risks**:
- Dependencies: PostgreSQL.
- Risks: Large log volume → Mitigation: Archiving, partitioning.

**Acceptance Criteria/Testable Items**:
- Table lưu trữ đúng audit log data.
- Indexes hỗ trợ query nhanh (<100ms).
- Unit tests đạt 80% coverage.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

# Part08 - API Design (Session 1)

## Structure of Part08 (Session 1)
```
Part08_API_Design/
├── 08.1_API_Overview.md
├── 08.2_REST_API_Endpoints/
│   ├── 08.2.1_Campaign_Management_Service_APIs/
│   │   ├── 08.2.1.1_Campaign_APIs.md
│   │   ├── 08.2.1.2_Barcode_APIs.md
│   │   └── 08.2.1.3_Ads_Format_APIs.md
│   ├── 08.2.2_Identity_Service_APIs/
│   │   ├── 08.2.2.1_Authentication_APIs.md
│   │   ├── 08.2.2.2_User_APIs.md
│   │   ├── 08.2.2.3_Consent_APIs.md
│   │   └── 08.2.2.4_Portal_APIs.md
│   ├── 08.2.3_Redemption_Service_APIs/
│   │   ├── 08.2.3.1_Redemption_APIs.md
│   │   └── 08.2.3.2_Offline_Sync_APIs.md
```

---

## 08.1 API Overview

**References**: Part04_Functional_Requirements (all FRs), Part05_Non_Functional_Requirements (NFR-001, NFR-003, NFR-007), Part06_System_Architecture (06.5 Communication Patterns, 06.6 Scalability Patterns)

**Mục đích**: Cung cấp cái nhìn tổng quan về APIs của PSP, bao gồm REST endpoints cho 7 microservices.

**Ý nghĩa**: Đảm bảo APIs hỗ trợ FRs (e.g., FR-001 Campaign CRUD, FR-003 Authentication) và NFRs (e.g., <500ms response time, mTLS security).

**Cách làm**: Tổng hợp từ Part04 và Part06, mô tả kiến trúc API Gateway, versioning, và authentication.

**Nội dung cần có**:
- **Tổng quan**: PSP sử dụng REST APIs qua AWS API Gateway với mTLS (Istio), JWT authentication, và rate limiting. APIs được phân bổ theo 7 microservices, hỗ trợ quà mẫu giá thấp (~$1) với engagement cao (>90% form completion).
- **Kiến trúc**:
  - **Base URL**: `/api/v1/{service}`
  - **Authentication**: JWT (Bearer token) cho tất cả endpoints trừ public (e.g., OTP send).
  - **Versioning**: URI versioning (v1, v2).
  - **Error Format**: JSON `{error_code, message, details}`.
- **Diagram**:
  ```mermaid
  graph TD
      A[Client] -->|HTTPS, JWT| B[API Gateway]
      B --> C[Campaign Management]
      B --> D[Identity]
      B --> E[Redemption]
      B --> F[Analytics]
      B --> G[Notification]
      B --> H[Fraud Detection]
      B --> I[Intelligence]
      B --> J[Istio: mTLS, Rate Limiting]
      B --> K[CloudWatch: Monitoring]
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: Part04, Part05, Part06
- **Thể hiện yêu cầu**: All FRs, NFR-001, NFR-003
- **Kết nối với**: Part08.2_REST_API_Endpoints, Part07_Database_Design

**Mục đích của node này**: Tóm tắt kiến trúc API để định hướng triển khai.

**Assumptions/Constraints**:
- Assumes REST cho synchronous, SQS cho async.
- Constraint: APIs phải <500ms (NFR-001).

**Dependencies/Risks**:
- Dependencies: AWS API Gateway, Istio.
- Risks: Rate limiting sai → Mitigation: Test with 10K users.

**Acceptance Criteria/Testable Items**:
- APIs hỗ trợ tất cả FRs.
- JWT authentication áp dụng đúng.
- Response time <500ms trong test.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

## 08.2 REST API Endpoints

### 08.2.1 Campaign Management Service APIs

#### 08.2.1.1 Campaign APIs

**References**: Part04_Functional_Requirements (FR-001), Part05_Non_Functional_Requirements (NFR-001, NFR-003), Part07_Database_Design (07.3.1.2 Campaigns Table)

**Mục đích**: Định nghĩa APIs cho CRUD campaigns.

**Ý nghĩa**: Hỗ trợ Brand Admin, Customer Account quản lý chiến dịch.

**Cách làm**: Mô tả endpoints với request/response schemas, HTTP methods.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/campaigns`: Tạo campaign (Role: Brand Admin, Customer Account).
    - Request: JSON `{brand_id, name, start_date, end_date}`
    - Response: 201 JSON `{campaign_id}`
  - `GET /api/v1/campaigns/:id`: Lấy campaign (Role: Platform Admin, Brand Admin, Customer Account).
    - Response: 200 JSON `{id, brand_id, name, start_date, end_date}`
  - `PUT /api/v1/campaigns/:id`: Cập nhật campaign (Role: Brand Admin, Customer Account).
    - Request: JSON `{name, start_date, end_date}`
    - Response: 200 JSON `{updated_campaign}`
  - `DELETE /api/v1/campaigns/:id`: Xóa campaign (Role: Platform Admin, Brand Admin).
    - Response: 204 No Content
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor BrandAdmin
      participant API
      participant Service
      participant DB
      BrandAdmin->>API: POST /api/v1/campaigns
      API->>Service: Validate JWT
      Service->>DB: Insert campaign
      DB-->>Service: Success
      Service-->>API: Campaign ID
      API-->>BrandAdmin: 201 Created
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-001, NFR-001, 07.3.1.2
- **Thể hiện yêu cầu**: FR-001
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Campaign CRUD.

**Assumptions/Constraints**:
- Assumes JWT auth với RBAC.
- Constraint: Response time <500ms.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Unauthorized access → Mitigation: RBAC checks.

**Acceptance Criteria/Testable Items**:
- Endpoints CRUD campaign đúng.
- 200/201/204 status codes trả về đúng.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.1.2 Barcode APIs

**References**: Part04_Functional_Requirements (FR-002), Part05_Non_Functional_Requirements (NFR-001, NFR-003), Part07_Database_Design (07.3.1.4 Barcodes Table)

**Mục đích**: Định nghĩa APIs cho quản lý barcode.

**Ý nghĩa**: Hỗ trợ Brand Admin tạo và gán barcode cho campaigns.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/barcodes`: Tạo barcode batch (Role: Brand Admin).
    - Request: JSON `{campaign_id, format, count}`
    - Response: 201 JSON `{barcode_ids}`
  - `GET /api/v1/barcodes/:id`: Lấy barcode (Role: Platform Admin, Brand Admin).
    - Response: 200 JSON `{id, code, format, is_redeemed}`
  - `PUT /api/v1/barcodes/:id/assign`: Gán barcode (Role: Brand Admin).
    - Request: JSON `{campaign_id}`
    - Response: 200 JSON `{assigned_barcode}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor BrandAdmin
      participant API
      participant Service
      participant DB
      BrandAdmin->>API: POST /api/v1/barcodes
      API->>Service: Validate JWT
      Service->>DB: Insert barcodes
      DB-->>Service: Success
      Service-->>API: Barcode IDs
      API-->>BrandAdmin: 201 Created
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-002, NFR-001, 07.3.1.4
- **Thể hiện yêu cầu**: FR-002
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Barcode Management.

**Assumptions/Constraints**:
- Assumes barcode format: QR, Code128, DataMatrix.
- Constraint: Batch size <10K per request.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Duplicate codes → Mitigation: Unique constraints.

**Acceptance Criteria/Testable Items**:
- Endpoints tạo và gán barcode đúng.
- Response time <500ms.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.1.3 Ads Format APIs

**References**: Part04_Functional_Requirements (FR-006), Part05_Non_Functional_Requirements (NFR-007), Part07_Database_Design (07.3.1.5 Ads Formats Table)

**Mục đích**: Định nghĩa APIs cho quản lý ads formats.

**Ý nghĩa**: Hỗ trợ Brand Admin tạo landing pages, banners cho campaigns.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/ads-formats`: Tạo ads format (Role: Brand Admin).
    - Request: JSON `{campaign_id, type, content}`
    - Response: 201 JSON `{ads_format_id}`
  - `GET /api/v1/ads-formats/:id`: Lấy ads format (Role: Platform Admin, Brand Admin).
    - Response: 200 JSON `{id, type, content}`
  - `PUT /api/v1/ads-formats/:id`: Cập nhật ads format (Role: Brand Admin).
    - Request: JSON `{type, content}`
    - Response: 200 JSON `{updated_ads_format}`
  - `DELETE /api/v1/ads-formats/:id`: Xóa ads format (Role: Platform Admin).
    - Response: 204 No Content
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor BrandAdmin
      participant API
      participant Service
      participant DB
      BrandAdmin->>API: POST /api/v1/ads-formats
      API->>Service: Validate JWT
      Service->>DB: Insert ads format
      DB-->>Service: Success
      Service-->>API: Ads Format ID
      API-->>BrandAdmin: 201 Created
  ```

- **Endpoints** (thêm):
  - `POST /api/v1/ads-formats/qr-generate`: Tạo QR code for ads format.
    - Request: `{ads_format_id: UUID, utm_tag: string, qr_size: integer}`
    - Response: 201 `{qr_code_url: string}` 🆕
- **Flow** (thêm QR):
  ```mermaid
  sequenceDiagram
      actor Admin
      participant API
      participant Service
      participant DB
      Admin->>API: POST /api/v1/ads-formats/qr-generate
      API->>Service: Validate JWT
      Service->>DB: Update Ads_Formats with QR details
      DB-->>Service: Success
      Service-->>API: QR URL
      API-->>Admin: 201 Created
  ```

- **Assumptions/Constraints**: QR generation with UTM for tracking, size >=2cm 🆕

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-006, NFR-007, 07.3.1.5
- **Thể hiện yêu cầu**: FR-006
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Ads Format Management.

**Assumptions/Constraints**:
- Assumes content là JSON/HTML string.
- Constraint: File size <1MB.

**Dependencies/Risks**:
- Dependencies: Campaign Management Service.
- Risks: Invalid content → Mitigation: Validation.

**Acceptance Criteria/Testable Items**:
- Endpoints CRUD ads format đúng.
- Response time <500ms.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

---

### 08.2.2 Identity Service APIs

#### 08.2.2.1 Authentication APIs

**References**: Part04_Functional_Requirements (FR-003), Part05_Non_Functional_Requirements (NFR-003), Part07_Database_Design (07.3.2.1 Users Table, 07.3.2.5 Sessions Table)

**Mục đích**: Định nghĩa APIs cho user authentication.

**Ý nghĩa**: Hỗ trợ all personas đăng nhập an toàn.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/auth/login`: Đăng nhập email/password (Role: All).
    - Request: JSON `{email, password}`
    - Response: 200 JSON `{token, refresh_token}`
  - `POST /api/v1/auth/sso`: Đăng nhập SSO (Role: All).
    - Request: JSON `{provider, code}`
    - Response: 200 JSON `{token, refresh_token}`
  - `POST /api/v1/auth/logout`: Đăng xuất (Role: Authenticated).
    - Response: 204 No Content
  - `POST /api/v1/auth/refresh`: Refresh token (Role: Authenticated).
    - Request: JSON `{refresh_token}`
    - Response: 200 JSON `{new_token}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor User
      participant API
      participant Service
      participant DB
      User->>API: POST /api/v1/auth/login
      API->>Service: Validate credentials
      Service->>DB: Query Users
      DB-->>Service: Success
      Service-->>API: JWT Token
      API-->>User: 200 OK
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-003, NFR-003, 07.3.2.1, 07.3.2.5
- **Thể hiện yêu cầu**: FR-003
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Authentication.

**Assumptions/Constraints**:
- Assumes JWT với RSA signing.
- Constraint: Token expiry 1h, refresh 24h.

**Dependencies/Risks**:
- Dependencies: Identity Service.
- Risks: Brute force → Mitigation: Rate limiting.

**Acceptance Criteria/Testable Items**:
- Endpoints login/logout/refresh đúng.
- Token valid, unauthorized trả 401.
- Response time <500ms.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.2.2 User APIs

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003), Part07_Database_Design (07.3.2.1 Users Table)

**Mục đích**: Định nghĩa APIs cho CRUD users.

**Ý nghĩa**: Hỗ trợ Platform Admin, Brand Admin quản lý users.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/users`: Tạo user (Role: Platform Admin, Brand Admin).
    - Request: JSON `{email, password, role}`
    - Response: 201 JSON `{user_id}`
  - `GET /api/v1/users/:id`: Lấy user (Role: Platform Admin, Brand Admin).
    - Response: 200 JSON `{id, email, role}`
  - `PUT /api/v1/users/:id`: Cập nhật user (Role: Platform Admin, Brand Admin).
    - Request: JSON `{email, role}`
    - Response: 200 JSON `{updated_user}`
  - `DELETE /api/v1/users/:id`: Xóa user (Role: Platform Admin).
    - Response: 204 No Content
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor Admin
      participant API
      participant Service
      participant DB
      Admin->>API: POST /api/v1/users
      API->>Service: Validate JWT
      Service->>DB: Insert user
      DB-->>Service: Success
      Service-->>API: User ID
      API-->>Admin: 201 Created
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-004, NFR-003, 07.3.2.1
- **Thể hiện yêu cầu**: FR-004
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho User Management.

**Assumptions/Constraints**:
- Assumes password hashed trước lưu.
- Constraint: PII encrypted (NFR-003).

**Dependencies/Risks**:
- Dependencies: Identity Service.
- Risks: Duplicate emails → Mitigation: Unique constraint.

**Acceptance Criteria/Testable Items**:
- Endpoints CRUD user đúng.
- Response time <500ms.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.2.3 Consent APIs

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-003), Part07_Database_Design (07.3.2.4 Consent History Table)

**Mục đích**: Định nghĩa APIs cho quản lý consent.

**Ý nghĩa**: Hỗ trợ Customer opt-in/out, tuân thủ GDPR/PDPA.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/consent/opt-in`: Opt-in consent (Role: Customer).
    - Request: JSON `{type, granted}`
    - Response: 200 JSON `{consent_id}`
  - `POST /api/v1/consent/opt-out`: Opt-out consent (Role: Customer).
    - Request: JSON `{type}`
    - Response: 200 JSON `{status: "revoked"}`
  - `GET /api/v1/consent/:user_id`: Lấy consent history (Role: Platform Admin, Customer).
    - Response: 200 JSON `{consents}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor Customer
      participant API
      participant Service
      participant DB
      Customer->>API: POST /api/v1/consent/opt-in
      API->>Service: Validate JWT
      Service->>DB: Insert consent
      DB-->>Service: Success
      Service-->>API: Consent ID
      API-->>Customer: 200 OK
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-004, NFR-003, 07.3.2.4
- **Thể hiện yêu cầu**: FR-004
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Consent Management.

**Assumptions/Constraints**:
- Assumes `type`: marketing, data_sharing.
- Constraint: Consent immutable sau revoke.

**Dependencies/Risks**:
- Dependencies: Identity Service.
- Risks: Consent leakage → Mitigation: Encryption.

**Acceptance Criteria/Testable Items**:
- Endpoints opt-in/out đúng.
- History trả về đầy đủ.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.2.4 Portal APIs

**References**: Part04_Functional_Requirements (FR-004), Part05_Non_Functional_Requirements (NFR-007), Part07_Database_Design (07.3.2.1 Users Table)

**Mục đích**: Định nghĩa APIs cho User Portal (PWA).

**Ý nghĩa**: Hỗ trợ Customer xem barcodes, preferences.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `GET /api/v1/portal/barcodes`: Lấy barcodes (Role: Customer).
    - Response: 200 JSON `{barcodes}`
  - `GET /api/v1/portal/preferences`: Lấy preferences (Role: Customer).
    - Response: 200 JSON `{preferences}`
  - `PUT /api/v1/portal/preferences`: Cập nhật preferences (Role: Customer).
    - Request: JSON `{key, value}`
    - Response: 200 JSON `{updated_preferences}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor Customer
      participant API
      participant Service
      participant DB
      Customer->>API: GET /api/v1/portal/barcodes
      API->>Service: Validate JWT
      Service->>DB: Query Barcodes
      DB-->>Service: Barcodes
      Service-->>API: Response
      API-->>Customer: 200 OK
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-004, NFR-007, 07.3.2.1
- **Thể hiện yêu cầu**: FR-004
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho User Portal.

**Assumptions/Constraints**:
- Assumes PWA gọi APIs với JWT.
- Constraint: Queries <500ms.

**Dependencies/Risks**:
- Dependencies: Identity Service.
- Risks: Data exposure → Mitigation: RBAC.

**Acceptance Criteria/Testable Items**:
- Endpoints trả về đúng data.
- Response time <500ms.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

### 08.2.3 Redemption Service APIs

#### 08.2.3.1 Redemption APIs

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-001), Part07_Database_Design (07.3.3.1 Redemptions Table)

**Mục đích**: Định nghĩa APIs cho redemption online/offline.

**Ý nghĩa**: Hỗ trợ POS Staff và Customer redeem barcodes.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/redemptions`: Redeem barcode (Role: POS Staff, Customer).
    - Request: JSON `{barcode_id, location_id}`
    - Response: 200 JSON `{redemption_id}`
  - `GET /api/v1/redemptions/:id`: Lấy redemption (Role: Platform Admin, Brand Admin).
    - Response: 200 JSON `{id, barcode_id, user_id, redemption_time}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor POSStaff
      participant API
      participant Service
      participant DB
      POSStaff->>API: POST /api/v1/redemptions
      API->>Service: Validate JWT
      Service->>DB: Insert redemption
      DB-->>Service: Success
      Service-->>API: Redemption ID
      API-->>POSStaff: 200 OK
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-007, NFR-001, 07.3.3.1
- **Thể hiện yêu cầu**: FR-007
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Redemption.

**Assumptions/Constraints**:
- Assumes barcode single-use.
- Constraint: Redemption <500ms.

**Dependencies/Risks**:
- Dependencies: Redemption Service.
- Risks: Duplicate redemptions → Mitigation: Transaction locks.

**Acceptance Criteria/Testable Items**:
- Endpoints redeem và lấy data đúng.
- Response time <500ms.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

#### 08.2.3.2 Offline Sync APIs

**References**: Part04_Functional_Requirements (FR-007), Part05_Non_Functional_Requirements (NFR-004), Part07_Database_Design (07.3.3.1 Redemptions Table)

**Mục đích**: Định nghĩa APIs cho offline sync redemption.

**Ý nghĩa**: Hỗ trợ POS Staff sync data khi online.

**Cách làm**: Mô tả endpoints với request/response schemas.

**Nội dung cần có**:
- **Endpoints**:
  - `POST /api/v1/redemptions/offline-sync`: Sync redemption batch (Role: POS Staff).
    - Request: JSON `{redemptions: [{barcode_id, location_id, timestamp}] }`
    - Response: 200 JSON `{synced_count}`
- **Flow**:
  ```mermaid
  sequenceDiagram
      actor POSStaff
      participant API
      participant Service
      participant DB
      POSStaff->>API: POST /api/v1/redemptions/offline-sync
      API->>Service: Validate JWT
      Service->>DB: Insert batch
      DB-->>Service: Success
      Service-->>API: Synced Count
      API-->>POSStaff: 200 OK
  ```

**Tài liệu tham khảo**:
- **Đầu vào từ**: FR-007, NFR-004, 07.3.3.1
- **Thể hiện yêu cầu**: FR-007
- **Kết nối với**: Part08.1_API_Overview

**Mục đích của node này**: Chi tiết APIs cho Offline Sync.

**Assumptions/Constraints**:
- Assumes batch size <1000.
- Constraint: Sync <5s/100 items.

**Dependencies/Risks**:
- Dependencies: Redemption Service.
- Risks: Data conflicts → Mitigation: Idempotent sync.

**Acceptance Criteria/Testable Items**:
- Endpoint sync batch đúng.
- Response time <5s.
- RBAC áp dụng, unauthorized trả 401.

**Approval Sign-Off**:
| Role | Name | Signature | Date |
|------|------|-----------|------|
| PM | [TBD] | - | - |
| Tech Lead | [TBD] | - | - |

