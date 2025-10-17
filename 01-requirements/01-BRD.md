# 📋 01-requirements/01-BRD.md

**Business Requirement Document (BRD)**
**Product Sampling System**

**Version**: 2.0
**Date**: 2025-10-17
**Author**: Mark Nguyen & Grok
**Approval Status**: Draft – Chờ review từ C-level & stakeholders

---

## 1. Giới thiệu

### 1.1 Mục đích tài liệu

Tài liệu này mô tả các yêu cầu kinh doanh (Business Requirements) cho **Product Sampling System (PSS)** – nền tảng quản lý và phân phối sản phẩm dùng thử thông minh. BRD xác định vấn đề kinh doanh, mục tiêu chiến lược, phạm vi dự án, các yêu cầu chính và user story để xây dựng hệ thống giải quyết thách thức phân phối mẫu giá thấp (~1 USD) nhằm thu thập dữ liệu khách hàng chất lượng cao, chống gian lận, và tối ưu ROI cho nhãn hàng FMCG.

BRD là nền tảng cho **SRS (System Requirement Specification)** và User Stories, dựa trên:

* **Problem.md**: Mô tả bài toán, phân loại MoSCoW (Must-Have/Should-Have/Nice-to-Have).
* **Product-Sampling-Vision-and-Strategy Document.md**: Tầm nhìn dài hạn, cơ hội thị trường SEA, go-to-market.
* **System_Feature_Tree_Grok.md**: Cây chức năng chi tiết và user story cho từng module.

---

### 1.2 Phạm vi

#### In-scope

* Xây dựng nền tảng hybrid (POS + digital) cho sampling tại VN (pilot), mở rộng SEA.
* Thu thập data verified (OTP, consent).
* Đo lường funnel (scan → redeem).
* **Module mới**: Gamification & reward points, Export analytics, Banner Ads / Mini widget.

#### Out-of-scope

* Logistics thực tế (brand chịu trách nhiệm vận chuyển hàng mẫu).
* App native; chỉ PWA.
* Blockchain / tokenization (Future-proof / Phase 3).

---

### 1.3 Stakeholders

| Vai trò               | Mô tả                                     | Phụ trách / Quan tâm                                       |
| --------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| Project Manager (PM)  | Quản lý tiến độ dự án, phê duyệt tài liệu | Tiến độ, phạm vi, chất lượng                               |
| System Analyst / BA   | Soạn SRS, mapping BRD -> FR               | Độ chính xác yêu cầu                                       |
| Brand (Customer)      | Tạo chiến dịch, nhận báo cáo              | Dễ dùng dashboard, data quality                            |
| Dev Team              | Triển khai hệ thống                       | API spec, data model, acceptance                           |
| QA / Tester           | Kiểm thử chức năng & NFR                  | Test cases, performance                                    |
| Retail Partner (Node) | Nhận/giao sample, redeem tại điểm bán     | Offline capability, reconciliation                         |
| Admin / Ops           | Vận hành hệ thống, xử lý dispute          | Logs, monitoring, security                                 |
| CRM Provider          | Hệ thống bên thứ ba nhận webhook          | Payload mapping, delivery SLA                              |
| SMS/Email Provider    | Gửi OTP / Notification                    | Throughput, delivery rate                                  |
| End User              | Người nhận mẫu                            | Trải nghiệm gamification, reward points, dashboard cá nhân |

---

### 1.4 Giả định (Assumptions)

* Brand chịu trách nhiệm cung cấp hàng mẫu vật lý đến các retail node.
* Retail Node có thiết bị (smartphone / tablet / POS) để scan QR hoặc nhập voucher.
* Có nhà cung cấp SMS/Email để gửi OTP (Twilio/MessageBird/Local).
* Mạng Internet tại retail node có thể intermittent; hệ thống cần offline-first sync.
* Dữ liệu cá nhân (PII) tuân thủ PDPA/GDPR.

---

### 1.5 Ràng buộc (Constraints)

* Hệ thống phải xử lý peak load 100.000 requests/phút tại API gateway.
* Voucher phải là single-use, atomic redeem.
* Redis là cache/queue; cần fallback khi Redis down.
* Ngân sách seed: 300K USD; đội dev: 8 người.

---

### 1.6 Mục tiêu chiến lược & KPI

**Ngắn hạn (2025)**

* Triển khai MVP tại VN, ký 10 brands, xử lý 1M mẫu, thu $1M revenue.

**Trung hạn (2026)**

* Mở rộng Thái/Indo, 25 brands, 3M users, $3M revenue.

**Dài hạn (2027)**

* Dẫn đầu SEA, 60 brands, 10M users, $8M revenue; exit (M&A / IPO).

**KPI:**

* Cost per verified user ≤ 0.4 USD
* Conversion rate ≥ 90%
* Fraud rate ≤ 5%
* User engagement (gamification) ≥ 70%
* Dashboard realtime latency ≤ 3s

---

## 2. Vấn đề kinh doanh (Business Problem)

* **Chi phí phân phối cao**: logistics > giá trị quà.
* **Spam / gian lận**: đăng ký ảo / bot làm data chất lượng thấp.
* **Thiếu đo lường**: khó track ROI, funnel, hiệu quả chiến dịch.

**Giải pháp:** PSS thu thập data verified, phân phối voucher, tích hợp CRM, dashboard realtime, gamification & reward points để tăng engagement.

---

## 3. Yêu cầu kinh doanh (Business Requirements)

### 3.1 User Story – Core Flow

| Module              | Actor           | User Story                                                                              |
| ------------------- | --------------- | --------------------------------------------------------------------------------------- |
| Campaign Management | Admin / Brand   | Tôi muốn tạo/cấu hình chiến dịch để gán barcode, ads format, location, và UTM tracking. |
| Barcode / Voucher   | Admin / User    | Tôi muốn phát voucher duy nhất cho user verified, để người dùng redeem sample tại POS.  |
| Landing Page        | User            | Tôi muốn điền form + OTP verify để nhận voucher một cách an toàn.                       |
| Redeem POS          | Serving Account | Tôi muốn scan voucher để cập nhật trạng thái redeemed.                                  |
| Dashboard Analytics | Brand / Admin   | Tôi muốn xem funnel, ROI, top-performing node realtime và export CSV/Excel.             |

### 3.2 User Story – Module mới

| Module                       | Actor         | User Story                                                                                                               |
| ---------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Gamification / Reward Points | User          | Tôi muốn nhận điểm khi redeem sample, share campaign, submit survey, để có thể đổi quà hoặc nâng cấp hạng.               |
| Gamification / Reward Points | Admin / Brand | Tôi muốn cấu hình rules cho điểm thưởng, leaderboard, và campaign-specific rewards.                                      |
| Banner Ads / Mini Widget     | Admin / Brand | Tôi muốn upload banner hoặc mini widget trên landing page/partner site để quảng bá chiến dịch, track click & impression. |
| Export Analytics             | Brand / Admin | Tôi muốn xuất dữ liệu campaign (CSV/Excel/API) theo campaign, location, status, để phân tích sâu hơn hoặc đưa về CRM.    |
| Consent / Privacy            | User          | Tôi muốn withdraw consent, opt-out hoặc cập nhật thông tin cá nhân để tuân thủ PDPA/GDPR.                                |

### 3.3 Phân quyền (RBAC) – chi tiết

| Module                       | Admin | Group Admin         | Customer Account | Serving Account | Auditor    | User Role               |
| ---------------------------- | ----- | ------------------- | ---------------- | --------------- | ---------- | ----------------------- |
| Campaign / Barcode           | Full  | Quản lý group       | Campaign riêng   | Không           | View logs  | Không                   |
| Landing Page / Form          | Full  | Edit / Preview      | Config cơ bản    | Không           | View logs  | Điền form, quiz, survey |
| Redeem POS                   | Full  | View / Stats        | Campaign riêng   | Scan / Redeem   | View logs  | Xem trạng thái redeem   |
| Dashboard Analytics          | Full  | Group view          | Campaign riêng   | Không           | Compliance | Xem báo cáo cá nhân     |
| Gamification / Reward Points | Full  | Config rules / view | Campaign riêng   | Không           | View logs  | Tham gia, redeem điểm   |
| Banner Ads / Mini Widget     | Full  | Edit / Preview      | Campaign riêng   | Không           | View logs  | Xem hiển thị (optional) |
| Export Analytics             | Full  | Group view          | Campaign riêng   | Không           | View logs  | Không                   |
| User / Gift Management       | Full  | Create / Edit group | Campaign riêng   | Không           | View logs  | Nhận quà / điểm         |

---

### 3.4 Yêu cầu báo cáo & KPI

* Realtime dashboard: conversion, redemption, engagement, ROI, spam rate.
* Export CSV/Excel/API cho brand.
* Gamification: điểm thưởng, leaderboard, reward redemption.
* Phân quyền đúng, audit logs đầy đủ.

---

**Tình trạng:**

> Bản này đã đầy đủ user story cho **gamification, reward points, export analytics**, chi tiết phân quyền theo module. Dùng trực tiếp để mapping sang FR trong SRS.

---

Nếu bạn muốn, bước tiếp theo tôi có thể viết **`02-SRS.md` phiên bản v1.0 hoàn chỉnh** dựa trên bản BRD này, kèm **FR-014 → FR-020**, DB schema, API, Use Case, và mapping RBAC chi tiết cho dev luôn.

Bạn có muốn tôi làm luôn bước này không?
