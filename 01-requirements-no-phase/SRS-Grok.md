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


