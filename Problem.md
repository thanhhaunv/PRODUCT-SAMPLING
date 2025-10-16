# QUẢN LÝ PHÂN PHỐI PRODUCT SAMPLING

#### 1. Phân loại mục tiêu:
- **Must-have (Core)**: Các tính năng thiết yếu cho MVP, giữ nguyên từ gốc và ý kiến, để hệ thống chạy cơ bản và thu thập dữ liệu hiệu quả.
- **Should-have (Advanced - Phase 2)**: Các tính năng cần thêm để tối ưu hóa, dựa trên ý kiến (như inventory reconciliation, fraud detection) và gợi ý của tôi (như A/B testing sớm).
- **Nice-to-have (Future-proof - Phase 3)**: Các tính năng mở rộng cho tầm nhìn dài hạn, tránh phức tạp ban đầu nhưng chuẩn bị cho scalability (như blockchain optional, marketplace co-sampling).

### Must-have (Core - MVP)
Những mục tiêu này tập trung vào quy trình hybrid (retail + digital), thu thập dữ liệu an toàn, và đo lường cơ bản, đảm bảo hệ thống vận hành mượt mà ở pilot (5-10 stores). Ưu tiên reliability (OTP/redemption) và low-friction onboarding cho retailer.

1. **Quản lý và phân phối sản phẩm dùng thử tại các điểm bán lẻ (Circle K, Mini Stop, siêu thị, booth sự kiện)**: Hỗ trợ phân phối hybrid (vật lý tại POS/booth + digital voucher), với QR code dẫn đến landing page. Tích hợp cơ bản với POS (scanning instructions và retailer onboarding checklist) để redeem tại chỗ, tránh logistics phức tạp như gửi mail.

2. **Thu thập thông tin khách hàng**: Họ Tên, Email, Số điện thoại (bắt buộc), kèm demographics cơ bản (tuổi, giới tính - optional) và preferences qua quiz ngắn để tăng giá trị data.

3. **Xác thực khách hàng để chống spam**: Sử dụng Email OTP hoặc SMS OTP, kết hợp CAPTCHA và rate-limiting cơ bản (per IP/phone/email) để chống bot từ đầu.

4. **Cấp phát mã barcode/voucher duy nhất**: Mã single-use, time-limited, generate tự động (QR/barcode image), gửi qua email/SMS hoặc hiển thị trên PWA sau verify.

5. **Quản lý và đo lường toàn bộ quy trình (funnel tracking)**: Theo dõi realtime từ QR scan → form submit → verify → issue code → redeem, với event logging và basic admin dashboard (metrics như conversion %, cost-per-verified-lead, system uptime).

6. **Phục vụ remarketing và kết nối CRM**: Tích hợp webhook/connector với CRM (HubSpot/Salesforce/Braze) để sync data, hỗ trợ opt-in flags và basic drip emails (remarketing dựa trên hành vi redeem).

### Should-have (Advanced - Phase 2: Scale & Optimization)
Những mục tiêu này mở rộng từ MVP để xử lý fraud, partner management, và analytics sâu hơn, dựa trên ý kiến (fraud detection, reconciliation, A/B testing) và gợi ý của tôi (thêm basic fraud rules sớm, ưu tiên A/B để tăng conversion 6x).

1. **Inventory và fulfillment reconciliation**: Quản lý stock theo batch (expiration, location từ warehouse → store/booth), với audit trail cho sample đổi/trả và inventory accuracy % KPI.

2. **Retailer/Store portal và POS adapters**: Portal riêng cho retailer (xem stock, redemptions, báo cáo), tích hợp với nhiều chuẩn POS (scan, coupon format) qua SDK (e.g., Scandit).

3. **Fraud detection và trust scoring**: Real-time rules + ML cơ bản (device fingerprinting, velocity checks, OTP fail rate, duplicate patterns), với anomaly dashboards và auto-block (tạm ban suspicious leads).

4. **Consent management và privacy hub**: Lưu record consent (versioned policy), opt-in cho channels (email/SMS/ads), hỗ trợ right-to-be-forgotten và PII encryption, tuân thủ GDPR/PDPA.

5. **Partner/Brand dashboard và SLA controls**: Phân quyền theo brand/campaign, KPI dashboard (budget caps, uptime SLA), với partner SLA contract (settlement window, claims procedure).

6. **Reconciliation và settlement engine**: Đối soát claims giữa brand-retailer-hệ thống, generate invoices/payouts, với time-to-reconcile KPI (days).

7. **Offline mode và sync**: Cho booth/retailer (local queue + sync khi online), sử dụng IndexedDB hoặc SQLite để tránh thất thoát data/sample.

8. **User identity merge/deduplication (CDP features)**: Ghép profile bằng email/phone/hashed IDs, tạo single customer view cho remarketing hiệu quả.

9. **A/B testing và dynamic offers**: Test incentive types, creatives, game mechanics để tối ưu conversion và cost-per-redemption, với auto-experiment routing (ưu tiên sớm để đo ROI nhanh).

10. **Support và dispute workflow**: Ticketing system cho khiếu nại (mã không hợp lệ), resolution trong 48h, tư vấn store logs/camera.

11. **Attribution và ROI module**: Theo dõi campaign (store/channel-level), tính LTV uplift, redemption uplift vs baseline sales, với funnel visualization.

12. **Localization/multi-market support**: Hỗ trợ ngôn ngữ, luật OTP/telco providers, privacy law theo region (bắt đầu với Việt Nam, mở rộng ASEAN).

### Nice-to-have (Future-proof - Phase 3: Vision & Expansion)
Những mục tiêu này hướng đến 15-36 tháng sau, tập trung vào innovation (AI, sustainability) để hệ thống trở thành marketplace dẫn đầu, dựa trên ý kiến (real-time attribution, tokenization optional) và gợi ý của tôi (sustainability tracking, omnichannel).

1. **Sustainability tracking**: Theo dõi carbon footprint, vật liệu tái chế cho sampling, với KPI như waste reduction % để thu hút Gen Z và tăng brand loyalty.

2. **AI-driven personalization và predictive analytics**: Sử dụng ML để gợi ý sample/dynamic offers dựa trên data (lead score), dự đoán nhu cầu inventory.

3. **Omnichannel expansion**: Kết nối e-commerce (Shopee/Lazada), voice-activated (Alexa), và social media pixels cho remarketing cross-channel.

4. **Automated remarketing campaigns**: Drip flows nâng cao, tích hợp CDP full (Segment/Braze) cho personalized journeys.

5. **Real-time attribution và closed-loop measurement**: Kết nối POS sales data để đo sampling → purchases trực tiếp.

6. **Marketplace cho brand co-sampling**: Hỗ trợ multi-brand bundles, programmatic rules engine cho offers.

7. **Tokenization/Blockchain cho traceability**: Immutable logs cho redemption (optional, chỉ nếu audit critical như pharma).

8. **Mobile SDKs và AR integration**: Cho POS apps/staff scanning, thêm virtual try-on cho sampling (nếu áp dụng cho mỹ phẩm/thời trang).

9. **Advanced analytics/data warehouse**: Với BI tools (BigQuery/Snowflake) cho deep insights, NPS post-sampling, và fraud ML model đầy đủ.

#### 2️⃣ TÍNH NĂNG CHÍNH
**A. Quản lý Barcode/Voucher (Must-have)**
- Import barcode từ hệ thống khách hàng (CSV/Excel/API), dữ liệu bao gồm: barcode, product_name, expiry_date, value (nếu voucher), batch_code, quantity_available.
- Quản lý trạng thái: Chưa phát / Đã phát / Đã redeem / Hết hạn / Revoked (cho fraud).
- Hỗ trợ import lại để đối soát (phát tay hoặc ngoài luồng), với audit trail (immutable logs).
- Tích hợp API push/pull đồng bộ với ERP/CRM (e.g., HubSpot/Salesforce), sử dụng webhook cho realtime updates.
- **Thêm (từ Voucherify)**: Batch management (expiration tracking, location assignment từ warehouse → shop), với inventory accuracy KPI (>95%).

**B. Quản lý Chiến dịch (Campaign) (Must-have)**
- Tạo nhiều Campaign, mỗi cái có: Tên, Mô tả, Thời gian bắt đầu/kết thúc, Danh sách barcode riêng, Danh sách sản phẩm, Danh sách location/shop/booth.
- Gán tập barcode và Ads Format riêng, với landing page gắn Campaign ID + UTM tags cho tracking.
- **Thêm (từ Peekage/Talon.One)**: Geo-targeting (dựa GPS đẩy notification gần shop), và A/B testing (test incentives/creatives để tối ưu conversion, như Peekage's AI-optimized studies).

**C. Quản lý Ads Format (Must-have)**
- Mỗi Campaign có nhiều Ads Format, với: Tên, Kích thước, Số lượng in, QR/short link riêng, Tracking info (campaign_id, ads_format_id, location_id, UTM).
- Upload: File thiết kế (PNG/JPG/PDF ≥300 DPI), Logo, Kích thước in, Vị trí/kích thước QR + safe zone.
- Danh sách đề xuất (giữ nguyên 13 loại, thêm **Digital Ads Banner** và **Social Media Snippet** để omnichannel).
- **Thêm (từ Bazaarvoice/SoPost)**: UGC integration (khuyến khích khách share review post-sampling), và dynamic QR (thay đổi theo thời gian để chống duplicate scans).

**D. Landing Page & Form (Must-have)**
- Hiển thị sản phẩm sampling, quyền lợi, với quiz ngắn thu thập preferences (e.g., dietary habits như Peekage).
- Form: Họ Tên, Email, SĐT (bắt buộc), tick opt-in (marketing/privacy), với CAPTCHA/reCAPTCHA v3.
- Xác thực: Email/SMS OTP (Twilio/MessageBird), giới hạn retry (3 lần), timeout (5 phút).
- **Thêm (từ SoPost/Voucherify)**: Consent management (lưu versioned policy, flags cho channels, right-to-be-forgotten), tuân thủ GDPR/PDPA.

**E. Cấp phát Barcode (Must-have)**
- Sau verify, gán barcode single-use/time-limited từ pool chưa phát.
- Log đầy đủ: user_id, campaign_id, ads_format_id, location_id, timestamp, device info.
- Hiển thị barcode (PDF/ví điện tử như Apple Wallet), gửi email/SMS.
- **Thêm (từ Talon.One)**: Personalization (gợi ý barcode dựa preferences), và velocity rules (max 1/user/day).

**F. Đổi Sampling & Tích hợp POS (Must-have)**
- Staff redeem qua web/app scan (cung cấp tool), hoặc tích hợp POS Circle K/shop (review thiết bị, API/out file).
- Nhận log redeem realtime (webhook) hoặc batch (CSV import), update trạng thái.
- Log: barcode, redeem_date, location, staff_id.
- **Thêm (từ Voucherify/Peekage)**: Offline mode (local sync khi online), và atomic redeem (DB transactions chống double-claim).

**G. Fraud Detection & Security (Advanced)**
- Real-time rules/ML: Device fingerprinting, velocity checks (e.g., max submits/IP), OTP fail ratio, disposable email block.
- Auto-block suspicious (ban tạm), với dashboards investigate.
- **Thêm (từ Voucherify)**: Budget caps, anomaly detection để bảo vệ chi phí.

**H. Báo cáo & Analytics (Advanced)**
- Dashboard realtime: Funnel metrics (scan/submit/verify/issue/redeem), theo Campaign/Ads/Location/Thời gian.
- Xuất CSV/Excel/API, với advanced KPIs (CPL_verified, CPR, LTV uplift, fraud rate <5%).
- **Thêm (từ Bazaarvoice/Peekage)**: Post-sampling surveys (NPS/reviews), AI insights (sentiment analysis), và ROI attribution (sales lift vs baseline).

**I. Phân quyền (Must-have)**
- Giữ nguyên 4 levels (Admin, Group Admin, Customer Account, Serving Account), thêm **Auditor Role** (chỉ xem logs/compliance).

#### 3️⃣ FLOW VẬN HÀNH
1. Import/gán barcode vào Campaign.
2. Tạo Campaign, Ads Format, QR dynamic.
3. In/phát tại shop/booth.
4. Khách scan → form + quiz → verify (OTP + CAPTCHA).
5. Cấp barcode personalized.
6. Khách redeem tại POS (online/offline).
7. POS/webhook update redeem → fraud check.
8. Dashboard analytics + UGC collection.
9. Export data cho CRM/automation.

#### 4️⃣ YÊU CẦU KỸ THUẬT BỔ SUNG
- Log gắn đầy đủ IDs, với GA/Meta Pixel tracking.
- QR bảo mật (encrypted, hạn dùng), chống spam (rate-limiting).
- API đồng bộ (REST/webhooks) với CRM/ERP/POS.
- Security: PII encrypted, ISO 27001-like (như Voucherify).
- **Thêm**: Sustainability tracking (carbon footprint từ in ấn/sampling), offline sync (IndexedDB).

#### 5️⃣ MỞ RỘNG (Future-proof)
- Gamification (tích điểm, challenges như Talon.One).
- QR unique per flyer (traceability).
- Push data cho Email Automation (drip campaigns).
- **Thêm (từ Peekage/Bazaarvoice)**: AI personalization, marketplace co-sampling (multi-brand), AR try-on integration.
