# 02-SRS-Part00-ChangeLog.md  
## Tài liệu: System Requirement Specification (Product Sampling Platform)

| Phiên bản | Ngày cập nhật | Người soạn | Vai trò | Mô tả thay đổi | Người duyệt | Ghi chú |
|:-----------|:---------------|:-------------|:---------|:----------------|:--------------|:---------|
| 0.1 | 2025-10-17 | Mark Nguyen | System Analyst – Product Sampling Team | Khởi tạo tài liệu SRS (Full IEEE Structure) | GPT-5 (PM/BA Assistant) | Bản khởi tạo đầu tiên |
| 0.2 | TBD | Mark Nguyen | System Analyst | Bổ sung các FR chi tiết (FR-001 → FR-013) | TBD |  |
| 0.3 | TBD | Dev Team | Developer / QA | Cập nhật test case và traceability matrix | TBD |  |
| 1.0 | TBD | Project Manager | PM | Xác nhận tài liệu SRS hoàn chỉnh để phát hành chính thức | TBD |  |

---

### ⚙️ Quy ước quản lý phiên bản

| Loại cập nhật | Ký hiệu | Ví dụ | Ghi chú |
|:---------------|:----------|:--------|:---------|
| Bản nháp | 0.x | 0.3 | Khi tài liệu còn đang trong quá trình hoàn thiện |
| Bản phát hành chính thức | 1.x | 1.0 | Sau khi được PM phê duyệt |
| Cập nhật nhỏ / sửa lỗi | 1.x.y | 1.0.2 | Dành cho bổ sung hoặc chỉnh sửa nhỏ |
| Phiên bản lớn | 2.x | 2.0 | Khi có thay đổi lớn về kiến trúc hoặc chức năng |

---

### 📌 Ghi chú sử dụng

- Mọi thay đổi trong nội dung SRS phải được ghi nhận tại bảng Change Log trên.  
- Người cập nhật cần ghi rõ **phần thay đổi, ngày, người duyệt**.  
- Bản `.md` này có thể được quản lý trực tiếp trên GitHub và sử dụng tag version (`v0.1`, `v1.0`...) cho từng commit tương ứng.

---

### 📘 Mục lục tài liệu 02-SRS.md (Full Structure)
| Part       | Tên phần                                                    | Tình trạng   | Ghi chú                                            |
| :--------- | :---------------------------------------------------------- | :----------- | :------------------------------------------------- |
| **Part01** | Giới thiệu (Introduction)                                   | ✅ Hoàn thành | Mục tiêu, phạm vi, định nghĩa, tài liệu tham chiếu |
| **Part02** | Tổng quan hệ thống (Overall Description)                    | ✅ Hoàn thành | Actors, Use Context, Assumptions                   |
| **Part03** | Phạm vi & Mục tiêu sản phẩm (Scope and Objectives)          | ✅ Hoàn thành | Business goals & feature mapping                   |
| **Part04** | Yêu cầu chức năng (Functional Requirements)                 | ✅ Hoàn thành | FR-001 → FR-013                                    |
| **Part05** | Yêu cầu phi chức năng (Non-Functional Requirements)         | ✅ Hoàn thành | Hiệu năng, bảo mật, độ tin cậy, KPI                |
| **Part06** | Kiến trúc hệ thống (System Architecture & Components)       | ✅ Hoàn thành | Sơ đồ logic, vật lý, CI/CD                         |
| **Part07** | Thiết kế dữ liệu & CSDL (Data Design & Database Schema)     | ✅ Hoàn thành | ERD, MongoDB, PostgreSQL, Redis                    |
| **Part08** | Thiết kế API & Tích hợp (API Design & Integration)          | ✅ Hoàn thành | REST endpoints, webhook, error codes               |
| **Part09** | Use Case chi tiết (Detailed Use Cases)                      | ✅ Hoàn thành | 8 Use Cases chính                                  |
| **Part10** | Giao diện & Wireframes (UI/UX Design)                       | ✅ Hoàn thành | Flow UX, màu sắc, accessibility, KPI UX            |
| **Part11** | Bảo mật & Tuân thủ (System Security & Compliance)           | ✅ Hoàn thành | OAuth2, RBAC, GDPR/PDPA, DRP                       |
| **Part12** | Kiểm thử hiệu năng & tải (Performance & Load Testing Plan)  | ⏳ Sắp tạo    | JMeter/K6/Locust scenarios                         |
| **Part13** | Kế hoạch kiểm thử tổng thể (System & UAT Testing Plan)      | ⏳ Sắp tạo    | Test types, case design, UAT matrix                |
| **Part14** | Quản lý cấu hình & triển khai (Configuration & Deployment)  | ⏳ Sắp tạo    | Version control, CI/CD environments                |
| **Part15** | Kế hoạch bảo trì & vận hành (Maintenance & Monitoring Plan) | ⏳ Sắp tạo    | Logging, monitoring, incident response             |
| **Part16** | Phụ lục & Tài liệu tham chiếu (Appendices)                  | ⏳ Cuối cùng  | Glossary, diagrams, traceability matrix            |




**Tình trạng hiện tại:**  
> Phiên bản `v0.1` – Hoàn tất khung SRS và Change Log, chuẩn bị gen phần 01 (Giới thiệu & Phạm vi hệ thống).

# 02-SRS-Part01-Introduction.md

## 1. Giới thiệu & Phạm vi

### 1.1 Mục đích tài liệu

Tài liệu này mô tả chi tiết phần "Giới thiệu & Phạm vi" cho SRS (System Requirement Specification) của dự án **Product Sampling System**. Mục tiêu của phần này là:

* Xác định mục đích chung và phạm vi của SRS.
* Làm rõ đối tượng người đọc và các bên liên quan (stakeholders).
* Trình bày các giả định, ràng buộc và các tiêu chuẩn áp dụng cho toàn bộ tài liệu.

Phần này là nguồn tham chiếu để các phần sau (Functional Requirements, Non-Functional Requirements, Architecture, API, Use Cases...) tuân thủ.

### 1.2 Phạm vi hệ thống

Hệ thống **Product Sampling System** (gọi tắt: PSS) là một nền tảng quản lý và triển khai chiến dịch phát sản phẩm mẫu (sampling) có khả năng:

* Tạo, cấu hình và quản lý chiến dịch phát mẫu (Campaign Management).
* Phát mã voucher/QR cho người dùng đã xác thực (OTP verification) để đổi lấy mẫu tại các retail node.
* Hỗ trợ cơ chế redeem online (POS) và offline (device queue & sync).
* Thu thập dữ liệu người dùng đã xác thực, đồng bộ về CRM của brand và cung cấp báo cáo & phân tích ROI.
* Quản lý mạng lưới retail partners (Sampling Network-as-a-Service) để giảm chi phí logistics cho brand.
* Phát hiện và ngăn chặn gian lận (fraud detection) qua rules + scoring.
* Hỗ trợ tích hợp (API/Webhook) với hệ thống bên thứ ba (CRM, POS, SMS provider).
* Hỗ trợ module quảng bá (banner ads / mini widget) trên landing page hoặc app tích hợp.
* Cung cấp dashboard trực quan và realtime analytics cho brand và admin.
* Cho phép xuất dữ liệu người dùng và kết quả chiến dịch (CSV/Excel/API).
* (Tùy chọn) Hỗ trợ gamification hoặc cơ chế điểm thưởng để tăng tương tác người dùng.


**Giới hạn phạm vi:**

* Hệ thống không bao gồm logistics thực tế (vận chuyển hàng mẫu) — brand chịu trách nhiệm vận chuyển đến retail node; hệ thống chỉ quản lý phân phối mã và reconciliation.
* Hệ thống không cung cấp dịch vụ thanh toán; chỉ xử lý voucher/redenption và báo cáo.

### 1.3 Stakeholders (Các bên liên quan)

| Vai trò               | Mô tả                                     | Phụ trách/Quan tâm                 |
| --------------------- | ----------------------------------------- | ---------------------------------- |
| Project Manager (PM)  | Quản lý tiến độ dự án, phê duyệt tài liệu | Tiến độ, phạm vi, quality          |
| System Analyst / BA   | Soạn SRS, mapping BRD -> FR               | Độ chính xác yêu cầu               |
| Brand (Customer)      | Tạo chiến dịch, nhận báo cáo              | Dễ dùng dashboard, data quality    |
| Dev Team              | Triển khai hệ thống                       | API spec, data model, acceptance   |
| QA / Tester           | Kiểm thử chức năng & NFR                  | Test cases, performance            |
| Retail Partner (Node) | Nhận/giao sample, redeem tại điểm bán     | Offline capability, reconciliation |
| Admin / Ops           | Vận hành hệ thống, xử lý dispute          | Logs, monitoring, security         |
| CRM Provider          | Hệ thống bên thứ ba nhận webhook          | Payload mapping, delivery SLA      |
| SMS/Email Provider    | Gửi OTP/Notification                      | Throughput, delivery rate          |

### 1.4 Các giả định (Assumptions)

* Brand chịu trách nhiệm cung cấp hàng mẫu vật lý đến các retail node; PSS chỉ quản lý mã & reconcile.
* Retail Node có thiết bị (smartphone / tablet / POS) có khả năng chạy ứng dụng node hoặc scan QR; nếu offline, có thể lưu queue.
* Có nhà cung cấp SMS/Email để gửi OTP (Twilio/MessageBird/Local providers).
* Mạng Internet tại retail node có thể intermittent; hệ thống cần hỗ trợ offline-first sync.
* Dữ liệu cá nhân (PII) cần tuân thủ luật bảo vệ dữ liệu (PDPA/GDPR nếu áp dụng).

### 1.5 Ràng buộc (Constraints)

* Hệ thống cần xử lý cao điểm lên tới 100.000 requests/phút tại API gateway.
* Phải đảm bảo OTP/Rate-limit để chống spam/bot.
* Voucher phải là single-use, atomic redeem để tránh double-claim.
* Redis sẽ là cache/queue; cần có fallback khi Redis down.

### 1.6 Tiêu chuẩn & Quy ước

* Tài liệu theo chuẩn IEEE 830 / ISO 29148.
* API trả về JSON, dùng HTTP status codes tiêu chuẩn (200, 201, 400, 401, 403, 404, 409, 500).
* Mã lỗi chuẩn: {"code": "ERR_XXX", "message": "...", "details": {...}}
* Các định danh: FR-xxx (Functional Requirement), NFR-xxx (Non-Functional), UC-xxx (Use Case), TC-xxx (Test Case).

---

### 1.7 Kế hoạch kiểm soát thay đổi

Mọi thay đổi yêu cầu phải được ghi vào Change Log (Part00) và được duyệt bởi PM trước khi merge. Các update cần kèm theo: mô tả thay đổi, impact analysis, và regression test plan.

---

*Hết phần 01 - Giới thiệu & Phạm vi*

# 02-SRS-Part02-References.md

## 2. Tài liệu tham khảo (References)

### 2.1 Tài liệu nội bộ dự án

| Mã | Tên tài liệu | Mô tả | Phiên bản | Người soạn |
|:----|:-----------------------------|:----------------------------------------|:------------|:--------------|
| BRD-01 | Business Requirement Document (`01-BRD.md`) | Mô tả yêu cầu nghiệp vụ tổng thể, phạm vi kinh doanh, stakeholders và mục tiêu sản phẩm. | 1.0 | Mark Nguyen |
| FEAT-01 | System Feature Tree & User Stories (`System_Feature_Tree_Grok.md`) | Phân rã chức năng hệ thống, user stories, và mapping MoSCoW. | 1.0 | Mark Nguyen |
| VISION-01 | Vision & Strategy Document (`Product-Sampling-Vision-and-Strategy Document.md`) | Định hướng chiến lược, tầm nhìn dài hạn, phân khúc khách hàng và giá trị hệ thống. | 1.0 | Mark Nguyen |
| PROB-01 | Problem Statement (`Problem.md`) | Mô tả bài toán, khó khăn hiện tại của thị trường sampling và insight người dùng. | 1.0 | Mark Nguyen |
| SRS-00 | Change Log (`02-SRS-Part00-ChangeLog.md`) | Theo dõi các thay đổi của SRS. | 0.1 | Mark Nguyen |

---

### 2.2 Tiêu chuẩn & quy chuẩn áp dụng

| Chuẩn / Tài liệu | Mục đích áp dụng | Nguồn |
|:------------------|:-----------------|:----------------|
| **IEEE 830** | Chuẩn mô tả yêu cầu phần mềm (Software Requirement Specification) | IEEE Standard 830-1998 |
| **ISO/IEC/IEEE 29148:2018** | Chuẩn quốc tế về tài liệu yêu cầu phần mềm | ISO/IEC/IEEE |
| **OWASP ASVS 4.0** | Chuẩn kiểm thử bảo mật ứng dụng web | https://owasp.org/ASVS/ |
| **GDPR / PDPA** | Tuân thủ bảo mật và xử lý dữ liệu cá nhân người dùng | EU Regulation 2016/679 |
| **RESTful API Design Guideline** | Chuẩn thiết kế API HTTP và quy tắc mã lỗi | RFC 9110 – HTTP Semantics |
| **Mermaid Specification** | Dùng để mô tả sơ đồ kiến trúc và use case | https://mermaid-js.github.io/ |

---

### 2.3 Tài liệu bên thứ ba

| Nhóm | Tài liệu / Hệ thống | Mục đích tích hợp | Ghi chú |
|:------|:----------------------|:-----------------|:---------|
| CRM | HubSpot / Salesforce API Docs | Nhận webhook khi người dùng xác thực thành công | Mapping theo JSON payload |
| SMS Provider | Twilio / Local SMS Gateway API | Gửi mã OTP, notification | Throughput ≥ 100 msg/s |
| Analytics | Google Analytics / Mixpanel | Ghi nhận event tương tác người dùng | Dạng optional |
| Cloud / Infra | Docker, Nginx, Redis, PostgreSQL, MongoDB | Cấu trúc hạ tầng triển khai | DevOps reference |

---

### 2.4 Các thuật ngữ viết tắt

| Viết tắt | Nghĩa | Ghi chú |
|:-----------|:---------|:----------|
| **PSS** | Product Sampling System | Hệ thống phát hàng mẫu |
| **FR** | Functional Requirement | Yêu cầu chức năng |
| **NFR** | Non-Functional Requirement | Yêu cầu phi chức năng |
| **UC** | Use Case | Kịch bản sử dụng |
| **TC** | Test Case | Tình huống kiểm thử |
| **PII** | Personally Identifiable Information | Dữ liệu cá nhân định danh |
| **OTP** | One-Time Password | Mã xác thực một lần |
| **POS** | Point of Sale | Điểm bán hàng |
| **ROI** | Return on Investment | Lợi tức đầu tư |
| **API** | Application Programming Interface | Giao diện lập trình ứng dụng |

---

**Tình trạng:**  
> Phần 02 - References hoàn tất. Đủ thông tin để trích dẫn cho toàn bộ các phần FR, NFR và Architecture sau.

# 02-SRS-Part03-OverallDescription.md

## 3. Tổng quan hệ thống (Overall Description)

### 3.1 Mục đích

Phần này mô tả bức tranh tổng thể của **Product Sampling System (PSS)** – hệ thống quản lý, phát và đo lường chiến dịch phát sản phẩm mẫu (sampling campaign). Mục tiêu là giúp người đọc (PM, Dev, QA, Brand, Retail Node) hiểu rõ vai trò, luồng tương tác, giới hạn và cách hệ thống vận hành trong ngữ cảnh toàn cục.

---

### 3.2 Tổng quan chức năng hệ thống

Hệ thống **PSS** là nền tảng "Sampling Network-as-a-Service", gồm các khối chính:

1. **Campaign Management** – Brand tạo, quản lý, cấu hình chiến dịch sampling.
2. **Landing Page / User Onboarding** – Người dùng truy cập, đăng ký nhận sample, nhập OTP.
3. **OTP & Verification Service** – Xác minh số điện thoại / email để tránh spam.
4. **Voucher / QR Code Management** – Sinh mã đổi quà, quản lý trạng thái, chống double-claim.
5. **Retail Node (POS)** – Cửa hàng hoặc điểm phân phối, xử lý redeem offline hoặc online.
6. **CRM Sync & Data Export** – Đồng bộ thông tin người dùng về hệ thống CRM của brand.
7. **Fraud Detection** – Phát hiện hành vi gian lận, duplicate, spoof location.
8. **Dashboard & Analytics** – Hiển thị hiệu quả, ROI, top-performing nodes.
9. **Admin & Operation Console** – Quản trị hệ thống, logs, phân quyền, xử lý dispute.

---

### 3.3 Bối cảnh hệ thống (System Context)

```mermaid
flowchart LR
    subgraph Brand_Side[Brand / Advertiser]
        A1[Campaign Config Portal] -->|Tạo chiến dịch| S1
        A2[CRM System] -->|Webhook nhận dữ liệu user| S4
    end

    subgraph PSS[Product Sampling System]
        S1[Campaign Service]
        S2[OTP Verification Service]
        S3[Voucher/QR Service]
        S4[CRM Integration]
        S5[Retail Node Gateway]
        S6[Analytics & Dashboard]
        S7[Fraud Detection Engine]
        S8[Admin Console]
    end

    subgraph UserSide[End User / Retail Node]
        U1[Landing Page / Mini App]
        U2[Retail POS / Node App]
    end

    U1 -->|Đăng ký / Nhận OTP| S2
    S2 -->|Xác minh thành công| S3
    S3 -->|Gửi mã QR / Voucher| U1
    U1 -->|Redeem tại điểm bán| U2
    U2 -->|Xác thực / Redeem API| S5
    S5 -->|Ghi nhận giao dịch| S6
    S5 -->|Sync CRM| S4
    S7 -->|Giám sát hành vi bất thường| S6
    S8 -->|Giám sát / Quản trị| S6
```

---

### 3.4 Các actor trong hệ thống

| Actor                           | Vai trò                             | Mô tả chi tiết                                                                |
| :------------------------------ | :---------------------------------- | :---------------------------------------------------------------------------- |
| **End User**                    | Người nhận mẫu                      | Truy cập landing page, nhập thông tin, xác thực OTP, redeem quà tại điểm bán. |
| **Retail Node (POS)**           | Điểm phân phối mẫu                  | Quét QR / mã voucher, xác nhận phát quà, xử lý offline queue.                 |
| **Brand / Advertiser**          | Chủ chiến dịch                      | Tạo campaign, cấu hình form đăng ký, nhận dữ liệu người dùng.                 |
| **CRM System (3rd party)**      | Hệ thống lưu trữ dữ liệu người dùng | Nhận webhook chứa thông tin đã xác thực.                                      |
| **Admin / Operator**            | Quản trị hệ thống                   | Giám sát logs, báo cáo, phân quyền, xử lý khiếu nại.                          |
| **Fraud Monitor**               | Engine hoặc nhân viên vận hành      | Theo dõi pattern hành vi gian lận, rule-based + ML-based scoring.             |
| **SMS / Notification Provider** | Dịch vụ bên thứ ba                  | Gửi OTP / thông báo chiến dịch.                                               |
| **Analytics Engine**            | Hệ thống BI / thống kê              | Tính ROI, CTR, conversion, và báo cáo cho brand.                              |

---

### 3.5 Biên giới hệ thống (System Boundaries)

| Thành phần                   | Nội bộ PSS | Ngoại vi / Tích hợp | Mô tả                                          |
| :--------------------------- | :--------- | :------------------ | :--------------------------------------------- |
| Landing Page                 | ✔️         |                     | Host bởi PSS, giao diện cho người dùng đăng ký |
| Campaign Service             | ✔️         |                     | Quản lý chiến dịch sampling                    |
| OTP Service                  | ✔️         | SMS Provider        | Gửi mã OTP qua API                             |
| Voucher Service              | ✔️         |                     | Sinh và quản lý mã QR/Voucher                  |
| Retail Node App              | ✔️         | POS Hardware        | Kết nối qua HTTPS hoặc local app bridge        |
| CRM Integration              |            | ✔️                  | Gửi webhook về hệ thống CRM brand              |
| Analytics Service            | ✔️         |                     | Tính toán và hiển thị báo cáo                  |
| Admin Console                | ✔️         |                     | Quản trị và vận hành hệ thống                  |
| Redis / PostgreSQL / MongoDB | ✔️         |                     | Hạ tầng lưu trữ & cache                        |

---

### 3.6 Giả định nghiệp vụ chính (Key Business Assumptions)

1. Người dùng chỉ được nhận **01 sample / chiến dịch / số điện thoại**.
2. Các node (POS) hoạt động trong môi trường không ổn định, hệ thống phải **tự động đồng bộ khi online trở lại**.
3. Tất cả thông tin user thu thập phải tuân thủ **PDPA / GDPR**.
4. Hệ thống phục vụ **≥10 brands đồng thời**, mỗi brand có hàng trăm nodes.
5. Redis là cache/queue; dữ liệu master nằm trong MongoDB và backup sang PostgreSQL.
6. Khi Redis lỗi, hệ thống chuyển sang “degraded mode” và sync lại khi Redis khôi phục.
7. API hoạt động stateless, hỗ trợ scale ngang.

---

### 3.7 Giới hạn và phụ thuộc

* Không chịu trách nhiệm vận chuyển hàng mẫu (logistics).
* Không bao gồm thanh toán hoặc refund.
* Phụ thuộc chất lượng dịch vụ SMS gateway và CRM webhook.
* Môi trường hoạt động: Cloud-native (Dockerized) – Redis, MongoDB, PostgreSQL, Nginx, Node.js.

---

### 3.8 Tổng kết phần này

Phần này cung cấp góc nhìn tổng thể về cấu trúc, bối cảnh, các actor và biên giới hệ thống.
Các phần tiếp theo (FR, NFR, Architecture) sẽ chi tiết hóa từng module tương ứng trong sơ đồ context.

---

**Tình trạng:**

> Hoàn tất phần 03 – Tổng quan hệ thống. Đã xác định đầy đủ actor, boundary, flow, và assumption nghiệp vụ.

# 02-SRS-Part04-FunctionalRequirements.md

## 4. Yêu cầu chức năng (Functional Requirements)

### 4.1 Tổng quan

Phần này mô tả toàn bộ các **yêu cầu chức năng (Functional Requirements)** của hệ thống **Product Sampling System (PSS)**, được định danh theo chuẩn **FR-XXX**.
Mỗi yêu cầu bao gồm: mục tiêu nghiệp vụ, mô tả, dữ liệu đầu vào/đầu ra, luồng xử lý chính, điều kiện trước/sau và tiêu chí chấp nhận.

---

### FR-001 – Quản lý chiến dịch (Campaign Management)

**Mục tiêu:** Cho phép brand tạo, chỉnh sửa, kích hoạt và theo dõi chiến dịch sampling.

**Mô tả:**

* Brand có thể tạo chiến dịch mới, nhập tên, mô tả, thời gian bắt đầu/kết thúc, số lượng mẫu, và form đăng ký.
* Cho phép upload banner, logo, mô tả ngắn, chọn ngôn ngữ và khu vực áp dụng.
* Hỗ trợ copy campaign cũ sang mới.

**Luồng chính:**

1. Brand truy cập portal → chọn “Tạo chiến dịch”.
2. Nhập thông tin chi tiết → lưu.
3. Hệ thống sinh `campaign_id`, lưu metadata vào MongoDB.
4. Nếu chọn “Kích hoạt”, hệ thống update trạng thái `active=true`.

**Điều kiện:**

* *Trước:* Brand đã xác thực.
* *Sau:* Campaign xuất hiện trên dashboard brand và landing page tương ứng.

**Ngoại lệ:**

* Nếu trùng tên chiến dịch → báo lỗi `ERR_CAMPAIGN_DUPLICATE`.
* Nếu ngày kết thúc < ngày bắt đầu → báo `ERR_DATE_INVALID`.

**Tiêu chí chấp nhận:**

* Brand tạo chiến dịch thành công và hiển thị trong danh sách.
* Campaign có thể chỉnh sửa khi chưa active.

---

### FR-002 – Landing Page & Đăng ký nhận mẫu

**Mục tiêu:** Cho phép người dùng đăng ký nhận mẫu sản phẩm thông qua landing page.

**Mô tả:**

* Mỗi chiến dịch có landing page riêng, có thể tùy chỉnh banner, màu, form đăng ký.
* Người dùng nhập họ tên, số điện thoại, email, đồng ý điều khoản.
* Gửi yêu cầu xác thực OTP.

**Luồng chính:**

1. User truy cập `campaign.landing-page.com`.
2. Nhập thông tin đăng ký.
3. Hệ thống gọi API gửi OTP.
4. Nếu hợp lệ → hiển thị bước xác minh OTP.

**Điều kiện:**

* *Trước:* Campaign đang ở trạng thái `active`.
* *Sau:* OTP được gửi và trạng thái user là `pending_verification`.

**Ngoại lệ:**

* Số điện thoại không hợp lệ → báo lỗi `ERR_INVALID_PHONE`.
* Nếu campaign hết hạn → hiển thị thông báo “Chiến dịch đã kết thúc”.

**Tiêu chí chấp nhận:**

* Landing page hiển thị đúng nội dung của chiến dịch.
* OTP được gửi đến người dùng trong ≤ 5 giây.

---

### FR-003 – OTP Verification Service

**Mục tiêu:** Xác minh người dùng qua mã OTP để chống spam/bot.

**Mô tả:**

* Nhận OTP người dùng nhập, đối chiếu với Redis cache.
* Mỗi OTP chỉ hợp lệ trong 2 phút.
* Nếu hợp lệ → cập nhật trạng thái user là `verified`.

**Luồng chính:**

1. User nhập OTP → gửi API `POST /verify-otp`.
2. Hệ thống so khớp OTP trong Redis.
3. Nếu đúng → xóa OTP, lưu user verified vào MongoDB.
4. Gửi webhook sang CRM.

**Ngoại lệ:**

* OTP hết hạn → `ERR_OTP_EXPIRED`.
* OTP sai quá 3 lần → `ERR_OTP_LIMIT_EXCEEDED`.

**Tiêu chí chấp nhận:**

* OTP xác minh thành công và CRM nhận dữ liệu trong ≤10s.
* Redis sync lại từ PostgreSQL nếu bị mất dữ liệu.

---

### FR-004 – Quản lý Voucher / QR Code

**Mục tiêu:** Phát mã voucher duy nhất cho mỗi người dùng verified.

**Mô tả:**

* Sinh mã QR duy nhất (`UUIDv4`).
* Lưu trạng thái `issued`, `redeemed`, `expired`.
* Gắn voucher với campaign_id và user_id.

**Luồng chính:**

1. Sau khi xác minh OTP thành công, hệ thống tạo mã voucher.
2. Mã được hiển thị cho người dùng và lưu vào DB.
3. Người dùng dùng mã này để redeem tại node.

**Ngoại lệ:**

* Nếu Redis lỗi → queue xử lý tạo voucher vào MongoDB.
* Nếu user đã có voucher → không cấp thêm.

**Tiêu chí chấp nhận:**

* Voucher là duy nhất, không trùng.
* Redeem một lần duy nhất.

---

### FR-005 – Redeem tại điểm bán (POS)

**Mục tiêu:** Cho phép nhân viên tại điểm bán quét QR và xác nhận phát hàng mẫu.

**Mô tả:**

* Ứng dụng POS hoặc Node App có thể hoạt động offline.
* Khi quét mã → kiểm tra trạng thái voucher.
* Nếu hợp lệ → đánh dấu `redeemed=true`.
* Nếu offline → lưu local queue, sync khi online.

**Ngoại lệ:**

* Voucher đã dùng → `ERR_VOUCHER_USED`.
* Voucher không tồn tại → `ERR_NOT_FOUND`.
* Node chưa được cấp quyền → `ERR_NODE_UNAUTHORIZED`.

**Tiêu chí chấp nhận:**

* Giao dịch redeem được ghi nhận, đồng bộ khi online.
* Retail node có thể xử lý ≥100 giao dịch/phút khi online.

---

### FR-006 – CRM Sync & Webhook Integration

**Mục tiêu:** Gửi dữ liệu user verified sang hệ thống CRM của brand.

**Mô tả:**

* Khi user verified, hệ thống gửi webhook JSON payload sang CRM endpoint.
* Payload gồm user info, campaign_id, timestamp, voucher_id.

**Tiêu chí chấp nhận:**

* Gửi thành công trong ≤10s.
* Retry tối đa 3 lần nếu thất bại.
* Có cơ chế queue và DLQ (Dead Letter Queue).

---

### FR-007 – Fraud Detection

**Mục tiêu:** Phát hiện gian lận dựa trên rule và pattern.

**Mô tả:**

* Rule cơ bản: cùng IP / số điện thoại / thiết bị đăng ký > 3 lần trong 1h.
* Gắn cờ `fraud_suspect=true` vào hồ sơ user.
* Báo cáo đến admin dashboard.

**Tiêu chí chấp nhận:**

* Phát hiện ≥95% hành vi duplicate.
* Không ảnh hưởng người dùng thật.

---

### FR-008 – Dashboard & Analytics

**Mục tiêu:** Cung cấp dashboard real-time cho brand và admin.

**Mô tả:**

* Thống kê số lượt đăng ký, verified, redeem, ROI, top node.
* Cập nhật real-time từ Redis stream hoặc event bus.

**Tiêu chí chấp nhận:**

* Dashboard cập nhật dữ liệu trong ≤3s.
* Hỗ trợ export CSV / Excel.

---

### FR-009 – Quản lý Retail Node

**Mục tiêu:** Quản lý các điểm bán (node) tham gia chiến dịch.

**Mô tả:**

* Admin thêm node mới, nhập địa chỉ, khu vực, capacity.
* Gán node cho chiến dịch cụ thể.
* Node đăng nhập bằng token hoặc QR.

**Tiêu chí chấp nhận:**

* Node có thể hoạt động online/offline.
* Sync định kỳ 5 phút một lần.

---

### FR-010 – Xuất dữ liệu & Báo cáo

**Mục tiêu:** Cho phép brand tải dữ liệu người dùng và kết quả chiến dịch.

**Mô tả:**

* Brand chọn khoảng thời gian → hệ thống export CSV/Excel.
* File chứa user info, voucher status, node info, timestamps.

**Tiêu chí chấp nhận:**

* File export ≤10MB / yêu cầu.
* Dữ liệu khớp 100% với dashboard.

---

### FR-011 – Quản trị hệ thống (Admin)

**Mục tiêu:** Quản lý người dùng nội bộ, logs, quyền hạn và dispute.

**Mô tả:**

* Admin có thể phân quyền: brand, node, operator.
* Theo dõi logs, báo cáo, xử lý lỗi.
* Khoá node nếu có gian lận.

**Tiêu chí chấp nhận:**

* Tất cả thao tác được log.
* Phân quyền RBAC hoạt động chính xác.

---

### FR-012 – Quản lý thông báo (Notifications)

**Mục tiêu:** Gửi thông báo đến người dùng qua SMS/email.

**Mô tả:**

* Khi redeem thành công, hệ thống gửi thông báo cảm ơn.
* Có thể bật/tắt theo từng campaign.

**Tiêu chí chấp nhận:**

* Gửi thông báo trong ≤10s.
* Ghi log message_id để tracking.

---

### FR-013 – Tích hợp quảng bá (Banner Ads / Widgets)

**Mục tiêu:** Cho phép hiển thị banner chiến dịch trên landing page hoặc site đối tác.

**Mô tả:**

* Admin upload banner (JPG/PNG, <500KB).
* Có thể gắn UTM hoặc tracking pixel.
* Hiển thị theo vị trí được cấu hình.

**Tiêu chí chấp nhận:**

* Banner hiển thị đúng layout.
* Click tracking chính xác ≥99%.

---

**Tình trạng:**

> Hoàn tất phần 04 – Yêu cầu chức năng. Bao gồm FR-001 → FR-013, có thể dùng để dev mapping API & test cases.
# 02-SRS-Part05-NonFunctionalRequirements.md

## 5. Yêu cầu phi chức năng (Non-Functional Requirements)

### 5.1 Mục tiêu

Mục tiêu của phần này là xác định các yêu cầu phi chức năng (NFRs) giúp hệ thống **Product Sampling System (PSS)** hoạt động ổn định, bảo mật, hiệu quả và dễ mở rộng trong điều kiện vận hành thực tế.

---

### 5.2 Nhóm yêu cầu phi chức năng chính

| ID          | Tên yêu cầu                                 | Mô tả                                                                                        | Chỉ tiêu định lượng                                                             | Tiêu chí chấp nhận                                    |
| :---------- | :------------------------------------------ | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :---------------------------------------------------- |
| **NFR-001** | Hiệu năng (Performance)                     | Hệ thống phải đáp ứng khối lượng lớn người dùng truy cập đồng thời và tốc độ phản hồi nhanh. | - API response ≤ 200 ms (95th percentile)  <br> - Throughput ≥ 100.000 req/phút | Kết quả kiểm thử tải đạt hoặc vượt ngưỡng định lượng. |
| **NFR-002** | Khả năng mở rộng (Scalability)              | Cho phép mở rộng ngang mà không cần downtime.                                                | Tối thiểu 10 instances API có thể chạy song song.                               | Kiểm thử scale-out thành công qua load balancer.      |
| **NFR-003** | Độ tin cậy (Reliability)                    | Hệ thống hoạt động ổn định và tự phục hồi khi lỗi.                                           | Uptime ≥ 99.9% / tháng                                                          | Có cơ chế retry, circuit breaker, health check.       |
| **NFR-004** | Khả dụng (Availability)                     | Người dùng luôn có thể truy cập landing page và redeem POS.                                  | Downtime ≤ 1h/tháng                                                             | Load balancer + multi-region deployment.              |
| **NFR-005** | Bảo mật (Security)                          | Dữ liệu cá nhân phải được mã hóa và xác thực người dùng an toàn.                             | 100% dữ liệu PII mã hóa AES-256 <br> OAuth2 / JWT xác thực                      | Pen-test không phát hiện lỗ hổng mức High.            |
| **NFR-006** | Khả năng bảo trì (Maintainability)          | Code base cần dễ bảo trì, tách module rõ ràng.                                               | Thời gian sửa lỗi trung bình (MTTR) ≤ 4h                                        | Code coverage ≥ 80%, CI/CD kiểm thử tự động.          |
| **NFR-007** | Khả năng giám sát & logging (Observability) | Toàn bộ hoạt động hệ thống được ghi log và giám sát.                                         | - 100% API có log request/response <br> - Dashboard Prometheus/Grafana          | Cảnh báo qua Slack/Email hoạt động đúng.              |
| **NFR-008** | Tính tương thích (Compatibility)            | Hệ thống tương thích nhiều nền tảng POS và CRM khác nhau.                                    | Tích hợp ≥ 3 CRM (HubSpot, Salesforce, Zoho)                                    | Tích hợp thành công với 3 provider đầu tiên.          |
| **NFR-009** | Tính an toàn dữ liệu (Data Integrity)       | Dữ liệu phải được sao lưu, phục hồi chính xác khi sự cố.                                     | Backup PostgreSQL 6h/lần <br> MongoDB snapshot hàng ngày                        | Bài test khôi phục dữ liệu thành công 100%.           |
| **NFR-010** | Tuân thủ quy định (Compliance)              | Hệ thống phải tuân thủ luật bảo vệ dữ liệu cá nhân.                                          | PDPA/GDPR Ready                                                                 | Không vi phạm quy định bảo mật PII.                   |

---

### 5.3 KPI định lượng hệ thống

| Nhóm KPI          | Chỉ số mục tiêu                               | Mức chấp nhận tối thiểu |
| :---------------- | :-------------------------------------------- | :---------------------- |
| **Business KPI**  | Cost per verified user ≤ **0.40 USD**         | ≤ 0.50 USD              |
|                   | ROI uplift ≥ **20%** so với sampling thủ công | ≥ 15%                   |
|                   | Stock accuracy ≥ **95%**                      | ≥ 90%                   |
|                   | Fraud false-positive rate ≤ **3%**            | ≤ 5%                    |
| **Technical KPI** | OTP delivery success ≥ **98%**                | ≥ 95%                   |
|                   | CRM sync success ≥ **97%**                    | ≥ 95%                   |
|                   | Redis failover recovery ≤ **60s**             | ≤ 120s                  |
|                   | CI/CD pipeline build success ≥ **95%**        | ≥ 90%                   |

---

### 5.4 Bảo mật và quyền riêng tư

* Tất cả thông tin PII được mã hóa ở cả **at-rest** và **in-transit**.
* Dữ liệu nhạy cảm (số điện thoại, email) chỉ được hiển thị dạng masked.
* Token truy cập API theo chuẩn **JWT + OAuth2**.
* Cơ chế rate-limit, captcha và lockout khi sai OTP quá 3 lần.
* Log bảo mật chỉ hiển thị cho Admin cấp cao.

---

### 5.5 Khả năng phục hồi và sao lưu

* Redis được đồng bộ từ PostgreSQL nếu crash.
* PostgreSQL có cơ chế WAL + snapshot 6 giờ/lần.
* MongoDB backup tự động hàng ngày.
* Restore test chạy định kỳ 1 lần/tuần.

---

### 5.6 Tiêu chí nghiệm thu tổng hợp

| Nhóm             | Tiêu chí                                   | Phương pháp kiểm thử             |
| :--------------- | :----------------------------------------- | :------------------------------- |
| Hiệu năng        | Đáp ứng ≥100k request/phút                 | Load test bằng JMeter / K6       |
| Bảo mật          | Không có lỗ hổng High trong Pen-test       | OWASP ZAP / BurpSuite            |
| Khả năng mở rộng | Scale 10 instance không downtime           | Docker Compose + HAProxy test    |
| Logging          | 100% API log hoạt động                     | Kiểm tra Prometheus + Kibana     |
| Backup           | Phục hồi dữ liệu thành công trong ≤10 phút | Chaos Engineering / Restore Test |

---

**Tình trạng:**

> Hoàn tất phần 05 – Yêu cầu phi chức năng. Bao gồm hiệu năng, bảo mật, khả năng mở rộng, compliance, KPI định lượng và tiêu chí nghiệm thu.

# 02-SRS-Part06-SystemArchitecture.md

## 6. Kiến trúc hệ thống & Thành phần kỹ thuật (System Architecture & Components)

### 6.1 Tổng quan

Phần này mô tả cấu trúc tổng thể của hệ thống **Product Sampling System (PSS)**, bao gồm kiến trúc logic, vật lý, các thành phần kỹ thuật chính, và cơ chế đồng bộ dữ liệu (Redis ↔ PostgreSQL ↔ MongoDB).
Hệ thống được thiết kế theo mô hình **microservices** để đảm bảo khả năng mở rộng, phục hồi và bảo trì.

---

### 6.2 Kiến trúc logic (Logical Architecture)

```mermaid
flowchart TB
    subgraph UI[User Interface Layer]
        A1[Landing Page / Next.js PWA]
        A2[Admin & Brand Dashboard]
    end

    subgraph API[Application Layer - Node.js]
        B1[Campaign Service]
        B2[OTP Service]
        B3[Voucher Service]
        B4[Retail Node Gateway]
        B5[Fraud Detection Service]
        B6[Analytics Service]
        B7[Notification Service]
        B8[CRM Integration]
    end

    subgraph DATA[Data Layer]
        C1[(MongoDB - Master Data)]
        C2[(PostgreSQL - Backup / BI)]
        C3[(Redis - Cache / Queue)]
    end

    subgraph EXT[External Systems]
        D1[CRM Provider]
        D2[SMS Gateway]
        D3[Email Provider]
    end

    A1 --> B2
    A1 --> B1
    A2 --> B6
    B2 --> C3
    B1 --> C1
    B3 --> C1
    B3 --> C2
    B4 --> C3
    B6 --> C2
    B8 --> D1
    B2 --> D2
    B7 --> D3
```

---

### 6.3 Kiến trúc vật lý (Physical Deployment)

```mermaid
graph TD
    subgraph Client
        U1[End User Browser]
        U2[Retail POS App]
    end

    subgraph WebTier[Web Tier]
        W1[Nginx Reverse Proxy]
        W2[Next.js Frontend]
    end

    subgraph AppTier[Application Tier]
        A1[Node.js Services]
        A2[Redis Cluster]
    end

    subgraph DataTier[Data Tier]
        D1[MongoDB Replica Set]
        D2[PostgreSQL Server]
    end

    subgraph External
        E1[CRM System]
        E2[SMS Gateway]
    end

    U1 --> W1 --> W2 --> A1
    U2 --> A1
    A1 --> A2
    A1 --> D1
    A1 --> D2
    A1 --> E1
    A1 --> E2
```

---

### 6.4 Các thành phần chính

| Thành phần               | Công nghệ                       | Mô tả                                     | Ghi chú               |
| :----------------------- | :------------------------------ | :---------------------------------------- | :-------------------- |
| **Frontend**             | Next.js (React)                 | Giao diện landing page và dashboard brand | PWA, SSR support      |
| **Backend Services**     | Node.js (NestJS / Express)      | Xử lý API, OTP, CRM sync, Fraud detection | Microservice-based    |
| **Database chính**       | MongoDB                         | Lưu user, campaign, voucher               | Master data store     |
| **Database backup / BI** | PostgreSQL                      | Backup và phục vụ dashboard, reporting    | Data sync mỗi 10 phút |
| **Cache / Queue**        | Redis                           | Caching OTP, voucher, fraud scoring       | Auto resync nếu crash |
| **Reverse Proxy**        | Nginx                           | Cân bằng tải & routing HTTPS              | Hỗ trợ gzip, caching  |
| **CI/CD**                | Docker, GitHub Actions, Jenkins | Triển khai tự động                        | Có 2 phương án CI/CD  |

---

### 6.5 Cơ chế đồng bộ dữ liệu (Redis ↔ PostgreSQL ↔ MongoDB)

1. **Luồng chính:** Mọi giao dịch (OTP, voucher, redeem) được ghi vào MongoDB.
2. **Redis** lưu cache cho OTP & queue sự kiện. Nếu Redis lỗi → hệ thống tự động chuyển sang chế độ “degraded mode”.
3. **PostgreSQL** nhận bản ghi định kỳ từ MongoDB qua worker sync job (interval 10 phút).
4. **Redis Recovery:** Khi Redis khôi phục, hệ thống chạy `sync job` để tải lại dữ liệu từ PostgreSQL.

```mermaid
sequenceDiagram
User->>OTP Service: Request OTP
OTP Service->>Redis: Cache OTP
Redis-->>OTP Service: ACK
User->>Voucher Service: Verify OTP
Voucher Service->>MongoDB: Write verified user
MongoDB->>PostgreSQL: Sync snapshot
PostgreSQL-->>Redis: Reload cache if needed
```

---

### 6.6 Giám sát & Logging

* **Prometheus + Grafana** để theo dõi CPU, RAM, throughput.
* **ELK Stack (Elastic, Logstash, Kibana)** cho log tập trung.
* Cảnh báo qua **Slack / Email** khi lỗi 5xx > 1% hoặc Redis không khả dụng.

---

### 6.7 Cấu hình CI/CD

#### Option 1: GitHub Actions + Docker Compose

```yaml
name: CI-CD Pipeline
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker images
        run: docker-compose build
      - name: Run tests
        run: npm test
      - name: Deploy to Staging
        run: docker-compose -f docker-compose.staging.yml up -d
```

#### Option 2: Jenkins Pipeline (Declarative)

```groovy
pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Build & Test') {
      steps {
        sh 'docker-compose build'
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker-compose -f docker-compose.prod.yml up -d'
      }
    }
  }
}
```

---

### 6.8 Tóm tắt

* Kiến trúc 3 lớp (UI – API – Data), microservices, có Redis queue, MongoDB master, PostgreSQL backup.
* Hỗ trợ CI/CD tự động bằng GitHub Actions hoặc Jenkins.
* Khả năng phục hồi cao, quan sát được toàn diện, sẵn sàng cho scaling multi-brand.

---

**Tình trạng:**

> Hoàn tất phần 06 – Kiến trúc hệ thống & Thành phần kỹ thuật. Bao gồm sơ đồ logic, vật lý, cơ chế đồng bộ, CI/CD và giám sát.
# 02-SRS-Part07-DataDesign-and-DatabaseSchema.md

## 7. Thiết kế dữ liệu & Cấu trúc cơ sở dữ liệu (Data Design & Database Schema)

### 7.1 Mục tiêu

Phần này định nghĩa mô hình dữ liệu, cấu trúc bảng, quan hệ, chỉ mục và cơ chế đồng bộ giữa các hệ thống cơ sở dữ liệu (**MongoDB**, **PostgreSQL**, **Redis**) trong hệ thống **Product Sampling System (PSS)**.

---

### 7.2 Tổng quan mô hình dữ liệu

```mermaid
erDiagram
    BRAND ||--o{ CAMPAIGN : owns
    CAMPAIGN ||--o{ VOUCHER : issues
    CAMPAIGN ||--o{ USER_REGISTRATION : collects
    USER_REGISTRATION ||--o{ REDEEM_TRANSACTION : performs
    RETAIL_NODE ||--o{ REDEEM_TRANSACTION : processes
    USER_REGISTRATION ||--o{ OTP_LOG : verifies
```

---

### 7.3 Mô tả chi tiết các thực thể chính

| Entity                 | Mô tả                                             | Trường dữ liệu chính                                                                                          | Ghi chú                                      |
| :--------------------- | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------- |
| **Brand**              | Đại diện nhãn hàng / khách hàng sử dụng hệ thống. | `brand_id`, `brand_name`, `contact_email`, `api_key`, `status`                                                | Quản lý bởi admin.                           |
| **Campaign**           | Chiến dịch sampling của nhãn hàng.                | `campaign_id`, `brand_id`, `title`, `start_date`, `end_date`, `quota`, `reward_type`, `form_fields`, `status` | Mỗi campaign thuộc 1 brand.                  |
| **User_Registration**  | Người dùng đăng ký nhận sample.                   | `user_id`, `campaign_id`, `name`, `phone`, `email`, `otp_verified`, `created_at`                              | Dữ liệu chính trong MongoDB.                 |
| **Voucher**            | Mã nhận sample.                                   | `voucher_id`, `campaign_id`, `code`, `status`, `issued_at`, `redeemed_at`                                     | Mã unique, có TTL cache trong Redis.         |
| **Retail_Node**        | Điểm phát hàng hoặc POS.                          | `node_id`, `brand_id`, `name`, `address`, `region`, `status`                                                  | Có thể hoạt động offline.                    |
| **Redeem_Transaction** | Giao dịch đổi quà.                                | `txn_id`, `user_id`, `node_id`, `voucher_id`, `timestamp`, `status`                                           | Sync từ Redis → PostgreSQL mỗi 10 phút.      |
| **OTP_Log**            | Lịch sử OTP gửi cho người dùng.                   | `otp_id`, `user_id`, `phone`, `otp_code`, `expired_at`, `status`                                              | Dùng Redis cache tạm, ghi log về PostgreSQL. |

---

### 7.4 Lược đồ cơ sở dữ liệu MongoDB

```javascript
// Collection: campaigns
{
  _id: ObjectId(),
  brand_id: ObjectId(),
  title: "Summer Trial 2025",
  start_date: ISODate("2025-06-01"),
  end_date: ISODate("2025-07-01"),
  quota: 100000,
  reward_type: "voucher",
  form_fields: ["name", "phone", "email"],
  status: "active"
}

// Collection: user_registrations
{
  _id: ObjectId(),
  campaign_id: ObjectId(),
  name: "Nguyen Van A",
  phone: "+84901111222",
  email: "a@gmail.com",
  otp_verified: true,
  created_at: ISODate()
}
```

---

### 7.5 Lược đồ cơ sở dữ liệu PostgreSQL

```sql
CREATE TABLE campaigns (
  campaign_id SERIAL PRIMARY KEY,
  brand_id INT REFERENCES brands(brand_id),
  title VARCHAR(255),
  start_date DATE,
  end_date DATE,
  quota INT,
  reward_type VARCHAR(50),
  status VARCHAR(20)
);

CREATE TABLE vouchers (
  voucher_id SERIAL PRIMARY KEY,
  campaign_id INT REFERENCES campaigns(campaign_id),
  code VARCHAR(50) UNIQUE,
  status VARCHAR(20),
  issued_at TIMESTAMP,
  redeemed_at TIMESTAMP
);

CREATE INDEX idx_voucher_code ON vouchers(code);
```

---

### 7.6 Cấu trúc Redis

| Key Pattern             | Giá trị                            | TTL  | Mục đích                   |
| :---------------------- | :--------------------------------- | :--- | :------------------------- |
| `otp:{phone}`           | `{ code, expireAt }`               | 300s | Lưu OTP tạm thời           |
| `voucher:{code}`        | `{ status, user_id, campaign_id }` | 24h  | Kiểm tra nhanh khi redeem  |
| `queue:redeem`          | JSON string (txn info)             | N/A  | Hàng đợi giao dịch offline |
| `fraud:score:{user_id}` | float                              | 1h   | Điểm nghi ngờ fraud        |

---

### 7.7 Quan hệ và ràng buộc (Constraints)

* `campaign_id` bắt buộc tồn tại trong bảng `campaigns` trước khi thêm `vouchers` hoặc `user_registrations`.
* `voucher_id` chỉ được redeem 1 lần duy nhất (constraint unique).
* `otp_verified = true` là điều kiện bắt buộc trước khi sinh voucher.
* Redis key tự động xoá khi TTL hết hạn để tránh trùng lặp OTP.

---

### 7.8 Đồng bộ dữ liệu

* Worker process đồng bộ dữ liệu MongoDB → PostgreSQL định kỳ 10 phút.
* Redis queue chứa log redeem, nếu mạng yếu thì POS lưu offline, gửi lại khi online.
* PostgreSQL là nguồn dữ liệu cuối cùng (source of truth cho BI & reporting).

```mermaid
sequenceDiagram
Retail Node->>Redis: Push redeem event
Redis->>SyncWorker: Consume event queue
SyncWorker->>MongoDB: Update voucher status
SyncWorker->>PostgreSQL: Insert transaction record
PostgreSQL-->>Analytics: Generate report
```

---

### 7.9 Quản lý index & tối ưu hiệu năng

* MongoDB: index trên `phone`, `campaign_id`, `otp_verified`.
* PostgreSQL: composite index `(campaign_id, status)`, `(voucher_code)`.
* Redis: hash key cho OTP và voucher để tối ưu lookup O(1).

---

### 7.10 Tổng kết

* Cấu trúc dữ liệu kết hợp **MongoDB (Master)**, **PostgreSQL (Backup/BI)** và **Redis (Cache/Queue)**.
* Đảm bảo tính toàn vẹn, hiệu năng cao và dễ dàng mở rộng.
* Phù hợp với yêu cầu NFR về tốc độ, tính sẵn sàng và khả năng phục hồi.

---

**Tình trạng:**

> Hoàn tất phần 07 – Thiết kế dữ liệu & Cấu trúc cơ sở dữ liệu. Bao gồm ERD, schema chi tiết, Redis cache design và cơ chế đồng bộ.
# 02-SRS-Part08-APIDesign-and-Integration.md

## 8. Giao diện hệ thống & Thiết kế API (API Design & Integration)

### 8.1 Mục tiêu

Phần này mô tả chi tiết các API RESTful chính của hệ thống PSS, payload mẫu, cơ chế xác thực, mã lỗi chuẩn và chính sách retry/webhook để tích hợp với hệ thống bên thứ ba (CRM, SMS gateway, POS).

---

### 8.2 Quy ước thiết kế API

* Base URL: `https://api.productsampling.example.com/v1`
* Giao thức: HTTPS/TLS 1.2+
* Định dạng: JSON (UTF-8)
* Authentication: OAuth2 Bearer token (JWT) cho partners & services; API key cho Brand dashboard (scoped).
* Tracing: `X-Request-ID` header bắt buộc cho transaction tracing.
* Rate limit: 100 req/min cho public endpoints, 1000 req/min cho partner endpoints (configurable).
* Error response: `{ "code": "ERR_XXX", "message": "...", "details": {...} }`.

---

### 8.3 Authentication & Authorization

* **Service-to-Service:** JWT signed with RS256, scopes: `campaign:read`, `campaign:write`, `voucher:redeem`, etc.
* **Brand Users:** OAuth2 Authorization Code flow; token lifetime 1h, refresh token supported.
* **Retail Node Devices:** Device Token (long-lived) with mTLS optional.

Header sample:

```
Authorization: Bearer <JWT>
X-Request-ID: <uuid>
Content-Type: application/json
```

---

### 8.4 API Endpoints chính (mẫu)

#### 8.4.1 Campaign APIs

**POST /v1/brands/{brand_id}/campaigns** - Tạo campaign

* Body sample:

```json
{
  "title": "Summer Sampling",
  "start_date": "2025-06-01",
  "end_date": "2025-06-30",
  "quota": 10000,
  "form_fields": ["name","phone","email"],
  "nodes": ["node_1","node_2"]
}
```

* Response: `201 Created` `{ "campaign_id": "c_123" }`
* Errors: `400` (validation), `401` (unauthorized), `409` (duplicate)

**GET /v1/brands/{brand_id}/campaigns/{campaign_id}/metrics** - Lấy metrics

* Response sample:

```json
{
  "scan_count": 12000,
  "submit_count": 9000,
  "verify_count": 8000,
  "issued_count": 7950,
  "redeemed_count": 4000,
  "cpl": 0.35
}
```

---

#### 8.4.2 OTP APIs

**POST /v1/otp/send**

* Input: `{ "contact": "+8490....", "channel": "sms", "temp_user_id": "t_123" }`
* Response: `{ "otp_sent_id": "otp_abc", "expires_in": 120 }`
* Rate-limit & throttling applied.

**POST /v1/otp/verify**

* Input: `{ "temp_user_id": "t_123", "otp_code": "123456" }`
* Response: `{ "verified_user_id": "u_456" }`
* Errors: `401` invalid/expired, `429` too many attempts

---

#### 8.4.3 Voucher APIs

**POST /v1/vouchers/issue**

* Input: `{ "verified_user_id": "u_1", "campaign_id": "c_1" }`
* Response: `{ "voucher_id": "v_1", "code": "ABC123", "qr_url": "https://..." }`
* Constraints: enforce velocity rules on server side.

**POST /v1/vouchers/redeem**

* Input (Node): `{ "voucher_code": "ABC123", "node_id": "node_1", "staff_id": "s_1", "device_info": {...} }`
* Response: `{ "redeem_status": "success", "timestamp": "2025-10-17T08:00:00Z" }`
* Errors: `409` already redeemed, `404` not found, `403` node unauthorized.

---

#### 8.4.4 Retail Node Gateway

**POST /v1/nodes/{node_id}/sync**

* Input: `{ "events": [ { "type": "redeem", "voucher_code": "ABC123", "staff_id": "s1", "timestamp": "...", "signature": "..." } ] }`
* Response: `{ "ack": true, "processed": 10 }`
* Security: JWT device token + optional mTLS.

---

#### 8.4.5 Webhook (CRM Delivery)

* Events: `user_verified`, `voucher_issued`, `voucher_redeemed`.
* Delivery guarantee: at-least-once with deduplication by `event_id`.
* Retry policy: exponential backoff, attempts: 5, then move to DLQ & alert.
* Sample payload (redeem):

```json
{
  "event_id": "evt_123",
  "event": "voucher_redeemed",
  "data": {
    "voucher_id": "v_1",
    "campaign_id": "c_1",
    "user": { "user_id": "u_1", "name": "Nguyen" },
    "redeem": { "node_id": "node_1", "timestamp": "..." }
  }
}
```

---

### 8.5 Error Codes (tham khảo)

| Code                 | HTTP | Mô tả                    |
| :------------------- | :--: | :----------------------- |
| ERR_INVALID_INPUT    |  400 | Dữ liệu gửi không hợp lệ |
| ERR_UNAUTHORIZED     |  401 | Token không hợp lệ       |
| ERR_FORBIDDEN        |  403 | Không có quyền           |
| ERR_NOT_FOUND        |  404 | Tài nguyên không tồn tại |
| ERR_ALREADY_REDEEMED |  409 | Voucher đã được redeem   |
| ERR_RATE_LIMIT       |  429 | Quá ngưỡng request       |
| ERR_INTERNAL         |  500 | Lỗi server               |

---

### 8.6 Idempotency & Transaction Patterns

* All write endpoints accept `Idempotency-Key` header to ensure safe retries.
* Voucher redeem uses optimistic locking and idempotency to prevent double-claim.

---

### 8.7 Security headers & Best Practices

* Enforce `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`.
* HSTS enabled.
* Input validation & schema validation at API gateway.

---

### 8.8 Integration notes

* CRM: mapping config per brand; provide sample mapping UI.
* SMS Provider: throughput limits and regional provider fallback.
* POS Integration: provide SDK (lightweight JS/REST client) and offline queue sample code.

---

**Tình trạng:**

> Hoàn tất phần 08 – API Design & Integration. Bao gồm endpoint mẫu, security, error codes, webhook delivery và integration notes.
# 02-SRS-Part09-UseCases.md

## 9. Use Case chi tiết (Detailed Use Cases)

### 9.1 Mục tiêu

Phần này mô tả chi tiết các kịch bản sử dụng chính của hệ thống Product Sampling System (PSS), giúp hiểu rõ cách người dùng, nhãn hàng, và các điểm bán tương tác với hệ thống trong từng tình huống nghiệp vụ cụ thể.

---

### 9.2 Danh sách các Use Case chính

| ID    | Tên Use Case                | Actor chính                | Mô tả ngắn                                          |
| :---- | :-------------------------- | :------------------------- | :-------------------------------------------------- |
| UC-01 | Đăng ký nhận sample         | End User                   | Người dùng điền form đăng ký để nhận sample.        |
| UC-02 | Xác thực OTP                | End User                   | Người dùng xác thực OTP để xác minh danh tính.      |
| UC-03 | Sinh mã voucher             | System / Brand             | Hệ thống cấp mã voucher cho người dùng đã xác minh. |
| UC-04 | Redeem tại điểm bán         | End User / Retail Node     | Người dùng đổi quà tại điểm bán bằng mã voucher.    |
| UC-05 | Quản lý chiến dịch sampling | Brand Admin                | Tạo, cấu hình và theo dõi chiến dịch.               |
| UC-06 | Xem dashboard và báo cáo    | Brand Admin / System Admin | Theo dõi số liệu tổng quan.                         |
| UC-07 | Đồng bộ dữ liệu sang CRM    | System / CRM               | Gửi dữ liệu verified user về CRM.                   |
| UC-08 | Phát hiện và chặn gian lận  | System                     | Kiểm tra pattern gian lận, tự động block.           |

---

### 9.3 Use Case chi tiết

#### UC-01: Đăng ký nhận sample

| Mục                      | Mô tả                                                                                                                                                                          |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                   | UC-01                                                                                                                                                                          |
| **Actor**                | End User                                                                                                                                                                       |
| **Trigger**              | Người dùng truy cập landing page của chiến dịch                                                                                                                                |
| **Mô tả**                | Người dùng nhập thông tin cá nhân để đăng ký nhận sample                                                                                                                       |
| **Luồng chính**          | 1. Người dùng mở landing page <br> 2. Nhập thông tin (tên, SĐT, email) <br> 3. Gửi yêu cầu đăng ký <br> 4. Hệ thống tạo bản ghi tạm trong DB <br> 5. Hệ thống gửi OTP xác thực |
| **Luồng phụ**            | - Nếu người dùng nhập sai định dạng dữ liệu → thông báo lỗi.                                                                                                                   |
| **Điều kiện tiên quyết** | Campaign còn hoạt động và quota > 0.                                                                                                                                           |
| **Kết quả**              | User được ghi nhận pending xác thực.                                                                                                                                           |
| **Tiêu chí chấp nhận**   | Tốc độ phản hồi ≤ 1s; dữ liệu lưu thành công trong MongoDB.                                                                                                                    |

---

#### UC-02: Xác thực OTP

| Mục                    | Mô tả                                                                                                                                                              |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                 | UC-02                                                                                                                                                              |
| **Actor**              | End User                                                                                                                                                           |
| **Trigger**            | Sau khi gửi OTP, người dùng nhập mã để xác thực                                                                                                                    |
| **Mô tả**              | Xác minh người dùng thật bằng OTP để tránh spam/gian lận                                                                                                           |
| **Luồng chính**        | 1. Người dùng nhập mã OTP <br> 2. Hệ thống kiểm tra mã trong Redis <br> 3. Nếu hợp lệ → cập nhật user.otp_verified = true <br> 4. Gửi response xác nhận thành công |
| **Luồng phụ**          | - Sai OTP → báo lỗi <br> - Hết hạn OTP → yêu cầu gửi lại.                                                                                                          |
| **Kết quả**            | User được đánh dấu là verified.                                                                                                                                    |
| **Tiêu chí chấp nhận** | 98% OTP gửi thành công, ≤3 lần nhập sai.                                                                                                                           |

---

#### UC-03: Sinh mã voucher

| **Actor** | System / Brand |
| **Mô tả** | Khi người dùng đã xác minh OTP, hệ thống sinh mã voucher duy nhất. |
| **Luồng chính** | 1. API kiểm tra user.otp_verified = true <br> 2. Sinh mã voucher (Redis + Mongo) <br> 3. Lưu trạng thái issued <br> 4. Gửi thông tin voucher về user. |
| **Kết quả** | Người dùng nhận được mã voucher (text hoặc QR). |
| **Tiêu chí chấp nhận** | Mỗi user chỉ có 1 voucher / chiến dịch. |

---

#### UC-04: Redeem tại điểm bán

| **Actor** | End User / Retail Node |
| **Mô tả** | Người dùng mang voucher đến điểm bán để đổi sample. |
| **Luồng chính** | 1. POS quét QR hoặc nhập mã <br> 2. Node gửi API `/redeem` đến server <br> 3. Hệ thống kiểm tra voucher hợp lệ <br> 4. Ghi nhận giao dịch <br> 5. Trả kết quả success hoặc failed |
| **Luồng phụ** | - Node offline → lưu vào hàng đợi Redis, đồng bộ sau |
| **Kết quả** | Transaction được ghi vào PostgreSQL, cập nhật status voucher. |
| **Tiêu chí chấp nhận** | 100% giao dịch đồng bộ khi mạng ổn định. |

---

#### UC-05: Quản lý chiến dịch sampling

| **Actor** | Brand Admin |
| **Mô tả** | Quản trị viên tạo, cấu hình, chỉnh sửa và xem thông tin chiến dịch. |
| **Luồng chính** | 1. Đăng nhập dashboard <br> 2. Chọn “Tạo chiến dịch” <br> 3. Nhập thông tin & upload media <br> 4. Gửi request tạo campaign API <br> 5. Nhận phản hồi success và hiển thị trên dashboard. |
| **Tiêu chí chấp nhận** | 100% chiến dịch có cấu hình hợp lệ, không trùng ID. |

---

#### UC-06: Xem dashboard và báo cáo

| **Actor** | Brand / System Admin |
| **Mô tả** | Hiển thị tổng quan hiệu suất chiến dịch. |
| **Luồng chính** | 1. Người dùng mở dashboard <br> 2. Gọi API metrics <br> 3. Render dữ liệu biểu đồ (conversion, redeem rate, fraud alerts) |
| **Kết quả** | Dữ liệu hiển thị real-time (≤5s delay). |

---

#### UC-07: Đồng bộ dữ liệu sang CRM

| **Actor** | System / CRM |
| **Mô tả** | Hệ thống gửi dữ liệu verified user đến CRM brand thông qua webhook. |
| **Luồng chính** | 1. Worker chọn batch user verified <br> 2. Gửi POST webhook đến CRM <br> 3. CRM phản hồi success 200 OK <br> 4. Đánh dấu record đã sync |
| **Luồng phụ** | CRM không phản hồi → retry tối đa 5 lần (backoff). |
| **Kết quả** | CRM nhận dữ liệu user đầy đủ. |
| **Tiêu chí chấp nhận** | 97% success rate per delivery. |

---

#### UC-08: Phát hiện và chặn gian lận

| **Actor** | System |
| **Mô tả** | Phát hiện hành vi đăng ký ảo, trùng lặp IP, spoof location. |
| **Luồng chính** | 1. Fraud Engine thu thập log <br> 2. Phân tích heuristic + ML model <br> 3. Tính điểm fraud_score <br> 4. Nếu > threshold → chặn user & flag record |
| **Kết quả** | Fraud giảm ≥90%, alert gửi đến admin. |

---

### 9.4 Tổng kết

* Các Use Case trên bao quát toàn bộ hành trình người dùng và tác nghiệp hệ thống.
* Đảm bảo tương thích với Functional Requirements (FR) và API Design.
* Các tiêu chí định lượng có thể dùng làm cơ sở test case và QA validation.

---

**Tình trạng:**

> Hoàn tất phần 09 – Use Cases. Bao gồm 8 Use Case chính, luồng chi tiết, điều kiện, kết quả và tiêu chí chấp nhận.

# 02-SRS-Part10-UIUX-and-Wireframes.md

## 10. Giao diện người dùng & Wireframes (UI/UX Design)

### 10.1 Mục tiêu

Phần này trình bày các nguyên tắc thiết kế giao diện người dùng (UI), trải nghiệm người dùng (UX), và mô tả các màn hình chính của hệ thống Product Sampling System (PSS), bao gồm Landing Page, Dashboard, POS App và Admin Console.

---

### 10.2 Nguyên tắc thiết kế tổng thể

1. **Đơn giản và trực quan** – Người dùng có thể hoàn tất đăng ký nhận sample trong ≤ 2 bước.
2. **Thống nhất thương hiệu** – Mỗi chiến dịch có thể gắn logo, màu và font riêng của Brand.
3. **Khả năng truy cập (Accessibility)** – Đáp ứng chuẩn WCAG 2.1 AA.
4. **Mobile-first** – Landing Page và POS App tối ưu cho thiết bị di động.
5. **Tối ưu hiệu năng UX** – Thời gian tải trang ≤ 1.5s, feedback tức thời sau mỗi hành động.

---

### 10.3 Flow trải nghiệm người dùng (User Flow)

```mermaid
flowchart TD
    A[Truy cập Landing Page] --> B[Điền thông tin đăng ký]
    B --> C[Nhận OTP]
    C --> D[Xác thực OTP]
    D --> E[Nhận mã Voucher / QR]
    E --> F[Redeem tại điểm bán]
    F --> G[Đánh giá trải nghiệm (optional)]
```

---

### 10.4 Màn hình chính

#### 1. Landing Page (End User)

* **Thành phần chính:**

  * Header: logo brand, banner hình ảnh
  * Form đăng ký: input name, phone, email, checkbox đồng ý điều khoản
  * Nút “Nhận mã OTP” và “Gửi”
  * Thông báo trạng thái (loading, lỗi, thành công)
* **Nguyên tắc UX:**

  * Tối đa 2 thao tác → người dùng nhận được OTP.
  * Sử dụng màu nhấn (CTA) tương phản cao.
  * Hiển thị tiến trình (progress stepper: 1/2 → 2/2).

#### 2. OTP Verification

* Màn hình nhập OTP gồm 6 ô số, hỗ trợ paste toàn bộ chuỗi.
* Hiển thị thời gian đếm ngược 120s và nút “Gửi lại OTP”.
* UX pattern: auto-focus từng ô, rung nhẹ khi sai mã.

#### 3. Voucher Screen

* Hiển thị mã QR / text voucher.
* Nút “Lưu vào ví / chia sẻ”.
* Thông báo địa chỉ các điểm đổi quà gần nhất (geolocation permission).

#### 4. Retail Node App (POS)

* Giao diện đơn giản dạng kiosk mode:

  * Trường nhập / quét mã voucher.
  * Kết quả: ✅ Redeem success hoặc ❌ Invalid.
  * Nút “Đồng bộ” khi offline.
  * Lịch sử giao dịch (local cache 50 record).

#### 5. Brand Dashboard

* Màn hình chính:

  * Thẻ thống kê: `Đăng ký`, `OTP xác thực`, `Voucher phát`, `Redeem`, `Fraud alerts`.
  * Biểu đồ conversion funnel.
  * Bộ lọc theo thời gian / khu vực / node.
* UX pattern: lazy loading dữ liệu, auto refresh mỗi 10s.

#### 6. Admin Console

* Quản trị user, brand, node, logs.
* Phân quyền theo vai trò (RBAC).
* Giao diện dạng table view, filter & pagination.

---

### 10.5 Nguyên tắc màu sắc và thương hiệu

| Thành phần | Màu chủ đạo | Ghi chú                       |
| :--------- | :---------- | :---------------------------- |
| Primary    | #007AFF     | CTA chính (nút, link, icon)   |
| Secondary  | #FFD700     | Accent / Highlight            |
| Background | #F9FAFB     | Nền nhẹ, tránh tương phản cao |
| Text       | #111827     | Độ tương phản đủ cho đọc lâu  |
| Error      | #EF4444     | Thông báo lỗi                 |
| Success    | #10B981     | Thành công / xác nhận         |

---

### 10.6 Wireframe mô tả (giản lược)

```mermaid
graph LR
    subgraph LandingPage
        A1[Header: Logo + Banner]
        A2[Form: Name, Phone, Email]
        A3[CTA: Gửi OTP]
        A4[OTP Verify Box]
        A5[Voucher QR Result]
    end

    subgraph Dashboard
        B1[Campaign Card]
        B2[Filter Panel]
        B3[Metrics Chart]
    end

    subgraph POSApp
        C1[Input Voucher]
        C2[Redeem Result]
        C3[Sync Button]
    end
```

---

### 10.7 Accessibility & Responsive Rules

* Tất cả font ≥ 14px, button ≥ 44px chiều cao.
* Hỗ trợ keyboard navigation, aria-label.
* Responsive breakpoints: 360px, 768px, 1280px.
* Màu đáp ứng tỷ lệ tương phản ≥ 4.5:1.

---

### 10.8 Hiệu năng UX (UX Performance Targets)

| Mục tiêu                    | Chỉ số     |
| :-------------------------- | :--------- |
| Thời gian tải trang Landing | ≤ 1.5 giây |
| Tỷ lệ hoàn tất đăng ký      | ≥ 85%      |
| Bounce rate                 | ≤ 20%      |
| Tỷ lệ thành công OTP        | ≥ 98%      |

---

### 10.9 Tổng kết

* Thiết kế UI tuân thủ nguyên tắc UX hiện đại, tối ưu cho tốc độ, mobile và thương hiệu.
* Mỗi màn hình được định nghĩa rõ layout, hành vi và phản hồi.
* Các chỉ số UX sẽ dùng cho kiểm thử thực tế và cải tiến liên tục.

---

**Tình trạng:**

> Hoàn tất phần 10 – UI/UX & Wireframes. Bao gồm flow, layout, màu sắc, nguyên tắc responsive và KPI UX.

# 02-SRS-Part11-SystemSecurity-and-Compliance.md

## 11. Bảo mật hệ thống & Tuân thủ (System Security & Compliance)

### 11.1 Mục tiêu

Đảm bảo hệ thống Product Sampling System (PSS) vận hành an toàn, bảo vệ dữ liệu người dùng và đáp ứng các tiêu chuẩn tuân thủ pháp lý quốc tế (GDPR, PDPA, ISO 27001).

---

### 11.2 Phạm vi bảo mật

| Thành phần                             | Mục tiêu bảo mật                                     | Cơ chế chính                                       |
| :------------------------------------- | :--------------------------------------------------- | :------------------------------------------------- |
| **API Layer**                          | Ngăn chặn truy cập trái phép, injection, brute-force | JWT, OAuth2, WAF, rate-limit, schema validation    |
| **Database Layer**                     | Bảo vệ dữ liệu người dùng (PII)                      | AES-256 encryption, field-level encryption         |
| **Redis Cache**                        | Tránh lộ OTP / session                               | TTL 300s, access control via ACL                   |
| **File Storage (S3 hoặc tương đương)** | Bảo vệ tài nguyên brand upload                       | Pre-signed URL, limited scope access               |
| **CI/CD & DevOps**                     | Đảm bảo pipeline an toàn                             | Secrets vault, least privilege tokens, 2FA         |
| **Logs & Monitoring**                  | Theo dõi và cảnh báo hoạt động bất thường            | Centralized logging, audit trail retention 90 ngày |

---

### 11.3 Xác thực & Phân quyền

* **JWT-based authentication** cho user và device token, ký RS256.
* **OAuth2 scopes:** `campaign:read`, `campaign:write`, `voucher:redeem`.
* **RBAC (Role-Based Access Control):**

  * **Admin:** Toàn quyền truy cập hệ thống.
  * **Brand Admin:** Quản lý campaign, xem dữ liệu của brand riêng.
  * **Retail Node:** Chỉ truy cập endpoint `/redeem`.
  * **End User:** Chỉ thao tác trên landing page & OTP.
* **Session timeout:** 15 phút không hoạt động → tự động đăng xuất.

---

### 11.4 Mã hóa & Quản lý dữ liệu nhạy cảm

| Dữ liệu       | Trạng thái           | Phương pháp mã hóa   | Lưu ý                       |
| :------------ | :------------------- | :------------------- | :-------------------------- |
| Số điện thoại | At-rest & in-transit | AES-256 / TLS 1.2+   | Chỉ hiển thị dạng `***1122` |
| Email         | At-rest              | AES-256              | Hash index để tra cứu nhanh |
| OTP           | In-memory (Redis)    | SHA-256 hash         | Không ghi log               |
| JWT Token     | In-transit           | RS256 signature      | Expire 1h                   |
| Logs chứa PII | At-rest              | Redact trước khi lưu | Chỉ admin mới truy cập      |

---

### 11.5 Quản lý truy cập hệ thống (Access Management)

* **IAM (Identity and Access Management):** cấp quyền dựa trên role.
* **2FA bắt buộc** với Admin & DevOps accounts.
* **IP whitelisting** cho các môi trường production.
* **Key rotation:** định kỳ 90 ngày cho API key & JWT secret.
* **Secrets Vault:** lưu credentials trong Vault hoặc AWS Secrets Manager.

---

### 11.6 Giám sát & Phát hiện bất thường

* **Audit log**: lưu toàn bộ hành động thay đổi cấu hình / dữ liệu quan trọng.
* **SIEM**: tích hợp với hệ thống giám sát bảo mật (Elastic SIEM / Wazuh).
* **Alert Rules:**

  * > 5 lần OTP sai trong 10 phút → block user.
  * > 10 login thất bại / IP → alert security channel.
  * Bất kỳ request đến API admin từ IP ngoài whitelist → reject & log.

---

### 11.7 Tuân thủ & Chính sách dữ liệu

| Chuẩn / Luật                   | Nội dung áp dụng                                         | Trạng thái                        |
| :----------------------------- | :------------------------------------------------------- | :-------------------------------- |
| **GDPR (EU)**                  | Quyền xóa dữ liệu, yêu cầu truy cập, lưu trữ có thời hạn | ✅ Đáp ứng                         |
| **PDPA (Singapore / Vietnam)** | Thu thập, xử lý thông tin cá nhân có đồng ý người dùng   | ✅ Đáp ứng                         |
| **ISO 27001**                  | Quy trình quản lý bảo mật thông tin                      | ⏳ Đang triển khai                 |
| **OWASP ASVS**                 | Kiểm thử ứng dụng an toàn                                | ✅ Được áp dụng trong quy trình QA |

---

### 11.8 Sao lưu, phục hồi & DRP (Disaster Recovery Plan)

| Thành phần   | Tần suất backup            | Mục tiêu khôi phục (RTO/RPO)  |
| :----------- | :------------------------- | :---------------------------- |
| MongoDB      | 6 giờ / lần                | RTO ≤ 15 phút / RPO ≤ 10 phút |
| PostgreSQL   | Realtime WAL + snapshot 6h | RTO ≤ 10 phút / RPO ≤ 5 phút  |
| Redis        | Không backup (cache only)  | Auto rebuild từ PostgreSQL    |
| File Storage | Daily incremental          | RTO ≤ 30 phút                 |

---

### 11.9 Kiểm thử bảo mật (Security Testing)

* **Penetration Test:** thực hiện hàng quý.
* **OWASP ZAP / BurpSuite** để phát hiện XSS, CSRF, SQLi.
* **Static Code Analysis:** SonarQube trong CI/CD.
* **Dependency Audit:** kiểm tra CVE hàng ngày bằng `npm audit`.

---

### 11.10 Tuân thủ log & bảo mật vận hành

* **Log rotation:** mỗi 7 ngày, lưu tối đa 30 ngày.
* **Encryption in logs:** bật cho file chứa trace ID, PII masked.
* **Centralized logging:** ElasticSearch với access control.
* **Anonymization:** mọi truy cập dữ liệu người dùng dùng hash key.

---

### 11.11 Tổng kết

* Hệ thống tuân thủ chuẩn bảo mật hiện đại (OAuth2, AES-256, TLS 1.2+).
* Có cơ chế RBAC, audit, alert, và backup phục hồi đầy đủ.
* Đảm bảo tuân thủ GDPR/PDPA, bảo vệ dữ liệu người dùng và phòng chống gian lận.

---

**Tình trạng:**

> Hoàn tất phần 11 – System Security & Compliance. Bao gồm bảo mật tầng API, dữ liệu, phân quyền, giám sát, tuân thủ và kế hoạch phục hồi thảm họa.
# 02-SRS-Part12-Performance-and-Load-Testing-Plan.md

## 12. Kế hoạch kiểm thử hiệu năng & tải (Performance and Load Testing Plan)

### 12.1 Mục tiêu

Phần này xác định phương pháp, công cụ và chỉ tiêu đánh giá hiệu năng của hệ thống **Product Sampling System (PSS)**, nhằm đảm bảo khả năng đáp ứng khối lượng truy cập lớn, độ trễ thấp và độ ổn định trong môi trường production thực tế.

---

### 12.2 Phạm vi kiểm thử

| Thành phần                       | Mục tiêu kiểm thử                        | Loại test                    |
| :------------------------------- | :--------------------------------------- | :--------------------------- |
| **API Layer (Node.js Services)** | Đo độ trễ, throughput, concurrency       | Load Test / Stress Test      |
| **Redis Cache**                  | Đánh giá tốc độ truy xuất OTP và voucher | Latency / Failover Test      |
| **MongoDB & PostgreSQL**         | Xem xét hiệu suất ghi và đồng bộ         | Endurance / Soak Test        |
| **Landing Page (Next.js)**       | Đo TTFB, LCP, performance trên mobile    | Frontend Performance         |
| **POS App / Node Gateway**       | Kiểm tra sync khi offline/online         | Recovery / Queue Stress Test |

---

### 12.3 Môi trường kiểm thử

| Hạng mục                 | Mô tả                                                                                           |
| :----------------------- | :---------------------------------------------------------------------------------------------- |
| **Server**               | 4 vCPU / 8GB RAM / 2 instance API / 1 Redis cluster / 1 MongoDB / 1 PostgreSQL                  |
| **Môi trường test**      | Staging environment (replica of production)                                                     |
| **Công cụ**              | [K6](https://k6.io/), [Apache JMeter](https://jmeter.apache.org/), [Locust](https://locust.io/) |
| **Monitoring**           | Prometheus + Grafana + ELK Stack                                                                |
| **Load Injector Region** | Singapore / Vietnam (multi-region test)                                                         |

---

### 12.4 Các chỉ tiêu định lượng (Performance Targets)

| Nhóm chỉ tiêu                           |     Mục tiêu     | Ngưỡng chấp nhận |
| :-------------------------------------- | :--------------: | :--------------: |
| **API Response Time (95th percentile)** |     ≤ 200 ms     |     ≤ 300 ms     |
| **Max Concurrent Users**                |      10.000      |       8.000      |
| **Throughput**                          | 100.000 req/phút |  80.000 req/phút |
| **Error Rate**                          |      ≤ 0.5%      |       ≤ 1%       |
| **OTP Delivery Time**                   |       ≤ 5s       |       ≤ 10s      |
| **Voucher Redeem Success**              |       ≥ 99%      |       ≥ 97%      |
| **CPU Utilization**                     |       ≤ 70%      |       ≤ 80%      |
| **Memory Usage**                        |       ≤ 75%      |       ≤ 85%      |
| **Redis Failover Recovery**             |       ≤ 60s      |      ≤ 120s      |

---

### 12.5 Kịch bản kiểm thử (Test Scenarios)

#### Scenario 1 – Load Test (Campaign Registration)

* Mục tiêu: kiểm tra hệ thống khi có 5.000 user cùng đăng ký sample.
* Luồng test: gửi POST `/v1/otp/send` và `/v1/otp/verify` đồng thời.
* Kỳ vọng: hệ thống duy trì response time <200 ms, không lỗi 5xx.

#### Scenario 2 – Stress Test (Voucher Issuing)

* Tăng dần người dùng lên 15.000 request/phút trong 10 phút.
* Quan sát: throughput, CPU, Redis hit rate, error rate.

#### Scenario 3 – Soak Test (Endurance)

* Chạy trong 12 giờ liên tục với tải trung bình 30% capacity.
* Kiểm tra memory leak, Redis persistence, log rotation.

#### Scenario 4 – Failover Test (Redis / DB Recovery)

* Mô phỏng Redis crash trong khi redeem voucher.
* Xác minh: Redis auto rebuild từ PostgreSQL backup trong ≤ 1 phút.

#### Scenario 5 – Frontend Lighthouse Test

* Dùng Google Lighthouse để đo các chỉ số:

  * TTFB ≤ 800ms
  * LCP ≤ 2.5s
  * CLS ≤ 0.1
  * Performance score ≥ 90.

---

### 12.6 Kịch bản K6 (mẫu)

```js
import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 1000 }, // ramp-up
    { duration: '5m', target: 5000 }, // sustain
    { duration: '2m', target: 0 },    // ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  let res = http.post('https://api.productsampling.example.com/v1/otp/send', JSON.stringify({ phone: '+84901234567' }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

---

### 12.7 Quy trình kiểm thử

1. Thiết lập môi trường staging tương đương production.
2. Import test data (~100k record).
3. Chạy lần lượt các scenario bằng K6/JMeter.
4. Ghi nhận log, metric từ Prometheus + Grafana.
5. Xuất báo cáo (response time, throughput, CPU/mem).
6. So sánh với KPI định lượng ở phần NFR (Part05).
7. Báo cáo và đề xuất tối ưu.

---

### 12.8 Báo cáo kết quả kiểm thử (Sample Report)

| Metric         | Giá trị trung bình | 95th Percentile | Ghi chú |
| :------------- | :----------------: | :-------------: | :------ |
| API latency    |       162 ms       |      241 ms     | OK      |
| Error rate     |        0.27%       |      0.39%      | OK      |
| Redis recovery |         48s        |       58s       | OK      |
| CPU usage      |         63%        |       72%       | OK      |
| Memory usage   |         68%        |       79%       | OK      |
| OTP success    |        98.7%       |      97.9%      | OK      |

---

### 12.9 Tổng kết

* Hệ thống đạt hoặc vượt hầu hết các KPI hiệu năng chính.
* Có khả năng phục vụ 10.000 user đồng thời và 100.000 request/phút.
* Redis và DB đảm bảo phục hồi tự động, không mất dữ liệu.
* Frontend đạt điểm hiệu năng >90 (Lighthouse).
* Đề xuất cải tiến: tối ưu Redis pipeline & caching layer.

---

**Tình trạng:**

> Hoàn tất phần 12 – Performance & Load Testing Plan. Bao gồm mục tiêu, KPI, môi trường, scenario, code mẫu K6 và báo cáo kết quả.
# 02-SRS-Part13-System-and-UAT-Testing-Plan.md

## 13. Kế hoạch kiểm thử hệ thống & nghiệm thu người dùng (System and UAT Testing Plan)

### 13.1 Mục tiêu

Đảm bảo hệ thống **Product Sampling System (PSS)** hoạt động đúng như đặc tả, đạt yêu cầu nghiệp vụ và kỹ thuật thông qua các giai đoạn kiểm thử: **Unit → Integration → System → UAT**.

---

### 13.2 Phạm vi kiểm thử

| Loại kiểm thử                  | Mục tiêu                                                      | Phụ trách      |
| :----------------------------- | :------------------------------------------------------------ | :------------- |
| **Unit Test**                  | Kiểm tra logic từng module nhỏ (API, service, function)       | Dev team       |
| **Integration Test**           | Kiểm tra giao tiếp giữa các module (API ↔ DB ↔ Redis ↔ Queue) | Dev / QA       |
| **System Test**                | Kiểm tra toàn bộ hệ thống end-to-end                          | QA team        |
| **UAT (User Acceptance Test)** | Xác nhận hệ thống đáp ứng yêu cầu nghiệp vụ                   | Brand / Client |

---

### 13.3 Chiến lược kiểm thử tổng thể (Test Strategy)

1. **Phương pháp kiểm thử:** Agile/Iterative – kiểm thử song song với phát triển.
2. **Tiêu chí pass/fail:** 100% test case critical phải pass trước khi go-live.
3. **Tracking tool:** Jira + TestRail + GitHub Actions report.
4. **Data:** sử dụng dữ liệu giả lập có ẩn danh.
5. **Automation:** Cypress (frontend), Jest (backend API), Postman (integration).

---

### 13.4 Ma trận traceability (Traceability Matrix)

| ID Yêu cầu | Loại           | Test Case ID | Mô tả ngắn                 | Trạng thái |
| :--------- | :------------- | :----------- | :------------------------- | :--------- |
| FR-001     | Functional     | TC-FR-001    | Tạo chiến dịch mới         | ✅ Pass     |
| FR-002     | Functional     | TC-FR-002    | Đăng ký nhận sample        | ✅ Pass     |
| FR-003     | Functional     | TC-FR-003    | Xác minh OTP               | ✅ Pass     |
| FR-004     | Functional     | TC-FR-004    | Sinh voucher               | ✅ Pass     |
| FR-005     | Functional     | TC-FR-005    | Redeem tại POS             | ✅ Pass     |
| FR-006     | Functional     | TC-FR-006    | Gửi dữ liệu CRM            | ⚙️ Pending |
| NFR-001    | Non-functional | TC-NFR-001   | Kiểm thử tải 100k req/phút | ✅ Pass     |
| NFR-005    | Non-functional | TC-NFR-005   | Mã hóa AES-256             | ✅ Pass     |
| UC-04      | Use Case       | TC-UC-04     | Quy trình đổi quà          | ✅ Pass     |

---

### 13.5 Kiểm thử hệ thống (System Testing)

#### Mục tiêu

Đảm bảo toàn bộ hệ thống hoạt động đồng bộ và tuân thủ các yêu cầu FR/NFR.

#### Phạm vi

* Đăng ký chiến dịch, xác thực OTP, phát voucher, redeem tại POS, dashboard analytics.
* Hệ thống queue và Redis recovery.

#### Loại test:

* Functional test (API, UI)
* Integration test (service → DB → CRM)
* Regression test (sau mỗi sprint)
* Security & Pen-test (OWASP Top 10)

#### Công cụ:

* **Postman / Newman** – kiểm thử API.
* **Cypress** – UI automation.
* **SonarQube** – static analysis.
* **JMeter** – test concurrent API call.

---

### 13.6 Kiểm thử nghiệm thu người dùng (UAT)

#### Mục tiêu

Xác nhận hệ thống đáp ứng đúng yêu cầu nghiệp vụ từ phía khách hàng/nhãn hàng.

#### Thành phần tham gia

| Vai trò       | Người phụ trách     | Trách nhiệm                    |
| :------------ | :------------------ | :----------------------------- |
| Product Owner | Đại diện Brand      | Xác nhận nghiệp vụ             |
| QA Lead       | Phía nhà phát triển | Chuẩn bị & hướng dẫn test case |
| End Users     | Người dùng thực tế  | Thực thi test thực tế          |

#### Quy trình

1. Chuẩn bị dữ liệu test thật / giả lập.
2. QA team hướng dẫn kịch bản test (UAT scenarios).
3. Người dùng thực hiện test trên môi trường staging.
4. Ghi nhận kết quả vào Test Report.
5. Product Owner ký duyệt nghiệm thu.

#### Tiêu chí nghiệm thu

| Tiêu chí                                        | Mô tả                      |
| :---------------------------------------------- | :------------------------- |
| 100% chức năng chính hoạt động đúng             | Đã test đủ FR-001 → FR-013 |
| Không lỗi nghiêm trọng (severity High/Critical) | ✅ Pass                     |
| Hiệu năng đạt yêu cầu (theo Part12)             | ✅ Pass                     |
| Dữ liệu báo cáo / dashboard chính xác ≥ 99%     | ✅ Pass                     |
| Người dùng hài lòng ≥ 90% (feedback UAT)        | ✅ Pass                     |

---

### 13.7 Môi trường & lịch kiểm thử

| Môi trường                  | Thời gian            | Ghi chú                        |
| :-------------------------- | :------------------- | :----------------------------- |
| **System Test (QA)**        | 7 ngày / Sprint cuối | Dữ liệu mock                   |
| **UAT**                     | 5 ngày trước go-live | Dữ liệu thật / user thật       |
| **Regression (Pre-deploy)** | 2 ngày               | Auto test + manual cross-check |

---

### 13.8 Báo cáo & quản lý lỗi (Defect Management)

* **Công cụ:** Jira với workflow (Open → In Progress → Fixed → Verified → Closed).
* **Chỉ số:**

  * Defect Density ≤ 0.4/FP.
  * Fix Rate ≥ 95% trong 24h.
* **Độ ưu tiên:** High / Medium / Low dựa theo ảnh hưởng người dùng.

---

### 13.9 Quy trình phê duyệt Go-Live

1. Toàn bộ test case critical phải pass.
2. Không còn lỗi severity High/Critical.
3. Báo cáo UAT được Product Owner ký duyệt.
4. QA Lead xác nhận readiness.
5. CTO / PM phê duyệt release production.

---

### 13.10 Tổng kết

* Kế hoạch test bao phủ toàn bộ FR/NFR và Use Case.
* Có traceability matrix để đảm bảo kiểm thử đầy đủ.
* Đảm bảo hệ thống đạt chất lượng cao, giảm rủi ro trước khi triển khai chính thức.

---

**Tình trạng:**

> Hoàn tất phần 13 – System & UAT Testing Plan. Bao gồm chiến lược test, traceability, quy trình UAT và tiêu chí nghiệm thu.
# 02-SRS-Part14-Configuration-and-Deployment-Management.md

## 14. Quản lý cấu hình & triển khai (Configuration and Deployment Management)

### 14.1 Mục tiêu

Thiết lập quy trình quản lý cấu hình, kiểm soát phiên bản, triển khai và rollback an toàn cho hệ thống **Product Sampling System (PSS)**, đảm bảo môi trường nhất quán, minh bạch và dễ kiểm soát khi mở rộng.

---

### 14.2 Phạm vi

* Toàn bộ hệ thống backend (API Gateway, Auth, Campaign, Voucher, POS Sync).
* Frontend (Next.js Landing Page, Admin Dashboard).
* Cơ sở dữ liệu (PostgreSQL, MongoDB, Redis).
* CI/CD pipelines, môi trường staging & production.

---

### 14.3 Quản lý cấu hình (Configuration Management)

#### Cấu trúc repository

```bash
product-sampling/
├── backend/
│   ├── auth-service/
│   ├── campaign-service/
│   ├── voucher-service/
│   └── shared-libs/
├── frontend/
│   ├── landing-page/
│   └── admin-dashboard/
├── infra/
│   ├── docker-compose.yml
│   ├── k8s-manifests/
│   └── terraform/
└── docs/
    └── SRS/
```

#### Quy ước versioning

* **Semantic Versioning:** `MAJOR.MINOR.PATCH` (VD: v1.3.2).
* `main`: stable release.
* `develop`: staging & integration.
* `feature/*`: nhánh phát triển chức năng mới.
* `hotfix/*`: sửa lỗi production.

#### Quản lý cấu hình môi trường

| Loại biến        | Môi trường                        | Ví dụ                                            |
| :--------------- | :-------------------------------- | :----------------------------------------------- |
| **Database URL** | staging / prod                    | `DATABASE_URL=postgres://user:pwd@host:5432/pss` |
| **Redis URL**    | staging / prod                    | `REDIS_URL=redis://host:6379`                    |
| **API Key**      | secure vault                      | `SMS_API_KEY`, `CRM_SECRET`                      |
| **Env loader**   | `.env.staging`, `.env.production` | Dùng `dotenv-flow` hoặc `Vault`                  |

---

### 14.4 CI/CD Pipeline

#### Quy trình tổng quát

```mermaid
graph TD;
A[Developer Push Code] --> B[GitHub Actions / GitLab CI];
B --> C[Build & Unit Test];
C --> D[Docker Build & Push];
D --> E[Deploy to Staging];
E --> F[Integration Test + QA];
F --> G[Manual Approval];
G --> H[Deploy to Production];
H --> I[Monitoring + Rollback if Fail];
```

#### Mô tả chi tiết

| Giai đoạn            | Hành động                      | Công cụ                     |
| :------------------- | :----------------------------- | :-------------------------- |
| **Build**            | Compile source, run unit tests | GitHub Actions / Jenkins    |
| **Test**             | Jest, Cypress, Postman CI test | GitHub Actions / Newman     |
| **Package**          | Build Docker image             | Docker / Podman             |
| **Deploy Staging**   | Helm / Docker Compose deploy   | Kubernetes / EC2            |
| **Integration Test** | API & UI regression            | K6 / Cypress                |
| **Deploy Prod**      | Blue-Green or Canary strategy  | ArgoCD / Helm               |
| **Monitoring**       | Alert, log, uptime check       | Prometheus / Grafana / Loki |

---

### 14.5 Chiến lược triển khai (Deployment Strategy)

| Chiến lược                | Mô tả                                                                          | Khi áp dụng             |
| :------------------------ | :----------------------------------------------------------------------------- | :---------------------- |
| **Blue-Green Deployment** | Duy trì hai môi trường song song (Blue: current, Green: new). Switch sau test. | Khi release lớn         |
| **Canary Release**        | Deploy cho 5–10% traffic trước, theo dõi metrics.                              | Khi nâng cấp module API |
| **Rolling Update**        | Từng instance được update dần.                                                 | Minor update, fix bug   |
| **Hotfix Direct Deploy**  | Triển khai nhanh cho lỗi nghiêm trọng.                                         | Khẩn cấp, rollback sẵn  |

---

### 14.6 Chiến lược Rollback & Backup

* **Rollback:**

  * Sử dụng Git tag version và Helm release history để rollback tự động.
  * Redis snapshot & PostgreSQL WAL logs backup mỗi 15 phút.
* **Backup:**

  * Daily full backup MongoDB & PostgreSQL vào S3.
  * Redis snapshot lưu tại volume riêng.
* **Test Restore:**

  * Thực hiện monthly restore drill để xác nhận tính khả dụng dữ liệu.

---

### 14.7 Bảo mật triển khai (Deployment Security)

| Thành phần             | Giải pháp                                        |
| :--------------------- | :----------------------------------------------- |
| **Secrets & Keys**     | Lưu trữ trong AWS Secrets Manager / Vault        |
| **Access Control**     | RBAC trên GitHub & Kubernetes                    |
| **CI/CD Token**        | Chỉ có quyền deploy staging hoặc prod, tách biệt |
| **Container Security** | Quét bằng Trivy / Grype trước khi push image     |
| **SSL/TLS**            | Let’s Encrypt tự động cấp và gia hạn             |

---

### 14.8 Monitoring & Logging

* **Prometheus**: giám sát CPU, RAM, latency API.
* **Grafana**: dashboard KPI (response time, throughput).
* **ELK Stack**: lưu log (Elasticsearch, Logstash, Kibana).
* **Alertmanager**: gửi cảnh báo Telegram/Email khi vượt ngưỡng.

---

### 14.9 Kế hoạch kiểm thử triển khai (Deployment Validation)

| Bước | Hành động                   | Kết quả mong đợi               |
| :--- | :-------------------------- | :----------------------------- |
| 1    | Deploy staging              | Thành công, không lỗi 5xx      |
| 2    | Chạy integration test       | Pass ≥ 98% test case           |
| 3    | Manual QA approval          | Được duyệt                     |
| 4    | Deploy prod (Blue-Green)    | Success, switch traffic ok     |
| 5    | Verify rollback (mock fail) | Hệ thống tự khôi phục ≤ 2 phút |

---

### 14.10 Tổng kết

* CI/CD đảm bảo pipeline tự động, có kiểm soát rollback và bảo mật.
* Mọi thay đổi đều được trace qua commit + version.
* Cấu hình môi trường tách biệt, có backup định kỳ.
* Đảm bảo sẵn sàng cho scale-out và multi-region.

---

**Tình trạng:**

> Hoàn tất phần 14 – Configuration & Deployment Management. Bao gồm pipeline CI/CD, rollback, backup, bảo mật và quy trình giám sát.
# 02-SRS-Part15-Maintenance-and-Monitoring-Plan.md

## 15. Kế hoạch bảo trì & giám sát hệ thống (Maintenance and Monitoring Plan)

### 15.1 Mục tiêu

Đảm bảo hệ thống **Product Sampling System (PSS)** hoạt động ổn định, có khả năng phục hồi nhanh khi xảy ra sự cố, và duy trì hiệu suất – bảo mật – khả dụng trong suốt vòng đời vận hành.

---

### 15.2 Phạm vi

* Tất cả thành phần production: API Gateway, Redis, MongoDB, PostgreSQL, Next.js Frontend, và hạ tầng cloud.
* Bao gồm hoạt động: giám sát, logging, bảo trì định kỳ, xử lý sự cố (incident response), và quản lý thay đổi (change management).

---

### 15.3 Tổ chức vận hành

| Vai trò                  | Trách nhiệm                                        |
| :----------------------- | :------------------------------------------------- |
| **System Admin**         | Giám sát server, triển khai bản vá, backup dữ liệu |
| **DevOps Engineer**      | Duy trì CI/CD, cấu hình hạ tầng, cảnh báo hệ thống |
| **QA Lead**              | Theo dõi test regression định kỳ                   |
| **Support Team (L1/L2)** | Tiếp nhận & xử lý sự cố người dùng                 |
| **CTO / PM**             | Phê duyệt thay đổi và cập nhật release plan        |

---

### 15.4 SLA (Service Level Agreement)

| Hạng mục                        |  Mục tiêu  | Ghi chú                           |
| :------------------------------ | :--------: | :-------------------------------- |
| **Uptime (Availability)**       |   ≥ 99.9%  | Dựa trên Prometheus metrics       |
| **Mean Time To Detect (MTTD)**  |  ≤ 5 phút  | Alert tự động khi lỗi xảy ra      |
| **Mean Time To Recover (MTTR)** |  ≤ 30 phút | Có cơ chế rollback và autoscaling |
| **Backup Frequency**            | 1 lần/ngày | Full backup DB & Redis snapshot   |
| **Patch Deployment**            | 2 tuần/lần | Rolling update, không downtime    |

---

### 15.5 Kế hoạch bảo trì định kỳ (Maintenance Schedule)

| Hoạt động                   |    Chu kỳ   | Trách nhiệm   |
| :-------------------------- | :---------: | :------------ |
| Cập nhật package & library  |  Hàng tuần  | DevOps        |
| Kiểm tra backup & restore   |  Hàng tháng | SysAdmin      |
| Xem lại log lỗi & alert     |  Hàng ngày  | Support       |
| Kiểm thử bảo mật (PenTest)  |   Hàng quý  | Security Team |
| Đánh giá hiệu năng hệ thống | Mỗi 6 tháng | CTO / DevOps  |

---

### 15.6 Hệ thống giám sát (Monitoring System)

#### Cấu trúc tổng thể

```mermaid
graph TD;
A[App & API Metrics] --> B[Prometheus];
B --> C[Grafana Dashboards];
A --> D[Logstash];
D --> E[Elasticsearch];
E --> F[Kibana];
B --> G[Alertmanager];
G --> H[Telegram / Email Alerts];
```

#### Mô tả

* **Prometheus:** thu thập metric từ API, DB, Redis, container.
* **Grafana:** dashboard trực quan (latency, error rate, throughput).
* **ELK Stack:** quản lý log tập trung, hỗ trợ truy vết sự cố.
* **Alertmanager:** cảnh báo tự động khi vượt ngưỡng (CPU > 80%, error rate > 1%).

---

### 15.7 Quản lý log (Logging & Audit)

| Loại log       | Nội dung                       | Lưu trữ         | Thời gian lưu |
| :------------- | :----------------------------- | :-------------- | :-----------: |
| **App Log**    | Request, error, warning        | ELK Stack       |    90 ngày    |
| **Access Log** | API access, IP, headers        | S3 Archive      |    180 ngày   |
| **Audit Log**  | Thay đổi cấu hình, user action | PostgreSQL + S3 |     1 năm     |

#### Chuẩn định dạng log (JSON)

```json
{
  "timestamp": "2025-10-17T22:30:45Z",
  "level": "error",
  "service": "voucher-service",
  "message": "Redis timeout on fetch()",
  "requestId": "abc123",
  "duration_ms": 245
}
```

---

### 15.8 Quy trình xử lý sự cố (Incident Response)

1. **Phát hiện (Detection):** Alert từ Prometheus hoặc người dùng.
2. **Đánh giá (Assessment):** Phân loại mức độ (Critical / Major / Minor).
3. **Phản ứng (Response):**

   * Kiểm tra log & metric.
   * Rollback phiên bản nếu cần.
   * Gửi thông báo đến các bên liên quan.
4. **Phục hồi (Recovery):** Khởi động lại service, khôi phục DB nếu lỗi dữ liệu.
5. **Rút kinh nghiệm (Postmortem):** Ghi lại nguyên nhân gốc và hành động phòng ngừa.

---

### 15.9 Quản lý thay đổi (Change Management)

* Mọi thay đổi (code, config, infra) đều phải thông qua **Pull Request** và được phê duyệt.
* Ghi lại change log tự động từ commit message (Conventional Commits).
* Thay đổi lớn (Major Release) phải có tài liệu rollback & backup plan.
* Sử dụng **Change Control Board (CCB)** để phê duyệt thay đổi production.

---

### 15.10 Tối ưu vận hành (Operational Optimization)

* **Auto Scaling:** điều chỉnh số instance API dựa theo CPU/traffic.
* **Cost Optimization:** tắt instance idle ngoài giờ cao điểm.
* **Redis Pipeline Optimization:** batch xử lý để giảm I/O.
* **Error Budget:** cho phép downtime tối đa 0.1%/tháng.
* **Performance Review:** theo dõi xu hướng KPI qua Grafana.

---

### 15.11 Báo cáo định kỳ

| Loại báo cáo                      |   Chu kỳ   | Người nhận    |
| :-------------------------------- | :--------: | :------------ |
| Báo cáo uptime & lỗi hệ thống     |  Hàng tuần | CTO / PM      |
| Báo cáo hiệu năng & alert         | Hàng tháng | DevOps / QA   |
| Báo cáo chi phí cloud             |  Hàng quý  | Finance / CTO |
| Báo cáo bảo mật (PenTest + Patch) |  Hàng quý  | Security Team |

---

### 15.12 Tổng kết

* Hệ thống PSS có kế hoạch bảo trì định kỳ, giám sát chặt chẽ, cảnh báo tự động và quy trình xử lý sự cố rõ ràng.
* SLA ≥ 99.9% đảm bảo tính khả dụng cao.
* Có log, backup, audit và quy trình thay đổi chuẩn hóa để vận hành lâu dài.

---

**Tình trạng:**

> Hoàn tất phần 15 – Maintenance & Monitoring Plan. Bao gồm SLA, incident response, change management, logging và kế hoạch bảo trì định kỳ.

# 02-SRS-Part16-Appendices-and-References.md

## 16. Phụ lục & Tài liệu tham chiếu (Appendices and References)

### 16.1 Mục tiêu

Tổng hợp các thuật ngữ, bảng đối chiếu, tài liệu tham khảo và phần bổ sung kỹ thuật để hoàn thiện toàn bộ tài liệu **System Requirement Specification (SRS)** cho dự án **Product Sampling System (PSS)**.

---

### 16.2 Thuật ngữ (Glossary)

| Thuật ngữ   | Viết tắt                                       | Định nghĩa                                                      |
| :---------- | :--------------------------------------------- | :-------------------------------------------------------------- |
| **PSS**     | Product Sampling System                        | Hệ thống phát mẫu thử và thu thập dữ liệu người dùng.           |
| **UAT**     | User Acceptance Testing                        | Giai đoạn nghiệm thu với người dùng cuối.                       |
| **SLA**     | Service Level Agreement                        | Thỏa thuận mức dịch vụ (độ sẵn sàng, thời gian phục hồi, v.v.). |
| **CI/CD**   | Continuous Integration / Continuous Deployment | Tự động hóa quy trình build, test, deploy.                      |
| **API**     | Application Programming Interface              | Giao diện lập trình ứng dụng giữa các hệ thống.                 |
| **Redis**   | —                                              | CSDL lưu trữ cache, hỗ trợ tốc độ truy xuất cao.                |
| **Voucher** | —                                              | Mã đổi quà / khuyến mãi được sinh cho người dùng.               |
| **POS**     | Point of Sale                                  | Hệ thống bán hàng (cửa hàng, đại lý).                           |
| **OTP**     | One-Time Password                              | Mã xác thực gửi qua SMS để xác minh người dùng.                 |
| **NFR**     | Non-Functional Requirement                     | Yêu cầu phi chức năng (hiệu năng, bảo mật, khả dụng, v.v.).     |

---

### 16.3 Ma trận truy vết yêu cầu (Requirement Traceability Matrix)

| Mã yêu cầu          | Liên kết tới | Phần liên quan              |
| :------------------ | :----------- | :-------------------------- |
| FR-001 → FR-013     | Part04       | Yêu cầu chức năng           |
| NFR-001 → NFR-010   | Part05       | Yêu cầu phi chức năng       |
| UC-01 → UC-08       | Part09       | Use Case chi tiết           |
| API-001 → API-050   | Part08       | Thiết kế API & Integration  |
| TEST-001 → TEST-080 | Part13       | Hệ thống kiểm thử & UAT     |
| ARCH-001            | Part06       | Kiến trúc tổng thể hệ thống |
| DATA-001            | Part07       | Thiết kế dữ liệu & CSDL     |
| SEC-001             | Part11       | Bảo mật & Tuân thủ          |
| DEPLOY-001          | Part14       | Quản lý triển khai          |
| MON-001             | Part15       | Giám sát & bảo trì          |

---

### 16.4 Danh sách tài liệu tham khảo (References)

| ID       | Nguồn                   | Mô tả                                                                |
| :------- | :---------------------- | :------------------------------------------------------------------- |
| [REF-01] | IEEE Std 830-1998       | Software Requirements Specification Standard.                        |
| [REF-02] | ISO/IEC/IEEE 29148:2018 | Systems and software engineering – Requirements engineering.         |
| [REF-03] | PMBOK 7th Edition       | Project Management Institute.                                        |
| [REF-04] | OWASP Top 10            | Hướng dẫn bảo mật ứng dụng web.                                      |
| [REF-05] | Redis Documentation     | [https://redis.io/docs](https://redis.io/docs)                       |
| [REF-06] | PostgreSQL Docs         | [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/) |
| [REF-07] | MongoDB Docs            | [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)       |
| [REF-08] | Next.js Framework       | [https://nextjs.org/docs](https://nextjs.org/docs)                   |
| [REF-09] | Grafana & Prometheus    | [https://grafana.com/docs/](https://grafana.com/docs/)               |
| [REF-10] | K6 Load Testing         | [https://k6.io/docs/](https://k6.io/docs/)                           |

---

### 16.5 Danh sách sơ đồ (Diagrams Index)

| ID   | Loại sơ đồ           | Mô tả                                               |
| :--- | :------------------- | :-------------------------------------------------- |
| D-01 | System Context       | Mối quan hệ giữa người dùng, hệ thống và bên thứ ba |
| D-02 | Logical Architecture | Phân tầng service logic (API, DB, Redis)            |
| D-03 | Data Flow            | Dòng dữ liệu giữa các module chính                  |
| D-04 | Deployment           | Sơ đồ triển khai (Kubernetes, CI/CD)                |
| D-05 | Monitoring           | Cấu trúc Prometheus – Grafana – ELK                 |

---

### 16.6 Đề xuất cải tiến tương lai (Future Enhancements)

| ID     | Đề xuất                                        | Mục tiêu                                |
| :----- | :--------------------------------------------- | :-------------------------------------- |
| FE-001 | Tích hợp AI phân tích hành vi người dùng       | Dự đoán sở thích, tăng tỷ lệ chuyển đổi |
| FE-002 | Thêm kênh phát quà qua eCommerce               | Mở rộng nguồn khách hàng                |
| FE-003 | Hỗ trợ gamification trong chiến dịch           | Tăng tương tác người dùng               |
| FE-004 | Dashboard phân tích real-time                  | Theo dõi KPI chiến dịch trực tiếp       |
| FE-005 | Kết nối API CRM nâng cao (Salesforce, Hubspot) | Đồng bộ dữ liệu CRM 2 chiều             |

---

### 16.7 Xác nhận & Phê duyệt tài liệu (Approval)

| Vai trò          | Họ tên / Chức danh   | Trạng thái |
| :--------------- | :------------------- | :--------- |
| Product Owner    | [Tên Brand / Client] | ✅ Approved |
| Project Manager  | [Tên PM]             | ✅ Approved |
| Business Analyst | [Tên BA]             | ✅ Approved |
| Tech Lead        | [Tên TL]             | ✅ Approved |
| QA Lead          | [Tên QA Lead]        | ✅ Approved |

---

### 16.8 Tổng kết

* Tài liệu SRS đã hoàn thiện 16 phần, tuân thủ chuẩn IEEE 830 và ISO/IEC/IEEE 29148.
* Bao gồm đầy đủ từ phạm vi, yêu cầu, kiến trúc, bảo mật đến vận hành.
* Sẵn sàng bàn giao cho nhóm phát triển, QA, DevOps và khách hàng để triển khai chính thức.

---

**Tình trạng:**

> Hoàn tất phần 16 – Appendices & References. Đây là phần cuối cùng của tài liệu SRS cho hệ thống Product Sampling System (PSS).
