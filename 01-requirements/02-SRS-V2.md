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
# 📋 SRS Part06 - Kiến trúc hệ thống và thành phần (System Architecture & Components)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 6.1 Tổng quan kiến trúc hệ thống

### 6.1.1 Nguyên tắc thiết kế kiến trúc (từ System_Feature_Tree_Grok.md v4.0)
Dựa trên **yêu cầu kỹ thuật tổng quan** trong tài liệu cây chức năng, hệ thống được thiết kế theo các nguyên tắc:

- **Microservices**: Kiến trúc dịch vụ nhỏ với Node.js/Go
- **Multi-tenant**: Hỗ trợ 10M người dùng đến 2027
- **Cloud-native**: AWS/GCP với khả năng mở rộng tự động
- **Security-first**: Mã hóa PII AES, tuân thủ ISO 27001
- **API-driven**: Tích hợp HubSpot, Twilio, Scandit, GA4

### 6.1.2 Mục tiêu kiến trúc (từ 01-BRD.md v3.0)
**Mục tiêu hiệu năng:**
- Xử lý 100,000 requests/phút tại API gateway
- Uptime 99.9% SLA
- Khả năng mở rộng từ 25 brands (năm 1) đến 200 brands (năm 3)
- Chi phí vận hành <40% doanh thu sau năm 2

**Mục tiêu kỹ thuật:**
- Thời gian phản hồi <3 giây cho dashboard
- RTO <4 giờ, RPO <1 giờ cho disaster recovery
- Zero downtime deployment với blue-green strategy

### 6.1.3 Ràng buộc kiến trúc
**Ràng buộc từ 01-BRD.md:**
- Ngân sách phát triển: 122.64 tỷ VND (3 năm)
- Đội ngũ: 16 người (năm 1) → 37 người (năm 3)
- Timeline: MVP 6 tháng, mở rộng khu vực 18 tháng

**Ràng buộc từ Problem.md:**
- Hỗ trợ offline-first sync cho retail nodes
- Tích hợp với mạng lưới Circle K, GS25, Mini Stop
- Tuân thủ GDPR/PDPA cho dữ liệu cá nhân

---

## 6.2 Kiến trúc tổng thể

### 6.2.1 Sơ đồ kiến trúc cấp cao

```
┌─────────────────────────────────────────────────────────────────┐
│                        CDN & Load Balancer                      │
│                     (CloudFlare / AWS ALB)                      │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                    API Gateway Layer                            │
│              (Kong / AWS API Gateway)                           │
│     ┌─────────────┬─────────────┬─────────────┬─────────────┐   │
│     │ Rate Limit  │ Auth/OAuth  │  Routing    │  Logging    │   │
│     └─────────────┴─────────────┴─────────────┴─────────────┘   │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                  Application Layer                              │
│                 (Microservices)                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │ Campaign    │ │ User Mgmt   │ │ Barcode     │ │ Analytics   ││
│  │ Service     │ │ Service     │ │ Service     │ │ Service     ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │ OTP         │ │ POS         │ │ CRM         │ │ Notification││
│  │ Service     │ │ Service     │ │ Service     │ │ Service     ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                    Data Layer                                   │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │ MongoDB     │ │ PostgreSQL  │ │ Redis       │ │ S3/MinIO    ││
│  │ (Documents) │ │ (ACID)      │ │ (Cache)     │ │ (Files)     ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 6.2.2 Luồng dữ liệu chính (từ System_Feature_Tree_Grok.md Flow vận hành)

```
1. Khách hàng quét QR → API Gateway → Campaign Service
2. Điền form → User Service → OTP Service → SMS/Email Provider
3. Xác thực OTP → Barcode Service → Tạo mã duy nhất
4. Đổi quà tại POS → POS Service → Cập nhật trạng thái
5. Analytics → CRM Service → Đồng bộ với HubSpot/Salesforce
```

### 6.2.3 Deployment topology

**Multi-region setup:**
- **Primary region**: Việt Nam (AWS ap-southeast-1)
- **Secondary region**: Singapore (DR + ASEAN expansion)
- **CDN**: Global CloudFlare distribution

**Environment strategy:**
- **Development**: Local + cloud dev environment
- **Staging**: Pre-production testing environment  
- **Production**: Multi-AZ với auto-scaling
- **DR (Disaster Recovery)**: Hot standby trong Singapore

---

## 6.3 Microservices chi tiết

### 6.3.1 Campaign Service (từ System_Feature_Tree_Grok.md 1.1)

**Chức năng chính:**
- Quản lý lifecycle campaign (tạo, cập nhật, tạm dừng, hoàn thành)
- Gán barcode pool và location targeting
- Tạo dynamic QR với UTM tracking
- Multi-tenant isolation theo user role

**API endpoints chính:**
```
POST /api/v1/campaigns          - Tạo campaign mới
GET  /api/v1/campaigns/{id}     - Chi tiết campaign
PUT  /api/v1/campaigns/{id}     - Cập nhật campaign
POST /api/v1/campaigns/{id}/qr  - Tạo QR code
```

**Database schema:**
- **campaigns** collection (MongoDB)
- **campaign_locations** (PostgreSQL relation)
- **campaign_analytics** (time-series data)

**Dependencies:**
- User Service (authorization)
- Barcode Service (pool assignment)
- Analytics Service (tracking)

### 6.3.2 User Management Service (từ Access_Control_Tree_Grok.md v2.2)

**Chức năng chính:**
- RBAC với 6 roles: Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role
- OAuth 2.0/JWT authentication
- Dynamic permission evaluation
- Audit logging cho compliance

**API endpoints chính:**
```
POST /api/v1/auth/login         - Đăng nhập
POST /api/v1/auth/refresh       - Refresh token
GET  /api/v1/users/me           - Profile người dùng
POST /api/v1/users/permissions  - Kiểm tra quyền
```

**Permission matrix implementation:**
```javascript
// Dynamic permission từ Access_Control_Tree_Grok.md
{
  "campaign.create": ["admin", "group_admin", "customer_account"],
  "barcode.import": ["admin", "group_admin:own_group", "customer_account:own"],
  "redemption.scan": ["serving_account"]
}
```

### 6.3.3 Barcode Service (từ System_Feature_Tree_Grok.md 1.2)

**Chức năng chính:**
- Import/quản lý barcode pools từ CSV
- Single-use validation và trạng thái lifecycle
- Personalized assignment sau OTP verification
- Apple Wallet/Google Pay integration

**Trạng thái lifecycle:**
```
Chưa phát → Đã phát → Đã redeem → Hết hạn → Revoked
```

**API endpoints chính:**
```
POST /api/v1/barcodes/import    - Import CSV
POST /api/v1/barcodes/assign    - Gán cho user
PUT  /api/v1/barcodes/redeem    - Đổi quà
GET  /api/v1/barcodes/status    - Kiểm tra trạng thái
```

**Integration points:**
- Voucherify API cho advanced features
- Apple Wallet API cho mobile wallet
- ERP webhooks cho inventory sync

### 6.3.4 OTP Service (từ System_Feature_Tree_Grok.md 1.4)

**Chức năng chính:**
- Multi-channel OTP (SMS via Twilio, Email via SendGrid)
- Rate limiting và fraud prevention
- 6-digit code với 5 phút expiration
- Device fingerprinting cho security

**Fraud prevention rules:**
- Max 10 OTP requests/hour per phone
- 3 verification attempts per session
- Progressive delay: 30s → 60s → 120s
- Disposable email detection

**API endpoints chính:**
```
POST /api/v1/otp/send           - Gửi OTP
POST /api/v1/otp/verify         - Xác thực OTP
GET  /api/v1/otp/stats          - Thống kê admin
```

### 6.3.5 POS Service (từ System_Feature_Tree_Grok.md 1.5)

**Chức năng chính:**
- Multi-channel redemption (web tool, mobile app, POS API)
- Offline-first với IndexedDB sync
- Atomic barcode validation
- Integration với Circle K, GS25, Mini Stop

**Offline capability:**
- 24-hour local storage capacity
- Queue-based sync khi online
- Conflict resolution cho simultaneous redemptions

**API endpoints chính:**
```
POST /api/v1/pos/scan           - Scan barcode
POST /api/v1/pos/redeem         - Xử lý đổi quà
POST /api/v1/pos/sync           - Sync offline data
GET  /api/v1/pos/locations      - Danh sách điểm đổi
```

### 6.3.6 Analytics Service (từ System_Feature_Tree_Grok.md 1.6)

**Chức năng chính:**
- Real-time funnel tracking: Scan → Submit → Verify → Issue → Redeem
- Dashboard với <3s response time
- Export CSV/Excel/API capabilities
- Integration với GA4, Meta Pixel

**Metrics collection:**
- Event-driven architecture với message queue
- Time-series data storage
- Pre-aggregated dashboards
- Custom KPI calculations

**API endpoints chính:**
```
GET  /api/v1/analytics/funnel   - Funnel metrics
GET  /api/v1/analytics/export   - Export data
POST /api/v1/analytics/events   - Custom events
GET  /api/v1/analytics/kpi      - Business KPIs
```

### 6.3.7 CRM Service (từ System_Feature_Tree_Grok.md 1.7)

**Chức năng chính:**
- Bi-directional sync với HubSpot, Salesforce, Pipedrive
- Lead scoring và conversion tracking
- GDPR-compliant data transfer
- Webhook-based real-time updates

**Supported integrations:**
- HubSpot REST API v3
- Salesforce REST API v52  
- Custom webhook endpoints
- Batch export scheduling

**API endpoints chính:**
```
POST /api/v1/crm/sync           - Manual sync trigger
GET  /api/v1/crm/mappings       - Field mappings
POST /api/v1/crm/webhook        - Incoming webhooks
GET  /api/v1/crm/leads          - Lead export
```

### 6.3.8 Notification Service

**Chức năng chính:**
- Multi-channel notifications (SMS, Email, Push)
- Template management cho brands
- Delivery tracking và retry logic
- Personalization dựa trên user preferences

**Provider integrations:**
- Twilio (SMS primary)
- MessageBird (SMS backup)
- SendGrid (Email primary)
- AWS SES (Email backup)

---

## 6.4 Data Architecture

### 6.4.1 Database strategy (từ System_Feature_Tree_Grok.md yêu cầu kỹ thuật)

**MongoDB (Document store):**
- **Campaigns**: Flexible schema cho campaign metadata
- **User profiles**: JSON documents với preferences
- **Analytics events**: Time-series event logs
- **Audit trails**: Immutable compliance logs

**PostgreSQL (ACID transactions):**
- **Users & permissions**: RBAC relationships
- **Barcode inventory**: Financial-grade consistency
- **Transactions**: Payment và redemption records
- **Reconciliation**: Settlement và audit data

**Redis (Caching & sessions):**
- **Session storage**: JWT token management
- **Rate limiting**: API quotas và fraud prevention
- **Real-time data**: Dashboard metrics cache
- **Queue management**: Background job processing

### 6.4.2 Data partitioning strategy

**Horizontal sharding:**
```javascript
// Partition key strategy
{
  "partition_key": "country_code + tenant_id",
  "examples": {
    "VN_brand001": "Vietnam brand data",
    "TH_brand002": "Thailand brand data",
    "ID_brand003": "Indonesia brand data"
  }
}
```

**Data retention policy:**
- **Hot data**: 2 năm trong primary storage
- **Warm data**: 3-7 năm trong archive storage
- **Cold data**: >7 năm trong compliance archive
- **GDPR deletion**: 30 ngày processing window

### 6.4.3 Backup và recovery strategy

**Backup schedule:**
- **Continuous backup**: MongoDB change streams
- **Daily snapshots**: PostgreSQL với point-in-time recovery
- **Weekly full backup**: Cross-region replication
- **Monthly archive**: Long-term compliance storage

**Recovery procedures:**
- **RTO target**: <4 giờ full service restoration
- **RPO target**: <1 giờ data loss tolerance
- **Automated failover**: Database cluster management
- **Manual procedures**: Documented disaster recovery playbook

---

## 6.5 Integration Architecture

### 6.5.1 External integrations (từ System_Feature_Tree_Grok.md tích hợp)

**Third-party services:**

| Service | Provider | Purpose | SLA requirement |
|---------|----------|---------|-----------------|
| **SMS OTP** | Twilio, MessageBird | OTP delivery | 99.5% uptime, <30s delivery |
| **Email** | SendGrid, AWS SES | Notifications, OTP | 99.9% delivery rate |
| **CRM** | HubSpot, Salesforce | Lead management | 99% API availability |
| **Analytics** | GA4, Meta Pixel | Tracking, attribution | Best effort |
| **Scanning** | Scandit SDK | Barcode scanning | Offline capability |
| **Wallet** | Apple Wallet, Google Pay | Mobile barcode | Platform-dependent |
| **Support** | Zendesk | Ticketing system | 99% uptime |

### 6.5.2 API Gateway configuration

**Kong/AWS API Gateway setup:**
- **Rate limiting**: 1000 requests/hour per API key
- **Authentication**: JWT token validation
- **Routing**: Service discovery và load balancing
- **Monitoring**: Request/response logging
- **Versioning**: /api/v1/, /api/v2/ support

**Security policies:**
- **CORS**: Whitelist origins cho web clients
- **HTTPS only**: TLS 1.3 enforcement
- **Request validation**: OpenAPI 3.0 schema validation
- **IP filtering**: Geo-blocking cho restricted countries

### 6.5.3 Event-driven architecture

**Message queue setup:**
- **Redis Pub/Sub**: Real-time notifications
- **AWS SQS**: Reliable background processing
- **Dead letter queues**: Failed message handling
- **Event sourcing**: Audit trail reconstruction

**Event types:**
```javascript
{
  "campaign.created": {...},
  "barcode.assigned": {...},
  "redemption.completed": {...},
  "user.verified": {...},
  "analytics.tracked": {...}
}
```

---

## 6.6 Security Architecture

### 6.6.1 Authentication & Authorization (từ Access_Control_Tree_Grok.md v2.2)

**OAuth 2.0 flow:**
```
1. Client → Authorization Server (Login)
2. User credentials → JWT token issue
3. API calls → JWT validation
4. Refresh token → New access token
```

**JWT payload structure:**
```json
{
  "sub": "user_id",
  "role": "customer_account", 
  "permissions": ["campaign.create", "barcode.view"],
  "tenant": "brand_001",
  "exp": 1234567890
}
```

### 6.6.2 Data encryption

**Encryption at rest:**
- **PII fields**: AES-256 encryption trong database
- **Backup files**: Encrypted storage với key rotation
- **Log files**: Sensitive data masking

**Encryption in transit:**
- **API traffic**: TLS 1.3 cho tất cả endpoints
- **Database connections**: SSL/TLS cho DB access
- **Internal services**: mTLS cho service-to-service

**Key management:**
- **AWS KMS**: Centralized key management
- **Key rotation**: Automated 90-day rotation
- **HSM integration**: Hardware security modules cho production

### 6.6.3 Network security

**VPC architecture:**
- **Public subnet**: Load balancers, API gateway
- **Private subnet**: Application servers
- **Database subnet**: Isolated DB access
- **NAT gateway**: Outbound internet access

**Security groups:**
- **Web tier**: Port 80/443 from internet
- **App tier**: Internal communication only
- **DB tier**: Database ports from app tier only

---

## 6.7 Monitoring & Observability

### 6.7.1 Application monitoring

**Metrics collection:**
- **Prometheus**: Application metrics scraping
- **Grafana**: Dashboard visualization
- **AlertManager**: Alert routing và notifications

**Key metrics:**
- **SLI (Service Level Indicators)**: Response time, error rate, throughput
- **SLO (Service Level Objectives)**: 99.9% uptime, <3s response time
- **Business metrics**: Conversion rate, revenue, user engagement

### 6.7.2 Logging architecture

**Centralized logging:**
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Structured logging**: JSON format với correlation IDs
- **Log retention**: 90 ngày operational, 7 năm compliance

**Log categories:**
- **Application logs**: Service interactions, errors
- **Audit logs**: GDPR compliance, user actions
- **Security logs**: Authentication, authorization events
- **Performance logs**: Response times, resource usage

### 6.7.3 Distributed tracing

**Jaeger implementation:**
- **Trace correlation**: Request flow across services
- **Performance profiling**: Bottleneck identification
- **Error tracking**: Exception propagation

**Trace context:**
```javascript
{
  "trace_id": "abc123",
  "span_id": "def456", 
  "operation": "barcode.assign",
  "duration": "150ms",
  "status": "success"
}
```

---

## 6.8 Deployment Architecture

### 6.8.1 Container strategy

**Docker containerization:**
- **Base images**: Alpine Linux cho security
- **Multi-stage builds**: Optimized image sizes
- **Security scanning**: Vulnerability assessment

**Kubernetes orchestration:**
- **EKS/GKE**: Managed Kubernetes service
- **Helm charts**: Application deployment templates
- **Service mesh**: Istio cho advanced networking

### 6.8.2 CI/CD Pipeline

**GitLab CI/Docker approach:**
```yaml
stages:
  - test
  - build
  - deploy

unit_tests:
  stage: test
  script:
    - npm test
    - coverage report

build_image:
  stage: build
  script:
    - docker build -t app:$CI_COMMIT_SHA .
    - docker push registry/app:$CI_COMMIT_SHA

deploy_staging:
  stage: deploy
  script:
    - helm upgrade --install app ./helm-chart
```

**Deployment strategies:**
- **Blue-Green**: Zero downtime deployments
- **Rolling updates**: Gradual service updates
- **Canary releases**: Feature flag-based rollouts

### 6.8.3 Environment management

**Infrastructure as Code:**
- **Terraform**: Cloud resource provisioning
- **Ansible**: Configuration management
- **GitOps**: Declarative environment definitions

**Environment isolation:**
- **Development**: Shared resources, cost optimized
- **Staging**: Production-like, isolated testing
- **Production**: High availability, performance optimized
- **DR**: Hot standby, automated failover

---

**Nguồn tham khảo chính:**
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - Yêu cầu kỹ thuật, microservices, flow vận hành, KPI technical
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - Security architecture, RBAC design, authentication
- Business Requirement Document (01-BRD.md v3.0) - Performance targets, scaling requirements, budget constraints
- Problem Definition (Problem.md v1.0) - Technical constraints, integration requirements
- Vision & Strategy Document (Product-Sampling-Vision-and-Strategy Document.md v1.0) - Scaling timeline, market expansion

**Tình trạng**: Part06 hoàn thành ✅  
**Tiếp theo**: Part07 - Thiết kế dữ liệu và CSDL  
**Người đánh giá**: Kiến trúc sư hệ thống, DevOps Engineer, Security Architect

# 📋 SRS Part07 - Thiết kế dữ liệu và CSDL (Data Design & Database Schema)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 7.1 Tổng quan thiết kế dữ liệu

### 7.1.1 Chiến lược cơ sở dữ liệu (từ System_Feature_Tree_Grok.md v4.0)
Dựa trên **yêu cầu kỹ thuật tổng quan**, hệ thống sử dụng kiến trúc cơ sở dữ liệu đa dạng:

- **MongoDB**: Dữ liệu documents cho campaigns, analytics events, audit logs
- **PostgreSQL**: Dữ liệu quan hệ cho users, permissions, financial transactions
- **Redis**: Cache layer cho sessions, rate limiting, real-time data
- **S3/MinIO**: File storage cho ads formats, exports, backups

### 7.1.2 Nguyên tắc thiết kế dữ liệu
**Từ Access_Control_Tree_Grok.md v2.2:**
- **Multi-tenant isolation**: Phân tách dữ liệu theo tenant_id
- **GDPR compliance**: PII encryption và audit trails
- **Data consistency**: ACID transactions cho financial data
- **Scalability**: Horizontal sharding cho 10M users

**Từ 01-BRD.md v3.0:**
- **Data retention**: 7 năm cho audit, 2 năm cho marketing
- **Backup strategy**: Daily incremental, weekly full
- **Performance**: <100ms cho 95% database queries

### 7.1.3 Phân vùng dữ liệu
**Chiến lược phân vùng theo địa lý và tenant:**
```
Partition Key = country_code + tenant_id
VN_brand001, TH_brand002, ID_brand003...
```

**Lưu trữ phân tầng:**
- **Hot data**: Active campaigns, recent transactions
- **Warm data**: Historical analytics, completed campaigns  
- **Cold data**: Archived compliance data

---

## 7.2 MongoDB Schema Design

### 7.2.1 Campaigns Collection (từ System_Feature_Tree_Grok.md 1.1)

```javascript
// campaigns collection
{
  "_id": ObjectId("..."),
  "campaign_id": "CAMP_2025_001",
  "tenant_id": "brand_001",
  "name": "Tên chiến dịch sampling",
  "description": "Mô tả chi tiết chiến dịch",
  "status": "active", // draft, active, paused, completed
  "dates": {
    "start_date": ISODate("2025-01-01T00:00:00Z"),
    "end_date": ISODate("2025-12-31T23:59:59Z"),
    "created_at": ISODate("2025-01-01T00:00:00Z"),
    "updated_at": ISODate("2025-01-01T00:00:00Z")
  },
  "settings": {
    "max_participants": 10000,
    "budget_limit": 50000.00,
    "cost_per_lead": 0.4
  },
  "targeting": {
    "locations": ["HCM_DIST1", "HN_DIST2"],
    "demographics": {
      "age_min": 18,
      "age_max": 65,
      "gender": "all" // male, female, all
    }
  },
  "utm_tracking": {
    "utm_source": "sampling",
    "utm_medium": "qr",
    "utm_campaign": "CAMP_2025_001",
    "utm_term": "product_trial",
    "utm_content": "poster_v1"
  },
  "barcode_pool": {
    "total_codes": 10000,
    "assigned_codes": 2500,
    "redeemed_codes": 1200,
    "expired_codes": 50
  },
  "created_by": "user_id_123",
  "group_id": "group_001", // cho Group Admin scope
  
  // Indexes
  "indexes": [
    {"tenant_id": 1, "status": 1},
    {"campaign_id": 1},
    {"created_by": 1},
    {"dates.start_date": 1, "dates.end_date": 1}
  ]
}
```

### 7.2.2 User Profiles Collection (từ System_Feature_Tree_Grok.md 1.3)

```javascript
// user_profiles collection
{
  "_id": ObjectId("..."),
  "user_id": "USER_2025_001",
  "phone_hash": "sha256_hashed_phone", // GDPR compliance
  "email_hash": "sha256_hashed_email",
  "profile": {
    "first_name_encrypted": "AES256_encrypted_data",
    "last_name_encrypted": "AES256_encrypted_data",
    "age_range": "25-34", // aggregated không encrypt
    "gender": "female",
    "city": "Ho Chi Minh",
    "interests": ["beauty", "food", "technology"]
  },
  "preferences": {
    "product_categories": ["cosmetics", "snacks"],
    "notification_channels": ["sms", "email"],
    "language": "vi",
    "timezone": "Asia/Ho_Chi_Minh"
  },
  "verification": {
    "phone_verified": true,
    "email_verified": true,
    "verified_at": ISODate("2025-01-01T10:30:00Z"),
    "verification_method": "sms_otp"
  },
  "consent": {
    "marketing_opt_in": true,
    "data_processing_consent": true,
    "consent_version": "v1.2",
    "consent_date": ISODate("2025-01-01T10:30:00Z"),
    "gdpr_compliant": true
  },
  "engagement": {
    "total_campaigns": 5,
    "total_redemptions": 4,
    "last_activity": ISODate("2025-10-15T14:20:00Z"),
    "engagement_score": 85 // 0-100
  },
  "created_at": ISODate("2025-01-01T10:30:00Z"),
  "updated_at": ISODate("2025-10-15T14:20:00Z"),
  
  // Indexes
  "indexes": [
    {"phone_hash": 1},
    {"email_hash": 1},
    {"created_at": -1},
    {"engagement.last_activity": -1}
  ]
}
```

### 7.2.3 Analytics Events Collection (từ System_Feature_Tree_Grok.md 1.6)

```javascript
// analytics_events collection (time-series)
{
  "_id": ObjectId("..."),
  "event_id": "EVT_2025_001234",
  "timestamp": ISODate("2025-10-17T14:30:00Z"),
  "event_type": "qr_scan", // form_submit, otp_verify, barcode_assign, redemption
  "campaign_id": "CAMP_2025_001",
  "user_id": "USER_2025_001",
  "session_id": "SESS_ABC123",
  
  "location": {
    "location_id": "HCM_CIRCLE_K_001",
    "city": "Ho Chi Minh",
    "district": "District 1",
    "coordinates": {
      "lat": 10.7769,
      "lng": 106.7009
    }
  },
  
  "device": {
    "device_type": "mobile",
    "os": "iOS",
    "browser": "Safari",
    "screen_size": "375x812",
    "user_agent": "Mozilla/5.0..."
  },
  
  "conversion_funnel": {
    "step": "scan", // scan, form, verify, assign, redeem
    "step_order": 1,
    "time_from_previous": 0, // seconds
    "completion_rate": 0.95
  },
  
  "attribution": {
    "utm_source": "poster",
    "utm_medium": "qr",
    "ads_format_id": "ADS_POSTER_A4_001",
    "referrer": "organic"
  },
  
  "metadata": {
    "ip_address_hash": "sha256_ip",
    "country_code": "VN",
    "tenant_id": "brand_001"
  },
  
  // Time-series optimized indexes
  "indexes": [
    {"timestamp": -1, "event_type": 1},
    {"campaign_id": 1, "timestamp": -1},
    {"user_id": 1, "timestamp": -1},
    {"tenant_id": 1, "timestamp": -1}
  ]
}
```

### 7.2.4 Audit Logs Collection (từ Access_Control_Tree_Grok.md v2.2)

```javascript
// audit_logs collection (immutable)
{
  "_id": ObjectId("..."),
  "audit_id": "AUDIT_2025_001234",
  "timestamp": ISODate("2025-10-17T14:30:00Z"),
  "action": "barcode_import", // user_login, campaign_create, permission_change
  "actor": {
    "user_id": "USER_ADMIN_001",
    "role": "admin",
    "tenant_id": "brand_001",
    "ip_address_hash": "sha256_ip"
  },
  "target": {
    "resource_type": "barcode",
    "resource_id": "BARCODE_BATCH_001",
    "campaign_id": "CAMP_2025_001"
  },
  "changes": {
    "before": {"status": "pending"},
    "after": {"status": "imported", "count": 10000}
  },
  "compliance": {
    "gdpr_relevant": true,
    "retention_until": ISODate("2032-10-17T14:30:00Z"), // 7 years
    "legal_basis": "legitimate_interest"
  },
  "metadata": {
    "user_agent": "Mozilla/5.0...",
    "session_id": "SESS_ABC123",
    "request_id": "REQ_DEF456"
  },
  
  // Immutable - không được update sau khi tạo
  "immutable": true,
  
  // Compliance indexes
  "indexes": [
    {"timestamp": -1},
    {"actor.user_id": 1, "timestamp": -1},
    {"target.resource_type": 1, "timestamp": -1},
    {"compliance.retention_until": 1}
  ]
}
```

---

## 7.3 PostgreSQL Schema Design

### 7.3.1 Users và RBAC Tables (từ Access_Control_Tree_Grok.md v2.2)

```sql
-- Users table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE NOT NULL,
    email_hash VARCHAR(64) UNIQUE NOT NULL, -- SHA-256 hash
    phone_hash VARCHAR(64) UNIQUE, -- SHA-256 hash
    password_hash VARCHAR(255) NOT NULL, -- bcrypt
    role_id INTEGER REFERENCES roles(role_id),
    tenant_id VARCHAR(50) NOT NULL,
    group_id VARCHAR(50), -- NULL cho global users
    
    -- Profile data (encrypted trong application layer)
    profile_encrypted TEXT, -- JSON encrypted với AES-256
    
    -- Status tracking
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, suspended
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    
    -- Audit fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(user_id),
    last_login TIMESTAMP,
    
    -- Indexes
    CONSTRAINT users_tenant_check CHECK (tenant_id ~ '^[a-z0-9_]+$')
);

CREATE INDEX idx_users_tenant_role ON users(tenant_id, role_id);
CREATE INDEX idx_users_email_hash ON users(email_hash);
CREATE INDEX idx_users_phone_hash ON users(phone_hash);
CREATE INDEX idx_users_last_login ON users(last_login);

-- Roles table (6 roles từ Access Control Tree)
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    role_description TEXT,
    scope_type VARCHAR(20) NOT NULL, -- global, group, campaign, personal
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (role_name, role_description, scope_type) VALUES
('admin', 'Toàn quyền hệ thống', 'global'),
('group_admin', 'Quản trị nhóm', 'group'),
('customer_account', 'Tài khoản khách hàng', 'campaign'),
('serving_account', 'Tài khoản phục vụ', 'personal'),
('auditor', 'Kiểm toán viên', 'global'),
('user_role', 'Người dùng cuối', 'personal');

-- Permissions table (dynamic permissions)
CREATE TABLE permissions (
    permission_id SERIAL PRIMARY KEY,
    permission_name VARCHAR(100) UNIQUE NOT NULL,
    resource_type VARCHAR(50) NOT NULL, -- campaign, barcode, analytics
    action VARCHAR(50) NOT NULL, -- create, read, update, delete
    scope_restriction VARCHAR(100), -- own, group, global
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Role-Permission mapping
CREATE TABLE role_permissions (
    role_id INTEGER REFERENCES roles(role_id),
    permission_id INTEGER REFERENCES permissions(permission_id),
    granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id)
);
```

### 7.3.2 Barcode Inventory Tables (từ System_Feature_Tree_Grok.md 1.2)

```sql
-- Barcode batches
CREATE TABLE barcode_batches (
    batch_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_name VARCHAR(255) NOT NULL,
    campaign_id VARCHAR(100), -- Reference to MongoDB campaigns
    tenant_id VARCHAR(50) NOT NULL,
    
    -- Batch metadata
    total_codes INTEGER NOT NULL,
    imported_codes INTEGER DEFAULT 0,
    assigned_codes INTEGER DEFAULT 0,
    redeemed_codes INTEGER DEFAULT 0,
    expired_codes INTEGER DEFAULT 0,
    
    -- Product info
    product_name VARCHAR(255) NOT NULL,
    product_value DECIMAL(10,2),
    expiry_date DATE,
    
    -- Audit
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(user_id),
    
    CONSTRAINT positive_counts CHECK (
        total_codes >= 0 AND
        imported_codes >= 0 AND
        assigned_codes >= 0 AND
        redeemed_codes >= 0 AND
        expired_codes >= 0
    )
);

CREATE INDEX idx_barcode_batches_campaign ON barcode_batches(campaign_id);
CREATE INDEX idx_barcode_batches_tenant ON barcode_batches(tenant_id);

-- Individual barcodes
CREATE TABLE barcodes (
    barcode_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barcode_value VARCHAR(100) UNIQUE NOT NULL,
    batch_id UUID REFERENCES barcode_batches(batch_id),
    
    -- Status lifecycle
    status VARCHAR(20) DEFAULT 'available', -- available, assigned, redeemed, expired, revoked
    
    -- Assignment tracking
    assigned_to_user_hash VARCHAR(64), -- SHA-256 của user identifier
    assigned_at TIMESTAMP,
    assignment_campaign_id VARCHAR(100),
    
    -- Redemption tracking
    redeemed_at TIMESTAMP,
    redeemed_location_id VARCHAR(100),
    redeemed_by_staff VARCHAR(100),
    
    -- Expiry
    expires_at TIMESTAMP,
    
    -- Audit trail
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_status CHECK (
        status IN ('available', 'assigned', 'redeemed', 'expired', 'revoked')
    ),
    CONSTRAINT assignment_logic CHECK (
        (status = 'assigned' AND assigned_to_user_hash IS NOT NULL) OR
        (status != 'assigned' OR assigned_to_user_hash IS NULL)
    )
);

-- Optimized indexes cho performance
CREATE UNIQUE INDEX idx_barcodes_value ON barcodes(barcode_value);
CREATE INDEX idx_barcodes_batch_status ON barcodes(batch_id, status);
CREATE INDEX idx_barcodes_user_hash ON barcodes(assigned_to_user_hash) WHERE assigned_to_user_hash IS NOT NULL;
CREATE INDEX idx_barcodes_redemption ON barcodes(redeemed_at) WHERE redeemed_at IS NOT NULL;
CREATE INDEX idx_barcodes_expiry ON barcodes(expires_at) WHERE expires_at IS NOT NULL;

-- Barcode status history (cho audit)
CREATE TABLE barcode_status_history (
    history_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barcode_id UUID REFERENCES barcodes(barcode_id),
    old_status VARCHAR(20),
    new_status VARCHAR(20),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    changed_by UUID REFERENCES users(user_id),
    change_reason TEXT,
    metadata JSONB
);

CREATE INDEX idx_barcode_history_barcode ON barcode_status_history(barcode_id, changed_at);
```

### 7.3.3 Financial Transactions Table (từ 01-BRD.md v3.0)

```sql
-- Transactions cho billing và settlement
CREATE TABLE transactions (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    
    -- Transaction details
    transaction_type VARCHAR(50) NOT NULL, -- subscription, usage_fee, refund
    amount DECIMAL(15,2) NOT NULL,
    currency CHAR(3) DEFAULT 'VND',
    
    -- Reference data
    campaign_id VARCHAR(100),
    billing_period DATE,
    item_count INTEGER, -- số lượng leads, redemptions, etc.
    unit_price DECIMAL(10,4),
    
    -- Status
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
    processed_at TIMESTAMP,
    
    -- Payment integration
    payment_provider VARCHAR(50),
    payment_reference VARCHAR(255),
    
    -- Audit
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(user_id),
    
    -- Invoice data
    invoice_id VARCHAR(100),
    invoice_generated_at TIMESTAMP,
    
    CONSTRAINT positive_amount CHECK (amount > 0),
    CONSTRAINT valid_status CHECK (
        status IN ('pending', 'completed', 'failed', 'refunded')
    )
);

CREATE INDEX idx_transactions_tenant_period ON transactions(tenant_id, billing_period);
CREATE INDEX idx_transactions_status ON transactions(status, created_at);
CREATE INDEX idx_transactions_campaign ON transactions(campaign_id) WHERE campaign_id IS NOT NULL;
```

### 7.3.4 Locations và Retail Network (từ System_Feature_Tree_Grok.md 2.8)

```sql
-- Retail locations
CREATE TABLE locations (
    location_id VARCHAR(100) PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    location_type VARCHAR(50), -- circle_k, gs25, mini_stop, booth, other
    
    -- Address
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100),
    country_code CHAR(2) DEFAULT 'VN',
    postal_code VARCHAR(20),
    
    -- Coordinates
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    
    -- Operational info
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, maintenance
    operating_hours JSONB, -- {"mon": "06:00-22:00", "tue": "06:00-22:00", ...}
    contact_phone VARCHAR(20),
    contact_email VARCHAR(100),
    
    -- Partner info
    partner_id VARCHAR(100),
    partner_name VARCHAR(255),
    commission_rate DECIMAL(5,4) DEFAULT 0.00, -- % commission
    
    -- Capabilities
    pos_integration BOOLEAN DEFAULT FALSE,
    offline_capability BOOLEAN DEFAULT TRUE,
    max_daily_redemptions INTEGER,
    
    -- Audit
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT valid_coordinates CHECK (
        (latitude IS NULL AND longitude IS NULL) OR
        (latitude BETWEEN -90 AND 90 AND longitude BETWEEN -180 AND 180)
    )
);

CREATE INDEX idx_locations_city_status ON locations(city, status);
CREATE INDEX idx_locations_type_country ON locations(location_type, country_code);
CREATE INDEX idx_locations_partner ON locations(partner_id) WHERE partner_id IS NOT NULL;

-- Spatial index cho geo queries (PostGIS extension)
CREATE INDEX idx_locations_geo ON locations USING GIST (ST_MakePoint(longitude, latitude));
```

---

## 7.4 Redis Schema Design

### 7.4.1 Session Management (từ System_Feature_Tree_Grok.md 1.4)

```javascript
// Redis keys cho session management
{
  // JWT session cache
  "session:jwt:{token_hash}": {
    "user_id": "USER_2025_001",
    "role": "customer_account",
    "tenant_id": "brand_001",
    "permissions": ["campaign.create", "barcode.view"],
    "expires_at": "2025-10-17T18:00:00Z"
  },
  "ttl": 3600, // 1 hour
  
  // OTP verification
  "otp:verify:{phone_hash}": {
    "code": "123456",
    "attempts": 1,
    "max_attempts": 3,
    "created_at": "2025-10-17T14:30:00Z"
  },
  "ttl": 300, // 5 minutes
  
  // Rate limiting
  "rate_limit:api:{user_id}": {
    "count": 45,
    "window_start": "2025-10-17T14:00:00Z"
  },
  "ttl": 3600, // 1 hour window
  
  // Fraud detection
  "fraud:phone:{phone_hash}": {
    "otp_requests_today": 8,
    "last_request": "2025-10-17T14:30:00Z",
    "suspicious_score": 0.2
  },
  "ttl": 86400 // 24 hours
}
```

### 7.4.2 Real-time Analytics Cache

```javascript
// Dashboard metrics cache
{
  "analytics:campaign:{campaign_id}:today": {
    "scans": 1250,
    "form_submissions": 980,
    "verifications": 945,
    "assignments": 920,
    "redemptions": 650,
    "conversion_rate": 0.76,
    "last_updated": "2025-10-17T14:30:00Z"
  },
  "ttl": 300, // 5 minutes
  
  "analytics:funnel:{campaign_id}:realtime": {
    "scan_to_form": 0.78,
    "form_to_verify": 0.96,
    "verify_to_assign": 0.97,
    "assign_to_redeem": 0.71,
    "overall_conversion": 0.52
  },
  "ttl": 60, // 1 minute
  
  // Location-based metrics
  "analytics:location:{location_id}:today": {
    "total_scans": 85,
    "unique_users": 72,
    "redemptions": 45,
    "peak_hour": "14:00-15:00",
    "avg_time_to_redeem": 1800 // seconds
  },
  "ttl": 1800 // 30 minutes
}
```

### 7.4.3 Background Jobs Queue

```javascript
// Job queue cho background processing
{
  "queue:email:high": [
    {
      "job_id": "JOB_EMAIL_001",
      "type": "otp_email",
      "recipient": "user@example.com",
      "template": "otp_verification",
      "data": {"otp_code": "123456"},
      "retry_count": 0,
      "created_at": "2025-10-17T14:30:00Z"
    }
  ],
  
  "queue:sms:high": [
    {
      "job_id": "JOB_SMS_001", 
      "type": "otp_sms",
      "phone": "+84901234567",
      "message": "Mã xác thực của bạn: 123456",
      "provider": "twilio",
      "retry_count": 0
    }
  ],
  
  "queue:analytics:low": [
    {
      "job_id": "JOB_ANALYTICS_001",
      "type": "event_processing",
      "events_batch": [...],
      "processing_at": "2025-10-17T14:35:00Z"
    }
  ]
}
```

---

## 7.5 File Storage Design

### 7.5.1 S3/MinIO Bucket Structure (từ System_Feature_Tree_Grok.md 1.10)

```
product-sampling-storage/
├── ads-formats/
│   ├── {tenant_id}/
│   │   ├── {campaign_id}/
│   │   │   ├── original/
│   │   │   │   ├── poster_a4_v1.pdf
│   │   │   │   └── flyer_a5_v2.png
│   │   │   ├── processed/
│   │   │   │   ├── poster_a4_v1_qr.pdf
│   │   │   │   └── flyer_a5_v2_qr.png
│   │   │   └── thumbnails/
│   │   │       ├── poster_a4_v1_thumb.jpg
│   │   │       └── flyer_a5_v2_thumb.jpg
│   │   └── templates/
│   │       ├── brand_guidelines.pdf
│   │       └── logo_high_res.png
├── exports/
│   ├── {tenant_id}/
│   │   ├── analytics/
│   │   │   ├── 2025-10-17_campaign_report.csv
│   │   │   └── 2025-10-17_user_data.xlsx
│   │   └── barcodes/
│   │       ├── batch_001_export.csv
│   │       └── redemption_log.csv
├── backups/
│   ├── mongodb/
│   │   ├── 2025-10-17/
│   │   │   ├── campaigns_backup.gz
│   │   │   └── analytics_backup.gz
│   ├── postgresql/
│   │   ├── 2025-10-17/
│   │   │   └── full_backup.sql.gz
└── compliance/
    ├── audit_logs/
    │   ├── 2025/10/
    │   │   └── audit_2025_10_17.json.gz
    └── gdpr_exports/
        ├── user_data_export_{user_id}.zip
        └── deletion_confirmations/
```

### 7.5.2 File Metadata Schema

```javascript
// File metadata trong MongoDB
{
  "_id": ObjectId("..."),
  "file_id": "FILE_2025_001234",
  "tenant_id": "brand_001",
  "campaign_id": "CAMP_2025_001",
  
  "file_info": {
    "original_name": "poster_a4_campaign.pdf",
    "stored_name": "ads-formats/brand_001/CAMP_2025_001/original/poster_a4_v1.pdf",
    "file_size": 2048576, // bytes
    "mime_type": "application/pdf",
    "checksum": "sha256_hash_here"
  },
  
  "processing": {
    "status": "completed", // pending, processing, completed, failed
    "qr_embedded": true,
    "thumbnail_generated": true,
    "dpi_validated": true,
    "dpi_value": 300
  },
  
  "usage": {
    "ads_format_type": "poster_a4",
    "print_ready": true,
    "download_count": 25,
    "last_downloaded": ISODate("2025-10-17T14:30:00Z")
  },
  
  "metadata": {
    "dimensions": "210x297mm",
    "qr_position": {"x": 180, "y": 50, "size": "20mm"},
    "color_mode": "CMYK",
    "bleed": "3mm"
  },
  
  "audit": {
    "uploaded_by": "USER_2025_001",
    "uploaded_at": ISODate("2025-10-17T14:00:00Z"),
    "last_modified": ISODate("2025-10-17T14:30:00Z")
  }
}
```

---

## 7.6 Data Migration Strategy

### 7.6.1 Migration Scripts

```sql
-- PostgreSQL migration script example
-- Migration: 001_create_users_table.sql

BEGIN;

-- Create users table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    -- ... columns định nghĩa như trên
);

-- Insert seed data cho roles
INSERT INTO roles (role_name, role_description, scope_type) 
VALUES 
    ('admin', 'Toàn quyền hệ thống', 'global'),
    ('group_admin', 'Quản trị nhóm', 'group');

-- Create indexes
CREATE INDEX idx_users_tenant_role ON users(tenant_id, role_id);

COMMIT;
```

```javascript
// MongoDB migration script
// migration_001_create_campaigns_collection.js

db.campaigns.createIndex({"tenant_id": 1, "status": 1});
db.campaigns.createIndex({"campaign_id": 1});
db.campaigns.createIndex({"created_by": 1});

// Tạo campaigns mặc định cho testing
db.campaigns.insertOne({
  "campaign_id": "DEMO_CAMPAIGN_001",
  "tenant_id": "demo_brand",
  "name": "Demo Sampling Campaign",
  "status": "active",
  "dates": {
    "start_date": new Date(),
    "end_date": new Date(Date.now() + 30*24*60*60*1000) // 30 ngày
  },
  "created_at": new Date()
});

// Tạo collections với validation rules
db.createCollection("analytics_events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["event_type", "timestamp", "campaign_id"],
      properties: {
        event_type: {
          bsonType: "string",
          enum: ["qr_scan", "form_submit", "otp_verify", "barcode_assign", "redemption"]
        },
        timestamp: { bsonType: "date" },
        campaign_id: { bsonType: "string" }
      }
    }
  }
});
```

### 7.6.2 Chiến lược Migration dữ liệu hiện tại

**Giai đoạn 1 - Schema Setup:**
```bash
# Tạo databases
createdb product_sampling_prod
createdb product_sampling_staging

# Chạy migrations
psql -d product_sampling_prod -f migrations/001_create_users_table.sql
psql -d product_sampling_prod -f migrations/002_create_barcodes_table.sql

# MongoDB setup
mongosh --eval "use product_sampling; load('migrations/001_campaigns.js')"
```

**Giai đoạn 2 - Data Import:**
```python
# Python script cho data import
import pandas as pd
import psycopg2
from pymongo import MongoClient

def migrate_legacy_barcodes():
    """Import barcode từ hệ thống cũ"""
    # Đọc CSV legacy data
    df = pd.read_csv('legacy_barcodes.csv')
    
    # Validate data
    df['barcode_value'] = df['barcode_value'].str.strip()
    df = df.drop_duplicates(subset=['barcode_value'])
    
    # Insert vào PostgreSQL
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    
    for _, row in df.iterrows():
        cursor.execute("""
            INSERT INTO barcodes (barcode_value, batch_id, status, expires_at)
            VALUES (%s, %s, 'available', %s)
        """, (row['barcode_value'], row['batch_id'], row['expiry_date']))
    
    conn.commit()
    cursor.close()
    conn.close()

def migrate_user_profiles():
    """Encrypt và migrate user data"""
    # Implementation với AES encryption
    pass
```

---

## 7.7 Backup và Recovery Strategy

### 7.7.1 Backup Schedule (từ 01-BRD.md v3.0)

**PostgreSQL Backup:**
```bash
#!/bin/bash
# daily_backup.sh

DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/backups/postgresql/${DATE}"
mkdir -p $BACKUP_DIR

# Full backup với compression
pg_dump -h localhost -U postgres -d product_sampling \
  --format=custom --compress=9 \
  --file="${BACKUP_DIR}/full_backup.dump"

# Upload to S3
aws s3 cp "${BACKUP_DIR}/full_backup.dump" \
  "s3://product-sampling-backups/postgresql/${DATE}/"

# Verify backup integrity
pg_restore --list "${BACKUP_DIR}/full_backup.dump" > /dev/null
if [ $? -eq 0 ]; then
    echo "Backup verification successful"
else
    echo "Backup verification failed" | mail -s "Backup Alert" admin@company.com
fi
```

**MongoDB Backup:**
```bash
#!/bin/bash
# mongodb_backup.sh

DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/backups/mongodb/${DATE}"
mkdir -p $BACKUP_DIR

# Mongodump với compression
mongodump --host localhost:27017 \
  --db product_sampling \
  --gzip \
  --out $BACKUP_DIR

# Upload to S3
aws s3 sync $BACKUP_DIR \
  "s3://product-sampling-backups/mongodb/${DATE}/"

# Verify backup
if [ -f "${BACKUP_DIR}/product_sampling/campaigns.bson.gz" ]; then
    echo "MongoDB backup completed successfully"
else
    echo "MongoDB backup failed"
fi
```

### 7.7.2 Point-in-Time Recovery

**PostgreSQL PITR Setup:**
```sql
-- Enable WAL archiving trong postgresql.conf
archive_mode = on
archive_command = 'cp %p /archive/%f'
wal_level = replica
max_wal_senders = 3

-- Recovery script
-- restore_to_point.sql
SELECT pg_create_restore_point('before_data_corruption');

-- Restore to specific timestamp
-- recovery.conf
restore_command = 'cp /archive/%f %p'
recovery_target_time = '2025-10-17 14:30:00'
```

**MongoDB Replica Set Recovery:**
```javascript
// Replica set configuration
rs.initiate({
  _id: "product_sampling_rs",
  members: [
    { _id: 0, host: "mongo1:27017", priority: 2 },
    { _id: 1, host: "mongo2:27017", priority: 1 },
    { _id: 2, host: "mongo3:27017", arbiterOnly: true }
  ]
});

// Oplog-based recovery
db.runCommand({
  "replSetResizeOplog": 1,
  "size": 10240 // 10GB oplog
});
```

### 7.7.3 Disaster Recovery Plan

**RTO/RPO Targets (từ 01-BRD.md):**
- **RTO (Recovery Time Objective)**: <4 giờ
- **RPO (Recovery Point Objective)**: <1 giờ

**DR Procedures:**
```yaml
# dr_playbook.yml
disaster_recovery:
  primary_failure:
    - step_1: "Verify primary datacenter status"
    - step_2: "Promote secondary region to primary"
    - step_3: "Update DNS records to point to DR site"
    - step_4: "Verify application functionality"
    - step_5: "Notify stakeholders"
  
  database_corruption:
    - step_1: "Stop application writes"
    - step_2: "Assess corruption scope"
    - step_3: "Restore from latest clean backup"
    - step_4: "Apply transaction logs"
    - step_5: "Verify data integrity"
    - step_6: "Resume operations"
  
  contact_list:
    - primary_dba: "+84901234567"
    - devops_lead: "+84901234568"
    - security_team: "security@company.com"
```

---

## 7.8 Data Security và Compliance

### 7.8.1 PII Encryption Strategy (từ Access_Control_Tree_Grok.md v2.2)

**Application-level Encryption:**
```python
# encryption_utils.py
import cryptography
from cryptography.fernet import Fernet
import hashlib
import base64

class PIIEncryption:
    def __init__(self, master_key):
        self.fernet = Fernet(master_key)
    
    def encrypt_pii(self, plaintext):
        """Encrypt PII data với AES-256"""
        if not plaintext:
            return None
        
        encrypted = self.fernet.encrypt(plaintext.encode('utf-8'))
        return base64.b64encode(encrypted).decode('utf-8')
    
    def decrypt_pii(self, encrypted_data):
        """Decrypt PII data"""
        if not encrypted_data:
            return None
            
        encrypted_bytes = base64.b64decode(encrypted_data)
        decrypted = self.fernet.decrypt(encrypted_bytes)
        return decrypted.decode('utf-8')
    
    def hash_identifier(self, identifier):
        """Hash phone/email cho indexing"""
        return hashlib.sha256(identifier.encode('utf-8')).hexdigest()

# Usage example
encryptor = PIIEncryption(os.getenv('MASTER_KEY'))

user_data = {
    "first_name": encryptor.encrypt_pii("Nguyễn"),
    "last_name": encryptor.encrypt_pii("Văn A"),
    "phone_hash": encryptor.hash_identifier("+84901234567"),
    "email_hash": encryptor.hash_identifier("user@example.com")
}
```

### 7.8.2 GDPR Compliance Implementation

**Data Subject Rights:**
```sql
-- GDPR right to access
CREATE OR REPLACE FUNCTION get_user_data(user_phone_hash VARCHAR)
RETURNS JSON AS $
DECLARE
    user_record RECORD;
    result JSON;
BEGIN
    -- Tìm user và decrypt data
    SELECT u.user_id, u.profile_encrypted, 
           array_agg(b.barcode_value) as barcodes
    FROM users u
    LEFT JOIN barcodes b ON b.assigned_to_user_hash = user_phone_hash
    WHERE u.phone_hash = user_phone_hash
    GROUP BY u.user_id, u.profile_encrypted
    INTO user_record;
    
    -- Build JSON response
    result := json_build_object(
        'user_id', user_record.user_id,
        'profile_data', user_record.profile_encrypted,
        'barcodes', user_record.barcodes,
        'exported_at', NOW()
    );
    
    RETURN result;
END;
$ LANGUAGE plpgsql;

-- GDPR right to erasure
CREATE OR REPLACE FUNCTION delete_user_data(user_phone_hash VARCHAR)
RETURNS BOOLEAN AS $
BEGIN
    -- Start transaction
    BEGIN
        -- Anonymize user profile
        UPDATE users 
        SET profile_encrypted = NULL,
            email_hash = 'DELETED_' || user_id,
            phone_hash = 'DELETED_' || user_id,
            status = 'deleted'
        WHERE phone_hash = user_phone_hash;
        
        -- Update barcodes để remove personal link
        UPDATE barcodes 
        SET assigned_to_user_hash = 'DELETED'
        WHERE assigned_to_user_hash = user_phone_hash;
        
        -- Log deletion cho compliance
        INSERT INTO audit_logs (action, target_id, details)
        VALUES ('gdpr_deletion', user_phone_hash, 'User data deleted per GDPR request');
        
        RETURN TRUE;
    EXCEPTION WHEN OTHERS THEN
        RETURN FALSE;
    END;
END;
$ LANGUAGE plpgsql;
```

### 7.8.3 Data Retention Policy

**Automated Cleanup Jobs:**
```sql
-- Cleanup job cho expired data
CREATE OR REPLACE FUNCTION cleanup_expired_data()
RETURNS VOID AS $
BEGIN
    -- Archive old analytics events (>2 years)
    INSERT INTO analytics_events_archive 
    SELECT * FROM analytics_events 
    WHERE timestamp < NOW() - INTERVAL '2 years';
    
    DELETE FROM analytics_events 
    WHERE timestamp < NOW() - INTERVAL '2 years';
    
    -- Remove expired barcodes
    UPDATE barcodes 
    SET status = 'expired'
    WHERE expires_at < NOW() AND status != 'expired';
    
    -- Archive old audit logs (>7 years)
    INSERT INTO audit_logs_archive
    SELECT * FROM audit_logs
    WHERE created_at < NOW() - INTERVAL '7 years';
    
    DELETE FROM audit_logs
    WHERE created_at < NOW() - INTERVAL '7 years';
    
    RAISE NOTICE 'Data cleanup completed at %', NOW();
END;
$ LANGUAGE plpgsql;

-- Schedule cleanup job
SELECT cron.schedule('cleanup_expired_data', '0 2 * * *', 'SELECT cleanup_expired_data();');
```

---

## 7.9 Performance Optimization

### 7.9.1 Database Indexing Strategy

**PostgreSQL Indexes:**
```sql
-- Composite indexes cho common queries
CREATE INDEX CONCURRENTLY idx_barcodes_tenant_status_created 
ON barcodes(batch_id, status, created_at) 
WHERE status IN ('available', 'assigned');

-- Partial index cho active campaigns
CREATE INDEX CONCURRENTLY idx_users_active_tenant
ON users(tenant_id, role_id, last_login)
WHERE status = 'active';

-- Functional index cho search
CREATE INDEX CONCURRENTLY idx_users_profile_search
ON users USING gin(to_tsvector('english', 
    COALESCE(profile_encrypted, '')));

-- Index cho analytics queries
CREATE INDEX CONCURRENTLY idx_transactions_reporting
ON transactions(tenant_id, billing_period, status)
INCLUDE (amount, currency);
```

**MongoDB Indexes:**
```javascript
// Compound indexes cho analytics
db.analytics_events.createIndex({
  "tenant_id": 1,
  "timestamp": -1,
  "event_type": 1
}, {
  name: "idx_analytics_tenant_time_type"
});

// Sparse index cho optional fields
db.user_profiles.createIndex({
  "phone_hash": 1
}, {
  sparse: true,
  unique: true,
  name: "idx_user_phone_sparse"
});

// TTL index cho temporary data
db.otp_codes.createIndex({
  "expires_at": 1
}, {
  expireAfterSeconds: 0,
  name: "idx_otp_ttl"
});
```

### 7.9.2 Query Optimization

**Common Query Patterns:**
```sql
-- Optimized campaign analytics query
EXPLAIN (ANALYZE, BUFFERS) 
SELECT 
    c.campaign_id,
    c.name,
    COUNT(DISTINCT b.barcode_id) as total_codes,
    COUNT(DISTINCT CASE WHEN b.status = 'redeemed' THEN b.barcode_id END) as redeemed_codes,
    ROUND(
        COUNT(DISTINCT CASE WHEN b.status = 'redeemed' THEN b.barcode_id END)::numeric / 
        NULLIF(COUNT(DISTINCT b.barcode_id), 0) * 100, 
        2
    ) as redemption_rate
FROM campaigns_view c  -- View kết hợp MongoDB + PostgreSQL
LEFT JOIN barcode_batches bb ON bb.campaign_id = c.campaign_id
LEFT JOIN barcodes b ON b.batch_id = bb.batch_id
WHERE c.tenant_id = $1 
  AND c.status = 'active'
  AND c.start_date <= CURRENT_DATE
  AND c.end_date >= CURRENT_DATE
GROUP BY c.campaign_id, c.name
ORDER BY redemption_rate DESC
LIMIT 10;

-- Index hints cho performance
/*
Required indexes:
- idx_campaigns_tenant_status_dates ON campaigns_view(tenant_id, status, start_date, end_date)
- idx_barcode_batches_campaign ON barcode_batches(campaign_id)
- idx_barcodes_batch_status ON barcodes(batch_id, status)
*/
```

### 7.9.3 Connection Pooling

**PostgreSQL Connection Pool:**
```python
# connection_pool.py
import psycopg2.pool
from contextlib import contextmanager

class DatabasePool:
    def __init__(self, config):
        self.pool = psycopg2.pool.ThreadedConnectionPool(
            minconn=5,
            maxconn=50,
            host=config['host'],
            database=config['database'],
            user=config['user'],
            password=config['password'],
            # Connection pool settings
            keepalives_idle=30,
            keepalives_interval=10,
            keepalives_count=5
        )
    
    @contextmanager
    def get_connection(self):
        conn = self.pool.getconn()
        try:
            yield conn
        finally:
            self.pool.putconn(conn)
    
    def execute_query(self, query, params=None):
        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(query, params)
                return cursor.fetchall()
```

---

## 7.10 Monitoring và Maintenance

### 7.10.1 Database Health Monitoring

**PostgreSQL Monitoring:**
```sql
-- Query để monitor database health
SELECT 
    schemaname,
    tablename,
    n_tup_ins as inserts,
    n_tup_upd as updates,
    n_tup_del as deletes,
    n_live_tup as live_tuples,
    n_dead_tup as dead_tuples,
    last_vacuum,
    last_autovacuum,
    last_analyze,
    last_autoanalyze
FROM pg_stat_user_tables
WHERE schemaname = 'public'
ORDER BY n_live_tup DESC;

-- Index usage statistics
SELECT 
    schemaname,
    tablename,
    indexname,
    idx_scan as index_scans,
    idx_tup_read as tuples_read,
    idx_tup_fetch as tuples_fetched
FROM pg_stat_user_indexes
WHERE idx_scan < 100  -- Potentially unused indexes
ORDER BY idx_scan;

-- Connection monitoring
SELECT 
    state,
    COUNT(*) as connection_count,
    AVG(EXTRACT(EPOCH FROM NOW() - query_start)) as avg_duration_seconds
FROM pg_stat_activity
WHERE state IS NOT NULL
GROUP BY state;
```

**MongoDB Monitoring:**
```javascript
// MongoDB health checks
db.runCommand({serverStatus: 1});

// Collection statistics
db.campaigns.stats();
db.analytics_events.stats();

// Index usage
db.campaigns.aggregate([
  {$indexStats: {}},
  {$sort: {"accesses.ops": -1}}
]);

// Slow query profiling
db.setProfilingLevel(1, {slowms: 100});
db.system.profile.find().sort({ts: -1}).limit(5);
```

### 7.10.2 Automated Maintenance

**Database Maintenance Script:**
```bash
#!/bin/bash
# db_maintenance.sh

echo "Starting database maintenance at $(date)"

# PostgreSQL maintenance
psql -d product_sampling -c "
    -- Update table statistics
    ANALYZE;
    
    -- Vacuum tables với high update frequency
    VACUUM ANALYZE barcodes;
    VACUUM ANALYZE users;
    VACUUM ANALYZE transactions;
    
    -- Reindex if needed
    REINDEX INDEX CONCURRENTLY idx_barcodes_batch_status;
"

# MongoDB maintenance
mongosh --eval "
    use product_sampling;
    
    // Compact collections
    db.runCommand({compact: 'analytics_events'});
    
    // Update index statistics
    db.campaigns.reIndex();
    
    // Clean up expired TTL documents
    db.otp_codes.deleteMany({expires_at: {\$lt: new Date()}});
"

# Redis maintenance
redis-cli BGREWRITEAOF
redis-cli MEMORY PURGE

echo "Database maintenance completed at $(date)"
```

---

**Nguồn tham khảo chính:**
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - Yêu cầu kỹ thuật database, multi-tenant, PII encryption
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - RBAC schema, audit logs, GDPR compliance  
- Business Requirement Document (01-BRD.md v3.0) - Data retention, backup requirements, performance targets
- Problem Definition (Problem.md v1.0) - Scalability requirements, integration constraints

**Tình trạng**: Part07 hoàn thành ✅  
**Tiếp theo**: Part08 - Thiết kế API và tích hợp  
**Người đánh giá**: Database Architect, Security Engineer, DevOps Engineer

# 📋 SRS Part08 - Thiết kế API và tích hợp (API Design & Integration)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 8.1 Tổng quan thiết kế API

### 8.1.1 Nguyên tắc thiết kế API (từ System_Feature_Tree_Grok.md v4.0)
Dựa trên **yêu cầu kỹ thuật tổng quan**, hệ thống API được thiết kế theo các nguyên tắc:

- **RESTful design**: Tuân thủ chuẩn REST với HTTP methods chuẩn
- **OpenAPI 3.0**: Tài liệu API đầy đủ với schema validation
- **Microservices**: API phân tán theo từng service độc lập
- **Rate limiting**: 1000 requests/giờ per API key (từ System Feature Tree)
- **Multi-tenant**: Phân tách dữ liệu theo tenant_id
- **Security-first**: OAuth 2.0, JWT, HTTPS only

### 8.1.2 Kiến trúc API Gateway (từ 01-BRD.md v3.0)
**Mục tiêu hiệu năng:**
- Xử lý 100,000 requests/phút tại gateway
- Response time <3 giây cho dashboard APIs
- 99.9% uptime SLA cho critical endpoints

**Thành phần API Gateway:**
- **Authentication**: OAuth 2.0/JWT validation
- **Authorization**: RBAC permission checking
- **Rate limiting**: Per-user và per-tenant quotas
- **Logging**: Request/response audit trails
- **Monitoring**: Performance metrics và error tracking

### 8.1.3 API versioning strategy
```
Cấu trúc URL: https://api.productsampling.com/api/v1/{resource}
- v1: Current stable version (MVP)
- v2: Future version với breaking changes
- Backward compatibility: 12 tháng support cho old versions
```

---

## 8.2 Core API Endpoints

### 8.2.1 Authentication APIs

**POST /api/v1/auth/login**
```json
{
  "summary": "Đăng nhập người dùng",
  "description": "Xác thực credentials và trả về JWT tokens",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "username": {"type": "string", "example": "admin@brand.com"},
            "password": {"type": "string", "format": "password"},
            "tenant_id": {"type": "string", "example": "brand_001"}
          },
          "required": ["username", "password"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Đăng nhập thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "access_token": {"type": "string"},
              "refresh_token": {"type": "string"},
              "expires_in": {"type": "integer", "example": 3600},
              "user": {
                "type": "object",
                "properties": {
                  "user_id": {"type": "string"},
                  "role": {"type": "string", "enum": ["admin", "group_admin", "customer_account", "serving_account", "auditor", "user_role"]},
                  "permissions": {"type": "array", "items": {"type": "string"}},
                  "tenant_id": {"type": "string"}
                }
              }
            }
          }
        }
      }
    },
    "401": {
      "description": "Thông tin đăng nhập không hợp lệ",
      "content": {
        "application/json": {
          "schema": {"$ref": "#/components/schemas/ErrorResponse"}
        }
      }
    },
    "429": {
      "description": "Quá nhiều attempts - account bị khóa tạm thời"
    }
  }
}
```

**POST /api/v1/auth/refresh**
```json
{
  "summary": "Làm mới access token",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "refresh_token": {"type": "string"}
          },
          "required": ["refresh_token"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Token mới được tạo thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "access_token": {"type": "string"},
              "expires_in": {"type": "integer"}
            }
          }
        }
      }
    }
  }
}
```

### 8.2.2 Campaign Management APIs (từ System_Feature_Tree_Grok.md 1.1)

**POST /api/v1/campaigns**
```json
{
  "summary": "Tạo chiến dịch mới",
  "description": "Admin/Group Admin/Customer Account tạo campaign với barcode assignment",
  "security": [{"BearerAuth": []}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "name": {"type": "string", "maxLength": 255, "example": "Tên chiến dịch sampling"},
            "description": {"type": "string", "maxLength": 1000},
            "start_date": {"type": "string", "format": "date-time"},
            "end_date": {"type": "string", "format": "date-time"},
            "location_ids": {
              "type": "array",
              "items": {"type": "string"},
              "example": ["HCM_CIRCLE_K_001", "HN_GS25_002"]
            },
            "settings": {
              "type": "object",
              "properties": {
                "max_participants": {"type": "integer", "minimum": 1},
                "budget_limit": {"type": "number", "minimum": 0},
                "cost_per_lead_target": {"type": "number", "maximum": 0.4}
              }
            },
            "targeting": {
              "type": "object",
              "properties": {
                "demographics": {
                  "type": "object",
                  "properties": {
                    "age_min": {"type": "integer", "minimum": 13},
                    "age_max": {"type": "integer", "maximum": 100},
                    "gender": {"type": "string", "enum": ["male", "female", "all"]}
                  }
                }
              }
            },
            "utm_tracking": {
              "type": "object",
              "properties": {
                "utm_source": {"type": "string"},
                "utm_medium": {"type": "string"},
                "utm_campaign": {"type": "string"},
                "utm_term": {"type": "string"},
                "utm_content": {"type": "string"}
              }
            }
          },
          "required": ["name", "start_date", "end_date", "location_ids"]
        }
      }
    }
  },
  "responses": {
    "201": {
      "description": "Chiến dịch được tạo thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "campaign_id": {"type": "string", "example": "CAMP_2025_001"},
              "name": {"type": "string"},
              "status": {"type": "string", "enum": ["draft", "active", "paused", "completed"]},
              "qr_codes": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "location_id": {"type": "string"},
                    "qr_url": {"type": "string", "format": "uri"},
                    "short_link": {"type": "string", "format": "uri"}
                  }
                }
              },
              "created_at": {"type": "string", "format": "date-time"}
            }
          }
        }
      }
    },
    "400": {"description": "Dữ liệu đầu vào không hợp lệ"},
    "403": {"description": "Không có quyền tạo campaign trong scope này"},
    "422": {"description": "Business logic validation failed"}
  }
}
```

**GET /api/v1/campaigns**
```json
{
  "summary": "Danh sách campaigns",
  "description": "Lấy campaigns theo phân quyền user",
  "security": [{"BearerAuth": []}],
  "parameters": [
    {
      "name": "status",
      "in": "query",
      "schema": {
        "type": "string",
        "enum": ["draft", "active", "paused", "completed"]
      }
    },
    {
      "name": "start_date",
      "in": "query",
      "schema": {"type": "string", "format": "date"}
    },
    {
      "name": "end_date", 
      "in": "query",
      "schema": {"type": "string", "format": "date"}
    },
    {
      "name": "page",
      "in": "query",
      "schema": {"type": "integer", "minimum": 1, "default": 1}
    },
    {
      "name": "limit",
      "in": "query", 
      "schema": {"type": "integer", "minimum": 1, "maximum": 100, "default": 20}
    }
  ],
  "responses": {
    "200": {
      "description": "Danh sách campaigns",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "campaigns": {
                "type": "array",
                "items": {"$ref": "#/components/schemas/Campaign"}
              },
              "pagination": {
                "type": "object",
                "properties": {
                  "page": {"type": "integer"},
                  "limit": {"type": "integer"},
                  "total": {"type": "integer"},
                  "total_pages": {"type": "integer"}
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### 8.2.3 Barcode Management APIs (từ System_Feature_Tree_Grok.md 1.2)

**POST /api/v1/barcodes/import**
```json
{
  "summary": "Import barcode từ CSV",
  "description": "Admin/Group Admin/Customer Account import barcode pool",
  "security": [{"BearerAuth": []}],
  "requestBody": {
    "required": true,
    "content": {
      "multipart/form-data": {
        "schema": {
          "type": "object",
          "properties": {
            "file": {
              "type": "string",
              "format": "binary",
              "description": "CSV file với columns: barcode, product_name, expiry_date, value, batch_code"
            },
            "campaign_id": {"type": "string"},
            "batch_name": {"type": "string"},
            "validate_only": {"type": "boolean", "default": false}
          },
          "required": ["file", "batch_name"]
        }
      }
    }
  },
  "responses": {
    "202": {
      "description": "File đang được xử lý",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "job_id": {"type": "string", "example": "IMPORT_JOB_001"},
              "status": {"type": "string", "enum": ["processing", "completed", "failed"]},
              "preview": {
                "type": "object",
                "properties": {
                  "total_rows": {"type": "integer"},
                  "valid_rows": {"type": "integer"},
                  "invalid_rows": {"type": "integer"},
                  "sample_data": {"type": "array"}
                }
              },
              "estimated_completion": {"type": "string", "format": "date-time"}
            }
          }
        }
      }
    },
    "400": {"description": "File format không hợp lệ hoặc validation errors"}
  }
}
```

**GET /api/v1/barcodes/import/{job_id}/status**
```json
{
  "summary": "Kiểm tra trạng thái import job",
  "parameters": [
    {
      "name": "job_id",
      "in": "path",
      "required": true,
      "schema": {"type": "string"}
    }
  ],
  "responses": {
    "200": {
      "description": "Trạng thái import job",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "job_id": {"type": "string"},
              "status": {"type": "string", "enum": ["processing", "completed", "failed"]},
              "progress": {"type": "number", "minimum": 0, "maximum": 100},
              "results": {
                "type": "object",
                "properties": {
                  "total_processed": {"type": "integer"},
                  "successful_imports": {"type": "integer"},
                  "failed_imports": {"type": "integer"},
                  "batch_id": {"type": "string"},
                  "errors": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "row": {"type": "integer"},
                        "error": {"type": "string"},
                        "data": {"type": "object"}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### 8.2.4 OTP Verification APIs (từ System_Feature_Tree_Grok.md 1.4)

**POST /api/v1/otp/send**
```json
{
  "summary": "Gửi OTP verification code",
  "description": "Gửi 6-digit OTP qua SMS hoặc Email với fraud prevention",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "phone": {"type": "string", "pattern": "^\\+[1-9]\\d{1,14}$", "example": "+84901234567"},
            "email": {"type": "string", "format": "email"},
            "method": {"type": "string", "enum": ["sms", "email"], "default": "sms"},
            "campaign_id": {"type": "string"},
            "recaptcha_token": {"type": "string", "description": "reCAPTCHA v3 token"}
          },
          "anyOf": [
            {"required": ["phone"]},
            {"required": ["email"]}
          ],
          "required": ["campaign_id", "recaptcha_token"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "OTP đã được gửi thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "session_id": {"type": "string"},
              "expires_in": {"type": "integer", "example": 300},
              "attempts_remaining": {"type": "integer", "example": 3},
              "method_used": {"type": "string", "enum": ["sms", "email"]},
              "masked_destination": {"type": "string", "example": "+84***123567"}
            }
          }
        }
      }
    },
    "429": {
      "description": "Rate limit exceeded - quá nhiều OTP requests",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "error": {"type": "string", "example": "rate_limit_exceeded"},
              "retry_after": {"type": "integer", "description": "Seconds until next attempt allowed"},
              "daily_limit": {"type": "integer", "example": 10}
            }
          }
        }
      }
    },
    "400": {"description": "Invalid input hoặc fraud detection triggered"}
  }
}
```

**POST /api/v1/otp/verify**
```json
{
  "summary": "Xác thực OTP code",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "session_id": {"type": "string"},
            "otp_code": {"type": "string", "pattern": "^[0-9]{6}$"},
            "phone": {"type": "string"},
            "email": {"type": "string", "format": "email"},
            "campaign_id": {"type": "string"}
          },
          "required": ["session_id", "otp_code", "campaign_id"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "OTP xác thực thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "verified": {"type": "boolean", "example": true},
              "user_token": {"type": "string", "description": "Token để claim barcode"},
              "expires_in": {"type": "integer", "example": 1800},
              "next_step": {"type": "string", "example": "barcode_assignment"}
            }
          }
        }
      }
    },
    "400": {
      "description": "OTP không hợp lệ hoặc đã hết hạn",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "error": {"type": "string", "example": "invalid_otp"},
              "attempts_remaining": {"type": "integer"},
              "can_resend": {"type": "boolean"}
            }
          }
        }
      }
    }
  }
}
```

### 8.2.5 Barcode Assignment APIs (từ System_Feature_Tree_Grok.md 1.6)

**POST /api/v1/barcodes/assign**
```json
{
  "summary": "Gán barcode cho user đã verified",
  "description": "Tự động gán barcode từ pool available sau OTP verification",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "user_token": {"type": "string", "description": "Token từ OTP verification"},
            "campaign_id": {"type": "string"},
            "user_preferences": {
              "type": "object",
              "properties": {
                "product_categories": {"type": "array", "items": {"type": "string"}},
                "dietary_restrictions": {"type": "array", "items": {"type": "string"}},
                "location_preference": {"type": "string"}
              }
            },
            "delivery_method": {"type": "string", "enum": ["sms", "email", "wallet"], "default": "sms"}
          },
          "required": ["user_token", "campaign_id"]
        }
      }
    }
  },
  "responses": {
    "201": {
      "description": "Barcode assigned thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "barcode_id": {"type": "string"},
              "barcode_value": {"type": "string"},
              "product_name": {"type": "string"},
              "expires_at": {"type": "string", "format": "date-time"},
              "qr_code_url": {"type": "string", "format": "uri"},
              "wallet_pass": {
                "type": "object",
                "properties": {
                  "apple_wallet_url": {"type": "string", "format": "uri"},
                  "google_pay_url": {"type": "string", "format": "uri"}
                }
              },
              "redemption_locations": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "location_id": {"type": "string"},
                    "name": {"type": "string"},
                    "address": {"type": "string"},
                    "distance_km": {"type": "number"}
                  }
                }
              },
              "user_portal_url": {"type": "string", "format": "uri"}
            }
          }
        }
      }
    },
    "400": {"description": "User token invalid hoặc campaign không active"},
    "409": {"description": "User đã nhận barcode cho campaign này"},
    "503": {"description": "Không còn barcode available trong pool"}
  }
}
```

### 8.2.6 POS Redemption APIs (từ System_Feature_Tree_Grok.md 1.5)

**POST /api/v1/pos/scan**
```json
{
  "summary": "Scan barcode tại POS",
  "description": "Serving Account scan barcode để validate trước khi redeem",
  "security": [{"BearerAuth": ["pos_access"]}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "barcode_value": {"type": "string"},
            "location_id": {"type": "string"},
            "staff_id": {"type": "string"},
            "scan_timestamp": {"type": "string", "format": "date-time"}
          },
          "required": ["barcode_value", "location_id", "staff_id"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Barcode hợp lệ và ready để redeem",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "valid": {"type": "boolean", "example": true},
              "barcode_info": {
                "type": "object",
                "properties": {
                  "barcode_id": {"type": "string"},
                  "product_name": {"type": "string"},
                  "campaign_name": {"type": "string"},
                  "expires_at": {"type": "string", "format": "date-time"},
                  "assigned_user": {"type": "string", "description": "Masked user info"}
                }
              },
              "redemption_token": {"type": "string", "description": "Token để complete redemption"},
              "expires_in": {"type": "integer", "example": 300}
            }
          }
        }
      }
    },
    "400": {"description": "Barcode không hợp lệ hoặc đã được sử dụng"},
    "403": {"description": "Location không được phép redeem barcode này"},
    "410": {"description": "Barcode đã hết hạn"}
  }
}
```

**POST /api/v1/pos/redeem**
```json
{
  "summary": "Hoàn tất redemption process",
  "security": [{"BearerAuth": ["pos_access"]}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "redemption_token": {"type": "string"},
            "location_id": {"type": "string"},
            "staff_id": {"type": "string"},
            "notes": {"type": "string", "maxLength": 500}
          },
          "required": ["redemption_token", "location_id", "staff_id"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Redemption thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "redeemed": {"type": "boolean", "example": true},
              "redemption_id": {"type": "string"},
              "barcode_id": {"type": "string"},
              "redeemed_at": {"type": "string", "format": "date-time"},
              "receipt_data": {
                "type": "object",
                "properties": {
                  "product_name": {"type": "string"},
                  "location_name": {"type": "string"},
                  "staff_name": {"type": "string"},
                  "campaign_name": {"type": "string"}
                }
              }
            }
          }
        }
      }
    },
    "400": {"description": "Redemption token invalid hoặc expired"},
    "409": {"description": "Barcode đã được redeem"}
  }
}
```

### 8.2.7 Analytics APIs (từ System_Feature_Tree_Grok.md 1.6)

**GET /api/v1/analytics/funnel**
```json
{
  "summary": "Funnel conversion metrics",
  "description": "Realtime funnel tracking: Scan → Submit → Verify → Issue → Redeem",
  "security": [{"BearerAuth": []}],
  "parameters": [
    {
      "name": "campaign_id",
      "in": "query",
      "schema": {"type": "string"}
    },
    {
      "name": "start_date",
      "in": "query",
      "schema": {"type": "string", "format": "date"}
    },
    {
      "name": "end_date",
      "in": "query", 
      "schema": {"type": "string", "format": "date"}
    },
    {
      "name": "group_by",
      "in": "query",
      "schema": {"type": "string", "enum": ["day", "hour", "location", "ads_format"]}
    }
  ],
  "responses": {
    "200": {
      "description": "Funnel metrics data",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "funnel_data": {
                "type": "object",
                "properties": {
                  "scans": {"type": "integer"},
                  "form_submissions": {"type": "integer"},
                  "otp_verifications": {"type": "integer"},
                  "barcode_assignments": {"type": "integer"},
                  "redemptions": {"type": "integer"}
                }
              },
              "conversion_rates": {
                "type": "object",
                "properties": {
                  "scan_to_form": {"type": "number", "example": 0.85},
                  "form_to_verify": {"type": "number", "example": 0.92},
                  "verify_to_assign": {"type": "number", "example": 0.98},
                  "assign_to_redeem": {"type": "number", "example": 0.73},
                  "overall_conversion": {"type": "number", "example": 0.52}
                }
              },
              "trends": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "date": {"type": "string", "format": "date"},
                    "scans": {"type": "integer"},
                    "conversions": {"type": "integer"},
                    "rate": {"type": "number"}
                  }
                }
              },
              "cost_metrics": {
                "type": "object",
                "properties": {
                  "cost_per_scan": {"type": "number"},
                  "cost_per_verified_lead": {"type": "number"},
                  "cost_per_redemption": {"type": "number"},
                  "total_spend": {"type": "number"},
                  "roi_estimate": {"type": "number"}
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**POST /api/v1/analytics/export**
```json
{
  "summary": "Export analytics data",
  "description": "Xuất dữ liệu CSV/Excel cho analysis nâng cao",
  "security": [{"BearerAuth": []}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "export_type": {"type": "string", "enum": ["users", "events", "funnel", "campaigns"]},
            "format": {"type": "string", "enum": ["csv", "excel", "json"], "default": "csv"},
            "filters": {
              "type": "object",
              "properties": {
                "campaign_ids": {"type": "array", "items": {"type": "string"}},
                "start_date": {"type": "string", "format": "date"},
                "end_date": {"type": "string", "format": "date"},
                "status": {"type": "string"},
                "location_ids": {"type": "array", "items": {"type": "string"}}
              }
            },
            "columns": {
              "type": "array",
              "items": {"type": "string"},
              "description": "Columns to include in export"
            },
            "include_pii": {"type": "boolean", "default": false, "description": "Requires admin role"}
          },
          "required": ["export_type"]
        }
      }
    }
  },
  "responses": {
    "202": {
      "description": "Export job được tạo",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "job_id": {"type": "string"},
              "status": {"type": "string", "enum": ["queued", "processing", "completed", "failed"]},
              "estimated_completion": {"type": "string", "format": "date-time"},
              "estimated_size": {"type": "string", "example": "2.5MB"}
            }
          }
        }
      }
    }
  }
}
```

---

## 8.3 User Portal APIs (từ System_Feature_Tree_Grok.md 1.9)

### 8.3.1 User Portal Authentication

**POST /api/v1/portal/auth**
```json
{
  "summary": "Đăng nhập User Portal bằng phone/email",
  "description": "Passwordless authentication cho end users",
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "identifier": {"type": "string", "description": "Phone number or email"},
            "otp_code": {"type": "string", "pattern": "^[0-9]{6}$"},
            "session_id": {"type": "string", "description": "From OTP request"}
          },
          "required": ["identifier", "otp_code", "session_id"]
        }
      }
    }
  },
  "responses": {
    "200": {
      "description": "Login thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "access_token": {"type": "string"},
              "user_id": {"type": "string"},
              "profile": {
                "type": "object",
                "properties": {
                  "first_name": {"type": "string"},
                  "total_campaigns": {"type": "integer"},
                  "total_redemptions": {"type": "integer"},
                  "engagement_score": {"type": "integer"}
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### 8.3.2 User Dashboard APIs

**GET /api/v1/portal/dashboard**
```json
{
  "summary": "Dashboard data cho User Portal",
  "security": [{"PortalAuth": []}],
  "responses": {
    "200": {
      "description": "User dashboard data",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "user_stats": {
                "type": "object",
                "properties": {
                  "total_barcodes_received": {"type": "integer"},
                  "total_redeemed": {"type": "integer"},
                  "pending_redemption": {"type": "integer"},
                  "expired_unused": {"type": "integer"},
                  "redemption_rate": {"type": "number"}
                }
              },
              "recent_activity": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "activity_type": {"type": "string", "enum": ["barcode_received", "redeemed", "expired"]},
                    "product_name": {"type": "string"},
                    "campaign_name": {"type": "string"},
                    "date": {"type": "string", "format": "date-time"},
                    "location_name": {"type": "string"}
                  }
                }
              },
              "available_campaigns": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "campaign_id": {"type": "string"},
                    "name": {"type": "string"},
                    "description": {"type": "string"},
                    "product_image": {"type": "string", "format": "uri"},
                    "ends_at": {"type": "string", "format": "date-time"},
                    "locations_nearby": {"type": "integer"}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**GET /api/v1/portal/barcodes**
```json
{
  "summary": "Danh sách barcodes của user",
  "security": [{"PortalAuth": []}],
  "parameters": [
    {
      "name": "status",
      "in": "query",
      "schema": {"type": "string", "enum": ["available", "redeemed", "expired"]}
    },
    {
      "name": "page",
      "in": "query",
      "schema": {"type": "integer", "default": 1}
    }
  ],
  "responses": {
    "200": {
      "description": "User barcodes list",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "barcodes": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "barcode_id": {"type": "string"},
                    "barcode_value": {"type": "string"},
                    "product_name": {"type": "string"},
                    "campaign_name": {"type": "string"},
                    "status": {"type": "string"},
                    "assigned_at": {"type": "string", "format": "date-time"},
                    "expires_at": {"type": "string", "format": "date-time"},
                    "redeemed_at": {"type": "string", "format": "date-time"},
                    "redeemed_location": {"type": "string"},
                    "qr_code_url": {"type": "string", "format": "uri"},
                    "wallet_passes": {
                      "type": "object",
                      "properties": {
                        "apple_wallet": {"type": "string", "format": "uri"},
                        "google_pay": {"type": "string", "format": "uri"}
                      }
                    }
                  }
                }
              },
              "pagination": {"$ref": "#/components/schemas/Pagination"}
            }
          }
        }
      }
    }
  }
}
```

### 8.3.3 Support và Feedback APIs

**POST /api/v1/portal/tickets**
```json
{
  "summary": "Tạo support ticket",
  "security": [{"PortalAuth": []}],
  "requestBody": {
    "required": true,
    "content": {
      "multipart/form-data": {
        "schema": {
          "type": "object",
          "properties": {
            "subject": {"type": "string", "maxLength": 200},
            "description": {"type": "string", "maxLength": 2000},
            "category": {"type": "string", "enum": ["barcode_issue", "redemption_problem", "account_question", "other"]},
            "barcode_id": {"type": "string", "description": "Optional - if related to specific barcode"},
            "priority": {"type": "string", "enum": ["low", "medium", "high"], "default": "medium"},
            "attachments": {
              "type": "array",
              "items": {"type": "string", "format": "binary"},
              "maxItems": 3
            }
          },
          "required": ["subject", "description", "category"]
        }
      }
    }
  },
  "responses": {
    "201": {
      "description": "Ticket created thành công",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "ticket_id": {"type": "string"},
              "status": {"type": "string", "enum": ["open", "in_progress", "resolved", "closed"]},
              "created_at": {"type": "string", "format": "date-time"},
              "estimated_response_time": {"type": "string", "example": "24 hours"}
            }
          }
        }
      }
    }
  }
}
```

---

## 8.4 Third-Party Integration APIs

### 8.4.1 CRM Integration (từ System_Feature_Tree_Grok.md 1.7)

**HubSpot Integration Webhook:**
```json
{
  "webhook_url": "/api/v1/integrations/hubspot/webhook",
  "method": "POST",
  "description": "Nhận webhook từ HubSpot về contact updates",
  "headers": {
    "X-HubSpot-Signature": "sha256=signature",
    "Content-Type": "application/json"
  },
  "payload_example": {
    "subscriptionType": "contact.propertyChange",
    "eventId": 123456789,
    "portalId": 12345,
    "appId": 54321,
    "occurredAt": 1625097600000,
    "subscriptionId": 987654,
    "attemptNumber": 0,
    "objectId": 12345,
    "changeSource": "CRM_UI",
    "propertyName": "email",
    "propertyValue": "new-email@example.com"
  },
  "response": {
    "status_code": 200,
    "body": {
      "received": true,
      "processed_at": "2025-10-17T14:30:00Z"
    }
  }
}
```

**Outbound CRM Sync API:**
```json
{
  "endpoint": "POST /api/v1/integrations/crm/sync",
  "summary": "Đồng bộ user data với CRM system",
  "security": [{"BearerAuth": ["crm_integration"]}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "crm_provider": {"type": "string", "enum": ["hubspot", "salesforce", "pipedrive"]},
            "sync_type": {"type": "string", "enum": ["full", "incremental", "specific_users"]},
            "user_ids": {"type": "array", "items": {"type": "string"}},
            "data_mapping": {
              "type": "object",
              "properties": {
                "email_field": {"type": "string", "default": "email"},
                "phone_field": {"type": "string", "default": "phone"},
                "custom_fields": {"type": "object"}
              }
            },
            "consent_only": {"type": "boolean", "default": true}
          },
          "required": ["crm_provider", "sync_type"]
        }
      }
    }
  },
  "responses": {
    "202": {
      "description": "Sync job được tạo",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "sync_job_id": {"type": "string"},
              "status": {"type": "string", "enum": ["queued", "processing", "completed", "failed"]},
              "estimated_records": {"type": "integer"},
              "started_at": {"type": "string", "format": "date-time"}
            }
          }
        }
      }
    }
  }
}
```

### 8.4.2 SMS/Email Provider Integration

**Twilio SMS Integration:**
```python
# Internal service - không expose qua public API
class TwilioService:
    def send_otp_sms(self, phone: str, otp_code: str, template: str):
        """
        Gửi OTP SMS qua Twilio
        - Rate limiting: 10 SMS/hour per phone
        - Template: "Mã xác thực của bạn: {otp_code}. Có hiệu lực trong 5 phút."
        - Fallback: MessageBird nếu Twilio failed
        """
        pass

    def send_notification_sms(self, phone: str, message: str):
        """
        Gửi notification SMS
        - Redemption reminders
        - New campaign alerts
        - Expiry warnings
        """
        pass
```

**SendGrid Email Integration:**
```python
class EmailService:
    def send_otp_email(self, email: str, otp_code: str, template_id: str):
        """
        Gửi OTP email qua SendGrid
        - Template-based emails
        - Tracking: open rates, click rates
        - Fallback: AWS SES
        """
        pass

    def send_barcode_email(self, email: str, barcode_data: dict):
        """
        Gửi barcode qua email với PDF attachment
        - PDF generation với QR code
        - Apple Wallet pass attachment
        - Redemption instructions
        """
        pass
```

### 8.4.3 Payment Integration (Future)

**Stripe Integration cho Subscription:**
```json
{
  "endpoint": "POST /api/v1/billing/subscribe",
  "summary": "Tạo subscription cho brand",
  "security": [{"BearerAuth": ["billing_admin"]}],
  "requestBody": {
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          "type": "object",
          "properties": {
            "tenant_id": {"type": "string"},
            "plan_id": {"type": "string", "enum": ["starter", "professional", "enterprise"]},
            "billing_period": {"type": "string", "enum": ["monthly", "yearly"]},
            "payment_method_id": {"type": "string"},
            "tax_id": {"type": "string"},
            "billing_address": {
              "type": "object",
              "properties": {
                "line1": {"type": "string"},
                "city": {"type": "string"},
                "country": {"type": "string"},
                "postal_code": {"type": "string"}
              }
            }
          },
          "required": ["tenant_id", "plan_id", "payment_method_id"]
        }
      }
    }
  },
  "responses": {
    "201": {
      "description": "Subscription created",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "subscription_id": {"type": "string"},
              "status": {"type": "string", "enum": ["active", "trialing", "past_due"]},
              "current_period_start": {"type": "string", "format": "date-time"},
              "current_period_end": {"type": "string", "format": "date-time"},
              "next_billing_date": {"type": "string", "format": "date-time"},
              "amount": {"type": "number"},
              "currency": {"type": "string", "example": "VND"}
            }
          }
        }
      }
    }
  }
}
```

---

## 8.5 API Security và Error Handling

### 8.5.1 Authentication & Authorization

**JWT Token Structure:**
```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "key_id_2025"
  },
  "payload": {
    "sub": "USER_2025_001",
    "iss": "https://api.productsampling.com",
    "aud": "product-sampling-platform",
    "exp": 1729171200,
    "iat": 1729167600,
    "role": "customer_account",
    "tenant_id": "brand_001",
    "group_id": "group_001",
    "permissions": [
      "campaign.create",
      "campaign.read:own",
      "barcode.import:own",
      "analytics.read:own"
    ],
    "scope": "api_access"
  }
}
```

**Permission Middleware:**
```python
def require_permission(permission: str, scope: str = None):
    """
    Decorator để check permissions động
    Example: @require_permission("campaign.create", "own")
    """
    def decorator(func):
        def wrapper(*args, **kwargs):
            # Extract JWT token
            # Validate permissions array
            # Check scope restrictions
            # Allow/deny request
            pass
        return wrapper
    return decorator
```

### 8.5.2 Rate Limiting Strategy (từ System_Feature_Tree_Grok.md yêu cầu kỹ thuật)

**Rate Limit Headers:**
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1729171200
X-RateLimit-Window: 3600
X-RateLimit-Scope: tenant
```

**Rate Limiting Rules:**
```yaml
rate_limits:
  default:
    requests_per_hour: 1000
    burst_limit: 100
  
  endpoints:
    "/api/v1/otp/send":
      requests_per_hour: 10
      per_identifier: phone_number
    
    "/api/v1/barcodes/import":
      requests_per_hour: 5
      file_size_limit: "100MB"
    
    "/api/v1/analytics/export":
      requests_per_hour: 3
      concurrent_limit: 1
  
  by_role:
    admin: 5000
    customer_account: 1000
    serving_account: 500
    user_role: 100
```

### 8.5.3 Error Response Standards

**Standard Error Schema:**
```json
{
  "components": {
    "schemas": {
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "properties": {
              "code": {"type": "string", "example": "VALIDATION_FAILED"},
              "message": {"type": "string", "example": "Dữ liệu đầu vào không hợp lệ"},
              "details": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "field": {"type": "string"},
                    "error_code": {"type": "string"},
                    "message": {"type": "string"}
                  }
                }
              },
              "request_id": {"type": "string", "example": "REQ_2025_001234"},
              "timestamp": {"type": "string", "format": "date-time"}
            }
          }
        }
      }
    }
  }
}
```

**HTTP Status Codes Usage:**
```yaml
status_codes:
  200: "OK - Request thành công"
  201: "Created - Resource được tạo thành công"
  202: "Accepted - Request được accept cho background processing"
  400: "Bad Request - Invalid input data"
  401: "Unauthorized - Authentication required"
  403: "Forbidden - Insufficient permissions"
  404: "Not Found - Resource không tồn tại"
  409: "Conflict - Resource conflict (duplicate, constraint violation)"
  422: "Unprocessable Entity - Business logic validation failed"
  429: "Too Many Requests - Rate limit exceeded"
  500: "Internal Server Error - Server error"
  503: "Service Unavailable - Temporary service unavailable"
```

### 8.5.4 Request/Response Logging

**Audit Log Structure:**
```json
{
  "request_id": "REQ_2025_001234",
  "timestamp": "2025-10-17T14:30:00Z",
  "method": "POST",
  "endpoint": "/api/v1/campaigns",
  "user_id": "USER_2025_001",
  "tenant_id": "brand_001",
  "ip_address_hash": "sha256_hash",
  "user_agent": "Mozilla/5.0...",
  "request_size": 2048,
  "response_status": 201,
  "response_size": 512,
  "processing_time_ms": 150,
  "errors": [],
  "sensitive_data_accessed": false,
  "compliance_flags": ["gdpr_relevant"]
}
```

---

## 8.6 API Documentation và Testing

### 8.6.1 OpenAPI 3.0 Specification

**API Documentation Structure:**
```yaml
openapi: 3.0.3
info:
  title: Product Sampling Platform API
  description: |
    API cho hệ thống Product Sampling Platform
    
    ## Authentication
    Sử dụng Bearer Token (JWT) trong header:
    ```
    Authorization: Bearer <jwt_token>
    ```
    
    ## Rate Limiting
    - Default: 1000 requests/hour
    - OTP endpoints: 10 requests/hour
    - Export endpoints: 3 requests/hour
    
    ## Error Handling
    Tất cả errors trả về format chuẩn với error code và message.
    
  version: 1.0.0
  contact:
    name: API Support
    email: api-support@productsampling.com
  license:
    name: Proprietary
    
servers:
  - url: https://api.productsampling.com/api/v1
    description: Production server
  - url: https://staging-api.productsampling.com/api/v1  
    description: Staging server

security:
  - BearerAuth: []

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    
  schemas:
    # Standard schemas được define ở đây
    Campaign: 
      type: object
      # ... schema definition
      
    Barcode:
      type: object
      # ... schema definition
```

### 8.6.2 API Testing Strategy

**Unit Tests cho API Endpoints:**
```python
import pytest
from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

class TestCampaignAPI:
    def setup_method(self):
        """Setup test data trước mỗi test"""
        self.admin_token = self.get_admin_token()
        self.test_campaign_data = {
            "name": "Test Campaign",
            "start_date": "2025-11-01T00:00:00Z",
            "end_date": "2025-11-30T23:59:59Z",
            "location_ids": ["TEST_LOC_001"]
        }
    
    def test_create_campaign_success(self):
        """Test tạo campaign thành công"""
        response = client.post(
            "/api/v1/campaigns",
            json=self.test_campaign_data,
            headers={"Authorization": f"Bearer {self.admin_token}"}
        )
        assert response.status_code == 201
        data = response.json()
        assert "campaign_id" in data
        assert data["name"] == self.test_campaign_data["name"]
    
    def test_create_campaign_invalid_dates(self):
        """Test validation lỗi khi end_date < start_date"""
        invalid_data = self.test_campaign_data.copy()
        invalid_data["end_date"] = "2025-10-01T00:00:00Z"  # Before start_date
        
        response = client.post(
            "/api/v1/campaigns",
            json=invalid_data,
            headers={"Authorization": f"Bearer {self.admin_token}"}
        )
        assert response.status_code == 400
        assert "end_date must be after start_date" in response.json()["error"]["message"]
    
    def test_get_campaigns_with_pagination(self):
        """Test pagination cho campaigns list"""
        response = client.get(
            "/api/v1/campaigns?page=1&limit=10",
            headers={"Authorization": f"Bearer {self.admin_token}"}
        )
        assert response.status_code == 200
        data = response.json()
        assert "campaigns" in data
        assert "pagination" in data
        assert data["pagination"]["page"] == 1
        assert data["pagination"]["limit"] == 10
```

**Integration Tests:**
```python
class TestCampaignWorkflow:
    """Test end-to-end workflow cho campaign"""
    
    def test_complete_campaign_workflow(self):
        """Test full workflow: Create → Import Barcodes → QR Scan → OTP → Assign → Redeem"""
        
        # Step 1: Tạo campaign
        campaign_response = client.post("/api/v1/campaigns", json=campaign_data)
        campaign_id = campaign_response.json()["campaign_id"]
        
        # Step 2: Import barcodes
        barcode_file = self.create_test_barcode_csv()
        import_response = client.post(
            "/api/v1/barcodes/import",
            files={"file": barcode_file},
            data={"campaign_id": campaign_id}
        )
        assert import_response.status_code == 202
        
        # Step 3: Simulate user scan QR
        # Step 4: OTP verification
        # Step 5: Barcode assignment
        # Step 6: POS redemption
        # Assert final state
```

### 8.6.3 Performance Testing

**Load Testing Script:**
```python
import asyncio
import aiohttp
import time
from concurrent.futures import ThreadPoolExecutor

class APILoadTester:
    def __init__(self, base_url: str, concurrent_users: int = 100):
        self.base_url = base_url
        self.concurrent_users = concurrent_users
        self.results = []
    
    async def test_otp_send_endpoint(self):
        """Load test cho OTP send - critical endpoint"""
        async with aiohttp.ClientSession() as session:
            tasks = []
            for i in range(self.concurrent_users):
                task = self.send_otp_request(session, f"+8490123{i:04d}")
                tasks.append(task)
            
            start_time = time.time()
            responses = await asyncio.gather(*tasks, return_exceptions=True)
            end_time = time.time()
            
            # Analyze results
            success_count = sum(1 for r in responses if isinstance(r, dict) and r.get("status") == 200)
            total_time = end_time - start_time
            
            print(f"OTP Load Test Results:")
            print(f"Concurrent Users: {self.concurrent_users}")
            print(f"Success Rate: {success_count}/{len(responses)} ({success_count/len(responses)*100:.1f}%)")
            print(f"Total Time: {total_time:.2f}s")
            print(f"Requests/second: {len(responses)/total_time:.1f}")
    
    async def send_otp_request(self, session, phone):
        try:
            async with session.post(
                f"{self.base_url}/api/v1/otp/send",
                json={
                    "phone": phone,
                    "campaign_id": "LOAD_TEST_CAMPAIGN",
                    "recaptcha_token": "test_token"
                }
            ) as response:
                return {"status": response.status, "response_time": response.headers.get("X-Response-Time")}
        except Exception as e:
            return {"error": str(e)}

# Chạy load test
if __name__ == "__main__":
    tester = APILoadTester("https://staging-api.productsampling.com", concurrent_users=1000)
    asyncio.run(tester.test_otp_send_endpoint())
```

---

**Nguồn tham khảo chính:**
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - API requirements, rate limiting, technical specifications
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - RBAC permissions, security requirements
- Business Requirement Document (01-BRD.md v3.0) - Performance targets, SLA requirements
- Problem Definition (Problem.md v1.0) - Integration requirements, third-party services

**Tình trạng**: Part08 hoàn thành ✅  
**Tiếp theo**: Part09 - Use Case chi tiết  
**Người đánh giá**: API Architect, Security Engineer, Integration Specialist


# 📋 SRS Part09 - Use Case chi tiết (Detailed Use Cases)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 9.1 Tổng quan Use Cases

### 9.1.1 Phân loại Use Cases (từ System_Feature_Tree_Grok.md v4.0)
Dựa trên **flow vận hành** và **user stories** trong cây chức năng, hệ thống có 8 use cases chính:

| UC ID | Tên Use Case | Actor chính | Mức độ ưu tiên | Nguồn tham chiếu |
|-------|--------------|-------------|----------------|------------------|
| UC-001 | Tạo và quản lý chiến dịch sampling | Admin/Brand Manager | Cao | Feature Tree 1.1 |
| UC-002 | Quản lý barcode và inventory | Admin/Brand Manager | Cao | Feature Tree 1.2 |
| UC-003 | Khách hàng quét QR và điền form | End User | Cao | Feature Tree 1.3 |
| UC-004 | Xác thực OTP và chống gian lận | End User/System | Cao | Feature Tree 1.4 |
| UC-005 | Cấp phát và quản lý voucher | System/End User | Cao | Feature Tree 1.5 |
| UC-006 | Đổi quà tại điểm bán | Serving Staff/End User | Cao | Feature Tree 1.5 |
| UC-007 | Phân tích và báo cáo chiến dịch | Brand Manager/Admin | Trung bình | Feature Tree 1.6 |
| UC-008 | Quản lý User Portal và hỗ trợ | End User/Admin | Trung bình | Feature Tree 1.9 |

### 9.1.2 Actors và vai trò (từ Access_Control_Tree_Grok.md v2.2)

**Primary Actors:**
- **Admin**: Toàn quyền hệ thống, thiết lập global configs
- **Group Admin**: Quản lý campaigns trong group scope
- **Customer Account (Brand Manager)**: Quản lý campaigns riêng
- **Serving Account**: Staff tại retail nodes, xử lý redemption
- **End User**: Khách hàng cuối sử dụng User Portal
- **Auditor**: Giám sát compliance và audit logs

**Secondary Actors:**
- **SMS/Email Providers**: Twilio, SendGrid
- **CRM Systems**: HubSpot, Salesforce
- **POS Systems**: Circle K, GS25, Mini Stop
- **Analytics Systems**: GA4, Meta Pixel

---

## 9.2 UC-001: Tạo và quản lý chiến dịch sampling

### 9.2.1 Mô tả Use Case
**Mục tiêu**: Admin/Brand Manager tạo và quản lý chiến dịch phân phối mẫu sản phẩm với targeting địa lý, ngân sách và tracking UTM.

**Phạm vi**: Campaign lifecycle từ tạo đến hoàn thành
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Brands, Marketing teams

### 9.2.2 Preconditions
- Actor đã đăng nhập với role Admin, Group Admin hoặc Customer Account
- Có ít nhất 1 location được setup trong hệ thống
- Có barcode pool sẵn sàng để gán (optional cho draft)

### 9.2.3 Main Success Scenario
1. **Actor truy cập Campaign Management**
   - Đăng nhập vào dashboard
   - Navigate đến Campaign Management module
   - System hiển thị danh sách campaigns theo phân quyền

2. **Tạo campaign mới**
   - Click "Tạo Campaign Mới"
   - Điền thông tin cơ bản:
     * Tên campaign (bắt buộc, max 255 chars)
     * Mô tả chi tiết (optional, max 1000 chars)
     * Ngày bắt đầu/kết thúc (validate: end > start, future dates)
   - System validate input và tạo campaign_id duy nhất

3. **Cấu hình targeting và budget**
   - Chọn locations từ dropdown (multi-select)
   - Thiết lập targeting demographics:
     * Age range (13-100)
     * Gender filter (male/female/all)
     * Interests (optional)
   - Cài đặt budget limits:
     * Max participants
     * Total budget
     * Cost per verified lead target (≤ 0.4 USD)

4. **Setup tracking và UTM**
   - Cấu hình UTM parameters:
     * utm_source (e.g., "poster", "flyer")
     * utm_medium (e.g., "qr", "digital")
     * utm_campaign (auto-fill campaign_id)
     * utm_term, utm_content (optional)
   - System generate tracking URLs

5. **Gán barcode pool (optional)**
   - Select từ available barcode batches
   - Hoặc skip để import sau
   - System validate barcode availability

6. **Preview và publish**
   - Review tất cả settings
   - Generate QR codes cho mỗi location
   - Status: Draft → Active
   - System gửi notification đến team

### 9.2.4 Alternative Flows

**A1: Validation errors**
- 2a. Nếu validation thất bại:
  - System hiển thị error messages chi tiết
  - Highlight fields có lỗi
  - Actor sửa và retry
  - Continue từ step 2

**A2: Insufficient permissions**
- 1a. Nếu Customer Account cố tạo Global campaign:
  - System reject với 403 Forbidden
  - Show message "Bạn chỉ có thể tạo campaigns cho brand riêng"
  - Redirect về dashboard

**A3: No available locations**
- 3a. Nếu không có locations available cho user scope:
  - System hiển thị empty state
  - Provide link đến Location Management
  - Suggest contact Admin để setup locations

### 9.2.5 Exception Flows

**E1: System timeout**
- Nếu campaign creation timeout (>30s):
  - System save draft automatically
  - Show "Campaign đã được lưu tạm, bạn có thể tiếp tục sau"
  - Provide link để resume

**E2: Database constraint violation**
- Nếu campaign_id duplicate (rare):
  - System retry với new ID generation
  - Log incident cho investigation
  - Continue normal flow

### 9.2.6 Postconditions
- Campaign được tạo với status "Active" hoặc "Draft"
- QR codes được generate cho mỗi location
- Analytics tracking được setup
- Team notifications được gửi
- Audit log ghi lại campaign creation

### 9.2.7 Special Requirements
- **Performance**: Campaign creation phải hoàn thành trong <2 ngày (business requirement từ System_Feature_Tree_Grok.md 1.1)
- **Security**: Multi-tenant isolation theo tenant_id
- **Audit**: Full audit trail cho compliance
- **UTM accuracy**: 100% tracking accuracy requirement

---

## 9.3 UC-002: Quản lý barcode và inventory

### 9.3.1 Mô tả Use Case
**Mục tiêu**: Admin/Brand Manager import, quản lý và đối soát barcode/voucher với single-use validation và lifecycle tracking.

**Phạm vi**: Barcode lifecycle từ import đến reconciliation
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Brands, Operations team

### 9.3.2 Preconditions
- Actor có quyền barcode.import theo scope (từ Access_Control_Tree_Grok.md 2.2)
- CSV file tuân thủ format: barcode, product_name, expiry_date, value, batch_code
- File size ≤ 100MB, encoding UTF-8

### 9.3.3 Main Success Scenario
1. **Truy cập Barcode Management**
   - Navigate đến Barcode Management module
   - System hiển thị overview: total codes, assigned, redeemed, expired

2. **Chuẩn bị import file**
   - Download CSV template nếu cần
   - Chuẩn bị file với columns bắt buộc:
     * barcode (8-50 chars, alphanumeric)
     * product_name (max 255 chars)
     * expiry_date (ISO date format, future dates only)
     * value (decimal, optional)
     * batch_code (tracking purposes)

3. **Upload và validate file**
   - Click "Import Barcodes"
   - Select campaign để gán (optional)
   - Upload CSV file
   - System validate:
     * File format và encoding
     * Column headers đúng
     * Data types và constraints
     * Barcode uniqueness (global unique)

4. **Preview và confirm import**
   - System hiển thị preview:
     * Total rows: X
     * Valid rows: Y
     * Invalid rows: Z (với error details)
   - Review sample data (first 10 rows)
   - Option: "Validate Only" hoặc "Import"

5. **Process import job**
   - System tạo background job
   - Return job_id cho tracking
   - Process từng row với error handling
   - Update progress real-time

6. **Verify import results**
   - Check job status via job_id
   - Review import summary:
     * Successful imports: X
     * Failed imports: Y với error details
     * Batch_id được tạo
   - Download error report nếu có

### 9.3.4 Alternative Flows

**A1: File validation errors**
- 3a. Nếu file format không hợp lệ:
  - System show detailed error messages
  - Highlight specific issues (missing columns, wrong encoding, etc.)
  - Provide corrected template download
  - Actor fix file và retry

**A2: Duplicate barcodes detected**
- 3b. Nếu có duplicate barcodes trong file hoặc với existing data:
  - System list tất cả duplicates
  - Options: Skip duplicates, Replace existing, Cancel import
  - Actor chọn strategy và continue

**A3: Large file processing**
- 4a. Nếu file >10K rows:
  - System suggest batch processing
  - Option: Split file thành smaller batches
  - Process từng batch sequentially

### 9.3.5 Exception Flows

**E1: Import job failure**
- Nếu background job failed:
  - System retry automatically (max 3 times)
  - Log detailed error cho debugging
  - Notify Actor về failure với error summary
  - Option: Download partial results nếu có

**E2: Database timeout**
- Nếu large batch insert timeout:
  - System switch sang chunked processing
  - Continue từ last successful chunk
  - Show progress với estimated completion time

### 9.3.6 Barcode Lifecycle Management

**Trạng thái lifecycle (từ System_Feature_Tree_Grok.md 1.2):**
```
Available → Assigned → Redeemed
    ↓           ↓         ↓
  Expired    Expired   [Final]
    ↓           ↓
 Revoked    Revoked
```

**State transition rules:**
- Available → Assigned: Khi user verify OTP
- Assigned → Redeemed: Khi scan tại POS
- Any → Expired: Khi qua expiry_date
- Any → Revoked: Manual admin action (fraud cases)

### 9.3.7 Reconciliation Process

**Daily reconciliation workflow:**
1. **System auto-check expiry**
   - Cron job chạy daily 2AM
   - Update status Available/Assigned → Expired nếu qua expiry_date
   - Generate expiry report

2. **Manual reconciliation**
   - Admin import redemption logs từ external systems
   - Cross-reference với internal redemption data
   - Identify discrepancies
   - Generate reconciliation report

3. **Inventory accuracy check**
   - Compare database counts với physical inventory
   - Flag discrepancies >5% cho investigation
   - Update inventory adjustments nếu cần

### 9.3.8 Postconditions
- Barcodes imported với status "Available"
- Batch record created với tracking info
- Inventory counts updated
- Import job log saved với full audit trail
- Notifications sent cho relevant stakeholders

### 9.3.9 Special Requirements
- **Performance**: Import <10MB file trong <30 giây
- **Accuracy**: 100% barcode uniqueness enforcement
- **Inventory**: >95% accuracy requirement
- **Audit**: Immutable audit trail cho compliance

---

## 9.4 UC-003: Khách hàng quét QR và điền form

### 9.4.1 Mô tả Use Case
**Mục tiêu**: End user quét QR code từ ads format, truy cập landing page và điền form thu thập dữ liệu với quiz preferences.

**Phạm vi**: User journey từ QR scan đến form submission
**Mức độ**: Chức năng chính (primary)  
**Stakeholder**: End users, Brands

### 9.4.2 Preconditions
- Campaign đang active (status = "active")
- QR code hợp lệ và chưa expired
- User có smartphone/device với camera
- Landing page accessible (99.9% uptime requirement)

### 9.4.3 Main Success Scenario

1. **Quét QR code**
   - User thấy ads format (poster, flyer, digital banner) tại location
   - Mở camera app hoặc QR scanner
   - Quét QR code trên ads
   - System redirect đến landing page với campaign_id, location_id, ads_format_id trong URL

2. **Load landing page**
   - System load landing page responsive (<2 giây trên mobile 3G)
   - Hiển thị campaign info:
     * Product image và description
     * Brand information
     * Value proposition
     * Terms & conditions link
   - Track analytics event: "qr_scan"

3. **Điền form thông tin cơ bản**
   - Form với fields bắt buộc:
     * Họ tên (validation: không chứa số)
     * Email (validation: format email hợp lệ)
     * Số điện thoại (validation: VN format +84...)
   - Fields optional:
     * Tuổi (dropdown: <18, 18-24, 25-34, 35-44, 45-54, 55+)
     * Giới tính (radio: Nam/Nữ/Khác)
     * Thành phố (dropdown: major cities)

4. **Tham gia quiz preferences**
   - System hiển thị 5-10 câu hỏi multiple choice:
     * "Bạn thường mua sắm ở đâu?" (Online/Store/Both)
     * "Loại sản phẩm yêu thích?" (Food/Beauty/Tech/Fashion)
     * "Frequency of trying new products?" (Weekly/Monthly/Rarely)
     * "Preferred communication channel?" (SMS/Email/Social)
   - Each answer có scoring để build user profile

5. **Chấp nhận terms và consent**
   - Checkboxes bắt buộc:
     * "Tôi đồng ý với Terms & Conditions"
     * "Tôi đồng ý xử lý dữ liệu cá nhân theo GDPR/PDPA"
   - Checkboxes optional:
     * "Nhận thông tin marketing qua email"
     * "Nhận thông tin marketing qua SMS"
     * "Chia sẻ data với partners"

6. **Submit form với reCAPTCHA**
   - System validate tất cả required fields
   - reCAPTCHA v3 validation (score >0.5)
   - Track analytics event: "form_submit"
   - Show loading spinner

7. **Xử lý submission**
   - System hash PII data (phone, email)
   - Encrypt sensitive fields (name, preferences)
   - Store trong database với consent flags
   - Generate session_id cho OTP step
   - Redirect đến OTP verification page

### 9.4.4 Alternative Flows

**A1: Form validation errors**
- 6a. Nếu có validation errors:
  - Highlight fields có lỗi với error messages
  - Scroll đến field đầu tiên có lỗi
  - Keep existing data trong form
  - User fix errors và re-submit

**A2: Campaign inactive/expired**
- 1a. Nếu campaign không active:
  - Show message "Campaign đã kết thúc"
  - Provide link đến other active campaigns
  - Track event: "campaign_expired_access"

**A3: Location restriction**
- 1b. Nếu user location không match campaign targeting:
  - Show message "Campaign không available tại khu vực này"
  - Suggest nearby locations nếu có
  - Option: Continue anyway với warning

**A4: reCAPTCHA failed**
- 6b. Nếu reCAPTCHA score <0.5:
  - Show traditional CAPTCHA challenge
  - User solve CAPTCHA
  - Re-validate và continue

### 9.4.5 Exception Flows

**E1: Network connectivity issues**
- Nếu form submit failed do network:
  - Auto-save form data locally (localStorage)
  - Show retry button
  - Auto-retry khi connection restored
  - Prevent data loss

**E2: Server overload**
- Nếu server response >10 giây:
  - Show "High traffic, please wait" message
  - Implement queue system
  - Provide estimated wait time
  - Option: Get notified when ready

### 9.4.6 User Experience Requirements

**Performance targets (từ System_Feature_Tree_Grok.md 1.3):**
- Landing page load: <2 giây trên mobile 3G
- Form completion time: <30 giây average
- Form completion rate: >90%
- Data quality score: >95%

**Responsive design:**
- Mobile-first PWA design
- Touch-friendly inputs
- Auto-complete enabled
- Keyboard optimization
- Accessibility WCAG 2.1 AA compliant

**Progressive disclosure:**
- Show form steps progressively
- Progress indicator (Step 1/3)
- Save progress locally
- Clear next step instructions

### 9.4.7 Data Collection Strategy

**Profile scoring algorithm:**
```python
def calculate_profile_score(quiz_responses):
    score = 0
    
    # Shopping frequency (0-20 points)
    if quiz_responses.get('shopping_frequency') == 'weekly':
        score += 20
    elif quiz_responses.get('shopping_frequency') == 'monthly':
        score += 10
    
    # Product trial willingness (0-25 points)
    if quiz_responses.get('try_new_products') == 'always':
        score += 25
    elif quiz_responses.get('try_new_products') == 'sometimes':
        score += 15
    
    # Brand loyalty (0-15 points)
    if quiz_responses.get('brand_loyalty') == 'low':
        score += 15  # More likely to try new brands
    
    # Communication preference (0-10 points)
    if quiz_responses.get('communication') in ['email', 'sms']:
        score += 10
    
    return min(score, 100)  # Cap at 100
```

### 9.4.8 Analytics Tracking

**Events tracked:**
```javascript
// GA4 event tracking
gtag('event', 'qr_scan', {
  campaign_id: 'CAMP_2025_001',
  location_id: 'HCM_CIRCLE_K_001',
  ads_format_id: 'POSTER_A4_001',
  user_agent: navigator.userAgent,
  timestamp: new Date().toISOString()
});

gtag('event', 'form_start', {
  campaign_id: 'CAMP_2025_001',
  form_version: 'v1.2'
});

gtag('event', 'form_submit', {
  campaign_id: 'CAMP_2025_001', 
  completion_time: 45, // seconds
  quiz_completed: true,
  consent_marketing: true
});
```

### 9.4.9 Postconditions
- User profile created với encrypted PII
- Quiz responses scored và stored
- Consent preferences recorded
- Analytics events tracked
- Session prepared cho OTP verification
- User redirected đến OTP page

### 9.4.10 Special Requirements
- **GDPR/PDPA Compliance**: Explicit consent collection
- **Data Quality**: >95% valid data requirement
- **Fraud Prevention**: reCAPTCHA và device fingerprinting
- **Accessibility**: Support screen readers và keyboard navigation

---

## 9.5 UC-004: Xác thực OTP và chống gian lận

### 9.5.1 Mô tả Use Case
**Mục tiêu**: System gửi và verify OTP code để xác thực user thật, kết hợp với fraud detection để chống spam và bot attacks.

**Phạm vi**: OTP generation, delivery, verification và fraud prevention
**Mức độ**: Chức năng quan trọng (critical)
**Stakeholder**: End users, Security team

### 9.5.2 Preconditions
- User đã complete form submission (UC-003)
- Phone/email đã được validate format
- Session_id hợp lệ từ form submission
- SMS/Email providers (Twilio/SendGrid) online

### 9.5.3 Main Success Scenario

1. **Generate và gửi OTP**
   - System receive OTP request với session_id
   - Validate session (không expired, chưa verified)
   - Generate 6-digit random code
   - Store trong Redis với TTL 5 phút
   - Determine delivery method (SMS priority, email fallback)

2. **Fraud detection pre-check**
   - Check rate limiting rules:
     * Max 10 OTP requests/24h per phone number
     * Max 3 requests/hour per session
     * Max 100 requests/hour per IP
   - Device fingerprinting analysis
   - Disposable email detection
   - VPN/proxy detection

3. **Deliver OTP message**
   - SMS via Twilio: "Mã xác thực của bạn: {code}. Có hiệu lực trong 5 phút."
   - Email template với branding và instructions
   - Track delivery status (sent/delivered/failed)
   - Start 5-minute countdown timer

4. **User nhập OTP code**
   - User receive SMS/email
   - Enter 6-digit code trong form
   - System validate format (numeric, 6 digits)
   - Submit verification request

5. **Verify OTP code**
   - Validate session_id và OTP code
   - Check expiration (5 phút window)
   - Compare với stored code trong Redis
   - Track attempt count (max 3 attempts)

6. **Successful verification**
   - Mark session as verified
   - Generate user_token cho barcode assignment
   - Clear OTP từ Redis
   - Track analytics: "otp_verified"
   - Redirect đến barcode assignment page

### 9.5.4 Alternative Flows

**A1: Invalid OTP code**
- 5a. Nếu OTP code sai:
  - Increment attempt counter
  - Show error: "Mã OTP không đúng"
  - Display attempts remaining (3-current_attempts)
  - If attempts < 3: Allow retry
  - If attempts = 3: Block session, require new OTP

**A2: Expired OTP**
- 5b. Nếu OTP đã expired (>5 phút):
  - Show error: "Mã OTP đã hết hạn"
  - Clear expired code từ Redis
  - Show "Gửi lại OTP" button
  - User click để request new OTP

**A3: Rate limit exceeded**
- 1a. Nếu vượt rate limit:
  - Show error: "Bạn đã yêu cầu quá nhiều OTP. Vui lòng thử lại sau X phút"
  - Display countdown timer
  - Block new requests until cooldown
  - Log suspicious activity

**A4: SMS delivery failed**
- 3a. Nếu SMS failed (network issue, invalid number):
  - Auto-fallback sang email delivery
  - Update delivery method trong session
  - Show message: "SMS không thể gửi, đã gửi qua email"
  - Continue normal flow

**A5: Disposable email detected**
- 2a. Nếu detect disposable email:
  - Require phone verification thay vì email
  - Show message: "Vui lòng sử dụng email thường xuyên"
  - Option: Update email address

### 9.5.5 Exception Flows

**E1: All delivery methods failed**
- Nếu cả SMS và email đều failed:
  - Log critical error cho investigation
  - Show fallback message: "Hệ thống đang bảo trì, vui lòng thử lại sau"
  - Queue retry job cho later processing
  - Notify operations team

**E2: Redis unavailable**
- Nếu Redis cache down:
  - Fallback sang database storage
  - Continue OTP flow với slightly higher latency
  - Alert DevOps team để fix Redis

### 9.5.6 Fraud Detection Rules

**Velocity checks:**
```python
class FraudDetection:
    def check_otp_velocity(self, phone_number, ip_address):
        rules = [
            # Phone-based limits
            ("phone_hourly", phone_number, 3, 3600),
            ("phone_daily", phone_number, 10, 86400),
            
            # IP-based limits  
            ("ip_hourly", ip_address, 100, 3600),
            ("ip_daily", ip_address, 1000, 86400),
        ]
        
        for rule_name, identifier, limit, window in rules:
            count = redis.get(f"rate_limit:{rule_name}:{identifier}") or 0
            if int(count) >= limit:
                return False, f"Rate limit exceeded for {rule_name}"
        
        return True, None
    
    def check_suspicious_patterns(self, request_data):
        suspicion_score = 0
        
        # Check device fingerprint
        if self.is_known_bot_signature(request_data.user_agent):
            suspicion_score += 50
        
        # Check request timing patterns
        if self.detect_automated_timing(request_data.session_id):
            suspicion_score += 30
        
        # Check geolocation inconsistency
        if self.detect_geo_impossible_travel(request_data.ip_address):
            suspicion_score += 40
        
        return suspicion_score > 70  # Threshold for blocking
```

**Device fingerprinting:**
```javascript
// Client-side fingerprinting
function generateDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    
    const fingerprint = {
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: navigator.platform,
        canvas_hash: btoa(canvas.toDataURL()),
        user_agent_hash: btoa(navigator.userAgent).substring(0, 32)
    };
    
    return btoa(JSON.stringify(fingerprint));
}
```

### 9.5.7 Performance Requirements

**Delivery SLA (từ System_Feature_Tree_Grok.md 1.4):**
- OTP delivery time: <30 giây
- Verification success rate: >95%
- Fraud detection accuracy: >90%
- System response time: <3 giây

**Scalability:**
- Support 20,000 OTP requests/phút during peak
- Redis TTL management cho memory efficiency
- Auto-scaling SMS/email provider capacity

### 9.5.8 Security Measures

**OTP generation security:**
```python
import secrets
import hashlib

def generate_secure_otp():
    # Use cryptographically secure random
    code = secrets.randbelow(1000000)
    return f"{code:06d}"  # Pad with leading zeros

def hash_otp_for_storage(otp_code, session_id):
    # Hash OTP before storing in Redis
    combined = f"{otp_code}:{session_id}"
    return hashlib.sha256(combined.encode()).hexdigest()
```

**Anti-enumeration measures:**
- Constant-time comparison cho OTP validation
- No difference trong response time between valid/invalid codes
- Rate limiting applies even for valid attempts
- Log all verification attempts cho fraud analysis

### 9.5.9 Monitoring và Alerting

**Key metrics to monitor:**
```yaml
otp_metrics:
  delivery_rate:
    sms_success_rate: ">95%"
    email_success_rate: ">98%"
    delivery_time_p95: "<30s"
  
  verification_rate:
    first_attempt_success: ">85%"
    overall_success_rate: ">95%"
    
  fraud_detection:
    blocked_attempts_ratio: "<5%"
    false_positive_rate: "<1%"
    
  system_health:
    redis_availability: ">99.9%"
    provider_uptime: ">99.5%"
```

**Alerting rules:**
- SMS delivery rate <90% → Alert SMS team
- Fraud detection spike >10% → Alert security team
- OTP delivery time >60s → Alert infrastructure team

### 9.5.10 Postconditions
- User successfully verified với valid phone/email
- Session marked as verified trong database
- User_token generated cho next step
- Fraud score calculated và stored
- Analytics events logged
- Rate limiting counters updated

### 9.5.11 Special Requirements
- **Zero false positives** cho legitimate users
- **Fraud rate <5%** requirement
- **GDPR compliance** cho data retention
- **Telco compliance** cho SMS regulations

---

## 9.6 UC-005: Cấp phát và quản lý voucher

### 9.6.1 Mô tả Use Case
**Mục tiêu**: System tự động gán barcode từ available pool cho user đã verified, với personalization dựa trên preferences và support mobile wallet integration.

**Phạm vi**: Barcode assignment từ pool đến user delivery
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: End users, Brands

### 9.6.2 Preconditions
- User đã verify OTP thành công (UC-004)
- User_token hợp lệ và chưa expired
- Campaign có available barcodes trong pool
- Barcode pool chưa exhausted
- Mobile wallet services (Apple Wallet/Google Pay) available

### 9.6.3 Main Success Scenario

1. **Receive barcode assignment request**
   - User redirect từ OTP verification với user_token
   - System validate user_token (signature, expiration)
   - Extract campaign_id, user_preferences từ token
   - Check campaign status (still active, not expired)

2. **Select optimal barcode từ pool**
   - Query available barcodes trong campaign pool
   - Apply personalization logic:
     * Match product variant với user preferences
     * Consider location proximity cho redemption
     * Check expiry dates (prioritize shorter expiry)
     * Apply any business rules (VIP users, etc.)

3. **Atomic barcode assignment**
   - Begin database transaction
   - Lock selected barcode row
   - Update status: Available → Assigned
   - Store assignment metadata:
     * assigned_to_user_hash (SHA-256 của phone/email)
     * assigned_at timestamp
     * assignment_campaign_id
     * user_preferences_snapshot
   - Commit transaction

4. **Generate delivery assets**
   - Create QR code image (PNG, 300x300px)
   - Generate PDF voucher với branding
   - Create Apple Wallet pass (.pkpass file)
   - Generate Google Pay pass URL
   - Prepare redemption instructions

5. **Deliver barcode đến user**
   - Primary method: Display trong browser với QR code
   - Secondary: SMS với download link
   - Optional: Email với PDF attachment
   - Mobile wallet: Show "Add to Wallet" buttons
   - Link đến User Portal cho future access

6. **Update analytics và notifications**
   - Track event: "barcode_assigned"
   - Update campaign metrics (assigned_codes count)
   - Send success notification đến user
   - Queue background jobs (CRM sync, analytics processing)

### 9.6.4 Alternative Flows

**A1: No available barcodes**
- 2a. Nếu campaign pool exhausted:
  - Check other campaigns từ same brand
  - Show waitlist signup option
  - Offer alternative products/campaigns
  - Notify brand về inventory shortage

**A2: Personalization engine không tìm được match**
- 2b. Nếu không có barcode match user preferences:
  - Fall back sang random assignment từ available pool
  - Log mismatch cho future optimization
  - Continue normal flow

**A3: User đã receive barcode cho campaign này**
- 1a. Nếu detect duplicate assignment:
  - Check existing assignment status
  - If still valid: Redirect đến existing barcode display
  - If expired: Allow new assignment
  - If redeemed: Show completion message

**A4: Mobile wallet generation failed**
- 4a. Nếu Apple Wallet/Google Pay API failed:
  - Continue với QR code và PDF
  - Show message: "Mobile wallet tạm thời không khả dụng"
  - Provide manual add instructions

### 9.6.5 Exception Flows

**E1: Database transaction failed**
- Nếu assignment transaction failed:
  - Rollback transaction
  - Log error details cho investigation
  - Retry với different barcode (up to 3 times)
  - If all retries failed: Show error page với support contact

**E2: QR code generation service down**
- Nếu QR generation failed:
  - Fall back sang text-based barcode display
  - Queue QR generation job cho later processing
  - Email QR code khi ready

### 9.6.6 Personalization Algorithm

**Barcode selection logic:**
```python
class BarcodePersonalization:
    def select_optimal_barcode(self, user_preferences, available_barcodes):
        scored_barcodes = []
        
        for barcode in available_barcodes:
            score = 0
            
            # Product category matching (0-40 points)
            if barcode.product_category in user_preferences.get('categories', []):
                score += 40
            
            # Location proximity (0-20 points)
            user_location = user_preferences.get('city')
            if barcode.preferred_locations and user_location:
                if user_location in barcode.preferred_locations:
                    score += 20
            
            # Expiry urgency (0-15 points)
            days_to_expiry = (barcode.expires_at - datetime.now()).days
            if days_to_expiry <= 30:
                score += 15  # Prioritize soon-to-expire items
            elif days_to_expiry <= 60:
                score += 10
            
            # Dietary restrictions (0-25 points)
            user_restrictions = user_preferences.get('dietary_restrictions', [])
            if not any(restriction in barcode.ingredients for restriction in user_restrictions):
                score += 25
            
            scored_barcodes.append((barcode, score))
        
        # Sort by score descending, return top match
        scored_barcodes.sort(key=lambda x: x[1], reverse=True)
        return scored_barcodes[0][0] if scored_barcodes else None
```

### 9.6.7 Mobile Wallet Integration

**Apple Wallet Pass Generation:**
```python
import passbook

def create_apple_wallet_pass(barcode_data, user_info):
    # Create pass structure
    pass_info = {
        'passTypeIdentifier': 'pass.com.productsampling.voucher',
        'serialNumber': barcode_data.barcode_id,
        'teamIdentifier': 'TEAM_ID',
        'organizationName': barcode_data.brand_name,
        'description': f'Voucher cho {barcode_data.product_name}',
        'formatVersion': 1,
        'backgroundColor': 'rgb(60, 165, 255)',
        'foregroundColor': 'rgb(255, 255, 255)',
        'barcode': {
            'format': 'PKBarcodeFormatQR',
            'message': barcode_data.barcode_value,
            'messageEncoding': 'iso-8859-1'
        },
        'generic': {
            'primaryFields': [{
                'key': 'product',
                'label': 'Sản phẩm',
                'value': barcode_data.product_name
            }],
            'secondaryFields': [{
                'key': 'expires',
                'label': 'Hết hạn',
                'value': barcode_data.expires_at.strftime('%d/%m/%Y')
            }],
            'auxiliaryFields': [{
                'key': 'instructions',
                'label': 'Hướng dẫn',
                'value': 'Quét mã tại cửa hàng để nhận quà'
            }]
        },
        'locations': [
            {
                'latitude': location.latitude,
                'longitude': location.longitude,
                'relevantText': f'Đổi quà tại {location.name}'
            } for location in barcode_data.redemption_locations
        ]
    }
    
    # Generate signed .pkpass file
    pass_file = passbook.Pass(pass_info, key='private_key.pem', cert='certificate.pem')
    return pass_file.create()
```

**Google Pay Integration:**
```python
def create_google_pay_pass(barcode_data):
    pass_object = {
        'kind': 'walletobjects#genericObject',
        'id': f'voucher_{barcode_data.barcode_id}',
        'classId': 'ISSUER_ID.voucher_class',
        'genericType': 'GENERIC_TYPE_UNSPECIFIED',
        'hexBackgroundColor': '#3CA5FF',
        'logo': {
            'sourceUri': {
                'uri': 'https://brand.com/logo.png'
            }
        },
        'cardTitle': {
            'defaultValue': {
                'language': 'vi',
                'value': barcode_data.product_name
            }
        },
        'subheader': {
            'defaultValue': {
                'language': 'vi', 
                'value': 'Voucher dùng thử'
            }
        },
        'header': {
            'defaultValue': {
                'language': 'vi',
                'value': barcode_data.brand_name
            }
        },
        'barcode': {
            'type': 'QR_CODE',
            'value': barcode_data.barcode_value
        },
        'heroImage': {
            'sourceUri': {
                'uri': barcode_data.product_image_url
            }
        }
    }
    
    return generate_google_pay_url(pass_object)
```

### 9.6.8 User Portal Integration

**Redirect đến User Portal:**
```javascript
// After successful barcode assignment
function redirectToUserPortal(barcode_data) {
    const portal_url = `https://portal.productsampling.com/dashboard`;
    const params = new URLSearchParams({
        barcode_id: barcode_data.barcode_id,
        first_time: 'true',
        source: 'assignment'
    });
    
    // Store barcode info trong localStorage cho offline access
    localStorage.setItem('latest_barcode', JSON.stringify({
        barcode_id: barcode_data.barcode_id,
        product_name: barcode_data.product_name,
        expires_at: barcode_data.expires_at,
        qr_code_url: barcode_data.qr_code_url
    }));
    
    window.location.href = `${portal_url}?${params.toString()}`;
}
```

### 9.6.9 Performance Requirements

**Assignment SLA (từ System_Feature_Tree_Grok.md 1.5):**
- Assignment time: <2 giây post-verification
- QR generation: <5 giây
- Mobile wallet generation: <10 giây
- 100% barcode uniqueness guarantee

**Concurrency handling:**
- Handle 1000 simultaneous assignments
- Optimistic locking cho barcode selection
- Retry logic cho race conditions
- Queue overflow protection

### 9.6.10 Analytics và Tracking

**Assignment metrics:**
```python
def track_assignment_analytics(barcode_data, user_data, assignment_context):
    analytics_event = {
        'event_type': 'barcode_assigned',
        'timestamp': datetime.now().isoformat(),
        'campaign_id': barcode_data.campaign_id,
        'barcode_id': barcode_data.barcode_id,
        'user_id_hash': hashlib.sha256(user_data.phone.encode()).hexdigest(),
        'assignment_method': assignment_context.method,  # 'automatic', 'manual', 'waitlist'
        'personalization_score': assignment_context.personalization_score,
        'time_from_verification': assignment_context.verification_delay_seconds,
        'delivery_methods': assignment_context.delivery_methods,  # ['qr', 'sms', 'email', 'wallet']
        'location_context': {
            'user_city': user_data.city,
            'nearest_redemption_location': barcode_data.nearest_location,
            'distance_km': barcode_data.distance_to_nearest
        }
    }
    
    # Send to analytics pipeline
    send_to_analytics_pipeline(analytics_event)
    
    # Update campaign metrics
    update_campaign_metrics(barcode_data.campaign_id, {
        'total_assignments': '+1',
        'assignments_today': '+1',
        'personalization_success_rate': calculate_personalization_success_rate()
    })
```

### 9.6.11 Postconditions
- Barcode status updated: Available → Assigned
- User receives barcode qua multiple channels
- Assignment logged trong audit trail
- Campaign metrics updated
- User Portal session initialized
- Mobile wallet passes generated (if requested)
- Analytics events tracked
- CRM sync queued

### 9.6.12 Special Requirements
- **Atomicity**: Zero double-assignment guarantee
- **Personalization**: >80% user satisfaction với matches
- **Mobile-first**: PWA-optimized delivery experience
- **Offline support**: QR codes work without internet

---

## 9.7 UC-006: Đổi quà tại điểm bán

### 9.7.1 Mô tả Use Case
**Mục tiêu**: Serving Account (staff) tại retail location scan barcode của customer để validate và complete redemption process với offline capability.

**Phạm vi**: POS redemption từ scan đến completion
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Store staff, End users, Retail partners

### 9.7.2 Preconditions
- Serving Account đã login với POS access permissions
- Barcode status = "Assigned" và chưa expired
- Staff có device với camera hoặc barcode scanner
- Location có POS integration setup
- Customer present tại store với barcode

### 9.7.3 Main Success Scenario

1. **Staff chuẩn bị redemption**
   - Login vào POS tool hoặc web interface
   - Select location (auto-detect hoặc manual)
   - Verify staff_id và shift information
   - Load redemption interface

2. **Scan customer barcode**
   - Customer show barcode (QR code, Apple Wallet, printed voucher)
   - Staff scan bằng camera app hoặc barcode scanner
   - System capture barcode_value và timestamp
   - Validate barcode format (alphanumeric, length)

3. **Validate barcode eligibility**
   - System lookup barcode trong database
   - Check barcode status (must be "Assigned")
   - Verify expiry date (chưa expired)
   - Confirm location permissions (store có thể redeem này không)
   - Check business hours restrictions

4. **Display redemption preview**
   - Show product information:
     * Product name và description
     * Brand information
     * Campaign name
     * Assigned user (masked): "+84***123456"
     * Expiry date
   - Show redemption confirmation screen
   - Provide "Confirm Redemption" button

5. **Complete redemption process**
   - Staff confirm redemption
   - System begin atomic transaction:
     * Update barcode status: Assigned → Redeemed
     * Record redemption details (timestamp, location, staff)
     * Update campaign statistics
     * Generate receipt/confirmation
   - Commit transaction

6. **Provide confirmation**
   - Show success message với receipt number
   - Display redemption summary
   - Option: Print receipt (if printer available)
   - Update staff dashboard statistics
   - Send confirmation đến customer (if contact available)

### 9.7.4 Alternative Flows

**A1: Invalid barcode**
- 3a. Nếu barcode không tồn tại:
  - Show error: "Mã barcode không hợp lệ"
  - Suggest re-scan hoặc manual entry
  - Option: Report counterfeit barcode
  - Log suspicious activity

**A2: Already redeemed barcode**
- 3b. Nếu barcode đã redeemed:
  - Show error: "Mã này đã được sử dụng"
  - Display previous redemption info:
    * Redeemed date/time
    * Location name
    * Staff who processed
  - Option: Contact support nếu customer khiếu nại

**A3: Expired barcode**
- 3c. Nếu barcode đã expired:
  - Show error: "Mã đã hết hạn vào [date]"
  - Check if expiry extension possible
  - Contact manager approval nếu cần
  - Document exception nếu approved

**A4: Location restriction**
- 3d. Nếu barcode không thể redeem tại location này:
  - Show error: "Mã này chỉ có thể đổi tại: [location_list]"
  - Provide directions đến valid locations
  - Option: Manager override với reason

**A5: Network connectivity issues**
- Nếu device offline:
  - Switch sang offline mode
  - Store redemption locally (IndexedDB)
  - Show "Offline - will sync when connected"
  - Process redemption based on local cache
  - Auto-sync khi connection restored

### 9.7.5 Exception Flows

**E1: Database unavailable**
- Nếu central database down:
  - Fall back sang local verification
  - Use cached valid barcode list
  - Mark redemption as "pending_sync"
  - Queue for reconciliation later

**E2: Barcode scanner malfunction**
- Nếu camera/scanner không work:
  - Allow manual barcode entry
  - Implement extra validation (checksum)
  - Log manual entries cho audit
  - Alert IT support về hardware issue

### 9.7.6 Offline Capability

**Local storage strategy:**
```javascript
// IndexedDB schema cho offline redemptions
const offlineSchema = {
  stores: ['redemptions', 'valid_barcodes', 'sync_queue'],
  redemptions: {
    keyPath: 'redemption_id',
    indexes: ['barcode_value', 'timestamp', 'sync_status']
  },
  valid_barcodes: {
    keyPath: 'barcode_value', 
    indexes: ['campaign_id', 'expires_at', 'status']
  }
};

// Offline redemption process
class OfflineRedemption {
  async processRedemption(barcode_value, staff_id, location_id) {
    // Check local valid barcode cache
    const barcode = await this.lookupLocalBarcode(barcode_value);
    if (!barcode || barcode.status !== 'assigned') {
      throw new Error('Invalid barcode or already used');
    }
    
    // Create offline redemption record
    const redemption = {
      redemption_id: this.generateOfflineId(),
      barcode_value: barcode_value,
      staff_id: staff_id,
      location_id: location_id,
      timestamp: new Date().toISOString(),
      sync_status: 'pending',
      offline_processed: true
    };
    
    // Store locally
    await this.storeOfflineRedemption(redemption);
    
    // Update local barcode status
    await this.updateLocalBarcodeStatus(barcode_value, 'redeemed');
    
    return redemption;
  }
  
  async syncWhenOnline() {
    const pending = await this.getPendingRedemptions();
    for (const redemption of pending) {
      try {
        await this.syncRedemptionToServer(redemption);
        await this.markAsSynced(redemption.redemption_id);
      } catch (error) {
        // Handle sync conflicts
        await this.handleSyncConflict(redemption, error);
      }
    }
  }
}
```

### 9.7.7 POS Integration Variants

**Web-based POS tool:**
- Responsive web app works on tablets/phones
- Barcode scanning via camera API
- Works với or without dedicated scanner hardware
- Real-time sync với central database

**API integration với existing POS systems:**
```python
# Circle K POS Integration
class CircleKPOSAdapter:
    def __init__(self, api_endpoint, api_key):
        self.endpoint = api_endpoint
        self.api_key = api_key
    
    def validate_redemption(self, barcode, store_id):
        # Call Circle K validation API
        response = requests.post(f"{self.endpoint}/validate", {
            'barcode': barcode,
            'store_id': store_id,
            'api_key': self.api_key
        })
        return response.json()
    
    def complete_redemption(self, barcode, transaction_id):
        # Mark as redeemed trong Circle K system
        response = requests.post(f"{self.endpoint}/redeem", {
            'barcode': barcode,
            'transaction_id': transaction_id,
            'api_key': self.api_key
        })
        return response.json()

# GS25 POS Integration  
class GS25POSAdapter:
    def process_redemption(self, barcode_data):
        # Different API structure for GS25
        # Handle format differences và error codes
        pass
```

### 9.7.8 Fraud Prevention

**Redemption validation rules:**
```python
class RedemptionValidator:
    def validate_redemption(self, barcode, location, staff, timestamp):
        checks = []
        
        # Time-based validation
        if self.is_outside_business_hours(location, timestamp):
            checks.append("Redemption outside business hours")
        
        # Location validation
        if not self.is_valid_location_for_barcode(barcode, location):
            checks.append("Invalid location for this barcode")
        
        # Staff validation
        if not self.is_staff_authorized(staff, location):
            checks.append("Staff not authorized for this location")
        
        # Velocity checks
        if self.detect_rapid_redemptions(staff, timestamp):
            checks.append("Suspicious redemption velocity")
        
        # Geographic impossibility
        if self.detect_impossible_travel(barcode.last_activity, location, timestamp):
            checks.append("Impossible travel between activities")
        
        return len(checks) == 0, checks
```

### 9.7.9 Receipt và Confirmation

**Receipt template:**
```
=================================
    [BRAND LOGO]
=================================
VOUCHER REDEMPTION RECEIPT

Product: [PRODUCT_NAME]
Campaign: [CAMPAIGN_NAME]
Barcode: [BARCODE_VALUE]

Redeemed at: [LOCATION_NAME]
Address: [LOCATION_ADDRESS]
Date: [DATE] [TIME]
Staff: [STAFF_NAME]

Receipt #: [RECEIPT_NUMBER]

Thank you for participating!
Visit: portal.productsampling.com
for more offers.
=================================
```

**Digital confirmation:**
```python
def send_redemption_confirmation(redemption_data):
    # SMS confirmation
    if redemption_data.user_phone:
        message = f"Bạn đã đổi thành công {redemption_data.product_name} tại {redemption_data.location_name}. Cảm ơn bạn đã tham gia!"
        send_sms(redemption_data.user_phone, message)
    
    # Email confirmation với receipt
    if redemption_data.user_email:
        send_email_receipt(redemption_data.user_email, redemption_data)
    
    # User Portal notification
    create_portal_notification(redemption_data.user_id, {
        'type': 'redemption_success',
        'product_name': redemption_data.product_name,
        'location': redemption_data.location_name,
        'timestamp': redemption_data.timestamp
    })
```

### 9.7.10 Performance Requirements

**Redemption SLA (từ System_Feature_Tree_Grok.md 1.5):**
- Scan validation: <3 giây
- Redemption completion: <5 giây total
- Offline sync: 24-hour capability
- Success rate: >98%

**Concurrent redemptions:**
- Support 100 simultaneous redemptions per location
- Handle peak times (lunch hours, weekends)
- Queue management cho high traffic

### 9.7.11 Analytics và Reporting

**Real-time redemption tracking:**
```python
def track_redemption_analytics(redemption_data):
    analytics_event = {
        'event_type': 'redemption_completed',
        'timestamp': redemption_data.timestamp,
        'campaign_id': redemption_data.campaign_id,
        'location_id': redemption_data.location_id,
        'staff_id': redemption_data.staff_id,
        'processing_time_seconds': redemption_data.processing_time,
        'redemption_method': redemption_data.method,  # 'scan', 'manual_entry'
        'offline_processed': redemption_data.offline,
        'time_from_assignment_hours': redemption_data.assignment_delay,
        'day_of_week': redemption_data.timestamp.strftime('%A'),
        'hour_of_day': redemption_data.timestamp.hour
    }
    
    # Update real-time dashboards
    update_location_dashboard(redemption_data.location_id, analytics_event)
    update_campaign_dashboard(redemption_data.campaign_id, analytics_event)
    
    # Send to data warehouse
    send_to_analytics_pipeline(analytics_event)
```

### 9.7.12 Postconditions
- Barcode status updated: Assigned → Redeemed
- Redemption record created với audit trail
- Campaign statistics updated
- Customer confirmation sent
- Receipt generated
- Staff dashboard updated
- Analytics events tracked
- Inventory adjustments (if applicable)

### 9.7.13 Special Requirements
- **Offline capability**: 24-hour operation without internet
- **Audit compliance**: Immutable redemption logs
- **Real-time sync**: <5 minute delay cho online operations
- **Multi-location support**: Staff có thể work tại multiple stores

---
---

## 9.8 UC-007: Phân tích và báo cáo chiến dịch

### 9.8.1 Mô tả Use Case
**Mục tiêu**: Brand Manager/Admin xem funnel analytics, ROI metrics và export data để đánh giá hiệu quả campaign và tối ưu chiến lược.

**Phạm vi**: Analytics dashboard từ real-time metrics đến export reports
**Mức độ**: Chức năng quan trọng (important)
**Stakeholder**: Brand managers, Marketing teams, Executives

### 9.8.2 Preconditions
- User có quyền analytics theo scope (Own campaigns hoặc Group/Global)
- Campaign đã có data (ít nhất vài events được track)
- Analytics pipeline đang hoạt động
- Dashboard service online với <3s response time requirement

### 9.8.3 Main Success Scenario

1. **Truy cập Analytics Dashboard**
   - Login và navigate đến Analytics module
   - System hiển thị campaign list theo permissions
   - Select campaign hoặc view aggregated data
   - Choose date range (default: last 30 days)

2. **Xem Funnel Analytics**
   - System load real-time funnel data:
     * QR Scans: Số lượng QR được scan
     * Form Submissions: Users điền form
     * OTP Verifications: Successful verifications
     * Barcode Assignments: Vouchers được cấp
     * Redemptions: Actual product pickups
   - Display conversion rates giữa các steps
   - Show drop-off points và bottlenecks

3. **Phân tích ROI Metrics**
   - Cost metrics:
     * Total campaign cost
     * Cost per scan
     * Cost per verified lead (target: <0.4 USD)
     * Cost per redemption
   - Revenue impact:
     * Estimated revenue from redemptions
     * Customer lifetime value uplift
     * ROI percentage
   - Efficiency metrics:
     * Campaign reach vs target
     * Redemption rate by location
     * Time to redemption distribution

4. **Geographic và Demographic Analysis**
   - Location performance:
     * Top performing locations
     * Geographic heat map
     * Urban vs suburban performance
   - User demographics:
     * Age group breakdown
     * Gender distribution
     * User preferences trends
   - Time-based analysis:
     * Peak activity hours
     * Day of week patterns
     * Seasonal trends

5. **Interactive Dashboard Features**
   - Drill-down capabilities:
     * Click location để xem chi tiết
     * Filter theo demographics
     * Compare multiple campaigns
   - Real-time updates (refresh every 5 minutes)
   - Custom date range selection
   - Save favorite views

6. **Export và Reporting**
   - Quick export options:
     * CSV cho raw data
     * Excel với charts
     * PDF executive summary
   - Scheduled reports:
     * Daily/weekly/monthly automation
     * Email delivery đến stakeholders
   - API access cho custom integrations

### 9.8.4 Alternative Flows

**A1: Insufficient data**
- 2a. Nếu campaign chưa có sufficient data:
  - Show message: "Chưa đủ dữ liệu để hiển thị analytics"
  - Provide estimated time cho meaningful data
  - Show preliminary metrics nếu có
  - Link đến campaign promotion tips

**A2: Data processing delay**
- 2b. Nếu analytics pipeline delayed:
  - Show last update timestamp
  - Display cached data với warning
  - Provide refresh button
  - Estimate real-time data availability

**A3: Export job queue full**
- 6a. Nếu export system overloaded:
  - Show queue position và estimated wait time
  - Option: Priority export (for premium users)
  - Email notification khi ready
  - Download link expiry information

### 9.8.5 Exception Flows

**E1: Analytics service down**
- Nếu analytics service unavailable:
  - Show cached dashboard data
  - Display service status message
  - Provide basic metrics từ primary database
  - Alert operations team

**E2: Large dataset timeout**
- Nếu query timeout cho large campaigns:
  - Suggest narrower date range
  - Offer sampled data analysis
  - Background processing option
  - Pre-aggregated report suggestions

### 9.8.6 Dashboard Components

**Funnel Visualization:**
```javascript
// Funnel chart configuration
const funnelConfig = {
  data: {
    scans: 10000,
    form_submissions: 8500, // 85% conversion
    otp_verifications: 8075, // 95% conversion  
    barcode_assignments: 7912,# 📋 SRS Part09 - Use Case chi tiết (Detailed Use Cases)
**Hệ thống Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  

---

## 9.1 Tổng quan Use Cases

### 9.1.1 Phân loại Use Cases (từ System_Feature_Tree_Grok.md v4.0)
Dựa trên **flow vận hành** và **user stories** trong cây chức năng, hệ thống có 8 use cases chính:

| UC ID | Tên Use Case | Actor chính | Mức độ ưu tiên | Nguồn tham chiếu |
|-------|--------------|-------------|----------------|------------------|
| UC-001 | Tạo và quản lý chiến dịch sampling | Admin/Brand Manager | Cao | Feature Tree 1.1 |
| UC-002 | Quản lý barcode và inventory | Admin/Brand Manager | Cao | Feature Tree 1.2 |
| UC-003 | Khách hàng quét QR và điền form | End User | Cao | Feature Tree 1.3 |
| UC-004 | Xác thực OTP và chống gian lận | End User/System | Cao | Feature Tree 1.4 |
| UC-005 | Cấp phát và quản lý voucher | System/End User | Cao | Feature Tree 1.5 |
| UC-006 | Đổi quà tại điểm bán | Serving Staff/End User | Cao | Feature Tree 1.5 |
| UC-007 | Phân tích và báo cáo chiến dịch | Brand Manager/Admin | Trung bình | Feature Tree 1.6 |
| UC-008 | Quản lý User Portal và hỗ trợ | End User/Admin | Trung bình | Feature Tree 1.9 |

### 9.1.2 Actors và vai trò (từ Access_Control_Tree_Grok.md v2.2)

**Primary Actors:**
- **Admin**: Toàn quyền hệ thống, thiết lập global configs
- **Group Admin**: Quản lý campaigns trong group scope
- **Customer Account (Brand Manager)**: Quản lý campaigns riêng
- **Serving Account**: Staff tại retail nodes, xử lý redemption
- **End User**: Khách hàng cuối sử dụng User Portal
- **Auditor**: Giám sát compliance và audit logs

**Secondary Actors:**
- **SMS/Email Providers**: Twilio, SendGrid
- **CRM Systems**: HubSpot, Salesforce
- **POS Systems**: Circle K, GS25, Mini Stop
- **Analytics Systems**: GA4, Meta Pixel

---

## 9.2 UC-001: Tạo và quản lý chiến dịch sampling

### 9.2.1 Mô tả Use Case
**Mục tiêu**: Admin/Brand Manager tạo và quản lý chiến dịch phân phối mẫu sản phẩm với targeting địa lý, ngân sách và tracking UTM.

**Phạm vi**: Campaign lifecycle từ tạo đến hoàn thành
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Brands, Marketing teams

### 9.2.2 Preconditions
- Actor đã đăng nhập với role Admin, Group Admin hoặc Customer Account
- Có ít nhất 1 location được setup trong hệ thống
- Có barcode pool sẵn sàng để gán (optional cho draft)

### 9.2.3 Main Success Scenario
1. **Actor truy cập Campaign Management**
   - Đăng nhập vào dashboard
   - Navigate đến Campaign Management module
   - System hiển thị danh sách campaigns theo phân quyền

2. **Tạo campaign mới**
   - Click "Tạo Campaign Mới"
   - Điền thông tin cơ bản:
     * Tên campaign (bắt buộc, max 255 chars)
     * Mô tả chi tiết (optional, max 1000 chars)
     * Ngày bắt đầu/kết thúc (validate: end > start, future dates)
   - System validate input và tạo campaign_id duy nhất

3. **Cấu hình targeting và budget**
   - Chọn locations từ dropdown (multi-select)
   - Thiết lập targeting demographics:
     * Age range (13-100)
     * Gender filter (male/female/all)
     * Interests (optional)
   - Cài đặt budget limits:
     * Max participants
     * Total budget
     * Cost per verified lead target (≤ 0.4 USD)

4. **Setup tracking và UTM**
   - Cấu hình UTM parameters:
     * utm_source (e.g., "poster", "flyer")
     * utm_medium (e.g., "qr", "digital")
     * utm_campaign (auto-fill campaign_id)
     * utm_term, utm_content (optional)
   - System generate tracking URLs

5. **Gán barcode pool (optional)**
   - Select từ available barcode batches
   - Hoặc skip để import sau
   - System validate barcode availability

6. **Preview và publish**
   - Review tất cả settings
   - Generate QR codes cho mỗi location
   - Status: Draft → Active
   - System gửi notification đến team

### 9.2.4 Alternative Flows

**A1: Validation errors**
- 2a. Nếu validation thất bại:
  - System hiển thị error messages chi tiết
  - Highlight fields có lỗi
  - Actor sửa và retry
  - Continue từ step 2

**A2: Insufficient permissions**
- 1a. Nếu Customer Account cố tạo Global campaign:
  - System reject với 403 Forbidden
  - Show message "Bạn chỉ có thể tạo campaigns cho brand riêng"
  - Redirect về dashboard

**A3: No available locations**
- 3a. Nếu không có locations available cho user scope:
  - System hiển thị empty state
  - Provide link đến Location Management
  - Suggest contact Admin để setup locations

### 9.2.5 Exception Flows

**E1: System timeout**
- Nếu campaign creation timeout (>30s):
  - System save draft automatically
  - Show "Campaign đã được lưu tạm, bạn có thể tiếp tục sau"
  - Provide link để resume

**E2: Database constraint violation**
- Nếu campaign_id duplicate (rare):
  - System retry với new ID generation
  - Log incident cho investigation
  - Continue normal flow

### 9.2.6 Postconditions
- Campaign được tạo với status "Active" hoặc "Draft"
- QR codes được generate cho mỗi location
- Analytics tracking được setup
- Team notifications được gửi
- Audit log ghi lại campaign creation

### 9.2.7 Special Requirements
- **Performance**: Campaign creation phải hoàn thành trong <2 ngày (business requirement từ System_Feature_Tree_Grok.md 1.1)
- **Security**: Multi-tenant isolation theo tenant_id
- **Audit**: Full audit trail cho compliance
- **UTM accuracy**: 100% tracking accuracy requirement

---

## 9.3 UC-002: Quản lý barcode và inventory

### 9.3.1 Mô tả Use Case
**Mục tiêu**: Admin/Brand Manager import, quản lý và đối soát barcode/voucher với single-use validation và lifecycle tracking.

**Phạm vi**: Barcode lifecycle từ import đến reconciliation
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Brands, Operations team

### 9.3.2 Preconditions
- Actor có quyền barcode.import theo scope (từ Access_Control_Tree_Grok.md 2.2)
- CSV file tuân thủ format: barcode, product_name, expiry_date, value, batch_code
- File size ≤ 100MB, encoding UTF-8

### 9.3.3 Main Success Scenario
1. **Truy cập Barcode Management**
   - Navigate đến Barcode Management module
   - System hiển thị overview: total codes, assigned, redeemed, expired

2. **Chuẩn bị import file**
   - Download CSV template nếu cần
   - Chuẩn bị file với columns bắt buộc:
     * barcode (8-50 chars, alphanumeric)
     * product_name (max 255 chars)
     * expiry_date (ISO date format, future dates only)
     * value (decimal, optional)
     * batch_code (tracking purposes)

3. **Upload và validate file**
   - Click "Import Barcodes"
   - Select campaign để gán (optional)
   - Upload CSV file
   - System validate:
     * File format và encoding
     * Column headers đúng
     * Data types và constraints
     * Barcode uniqueness (global unique)

4. **Preview và confirm import**
   - System hiển thị preview:
     * Total rows: X
     * Valid rows: Y
     * Invalid rows: Z (với error details)
   - Review sample data (first 10 rows)
   - Option: "Validate Only" hoặc "Import"

5. **Process import job**
   - System tạo background job
   - Return job_id cho tracking
   - Process từng row với error handling
   - Update progress real-time

6. **Verify import results**
   - Check job status via job_id
   - Review import summary:
     * Successful imports: X
     * Failed imports: Y với error details
     * Batch_id được tạo
   - Download error report nếu có

### 9.3.4 Alternative Flows

**A1: File validation errors**
- 3a. Nếu file format không hợp lệ:
  - System show detailed error messages
  - Highlight specific issues (missing columns, wrong encoding, etc.)
  - Provide corrected template download
  - Actor fix file và retry

**A2: Duplicate barcodes detected**
- 3b. Nếu có duplicate barcodes trong file hoặc với existing data:
  - System list tất cả duplicates
  - Options: Skip duplicates, Replace existing, Cancel import
  - Actor chọn strategy và continue

**A3: Large file processing**
- 4a. Nếu file >10K rows:
  - System suggest batch processing
  - Option: Split file thành smaller batches
  - Process từng batch sequentially

### 9.3.5 Exception Flows

**E1: Import job failure**
- Nếu background job failed:
  - System retry automatically (max 3 times)
  - Log detailed error cho debugging
  - Notify Actor về failure với error summary
  - Option: Download partial results nếu có

**E2: Database timeout**
- Nếu large batch insert timeout:
  - System switch sang chunked processing
  - Continue từ last successful chunk
  - Show progress với estimated completion time

### 9.3.6 Barcode Lifecycle Management

**Trạng thái lifecycle (từ System_Feature_Tree_Grok.md 1.2):**
```
Available → Assigned → Redeemed
    ↓           ↓         ↓
  Expired    Expired   [Final]
    ↓           ↓
 Revoked    Revoked
```

**State transition rules:**
- Available → Assigned: Khi user verify OTP
- Assigned → Redeemed: Khi scan tại POS
- Any → Expired: Khi qua expiry_date
- Any → Revoked: Manual admin action (fraud cases)

### 9.3.7 Reconciliation Process

**Daily reconciliation workflow:**
1. **System auto-check expiry**
   - Cron job chạy daily 2AM
   - Update status Available/Assigned → Expired nếu qua expiry_date
   - Generate expiry report

2. **Manual reconciliation**
   - Admin import redemption logs từ external systems
   - Cross-reference với internal redemption data
   - Identify discrepancies
   - Generate reconciliation report

3. **Inventory accuracy check**
   - Compare database counts với physical inventory
   - Flag discrepancies >5% cho investigation
   - Update inventory adjustments nếu cần

### 9.3.8 Postconditions
- Barcodes imported với status "Available"
- Batch record created với tracking info
- Inventory counts updated
- Import job log saved với full audit trail
- Notifications sent cho relevant stakeholders

### 9.3.9 Special Requirements
- **Performance**: Import <10MB file trong <30 giây
- **Accuracy**: 100% barcode uniqueness enforcement
- **Inventory**: >95% accuracy requirement
- **Audit**: Immutable audit trail cho compliance

---

## 9.4 UC-003: Khách hàng quét QR và điền form

### 9.4.1 Mô tả Use Case
**Mục tiêu**: End user quét QR code từ ads format, truy cập landing page và điền form thu thập dữ liệu với quiz preferences.

**Phạm vi**: User journey từ QR scan đến form submission
**Mức độ**: Chức năng chính (primary)  
**Stakeholder**: End users, Brands

### 9.4.2 Preconditions
- Campaign đang active (status = "active")
- QR code hợp lệ và chưa expired
- User có smartphone/device với camera
- Landing page accessible (99.9% uptime requirement)

### 9.4.3 Main Success Scenario

1. **Quét QR code**
   - User thấy ads format (poster, flyer, digital banner) tại location
   - Mở camera app hoặc QR scanner
   - Quét QR code trên ads
   - System redirect đến landing page với campaign_id, location_id, ads_format_id trong URL

2. **Load landing page**
   - System load landing page responsive (<2 giây trên mobile 3G)
   - Hiển thị campaign info:
     * Product image và description
     * Brand information
     * Value proposition
     * Terms & conditions link
   - Track analytics event: "qr_scan"

3. **Điền form thông tin cơ bản**
   - Form với fields bắt buộc:
     * Họ tên (validation: không chứa số)
     * Email (validation: format email hợp lệ)
     * Số điện thoại (validation: VN format +84...)
   - Fields optional:
     * Tuổi (dropdown: <18, 18-24, 25-34, 35-44, 45-54, 55+)
     * Giới tính (radio: Nam/Nữ/Khác)
     * Thành phố (dropdown: major cities)

4. **Tham gia quiz preferences**
   - System hiển thị 5-10 câu hỏi multiple choice:
     * "Bạn thường mua sắm ở đâu?" (Online/Store/Both)
     * "Loại sản phẩm yêu thích?" (Food/Beauty/Tech/Fashion)
     * "Frequency of trying new products?" (Weekly/Monthly/Rarely)
     * "Preferred communication channel?" (SMS/Email/Social)
   - Each answer có scoring để build user profile

5. **Chấp nhận terms và consent**
   - Checkboxes bắt buộc:
     * "Tôi đồng ý với Terms & Conditions"
     * "Tôi đồng ý xử lý dữ liệu cá nhân theo GDPR/PDPA"
   - Checkboxes optional:
     * "Nhận thông tin marketing qua email"
     * "Nhận thông tin marketing qua SMS"
     * "Chia sẻ data với partners"

6. **Submit form với reCAPTCHA**
   - System validate tất cả required fields
   - reCAPTCHA v3 validation (score >0.5)
   - Track analytics event: "form_submit"
   - Show loading spinner

7. **Xử lý submission**
   - System hash PII data (phone, email)
   - Encrypt sensitive fields (name, preferences)
   - Store trong database với consent flags
   - Generate session_id cho OTP step
   - Redirect đến OTP verification page

### 9.4.4 Alternative Flows

**A1: Form validation errors**
- 6a. Nếu có validation errors:
  - Highlight fields có lỗi với error messages
  - Scroll đến field đầu tiên có lỗi
  - Keep existing data trong form
  - User fix errors và re-submit

**A2: Campaign inactive/expired**
- 1a. Nếu campaign không active:
  - Show message "Campaign đã kết thúc"
  - Provide link đến other active campaigns
  - Track event: "campaign_expired_access"

**A3: Location restriction**
- 1b. Nếu user location không match campaign targeting:
  - Show message "Campaign không available tại khu vực này"
  - Suggest nearby locations nếu có
  - Option: Continue anyway với warning

**A4: reCAPTCHA failed**
- 6b. Nếu reCAPTCHA score <0.5:
  - Show traditional CAPTCHA challenge
  - User solve CAPTCHA
  - Re-validate và continue

### 9.4.5 Exception Flows

**E1: Network connectivity issues**
- Nếu form submit failed do network:
  - Auto-save form data locally (localStorage)
  - Show retry button
  - Auto-retry khi connection restored
  - Prevent data loss

**E2: Server overload**
- Nếu server response >10 giây:
  - Show "High traffic, please wait" message
  - Implement queue system
  - Provide estimated wait time
  - Option: Get notified when ready

### 9.4.6 User Experience Requirements

**Performance targets (từ System_Feature_Tree_Grok.md 1.3):**
- Landing page load: <2 giây trên mobile 3G
- Form completion time: <30 giây average
- Form completion rate: >90%
- Data quality score: >95%

**Responsive design:**
- Mobile-first PWA design
- Touch-friendly inputs
- Auto-complete enabled
- Keyboard optimization
- Accessibility WCAG 2.1 AA compliant

**Progressive disclosure:**
- Show form steps progressively
- Progress indicator (Step 1/3)
- Save progress locally
- Clear next step instructions

### 9.4.7 Data Collection Strategy

**Profile scoring algorithm:**
```python
def calculate_profile_score(quiz_responses):
    score = 0
    
    # Shopping frequency (0-20 points)
    if quiz_responses.get('shopping_frequency') == 'weekly':
        score += 20
    elif quiz_responses.get('shopping_frequency') == 'monthly':
        score += 10
    
    # Product trial willingness (0-25 points)
    if quiz_responses.get('try_new_products') == 'always':
        score += 25
    elif quiz_responses.get('try_new_products') == 'sometimes':
        score += 15
    
    # Brand loyalty (0-15 points)
    if quiz_responses.get('brand_loyalty') == 'low':
        score += 15  # More likely to try new brands
    
    # Communication preference (0-10 points)
    if quiz_responses.get('communication') in ['email', 'sms']:
        score += 10
    
    return min(score, 100)  # Cap at 100
```

### 9.4.8 Analytics Tracking

**Events tracked:**
```javascript
// GA4 event tracking
gtag('event', 'qr_scan', {
  campaign_id: 'CAMP_2025_001',
  location_id: 'HCM_CIRCLE_K_001',
  ads_format_id: 'POSTER_A4_001',
  user_agent: navigator.userAgent,
  timestamp: new Date().toISOString()
});

gtag('event', 'form_start', {
  campaign_id: 'CAMP_2025_001',
  form_version: 'v1.2'
});

gtag('event', 'form_submit', {
  campaign_id: 'CAMP_2025_001', 
  completion_time: 45, // seconds
  quiz_completed: true,
  consent_marketing: true
});
```

### 9.4.9 Postconditions
- User profile created với encrypted PII
- Quiz responses scored và stored
- Consent preferences recorded
- Analytics events tracked
- Session prepared cho OTP verification
- User redirected đến OTP page

### 9.4.10 Special Requirements
- **GDPR/PDPA Compliance**: Explicit consent collection
- **Data Quality**: >95% valid data requirement
- **Fraud Prevention**: reCAPTCHA và device fingerprinting
- **Accessibility**: Support screen readers và keyboard navigation

---

## 9.5 UC-004: Xác thực OTP và chống gian lận

### 9.5.1 Mô tả Use Case
**Mục tiêu**: System gửi và verify OTP code để xác thực user thật, kết hợp với fraud detection để chống spam và bot attacks.

**Phạm vi**: OTP generation, delivery, verification và fraud prevention
**Mức độ**: Chức năng quan trọng (critical)
**Stakeholder**: End users, Security team

### 9.5.2 Preconditions
- User đã complete form submission (UC-003)
- Phone/email đã được validate format
- Session_id hợp lệ từ form submission
- SMS/Email providers (Twilio/SendGrid) online

### 9.5.3 Main Success Scenario

1. **Generate và gửi OTP**
   - System receive OTP request với session_id
   - Validate session (không expired, chưa verified)
   - Generate 6-digit random code
   - Store trong Redis với TTL 5 phút
   - Determine delivery method (SMS priority, email fallback)

2. **Fraud detection pre-check**
   - Check rate limiting rules:
     * Max 10 OTP requests/24h per phone number
     * Max 3 requests/hour per session
     * Max 100 requests/hour per IP
   - Device fingerprinting analysis
   - Disposable email detection
   - VPN/proxy detection

3. **Deliver OTP message**
   - SMS via Twilio: "Mã xác thực của bạn: {code}. Có hiệu lực trong 5 phút."
   - Email template với branding và instructions
   - Track delivery status (sent/delivered/failed)
   - Start 5-minute countdown timer

4. **User nhập OTP code**
   - User receive SMS/email
   - Enter 6-digit code trong form
   - System validate format (numeric, 6 digits)
   - Submit verification request

5. **Verify OTP code**
   - Validate session_id và OTP code
   - Check expiration (5 phút window)
   - Compare với stored code trong Redis
   - Track attempt count (max 3 attempts)

6. **Successful verification**
   - Mark session as verified
   - Generate user_token cho barcode assignment
   - Clear OTP từ Redis
   - Track analytics: "otp_verified"
   - Redirect đến barcode assignment page

### 9.5.4 Alternative Flows

**A1: Invalid OTP code**
- 5a. Nếu OTP code sai:
  - Increment attempt counter
  - Show error: "Mã OTP không đúng"
  - Display attempts remaining (3-current_attempts)
  - If attempts < 3: Allow retry
  - If attempts = 3: Block session, require new OTP

**A2: Expired OTP**
- 5b. Nếu OTP đã expired (>5 phút):
  - Show error: "Mã OTP đã hết hạn"
  - Clear expired code từ Redis
  - Show "Gửi lại OTP" button
  - User click để request new OTP

**A3: Rate limit exceeded**
- 1a. Nếu vượt rate limit:
  - Show error: "Bạn đã yêu cầu quá nhiều OTP. Vui lòng thử lại sau X phút"
  - Display countdown timer
  - Block new requests until cooldown
  - Log suspicious activity

**A4: SMS delivery failed**
- 3a. Nếu SMS failed (network issue, invalid number):
  - Auto-fallback sang email delivery
  - Update delivery method trong session
  - Show message: "SMS không thể gửi, đã gửi qua email"
  - Continue normal flow

**A5: Disposable email detected**
- 2a. Nếu detect disposable email:
  - Require phone verification thay vì email
  - Show message: "Vui lòng sử dụng email thường xuyên"
  - Option: Update email address

### 9.5.5 Exception Flows

**E1: All delivery methods failed**
- Nếu cả SMS và email đều failed:
  - Log critical error cho investigation
  - Show fallback message: "Hệ thống đang bảo trì, vui lòng thử lại sau"
  - Queue retry job cho later processing
  - Notify operations team

**E2: Redis unavailable**
- Nếu Redis cache down:
  - Fallback sang database storage
  - Continue OTP flow với slightly higher latency
  - Alert DevOps team để fix Redis

### 9.5.6 Fraud Detection Rules

**Velocity checks:**
```python
class FraudDetection:
    def check_otp_velocity(self, phone_number, ip_address):
        rules = [
            # Phone-based limits
            ("phone_hourly", phone_number, 3, 3600),
            ("phone_daily", phone_number, 10, 86400),
            
            # IP-based limits  
            ("ip_hourly", ip_address, 100, 3600),
            ("ip_daily", ip_address, 1000, 86400),
        ]
        
        for rule_name, identifier, limit, window in rules:
            count = redis.get(f"rate_limit:{rule_name}:{identifier}") or 0
            if int(count) >= limit:
                return False, f"Rate limit exceeded for {rule_name}"
        
        return True, None
    
    def check_suspicious_patterns(self, request_data):
        suspicion_score = 0
        
        # Check device fingerprint
        if self.is_known_bot_signature(request_data.user_agent):
            suspicion_score += 50
        
        # Check request timing patterns
        if self.detect_automated_timing(request_data.session_id):
            suspicion_score += 30
        
        # Check geolocation inconsistency
        if self.detect_geo_impossible_travel(request_data.ip_address):
            suspicion_score += 40
        
        return suspicion_score > 70  # Threshold for blocking
```

**Device fingerprinting:**
```javascript
// Client-side fingerprinting
function generateDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    
    const fingerprint = {
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: navigator.platform,
        canvas_hash: btoa(canvas.toDataURL()),
        user_agent_hash: btoa(navigator.userAgent).substring(0, 32)
    };
    
    return btoa(JSON.stringify(fingerprint));
}
```

### 9.5.7 Performance Requirements

**Delivery SLA (từ System_Feature_Tree_Grok.md 1.4):**
- OTP delivery time: <30 giây
- Verification success rate: >95%
- Fraud detection accuracy: >90%
- System response time: <3 giây

**Scalability:**
- Support 20,000 OTP requests/phút during peak
- Redis TTL management cho memory efficiency
- Auto-scaling SMS/email provider capacity

### 9.5.8 Security Measures

**OTP generation security:**
```python
import secrets
import hashlib

def generate_secure_otp():
    # Use cryptographically secure random
    code = secrets.randbelow(1000000)
    return f"{code:06d}"  # Pad with leading zeros

def hash_otp_for_storage(otp_code, session_id):
    # Hash OTP before storing in Redis
    combined = f"{otp_code}:{session_id}"
    return hashlib.sha256(combined.encode()).hexdigest()
```

**Anti-enumeration measures:**
- Constant-time comparison cho OTP validation
- No difference trong response time between valid/invalid codes
- Rate limiting applies even for valid attempts
- Log all verification attempts cho fraud analysis

### 9.5.9 Monitoring và Alerting

**Key metrics to monitor:**
```yaml
otp_metrics:
  delivery_rate:
    sms_success_rate: ">95%"
    email_success_rate: ">98%"
    delivery_time_p95: "<30s"
  
  verification_rate:
    first_attempt_success: ">85%"
    overall_success_rate: ">95%"
    
  fraud_detection:
    blocked_attempts_ratio: "<5%"
    false_positive_rate: "<1%"
    
  system_health:
    redis_availability: ">99.9%"
    provider_uptime: ">99.5%"
```

**Alerting rules:**
- SMS delivery rate <90% → Alert SMS team
- Fraud detection spike >10% → Alert security team
- OTP delivery time >60s → Alert infrastructure team

### 9.5.10 Postconditions
- User successfully verified với valid phone/email
- Session marked as verified trong database
- User_token generated cho next step
- Fraud score calculated và stored
- Analytics events logged
- Rate limiting counters updated

### 9.5.11 Special Requirements
- **Zero false positives** cho legitimate users
- **Fraud rate <5%** requirement
- **GDPR compliance** cho data retention
- **Telco compliance** cho SMS regulations

---

## 9.6 UC-005: Cấp phát và quản lý voucher

### 9.6.1 Mô tả Use Case
**Mục tiêu**: System tự động gán barcode từ available pool cho user đã verified, với personalization dựa trên preferences và support mobile wallet integration.

**Phạm vi**: Barcode assignment từ pool đến user delivery
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: End users, Brands

### 9.6.2 Preconditions
- User đã verify OTP thành công (UC-004)
- User_token hợp lệ và chưa expired
- Campaign có available barcodes trong pool
- Barcode pool chưa exhausted
- Mobile wallet services (Apple Wallet/Google Pay) available

### 9.6.3 Main Success Scenario

1. **Receive barcode assignment request**
   - User redirect từ OTP verification với user_token
   - System validate user_token (signature, expiration)
   - Extract campaign_id, user_preferences từ token
   - Check campaign status (still active, not expired)

2. **Select optimal barcode từ pool**
   - Query available barcodes trong campaign pool
   - Apply personalization logic:
     * Match product variant với user preferences
     * Consider location proximity cho redemption
     * Check expiry dates (prioritize shorter expiry)
     * Apply any business rules (VIP users, etc.)

3. **Atomic barcode assignment**
   - Begin database transaction
   - Lock selected barcode row
   - Update status: Available → Assigned
   - Store assignment metadata:
     * assigned_to_user_hash (SHA-256 của phone/email)
     * assigned_at timestamp
     * assignment_campaign_id
     * user_preferences_snapshot
   - Commit transaction

4. **Generate delivery assets**
   - Create QR code image (PNG, 300x300px)
   - Generate PDF voucher với branding
   - Create Apple Wallet pass (.pkpass file)
   - Generate Google Pay pass URL
   - Prepare redemption instructions

5. **Deliver barcode đến user**
   - Primary method: Display trong browser với QR code
   - Secondary: SMS với download link
   - Optional: Email với PDF attachment
   - Mobile wallet: Show "Add to Wallet" buttons
   - Link đến User Portal cho future access

6. **Update analytics và notifications**
   - Track event: "barcode_assigned"
   - Update campaign metrics (assigned_codes count)
   - Send success notification đến user
   - Queue background jobs (CRM sync, analytics processing)

### 9.6.4 Alternative Flows

**A1: No available barcodes**
- 2a. Nếu campaign pool exhausted:
  - Check other campaigns từ same brand
  - Show waitlist signup option
  - Offer alternative products/campaigns
  - Notify brand về inventory shortage

**A2: Personalization engine không tìm được match**
- 2b. Nếu không có barcode match user preferences:
  - Fall back sang random assignment từ available pool
  - Log mismatch cho future optimization
  - Continue normal flow

**A3: User đã receive barcode cho campaign này**
- 1a. Nếu detect duplicate assignment:
  - Check existing assignment status
  - If still valid: Redirect đến existing barcode display
  - If expired: Allow new assignment
  - If redeemed: Show completion message

**A4: Mobile wallet generation failed**
- 4a. Nếu Apple Wallet/Google Pay API failed:
  - Continue với QR code và PDF
  - Show message: "Mobile wallet tạm thời không khả dụng"
  - Provide manual add instructions

### 9.6.5 Exception Flows

**E1: Database transaction failed**
- Nếu assignment transaction failed:
  - Rollback transaction
  - Log error details cho investigation
  - Retry với different barcode (up to 3 times)
  - If all retries failed: Show error page với support contact

**E2: QR code generation service down**
- Nếu QR generation failed:
  - Fall back sang text-based barcode display
  - Queue QR generation job cho later processing
  - Email QR code khi ready

### 9.6.6 Personalization Algorithm

**Barcode selection logic:**
```python
class BarcodePersonalization:
    def select_optimal_barcode(self, user_preferences, available_barcodes):
        scored_barcodes = []
        
        for barcode in available_barcodes:
            score = 0
            
            # Product category matching (0-40 points)
            if barcode.product_category in user_preferences.get('categories', []):
                score += 40
            
            # Location proximity (0-20 points)
            user_location = user_preferences.get('city')
            if barcode.preferred_locations and user_location:
                if user_location in barcode.preferred_locations:
                    score += 20
            
            # Expiry urgency (0-15 points)
            days_to_expiry = (barcode.expires_at - datetime.now()).days
            if days_to_expiry <= 30:
                score += 15  # Prioritize soon-to-expire items
            elif days_to_expiry <= 60:
                score += 10
            
            # Dietary restrictions (0-25 points)
            user_restrictions = user_preferences.get('dietary_restrictions', [])
            if not any(restriction in barcode.ingredients for restriction in user_restrictions):
                score += 25
            
            scored_barcodes.append((barcode, score))
        
        # Sort by score descending, return top match
        scored_barcodes.sort(key=lambda x: x[1], reverse=True)
        return scored_barcodes[0][0] if scored_barcodes else None
```

### 9.6.7 Mobile Wallet Integration

**Apple Wallet Pass Generation:**
```python
import passbook

def create_apple_wallet_pass(barcode_data, user_info):
    # Create pass structure
    pass_info = {
        'passTypeIdentifier': 'pass.com.productsampling.voucher',
        'serialNumber': barcode_data.barcode_id,
        'teamIdentifier': 'TEAM_ID',
        'organizationName': barcode_data.brand_name,
        'description': f'Voucher cho {barcode_data.product_name}',
        'formatVersion': 1,
        'backgroundColor': 'rgb(60, 165, 255)',
        'foregroundColor': 'rgb(255, 255, 255)',
        'barcode': {
            'format': 'PKBarcodeFormatQR',
            'message': barcode_data.barcode_value,
            'messageEncoding': 'iso-8859-1'
        },
        'generic': {
            'primaryFields': [{
                'key': 'product',
                'label': 'Sản phẩm',
                'value': barcode_data.product_name
            }],
            'secondaryFields': [{
                'key': 'expires',
                'label': 'Hết hạn',
                'value': barcode_data.expires_at.strftime('%d/%m/%Y')
            }],
            'auxiliaryFields': [{
                'key': 'instructions',
                'label': 'Hướng dẫn',
                'value': 'Quét mã tại cửa hàng để nhận quà'
            }]
        },
        'locations': [
            {
                'latitude': location.latitude,
                'longitude': location.longitude,
                'relevantText': f'Đổi quà tại {location.name}'
            } for location in barcode_data.redemption_locations
        ]
    }
    
    # Generate signed .pkpass file
    pass_file = passbook.Pass(pass_info, key='private_key.pem', cert='certificate.pem')
    return pass_file.create()
```

**Google Pay Integration:**
```python
def create_google_pay_pass(barcode_data):
    pass_object = {
        'kind': 'walletobjects#genericObject',
        'id': f'voucher_{barcode_data.barcode_id}',
        'classId': 'ISSUER_ID.voucher_class',
        'genericType': 'GENERIC_TYPE_UNSPECIFIED',
        'hexBackgroundColor': '#3CA5FF',
        'logo': {
            'sourceUri': {
                'uri': 'https://brand.com/logo.png'
            }
        },
        'cardTitle': {
            'defaultValue': {
                'language': 'vi',
                'value': barcode_data.product_name
            }
        },
        'subheader': {
            'defaultValue': {
                'language': 'vi', 
                'value': 'Voucher dùng thử'
            }
        },
        'header': {
            'defaultValue': {
                'language': 'vi',
                'value': barcode_data.brand_name
            }
        },
        'barcode': {
            'type': 'QR_CODE',
            'value': barcode_data.barcode_value
        },
        'heroImage': {
            'sourceUri': {
                'uri': barcode_data.product_image_url
            }
        }
    }
    
    return generate_google_pay_url(pass_object)
```

### 9.6.8 User Portal Integration

**Redirect đến User Portal:**
```javascript
// After successful barcode assignment
function redirectToUserPortal(barcode_data) {
    const portal_url = `https://portal.productsampling.com/dashboard`;
    const params = new URLSearchParams({
        barcode_id: barcode_data.barcode_id,
        first_time: 'true',
        source: 'assignment'
    });
    
    // Store barcode info trong localStorage cho offline access
    localStorage.setItem('latest_barcode', JSON.stringify({
        barcode_id: barcode_data.barcode_id,
        product_name: barcode_data.product_name,
        expires_at: barcode_data.expires_at,
        qr_code_url: barcode_data.qr_code_url
    }));
    
    window.location.href = `${portal_url}?${params.toString()}`;
}
```

### 9.6.9 Performance Requirements

**Assignment SLA (từ System_Feature_Tree_Grok.md 1.5):**
- Assignment time: <2 giây post-verification
- QR generation: <5 giây
- Mobile wallet generation: <10 giây
- 100% barcode uniqueness guarantee

**Concurrency handling:**
- Handle 1000 simultaneous assignments
- Optimistic locking cho barcode selection
- Retry logic cho race conditions
- Queue overflow protection

### 9.6.10 Analytics và Tracking

**Assignment metrics:**
```python
def track_assignment_analytics(barcode_data, user_data, assignment_context):
    analytics_event = {
        'event_type': 'barcode_assigned',
        'timestamp': datetime.now().isoformat(),
        'campaign_id': barcode_data.campaign_id,
        'barcode_id': barcode_data.barcode_id,
        'user_id_hash': hashlib.sha256(user_data.phone.encode()).hexdigest(),
        'assignment_method': assignment_context.method,  # 'automatic', 'manual', 'waitlist'
        'personalization_score': assignment_context.personalization_score,
        'time_from_verification': assignment_context.verification_delay_seconds,
        'delivery_methods': assignment_context.delivery_methods,  # ['qr', 'sms', 'email', 'wallet']
        'location_context': {
            'user_city': user_data.city,
            'nearest_redemption_location': barcode_data.nearest_location,
            'distance_km': barcode_data.distance_to_nearest
        }
    }
    
    # Send to analytics pipeline
    send_to_analytics_pipeline(analytics_event)
    
    # Update campaign metrics
    update_campaign_metrics(barcode_data.campaign_id, {
        'total_assignments': '+1',
        'assignments_today': '+1',
        'personalization_success_rate': calculate_personalization_success_rate()
    })
```

### 9.6.11 Postconditions
- Barcode status updated: Available → Assigned
- User receives barcode qua multiple channels
- Assignment logged trong audit trail
- Campaign metrics updated
- User Portal session initialized
- Mobile wallet passes generated (if requested)
- Analytics events tracked
- CRM sync queued

### 9.6.12 Special Requirements
- **Atomicity**: Zero double-assignment guarantee
- **Personalization**: >80% user satisfaction với matches
- **Mobile-first**: PWA-optimized delivery experience
- **Offline support**: QR codes work without internet

---

## 9.7 UC-006: Đổi quà tại điểm bán

### 9.7.1 Mô tả Use Case
**Mục tiêu**: Serving Account (staff) tại retail location scan barcode của customer để validate và complete redemption process với offline capability.

**Phạm vi**: POS redemption từ scan đến completion
**Mức độ**: Chức năng chính (primary)
**Stakeholder**: Store staff, End users, Retail partners

### 9.7.2 Preconditions
- Serving Account đã login với POS access permissions
- Barcode status = "Assigned" và chưa expired
- Staff có device với camera hoặc barcode scanner
- Location có POS integration setup
- Customer present tại store với barcode

### 9.7.3 Main Success Scenario

1. **Staff chuẩn bị redemption**
   - Login vào POS tool hoặc web interface
   - Select location (auto-detect hoặc manual)
   - Verify staff_id và shift information
   - Load redemption interface

2. **Scan customer barcode**
   - Customer show barcode (QR code, Apple Wallet, printed voucher)
   - Staff scan bằng camera app hoặc barcode scanner
   - System capture barcode_value và timestamp
   - Validate barcode format (alphanumeric, length)

3. **Validate barcode eligibility**
   - System lookup barcode trong database
   - Check barcode status (must be "Assigned")
   - Verify expiry date (chưa expired)
   - Confirm location permissions (store có thể redeem này không)
   - Check business hours restrictions

4. **Display redemption preview**
   - Show product information:
     * Product name và description
     * Brand information
     * Campaign name
     * Assigned user (masked): "+84***123456"
     * Expiry date
   - Show redemption confirmation screen
   - Provide "Confirm Redemption" button

5. **Complete redemption process**
   - Staff confirm redemption
   - System begin atomic transaction:
     * Update barcode status: Assigned → Redeemed
     * Record redemption details (timestamp, location, staff)
     * Update campaign statistics
     * Generate receipt/confirmation
   - Commit transaction

6. **Provide confirmation**
   - Show success message với receipt number
   - Display redemption summary
   - Option: Print receipt (if printer available)
   - Update staff dashboard statistics
   - Send confirmation đến customer (if contact available)

### 9.7.4 Alternative Flows

**A1: Invalid barcode**
- 3a. Nếu barcode không tồn tại:
  - Show error: "Mã barcode không hợp lệ"
  - Suggest re-scan hoặc manual entry
  - Option: Report counterfeit barcode
  - Log suspicious activity

**A2: Already redeemed barcode**
- 3b. Nếu barcode đã redeemed:
  - Show error: "Mã này đã được sử dụng"
  - Display previous redemption info:
    * Redeemed date/time
    * Location name
    * Staff who processed
  - Option: Contact support nếu customer khiếu nại

**A3: Expired barcode**
- 3c. Nếu barcode đã expired:
  - Show error: "Mã đã hết hạn vào [date]"
  - Check if expiry extension possible
  - Contact manager approval nếu cần
  - Document exception nếu approved

**A4: Location restriction**
- 3d. Nếu barcode không thể redeem tại location này:
  - Show error: "Mã này chỉ có thể đổi tại: [location_list]"
  - Provide directions đến valid locations
  - Option: Manager override với reason

**A5: Network connectivity issues**
- Nếu device offline:
  - Switch sang offline mode
  - Store redemption locally (IndexedDB)
  - Show "Offline - will sync when connected"
  - Process redemption based on local cache
  - Auto-sync khi connection restored

### 9.7.5 Exception Flows

**E1: Database unavailable**
- Nếu central database down:
  - Fall back sang local verification
  - Use cached valid barcode list
  - Mark redemption as "pending_sync"
  - Queue for reconciliation later

**E2: Barcode scanner malfunction**
- Nếu camera/scanner không work:
  - Allow manual barcode entry
  - Implement extra validation (checksum)
  - Log manual entries cho audit
  - Alert IT support về hardware issue

### 9.7.6 Offline Capability

**Local storage strategy:**
```javascript
// IndexedDB schema cho offline redemptions
const offlineSchema = {
  stores: ['redemptions', 'valid_barcodes', 'sync_queue'],
  redemptions: {
    keyPath: 'redemption_id',
    indexes: ['barcode_value', 'timestamp', 'sync_status']
  },
  valid_barcodes: {
    keyPath: 'barcode_value', 
    indexes: ['campaign_id', 'expires_at', 'status']
  }
};

// Offline redemption process
class OfflineRedemption {
  async processRedemption(barcode_value, staff_id, location_id) {
    // Check local valid barcode cache
    const barcode = await this.lookupLocalBarcode(barcode_value);
    if (!barcode || barcode.status !== 'assigned') {
      throw new Error('Invalid barcode or already used');
    }
    
    // Create offline redemption record
    const redemption = {
      redemption_id: this.generateOfflineId(),
      barcode_value: barcode_value,
      staff_id: staff_id,
      location_id: location_id,
      timestamp: new Date().toISOString(),
      sync_status: 'pending',
      offline_processed: true
    };
    
    // Store locally
    await this.storeOfflineRedemption(redemption);
    
    // Update local barcode status
    await this.updateLocalBarcodeStatus(barcode_value, 'redeemed');
    
    return redemption;
  }
  
  async syncWhenOnline() {
    const pending = await this.getPendingRedemptions();
    for (const redemption of pending) {
      try {
        await this.syncRedemptionToServer(redemption);
        await this.markAsSynced(redemption.redemption_id);
      } catch (error) {
        // Handle sync conflicts
        await this.handleSyncConflict(redemption, error);
      }
    }
  }
}
```

### 9.7.7 POS Integration Variants

**Web-based POS tool:**
- Responsive web app works on tablets/phones
- Barcode scanning via camera API
- Works với or without dedicated scanner hardware
- Real-time sync với central database

**API integration với existing POS systems:**
```python
# Circle K POS Integration
class CircleKPOSAdapter:
    def __init__(self, api_endpoint, api_key):
        self.endpoint = api_endpoint
        self.api_key = api_key
    
    def validate_redemption(self, barcode, store_id):
        # Call Circle K validation API
        response = requests.post(f"{self.endpoint}/validate", {
            'barcode': barcode,
            'store_id': store_id,
            'api_key': self.api_key
        })
        return response.json()
    
    def complete_redemption(self, barcode, transaction_id):
        # Mark as redeemed trong Circle K system
        response = requests.post(f"{self.endpoint}/redeem", {
            'barcode': barcode,
            'transaction_id': transaction_id,
            'api_key': self.api_key
        })
        return response.json()

# GS25 POS Integration  
class GS25POSAdapter:
    def process_redemption(self, barcode_data):
        # Different API structure for GS25
        # Handle format differences và error codes
        pass
```

### 9.7.8 Fraud Prevention

**Redemption validation rules:**
```python
class RedemptionValidator:
    def validate_redemption(self, barcode, location, staff, timestamp):
        checks = []
        
        # Time-based validation
        if self.is_outside_business_hours(location, timestamp):
            checks.append("Redemption outside business hours")
        
        # Location validation
        if not self.is_valid_location_for_barcode(barcode, location):
            checks.append("Invalid location for this barcode")
        
        # Staff validation
        if not self.is_staff_authorized(staff, location):
            checks.append("Staff not authorized for this location")
        
        # Velocity checks
        if self.detect_rapid_redemptions(staff, timestamp):
            checks.append("Suspicious redemption velocity")
        
        # Geographic impossibility
        if self.detect_impossible_travel(barcode.last_activity, location, timestamp):
            checks.append("Impossible travel between activities")
        
        return len(checks) == 0, checks
```

### 9.7.9 Receipt và Confirmation

**Receipt template:**
```
=================================
    [BRAND LOGO]
=================================
VOUCHER REDEMPTION RECEIPT

Product: [PRODUCT_NAME]
Campaign: [CAMPAIGN_NAME]
Barcode: [BARCODE_VALUE]

Redeemed at: [LOCATION_NAME]
Address: [LOCATION_ADDRESS]
Date: [DATE] [TIME]
Staff: [STAFF_NAME]

Receipt #: [RECEIPT_NUMBER]

Thank you for participating!
Visit: portal.productsampling.com
for more offers.
=================================
```

**Digital confirmation:**
```python
def send_redemption_confirmation(redemption_data):
    # SMS confirmation
    if redemption_data.user_phone:
        message = f"Bạn đã đổi thành công {redemption_data.product_name} tại {redemption_data.location_name}. Cảm ơn bạn đã tham gia!"
        send_sms(redemption_data.user_phone, message)
    
    # Email confirmation với receipt
    if redemption_data.user_email:
        send_email_receipt(redemption_data.user_email, redemption_data)
    
    # User Portal notification
    create_portal_notification(redemption_data.user_id, {
        'type': 'redemption_success',
        'product_name': redemption_data.product_name,
        'location': redemption_data.location_name,
        'timestamp': redemption_data.timestamp
    })
```

### 9.7.10 Performance Requirements

**Redemption SLA (từ System_Feature_Tree_Grok.md 1.5):**
- Scan validation: <3 giây
- Redemption completion: <5 giây total
- Offline sync: 24-hour capability
- Success rate: >98%

**Concurrent redemptions:**
- Support 100 simultaneous redemptions per location
- Handle peak times (lunch hours, weekends)
- Queue management cho high traffic

### 9.7.11 Analytics và Reporting

**Real-time redemption tracking:**
```python
def track_redemption_analytics(redemption_data):
    analytics_event = {
        'event_type': 'redemption_completed',
        'timestamp': redemption_data.timestamp,
        'campaign_id': redemption_data.campaign_id,
        'location_id': redemption_data.location_id,
        'staff_id': redemption_data.staff_id,
        'processing_time_seconds': redemption_data.processing_time,
        'redemption_method': redemption_data.method,  # 'scan', 'manual_entry'
        'offline_processed': redemption_data.offline,
        'time_from_assignment_hours': redemption_data.assignment_delay,
        'day_of_week': redemption_data.timestamp.strftime('%A'),
        'hour_of_day': redemption_data.timestamp.hour
    }
    
    # Update real-time dashboards
    update_location_dashboard(redemption_data.location_id, analytics_event)
    update_campaign_dashboard(redemption_data.campaign_id, analytics_event)
    
    # Send to data warehouse
    send_to_analytics_pipeline(analytics_event)
```

### 9.7.12 Postconditions
- Barcode status updated: Assigned → Redeemed
- Redemption record created với audit trail
- Campaign statistics updated
- Customer confirmation sent
- Receipt generated
- Staff dashboard updated
- Analytics events tracked
- Inventory adjustments (if applicable)

### 9.7.13 Special Requirements
- **Offline capability**: 24-hour operation without internet
- **Audit compliance**: Immutable redemption logs
- **Real-time sync**: <5 minute delay cho online operations
- **Multi-location support**: Staff có thể work tại multiple stores

---

**Nguồn tham khảo chính:**
- System Feature Tree (System_Feature_Tree_Grok.md v4.0) - User stories, flow vận hành, KPI requirements
- Access Control Tree (Access_Control_Tree_Grok.md v2.2) - Role permissions, security requirements  
- Business Requirement Document (01-BRD.md v3.0) - Performance targets, SLA requirements
- Problem Definition (Problem.md v1.0) - Business context, technical constraints

**Tình trạng**: Part09 đang hoàn thành ✅ (UC-001 đến UC-006 complete)  
**Tiếp theo**: UC-007 và UC-008  
**Người đánh giá**: Business Analyst, UX Designer, QA Lead
