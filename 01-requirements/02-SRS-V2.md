Từ các PartXX sau bạn làm ơn:

1. Viết nội dung bằng tiếng Việt

Các sơ đồ, biểu đồ thì dùng chuẩn mermaid

Chỗ nào liên quan đến code hay kiến trúc dự án (phần teach lead) thì hỏi mình trước khi thực hiện

Nội dung sau đảm bảo tham khảo các file mình đã upload, và tham khảo chính nội dung trước bạn đã tạo.

Giờ thì hãy bắt đầu Part01 với rule trên nhé

Người thì mình vô biên nên bạn không phải lo, mình muốn làm design pattern thật chuẩn(kể cả phần tài liệu), để các sub-project độc lập build, độc lập test, cũng như ai cũng có thể code được. Người sau không phụ thuộc vào code người trước, không hiểu function nào đập đi làm mới không sao.



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# 📋 Part00 - SRS Checklist & Overview
**System Requirement Specification (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  
**Dự án**: Product Sampling Platform (PSP)  
**Tham chiếu**: `01-BRD.md`, `System_Feature_Tree_Grok.md`, `Access_Control_Tree_Grok.md`

---

## 🎯 Mục đích checklist

Tài liệu này là **roadmap tổng thể** cho việc phát triển SRS hoàn chỉnh, đảm bảo:
- Không bỏ sót yêu cầu nào từ BRD
- Cấu trúc nhất quán và logic
- Traceability từ business requirements → technical specifications
- Readiness cho development và testing phases

---

## 📊 Tiến độ tổng thể

| Tình trạng | Số lượng Parts | Tỷ lệ hoàn thành |
|------------|----------------|------------------|
| ✅ Hoàn thành | 11/16 | 69% |
| ⏳ Đang thực hiện | 0/16 | 0% |
| 🔄 Sắp triển khai | 5/16 | 31% |

**Ước tính thời gian hoàn thành**: 2-3 tuần (với team 2-3 analysts)

---

## 📘 Chi tiết từng Part

### **Part01 - Giới thiệu (Introduction)** ✅
**Mục đích**: Thiết lập context và foundation cho toàn bộ SRS

**Nội dung chính**:
- Mục tiêu của tài liệu SRS và audience (Dev team, QA, PM, Stakeholders)
- Phạm vi dự án (In-scope: Hybrid sampling platform / Out-scope: Logistics, Native apps)
- Định nghĩa thuật ngữ (Campaign, Barcode Pool, Verified User, Redemption, etc.)
- Tài liệu tham chiếu (BRD, Feature Tree, Access Control)
- Quy ước ký hiệu (FR-XXX, NFR-XXX, UC-XXX)

**Deliverable**: Foundation document cho team hiểu rõ dự án
**Trọng số**: 🔴 Critical - Phải hoàn thành trước khi làm các parts khác

---

### **Part02 - Tổng quan hệ thống (Overall Description)** ✅
**Mục đích**: Mô tả high-level view của hệ thống và context sử dụng

**Nội dung chính**:
- System actors (6 roles: Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role)
- Use context và business scenarios
- Assumptions và constraints chính
- Dependencies với external systems (POS, CRM, SMS/Email providers)
- Operating environment (Cloud, multi-tenant)

**Deliverable**: Shared understanding về system boundaries và stakeholders
**Trọng số**: 🔴 Critical - Architecture foundation

---

### **Part03 - Phạm vi & Mục tiêu sản phẩm (Scope and Objectives)** ✅
**Mục đích**: Map business goals từ BRD thành technical objectives

**Nội dung chính**:
- Business goals (Cost per verified user ≤ 0.4 USD, Conversion ≥ 90%, Fraud ≤ 5%)
- Success criteria và KPI mapping
- Feature prioritization (Must-have → Should-have → Nice-to-have)
- MVP scope definition và phasing strategy
- ROI targets và business value metrics

**Deliverable**: Clear scope boundaries và success definition
**Trọng số**: 🟡 High - Guides development priorities

---

### **Part04 - Yêu cầu chức năng (Functional Requirements)** ✅
**Mục đích**: Chi tiết hóa tất cả chức năng hệ thống cần thực hiện

**Nội dung chính**:
- FR-001 đến FR-013 (13 functional requirements chính)
- User stories với acceptance criteria cụ thể
- Business rules và logic flows
- Input/Output specifications
- Error handling requirements
- Integration points với external systems

**Deliverable**: Complete functional specification cho development
**Trọng số**: 🔴 Critical - Core development guide

---

### **Part05 - Yêu cầu phi chức năng (Non-Functional Requirements)** ✅
**Mục đích**: Định nghĩa quality attributes và performance standards

**Nội dung chính**:
- Performance (API response ≤ 3s, 100K requests/min peak load)
- Security (PII encryption, OAuth2, RBAC)
- Reliability (99.9% uptime, disaster recovery)
- Scalability (10M users by 2027, multi-tenant)
- Usability (mobile-first, accessibility)
- Compliance (GDPR/PDPA, audit trails)

**Deliverable**: Quality gates và performance benchmarks
**Trọng số**: 🔴 Critical - System reliability foundation

---

### **Part06 - Kiến trúc hệ thống (System Architecture & Components)** ✅
**Mục đích**: Thiết kế kiến trúc technical để đáp ứng requirements

**Nội dung chính**:
- Logical architecture (microservices, API gateway, databases)
- Physical deployment diagram (cloud infrastructure)
- Technology stack selection (Node.js/Go, React, MongoDB/PostgreSQL)
- Component interactions và data flows
- Scalability patterns và load balancing
- CI/CD pipeline design

**Deliverable**: Technical blueprint cho infrastructure team
**Trọng số**: 🔴 Critical - Implementation foundation

---

### **Part07 - Thiết kế dữ liệu & CSDL (Data Design & Database Schema)** ✅
**Mục đích**: Thiết kế data model và database schema chi tiết

**Nội dung chính**:
- Entity Relationship Diagram (ERD)
- MongoDB collections design (campaigns, users, barcodes, redemptions)
- PostgreSQL tables cho transactional data
- Redis caching strategy
- Data flow diagrams
- Backup và recovery procedures

**Deliverable**: Database implementation guide
**Trọng số**: 🟡 High - Data integrity critical

---

### **Part08 - Thiết kế API & Tích hợp (API Design & Integration)** ✅
**Mục đích**: Định nghĩa API contracts và integration specifications

**Nội dung chính**:
- REST API endpoints (CRUD operations)
- Request/Response schemas
- Authentication & authorization flows
- Error codes và handling
- Webhook specifications cho external integrations
- Rate limiting và throttling policies
- API versioning strategy

**Deliverable**: API documentation cho frontend và integration teams
**Trọng số**: 🔴 Critical - Integration contract

---

### **Part09 - Use Case chi tiết (Detailed Use Cases)** ✅
**Mục đích**: Mô tả chi tiết các scenarios sử dụng hệ thống

**Nội dung chính**:
- 8 use cases chính (từ Campaign creation đến Analytics export)
- Actor interactions và preconditions
- Normal flows và alternative flows
- Exception handling scenarios
- Business rules enforcement
- Cross-references với functional requirements

**Deliverable**: Behavior specification cho testing team
**Trọng số**: 🟡 High - Testing foundation

---

### **Part10 - Giao diện & Wireframes (UI/UX Design)** ✅
**Mục đích**: Thiết kế user experience và interface guidelines

**Nội dung chính**:
- User journey flows (scan → form → verify → redeem)
- Wireframes cho key screens (dashboard, landing page, portal)
- Mobile-first design principles
- Accessibility standards (WCAG 2.1)
- Brand guidelines và color schemes
- UX KPIs (form completion >90%, user engagement >70%)

**Deliverable**: Design specifications cho UI/UX team
**Trọng số**: 🟡 High - User experience critical

---

### **Part11 - Bảo mật & Tuân thủ (System Security & Compliance)** ✅
**Mục đích**: Đảm bảo security và regulatory compliance

**Nội dung chính**:
- OAuth2 authentication flows
- RBAC (Role-Based Access Control) implementation
- Data encryption (AES-256, TLS 1.3)
- GDPR/PDPA compliance procedures
- Audit logging và monitoring
- Disaster Recovery Plan (DRP)
- Security testing requirements

**Deliverable**: Security implementation guide
**Trọng số**: 🔴 Critical - Risk mitigation

---

### **Part12 - Kiểm thử hiệu năng & tải (Performance & Load Testing Plan)** ⏳
**Mục đích**: Đảm bảo hệ thống đáp ứng performance requirements

**Nội dung dự kiến**:
- Load testing scenarios (100K concurrent users)
- Performance benchmarks (API response times, throughput)
- Stress testing để tìm breaking points
- Tools setup (JMeter, K6, Locust)
- Monitoring và alerting thresholds
- Performance optimization strategies

**Deliverable**: Performance testing framework
**Trọng số**: 🟡 High - Scalability validation

---

### **Part13 - Kế hoạch kiểm thử tổng thể (System & UAT Testing Plan)** ⏳
**Mục đích**: Comprehensive testing strategy cho quality assurance

**Nội dung dự kiến**:
- Test types (Unit, Integration, System, UAT)
- Test case design methodology
- Automation testing framework
- UAT acceptance matrix với business stakeholders
- Regression testing procedures
- Bug tracking và resolution workflows

**Deliverable**: Complete testing methodology
**Trọng số**: 🟡 High - Quality gates

---

### **Part14 - Quản lý cấu hình & triển khai (Configuration & Deployment)** ⏳
**Mục đích**: Standardize deployment và configuration management

**Nội dung dự kiến**:
- Environment setup (Dev, Staging, Production)
- Version control strategy (Git workflows)
- CI/CD pipeline configuration
- Configuration management (environment variables, secrets)
- Blue-green deployment procedures
- Rollback strategies

**Deliverable**: DevOps implementation guide
**Trọng số**: 🟠 Medium - Operational efficiency

---

### **Part15 - Kế hoạch bảo trì & vận hành (Maintenance & Monitoring Plan)** ⏳
**Mục đích**: Ensure long-term system health và operational excellence

**Nội dung dự kiến**:
- Application và infrastructure monitoring
- Logging strategy (centralized logs, log retention)
- Incident response procedures
- Maintenance windows và update procedures
- Capacity planning và scaling triggers
- Support escalation matrix

**Deliverable**: Operations playbook
**Trọng số**: 🟠 Medium - Operational readiness

---

### **Part16 - Phụ lục & Tài liệu tham chiếu (Appendices)** ⏳
**Mục đích**: Supporting documentation và reference materials

**Nội dung dự kiến**:
- Glossary của thuật ngữ technical
- Traceability matrix (Business Req → Functional Req → Test Cases)
- Architecture diagrams (detailed)
- Sample data và test datasets
- Change management procedures
- Document approval workflows

**Deliverable**: Reference documentation
**Trọng số**: 🟢 Low - Documentation completeness

---

## 🔄 Dependencies & Prerequisites

### **Critical Path**:
Part01 → Part02 → Part04 → Part06 → Part08 → Development

### **Parallel Workstreams**:
- **Architecture Track**: Part06 → Part07 → Part08
- **Testing Track**: Part09 → Part12 → Part13
- **Operations Track**: Part14 → Part15
- **Documentation Track**: Part10 → Part11 → Part16

### **Key Milestones**:
- **Week 1**: Complete Part01-Part04 (Requirements foundation)
- **Week 2**: Complete Part06-Part08 (Technical design)
- **Week 3**: Complete Part12-Part15 (Testing & Operations)
- **Week 4**: Part16 và final review

---

## 🎯 Success Criteria

### **Documentation Quality**:
- [ ] Tất cả requirements traceable từ BRD
- [ ] Zero contradictions giữa các parts
- [ ] Complete API specifications cho development
- [ ] Acceptance criteria measurable và testable

### **Technical Readiness**:
- [ ] Architecture supports NFRs (scalability, security)
- [ ] Database schema optimized cho performance
- [ ] Integration points clearly defined
- [ ] Testing strategy comprehensive

### **Business Alignment**:
- [ ] MVP scope feasible trong timeline
- [ ] KPIs measurable và achievable
- [ ] Risk mitigation strategies identified
- [ ] Stakeholder sign-off secured

---

## 📞 Next Actions

1. **Immediate (Week 1)**:
   - Complete Part01-Part04
   - Validate requirements với stakeholders
   - Setup documentation repository

2. **Short-term (Week 2-3)**:
   - Architecture review với CTO
   - API design review với frontend team
   - Security review với compliance team

3. **Long-term (Week 4+)**:
   - Final SRS review và approval
   - Handoff to development teams
   - Setup change management process

---

**Document Owner**: System Analyst Team  
**Review Cycle**: Weekly progress reviews  
**Final Approval**: CTO + PM + Business Stakeholders

# 📘 Part01 - Giới thiệu (Introduction)
**System Requirement Specification (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  
**Trạng thái**: ✅ Hoàn thành  

---

## 1.1 Mục đích tài liệu

### 1.1.1 Đối tượng sử dụng
Tài liệu SRS này được thiết kế cho các stakeholder chính sau:

| Đối tượng | Mục đích sử dụng | Phần quan tâm chính |
|-----------|------------------|-------------------|
| **Development Team** | Hiểu requirements để implement | Part04-Part08 (Functional, API, Database) |
| **QA/Testing Team** | Thiết kế test cases và validation | Part09 (Use Cases), Part12-13 (Testing) |
| **Project Manager** | Quản lý scope, timeline, delivery | Part03 (Scope), Part00 (Checklist) |
| **Technical Lead/Architect** | Thiết kế kiến trúc và technology stack | Part06 (Architecture), Part07 (Database) |
| **Business Stakeholders** | Validation requirements đáp ứng business goals | Part02-03 (Overview, Scope), Part04 (Functional) |
| **DevOps/Infrastructure** | Setup môi trường và deployment | Part14-15 (Deployment, Monitoring) |
| **Security/Compliance Team** | Đảm bảo bảo mật và tuân thủ | Part11 (Security & Compliance) |

### 1.1.2 Mục tiêu chính
- **Traceability**: Đảm bảo mọi requirement đều traceable từ Business Requirements (BRD) đến implementation
- **Consistency**: Tạo shared understanding giữa tất cả team members về system behavior
- **Completeness**: Cover đầy đủ functional và non-functional requirements
- **Testability**: Cung cấp acceptance criteria rõ ràng cho testing và validation

---

## 1.2 Phạm vi dự án

### 1.2.1 In-Scope (Trong phạm vi)
Hệ thống **Product Sampling Platform (PSP)** sẽ bao gồm:

**Core Business Functions:**
- ✅ **Campaign Management**: Tạo và quản lý chiến dịch sampling với barcode pools
- ✅ **Hybrid Distribution**: Hỗ trợ phân phối tại POS (Circle K, GS25) và digital vouchers
- ✅ **Customer Verification**: OTP verification (SMS/Email) để chống spam và fraud
- ✅ **Data Collection**: Thu thập thông tin verified users với consent management
- ✅ **Redemption Tracking**: Theo dõi redemption tại POS với offline sync capability
- ✅ **Analytics & Reporting**: Dashboard realtime với funnel tracking và ROI metrics

**Technical Capabilities:**
- ✅ **Multi-tenant Architecture**: Hỗ trợ multiple brands và retail partners
- ✅ **API Integration**: REST APIs cho CRM, POS, và third-party systems
- ✅ **Mobile-first PWA**: Progressive Web App cho end users
- ✅ **Role-based Access Control**: 6 user roles với phân quyền chi tiết
- ✅ **Compliance**: GDPR/PDPA compliance với audit trails

**Phase Coverage:**
- **Phase 1 (MVP)**: Must-have features cho pilot 5-10 brands, 10K verified users
- **Phase 2**: Should-have features cho scale 1M-3M users, advanced analytics
- **Phase 3**: Nice-to-have features cho vision "Sampling Intelligence Platform"

### 1.2.2 Out-of-Scope (Ngoài phạm vi)
Những chức năng sau **KHÔNG** nằm trong scope hiện tại:

❌ **Physical Logistics**: Brand tự chịu trách nhiệm vận chuyển hàng mẫu đến retail nodes  
❌ **Native Mobile Apps**: Chỉ phát triển PWA, không có iOS/Android native apps  
❌ **Payment Processing**: Không xử lý thanh toán, chỉ voucher/barcode free samples  
❌ **Inventory Management**: Không quản lý kho hàng vật lý, chỉ digital tracking  
❌ **Blockchain/Tokenization**: Tính năng này thuộc Phase 3 (Nice-to-have)  
❌ **AI/ML Advanced Features**: Predictive analytics thuộc Phase 2-3  

---

## 1.3 Định nghĩa thuật ngữ

### 1.3.1 Business Terms

| Thuật ngữ | Định nghĩa | Ví dụ |
|-----------|------------|-------|
| **Campaign** | Chiến dịch sampling của brand với mục tiêu, thời gian, và budget cụ thể | "Unilever Shampoo Trial - Q1 2025" |
| **Barcode Pool** | Tập hợp các barcode/voucher được gán cho một campaign | 10,000 mã barcode cho campaign Coca-Cola |
| **Verified User** | Người dùng đã complete OTP verification và consent | User đã nhập OTP từ SMS và tick opt-in |
| **Redemption** | Hành động đổi barcode/voucher thành sản phẩm tại POS | Scan barcode tại Circle K nhận lon Coca-Cola |
| **Sampling Network** | Mạng lưới các retail nodes hỗ trợ phân phối samples | Circle K, GS25, booth events, pop-up stores |
| **Hybrid Distribution** | Kết hợp phân phối vật lý (tại store) và digital (voucher online) | QR code tại store dẫn đến form digital |
| **Funnel Tracking** | Theo dõi customer journey từ scan QR đến redemption | Scan → Form → Verify → Issue → Redeem |

### 1.3.2 Technical Terms

| Thuật ngữ | Định nghĩa | Technical Notes |
|-----------|------------|-----------------|
| **PWA** | Progressive Web App - ứng dụng web hoạt động như native app | React-based, offline-capable |
| **OTP** | One-Time Password - mã xác thực dùng một lần | 6-digit code, 5 minutes expiry |
| **API Gateway** | Central point quản lý tất cả API calls và routing | Kong hoặc AWS API Gateway |
| **Multi-tenant** | Kiến trúc hỗ trợ nhiều customers trên cùng infrastructure | Tenant isolation by database/schema |
| **RBAC** | Role-Based Access Control - phân quyền dựa trên roles | 6 roles: Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role |
| **Audit Trail** | Log immutable của mọi hành động trong hệ thống | Compliance với GDPR/PDPA requirements |
| **Webhook** | HTTP callback để notify external systems về events | POST request khi có redemption mới |

### 1.3.3 User Roles

| Role | Mô tả ngắn | Primary Use Cases |
|------|------------|-------------------|
| **Admin** | Toàn quyền hệ thống, quản lý global resources | System config, user management, global campaigns |
| **Group Admin** | Quản lý resources trong group/organization | Group campaigns, team member management |
| **Customer Account** | Brand account quản lý campaigns riêng | Campaign creation, analytics, data export |
| **Serving Account** | Staff tại retail nodes để scan/redeem | Barcode scanning, redemption processing |
| **Auditor** | Xem logs và reports cho compliance | Audit logs, compliance reports |
| **User Role** | End user sử dụng User Portal | View sampling history, track redemption status |

---

## 1.4 Tài liệu tham chiếu

### 1.4.1 Input Documents
Các tài liệu đầu vào đã được sử dụng để tạo SRS này:

| Tài liệu | Phiên bản | Ngày | Vai trò |
|----------|-----------|------|---------|
| **Problem.md** | Latest | 2025-10 | Problem definition, MoSCoW prioritization |
| **01-BRD.md** | 3.0 | 2025-10-17 | Business requirements, financial model, KPIs |
| **Product-Sampling-Vision-and-Strategy Document.md** | 1.0 | 2025-10 | Vision, market opportunity, go-to-market strategy |
| **System_Feature_Tree_Grok.md** | 4.0 | 2025-10-16 | Feature breakdown, user stories, technical requirements |
| **Access_Control_Tree_Grok.md** | 2.2 | 2025-10-16 | Role definitions, permission matrix |

### 1.4.2 Standards và References
- **IEEE Std 830-1998**: Software Requirements Specifications standard
- **ISO/IEC 25010**: Software product quality characteristics
- **GDPR (EU 2016/679)**: General Data Protection Regulation
- **PDPA (Personal Data Protection Act)**: Vietnam data protection law
- **WCAG 2.1**: Web Content Accessibility Guidelines
- **REST API Design**: RESTful web services best practices
- **OAuth 2.0**: Authorization framework standard

---

## 1.5 Quy ước ký hiệu

### 1.5.1 Requirement Identifiers
- **FR-XXX**: Functional Requirement (FR-001, FR-002, ...)
- **NFR-XXX**: Non-Functional Requirement (NFR-001, NFR-002, ...)
- **UC-XXX**: Use Case (UC-001, UC-002, ...)
- **API-XXX**: API Endpoint specification (API-001, API-002, ...)
- **DB-XXX**: Database entity/table (DB-001, DB-002, ...)

### 1.5.2 Priority Levels
- 🔴 **Critical**: Must-have cho MVP, blocking nếu không có
- 🟡 **High**: Important cho user experience và business value
- 🟠 **Medium**: Nice-to-have, có thể defer sang phase sau
- 🟢 **Low**: Future enhancement, không ảnh hưởng core functionality

### 1.5.3 Status Indicators
- ✅ **Complete**: Requirement đã defined đầy đủ và approved
- ⏳ **In Progress**: Đang được analysis và documentation
- 🔄 **Under Review**: Cần review và validation từ stakeholders
- ❌ **Blocked**: Bị block do dependencies hoặc decisions pending

### 1.5.4 Diagram Conventions
Tất cả diagrams sử dụng **Mermaid syntax** để đảm bảo consistency:

```mermaid
graph TD
    A[User] --> B[Landing Page]
    B --> C[Form + OTP]
    C --> D[Barcode Issued]
    D --> E[Redemption at POS]
    
    style A fill:#e1f5fe
    style E fill:#c8e6c9
```

---

## 1.6 Document Structure Overview

### 1.6.1 SRS Organization
Tài liệu được tổ chức theo 16 parts với dependencies rõ ràng:

```mermaid
graph LR
    P01[Part01: Introduction] --> P02[Part02: System Overview]
    P02 --> P03[Part03: Scope & Objectives]
    P03 --> P04[Part04: Functional Requirements]
    P04 --> P06[Part06: System Architecture]
    P06 --> P07[Part07: Database Design]
    P06 --> P08[Part08: API Design]
    P04 --> P09[Part09: Use Cases]
    P09 --> P12[Part12: Performance Testing]
    P12 --> P13[Part13: System Testing]
    
    style P01 fill:#ffcccc
    style P04 fill:#ffffcc
    style P06 fill:#ccffcc
```

### 1.6.2 Cross-References
Mỗi requirement sẽ có cross-references để đảm bảo traceability:

- **Business → Functional**: BRD requirement maps to FR-XXX
- **Functional → Technical**: FR-XXX implements via API-XXX, DB-XXX
- **Functional → Testing**: FR-XXX tested by UC-XXX, Test Case TC-XXX
- **Non-Functional → Architecture**: NFR-XXX addressed by architectural decisions

---

## 1.7 Quality Assurance

### 1.7.1 Review Process
Mỗi part sẽ qua review process sau:

1. **Technical Review**: Architecture và feasibility validation
2. **Business Review**: Alignment với business goals từ BRD
3. **Security Review**: Compliance và security requirements validation
4. **Final Approval**: Sign-off từ PM, Technical Lead, Business Stakeholders

### 1.7.2 Change Management
- All changes phải update traceability matrix
- Version control với clear change logs
- Impact analysis cho changes affecting multiple parts
- Stakeholder notification cho major changes

---

## 1.8 Success Criteria

Document này được considered **successful** khi:

✅ **Completeness**: Tất cả requirements từ BRD được covered  
✅ **Consistency**: Không có contradictions giữa các parts  
✅ **Testability**: Mọi requirement có measurable acceptance criteria  
✅ **Implementability**: Development team có đủ thông tin để implement  
✅ **Traceability**: Clear mapping từ business goals đến technical requirements  
✅ **Stakeholder Sign-off**: Approval từ tất cả key stakeholders  

---

**Document Status**: ✅ Ready for Part02  
**Next Action**: Proceed với Part02 - System Overview  
**Owner**: System Analyst Team

# 📘 Part02 - Tổng quan hệ thống (System Overview)
**System Requirement Specification (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  
**Trạng thái**: ✅ Hoàn thành  

---

## 2.1 Tổng quan hệ thống

### 2.1.1 Mô tả chung
**Product Sampling Platform (PSP)** là một nền tảng **microservices-based** được thiết kế để giải quyết bài toán phân phối sản phẩm mẫu giá thấp (~1 USD) một cách hiệu quả, đồng thời thu thập dữ liệu khách hàng chất lượng cao và chống gian lận.

**Giá trị cốt lõi:**
- 🎯 **Hybrid Distribution**: Kết hợp phân phối vật lý (POS) và digital (voucher)
- 🔐 **Verified Data Collection**: Thu thập data với OTP verification và consent management
- 📊 **Real-time Analytics**: Dashboard và báo cáo chi tiết cho brands
- 🛡️ **Fraud Prevention**: Multi-layer security với rate limiting và device fingerprinting
- 🔗 **Seamless Integration**: API-first design cho CRM, POS, và third-party systems

### 2.1.2 Business Context
Hệ thống phục vụ ecosystem sampling tại Đông Nam Á với focus vào thị trường Việt Nam:

```mermaid
graph TB
    subgraph "Brands (FMCG)"
        B1[Unilever]
        B2[P&G]
        B3[Coca-Cola]
        B4[Local Brands]
    end
    
    subgraph "Product Sampling Platform"
        PSP[PSP Core]
    end
    
    subgraph "Retail Network"
        R1[Circle K]
        R2[GS25]
        R3[Mini Stop]
        R4[Events/Booths]
    end
    
    subgraph "End Users"
        U1[Verified Customers]
    end
    
    B1 --> PSP
    B2 --> PSP
    B3 --> PSP
    B4 --> PSP
    
    PSP --> R1
    PSP --> R2
    PSP --> R3
    PSP --> R4
    
    R1 --> U1
    R2 --> U1
    R3 --> U1
    R4 --> U1
    
    style PSP fill:#e3f2fd
    style U1 fill:#e8f5e8
```

---

## 2.2 System Actors

### 2.2.1 Primary Actors

| Actor | Mô tả | Primary Goals | System Interaction |
|-------|-------|---------------|-------------------|
| **Admin** | System administrator với toàn quyền | Quản lý hệ thống, setup global config, user management | Web dashboard, API management |
| **Group Admin** | Quản lý resources trong organization/group | Quản lý campaigns trong group, team coordination | Web dashboard (scoped) |
| **Customer Account** | Brand account manager | Tạo campaigns, xem analytics, export data | Web dashboard, API integration |
| **Serving Account** | Staff tại retail nodes | Scan barcode, process redemption | Mobile PWA, POS integration |
| **Auditor** | Compliance và audit personnel | Xem logs, compliance reports, audit trails | Read-only dashboard |
| **End User** | Khách hàng cuối nhận samples | Nhận samples, track redemption, manage profile | User Portal PWA |

### 2.2.2 Secondary Actors

| Actor | Role | Integration Method |
|-------|------|-------------------|
| **CRM Systems** | HubSpot, Salesforce, Braze | REST API, Webhooks |
| **SMS/Email Providers** | Twilio, FPT Telecom, Viettel | API integration |
| **POS Systems** | Circle K POS, retail terminals | API, CSV import/export |
| **Analytics Platforms** | Google Analytics, Meta Pixel | JavaScript tracking, API |
| **Payment Gateways** | Future integration cho paid samples | REST API (Phase 2) |

---

## 2.3 Microservices Architecture Overview

### 2.3.1 Service Decomposition Strategy

**Hệ thống được chia thành 8 microservices chính** dựa trên business capabilities:

```mermaid
graph TB
    subgraph "API Gateway Layer"
        Gateway[Kong API Gateway]
    end
    
    subgraph "Core Business Services"
        Auth[auth-service]
        Campaign[campaign-service]
        Barcode[barcode-service]
        User[user-service]
    end
    
    subgraph "Operational Services"
        Redemption[redemption-service]
        Analytics[analytics-service]
        Notification[notification-service]
        Integration[integration-service]
    end
    
    subgraph "Data Layer"
        MongoDB[(MongoDB)]
        PostgreSQL[(PostgreSQL)]
        Redis[(Redis)]
    end
    
    subgraph "External Systems"
        CRM[CRM Systems]
        SMS[SMS Providers]
        POS[POS Systems]
    end
    
    Gateway --> Auth
    Gateway --> Campaign
    Gateway --> Barcode
    Gateway --> User
    Gateway --> Redemption
    Gateway --> Analytics
    Gateway --> Notification
    Gateway --> Integration
    
    Auth --> Redis
    Campaign --> MongoDB
    Barcode --> PostgreSQL
    User --> MongoDB
    Redemption --> PostgreSQL
    Analytics --> MongoDB
    Notification --> Redis
    Integration --> MongoDB
    
    Integration --> CRM
    Notification --> SMS
    Redemption --> POS
    
    style Auth fill:#ffebee
    style Campaign fill:#e3f2fd
    style Analytics fill:#e8f5e8
```

### 2.3.2 Service Definitions

| Service | Technology Stack | Primary Responsibility | Database |
|---------|------------------|----------------------|----------|
| **auth-service** | NestJS + JWT + Redis | Authentication, authorization, RBAC | Redis (sessions) |
| **campaign-service** | NestJS + MongoDB | Campaign CRUD, ads format management | MongoDB |
| **barcode-service** | NestJS + PostgreSQL | Barcode generation, pool management | PostgreSQL |
| **user-service** | NestJS + MongoDB | User profiles, verification, consent | MongoDB |
| **redemption-service** | NestJS + PostgreSQL | POS integration, redemption tracking | PostgreSQL |
| **analytics-service** | NestJS + MongoDB | Reporting, dashboard data, export | MongoDB |
| **notification-service** | NestJS + Redis + Queue | OTP, email, push notifications | Redis (queue) |
| **integration-service** | NestJS + MongoDB | CRM sync, webhooks, external APIs | MongoDB |

### 2.3.3 Inter-Service Communication

**Communication Patterns:**
- 🔄 **Synchronous**: REST API calls cho immediate responses
- 📨 **Asynchronous**: Message queue (Redis Pub/Sub) cho long-running tasks
- 🎯 **Event-driven**: Domain events cho loose coupling

```mermaid
sequenceDiagram
    participant U as User
    participant G as API Gateway
    participant A as auth-service
    participant C as campaign-service
    participant B as barcode-service
    participant N as notification-service
    
    U->>G: POST /api/submit-form
    G->>A: Validate token
    A-->>G: Token valid
    G->>C: Get campaign details
    C-->>G: Campaign data
    G->>B: Reserve barcode
    B-->>G: Barcode reserved
    G->>N: Send OTP
    N-->>G: OTP sent
    G-->>U: Form submitted, check OTP
```

---

## 2.4 Development Environment

### 2.4.1 Docker-based Development Setup

**Local development stack** sử dụng Docker Compose:

```yaml
# docker-compose.dev.yml structure
services:
  # API Gateway
  kong:
    image: kong:latest
    ports: ["8000:8000", "8001:8001"]
  
  # Core Services (NestJS)
  auth-service:
    build: ./services/auth
    ports: ["3001:3000"]
  
  campaign-service:
    build: ./services/campaign
    ports: ["3002:3000"]
  
  # Databases
  mongodb:
    image: mongo:5.0
    ports: ["27017:27017"]
  
  postgresql:
    image: postgres:14
    ports: ["5432:5432"]
  
  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
```

### 2.4.2 Technology Stack Details

| Layer | Technology | Version | Justification |
|-------|------------|---------|---------------|
| **Runtime** | Node.js | 18+ LTS | Stable, mature ecosystem |
| **Framework** | NestJS | 10+ | TypeScript, decorators, dependency injection |
| **API Gateway** | Kong | Latest | Open source, plugin ecosystem |
| **Primary DB** | MongoDB | 5.0+ | Document store cho flexible schema |
| **Transactional DB** | PostgreSQL | 14+ | ACID compliance cho financial data |
| **Cache/Queue** | Redis | 7+ | In-memory speed, pub/sub capability |
| **Container** | Docker | 20+ | Development/production parity |
| **Orchestration** | Docker Compose | 2+ | Local development simplicity |

---

## 2.5 Operating Environment

### 2.5.1 Deployment Architecture

```mermaid
graph TB
    subgraph "Load Balancer"
        LB[Nginx/CloudFlare]
    end
    
    subgraph "Application Tier"
        Gateway[API Gateway]
        subgraph "Service Cluster"
            S1[Service Instance 1]
            S2[Service Instance 2]
            S3[Service Instance N]
        end
    end
    
    subgraph "Data Tier"
        MongoDB[MongoDB Cluster]
        PostgreSQL[PostgreSQL Master/Slave]
        Redis[Redis Cluster]
    end
    
    subgraph "External Services"
        Twilio[Twilio API]
        HubSpot[HubSpot CRM]
        GA[Google Analytics]
    end
    
    LB --> Gateway
    Gateway --> S1
    Gateway --> S2
    Gateway --> S3
    
    S1 --> MongoDB
    S1 --> PostgreSQL
    S1 --> Redis
    
    S2 --> Twilio
    S3 --> HubSpot
    S1 --> GA
    
    style LB fill:#ffecb3
    style Gateway fill:#e1f5fe
    style MongoDB fill:#e8f5e8
```

### 2.5.2 Environment Tiers

| Environment | Purpose | Infrastructure | Data |
|-------------|---------|----------------|------|
| **Development** | Local development | Docker Compose | Sample/mock data |
| **Staging** | Testing & integration | Cloud containers | Anonymized production data |
| **Production** | Live system | Auto-scaling clusters | Real customer data |

---

## 2.6 System Constraints

### 2.6.1 Technical Constraints

| Constraint | Description | Impact | Mitigation |
|------------|-------------|--------|------------|
| **Peak Load** | 100,000 requests/minute during campaigns | System performance | Auto-scaling, caching, queue |
| **Data Consistency** | Barcode must be single-use, atomic | Financial accuracy | PostgreSQL transactions, locks |
| **Network Latency** | POS integration có thể intermittent | User experience | Offline-first design, sync |
| **Mobile Performance** | PWA phải hoạt động trên 3G networks | Accessibility | Optimized assets, caching |

### 2.6.2 Business Constraints

| Constraint | Description | Technical Implementation |
|------------|-------------|-------------------------|
| **Cost per Verified User** | ≤ 0.4 USD target | Efficient infrastructure, fraud prevention |
| **Fraud Rate** | ≤ 5% tolerance | Multi-layer verification, ML detection |
| **Compliance** | GDPR/PDPA requirements | Audit trails, consent management, encryption |
| **Multi-tenancy** | Support multiple brands | Tenant isolation, role-based access |

---

## 2.7 Assumptions và Dependencies

### 2.7.1 Key Assumptions

✅ **Network Connectivity**: Retail nodes có smartphone/tablet với internet  
✅ **Staff Training**: Serving Account có thể được train để sử dụng scanning tool  
✅ **Brand Adoption**: Brands sẵn sàng integrate API với existing CRM systems  
✅ **User Behavior**: End users comfortable với OTP verification process  
✅ **Compliance**: Current data protection laws remain stable  

### 2.7.2 External Dependencies

| Dependency | Type | Risk Level | Contingency |
|------------|------|------------|-------------|
| **Twilio SMS** | Critical | Medium | Backup SMS provider (FPT, Viettel) |
| **MongoDB Atlas** | High | Low | Self-hosted MongoDB option |
| **Kong Gateway** | High | Low | Nginx alternative configuration |
| **HubSpot API** | Medium | Medium | Multiple CRM support |
| **Internet Connectivity** | Critical | High | Offline-first architecture |

---

## 2.8 Success Criteria

### 2.8.1 Technical Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| **API Response Time** | ≤ 3 seconds | Application monitoring |
| **System Uptime** | ≥ 99.9% | Infrastructure monitoring |
| **Data Accuracy** | ≥ 99.5% | Audit reconciliation |
| **Security Compliance** | 100% | Security audit, penetration testing |

### 2.8.2 Business Success Metrics

| Metric | Target | Business Impact |
|--------|--------|-----------------|
| **Cost per Verified Lead** | ≤ 0.4 USD | ROI optimization |
| **Conversion Rate** | ≥ 90% | User experience validation |
| **Fraud Detection Rate** | ≥ 95% | System security effectiveness |
| **Brand Retention** | ≥ 85% | Product-market fit validation |

---

## 2.9 Next Steps

### 2.9.1 Architecture Validation
- [ ] Technical review với development team
- [ ] Infrastructure cost estimation
- [ ] Security assessment với compliance team
- [ ] Performance benchmarking plan

### 2.9.2 Implementation Readiness
- [ ] Service interface contracts definition
- [ ] Database schema design
- [ ] API specification documentation
- [ ] Development environment setup guide

---

**Document Status**: ✅ Ready for Part03  
**Dependencies**: Architecture decisions confirmed  
**Next Action**: Define detailed scope and objectives in Part03  
**Owner**: System Analyst Team

# 📘 Part03 - Phạm vi & Mục tiêu sản phẩm (Scope and Objectives)
**System Requirement Specification (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: System Analyst Team  
**Trạng thái**: ✅ Hoàn thành  

---

## 3.1 Business Goals & Strategic Objectives

### 3.1.1 Primary Business Goals (từ BRD)

| Business Goal | Target Metric | Technical Implementation | Success Criteria |
|---------------|---------------|-------------------------|------------------|
| **Cost Optimization** | ≤ 0.4 USD per verified user | Efficient service architecture, fraud prevention | Monthly cost reports ≤ target |
| **Data Quality** | ≥ 95% verified data accuracy | Multi-layer OTP verification, consent management | Audit reports confirm accuracy |
| **User Experience** | ≥ 90% form completion rate | Mobile-first PWA, optimized flows | Analytics dashboard tracking |
| **Fraud Prevention** | ≤ 5% fraud rate | ML-based detection, device fingerprinting | Real-time fraud monitoring |
| **Brand Retention** | ≥ 85% repeat campaigns | Superior analytics, easy integration | Customer satisfaction surveys |
| **Market Leadership** | #1 in SEA by 2027 | Scalable architecture, multi-market support | Market share analysis |

### 3.1.2 Strategic Value Proposition

```mermaid
graph TB
    subgraph "Business Problem"
        BP1[High Distribution Cost]
        BP2[Low Data Quality]
        BP3[No Measurement]
        BP4[Fraud/Spam Issues]
    end
    
    subgraph "PSP Solution"
        S1[Hybrid Distribution]
        S2[Verified Data Collection]
        S3[Real-time Analytics]
        S4[Multi-layer Security]
    end
    
    subgraph "Business Value"
        V1[Cost per Lead < $0.4]
        V2[95%+ Data Accuracy]
        V3[ROI Visibility]
        V4[Fraud Rate < 5%]
    end
    
    BP1 --> S1 --> V1
    BP2 --> S2 --> V2
    BP3 --> S3 --> V3
    BP4 --> S4 --> V4
    
    style S1 fill:#e3f2fd
    style S2 fill:#e8f5e8
    style S3 fill:#fff3e0
    style S4 fill:#fce4ec
```

---

## 3.2 Product Vision & Market Positioning

### 3.2.1 Vision Statement
> "Transform product sampling from a cost center into a data-driven growth engine by providing the most intelligent, secure, and scalable sampling platform in Southeast Asia."

### 3.2.2 Market Opportunity (từ Vision Document)

| Market Segment | Size (2025) | CAGR | PSP Target Share |
|----------------|-------------|------|------------------|
| **Global Sampling** | $12-15B USD | 8% | N/A (focus SEA) |
| **SEA Sampling** | $1.2B USD | 10% | 5% by 2027 |
| **Vietnam Market** | $120-150M USD | 12% | 15% by 2026 |

**Competitive Advantage:**
- 🎯 **SEA-first design** với local compliance (PDPA, language support)
- 🔗 **Retail network integration** với Circle K, GS25, local chains
- 💰 **Cost efficiency** targeting <$0.4 per verified lead
- 📊 **Advanced analytics** với AI-powered insights (Phase 2+)

---

## 3.3 MVP Scope Definition

### 3.3.1 MVP Objectives (Phase 1: 0-6 months)

**Target Metrics for MVP Success:**
- 🏢 **5-10 pilot brands** signed và active
- 👥 **10,000 verified users** trong system
- 🏪 **50+ retail locations** integrated
- 💵 **Cost per verified lead** ≤ $0.5 (optimization target: $0.4)
- ⚡ **90%+ system uptime** during pilot phase

### 3.3.2 MVP Feature Scope

#### **Must-Have Features (Critical Priority 🔴)**

| Feature Category | Specific Features | Technical Services | Business Value |
|------------------|-------------------|-------------------|----------------|
| **Campaign Management** | Create/edit campaigns, barcode pool assignment, UTM tracking | campaign-service, barcode-service | Brand onboarding capability |
| **User Verification** | OTP SMS/Email, CAPTCHA, consent management | auth-service, notification-service | Data quality assurance |
| **Barcode Distribution** | QR code generation, single-use enforcement, expiry tracking | barcode-service, campaign-service | Core sampling functionality |
| **POS Integration** | Scan redemption, offline sync, status updates | redemption-service | Retail network enablement |
| **Basic Analytics** | Funnel tracking, campaign performance, export CSV | analytics-service | ROI measurement |
| **Role-based Access** | 6 user roles, permission matrix, audit logs | auth-service | Security & compliance |

#### **Should-Have Features (High Priority 🟡)**

| Feature Category | Phase 2 Target | Technical Implementation |
|------------------|----------------|-------------------------|
| **Advanced Analytics** | ML insights, predictive analytics | Enhanced analytics-service với AI models |
| **Fraud Detection** | Device fingerprinting, anomaly detection | ML-enhanced auth-service |
| **Multi-market Support** | Thailand, Indonesia expansion | Localization trong user-service |
| **API Marketplace** | Public APIs, developer portal | Enhanced integration-service |

### 3.3.3 MVP Success Criteria

```mermaid
graph LR
    subgraph "Technical KPIs"
        T1[API Response < 3s]
        T2[Uptime > 99%]
        T3[Data Accuracy > 95%]
    end
    
    subgraph "Business KPIs"
        B1[Cost per Lead < $0.5]
        B2[Conversion Rate > 85%]
        B3[Fraud Rate < 8%]
    end
    
    subgraph "User KPIs"
        U1[Form Completion > 85%]
        U2[Brand Satisfaction > 4/5]
        U3[Retailer Adoption > 80%]
    end
    
    style T1 fill:#e3f2fd
    style B1 fill:#e8f5e8
    style U1 fill:#fff3e0
```

---

## 3.4 Service-Level Objectives (SLOs)

### 3.4.1 Performance Objectives

| Service | Response Time SLO | Availability SLO | Throughput SLO |
|---------|-------------------|------------------|----------------|
| **auth-service** | < 500ms (p95) | 99.9% | 1000 RPS |
| **campaign-service** | < 1s (p95) | 99.5% | 500 RPS |
| **barcode-service** | < 800ms (p95) | 99.9% | 2000 RPS |
| **redemption-service** | < 2s (p95) | 99.5% | 1500 RPS |
| **analytics-service** | < 5s (p95) | 99% | 200 RPS |
| **notification-service** | < 10s (async) | 99% | 1000 messages/min |

### 3.4.2 Data Quality Objectives

| Data Category | Accuracy Target | Validation Method | Recovery SLA |
|---------------|-----------------|-------------------|--------------|
| **User Profiles** | 99.5% | OTP verification + manual audit | 24h |
| **Campaign Data** | 100% | Schema validation + business rules | 4h |
| **Barcode Inventory** | 99.9% | Atomic transactions + reconciliation | 1h |
| **Redemption Records** | 100% | Financial audit + POS verification | 2h |

---

## 3.5 Enterprise Architecture Standards

### 3.5.1 Design Pattern Standards

**Service Design Patterns:**
- 🏗️ **Domain-Driven Design (DDD)**: Mỗi service là một bounded context
- 🔄 **CQRS Pattern**: Command/Query separation cho complex operations
- 📨 **Event Sourcing**: Critical business events (redemption, fraud detection)
- 🛡️ **Circuit Breaker**: Fault tolerance giữa services
- 🎯 **API Gateway Pattern**: Single entry point với authentication/rate limiting

**Code Standards:**
```typescript
// NestJS Service Template Structure
@Injectable()
export class CampaignService {
  constructor(
    private readonly repository: CampaignRepository,
    private readonly eventBus: EventBus,
    private readonly logger: Logger
  ) {}

  async createCampaign(dto: CreateCampaignDto): Promise<Campaign> {
    // Validation, business logic, event emission
  }
}
```

### 3.5.2 Documentation Standards

| Document Type | Template | Ownership | Update Frequency |
|---------------|----------|-----------|------------------|
| **Service README** | Standardized template với setup, API, examples | Service team | Each release |
| **API Documentation** | OpenAPI 3.0 auto-generated | Development team | Each API change |
| **Architecture Decision Records** | ADR template trong repo | Tech lead | Each major decision |
| **Runbooks** | Deployment, troubleshooting guides | DevOps team | Monthly review |

### 3.5.3 Testing Standards

```mermaid
graph TB
    subgraph "Testing Pyramid"
        U[Unit Tests - 70%]
        I[Integration Tests - 20%]
        E[E2E Tests - 10%]
    end
    
    subgraph "Service Testing"
        C[Contract Testing]
        M[Mock External Dependencies]
        P[Performance Testing]
    end
    
    subgraph "System Testing"
        S[Security Testing]
        L[Load Testing]
        A[Accessibility Testing]
    end
    
    U --> C
    I --> M
    E --> P
    C --> S
    M --> L
    P --> A
    
    style U fill:#e8f5e8
    style I fill:#e3f2fd
    style E fill:#fff3e0
```

---

## 3.6 Phased Development Strategy

### 3.6.1 Phase 1: MVP Foundation (Months 1-6)

**Objective**: Establish core platform với verified pilot customers

**Service Development Priority:**
1. **Week 1-4**: auth-service + user-service (Foundation)
2. **Week 5-8**: campaign-service + barcode-service (Core Business)
3. **Week 9-12**: redemption-service + notification-service (User Experience)
4. **Week 13-16**: analytics-service + integration-service (Business Value)
5. **Week 17-24**: Testing, optimization, pilot deployment

**Success Gates:**
- [ ] All 8 microservices deployed và functional
- [ ] 5 pilot brands onboarded successfully
- [ ] 10K verified users processed
- [ ] Cost per lead under $0.5 achieved

### 3.6.2 Phase 2: Scale & Intelligence (Months 7-18)

**Objective**: Scale to 100K+ users with advanced features

**Enhancement Focus:**
- 🤖 **AI/ML Integration**: Fraud detection, predictive analytics
- 🌏 **Multi-market Expansion**: Thailand, Indonesia localization
- 📊 **Advanced Analytics**: Custom reports, API marketplace
- 🔐 **Enterprise Security**: SOC2, penetration testing

### 3.6.3 Phase 3: Market Leadership (Months 19-36)

**Objective**: Become dominant platform in SEA region

**Innovation Focus:**
- 🛒 **Marketplace Features**: Multi-brand co-sampling
- 🌱 **Sustainability Tracking**: Carbon footprint, eco-metrics
- 🧠 **AI-driven Optimization**: Automatic campaign optimization
- 🔗 **Ecosystem Integration**: E-commerce, social media platforms

---

## 3.7 Risk Management & Mitigation

### 3.7.1 Technical Risks

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|-------------------|
| **Service Complexity** | Medium | High | Standardized templates, comprehensive documentation |
| **Database Performance** | Low | High | Query optimization, caching layers, monitoring |
| **External API Failures** | High | Medium | Circuit breakers, fallback mechanisms, multiple providers |
| **Security Breaches** | Low | Critical | Defense in depth, regular audits, incident response plan |

### 3.7.2 Business Risks

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|-------------------|
| **Slow Brand Adoption** | Medium | High | Pilot program, success stories, competitive pricing |
| **Retail Partner Resistance** | Medium | Medium | Revenue sharing model, training programs |
| **Regulatory Changes** | Low | High | Compliance team, legal review, adaptable architecture |
| **Competition** | High | Medium | Innovation focus, customer lock-in, partnership strategy |

---

## 3.8 Success Measurement Framework

### 3.8.1 Key Performance Indicators (KPIs)

**Financial KPIs:**
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (LTV)
- Cost per verified lead

**Operational KPIs:**
- System uptime và performance
- API response times
- Error rates và resolution times
- Security incident count

**Product KPIs:**
- User engagement rates
- Feature adoption rates
- Customer satisfaction scores
- Market share growth

### 3.8.2 Monitoring & Alerting

```mermaid
graph TB
    subgraph "Real-time Monitoring"
        M1[Application Metrics]
        M2[Infrastructure Metrics]
        M3[Business Metrics]
    end
    
    subgraph "Alerting System"
        A1[Critical Alerts]
        A2[Warning Alerts]
        A3[Info Alerts]
    end
    
    subgraph "Response Team"
        R1[On-call Engineer]
        R2[Product Manager]
        R3[Business Stakeholder]
    end
    
    M1 --> A1 --> R1
    M2 --> A2 --> R1
    M3 --> A3 --> R2
    A1 -.-> R3
    
    style A1 fill:#ffcdd2
    style A2 fill:#fff3e0
    style A3 fill:#e8f5e8
```

---

## 3.9 Acceptance Criteria

### 3.9.1 MVP Acceptance Criteria

**Technical Acceptance:**
- [ ] All microservices pass security audit
- [ ] Performance benchmarks met under load testing
- [ ] 100% API documentation coverage
- [ ] Disaster recovery procedures tested

**Business Acceptance:**
- [ ] 5+ pilot brands successfully launched campaigns
- [ ] Cost per verified lead ≤ $0.5 achieved
- [ ] 90%+ customer satisfaction score
- [ ] Zero critical security incidents

**Operational Acceptance:**
- [ ] 24/7 monitoring và alerting functional
- [ ] CI/CD pipelines operational for all services
- [ ] Team documentation complete và validated
- [ ] Support processes established

---

## 3.10 Next Steps & Dependencies

### 3.10.1 Immediate Actions
1. **Technical Architecture Review** với development team
2. **Service Interface Design** workshop
3. **Database Schema Planning** session
4. **Development Environment Setup** guide creation

### 3.10.2 Critical Dependencies
- Development team hiring và onboarding
- Cloud infrastructure setup
- External API integrations (Twilio, HubSpot)
- Legal compliance review

---

**Document Status**: ✅ Ready for Part04  
**Next Action**: Define detailed functional requirements  
**Dependencies**: Architecture và scope confirmed  
**Owner**: System Analyst Team
# 📘 Part04 - Yêu cầu chức năng (Functional Requirements)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  
**Trạng thái**: ✅ Hoàn thành  

---

## 4.1 Tổng quan yêu cầu chức năng

### 4.1.1 Phân loại yêu cầu
Hệ thống Product Sampling Platform (PSP) có **13 yêu cầu chức năng chính** được chia thành 3 nhóm ưu tiên:

| Mức ưu tiên | Số lượng | Giai đoạn triển khai |
|-------------|----------|-------------------|
| 🔴 **Must-Have (Core)** | 8 yêu cầu | MVP - Phase 1 |
| 🟡 **Should-Have (Advanced)** | 3 yêu cầu | Phase 2 |
| 🟠 **Nice-to-Have (Future)** | 2 yêu cầu | Phase 3 |

### 4.1.2 Traceability Matrix
Mỗi yêu cầu chức năng được liên kết với business requirements từ BRD:

```mermaid
graph LR
    subgraph "Business Goals"
        BG1[Chi phí ≤ 0.4 USD]
        BG2[Dữ liệu chất lượng ≥ 95%]
        BG3[Chống gian lận ≤ 5%]
        BG4[Tỷ lệ chuyển đổi ≥ 90%]
    end
    
    subgraph "Functional Requirements"
        FR1[FR-001: Quản lý Campaign]
        FR2[FR-002: Xác thực người dùng]
        FR3[FR-003: Phân phối Barcode]
        FR4[FR-004: Redemption POS]
    end
    
    BG1 --> FR1
    BG2 --> FR2
    BG3 --> FR2
    BG4 --> FR3
    BG4 --> FR4
    
    style FR1 fill:#e3f2fd
    style FR2 fill:#ffebee
    style FR3 fill:#e8f5e8
    style FR4 fill:#fff3e0
```

---

## 4.2 Must-Have Requirements (MVP - Phase 1)

### FR-001: Quản lý Campaign 🔴
**Mô tả**: Hệ thống cho phép các brand tạo, quản lý và theo dõi các chiến dịch sampling với khả năng gán barcode pool, ads format và UTM tracking.

**Actors**: Admin, Group Admin, Customer Account  
**Service liên quan**: `campaign-service`, `barcode-service`  
**Tham chiếu BRD**: Section 4.1 - Campaign Management

#### User Stories:
```
Là một Customer Account,
Tôi muốn tạo campaign mới cho sản phẩm của mình
Để có thể phân phối samples đến khách hàng target

Acceptance Criteria:
- Tôi có thể nhập tên campaign, mô tả, thời gian bắt đầu/kết thúc
- Tôi có thể chọn sản phẩm từ danh sách có sẵn
- Tôi có thể gán barcode pool với số lượng cụ thể
- Tôi có thể chọn locations/retail nodes để phân phối
- Tôi có thể preview campaign trước khi publish
- System tự động tạo UTM tracking codes
```

#### Functional Specifications:

| Chức năng | Input | Output | Business Rules |
|-----------|-------|--------|----------------|
| **Tạo Campaign** | Tên, mô tả, ngày bắt đầu/kết thúc, sản phẩm | Campaign ID, URL tracking | Ngày kết thúc > ngày bắt đầu |
| **Gán Barcode Pool** | Campaign ID, số lượng barcode | Pool assignment confirmation | Số lượng <= available barcodes |
| **Chọn Locations** | Campaign ID, danh sách location IDs | Location assignment | Locations phải active và verified |
| **UTM Tracking** | Campaign ID, source, medium | UTM parameters | Auto-generate unique tracking codes |

#### API Endpoints:
- `POST /api/campaigns` - Tạo campaign mới
- `PUT /api/campaigns/{id}` - Cập nhật campaign
- `GET /api/campaigns` - Lấy danh sách campaigns
- `POST /api/campaigns/{id}/barcodes` - Gán barcode pool
- `POST /api/campaigns/{id}/locations` - Gán locations

#### Acceptance Criteria:
- [ ] Campaign có thể được tạo trong < 2 phút
- [ ] UTM tracking codes là unique và traceable
- [ ] Preview functionality hoạt động chính xác
- [ ] Role-based access control được enforce
- [ ] Audit logs được tạo cho mọi thay đổi

---

### FR-002: Xác thực người dùng 🔴
**Mô tả**: Hệ thống thực hiện xác thực người dùng qua OTP (SMS/Email) và các biện pháp chống spam để đảm bảo chất lượng dữ liệu.

**Actors**: End User (khách hàng cuối)  
**Service liên quan**: `auth-service`, `notification-service`, `user-service`  
**Tham chiếu BRD**: Section 4.1 - Customer Verification

#### User Stories:
```
Là một khách hàng,
Tôi muốn xác thực thông tin của mình một cách an toàn
Để nhận được barcode/voucher hợp lệ

Acceptance Criteria:
- Tôi có thể chọn xác thực qua SMS hoặc Email
- Tôi nhận được OTP 6 chữ số trong vòng 30 giây
- Tôi có tối đa 3 lần thử nhập OTP
- OTP có hiệu lực trong 5 phút
- System block tôi nếu có hành vi spam
```

#### Functional Specifications:

| Chức năng | Input | Output | Business Rules |
|-----------|-------|--------|----------------|
| **Gửi OTP** | Số điện thoại/Email | OTP code (6 digits) | Rate limit: 1 OTP/minute/number |
| **Xác thực OTP** | OTP code, session ID | Verification status | Max 3 attempts, 5 min expiry |
| **Chống Spam** | Device info, IP, patterns | Risk score (0-100) | Auto-block nếu score > 80 |
| **Consent Management** | Checkbox selections | Consent flags | GDPR/PDPA compliance |

#### Security Features:
- **Rate Limiting**: 1 OTP request/phút/số điện thoại
- **Device Fingerprinting**: Browser, IP, screen resolution tracking
- **CAPTCHA**: reCAPTCHA v3 integration
- **Blacklist**: Disposable email domains, suspicious patterns

#### API Endpoints:
- `POST /api/auth/send-otp` - Gửi OTP
- `POST /api/auth/verify-otp` - Xác thực OTP
- `GET /api/auth/risk-score` - Kiểm tra risk score
- `POST /api/users/consent` - Cập nhật consent

#### Acceptance Criteria:
- [ ] OTP delivery rate ≥ 95%
- [ ] Verification success rate ≥ 90%
- [ ] Fraud detection accuracy ≥ 85%
- [ ] Response time < 2 seconds cho verification
- [ ] Compliance với PDPA/GDPR requirements

---

### FR-003: Phân phối Barcode/Voucher 🔴
**Mô tả**: Hệ thống tự động cấp phát barcode/voucher duy nhất cho người dùng đã xác thực, đảm bảo single-use và time-limited.

**Actors**: System (automated), End User  
**Service liên quan**: `barcode-service`, `campaign-service`  
**Tham chiếu BRD**: Section 4.1 - Barcode Distribution

#### User Stories:
```
Là một khách hàng đã xác thực,
Tôi muốn nhận barcode/voucher ngay lập tức
Để có thể đổi sản phẩm tại cửa hàng

Acceptance Criteria:
- Tôi nhận được barcode trong vòng 5 giây sau khi verify OTP
- Barcode được hiển thị dưới dạng QR code và số
- Tôi có thể lưu barcode vào Apple Wallet/Google Pay
- Tôi nhận được email/SMS confirmation với barcode
- Barcode có thông tin expiry date rõ ràng
```

#### Functional Specifications:

| Chức năng | Input | Output | Business Rules |
|-----------|-------|--------|----------------|
| **Generate Barcode** | User ID, Campaign ID | Unique barcode | Single-use, time-limited |
| **QR Code Creation** | Barcode data | QR image (PNG) | 300x300 pixels minimum |
| **Wallet Integration** | Barcode, metadata | Wallet pass file | Apple Wallet/Google Pay format |
| **Notification** | User contact, barcode | Email/SMS | Template-based messaging |

#### Barcode Format:
```
Structure: [CAMPAIGN_PREFIX][RANDOM_8_DIGITS][CHECK_DIGIT]
Example: COC2024A12345678C
- COC: Campaign identifier (3 chars)
- 2024A: Year + batch identifier
- 12345678: Random digits
- C: Check digit (validation)
```

#### API Endpoints:
- `POST /api/barcodes/generate` - Tạo barcode mới
- `GET /api/barcodes/{code}/validate` - Validate barcode
- `POST /api/barcodes/{code}/wallet` - Tạo wallet pass
- `GET /api/barcodes/status/{code}` - Kiểm tra trạng thái

#### Acceptance Criteria:
- [ ] Barcode generation time < 1 second
- [ ] 100% unique barcode guarantee
- [ ] QR codes scannable bằng standard readers
- [ ] Wallet integration success rate ≥ 90%
- [ ] Email/SMS delivery rate ≥ 95%

---

### FR-004: Redemption tại POS 🔴
**Mô tả**: Hệ thống hỗ trợ scan và redeem barcode tại các điểm bán lẻ với khả năng offline sync và real-time status update.

**Actors**: Serving Account (nhân viên bán hàng)  
**Service liên quan**: `redemption-service`, `barcode-service`  
**Tham chiếu BRD**: Section 4.1 - POS Integration

#### User Stories:
```
Là một nhân viên tại Circle K,
Tôi muốn scan barcode của khách hàng một cách nhanh chóng
Để xử lý redemption và cập nhật inventory

Acceptance Criteria:
- Tôi có thể scan QR code bằng camera điện thoại/tablet
- System hiển thị thông tin sản phẩm và campaign ngay lập tức
- Tôi có thể confirm redemption với 1 click
- System hoạt động khi mất mạng (offline mode)
- Dữ liệu được sync khi có mạng trở lại
```

#### Functional Specifications:

| Chức năng | Input | Output | Business Rules |
|-----------|-------|--------|----------------|
| **Scan Barcode** | QR/Barcode image | Product info, validity | Real-time validation |
| **Process Redemption** | Barcode, location, staff ID | Redemption record | Single-use enforcement |
| **Offline Storage** | Redemption data | Local queue | IndexedDB storage |
| **Sync Process** | Queued data | Server update | Automatic when online |

#### Offline Capabilities:
```mermaid
graph TB
    subgraph "Online Mode"
        O1[Scan Barcode] --> O2[Real-time Validation]
        O2 --> O3[Process Redemption]
        O3 --> O4[Update Server]
    end
    
    subgraph "Offline Mode"
        F1[Scan Barcode] --> F2[Local Validation]
        F2 --> F3[Queue Redemption]
        F3 --> F4[Store in IndexedDB]
    end
    
    subgraph "Sync Process"
        S1[Network Available] --> S2[Upload Queued Data]
        S2 --> S3[Resolve Conflicts]
        S3 --> S4[Update Local Status]
    end
    
    F4 --> S1
    O4 --> S4
    
    style O2 fill:#e8f5e8
    style F2 fill:#fff3e0
    style S2 fill:#e3f2fd
```

#### API Endpoints:
- `POST /api/redemptions/scan` - Scan và validate barcode
- `POST /api/redemptions/process` - Xử lý redemption
- `POST /api/redemptions/batch-sync` - Sync offline data
- `GET /api/redemptions/status` - Kiểm tra sync status

#### Acceptance Criteria:
- [ ] Scan response time < 2 seconds
- [ ] Offline functionality hoạt động ≥ 8 hours
- [ ] Sync success rate ≥ 99% khi có mạng
- [ ] Conflict resolution automatic
- [ ] Audit trail đầy đủ cho mọi redemption

---

### FR-005: Landing Page và Form 🔴
**Mô tả**: Hệ thống cung cấp mobile-first landing page với form thu thập thông tin khách hàng, quiz preferences và consent management.

**Actors**: End User  
**Service liên quan**: `user-service`, `campaign-service`  
**Tham chiếu BRD**: Section 4.1 - Data Collection

#### User Stories:
```
Là một khách hàng scan QR code,
Tôi muốn điền thông tin một cách nhanh chóng và dễ dàng
Để hoàn thành quá trình nhận sample

Acceptance Criteria:
- Landing page load trong < 3 giây trên 3G
- Form có thể điền hoàn tất trong < 30 giây
- Tôi thấy rõ privacy policy và consent options
- Form validation real-time và user-friendly
- Tôi có thể access User Portal sau khi submit
```

#### Functional Specifications:

| Chức năng | Input | Output | Business Rules |
|-----------|-------|--------|----------------|
| **Form Rendering** | Campaign ID, device type | Responsive form | Mobile-first design |
| **Data Validation** | Form fields | Validation errors | Real-time validation |
| **Quiz Engine** | User responses | Preference profile | Optional completion |
| **Consent Management** | Checkbox selections | Consent record | GDPR/PDPA compliance |

#### Form Fields:
```typescript
interface UserForm {
  // Bắt buộc
  fullName: string;           // Họ và tên
  email: string;              // Email
  phoneNumber: string;        // Số điện thoại
  
  // Tùy chọn
  age?: number;               // Tuổi
  gender?: 'M' | 'F' | 'Other'; // Giới tính
  location?: string;          // Khu vực
  
  // Quiz preferences (campaign-specific)
  preferences?: {
    dietaryRestrictions?: string[];
    brandPreferences?: string[];
    shoppingHabits?: string[];
  };
  
  // Consent
  marketingConsent: boolean;  // Đồng ý marketing
  dataProcessingConsent: boolean; // Đồng ý xử lý dữ liệu
}
```

#### API Endpoints:
- `GET /api/landing/{campaignId}` - Lấy landing page config
- `POST /api/forms/validate` - Validate form data
- `POST /api/forms/submit` - Submit form
- `GET /api/user-portal/link` - Tạo User Portal link

#### Acceptance Criteria:
- [ ] Page load time < 3 seconds trên 3G
- [ ] Form completion rate ≥ 90%
- [ ] Mobile usability score ≥ 95%
- [ ] Accessibility compliance (WCAG 2.1)
- [ ] Cross-browser compatibility

---

### FR-006: Báo cáo và Analytics 🔴
**Mô tả**: Hệ thống cung cấp dashboard real-time với funnel tracking, campaign performance và khả năng export dữ liệu.

**Actors**: Admin, Group Admin, Customer Account  
**Service liên quan**: `analytics-service`  
**Tham chiếu BRD**: Section 4.1 - Analytics & Reporting

#### User Stories:
```
Là một brand manager,
Tôi muốn xem hiệu quả campaign real-time
Để có thể điều chỉnh strategy kịp thời

Acceptance Criteria:
- Dashboard update mỗi 5 phút
- Tôi thấy được funnel từ scan → redeem
- Tôi có thể filter theo location, time range
- Tôi có thể export data CSV/Excel
- Tôi thấy được cost per verified lead
```

#### Dashboard Metrics:

```mermaid
graph TB
    subgraph "Funnel Metrics"
        F1[QR Scans: 10,000]
        F2[Form Submissions: 8,500]
        F3[OTP Verified: 7,650]
        F4[Barcodes Issued: 7,650]
        F5[Redemptions: 6,885]
    end
    
    subgraph "Performance KPIs"
        K1[Conversion Rate: 85%]
        K2[Cost per Lead: $0.35]
        K3[Fraud Rate: 3.2%]
        K4[Average Time to Redeem: 2.3 days]
    end
    
    F1 --> F2 --> F3 --> F4 --> F5
    F5 --> K1 --> K2 --> K3 --> K4
    
    style F1 fill:#e3f2fd
    style F5 fill:#e8f5e8
    style K2 fill:#fff3e0
```

#### Report Types:

| Report | Frequency | Format | Recipients |
|--------|-----------|--------|------------|
| **Campaign Summary** | Daily | Dashboard | Brand managers |
| **Funnel Analysis** | Real-time | Dashboard | Marketing teams |
| **Cost Analysis** | Weekly | PDF/Email | Finance teams |
| **Fraud Report** | Daily | Dashboard | Security teams |
| **Location Performance** | Weekly | CSV Export | Operations teams |

#### API Endpoints:
- `GET /api/analytics/dashboard` - Dashboard data
- `GET /api/analytics/funnel` - Funnel metrics
- `POST /api/analytics/export` - Export data
- `GET /api/analytics/cost-analysis` - Cost breakdown

#### Acceptance Criteria:
- [ ] Dashboard load time < 5 seconds
- [ ] Data accuracy ≥ 99.5%
- [ ] Real-time updates trong 5 minutes
- [ ] Export completion time < 30 seconds
- [ ] Support concurrent 100+ users

---

### FR-007: User Portal 🔴
**Mô tả**: PWA cho end users xem lịch sử sampling, track redemption status, nhận notifications và manage consent.

**Actors**: User Role (End User)  
**Service liên quan**: `user-service`, `notification-service`  
**Tham chiếu BRD**: Section 4.1 - User Experience

#### User Stories:
```
Là một khách hàng đã nhận samples,
Tôi muốn theo dõi lịch sử và trạng thái redemption
Để quản lý các samples của mình

Acceptance Criteria:
- Tôi login bằng phone/email
- Tôi thấy danh sách tất cả samples đã nhận
- Tôi biết trạng thái từng barcode (chưa dùng/đã dùng/hết hạn)
- Tôi nhận push notifications khi sắp hết hạn
- Tôi có thể withdraw consent/opt-out
```

#### Portal Features:

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Sample History** | Danh sách products đã nhận theo thời gian | User engagement tracking |
| **Redemption Status** | Real-time status của mỗi barcode | Transparency, trust building |
| **Notification Center** | Push/SMS/Email notifications | User retention |
| **Consent Management** | Update preferences, opt-out options | GDPR compliance |
| **Support Tickets** | Report issues, contact support | Customer service |

#### Portal Flow:
```mermaid
graph TB
    A[User Access Portal] --> B{Authenticated?}
    B -->|No| C[Login/Register]
    B -->|Yes| D[Dashboard]
    
    C --> D
    D --> E[Sample History]
    D --> F[Notifications]
    D --> G[Settings]
    
    E --> H[View Details]
    E --> I[Track Status]
    
    F --> J[Mark as Read]
    F --> K[Notification Preferences]
    
    G --> L[Update Profile]
    G --> M[Consent Management]
    G --> N[Support Tickets]
    
    style D fill:#e3f2fd
    style E fill:#e8f5e8
    style G fill:#fff3e0
```

#### API Endpoints:
- `GET /api/user-portal/dashboard` - User dashboard data
- `GET /api/user-portal/samples` - Sample history
- `POST /api/user-portal/notifications/read` - Mark notifications
- `PUT /api/user-portal/consent` - Update consent
- `POST /api/user-portal/support` - Create support ticket

#### Acceptance Criteria:
- [ ] PWA installable on mobile devices
- [ ] Offline viewing cho sample history
- [ ] Push notification delivery rate ≥ 90%
- [ ] Page load time < 3 seconds
- [ ] User engagement rate ≥ 70%

---

### FR-008: Role-based Access Control 🔴
**Mô tả**: Hệ thống phân quyền chi tiết cho 6 user roles với audit logging và security compliance.

**Actors**: Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role  
**Service liên quan**: `auth-service`  
**Tham chiếu**: `Access_Control_Tree_Grok.md`

#### Permission Matrix:

| Module | Admin | Group Admin | Customer Account | Serving Account | Auditor | User Role |
|--------|-------|-------------|------------------|-----------------|---------|-----------|
| Campaign Management | Full | Group scope | Own campaigns | None | View logs | None |
| Barcode Operations | Full | Group scope | Own pools | Scan only | View logs | View own |
| User Management | Full | Group users | None | None | View logs | Own profile |
| Analytics | Global | Group reports | Own data | None | Compliance | Personal stats |
| System Config | Full | None | None | None | None | None |

#### Security Features:
- **JWT Authentication** với refresh tokens
- **Multi-factor Authentication** cho admin roles
- **Session Management** với automatic timeout
- **Audit Logging** cho tất cả sensitive operations
- **IP Whitelisting** cho admin accounts

#### API Endpoints:
- `POST /api/auth/login` - Authentication
- `POST /api/auth/refresh` - Token refresh
- `GET /api/auth/permissions` - User permissions
- `POST /api/auth/mfa/setup` - Setup MFA
- `GET /api/audit/logs` - Audit trail

#### Acceptance Criteria:
- [ ] Zero unauthorized access incidents
- [ ] Permission check time < 100ms
- [ ] Audit log completeness 100%
- [ ] MFA setup rate ≥ 90% for admins
- [ ] Session security compliance

---

## 4.3 Should-Have Requirements (Phase 2)

### FR-009: Fraud Detection nâng cao 🟡
**Mô tả**: Machine learning-based fraud detection với device fingerprinting và anomaly detection.

**Service liên quan**: `auth-service` enhanced với ML models  
**Business Value**: Giảm fraud rate từ 5% xuống <2%

#### ML Features:
- Behavioral pattern analysis
- Device fingerprinting correlation
- Velocity checks và geographic analysis
- Risk scoring với automatic blocking

---

### FR-010: Inventory Reconciliation 🟡
**Mô tả**: Quản lý stock theo batch với expiry tracking và automatic reconciliation.

**Service liên quan**: `inventory-service` (new), `barcode-service`  
**Business Value**: Inventory accuracy >99%, waste reduction

#### Features:
- Batch tracking với expiry dates
- Automatic reconciliation với POS systems
- Waste reporting và optimization
- Supplier integration APIs

---

### FR-011: A/B Testing Framework 🟡
**Mô tả**: Built-in A/B testing cho landing pages, incentives và user flows.

**Service liên quan**: `campaign-service`, `analytics-service`  
**Business Value**: Conversion optimization, data-driven improvements

#### Features:
- Experiment configuration interface
- Traffic splitting và control groups
- Statistical significance testing
- Automatic winner selection

---

## 4.4 Nice-to-Have Requirements (Phase 3)

### FR-012: AI Campaign Optimization 🟠
**Mô tả**: AI-powered campaign optimization với predictive analytics.

**Service liên quan**: `ai-service` (new)  
**Business Value**: Automatic ROI optimization, predictive insights

---

### FR-013: Sustainability Tracking 🟠
**Mô tả**: Carbon footprint tracking và eco-metrics cho campaigns.

**Service liên quan**: `sustainability-service` (new)  
**Business Value**: ESG compliance, Gen Z appeal

---

## 4.5 Tổng kết và Dependencies

### 4.5.1 Implementation Priority
```mermaid
gantt
    title Functional Requirements Implementation Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1 (MVP)
    FR-001 Campaign Mgmt    :done, fr001, 2025-01-01, 30d
    FR-002 User Auth        :done, fr002, 2025-01-15, 45d
    FR-003 Barcode Dist     :active, fr003, 2025-02-01, 30d
    FR-004 POS Redemption   :fr004, 2025-02-15, 45d
    FR-005 Landing Page     :fr005, 2025-01-01, 60d
    FR-006 Analytics        :fr006, 2025-03-01, 30d
    FR-007 User Portal      :fr007, 2025-03-15, 45d
    FR-008 RBAC            :fr008, 2025-01-01, 90d
    
    section Phase 2
    FR-009 Fraud Detection  :fr009, 2025-06-01, 60d
    FR-010 Inventory        :fr010, 2025-07-01, 45d
    FR-011 A/B Testing      :fr011, 2025-08-01, 30d
```

### 4.5.2 Cross-Functional Dependencies
- FR-002 (Auth) → cần trước FR-003, FR-004, FR-006, FR-007
- FR-001 (Campaign) → cần trước FR-003, FR-005, FR-006
- FR-003 (Barcode) → cần trước FR-004, FR-007
- FR-008 (RBAC) → cần cho tất cả modules

---

**Trạng thái tài liệu**: ✅ Sẵn sàng cho Part05  
**Hành động tiếp theo**: Định nghĩa Non-Functional Requirements  
**Dependencies**: Functional specs confirmed  
**Người sở hữu**: Đội phân tích hệ thống

# 📘 Part05 - Yêu cầu phi chức năng (Non-Functional Requirements)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích hệ thống  
**Trạng thái**: ✅ Hoàn thành  

---

## 5.1 Tổng quan yêu cầu phi chức năng

### 5.1.1 Phân loại NFR theo ISO 25010
Hệ thống Product Sampling Platform phải đáp ứng các **quality attributes** sau theo chuẩn ISO 25010:

```mermaid
graph TB
    subgraph "ISO 25010 Quality Model"
        QM[Product Quality]
        
        QM --> P[Performance Efficiency]
        QM --> R[Reliability]  
        QM --> S[Security]
        QM --> M[Maintainability]
        QM --> U[Usability]
        QM --> C[Compatibility]
        QM --> PT[Portability]
        QM --> F[Functional Suitability]
    end
    
    subgraph "PSP Focus Areas"
        P --> P1[Response Time]
        P --> P2[Throughput]
        P --> P3[Resource Usage]
        
        R --> R1[Availability]
        R --> R2[Fault Tolerance]
        R --> R3[Recoverability]
        
        S --> S1[Authentication]
        S --> S2[Data Protection]
        S --> S3[Compliance]
    end
    
    style P fill:#e3f2fd
    style R fill:#e8f5e8
    style S fill:#ffebee
```

### 5.1.2 Mức độ ưu tiên NFR
| Nhóm NFR | Mức ưu tiên | Lý do business |
|----------|-------------|----------------|
| **Security** | 🔴 Critical | GDPR/PDPA compliance, fraud prevention |
| **Performance** | 🔴 Critical | User experience, cost optimization |
| **Reliability** | 🟡 High | Business continuity, brand trust |
| **Scalability** | 🟡 High | Growth targets (10M users by 2027) |
| **Usability** | 🟡 High | Conversion rate optimization |
| **Maintainability** | 🟠 Medium | Development efficiency |

---

## 5.2 Performance Requirements (NFR-P)

### NFR-P01: Response Time Requirements
**Mô tả**: Hệ thống phải đảm bảo response time tối ưu cho user experience và business KPIs.

#### Performance Targets:

| Operation Type | Target (p95) | Target (p99) | Business Impact |
|----------------|--------------|--------------|-----------------|
| **API Authentication** | ≤ 500ms | ≤ 1s | User experience critical |
| **Form Submission** | ≤ 1s | ≤ 2s | Conversion rate impact |
| **Barcode Generation** | ≤ 800ms | ≤ 1.5s | User waiting time |
| **POS Redemption** | ≤ 2s | ≤ 3s | Store operation efficiency |
| **Dashboard Loading** | ≤ 3s | ≤ 5s | Brand user satisfaction |
| **Analytics Export** | ≤ 10s | ≤ 30s | Acceptable for background task |

#### Measurement Strategy:
```mermaid
graph LR
    subgraph "Performance Monitoring"
        M1[Application Performance Monitoring]
        M2[Real User Monitoring]
        M3[Synthetic Monitoring]
    end
    
    subgraph "Alerting Thresholds"
        A1[Warning: >80% of target]
        A2[Critical: >100% of target]
        A3[Emergency: >150% of target]
    end
    
    M1 --> A1
    M2 --> A2
    M3 --> A3
    
    style A1 fill:#fff3e0
    style A2 fill:#ffebee
    style A3 fill:#ffcdd2
```

#### Acceptance Criteria:
- [ ] 95% của API calls đáp ứng response time targets
- [ ] Performance degradation <10% trong peak hours
- [ ] Automatic alerting khi vượt thresholds
- [ ] Performance reports hàng tuần cho optimization

---

### NFR-P02: Throughput Requirements
**Mô tả**: Hệ thống phải xử lý peak load trong các campaign lớn.

#### Throughput Targets:

| Service | Normal Load | Peak Load | Burst Capacity |
|---------|-------------|-----------|----------------|
| **auth-service** | 200 RPS | 1,000 RPS | 2,000 RPS (5 min) |
| **campaign-service** | 100 RPS | 500 RPS | 1,000 RPS |
| **barcode-service** | 500 RPS | 2,000 RPS | 5,000 RPS |
| **redemption-service** | 300 RPS | 1,500 RPS | 3,000 RPS |
| **analytics-service** | 50 RPS | 200 RPS | 500 RPS |
| **notification-service** | 1,000 messages/min | 10,000 messages/min | 50,000 messages/min |

#### Load Distribution Strategy:
- **Horizontal Scaling**: Auto-scaling containers based on CPU/memory
- **Load Balancing**: Round-robin với health checks
- **Caching**: Redis caching cho frequent data
- **CDN**: Static assets delivery optimization

#### Acceptance Criteria:
- [ ] Peak load handling không có service degradation
- [ ] Auto-scaling response time < 2 minutes
- [ ] Load balancing efficiency ≥ 95%
- [ ] Cache hit ratio ≥ 80% cho frequent operations

---

### NFR-P03: Resource Usage Optimization
**Mô tả**: Hiệu quả sử dụng tài nguyên để tối ưu infrastructure cost.

#### Resource Targets:

| Resource Type | Normal Usage | Peak Usage | Optimization Target |
|---------------|--------------|------------|-------------------|
| **CPU Usage** | <60% | <80% | Auto-scaling trigger at 70% |
| **Memory Usage** | <70% | <85% | Memory leak prevention |
| **Database Connections** | <200 | <500 | Connection pooling |
| **Storage Growth** | <10GB/month | <50GB/month | Data archival strategy |

#### Cost Optimization:
- **Right-sizing**: Regular review của instance sizes
- **Reserved Instances**: Cost optimization cho predictable workloads
- **Spot Instances**: Non-critical workloads optimization
- **Data Lifecycle**: Automatic archival của old data

---

## 5.3 Reliability Requirements (NFR-R)

### NFR-R01: Availability Requirements
**Mô tả**: Hệ thống phải đảm bảo uptime cao để không ảnh hưởng business operations.

#### Availability Targets:

| Service Tier | Uptime Target | Downtime/Month | Business Impact |
|--------------|---------------|----------------|-----------------|
| **Critical Services** | 99.9% | <45 minutes | Revenue loss, brand damage |
| **Important Services** | 99.5% | <4 hours | User experience impact |
| **Supporting Services** | 99% | <7 hours | Reduced functionality |

#### Service Classification:
```mermaid
graph TB
    subgraph "Critical (99.9%)"
        C1[auth-service]
        C2[barcode-service]
        C3[redemption-service]
    end
    
    subgraph "Important (99.5%)"
        I1[campaign-service]
        I2[user-service]
        I3[notification-service]
    end
    
    subgraph "Supporting (99%)"
        S1[analytics-service]
        S2[integration-service]
    end
    
    style C1 fill:#ffcdd2
    style C2 fill:#ffcdd2
    style C3 fill:#ffcdd2
    style I1 fill:#fff3e0
    style S1 fill:#e8f5e8
```

#### High Availability Architecture:
- **Multi-AZ Deployment**: Services deployed across multiple availability zones
- **Load Balancers**: Health check và automatic failover
- **Database Replication**: Master-slave setup với automatic failover
- **Circuit Breakers**: Prevent cascade failures

---

### NFR-R02: Fault Tolerance
**Mô tả**: Hệ thống phải graceful degradation khi có component failures.

#### Fault Tolerance Strategies:

| Failure Type | Detection Time | Recovery Strategy | RTO Target |
|--------------|----------------|-------------------|------------|
| **Service Crash** | <30 seconds | Auto-restart, health check | <2 minutes |
| **Database Failure** | <1 minute | Failover to replica | <5 minutes |
| **Network Partition** | <2 minutes | Retry với exponential backoff | <10 minutes |
| **External API Failure** | <30 seconds | Circuit breaker, fallback | <1 minute |

#### Resilience Patterns:
- **Retry Logic**: Exponential backoff với jitter
- **Circuit Breaker**: Prevent cascading failures
- **Bulkhead**: Isolate critical resources
- **Timeout**: Prevent resource exhaustion

---

### NFR-R03: Disaster Recovery
**Mô tả**: Khả năng phục hồi từ disasters lớn với minimal data loss.

#### DR Objectives:
- **Recovery Time Objective (RTO)**: ≤ 4 hours
- **Recovery Point Objective (RPO)**: ≤ 15 minutes
- **Data Backup Frequency**: Every 6 hours
- **Cross-region Replication**: Real-time cho critical data

#### DR Plan Components:
```mermaid
graph TB
    subgraph "Primary Region"
        P1[Production Environment]
        P2[Primary Database]
        P3[File Storage]
    end
    
    subgraph "DR Region"
        D1[Standby Environment]
        D2[Replica Database]
        D3[Backup Storage]
    end
    
    subgraph "Recovery Process"
        R1[Automated Failover]
        R2[Data Synchronization]
        R3[Service Validation]
        R4[Traffic Redirect]
    end
    
    P1 -.-> D1
    P2 -.-> D2
    P3 -.-> D3
    
    D1 --> R1 --> R2 --> R3 --> R4
    
    style P1 fill:#e3f2fd
    style D1 fill:#fff3e0
    style R1 fill:#e8f5e8
```

---

## 5.4 Security Requirements (NFR-S)

### NFR-S01: Authentication & Authorization
**Mô tả**: Bảo mật access control với multi-layer authentication.

#### Authentication Requirements:

| User Type | Authentication Method | Session Duration | MFA Requirement |
|-----------|----------------------|------------------|-----------------|
| **Admin** | Username/Password + MFA | 4 hours | Mandatory |
| **Group Admin** | Username/Password + MFA | 8 hours | Mandatory |
| **Customer Account** | Username/Password | 24 hours | Optional |
| **Serving Account** | PIN/Biometric | 12 hours | Device-based |
| **End User** | OTP (SMS/Email) | 30 days | Phone verification |

#### Authorization Framework:
- **Role-Based Access Control (RBAC)**: 6 defined roles với permission matrix
- **Resource-Level Permissions**: Granular control per campaign/data
- **API Rate Limiting**: Prevent abuse và DDoS
- **JWT Tokens**: Stateless authentication với refresh mechanism

#### Security Standards:
- **OWASP Top 10**: Compliance với latest security guidelines
- **OAuth 2.0**: Industry standard authorization framework
- **PKCE**: Proof Key for Code Exchange cho mobile security

---

### NFR-S02: Data Protection
**Mô tả**: Bảo vệ dữ liệu cá nhân (PII) và business data.

#### Encryption Requirements:

| Data State | Encryption Standard | Key Management | Compliance |
|------------|-------------------|----------------|------------|
| **Data at Rest** | AES-256 | AWS KMS/HashiCorp Vault | GDPR/PDPA |
| **Data in Transit** | TLS 1.3 | Certificate rotation | Industry standard |
| **Database Fields** | Field-level encryption | Per-tenant keys | PII protection |
| **Backup Data** | AES-256 | Separate key store | Compliance requirement |

#### Data Classification:
```mermaid
graph TB
    subgraph "Data Classification"
        DC1[Public Data]
        DC2[Internal Data] 
        DC3[Confidential Data]
        DC4[Restricted Data]
    end
    
    subgraph "Protection Levels"
        PL1[No encryption required]
        PL2[Standard encryption]
        PL3[Enhanced encryption + access control]
        PL4[Maximum security + audit logs]
    end
    
    DC1 --> PL1
    DC2 --> PL2
    DC3 --> PL3
    DC4 --> PL4
    
    style DC4 fill:#ffcdd2
    style DC3 fill:#fff3e0
    style PL4 fill:#ffcdd2
```

#### PII Handling:
- **Data Minimization**: Chỉ collect data cần thiết
- **Pseudonymization**: Hash PII fields khi possible
- **Right to Erasure**: GDPR deletion capabilities
- **Consent Management**: Granular consent tracking

---

### NFR-S03: Compliance Requirements
**Mô tả**: Tuân thủ các quy định về bảo vệ dữ liệu và security standards.

#### Regulatory Compliance:

| Regulation | Scope | Key Requirements | Implementation |
|------------|-------|------------------|----------------|
| **GDPR** | EU customers | Consent, deletion, portability | Consent engine, data export APIs |
| **PDPA** | Vietnam market | Local data protection | Vietnamese compliance framework |
| **SOC 2** | Enterprise customers | Security controls audit | Annual certification |
| **ISO 27001** | Information security | Security management system | Security policies, procedures |

#### Audit & Monitoring:
- **Audit Logging**: Immutable logs cho tất cả sensitive operations
- **Security Monitoring**: Real-time threat detection
- **Vulnerability Management**: Regular security scans
- **Incident Response**: 24/7 security incident handling

#### Privacy Features:
- **Cookie Consent**: GDPR-compliant cookie management
- **Data Subject Rights**: Portal for data requests
- **Privacy by Design**: Built-in privacy controls
- **Cross-border Data Transfer**: Proper legal mechanisms

---

## 5.5 Scalability Requirements (NFR-SC)

### NFR-SC01: User Scalability
**Mô tả**: Hệ thống phải scale để support growth targets.

#### Growth Projections:

| Metric | Year 1 | Year 2 | Year 3 | Scaling Strategy |
|--------|--------|--------|--------|------------------|
| **Active Users** | 100K | 1M | 10M | Horizontal scaling |
| **Concurrent Users** | 1K | 10K | 100K | Auto-scaling groups |
| **Campaigns/Month** | 100 | 1K | 10K | Database partitioning |
| **Redemptions/Day** | 10K | 100K | 1M | Event-driven architecture |

#### Scaling Architecture:
```mermaid
graph TB
    subgraph "Load Balancer Layer"
        LB[Application Load Balancer]
    end
    
    subgraph "Application Layer"
        AS1[Auto Scaling Group]
        AS2[Container Orchestration]
        AS3[Microservices Mesh]
    end
    
    subgraph "Data Layer"
        DB1[Database Sharding]
        DB2[Read Replicas]
        DB3[Distributed Cache]
    end
    
    subgraph "Storage Layer"
        S1[Object Storage]
        S2[CDN Distribution]
        S3[Data Archival]
    end
    
    LB --> AS1 --> DB1 --> S1
    AS1 --> AS2 --> DB2 --> S2
    AS2 --> AS3 --> DB3 --> S3
    
    style AS1 fill:#e3f2fd
    style DB1 fill:#e8f5e8
    style S1 fill:#fff3e0
```

---

### NFR-SC02: Data Scalability
**Mô tả**: Quản lý data volume growth hiệu quả.

#### Data Growth Projections:

| Data Type | Volume/Month | Growth Rate | Storage Strategy |
|-----------|--------------|-------------|------------------|
| **User Profiles** | 100K records | 50%/year | MongoDB sharding |
| **Campaign Data** | 1K campaigns | 100%/year | PostgreSQL partitioning |
| **Redemption Logs** | 1M records | 200%/year | Time-series database |
| **Analytics Data** | 10GB | 150%/year | Data warehouse |

#### Data Management:
- **Data Lifecycle Management**: Automatic archival policies
- **Data Compression**: Optimize storage costs
- **Data Partitioning**: Performance optimization
- **Data Replication**: Multi-region availability

---

## 5.6 Usability Requirements (NFR-U)

### NFR-U01: User Experience
**Mô tả**: Mobile-first design với excellent user experience.

#### UX Targets:

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| **Task Completion Rate** | ≥90% | User testing, analytics |
| **Time to Complete Form** | ≤30 seconds | User journey tracking |
| **Mobile Usability Score** | ≥95% | Google Mobile-Friendly Test |
| **User Satisfaction** | ≥4.5/5 | Post-interaction surveys |

#### Design Principles:
- **Mobile-First**: Design cho mobile trước, desktop sau
- **Progressive Disclosure**: Hiển thị information gradually
- **Consistent UI**: Design system cho consistency
- **Accessibility**: WCAG 2.1 AA compliance

---

### NFR-U02: Accessibility
**Mô tả**: Hệ thống accessible cho users với disabilities.

#### Accessibility Standards:
- **WCAG 2.1 Level AA**: Full compliance
- **Screen Reader Support**: ARIA labels và semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: 4.5:1 ratio minimum

#### Testing Requirements:
- **Automated Testing**: Accessibility scanners trong CI/CD
- **Manual Testing**: Regular testing với assistive technologies
- **User Testing**: Testing với users có disabilities

---

## 5.7 Compatibility Requirements (NFR-C)

### NFR-C01: Browser Compatibility
**Mô tả**: Support major browsers với backward compatibility.

#### Browser Support Matrix:

| Browser | Minimum Version | Market Share | Priority |
|---------|----------------|--------------|----------|
| **Chrome** | 90+ | 65% | Critical |
| **Safari** | 14+ | 20% | Critical |
| **Firefox** | 88+ | 8% | High |
| **Edge** | 90+ | 5% | Medium |
| **Samsung Internet** | 14+ | 2% | Medium (mobile focus) |

---

### NFR-C02: Device Compatibility
**Mô tả**: Optimal experience across devices.

#### Device Support:
- **iOS**: iPhone 8+ (iOS 14+)
- **Android**: Android 8+ (API level 26+)
- **Tablets**: iPad, Android tablets
- **Desktop**: Windows 10+, macOS 10.14+

---

## 5.8 Maintainability Requirements (NFR-M)

### NFR-M01: Code Quality
**Mô tả**: High-quality, maintainable codebase.

#### Quality Metrics:
- **Code Coverage**: ≥80% test coverage
- **Technical Debt**: <10% của total codebase
- **Code Duplication**: <5%
- **Cyclomatic Complexity**: ≤10 per function

#### Development Standards:
- **Coding Standards**: ESLint, Prettier configuration
- **Code Reviews**: Mandatory peer reviews
- **Documentation**: JSDoc comments, README files
- **Refactoring**: Regular technical debt reduction

---

## 5.9 NFR Testing Strategy

### 5.9.1 Performance Testing
```mermaid
graph TB
    subgraph "Performance Testing Types"
        PT1[Load Testing]
        PT2[Stress Testing]
        PT3[Volume Testing]
        PT4[Endurance Testing]
    end
    
    subgraph "Testing Tools"
        T1[JMeter]
        T2[K6]
        T3[Locust]
        T4[Artillery]
    end
    
    subgraph "Monitoring Tools"
        M1[New Relic]
        M2[Datadog]
        M3[Grafana]
        M4[Prometheus]
    end
    
    PT1 --> T1 --> M1
    PT2 --> T2 --> M2
    PT3 --> T3 --> M3
    PT4 --> T4 --> M4
    
    style PT1 fill:#e3f2fd
    style T1 fill:#e8f5e8
    style M1 fill:#fff3e0
```

### 5.9.2 Security Testing
- **Penetration Testing**: Quarterly security assessments
- **Vulnerability Scanning**: Weekly automated scans
- **OWASP Testing**: OWASP Top 10 compliance testing
- **Compliance Audits**: Annual compliance certifications

---

## 5.10 NFR Monitoring & Alerting

### 5.10.1 Monitoring Framework
| NFR Category | Key Metrics | Alert Thresholds | Response SLA |
|--------------|-------------|------------------|--------------|
| **Performance** | Response time, throughput | >target thresholds | 15 minutes |
| **Reliability** | Uptime, error rates | >99% availability | 5 minutes |
| **Security** | Failed logins, anomalies | Security incidents | Immediate |
| **Scalability** | Resource usage, capacity | >80% utilization | 30 minutes |

### 5.10.2 Alerting Strategy
- **Tiered Alerting**: Warning → Critical → Emergency
- **On-call Rotation**: 24/7 support coverage
- **Escalation Procedures**: Automatic escalation rules
- **Post-incident Reviews**: Learning từ incidents

---

## 5.11 NFR Acceptance Criteria

### 5.11.1 MVP Acceptance Thresholds
| NFR | Minimum Acceptable | Target | Stretch Goal |
|-----|-------------------|---------|--------------|
| **API Response Time** | <5s | <3s | <1s |
| **System Uptime** | >99% | >99.5% | >99.9% |
| **Security Compliance** | PDPA basic | GDPR + PDPA | SOC2 + ISO27001 |
| **Mobile Performance** | Usable | Good | Excellent |

### 5.11.2 Testing Completion Criteria
- [ ] Tất cả performance benchmarks đạt target
- [ ] Security audit passed without critical issues
- [ ] Accessibility testing WCAG 2.1 AA compliant
- [ ] Load testing confirms scalability targets
- [ ] Disaster recovery procedures tested successfully

---

**Trạng thái tài liệu**: ✅ Sẵn sàng cho Part06  
**Hành động tiếp theo**: Thiết kế System Architecture & Components  
**Dependencies**: NFR targets confirmed và approved  
**Người sở hữu**: Đội phân tích hệ thống

# 📘 Part06 - Kiến trúc hệ thống (System Architecture & Components)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội kiến trúc sư hệ thống  
**Trạng thái**: ✅ Hoàn thành  

---

## 6.1 Tổng quan kiến trúc hệ thống

### 6.1.1 Triết lý thiết kế
Kiến trúc Product Sampling Platform được thiết kế dựa trên các nguyên tắc:

- 🏗️ **Microservices Architecture**: Tách biệt business capabilities thành các services độc lập
- 🔄 **Event-Driven Design**: Loose coupling thông qua message queues và events  
- 📱 **API-First Approach**: Tất cả interactions thông qua well-defined APIs
- 🛡️ **Security by Design**: Multi-layer security được tích hợp từ đầu
- 📈 **Scalability Ready**: Horizontal scaling capabilities cho growth targets
- 🎯 **Domain-Driven Design**: Services organized theo business domains

### 6.1.2 Kiến trúc tổng thể (High-Level Architecture)

```mermaid
graph TB
    subgraph "Người dùng cuối"
        EU[End Users - Mobile/Web]
        BA[Brand Admins - Dashboard]
        SA[Store Staff - POS Tools]
    end
    
    subgraph "Tầng Load Balancer"
        CDN[CloudFlare CDN]
        LB[Application Load Balancer]
    end
    
    subgraph "Tầng API Gateway"
        AG[Kong API Gateway]
        Auth[Authentication Layer]
        RL[Rate Limiting]
    end
    
    subgraph "Tầng Microservices"
        AS[auth-service]
        CS[campaign-service]  
        BS[barcode-service]
        US[user-service]
        RS[redemption-service]
        ANS[analytics-service]
        NS[notification-service]
        IS[integration-service]
    end
    
    subgraph "Tầng Dữ liệu"
        MongoDB[(MongoDB Cluster)]
        PostgreSQL[(PostgreSQL)]
        Redis[(Redis Cluster)]
        S3[(Object Storage)]
    end
    
    subgraph "Hệ thống bên ngoài"
        CRM[CRM Systems]
        SMS[SMS Providers]
        POS[POS Systems]
        Analytics[GA4/Meta Pixel]
    end
    
    EU --> CDN --> LB --> AG
    BA --> CDN --> LB --> AG  
    SA --> CDN --> LB --> AG
    
    AG --> Auth --> RL
    
    RL --> AS
    RL --> CS
    RL --> BS
    RL --> US
    RL --> RS
    RL --> ANS
    RL --> NS
    RL --> IS
    
    AS --> Redis
    CS --> MongoDB
    BS --> PostgreSQL
    US --> MongoDB
    RS --> PostgreSQL
    ANS --> MongoDB
    NS --> Redis
    IS --> MongoDB
    
    CS --> S3
    ANS --> S3
    
    IS --> CRM
    NS --> SMS
    RS --> POS
    ANS --> Analytics
    
    style AG fill:#e3f2fd
    style AS fill:#ffebee
    style MongoDB fill:#e8f5e8
    style Redis fill:#fff3e0
```

### 6.1.3 Các nguyên tắc kiến trúc chính

| Nguyên tắc | Mô tả | Lợi ích |
|------------|-------|---------|
| **Single Responsibility** | Mỗi service chỉ chịu trách nhiệm một business domain | Dễ maintain, test, deploy độc lập |
| **Loose Coupling** | Services communicate qua APIs và events | Flexibility, fault isolation |
| **High Cohesion** | Related functions grouped trong cùng service | Code organization, team ownership |
| **Database per Service** | Mỗi service có database riêng | Data independence, technology flexibility |
| **Stateless Services** | Services không lưu state giữa requests | Horizontal scaling, load balancing |
| **Idempotency** | Operations có thể retry safely | Reliability, error recovery |

---

## 6.2 Kiến trúc Microservices chi tiết

### 6.2.1 Service Decomposition Strategy

**Phân chia services dựa trên business capabilities:**

```mermaid
graph TB
    subgraph "Core Business Domain"
        CBD1[Campaign Management]
        CBD2[Product Sampling]
        CBD3[Customer Management]
    end
    
    subgraph "Supporting Domain"
        SD1[Authentication & Authorization]
        SD2[Notifications]
        SD3[Analytics & Reporting]
        SD4[External Integrations]
    end
    
    subgraph "Infrastructure Domain"
        ID1[API Gateway]
        ID2[Service Discovery]
        ID3[Configuration Management]
        ID4[Monitoring & Logging]
    end
    
    CBD1 --> campaign-service
    CBD2 --> barcode-service
    CBD2 --> redemption-service
    CBD3 --> user-service
    
    SD1 --> auth-service
    SD2 --> notification-service
    SD3 --> analytics-service
    SD4 --> integration-service
    
    ID1 --> Kong
    ID2 --> Consul
    ID3 --> Vault
    ID4 --> ELK-Stack
    
    style CBD1 fill:#e3f2fd
    style SD1 fill:#ffebee
    style ID1 fill:#e8f5e8
```

### 6.2.2 Chi tiết từng Microservice

#### **auth-service** 🔐
**Chức năng chính**: Xử lý authentication, authorization và RBAC

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Passport | JWT authentication, OAuth2 support |
| **Database** | Redis | Session storage, token blacklist |
| **Security** | bcrypt, JWT | Password hashing, token management |
| **MFA** | TOTP libraries | Two-factor authentication |

**API Endpoints chính**:
- `POST /auth/login` - Đăng nhập người dùng
- `POST /auth/refresh` - Refresh JWT tokens
- `GET /auth/profile` - Lấy thông tin profile
- `POST /auth/mfa/setup` - Thiết lập MFA

#### **campaign-service** 📊
**Chức năng chính**: Quản lý campaigns, ads formats và business logic

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + TypeORM | Business logic, data validation |
| **Database** | MongoDB | Campaign data, ads formats |
| **File Storage** | AWS S3/MinIO | Ads format files, images |
| **Search** | Elasticsearch | Campaign search và filtering |

**Domain Models**:
```typescript
interface Campaign {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  barcodePoolId: string;
  adsFormats: AdsFormat[];
  locations: string[];
  utmTracking: UTMParams;
  status: 'draft' | 'active' | 'paused' | 'completed';
}
```

#### **barcode-service** 🎫
**Chức năng chính**: Tạo, quản lý và validate barcodes/vouchers

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Prisma | Transactional operations |
| **Database** | PostgreSQL | ACID compliance cho barcodes |
| **Queue** | Redis Bull | Batch barcode generation |
| **QR Generation** | qrcode library | QR code image generation |

**Barcode Lifecycle**:
```mermaid
stateDiagram-v2
    [*] --> Available
    Available --> Reserved : User verified
    Reserved --> Issued : Barcode generated
    Issued --> Redeemed : POS scan
    Issued --> Expired : Time limit exceeded
    Reserved --> Available : Timeout/Cancel
    Redeemed --> [*]
    Expired --> [*]
    
    note right of Reserved : 5 minutes timeout
    note right of Issued : Campaign end date
```

#### **user-service** 👥
**Chức năng chính**: Quản lý user profiles, verification và consent

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Mongoose | User data management |
| **Database** | MongoDB | Flexible user schemas |
| **Encryption** | crypto-js | PII field encryption |
| **Validation** | class-validator | Data validation rules |

#### **redemption-service** 🏪
**Chức năng chính**: POS integration, redemption processing và offline sync

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Prisma | Transactional redemptions |
| **Database** | PostgreSQL | Financial data integrity |
| **Offline Storage** | IndexedDB | Client-side queue |
| **Sync Engine** | Custom conflict resolution | Data consistency |

**Offline Sync Process**:
```mermaid
sequenceDiagram
    participant Staff as Store Staff
    participant App as POS App
    participant Local as Local Storage
    participant API as redemption-service
    
    Staff->>App: Scan barcode
    App->>Local: Check online status
    
    alt Online Mode
        App->>API: Validate & redeem
        API-->>App: Success response
        App->>Local: Cache result
    else Offline Mode
        App->>Local: Queue redemption
        App-->>Staff: Offline confirmation
        
        Note over App,API: When connection restored
        App->>API: Sync queued data
        API-->>App: Conflict resolution
        App->>Local: Update status
    end
```

#### **analytics-service** 📈
**Chức năng chính**: Data processing, reporting và dashboard APIs

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Aggregation | Complex data queries |
| **Database** | MongoDB | Time-series data |
| **Caching** | Redis | Report caching |
| **Export** | ExcelJS, csv-parser | Data export functionality |

#### **notification-service** 📱
**Chức năng chính**: OTP, email, SMS và push notifications

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Bull Queue | Async message processing |
| **Queue** | Redis | Message queue |
| **SMS** | Twilio SDK | SMS delivery |
| **Email** | SendGrid/SES | Email delivery |

#### **integration-service** 🔗
**Chức năng chính**: External API integrations và webhook management

| Thành phần | Công nghệ | Mô tả |
|------------|-----------|--------|
| **Framework** | NestJS + Axios | HTTP client integrations |
| **Database** | MongoDB | Integration configs |
| **Queue** | Redis | Webhook delivery |
| **Retry Logic** | Exponential backoff | Fault tolerance |

---

## 6.3 Data Architecture

### 6.3.1 Database Selection Strategy

**Database phù hợp cho từng use case:**

| Database | Use Cases | Services | Lý do lựa chọn |
|----------|-----------|----------|----------------|
| **PostgreSQL** | Transactional data, financial records | barcode-service, redemption-service | ACID compliance, data integrity |
| **MongoDB** | Document storage, flexible schemas | campaign-service, user-service, analytics-service | Schema flexibility, horizontal scaling |
| **Redis** | Caching, sessions, queues | auth-service, notification-service | In-memory performance, pub/sub |

### 6.3.2 Data Flow Architecture

```mermaid
graph LR
    subgraph "Data Sources"
        DS1[User Forms]
        DS2[POS Systems]
        DS3[Campaign Configs]
        DS4[External APIs]
    end
    
    subgraph "Data Processing"
        DP1[Real-time Ingestion]
        DP2[Data Validation]
        DP3[Business Logic]
        DP4[Event Publishing]
    end
    
    subgraph "Data Storage"
        DB1[Operational DBs]
        DB2[Analytics DB]
        DB3[Cache Layer]
        DB4[Object Storage]
    end
    
    subgraph "Data Consumption"
        DC1[Real-time Dashboard]
        DC2[Batch Reports]
        DC3[External Integrations]
        DC4[Mobile Apps]
    end
    
    DS1 --> DP1 --> DB1 --> DC1
    DS2 --> DP2 --> DB2 --> DC2
    DS3 --> DP3 --> DB3 --> DC3
    DS4 --> DP4 --> DB4 --> DC4
    
    style DP1 fill:#e3f2fd
    style DB1 fill:#e8f5e8
    style DC1 fill:#fff3e0
```

### 6.3.3 Data Consistency Strategy

**Event-driven data consistency:**

| Pattern | Sử dụng cho | Implementation |
|---------|-------------|----------------|
| **Saga Pattern** | Multi-service transactions | Orchestration-based saga |
| **Event Sourcing** | Audit trail, critical events | Event store với snapshots |
| **CQRS** | Read/write optimization | Separate query models |
| **Eventually Consistent** | Non-critical updates | Async event processing |

---

## 6.4 Security Architecture

### 6.4.1 Defense in Depth Strategy

```mermaid
graph TB
    subgraph "Network Security"
        NS1[WAF - Web Application Firewall]
        NS2[DDoS Protection]
        NS3[VPN Access]
    end
    
    subgraph "Application Security"
        AS1[API Gateway Security]
        AS2[Service-to-Service Auth]
        AS3[Input Validation]
        AS4[Output Encoding]
    end
    
    subgraph "Data Security"
        DS1[Encryption at Rest]
        DS2[Encryption in Transit]
        DS3[Key Management]
        DS4[Access Controls]
    end
    
    subgraph "Infrastructure Security"
        IS1[Container Security]
        IS2[Network Segmentation]
        IS3[Security Monitoring]
        IS4[Vulnerability Management]
    end
    
    NS1 --> AS1 --> DS1 --> IS1
    NS2 --> AS2 --> DS2 --> IS2
    NS3 --> AS3 --> DS3 --> IS3
    AS4 --> DS4 --> IS4
    
    style AS1 fill:#ffebee
    style DS1 fill:#ffebee
    style IS1 fill:#ffebee
```

### 6.4.2 Authentication & Authorization Flow

```mermaid
sequenceDiagram
    participant Client as Client App
    participant Gateway as API Gateway
    participant Auth as auth-service
    participant Service as Target Service
    participant DB as Database
    
    Client->>Gateway: Request với credentials
    Gateway->>Auth: Validate credentials
    Auth->>DB: Check user & permissions
    DB-->>Auth: User data & roles
    Auth-->>Gateway: JWT token + permissions
    Gateway-->>Client: Access token
    
    Note over Client,Service: Subsequent requests
    
    Client->>Gateway: Request với JWT
    Gateway->>Auth: Validate JWT
    Auth-->>Gateway: Token valid + permissions
    Gateway->>Service: Forward request với user context
    Service->>DB: Execute operation
    DB-->>Service: Response data
    Service-->>Gateway: Response
    Gateway-->>Client: Final response
```

### 6.4.3 Data Protection Implementation

**PII Encryption Strategy:**

| Data Type | Encryption Level | Key Management | Access Control |
|-----------|-----------------|----------------|----------------|
| **Email addresses** | Field-level AES-256 | Per-tenant keys | Role-based access |
| **Phone numbers** | Field-level AES-256 | Per-tenant keys | Role-based access |
| **Names** | Field-level AES-256 | Per-tenant keys | Role-based access |
| **Preferences** | Database-level | Shared encryption | Service-level access |
| **Analytics data** | Pseudonymized | Hash functions | Aggregated access only |

---

## 6.5 Deployment Architecture

### 6.5.1 Container Architecture

**Docker containerization strategy:**

```dockerfile
# Base image cho NestJS services
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS development
RUN npm ci
COPY . .
CMD ["npm", "run", "start:dev"]

FROM base AS production
COPY dist/ ./dist/
USER node
CMD ["node", "dist/main.js"]
```

### 6.5.2 Multi-Environment Setup

| Environment | Purpose | Infrastructure | Data |
|-------------|---------|----------------|------|
| **Development** | Local development | Docker Compose | Sample data |
| **Staging** | Integration testing | Kubernetes cluster | Anonymized production data |
| **Production** | Live system | Multi-AZ deployment | Real customer data |

### 6.5.3 Kubernetes Deployment

```yaml
# Service deployment example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
      - name: auth-service
        image: psp/auth-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

---

## 6.6 Monitoring & Observability

### 6.6.1 Monitoring Stack

```mermaid
graph TB
    subgraph "Metrics Collection"
        MC1[Prometheus]
        MC2[Application Metrics]
        MC3[Infrastructure Metrics]
    end
    
    subgraph "Logging"
        L1[Fluentd/Filebeat]
        L2[Elasticsearch]
        L3[Kibana]
    end
    
    subgraph "Tracing"
        T1[Jaeger]
        T2[OpenTelemetry]
        T3[Distributed Tracing]
    end
    
    subgraph "Alerting"
        A1[Grafana]
        A2[AlertManager]
        A3[PagerDuty]
    end
    
    subgraph "Business Metrics"
        BM1[Custom Dashboards]
        BM2[KPI Tracking]
        BM3[Real-time Reports]
    end
    
    MC1 --> A1
    MC2 --> A2
    MC3 --> A3
    
    L1 --> L2 --> L3
    T1 --> T2 --> T3
    
    A1 --> BM1
    A2 --> BM2
    A3 --> BM3
    
    style MC1 fill:#e3f2fd
    style L2 fill:#e8f5e8
    style T1 fill:#fff3e0
    style A1 fill:#ffebee
```

### 6.6.2 Health Check Strategy

**Multi-level health checks:**

| Level | Endpoint | Check Type | Response Time |
|-------|----------|------------|---------------|
| **Liveness** | `/health` | Service running | <1s |
| **Readiness** | `/ready` | Dependencies available | <2s |
| **Deep** | `/health/deep` | Database connectivity | <5s |
| **Business** | `/health/business` | Critical workflows | <10s |

### 6.6.3 Alerting Rules

| Alert Type | Condition | Severity | Action |
|------------|-----------|----------|--------|
| **Service Down** | Health check fails > 2 min | Critical | Immediate page |
| **High Response Time** | P95 > threshold for 5 min | Warning | Slack notification |
| **High Error Rate** | Error rate > 5% for 3 min | Critical | Page + escalate |
| **Resource Usage** | CPU/Memory > 80% for 10 min | Warning | Auto-scale trigger |

---

## 6.7 Performance Optimization

### 6.7.1 Caching Strategy

```mermaid
graph TB
    subgraph "Client Side"
        CS1[Browser Cache]
        CS2[Service Worker]
        CS3[Local Storage]
    end
    
    subgraph "CDN Layer"
        CDN1[Static Assets]
        CDN2[API Responses]
        CDN3[Edge Caching]
    end
    
    subgraph "Application Layer"
        AL1[Redis Cache]
        AL2[Query Results]
        AL3[Session Data]
    end
    
    subgraph "Database Layer"
        DL1[Query Cache]
        DL2[Connection Pool]
        DL3[Read Replicas]
    end
    
    CS1 --> CDN1 --> AL1 --> DL1
    CS2 --> CDN2 --> AL2 --> DL2
    CS3 --> CDN3 --> AL3 --> DL3
    
    style AL1 fill:#fff3e0
    style CDN1 fill:#e8f5e8
    style DL1 fill:#e3f2fd
```

### 6.7.2 Database Optimization

**Performance optimization strategies:**

| Strategy | Implementation | Expected Gain |
|----------|----------------|---------------|
| **Indexing** | Strategic index creation | 5-10x query speed |
| **Connection Pooling** | PgBouncer, MongoDB connection limits | 2-3x throughput |
| **Read Replicas** | Separate read/write workloads | 2x read performance |
| **Query Optimization** | Explain plan analysis | 2-5x specific queries |
| **Caching** | Redis query result cache | 10-100x frequent queries |

---

## 6.8 Disaster Recovery Architecture

### 6.8.1 Backup Strategy

```mermaid
graph TB
    subgraph "Production Environment"
        PE1[Primary Database]
        PE2[Application Data]
        PE3[Configuration Data]
    end
    
    subgraph "Backup Types"
        BT1[Continuous WAL Backup]
        BT2[Daily Full Backup]
        BT3[Hourly Incremental]
    end
    
    subgraph "Storage Locations"
        SL1[Local Backup Storage]
        SL2[Cross-Region Storage]
        SL3[Cold Storage Archive]
    end
    
    subgraph "Recovery Testing"
        RT1[Weekly Recovery Test]
        RT2[Monthly DR Drill]
        RT3[Quarterly Full Test]
    end
    
    PE1 --> BT1 --> SL1 --> RT1
    PE2 --> BT2 --> SL2 --> RT2
    PE3 --> BT3 --> SL3 --> RT3
    
    style BT1 fill:#e8f5e8
    style SL2 fill:#fff3e0
    style RT2 fill:#e3f2fd
```

### 6.8.2 Failover Procedures

**Automated failover cho critical services:**

| Component | Detection Time | Failover Time | Recovery Strategy |
|-----------|----------------|---------------|-------------------|
| **Database** | 30 seconds | 2 minutes | Promote read replica |
| **Application Services** | 1 minute | 3 minutes | Start new instances |
| **Load Balancer** | 10 seconds | 30 seconds | Route to healthy targets |
| **External Dependencies** | 30 seconds | 1 minute | Circuit breaker activation |

---

## 6.9 Development & Deployment Pipeline

### 6.9.1 CI/CD Architecture

```mermaid
graph LR
    subgraph "Source Control"
        SC1[Git Repository]
        SC2[Feature Branches]
        SC3[Pull Requests]
    end
    
    subgraph "CI Pipeline"
        CI1[Code Quality Checks]
        CI2[Unit Tests]
        CI3[Integration Tests]
        CI4[Security Scans]
        CI5[Build & Package]
    end
    
    subgraph "CD Pipeline"
        CD1[Deploy to Staging]
        CD2[Automated Testing]
        CD3[Manual Approval]
        CD4[Production Deployment]
        CD5[Health Checks]
    end
    
    SC1 --> CI1 --> CD1
    SC2 --> CI2 --> CD2
    SC3 --> CI3 --> CD3
    CI4 --> CI5 --> CD4 --> CD5
    
    style CI3 fill:#e8f5e8
    style CD3 fill:#fff3e0
    style CD5 fill:#e3f2fd
```

### 6.9.2 Quality Gates

**Mandatory quality checks:**

| Stage | Quality Gate | Criteria | Block Deployment |
|-------|--------------|----------|------------------|
| **Code Quality** | ESLint, SonarQube | No critical issues | Yes |
| **Test Coverage** | Jest coverage | >80% coverage | Yes |
| **Security Scan** | OWASP ZAP, Snyk | No high vulnerabilities | Yes |
| **Performance Test** | Load testing | Meets SLA targets | Yes |
| **Manual Review** | Code review | 2 approvals required | Yes |

---

## 6.10 Technology Stack Summary

### 6.10.1 Complete Technology Matrix

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Runtime** | Node.js | 18+ LTS | JavaScript runtime |
| **Framework** | NestJS | 10+ | Backend framework |
| **API Gateway** | Kong | 3.x | Request routing, security |
| **Primary Database** | MongoDB | 6.x | Document storage |
| **Transactional DB** | PostgreSQL | 15.x | ACID transactions |
| **Cache/Queue** | Redis | 7.x | Caching, messaging |
| **Container** | Docker | 24.x | Containerization |
| **Orchestration** | Kubernetes | 1.28+ | Container orchestration |
| **Monitoring** | Prometheus + Grafana | Latest | Metrics & alerting |
| **Logging** | ELK Stack | 8.x | Centralized logging |
| **CI/CD** | GitLab CI/Jenkins | Latest | Automation pipeline |

### 6.10.2 External Dependencies

| Service Type | Primary Provider | Backup Provider | SLA Requirement |
|--------------|------------------|-----------------|-----------------|
| **SMS** | Twilio | FPT Telecom | 99.9% delivery |
| **Email** | SendGrid | AWS SES | 99.9% delivery |
| **Storage** | AWS S3 | MinIO | 99.99% availability |
| **CDN** | CloudFlare | AWS CloudFront | 99.9% availability |
| **Monitoring** | Datadog | New Relic | 99.9% uptime |

---

## 6.11 Architecture Decision Records (ADRs)

### 6.11.1 Key Architecture Decisions

| Decision | Rationale | Trade-offs | Status |
|----------|-----------|------------|--------|
| **Microservices vs Monolith** | Team scalability, independent deployment | Complexity overhead | ✅ Approved |
| **MongoDB + PostgreSQL** | Right tool for right job | Operational complexity | ✅ Approved |
| **Kong API Gateway** | Feature richness, plugin ecosystem | Learning curve | ✅ Approved |
| **Docker + Kubernetes** | Industry standard, scalability | Infrastructure complexity | ✅ Approved |
| **Event-driven Architecture** | Loose coupling, scalability | Eventual consistency | 🔄 Under review |

### 6.11.2 Future Architecture Considerations

| Area | Current State | Future Enhancement | Timeline |
|------|---------------|-------------------|----------|
| **Service Mesh** | Direct service calls | Istio implementation | Phase 2 |
| **Message Streaming** | Redis pub/sub | Apache Kafka | Phase 3 |
| **Database Sharding** | Single instances | Horizontal sharding | Phase 2 |
| **Multi-region** | Single region | Global deployment | Phase 3 |

---

## 6.12 Architecture Validation

### 6.12.1 Non-Functional Requirements Mapping

| NFR Category | Architecture Component | Validation Method |
|--------------|----------------------|-------------------|
| **Performance** | Caching, load balancing, horizontal scaling | Load testing, performance monitoring |
| **Security** | Multi-layer security, encryption, RBAC | Security audits, penetration testing |
| **Reliability** | Health checks, failover, backup | Chaos engineering, DR testing |
| **Scalability** | Microservices, auto-scaling, database optimization | Capacity planning, stress testing |

### 6.12.2 Architecture Review Checklist

- [ ] **Scalability**: Architecture supports 10M users by 2027
- [ ] **Performance**: Response time targets achievable
- [ ] **Security**: Defense in depth implemented
- [ ] **Reliability**: 99.9% uptime achievable
- [ ] **Maintainability**: Clear service boundaries
- [ ] **Cost Optimization**: Resource efficiency optimized
- [ ] **Team Scalability**: Independent development enabled

---

**Trạng thái tài liệu**: ✅ Sẵn sàng cho Part07  
**Hành động tiếp theo**: Thiết kế Database Schema chi tiết  
**Dependencies**: Architecture design được approved  
**Người sở hữu**: Đội kiến trúc sư hệ thống

# 📘 Part07 - Thiết kế dữ liệu & CSDL (Database Design & Schema)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội thiết kế dữ liệu  
**Trạng thái**: ✅ Hoàn thành  

---

## 7.1 Tổng quan thiết kế dữ liệu

### 7.1.1 Chiến lược lựa chọn database
Hệ thống Product Sampling Platform sử dụng **polyglot persistence** - mỗi database được chọn phù hợp với use case cụ thể:

| Database | Use Cases | Services | Lý do lựa chọn |
|----------|-----------|----------|----------------|
| **PostgreSQL** | Dữ liệu giao dịch, tài chính | barcode-service, redemption-service | ACID compliance, data integrity |
| **MongoDB** | Dữ liệu linh hoạt, analytics | campaign-service, user-service, analytics-service | Schema flexibility, horizontal scaling |
| **Redis** | Cache, sessions, queues | auth-service, notification-service | Performance cao, pub/sub messaging |

### 7.1.2 Nguyên tắc thiết kế dữ liệu

```mermaid
graph TB
    subgraph "Nguyên tắc chính"
        P1[Database per Service]
        P2[Data Ownership]
        P3[Eventual Consistency]
        P4[Event Sourcing]
    end
    
    subgraph "Data Quality"
        DQ1[Data Validation]
        DQ2[Referential Integrity]
        DQ3[Audit Trails]
        DQ4[Backup Strategy]
    end
    
    subgraph "Performance"
        PF1[Indexing Strategy]
        PF2[Query Optimization]
        PF3[Caching Layers]
        PF4[Read Replicas]
    end
    
    P1 --> DQ1 --> PF1
    P2 --> DQ2 --> PF2
    P3 --> DQ3 --> PF3
    P4 --> DQ4 --> PF4
    
    style P1 fill:#e3f2fd
    style DQ1 fill:#e8f5e8
    style PF1 fill:#fff3e0
```

### 7.1.3 Data governance và compliance

**Phân loại dữ liệu theo mức độ nhạy cảm:**

| Loại dữ liệu | Mức độ | Mã hóa | Backup | Retention |
|--------------|--------|---------|--------|-----------|
| **PII (Personal Data)** | Cao | AES-256 field-level | Encrypted daily | 7 năm (GDPR) |
| **Financial Data** | Cao | Database-level | Encrypted hourly | 10 năm (luật kế toán) |
| **Campaign Data** | Trung bình | TLS in transit | Daily | 5 năm |
| **Analytics Data** | Thấp | Standard | Weekly | 3 năm |
| **System Logs** | Thấp | No encryption | Monthly | 1 năm |

---

## 7.2 PostgreSQL Database Design

### 7.2.1 Tổng quan PostgreSQL schemas
PostgreSQL được sử dụng cho dữ liệu transactional cần ACID compliance:

```mermaid
erDiagram
    BARCODE_POOLS ||--o{ BARCODES : contains
    CAMPAIGNS ||--o{ BARCODE_POOLS : has
    BARCODES ||--o| REDEMPTIONS : redeemed_by
    LOCATIONS ||--o{ REDEMPTIONS : processed_at
    USERS ||--o{ REDEMPTIONS : performed_by
    
    BARCODE_POOLS {
        uuid id PK
        string name
        uuid campaign_id FK
        integer total_quantity
        integer available_quantity
        timestamp created_at
        timestamp updated_at
    }
    
    BARCODES {
        uuid id PK
        string code UK "Unique barcode"
        uuid pool_id FK
        string product_name
        decimal value
        date expiry_date
        string batch_code
        enum status "available|reserved|issued|redeemed|expired"
        uuid assigned_user_id FK
        timestamp reserved_at
        timestamp issued_at
        timestamp created_at
        timestamp updated_at
    }
    
    REDEMPTIONS {
        uuid id PK
        uuid barcode_id FK
        uuid user_id FK
        uuid location_id FK
        uuid staff_id FK
        decimal transaction_amount
        timestamp redeemed_at
        json metadata
        boolean is_offline_sync
        timestamp synced_at
        timestamp created_at
    }
    
    LOCATIONS {
        uuid id PK
        string name
        string type "store|booth|event"
        string address
        decimal latitude
        decimal longitude
        json contact_info
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }
```

### 7.2.2 barcode-service Database Schema

#### **Bảng barcode_pools**
```sql
CREATE TABLE barcode_pools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    campaign_id UUID NOT NULL,
    total_quantity INTEGER NOT NULL CHECK (total_quantity > 0),
    available_quantity INTEGER NOT NULL CHECK (available_quantity >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_campaign FOREIGN KEY (campaign_id) 
        REFERENCES campaigns(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX idx_barcode_pools_campaign_id ON barcode_pools(campaign_id);
CREATE INDEX idx_barcode_pools_available ON barcode_pools(available_quantity) 
    WHERE available_quantity > 0;
```

#### **Bảng barcodes**
```sql
CREATE TABLE barcodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) NOT NULL UNIQUE,
    pool_id UUID NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    value DECIMAL(10,2),
    expiry_date DATE NOT NULL,
    batch_code VARCHAR(100),
    status barcode_status DEFAULT 'available',
    assigned_user_id UUID,
    reserved_at TIMESTAMP WITH TIME ZONE,
    issued_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_pool FOREIGN KEY (pool_id) 
        REFERENCES barcode_pools(id) ON DELETE CASCADE,
    CONSTRAINT check_expiry CHECK (expiry_date > CURRENT_DATE),
    CONSTRAINT check_status_flow CHECK (
        (status = 'available' AND assigned_user_id IS NULL) OR
        (status IN ('reserved', 'issued', 'redeemed') AND assigned_user_id IS NOT NULL)
    )
);

-- Custom enum type
CREATE TYPE barcode_status AS ENUM (
    'available', 'reserved', 'issued', 'redeemed', 'expired'
);

-- Indexes
CREATE UNIQUE INDEX idx_barcodes_code ON barcodes(code);
CREATE INDEX idx_barcodes_pool_status ON barcodes(pool_id, status);
CREATE INDEX idx_barcodes_user_status ON barcodes(assigned_user_id, status) 
    WHERE assigned_user_id IS NOT NULL;
CREATE INDEX idx_barcodes_expiry ON barcodes(expiry_date) 
    WHERE status IN ('available', 'reserved', 'issued');
```

#### **Bảng redemptions**
```sql
CREATE TABLE redemptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barcode_id UUID NOT NULL,
    user_id UUID NOT NULL,
    location_id UUID NOT NULL,
    staff_id UUID,
    transaction_amount DECIMAL(10,2),
    redeemed_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB,
    is_offline_sync BOOLEAN DEFAULT FALSE,
    synced_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_barcode FOREIGN KEY (barcode_id) 
        REFERENCES barcodes(id) ON DELETE RESTRICT,
    CONSTRAINT fk_location FOREIGN KEY (location_id) 
        REFERENCES locations(id) ON DELETE RESTRICT,
    CONSTRAINT check_sync_logic CHECK (
        (is_offline_sync = FALSE AND synced_at IS NULL) OR
        (is_offline_sync = TRUE AND synced_at IS NOT NULL)
    )
);

-- Indexes
CREATE UNIQUE INDEX idx_redemptions_barcode ON redemptions(barcode_id);
CREATE INDEX idx_redemptions_user_date ON redemptions(user_id, redeemed_at);
CREATE INDEX idx_redemptions_location_date ON redemptions(location_id, redeemed_at);
CREATE INDEX idx_redemptions_offline_sync ON redemptions(is_offline_sync, synced_at) 
    WHERE is_offline_sync = TRUE;
```

### 7.2.3 Business Logic trong Database

#### **Triggers cho data consistency**
```sql
-- Trigger cập nhật available_quantity khi barcode status thay đổi
CREATE OR REPLACE FUNCTION update_pool_quantity()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.status = 'available' AND NEW.status != 'available' THEN
        -- Giảm available quantity
        UPDATE barcode_pools 
        SET available_quantity = available_quantity - 1,
            updated_at = NOW()
        WHERE id = NEW.pool_id;
    ELSIF OLD.status != 'available' AND NEW.status = 'available' THEN
        -- Tăng available quantity
        UPDATE barcode_pools 
        SET available_quantity = available_quantity + 1,
            updated_at = NOW()
        WHERE id = NEW.pool_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_pool_quantity
    AFTER UPDATE OF status ON barcodes
    FOR EACH ROW
    EXECUTE FUNCTION update_pool_quantity();
```

#### **Stored procedures cho business operations**
```sql
-- Procedure reserve barcode cho user
CREATE OR REPLACE FUNCTION reserve_barcode(
    p_pool_id UUID,
    p_user_id UUID,
    p_product_preference TEXT DEFAULT NULL
)
RETURNS TABLE(barcode_id UUID, barcode_code TEXT) AS $$
DECLARE
    selected_barcode barcodes%ROWTYPE;
BEGIN
    -- Lock pool để tránh race condition
    PERFORM 1 FROM barcode_pools 
    WHERE id = p_pool_id AND available_quantity > 0
    FOR UPDATE;
    
    -- Chọn barcode available
    SELECT * INTO selected_barcode
    FROM barcodes 
    WHERE pool_id = p_pool_id 
        AND status = 'available'
        AND expiry_date > CURRENT_DATE
        AND (p_product_preference IS NULL OR product_name ILIKE '%' || p_product_preference || '%')
    ORDER BY expiry_date ASC, created_at ASC
    LIMIT 1
    FOR UPDATE;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Không có barcode available trong pool %', p_pool_id;
    END IF;
    
    -- Update barcode status
    UPDATE barcodes 
    SET status = 'reserved',
        assigned_user_id = p_user_id,
        reserved_at = NOW(),
        updated_at = NOW()
    WHERE id = selected_barcode.id;
    
    RETURN QUERY SELECT selected_barcode.id, selected_barcode.code;
END;
$$ LANGUAGE plpgsql;
```

---

## 7.3 MongoDB Database Design

### 7.3.1 Tổng quan MongoDB collections
MongoDB được sử dụng cho dữ liệu có schema linh hoạt và cần horizontal scaling:

```mermaid
graph TB
    subgraph "campaign-service"
        C1[campaigns]
        C2[ads_formats] 
        C3[campaign_templates]
    end
    
    subgraph "user-service"
        U1[users]
        U2[user_consents]
        U3[user_preferences]
    end
    
    subgraph "analytics-service"
        A1[events]
        A2[funnel_metrics]
        A3[campaign_reports]
        A4[export_jobs]
    end
    
    subgraph "integration-service"
        I1[webhook_configs]
        I2[api_integrations]
        I3[sync_logs]
    end
    
    C1 --> A1
    U1 --> A1
    C1 --> A3
    U1 --> U2
    U1 --> U3
    
    style C1 fill:#e3f2fd
    style U1 fill:#e8f5e8
    style A1 fill:#fff3e0
```

### 7.3.2 campaign-service Collections

#### **Collection: campaigns**
```javascript
// campaigns collection schema
{
  _id: ObjectId,
  name: String, // required
  description: String,
  slug: String, // unique, for URL-friendly access
  
  // Thời gian campaign
  startDate: Date, // required
  endDate: Date, // required
  timezone: String, // default: "Asia/Ho_Chi_Minh"
  
  // Thông tin sản phẩm
  products: [{
    name: String,
    description: String,
    imageUrl: String,
    value: Number, // giá trị ước tính
    category: String
  }],
  
  // Configuration
  config: {
    maxRedemptionsPerUser: Number, // default: 1
    requireQuiz: Boolean, // default: false
    requireSurvey: Boolean, // default: false
    autoExpireHours: Number, // default: 24
    allowOfflineRedemption: Boolean // default: true
  },
  
  // Tracking và analytics
  tracking: {
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    utmContent: String,
    utmTerm: String,
    gaTrackingId: String,
    facebookPixelId: String
  },
  
  // Targeting
  targeting: {
    ageRange: {
      min: Number,
      max: Number
    },
    genders: [String], // ["M", "F", "Other"]
    locations: [ObjectId], // reference to locations
    interests: [String]
  },
  
  // Status và metadata
  status: String, // enum: draft|active|paused|completed|cancelled
  barcodePoolIds: [String], // references to PostgreSQL barcode_pools
  adsFormatIds: [ObjectId], // references to ads_formats collection
  
  // Audit fields
  createdBy: ObjectId, // user ID
  updatedBy: ObjectId,
  tenantId: String, // for multi-tenancy
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}

// Indexes
db.campaigns.createIndex({ "slug": 1 }, { unique: true })
db.campaigns.createIndex({ "status": 1, "startDate": 1, "endDate": 1 })
db.campaigns.createIndex({ "tenantId": 1, "status": 1 })
db.campaigns.createIndex({ "createdBy": 1, "updatedAt": -1 })
db.campaigns.createIndex({ "targeting.locations": 1 })
```

#### **Collection: ads_formats**
```javascript
// ads_formats collection schema  
{
  _id: ObjectId,
  name: String, // required
  type: String, // enum: flyer|poster|banner|digital|social|email
  
  // Kích thước và spec
  dimensions: {
    width: Number, // pixels or mm
    height: Number,
    unit: String, // enum: px|mm|cm|inch
    dpi: Number // required for print formats
  },
  
  // File design
  designFiles: [{
    filename: String,
    url: String, // S3/storage URL
    fileSize: Number, // bytes
    mimeType: String,
    uploadedAt: Date
  }],
  
  // QR code configuration
  qrConfig: {
    position: {
      x: Number, // từ góc trái trên
      y: Number,
      width: Number,
      height: Number
    },
    style: String, // enum: square|round|logo
    errorCorrection: String, // enum: L|M|Q|H
    safeZone: Number // minimum margin around QR
  },
  
  // Print specifications
  printSpecs: {
    quantity: Number,
    paperType: String,
    finishing: String, // glossy|matte|none
    bleed: Number, // mm
    colorSpace: String // CMYK|RGB
  },
  
  // Campaign association
  campaignId: ObjectId, // required
  
  // Usage tracking
  usage: {
    totalScans: Number, // default: 0
    uniqueScans: Number, // default: 0
    conversionRate: Number, // calculated field
    lastScannedAt: Date
  },
  
  // Audit fields
  createdBy: ObjectId,
  tenantId: String,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}

// Indexes
db.ads_formats.createIndex({ "campaignId": 1, "type": 1 })
db.ads_formats.createIndex({ "tenantId": 1, "createdAt": -1 })
db.ads_formats.createIndex({ "usage.totalScans": -1 }) // for top performing formats
```

### 7.3.3 user-service Collections

#### **Collection: users**
```javascript
// users collection schema
{
  _id: ObjectId,
  
  // Thông tin cơ bản (encrypted)
  personalInfo: {
    fullName: String, // encrypted
    email: String, // encrypted, unique
    phoneNumber: String, // encrypted, unique
    dateOfBirth: Date, // encrypted
    gender: String // enum: M|F|Other|Prefer_not_to_say
  },
  
  // Hashed identifiers cho lookup
  emailHash: String, // SHA-256 hash for lookup
  phoneHash: String, // SHA-256 hash for lookup
  
  // Địa chỉ
  address: {
    street: String,
    ward: String,
    district: String,
    city: String,
    country: String, // default: "Vietnam"
    postalCode: String,
    coordinates: {
      type: "Point",
      coordinates: [Number, Number] // [longitude, latitude]
    }
  },
  
  // Verification status
  verification: {
    email: {
      isVerified: Boolean, // default: false
      verifiedAt: Date,
      verificationToken: String
    },
    phone: {
      isVerified: Boolean, // default: false  
      verifiedAt: Date,
      lastOtpSentAt: Date,
      otpAttempts: Number // default: 0
    }
  },
  
  // User preferences và interests
  preferences: {
    language: String, // default: "vi"
    timezone: String, // default: "Asia/Ho_Chi_Minh"
    currency: String, // default: "VND"
    
    // Marketing preferences
    marketing: {
      email: Boolean, // default: false
      sms: Boolean, // default: false
      push: Boolean, // default: true
      phone: Boolean // default: false
    },
    
    // Product interests (từ quiz responses)
    interests: [String],
    dietaryRestrictions: [String],
    brandPreferences: [String],
    shoppingHabits: [String]
  },
  
  // User behavior tracking
  activity: {
    totalCampaigns: Number, // default: 0
    totalRedemptions: Number, // default: 0
    lastLoginAt: Date,
    lastActivityAt: Date,
    registrationSource: String, // campaign ID or "direct"
    deviceInfo: {
      userAgent: String,
      platform: String, // mobile|desktop|tablet
      browser: String
    }
  },
  
  // Risk và fraud detection
  riskProfile: {
    trustScore: Number, // 0-100, default: 50
    riskLevel: String, // enum: low|medium|high
    fraudFlags: [String],
    lastRiskCheck: Date
  },
  
  // GDPR/PDPA compliance
  compliance: {
    consentVersion: String,
    consentGivenAt: Date,
    dataProcessingConsent: Boolean,
    marketingConsent: Boolean,
    rightToBeForgettenRequestedAt: Date,
    dataExportRequestedAt: Date
  },
  
  // Status
  status: String, // enum: active|inactive|suspended|deleted
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date // soft delete
}

// Indexes
db.users.createIndex({ "emailHash": 1 }, { unique: true })
db.users.createIndex({ "phoneHash": 1 }, { unique: true })
db.users.createIndex({ "verification.email.isVerified": 1, "verification.phone.isVerified": 1 })
db.users.createIndex({ "address.coordinates": "2dsphere" }) // for geo queries
db.users.createIndex({ "activity.lastActivityAt": -1 })
db.users.createIndex({ "riskProfile.riskLevel": 1, "riskProfile.trustScore": 1 })
db.users.createIndex({ "status": 1, "createdAt": -1 })
db.users.createIndex({ "compliance.rightToBeForgettenRequestedAt": 1 }, { sparse: true })
```

#### **Collection: user_consents**
```javascript
// user_consents collection - for audit trail
{
  _id: ObjectId,
  userId: ObjectId, // required
  
  // Consent details
  consentType: String, // enum: data_processing|marketing|cookies|analytics
  consentGiven: Boolean,
  consentVersion: String, // policy version
  
  // Context information
  source: String, // enum: registration|campaign|preference_update|gdpr_request
  campaignId: ObjectId, // if consent given during campaign
  ipAddress: String,
  userAgent: String,
  
  // Legal basis (GDPR)
  legalBasis: String, // enum: consent|contract|legal_obligation|vital_interests|public_task|legitimate_interests
  
  // Expiry (for time-limited consents)
  expiresAt: Date,
  
  // Timestamps
  createdAt: Date
}

// Indexes
db.user_consents.createIndex({ "userId": 1, "consentType": 1, "createdAt": -1 })
db.user_consents.createIndex({ "campaignId": 1 }, { sparse: true })
db.user_consents.createIndex({ "expiresAt": 1 }, { sparse: true })
```

### 7.3.4 analytics-service Collections

#### **Collection: events**
```javascript
// events collection - for event sourcing và analytics
{
  _id: ObjectId,
  
  // Event identification
  eventType: String, // enum: qr_scan|form_submit|otp_sent|otp_verified|barcode_issued|redemption|survey_complete
  eventId: String, // unique event identifier
  
  // Context
  sessionId: String,
  userId: ObjectId, // if user is known
  campaignId: ObjectId,
  adsFormatId: ObjectId,
  locationId: String, // could be PostgreSQL UUID
  
  // Event data
  data: {
    // Flexible object chứa event-specific data
    // Ví dụ cho qr_scan:
    // {
    //   qrCode: String,
    //   scanLocation: {lat: Number, lng: Number},
    //   deviceInfo: Object,
    //   referrer: String
    // }
  },
  
  // Tracking information
  tracking: {
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    utmContent: String,
    utmTerm: String,
    referrer: String,
    ipAddress: String,
    userAgent: String
  },
  
  // Geo information
  location: {
    type: "Point",
    coordinates: [Number, Number] // [longitude, latitude]
  },
  city: String,
  country: String,
  
  // Device information
  device: {
    type: String, // mobile|desktop|tablet
    os: String,
    browser: String,
    screenSize: String
  },
  
  // Timestamps
  timestamp: Date, // event occurrence time
  receivedAt: Date, // when event was received by system
  processedAt: Date // when event was processed
}

// Indexes
db.events.createIndex({ "campaignId": 1, "timestamp": -1 })
db.events.createIndex({ "userId": 1, "timestamp": -1 }, { sparse: true })
db.events.createIndex({ "eventType": 1, "timestamp": -1 })
db.events.createIndex({ "sessionId": 1, "timestamp": 1 })
db.events.createIndex({ "timestamp": -1 }) // for time-based queries
db.events.createIndex({ "location": "2dsphere" }) // for geo queries
```

#### **Collection: campaign_reports**
```javascript
// campaign_reports collection - pre-aggregated reports
{
  _id: ObjectId,
  
  // Report identification
  campaignId: ObjectId, // required
  reportType: String, // enum: daily|weekly|monthly|final
  reportDate: Date, // date this report covers
  
  // Funnel metrics
  funnel: {
    qrScans: Number,
    formSubmissions: Number,
    otpVerifications: Number,
    barcodesIssued: Number,
    redemptions: Number,
    
    // Conversion rates
    scanToSubmission: Number, // percentage
    submissionToVerification: Number,
    verificationToIssue: Number,
    issueToRedemption: Number,
    overallConversion: Number
  },
  
  // Performance metrics
  performance: {
    costPerScan: Number,
    costPerLead: Number,
    costPerRedemption: Number,
    averageTimeToRedeem: Number, // hours
    peakHour: Number, // 0-23
    peakDay: String // Monday-Sunday
  },
  
  // Demographics breakdown
  demographics: {
    ageGroups: {
      "18-24": Number,
      "25-34": Number,
      "35-44": Number,
      "45-54": Number,
      "55+": Number
    },
    genders: {
      "M": Number,
      "F": Number,
      "Other": Number
    },
    locations: [{
      locationId: String,
      scans: Number,
      redemptions: Number,
      conversionRate: Number
    }]
  },
  
  // Top performing elements
  topPerforming: {
    adsFormats: [{
      adsFormatId: ObjectId,
      scans: Number,
      conversions: Number,
      conversionRate: Number
    }],
    locations: [{
      locationId: String,
      performance: Number
    }],
    timeSlots: [{
      hour: Number,
      dayOfWeek: Number,
      activity: Number
    }]
  },
  
  // Fraud và quality metrics
  quality: {
    fraudRate: Number, // percentage
    duplicateAttempts: Number,
    suspiciousActivities: Number,
    dataQualityScore: Number // 0-100
  },
  
  // Generated timestamp
  generatedAt: Date,
  
  // Metadata
  dataRange: {
    startDate: Date,
    endDate: Date
  }
}

// Indexes
db.campaign_reports.createIndex({ "campaignId": 1, "reportType": 1, "reportDate": -1 })
db.campaign_reports.createIndex({ "reportDate": -1 })
```

---

## 7.4 Redis Data Structures

### 7.4.1 auth-service Redis Usage

#### **Session Storage**
```javascript
// Redis key patterns for sessions
"session:{sessionId}" = {
  userId: "user_uuid",
  role: "customer_account",
  permissions: ["campaign:read", "campaign:write"],
  tenantId: "tenant_123",
  createdAt: timestamp,
  lastActivity: timestamp,
  deviceInfo: {...}
}
// TTL: 24 hours (configurable per role)

// Active sessions per user
"user_sessions:{userId}" = Set[sessionId1, sessionId2, ...]
// TTL: 7 days

// JWT blacklist (for logout)
"jwt_blacklist:{jti}" = true
// TTL: token expiry time
```

#### **Rate Limiting**
```javascript
// Rate limiting keys
// Rate limiting keys
"rate_limit:login:{userId}" = counter
// TTL: 15 minutes, max 5 attempts

"rate_limit:otp:{phoneNumber}" = counter
// TTL: 1 hour, max 3 requests

"rate_limit:api:{userId}:{endpoint}" = counter
// TTL: 1 minute, max varies by endpoint
```

#### **OTP Storage**
```javascript
// OTP verification codes
"otp:{phoneNumber|email}" = {
  code: "123456",
  attempts: 0,
  maxAttempts: 3,
  createdAt: timestamp
}
// TTL: 5 minutes

// OTP verification tracking
"otp_verified:{userId}" = timestamp
// TTL: 30 minutes
```

### 7.4.2 notification-service Redis Usage

#### **Message Queues**
```javascript
// SMS queue
Queue: "sms_queue"
Job: {
  id: "job_uuid",
  data: {
    phoneNumber: "+84901234567",
    message: "Your OTP is 123456",
    templateId: "otp_template",
    priority: "high"
  },
  attempts: 0,
  maxAttempts: 3,
  delay: 0
}

// Email queue
Queue: "email_queue"
Job: {
  id: "job_uuid", 
  data: {
    to: "user@example.com",
    subject: "Your Sample is Ready!",
    templateId: "barcode_issued",
    templateData: {
      userName: "John Doe",
      productName: "Coca Cola",
      barcodeUrl: "https://..."
    }
  }
}

// Push notification queue
Queue: "push_queue"
Job: {
  id: "job_uuid",
  data: {
    userId: "user_uuid",
    title: "Sample Expiring Soon",
    body: "Your Coca Cola sample expires in 24 hours",
    data: {
      campaignId: "campaign_uuid",
      barcodeId: "barcode_uuid"
    }
  }
}
```

#### **Notification Status Tracking**
```javascript
// Delivery status
"notification_status:{notificationId}" = {
  status: "delivered", // sent|delivered|failed|bounced
  sentAt: timestamp,
  deliveredAt: timestamp,
  error: "error message if failed"
}
// TTL: 30 days

// User notification preferences cache
"user_prefs:{userId}" = {
  email: true,
  sms: true,
  push: true,
  quietHours: {start: 22, end: 7}
}
// TTL: 1 hour, invalidate on preference update
```

### 7.4.3 Shared Cache Patterns

#### **Application-level Caching**
```javascript
// Campaign data cache
"campaign:{campaignId}" = {
  // Full campaign object from MongoDB
  name: "Summer Campaign 2025",
  status: "active",
  config: {...},
  // ... other fields
}
// TTL: 1 hour

// User profile cache
"user_profile:{userId}" = {
  // Non-sensitive user data
  fullName: "encrypted_value",
  preferences: {...},
  verification: {...}
}
// TTL: 30 minutes

// Location data cache
"location:{locationId}" = {
  name: "Circle K Nguyen Hue",
  address: "123 Nguyen Hue St, District 1",
  coordinates: {lat: 10.776, lng: 106.700},
  isActive: true
}
// TTL: 24 hours
```

---

## 7.5 Data Relationships và Referential Integrity

### 7.5.1 Cross-Database References

```mermaid
graph TB
    subgraph "PostgreSQL"
        PG1[barcodes table]
        PG2[redemptions table]
        PG3[barcode_pools table]
    end
    
    subgraph "MongoDB"
        MG1[campaigns collection]
        MG2[users collection]
        MG3[events collection]
    end
    
    subgraph "Redis"
        RD1[session data]
        RD2[user preferences]
        RD3[notification queue]
    end
    
    MG1 -->|campaign_id| PG3
    MG2 -->|user_id| PG2
    PG1 -->|barcode_id| MG3
    MG2 -->|user_id| RD1
    MG2 -->|preferences| RD2
    PG2 -->|redemption event| RD3
    
    style PG1 fill:#e3f2fd
    style MG1 fill:#e8f5e8
    style RD1 fill:#fff3e0
```

### 7.5.2 Data Consistency Strategies

#### **Eventual Consistency via Events**
```javascript
// Event khi user complete verification
{
  eventType: "user_verified",
  userId: "user_uuid",
  timestamp: "2025-10-17T10:30:00Z",
  data: {
    email: "user@example.com",
    phoneNumber: "+84901234567",
    campaignId: "campaign_uuid"
  }
}

// Services subscribe to this event:
// 1. barcode-service: Reserve barcode for user
// 2. analytics-service: Record conversion event  
// 3. integration-service: Sync to CRM
// 4. notification-service: Send welcome email
```

#### **Saga Pattern cho Complex Transactions**
```javascript
// Redemption Saga Example
const redemptionSaga = {
  steps: [
    {
      service: "barcode-service",
      action: "validateBarcode",
      compensate: "unreserveBarcode"
    },
    {
      service: "user-service", 
      action: "validateUser",
      compensate: "unlockUser"
    },
    {
      service: "redemption-service",
      action: "processRedemption", 
      compensate: "cancelRedemption"
    },
    {
      service: "analytics-service",
      action: "recordEvent",
      compensate: "deleteEvent"
    },
    {
      service: "integration-service",
      action: "notifyCRM",
      compensate: "revertCRMUpdate"
    }
  ]
}
```

---

## 7.6 Performance Optimization

### 7.6.1 Indexing Strategy

#### **PostgreSQL Indexes**
```sql
-- Barcode service indexes
CREATE INDEX CONCURRENTLY idx_barcodes_pool_available 
ON barcodes(pool_id) WHERE status = 'available';

CREATE INDEX CONCURRENTLY idx_barcodes_expiry_active
ON barcodes(expiry_date) WHERE status IN ('available', 'issued');

CREATE INDEX CONCURRENTLY idx_redemptions_analytics
ON redemptions(redeemed_at, location_id, user_id);

-- Composite index cho common queries
CREATE INDEX CONCURRENTLY idx_barcodes_compound
ON barcodes(pool_id, status, expiry_date, created_at);
```

#### **MongoDB Indexes**
```javascript
// Campaign service indexes
db.campaigns.createIndex(
  { "tenantId": 1, "status": 1, "startDate": -1 },
  { name: "campaigns_tenant_status_date" }
);

// Compound index cho analytics queries
db.events.createIndex(
  { "campaignId": 1, "eventType": 1, "timestamp": -1 },
  { name: "events_campaign_type_time" }
);

// Text search index
db.campaigns.createIndex(
  { "name": "text", "description": "text" },
  { name: "campaigns_text_search" }
);

// TTL index cho temporary data
db.events.createIndex(
  { "timestamp": 1 },
  { 
    name: "events_ttl",
    expireAfterSeconds: 31536000 // 1 year
  }
);
```

### 7.6.2 Query Optimization

#### **Efficient Barcode Reservation Query**
```sql
-- Optimized query với CTE và window functions
WITH available_barcodes AS (
  SELECT 
    id,
    code,
    product_name,
    expiry_date,
    ROW_NUMBER() OVER (
      PARTITION BY pool_id 
      ORDER BY 
        CASE WHEN product_name ILIKE $2 THEN 0 ELSE 1 END,
        expiry_date ASC,
        created_at ASC
    ) as rn
  FROM barcodes 
  WHERE pool_id = $1 
    AND status = 'available'
    AND expiry_date > CURRENT_DATE
)
UPDATE barcodes 
SET 
  status = 'reserved',
  assigned_user_id = $3,
  reserved_at = NOW()
WHERE id = (
  SELECT id FROM available_barcodes WHERE rn = 1
)
RETURNING id, code;
```

#### **MongoDB Aggregation Pipeline cho Analytics**
```javascript
// Funnel analysis aggregation
db.events.aggregate([
  {
    $match: {
      campaignId: ObjectId("..."),
      timestamp: {
        $gte: startDate,
        $lte: endDate
      }
    }
  },
  {
    $group: {
      _id: "$eventType",
      count: { $sum: 1 },
      uniqueUsers: { $addToSet: "$userId" }
    }
  },
  {
    $project: {
      eventType: "$_id",
      count: 1,
      uniqueUserCount: { $size: "$uniqueUsers" }
    }
  },
  {
    $sort: {
      eventType: 1
    }
  }
]);
```

### 7.6.3 Caching Strategy

#### **Multi-level Caching**
```mermaid
graph TB
    subgraph "Application Cache"
        AC1[In-Memory Cache]
        AC2[Redis Cache]
        AC3[CDN Cache]
    end
    
    subgraph "Database Cache"
        DC1[Query Cache]
        DC2[Connection Pool]
        DC3[Buffer Pool]
    end
    
    subgraph "Cache Policies"
        CP1[TTL: 5 minutes]
        CP2[TTL: 1 hour]
        CP3[TTL: 24 hours]
    end
    
    AC1 --> CP1
    AC2 --> CP2
    AC3 --> CP3
    
    style AC2 fill:#fff3e0
    style CP2 fill:#e8f5e8
```

#### **Cache Invalidation Strategy**
```javascript
// Event-driven cache invalidation
const cacheInvalidationRules = {
  'campaign_updated': [
    'campaign:{campaignId}',
    'campaign_list:{tenantId}',
    'analytics:{campaignId}:*'
  ],
  'user_preferences_updated': [
    'user_profile:{userId}',
    'user_prefs:{userId}'
  ],
  'barcode_redeemed': [
    'campaign_stats:{campaignId}',
    'location_stats:{locationId}',
    'user_history:{userId}'
  ]
};
```

---

## 7.7 Data Migration & Versioning

### 7.7.1 Schema Evolution Strategy

#### **MongoDB Schema Versioning**
```javascript
// Schema versioning trong documents
{
  _id: ObjectId,
  schemaVersion: "1.2.0", // semantic versioning
  
  // Data fields based on schema version
  name: String,
  
  // Migration tracking
  migrations: [{
    fromVersion: "1.1.0",
    toVersion: "1.2.0", 
    migratedAt: Date,
    migrationId: "add_tracking_fields"
  }]
}

// Migration scripts
const migrations = {
  "1.1.0_to_1.2.0": {
    up: async (db) => {
      await db.campaigns.updateMany(
        { schemaVersion: "1.1.0" },
        {
          $set: {
            schemaVersion: "1.2.0",
            "tracking.utmSource": "",
            "tracking.utmMedium": ""
          },
          $push: {
            migrations: {
              fromVersion: "1.1.0",
              toVersion: "1.2.0",
              migratedAt: new Date(),
              migrationId: "add_tracking_fields"
            }
          }
        }
      );
    },
    down: async (db) => {
      // Rollback logic
    }
  }
};
```

#### **PostgreSQL Schema Migrations**
```sql
-- Migration files với version control
-- V1.0.0__initial_schema.sql
-- V1.1.0__add_barcode_metadata.sql
-- V1.2.0__add_redemption_offline_sync.sql

-- Example migration: V1.2.0__add_redemption_offline_sync.sql
ALTER TABLE redemptions 
ADD COLUMN is_offline_sync BOOLEAN DEFAULT FALSE,
ADD COLUMN synced_at TIMESTAMP WITH TIME ZONE;

CREATE INDEX idx_redemptions_offline_sync 
ON redemptions(is_offline_sync, synced_at) 
WHERE is_offline_sync = TRUE;

-- Update schema version
INSERT INTO schema_migrations (version, applied_at) 
VALUES ('1.2.0', NOW());
```

### 7.7.2 Data Archival Strategy

#### **Time-based Data Archival**
```javascript
// Archival policies
const archivalPolicies = {
  events: {
    hotData: "6 months", // trong primary database
    warmData: "2 years", // trong archive database  
    coldData: "7 years", // trong cold storage
    deleteAfter: "10 years" // compliance requirement
  },
  campaigns: {
    activeCampaigns: "indefinite",
    completedCampaigns: "5 years",
    cancelledCampaigns: "2 years"
  },
  userProfiles: {
    activeUsers: "indefinite",
    inactiveUsers: "3 years",
    deletedUsers: "30 days" // grace period
  }
};

// Archival job example
const archiveOldEvents = async () => {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  // Move to archive collection
  const oldEvents = await db.events.find({
    timestamp: { $lt: sixMonthsAgo }
  });
  
  if (oldEvents.length > 0) {
    await db.events_archive.insertMany(oldEvents);
    await db.events.deleteMany({
      timestamp: { $lt: sixMonthsAgo }
    });
  }
};
```

---

## 7.8 Data Security & Encryption

### 7.8.1 Field-level Encryption

#### **PII Encryption Implementation**
```javascript
// Encryption service cho PII fields
const crypto = require('crypto');

class PIIEncryption {
  constructor(tenantKey) {
    this.algorithm = 'aes-256-gcm';
    this.key = Buffer.from(tenantKey, 'hex');
  }
  
  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.key, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted: encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }
  
  decrypt(encryptedData) {
    const decipher = crypto.createDecipher(
      this.algorithm, 
      this.key, 
      Buffer.from(encryptedData.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}

// Usage trong user model
const userSchema = {
  personalInfo: {
    fullName: {
      encrypted: String, // encrypted value
      hash: String // SHA-256 hash for searching
    },
    email: {
      encrypted: String,
      hash: String
    },
    phoneNumber: {
      encrypted: String, 
      hash: String
    }
  }
};
```

### 7.8.2 Database Security Configuration

#### **PostgreSQL Security Settings**
```sql
-- Enable SSL/TLS
ALTER SYSTEM SET ssl = on;
ALTER SYSTEM SET ssl_cert_file = 'server.crt';
ALTER SYSTEM SET ssl_key_file = 'server.key';

-- Enable audit logging
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_duration = on;
ALTER SYSTEM SET log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h ';

-- Configure authentication
-- pg_hba.conf
hostssl    all    all    0.0.0.0/0    md5
local      all    postgres                    peer

-- Row Level Security example
CREATE POLICY tenant_isolation ON campaigns
    FOR ALL TO application_role
    USING (tenant_id = current_setting('app.tenant_id'));

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
```

#### **MongoDB Security Configuration**
```javascript
// MongoDB authentication và authorization
// mongod.conf
security:
  authorization: enabled
  clusterAuthMode: keyFile
  keyFile: /etc/mongodb-keyfile

net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem

// Application user roles
db.createUser({
  user: "campaign_service",
  pwd: "secure_password",
  roles: [
    {
      role: "readWrite",
      db: "psp_campaigns"
    }
  ]
});

db.createUser({
  user: "analytics_service", 
  pwd: "secure_password",
  roles: [
    {
      role: "read",
      db: "psp_campaigns"
    },
    {
      role: "readWrite", 
      db: "psp_analytics"
    }
  ]
});
```

---

## 7.9 Monitoring & Maintenance

### 7.9.1 Database Health Monitoring

#### **PostgreSQL Monitoring Queries**
```sql
-- Connection monitoring
SELECT 
  datname,
  state,
  COUNT(*) as connection_count
FROM pg_stat_activity 
WHERE state IS NOT NULL
GROUP BY datname, state;

-- Slow query monitoring  
SELECT 
  query,
  mean_time,
  calls,
  total_time
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Table bloat monitoring
SELECT 
  schemaname,
  tablename,
  n_tup_ins + n_tup_upd + n_tup_del as total_operations,
  n_dead_tup,
  last_vacuum,
  last_autovacuum
FROM pg_stat_user_tables
WHERE n_dead_tup > 1000;
```

#### **MongoDB Monitoring**
```javascript
// Database stats monitoring
db.runCommand({dbStats: 1});

// Collection stats
db.campaigns.stats();

// Index usage monitoring
db.campaigns.aggregate([
  {$indexStats: {}}
]);

// Slow operations profiling
db.setProfilingLevel(1, {slowms: 1000});
db.system.profile.find().sort({ts: -1}).limit(5);
```

### 7.9.2 Automated Maintenance Tasks

#### **Database Maintenance Schedule**
```yaml
# maintenance-jobs.yaml
schedules:
  postgresql:
    vacuum_analyze:
      schedule: "0 2 * * *" # Daily at 2 AM
      command: "VACUUM ANALYZE;"
      
    reindex:
      schedule: "0 3 * * 0" # Weekly on Sunday at 3 AM
      command: "REINDEX DATABASE psp_main;"
      
    backup:
      schedule: "0 1 * * *" # Daily at 1 AM
      command: "pg_dump psp_main | gzip > /backups/psp_$(date +%Y%m%d).sql.gz"
      
  mongodb:
    compact:
      schedule: "0 4 * * 0" # Weekly on Sunday at 4 AM
      command: "db.runCommand({compact: 'campaigns'})"
      
    index_rebuild:
      schedule: "0 5 * * 0" # Weekly on Sunday at 5 AM
      command: "db.campaigns.reIndex()"
      
  redis:
    memory_cleanup:
      schedule: "*/30 * * * *" # Every 30 minutes
      command: "redis-cli MEMORY PURGE"
```

---

## 7.10 Backup & Recovery Strategy

### 7.10.1 Backup Strategy

```mermaid
graph TB
    subgraph "Backup Types"
        BT1[Full Backup - Daily]
        BT2[Incremental - Hourly] 
        BT3[Transaction Log - Continuous]
        BT4[Snapshot - Weekly]
    end
    
    subgraph "Storage Locations"
        SL1[Local Storage - 7 days]
        SL2[Regional Storage - 30 days]
        SL3[Cross-Region - 1 year]
        SL4[Cold Storage - 7 years]
    end
    
    subgraph "Recovery Objectives"
        RO1[RTO: 4 hours]
        RO2[RPO: 15 minutes]
        RO3[Data Retention: 7 years]
    end
    
    BT1 --> SL1 --> RO1
    BT2 --> SL2 --> RO2  
    BT3 --> SL3 --> RO3
    BT4 --> SL4
    
    style BT1 fill:#e3f2fd
    style SL2 fill:#e8f5e8
    style RO2 fill:#fff3e0
```

### 7.10.2 Recovery Procedures

#### **Point-in-Time Recovery Setup**
```bash
#!/bin/bash
# PostgreSQL PITR setup

# Enable WAL archiving
echo "archive_mode = on" >> postgresql.conf
echo "archive_command = 'cp %p /archive/%f'" >> postgresql.conf  
echo "wal_level = replica" >> postgresql.conf

# Create base backup
pg_basebackup -D /backup/base -Ft -z -P

# Recovery script
restore_to_point_in_time() {
  local target_time=$1
  
  # Stop PostgreSQL
  systemctl stop postgresql
  
  # Restore base backup
  rm -rf /var/lib/postgresql/data/*
  tar -xzf /backup/base/base.tar.gz -C /var/lib/postgresql/data/
  
  # Create recovery.conf
  cat > /var/lib/postgresql/data/recovery.conf << EOF
restore_command = 'cp /archive/%f %p'
recovery_target_time = '$target_time'
recovery_target_action = 'promote'
EOF
  
  # Start recovery
  systemctl start postgresql
}
```

#### **MongoDB Backup & Restore**
```bash
#!/bin/bash
# MongoDB backup script

backup_mongodb() {
  local backup_dir="/backups/mongodb/$(date +%Y%m%d_%H%M%S)"
  mkdir -p $backup_dir
  
  # Create consistent backup
  mongodump \
    --host mongodb-replica-set/mongo1:27017,mongo2:27017,mongo3:27017 \
    --username backup_user \
    --password $MONGO_BACKUP_PASSWORD \
    --authenticationDatabase admin \
    --out $backup_dir \
    --gzip
    
  # Upload to cloud storage
  aws s3 sync $backup_dir s3://psp-backups/mongodb/$(date +%Y%m%d_%H%M%S)/
}

restore_mongodb() {
  local backup_path=$1
  local target_db=$2
  
  # Download from cloud if needed
  if [[ $backup_path == s3://* ]]; then
    local local_path="/tmp/mongodb_restore_$(date +%s)"
    aws s3 sync $backup_path $local_path
    backup_path=$local_path
  fi
  
  # Restore database
  mongorestore \
    --host mongodb-replica-set/mongo1:27017,mongo2:27017,mongo3:27017 \
    --username restore_user \
    --password $MONGO_RESTORE_PASSWORD \
    --authenticationDatabase admin \
    --db $target_db \
    --gzip \
    $backup_path
}
```

---

## 7.11 Data Quality & Validation

### 7.11.1 Data Validation Rules

#### **Application-level Validation**
```typescript
// User data validation schema
import { IsEmail, IsPhoneNumber, IsDateString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 100)
  fullName: string;
  
  @IsEmail()
  email: string;
  
  @IsPhoneNumber('VN')
  phoneNumber: string;
  
  @IsDateString()
  dateOfBirth?: string;
  
  // Custom validation
  @IsValidGender()
  gender?: 'M' | 'F' | 'Other' | 'Prefer_not_to_say';
}

// Custom validator
function IsValidGender() {
  return function (object: Object, propertyName: string) {
    // Gender validation logic
  };
}
```

#### **Database Constraints**
```sql
-- PostgreSQL constraints
ALTER TABLE barcodes 
ADD CONSTRAINT check_code_format 
CHECK (code ~ '^[A-Z]{3}[0-9]{4}[A-Z][0-9]{8}[A-Z]login:{userId}" = counter
// TTL: 15 minutes, max 5 attempts

"rate_limit:);

ALTER TABLE redemptions
ADD CONSTRAINT check_redemption_time
CHECK (redeemed_at >= created_at);

-- MongoDB validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["personalInfo", "verification", "status"],
      properties: {
        "personalInfo.email.encrypted": {
          bsonType: "string",
          minLength: 1
        },
        "verification.email.isVerified": {
          bsonType: "bool"
        },
        status: {
          enum: ["active", "inactive", "suspended", "deleted"]
        }
      }
    }
  }
});
```

### 7.11.2 Data Quality Monitoring

#### **Automated Data Quality Checks**
```javascript
// Data quality monitoring job
const dataQualityChecks = {
  async checkBarcodeIntegrity() {
    // Check for orphaned barcodes
    const orphanedBarcodes = await db.query(`
      SELECT COUNT(*) 
      FROM barcodes b
      LEFT JOIN barcode_pools bp ON b.pool_id = bp.id
      WHERE bp.id IS NULL
    `);
    
    if (orphanedBarcodes.count > 0) {
      await alertManager.send({
        level: 'warning',
        message: `Found ${orphanedBarcodes.count} orphaned barcodes`
      });
    }
  },
  
  async checkUserDataConsistency() {
    // Check for users with unverified email but verified phone
    const inconsistentUsers = await User.find({
      'verification.email.isVerified': false,
      'verification.phone.isVerified': true,
      createdAt: { $lt: new Date(Date.now() - 24*60*60*1000) } // Older than 24h
    }).countDocuments();
    
    if (inconsistentUsers > 100) {
      await alertManager.send({
        level: 'error',
        message: `Found ${inconsistentUsers} users with inconsistent verification status`
      });
    }
  },
  
  async checkRedemptionAccuracy() {
    // Cross-check redemption counts
    const pgRedemptions = await redemptionService.getCount();
    const mongoEvents = await analyticsService.getRedemptionEventCount();
    
    const discrepancy = Math.abs(pgRedemptions - mongoEvents);
    if (discrepancy > 10) {
      await alertManager.send({
        level: 'critical',
        message: `Redemption count discrepancy: PG=${pgRedemptions}, Mongo=${mongoEvents}`
      });
    }
  }
};

// Schedule checks
cron.schedule('0 */6 * * *', dataQualityChecks.checkBarcodeIntegrity);
cron.schedule('0 2 * * *', dataQualityChecks.checkUserDataConsistency);
cron.schedule('0 */2 * * *', dataQualityChecks.checkRedemptionAccuracy);
```

---

## 7.12 Database Performance Benchmarks

### 7.12.1 Expected Performance Metrics

| Operation | Database | Target Performance | Measurement Method |
|-----------|----------|-------------------|-------------------|
| **Barcode Reservation** | PostgreSQL | <800ms (p95) | Application metrics |
| **User Profile Read** | MongoDB | <200ms (p95) | Application metrics |
| **Campaign Analytics** | MongoDB | <3s (p95) | Dashboard response time |
| **Session Lookup** | Redis | <10ms (p95) | Application metrics |
| **Bulk Barcode Insert** | PostgreSQL | 1000 records/second | ETL job metrics |
| **Event Ingestion** | MongoDB | 10,000 events/second | Analytics pipeline |

### 7.12.2 Performance Testing Scripts

#### **PostgreSQL Load Testing**
```sql
-- Load test script for barcode reservation
DO $
DECLARE
  i INTEGER;
  start_time TIMESTAMP;
  end_time TIMESTAMP;
  pool_uuid UUID := 'your-pool-id';
  user_uuid UUID;
BEGIN
  start_time := clock_timestamp();
  
  FOR i IN 1..1000 LOOP
    user_uuid := gen_random_uuid();
    
    PERFORM reserve_barcode(pool_uuid, user_uuid);
    
    IF i % 100 = 0 THEN
      RAISE NOTICE 'Completed % reservations', i;
    END IF;
  END LOOP;
  
  end_time := clock_timestamp();
  RAISE NOTICE 'Total time: % seconds', EXTRACT(EPOCH FROM (end_time - start_time));
END $;
```

#### **MongoDB Performance Testing**
```javascript
// Load test script for user queries
const loadTestUserQueries = async () => {
  const startTime = Date.now();
  const concurrency = 100;
  const totalQueries = 10000;
  
  const promises = [];
  
  for (let i = 0; i < concurrency; i++) {
    promises.push(
      (async () => {
        for (let j = 0; j < totalQueries / concurrency; j++) {
          const randomUserId = new ObjectId();
          
          await db.users.findOne({
            _id: randomUserId
          });
        }
      })()
    );
  }
  
  await Promise.all(promises);
  
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;
  const qps = totalQueries / duration;
  
  console.log(`Completed ${totalQueries} queries in ${duration}s`);
  console.log(`Average QPS: ${qps.toFixed(2)}`);
};
```

---

## 7.13 Disaster Recovery Testing

### 7.13.1 DR Test Scenarios

#### **Database Failover Test**
```bash
#!/bin/bash
# PostgreSQL failover test script

test_postgresql_failover() {
  echo "Starting PostgreSQL failover test..."
  
  # Record current primary
  local primary_host=$(pg_isready -h postgres-primary -p 5432 && echo "postgres-primary" || echo "none")
  echo "Current primary: $primary_host"
  
  # Simulate primary failure
  echo "Simulating primary failure..."
  docker stop postgres-primary
  
  # Wait for failover
  echo "Waiting for failover..."
  local attempts=0
  local max_attempts=30
  
  while [ $attempts -lt $max_attempts ]; do
    if pg_isready -h postgres-replica -p 5432; then
      echo "Failover successful after $((attempts * 10)) seconds"
      break
    fi
    
    sleep 10
    attempts=$((attempts + 1))
  done
  
  if [ $attempts -eq $max_attempts ]; then
    echo "Failover failed - timeout after 300 seconds"
    exit 1
  fi
  
  # Test write operations on new primary
  echo "Testing write operations..."
  psql -h postgres-replica -c "INSERT INTO health_check (timestamp) VALUES (NOW());"
  
  if [ $? -eq 0 ]; then
    echo "Write test successful"
  else
    echo "Write test failed"
    exit 1
  fi
  
  # Restart original primary as replica
  echo "Restarting original primary as replica..."
  docker start postgres-primary
  
  echo "Failover test completed successfully"
}

test_mongodb_replica_failover() {
  echo "Starting MongoDB replica set failover test..."
  
  # Get current primary
  local primary=$(mongo --quiet --eval "rs.isMaster().primary")
  echo "Current primary: $primary"
  
  # Step down primary
  mongo --host $primary --eval "rs.stepDown(60)"
  
  # Wait for new primary election
  sleep 30
  
  # Verify new primary
  local new_primary=$(mongo --quiet --eval "rs.isMaster().primary")
  echo "New primary: $new_primary"
  
  if [ "$primary" != "$new_primary" ]; then
    echo "MongoDB failover successful"
  else
    echo "MongoDB failover failed"
    exit 1
  fi
}
```

### 7.13.2 Data Consistency Verification

#### **Cross-Database Consistency Check**
```javascript
// Data consistency verification after DR
const verifyDataConsistency = async () => {
  console.log('Starting data consistency verification...');
  
  // Check barcode counts
  const pgBarcodeCount = await db.query('SELECT COUNT(*) FROM barcodes WHERE status = $1', ['issued']);
  const mongoBarcodeEvents = await db.events.countDocuments({
    eventType: 'barcode_issued',
    timestamp: { $gte: new Date('2025-01-01') }
  });
  
  console.log(`PostgreSQL issued barcodes: ${pgBarcodeCount.rows[0].count}`);
  console.log(`MongoDB barcode events: ${mongoBarcodeEvents}`);
  
  // Check user verification counts
  const pgUserCount = await db.query('SELECT COUNT(DISTINCT assigned_user_id) FROM barcodes WHERE assigned_user_id IS NOT NULL');
  const mongoVerifiedUsers = await db.users.countDocuments({
    'verification.phone.isVerified': true
  });
  
  console.log(`PostgreSQL assigned users: ${pgUserCount.rows[0].count}`);
  console.log(`MongoDB verified users: ${mongoVerifiedUsers}`);
  
  // Check redemption consistency
  const pgRedemptions = await db.query('SELECT COUNT(*) FROM redemptions');
  const mongoRedemptionEvents = await db.events.countDocuments({
    eventType: 'redemption'
  });
  
  console.log(`PostgreSQL redemptions: ${pgRedemptions.rows[0].count}`);
  console.log(`MongoDB redemption events: ${mongoRedemptionEvents}`);
  
  // Calculate discrepancies
  const barcodeDiscrepancy = Math.abs(pgBarcodeCount.rows[0].count - mongoBarcodeEvents);
  const redemptionDiscrepancy = Math.abs(pgRedemptions.rows[0].count - mongoRedemptionEvents);
  
  if (barcodeDiscrepancy > 10 || redemptionDiscrepancy > 5) {
    throw new Error(`Data consistency check failed: barcode=${barcodeDiscrepancy}, redemption=${redemptionDiscrepancy}`);
  }
  
  console.log('Data consistency verification passed');
};
```

---

## 7.14 Database Optimization Roadmap

### 7.14.1 Phase 1 Optimizations (MVP)

| Optimization | Target | Implementation | Expected Gain |
|--------------|--------|----------------|---------------|
| **Connection Pooling** | Reduce connection overhead | PgBouncer, MongoDB connection limits | 2-3x throughput |
| **Basic Indexing** | Fast queries | Strategic index creation | 5-10x query speed |
| **Query Optimization** | Efficient operations | Query plan analysis | 2-5x specific queries |
| **Redis Caching** | Reduce database load | Frequently accessed data | 10-50x read performance |

### 7.14.2 Phase 2 Optimizations (Scale)

| Optimization | Target | Implementation | Expected Gain |
|--------------|--------|----------------|---------------|
| **Read Replicas** | Scale read operations | PostgreSQL streaming replication | 2-3x read capacity |
| **MongoDB Sharding** | Horizontal scaling | Shard key design, cluster setup | 5-10x write capacity |
| **Partitioning** | Large table performance | Time-based partitioning | 3-5x large table queries |
| **Advanced Caching** | Complex query caching | Redis Cluster, cache strategies | 5-20x complex queries |

### 7.14.3 Phase 3 Optimizations (Enterprise)

| Optimization | Target | Implementation | Expected Gain |
|--------------|--------|----------------|---------------|
| **Multi-Region** | Global performance | Cross-region replication | Reduced latency globally |
| **Analytics DB** | Separate OLAP workload | Data warehouse, ETL pipelines | Isolated analytics performance |
| **Time-Series DB** | Event data optimization | InfluxDB/TimescaleDB | 10x time-series queries |
| **Graph Database** | Relationship queries | Neo4j for user connections | Specialized graph performance |

---

## 7.15 Summary & Next Steps

### 7.15.1 Database Architecture Summary

**Polyglot Persistence Strategy:**
- ✅ **PostgreSQL**: Transactional integrity cho barcodes và redemptions
- ✅ **MongoDB**: Flexible schema cho campaigns, users, analytics  
- ✅ **Redis**: High-performance caching và messaging

**Key Design Decisions:**
- Database per service cho independence
- Event-driven consistency cho cross-service data
- Field-level encryption cho PII protection
- Multi-level caching cho performance
- Comprehensive backup và DR strategy

### 7.15.2 Implementation Priority

```mermaid
gantt
    title Database Implementation Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1 (MVP)
    PostgreSQL Setup    :done, pg1, 2025-01-01, 15d
    MongoDB Setup       :done, mg1, 2025-01-01, 15d
    Redis Setup         :done, rd1, 2025-01-01, 10d
    Basic Schemas       :active, bs1, 2025-01-15, 20d
    Indexes & Optimization :bs2, 2025-02-01, 15d
    
    section Phase 2 (Scale)
    Read Replicas       :rr1, 2025-06-01, 20d
    Advanced Indexing   :ai1, 2025-06-15, 15d
    Sharding Setup      :ss1, 2025-07-01, 30d
    Performance Tuning  :pt1, 2025-07-15, 20d
    
    section Phase 3 (Enterprise)
    Multi-Region Setup  :mr1, 2025-12-01, 45d
    Analytics DB        :ad1, 2025-12-15, 30d
    Advanced Security   :as1, 2026-01-01, 20d
```

### 7.15.3 Success Criteria

**Performance Targets:**
- [ ] Barcode reservation: <800ms (p95)
- [ ] User profile read: <200ms (p95)  
- [ ] Campaign analytics: <3s (p95)
- [ ] Session lookup: <10ms (p95)

**Reliability Targets:**
- [ ] 99.9% database uptime
- [ ] RPO: 15 minutes
- [ ] RTO: 4 hours
- [ ] Zero data loss incidents

**Security Targets:**
- [ ] 100% PII field encryption
- [ ] GDPR/PDPA compliance
- [ ] Zero unauthorized access
- [ ] Complete audit trails

---

## 7.16 ERD Tổng thể Hệ thống

### 7.16.1 Entity Relationship Diagram Hoàn chỉnh

```mermaid
erDiagram
    %% PostgreSQL Entities
    BARCODE_POOLS ||--o{ BARCODES : "chứa"
    BARCODES ||--o| REDEMPTIONS : "được đổi bởi"
    LOCATIONS ||--o{ REDEMPTIONS : "xử lý tại"
    
    %% Cross-database relationships (logical)
    CAMPAIGNS ||--o{ BARCODE_POOLS : "có"
    USERS ||--o{ BARCODES : "được gán"
    USERS ||--o{ REDEMPTIONS : "thực hiện"
    CAMPAIGNS ||--o{ EVENTS : "tạo ra"
    USERS ||--o{ EVENTS : "thực hiện"
    
    %% PostgreSQL Tables
    BARCODE_POOLS {
        uuid id PK
        string name
        uuid campaign_id FK "MongoDB campaigns._id"
        integer total_quantity
        integer available_quantity
        timestamp created_at
        timestamp updated_at
    }
    
    BARCODES {
        uuid id PK
        string code UK
        uuid pool_id FK
        string product_name
        decimal value
        date expiry_date
        string batch_code
        enum status
        uuid assigned_user_id FK "MongoDB users._id"
        timestamp reserved_at
        timestamp issued_at
        timestamp created_at
        timestamp updated_at
    }
    
    REDEMPTIONS {
        uuid id PK
        uuid barcode_id FK
        uuid user_id FK "MongoDB users._id"
        uuid location_id FK
        uuid staff_id FK "MongoDB users._id"
        decimal transaction_amount
        timestamp redeemed_at
        json metadata
        boolean is_offline_sync
        timestamp synced_at
        timestamp created_at
    }
    
    LOCATIONS {
        uuid id PK
        string name
        string type
        string address
        decimal latitude
        decimal longitude
        json contact_info
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }
    
    %% MongoDB Collections (logical representation)
    CAMPAIGNS {
        objectId _id PK
        string name
        string description
        string slug UK
        date startDate
        date endDate
        array products
        object config
        object tracking
        object targeting
        string status
        array barcodePoolIds
        array adsFormatIds
        objectId createdBy
        string tenantId
        timestamp createdAt
        timestamp updatedAt
    }
    
    USERS {
        objectId _id PK
        object personalInfo
        string emailHash UK
        string phoneHash UK
        object address
        object verification
        object preferences
        object activity
        object riskProfile
        object compliance
        string status
        timestamp createdAt
        timestamp updatedAt
    }
    
    EVENTS {
        objectId _id PK
        string eventType
        string eventId UK
        string sessionId
        objectId userId FK
        objectId campaignId FK
        objectId adsFormatId
        string locationId
        object data
        object tracking
        object location
        object device
        timestamp timestamp
        timestamp receivedAt
        timestamp processedAt
    }
    
    ADS_FORMATS {
        objectId _id PK
        string name
        string type
        object dimensions
        array designFiles
        object qrConfig
        object printSpecs
        objectId campaignId FK
        object usage
        objectId createdBy
        string tenantId
        timestamp createdAt
        timestamp updatedAt
    }
```

### 7.16.2 Data Relationship Mapping

**Cross-Database References:**

| Source DB | Source Table/Collection | Target DB | Target Table/Collection | Relationship Type |
|-----------|------------------------|-----------|------------------------|-------------------|
| MongoDB | campaigns._id | PostgreSQL | barcode_pools.campaign_id | One-to-Many |
| MongoDB | users._id | PostgreSQL | barcodes.assigned_user_id | One-to-Many |
| MongoDB | users._id | PostgreSQL | redemptions.user_id | One-to-Many |
| MongoDB | users._id | PostgreSQL | redemptions.staff_id | One-to-Many |
| PostgreSQL | locations.id | PostgreSQL | redemptions.location_id | One-to-Many |
| MongoDB | campaigns._id | MongoDB | events.campaignId | One-to-Many |
| MongoDB | users._id | MongoDB | events.userId | One-to-Many |
| MongoDB | campaigns._id | MongoDB | ads_formats.campaignId | One-to-Many |

---

## 7.17 Database Migration Scripts

### 7.17.1 PostgreSQL Migration Scripts

#### **V1.0.0__initial_schema.sql**
```sql
-- Version 1.0.0: Initial database schema
BEGIN;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE barcode_status AS ENUM (
    'available', 'reserved', 'issued', 'redeemed', 'expired'
);

CREATE TYPE location_type AS ENUM (
    'store', 'booth', 'event', 'online'
);

-- Locations table
CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type location_type NOT NULL DEFAULT 'store',
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    contact_info JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Barcode pools table
CREATE TABLE barcode_pools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    campaign_id UUID NOT NULL, -- Reference to MongoDB campaigns
    total_quantity INTEGER NOT NULL CHECK (total_quantity > 0),
    available_quantity INTEGER NOT NULL CHECK (available_quantity >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT check_pool_quantity CHECK (available_quantity <= total_quantity)
);

-- Barcodes table
CREATE TABLE barcodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) NOT NULL UNIQUE,
    pool_id UUID NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    value DECIMAL(10,2),
    expiry_date DATE NOT NULL,
    batch_code VARCHAR(100),
    status barcode_status DEFAULT 'available',
    assigned_user_id UUID, -- Reference to MongoDB users
    reserved_at TIMESTAMP WITH TIME ZONE,
    issued_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_pool FOREIGN KEY (pool_id) 
        REFERENCES barcode_pools(id) ON DELETE CASCADE,
    CONSTRAINT check_expiry CHECK (expiry_date > CURRENT_DATE),
    CONSTRAINT check_status_flow CHECK (
        (status = 'available' AND assigned_user_id IS NULL) OR
        (status IN ('reserved', 'issued', 'redeemed') AND assigned_user_id IS NOT NULL)
    )
);

-- Redemptions table
CREATE TABLE redemptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    barcode_id UUID NOT NULL,
    user_id UUID NOT NULL, -- Reference to MongoDB users
    location_id UUID NOT NULL,
    staff_id UUID, -- Reference to MongoDB users (staff)
    transaction_amount DECIMAL(10,2),
    redeemed_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB,
    is_offline_sync BOOLEAN DEFAULT FALSE,
    synced_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_barcode FOREIGN KEY (barcode_id) 
        REFERENCES barcodes(id) ON DELETE RESTRICT,
    CONSTRAINT fk_location FOREIGN KEY (location_id) 
        REFERENCES locations(id) ON DELETE RESTRICT,
    CONSTRAINT check_sync_logic CHECK (
        (is_offline_sync = FALSE AND synced_at IS NULL) OR
        (is_offline_sync = TRUE AND synced_at IS NOT NULL)
    )
);

-- Schema migrations tracking
CREATE TABLE schema_migrations (
    version VARCHAR(50) PRIMARY KEY,
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    description TEXT
);

-- Insert initial version
INSERT INTO schema_migrations (version, description) 
VALUES ('1.0.0', 'Initial schema setup');

COMMIT;
```

#### **V1.1.0__add_indexes.sql**
```sql
-- Version 1.1.0: Add performance indexes
BEGIN;

-- Barcode pools indexes
CREATE INDEX idx_barcode_pools_campaign_id ON barcode_pools(campaign_id);
CREATE INDEX idx_barcode_pools_available ON barcode_pools(available_quantity) 
    WHERE available_quantity > 0;

-- Barcodes indexes
CREATE UNIQUE INDEX idx_barcodes_code ON barcodes(code);
CREATE INDEX idx_barcodes_pool_status ON barcodes(pool_id, status);
CREATE INDEX idx_barcodes_user_status ON barcodes(assigned_user_id, status) 
    WHERE assigned_user_id IS NOT NULL;
CREATE INDEX idx_barcodes_expiry ON barcodes(expiry_date) 
    WHERE status IN ('available', 'reserved', 'issued');
CREATE INDEX idx_barcodes_pool_available ON barcodes(pool_id) 
    WHERE status = 'available';

-- Redemptions indexes
CREATE UNIQUE INDEX idx_redemptions_barcode ON redemptions(barcode_id);
CREATE INDEX idx_redemptions_user_date ON redemptions(user_id, redeemed_at);
CREATE INDEX idx_redemptions_location_date ON redemptions(location_id, redeemed_at);
CREATE INDEX idx_redemptions_offline_sync ON redemptions(is_offline_sync, synced_at) 
    WHERE is_offline_sync = TRUE;
CREATE INDEX idx_redemptions_staff_date ON redemptions(staff_id, redeemed_at)
    WHERE staff_id IS NOT NULL;

-- Locations indexes
CREATE INDEX idx_locations_type_active ON locations(type, is_active);
CREATE INDEX idx_locations_coordinates ON locations(latitude, longitude)
    WHERE latitude IS NOT NULL AND longitude IS NOT NULL;

-- Record migration
INSERT INTO schema_migrations (version, description) 
VALUES ('1.1.0', 'Add performance indexes');

COMMIT;
```

#### **V1.2.0__add_triggers_and_functions.sql**
```sql
-- Version 1.2.0: Add business logic triggers and functions
BEGIN;

-- Function to update pool quantity
CREATE OR REPLACE FUNCTION update_pool_quantity()
RETURNS TRIGGER AS $
BEGIN
    IF TG_OP = 'UPDATE' THEN
        -- Barcode status changed
        IF OLD.status = 'available' AND NEW.status != 'available' THEN
            UPDATE barcode_pools 
            SET available_quantity = available_quantity - 1,
                updated_at = NOW()
            WHERE id = NEW.pool_id;
        ELSIF OLD.status != 'available' AND NEW.status = 'available' THEN
            UPDATE barcode_pools 
            SET available_quantity = available_quantity + 1,
                updated_at = NOW()
            WHERE id = NEW.pool_id;
        END IF;
    ELSIF TG_OP = 'INSERT' THEN
        -- New barcode added
        UPDATE barcode_pools 
        SET total_quantity = total_quantity + 1,
            available_quantity = CASE 
                WHEN NEW.status = 'available' THEN available_quantity + 1 
                ELSE available_quantity 
            END,
            updated_at = NOW()
        WHERE id = NEW.pool_id;
    ELSIF TG_OP = 'DELETE' THEN
        -- Barcode deleted
        UPDATE barcode_pools 
        SET total_quantity = total_quantity - 1,
            available_quantity = CASE 
                WHEN OLD.status = 'available' THEN available_quantity - 1 
                ELSE available_quantity 
            END,
            updated_at = NOW()
        WHERE id = OLD.pool_id;
    END IF;
    
    RETURN COALESCE(NEW, OLD);
END;
$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trigger_update_pool_quantity
    AFTER INSERT OR UPDATE OR DELETE ON barcodes
    FOR EACH ROW
    EXECUTE FUNCTION update_pool_quantity();

-- Function to auto-update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$ LANGUAGE plpgsql;

-- Auto-update triggers
CREATE TRIGGER trigger_barcode_pools_updated_at
    BEFORE UPDATE ON barcode_pools
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_barcodes_updated_at
    BEFORE UPDATE ON barcodes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_locations_updated_at
    BEFORE UPDATE ON locations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Business logic functions
CREATE OR REPLACE FUNCTION reserve_barcode(
    p_pool_id UUID,
    p_user_id UUID,
    p_product_preference TEXT DEFAULT NULL
)
RETURNS TABLE(barcode_id UUID, barcode_code TEXT) AS $
DECLARE
    selected_barcode barcodes%ROWTYPE;
BEGIN
    -- Lock pool để tránh race condition
    PERFORM 1 FROM barcode_pools 
    WHERE id = p_pool_id AND available_quantity > 0
    FOR UPDATE;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Pool % không có barcode available', p_pool_id;
    END IF;
    
    -- Chọn barcode available
    SELECT * INTO selected_barcode
    FROM barcodes 
    WHERE pool_id = p_pool_id 
        AND status = 'available'
        AND expiry_date > CURRENT_DATE
        AND (p_product_preference IS NULL OR product_name ILIKE '%' || p_product_preference || '%')
    ORDER BY expiry_date ASC, created_at ASC
    LIMIT 1
    FOR UPDATE;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Không có barcode available trong pool %', p_pool_id;
    END IF;
    
    -- Update barcode status
    UPDATE barcodes 
    SET status = 'reserved',
        assigned_user_id = p_user_id,
        reserved_at = NOW(),
        updated_at = NOW()
    WHERE id = selected_barcode.id;
    
    RETURN QUERY SELECT selected_barcode.id, selected_barcode.code;
END;
$ LANGUAGE plpgsql;

-- Record migration
INSERT INTO schema_migrations (version, description) 
VALUES ('1.2.0', 'Add triggers and business functions');

COMMIT;
```

### 7.17.2 MongoDB Migration Scripts

#### **migrations/001_initial_collections.js**
```javascript
// Migration 001: Initial collections setup
db = db.getSiblingDB('psp_main');

// Campaigns collection
db.createCollection("campaigns", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "startDate", "endDate", "status", "tenantId"],
      properties: {
        name: {
          bsonType: "string",
          minLength: 1,
          maxLength: 255
        },
        slug: {
          bsonType: "string",
          pattern: "^[a-z0-9-]+$"
        },
        startDate: { bsonType: "date" },
        endDate: { bsonType: "date" },
        status: {
          enum: ["draft", "active", "paused", "completed", "cancelled"]
        },
        tenantId: { bsonType: "string" }
      }
    }
  }
});

// Users collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["emailHash", "phoneHash", "verification", "status"],
      properties: {
        "personalInfo.fullName": { bsonType: "string" },
        emailHash: { bsonType: "string" },
        phoneHash: { bsonType: "string" },
        "verification.email.isVerified": { bsonType: "bool" },
        "verification.phone.isVerified": { bsonType: "bool" },
        status: {
          enum: ["active", "inactive", "suspended", "deleted"]
        }
      }
    }
  }
});

// Events collection
db.createCollection("events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["eventType", "eventId", "timestamp"],
      properties: {
        eventType: {
          enum: ["qr_scan", "form_submit", "otp_sent", "otp_verified", 
                 "barcode_issued", "redemption", "survey_complete"]
        },
        eventId: { bsonType: "string" },
        timestamp: { bsonType: "date" }
      }
    }
  }
});

// Ads formats collection
db.createCollection("ads_formats", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "type", "campaignId"],
      properties: {
        name: { bsonType: "string" },
        type: {
          enum: ["flyer", "poster", "banner", "digital", "social", "email"]
        },
        campaignId: { bsonType: "objectId" }
      }
    }
  }
});

// Create indexes
db.campaigns.createIndex({ "slug": 1 }, { unique: true });
db.campaigns.createIndex({ "tenantId": 1, "status": 1 });
db.campaigns.createIndex({ "startDate": 1, "endDate": 1 });

db.users.createIndex({ "emailHash": 1 }, { unique: true });
db.users.createIndex({ "phoneHash": 1 }, { unique: true });
db.users.createIndex({ "verification.email.isVerified": 1, "verification.phone.isVerified": 1 });

db.events.createIndex({ "campaignId": 1, "timestamp": -1 });
db.events.createIndex({ "eventType": 1, "timestamp": -1 });
db.events.createIndex({ "sessionId": 1, "timestamp": 1 });

db.ads_formats.createIndex({ "campaignId": 1, "type": 1 });

print("Migration 001: Initial collections created successfully");
```

#### **migrations/002_add_ttl_indexes.js**
```javascript
// Migration 002: Add TTL indexes for data lifecycle
db = db.getSiblingDB('psp_main');

// TTL index cho events - xóa sau 1 năm
db.events.createIndex(
  { "timestamp": 1 },
  { 
    name: "events_ttl",
    expireAfterSeconds: 31536000 // 1 year
  }
);

// TTL index cho user sessions (nếu lưu trong MongoDB)
db.user_sessions.createIndex(
  { "expiresAt": 1 },
  { 
    name: "sessions_ttl",
    expireAfterSeconds: 0 // Expire at specified time
  }
);

// Compound indexes cho performance
db.campaigns.createIndex(
  { "tenantId": 1, "status": 1, "startDate": -1 },
  { name: "campaigns_tenant_status_date" }
);

db.events.createIndex(
  { "campaignId": 1, "eventType": 1, "timestamp": -1 },
  { name: "events_campaign_type_time" }
);

// Text search index
db.campaigns.createIndex(
  { "name": "text", "description": "text" },
  { name: "campaigns_text_search" }
);

print("Migration 002: TTL and performance indexes added");
```

---

## 7.18 Database Monitoring & Health Checks

### 7.18.1 PostgreSQL Monitoring Queries

#### **Database Health Monitoring**
```sql
-- Connection monitoring
CREATE VIEW v_connection_stats AS
SELECT 
  datname as database_name,
  state,
  COUNT(*) as connection_count,
  MAX(NOW() - state_change) as longest_idle_time
FROM pg_stat_activity 
WHERE state IS NOT NULL
GROUP BY datname, state;

-- Slow query monitoring
CREATE VIEW v_slow_queries AS
SELECT 
  query,
  mean_time,
  calls,
  total_time,
  rows,
  100.0 * shared_blks_hit / nullif(shared_blks_hit + shared_blks_read, 0) AS hit_percent
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 20;

-- Table statistics
CREATE VIEW v_table_stats AS
SELECT 
  schemaname,
  tablename,
  n_tup_ins + n_tup_upd + n_tup_del as total_operations,
  n_tup_ins as inserts,
  n_tup_upd as updates,
  n_tup_del as deletes,
  n_dead_tup as dead_tuples,
  last_vacuum,
  last_autovacuum,
  last_analyze,
  last_autoanalyze
FROM pg_stat_user_tables
ORDER BY total_operations DESC;

-- Index usage monitoring
CREATE VIEW v_index_usage AS
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_tup_read as index_reads,
  idx_tup_fetch as index_fetches,
  idx_scan as index_scans,
  pg_size_pretty(pg_relation_size(indexrelid)) as index_size
FROM pg_stat_user_indexes
ORDER BY idx_scan DESC;

-- Lock monitoring
CREATE VIEW v_lock_monitoring AS
SELECT 
  l.pid,
  l.mode,
  l.locktype,
  l.relation::regclass as table_name,
  l.granted,
  a.state,
  a.query_start,
  NOW() - a.query_start as duration
FROM pg_locks l
JOIN pg_stat_activity a ON l.pid = a.pid
WHERE l.granted = false
ORDER BY duration DESC;
```

#### **Automated Health Check Functions**
```sql
-- Health check function
CREATE OR REPLACE FUNCTION check_database_health()
RETURNS TABLE(
  check_name TEXT,
  status TEXT,
  value NUMERIC,
  threshold NUMERIC,
  message TEXT
) AS $
BEGIN
  -- Connection count check
  RETURN QUERY
  SELECT 
    'connection_count'::TEXT,
    CASE WHEN count(*) > 80 THEN 'WARNING'::TEXT ELSE 'OK'::TEXT END,
    count(*)::NUMERIC,
    80::NUMERIC,
    'Current database connections'::TEXT
  FROM pg_stat_activity;
  
  -- Dead tuple check
  RETURN QUERY
  SELECT 
    'dead_tuples'::TEXT,
    CASE WHEN SUM(n_dead_tup) > 10000 THEN 'WARNING'::TEXT ELSE 'OK'::TEXT END,
    SUM(n_dead_tup)::NUMERIC,
    10000::NUMERIC,
    'Total dead tuples across all tables'::TEXT
  FROM pg_stat_user_tables;
  
  -- Long running queries
  RETURN QUERY
  SELECT 
    'long_running_queries'::TEXT,
    CASE WHEN COUNT(*) > 5 THEN 'WARNING'::TEXT ELSE 'OK'::TEXT END,
    COUNT(*)::NUMERIC,
    5::NUMERIC,
    'Queries running longer than 10 minutes'::TEXT
  FROM pg_stat_activity 
  WHERE state = 'active' 
    AND NOW() - query_start > INTERVAL '10 minutes';
    
  -- Replication lag (if applicable)
  IF EXISTS (SELECT 1 FROM pg_stat_replication) THEN
    RETURN QUERY
    SELECT 
      'replication_lag'::TEXT,
      CASE WHEN MAX(replay_lag) > INTERVAL '1 minute' THEN 'WARNING'::TEXT ELSE 'OK'::TEXT END,
      EXTRACT(EPOCH FROM MAX(replay_lag))::NUMERIC,
      60::NUMERIC,
      'Maximum replication lag in seconds'::TEXT
    FROM pg_stat_replication;
  END IF;
END;
$ LANGUAGE plpgsql;
```

### 7.18.2 MongoDB Monitoring Scripts

#### **MongoDB Health Check Script**
```javascript
// MongoDB health monitoring functions
function checkMongoDBHealth() {
  const db = db.getSiblingDB('psp_main');
  const health = {
    timestamp: new Date(),
    checks: []
  };
  
  // Database stats
  const dbStats = db.runCommand({dbStats: 1});
  health.checks.push({
    name: 'database_size',
    status: dbStats.dataSize > 10 * 1024 * 1024 * 1024 ? 'WARNING' : 'OK', // 10GB
    value: dbStats.dataSize,
    threshold: 10 * 1024 * 1024 * 1024,
    message: 'Database size in bytes'
  });
  
  // Collection stats
  const collections = ['campaigns', 'users', 'events', 'ads_formats'];
  collections.forEach(collName => {
    const stats = db[collName].stats();
    health.checks.push({
      name: `${collName}_size`,
      status: stats.size > 1024 * 1024 * 1024 ? 'WARNING' : 'OK', // 1GB per collection
      value: stats.size,
      threshold: 1024 * 1024 * 1024,
      message: `${collName} collection size`
    });
  });
  
  // Index usage
  const indexStats = db.events.aggregate([
    {$indexStats: {}}
  ]).toArray();
  
  const unusedIndexes = indexStats.filter(idx => 
    idx.accesses.ops === 0 && idx.name !== '_id_'
  );
  
  health.checks.push({
    name: 'unused_indexes',
    status: unusedIndexes.length > 3 ? 'WARNING' : 'OK',
    value: unusedIndexes.length,
    threshold: 3,
    message: 'Number of unused indexes'
  });
  
  // Replica set status (if applicable)
  try {
    const rsStatus = rs.status();
    const unhealthyMembers = rsStatus.members.filter(member => 
      member.health !== 1 || member.state !== 1
    );
    
    health.checks.push({
      name: 'replica_health',
      status: unhealthyMembers.length > 0 ? 'CRITICAL' : 'OK',
      value: unhealthyMembers.length,
      threshold: 0,
      message: 'Unhealthy replica set members'
    });
  } catch (e) {
    // Not a replica set
  }
  
  return health;
}

// Slow operations monitoring
function checkSlowOperations() {
  const db = db.getSiblingDB('psp_main');
  
  // Enable profiling for slow operations (>1000ms)
  db.setProfilingLevel(1, {slowms: 1000});
  
  // Get recent slow operations
  const slowOps = db.system.profile.find().sort({ts: -1}).limit(10).toArray();
  
  return {
    timestamp: new Date(),
    slowOperations: slowOps.map(op => ({
      ns: op.ns,
      op: op.op,
      duration: op.millis,
      command: op.command,
      timestamp: op.ts
    }))
  };
}
```

### 7.18.3 Redis Monitoring Commands

#### **Redis Health Check Script**
```bash
#!/bin/bash
# Redis health monitoring script

REDIS_HOST=${REDIS_HOST:-localhost}
REDIS_PORT=${REDIS_PORT:-6379}
REDIS_PASSWORD=${REDIS_PASSWORD:-""}

check_redis_health() {
  echo "=== Redis Health Check ==="
  echo "Timestamp: $(date)"
  
  # Basic connectivity
  if redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" ping > /dev/null 2>&1; then
    echo "✅ Redis connectivity: OK"
  else
    echo "❌ Redis connectivity: FAILED"
    return 1
  fi
  
  # Memory usage
  local memory_used=$(redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" info memory | grep used_memory_human | cut -d: -f2 | tr -d '\r')
  local max_memory=$(redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" config get maxmemory | tail -1)
  echo "📊 Memory usage: $memory_used"
  
  # Connected clients
  local connected_clients=$(redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" info clients | grep connected_clients | cut -d: -f2 | tr -d '\r')
  echo "👥 Connected clients: $connected_clients"
  
  # Keyspace info
  redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" info keyspace
  
  # Slow log
  echo "🐌 Recent slow commands:"
  redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" slowlog get 5
  
  # Check key expiration patterns
  echo "🔑 Sample key TTLs:"
  for pattern in "session:*" "otp:*" "cache:*"; do
    local sample_key=$(redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" --scan --pattern "$pattern" | head -1)
    if [ ! -z "$sample_key" ]; then
      local ttl=$(redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" ttl "$sample_key")
      echo "  $pattern -> TTL: $ttl seconds"
    fi
  done
}

check_redis_health
```

---

## 7.19 Database Sharding Strategies

### 7.19.1 MongoDB Sharding Configuration

#### **Shard Key Design cho Collections**

```javascript
// Campaigns collection sharding
sh.enableSharding("psp_main");

// Shard campaigns by tenantId (compound với _id để ensure uniqueness)
sh.shardCollection("psp_main.campaigns", { "tenantId": 1, "_id": 1 });

// Users collection - shard by emailHash để distribute evenly
sh.shardCollection("psp_main.users", { "emailHash": 1 });

// Events collection - shard by campaignId và timestamp cho time-series data
sh.shardCollection("psp_main.events", { "campaignId": 1, "timestamp": 1 });

// Analytics collections - shard by date range
sh.shardCollection("psp_main.campaign_reports", { "reportDate": 1, "campaignId": 1 });
```

#### **Shard Zone Configuration**
```javascript
// Configure shard zones cho geographic distribution
sh.addShardToZone("shard01", "vietnam");
sh.addShardToZone("shard02", "thailand"); 
sh.addShardToZone("shard03", "indonesia");

// Define zone ranges cho campaigns by tenantId prefix
sh.updateZoneKeyRange(
  "psp_main.campaigns",
  { "tenantId": "vn_", "_id": MinKey },
  { "tenantId": "vn_z", "_id": MaxKey },
  "vietnam"
);

sh.updateZoneKeyRange(
  "psp_main.campaigns", 
  { "tenantId": "th_", "_id": MinKey },
  { "tenantId": "th_z", "_id": MaxKey },
  "thailand"
);
```

### 7.19.2 PostgreSQL Partitioning Strategy

#### **Time-based Partitioning cho Redemptions**
```sql
-- Create partitioned redemptions table
CREATE TABLE redemptions_partitioned (
    id UUID DEFAULT gen_random_uuid(),
    barcode_id UUID NOT NULL,
    user_id UUID NOT NULL,
    location_id UUID NOT NULL,
    staff_id UUID,
    transaction_amount DECIMAL(10,2),
    redeemed_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB,
    is_offline_sync BOOLEAN DEFAULT FALSE,
    synced_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    PRIMARY KEY (id, redeemed_at)
) PARTITION BY RANGE (redeemed_at);

-- Create monthly partitions
CREATE TABLE redemptions_2025_01 PARTITION OF redemptions_partitioned
    FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');

CREATE TABLE redemptions_2025_02 PARTITION OF redemptions_partitioned
    FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');

-- Function để tự động tạo partitions
CREATE OR REPLACE FUNCTION create_monthly_partition(table_name text, start_date date)
RETURNS void AS $
DECLARE
    partition_name text;
    end_date date;
BEGIN
    partition_name := table_name || '_' || to_char(start_date, 'YYYY_MM');
    end_date := start_date + interval '1 month';
    
    EXECUTE format('CREATE TABLE %I PARTITION OF %I 
                    FOR VALUES FROM (%L) TO (%L)',
                   partition_name, table_name, start_date, end_date);
    
    -- Add indexes to partition
    EXECUTE format('CREATE INDEX %I ON %I (user_id, redeemed_at)',
                   partition_name || '_user_date_idx', partition_name);
    EXECUTE format('CREATE INDEX %I ON %I (location_id, redeemed_at)', 
                   partition_name || '_location_date_idx', partition_name);
END;
$ LANGUAGE plpgsql;

-- Scheduled job để tạo partition mới
CREATE OR REPLACE FUNCTION maintain_partitions()
RETURNS void AS $
DECLARE
    next_month date;
BEGIN
    -- Tạo partition cho 3 tháng tới
    FOR i IN 0..2 LOOP
        next_month := date_trunc('month', CURRENT_DATE + interval '1 month' * i);
        
        -- Check if partition exists
        IF NOT EXISTS (
            SELECT 1 FROM pg_tables 
            WHERE tablename = 'redemptions_' || to_char(next_month, 'YYYY_MM')
        ) THEN
            PERFORM create_monthly_partition('redemptions_partitioned', next_month);
        END IF;
    END LOOP;
    
    -- Drop old partitions (older than 2 years)
    FOR partition_name IN 
        SELECT tablename FROM pg_tables 
        WHERE tablename LIKE 'redemptions_____' 
        AND tablename < 'redemptions_' || to_char(CURRENT_DATE - interval '2 years', 'YYYY_MM')
    LOOP
        EXECUTE format('DROP TABLE %I', partition_name);
    END LOOP;
END;
$ LANGUAGE plpgsql;
```

---

## 7.20 Connection Pooling Configuration

### 7.20.1 PostgreSQL Connection Pooling

#### **PgBouncer Configuration**
```ini
# /etc/pgbouncer/pgbouncer.ini
[databases]
psp_main = host=postgres-master port=5432 dbname=psp_main
psp_readonly = host=postgres-replica port=5432 dbname=psp_main

[pgbouncer]
# Pool settings
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 25
min_pool_size = 5
reserve_pool_size = 5
reserve_pool_timeout = 3

# Connection limits
max_db_connections = 50
max_user_connections = 50

# Timeouts
server_round_robin = 1
ignore_startup_parameters = extra_float_digits

# Authentication
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt

# Logging
admin_users = pgbouncer_admin
stats_users = pgbouncer_stats
log_connections = 1
log_disconnections = 1
log_pooler_errors = 1

# Performance
server_lifetime = 3600
server_idle_timeout = 600
client_idle_timeout = 0
```

#### **Application Connection Pool**
```typescript
// PostgreSQL connection pool trong NestJS
import { Pool } from 'pg';

const pgPool = new Pool({
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432'),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  
  // Pool configuration
  max: 20,                    // Maximum pool size
  min: 5,                     // Minimum pool size  
  idleTimeoutMillis: 30000,   // Close idle connections after 30s
  connectionTimeoutMillis: 5000, // Timeout for new connections
  
  // Health check
  application_name: 'psp-barcode-service',
  
  // SSL configuration
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
});

// Connection health monitoring
pgPool.on('connect', (client) => {
  console.log('New PostgreSQL client connected');
});

pgPool.on('error', (err, client) => {
  console.error('PostgreSQL client error:', err);
});

export default pgPool;
```

### 7.20.2 MongoDB Connection Pooling

#### **MongoDB Driver Configuration**
```typescript
import { MongoClient } from 'mongodb';

const mongoOptions = {
  // Connection pool settings
  maxPoolSize: 50,          // Maximum connections
  minPoolSize: 5,           // Minimum connections
  maxIdleTimeMS: 30000,     // Close idle connections after 30s
  maxConnecting: 10,        // Maximum simultaneous connections
  
  // Timeouts
  serverSelectionTimeoutMS: 5000,   // Timeout for server selection
  socketTimeoutMS: 45000,           // Socket timeout
  connectTimeoutMS: 10000,          // Connection timeout
  
  // Retry logic
  retryWrites: true,
  retryReads: true,
  
  // Read preferences
  readPreference: 'primaryPreferred',
  readConcern: { level: 'majority' },
  
  // Write concern
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 10000
  },
  
  // Monitoring
  monitorCommands: true,
  
  // Compression
  compressors: ['zstd', 'zlib']
};

const mongoClient = new MongoClient(process.env.MONGODB_URI, mongoOptions);

// Connection event monitoring
mongoClient.on('connectionPoolCreated', () => {
  console.log('MongoDB connection pool created');
});

mongoClient.on('connectionPoolClosed', () => {
  console.log('MongoDB connection pool closed');
});

mongoClient.on('connectionCreated', (event) => {
  console.log(`MongoDB connection created: ${event.connectionId}`);
});

mongoClient.on('connectionClosed', (event) => {
  console.log(`MongoDB connection closed: ${event.connectionId}`);
});

export default mongoClient;
```

### 7.20.3 Redis Connection Pooling

#### **Redis Cluster Configuration**
```typescript
import { Cluster } from 'ioredis';

const redisCluster = new Cluster([
  { host: 'redis-node-1', port: 6379 },
  { host: 'redis-node-2', port: 6379 },
  { host: 'redis-node-3', port: 6379 }
], {
  // Cluster options
  enableOfflineQueue: false,
  retryDelayOnFailover: 100,
  retryDelayOnClusterDown: 300,
  maxRetriesPerRequest: 3,
  
  // Redis options
  redisOptions: {
    password: process.env.REDIS_PASSWORD,
    
    // Connection pool
    connectTimeout: 10000,
    commandTimeout: 5000,
    retryDelayOnFailover: 100,
    
    // Keepalive
    keepAlive: 30000,
    
    // Lazy connect
    lazyConnect: true
  },
  
  // Scaling
  scaleReads: 'slave',
  
  // Health check
  enableReadyCheck: true,
  redisOptions: {
    // Pool size per node
    family: 4,
    keyPrefix: 'psp:',
    
    // Performance
    enableAutoPipelining: true
  }
});

// Error handling
redisCluster.on('error', (err) => {
  console.error('Redis cluster error:', err);
});

redisCluster.on('connect', () => {
  console.log('Redis cluster connected');
});

redisCluster.on('ready', () => {
  console.log('Redis cluster ready');
});

export default redisCluster;
```

---

## 7.21 Database Performance Benchmarking

### 7.21.1 PostgreSQL Performance Tests

#### **Barcode Reservation Load Test**
```sql
-- Load test function cho barcode reservation
CREATE OR REPLACE FUNCTION benchmark_barcode_reservation(
    test_pool_id UUID,
    concurrent_users INTEGER DEFAULT 100,
    total_reservations INTEGER DEFAULT 1000
)
RETURNS TABLE(
    total_time INTERVAL,
    avg_time_ms NUMERIC,
    success_count INTEGER,
    error_count INTEGER,
    throughput_per_second NUMERIC
) AS $
DECLARE
    start_time TIMESTAMP;
    end_time TIMESTAMP;
    success_cnt INTEGER := 0;
    error_cnt INTEGER := 0;
    i INTEGER;
    test_user_id UUID;
BEGIN
    start_time := clock_timestamp();
    
    -- Simulate concurrent reservations
    FOR i IN 1..total_reservations LOOP
        test_user_id := gen_random_uuid();
        
        BEGIN
            PERFORM reserve_barcode(test_pool_id, test_user_id);
            success_cnt := success_cnt + 1;
        EXCEPTION WHEN OTHERS THEN
            error_cnt := error_cnt + 1;
        END;
        
        -- Progress logging
        IF i % 100 = 0 THEN
            RAISE NOTICE 'Processed % reservations', i;
        END IF;
    END LOOP;
    
    end_time := clock_timestamp();
    
    RETURN QUERY SELECT 
        end_time - start_time,
        EXTRACT(EPOCH FROM (end_time - start_time)) * 1000 / total_reservations,
        success_cnt,
        error_cnt,
        total_reservations / EXTRACT(EPOCH FROM (end_time - start_time));
END;
$ LANGUAGE plpgsql;

-- Performance monitoring during test
CREATE OR REPLACE FUNCTION monitor_performance_during_test()
RETURNS TABLE(
    timestamp TIMESTAMP,
    active_connections INTEGER,
    waiting_queries INTEGER,
    cache_hit_ratio NUMERIC,
    tps NUMERIC
) AS $
BEGIN
    RETURN QUERY
    SELECT 
        NOW(),
        (SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active')::INTEGER,
        (SELECT COUNT(*) FROM pg_stat_activity WHERE waiting = true)::INTEGER,
        (SELECT 
            100.0 * sum(blks_hit) / nullif(sum(blks_hit) + sum(blks_read), 0)
         FROM pg_stat_database)::NUMERIC,
        (SELECT 
            sum(xact_commit + xact_rollback) / EXTRACT(EPOCH FROM (NOW() - stats_reset))
         FROM pg_stat_database 
         WHERE datname = current_database())::NUMERIC;
END;
$ LANGUAGE plpgsql;
```

### 7.21.2 MongoDB Performance Tests

#### **Event Ingestion Benchmark**
```javascript
// MongoDB event ingestion performance test
function benchmarkEventIngestion(eventCount = 10000, batchSize = 1000) {
  const db = db.getSiblingDB('psp_main');
  const startTime = new Date();
  
  const campaigns = ['camp_001', 'camp_002', 'camp_003'];
  const eventTypes = ['qr_scan', 'form_submit', 'otp_verified', 'barcode_issued', 'redemption'];
  const users = Array.from({length: 1000}, () => new ObjectId());
  
  let totalInserted = 0;
  let errors = 0;
  
  for (let i = 0; i < eventCount; i += batchSize) {
    const batch = [];
    const currentBatchSize = Math.min(batchSize, eventCount - i);
    
    for (let j = 0; j < currentBatchSize; j++) {
      batch.push({
        eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        eventId: `evt_${Date.now()}_${i + j}`,
        sessionId: `session_${Math.floor(Math.random() * 1000)}`,
        userId: users[Math.floor(Math.random() * users.length)],
        campaignId: new ObjectId(campaigns[Math.floor(Math.random() * campaigns.length)]),
        timestamp: new Date(),
        data: {
          testData: true,
          batchNumber: Math.floor(i / batchSize) + 1
        },
        receivedAt: new Date(),
        processedAt: new Date()
      });
    }
    
    try {
      const result = db.events.insertMany(batch, {ordered: false});
      totalInserted += result.insertedIds.length;
    } catch (e) {
      errors++;
      print(`Batch error: ${e.message}`);
    }
    
    if (i % (batchSize * 10) === 0) {
      print(`Progress: ${i + currentBatchSize}/${eventCount} events processed`);
    }
  }
  
  const endTime = new Date();
  const duration = (endTime - startTime) / 1000; // seconds
  
  return {
    totalEvents: eventCount,
    insertedEvents: totalInserted,
    errors: errors,
    durationSeconds: duration,
    eventsPerSecond: totalInserted / duration,
    averageLatencyMs: (duration * 1000) / totalInserted
  };
}

// Analytics query performance test
function benchmarkAnalyticsQueries() {
  const db = db.getSiblingDB('psp_main');
  const results = [];
  
  // Test 1: Campaign funnel analysis
  const funnelStart = new Date();
  const funnelResult = db.events.aggregate([
    {
      $match: {
        campaignId: new ObjectId("507f1f77bcf86cd799439011"), // sample campaign
        timestamp: {
          $gte: new Date("2025-07-01"),
          $lte: new Date("2025-07-31")
        }
      }
    },
    {
      $group: {
        _id: "$eventType",
        count: { $sum: 1 },
        uniqueUsers: { $addToSet: "$userId" }
      }
    },
    {
      $project: {
        eventType: "$_id",
        count: 1,
        uniqueUserCount: { $size: "$uniqueUsers" }
      }
    }
  ]).toArray();
  const funnelDuration = new Date() - funnelStart;
  
  results.push({
    queryType: 'funnel_analysis',
    durationMs: funnelDuration,
    resultCount: funnelResult.length
  });
  
  // Test 2: User behavior analysis
  const behaviorStart = new Date();
  const behaviorResult = db.events.aggregate([
    {
      $match: {
        timestamp: {
          $gte: new Date("2025-07-01"),
          $lte: new Date("2025-07-31")
        }
      }
    },
    {
      $group: {
        _id: "$userId",
        eventCount: { $sum: 1 },
        eventTypes: { $addToSet: "$eventType" },
        firstEvent: { $min: "$timestamp" },
        lastEvent: { $max: "$timestamp" }
      }
    },
    {
      $match: {
        eventCount: { $gte: 3 } // Users với ít nhất 3 events
      }
    }
  ]).toArray();
  const behaviorDuration = new Date() - behaviorStart;
  
  results.push({
    queryType: 'user_behavior_analysis', 
    durationMs: behaviorDuration,
    resultCount: behaviorResult.length
  });
  
  return results;
}
```

### 7.21.3 Redis Performance Tests

#### **Cache Performance Benchmark**
```bash
#!/bin/bash
# Redis performance benchmark script

REDIS_HOST=${REDIS_HOST:-localhost}
REDIS_PORT=${REDIS_PORT:-6379}
REDIS_PASSWORD=${REDIS_PASSWORD:-""}

echo "=== Redis Performance Benchmark ==="
echo "Host: $REDIS_HOST:$REDIS_PORT"
echo "Timestamp: $(date)"

# Basic performance test
echo "1. Basic Operations Benchmark:"
redis-benchmark -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" \
  -t set,get,incr,lpush,rpush,lpop,rpop,sadd,hset,spop,zadd,zpopmin \
  -n 100000 -d 100 --csv

# Session storage simulation
echo "2. Session Storage Benchmark:"
redis-benchmark -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" \
  -t set,get -n 50000 -d 1024 --csv

# OTP simulation (small values, high frequency)
echo "3. OTP Operations Benchmark:"
redis-benchmark -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" \
  -t set,get -n 100000 -d 50 --csv

# Pub/Sub performance
echo "4. Pub/Sub Benchmark:"
redis-benchmark -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" \
  -t publish -n 10000 -d 256 --csv

# Pipeline performance
echo "5. Pipeline Benchmark:"
redis-benchmark -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" \
  -t set,get -n 100000 -d 100 -P 16 --csv

# Memory usage analysis
echo "6. Memory Analysis:"
redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" info memory | grep -E "(used_memory_human|used_memory_peak_human|used_memory_rss_human)"

# Latency analysis
echo "7. Latency Analysis:"
redis-cli -h $REDIS_HOST -p $REDIS_PORT -a "$REDIS_PASSWORD" --latency-history -i 1 &
LATENCY_PID=$!
sleep 10
kill $LATENCY_PID

echo "Benchmark completed at $(date)"
```

---

## 7.22 Database Security Hardening

### 7.22.1 PostgreSQL Security Configuration

#### **Security Settings**
```sql
-- Enable SSL/TLS
ALTER SYSTEM SET ssl = 'on';
ALTER SYSTEM SET ssl_cert_file = '/etc/ssl/certs/server.crt';
ALTER SYSTEM SET ssl_key_file = '/etc/ssl/private/server.key';
ALTER SYSTEM SET ssl_ca_file = '/etc/ssl/certs/ca.crt';

-- Connection security
ALTER SYSTEM SET ssl_min_protocol_version = 'TLSv1.2';
ALTER SYSTEM SET password_encryption = 'scram-sha-256';

-- Logging configuration for security
ALTER SYSTEM SET log_connections = 'on';
ALTER SYSTEM SET log_disconnections = 'on';
ALTER SYSTEM SET log_failed_connections = 'on';
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_duration = 'on';
ALTER SYSTEM SET log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h ';

-- Row Level Security setup
CREATE POLICY tenant_isolation_campaigns ON campaigns
    FOR ALL TO application_role
    USING (tenant_id = current_setting('app.tenant_id', true));

CREATE POLICY tenant_isolation_barcode_pools ON barcode_pools
    FOR ALL TO application_role  
    USING (campaign_id IN (
        SELECT id FROM campaigns WHERE tenant_id = current_setting('app.tenant_id', true)
    ));

-- Enable RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE barcode_pools ENABLE ROW LEVEL SECURITY;

-- Create application roles
CREATE ROLE psp_read_only;
GRANT CONNECT ON DATABASE psp_main TO psp_read_only;
GRANT USAGE ON SCHEMA public TO psp_read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO psp_read_only;

CREATE ROLE psp_read_write;
GRANT psp_read_only TO psp_read_write;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO psp_read_write;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO psp_read_write;

-- Service-specific users
CREATE USER barcode_service WITH PASSWORD 'secure_random_password_123';
GRANT psp_read_write TO barcode_service;

CREATE USER analytics_service WITH PASSWORD 'secure_random_password_456';
GRANT psp_read_only TO analytics_service;
```

#### **pg_hba.conf Security Configuration**
```
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# Local connections
local   all             postgres                                peer
local   all             all                                     md5

# SSL connections only for remote
hostssl all             all             0.0.0.0/0               scram-sha-256
hostssl replication     replicator      10.0.0.0/8              scram-sha-256

# Deny non-SSL connections
host    all             all             0.0.0.0/0               reject
```

### 7.22.2 MongoDB Security Configuration

#### **mongod.conf Security Settings**
```yaml
# MongoDB security configuration
security:
  authorization: enabled
  clusterAuthMode: x509
  
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem
    allowConnectionsWithoutCertificates: false
    
systemLog:
  destination: file
  path: /var/log/mongodb/mongod.log
  logAppend: true
  
auditLog:
  destination: file
  format: JSON
  path: /var/log/mongodb/audit.json
  filter: |
    {
      "ts": 1,
      "t": {"$date": "2025-01-01T00:00:00.000Z"},
      "atype": {"$in": ["authCheck", "authenticate", "createUser", "dropUser"]},
      "param.command": {"$exists": true}
    }
```

#### **User Roles và Permissions**
```javascript
// Create database admin
db.createUser({
  user: "dbadmin",
  pwd: "secure_admin_password_123",
  roles: [
    { role: "dbAdminAnyDatabase", db: "admin" },
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
});

// Create application users với least privilege
db.createUser({
  user: "campaign_service",
  pwd: "secure_service_password_456", 
  roles: [
    { role: "readWrite", db: "psp_main" }
  ]
});

db.createUser({
  user: "analytics_service",
  pwd: "secure_analytics_password_789",
  roles: [
    { role: "read", db: "psp_main" }
  ]
});

// Custom role cho integration service
db.createRole({
  role: "integrationService",
  privileges: [
    {
      resource: { db: "psp_main", collection: "users" },
      actions: ["find", "update"]
    },
    {
      resource: { db: "psp_main", collection: "events" },
      actions: ["find", "insert"]
    }
  ],
  roles: []
});

db.createUser({
  user: "integration_service",
  pwd: "secure_integration_password_012",
  roles: ["integrationService"]
});
```

### 7.22.3 Redis Security Configuration

#### **redis.conf Security Settings**
```bash
# Redis security configuration

# Authentication
requirepass secure_redis_password_345

# Network security
bind 127.0.0.1 10.0.0.100  # Bind to specific IPs only
port 0                      # Disable default port
tls-port 6380              # Use TLS port instead

# TLS configuration
tls-cert-file /etc/ssl/redis.crt
tls-key-file /etc/ssl/redis.key
tls-ca-cert-file /etc/ssl/ca.crt
tls-protocols "TLSv1.2 TLSv1.3"

# Command security
rename-command FLUSHDB ""      # Disable dangerous commands
rename-command FLUSHALL ""
rename-command EVAL ""
rename-command DEBUG ""
rename-command SHUTDOWN REDIS_SHUTDOWN

# Logging
loglevel notice
logfile /var/log/redis/redis-server.log

# Memory protection
maxmemory 2gb
maxmemory-policy allkeys-lru
```

---

## 7.23 Final Database Summary

### 7.23.1 Complete Architecture Overview

**Database Distribution:**
✅ **PostgreSQL**: Transactional data (barcodes, redemptions) với ACID compliance  
✅ **MongoDB**: Flexible schemas (campaigns, users, events) với horizontal scaling  
✅ **Redis**: High-performance caching và messaging với cluster support  

**Key Features Implemented:**
✅ **Cross-database Relationships**: Logical foreign keys với event-driven consistency  
✅ **Performance Optimization**: Strategic indexing, partitioning, connection pooling  
✅ **Security Hardening**: Encryption, authentication, audit logging, RLS  
✅ **Monitoring & Health**: Comprehensive health checks và performance monitoring  
✅ **Scalability**: Sharding strategies cho growth từ 100K → 10M users  
✅ **Data Lifecycle**: Migration scripts, backup/DR, archival policies  

### 7.23.2 Production Readiness Checklist

**Security & Compliance:**
- [ ] TLS 1.3 encryption enabled cho all databases
- [ ] Role-based access control implemented
- [ ] Audit logging configured và tested
- [ ] PII encryption với field-level AES-256
- [ ] GDPR/PDPA compliance procedures validated

**Performance & Scalability:**
- [ ] Connection pooling configured và tuned
- [ ] Indexes optimized cho query patterns
- [ ] Partitioning implemented cho large tables
- [ ] Caching strategies deployed
- [ ] Load testing completed với target metrics

**Operational Excellence:**
- [ ] Backup/restore procedures tested
- [ ] Monitoring dashboards deployed
- [ ] Health check endpoints functional
- [ ] Migration scripts validated
- [ ] DR procedures documented và tested

### 7.23.3 Success Metrics

| Metric Category | Target | Current Status |
|----------------|--------|----------------|
| **Response Time** | <1s barcode reservation | ✅ Architecture ready |
| **Throughput** | 2K requests/second | ✅ Benchmarks defined |
| **Availability** | 99.9% uptime | ✅ HA architecture |
| **Data Integrity** | 100% ACID compliance | ✅ PostgreSQL transactions |
| **Security** | Zero data breaches | ✅ Multi-layer security |
| **Scalability** | 10M users support | ✅ Sharding strategies |

---

**Trạng thái tài liệu**: ✅ HOÀN THÀNH Part07  
**Coverage**: Complete database architecture từ schema design → production deployment  
**Dependencies**: Architecture decisions confirmed, security requirements validated  
**Người sở hữu**: Đội thiết kế dữ liệu  
**Next Action**: Proceed to Part09 - Detailed Use Caseslogin:{userId}" = counter
// TTL: 15 minutes, max 5 attempts

"rate_limit:

# 📘 Part08 - Thiết kế API & Tích hợp (API Design & Integration)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội thiết kế API  
**Trạng thái**: ✅ Hoàn thành  

---

## 8.1 Tổng quan thiết kế API

### 8.1.1 Triết lý thiết kế API
Hệ thống Product Sampling Platform được thiết kế theo nguyên tắc **API-First**, đảm bảo:

- 🔄 **RESTful Architecture**: Tuân thủ các chuẩn REST với HTTP methods và status codes
- 📋 **OpenAPI 3.0 Specification**: Tất cả APIs được định nghĩa bằng OpenAPI specs
- 🔐 **Security by Design**: Authentication và authorization tích hợp từ đầu
- 📊 **Consistent Response Format**: Cấu trúc response nhất quán across services
- 🚦 **Rate Limiting**: Bảo vệ hệ thống khỏi abuse và overload
- 📝 **Comprehensive Documentation**: Auto-generated docs từ OpenAPI specs

### 8.1.2 Kiến trúc API tổng thể

```mermaid
graph TB
    subgraph "Client Applications"
        CA1[Brand Dashboard - Web]
        CA2[User Portal - PWA]
        CA3[POS App - Mobile]
        CA4[Third-party Integrations]
    end
    
    subgraph "API Gateway Layer"
        AGW[Kong API Gateway]
        AUTH[Authentication Service]
        RL[Rate Limiting]
        LB[Load Balancer]
    end
    
    subgraph "Microservices APIs"
        API1[auth-service API]
        API2[campaign-service API]
        API3[barcode-service API]
        API4[user-service API]
        API5[redemption-service API]
        API6[analytics-service API]
        API7[notification-service API]
        API8[integration-service API]
    end
    
    subgraph "External APIs"
        EXT1[Twilio SMS API]
        EXT2[HubSpot CRM API]
        EXT3[Google Analytics API]
        EXT4[POS System APIs]
    end
    
    CA1 --> AGW
    CA2 --> AGW
    CA3 --> AGW
    CA4 --> AGW
    
    AGW --> AUTH --> RL --> LB
    
    LB --> API1
    LB --> API2
    LB --> API3
    LB --> API4
    LB --> API5
    LB --> API6
    LB --> API7
    LB --> API8
    
    API7 --> EXT1
    API8 --> EXT2
    API6 --> EXT3
    API5 --> EXT4
    
    style AGW fill:#e3f2fd
    style AUTH fill:#ffebee
    style API2 fill:#e8f5e8
```

### 8.1.3 Các nguyên tắc thiết kế chính

| Nguyên tắc | Mô tả | Lợi ích |
|------------|-------|---------|
| **API Versioning** | Sử dụng header versioning (`Accept: application/vnd.psp.v1+json`) | Backward compatibility, smooth migration |
| **Resource-based URLs** | `/api/v1/campaigns/{id}` thay vì `/api/v1/getCampaign` | RESTful, intuitive |
| **HTTP Status Codes** | Sử dụng đúng status codes (200, 201, 400, 401, 404, 500) | Clear communication |
| **Request/Response Validation** | JSON Schema validation cho input/output | Data integrity |
| **Error Handling** | Consistent error response format | Better debugging |
| **Pagination** | Cursor-based pagination cho large datasets | Performance optimization |

---

## 8.2 API Gateway Configuration

### 8.2.1 Kong API Gateway Setup

**Cấu hình Kong plugins cho security và performance:**

```yaml
# kong.yml configuration
_format_version: "3.0"

services:
  - name: auth-service
    url: http://auth-service:3000
    plugins:
      - name: rate-limiting
        config:
          minute: 100
          hour: 1000
      - name: cors
        config:
          origins: ["https://dashboard.psp.com", "https://portal.psp.com"]
          
  - name: campaign-service
    url: http://campaign-service:3000
    plugins:
      - name: jwt
        config:
          key_claim_name: iss
      - name: rate-limiting
        config:
          minute: 200
          hour: 5000

routes:
  - name: auth-routes
    service: auth-service
    paths: ["/api/v1/auth"]
    
  - name: campaign-routes
    service: campaign-service
    paths: ["/api/v1/campaigns"]
    plugins:
      - name: request-size-limiting
        config:
          allowed_payload_size: 10
```

### 8.2.2 Authentication Flow qua API Gateway

```mermaid
sequenceDiagram
    participant Client as Client App
    participant Gateway as Kong Gateway
    participant Auth as auth-service
    participant Service as Target Service
    
    Note over Client,Service: Login Flow
    Client->>Gateway: POST /api/v1/auth/login
    Gateway->>Auth: Forward request
    Auth-->>Gateway: JWT + Refresh Token
    Gateway-->>Client: Tokens + User Info
    
    Note over Client,Service: Authenticated Request
    Client->>Gateway: GET /api/v1/campaigns (với JWT)
    Gateway->>Gateway: Validate JWT
    Gateway->>Auth: Verify token & permissions
    Auth-->>Gateway: Token valid + user context
    Gateway->>Service: Forward với user context
    Service-->>Gateway: Response data
    Gateway-->>Client: Final response
```

### 8.2.3 Rate Limiting Strategy

**Phân cấp rate limiting theo user types:**

| User Type | Requests/Minute | Requests/Hour | Burst Limit | Punishment |
|-----------|-----------------|---------------|-------------|------------|
| **Anonymous** | 20 | 100 | 50 | 1 giờ block |
| **End User** | 60 | 1,000 | 100 | 30 phút block |
| **Customer Account** | 200 | 10,000 | 500 | 15 phút block |
| **Admin** | 500 | 50,000 | 1,000 | 5 phút block |
| **System/Integration** | 1,000 | Unlimited | 2,000 | Alert only |

---

## 8.3 Auth Service API

### 8.3.1 Authentication Endpoints

#### **POST /api/v1/auth/login**
**Mô tả**: Đăng nhập người dùng và trả về JWT tokens

```yaml
# OpenAPI specification
/api/v1/auth/login:
  post:
    summary: Đăng nhập người dùng
    tags: [Authentication]
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            required: [email, password]
            properties:
              email:
                type: string
                format: email
                example: "admin@example.com"
              password:
                type: string
                minLength: 8
                example: "password123"
              rememberMe:
                type: boolean
                default: false
    responses:
      200:
        description: Đăng nhập thành công
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: true
                data:
                  type: object
                  properties:
                    accessToken:
                      type: string
                      example: "eyJhbGciOiJIUzI1NiIs..."
                    refreshToken:
                      type: string
                      example: "def502001234567890..."
                    expiresIn:
                      type: integer
                      example: 3600
                    user:
                      $ref: '#/components/schemas/User'
      400:
        $ref: '#/components/responses/BadRequest'
      401:
        $ref: '#/components/responses/Unauthorized'
      429:
        $ref: '#/components/responses/TooManyRequests'
```

**Response Example:**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "def502001234567890abcdef...",
    "expiresIn": 3600,
    "user": {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "email": "admin@example.com",
      "role": "admin",
      "permissions": ["campaign:read", "campaign:write", "user:manage"],
      "tenantId": "tenant_123"
    }
  },
  "message": "Đăng nhập thành công"
}
```

#### **POST /api/v1/auth/refresh**
**Mô tả**: Làm mới access token bằng refresh token

```json
// Request body
{
  "refreshToken": "def502001234567890abcdef..."
}

// Response
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

#### **POST /api/v1/auth/logout**
**Mô tả**: Đăng xuất và blacklist tokens

```json
// Request headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Response
{
  "success": true,
  "message": "Đăng xuất thành công"
}
```

### 8.3.2 OTP Verification Endpoints

#### **POST /api/v1/auth/send-otp**
**Mô tả**: Gửi OTP code cho user verification

```yaml
/api/v1/auth/send-otp:
  post:
    summary: Gửi mã OTP xác thực
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            required: [contact, type]
            properties:
              contact:
                type: string
                description: "Số điện thoại hoặc email"
                example: "+84901234567"
              type:
                type: string
                enum: [sms, email]
                example: "sms"
              campaignId:
                type: string
                description: "ID campaign nếu OTP cho sampling"
                example: "camp_123"
    responses:
      200:
        description: OTP đã được gửi
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: true
                data:
                  type: object
                  properties:
                    sessionId:
                      type: string
                      example: "otp_session_123"
                    expiresIn:
                      type: integer
                      example: 300
                    attemptsLeft:
                      type: integer
                      example: 3
                message:
                  type: string
                  example: "Mã OTP đã được gửi đến +84901***567"
```

#### **POST /api/v1/auth/verify-otp**
**Mô tả**: Xác thực OTP code

```json
// Request
{
  "sessionId": "otp_session_123",
  "code": "123456",
  "contact": "+84901234567"
}

// Success Response
{
  "success": true,
  "data": {
    "verified": true,
    "userId": "user_123",
    "nextStep": "barcode_generation"
  },
  "message": "Xác thực thành công"
}

// Error Response
{
  "success": false,
  "error": {
    "code": "INVALID_OTP",
    "message": "Mã OTP không đúng",
    "details": {
      "attemptsLeft": 2,
      "sessionId": "otp_session_123"
    }
  }
}
```

### 8.3.3 Permission Management

#### **GET /api/v1/auth/permissions**
**Mô tả**: Lấy danh sách permissions của user hiện tại

```json
// Response
{
  "success": true,
  "data": {
    "userId": "user_123",
    "role": "customer_account",
    "permissions": [
      "campaign:read",
      "campaign:write", 
      "campaign:delete:own",
      "barcode:read:own",
      "analytics:read:own"
    ],
    "tenantId": "tenant_123",
    "scopes": {
      "campaigns": ["own"],
      "users": ["none"],
      "analytics": ["own"]
    }
  }
}
```

---

## 8.4 Campaign Service API

### 8.4.1 Campaign Management Endpoints

#### **POST /api/v1/campaigns**
**Mô tả**: Tạo campaign mới

```yaml
/api/v1/campaigns:
  post:
    summary: Tạo campaign mới
    tags: [Campaigns]
    security:
      - BearerAuth: []
    requestBody:
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/CreateCampaignRequest'
    responses:
      201:
        description: Campaign được tạo thành công
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                data:
                  $ref: '#/components/schemas/Campaign'
```

**Request Schema:**
```json
{
  "name": "Coca Cola Summer 2025",
  "description": "Chiến dịch sampling mùa hè với Coca Cola",
  "startDate": "2025-06-01T00:00:00Z",
  "endDate": "2025-08-31T23:59:59Z",
  "products": [
    {
      "name": "Coca Cola Original 330ml",
      "description": "Coca Cola nguyên bản lon 330ml",
      "value": 15000,
      "category": "beverage"
    }
  ],
  "config": {
    "maxRedemptionsPerUser": 1,
    "requireQuiz": true,
    "autoExpireHours": 72
  },
  "targeting": {
    "ageRange": {"min": 18, "max": 45},
    "genders": ["M", "F"],
    "locations": ["loc_hcm_001", "loc_hn_001"]
  },
  "tracking": {
    "utmSource": "sampling",
    "utmMedium": "qr_code",
    "utmCampaign": "coca_cola_summer"
  }
}
```

#### **GET /api/v1/campaigns**
**Mô tả**: Lấy danh sách campaigns với filtering và pagination

```yaml
/api/v1/campaigns:
  get:
    summary: Lấy danh sách campaigns
    parameters:
      - name: status
        in: query
        schema:
          type: string
          enum: [draft, active, paused, completed, cancelled]
      - name: page
        in: query
        schema:
          type: integer
          minimum: 1
          default: 1
      - name: limit
        in: query
        schema:
          type: integer
          minimum: 1
          maximum: 100
          default: 20
      - name: search
        in: query
        schema:
          type: string
          description: "Tìm kiếm theo tên hoặc mô tả"
      - name: startDateFrom
        in: query
        schema:
          type: string
          format: date
      - name: startDateTo
        in: query
        schema:
          type: string
          format: date
```

**Response Example:**
```json
{
  "success": true,
  "data": {
    "campaigns": [
      {
        "id": "camp_123",
        "name": "Coca Cola Summer 2025",
        "status": "active",
        "startDate": "2025-06-01T00:00:00Z",
        "endDate": "2025-08-31T23:59:59Z",
        "stats": {
          "totalScans": 1250,
          "totalRedemptions": 987,
          "conversionRate": 78.96
        },
        "createdAt": "2025-05-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 45,
      "totalPages": 3,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### **PUT /api/v1/campaigns/{id}**
**Mô tả**: Cập nhật campaign

```json
// Request
{
  "name": "Coca Cola Summer 2025 - Extended",
  "endDate": "2025-09-15T23:59:59Z",
  "config": {
    "maxRedemptionsPerUser": 2
  }
}

// Response
{
  "success": true,
  "data": {
    "id": "camp_123",
    "name": "Coca Cola Summer 2025 - Extended",
    "endDate": "2025-09-15T23:59:59Z",
    "updatedAt": "2025-07-15T14:20:00Z"
  },
  "message": "Campaign đã được cập nhật"
}
```

### 8.4.2 Ads Format Management

#### **POST /api/v1/campaigns/{campaignId}/ads-formats**
**Mô tả**: Tạo ads format cho campaign

```json
// Request (multipart/form-data)
{
  "name": "Summer Flyer A4",
  "type": "flyer",
  "dimensions": {
    "width": 210,
    "height": 297,
    "unit": "mm",
    "dpi": 300
  },
  "qrConfig": {
    "position": {"x": 150, "y": 200, "width": 50, "height": 50},
    "style": "square",
    "safeZone": 5
  },
  "printSpecs": {
    "quantity": 1000,
    "paperType": "glossy_paper"
  },
  "designFile": "@summer_flyer.pdf" // file upload
}

// Response
{
  "success": true,
  "data": {
    "id": "ads_format_123",
    "name": "Summer Flyer A4",
    "type": "flyer",
    "designFiles": [{
      "filename": "summer_flyer.pdf",
      "url": "https://storage.psp.com/ads-formats/summer_flyer.pdf",
      "fileSize": 2048576
    }],
    "qrCodeUrl": "https://api.psp.com/qr/camp_123/ads_format_123",
    "createdAt": "2025-05-20T09:15:00Z"
  }
}
```

---

## 8.5 Barcode Service API

### 8.5.1 Barcode Pool Management

#### **POST /api/v1/barcode-pools**
**Mô tả**: Tạo barcode pool mới

```json
// Request
{
  "name": "Coca Cola Summer Pool",
  "campaignId": "camp_123",
  "barcodes": [
    {
      "code": "COC2025A12345678C",
      "productName": "Coca Cola Original 330ml",
      "value": 15000,
      "expiryDate": "2025-12-31",
      "batchCode": "BATCH001"
    }
    // ... more barcodes
  ]
}

// Response
{
  "success": true,
  "data": {
    "poolId": "pool_123",
    "name": "Coca Cola Summer Pool",
    "totalQuantity": 10000,
    "availableQuantity": 10000,
    "importedCount": 10000,
    "failedCount": 0,
    "validationErrors": []
  }
}
```

#### **POST /api/v1/barcode-pools/import**
**Mô tả**: Import barcodes từ CSV file

```yaml
/api/v1/barcode-pools/import:
  post:
    summary: Import barcodes từ CSV
    requestBody:
      required: true
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              file:
                type: string
                format: binary
                description: "CSV file chứa barcode data"
              poolName:
                type: string
              campaignId:
                type: string
              skipErrors:
                type: boolean
                default: false
```

**CSV Format Example:**
```csv
code,productName,value,expiryDate,batchCode
COC2025A12345678C,Coca Cola Original 330ml,15000,2025-12-31,BATCH001
COC2025A87654321D,Coca Cola Original 330ml,15000,2025-12-31,BATCH001
```

### 8.5.2 Barcode Operations

#### **POST /api/v1/barcodes/reserve**
**Mô tả**: Reserve barcode cho user đã verify

```json
// Request
{
  "userId": "user_123",
  "poolId": "pool_123",
  "preferences": {
    "productType": "beverage"
  }
}

// Response
{
  "success": true,
  "data": {
    "barcodeId": "barcode_123",
    "code": "COC2025A12345678C",
    "productName": "Coca Cola Original 330ml",
    "expiryDate": "2025-12-31",
    "qrCodeUrl": "https://api.psp.com/qr/barcode_123",
    "walletPassUrl": "https://api.psp.com/wallet/barcode_123",
    "reservedAt": "2025-07-15T10:30:00Z",
    "expiresAt": "2025-07-18T10:30:00Z"
  }
}
```

#### **GET /api/v1/barcodes/{code}/validate**
**Mô tả**: Validate barcode trước khi redeem

```json
// Response for valid barcode
{
  "success": true,
  "data": {
    "valid": true,
    "barcodeId": "barcode_123",
    "productName": "Coca Cola Original 330ml",
    "campaignName": "Coca Cola Summer 2025",
    "status": "issued",
    "expiryDate": "2025-12-31",
    "userId": "user_123",
    "userInfo": {
      "name": "Nguyễn Văn A",
      "phone": "+84901***567"
    }
  }
}

// Response for invalid barcode
{
  "success": false,
  "error": {
    "code": "BARCODE_INVALID",
    "message": "Mã barcode không hợp lệ hoặc đã được sử dụng",
    "details": {
      "status": "redeemed",
      "redeemedAt": "2025-07-10T14:20:00Z"
    }
  }
}
```

---

## 8.6 User Service API

### 8.6.1 User Profile Management

#### **POST /api/v1/users**
**Mô tả**: Tạo user profile từ form submission

```json
// Request
{
  "personalInfo": {
    "fullName": "Nguyễn Văn A",
    "email": "user@example.com",
    "phoneNumber": "+84901234567",
    "dateOfBirth": "1990-05-15",
    "gender": "M"
  },
  "preferences": {
    "language": "vi",
    "marketing": {
      "email": true,
      "sms": false
    },
    "interests": ["technology", "sports"],
    "dietaryRestrictions": ["vegetarian"]
  },
  "compliance": {
    "dataProcessingConsent": true,
    "marketingConsent": true,
    "consentVersion": "1.2.0"
  },
  "campaignId": "camp_123",
  "source": "qr_scan"
}

// Response
{
  "success": true,
  "data": {
    "userId": "user_123",
    "profileComplete": true,
    "verificationRequired": true,
    "nextSteps": ["phone_verification", "barcode_generation"]
  }
}
```

#### **GET /api/v1/users/{userId}**
**Mô tả**: Lấy thông tin user profile

```json
// Response (dữ liệu đã decrypt cho authorized user)
{
  "success": true,
  "data": {
    "id": "user_123",
    "personalInfo": {
      "fullName": "Nguyễn Văn A",
      "email": "use***@example.com", // masked for privacy
      "phoneNumber": "+84901***567",
      "gender": "M"
    },
    "verification": {
      "email": {
        "isVerified": false,
        "verifiedAt": null
      },
      "phone": {
        "isVerified": true,
        "verifiedAt": "2025-07-15T10:35:00Z"
      }
    },
    "activity": {
      "totalCampaigns": 3,
      "totalRedemptions": 2,
      "lastActivityAt": "2025-07-15T14:20:00Z"
    },
    "riskProfile": {
      "trustScore": 85,
      "riskLevel": "low"
    }
  }
}
```

### 8.6.2 User Portal APIs

#### **GET /api/v1/user-portal/dashboard**
**Mô tả**: Dashboard data cho User Portal

```json
// Response
{
  "success": true,
  "data": {
    "user": {
      "name": "Nguyễn Văn A",
      "joinDate": "2025-07-01T00:00:00Z",
      "totalSamples": 5,
      "totalRedemptions": 3
    },
    "recentSamples": [
      {
        "id": "barcode_123",
        "productName": "Coca Cola Original 330ml",
        "campaignName": "Coca Cola Summer 2025",
        "status": "issued",
        "issuedAt": "2025-07-15T10:30:00Z",
        "expiryDate": "2025-12-31",
        "qrCodeUrl": "https://api.psp.com/qr/barcode_123"
      }
    ],
    "notifications": [
      {
        "id": "notif_123",
        "type": "expiry_reminder",
        "title": "Sản phẩm sắp hết hạn",
        "message": "Coca Cola của bạn sẽ hết hạn trong 7 ngày",
        "isRead": false,
        "createdAt": "2025-07-15T09:00:00Z"
      }
    ]
  }
}
```

---

## 8.7 Redemption Service API

### 8.7.1 POS Integration

#### **POST /api/v1/redemptions/scan**
**Mô tả**: Scan barcode tại POS để bắt đầu redemption process

```json
// Request
{
  "barcodeCode": "COC2025A12345678C",
  "locationId": "loc_hcm_001",
  "staffId": "staff_123",
  "deviceInfo": {
    "deviceId": "pos_terminal_001",
    "appVersion": "1.2.3"
  }
}

// Response for successful scan
{
  "success": true,
  "data": {
    "scanId": "scan_123",
    "barcode": {
      "id": "barcode_123",
      "productName": "Coca Cola Original 330ml",
      "value": 15000,
      "status": "issued"
    },
    "campaign": {
      "name": "Coca Cola Summer 2025",
      "brand": "Coca Cola"
    },
    "customer": {
      "name": "Nguyễn Văn A",
      "phone": "+84901***567"
    },
    "canRedeem": true,
    "message": "Sẵn sàng để đổi sản phẩm"
  }
}
```

#### **POST /api/v1/redemptions/process**
**Mô tả**: Xử lý redemption sau khi scan thành công

```json
// Request
{
  "scanId": "scan_123",
  "barcodeId": "barcode_123",
  "locationId": "loc_hcm_001",
  "staffId": "staff_123",
  "notes": "Khách hàng đổi thành công"
}

// Response
{
  "success": true,
  "data": {
    "redemptionId": "redemption_123",
    "barcodeCode": "COC2025A12345678C",
    "redeemedAt": "2025-07-15T14:30:00Z",
    "location": {
      "name": "Circle K Nguyễn Huệ",
      "address": "123 Nguyễn Huệ, Q1, TP.HCM"
    },
    "receipt": {
      "id": "receipt_123",
      "url": "https://api.psp.com/receipts/receipt_123"
    }
  },
  "message": "Đổi sản phẩm thành công"
}
```
## 8.7.2 Offline Sync APIs

### **POST /api/v1/redemptions/batch-sync**
**Mô tả**: Đồng bộ các redemptions đã được thực hiện offline

```json
// Request - batch upload offline redemptions
{
  "deviceId": "pos_terminal_001",
  "staffId": "staff_123",
  "locationId": "loc_hcm_001",
  "syncTimestamp": "2025-07-15T15:00:00Z",
  "redemptions": [
    {
      "localId": "offline_redemption_001",
      "barcodeCode": "COC2025A12345678C", 
      "redeemedAt": "2025-07-15T14:30:00Z",
      "customerSignature": "base64_signature_data",
      "notes": "Offline redemption - network unavailable"
    },
    {
      "localId": "offline_redemption_002",
      "barcodeCode": "COC2025A87654321D",
      "redeemedAt": "2025-07-15T14:45:00Z",
      "notes": "Offline redemption"
    }
  ]
}

// Response - sync results with conflict resolution
{
  "success": true,
  "data": {
    "syncId": "sync_123",
    "processedCount": 2,
    "successCount": 1,
    "failedCount": 1,
    "results": [
      {
        "localId": "offline_redemption_001",
        "status": "success",
        "redemptionId": "redemption_456",
        "message": "Đồng bộ thành công"
      },
      {
        "localId": "offline_redemption_002", 
        "status": "failed",
        "error": "BARCODE_ALREADY_REDEEMED",
        "message": "Barcode đã được đổi bởi user khác",
        "conflictData": {
          "existingRedemptionId": "redemption_789",
          "redeemedAt": "2025-07-15T14:35:00Z",
          "location": "Circle K Lê Lợi"
        }
      }
    ]
  }
}
```

### **GET /api/v1/redemptions/sync-status**
**Mô tả**: Kiểm tra trạng thái sync cho device

```json
// Response
{
  "success": true,
  "data": {
    "deviceId": "pos_terminal_001",
    "lastSyncAt": "2025-07-15T15:00:00Z",
    "pendingUploads": 0,
    "totalSynced": 145,
    "syncHealth": "healthy",
    "connectionStatus": "online"
  }
}
```

---

## 8.8 Analytics Service API

### 8.8.1 Dashboard Analytics

#### **GET /api/v1/analytics/dashboard**
**Mô tả**: Dữ liệu dashboard tổng quan cho brands

```yaml
/api/v1/analytics/dashboard:
  get:
    summary: Lấy dữ liệu dashboard analytics
    parameters:
      - name: campaignId
        in: query
        schema:
          type: string
          description: "Lọc theo campaign cụ thể"
      - name: dateFrom
        in: query
        schema:
          type: string
          format: date
      - name: dateTo
        in: query
        schema:
          type: string
          format: date
      - name: timeZone
        in: query
        schema:
          type: string
          default: "Asia/Ho_Chi_Minh"
```

**Response Example:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalScans": 15420,
      "totalSubmissions": 12890,
      "totalVerifications": 11245,
      "totalRedemptions": 9876,
      "overallConversion": 64.03,
      "costPerLead": 0.38
    },
    "funnel": {
      "steps": [
        {
          "step": "qr_scan",
          "count": 15420,
          "percentage": 100,
          "dropOff": 0
        },
        {
          "step": "form_submit", 
          "count": 12890,
          "percentage": 83.6,
          "dropOff": 16.4
        },
        {
          "step": "otp_verified",
          "count": 11245,
          "percentage": 87.2,
          "dropOff": 12.8
        },
        {
          "step": "redemption",
          "count": 9876,
          "percentage": 87.8,
          "dropOff": 12.2
        }
      ]
    },
    "timeSeriesData": {
      "daily": [
        {
          "date": "2025-07-01",
          "scans": 523,
          "redemptions": 421,
          "conversion": 80.5
        }
        // ... more daily data
      ]
    },
    "topLocations": [
      {
        "locationId": "loc_hcm_001",
        "name": "Circle K Nguyễn Huệ",
        "scans": 1250,
        "redemptions": 987,
        "conversion": 78.96
      }
    ]
  }
}
```

### 8.8.2 Campaign Performance

#### **GET /api/v1/analytics/campaigns/{campaignId}/performance**
**Mô tả**: Phân tích chi tiết performance của một campaign

```json
// Response
{
  "success": true,
  "data": {
    "campaign": {
      "id": "camp_123",
      "name": "Coca Cola Summer 2025",
      "status": "active",
      "duration": 45 // days running
    },
    "metrics": {
      "reach": {
        "totalScans": 15420,
        "uniqueUsers": 12350,
        "repeatScanRate": 19.9
      },
      "engagement": {
        "formCompletionRate": 83.6,
        "quizCompletionRate": 78.2,
        "averageTimeOnPage": 145 // seconds
      },
      "conversion": {
        "scanToSubmission": 83.6,
        "submissionToVerification": 87.2,
        "verificationToRedemption": 87.8,
        "overallConversion": 64.03
      },
      "cost": {
        "totalSpent": 4672.50,
        "costPerScan": 0.303,
        "costPerLead": 0.416,
        "costPerRedemption": 0.473
      }
    },
    "demographics": {
      "ageGroups": {
        "18-24": 25.3,
        "25-34": 35.7,
        "35-44": 22.1,
        "45-54": 12.4,
        "55+": 4.5
      },
      "genders": {
        "M": 52.3,
        "F": 45.2,
        "Other": 2.5
      },
      "topCities": [
        {"city": "Hồ Chí Minh", "percentage": 45.2},
        {"city": "Hà Nội", "percentage": 28.7},
        {"city": "Đà Nẵng", "percentage": 12.1}
      ]
    }
  }
}
```

### 8.8.3 Export Analytics

#### **POST /api/v1/analytics/export**
**Mô tả**: Tạo export job cho analytics data

```json
// Request
{
  "type": "campaign_report", // enum: campaign_report|user_data|redemption_logs
  "format": "excel", // enum: csv|excel|json
  "filters": {
    "campaignIds": ["camp_123", "camp_456"],
    "dateFrom": "2025-07-01",
    "dateTo": "2025-07-31",
    "locations": ["loc_hcm_001"]
  },
  "options": {
    "includePersonalData": false,
    "aggregateOnly": true,
    "timeZone": "Asia/Ho_Chi_Minh"
  }
}

// Response
{
  "success": true,
  "data": {
    "exportId": "export_123",
    "status": "queued",
    "estimatedDuration": 120, // seconds
    "downloadUrl": null, // sẽ có sau khi complete
    "expiresAt": "2025-07-22T10:30:00Z" // 7 days from creation
  }
}
```

#### **GET /api/v1/analytics/exports/{exportId}/status**
**Mô tả**: Kiểm tra trạng thái export job

```json
// Response for completed export
{
  "success": true,
  "data": {
    "exportId": "export_123", 
    "status": "completed",
    "downloadUrl": "https://api.psp.com/downloads/export_123.xlsx",
    "fileSize": 2048576,
    "recordCount": 15420,
    "completedAt": "2025-07-15T10:35:00Z",
    "expiresAt": "2025-07-22T10:30:00Z"
  }
}

// Response for failed export
{
  "success": false,
  "error": {
    "code": "EXPORT_FAILED",
    "message": "Export thất bại do lỗi database",
    "details": {
      "exportId": "export_123",
      "failedAt": "2025-07-15T10:33:00Z",
      "retryable": true
    }
  }
}
```

---

## 8.9 Notification Service API

### 8.9.1 Notification Management

#### **POST /api/v1/notifications/send**
**Mô tả**: Gửi notification (internal API cho các services khác)

```json
// Request
{
  "type": "barcode_issued", // template type
  "channel": "sms", // enum: sms|email|push
  "recipient": {
    "userId": "user_123",
    "phoneNumber": "+84901234567",
    "email": "user@example.com"
  },
  "templateData": {
    "userName": "Nguyễn Văn A",
    "productName": "Coca Cola Original 330ml",
    "barcodeCode": "COC2025A12345678C",
    "expiryDate": "2025-12-31",
    "redemptionInstructions": "Đến Circle K để đổi sản phẩm"
  },
  "priority": "high", // enum: low|normal|high|urgent
  "scheduleAt": null // null = send immediately
}

// Response
{
  "success": true,
  "data": {
    "notificationId": "notif_123",
    "status": "queued",
    "estimatedDelivery": "2025-07-15T10:31:00Z",
    "channel": "sms",
    "recipient": "+84901***567"
  }
}
```

### 8.9.2 Notification Status Tracking

#### **GET /api/v1/notifications/{notificationId}/status**
**Mô tả**: Kiểm tra trạng thái delivery của notification

```json
// Response for delivered notification
{
  "success": true,
  "data": {
    "notificationId": "notif_123",
    "status": "delivered",
    "channel": "sms",
    "sentAt": "2025-07-15T10:30:30Z",
    "deliveredAt": "2025-07-15T10:30:45Z",
    "attempts": 1,
    "cost": 0.025 // USD
  }
}

// Response for failed notification
{
  "success": true,
  "data": {
    "notificationId": "notif_456",
    "status": "failed",
    "channel": "sms",
    "sentAt": "2025-07-15T10:30:30Z",
    "attempts": 3,
    "lastError": "INVALID_PHONE_NUMBER",
    "errorMessage": "Số điện thoại không hợp lệ"
  }
}
```

---

## 8.10 Integration Service API

### 8.10.1 CRM Integration

#### **POST /api/v1/integrations/crm/sync**
**Mô tả**: Đồng bộ dữ liệu user với CRM systems

```json
// Request
{
  "crmType": "hubspot", // enum: hubspot|salesforce|braze
  "action": "create_or_update", // enum: create|update|create_or_update|delete
  "users": [
    {
      "userId": "user_123",
      "email": "user@example.com",
      "personalInfo": {
        "firstName": "Nguyễn",
        "lastName": "Văn A",
        "phoneNumber": "+84901234567"
      },
      "campaignData": {
        "campaignId": "camp_123",
        "campaignName": "Coca Cola Summer 2025",
        "participatedAt": "2025-07-15T10:30:00Z",
        "redemptionStatus": "redeemed"
      },
      "preferences": {
        "emailMarketing": true,
        "smsMarketing": false,
        "interests": ["beverage", "sports"]
      }
    }
  ],
  "options": {
    "createListSegment": true,
    "segmentName": "PSP - Coca Cola Summer 2025 Participants"
  }
}

// Response
{
  "success": true,
  "data": {
    "syncId": "sync_789",
    "crmType": "hubspot",
    "processedCount": 1,
    "successCount": 1,
    "failedCount": 0,
    "results": [
      {
        "userId": "user_123",
        "status": "success",
        "crmContactId": "hubspot_contact_456",
        "action": "updated",
        "listMembership": ["PSP - Coca Cola Summer 2025 Participants"]
      }
    ],
    "segmentCreated": {
      "segmentId": "hubspot_list_789",
      "segmentName": "PSP - Coca Cola Summer 2025 Participants",
      "memberCount": 1
    }
  }
}
```

### 8.10.2 Webhook Management

#### **POST /api/v1/integrations/webhooks**
**Mô tả**: Đăng ký webhook endpoint để nhận events

```json
// Request
{
  "name": "Brand CRM Webhook",
  "url": "https://brand-crm.com/webhooks/psp",
  "events": [
    "user.verified",
    "barcode.issued", 
    "redemption.completed",
    "campaign.completed"
  ],
  "secret": "webhook_secret_key_123",
  "active": true,
  "retryConfig": {
    "maxRetries": 3,
    "retryDelay": 300 // seconds
  }
}

// Response
{
  "success": true,
  "data": {
    "webhookId": "webhook_123",
    "name": "Brand CRM Webhook",
    "url": "https://brand-crm.com/webhooks/psp",
    "events": ["user.verified", "barcode.issued", "redemption.completed", "campaign.completed"],
    "signingSecret": "whsec_abc123...",
    "active": true,
    "createdAt": "2025-07-15T10:30:00Z"
  }
}
```

#### **Webhook Event Payload Example:**
```json
// POST to registered webhook URL
{
  "eventId": "evt_123",
  "eventType": "redemption.completed",
  "timestamp": "2025-07-15T14:30:00Z",
  "data": {
    "redemptionId": "redemption_123",
    "barcodeCode": "COC2025A12345678C",
    "userId": "user_123",
    "campaignId": "camp_123",
    "locationId": "loc_hcm_001",
    "redeemedAt": "2025-07-15T14:30:00Z",
    "user": {
      "email": "user@example.com",
      "phoneNumber": "+84901234567"
    },
    "campaign": {
      "name": "Coca Cola Summer 2025",
      "brand": "Coca Cola"
    },
    "location": {
      "name": "Circle K Nguyễn Huệ",
      "address": "123 Nguyễn Huệ, Q1, TP.HCM"
    }
  }
}

// Headers sent with webhook
Headers:
X-PSP-Signature: sha256=calculated_signature
X-PSP-Event-Type: redemption.completed
X-PSP-Event-ID: evt_123
Content-Type: application/json
```

---

## 8.11 Error Handling Standards

### 8.11.1 Chuẩn Error Response Format

**Tất cả APIs sử dụng consistent error format:**

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mô tả lỗi cho end user",
    "details": {
      // Additional error context
    },
    "traceId": "trace_123", // for debugging
    "timestamp": "2025-07-15T10:30:00Z"
  }
}
```

### 8.11.2 Common Error Codes

| HTTP Status | Error Code | Mô tả | Ví dụ Message |
|-------------|------------|-------|---------------|
| **400** | `VALIDATION_ERROR` | Dữ liệu input không hợp lệ | "Email không đúng định dạng" |
| **400** | `BARCODE_INVALID` | Barcode không tồn tại/hết hạn | "Mã barcode không hợp lệ hoặc đã hết hạn" |
| **401** | `UNAUTHORIZED` | Chưa đăng nhập | "Vui lòng đăng nhập để tiếp tục" |
| **401** | `TOKEN_EXPIRED` | JWT token hết hạn | "Phiên đăng nhập đã hết hạn" |
| **403** | `INSUFFICIENT_PERMISSIONS` | Không đủ quyền truy cập | "Bạn không có quyền thực hiện hành động này" |
| **404** | `RESOURCE_NOT_FOUND` | Resource không tồn tại | "Campaign không tồn tại" |
| **409** | `BARCODE_ALREADY_REDEEMED` | Barcode đã được đổi | "Sản phẩm đã được đổi trước đó" |
| **422** | `BUSINESS_RULE_VIOLATION` | Vi phạm business rules | "Một user chỉ được nhận tối đa 1 mẫu" |
| **429** | `RATE_LIMIT_EXCEEDED` | Vượt rate limit | "Quá nhiều requests, vui lòng thử lại sau" |
| **500** | `INTERNAL_SERVER_ERROR` | Lỗi hệ thống | "Có lỗi xảy ra, vui lòng thử lại sau" |
| **503** | `SERVICE_UNAVAILABLE` | Service tạm thời không khả dụng | "Dịch vụ đang bảo trì, vui lòng thử lại sau" |

### 8.11.3 Validation Error Details

**Lỗi validation trả về chi tiết field-level errors:**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dữ liệu gửi lên không hợp lệ",
    "details": {
      "fields": {
        "email": ["Email không đúng định dạng"],
        "phoneNumber": ["Số điện thoại phải bắt đầu bằng +84"],
        "startDate": ["Ngày bắt đầu phải sau ngày hiện tại"]
      },
      "invalidCount": 3
    },
    "traceId": "trace_123"
  }
}
```

---

## 8.12 Rate Limiting Implementation

### 8.12.1 Rate Limiting Headers

**Tất cả responses include rate limiting headers:**

```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1642694400
X-RateLimit-Window: 60
Retry-After: 45
```

### 8.12.2 Rate Limit Exceeded Response

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Quá nhiều requests. Vui lòng thử lại sau 45 giây",
    "details": {
      "limit": 100,
      "window": 60,
      "retryAfter": 45,
      "resetAt": "2025-07-15T10:31:00Z"
    }
  }
}
```

---

## 8.13 API Security

### 8.13.1 Authentication Flow

```mermaid
sequenceDiagram
    participant Client as Client App
    participant Gateway as API Gateway
    participant Auth as auth-service
    participant Resource as Resource Service
    
    Note over Client,Resource: Initial Authentication
    Client->>Gateway: POST /auth/login (credentials)
    Gateway->>Auth: Forward login request
    Auth->>Auth: Validate credentials
    Auth-->>Gateway: JWT + Refresh tokens
    Gateway-->>Client: Authentication response
    
    Note over Client,Resource: Subsequent API Calls
    Client->>Gateway: API request + JWT
    Gateway->>Gateway: Extract & validate JWT
    Gateway->>Auth: Verify token (if needed)
    Auth-->>Gateway: Token validation result
    Gateway->>Resource: Forward request + user context
    Resource-->>Gateway: Response
    Gateway-->>Client: Final response
```

### 8.13.2 JWT Token Structure

```json
// JWT Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// JWT Payload
{
  "iss": "psp-auth-service",
  "sub": "user_123",
  "aud": "psp-api",
  "exp": 1642694400,
  "iat": 1642690800,
  "jti": "token_123",
  "scope": "api:read api:write",
  "role": "customer_account",
  "tenant": "tenant_123",
  "permissions": [
    "campaign:read",
    "campaign:write:own",
    "analytics:read:own"
  ]
}
```

### 8.13.3 API Security Headers

**Tất cả API responses bao gồm security headers:**

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
```

---

## 8.14 API Monitoring & Observability

### 8.14.1 Request Tracing

**Mỗi API request có unique trace ID:**

```http
// Request headers
X-Trace-ID: trace_abc123
X-Request-ID: req_def456
X-User-ID: user_123

// Response headers  
X-Trace-ID: trace_abc123
X-Response-Time: 245ms
X-Service-Version: 1.2.3
```

### 8.14.2 API Metrics

**Metrics được thu thập cho mỗi endpoint:**

| Metric | Description | Labels |
|--------|-------------|--------|
| `api_requests_total` | Tổng số requests | method, endpoint, status_code, user_type |
| `api_request_duration_seconds` | Thời gian xử lý request | method, endpoint, percentile |
| `api_rate_limit_hits_total` | Số lần hit rate limit | endpoint, user_type |
| `api_errors_total` | Tổng số errors | endpoint, error_code, severity |
| `api_concurrent_requests` | Số requests đồng thời | endpoint |

### 8.14.3 Health Check Endpoints

#### **GET /api/health**
**Mô tả**: Health check tổng quan cho load balancer

```json
// Response for healthy service
{
  "status": "healthy",
  "version": "1.2.3",
  "timestamp": "2025-07-15T10:30:00Z",
  "uptime": 86400 // seconds
}

// Response for unhealthy service  
{
  "status": "unhealthy",
  "version": "1.2.3", 
  "timestamp": "2025-07-15T10:30:00Z",
  "errors": ["database_connection_failed"]
}
```

#### **GET /api/health/deep**
**Mô tả**: Deep health check bao gồm dependencies

```json
{
  "status": "healthy",
  "version": "1.2.3",
  "timestamp": "2025-07-15T10:30:00Z",
  "dependencies": {
    "database": {
      "status": "healthy",
      "responseTime": 25,
      "lastChecked": "2025-07-15T10:30:00Z"
    },
    "redis": {
      "status": "healthy", 
      "responseTime": 5,
      "lastChecked": "2025-07-15T10:30:00Z"
    },
    "external_apis": {
      "twilio": {
        "status": "healthy",
        "responseTime": 150
      },
      "hubspot": {
        "status": "degraded",
        "responseTime": 2500,
        "warning": "Slow response time"
      }
    }
  }
}
```

---

## 8.15 API Documentation & Developer Experience

### 8.15.1 OpenAPI Specification Standards

**Tất cả services expose OpenAPI 3.0 specs tại `/api/docs/openapi.json`:**

```yaml
openapi: 3.0.3
info:
  title: Product Sampling Platform API
  description: API documentation cho hệ thống Product Sampling Platform
  version: 1.2.3
  contact:
    name: PSP API Support
    email: api-support@psp.com
    url: https://docs.psp.com
  license:
    name: Proprietary
    url: https://psp.com/license

servers:
  - url: https://api.psp.com/v1
    description: Production server
  - url: https://staging-api.psp.com/v1
    description: Staging server

paths:
  /campaigns:
    get:
      summary: Lấy danh sách campaigns
      # ... detailed specification
```

### 8.15.2 Interactive API Documentation

**Swagger UI tại `/api/docs` cho mỗi service với features:**

- ✅ **Try It Out**: Test APIs directly từ documentation
- ✅ **Authentication**: JWT token input cho testing
- ✅ **Code Examples**: Auto-generated code samples
- ✅ **Response Schemas**: Detailed response format
- ✅ **Error Examples**: Common error scenarios

### 8.15.3 SDK Generation

**Auto-generated SDKs cho multiple languages:**

```javascript
// JavaScript/TypeScript SDK example
import { PSPClient } from '@psp/sdk';

const client = new PSPClient({
  apiKey: 'your-api-key',
  environment: 'production' // or 'staging'
});

// Campaign operations
const campaigns = await client.campaigns.list({
  status: 'active',
  page: 1,
  limit: 20
});

// User operations
const user = await client.users.create({
  personalInfo: {
    fullName: 'Nguyễn Văn A',
    email: 'user@example.com',
    phoneNumber: '+84901234567'
  }
});

// Error handling
try {
  await client.barcodes.reserve({
    userId: 'user_123',
    poolId: 'pool_456'
  });
} catch (error) {
  if (error.code === 'BARCODE_UNAVAILABLE') {
    console.log('Không còn barcode khả dụng');
  }
}
```

---

## 8.16 API Testing Strategy

### 8.16.1 Contract Testing

**Sử dụng Pact cho consumer-driven contract testing:**

```javascript
// Consumer test (Frontend)
describe('Campaign API Contract', () => {
  const provider = new Pact({
    consumer: 'brand-dashboard',
    provider: 'campaign-service'
  });

  it('should get campaign list', async () => {
    await provider
      .given('campaigns exist')
      .uponReceiving('a request for campaigns')
      .withRequest({
        method: 'GET',
        path: '/api/v1/campaigns',
        headers: {
          'Authorization': 'Bearer valid-jwt-token'
        }
      })
      .willRespondWith({
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          success: true,
          data: {
            campaigns: Matchers.eachLike({
              id: Matchers.string('camp_123'),
              name: Matchers.string('Test Campaign'),
              status: Matchers.string('active')
            })
          }
        }
      });

    const response = await campaignService.getCampaigns();
    expect(response.success).toBe(true);
  });
});
```

### 8.16.2 Integration Testing

**API integration tests với real database:**

```javascript
describe('Redemption API Integration', () => {
  beforeEach(async () => {
    await setupTestDatabase();
    await seedTestData();
  });

  it('should process redemption flow', async () => {
    // 1. Scan barcode
    const scanResponse = await request(app)
      .post('/api/v1/redemptions/scan')
      .send({
        barcodeCode: 'TEST2025A12345678C',
        locationId: 'test_location_001',
        staffId: 'test_staff_123'
      })
      .expect(200);

    expect(scanResponse.body.data.canRedeem).toBe(true);

    // 2. Process redemption
    const redeemResponse = await request(app)
      .post('/api/v1/redemptions/process')
      .send({
        scanId: scanResponse.body.data.scanId,
        barcodeId: scanResponse.body.data.barcode.id,
        locationId: 'test_location_001',
        staffId: 'test_staff_123'
      })
      .expect(200);

    expect(redeemResponse.body.data.redemptionId).toBeDefined();

    // 3. Verify barcode status changed
    const validateResponse = await request(app)
      .get('/api/v1/barcodes/TEST2025A12345678C/validate')
      .expect(200);

    expect(validateResponse.body.data.valid).toBe(false);
    expect(validateResponse.body.error.code).toBe('BARCODE_ALREADY_REDEEMED');
  });
});
```

---

## 8.17 API Versioning Strategy

### 8.17.1 Versioning Approach

**PSP sử dụng URL versioning kết hợp với Accept headers:**

```http
# URL versioning (preferred)
GET /api/v1/campaigns
GET /api/v2/campaigns

# Header versioning (alternative)
GET /api/campaigns
Accept: application/vnd.psp.v1+json
```

### 8.17.2 Backward Compatibility Rules

| Change Type | Breaking? | Version Bump | Example |
|-------------|-----------|--------------|---------|
| **Add optional field** | ❌ No | Patch | Thêm field `description` vào campaign |
| **Add new endpoint** | ❌ No | Minor | Thêm endpoint `/campaigns/{id}/clone` |
| **Remove field** | ✅ Yes | Major | Xóa field `deprecated_field` |
| **Change field type** | ✅ Yes | Major | `value` từ integer thành decimal |
| **Rename field** | ✅ Yes | Major | `campaignId` thành `campaign_id` |
| **Add required field** | ✅ Yes | Major | Thêm required field `tenantId` |

### 8.17.3 Deprecation Process

```mermaid
graph LR
    A[API v1.0] --> B[API v1.1 - Deprecate field]
    B --> C[API v2.0 - Remove field]
    
    A --> D[Announce deprecation - 3 months notice]
    D --> E[Grace period - 6 months]
    E --> F[Remove deprecated API]
    
    style D fill:#fff3e0
    style E fill:#ffebee
    style F fill:#ffcdd2
```

**Deprecation headers:**
```http
HTTP/1.1 200 OK
Deprecation: true
Sunset: Sat, 31 Dec 2025 23:59:59 GMT
Link: </api/v2/campaigns>; rel="successor-version"
Warning: 299 - "API v1 deprecated, migrate to v2 before Dec 31, 2025"
```

---

## 8.18 External API Integrations

### 8.18.1 Twilio SMS Integration

**SMS sending qua Twilio API:**

```typescript
// notification-service integration
class TwilioSMSProvider {
  async sendSMS(phoneNumber: string, message: string, templateId?: string) {
    const twilioClient = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    try {
      const result = await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
        statusCallback: `${process.env.API_BASE_URL}/webhooks/twilio/status`
      });

      return {
        success: true,
        messageId: result.sid,
        status: result.status,
        cost: parseFloat(result.price || '0')
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        code: error.code
      };
    }
  }
}
```

**Twilio Webhook xử lý delivery status:**

```typescript
// POST /webhooks/twilio/status
interface TwilioStatusWebhook {
  MessageSid: string;
  MessageStatus: 'queued' | 'sent' | 'delivered' | 'undelivered' | 'failed';
  ErrorCode?: string;
  ErrorMessage?: string;
}

async function handleTwilioStatus(body: TwilioStatusWebhook) {
  await notificationService.updateDeliveryStatus({
    externalId: body.MessageSid,
    status: body.MessageStatus,
    error: body.ErrorCode ? {
      code: body.ErrorCode,
      message: body.ErrorMessage
    } : null
  });
}
```

### 8.18.2 HubSpot CRM Integration

**Sync user data tới HubSpot:**

```typescript
class HubSpotIntegration {
  private hubspotClient: Client;

  constructor(apiKey: string) {
    this.hubspotClient = new Client({ apiKey });
  }

  async syncUser(userData: UserSyncData) {
    const contactProperties = {
      email: userData.email,
      firstname: userData.firstName,
      lastname: userData.lastName,
      phone: userData.phoneNumber,
      // Custom properties
      psp_user_id: userData.userId,
      psp_campaign_id: userData.campaignId,
      psp_redemption_status: userData.redemptionStatus,
      psp_participation_date: userData.participatedAt
    };

    try {
      // Create or update contact
      const response = await this.hubspotClient.crm.contacts.basicApi.create({
        properties: contactProperties
      });

      // Add to campaign-specific list
      if (userData.campaignId) {
        await this.addToList(response.id, userData.campaignName);
      }

      return {
        success: true,
        hubspotContactId: response.id,
        action: 'created'
      };
    } catch (error) {
      if (error.code === 'CONTACT_EXISTS') {
        // Update existing contact
        const updateResponse = await this.hubspotClient.crm.contacts.basicApi.update(
          error.existingContactId,
          { properties: contactProperties }
        );

        return {
          success: true,
          hubspotContactId: updateResponse.id,
          action: 'updated'
        };
      }

      throw error;
    }
  }

  async addToList(contactId: string, campaignName: string) {
    const listName = `PSP - ${campaignName} Participants`;
    
    // Create list if not exists
    let listId = await this.findOrCreateList(listName);
    
    // Add contact to list
    await this.hubspotClient.crm.lists.membershipsApi.add(listId, {
      contactIds: [contactId]
    });
  }
}
```

### 8.18.3 Google Analytics Integration

**Send events tới GA4:**

```typescript
class GoogleAnalyticsIntegration {
  private measurementId: string;
  private apiSecret: string;

  async sendEvent(eventData: GAEventData) {
    const payload = {
      client_id: eventData.clientId,
      events: [{
        name: eventData.eventName,
        parameters: {
          campaign_id: eventData.campaignId,
          user_id: eventData.userId,
          custom_parameter_1: eventData.customData
        }
      }]
    };

    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${this.measurementId}&api_secret=${this.apiSecret}`,
      {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    );

    return response.ok;
  }
}

// Event mapping cho PSP
const GAEventMapping = {
  'qr_scan': 'psp_qr_scan',
  'form_submit': 'psp_form_submit',
  'otp_verified': 'psp_user_verified',
  'barcode_issued': 'psp_sample_issued',
  'redemption': 'psp_sample_redeemed'
};
```

---

## 8.19 API Performance Optimization

### 8.19.1 Caching Strategies

**Multi-level caching implementation:**

```typescript
class CacheManager {
  private redis: Redis;
  private localCache: NodeCache;

  async get<T>(key: string): Promise<T | null> {
    // L1: Local cache (fastest)
    let value = this.localCache.get<T>(key);
    if (value) return value;

    // L2: Redis cache
    const redisValue = await this.redis.get(key);
    if (redisValue) {
      value = JSON.parse(redisValue);
      // Store in local cache với TTL ngắn
      this.localCache.set(key, value, 300); // 5 minutes
      return value;
    }

    return null;
  }

  async set(key: string, value: any, ttl: number) {
    // Set both levels
    this.localCache.set(key, value, Math.min(ttl, 300));
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }

  async invalidate(pattern: string) {
    // Invalidate local cache
    this.localCache.flushAll();
    
    // Invalidate Redis cache
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}

// Cache decorators cho controllers
function Cacheable(ttl: number = 300) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = async function (...args: any[]) {
      const cacheKey = `${target.constructor.name}:${propertyName}:${JSON.stringify(args)}`;
      
      const cached = await cacheManager.get(cacheKey);
      if (cached) return cached;
      
      const result = await method.apply(this, args);
      await cacheManager.set(cacheKey, result, ttl);
      
      return result;
    };
  };
}

// Usage example
class CampaignController {
  @Cacheable(600) // Cache 10 minutes
  async getCampaigns(filters: CampaignFilters) {
    return await this.campaignService.findAll(filters);
  }
}
```

### 8.19.2 Database Query Optimization

**Optimized query patterns:**

```typescript
// Pagination với cursor-based thay vì offset
class CampaignService {
  async findPaginated(filters: CampaignFilters, cursor?: string, limit: number = 20) {
    const query: any = {
      tenantId: filters.tenantId
    };

    if (filters.status) {
      query.status = filters.status;
    }

    if (cursor) {
      query._id = { $gt: new ObjectId(cursor) };
    }

    const campaigns = await Campaign.find(query)
      .sort({ _id: 1 })
      .limit(limit + 1) // +1 để check hasNext
      .lean();

    const hasNext = campaigns.length > limit;
    if (hasNext) campaigns.pop();

    return {
      data: campaigns,
      pagination: {
        hasNext,
        nextCursor: hasNext ? campaigns[campaigns.length - 1]._id.toString() : null
      }
    };
  }

  // Aggregation pipeline cho analytics
  async getCampaignStats(campaignId: string) {
    return await Event.aggregate([
      { $match: { campaignId: new ObjectId(campaignId) } },
      {
        $group: {
          _id: '$eventType',
          count: { $sum: 1 },
          uniqueUsers: { $addToSet: '$userId' }
        }
      },
      {
        $project: {
          eventType: '$_id',
          count: 1,
          uniqueUserCount: { $size: '$uniqueUsers' }
        }
      }
    ]);
  }
}
```

### 8.19.3 Connection Pooling

**Database connection optimization:**

```typescript
// MongoDB connection pooling
const mongoOptions = {
  maxPoolSize: 50, // Maximum connections
  minPoolSize: 5,  // Minimum connections
  maxIdleTimeMS: 30000, // Close connections after 30s idle
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  bufferMaxEntries: 0 // Disable mongoose buffering
};

// PostgreSQL connection pooling với PgBouncer
const pgPool = new Pool({
  host: process.env.PG_HOST,
  port: 5432,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  max: 20, // Maximum pool size
  min: 5,  // Minimum pool size
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000
});

// Redis cluster configuration
const redisCluster = new Redis.Cluster([
  { host: 'redis-1', port: 6379 },
  { host: 'redis-2', port: 6379 },
  { host: 'redis-3', port: 6379 }
], {
  redisOptions: {
    password: process.env.REDIS_PASSWORD
  },
  maxRetriesPerRequest: 3,
  retryDelayOnFailover: 100
});
```

---

## 8.20 API Summary & Next Steps

### 8.20.1 Tổng kết kiến trúc API

**Các thành phần chính đã được thiết kế:**

✅ **API Gateway**: Kong với authentication, rate limiting, CORS  
✅ **8 Microservice APIs**: Từ auth đến integration với comprehensive endpoints  
✅ **Security**: JWT authentication, RBAC, rate limiting, security headers  
✅ **Error Handling**: Standardized error format với meaningful messages  
✅ **Documentation**: OpenAPI 3.0 specs với Swagger UI  
✅ **External Integrations**: Twilio, HubSpot, Google Analytics  
✅ **Performance**: Multi-level caching, connection pooling, query optimization  

### 8.20.2 API Readiness Checklist

**MVP Implementation Checklist:**

- [ ] **Kong API Gateway** setup với basic plugins
- [ ] **auth-service API** với JWT và OTP endpoints  
- [ ] **campaign-service API** với CRUD operations
- [ ] **barcode-service API** với reservation logic
- [ ] **user-service API** với profile management
- [ ] **redemption-service API** với POS integration
- [ ] **analytics-service API** với basic dashboard
- [ ] **notification-service API** với SMS/email
- [ ] **integration-service API** với webhook support

**Quality Gates:**

- [ ] All APIs có OpenAPI 3.0 specifications
- [ ] Rate limiting configured cho all endpoints
- [ ] Error handling consistent across services
- [ ] Security headers implemented
- [ ] Health checks functional
- [ ] Contract tests passing
- [ ] Integration tests coverage >80%

### 8.20.3 Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **API Response Time** | <3s (p95) | Application monitoring |
| **Authentication** | <500ms (p95) | JWT validation time |
| **Database Queries** | <1s (p95) | Query execution time |
| **Cache Hit Ratio** | >80% | Redis monitoring |
| **API Availability** | >99.9% | Uptime monitoring |
| **Concurrent Users** | 10,000 | Load testing |

### 8.20.4 Security Compliance

**Security measures implemented:**

✅ **Authentication**: JWT với refresh tokens  
✅ **Authorization**: RBAC với granular permissions  
✅ **Rate Limiting**: Per-user và per-endpoint limits  
✅ **Input Validation**: JSON schema validation  
✅ **Output Sanitization**: Prevent XSS attacks  
✅ **HTTPS Only**: TLS 1.3 encryption  
✅ **Security Headers**: Comprehensive security headers  
✅ **Audit Logging**: All API calls logged với trace IDs  

---

**Trạng thái tài liệu**: ✅ Hoàn thành Part08  
**Hành động tiếp theo**: Part09 - Detailed Use Cases  
**Dependencies**: API specifications approved và validated  
**Người sở hữu**: Đội thiết kế API

# 📘 Part09 - Use Case chi tiết (Detailed Use Cases)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội phân tích nghiệp vụ  
**Trạng thái**: ✅ Hoàn thành  

---

## 9.1 Tổng quan Use Cases

### 9.1.1 Danh sách Use Cases chính

Hệ thống Product Sampling Platform có **8 use cases chính** được phân loại theo actors và business flows:

```mermaid
graph TB
    subgraph "Brand Management"
        UC1[UC-001: Tạo và quản lý Campaign]
        UC2[UC-002: Upload và quản lý Ads Format]
        UC8[UC-008: Xem Analytics và Export dữ liệu]
    end
    
    subgraph "User Experience"
        UC3[UC-003: Người dùng nhận Sample]
        UC7[UC-007: Quản lý User Portal]
    end
    
    subgraph "Operations"
        UC4[UC-004: Xử lý Redemption tại POS]
        UC5[UC-005: Đồng bộ Offline Redemptions]
    end
    
    subgraph "System Management"
        UC6[UC-006: Quản lý Webhook và Integrations]
    end
    
    style UC3 fill:#e8f5e8
    style UC4 fill:#fff3e0
    style UC1 fill:#e3f2fd
```

### 9.1.2 Actor Mapping

| Use Case | Primary Actor | Supporting Actors | System Actor |
|----------|---------------|-------------------|--------------|
| UC-001 | Customer Account | Admin, Group Admin | campaign-service |
| UC-002 | Customer Account | Admin, Group Admin | campaign-service |
| UC-003 | End User | - | user-service, barcode-service |
| UC-004 | Serving Account | End User | redemption-service |
| UC-005 | Serving Account | - | redemption-service |
| UC-006 | Admin | Integration Services | integration-service |
| UC-007 | End User | - | user-service |
| UC-008 | Customer Account | Admin, Group Admin | analytics-service |

### 9.1.3 Use Case Dependencies

```mermaid
graph LR
    UC1 --> UC2
    UC2 --> UC3
    UC3 --> UC4
    UC4 --> UC5
    UC3 --> UC7
    UC4 --> UC8
    UC1 --> UC6
    
    UC1[UC-001: Campaign Management]
    UC2[UC-002: Ads Format]
    UC3[UC-003: User Sample Journey]
    UC4[UC-004: POS Redemption]
    UC5[UC-005: Offline Sync]
    UC6[UC-006: Integrations]
    UC7[UC-007: User Portal]
    UC8[UC-008: Analytics]
```

---

## 9.2 UC-001: Tạo và quản lý Campaign

### 9.2.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-001 |
| **Tên** | Tạo và quản lý Campaign |
| **Primary Actor** | Customer Account (Brand Manager) |
| **Supporting Actors** | Admin, Group Admin |
| **Mục tiêu** | Tạo, cấu hình và quản lý campaign sampling để thu thập verified leads |
| **Phạm vi** | campaign-service, barcode-service |
| **Độ phức tạp** | Trung bình |
| **Tần suất** | 10-50 campaigns/tháng per brand |

### 9.2.2 Preconditions

- ✅ User đã đăng nhập với role Customer Account hoặc cao hơn
- ✅ User có permissions `campaign:write` cho tenant
- ✅ Hệ thống barcode-service hoạt động bình thường
- ✅ Có ít nhất 1 location active trong hệ thống

### 9.2.3 Main Success Scenario (Normal Flow)

#### **Bước 1-5: Campaign Setup**
```mermaid
sequenceDiagram
    participant User as Brand Manager
    participant Dashboard as Brand Dashboard
    participant API as campaign-service
    participant DB as MongoDB
    participant Barcode as barcode-service
    
    User->>Dashboard: 1. Click "Tạo Campaign mới"
    Dashboard->>User: 2. Hiển thị form tạo campaign
    User->>Dashboard: 3. Điền thông tin campaign
    Note over User,Dashboard: Tên, mô tả, thời gian, sản phẩm
    
    Dashboard->>API: 4. POST /api/v1/campaigns
    API->>DB: 5. Validate và lưu campaign
    DB-->>API: 6. Campaign created
    API-->>Dashboard: 7. Campaign response với ID
    Dashboard-->>User: 8. Hiển thị "Campaign đã tạo thành công"
```

#### **Bước 6-10: Barcode Pool Assignment**
```mermaid
sequenceDiagram
    participant User as Brand Manager
    participant Dashboard as Brand Dashboard
    participant API as campaign-service
    participant Barcode as barcode-service
    participant PG as PostgreSQL
    
    User->>Dashboard: 6. Click "Gán Barcode Pool"
    Dashboard->>User: 7. Form upload CSV hoặc chọn pool có sẵn
    User->>Dashboard: 8. Upload CSV với barcodes
    
    Dashboard->>Barcode: 9. POST /api/v1/barcode-pools
    Barcode->>PG: 10. Validate và import barcodes
    PG-->>Barcode: 11. Import results
    Barcode-->>Dashboard: 12. Pool created với stats
    
    Dashboard->>API: 13. Gán pool ID vào campaign
    API-->>Dashboard: 14. Campaign updated
    Dashboard-->>User: 15. "10,000 barcodes đã được gán"
```

#### **Bước 11-15: Campaign Configuration**
```
11. User chọn targeting options (age range, gender, locations)
12. User cấu hình campaign settings:
    - Số lượng redemptions tối đa per user (default: 1)
    - Yêu cầu quiz hay không (default: false) 
    - Auto-expire time cho barcodes (default: 24h)
    - Offline redemption cho phép (default: true)
13. User setup UTM tracking parameters
14. User preview campaign configuration
15. User click "Lưu và Activate" campaign
```

### 9.2.4 Alternative Flows

#### **A1: Import Barcode từ CSV thất bại**
```
A1.1. System validate CSV format và phát hiện lỗi
A1.2. System hiển thị error details:
      - Row 15: Barcode "ABC123" đã tồn tại
      - Row 23: Expiry date "2023-12-31" đã quá hạn  
      - Row 45: Product name quá dài (>255 chars)
A1.3. User fix CSV file và re-upload
A1.4. Return to step 8
```

#### **A2: Insufficient Permissions**
```
A2.1. System check user permissions cho campaign creation
A2.2. User chỉ có permission "campaign:read" 
A2.3. System hiển thị "Bạn không có quyền tạo campaign mới"
A2.4. System suggest liên hệ Admin để được cấp quyền
A2.5. Use case ends
```

#### **A3: Campaign Name Duplicate**
```
A3.1. User nhập campaign name đã tồn tại trong tenant
A3.2. System validate uniqueness và return error
A3.3. System suggest alternative names:
      - "Summer Campaign 2025 (2)"
      - "Summer Campaign 2025 - Copy"
A3.4. User chọn name mới hoặc edit original
A3.5. Return to step 4
```

### 9.2.5 Exception Flows

#### **E1: Database Connection Error**
```
E1.1. campaign-service không thể connect tới MongoDB
E1.2. System log error với trace ID
E1.3. System hiển thị "Lỗi hệ thống tạm thời, vui lòng thử lại sau"
E1.4. System gửi alert tới operations team
E1.5. User có thể retry sau 30 giây
```

#### **E2: Barcode Service Unavailable**
```
E2.1. barcode-service return 503 Service Unavailable
E2.2. System enable "Campaign draft mode" - lưu campaign không có barcodes
E2.3. System hiển thị "Campaign đã tạo ở draft mode, barcodes sẽ được gán sau"
E2.4. System queue job để auto-assign barcodes khi service khả dụng
E2.5. Use case ends với partial success
```

### 9.2.6 Business Rules

| Rule ID | Mô tả | Validation |
|---------|-------|------------|
| BR-001 | Campaign name phải unique trong tenant | Kiểm tra trong MongoDB |
| BR-002 | End date phải sau start date ít nhất 1 ngày | Client và server validation |
| BR-003 | Barcode pool chỉ có thể gán cho 1 campaign | Kiểm tra foreign key |
| BR-004 | Campaign chỉ có thể edit khi status = "draft" | Business logic trong API |
| BR-005 | Số lượng barcodes >= expected sample size | Warning nếu không đủ |

### 9.2.7 Post-conditions

**Success Post-conditions:**
- ✅ Campaign được tạo với status "draft" hoặc "active"
- ✅ Barcode pool được gán và ready để phát
- ✅ UTM tracking parameters được setup
- ✅ Campaign xuất hiện trong dashboard list
- ✅ Event "campaign_created" được gửi tới analytics-service

**Failure Post-conditions:**
- ❌ Campaign không được tạo, không có entry trong database
- ❌ Barcode pool không được gán (nếu có upload)
- ❌ User nhận được clear error message
- ❌ System state không thay đổi

---

## 9.3 UC-002: Upload và quản lý Ads Format

### 9.3.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-002 |
| **Tên** | Upload và quản lý Ads Format |
| **Primary Actor** | Customer Account (Brand Manager) |
| **Supporting Actors** | Graphic Designer, Marketing Team |
| **Mục tiêu** | Upload design files, cấu hình QR codes và quản lý ads formats cho campaign |
| **Phạm vi** | campaign-service, file storage |
| **Độ phức tạp** | Trung bình |
| **Tần suất** | 2-10 ads formats per campaign |

### 9.3.2 Preconditions

- ✅ Campaign đã được tạo và có status "draft" hoặc "active"
- ✅ User có permissions `campaign:write` cho campaign đó
- ✅ File storage service (S3/MinIO) hoạt động bình thường
- ✅ User có design files với format hỗ trợ (PNG, JPG, PDF)

### 9.3.3 Main Success Scenario

#### **Bước 1-8: Upload Design File**
```mermaid
sequenceDiagram
    participant User as Brand Manager
    participant Dashboard as Brand Dashboard
    participant API as campaign-service
    participant Storage as File Storage
    participant QR as QR Generator
    
    User->>Dashboard: 1. Navigate to campaign ads formats
    Dashboard->>User: 2. Show "Thêm Ads Format" button
    User->>Dashboard: 3. Click "Thêm Ads Format"
    Dashboard->>User: 4. Show ads format form
    
    Note over User,Dashboard: Form fields: tên, type, dimensions, QR config
    
    User->>Dashboard: 5. Fill form và select design file
    User->>Dashboard: 6. Configure QR position và size
    Dashboard->>API: 7. POST /api/v1/campaigns/{id}/ads-formats
    API->>Storage: 8. Upload file validation và storage
```

#### **Bước 9-15: QR Code Generation và Validation**
```mermaid
sequenceDiagram
    participant API as campaign-service
    participant Storage as File Storage
    participant QR as QR Generator
    participant Validator as File Validator
    participant DB as MongoDB
    
    Storage-->>API: 9. File uploaded successfully
    API->>Validator: 10. Validate file specifications
    Note over Validator: Check DPI ≥ 300, size limits, format
    
    Validator-->>API: 11. Validation results
    API->>QR: 12. Generate dynamic QR code
    QR-->>API: 13. QR code URL và metadata
    
    API->>DB: 14. Save ads format record
    DB-->>API: 15. Ads format saved với ID
    API-->>Dashboard: 16. Success response với preview
```

#### **Bước 16-20: Preview và Finalization**
```
16. Dashboard hiển thị preview của ads format với QR code overlay
17. User xem preview và kiểm tra QR position
18. User có thể adjust QR size/position nếu cần
19. User click "Lưu và Tạo QR Code"
20. System generate final QR codes và update tracking URLs
```

### 9.3.4 Alternative Flows

#### **A1: File không đạt yêu cầu kỹ thuật**
```
A1.1. File Validator phát hiện issues:
      - DPI < 300 (hiện tại: 150 DPI)
      - File size > 50MB
      - Format không hỗ trợ (e.g., TIFF)
A1.2. System hiển thị detailed error message
A1.3. System suggest solutions:
      - "Vui lòng export với DPI ≥ 300"
      - "Compress file xuống dưới 50MB"
      - "Convert sang PNG/JPG/PDF"
A1.4. User fix file và re-upload
A1.5. Return to step 7
```

#### **A2: QR Code Position Conflict**
```
A2.1. User đặt QR code position overlap với important design elements
A2.2. System analyze design và detect potential conflicts
A2.3. System hiển thị warning: "QR code có thể che khuất logo/text"
A2.4. System suggest alternative positions
A2.5. User adjust position hoặc proceed với warning
A2.6. Continue to step 19
```

### 9.3.5 Exception Flows

#### **E1: File Storage Service Error**
```
E1.1. S3/MinIO service return 500 error
E1.2. System retry upload 3 lần với exponential backoff
E1.3. All retries fail
E1.4. System save ads format metadata without file URL
E1.5. System hiển thị "File upload thất bại, vui lòng thử lại"
E1.6. System allow user để retry upload later
```

#### **E2: QR Generator Service Down**
```
E2.1. QR generator service không response
E2.2. System save ads format với placeholder QR URL
E2.3. System queue background job để generate QR later
E2.4. System notify user: "QR code sẽ được tạo trong vài phút"
E2.5. System send notification khi QR ready
```

### 9.3.6 Business Rules

| Rule ID | Mô tả | Implementation |
|---------|-------|----------------|
| BR-010 | File phải có DPI ≥ 300 cho print formats | ImageMagick validation |
| BR-011 | QR code minimum size = 20mm x 20mm | Client-side validation |
| BR-012 | QR safe zone ≥ 4 modules | Automatic validation |
| BR-013 | Maximum 10 ads formats per campaign | Database constraint |
| BR-014 | File size limit 50MB | Upload validation |

### 9.3.7 Post-conditions

**Success:**
- ✅ Ads format record saved trong MongoDB
- ✅ Design file uploaded và accessible
- ✅ QR code generated với dynamic URL
- ✅ Tracking URLs configured cho campaign
- ✅ Preview available cho user review

---

## 9.4 UC-003: Người dùng nhận Sample

### 9.4.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-003 |
| **Tên** | Người dùng nhận Sample (End-to-End User Journey) |
| **Primary Actor** | End User (Khách hàng cuối) |
| **Supporting Actors** | - |
| **Mục tiêu** | Complete flow từ scan QR code đến nhận barcode sample |
| **Phạm vi** | user-service, auth-service, barcode-service, notification-service |
| **Độ phức tạp** | Cao |
| **Tần suất** | 1,000-10,000 lần/ngày per campaign |

### 9.4.2 Preconditions

- ✅ Campaign đang active và trong thời gian hiệu lực
- ✅ Campaign có barcode pool với available barcodes
- ✅ User có smartphone với camera và internet connection
- ✅ SMS/Email notification services hoạt động

### 9.4.3 Main Success Scenario

#### **Phase 1: QR Scan và Landing Page (Steps 1-5)**
```mermaid
sequenceDiagram
    participant User as End User
    participant Camera as Phone Camera
    participant Browser as Mobile Browser
    participant Landing as Landing Page
    participant Analytics as analytics-service
    
    User->>Camera: 1. Mở camera scan QR code
    Camera->>Browser: 2. Detect QR và mở URL
    Browser->>Landing: 3. GET /landing/{campaignId}/{adsFormatId}
    Landing->>Analytics: 4. Track event "qr_scan"
    Landing-->>Browser: 5. Hiển thị landing page với form
    Browser-->>User: 6. Show product info và registration form
```

#### **Phase 2: Form Submission và Data Collection (Steps 6-12)**
```mermaid
sequenceDiagram
    participant User as End User
    participant Form as Landing Form
    participant API as user-service
    participant Validation as Validation Engine
    participant DB as MongoDB
    
    User->>Form: 6. Điền form (name, email, phone, preferences)
    User->>Form: 7. Tick consent checkboxes
    User->>Form: 8. Complete quiz (optional)
    User->>Form: 9. Click "Gửi thông tin"
    
    Form->>API: 10. POST /api/v1/users (create user)
    API->>Validation: 11. Validate data format
    Validation-->>API: 12. Validation passed
    API->>DB: 13. Save user profile (encrypted PII)
    DB-->>API: 14. User created với ID
```

#### **Phase 3: OTP Verification (Steps 13-20)**
```mermaid
sequenceDiagram
    participant User as End User
    participant Form as OTP Form
    participant Auth as auth-service
    participant SMS as Twilio SMS
    participant Validation as OTP Validator
    
    Form->>Auth: 13. POST /api/v1/auth/send-otp
    Auth->>SMS: 14. Send SMS với 6-digit OTP
    SMS-->>User: 15. Nhận SMS: "Mã OTP của bạn: 123456"
    
    User->>Form: 16. Nhập OTP code
    Form->>Auth: 17. POST /api/v1/auth/verify-otp
    Auth->>Validation: 18. Validate OTP code
    Validation-->>Auth: 19. OTP valid
    Auth-->>Form: 20. Verification successful
```

#### **Phase 4: Barcode Generation và Delivery (Steps 21-28)**
```mermaid
sequenceDiagram
    participant Form as Verified Form
    participant Barcode as barcode-service
    participant PG as PostgreSQL
    participant Notification as notification-service
    participant User as End User
    
    Form->>Barcode: 21. POST /api/v1/barcodes/reserve
    Barcode->>PG: 22. CALL reserve_barcode(pool_id, user_id)
    PG-->>Barcode: 23. Return barcode_id, code
    Barcode-->>Form: 24. Barcode reserved successfully
    
    Form->>Notification: 25. Send barcode via SMS/Email
    Notification-->>User: 26. SMS: "Mã barcode: COC2025A123..."
    Form-->>User: 27. Show success page với barcode QR
    User->>User: 28. Save barcode to Apple Wallet (optional)
```

### 9.4.4 Alternative Flows

#### **A1: User đã tồn tại trong hệ thống**
```
A1.1. System detect user email/phone đã tồn tại
A1.2. System check last participation date
A1.3. If > 6 months ago:
      A1.3.1. System update existing profile
      A1.3.2. Continue với OTP verification
A1.4. If < 6 months ago:
      A1.4.1. System check campaign participation history
      A1.4.2. If not participated in this campaign: allow continuation
      A1.4.3. If already participated: show "Bạn đã tham gia campaign này"
```

#### **A2: OTP Verification Failed**
```
A2.1. User nhập sai OTP code
A2.2. System decrement attempts (remaining: 2/3)
A2.3. System hiển thị "Mã OTP không đúng, còn 2 lần thử"
A2.4. If attempts = 0:
      A2.4.1. System block phone number trong 15 minutes
      A2.4.2. System hiển thị "Quá nhiều lần thử sai, vui lòng thử lại sau 15 phút"
      A2.4.3. Use case ends với failure
A2.5. User có thể request OTP mới sau 1 minute
```

#### **A3: Không còn Barcode available**
```
A3.1. barcode-service check available_quantity = 0
A3.2. System hiển thị "Campaign đã hết mẫu, cảm ơn bạn đã quan tâm"
A3.3. System offer alternatives:
      - Subscribe để nhận thông báo campaign tương tự
      - Xem các campaign khác đang active
A3.4. System track event "out_of_stock" cho analytics
A3.5. Use case ends với partial success (lead captured, no barcode)
```

### 9.4.5 Exception Flows

#### **E1: SMS Service Down**
```
E1.1. Twilio API return error 500
E1.2. System fallback sang Email OTP
E1.3. System hiển thị "SMS tạm thời lỗi, chúng tôi sẽ gửi OTP qua email"
E1.4. System send email với OTP code
E1.5. Continue với email verification flow
```

#### **E2: Database Transaction Failed**
```
E2.1. PostgreSQL transaction timeout during barcode reservation
E2.2. System rollback transaction
E2.3. System retry operation 1 lần
E2.4. If retry fails:
      E2.4.1. System log error với user context
      E2.4.2. System hiển thị "Lỗi hệ thống, vui lòng thử lại sau"
      E2.4.3. System preserve user data for retry
E2.5. User có thể retry từ bước OTP verification
```

### 9.4.6 Business Rules

| Rule ID | Mô tả | Enforcement |
|---------|-------|-------------|
| BR-020 | 1 user chỉ được 1 barcode per campaign | Database unique constraint |
| BR-021 | OTP có hiệu lực 5 phút | Redis TTL |
| BR-022 | Maximum 3 OTP attempts per session | Redis counter |
| BR-023 | Barcode reservation timeout 5 phút nếu không verify | Background job cleanup |
| BR-024 | Consent bắt buộc cho data processing | Form validation |

### 9.4.7 Quality Attributes

| Attribute | Requirement | Measurement |
|-----------|-------------|-------------|
| **Performance** | Form load < 3s trên 3G | Browser timing API |
| **Availability** | 99.5% uptime cho user flow | Application monitoring |
| **Usability** | Form completion rate > 90% | Analytics tracking |
| **Security** | All PII encrypted at rest | Database audit |
| **Scalability** | Support 1000 concurrent users | Load testing |

---

## 9.5 UC-004: Xử lý Redemption tại POS

### 9.5.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-004 |
| **Tên** | Xử lý Redemption tại POS |
| **Primary Actor** | Serving Account (Store Staff) |
| **Supporting Actors** | End User, Store Manager |
| **Mục tiêu** | Scan và xử lý barcode redemption tại điểm bán để customer nhận sản phẩm |
| **Phạm vi** | redemption-service, barcode-service |
| **Độ phức tạp** | Trung bình |
| **Tần suất** | 500-2000 redemptions/ngày per location |

### 9.5.2 Preconditions

- ✅ Staff đã đăng nhập POS app với role Serving Account
- ✅ Customer có valid barcode (issued status)
- ✅ Location có inventory của sản phẩm tương ứng
- ✅ POS device có camera hoặc barcode scanner

### 9.5.3 Main Success Scenario

#### **Phase 1: Barcode Scanning (Steps 1-8)**
```mermaid
sequenceDiagram
    participant Customer as Customer
    participant Staff as Store Staff
    participant POS as POS App
    participant Redemption as redemption-service
    participant Barcode as barcode-service
    
    Customer->>Staff: 1. Đưa barcode (QR/phone screen)
    Staff->>POS: 2. Click "Scan Barcode"
    POS->>POS: 3. Activate camera scanner
    Staff->>POS: 4. Scan barcode từ customer phone
    
    POS->>Redemption: 5. POST /api/v1/redemptions/scan
    Redemption->>Barcode: 6. Validate barcode status
    Barcode-->>Redemption: 7. Barcode valid và issued
    Redemption-->>POS: 8. Scan successful với product info
```

#### **Phase 2: Product Information Display (Steps 9-13)**
```mermaid
sequenceDiagram
    participant POS as POS App
    participant Staff as Store Staff
    participant Customer as Customer
    participant Inventory as Store Inventory
    
    POS->>Staff: 9. Display product information
    Note over POS: Product: Coca Cola 330ml<br/>Customer: Nguyễn Văn A<br/>Expiry: 2025-12-31
    
    Staff->>Inventory: 10. Kiểm tra sản phẩm trong kho
    Inventory-->>Staff: 11. Confirm product available
    Staff->>Customer: 12. "Anh chờ tôi lấy sản phẩm nhé"
    Staff->>POS: 13. Click "Xác nhận đổi hàng"
```

#### **Phase 3: Redemption Processing (Steps 14-20)**
```mermaid
sequenceDiagram
    participant Staff as Store Staff
    participant POS as POS App
    participant Redemption as redemption-service
    participant PG as PostgreSQL
    participant Analytics as analytics-service
    
    Staff->>POS: 14. Click "Hoàn thành redemption"
    POS->>Redemption: 15. POST /api/v1/redemptions/process
    Redemption->>PG: 16. Update barcode status = 'redeemed'
    PG-->>Redemption: 17. Redemption record created
    
    Redemption->>Analytics: 18. Track "redemption" event
    Redemption-->>POS: 19. Success response
    POS-->>Staff: 20. "Đổi hàng thành công!"
```

#### **Phase 4: Customer Service (Steps 21-25)**
```
21. Staff lấy sản phẩm từ kho và đưa cho customer
22. Staff explain sản phẩm (nếu cần) và usage instructions
23. Customer nhận sản phẩm và confirm satisfied
24. Staff có thể request customer feedback (optional)
25. Transaction hoàn tất
```

### 9.5.4 Alternative Flows

#### **A1: Barcode đã được sử dụng**
```
A1.1. barcode-service return status "redeemed"
A1.2. POS hiển thị thông tin redemption trước đó:
      - Đã đổi tại: Circle K Lê Lợi
      - Thời gian: 2025-07-10 14:30
      - Staff: Nguyễn Thị B
A1.3. Staff thông báo cho customer: "Barcode này đã được sử dụng"
A1.4. Staff có thể contact customer service nếu customer khiếu nại
A1.5. Use case ends
```

#### **A2: Sản phẩm hết hàng tại store**
```
A2.1. Staff check inventory và confirm out of stock
A2.2. Staff click "Báo hết hàng" trong POS
A2.3. POS suggest alternatives:
      - Raincheck cho customer
      - Chuyển đến store gần nhất có hàng
      - Contact customer service để arrange delivery
A2.4. Staff discuss options với customer
A2.5. If customer accept raincheck:
      A2.5.1. POS tạo raincheck code
      A2.5.2. Barcode vẫn giữ status "issued"
      A2.5.3. System set reminder để contact customer khi có hàng
A2.6. Use case ends với partial success
```

#### **A3: Barcode expired**
```
A3.1. barcode-service check expiry_date < today
A3.2. POS hiển thị "Barcode đã hết hạn (expired: 2025-07-01)"
A3.3. Staff explain cho customer về expiry policy
A3.4. POS offer customer service contact option
A3.5. Staff có thể escalate tới manager nếu cần
A3.6. Use case ends
```

### 9.5.5 Exception Flows

#### **E1: Network connectivity issues**
```
E1.1. POS app detect network unavailable
E1.2. POS switch sang "Offline Mode"
E1.3. POS hiển thị "Chế độ offline - Redemption sẽ được sync sau"
E1.4. Staff proceed với offline redemption process
E1.5. POS store redemption trong local IndexedDB
E1.6. Continue với UC-005 (Offline Sync) khi network restored
```

#### **E2: Barcode validation service timeout**
```
E2.1. Redemption service không receive response từ barcode-service
E2.2. POS hiển thị "Đang kiểm tra barcode..." với loading spinner
E2.3. After 10 seconds timeout:
      E2.3.1. POS offer "Xử lý thủ công" option
      E2.3.2. Staff có thể proceed với manual verification
      E2.3.3. System flag transaction cho later verification
E2.4. Use case continues với manual override
```

### 9.5.6 Business Rules

| Rule ID | Mô tả | Implementation |
|---------|-------|----------------|
| BR-030 | Barcode chỉ có thể redeem 1 lần | Database unique constraint |
| BR-031 | Redemption chỉ valid tại locations được assigned | Location validation |
| BR-032 | Staff phải belong to same location như redemption | Authorization check |
| BR-033 | Offline redemptions auto-sync trong 24h | Background sync job |
| BR-034 | Manual override require manager approval | Role permission check |

### 9.5.7 Quality Attributes

| Attribute | Target | Measurement |
|-----------|--------|-------------|
| **Scan Speed** | < 3 seconds | Camera processing time |
| **Validation Speed** | < 2 seconds | API response time |
| **Offline Capability** | 8 hours | Local storage duration |
| **Accuracy** | 99.9% | Error rate tracking |

---

## 9.6 UC-005: Đồng bộ Offline Redemptions

### 9.6.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-005 |
| **Tên** | Đồng bộ Offline Redemptions |
| **Primary Actor** | System (Background Process) |
| **Supporting Actors** | Serving Account, Network Service |
| **Mục tiêu** | Sync offline redemptions khi network connection restored |
| **Phạm vi** | redemption-service, POS app |
| **Độ phức tạp** | Cao |
| **Tần suất** | Continuous background process |

### 9.6.2 Preconditions

- ✅ POS device có offline redemptions stored locally
- ✅ Network connection restored
- ✅ redemption-service hoạt động bình thường
- ✅ POS app có valid authentication token

### 9.6.3 Main Success Scenario

#### **Phase 1: Detect Network và Prepare Sync**
```mermaid
sequenceDiagram
    participant POS as POS App
    participant Network as Network Monitor
    participant Queue as Local Queue
    participant API as redemption-service
    
    Network->>POS: 1. Network connection restored
    POS->>Queue: 2. Query offline redemptions
    Queue-->>POS: 3. Return 15 pending redemptions
    
    POS->>API: 4. GET /api/v1/redemptions/sync-status
    API-->>POS: 5. Sync service available
    POS->>POS: 6. Prepare batch sync request
```

#### **Phase 2: Batch Upload và Conflict Resolution**
```mermaid
sequenceDiagram
    participant POS as POS App
    participant API as redemption-service
    participant PG as PostgreSQL
    participant Conflict as Conflict Resolver
    
    POS->>API: 7. POST /api/v1/redemptions/batch-sync
    Note over POS,API: 15 offline redemptions in batch
    
    API->>PG: 8. Process each redemption
    
    loop For each redemption
        PG->>Conflict: 9. Check for conflicts
        Conflict-->>PG: 10. Resolution strategy
        alt No Conflict
            PG->>PG: 11. Insert redemption
        else Conflict Detected
            PG->>PG: 12. Apply resolution rules
        end
    end
    
    API-->>POS: 13. Batch sync results
```

#### **Phase 3: Handle Sync Results**
```mermaid
sequenceDiagram
    participant POS as POS App
    participant Queue as Local Queue
    participant Staff as Store Staff
    participant Manager as Store Manager
    
    POS->>POS: 14. Process sync results
    Note over POS: 12 success, 2 conflicts, 1 failed
    
    POS->>Queue: 15. Remove successful redemptions
    POS->>Staff: 16. Notify conflicts require attention
    POS->>Manager: 17. Send conflict report
    
    alt Critical Conflicts
        POS->>Manager: 18. Immediate notification
    else Minor Conflicts  
        POS->>Staff: 19. Add to daily report
    end
```

### 9.6.4 Alternative Flows

#### **A1: Duplicate Redemption Conflict**
```
A1.1. Conflict Resolver detect same barcode redeemed online
A1.2. System compare timestamps:
      - Offline: 2025-07-15 14:30 (staff A)
      - Online: 2025-07-15 14:35 (staff B)
A1.3. System apply "First-In-Time" rule
A1.4. Keep offline redemption (earlier timestamp)
A1.5. Mark online redemption as "duplicate_resolved"
A1.6. Send notification to both staff members
A1.7. Update final resolution in database
```

#### **A2: Barcode đã expired trong thời gian offline**
```
A2.1. System detect barcode expired between offline time và sync time
A2.2. System check business rule exceptions:
      - Grace period: 24 hours post-expiry
      - Manager override available
A2.3. If within grace period:
      A2.3.1. Allow redemption với warning flag
      A2.3.2. Notify manager về exception
A2.4. If beyond grace period:
      A2.4.1. Reject redemption
      A2.4.2. Create customer service ticket
      A2.4.3. Notify staff về required customer follow-up
```

### 9.6.5 Exception Flows

#### **E1: Partial Sync Failure**
```
E1.1. Network drops during batch sync
E1.2. 8/15 redemptions processed successfully
E1.3. System mark processed items trong local queue
E1.4. Resume sync với remaining 7 items khi network stable
E1.5. Retry failed items với exponential backoff
E1.6. Max 3 retry attempts per redemption
```

#### **E2: Authentication Token Expired**
```
E2.1. API return 401 Unauthorized during sync
E2.2. POS attempt token refresh
E2.3. If refresh successful: retry sync
E2.4. If refresh failed:
      E2.4.1. Prompt staff để re-login
      E2.4.2. Preserve offline data
      E2.4.3. Resume sync after authentication
```

### 9.6.6 Conflict Resolution Matrix

| Conflict Type | Resolution Strategy | Business Rule |
|---------------|-------------------|---------------|
| **Duplicate Barcode** | First-in-time wins | Timestamps comparison |
| **Expired During Offline** | Grace period 24h | Business exception |
| **Location Mismatch** | Manager approval required | Security validation |
| **Staff Authorization** | Escalate to admin | Role verification |
| **Product Unavailable** | Create raincheck | Inventory reconciliation |

---

## 9.7 UC-006: Quản lý Webhook và Integrations

### 9.7.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-006 |
| **Tên** | Quản lý Webhook và Integrations |
| **Primary Actor** | Admin |
| **Supporting Actors** | Integration Developer, Brand Technical Team |
| **Mục tiêu** | Setup và quản lý integrations với external systems (CRM, Analytics) |
| **Phạm vi** | integration-service |
| **Độ phức tạp** | Cao |
| **Tần suất** | 5-20 integrations per month |

### 9.7.2 Preconditions

- ✅ User có role Admin hoặc permissions `integration:manage`
- ✅ External system có webhook endpoint ready
- ✅ API credentials và authentication setup
- ✅ Network connectivity tới external systems

### 9.7.3 Main Success Scenario

#### **Phase 1: Webhook Configuration**
```mermaid
sequenceDiagram
    participant Admin as Admin User
    participant Dashboard as Admin Dashboard
    participant API as integration-service
    participant External as External System
    participant Validator as Webhook Validator
    
    Admin->>Dashboard: 1. Navigate to "Integrations"
    Dashboard->>Admin: 2. Show integration types
    Admin->>Dashboard: 3. Select "HubSpot CRM"
    Dashboard->>Admin: 4. Show webhook configuration form
    
    Admin->>Dashboard: 5. Fill webhook details
    Note over Admin,Dashboard: URL, events, authentication
    
    Dashboard->>API: 6. POST /api/v1/integrations/webhooks
    API->>Validator: 7. Validate webhook endpoint
    Validator->>External: 8. Send test ping
    External-->>Validator: 9. Return 200 OK
    Validator-->>API: 10. Webhook endpoint valid
```

#### **Phase 2: Event Subscription Setup**
```mermaid
sequenceDiagram
    participant API as integration-service
    participant EventBus as Event Bus
    participant DB as MongoDB
    participant Admin as Admin User
    
    API->>DB: 11. Save webhook configuration
    API->>EventBus: 12. Subscribe to selected events
    Note over EventBus: user.verified, barcode.issued, redemption.completed
    
    API-->>Dashboard: 13. Webhook created successfully
    Dashboard->>Admin: 14. Show webhook details và test options
    Admin->>Dashboard: 15. Click "Test Webhook"
    Dashboard->>API: 16. POST /api/v1/integrations/webhooks/{id}/test
```

#### **Phase 3: Test và Activation**
```mermaid
sequenceDiagram
    participant API as integration-service
    participant External as HubSpot CRM
    participant Monitor as Webhook Monitor
    participant Admin as Admin User
    
    API->>External: 17. Send test event payload
    External-->>API: 18. Return webhook response
    API->>Monitor: 19. Log webhook delivery stats
    
    alt Test Successful
        API-->>Dashboard: 20. Test passed - webhook ready
        Admin->>Dashboard: 21. Click "Activate"
        Dashboard->>API: 22. PATCH /webhooks/{id} (active: true)
    else Test Failed
        API-->>Dashboard: 23. Test failed với error details
        Admin->>Dashboard: 24. Review và fix configuration
    end
```

### 9.7.4 Alternative Flows

#### **A1: External System Authentication Required**
```
A1.1. Webhook validation require OAuth2 authentication
A1.2. System redirect admin tới OAuth flow
A1.3. External system (HubSpot) show consent screen
A1.4. Admin authorize PSP access
A1.5. System receive access token và refresh token
A1.6. System store encrypted tokens
A1.7. Retry webhook validation với authenticated requests
A1.8. Continue với normal flow
```

#### **A2: Webhook URL không accessible**
```
A2.1. Validator receive timeout hoặc connection refused
A2.2. System suggest troubleshooting steps:
      - Check firewall settings
      - Verify URL format
      - Test network connectivity
A2.3. System offer "Skip validation" option với warning
A2.4. Admin có thể proceed với unvalidated webhook
A2.5. System mark webhook as "pending_validation"
A2.6. Background job retry validation every hour
```

### 9.7.5 Exception Flows

#### **E1: Webhook Delivery Failures**
```
E1.1. integration-service attempt webhook delivery
E1.2. External system return 500 error
E1.3. System retry với exponential backoff:
      - Retry 1: after 30 seconds
      - Retry 2: after 2 minutes  
      - Retry 3: after 10 minutes
E1.4. All retries failed
E1.5. System mark webhook as "failed"
E1.6. Send alert tới admin: "HubSpot webhook failing"
E1.7. System disable webhook after 24h of failures
```

#### **E2: Rate Limiting từ External System**
```
E2.1. External API return 429 Too Many Requests
E2.2. System parse Retry-After header (e.g., 3600 seconds)
E2.3. System queue webhook deliveries với appropriate delay
E2.4. System adjust delivery rate automatically
E2.5. Continue delivery sau rate limit period
```

### 9.7.6 Business Rules

| Rule ID | Mô tả | Implementation |
|---------|-------|----------------|
| BR-040 | Maximum 10 webhooks per tenant | Database constraint |
| BR-041 | Webhook timeout 30 seconds | HTTP client config |
| BR-042 | Maximum 3 retry attempts | Delivery logic |
| BR-043 | Failed webhooks auto-disabled after 24h | Background job |
| BR-044 | Webhook signatures required cho security | HMAC validation |

---

## 9.8 UC-007: Quản lý User Portal

### 9.8.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-007 |
| **Tên** | Quản lý User Portal |
| **Primary Actor** | End User |
| **Supporting Actors** | Customer Service |
| **Mục tiêu** | User tự quản lý profile, xem sampling history, track redemptions |
| **Phạm vi** | user-service, User Portal PWA |
| **Độ phức tạp** | Trung bình |
| **Tần suất** | 50-200 sessions/ngày per user |

### 9.8.2 Main Success Scenario

#### **Phase 1: Portal Access**
```mermaid
sequenceDiagram
    participant User as End User
    participant PWA as User Portal PWA
    participant Auth as auth-service
    participant UserAPI as user-service
    
    User->>PWA: 1. Access portal URL từ SMS/Email
    PWA->>Auth: 2. Validate magic link token
    Auth-->>PWA: 3. Token valid, user identified
    PWA->>UserAPI: 4. GET /api/v1/user-portal/dashboard
    UserAPI-->>PWA: 5. Return dashboard data
    PWA-->>User: 6. Show personalized dashboard
```

#### **Phase 2: View Sampling History**
```mermaid
sequenceDiagram
    participant User as End User
    participant PWA as User Portal PWA
    participant UserAPI as user-service
    participant Barcode as barcode-service
    
    User->>PWA: 7. Click "Lịch sử sampling"
    PWA->>UserAPI: 8. GET /api/v1/user-portal/samples
    UserAPI->>Barcode: 9. Get user's barcodes
    Barcode-->>UserAPI: 10. Return barcode list với status
    UserAPI-->>PWA: 11. Return formatted sample history
    PWA-->>User: 12. Display samples với status icons
```

### 9.8.3 Business Rules

| Rule ID | Mô tả |
|---------|-------|
| BR-050 | User chỉ access được own data |
| BR-051 | Magic links expire sau 24h |
| BR-052 | Consent withdrawal immediate effect |

---

## 9.9 UC-008: Xem Analytics và Export dữ liệu

### 9.9.1 Use Case Overview

| Thông tin | Chi tiết |
|-----------|----------|
| **ID** | UC-008 |
| **Tên** | Xem Analytics và Export dữ liệu |
| **Primary Actor** | Customer Account |
| **Supporting Actors** | Marketing Team, Data Analyst |
| **Mục tiêu** | View campaign performance và export data cho analysis |
| **Phạm vi** | analytics-service |
| **Độ phức tạp** | Trung bình |
| **Tần suất** | Daily dashboard views, weekly exports |

### 9.9.2 Main Success Scenario

#### **Phase 1: Dashboard Analytics**
```mermaid
sequenceDiagram
    participant User as Brand Manager
    participant Dashboard as Brand Dashboard
    participant Analytics as analytics-service
    participant Cache as Redis Cache
    
    User->>Dashboard: 1. Open campaign analytics
    Dashboard->>Analytics: 2. GET /api/v1/analytics/dashboard
    Analytics->>Cache: 3. Check cached results
    Cache-->>Analytics: 4. Cache miss
    Analytics->>Analytics: 5. Calculate funnel metrics
    Analytics->>Cache: 6. Cache results (TTL: 5 min)
    Analytics-->>Dashboard: 7. Return dashboard data
    Dashboard-->>User: 8. Display real-time metrics
```

### 9.9.3 Business Rules

| Rule ID | Mô tả |
|---------|-------|
| BR-060 | Data chỉ export với explicit consent |
| BR-061 | PII cần approval để export |
| BR-062 | Export files expire sau 7 days |

---

## 9.10 Use Case Testing Matrix

### 9.10.1 Test Coverage Requirements

| Use Case | Unit Tests | Integration Tests | E2E Tests | Performance Tests |
|----------|------------|-------------------|-----------|-------------------|
| UC-001 | ✅ 90% | ✅ API workflows | ✅ Full campaign creation | ✅ Concurrent campaigns |
| UC-002 | ✅ 85% | ✅ File upload flows | ✅ QR generation | ✅ Large file handling |
| UC-003 | ✅ 95% | ✅ Multi-service flow | ✅ Complete user journey | ✅ 1K concurrent users |
| UC-004 | ✅ 90% | ✅ POS integration | ✅ Redemption flow | ✅ High scan volume |
| UC-005 | ✅ 80% | ✅ Sync mechanisms | ✅ Conflict resolution | ✅ Batch processing |
| UC-006 | ✅ 85% | ✅ External APIs | ✅ Webhook delivery | ✅ Rate limiting |
| UC-007 | ✅ 75% | ✅ Portal APIs | ✅ User experience | ✅ Mobile performance |
| UC-008 | ✅ 85% | ✅ Data pipelines | ✅ Export generation | ✅ Large datasets |

### 9.10.2 Acceptance Test Scenarios

**High-Priority Scenarios (Must Pass):**
- ✅ End-to-end user journey (UC-003) hoàn thành trong <5 phút
- ✅ POS redemption (UC-004) xử lý trong <30 giây
- ✅ Offline sync (UC-005) resolve conflicts correctly
- ✅ Campaign creation (UC-001) với 10K barcodes thành công

**Medium-Priority Scenarios:**
- ✅ Webhook deliveries (UC-006) với 99% success rate
- ✅ Analytics export (UC-008) files generated trong <2 phút
- ✅ User Portal (UC-007) load times <3 giây

---

## 9.11 Use Case Summary & Dependencies

### 9.11.1 Critical Success Path

```mermaid
graph TB
    UC1[UC-001: Campaign Creation] --> UC2[UC-002: Ads Format]
    UC2 --> UC3[UC-003: User Journey]
    UC3 --> UC4[UC-004: POS Redemption]
    UC4 --> UC8[UC-008: Analytics]
    
    UC4 --> UC5[UC-005: Offline Sync]
    UC3 --> UC7[UC-007: User Portal]
    UC1 --> UC6[UC-006: Integrations]
    
    style UC3 fill:#e8f5e8
    style UC4 fill:#fff3e0
```

### 9.11.2 Use Case Metrics Summary

| Use Case | Success Rate Target | Performance Target | Business Impact |
|----------|--------------------|--------------------|-----------------|
| UC-001 | 95% completion | <2 min setup | Campaign launch speed |
| UC-002 | 90% upload success | <30s file processing | Marketing efficiency |
| UC-003 | 90% conversion | <5 min total time | User experience |
| UC-004 | 98% scan success | <30s redemption | Operational efficiency |
| UC-005 | 99% sync accuracy | <1h sync time | Data integrity |
| UC-006 | 95% delivery rate | <10s webhook | Integration reliability |
| UC-007 | 70% user engagement | <3s load time | User retention |
| UC-008 | 100% data accuracy | <30s dashboard | Business intelligence |

---

**Trạng thái tài liệu**: ✅ Hoàn thành Part09  
**Coverage**: 8 use cases chi tiết với flows, alternatives, exceptions  
**Dependencies**: Functional requirements (Part04), API design (Part08)  
**Người sở hữu**: Đội phân tích nghiệp vụ  
**Hành động tiếp theo**: Part10 - UI/UX Design & Wireframes

# 📘 Part10 - Giao diện & Wireframes (UI/UX Design)
**Đặc tả yêu cầu hệ thống (SRS) - Product Sampling Platform**

**Phiên bản**: 1.0  
**Ngày**: 2025-10-17  
**Tác giả**: Đội UX/UI Design  
**Trạng thái**: ✅ Hoàn thành  

---

## 10.1 Tổng quan thiết kế UI/UX

### 10.1.1 Nguyên tắc thiết kế

**Design Philosophy:**
- 🎯 **Mobile-First**: Thiết kế cho mobile trước, scale up cho desktop
- ⚡ **Performance-Oriented**: Tối ưu loading time và responsiveness
- 🔍 **Accessibility-Compliant**: WCAG 2.1 AA standards
- 🎨 **Brand-Consistent**: Consistent visual identity across platforms
- 📱 **Progressive Web App**: Native app experience trên web

**Core Design Principles:**

| Nguyên tắc | Mô tả | Implementation |
|------------|-------|----------------|
| **Simplicity** | Interface đơn giản, clear navigation | Minimal design, clear CTAs |
| **Consistency** | Consistent components across apps | Design system với reusable components |
| **Feedback** | Clear feedback cho user actions | Loading states, success/error messages |
| **Accessibility** | Usable by all users | Color contrast, keyboard navigation, screen readers |
| **Performance** | Fast loading và smooth interactions | Optimized images, lazy loading, caching |

### 10.1.2 Target Devices & Platforms

**Device Support Matrix:**

| Device Type | Screen Sizes | Primary Use Case | Design Priority |
|-------------|--------------|------------------|-----------------|
| **Mobile** | 375px - 414px | End user sampling journey | 🔴 Critical |
| **Tablet** | 768px - 1024px | POS staff operations | 🟡 High |
| **Desktop** | 1280px+ | Brand dashboard & admin | 🟡 High |
| **Large Screen** | 1920px+ | Analytics & reporting | 🟠 Medium |

**Browser Support:**
- Chrome 90+ (65% market share)
- Safari 14+ (20% market share)  
- Firefox 88+ (8% market share)
- Edge 90+ (5% market share)

---

## 10.2 Design System Foundation

### 10.2.1 Color Palette

**Primary Colors:**
```css
:root {
  /* Brand Colors */
  --primary-blue: #2563EB;      /* CTAs, links, brand elements */
  --primary-dark: #1E40AF;      /* Hover states, emphasis */
  --primary-light: #DBEAFE;     /* Backgrounds, subtle highlights */
  
  /* Semantic Colors */
  --success-green: #059669;     /* Success messages, completed states */
  --warning-orange: #D97706;    /* Warnings, pending states */
  --error-red: #DC2626;         /* Errors, failed states */
  --info-blue: #0284C7;         /* Information, neutral actions */
  
  /* Neutral Colors */
  --gray-900: #111827;          /* Primary text */
  --gray-700: #374151;          /* Secondary text */
  --gray-500: #6B7280;          /* Placeholder text */
  --gray-300: #D1D5DB;          /* Borders, dividers */
  --gray-100: #F3F4F6;          /* Background, disabled states */
  --white: #FFFFFF;             /* Backgrounds, cards */
}
```

**Color Usage Guidelines:**
- **Accessibility**: Minimum 4.5:1 contrast ratio cho text
- **Brand Recognition**: Primary blue cho all CTAs và brand elements
- **Status Indication**: Consistent semantic colors cho system states
- **Cultural Sensitivity**: Colors appropriate cho SEA markets

### 10.2.2 Typography Scale

**Font Hierarchy:**
```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px - Captions, labels */
--text-sm: 0.875rem;   /* 14px - Body text, secondary info */
--text-base: 1rem;     /* 16px - Primary body text */
--text-lg: 1.125rem;   /* 18px - Emphasized text */
--text-xl: 1.25rem;    /* 20px - Section headings */
--text-2xl: 1.5rem;    /* 24px - Page headings */
--text-3xl: 1.875rem;  /* 30px - Main headings */
--text-4xl: 2.25rem;   /* 36px - Hero text */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 10.2.3 Spacing System

**8-Point Grid System:**
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### 10.2.4 Component Library Specifications

#### **Button Component Interface**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  state: 'default' | 'loading' | 'disabled';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick: () => void;
  ariaLabel?: string;
}
```

#### **Input Component Interface**
```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'password' | 'number';
  label: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  pattern?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}
```

---

## 10.3 User Journey Flows

### 10.3.1 End User Sampling Journey

```mermaid
graph TB
    A[QR Code Scan] --> B[Landing Page]
    B --> C[Product Information]
    C --> D[Registration Form]
    D --> E[OTP Verification]
    E --> F[Barcode Display]
    F --> G[User Portal Access]
    
    D --> D1[Form Validation]
    E --> E1[OTP Retry]
    F --> F1[Save to Wallet]
    
    style A fill:#e8f5e8
    style F fill:#fff3e0
    style G fill:#e3f2fd
```

**Key Screens trong User Journey:**
1. **QR Scan Result** - Immediate product recognition
2. **Landing Page** - Product showcase với clear value prop
3. **Registration Form** - Minimal fields, smart validation
4. **OTP Verification** - Clear instructions, retry options
5. **Success Page** - Barcode display với next steps
6. **User Portal** - Self-service dashboard

### 10.3.2 Brand Dashboard Flow

```mermaid
graph TB
    A[Login] --> B[Dashboard Overview]
    B --> C[Campaign Management]
    B --> D[Analytics & Reports]
    B --> E[User Management]
    
    C --> C1[Create Campaign]
    C --> C2[Upload Ads Format]
    C --> C3[Manage Barcodes]
    
    D --> D1[Real-time Dashboard]
    D --> D2[Export Data]
    
    style B fill:#e3f2fd
    style D1 fill:#fff3e0
```

### 10.3.3 POS Staff Workflow

```mermaid
graph TB
    A[Staff Login] --> B[Scan Mode]
    B --> C[Barcode Validation]
    C --> D[Product Confirmation]
    D --> E[Redemption Complete]
    
    C --> C1[Invalid Barcode]
    C1 --> C2[Manual Override]
    
    B --> B1[Offline Mode]
    B1 --> B2[Queue for Sync]
    
    style B fill:#e8f5e8
    style E fill:#fff3e0
```

---

## 10.4 Mobile Landing Page Design

### 10.4.1 Landing Page Wireframe

```mermaid
graph TB
    subgraph "Mobile Landing Page (375px)"
        A[Header với Brand Logo]
        B[Hero Product Image - 200px height]
        C[Product Title - text-2xl bold]
        D[Value Proposition - 2-3 lines]
        E[Trust Indicators - security badges]
        F[CTA Button - Nhận mẫu miễn phí]
        G[Footer - Privacy policy links]
    end
    
    A --> B --> C --> D --> E --> F --> G
    
    style B fill:#e8f5e8
    style F fill:#fff3e0
```

**Landing Page Specifications:**

| Element | Specifications | Notes |
|---------|---------------|-------|
| **Header Height** | 64px | Fixed height, brand logo centered |
| **Hero Image** | 375x200px, 2x retina | WebP format, fallback to JPG |
| **CTA Button** | 48px height, full width | Primary color, prominent placement |
| **Loading Time** | <3 seconds on 3G | Image optimization critical |
| **Conversion Goal** | >90% form completion | A/B test different layouts |

### 10.4.2 Registration Form Design

**Form Layout Specifications:**
```css
.registration-form {
  max-width: 400px;
  padding: var(--space-6);
  gap: var(--space-4);
}

.form-field {
  margin-bottom: var(--space-4);
}

.input-field {
  height: 48px;           /* Touch-friendly */
  border-radius: 8px;     /* Modern appearance */
  border: 1px solid var(--gray-300);
  padding: 0 var(--space-4);
  font-size: var(--text-base);
}

.cta-button {
  height: 48px;
  border-radius: 8px;
  background: var(--primary-blue);
  color: var(--white);
  font-weight: var(--font-semibold);
  width: 100%;
}
```

**Form Fields Interface:**
```typescript
interface RegistrationForm {
  personalInfo: {
    fullName: string;        // Required, max 100 chars
    email: string;           // Required, email validation
    phoneNumber: string;     // Required, Vietnam format (+84)
    dateOfBirth?: Date;      // Optional, age verification
    gender?: 'M' | 'F' | 'Other';
  };
  
  preferences: {
    interests?: string[];    // Multi-select from predefined list
    dietaryRestrictions?: string[];
    marketingConsent: boolean;    // Required
    dataProcessingConsent: boolean; // Required
  };
  
  quiz?: {
    questions: QuizQuestion[];     // Campaign-specific
    responses: string[];
  };
}
```

---

## 10.5 Brand Dashboard Interface

### 10.5.1 Dashboard Layout Structure

```mermaid
graph TB
    subgraph "Desktop Dashboard (1280px+)"
        A[Top Navigation Bar - 64px]
        B[Sidebar Navigation - 240px width]
        C[Main Content Area]
        D[Right Panel - 320px]
    end
    
    subgraph "Main Content"
        C1[Page Header với breadcrumbs]
        C2[KPI Cards Row]
        C3[Charts và Analytics]
        C4[Data Tables]
    end
    
    A --> C1
    B --> C2
    C --> C2 --> C3 --> C4
    D --> C3
    
    style C2 fill:#e3f2fd
    style C3 fill:#fff3e0
```

**Layout Specifications:**
```css
.dashboard-layout {
  display: grid;
  grid-template-areas: 
    "sidebar header header"
    "sidebar main right-panel";
  grid-template-columns: 240px 1fr 320px;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.sidebar {
  grid-area: sidebar;
  background: var(--white);
  border-right: 1px solid var(--gray-200);
}

.main-content {
  grid-area: main;
  padding: var(--space-6);
  overflow-y: auto;
}
```

### 10.5.2 KPI Cards Interface

```typescript
interface KPICard {
  title: string;
  value: number | string;
  format: 'number' | 'currency' | 'percentage';
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: number;
    period: string;
  };
  status: 'success' | 'warning' | 'error' | 'neutral';
  icon?: IconName;
  clickable?: boolean;
  loading?: boolean;
}

// Example KPI Cards
const campaignKPIs: KPICard[] = [
  {
    title: "Total Scans",
    value: 15420,
    format: "number",
    trend: { direction: "up", value: 12.5, period: "vs last week" },
    status: "success",
    icon: "qr-code"
  },
  {
    title: "Conversion Rate", 
    value: 64.03,
    format: "percentage",
    trend: { direction: "down", value: 2.1, period: "vs last week" },
    status: "warning",
    icon: "trending-up"
  }
];
```

### 10.5.3 Navigation Menu Structure

```typescript
interface NavigationItem {
  id: string;
  label: string;
  icon: IconName;
  href?: string;
  children?: NavigationItem[];
  permissions?: string[];
  badge?: {
    text: string;
    variant: 'default' | 'success' | 'warning' | 'error';
  };
}

const navigationMenu: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Tổng quan',
    icon: 'home',
    href: '/dashboard'
  },
  {
    id: 'campaigns',
    label: 'Quản lý Campaign',
    icon: 'megaphone',
    children: [
      { id: 'campaigns-list', label: 'Danh sách Campaign', href: '/campaigns' },
      { id: 'campaigns-create', label: 'Tạo Campaign mới', href: '/campaigns/create' },
      { id: 'ads-formats', label: 'Ads Formats', href: '/campaigns/ads-formats' }
    ],
    permissions: ['campaign:read']
  },
  {
    id: 'analytics',
    label: 'Báo cáo & Analytics',
    icon: 'chart-bar',
    href: '/analytics',
    permissions: ['analytics:read']
  }
];
```

---

## 10.6 POS Interface Design

### 10.6.1 Mobile POS App Layout

```mermaid
graph TB
    subgraph "Tablet POS (768px)"
        A[Header với Location Info - 56px]
        B[Scanner View Area - 400px]
        C[Product Display Section]
        D[Action Buttons Row]
        E[Status Bar - 40px]
    end
    
    B --> B1[Camera Feed]
    B --> B2[Scan Overlay]
    C --> C1[Product Details]
    C --> C2[Customer Info]
    D --> D1[Confirm Button]
    D --> D2[Cancel Button]
    
    style B fill:#e8f5e8
    style D1 fill:#fff3e0
```

**POS Component Interface:**
```typescript
interface POSInterface {
  scanner: {
    startScan(): void;
    stopScan(): void;
    onScanResult: (barcode: string) => void;
    onScanError: (error: Error) => void;
  };
  
  display: {
    showProduct(product: ProductInfo): void;
    showCustomer(customer: CustomerInfo): void;
    showStatus(status: ScanStatus): void;
    showError(error: string): void;
  };
  
  actions: {
    confirmRedemption(): Promise<RedemptionResult>;
    cancelRedemption(): void;
    manualOverride(): void;
    contactSupport(): void;
  };
  
  offline: {
    isOnline: boolean;
    queueRedemption(data: OfflineRedemption): void;
    syncPending(): Promise<SyncResult>;
  };
}
```

### 10.6.2 Scan Interface States

**Scanner State Machine:**
```typescript
type ScannerState = 
  | 'idle'           // Waiting for scan
  | 'scanning'       // Camera active
  | 'validating'     // Checking barcode
  | 'success'        // Valid barcode found
  | 'error'          // Invalid barcode
  | 'offline';       // Network unavailable

interface ScannerStateConfig {
  idle: {
    message: "Hướng camera vào barcode";
    actions: ['startScan'];
  };
  scanning: {
    message: "Đang quét barcode...";
    actions: ['stopScan'];
  };
  validating: {
    message: "Đang kiểm tra...";
    actions: [];
  };
  success: {
    message: "Barcode hợp lệ";
    actions: ['confirm', 'cancel'];
  };
  error: {
    message: "Barcode không hợp lệ";
    actions: ['retry', 'manualEntry'];
  };
  offline: {
    message: "Chế độ offline";
    actions: ['offlineRedeem', 'retry'];
  };
}
```

---

## 10.7 User Portal PWA Design

### 10.7.1 Portal Navigation Structure

```mermaid
graph TB
    subgraph "User Portal PWA"
        A[Bottom Tab Navigation]
        B[Home Dashboard]
        C[My Samples]
        D[Notifications] 
        E[Profile Settings]
    end
    
    A --> B
    A --> C
    A --> D
    A --> E
    
    C --> C1[Active Samples]
    C --> C2[Redeemed History]
    C --> C3[Expired Samples]
    
    style B fill:#e3f2fd
    style C fill:#e8f5e8
```

**PWA Features Interface:**
```typescript
interface PWAFeatures {
  install: {
    isInstallable: boolean;
    promptInstall(): void;
    onInstallPrompt: (event: InstallPromptEvent) => void;
  };
  
  notifications: {
    requestPermission(): Promise<NotificationPermission>;
    subscribe(): Promise<PushSubscription>;
    showNotification(data: NotificationData): void;
  };
  
  offline: {
    isOnline: boolean;
    cacheStrategy: 'cache-first' | 'network-first';
    syncWhenOnline(): Promise<void>;
  };
  
  storage: {
    saveUserData(data: UserData): void;
    getUserData(): UserData | null;
    clearData(): void;
  };
}
```

### 10.7.2 Sample Card Component

```typescript
interface SampleCardProps {
  sample: {
    id: string;
    productName: string;
    productImage: string;
    campaignName: string;
    status: 'active' | 'redeemed' | 'expired';
    issuedAt: Date;
    expiryDate: Date;
    qrCodeUrl?: string;
    redemptionDetails?: {
      redeemedAt: Date;
      location: string;
    };
  };
  
  actions: {
    onViewQR?: () => void;
    onSaveToWallet?: () => void;
    onFindStore?: () => void;
    onReportIssue?: () => void;
  };
}
```

---

## 10.8 Responsive Design Specifications

### 10.8.1 Breakpoint System

```css
/* Breakpoint Definitions */
:root {
  --breakpoint-sm: 640px;   /* Small tablets */
  --breakpoint-md: 768px;   /* Large tablets */
  --breakpoint-lg: 1024px;  /* Small desktops */
  --breakpoint-xl: 1280px;  /* Large desktops */
  --breakpoint-2xl: 1536px; /* Extra large screens */
}

/* Media Query Mixins */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### 10.8.2 Component Responsive Behavior

| Component | Mobile (375px) | Tablet (768px) | Desktop (1280px) |
|-----------|----------------|----------------|------------------|
| **Navigation** | Bottom tabs | Side drawer | Top nav + sidebar |
| **KPI Cards** | Stacked | 2x2 grid | 4x1 row |
| **Data Tables** | Horizontal scroll | Responsive columns | Full table |
| **Forms** | Single column | Single column | Two columns |
| **Modals** | Full screen | Centered overlay | Centered overlay |

---

## 10.9 Accessibility Specifications

### 10.9.1 WCAG 2.1 AA Compliance

**Color Contrast Requirements:**
```css
/* Text Contrast Ratios */
.text-primary { color: var(--gray-900); }    /* 16.75:1 ratio */
.text-secondary { color: var(--gray-700); }  /* 8.67:1 ratio */
.text-muted { color: var(--gray-500); }      /* 4.54:1 ratio */

/* Button Contrast */
.btn-primary { 
  background: var(--primary-blue);   /* 7.12:1 ratio */
  color: var(--white);
}

.btn-secondary {
  background: var(--gray-100);       /* 12.63:1 ratio */
  color: var(--gray-900);
}
```

**Keyboard Navigation Interface:**
```typescript
interface AccessibilityFeatures {
  keyboard: {
    focusManagement: {
      trapFocus(element: HTMLElement): void;
      restoreFocus(): void;
      skipToContent(): void;
    };
    shortcuts: {
      'Ctrl+K': 'openSearch';
      'Esc': 'closeModal';
      'Tab': 'nextElement';
      'Shift+Tab': 'previousElement';
    };
  };
  
  screenReader: {
    ariaLabels: Record<string, string>;
    announcements: {
      announce(message: string, priority: 'polite' | 'assertive'): void;
      announcePageChange(title: string): void;
    };
  };
  
  reduced_motion: {
    respectsPreference: boolean;
    disableAnimations(): void;
    enableAnimations(): void;
  };
}
```

### 10.9.2 Screen Reader Support

**ARIA Labels Interface:**
```typescript
interface ARIALabels {
  buttons: {
    scan_barcode: "Quét mã barcode";
    confirm_redemption: "Xác nhận đổi hàng";
    cancel_action: "Hủy thao tác";
  };
  
  form_fields: {
    full_name: "Họ và tên đầy đủ";
    email_address: "Địa chỉ email";
    phone_number: "Số điện thoại";
  };
  
  status_messages: {
    loading: "Đang tải dữ liệu";
    success: "Thao tác thành công";
    error: "Có lỗi xảy ra";
  };
  
  navigation: {
    main_menu: "Menu chính";
    breadcrumb: "Đường dẫn trang";
    pagination: "Phân trang";
  };
}
```

---

## 10.10 Performance Optimization

### 10.10.1 Loading Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **First Contentful Paint** | <1.5s | Lighthouse audit |
| **Largest Contentful Paint** | <2.5s | Core Web Vitals |
| **Cumulative Layout Shift** | <0.1 | Layout stability |
| **First Input Delay** | <100ms | User interaction |
| **Time to Interactive** | <3s | Full page load |

### 10.10.2 Optimization Strategies

**Image Optimization Interface:**
```typescript
interface ImageOptimization {
  formats: {
    modern: 'webp' | 'avif';
    fallback: 'jpg' | 'png';
  };
  
  responsive: {
    breakpoints: number[];
    sizes: string;
    srcSet: string;
  };
  
  lazy_loading: {
    enabled: boolean;
    threshold: number;      // Pixels before loading
    placeholder: 'blur' | 'color';
  };
  
  compression: {
    quality: number;        // 0-100
    progressive: boolean;
    optimize: boolean;
  };
}
```

**Bundle Optimization:**
```typescript
interface BundleOptimization {
  code_splitting: {
    route_based: boolean;   // Split by pages
    component_based: boolean; // Split large components
    vendor_chunks: boolean; // Separate vendor libraries
  };
  
  tree_shaking: {
    enabled: boolean;
    side_effects: false;
  };
  
  compression: {
    gzip: boolean;
    brotli: boolean;
  };
  
  caching: {
    strategy: 'cache-first' | 'network-first';
    duration: number;       // Cache TTL in seconds
  };
}
```

---

## 10.11 Design System Implementation

### 10.11.1 Component Architecture

```typescript
interface DesignSystemAPI {
  components: {
    Button: ComponentInterface<ButtonProps>;
    Input: ComponentInterface<InputProps>;
    Card: ComponentInterface<CardProps>;
    Modal: ComponentInterface<ModalProps>;
    Table: ComponentInterface<TableProps>;
  };
  
  tokens: {
    colors: ColorTokens;
    typography: TypographyTokens;
    spacing: SpacingTokens;
    shadows: ShadowTokens;
  };
  
  themes: {
    light: Theme;
    dark: Theme;
    high_contrast: Theme;
  };
  
  utilities: {
    responsive: ResponsiveUtilities;
    accessibility: AccessibilityUtilities;
    animations: AnimationUtilities;
  };
}
```

### 10.11.2 Theme Configuration

```typescript
interface ThemeConfig {
  brand: {
    primary_color: string;
    secondary_color: string;
    logo_url: string;
    favicon_url: string;
  };
  
  layout: {
    max_width: string;
    sidebar_width: string;
    header_height: string;
    footer_height: string;
  };
  
  typography: {
    font_family_primary: string;
    font_family_secondary: string;
    base_font_size: string;
    line_height: number;
  };
  
  animation: {
    duration_fast: string;     // 150ms
    duration_normal: string;   // 300ms
    duration_slow: string;     // 500ms
    easing: string;           // ease-in-out
  };
}
```

---

## 10.12 Testing & Quality Assurance

### 10.12.1 UI Testing Requirements

**Visual Regression Testing Interface:**
```typescript
interface VisualTesting {
  screenshot_comparison: {
    browsers: ['chrome', 'firefox', 'safari'];
    viewports: [375, 768, 1280, 1920];
    threshold: number;      // Pixel difference tolerance
  };
  
  component_testing: {
    isolated_tests: boolean;  // Test components in isolation
    interaction_tests: boolean; // Test user interactions
    accessibility_tests: boolean; // Automated a11y testing
  };
  
  performance_testing: {
    lighthouse_audits: boolean;
    bundle_size_tracking: boolean;
    runtime_performance: boolean;
  };
}
```

### 10.12.2 Usability Testing Plan

**User Testing Scenarios:**
```typescript
interface UsabilityTest {
  target_users: {
    end_users: {
      demographics: 'ages 18-45, mobile-first users';
      scenarios: ['first-time sampling', 'return user'];
      success_criteria: '>90% task completion';
    };
    
    brand_managers: {
      demographics: 'marketing professionals';
      scenarios: ['campaign creation', 'analytics review'];
      success_criteria: '<5 min task completion';
    };
    
    store_staff: {
      demographics: 'retail workers, varying tech skills';
      scenarios: ['redemption processing', 'offline operations'];
      success_criteria: '<30s redemption processing';
    };
  };
  
  testing_methods: {
    moderated_sessions: boolean;
    unmoderated_testing: boolean;
    a_b_testing: boolean;
    heatmap_
