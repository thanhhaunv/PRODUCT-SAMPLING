# 📋 01-requirements/01-BRD.md

**Business Requirement Document (BRD)**  
**Product Sampling System**  

**Version**: 1.0  
**Date**: 2025-10-16  
**Author**: Founding Team & Grok (dựa trên Problem.md, Product-Sampling-Vision-and-Strategy Document.md, System_Feature_Tree.md)  
**Approval Status**: Draft – Chờ review từ C-level & stakeholders  

---

## 1. Giới thiệu

### 1.1 Mục đích tài liệu
Tài liệu này mô tả các yêu cầu kinh doanh (Business Requirements) cho **Product Sampling System** – nền tảng quản lý và phân phối sản phẩm dùng thử thông minh. BRD xác định vấn đề kinh doanh, mục tiêu chiến lược, phạm vi dự án, và các yêu cầu chính để xây dựng hệ thống giải quyết thách thức phân phối mẫu giá thấp (~1 USD) nhằm thu thập dữ liệu khách hàng chất lượng cao, chống gian lận, và tối ưu ROI cho các nhãn hàng FMCG (Nestlé, Unilever, P&G).

BRD là nền tảng cho SRS (System Requirement Specification) và User Stories, dựa trên:
- **Problem.md**: Mô tả vấn đề, phân loại MoSCoW (Must-Have/Should-Have/Nice-to-Have).
- **Product-Sampling-Vision-and-Strategy Document.md**: Tầm nhìn dài hạn, cơ hội thị trường SEA, go-to-market.
- **System_Feature_Tree.md**: Cây chức năng chi tiết (Must-Have: OTP Verification, User Portal; Should-Have: Fraud Detection).

### 1.2 Phạm vi
- **In-scope**: Xây dựng nền tảng hybrid (POS + digital) cho sampling tại VN (pilot), mở rộng SEA; thu thập data verified (OTP, consent); đo lường funnel (scan → redeem).
- **Out-of-scope**: Phát triển app native (chỉ PWA); tích hợp blockchain (Nice-to-Have Phase 3); hỗ trợ non-FMCG (e.g., pharma – optional).

### 1.3 Định nghĩa thuật ngữ
- **Sampling**: Phân phối sản phẩm mẫu miễn phí để thu thập data khách hàng.
- **Verified User**: Khách hàng xác thực qua OTP, không spam.
- **Hybrid Distribution**: Kết hợp POS (Circle K) + digital (QR/voucher).
- **ROI Metrics**: Cost-per-Lead (CPL <0.4 USD), conversion rate >90%, LTV uplift.

---

## 2. Vấn đề kinh doanh (Business Problem)

### 2.1 Mô tả vấn đề
Các nhãn hàng FMCG muốn sử dụng sampling để thu thập dữ liệu khách hàng (tên, email, SĐT, preferences) nhằm remarketing và CRM, nhưng gặp 3 thách thức chính (từ Problem.md):
1. **Chi phí phân phối cao**: Mẫu giá thấp (~1 USD) nhưng logistics/in ấn làm tổng chi phí > giá trị quà, khó scale (global market 7.5B USD, SEA CAGR 13–15%).
2. **Spam và gian lận**: Đăng ký ảo/bot làm data chất lượng thấp (<80% verified), thiếu công cụ chống (disposable email, duplicate).
3. **Thiếu đo lường**: Không track funnel realtime (scan → redeem → purchase), khó chứng minh ROI, dẫn đến sampling chỉ là "cost center".

**Tác động**: Brands mất cơ hội data-driven growth; retailers (Circle K) thiếu incentive; khách hàng trải nghiệm kém (spam, không redeem).

### 2.2 Cơ hội thị trường
- **Quy mô**: SEA ~1.2B USD (2025), VN 120–150M USD (từ Product-Sampling-Vision-and-Strategy Document.md).
- **Pain points**: 80% sampling thủ công, thiếu digital tools (Sampl, SoPost chưa localize SEA).
- **Giải pháp**: Nền tảng hybrid với OTP verify, User Portal, và AI insights biến sampling thành "growth engine" (data value > quà value).

---

## 3. Mục tiêu kinh doanh (Business Objectives)

### 3.1 Mục tiêu chiến lược
- **Ngắn hạn (2025)**: Triển khai MVP tại VN, ký 10 brands, xử lý 1M mẫu, thu $1M revenue (campaign fee + data sub).
- **Trung hạn (2026)**: Mở rộng Thái/Indo, 25 brands, 3M users, $3M revenue.
- **Dài hạn (2027)**: Dẫn đầu SEA, 60 brands, 10M users, $8M revenue; exit (M&A Dentsu/WPP hoặc IPO).

### 3.2 KPI đo lường
Dựa trên KPI_Financials.md và System_Feature_Tree.md:

| Nhóm KPI | Chỉ số | Mục tiêu 2025 | 2026 | 2027 |
|----------|--------|---------------|------|------|
| **Growth** | Brands | 10 | 25 | 60 |
| | Verified Users | 1M | 3M | 10M |
| **Engagement** | Repeat Rate | 20% | 30% | 45% |
| **Financial** | Revenue | 1M USD | 3M USD | 8M USD |
| | Gross Margin | 35% | 45% | 55% |
| **Operations** | Campaign Duration | 5 days | 3 days | 2 days |
| **Data Quality** | OTP Success | >95% | >97% | >99% |
| | Fraud Rate | <5% | <3% | <2% |

---

## 4. Phạm vi dự án (Project Scope)

### 4.1 Chức năng chính (In-Scope)
Dựa trên Must-Have/Should-Have từ System_Feature_Tree.md:
- **Core Flow**: Tạo Campaign → Import Barcode → Config Ads Format (13 loại: Flyer, Poster, Digital Banner) → Phát QR tại POS → Khách scan → Form + OTP Verify → Cấp Barcode → Redeem tại POS → Báo cáo Funnel.
- **User Portal**: Xem lịch sử sản phẩm, trạng thái barcode, thông báo, ticket hỗ trợ.
- **Phân quyền**: 6 roles (Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role).
- **Tích hợp**: POS (Scandit SDK), CRM (HubSpot), OTP (Twilio), Analytics (GA4).

### 4.2 Chức năng ngoài phạm vi (Out-of-Scope)
- AR/VR integration (Nice-to-Have Phase 3).
- Full marketplace co-sampling (Phase 3).
- Non-SEA markets (focus VN → Thái/Indo).

### 4.3 Giả định và ràng buộc
- **Giả định**: Partners sẵn sàng (Circle K 200 stores 2025); data privacy law ổn định (PDPA VN).
- **Ràng buộc**: Ngân sách seed 300K USD; đội dev 8 người; không install package ngoài (code_execution env).

---

## 5. Yêu cầu kinh doanh (Business Requirements)

### 5.1 Yêu cầu chức năng (Functional Requirements)
Dựa trên System_Feature_Tree.md, phân loại MoSCoW:

#### Must-Have (Core MVP)
- **RF-001**: Hệ thống cho phép tạo Campaign với barcode pool, ads format (13 loại), location (POS stores). (Liên kết: 1.1 Quản lý Campaign, 1.10 Quản lý Ads Format).
- **RF-002**: Khách hàng quét QR → Điền form (tên, email, SĐT, opt-in, quiz) → OTP verify → Nhận barcode single-use. (Liên kết: 1.3 Landing Page, 1.4 OTP Verification).
- **RF-003**: Redeem barcode tại POS (web scan hoặc API), update trạng thái realtime. (Liên kết: 1.5 Đổi mẫu & POS).
- **RF-004**: User Portal cho khách hàng xem lịch sử sản phẩm, trạng thái barcode, nhận thông báo. (Liên kết: 1.9 User Portal).
- **RF-005**: Báo cáo funnel realtime (scan → redeem), export data cho CRM. (Liên kết: 1.6 Báo cáo, 1.7 CRM Sync).
- **RF-006**: Phân quyền RBAC (6 roles), với audit logs. (Liên kết: 1.8 Phân quyền).

#### Should-Have (Phase 2)
- **RF-007**: Fraud detection (device fingerprint, velocity checks). (Liên kết: 2.3 Fraud Detection).
- **RF-008**: A/B testing cho ads format và offers. (Liên kết: 2.5 A/B Testing).
- **RF-009**: Consent management và privacy hub (GDPR/PDPA). (Liên kết: 2.4 Consent Management).

#### Nice-to-Have (Phase 3)
- **RF-010**: AI personalization (gợi ý offers dựa preferences). (Liên kết: 3.2 AI Layer).
- **RF-011**: Co-sampling marketplace (bundle multi-brand). (Liên kết: 3.3 Marketplace).

### 5.2 Yêu cầu phi chức năng (Non-Functional Requirements)
- **Hiệu suất**: Uptime >99.9%; xử lý 1M users/tháng; response time <2s (scan/verify).
- **Bảo mật**: PII encrypted (AES); compliance GDPR/PDPA; fraud rate <5%.
- **Scalability**: Multi-tenant (AWS/GCP); hỗ trợ 10M users 2027.
- **Usability**: PWA responsive; multi-language (VN/Thái/Indo); accessibility WCAG 2.1.
- **Reliability**: Offline sync (IndexedDB); backup daily.

### 5.3 Mô hình mở rộng vận hành (Operational Model Extension)

Để giải quyết vấn đề chi phí phát quà thấp (~1 USD/sample), hệ thống mở rộng thêm mô hình **Sampling Network-as-a-Service**:
- Kết nối sẵn với các điểm phát (retailer, cửa hàng, đối tác logistic).
- Cho phép brand gửi hàng mẫu tập trung, hệ thống tự phân phối qua các “verified retail nodes”.
- Tự động tracking & reconciliation giữa brand ↔ retailer ↔ hệ thống, giúp giảm chi phí logistics >70%.
- KPI: Cost per verified user <0.4 USD.

---

## 6. Các bên liên quan (Stakeholders)

| Vai trò | Mô tả | Yêu cầu chính | Liên kết phân quyền |
|---------|-------|---------------|---------------------|
| **Brands (Customer Account)** | Nhãn hàng FMCG (Unilever). | Tạo Campaign, theo dõi ROI, xuất data. | Access_Control_Tree.md: 2.2 Campaign, 2.8 Báo cáo. |
| **Retailers (Serving Account)** | Circle K, GS25. | Redeem barcode, xem stock. | 2.6 POS, 2.2 Retailer Portal. |
| **Khách hàng (User Role)** | Người dùng cuối. | Quét QR, nhận barcode, xem User Portal. | 2.4 Landing Page, 2.10 User Portal. |
| **Admin/Group Admin** | Internal team. | Quản lý hệ thống, config. | 2.9 Phân quyền. |
| **Auditor** | External compliance. | Xem logs, audit. | Toàn bộ logs. |
| **Investors** | VC/Angel. | Theo dõi KPI, revenue forecast. | KPI_Financials.md. |

---

## 7. Rủi ro và giảm thiểu (Risks & Mitigation)
| Rủi ro | Xác suất | Tác động | Giảm thiểu |
|--------|----------|----------|------------|
| Data privacy breach | Cao | Cao | Implement Consent Hub (2.4), audit hàng quý. |
| Low adoption (quà giá thấp) | Trung bình | Trung bình | A/B testing (2.5), gamification User Portal. |
| Integration POS chậm | Thấp | Cao | Pilot với 5 stores, SDK Scandit. |

---

## 8. Phụ lục
- **Tham chiếu**: System_Feature_Tree.md (chức năng chi tiết), RoadMap_Product_Sampling.md (timeline).
- **Lịch sử thay đổi**:
  | Version | Date | Changes |
  |---------|------|---------|
  | 1.0 | 2025-10-16 | Initial draft. |

**Kết thúc BRD**. Tiếp theo: SRS sẽ chi tiết hóa kỹ thuật từ BRD này.
