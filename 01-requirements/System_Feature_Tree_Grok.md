# 🌳 Cây thư mục chức năng hệ thống Product Sampling

**Mô tả**: Cây thư mục chức năng cho hệ thống Product Sampling, đáp ứng phân phối mẫu giá thấp (~1 USD), thu thập dữ liệu chất lượng cao, chống gian lận, và tối ưu ROI. Cập nhật để bổ sung Quản lý Ads Format, đồng bộ với `Access_Control_Tree.md` (phiên bản 2.2), và tích hợp bài học từ Sampler/SoPost/Peekage.

**Version**: 4.0  
**Date**: 2025-10-16 (06:45 PM +07)  
**Liên kết**: `Problem.md`, `Product-Sampling-Vision-and-Strategy Document.md`, `Access_Control_Tree.md`.

---

## 1. Must-Have (Core - Microservice, Q1–Q2 2025)
Chức năng cốt lõi cho pilot (5–10 brands, 10K verified users), hỗ trợ hybrid distribution, OTP verification, data collection, và user experience.

### 1.1. Quản lý Campaign (Campaign Management)
- **Mô tả**: Cho phép brand tạo/quản lý chiến dịch sampling, gán barcode pool, ads format, location, và UTM tracking.
- **User Stories**:
  - Là Admin, tôi tạo Campaign Global, gán barcode/location.
  - Là Group Admin, tôi tạo Campaign trong Group, preview trước publish.
  - Là Customer Account, tôi quản lý Campaign riêng, xem preview.
  - Là Auditor, tôi xem logs Campaign execution.
- **Yêu cầu kỹ thuật**:
  - Input: Tên, mô tả, thời gian, location IDs, barcode CSV, UTM tags.
  - Output: Campaign ID, dynamic QR codes, API create/update.
  - Tích hợp: GA4/Meta Pixel, multi-tenant DB.
  - KPI: Campaign setup <2 ngày, tracking accuracy 100%.
- **Roadmap**: MVP; pilot Q1–Q2 2025.

### 1.2. Quản lý Barcode/Voucher (Barcode Management)
- **Mô tả**: Import, gán, theo dõi barcode/voucher single-use, hỗ trợ đối soát phát tay/ngoài luồng.
- **User Stories**:
  - Là Admin, tôi import CSV barcode, đối soát trạng thái.
  - Là Group Admin, tôi import barcode cho Group, xem logs.
  - Là Customer Account, tôi import barcode Campaign riêng.
  - Là Auditor, tôi xem logs import/đối soát.
- **Yêu cầu kỹ thuật**:
  - Input: CSV (barcode, product_name, expiry_date, value, batch_code).
  - Output: QR image/PDF, status logs (Chưa phát/Đã phát/Đã redeem/Hết hạn).
  - Tích hợp: Voucherify API, Apple Wallet, ERP push/pull.
  - KPI: Inventory accuracy >95%, 100% single-use.
- **Roadmap**: MVP.

### 1.3. Landing Page & Form (Customer Data Collection)
- **Mô tả**: Landing page với form thu thập tên, email, SĐT, opt-in, quiz ngắn, post-sampling survey, và link đến User Portal.
- **User Stories**:
  - Là Admin, tôi tạo/edit Landing Page template, config quiz/survey.
  - Là Group Admin, tôi preview/edit template trong Group.
  - Là Customer Account, tôi preview Landing Page, config quiz cơ bản.
  - Là khách hàng, tôi điền form 30s, nhận barcode, xem User Portal.
  - Là Auditor, tôi xem logs submission/consent.
- **Yêu cầu kỹ thuật**:
  - Input: Form fields (regex), reCAPTCHA v3, quiz/survey config.
  - Output: JSON profile (hashed PII), consent flags, survey results.
  - Tích hợp: React PWA, GA4, dynamic content (SoPost), User Portal link.
  - KPI: Form completion >90%, data quality >95%, survey response >50%.
- **Roadmap**: MVP.

### 1.4. Xác thực khách hàng (OTP Verification)
- **Mô tả**: Xác minh SMS/email OTP, chống bot/spam bằng rate-limiting, CAPTCHA, device fingerprinting.
- **User Stories**:
  - Là khách hàng, tôi nhập OTP (3 retries, 5 phút) để unlock barcode.
  - Là Admin, tôi config OTP rules, xem fail-rate.
  - Là Auditor, tôi xem logs OTP attempts.
- **Yêu cầu kỹ thuật**:
  - Input: Phone/email, 6-digit OTP.
  - Output: Verified flag, fraud score (velocity check).
  - Tích hợp: Twilio/MessageBird, Redis.
  - KPI: OTP success >95%, fraud rate <5%.
- **Roadmap**: MVP.

### 1.5. Đổi mẫu & Tích hợp POS (Redemption & POS Integration)
- **Mô tả**: Redeem tại POS qua web/app scan hoặc POS API, hỗ trợ offline mode, log trạng thái cho User Portal.
- **User Stories**:
  - Là Serving Account, tôi scan barcode tại Circle K.
  - Là Admin, tôi setup POS API/webhook.
  - Là Group Admin, tôi xem redemption stats trong Group.
  - Là Customer Account, tôi xem redemption stats Campaign riêng.
  - Là khách hàng, tôi xem trạng thái redeem trong User Portal.
  - Là Auditor, tôi xem logs redeem.
- **Yêu cầu kỹ thuật**:
  - Input: Barcode, location_id, staff_id.
  - Output: Webhook/CSV log redeem, status updates.
  - Tích hợp: Scandit SDK, IndexedDB offline sync, User Portal API.
  - KPI: Redemption success >98%.
- **Roadmap**: MVP; scale 200 stores.

### 1.6. Báo cáo & Analytics cơ bản (Funnel Tracking)
- **Mô tả**: Dashboard realtime theo Campaign/Ads/Location, hỗ trợ post-sampling surveys và ROI metrics.
- **User Stories**:
  - Là Admin, tôi xem full funnel, export CSV/API.
  - Là Group Admin, tôi xem báo cáo Group.
  - Là Customer Account, tôi xem báo cáo Campaign riêng, xuất data khách.
  - Là Auditor, tôi xem compliance reports.
- **Yêu cầu kỹ thuật**:
  - Input: Event logs (campaign_id, timestamp).
  - Output: Funnel charts, NPS survey results, ROI metrics (CPL <0.4 USD).
  - Tích hợp: Metabase, BigQuery, HubSpot.
  - KPI: 24h insight reports, CPL <0.4 USD.
- **Roadmap**: MVP.

### 1.7. Kết nối CRM (CRM Sync)
- **Mô tả**: Đồng bộ data khách (profile + preferences) với CRM, hỗ trợ remarketing từ User Portal.
- **User Stories**:
  - Là Admin, tôi config CRM API.
  - Là Customer Account, tôi xuất data khách Campaign riêng.
  - Là khách hàng, tôi nhận remarketing offers qua User Portal.
  - Là Auditor, tôi xem logs sync compliance.
- **Yêu cầu kỹ thuật**:
  - Input: Verified JSON profile, survey responses.
  - Output: Webhook/CSV sync.
  - Tích hợp: HubSpot/Salesforce, GDPR consent.
  - KPI: Brand retention >85%.
- **Roadmap**: MVP; Phase 2 full integration.

### 1.8. Phân quyền (Access Control)
- **Mô tả**: Hỗ trợ 6 roles (Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role) với RBAC.
- **User Stories**:
  - Là Admin, tôi gán role, quản lý user.
  - Là Group Admin, tôi tạo user trong Group.
  - Là Customer Account, tôi xem permissions của mình.
  - Là Serving Account, tôi login Redeem Tool.
  - Là Auditor, tôi xem logs compliance.
  - Là User Role, tôi không quản lý user.
- **Yêu cầu kỹ thuật**:
  - Input: JWT auth, role config.
  - Output: Scoped access, audit logs.
  - Tích hợp: Keycloak/OAuth2.
  - KPI: Zero unauthorized access.
- **Roadmap**: MVP.

### 1.9. User Portal (Customer Experience)
- **Mô tả**: PWA cho user cuối xem lịch sử sản phẩm, trạng thái barcode, nhận thông báo, và gửi ticket hỗ trợ.
- **User Stories**:
  - Là khách hàng, tôi xem danh sách sản phẩm đã nhận (barcode, product_name, expiry_date).
  - Là khách hàng, tôi kiểm tra trạng thái barcode (Chưa redeem/Đã redeem/Hết hạn).
  - Là khách hàng, tôi nhận push notification nhắc redeem hoặc offer mới.
  - Là khách hàng, tôi gửi ticket khi barcode lỗi.
  - Là Admin, tôi config User Portal (notification rules, FAQ).
  - Là Auditor, tôi xem logs user interaction.
- **Yêu cầu kỹ thuật**:
  - Input: User ID (phone/email), barcode history.
  - Output: PWA UI (React), push notifications (SMS/email), ticket form.
  - Tích hợp: Twilio for notifications, Zendesk for tickets, GA4 for tracking.
  - KPI: User engagement >70%, ticket resolution <48h.
- **Roadmap**: MVP; Phase 2 full personalization.

### 1.10. Quản lý Ads Format (Ads Format Management)
- **Mô tả**: Tạo và quản lý các định dạng quảng cáo cho Campaign, bao gồm upload file thiết kế, config QR code, và tracking.
- **User Stories**:
  - Là Admin, tôi tạo/upload Ads Format (PNG/JPG/PDF, 300 DPI), config QR zone/tọa độ, kích thước in, và tracking (UTM, campaign_id).
  - Là Group Admin, tôi tạo/upload Ads Format cho Group, preview trước publish.
  - Là Customer Account, tôi tạo/upload Ads Format cho Campaign riêng, preview trước sử dụng.
  - Là Auditor, tôi xem logs upload và config Ads Format.
- **Yêu cầu kỹ thuật**:
  - Input: Tên, kích thước, số lượng in, file thiết kế (300 DPI), logo (nếu cần), vị trí QR (zone/tọa độ), kích thước QR tối thiểu & safe zone, tracking info (campaign_id, ads_format_id, location_id, UTM tag).
  - Output: Dynamic QR code/short link, validated design files, tracking logs.
  - Tích hợp: File validation (ImageMagick), dynamic QR generation, GA4/Meta Pixel.
  - KPI: Scan-to-submit conversion >90%, file validation accuracy 100%.
- **Roadmap**: MVP; pilot Q1–Q2 2025.

---

## 2. Should-Have (Advanced - Phase 2, Q3 2025–Q4 2026)
Chức năng nâng cao để scale (1M–3M users), tối ưu fraud, analytics, và partner management.

### 2.1. Inventory & Fulfillment Reconciliation (Stock Management)
- **Mô tả**: Quản lý stock batch, audit redeem/trả.
- **User Stories**:
  - Là Admin, tôi đối soát inventory toàn hệ thống.
  - Là Group Admin, tôi đối soát trong Group.
  - Là Customer Account, tôi xem stock Campaign riêng.
- **Yêu cầu kỹ thuật**:
  - Input: Batch data (location, expiry).
  - Output: Reconciliation reports.
  - Tích hợp: ERP webhook.
  - KPI: Waste <5%, accuracy >95%.
- **Roadmap**: Phase 2.

### 2.2. Retailer/Store Portal & POS Adapters (Partner Portal)
- **Mô tả**: Portal cho retailer xem stock/redemptions, tích hợp POS đa chuẩn.
- **User Stories**:
  - Là Admin, tôi setup POS adapters.
  - Là Group Admin, tôi xem retailer stats trong Group.
  - Là Serving Account, tôi scan via portal.
- **Yêu cầu kỹ thuật**:
  - Input: Store ID, redemption logs.
  - Output: Multi-tenant UI, SDK.
  - Tích hợp: POS formats (XML/JSON).
  - KPI: Offline sync >98%.
- **Roadmap**: Phase 2.

### 2.3. Fraud Detection & Trust Scoring (Advanced Security)
- **Mô tả**: ML-based fraud detection (device fingerprint, anomaly), auto-block suspicious.
- **User Stories**:
  - Là Admin, tôi ban IP suspicious.
  - Là Auditor, tôi xem anomaly logs.
- **Yêu cầu kỹ thuật**:
  - Input: Device metadata, OTP logs.
  - Output: Fraud score (0–100).
  - Tích hợp: scikit-learn, Redis.
  - KPI: Fraud rate <5%.
- **Roadmap**: Phase 2.

### 2.4. Consent Management & Privacy Hub (Compliance Hub)
- **Mô tả**: Lưu consent versioned, hỗ trợ delete PII (GDPR/PDPA).
- **User Stories**:
  - Là Admin, tôi config privacy rules.
  - Là Customer Account, tôi export consent logs.
  - Là Auditor, tôi audit compliance.
  - Là khách hàng, tôi withdraw consent qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Consent flags, delete requests.
  - Output: Encrypted PII, audit trails.
  - Tích hợp: ISO 27001 framework.
  - KPI: 100% compliance.
- **Roadmap**: Phase 2.

### 2.5. A/B Testing & Dynamic Offers (Optimization Tools)
- **Mô tả**: Test creatives/incentives (quiz vs no-quiz) để tăng conversion (học từ Peekage).
- **User Stories**:
  - Là Admin/Group Admin, tôi run A/B test.
  - Là Customer Account, tôi xem A/B results Campaign riêng.
  - Là khách hàng, tôi nhận dynamic offers qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Experiment config.
  - Output: Conversion stats, auto-routing.
  - Tích hợp: Optimizely-like engine.
  - KPI: Conversion uplift 6x.
- **Roadmap**: Phase 2.

### 2.6. Support & Dispute Workflow (Helpdesk)
- **Mô tả**: Ticketing cho khiếu nại (mã invalid), resolve <48h.
- **User Stories**:
  - Là Admin, tôi quản lý tickets.
  - Là Serving Account, tôi report issue.
  - Là khách hàng, tôi gửi ticket qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Ticket details, store logs.
  - Output: Resolution status.
  - Tích hợp: Zendesk API.
  - KPI: Resolution rate >95%.
- **Roadmap**: Phase 2.

### 2.7. Localization/Multi-Market Support (Regional Setup)
- **Mô tả**: Hỗ trợ ngôn ngữ, telco OTP, privacy law (VN → Thái/Indo).
- **User Stories**:
  - Là Admin, tôi config multi-market.
  - Là Group Admin, tôi setup campaign tiếng Thái.
  - Là khách hàng, tôi dùng User Portal tiếng địa phương.
- **Yêu cầu kỹ thuật**:
  - Input: Language packs, region configs.
  - Output: Localized UI, APIs.
  - Tích hợp: i18n, regional telcos.
  - KPI: 3 markets by 2026.
- **Roadmap**: Phase 2–3.

### 2.8. Sampling Network Management (Partner Distribution)
- **Mô tả**: Quản lý mạng lưới retailer/đối tác phát hàng (Circle K, GS25, booth).
- **User Stories**:
  - Là Admin, tôi thêm/cập nhật danh sách retail node.
  - Là Brand, tôi chọn khu vực/điểm phát phù hợp để gửi hàng.
  - Là Retail Partner, tôi xác nhận stock & redemption tại chỗ.
- **Yêu cầu kỹ thuật**:
  - Input: Retail node metadata (tên, vị trí, capacity, partner SLA).
  - Output: Network dashboard (status, redemption, cost/verified user).
  - KPI: Chi phí phát <0.4 USD/lead, stock accuracy >95%.

---

## 3. Nice-to-Have (Future-Proof - Phase 3, 2026–2027)
Chức năng để trở thành "Sampling Intelligence Platform", dẫn đầu SEA.

### 3.1. Sustainability Tracking (Eco Module)
- **Mô tả**: Đo carbon footprint, thu hút Gen Z (học từ Relish).
- **User Stories**:
  - Là Admin/Customer Account, tôi báo cáo eco-impact.
  - Là khách hàng, tôi xem eco-stats qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Print/sample logistics data.
  - Output: Carbon KPI dashboards.
  - KPI: Waste reduction >20%.
- **Roadmap**: Phase 3.

### 3.2. AI-Driven Personalization & Predictive Analytics (AI Layer)
- **Mô tả**: Gợi ý offers/inventory, dự đoán ROI (học từ Peekage).
- **User Stories**:
  - Là Admin/Group Admin, tôi nhận AI recs.
  - Là khách hàng, tôi nhận AI offers qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Dataset >2M users.
  - Output: ML models (TensorFlow).
  - Tích hợp: AWS SageMaker.
  - KPI: Predictive accuracy >80%.
- **Roadmap**: Phase 3.

### 3.3. Marketplace cho Brand Co-Sampling (Co-Sampling Hub)
- **Mô tả**: Bundle multi-brand (snack + drink), chia chi phí (học từ FreeStand).
- **User Stories**:
  - Là Customer Account, tôi partner bundle quà.
  - Là khách hàng, tôi xem combo samples qua User Portal.
- **Yêu cầu kỹ thuật**:
  - Input: Multi-brand rules.
  - Output: Programmatic bundle offers.
  - KPI: Bundle adoption 30%.
- **Roadmap**: Phase 3.

### 3.4. Cost & ROI Optimizer (AI Module)
- **Mô tả**: Phân tích chi phí phát quà theo khu vực, retail node, và đề xuất tối ưu route & campaign mix.
- **User Stories**:
  - Là Admin, tôi muốn hệ thống gợi ý kênh phát có ROI cao nhất.
  - Là Brand, tôi xem so sánh chi phí/verified lead theo vùng.
- **Yêu cầu kỹ thuật**:
  - Input: Redemption logs, geo-data, cost model.
  - Output: ROI dashboard & optimization suggestions.
  - KPI: ROI uplift >20% so với baseline.

---

## 4. Yêu cầu kỹ thuật tổng quan
- **Stack**: Microservices (Node.js/Go), React PWA, AWS/GCP, MongoDB/PostgreSQL.
- **Security**: PII encrypted (AES), ISO 27001, audit trails.
- **Scalability**: Multi-tenant, 10M users by 2027.
- **Tích hợp**: HubSpot, Twilio, Scandit, GA4, Zendesk, ImageMagick.

## 5. Flow vận hành
1. Admin/Group Admin/Customer Account tạo Campaign, import barcode, config Ads Format.
2. Phát QR tại store/booth (hybrid) qua Ads Format (Flyer, Poster, Digital Banner, v.v.).
3. Khách scan → Form + quiz → OTP verify.
4. Cấp barcode personalized, hiển thị User Portal.
5. Serving Account redeem tại POS (offline sync).
6. Fraud check → Dashboard analytics.
7. Sync CRM + remarketing via User Portal.
8. A/B test & AI optimize (Phase 2+).
