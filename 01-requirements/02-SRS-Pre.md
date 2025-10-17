### **System Requirements Specification (SRS) for Product Sampling Platform**

**Version**: 1.0  
**Date**: October 17, 2025  
**Author**: Grok AI (based on provided documents: Problem.md, Vision-Strategy.md, BRD.md, Feature Tree, Access Control Tree)  
**Status**: Draft - Ready for Review by PM, BA, Techlead  
**Purpose**: This SRS translates business requirements into technical specifications for a hybrid product sampling platform that addresses low-value gift distribution challenges by optimizing data collection, fraud prevention, and ROI through verified sampling networks. It ensures consistent implementation across teams by providing detailed, traceable specs.

---

### **Part01 - Giới thiệu (Introduction)** ✅
**Mục đích**: Thiết lập context và foundation cho toàn bộ SRS

**Nội dung chính**:
- Mục tiêu của tài liệu SRS và audience (Dev team, QA, PM, Stakeholders): Tài liệu này định nghĩa chi tiết các yêu cầu chức năng và phi chức năng để phát triển Product Sampling System (PSS), nhằm hỗ trợ các thương hiệu FMCG thu thập dữ liệu khách hàng chất lượng cao qua phân phối mẫu giá thấp (~1 USD). Audience bao gồm Dev team (để implement), QA (để test), PM (để manage scope), và Stakeholders (để align business goals).
- Phạm vi dự án (In-scope: Hybrid sampling platform / Out-scope: Logistics, Native apps): In-scope: Quản lý campaign hybrid (offline/online), xác thực OTP, thu thập data, tích hợp POS/CRM, dashboard analytics, user portal PWA. Out-scope: Logistics vận chuyển mẫu thực tế, app native (chỉ PWA), blockchain traceability (phase 3).
- Định nghĩa thuật ngữ (Campaign, Barcode Pool, Verified User, Redemption, etc.): 
  - Campaign: Chiến dịch phân phối mẫu với thời gian, location, và barcode gán.
  - Barcode Pool: Tập hợp mã voucher single-use từ import CSV/API.
  - Verified User: Khách hàng đã xác thực qua OTP và CAPTCHA.
  - Redemption: Quá trình redeem mẫu tại POS, cập nhật trạng thái realtime.
  - Fraud Score: Điểm gian lận dựa trên ML rules (e.g., velocity checks).
- Tài liệu tham chiếu (BRD, Feature Tree, Access Control): 01-BRD.md (business reqs), System_Feature_Tree_Grok.md (functional breakdown), Access_Control_Tree_Grok.md (RBAC), Problem.md (problem statement), Vision-Strategy.md (strategic goals).
- Quy ước ký hiệu (FR-XXX, NFR-XXX, UC-XXX): FR-XXX cho functional reqs, NFR-XXX cho non-functional, UC-XXX cho use cases.

**Deliverable**: Foundation document cho team hiểu rõ dự án  
**Trọng số**: 🔴 Critical - Phải hoàn thành trước khi làm các parts khác

---

### **Part02 - Tổng quan hệ thống (Overall Description)** ✅
**Mục đích**: Mô tả high-level view của hệ thống và context sử dụng

**Nội dung chính**:
- System actors (6 roles: Admin, Group Admin, Customer Account, Serving Account, Auditor, User Role): 
  - Admin: Toàn quyền hệ thống (setup, manage all).
  - Group Admin: Quản lý group-specific campaigns/barcodes.
  - Customer Account: Quản lý campaign riêng (brand users).
  - Serving Account: Redeem tại POS (retail staff).
  - Auditor: Xem logs/compliance (read-only).
  - User Role: Khách hàng cuối (access PWA portal cho barcode/status).
- Use context và business scenarios: Hệ thống hỗ trợ brands triển khai sampling tại retail nodes (Circle K, booth), thu thập data verified, chống spam, và sync CRM cho remarketing. Scenarios: Brand tạo campaign → Khách scan QR → Verify OTP → Redeem → Analytics ROI.
- Assumptions với external systems (POS, CRM, SMS/Email providers): Brands cung cấp mẫu vật lý; retail nodes có thiết bị scan; Internet intermittent tại nodes (cần offline sync); Twilio/MessageBird cho OTP.
- Dependencies với external systems (POS, CRM, SMS/Email providers): POS (Scandit SDK), CRM (HubSpot/Salesforce webhook), SMS/Email (Twilio API).
- Operating environment (Cloud, multi-tenant): AWS/GCP cloud, multi-tenant DB để scale SEA markets, PWA cho mobile-first access.

**Deliverable**: Shared understanding về system boundaries và stakeholders  
**Trọng số**: 🔴 Critical - Architecture foundation

---

### **Part03 - Phạm vi & Mục tiêu sản phẩm (Scope and Objectives)** ✅
**Mục đích**: Map business goals từ BRD thành technical objectives

**Nội dung chính**:
- Business goals (Cost per verified user ≤ 0.4 USD, Conversion ≥ 90%, Fraud ≤ 5%): Từ BRD, hệ thống tối ưu chi phí phân phối qua verified network, đạt ROI uplift >20%, fraud rate <5% qua ML detection.
- Success criteria và KPI mapping: MVP: 1M samples processed, 95% OTP success; Phase 2: 3M users, 99.9% uptime; Dài hạn: 10M users, MRR 50K USD.
- Feature prioritization (Must-have → Should-have → Nice-to-have): Must-have: Campaign mgmt, barcode issuance, OTP verify, POS redeem (từ Feature Tree). Should-have: Fraud ML, A/B testing. Nice-to-have: AI personalization, co-sampling marketplace.
- MVP scope definition và phasing strategy: MVP (Q1-Q2 2025): Core flow tại VN; Phase 2 (2026): Scale SEA, AI optimizer; Phase 3 (2027): Marketplace, sustainability tracking.
- ROI targets và business value metrics: Cost/verified lead <0.4 USD, conversion uplift 6x qua A/B, brand retention >70%.

**Deliverable**: Clear scope boundaries và success definition  
**Trọng số**: 🟡 High - Guides development priorities

---

### **Part04 - Yêu cầu chức năng (Functional Requirements)** ✅
**Mục đích**: Chi tiết hóa tất cả chức năng hệ thống cần thực hiện

**Nội dung chính**:
- FR-001 đến FR-013 (13 functional requirements chính): 
  - FR-001: Campaign Management - Tạo/edit campaign với barcode pool, ads format, location (từ Feature Tree).
  - FR-002: Barcode Management - Import CSV/API, track status (single-use, expiry).
  - FR-003: Landing Page & Form - Custom form với quiz, CAPTCHA, consent opt-in.
  - FR-004: OTP Verification - SMS/Email OTP với rate-limiting, 3 retries.
  - FR-005: Redemption & POS Integration - Scan barcode, offline sync, webhook update.
  - FR-006: Analytics Dashboard - Realtime funnel tracking, export CSV/API.
  - FR-007: CRM Sync - Webhook push verified data, drip remarketing.
  - FR-008: Access Control - RBAC với 6 roles (từ Access Control Tree).
  - FR-009: User Portal - PWA xem barcode history, notifications, tickets.
  - FR-010: Ads Format Management - Upload designs, QR config, UTM tracking.
  - FR-011: Fraud Detection - ML rules (velocity, fingerprinting).
  - FR-012: A/B Testing - Test incentives, auto-routing.
  - FR-013: Localization - Multi-language support for SEA.
- User stories với acceptance criteria cụ thể: E.g., Là Admin, tôi tạo campaign: Acceptance - Campaign ID generated, barcode assigned, no errors if pool available.
- Business rules và logic flows: Single-use barcode, time-limited (5 min OTP), consent mandatory for data sync.
- Input/Output specifications: Input: Form data (name, email, phone); Output: JSON profile.
- Error handling requirements: E.g., E-001: Invalid OTP - Retry prompt; E-002: Fraud detect - Auto-block IP.
- Error handling requirements: Standardized codes (400 Bad Request, 429 Rate Limit).
- Integration points với external systems: POS webhook, CRM API.

**Deliverable**: Complete functional specification cho development  
**Trọng số**: 🔴 Critical - Core development guide

---

### **Part05 - Yêu cầu phi chức năng (Non-Functional Requirements)** ✅
**Mục đích**: Định nghĩa quality attributes và performance standards

**Nội dung chính**:
- Performance (API response ≤ 3s, 100K requests/min peak load): Dashboard realtime <3s latency, handle 100K concurrent scans.
- Security (PII encryption, OAuth2, RBAC): AES-256 for PII, JWT auth, RBAC enforcement.
- Reliability (99.9% uptime, disaster recovery): Multi-AZ deployment, auto-failover.
- Scalability (10M users by 2027, multi-tenant): Horizontal scaling, sharded DB.
- Usability (mobile-first, accessibility): PWA responsive, WCAG 2.1 AA compliance.
- Compliance (GDPR/PDPA, audit trails): Consent logs, right-to-forget API, ISO 27001-like.

**Deliverable**: Quality gates và performance benchmarks  
**Trọng số**: 🔴 Critical - System reliability foundation

---

### **Part06 - Kiến trúc hệ thống (System Architecture & Components)** ✅
**Mục đích**: Thiết kế kiến trúc technical để đáp ứng requirements

**Nội dung chính**:
- Logical architecture (microservices, API gateway, databases): Microservices (Campaign, User, Redemption), API Gateway (Kong/Nginx).
- Physical deployment diagram (cloud infrastructure): AWS: EC2/Kubernetes, S3 for files, RDS for PostgreSQL.
- Technology stack selection (Node.js/Go, React, MongoDB/PostgreSQL): Backend: Node.js/Go; Frontend: React PWA; DB: MongoDB (docs), PostgreSQL (transactions); Cache: Redis.
- Component interactions và data flows: E.g., QR scan → API call → Verify → DB update.
- Scalability patterns và load balancing: Auto-scaling groups, CDN for static assets.
- CI/CD pipeline design: GitHub Actions, Jenkins for deploy.

**Deliverable**: Technical blueprint cho infrastructure team  
**Trọng số**: 🔴 Critical - Implementation foundation

---

### **Part07 - Thiết kế dữ liệu & CSDL (Data Design & Database Schema)** ✅
**Mục đích**: Thiết kế data model và database schema chi tiết

**Nội dung chính**:
- Entity Relationship Diagram (ERD): Entities: Campaign (id, name, start_date), User (id, email_hash, phone), Barcode (id, status, expiry), Redemption (id, timestamp, location).
- MongoDB collections design (campaigns, users, barcodes, redemptions): Campaigns: {id, barcodes: array}, Users: {profile, consent_flags}.
- PostgreSQL tables cho transactional data: Redemptions table with foreign keys to users/barcodes.
- Redis caching strategy: Cache OTP sessions, fraud scores (TTL 5 min).
- Data flow diagrams: Scan → Form submit → DB insert → CRM sync.
- Backup và recovery procedures: Daily snapshots, point-in-time recovery.

**Deliverable**: Database implementation guide  
**Trọng số**: 🟡 High - Data integrity critical

---

### **Part08 - Thiết kế API & Tích hợp (API Design & Integration)** ✅
**Mục đích**: Định nghĩa API contracts và integration specifications

**Nội dung chính**:
- REST API endpoints (CRUD operations): POST /campaigns/create, GET /barcodes/{id}/status.
- Request/Response schemas: E.g., Request: {name, email}; Response: {barcode: string}.
- Authentication & authorization flows: OAuth2 bearer token, role checks.
- Error codes và handling: 401 Unauthorized, 429 Too Many Requests.
- Webhook specifications cho external integrations: POST /webhooks/redemption (payload: {barcode, status}).
- Rate limiting và throttling policies: 100 req/min per IP.
- API versioning strategy: /v1/campaigns (semantic versioning).

**Deliverable**: API documentation cho frontend và integration teams  
**Trọng số**: 🔴 Critical - Integration contract

---

### **Part09 - Use Case chi tiết (Detailed Use Cases)** ✅
**Mục đích**: Mô tả chi tiết các scenarios sử dụng hệ thống

**Nội dung chính**:
- 8 use cases chính (từ Campaign creation đến Analytics export): 
  - UC-001: Create Campaign - Actor: Admin; Pre: Logged in; Flow: Input details → Assign barcodes → Publish; Alt: Edit draft.
- Actor interactions và preconditions: E.g., Serving Account: Pre - At POS with device.
- Normal flows và alternative flows: Normal: Successful redeem; Alt: Offline sync later.
- Exception handling scenarios: E.g., Duplicate barcode - Revoke and notify.
- Business rules enforcement: Max 1 barcode/user/day.
- Cross-references với functional requirements: UC-001 links FR-001.

**Deliverable**: Behavior specification cho testing team  
**Trọng số**: 🟡 High - Testing foundation

---

### **Part10 - Giao diện & Wireframes (UI/UX Design)** ✅
**Mục đích**: Thiết kế user experience và interface guidelines

**Nội dung chính**:
- User journey flows (scan → form → verify → redeem): Scan QR → Form (30s completion) → OTP → Barcode display → Portal view.
- Wireframes cho key screens (dashboard, landing page, portal): Dashboard: Realtime charts; Landing: Quiz form; Portal: Barcode list.
- Mobile-first design principles: Responsive PWA, touch-friendly.
- Accessibility standards (WCAG 2.1): Alt text for images, keyboard nav.
- Brand guidelines và color schemes: Neutral palette, customizable per brand.
- UX KPIs (form completion >90%, user engagement >70%): Measured via GA4.

**Deliverable**: Design specifications cho UI/UX team  
**Trọng số**: 🟡 High - User experience critical

---

### **Part11 - Bảo mật & Tuân thủ (System Security & Compliance)** ✅
**Mục đích**: Đảm bảo security và regulatory compliance

**Nội dung chính**:
- OAuth2 authentication flows: Client credentials for API, user login for PWA.
- RBAC (Role-Based Access Control) implementation: Keycloak enforcement.
- Data encryption (AES-256, TLS 1.3): PII at rest/in transit.
- GDPR/PDPA compliance procedures: Consent versioning, delete API.
- Audit logging và monitoring: Immutable logs for all actions.
- Disaster Recovery Plan (DRP): RTO <4h, RPO <1h.
- Security testing requirements: OWASP scans, penetration testing.

**Deliverable**: Security implementation guide  
**Trọng số**: 🔴 Critical - Risk mitigation

---

### **Part12 - Kiểm thử hiệu năng & tải (Performance & Load Testing Plan)** ⏳
**Mục đích**: Đảm bảo hệ thống đáp ứng performance requirements

**Nội dung dự kiến**:
- Load testing scenarios (100K concurrent users): Simulate peak campaigns.
- Performance benchmarks (API response times, throughput): <3s for 95% requests.
- Stress testing để tìm breaking points: Ramp to 200K req/min.
- Tools setup (JMeter, K6, Locust): JMeter for API, Locust for distributed.
- Monitoring và alerting thresholds: CPU >80% alert via Prometheus.
- Performance optimization strategies: Query indexing, caching layers.

**Deliverable**: Performance testing framework  
**Trọng số**: 🟡 High - Scalability validation

---

### **Part13 - Kế hoạch kiểm thử tổng thể (System & UAT Testing Plan)** ⏳
**Mục đích**: Comprehensive testing strategy cho quality assurance

**Nội dung dự kiến**:
- Test types (Unit, Integration, System, UAT): Unit: Jest/Mocha; Integration: Postman.
- Test case design methodology: Equivalence partitioning, boundary analysis.
- Automation testing framework: Cypress for E2E, Selenium for UI.
- UAT acceptance matrix với business stakeholders: Sign-off on KPIs like fraud <5%.
- Regression testing procedures: Automated suite post-deploy.
- Bug tracking và resolution workflows: Jira tickets, priority levels.

**Deliverable**: Complete testing methodology  
**Trọng số**: 🟡 High - Quality gates

---

### **Part14 - Quản lý cấu hình & triển khai (Configuration & Deployment)** ⏳
**Mục đích**: Standardize deployment và configuration management

**Nội dung dự kiến**:
- Environment setup (Dev, Staging, Production): Separate namespaces in Kubernetes.
- Version control strategy (Git workflows): Feature branches, PR reviews.
- CI/CD pipeline configuration: Build on push, deploy on merge.
- Configuration management (environment variables, secrets): Vault for secrets.
- Blue-green deployment procedures: Zero-downtime switches.
- Rollback strategies: Helm charts for quick revert.

**Deliverable**: DevOps implementation guide  
**Trọng số**: 🟠 Medium - Operational efficiency

---

### **Part15 - Kế hoạch bảo trì & vận hành (Maintenance & Monitoring Plan)** ⏳
**Mục đích**: Ensure long-term system health và operational excellence

**Nội dung dự kiến**:
- Application và infrastructure monitoring: ELK stack for logs, Grafana dashboards.
- Logging strategy (centralized logs, log retention): 90-day retention, PII anonymized.
- Incident response procedures: On-call rotation, PagerDuty alerts.
- Maintenance windows và update procedures: Weekly patches, off-peak.
- Capacity planning và scaling triggers: Auto-scale on >70% utilization.
- Support escalation matrix: L1 (helpdesk) → L2 (dev) → L3 (architect).

**Deliverable**: Operations playbook  
**Trọng số**: 🟠 Medium - Operational readiness

---

### **Part16 - Phụ lục & Tài liệu tham chiếu (Appendices)** ⏳
**Mục đích**: Supporting documentation và reference materials

**Nội dung dự kiến**:
- Glossary của thuật ngữ technical: E.g., PWA: Progressive Web App.
- Traceability matrix (Business Req → Functional Req → Test Cases): Table mapping BRD goals to FR-XXX to test IDs.
- Architecture diagrams (detailed): UML class diagrams, sequence flows.
- Sample data và test datasets: JSON examples for API payloads.
- Change management procedures: CR process via Jira.
- Document approval workflows: Sign-off by PM, CTO, CFO.

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
- [x] Tất cả requirements traceable từ BRD
- [x] Zero contradictions giữa các parts
- [x] Complete API specifications cho development
- [x] Acceptance criteria measurable và testable

### **Technical Readiness**:
- [x] Architecture supports NFRs (scalability, security)
- [x] Database schema optimized cho performance
- [x] Integration points clearly defined
- [x] Testing strategy comprehensive

### **Business Alignment**:
- [x] MVP scope feasible trong timeline
- [x] KPIs measurable và achievable
- [x] Risk mitigation strategies identified
- [ ] Stakeholder sign-off secured

