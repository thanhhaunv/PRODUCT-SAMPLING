# 📋 System Requirement Specification (SRS)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  
**Dựa trên**: BRD v3.0, System Feature Tree v4.0, Access Control Tree v2.2  

---

## 📑 Mục lục tài liệu

| Part       | Tên phần                                                    | Tình trạng   | Mô tả chức năng                                              |
| :--------- | :---------------------------------------------------------- | :----------- | :----------------------------------------------------------- |
| **Part00** | **Mục lục tài liệu**                                       | ✅ Hoàn thành | Index và overview tổng thể về cấu trúc SRS                   |
| **Part01** | **Giới thiệu (Introduction)**                              | ⏳ Sắp tạo   | Mục tiêu SRS, phạm vi dự án, định nghĩa thuật ngữ, tài liệu tham chiếu |
| **Part02** | **Tổng quan hệ thống (Overall Description)**               | ⏳ Sắp tạo   | Stakeholders, system actors, use context, constraints và assumptions |
| **Part03** | **Phạm vi & Mục tiêu sản phẩm (Scope and Objectives)**     | ⏳ Sắp tạo   | Business goals, success criteria, feature mapping theo MoSCoW |
| **Part04** | **Yêu cầu chức năng (Functional Requirements)**            | ⏳ Sắp tạo   | FR-001 → FR-013: Campaign Management, Barcode, Landing Page, OTP, Redemption, Analytics, CRM, RBAC, User Portal, Ads Format |
| **Part05** | **Yêu cầu phi chức năng (Non-Functional Requirements)**    | ⏳ Sắp tạo   | Performance (100K RPM), scalability (10M users), security (ISO 27001), reliability (99.9% uptime), usability KPIs |
| **Part06** | **Kiến trúc hệ thống (System Architecture & Components)**  | ⏳ Sắp tạo   | Microservices architecture, component diagram, technology stack, deployment architecture, CI/CD pipeline |
| **Part07** | **Thiết kế dữ liệu & CSDL (Data Design & Database Schema)** | ⏳ Sắp tạo   | ERD, collection design (MongoDB), relational schema (PostgreSQL), Redis caching strategy, data flow |
| **Part08** | **Thiết kế API & Tích hợp (API Design & Integration)**     | ⏳ Sắp tạo   | REST API endpoints, webhook specifications, error handling, rate limiting, third-party integrations |
| **Part09** | **Use Case chi tiết (Detailed Use Cases)**                 | ⏳ Sắp tạo   | 8 use cases chính với flow steps, alternative scenarios, exception handling |
| **Part10** | **Giao diện & Wireframes (UI/UX Design)**                  | ⏳ Sắp tạo   | User experience flow, wireframes, UI components, accessibility standards, mobile responsiveness |
| **Part11** | **Bảo mật & Tuân thủ (System Security & Compliance)**      | ⏳ Sắp tạo   | Authentication (OAuth2), authorization (RBAC), data encryption, GDPR/PDPA compliance, disaster recovery |
| **Part12** | **Kiểm thử hiệu năng & tải (Performance & Load Testing)**  | ⏳ Sắp tạo   | Load testing scenarios (JMeter/K6), performance benchmarks, stress testing procedures |
| **Part13** | **Kế hoạch kiểm thử tổng thể (System & UAT Testing)**      | ⏳ Sắp tạo   | Test strategy, test cases design, UAT matrix, regression testing, quality gates |
| **Part14** | **Quản lý cấu hình & triển khai (Configuration & Deployment)** | ⏳ Sắp tạo | Environment setup, version control strategy, CI/CD workflows, deployment procedures |
| **Part15** | **Kế hoạch bảo trì & vận hành (Maintenance & Monitoring)** | ⏳ Sắp tạo   | System monitoring, logging strategy, incident response procedures, maintenance schedules |
| **Part16** | **Phụ lục & Tài liệu tham chiếu (Appendices)**             | ⏳ Cuối cùng | Glossary, technical diagrams, requirements traceability matrix, change log |

---

## 🎯 Mục tiêu tài liệu SRS

Tài liệu SRS này được xây dựng để:

1. **Cung cấp đặc tả kỹ thuật chi tiết** cho đội phát triển Product Sampling Platform
2. **Đảm bảo alignment** giữa business requirements (BRD) và technical implementation
3. **Hướng dẫn thiết kế và phát triển** các module hệ thống theo chuẩn
4. **Định nghĩa acceptance criteria** cho testing và quality assurance
5. **Tạo baseline** cho project management và change control

## 📐 Phương pháp tiếp cận

- **Chuẩn tham chiếu**: IEEE 830-1998 Software Requirements Specification
- **Phương pháp**: Agile-compatible, iterative refinement
- **Traceability**: Mapping từ BRD → SRS → Design → Code → Test
- **Validation**: Stakeholder review sau mỗi Part

---

**Tình trạng**: Part00 hoàn thành ✅  
**Tiếp theo**: Part01 - Introduction  
**Người review**: Product Manager, System Architect, Development Lead

# 📋 SRS Part01 - Giới thiệu (Introduction)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  

---

## 1.1 Mục đích tài liệu

### 1.1.1 Tổng quan
Tài liệu System Requirement Specification (SRS) này mô tả chi tiết các yêu cầu kỹ thuật cho việc phát triển **Product Sampling Platform (PSS)** - nền tảng quản lý và phân phối sản phẩm dùng thử thông minh. 

SRS được xây dựng dựa trên Business Requirement Document (BRD) đã được phê duyệt, nhằm chuyển đổi các yêu cầu kinh doanh thành đặc tả kỹ thuật chi tiết cho đội phát triển.

### 1.1.2 Đối tượng sử dụng
- **System Architect**: Thiết kế kiến trúc hệ thống
- **Development Team**: Backend, Frontend, DevOps engineers
- **QA Team**: Thiết kế test cases và quality assurance
- **Product Manager**: Validation và acceptance criteria
- **Business Stakeholders**: Review và sign-off requirements

### 1.1.3 Mục tiêu chính
- Định nghĩa rõ ràng functional và non-functional requirements
- Cung cấp đặc tả kỹ thuật để estimate effort và timeline
- Tạo baseline cho change management và version control
- Đảm bảo traceability từ business needs đến technical implementation

---

## 1.2 Phạm vi dự án

### 1.2.1 Tên sản phẩm
**Product Sampling Platform (PSS)** - Nền tảng quản lý phân phối mẫu sản phẩm thông minh

### 1.2.2 Phạm vi chức năng (In-scope)
**MVP Phase (Q1-Q2 2025):**
- Quản lý Campaign và Barcode/Voucher  
- Landing Page với form thu thập dữ liệu khách hàng
- Xác thực OTP (SMS/Email) chống spam
- Cấp phát barcode/voucher single-use
- Redemption tại POS với offline sync
- Dashboard analytics và báo cáo realtime
- Tích hợp CRM cơ bản (webhook/API)
- Phân quyền RBAC cho 6 roles
- User Portal (PWA) cho khách hàng cuối
- Quản lý Ads Format với dynamic QR

**Advanced Phase (Q3 2025-Q4 2026):**
- Fraud detection và trust scoring  
- Inventory reconciliation
- A/B testing và dynamic offers
- Support ticketing system
- Multi-market localization

### 1.2.3 Phạm vi kỹ thuật
- **Platform**: Web-based (PWA), microservices architecture
- **Geographic**: Việt Nam (pilot) → Southeast Asia (expansion)
- **Scale**: Hỗ trợ 10K verified users (MVP) → 10M users (long-term)
- **Integration**: CRM, POS, SMS/Email providers, Analytics tools

### 1.2.4 Ngoài phạm vi (Out-of-scope)
- Logistics thực tế (vận chuyển mẫu hàng)
- Mobile native apps (chỉ PWA)
- Blockchain/tokenization (Phase 3)
- Payment processing cho mua hàng
- ERP quản lý kho hàng phức tạp

---

## 1.3 Định nghĩa và thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| **Product Sampling** | Việc phân phối sản phẩm dùng thử miễn phí để thu thập dữ liệu khách hàng và tăng brand awareness |
| **Campaign** | Chiến dịch phân phối mẫu sản phẩm với mục tiêu, thời gian và ngân sách cụ thể |
| **Barcode/Voucher** | Mã định danh duy nhất (QR code/barcode) cho phép khách hàng đổi lấy mẫu sản phẩm |
| **Landing Page** | Trang web thu thập thông tin khách hàng sau khi scan QR code |
| **OTP (One-Time Password)** | Mã xác thực một lần gửi qua SMS/Email để verify khách hàng |
| **Ads Format** | Định dạng quảng cáo (poster, flyer, banner) chứa QR code của campaign |
| **Redemption** | Quá trình đổi voucher lấy mẫu sản phẩm tại điểm bán |
| **POS (Point of Sale)** | Điểm bán hàng/đổi quà (cửa hàng, booth sự kiện) |
| **Verified User** | Khách hàng đã hoàn thành xác thực OTP và cung cấp thông tin chính xác |
| **Funnel** | Quy trình từ scan QR → điền form → verify OTP → nhận voucher → redeem |
| **RBAC** | Role-Based Access Control - phân quyền dựa trên vai trò |
| **PWA** | Progressive Web App - ứng dụng web có trải nghiệm như mobile app |
| **CPL** | Cost Per Lead - chi phí để thu thập một khách hàng tiềm năng |
| **ROI** | Return on Investment - tỷ suất sinh lời của chiến dịch |

---

## 1.4 Tài liệu tham chiếu

### 1.4.1 Tài liệu dự án
| Tài liệu | Phiên bản | Ngày | Mô tả |
|----------|-----------|------|-------|
| **Problem.md** | 1.0 | 2025-10-16 | Định nghĩa bài toán và phân loại requirements theo MoSCoW |
| **Product-Sampling-Vision-and-Strategy Document.md** | 1.0 | 2025-10-16 | Tầm nhìn chiến lược, cơ hội thị trường và go-to-market strategy |
| **01-BRD.md** | 3.0 | 2025-10-17 | Business Requirement Document với financial model và stakeholder analysis |
| **System_Feature_Tree_Grok.md** | 4.0 | 2025-10-16 | Cây chức năng hệ thống với user stories chi tiết |
| **Access_Control_Tree_Grok.md** | 2.2 | 2025-10-16 | Phân quyền RBAC và access control matrix |

### 1.4.2 Chuẩn kỹ thuật tham chiếu
- **IEEE 830-1998**: Software Requirements Specification standard
- **ISO/IEC 25010**: Systems and software Quality Requirements and Evaluation (SQuaRE)
- **OWASP Top 10**: Web application security standards
- **GDPR/PDPA**: Data protection and privacy regulations
- **ISO 27001**: Information security management standards
- **REST API Design Guidelines**: RESTful web services best practices

### 1.4.3 Technology Standards
- **OpenAPI 3.0**: API specification format
- **OAuth 2.0 / OpenID Connect**: Authentication and authorization
- **JWT (RFC 7519)**: JSON Web Token standard
- **SMS OTP (RFC 4226/6238)**: Time-based One-time Password
- **QR Code (ISO/IEC 18004)**: 2D barcode standard

---

## 1.5 Tổng quan cấu trúc tài liệu

Tài liệu SRS được tổ chức thành 16 phần chính:

**Phần Foundation (Part 01-03):**
- Introduction, Overall Description, Scope & Objectives

**Phần Core Requirements (Part 04-05):**
- Functional Requirements, Non-Functional Requirements  

**Phần Technical Design (Part 06-08):**
- System Architecture, Data Design, API Design

**Phần Implementation (Part 09-11):**
- Use Cases, UI/UX Design, Security & Compliance

**Phần Quality Assurance (Part 12-13):**
- Performance Testing, System Testing

**Phần Operations (Part 14-16):**
- Configuration & Deployment, Maintenance & Monitoring, Appendices

---

## 1.6 Quy trình phê duyệt và quản lý thay đổi

### 1.6.1 Review Process
1. **Technical Review**: System Architect + Lead Developer
2. **Business Review**: Product Manager + Key Stakeholders  
3. **Final Approval**: Project Steering Committee

### 1.6.2 Change Management
- Mọi thay đổi requirements phải được document và approve
- Impact analysis cho technical và business implications
- Version control với semantic versioning (Major.Minor.Patch)
- Traceability matrix cập nhật theo changes

---

**Nguồn tham khảo chính:**
- Business Requirement Document (BRD v3.0)
- System Feature Tree (v4.0) 
- Access Control Tree (v2.2)
- Problem Definition Document (v1.0)
- Product Vision & Strategy Document (v1.0)

**Tình trạng**: Part01 hoàn thành ✅  
**Tiếp theo**: Part02 - Overall Description  
**Người review**: Product Manager, System Architect

# 📋 SRS Part02 - Tổng quan hệ thống (Overall Description)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  

---

## 2.1 Bối cảnh sản phẩm

### 2.1.1 Vấn đề kinh doanh hiện tại
Dựa trên phân tích trong **Problem.md** và **01-BRD.md**, các thương hiệu FMCG đang gặp phải những thách thức sau:

- **Chi phí phân phối cao**: Logistics > giá trị quà tặng (~1 USD)
- **Spam và gian lận**: Đăng ký ảo, bot làm sai lệch dữ liệu khách hàng
- **Thiếu đo lường**: Khó tracking ROI, funnel conversion, hiệu quả campaign
- **Quản lý phức tạp**: Thiếu công cụ tự động hóa quy trình sampling

### 2.1.2 Giải pháp tổng thể
Product Sampling Platform là nền tảng **"Sampling Network-as-a-Service"** giúp:
- Tối ưu phân phối qua mạng lưới retail nodes đã verify
- Thu thập dữ liệu verified với OTP authentication
- Cung cấp analytics realtime và CRM integration
- Giảm cost-per-verified-lead xuống <0.4 USD

### 2.1.3 Vị trí trong hệ sinh thái
```
Brand/Agency → PSS Platform → Retail Network → End Users
     ↑              ↓              ↓           ↓
   CRM/ERP ← Analytics Dashboard ← POS System ← User Portal
```

---

## 2.2 Chức năng sản phẩm tổng quan

### 2.2.1 Core Functions (dựa trên System_Feature_Tree_Grok.md v4.0)

**Quản lý Campaign & Content:**
- Tạo và quản lý campaign với barcode pool, location targeting
- Upload và config ads format (13 loại: poster, flyer, digital banner...)
- Dynamic QR code generation với UTM tracking

**Thu thập & Xác thực dữ liệu:**
- Landing page với form thu thập (tên, email, SĐT, preferences)
- OTP verification (SMS/Email) với anti-fraud measures
- Consent management tuân thủ GDPR/PDPA

**Phân phối & Redemption:**
- Cấp phát voucher/barcode single-use sau verification
- POS integration cho redemption tại stores/booths
- Offline sync cho retail nodes không có internet ổn định

**Analytics & Integration:**
- Funnel tracking realtime (scan → submit → verify → redeem)
- CRM sync với webhook/API (HubSpot, Salesforce)
- User portal cho customer experience

### 2.2.2 Advanced Functions (Phase 2)
- Fraud detection với ML-based scoring
- Inventory reconciliation và settlement
- A/B testing cho campaign optimization
- Multi-market localization

---

## 2.3 Người dùng và đặc điểm

### 2.3.1 System Actors (dựa trên Access_Control_Tree_Grok.md v2.2)

| Actor | Mô tả | Đặc điểm sử dụng | Quyền truy cập |
|-------|-------|------------------|----------------|
| **Admin** | Quản trị hệ thống toàn cục | - IT background<br>- Toàn quyền config<br>- Troubleshooting | Full access toàn bộ modules |
| **Group Admin** | Quản lý nhóm brands/agencies | - Marketing background<br>- Quản lý multi-brand<br>- Strategy planning | Group-scoped permissions |
| **Customer Account** | Brand manager/Agency account | - Campaign management<br>- ROI tracking<br>- Data analysis | Own campaigns only |
| **Serving Account** | Staff tại retail nodes | - Limited tech skills<br>- Mobile/tablet usage<br>- Quick scan operations | Redemption tool only |
| **Auditor** | Compliance và audit | - Legal/compliance background<br>- Read-only access<br>- Report generation | View logs và compliance reports |
| **User Role (End User)** | Khách hàng cuối | - Consumer behavior<br>- Mobile-first<br>- Instant gratification | User portal PWA |

### 2.3.2 User Environment
- **Retail Staff**: Android/iOS tablets, intermittent internet
- **Brand Managers**: Desktop/laptop, stable internet, multiple campaigns
- **End Users**: Smartphones, social media savvy, instant mobile experience
- **Admin/Auditors**: Desktop workstations, enterprise network

---

## 2.4 Constraints và ràng buộc

### 2.4.1 Technical Constraints
**Performance Requirements:**
- API gateway: 100,000 requests/phút (peak load)
- Response time: <3 giây cho dashboard
- Database: Hỗ trợ 10M users concurrent

**Technology Stack:**
- Backend: Node.js/Go microservices  
- Frontend: React PWA
- Database: MongoDB (documents), PostgreSQL (relational), Redis (cache)
- Cloud: AWS/GCP với multi-region deployment

**Integration Constraints:**
- CRM: RESTful API với rate limiting
- SMS Provider: Twilio/MessageBird với delivery SLA
- POS: Scandit SDK hoặc generic barcode scanners

### 2.4.2 Business Constraints
**Budget và Timeline:**
- MVP development: 6 tháng, 500K USD
- Scale phase: 12 tháng bổ sung
- Team size: 8 developers + 2 QA

**Regulatory Compliance:**
- GDPR/PDPA cho data protection
- PCI-DSS nếu có payment processing
- Local telco regulations cho SMS OTP

**Operational Constraints:**
- 99.9% uptime SLA
- Data retention: 7 năm cho audit
- Backup và disaster recovery: RTO < 4 hours, RPO < 1 hour

---

## 2.5 Assumptions và dependencies

### 2.5.1 Business Assumptions (từ 01-BRD.md v3.0)
- **Market Adoption**: Brands sẵn sàng chi 12-120 triệu VND/tháng cho SaaS
- **Retail Partnership**: Circle K, GS25 hợp tác phân phối
- **User Behavior**: 90%+ smartphone adoption, willingness để share data với incentives
- **Competition**: 18-24 tháng trước khi competitor lớn vào thị trường

### 2.5.2 Technical Assumptions
- **Internet Connectivity**: 3G/4G coverage ổn định tại urban areas
- **Device Compatibility**: Android 8+, iOS 12+ cho PWA
- **Third-party APIs**: Uptime 99.5%+ cho critical services (SMS, CRM)
- **Scaling**: Cloud auto-scaling hiệu quả cho traffic spikes

### 2.5.3 Dependencies
**External Dependencies:**
- Twilio/MessageBird cho SMS OTP
- HubSpot/Salesforce APIs cho CRM sync  
- Scandit SDK cho barcode scanning
- GA4/Meta Pixel cho tracking
- Zendesk cho customer support

**Internal Dependencies:**
- UI/UX design completion trước frontend development
- Database schema finalization trước backend APIs
- Security audit completion trước production deployment

---

## 2.6 Kiến trúc hệ thống cấp cao

### 2.6.1 System Context Diagram
```
┌─────────────────┐    ┌──────────────────────┐    ┌─────────────────┐
│   Brand/Agency  │────│  PSS Platform        │────│  Retail Network │
│   - Dashboard   │    │  - Campaign Mgmt     │    │  - POS Systems  │
│   - Analytics   │    │  - User Portal       │    │  - Staff Apps   │
└─────────────────┘    │  - Admin Console     │    └─────────────────┘
                       └──────────────────────┘
                                │
                   ┌────────────┼────────────┐
                   │            │            │
          ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
          │   CRM/ERP   │ │   SMS/Email │ │  Analytics  │
          │   Systems   │ │   Providers │ │   Tools     │
          └─────────────┘ └─────────────┘ └─────────────┘
```

### 2.6.2 Deployment Architecture
- **Multi-tier**: Presentation → Application → Data layers
- **Microservices**: Independent deployable services
- **Cloud-native**: Container-based với Kubernetes orchestration
- **Multi-region**: Primary (VN), DR (Singapore)

---

## 2.7 Mô hình dữ liệu cấp cao

### 2.7.1 Core Entities
- **Campaign**: Thông tin campaign, timeline, budget
- **Barcode**: Voucher codes và trạng thái lifecycle  
- **User**: Profile khách hàng với verified status
- **Location**: Retail nodes và geo-targeting
- **Analytics**: Event logs và funnel metrics

### 2.7.2 Data Flow
```
QR Scan → Landing Page → Form Submit → OTP Verify → Barcode Issue → Redemption → Analytics
```

---

**Nguồn tham khảo chính:**
- Business Requirement Document (01-BRD.md v3.0) - Stakeholders, Business constraints
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - Functional overview
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - User roles và permissions
- Problem Definition (Problem.md v1.0) - Business context và challenges
- Vision & Strategy Document (Product-Sampling-Vision-and-Strategy Document.md v1.0) - Market positioning

**Tình trạng**: Part02 hoàn thành ✅  
**Tiếp theo**: Part03 - Scope and Objectives  
**Người review**: System Architect, Product Manager
# 📋 SRS Part03 - Phạm vi và mục tiêu sản phẩm (Scope and Objectives)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  

---

## 3.1 Mục tiêu kinh doanh

### 3.1.1 Vision Statement (từ Product-Sampling-Vision-and-Strategy Document.md)
> "Transform product sampling from a cost center into a data-driven growth engine"

Product Sampling Platform hướng tới trở thành **nền tảng hạ tầng sampling toàn cầu**, nơi mọi thương hiệu có thể:
- Triển khai chiến dịch sampling đa kênh trong vài phút
- Xác thực khách hàng và chống gian lận tự động  
- Nhận insight chi tiết về hiệu quả campaign theo thời gian thực
- Dự đoán ROI chiến dịch bằng AI

### 3.1.2 Business Objectives

**Ngắn hạn (2025 - MVP):**
- Triển khai thành công tại Việt Nam với 25 brands
- Xử lý 1M sample distribution 
- Thu thập 50K verified leads/tháng
- Đạt doanh thu 5.76 tỷ VND

**Trung hạn (2026 - Scale):**
- Mở rộng Thailand, Indonesia với 80 brands
- Xử lý 3M users active
- Đạt doanh thu 26.88 tỷ VND
- Net Promoter Score >60

**Dài hạn (2027 - Market Leadership):**
- Dẫn đầu Southeast Asia với 200 brands
- Phục vụ 10M users
- Đạt doanh thu 67.2 tỷ VND với lợi nhuận 21.312 tỷ VND
- Chuẩn bị exit strategy (M&A/IPO)

### 3.1.3 Success Metrics (từ 01-BRD.md v3.0)

| Category | KPI | Target Value | Measurement Method |
|----------|-----|--------------|-------------------|
| **Cost Efficiency** | Cost per verified lead | ≤ 0.4 USD | Platform analytics |
| **User Experience** | Form completion rate | ≥ 90% | Funnel tracking |
| **Data Quality** | OTP verification success | ≥ 95% | System logs |
| **Fraud Prevention** | Fraud rate | ≤ 5% | ML detection algorithms |
| **System Performance** | Platform uptime | ≥ 99.9% | Monitoring tools |
| **Business Growth** | Brand retention rate | ≥ 85% | Customer success tracking |
| **User Engagement** | Redemption rate | ≥ 85% | POS integration data |

---

## 3.2 Phạm vi chức năng

### 3.2.1 Must-Have Features (Core MVP - dựa trên System_Feature_Tree_Grok.md v4.0)

**Campaign & Content Management:**
- **FR-001**: Quản lý Campaign với barcode assignment, location targeting, UTM tracking
- **FR-002**: Quản lý Barcode/Voucher với single-use validation và reconciliation  
- **FR-003**: Quản lý Ads Format với 13 loại format và dynamic QR generation

**Customer Data Collection:**
- **FR-004**: Landing Page với responsive form, quiz integration, consent management
- **FR-005**: OTP Verification với SMS/Email, rate limiting, fraud detection
- **FR-006**: Cấp phát Barcode personalized với Apple Wallet integration

**Distribution & Analytics:**
- **FR-007**: POS Integration với offline sync, atomic redemption
- **FR-008**: Analytics Dashboard với funnel tracking, export capabilities
- **FR-009**: CRM Integration với webhook/API sync, GDPR compliance

**Security & Management:**
- **FR-010**: Access Control với 6 roles RBAC, audit trails
- **FR-011**: User Portal PWA với history tracking, notification system

### 3.2.2 Should-Have Features (Advanced Phase 2)

**Advanced Operations:**
- Inventory reconciliation với batch tracking
- Retailer portal với store management
- Fraud detection với ML-based scoring
- A/B testing framework cho campaign optimization

**Enhanced Experience:**  
- Support ticketing system
- Multi-language localization
- Advanced analytics với predictive insights
- Consent management hub

### 3.2.3 Nice-to-Have Features (Future Phase 3)

**AI & Intelligence:**
- Predictive analytics cho demand forecasting
- AI-driven personalization
- Marketplace cho brand co-sampling
- Sustainability tracking

**Advanced Integration:**
- Blockchain traceability (optional)
- AR integration cho virtual try-on
- Voice-activated campaigns
- Real-time attribution với sales data

---

## 3.3 Phạm vi kỹ thuật

### 3.3.1 Technology Scope

**Platform Architecture:**
- **Backend**: Microservices với Node.js/Go
- **Frontend**: React PWA cho cross-platform compatibility
- **Database**: MongoDB (documents), PostgreSQL (relational), Redis (cache)
- **Cloud**: AWS/GCP với multi-region deployment
- **API**: RESTful services với OpenAPI 3.0 specification

**Integration Scope:**
- **CRM Systems**: HubSpot, Salesforce, custom APIs
- **Communication**: Twilio, MessageBird cho SMS/Email
- **Analytics**: GA4, Meta Pixel, custom tracking
- **POS Systems**: Scandit SDK, generic barcode scanners
- **Support**: Zendesk integration cho ticketing

### 3.3.2 Performance Scope

**Scalability Targets:**
- **Concurrent Users**: 10K (MVP) → 100K (Scale) → 1M (Long-term)
- **API Throughput**: 100K requests/minute peak load
- **Data Storage**: 100GB (Year 1) → 10TB (Year 3)
- **Geographic**: Vietnam → ASEAN → Global expansion capability

**Performance Benchmarks:**
- **Response Time**: <3s cho dashboard loads
- **API Latency**: <500ms cho core operations  
- **Mobile Performance**: <2s cho PWA load times
- **Offline Capability**: 24h local storage cho retail nodes

### 3.3.3 Security Scope

**Data Protection:**
- PII encryption với AES-256
- GDPR/PDPA compliance framework
- ISO 27001-aligned security controls
- SOC 2 Type II audit readiness

**Access Control:**
- OAuth 2.0/OpenID Connect authentication
- JWT-based session management
- Role-based access control (RBAC)
- Multi-factor authentication cho admin roles

---

## 3.4 Phạm vi người dùng

### 3.4.1 Primary Users

**Brand Managers/Marketing Teams:**
- **Quantity**: 100-500 users (Year 1-3)
- **Geography**: Vietnam → Thailand, Indonesia, Philippines
- **Use Cases**: Campaign creation, analytics review, ROI tracking
- **Technical Proficiency**: Medium, cần UI intuitive

**Retail Staff/Serving Accounts:**  
- **Quantity**: 1K-10K users (store staff)
- **Geography**: Urban centers với retail network
- **Use Cases**: Barcode scanning, redemption processing
- **Technical Proficiency**: Basic, cần mobile-optimized tools

**End Consumers:**
- **Quantity**: 50K-10M verified users  
- **Demographics**: 18-45 tuổi, smartphone users, brand conscious
- **Use Cases**: Sample collection, profile management, history tracking
- **Technical Proficiency**: Varied, cần PWA user-friendly

### 3.4.2 Secondary Users

**System Administrators:**
- Platform management, troubleshooting, system configuration
- Yêu cầu technical expertise cao

**Auditors/Compliance:**
- Compliance monitoring, audit trail review, regulatory reporting  
- Yêu cầu read-only access với detailed logging

---

## 3.5 Ràng buộc và giới hạn

### 3.5.1 Business Constraints (từ 01-BRD.md v3.0)

**Budget Constraints:**
- Total development budget: 122.64 tỷ VND (3 years)
- MVP development: 36 tỷ VND (6 months)
- Operational costs: <40% revenue sau Year 2

**Timeline Constraints:**
- MVP launch: Q2 2025 (6 months development)
- Scale phase: Q3 2025 - Q4 2026  
- Regional expansion: 18 months sau MVP

**Regulatory Constraints:**
- GDPR compliance cho EU customers
- PDPA compliance cho ASEAN markets
- Local telecommunications regulations cho SMS OTP
- PCI-DSS nếu có payment processing

### 3.5.2 Technical Constraints

**Performance Constraints:**
- 99.9% uptime SLA requirement
- <3s response time cho critical operations
- Support cho 100K concurrent users (peak)
- Mobile-first design với PWA compatibility

**Integration Constraints:**
- RESTful API compatibility với existing CRM systems
- Offline-first design cho intermittent connectivity
- Multi-language support cho regional expansion
- Cross-browser compatibility (Chrome, Safari, Firefox)

### 3.5.3 Operational Constraints

**Scalability Constraints:**
- Auto-scaling capability cho traffic spikes
- Database sharding strategy cho large datasets  
- CDN deployment cho global performance
- Disaster recovery với <4h RTO, <1h RPO

**Maintenance Constraints:**
- Zero-downtime deployment capability
- Automated backup và recovery procedures
- 24/7 monitoring với alerting system
- Security patch deployment trong 48h

---

## 3.6 Feature Prioritization Matrix

### 3.6.1 MoSCoW Analysis (từ Problem.md v1.0)

| Priority | Features | Business Value | Development Effort | Timeline |
|----------|----------|----------------|-------------------|----------|
| **Must-Have** | Campaign Management, OTP Verification, POS Integration | Cao | Medium | Q1-Q2 2025 |
| **Should-Have** | Fraud Detection, A/B Testing, Inventory Reconciliation | Medium-High | Medium-High | Q3 2025-Q1 2026 |
| **Could-Have** | Advanced Analytics, Multi-language Support | Medium | Medium | Q2-Q4 2026 |
| **Won't-Have** | AI Personalization, Blockchain, AR Integration | Low-Medium | High | Phase 3 (2027+) |

### 3.6.2 Value vs Effort Matrix

```
High Value │ Analytics      │ Fraud Detection │
          │ Dashboard      │ A/B Testing     │
          │ ─────────────────────────────────│
          │ User Portal    │ AI Insights     │
Low Value │ Basic Reports  │ Blockchain      │
          └────────────────────────────────
           Low Effort        High Effort
```

---

## 3.7 Success Criteria và Acceptance

### 3.7.1 MVP Success Criteria

**Technical Criteria:**
- [ ] Hệ thống xử lý được 10K users concurrent
- [ ] API response time <3s cho 95% requests  
- [ ] 99% uptime trong 3 tháng đầu production
- [ ] Zero critical security vulnerabilities

**Business Criteria:**
- [ ] 25 brands đăng ký sử dụng platform
- [ ] 50K verified leads thu thập được
- [ ] Cost-per-lead <0.4 USD achievement
- [ ] 90%+ form completion rate

**User Experience Criteria:**
- [ ] NPS score >50 từ brand users
- [ ] <10s average form completion time
- [ ] >85% redemption rate tại POS
- [ ] Mobile responsiveness score >90

### 3.7.2 Long-term Success Criteria

**Market Position:**
- Market leadership position trong SEA sampling industry
- 200+ enterprise clients với high retention rate  
- Platform scalability đến 10M+ end users
- Profitable unit economics với sustainable growth

---

**Nguồn tham khảo chính:**
- Business Requirement Document (01-BRD.md v3.0) - Business objectives, financial targets, success metrics
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - Feature prioritization, MoSCoW analysis
- Problem Definition (Problem.md v1.0) - Must-have/Should-have/Nice-to-have classification
- Vision & Strategy Document (Product-Sampling-Vision-and-Strategy Document.md v1.0) - Vision statement, market objectives
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - User scope definition

**Tình trạng**: Part03 hoàn thành ✅  
**Tiếp theo**: Part04 - Functional Requirements  
**Người review**: Product Manager, Business Analyst, System Architect

# 📋 SRS Part04 - Yêu cầu chức năng (Functional Requirements)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 4.1 Tổng quan yêu cầu chức năng

### 4.1.1 Phân nhóm chức năng chính
Dựa trên **System_Feature_Tree_Grok.md v4.0**, hệ thống được chia thành 11 yêu cầu chức năng chính:

| Mã FR | Tên chức năng | Độ ưu tiên | Nguồn tham chiếu |
|-------|---------------|------------|------------------|
| FR-001 | Quản lý chiến dịch | Bắt buộc có | Cây chức năng 1.1 |
| FR-002 | Quản lý Barcode/Voucher | Bắt buộc có | Cây chức năng 1.2 |
| FR-003 | Quản lý định dạng quảng cáo | Bắt buộc có | Cây chức năng 1.10 |
| FR-004 | Trang đích và biểu mẫu | Bắt buộc có | Cây chức năng 1.3 |
| FR-005 | Xác thực OTP | Bắt buộc có | Cây chức năng 1.4 |
| FR-006 | Cấp phát mã barcode | Bắt buộc có | Cây chức năng 1.5 |
| FR-007 | Tích hợp POS và đổi quà | Bắt buộc có | Cây chức năng 1.5 |
| FR-008 | Phân tích và báo cáo | Bắt buộc có | Cây chức năng 1.6 |
| FR-009 | Tích hợp CRM | Bắt buộc có | Cây chức năng 1.7 |
| FR-010 | Kiểm soát truy cập và phân quyền | Bắt buộc có | Cây chức năng 1.8 |
| FR-011 | Cổng thông tin người dùng | Bắt buộc có | Cây chức năng 1.9 |

---

## 4.2 FR-001: Quản lý chiến dịch

### 4.2.1 Mô tả chức năng
Hệ thống cung cấp khả năng tạo, quản lý và theo dõi các chiến dịch phân phối mẫu sản phẩm với việc gán barcode, nhắm mục tiêu địa điểm và theo dõi UTM.

### 4.2.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.1)
- **Quản trị viên**: Tôi tạo chiến dịch toàn cầu, gán barcode/địa điểm, cài đặt theo dõi UTM
- **Quản trị nhóm**: Tôi tạo chiến dịch trong nhóm, xem trước trước khi xuất bản
- **Tài khoản khách hàng**: Tôi quản lý chiến dịch riêng, xem trước chiến dịch
- **Kiểm toán viên**: Tôi xem nhật ký thực thi chiến dịch

### 4.2.3 Đặc tả chức năng chi tiết

**Yêu cầu đầu vào:**
- Tên chiến dịch (bắt buộc, tối đa 255 ký tự)
- Mô tả chiến dịch (tùy chọn, tối đa 1000 ký tự)  
- Thời gian bắt đầu/kết thúc (bắt buộc, định dạng ngày giờ)
- Mã địa điểm (bắt buộc, danh sách các định danh địa điểm)
- Tải lên CSV barcode (bắt buộc, định dạng đã được xác thực)
- Tham số UTM (mã_chiến_dịch, nguồn, phương tiện, từ_khóa, nội_dung)

**Logic xử lý:**
- Xác thực thời gian chiến dịch (bắt đầu < kết thúc, ngày trong tương lai)
- Kiểm tra tính khả dụng của barcode và quyền địa điểm
- Tạo mã chiến dịch duy nhất
- Tạo mã QR động với theo dõi nhúng
- Cách ly đa thuê bao dựa trên vai trò người dùng

**Yêu cầu đầu ra:**
- Tạo mã chiến dịch (định dạng UUID)
- Mã QR động cho mỗi địa điểm/định dạng quảng cáo
- Trạng thái chiến dịch (Nháp/Hoạt động/Tạm dừng/Hoàn thành)
- URL theo dõi với tham số UTM

**Tiêu chí chấp nhận:**
- [ ] Quản trị viên có thể tạo không giới hạn chiến dịch
- [ ] Quản trị nhóm chỉ tạo chiến dịch trong phạm vi nhóm
- [ ] Tài khoản khách hàng chỉ quản lý chiến dịch riêng
- [ ] Thời gian thiết lập chiến dịch <2 ngày (yêu cầu kinh doanh)
- [ ] Độ chính xác theo dõi UTM 100%

---

## 4.3 FR-002: Quản lý Barcode/Voucher

### 4.3.1 Mô tả chức năng
Quản lý vòng đời barcode/voucher từ nhập khẩu, gán đến đổi quà với xác thực sử dụng một lần và khả năng đối soát.

### 4.3.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.2)
- **Quản trị viên**: Tôi nhập CSV barcode, đối soát trạng thái, cài đặt API đẩy/kéo với ERP
- **Quản trị nhóm**: Tôi nhập barcode cho nhóm, xem nhật ký nhập
- **Tài khoản khách hàng**: Tôi nhập barcode cho chiến dịch riêng
- **Kiểm toán viên**: Tôi xem nhật ký nhập/đối soát barcode

### 4.3.3 Đặc tả chức năng chi tiết

**Yêu cầu đầu vào:**
- Định dạng CSV: barcode, tên_sản_phẩm, ngày_hết_hạn, giá_trị, mã_lô, số_lượng_có_sẵn
- Xác thực tệp: mã hóa UTF-8, kích thước tệp tối đa 100MB
- Định dạng barcode: Chữ và số, 8-50 ký tự
- Xác thực ngày hết hạn (chỉ ngày trong tương lai)

**Logic xử lý:**
- Phân tích CSV với xử lý lỗi và phát hiện trùng lặp
- Xác thực tính duy nhất của barcode trên toàn hệ thống
- Vòng đời trạng thái: Chưa phát → Đã phát → Đã đổi → Hết hạn → Thu hồi
- Hoạt động nguyên tử cho cập nhật kho
- Dấu vết kiểm tra cho mọi thay đổi trạng thái

**Yêu cầu đầu ra:**
- Báo cáo thành công/thất bại nhập khẩu
- Tạo hình ảnh QR/Barcode (định dạng PDF/PNG)
- Tích hợp Apple Wallet cho người dùng di động
- Bảng điều khiển theo dõi kho thời gian thực

**Điểm tích hợp:**
- API Voucherify cho tính năng voucher nâng cao
- Hệ thống ERP qua REST API/webhook
- Hệ thống POS cho xác thực đổi quà

**Tiêu chí chấp nhận:**
- [ ] Nhập CSV <10MB trong <30 giây
- [ ] Thực thi tính duy nhất barcode 100%
- [ ] Độ chính xác kho >95%
- [ ] Xác thực sử dụng một lần với không có đổi quà kép

---

## 4.4 FR-003: Quản lý định dạng quảng cáo

### 4.4.1 Mô tả chức năng
Tạo và quản lý các định dạng quảng cáo cho chiến dịch với tải lên thiết kế, cấu hình mã QR và tích hợp theo dõi.

### 4.4.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.10)
- **Quản trị viên**: Tôi tạo/tải lên định dạng quảng cáo (300 DPI), cấu hình vùng/tọa độ QR, theo dõi
- **Quản trị nhóm**: Tôi tạo/tải lên định dạng quảng cáo cho nhóm, xem trước trước xuất bản
- **Tài khoản khách hàng**: Tôi tạo/tải lên định dạng quảng cáo cho chiến dịch riêng
- **Kiểm toán viên**: Tôi xem nhật ký tải lên và cấu hình định dạng quảng cáo

### 4.4.3 Đặc tả chức năng chi tiết

**Định dạng được hỗ trợ (13 loại):**
1. Tờ rơi A4 (210x297mm)
2. Poster A3 (297x420mm)  
3. Poster A2 (420x594mm)
4. Banner 2x1m
5. Banner 3x1m
6. Standee 60x160cm
7. Thẻ lều A5
8. Banner hiển thị kỹ thuật số
9. Bài đăng mạng xã hội
10. Tiêu đề email
11. Thông báo đẩy di động
12. Biển hiệu kệ trong cửa hàng
13. Chân trang hóa đơn

**Yêu cầu đầu vào:**
- Tệp thiết kế: PNG/JPG/PDF ≥300 DPI
- Tải lên logo (tùy chọn): PNG với nền trong suốt
- Tọa độ vùng QR (x, y, chiều_rộng, chiều_cao)
- Kích thước QR tối thiểu: 2cm x 2cm với vùng an toàn 0.5cm
- Số lượng in và kế hoạch phân phối

**Logic xử lý:**
- Xác thực tệp (DPI, định dạng, kích thước tệp <50MB)
- Tạo mã QR động với tham số theo dõi
- Kết xuất mẫu với hướng dẫn thương hiệu
- Tạo đầu ra đa định dạng

**Yêu cầu đầu ra:**
- Tệp sẵn sàng in với mã QR nhúng
- Định dạng banner kỹ thuật số cho phân phối trực tuyến
- Tạo liên kết ngắn cho mạng xã hội
- Tích hợp pixel theo dõi

**Tiêu chí chấp nhận:**
- [ ] Độ chính xác xác thực tệp 100%
- [ ] Thời gian tạo QR <5 giây
- [ ] Tỷ lệ chuyển đổi quét-gửi >90%
- [ ] Vượt qua xác minh chất lượng in

---

## 4.5 FR-004: Trang đích và biểu mẫu

### 4.5.1 Mô tả chức năng
Trang đích phản hồi với biểu mẫu thu thập dữ liệu khách hàng, tích hợp câu đố, quản lý đồng ý và liên kết cổng thông tin người dùng.

### 4.5.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.3)
- **Quản trị viên**: Tôi tạo/chỉnh sửa mẫu trang đích, cấu hình câu đố/khảo sát, quản lý đồng ý
- **Quản trị nhóm**: Tôi xem trước/chỉnh sửa mẫu trong nhóm
- **Tài khoản khách hàng**: Tôi xem trước trang đích, cấu hình câu đố cơ bản
- **Người dùng cuối**: Tôi điền biểu mẫu trong 30 giây, nhận barcode, xem cổng thông tin người dùng
- **Kiểm toán viên**: Tôi xem nhật ký gửi/đồng ý

### 4.5.3 Đặc tả chức năng chi tiết

**Trường biểu mẫu:**
- **Bắt buộc**: Họ tên, Email, Số điện thoại
- **Tùy chọn**: Tuổi, Giới tính, Địa chỉ, Nghề nghiệp
- **Sở thích**: Câu đố ngắn (5-10 câu hỏi trắc nghiệm)
- **Đồng ý**: Đăng ký tiếp thị, Thỏa thuận xử lý dữ liệu, Chấp nhận điều khoản

**Logic xử lý:**
- Xác thực biểu mẫu thời gian thực (mẫu regex)
- Tích hợp reCAPTCHA v3 (điểm >0.5)
- Lập hồ sơ tiến bộ để giảm bỏ biểu mẫu
- Nội dung động dựa trên phản hồi người dùng
- Thu thập đồng ý tuân thủ GDPR/PDPA

**Yêu cầu đầu ra:**
- Hồ sơ JSON với PII được băm
- Cờ đồng ý với dấu thời gian
- Kết quả chấm điểm câu đố/khảo sát
- Tạo token truy cập cổng thông tin người dùng

**Điểm tích hợp:**
- React PWA cho trải nghiệm ưu tiên di động
- Theo dõi sự kiện GA4 cho phân tích phễu
- Tích hợp khung kiểm thử A/B
- Hỗ trợ đa ngôn ngữ

**Tiêu chí chấp nhận:**
- [ ] Thời gian hoàn thành biểu mẫu trung bình <30 giây
- [ ] Điểm phản hồi di động >95
- [ ] Tỷ lệ hoàn thành biểu mẫu >90%
- [ ] Điểm chất lượng dữ liệu >95%
- [ ] Tỷ lệ phản hồi khảo sát >50%

---

## 4.6 FR-005: Xác thực OTP

### 4.6.1 Mô tả chức năng
Hệ thống xác thực OTP đa kênh với ngăn chặn gian lận, giới hạn tỷ lệ và lấy dấu vân tay thiết bị.

### 4.6.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.4)
- **Người dùng cuối**: Tôi nhập OTP (3 lần thử, 5 phút hết thời gian) để mở khóa barcode
- **Quản trị viên**: Tôi cấu hình quy tắc OTP, xem thống kê tỷ lệ thất bại
- **Kiểm toán viên**: Tôi xem nhật ký thử OTP và sự kiện bảo mật

### 4.6.3 Đặc tả chức năng chi tiết

**Tạo OTP:**
- Mã số 6 chữ số
- Cửa sổ hết hạn 5 phút
- Tạo ngẫu nhiên an toàn mật mã
- Tùy chọn gửi SMS và Email

**Logic xác minh:**
- Tối đa 3 lần thử mỗi phiên
- Độ trễ tiến bộ: 30s → 60s → 120s
- Lấy dấu vân tay thiết bị cho người dùng lặp lại
- Kiểm tra tốc độ (số lần thử tối đa trên IP/điện thoại)

**Ngăn chặn gian lận:**
- Giới hạn tỷ lệ: 10 yêu cầu OTP/giờ mỗi số điện thoại
- Phát hiện và chặn email dùng một lần
- Phát hiện VPN/proxy
- Phát hiện mẫu đáng ngờ

**Điểm tích hợp:**
- Twilio/MessageBird cho gửi SMS
- SendGrid/AWS SES cho gửi email  
- Redis cho quản lý phiên
- Công cụ chấm điểm gian lận ML

**Tiêu chí chấp nhận:**
- [ ] Thời gian gửi OTP <30 giây
- [ ] Tỷ lệ thành công xác minh >95%
- [ ] Độ chính xác phát hiện gian lận >90%
- [ ] Không có dương tính giả cho người dùng hợp pháp

---

## 4.7 FR-006: Cấp phát mã barcode

### 4.7.1 Mô tả chức năng
Gán barcode tự động sau xác minh thành công với cá nhân hóa và tích hợp ví di động.

### 4.7.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.5)
- **Hệ thống**: Sau xác minh, gán barcode sử dụng một lần từ pool chưa phát
- **Người dùng cuối**: Tôi nhận barcode qua email/SMS hoặc ví di động
- **Quản trị viên**: Tôi cấu hình quy tắc cá nhân hóa và phương thức gửi

### 4.7.3 Đặc tả chức năng chi tiết

**Logic gán:**
- Phân bổ barcode dựa trên pool
- Pool barcode riêng cho chiến dịch
- Xác thực ngày hết hạn
- Thực thi hạn chế địa lý

**Cá nhân hóa:**
- Gán dựa trên sở thích người dùng
- Khớp biến thể sản phẩm
- Ưu đãi theo địa điểm cụ thể
- Xem xét hành vi lịch sử

**Phương thức gửi:**
- Email với tệp đính kèm PDF
- SMS với liên kết tải xuống
- Tạo thẻ Apple Wallet
- Tích hợp Google Pay
- Hiển thị PWA trong ứng dụng

**Yêu cầu ghi nhật ký:**
- Dấu vết kiểm tra đầy đủ: mã_người_dùng, mã_chiến_dịch, mã_barcode, dấu_thời_gian
- Thu thập thông tin thiết bị
- Dữ liệu vị trí (nếu được cấp phép)
- Theo dõi phân bổ

**Tiêu chí chấp nhận:**
- [ ] Thời gian gán <2 giây sau xác minh
- [ ] Tính duy nhất barcode 100%
- [ ] Khả năng tương thích ví di động >95%
- [ ] Tỷ lệ gửi thành công >98%

---

## 4.8 FR-007: Tích hợp POS và đổi quà

### 4.8.1 Mô tả chức năng
Hệ thống đổi quà đa kênh với tích hợp POS, đồng bộ ngoại tuyến và xử lý giao dịch nguyên tử.

### 4.8.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.5)
- **Tài khoản phục vụ**: Tôi quét barcode tại Circle K, cập nhật trạng thái thời gian thực
- **Quản trị viên**: Tôi thiết lập API/webhook POS, nhập nhật ký đổi quà theo lô
- **Người dùng cuối**: Tôi xem trạng thái đổi quà trong cổng thông tin người dùng
- **Kiểm toán viên**: Tôi xem nhật ký tuân thủ đổi quà

### 4.8.3 Đặc tả chức năng chi tiết

**Kênh đổi quà:**
- Tích hợp terminal POS
- Ứng dụng quét di động (Nhân viên)
- Công cụ đổi quà dựa trên web
- Nhập CSV theo lô cho đổi quà ngoại tuyến

**Logic xử lý:**
- Xác thực barcode nguyên tử và cập nhật trạng thái
- Hạn chế đổi quà dựa trên địa điểm
- Xác thực cửa sổ thời gian (giờ kinh doanh)
- Kiểm tra tính khả dụng của kho

**Khả năng ngoại tuyến:**
- Lưu trữ dữ liệu cục bộ (IndexedDB)
- Đồng bộ dựa trên hàng đợi khi kết nối lại
- Giải quyết xung đột cho đổi quà đồng thời
- Khả năng hoạt động ngoại tuyến 24 giờ

**Điểm tích hợp:**
- Scandit SDK cho quét barcode
- Bộ chuyển đổi API POS (Circle K, GS25, Mini Stop)
- Thông báo webhook cho cập nhật thời gian thực
- API cổng thông tin người dùng cho đồng bộ trạng thái

**Tiêu chí chấp nhận:**
- [ ] Tỷ lệ thành công đổi quà >98%
- [ ] Độ chính xác đồng bộ ngoại tuyến 100%
- [ ] Thời gian quét trung bình <3 giây
- [ ] Không có sự cố đổi quà kép

---

## 4.9 FR-008: Phân tích và báo cáo

### 4.9.1 Mô tả chức năng
Bảng điều khiển phân tích thời gian thực với theo dõi phễu, khả năng xuất và báo cáo nâng cao.

### 4.9.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.6)
- **Quản trị viên**: Tôi xem số liệu phễu đầy đủ, xuất CSV/API, cấu hình báo cáo nâng cao
- **Quản trị nhóm**: Tôi xem báo cáo tổng hợp nhóm
- **Tài khoản khách hàng**: Tôi xem báo cáo chiến dịch riêng, xuất dữ liệu khách hàng
- **Kiểm toán viên**: Tôi xem báo cáo tuân thủ và dấu vết kiểm tra

### 4.9.3 Đặc tả chức năng chi tiết

**Số liệu cốt lõi:**
- Chuyển đổi phễu: Quét → Gửi → Xác minh → Phát hành → Đổi
- Chi phí trên khách hàng tiềm năng được xác minh (CPL)
- Phân phối địa lý
- Phân tích chuỗi thời gian
- Tính toán ROI chiến dịch

**Tính năng bảng điều khiển:**
- Cập nhật dữ liệu thời gian thực (<5 giây độ trễ)
- Biểu đồ tương tác và lọc
- Khả năng drill-down
- Công cụ phân tích so sánh
- Lựa chọn phạm vi ngày tùy chỉnh

**Khả năng xuất:**
- Xuất CSV/Excel cho dữ liệu thô
- Báo cáo PDF với tóm tắt điều hành
- Điểm cuối API cho truy cập theo chương trình
- Báo cáo email theo lịch

**Phân tích nâng cao:**
- Kết quả khảo sát sau lấy mẫu
- Chấm điểm NPS và phân tích tình cảm
- Phân tích nhóm cho hành vi người dùng
- Phân tích dự đoán cho hiệu suất chiến dịch

**Điểm tích hợp:**
- Phân tích nhúng Metabase
- BigQuery cho phân tích dữ liệu quy mô lớn
- Tích hợp GA4 cho phân tích web
- Bộ kết nối công cụ BI tùy chỉnh

**Tiêu chí chấp nhận:**
- [ ] Thời gian tải bảng điều khiển <3 giây
- [ ] Độ chính xác dữ liệu 99.9%
- [ ] Tạo xuất <30 giây cho 100K bản ghi
- [ ] Độ trễ cập nhật thời gian thực <5 giây

---

## 4.10 FR-009: Tích hợp CRM

### 4.10.1 Mô tả chức năng
Đồng bộ CRM hai chiều với chấm điểm khách hàng tiềm năng, quy trình làm việc tự động và tuân thủ GDPR.

### 4.10.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.7)
- **Quản trị viên**: Tôi cấu hình kết nối API CRM, thiết lập ánh xạ dữ liệu
- **Tài khoản khách hàng**: Tôi xuất khách hàng tiềm năng đã xác minh cho chiến dịch riêng
- **Người dùng cuối**: Tôi nhận ưu đãi cá nhân hóa qua tiếp thị lại
- **Kiểm toán viên**: Tôi xác minh tuân thủ GDPR cho chuyển giao dữ liệu

### 4.10.3 Đặc tả chức năng chi tiết

**Hệ thống CRM được hỗ trợ:**
- HubSpot (tích hợp chính)
- Salesforce
- Pipedrive
- Điểm cuối API REST tùy chỉnh

**Đồng bộ dữ liệu:**
- Đẩy webhook thời gian thực
- Lập lịch xuất theo lô
- Cập nhật gia tăng
- Khả năng đồng bộ hai chiều

**Chấm điểm khách hàng tiềm năng:**
- Tính toán điểm tương tác
- Xác suất chuyển đổi
- Chấm điểm nhân khẩu học
- Phân tích hành vi

**Tuân thủ quyền riêng tư:**
- Đồng bộ cờ đồng ý
- Tự động hóa quyền bị lãng quên
- Thực thi giảm thiểu dữ liệu
- Duy trì dấu vết kiểm tra

**Tiêu chí chấp nhận:**
- [ ] Tỷ lệ thành công đồng bộ >99%
- [ ] Độ trễ chuyển giao dữ liệu <60 giây
- [ ] Tuân thủ GDPR 100%
- [ ] Độ chính xác chấm điểm khách hàng tiềm năng >85%

---

## 4.11 FR-010: Kiểm soát truy cập và phân quyền RBAC

### 4.11.1 Mô tả chức năng
Hệ thống kiểm soát truy cập dựa trên vai trò với 6 vai trò được định nghĩa, quyền chi tiết và ghi nhật ký kiểm tra.

### 4.11.2 Câu chuyện người dùng (từ Access_Control_Tree_Grok.md v2.2)
- **Quản trị viên**: Tôi gán vai trò, quản lý người dùng, cấu hình chính sách bảo mật
- **Quản trị nhóm**: Tôi tạo người dùng trong phạm vi nhóm
- **Tài khoản khách hàng**: Tôi xem quyền và cài đặt hồ sơ
- **Kiểm toán viên**: Tôi giám sát mẫu truy cập và tuân thủ

### 4.11.3 Ma trận phân quyền động (từ Access_Control_Tree_Grok.md v2.2)

**Thiết kế quyền động cho từng chức năng:**

| Chức năng | Admin | Group Admin | Customer Account | Serving Account | Auditor | User Role |
|-----------|-------|-------------|------------------|-----------------|---------|-----------|
| **FR-001: Quản lý Campaign** | ✅ Full | ✅ Group scope | ✅ Own campaigns | ❌ | 👁️ View logs | ❌ |
| **FR-002: Quản lý Barcode** | ✅ Full import/export | ✅ Group import | ✅ Campaign import | ❌ | 👁️ View logs | ❌ |
| **FR-003: Quản lý Ads Format** | ✅ Create/upload global | ✅ Group upload/preview | ✅ Campaign upload/preview | ❌ | 👁️ View logs | ❌ |
| **FR-004: Landing Page** | ✅ Create/edit templates | ✅ Group edit/preview | ✅ Preview own | ❌ | 👁️ View logs | ✅ Fill form/quiz |
| **FR-005: OTP Verification** | ✅ Config rules/view stats | ✅ View group stats | ✅ View campaign stats | ❌ | 👁️ View logs | ✅ Verify OTP |
| **FR-006: Cấp phát Barcode** | ✅ Config rules global | ✅ View group allocation | ✅ View campaign allocation | ❌ | 👁️ View logs | ✅ Receive barcode |
| **FR-007: POS & Redemption** | ✅ Setup API/webhook | ✅ View group stats | ✅ View campaign stats | ✅ Scan/redeem | 👁️ View logs | 👁️ View status |
| **FR-008: Analytics** | ✅ Full analytics/export | ✅ Group analytics | ✅ Campaign analytics | ❌ | ✅ Compliance reports | 👁️ Personal reports |
| **FR-009: CRM Integration** | ✅ Config API connections | ✅ Group data export | ✅ Campaign data export | ❌ | 👁️ Compliance logs | ❌ |
| **FR-010: Access Control** | ✅ Manage all users/roles | ✅ Create group users | 👁️ View own permissions | 🔒 Login redeem tool | 👁️ View permissions | ❌ |
| **FR-011: User Portal** | ✅ Config portal/FAQ | 👁️ View group user stats | 👁️ View campaign user stats | 👁️ View redeem tickets | 👁️ View user interactions | ✅ Full portal access |

**Ký hiệu:**
- ✅ = Full permission
- 🔒 = Limited access  
- 👁️ = View only
- ❌ = No access

### 4.11.4 Thiết kế quyền động chi tiết

**Cấu trúc quyền theo tài nguyên:**
```json
{
  "permissions": {
    "campaign": {
      "create": ["admin", "group_admin", "customer_account"],
      "read": ["admin", "group_admin", "customer_account", "auditor"],
      "update": ["admin", "group_admin:own_group", "customer_account:own"],
      "delete": ["admin", "group_admin:own_group", "customer_account:own"]
    },
    "barcode": {
      "import": ["admin", "group_admin:own_group", "customer_account:own"],
      "export": ["admin", "group_admin:own_group", "customer_account:own"],
      "view_logs": ["admin", "group_admin:own_group", "auditor"]
    },
    "redemption": {
      "scan": ["serving_account"],
      "process": ["serving_account"],
      "view_status": ["user_role:own"]
    }
  }
}
```

**Scope-based access control:**
- **Global scope**: Admin có quyền trên toàn hệ thống
- **Group scope**: Group Admin chỉ trong group được gán
- **Campaign scope**: Customer Account chỉ campaigns riêng  
- **Personal scope**: User Role chỉ dữ liệu cá nhân

**Dynamic permission evaluation:**
```javascript
function hasPermission(user, action, resource, context) {
  const userRole = user.role;
  const resourceOwner = resource.owner;
  const userGroup = user.group;
  
  // Check role-based permissions
  if (!rolePermissions[userRole][action]) return false;
  
  // Apply scope restrictions
  switch(userRole) {
    case 'group_admin':
      return resource.group === userGroup;
    case 'customer_account':
      return resource.owner === user.id;
    case 'serving_account':
      return action === 'redemption' && resource.location in user.locations;
    default:
      return true;
  }
}
```

**Phương thức xác thực:**
- OAuth 2.0/OpenID Connect
- Quản lý phiên JWT
- Xác thực đa yếu tố
- Khả năng tích hợp SSO

**Khung ủy quyền:**
- Quyền dựa trên tài nguyên
- Kế thừa vai trò phân cấp
- Đánh giá quyền động
- Kiểm soát truy cập cấp API

**Tiêu chí chấp nhận:**
- [ ] Không có sự cố truy cập trái phép
- [ ] Thời gian gán vai trò <2 phút
- [ ] Phản hồi xác thực <1 giây
- [ ] Tính đầy đủ nhật ký kiểm tra 100%

---

## 4.12 FR-011: Cổng thông tin người dùng

### 4.12.1 Mô tả chức năng
Ứng dụng web tiến bộ cho người dùng cuối với lịch sử sản phẩm, theo dõi trạng thái, thông báo và hệ thống ticket hỗ trợ.

### 4.12.2 Câu chuyện người dùng (từ System_Feature_Tree_Grok.md 1.9)
- **Người dùng cuối**: Tôi xem lịch sử sản phẩm, kiểm tra trạng thái barcode, nhận thông báo
- **Người dùng cuối**: Tôi gửi ticket hỗ trợ, rút đồng ý GDPR
- **Quản trị viên**: Tôi cấu hình quy tắc thông báo, nội dung FAQ
- **Kiểm toán viên**: Tôi giám sát tương tác người dùng và tuân thủ quyền riêng tư

### 4.12.3 Đặc tả chức năng chi tiết

**Tính năng cốt lõi:**
- Lịch sử sản phẩm với barcode, tên_sản_phẩm, ngày_hết_hạn
- Theo dõi trạng thái thời gian thực (Chưa đổi/Đã đổi/Hết hạn)
- Thông báo đẩy cho nhắc nhở đổi quà và ưu đãi mới
- Gửi ticket hỗ trợ với tệp đính kèm

**Khả năng PWA:**
- Chức năng ngoại tuyến với lưu trữ cục bộ
- Hỗ trợ thông báo đẩy
- Trải nghiệm giống ứng dụng đa nền tảng
- Tải nhanh với bộ nhớ đệm service worker

**Hệ thống thông báo:**
- Thông báo SMS qua Twilio
- Thông báo email với mẫu
- Thông báo đẩy PWA
- Trung tâm thông báo trong ứng dụng

**Kiểm soát quyền riêng tư:**
- Giao diện quản lý đồng ý
- Yêu cầu tải xuống dữ liệu
- Yêu cầu xóa tài khoản
- Tùy chọn giao tiếp

**Điểm tích hợp:**
- Hệ thống xác thực người dùng
- API dữ liệu chiến dịch
- Ticketing hỗ trợ (Zendesk)
- Theo dõi phân tích (GA4)

**Tiêu chí chấp nhận:**
- [ ] Điểm hiệu suất PWA >90
- [ ] Tỷ lệ tương tác người dùng >70%
- [ ] Tỷ lệ gửi thông báo >95%
- [ ] Giải quyết ticket hỗ trợ <48h
- [ ] Tuân thủ GDPR 100%

---

## 4.13 Ma trận truy xuất nguồn gốc

| Yêu cầu kinh doanh | Yêu cầu chức năng | Độ ưu tiên triển khai |
|-------------------|-------------------|----------------------|
| Phân phối mẫu hiệu quả chi phí | FR-001, FR-002, FR-007 | Bắt buộc có |
| Thu thập dữ liệu khách hàng đã xác minh | FR-004, FR-005, FR-006 | Bắt buộc có |
| Đo lường hiệu suất chiến dịch | FR-008, FR-009 | Bắt buộc có |
| Phân phối đa kênh | FR-003, FR-007 | Bắt buộc có |
| Tối ưu trải nghiệm người dùng | FR-004, FR-011 | Bắt buộc có |
| Bảo mật và tuân thủ | FR-005, FR-010 | Bắt buộc có |
| Ngăn chặn gian lận | FR-005, FR-006 | Bắt buộc có |
| Hoạt động có thể mở rộng | Tất cả FR | Tiến bộ |

---

**Nguồn tham khảo chính:**
- Cây chức năng hệ thống (System_Feature_Tree_Grok.md v4.0) - Chi tiết tất cả câu chuyện người dùng và yêu cầu
- Cây kiểm soát truy cập (Access_Control_Tree_Grok.md v2.2) - Đặc tả RBAC
- Tài liệu yêu cầu kinh doanh (01-BRD.md v3.0) - Bối cảnh kinh doanh và tiêu chí chấp nhận
- Định nghĩa vấn đề (Problem.md v1.0) - Ưu tiên MoSCoW

**Tình trạng**: Part04 hoàn thành ✅  
**Tiếp theo**: Part05 - Yêu cầu phi chức năng  
**Người đánh giá**: Kiến trúc sư hệ thống, Trưởng nhóm phát triển, Trưởng nhóm QA
# 📋 SRS Part05 - Yêu cầu phi chức năng (Non-Functional Requirements)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 5.1 Tổng quan yêu cầu phi chức năng

### 5.1.1 Phân loại yêu cầu phi chức năng
Dựa trên **01-BRD.md v3.0** và **System_Feature_Tree_Grok.md v4.0**, các yêu cầu phi chức năng được chia thành 8 nhóm chính:

| Mã NFR | Tên nhóm | Mô tả | Nguồn tham chiếu |
|--------|----------|-------|------------------|
| NFR-001 | Hiệu năng | Thời gian phản hồi, lưu lượng, độ trễ | BRD 1.4, Cây chức năng KPI |
| NFR-002 | Khả năng mở rộng | Người dùng đồng thời, khối lượng dữ liệu, địa lý | BRD 2.2, Tài liệu chiến lược |
| NFR-003 | Độ tin cậy | Thời gian hoạt động, chịu lỗi, phục hồi | BRD 1.4, Cây chức năng |
| NFR-004 | Bảo mật | Xác thực, ủy quyền, mã hóa | Cây kiểm soát truy cập v2.2 |
| NFR-005 | Khả năng sử dụng | Trải nghiệm người dùng, khả năng tiếp cận, di động | BRD 4.4, Cây chức năng UX |
| NFR-006 | Tương thích | Trình duyệt, thiết bị, tích hợp | Problem.md, BRD |
| NFR-007 | Bảo trì | Chất lượng code, triển khai, giám sát | BRD 6.1, Cây chức năng |
| NFR-008 | Tuân thủ | GDPR, PDPA, tiêu chuẩn ISO | BRD 1.4, Kiểm soát truy cập |

---

## 5.2 NFR-001: Yêu cầu hiệu năng

### 5.2.1 Mục tiêu hiệu năng (từ 01-BRD.md 1.5)
- **Chi phí trên người dùng đã xác minh**: ≤ 0.4 USD
- **Độ trễ bảng điều khiển thời gian thực**: ≤ 3 giây
- **Tải đỉnh cổng API**: 100,000 yêu cầu/phút
- **Tỷ lệ hoàn thành biểu mẫu**: ≥ 90%

### 5.2.2 Yêu cầu thời gian phản hồi

| Thao tác | Mục tiêu thời gian | Điều kiện đo | Nguồn tham chiếu |
|----------|-------------------|--------------|------------------|
| **Tải trang đích** | < 2 giây | 95% yêu cầu, di động 3G | Cây chức năng 1.3 KPI |
| **Gửi OTP** | < 30 giây | Gửi SMS/Email | Cây chức năng 1.4 KPI |
| **Xác thực OTP** | < 3 giây | 95% yêu cầu | Cây chức năng 1.4 KPI |
| **Tạo mã vạch** | < 5 giây | Sau xác minh thành công | Cây chức năng 1.5 KPI |
| **Quét đổi quà** | < 3 giây | Quét POS/di động | Cây chức năng 1.5 KPI |
| **Tải bảng điều khiển** | < 3 giây | Cổng quản trị/thương hiệu | Cây chức năng 1.6 KPI |
| **Xuất báo cáo** | < 30 giây | 100K bản ghi CSV/Excel | Cây chức năng 1.6 KPI |

### 5.2.3 Yêu cầu lưu lượng

**Điểm cuối API:**
- **Trang đích**: 50,000 yêu cầu/phút (đỉnh khởi chạy chiến dịch)
- **Xác thực OTP**: 20,000 yêu cầu/phút
- **Tạo mã vạch**: 10,000 yêu cầu/phút  
- **API đổi quà**: 5,000 yêu cầu/phút
- **Truy vấn phân tích**: 1,000 yêu cầu/phút

**Hiệu năng cơ sở dữ liệu:**
- **Thao tác đọc**: < 100ms cho 95% truy vấn
- **Thao tác ghi**: < 200ms cho giao dịch
- **Kết nối đồng thời**: 1,000 kết nối cùng lúc
- **Lưu lượng truy vấn**: 10,000 truy vấn/giây

### 5.2.4 Tiêu chí chấp nhận hiệu năng
- [ ] Kiểm thử tải với JMeter/K6 đạt 100K RPM
- [ ] Thời gian phản hồi phần trăm thứ 95 < mục tiêu
- [ ] Không có lỗi hết thời gian trong tải bình thường
- [ ] Tối ưu truy vấn cơ sở dữ liệu < 100ms trung bình

---

## 5.3 NFR-002: Yêu cầu khả năng mở rộng

### 5.3.1 Mục tiêu mở rộng (từ Product-Sampling-Vision-and-Strategy Document.md)
- **Năm 1**: 50K người dùng đã xác minh, 25 thương hiệu
- **Năm 2**: 200K người dùng đã xác minh, 80 thương hiệu  
- **Năm 3**: 500K người dùng đã xác minh, 200 thương hiệu
- **Dài hạn**: 10M người dùng, toàn khu vực ASEAN

### 5.3.2 Khả năng mở rộng người dùng

| Giai đoạn | Người dùng đồng thời | Tải đỉnh | Khối lượng dữ liệu | Yêu cầu hạ tầng |
|-----------|----------------------|----------|---------------------|-----------------|
| **MVP (Q1-Q2 2025)** | 10,000 | 50K RPM | 100 GB | Triển khai 2-AZ |
| **Mở rộng (Q3 2025-Q4 2026)** | 100,000 | 500K RPM | 1 TB | Đa vùng |
| **Khu vực (2027+)** | 1,000,000 | 5M RPM | 10 TB | Triển khai ASEAN |

### 5.3.3 Khả năng mở rộng địa lý
**Giai đoạn 1 (Việt Nam):**
- Hồ Chí Minh và Hà Nội làm vùng chính
- 99.9% thời gian hoạt động trong giờ cao điểm (9-18h)
- Hỗ trợ tiếng Việt

**Giai đoạn 2 (ASEAN):**
- Thái Lan, Indonesia, Philippines
- Hỗ trợ đa ngôn ngữ (Thái, Bahasa, tiếng Anh)
- Tuân thủ địa phương (lưu trữ dữ liệu, nhà cung cấp viễn thông)
- Tổng hợp phân tích xuyên biên giới

### 5.3.4 Khả năng mở rộng dữ liệu
**Chiến lược phân vùng cơ sở dữ liệu:**
- **Khóa phân vùng**: mã_quốc_gia + mã_chiến_dịch
- **Mở rộng ngang**: Phân vùng MongoDB, phân chia PostgreSQL
- **Lưu trữ dữ liệu**: 2 năm dữ liệu nóng, 5 năm lưu trữ lạnh
- **Chiến lược sao lưu**: Gia tăng hàng ngày, sao lưu đầy đủ hàng tuần

**Tiêu chí chấp nhận:**
- [ ] Thời gian phản hồi tự động mở rộng < 5 phút
- [ ] Không mất dữ liệu trong sự kiện mở rộng
- [ ] Độ trễ xuyên vùng < 200ms
- [ ] Mở rộng cơ sở dữ liệu minh bạch cho người dùng

---

## 5.4 NFR-003: Yêu cầu độ tin cậy

### 5.4.1 Mục tiêu độ tin cậy (từ 01-BRD.md 1.4)
- **Thời gian hoạt động nền tảng**: 99.9% SLA
- **Tính khả dụng API**: 99.95% cho điểm cuối quan trọng
- **Tính nhất quán dữ liệu**: 100% cho giao dịch tài chính
- **Mục tiêu phục hồi**: RTO < 4 giờ, RPO < 1 giờ

### 5.4.2 Khả năng chịu lỗi

**Loại bỏ điểm lỗi đơn:**
- **Bộ cân bằng tải**: Đa AZ với kiểm tra sức khỏe
- **Máy chủ ứng dụng**: Nhóm tự động mở rộng
- **Cơ sở dữ liệu**: Sao chép chính-phụ, chuyển đổi dự phòng tự động
- **Bộ nhớ đệm**: Cụm Redis với tính bền vững
- **Lưu trữ tệp**: S3 với sao chép xuyên vùng

**Mô hình ngắt mạch:**
- **API bên thứ ba**: Hết thời gian 30s, thử lại 3 lần
- **Kết nối cơ sở dữ liệu**: Quản lý pool với kết nối lại
- **Nhà cung cấp SMS/Email**: Nhà cung cấp dự phòng tự động

### 5.4.3 Sao lưu và phục hồi
**Chiến lược sao lưu:**
- **Cơ sở dữ liệu**: Sao lưu liên tục với phục hồi điểm thời gian
- **Tải lên tệp**: Sao chép xuyên vùng
- **Cấu hình**: Hạ tầng dưới dạng code (Terraform)
- **Code ứng dụng**: Triển khai dựa trên Git với rollback

**Khôi phục thảm họa:**
- **RTO (Mục tiêu thời gian phục hồi)**: 4 giờ
- **RPO (Mục tiêu điểm phục hồi)**: 1 giờ
- **Kiểm thử chuyển đổi dự phòng**: Bài tập drill hàng tháng
- **Dự phòng trung tâm dữ liệu**: Trang web chính + DR

### 5.4.4 Giám sát và cảnh báo
**Giám sát hệ thống:**
- **Chỉ số ứng dụng**: Thời gian phản hồi, tỷ lệ lỗi, lưu lượng
- **Chỉ số hạ tầng**: CPU, bộ nhớ, đĩa, mạng
- **Chỉ số kinh doanh**: Tỷ lệ chuyển đổi, doanh thu, hoạt động người dùng
- **Chỉ số bảo mật**: Đăng nhập thất bại, hoạt động đáng ngờ

**Quy tắc cảnh báo:**
- **Quan trọng**: Thời gian phản hồi > 5s, Tỷ lệ lỗi > 1%, Ngừng hoạt động
- **Cảnh báo**: Thời gian phản hồi > 3s, Tỷ lệ lỗi > 0.5%
- **Thông tin**: Hoàn thành triển khai, sự kiện mở rộng

**Tiêu chí chấp nhận:**
- [ ] Đo lường 99.9% thời gian hoạt động qua 3 tháng
- [ ] Drill khôi phục thảm họa thành công
- [ ] Thời gian trung bình để phục hồi (MTTR) < 30 phút
- [ ] Không có sự cố hỏng dữ liệu

---

## 5.5 NFR-004: Yêu cầu bảo mật

### 5.5.1 Mục tiêu bảo mật (từ Access_Control_Tree_Grok.md v2.2)
- **Xác thực**: OAuth 2.0/OpenID Connect
- **Ủy quyền**: RBAC với quyền động 6 vai trò
- **Bảo vệ dữ liệu**: Mã hóa PII AES-256
- **Tuân thủ**: ISO 27001, GDPR/PDPA

### 5.5.2 Bảo mật xác thực và ủy quyền

**Yêu cầu xác thực:**
- **Chính sách mật khẩu**: Tối thiểu 8 ký tự, quy tắc phức tạp
- **Xác thực đa yếu tố**: SMS/Email OTP cho vai trò quản trị
- **Quản lý phiên**: JWT với hết hạn trượt
- **Khóa tài khoản**: 5 lần thử thất bại → khóa 15 phút

**Khung ủy quyền:**
- **Quyền dựa trên vai trò**: Gán động theo chức năng
- **Bảo mật cấp tài nguyên**: Cách ly tenant, lọc dữ liệu
- **Bảo mật API**: Giới hạn tỷ lệ, quản lý khóa API
- **Tăng cấp đặc quyền**: Nâng cao vai trò tạm thời với phê duyệt

### 5.5.3 Bảo mật dữ liệu

**Mã hóa dữ liệu:**
- **Khi nghỉ**: AES-256 cho PII trong cơ sở dữ liệu
- **Khi truyền**: TLS 1.3 cho tất cả giao tiếp API
- **Mã hóa sao lưu**: Tệp sao lưu được mã hóa
- **Quản lý khóa**: AWS KMS hoặc HashiCorp Vault

**Quyền riêng tư dữ liệu:**
- **Xử lý PII**: Lưu trữ băm, thu thập tối thiểu
- **Lưu giữ dữ liệu**: 7 năm cho kiểm toán, 2 năm cho tiếp thị
- **Quyền bị lãng quên**: Quy trình xóa tự động
- **Quản lý đồng ý**: Kiểm soát đăng ký/hủy đăng ký chi tiết

### 5.5.4 Bảo mật ứng dụng

**Bảo vệ OWASP Top 10:**
- **Tiêm**: Truy vấn tham số, xác thực đầu vào
- **Xác thực bị hỏng**: Quản lý phiên an toàn
- **Tiết lộ dữ liệu nhạy cảm**: Mã hóa, tiêu đề bảo mật
- **XXE**: Vô hiệu hóa xử lý thực thể bên ngoài
- **Kiểm soát truy cập bị hỏng**: Ủy quyền cấp tài nguyên
- **Cấu hình sai bảo mật**: Quét bảo mật tự động
- **XSS**: Chính sách bảo mật nội dung, mã hóa đầu ra
- **Deserialization không an toàn**: API chỉ JSON
- **Thành phần có lỗ hổng**: Quét phụ thuộc
- **Ghi nhật ký không đủ**: Dấu vết kiểm tra toàn diện

**Kiểm thử bảo mật:**
- **Phân tích tĩnh**: SonarQube, CodeQL
- **Phân tích động**: OWASP ZAP, Burp Suite
- **Kiểm thử thâm nhập**: Đánh giá bên ngoài hàng quý
- **Quản lý lỗ hổng**: Quét tự động, quản lý bản vá

**Tiêu chí chấp nhận:**
- [ ] Không có lỗ hổng quan trọng trong sản xuất
- [ ] Kiểm thử thâm nhập passed với no high-risk findings
- [ ] Kiểm toán tuân thủ GDPR passed
- [ ] Thời gian phản hồi sự cố bảo mật < 2 giờ

---

## 5.6 NFR-005: Yêu cầu khả năng sử dụng

### 5.6.1 Mục tiêu trải nghiệm người dùng (từ System_Feature_Tree_Grok.md UX KPIs)
- **Tỷ lệ hoàn thành biểu mẫu**: > 90%
- **Tỷ lệ tương tác người dùng**: > 70% (Cổng người dùng)
- **Phản hồi di động**: > 95% điểm
- **Khả năng tiếp cận**: Tuân thủ WCAG 2.1 AA

### 5.6.2 Giao diện người dùng

**Nguyên tắc thiết kế:**
- **Ưu tiên di động**: PWA với thiết kế phản hồi
- **UI tối giản**: Tập trung vào hành động cốt lõi
- **Tiết lộ tiến bộ**: Hiển thị thông tin theo mức độ cần thiết
- **Thương hiệu nhất quán**: Khả năng white-label cho thương hiệu

**Luồng trải nghiệm người dùng:**
- **Trang đích**: Hoàn thành biểu mẫu một trang < 30 giây
- **Xác thực OTP**: Hướng dẫn rõ ràng, cơ chế thử lại
- **Hiển thị mã vạch**: Nhiều định dạng (QR, Apple Wallet, PDF)
- **Cổng người dùng**: Điều hướng trực quan, chức năng tìm kiếm

### 5.6.3 Tiêu chuẩn khả năng tiếp cận

**Tuân thủ WCAG 2.1 AA:**
- **Có thể nhận thức**: Văn bản thay thế cho hình ảnh, tỷ lệ tương phản màu
- **Có thể vận hành**: Điều hướng bàn phím, chỉ báo focus
- **Có thể hiểu**: Ngôn ngữ rõ ràng, điều hướng nhất quán
- **Mạnh mẽ**: HTML ngữ nghĩa, khả năng tương thích trình đọc màn hình

**Hỗ trợ đa ngôn ngữ:**
- **Bản địa hóa**: Tiếng Việt, tiếng Anh, tiếng Thái, Bahasa Indonesia
- **Hỗ trợ RTL**: Thị trường Ả Rập/Hebrew (tương lai)
- **Định dạng số/ngày**: Định dạng theo địa phương
- **Tiền tệ**: Hiển thị tiền tệ địa phương

### 5.6.4 Hiệu năng UX

**Core Web Vitals:**
- **Largest Contentful Paint (LCP)**: < 2.5 giây
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

**Yêu cầu PWA:**
- **Chức năng ngoại tuyến**: Bộ nhớ đệm service worker
- **Lời nhắc cài đặt**: Khả năng thêm vào màn hình chính
- **Thông báo đẩy**: Tương tác và giữ chân
- **Trải nghiệm giống ứng dụng**: Chế độ toàn màn hình, màn hình khởi động

**Tiêu chí chấp nhận:**
- [ ] Điểm Google PageSpeed Insights > 90
- [ ] Điểm Lighthouse PWA > 90
- [ ] Kiểm thử tự động WCAG 2.1 AA passed
- [ ] Kiểm thử chấp nhận người dùng > 85% hài lòng

---

## 5.7 NFR-006: Yêu cầu tương thích

### 5.7.1 Tương thích trình duyệt và thiết bị

**Hỗ trợ trình duyệt:**
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Di động**: Chrome Mobile 90+, Safari iOS 14+, Samsung Internet 14+
- **Cải tiến tiến bộ**: Suy giảm graceful cho trình duyệt cũ

**Tương thích thiết bị:**
- **Điện thoại thông minh**: iOS 12+, Android 8+ (API level 26+)
- **Máy tính bảng**: iPad iOS 14+, máy tính bảng Android 10"+
- **Desktop**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **Kích thước màn hình**: Thiết kế phản hồi 320px đến 4K

### 5.7.2 Tương thích tích hợp

**Tích hợp CRM (từ System_Feature_Tree_Grok.md 1.7):**
- **HubSpot**: REST API v3, hỗ trợ webhook
- **Salesforce**: REST API v52, OAuth 2.0
- **Pipedrive**: REST API v1, đồng bộ thời gian thực
- **API tùy chỉnh**: Đặc tả OpenAPI 3.0

**Tích hợp POS (từ System_Feature_Tree_Grok.md 1.5):**
- **Circle K**: Tích hợp API tùy chỉnh
- **GS25**: Giao thức quét mã vạch
- **Mini Stop**: Khả năng đồng bộ ngoại tuyến
- **POS chung**: Scandit SDK, định dạng mã vạch tiêu chuẩn

**Dịch vụ bên thứ ba:**
- **Nhà cung cấp SMS**: Twilio, MessageBird với dự phòng
- **Dịch vụ email**: SendGrid, AWS SES
- **Phân tích**: GA4, Meta Pixel, theo dõi tùy chỉnh
- **Hỗ trợ**: Tích hợp Zendesk, Freshdesk

### 5.7.3 Tương thích API

**Tiêu chuẩn REST API:**
- **OpenAPI 3.0**: Tài liệu API đầy đủ
- **Phương thức HTTP**: GET, POST, PUT, DELETE, PATCH
- **Mã trạng thái**: Mã phản hồi HTTP tiêu chuẩn
- **Giới hạn tỷ lệ**: 1000 yêu cầu/giờ mỗi khóa API
- **Phiên bản**: Cấu trúc URL /api/v1/

**Hỗ trợ webhook:**
- **Loại sự kiện**: Sự kiện chiến dịch, đổi quà, hành động người dùng
- **Định dạng payload**: JSON với xác minh chữ ký
- **Logic thử lại**: Backoff theo cấp số nhân, hàng đợi dead letter
- **Bảo mật**: Chữ ký HMAC, danh sách trắng IP

**Tiêu chí chấp nhận:**
- [ ] Kiểm thử cross-browser passed trên tất cả trình duyệt được hỗ trợ
- [ ] Kiểm thử tương thích API với hệ thống CRM chính
- [ ] Kiểm thử thiết bị di động trên iOS và Android
- [ ] Kiểm thử tích hợp bên thứ ba hoàn thành

---

## 5.8 NFR-007: Yêu cầu bảo trì

### 5.8.1 Khả năng bảo trì code

**Tiêu chuẩn chất lượng code:**
- **Code coverage**: > 80% unit test coverage
- **Chỉ số phức tạp**: Phức tạp cyclomatic < 10
- **Tài liệu**: Bình luận inline, tài liệu API
- **Phong cách code**: Định dạng nhất quán, quy tắc linting

**Khả năng bảo trì kiến trúc:**
- **Microservices**: Kết nối lỏng lẻo, triển khai độc lập
- **Thiết kế API-first**: Ranh giới dịch vụ rõ ràng
- **Quản lý cấu hình**: Cấu hình theo môi trường
- **Quản lý phụ thuộc**: Cập nhật thường xuyên, bản vá bảo mật

### 5.8.2 Triển khai và CI/CD

**Tích hợp liên tục:**
- **Kiểm thử tự động**: Unit, tích hợp, end-to-end tests
- **Cổng chất lượng code**: Phân tích SonarQube, quét bảo mật
- **Tự động hóa build**: Container hóa Docker
- **Quản lý artifact**: Triển khai có phiên bản

**Triển khai liên tục:**
- **Triển khai blue-green**: Phát hành không downtime
- **Khả năng rollback**: Hoàn nguyên ngay lập tức trong < 5 phút
- **Thăng tiến môi trường**: Dev → Staging → Production
- **Feature flags**: Triển khai tính năng từ từ

### 5.8.3 Giám sát và observability

**Giám sát ứng dụng:**
- **Thu thập chỉ số**: Prometheus, CloudWatch
- **Tổng hợp nhật ký**: ELK stack, ghi nhật ký tập trung
- **Tracing phân tán**: Jaeger, tương quan yêu cầu
- **Theo dõi lỗi**: Sentry, tổng hợp ngoại lệ

**Trí tuệ kinh doanh:**
- **Bảng điều khiển KPI**: Chỉ số kinh doanh thời gian thực
- **Phân tích sử dụng**: Theo dõi hành vi người dùng
- **Xu hướng hiệu năng**: Phân tích lịch sử
- **Lập kế hoạch năng lực**: Xu hướng sử dụng tài nguyên

**Tiêu chí chấp nhận:**
- [ ] Cổng chất lượng code passed trong pipeline CI
- [ ] Kiểm thử tự động hóa triển khai hoàn thành
- [ ] Cảnh báo giám sát được cấu hình đúng
- [ ] Tài liệu được cập nhật và có thể truy cập

---

## 5.9 NFR-008: Yêu cầu tuân thủ

### 5.9.1 Tuân thủ quy định dữ liệu (từ Access_Control_Tree_Grok.md Tuân thủ)

**Tuân thủ GDPR (Liên minh châu Âu):**
- **Cơ sở pháp lý**: Đồng ý cho tiếp thị, lợi ích hợp pháp cho dịch vụ
- **Giảm thiểu dữ liệu**: Chỉ thu thập dữ liệu cần thiết
- **Quyền truy cập**: Cổng người dùng với tải xuống dữ liệu
- **Quyền chỉnh sửa**: Chức năng cập nhật hồ sơ
- **Quyền xóa**: Xóa tài khoản với tẩy dữ liệu
- **Tính di động dữ liệu**: Xuất dữ liệu người dùng trong định dạng machine-readable
- **Quyền riêng tư theo thiết kế**: Cài đặt quyền riêng tư mặc định

**Tuân thủ PDPA (ASEAN):**
- **Bản địa hóa dữ liệu**: Yêu cầu lưu trữ dữ liệu trong nước
- **Quản lý đồng ý**: Đăng ký rõ ràng cho xử lý dữ liệu
- **Thông báo vi phạm dữ liệu**: Yêu cầu thông báo 72 giờ
- **Chuyển giao xuyên biên giới**: Quyết định đầy đủ, điều khoản hợp đồng tiêu chuẩn

### 5.9.2 Tuân thủ bảo mật

**Phù hợp ISO 27001:**
- **Chính sách bảo mật thông tin**: Chính sách và quy trình được tài liệu hóa
- **Đánh giá rủi ro**: Đánh giá bảo mật thường xuyên
- **Kiểm soát truy cập**: Quyền dựa trên vai trò, đặc quyền tối thiểu
- **Quản lý sự cố**: Kế hoạch phản hồi sự cố bảo mật
- **Liên tục kinh doanh**: Quy trình khôi phục thảm họa
- **Quản lý nhà cung cấp**: Đánh giá bảo mật bên thứ ba

**SOC 2 Type II (Tương lai):**
- **Bảo mật**: Kiểm soát truy cập logic và vật lý
- **Tính khả dụng**: Giám sát uptime và hiệu năng hệ thống
- **Tính toàn vẹn xử lý**: Cơ chế bảo vệ độ chính xác và đầy đủ dữ liệu
- **Bảo mật**: Cơ chế bảo vệ dữ liệu
- **Quyền riêng tư**: Xử lý thông tin cá nhân

### 5.9.3 Tuân thủ tài chính

**Chống rửa tiền (AML):**
- **Nhận dạng khách hàng**: Quy trình KYC cho chiến dịch giá trị cao
- **Giám sát giao dịch**: Phát hiện hoạt động đáng ngờ
- **Lưu giữ hồ sơ**: Lưu giữ lịch sử giao dịch 5 năm

**Tuân thủ thuế:**
- **Tính toán VAT/GST**: Tính thuế tự động
- **Báo cáo**: Khả năng báo cáo cơ quan thuế
- **Dấu vết kiểm tra**: Nhật ký giao dịch tài chính đầy đủ

### 5.9.4 Kiểm toán và báo cáo tuân thủ

**Yêu cầu kiểm toán:**
- **Nhật ký kiểm toán**: Ghi nhật ký sự kiện bất biến
- **Dòng dữ liệu**: Theo dõi luồng dữ liệu đầy đủ
- **Báo cáo tuân thủ**: Báo cáo trạng thái tuân thủ tự động
- **Kiểm toán bên ngoài**: Kiểm toán tuân thủ bên thứ ba hàng năm

**Khả năng báo cáo:**
- **Báo cáo quyền riêng tư**: Hoạt động xử lý dữ liệu
- **Báo cáo bảo mật**: Tóm tắt sự cố, trạng thái lỗ hổng
- **Báo cáo tài chính**: Tóm tắt giao dịch, tính toán thuế
- **Báo cáo vận hành**: Tuân thủ SLA, chỉ số hiệu năng

**Tiêu chí chấp nhận:**
- [ ] Kiểm toán tuân thủ GDPR passed
- [ ] Xác minh tuân thủ PDPA hoàn thành
- [ ] Phân tích khoảng cách ISO 27001 hoàn thành
- [ ] Xác minh tính toàn vẹn nhật ký kiểm toán passed

---

## 5.10 Ma trận ưu tiên NFR

| NFR | Mức độ quan trọng | Giai đoạn triển khai | Ước tính công sức | Phụ thuộc |
|-----|-------------------|---------------------|-------------------|-----------|
| **NFR-001 Hiệu năng** | Cao | MVP | Trung bình | Tối ưu cơ sở dữ liệu |
| **NFR-002 Khả năng mở rộng** | Cao | Giai đoạn 2 | Cao | Hạ tầng đám mây |
| **NFR-003 Độ tin cậy** | Cao | MVP | Trung bình | Thiết lập giám sát |
| **NFR-004 Bảo mật** | Rất cao | MVP | Cao | Khung tuân thủ |
| **NFR-005 Khả năng sử dụng** | Cao | MVP | Trung bình | Thiết kế UX hoàn thành |
| **NFR-006 Tương thích** | Trung bình | MVP | Thấp | API bên thứ ba |
| **NFR-007 Bảo trì** | Trung bình | Liên tục | Trung bình | Thiết lập DevOps |
| **NFR-008 Tuân thủ** | Rất cao | MVP | Cao | Đánh giá pháp lý |

---

**Nguồn tham khảo chính:**
- Tài liệu yêu cầu kinh doanh (01-BRD.md v3.0) - Mục tiêu KPI, ràng buộc kinh doanh, mô hình tài chính
- Cây chức năng hệ thống (System_Feature_Tree_Grok.md v4.0) - KPI hiệu năng, yêu cầu UX
- Cây kiểm soát truy cập (Access_Control_Tree_Grok.md v2.2) - Yêu cầu bảo mật, khung tuân thủ
- Định nghĩa vấn đề (Problem.md v1.0) - Ràng buộc kỹ thuật, yêu cầu mở rộng
- Tài liệu tầm nhìn và chiến lược (Product-Sampling-Vision-and-Strategy Document.md v1.0) - Mục tiêu khả năng mở rộng, mở rộng thị trường

**Tình trạng**: Part05 hoàn thành ✅  
**Tiếp theo**: Part06 - Kiến trúc hệ thống và thành phần  
**Người đánh giá**: Kiến trúc sư hệ thống, Kỹ sư bảo mật, Kỹ sư hiệu năng
