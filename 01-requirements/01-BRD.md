# 📋 Business Requirement Document (BRD)
**Hệ thống Product Sampling**

**Phiên bản**: 3.0  
**Ngày**: 2025-10-17  
**Tác giả**: Mark Nguyen & AI Business Analyst  
**Tình trạng phê duyệt**: Chờ review từ C-level & stakeholders  

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

* Brands muốn chi tiền cho verified data hơn là logistics.
* Retail nodes có smartphone hoặc tablet để scan barcode.
* Mạng Internet tại retail node có thể intermittent; hệ thống cần offline-first sync.
* Dữ liệu cá nhân (PII) tuân thủ PDPA/GDPR.

---

### 1.4 Ràng buộc (Constraints)

* Hệ thống phải xử lý peak load 100.000 requests/phút tại API gateway.
* Voucher phải là single-use, atomic redeem.
* Redis là cache/queue; cần fallback khi Redis down.
* Ngân sách seed: 500K USD; đội dev: 8 người.

---

### 1.5 Mục tiêu chiến lược & KPI

**Ngắn hạn (2025)**
* Triển khai MVP tại VN, ký 20 brands, xử lý 1M mẫu, thu $240K revenue.

**Trung hạn (2026)**
* Mở rộng Thái/Indo, 80 brands, 3M users, $1.12M revenue.

**Dài hạn (2027)**
* Dẫn đầu SEA, 200 brands, 10M users, $2.8M revenue; exit (M&A / IPO).

**KPI:**
* Cost per verified user ≤ 0.4 USD
* Conversion rate ≥ 90%
* Fraud rate ≤ 5%
* User engagement (gamification) ≥ 70%
* Dashboard realtime latency ≤ 3s

---

## 2. Mô hình tài chính chi tiết (Financial Model)

### 2.1 Mô hình doanh thu

**Các nguồn doanh thu chính:**

1. **Đăng ký SaaS (70% doanh thu)**
   - Gói Starter: 12 triệu/tháng (Tối đa 5K leads)
   - Gói Professional: 36 triệu/tháng (Tối đa 20K leads) 
   - Gói Enterprise: 120 triệu/tháng (Unlimited + tùy chỉnh)

2. **Phí sử dụng theo lượt (25% doanh thu)**
   - Mỗi verified lead: 2.400-3.600 VND
   - Mỗi lần redeem: 1.200 VND
   - Export dữ liệu: 480 VND/record

3. **Dịch vụ & Add-ons (5% doanh thu)**
   - Setup chiến dịch: 24-120 triệu
   - Tích hợp tùy chỉnh: 240-1.2 tỷ
   - Bản quyền white-label: 1.2 tỷ/năm

### 2.2 Dự báo tài chính 3 năm

| Chỉ số | Năm 1 | Năm 2 | Năm 3 |
|--------|-------|-------|-------|
| **Doanh thu** | | | |
| SaaS Subscriptions | 4.32 tỷ | 20.16 tỷ | 50.4 tỷ |
| Phí sử dụng | 1.08 tỷ | 5.04 tỷ | 12.6 tỷ |
| Dịch vụ | 360 triệu | 1.68 tỷ | 4.2 tỷ |
| **Tổng doanh thu** | **5.76 tỷ** | **26.88 tỷ** | **67.2 tỷ** |
| | | | |
| **Chi phí** | | | |
| Đội ngũ phát triển | 11.52 tỷ | 17.28 tỷ | 23.04 tỷ |
| Hạ tầng công nghệ | 576 triệu | 2.016 tỷ | 4.032 tỷ |
| Bán hàng & Marketing | 2.88 tỷ | 6.72 tỷ | 13.44 tỷ |
| Vận hành | 1.44 tỷ | 2.688 tỷ | 5.376 tỷ |
| **Tổng chi phí** | **16.416 tỷ** | **28.704 tỷ** | **45.888 tỷ** |
| | | | |
| **Lợi nhuận ròng** | **(10.656 tỷ)** | **(1.824 tỷ)** | **21.312 tỷ** |
| **Cash flow tích lũy** | (10.656 tỷ) | (12.48 tỷ) | 8.832 tỷ |

### 2.3 Unit Economics

**Thu hút khách hàng:**
- Chi phí thu hút khách hàng (CAC): 48 triệu
- Giá trị khách hàng trọn đời (LTV): 432 triệu  
- Tỷ lệ LTV/CAC: 9:1
- Thời gian hoàn vốn: 8 tháng

**Kinh tế học mỗi giao dịch:**
- Doanh thu trung bình mỗi khách (ARPU): 36 triệu/tháng
- Biên lợi nhuận gộp: 85%
- Tỷ lệ rời bỏ hàng tháng: <5%
- Tỷ lệ giữ chân doanh thu ròng: 120%

### 2.4 Các chỉ số kinh doanh chính

| KPI | Mục tiêu Năm 1 | Mục tiêu Năm 2 | Mục tiêu Năm 3 |
|-----|----------------|----------------|----------------|
| **Chỉ số khách hàng** | | | |
| Tổng khách hàng | 25 | 80 | 200 |
| Khách hàng doanh nghiệp | 5 | 20 | 60 |
| Tỷ lệ rời bỏ hàng tháng | <8% | <5% | <3% |
| Net Promoter Score | >50 | >60 | >70 |
| | | | |
| **Chỉ số nền tảng** | | | |
| Chiến dịch hoạt động/tháng | 100 | 500 | 1,500 |
| Verified Leads/tháng | 50K | 200K | 500K |
| Tỷ lệ redeem | >85% | >90% | >92% |
| Uptime nền tảng | >99.5% | >99.9% | >99.95% |

---

## 3. Vấn đề kinh doanh (Business Problem)

**Thách thức hiện tại:**
* **Chi phí phân phối cao**: logistics > giá trị quà.
* **Spam / gian lận**: đăng ký ảo / bot làm data chất lượng thấp.
* **Thiếu đo lường**: khó track ROI, funnel, hiệu quả chiến dịch.

**Giải pháp:** PSS thu thập data verified, phân phối voucher, tích hợp CRM, dashboard realtime, gamification & reward points để tăng engagement.

---

## 4. Yêu cầu kinh doanh (Business Requirements)

### 4.1 User Story – Core Flow

| Module              | Actor           | User Story                                                                              |
| ------------------- | --------------- | --------------------------------------------------------------------------------------- |
| Campaign Management | Admin / Brand   | Tôi muốn tạo/cấu hình chiến dịch để gán barcode, ads format, location, và UTM tracking. |
| Barcode / Voucher   | Admin / User    | Tôi muốn phát voucher duy nhất cho user verified, để người dùng redeem sample tại POS.  |
| Landing Page        | User            | Tôi muốn điền form + OTP verify để nhận voucher một cách an toàn.                       |
| Redeem POS          | Serving Account | Tôi muốn scan voucher để cập nhật trạng thái redeemed.                                  |
| Dashboard Analytics | Brand / Admin   | Tôi muốn xem funnel, ROI, top-performing node realtime và export CSV/Excel.             |

### 4.2 User Story – Module mới

| Module                       | Actor         | User Story                                                                                                               |
| ---------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Gamification / Reward Points | User          | Tôi muốn nhận điểm khi redeem sample, share campaign, submit survey, để có thể đổi quà hoặc nâng cấp hạng.               |
| Gamification / Reward Points | Admin / Brand | Tôi muốn cấu hình rules cho điểm thưởng, leaderboard, và campaign-specific rewards.                                      |
| Banner Ads / Mini Widget     | Admin / Brand | Tôi muốn upload banner hoặc mini widget trên landing page/partner site để quảng bá chiến dịch, track click & impression. |
| Export Analytics             | Brand / Admin | Tôi muốn xuất dữ liệu campaign (CSV/Excel/API) theo campaign, location, status, để phân tích sâu hơn hoặc đưa về CRM.    |
| Consent / Privacy            | User          | Tôi muốn withdraw consent, opt-out hoặc cập nhật thông tin cá nhân để tuân thủ PDPA/GDPR.                                |

### 4.3 Phân quyền (RBAC) – chi tiết

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

### 4.4 Yêu cầu báo cáo & KPI

* Realtime dashboard: conversion, redemption, engagement, ROI, spam rate.
* Export CSV/Excel/API cho brand.
* Gamification: điểm thưởng, leaderboard, reward redemption.
* Phân quyền đúng, audit logs đầy đủ.

---

## 5. Phân tích rủi ro & giảm thiểu

### 5.1 Rủi ro kinh doanh

| Rủi ro | Xác suất | Tác động | Chiến lược giảm thiểu |
|--------|----------|----------|----------------------|
| **Chậm thu hút khách hàng** | Trung bình | Cao | Chương trình pilot miễn phí, đảm bảo thành công |
| **Đối tác bán lẻ kháng cự** | Trung bình | Trung bình | Mô hình chia sẻ doanh thu, chương trình đào tạo |
| **Cạnh tranh từ ông lớn** | Cao | Trung bình | Đăng ký bằng sáng chế, quan hệ đối tác độc quyền |
| **Thay đổi quy định** | Thấp | Cao | Đội ngũ tuân thủ pháp lý, kiểm toán thường xuyên |

### 5.2 Rủi ro kỹ thuật

| Rủi ro | Xác suất | Tác động | Chiến lược giảm thiểu |
|--------|----------|----------|----------------------|
| **Vấn đề mở rộng quy mô** | Trung bình | Cao | Kiến trúc cloud-native, kiểm thử tải |
| **Vi phạm bảo mật** | Thấp | Cao | Phát triển ưu tiên bảo mật, kiểm toán thường xuyên |
| **Thay đổi API bên thứ ba** | Trung bình | Trung bình | Nhiều nhà cung cấp, hệ thống dự phòng |

---

## 6. Kế hoạch triển khai

### 6.1 Phase 1: Phát triển MVP (Tháng 1-6)

**Ngân sách: 9.6 tỷ VND**

**Yêu cầu đội ngũ:**
- 1x Product Manager
- 2x Frontend Developers  
- 3x Backend Developers
- 1x DevOps Engineer
- 1x QA Engineer
- 1x UI/UX Designer

**Sản phẩm chính:**
- Hệ thống quản lý chiến dịch cốt lõi
- Dashboard analytics cơ bản
- Hệ thống xác thực OTP
- 5 tích hợp CRM
- 10 khách hàng pilot

**Chỉ số thành công:**
- Uptime nền tảng >99%
- Hài lòng khách hàng >4.5/5
- Cost-per-lead <12K VND

### 6.2 Phase 2: Mở rộng & Tối ưu (Tháng 7-12)

**Ngân sách: 14.4 tỷ VND**

**Tính năng bổ sung:**
- Analytics nâng cao với AI insights
- User portal với gamification
- Nền tảng mạng lưới bán lẻ
- Mobile apps (iOS/Android)
- Mở rộng quốc tế (Thái Lan)

**Chỉ số thành công:**
- 50+ khách hàng hoạt động
- 1.2+ tỷ VND doanh thu hàng tháng
- Nền tảng xử lý 1M+ giao dịch/tháng

---

## 7. Yêu cầu nguồn lực & ngân sách

### 7.1 Nguồn nhân lực (Kế hoạch 3 năm)

| Vai trò | Năm 1 | Năm 2 | Năm 3 | Tổng chi phí |
|---------|-------|-------|-------|--------------|
| **Kỹ thuật** | 6 | 8 | 12 | 36 tỷ |
| **Sản phẩm & Thiết kế** | 2 | 3 | 4 | 9.6 tỷ |
| **Bán hàng & Marketing** | 3 | 6 | 10 | 14.4 tỷ |
| **Vận hành & Hỗ trợ** | 2 | 4 | 6 | 7.2 tỷ |
| **Đội ngũ điều hành** | 3 | 4 | 5 | 19.2 tỷ |
| **Tổng nhân sự** | **16** | **25** | **37** | **86.4 tỷ** |

### 7.2 Hạ tầng công nghệ

| Thành phần | Năm 1 | Năm 2 | Năm 3 | Tổng 3 năm |
|------------|-------|-------|-------|------------|
| **Cloud Hosting** | 576 triệu | 2.016 tỷ | 4.032 tỷ | 6.624 tỷ |
| **Dịch vụ bên thứ ba** | 288 triệu | 864 triệu | 1.728 tỷ | 2.88 tỷ |
| **Công cụ phát triển** | 144 triệu | 360 triệu | 600 triệu | 1.104 tỷ |
| **Bảo mật & Tuân thủ** | 432 triệu | 720 triệu | 1.44 tỷ | 2.592 tỷ |

### 7.3 Yêu cầu vốn

**Tổng nhu cầu đầu tư 3 năm: 122.64 tỷ VND**

**Các vòng gọi vốn:**
- **Vòng Seed (Tháng 0)**: 36 tỷ VND cho phát triển MVP
- **Vòng Series A (Tháng 18)**: 86.64 tỷ VND cho mở rộng
- **Tín dụng doanh thu (Tháng 30)**: 24 tỷ VND cho vốn lưu động

---

## 8. Tiêu chí thành công & Phê duyệt

### 8.1 Hành động ngay lập tức (30 ngày tới)

1. **Xác thực kỹ thuật**
   - Review kiến trúc với CTO
   - Finalize công nghệ
   - Xác nhận timeline phát triển

2. **Xác thực thị trường**
   - Phỏng vấn 10 khách hàng tiềm năng
   - Thiết kế chương trình pilot
   - Thảo luận partnership với 3 chuỗi bán lẻ

3. **Kế hoạch tài chính**
   - Breakdown ngân sách chi tiết
   - Phát triển chiến lược gọi vốn
   - Tạo pitch deck cho nhà đầu tư

### 8.2 Yêu cầu phê duyệt

| Bên liên quan | Cần phê duyệt cho | Timeline |
|---------------|-------------------|----------|
| **CEO** | Kế hoạch kinh doanh tổng thể, Phân bổ ngân sách | Tuần 1 |
| **CTO** | Kiến trúc kỹ thuật, Phương pháp phát triển | Tuần 2 |
| **CFO** | Dự báo tài chính, Chiến lược gọi vốn | Tuần 2 |
| **Hội đồng quản trị** | Đầu tư lớn, Định hướng chiến lược | Tuần 4 |

### 8.3 Tiêu chí thành công cho việc phê duyệt BRD

- [ ] Phê duyệt nhất trí từ đội ngũ điều hành
- [ ] Tính khả thi kỹ thuật được CTO xác nhận
- [ ] Mô hình tài chính được CFO xác thực
- [ ] Ít nhất 3 khách hàng pilot cam kết
- [ ] Đường dẫn gọi vốn được đảm bảo (LOI từ nhà đầu tư)

---

## 9. Kết luận

Product Sampling System đại diện cho **cơ hội thị trường 2.4 tỷ USD+** trong bối cảnh digital marketing đang phát triển ở SEA. Với nền tảng kỹ thuật vững chắc, chiến lược go-to-market rõ ràng, và mô hình kinh doanh đã được chứng minh, PSS có tiềm năng trở thành người dẫn đầu thị trường trong 3 năm.

**Các yếu tố thành công chính:**
- Thực thi xuất sắc trong phát triển sản phẩm
- Quan hệ đối tác mạnh mẽ với thương hiệu và nhà bán lẻ  
- Phương pháp dựa trên dữ liệu để thu hút và giữ chân khách hàng
- Đổi mới liên tục để duy trì lợi thế cạnh tranh

**Khuyến nghị đầu tư**: **TIẾN HÀNH VỚI NGUỒN VỐN ĐẦY ĐỦ**

Dự án có xác suất thành công cao với ROI dự kiến >400% cho nhà đầu tư và con đường rõ ràng đến lợi nhuận vào Năm 3.

---

**Tình trạng tài liệu**: Sẵn sàng cho Executive Review  
**Ngày review tiếp theo**: 2025-10-24  
**Chủ sở hữu tài liệu**: Mark Nguyen, Product Manager
