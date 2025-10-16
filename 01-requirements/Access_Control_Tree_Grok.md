# 🌳 Cây thư mục phân quyền hệ thống Product Sampling

**Mô tả**: Cây thư mục phân quyền cho hệ thống Product Sampling, đảm bảo không mâu thuẫn với chức năng trong `System_Feature_Tree.md` (phiên bản 3.0), hỗ trợ phân phối mẫu giá thấp (~1 USD), thu thập dữ liệu chất lượng cao, và tối ưu ROI. Tinh chỉnh quyền User Portal để Admin độc quyền quản lý ticket.

**Version**: 2.2  
**Date**: 2025-10-16 (06:32 PM +07)  
**Liên kết**: `Problem.md`, `Product-Sampling-Vision-and-Strategy Document.md`, `System_Feature_Tree.md`.

---

## 1. Vai trò và quyền tổng quan
- **Admin**: Toàn quyền hệ thống, quản lý tất cả module, setup API/POS/CRM/User Portal.
- **Group Admin**: Quản lý Campaign/Barcode/Ads trong Group, không xóa Global resources.
- **Customer Account**: Quản lý Campaign riêng, preview Landing Page, xuất data.
- **Serving Account**: Scan/redeem barcode tại POS, xem ticket liên quan redeem.
- **Auditor**: Xem logs/reports để audit compliance (GDPR/PDPA).
- **User Role (Khách hàng cuối)**: Truy cập User Portal qua PWA (phone/email-based), xem lịch sử sản phẩm, trạng thái barcode, nhận thông báo, gửi ticket.

---

## 2. Phân quyền theo Module

### 2.1. Quản lý Barcode
- **Admin**:
  - Import/export barcode (CSV/Excel/API).
  - Quản lý trạng thái (Chưa phát/Đã phát/Đã redeem/Hết hạn).
  - Đối soát barcode phát tay/ngoài luồng.
  - Cài đặt API push/pull với ERP/CRM.
- **Group Admin**:
  - Import barcode cho Group.
  - Xem trạng thái barcode trong Group.
  - Đối soát barcode trong Group.
- **Customer Account**:
  - Import barcode cho Campaign riêng.
  - Xem trạng thái barcode Campaign riêng.
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs import/đối soát barcode.
- **User Role**: Không có quyền.
- **Yêu cầu kỹ thuật**: CSV validation, Voucherify API, audit trail immutable.
- **KPI**: Inventory accuracy >95%.

### 2.2. Quản lý Chiến dịch (Campaign)
- **Admin**:
  - Tạo/sửa/xóa Campaign (Global/Group).
  - Gán barcode pool, location, ads format.
  - Cài đặt UTM tracking.
- **Group Admin**:
  - Tạo/sửa Campaign trong Group.
  - Gán barcode/location/ads format trong Group.
  - Preview Campaign trước publish.
- **Customer Account**:
  - Tạo/sửa Campaign riêng.
  - Gán barcode/location/ads format riêng.
  - Preview Campaign.
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs Campaign creation/execution.
- **User Role**: Không có quyền.
- **Yêu cầu kỹ thuật**: REST API, GA4/Meta Pixel, multi-tenant DB.
- **KPI**: Campaign setup <2 ngày.

### 2.3. Quản lý Ads Format
- **Admin**:
  - Tạo/upload Ads Format (PNG/JPG/PDF, 300 DPI).
  - Config QR zone, UTM tags.
  - Quản lý 13 format (Flyer, Poster, Digital Banner, v.v.).
- **Group Admin**:
  - Tạo/upload Ads Format trong Group.
  - Preview Ads Format + Landing Page.
- **Customer Account**:
  - Tạo/upload Ads Format cho Campaign riêng.
  - Preview Ads Format + Landing Page.
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs Ads Format usage.
- **User Role**: Không có quyền.
- **Yêu cầu kỹ thuật**: File validation (DPI, QR size), dynamic QR.
- **KPI**: Scan-to-submit conversion >90%.

### 2.4. Landing Page & Form
- **Admin**:
  - Tạo/edit Landing Page template.
  - Config form fields, quiz, CAPTCHA, post-sampling survey.
  - Quản lý consent (GDPR/PDPA).
- **Group Admin**:
  - Tạo/edit Landing Page template trong Group.
  - Preview Landing Page.
- **Customer Account**:
  - Preview Landing Page Campaign riêng.
  - Config quiz cơ bản (e.g., preferences).
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs form submission/consent.
- **User Role**:
  - Điền form (tên, email, SĐT, opt-in).
  - Tham gia quiz, survey.
  - Truy cập User Portal từ Landing Page.
- **Yêu cầu kỹ thuật**: React PWA, reCAPTCHA v3, consent management, survey integration.
- **KPI**: Form completion >90%, data quality >95%, survey response >50%.

### 2.5. Cấp phát Barcode
- **Admin**:
  - Gán barcode single-use/time-limited.
  - Quản lý log cấp phát (user_id, campaign_id, timestamp).
- **Group Admin**:
  - Xem log cấp phát trong Group.
  - Trigger cấp phát tự động trong Group.
- **Customer Account**:
  - Trigger cấp phát tự động cho Campaign riêng.
  - Xem log cấp phát Campaign riêng.
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs cấp phát barcode.
- **User Role**: Xem barcode được cấp qua User Portal.
- **Yêu cầu kỹ thuật**: Voucherify personalization, Apple Wallet.
- **KPI**: 100% single-use, fraud rate <5%.

### 2.6. Đổi Sampling & Tích hợp POS
- **Admin**:
  - Cài đặt POS API/webhook.
  - Import batch CSV redeem logs.
  - Quản lý Redeem Tool.
- **Group Admin**:
  - Xem redemption stats trong Group.
  - Import redeem logs trong Group.
- **Customer Account**: Xem redemption stats Campaign riêng.
- **Serving Account**:
  - Scan barcode qua Redeem Tool (web/app).
  - Update redeem status.
  - Xem ticket liên quan redeem.
- **Auditor**: Xem logs redeem.
- **User Role**: Xem trạng thái redeem qua User Portal.
- **Yêu cầu kỹ thuật**: Scandit SDK, IndexedDB offline sync, User Portal API.
- **KPI**: Redemption success >98%.

### 2.7. Import trạng thái Redeem
- **Admin**:
  - Import CSV redeem logs.
  - Update trạng thái barcode (Đã redeem).
- **Group Admin**:
  - Import redeem logs trong Group.
  - Xem trạng thái redeem trong Group.
- **Customer Account**: Xem trạng thái redeem Campaign riêng.
- **Serving Account**: Không có quyền.
- **Auditor**: Xem logs redeem import.
- **User Role**: Không có quyền.
- **Yêu cầu kỹ thuật**: CSV parsing, ERP webhook.
- **KPI**: Reconciliation accuracy >95%.

### 2.8. Báo cáo & Analytics
- **Admin**:
  - Xem toàn bộ báo cáo (funnel, Campaign, Ads, Location, survey).
  - Xuất CSV/Excel/API.
- **Group Admin**: Xem báo cáo tổng hợp Group.
- **Customer Account**:
  - Xem báo cáo Campaign riêng.
  - Xuất data khách (CSV/API).
- **Serving Account**: Không có quyền.
- **Auditor**: Xem báo cáo compliance.
- **User Role**: Xem báo cáo cá nhân (sản phẩm, trạng thái) qua User Portal.
- **Yêu cầu kỹ thuật**: Metabase embed, BigQuery, post-sampling surveys.
- **KPI**: 24h insight reports, CPL <0.4 USD.

### 2.9. Phân quyền & Quản lý User
- **Admin**:
  - Tạo/sửa/xóa user, gán role.
  - Cài đặt API, POS, CRM, User Portal.
- **Group Admin**:
  - Tạo/sửa user trong Group.
  - Gán role trong Group.
- **Customer Account**: Xem profile/permissions của mình.
- **Serving Account**: Chỉ login Redeem Tool.
- **Auditor**: Xem permissions/logs.
- **User Role**: Không có quyền quản lý user.
- **Yêu cầu kỹ thuật**: Keycloak/OAuth2, JWT auth.
- **KPI**: Zero unauthorized access.

### 2.10. User Portal
- **Admin**:
  - Config User Portal (notification rules, FAQ, survey).
  - Quản lý ticket từ user.
- **Group Admin**:
  - Xem user interaction stats trong Group.
- **Customer Account**:
  - Xem user interaction stats Campaign riêng.
- **Serving Account**:
  - Xem ticket liên quan redeem.
- **Auditor**:
  - Xem logs user interaction (view, ticket, survey).
- **User Role**:
  - Xem danh sách sản phẩm (barcode, product_name, expiry_date).
  - Kiểm tra trạng thái barcode (Chưa redeem/Đã redeem/Hết hạn).
  - Nhận push notification (SMS/email/PWA) nhắc redeem/offers.
  - Gửi ticket hỗ trợ (barcode lỗi).
  - Withdraw consent (GDPR/PDPA).
- **Yêu cầu kỹ thuật**: React PWA, Twilio notifications, Zendesk tickets, GA4 tracking.
- **KPI**: User engagement >70%, ticket resolution <48h.

---

## 3. Yêu cầu kỹ thuật tổng quan
- **Stack**: Microservices (Node.js/Go), React PWA, AWS/GCP, MongoDB/PostgreSQL.
- **Security**: PII encrypted (AES), ISO 27001, audit trails.
- **Scalability**: Multi-tenant, hỗ trợ 10M users (2027).
- **Tích hợp**: HubSpot/Salesforce, Twilio, Scandit, GA4/Meta Pixel, Zendesk.

## 4. KPI phân quyền
- Zero data leakage giữa roles.
- Role setup time <5 phút.
- Compliance 100% (GDPR/PDPA).
- User Portal engagement >70% (2025).
