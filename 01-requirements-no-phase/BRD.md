# Business Requirements Document (BRD)
# PSP Product Sampling Platform

**Phiên bản**: 2.0 - Kiến trúc Microservices 🆕
**Ngày**: 20/10/2025 🆕
**Trạng thái**: Đã phê duyệt

---

## 📋 Lịch Sử Phiên Bản 🆕

| Phiên bản | Ngày | Thay đổi | Tác giả |
|-----------|------|----------|---------|
| 1.0 | 15/09/2025 | Phiên bản đầu với phương án theo giai đoạn | BRD Team |
| 2.0 🆕 | 20/10/2025 🆕 | **Chuyển sang kiến trúc microservices, phát triển tất cả tính năng đồng thời (6-9 tháng)** 🆕 | BRD Team 🆕 |

---

## 1. Tóm Tắt Điều Hành

PSP (Product Sampling Platform) là nền tảng quản lý chiến dịch sampling sản phẩm, được thiết kế với **kiến trúc microservices** 🆕 để đảm bảo khả năng scale, triển khai độc lập từng service và phát triển song song bởi nhiều teams. 🆕

Hệ thống bao gồm **7 independent services** 🆕 covering toàn bộ 14 tính năng từ core functionality đến advanced intelligence features, được phát triển đồng thời trong timeline **6-9 tháng**. 🆕

### Vấn Đề Kinh Doanh

Các thương hiệu FMCG gặp khó khăn trong việc:
- Quản lý campaigns sampling phân tán (Excel, email, manual tracking)
- Không có real-time visibility về campaign performance
- Fraud và abuse trong barcode redemption
- Không có integration với CRM systems hiện có

### Giải Pháp

PSP cung cấp unified platform với:
- ✅ Centralized campaign management
- ✅ Real-time analytics và reporting
- ✅ Fraud detection được hỗ trợ bởi ML 🆕
- ✅ Seamless CRM integration (HubSpot, Salesforce)
- ✅ Offline-first redemption (POS staff)
- ✅ A/B testing và personalized recommendations 🆕

### Lợi Ích Kinh Doanh

| Lợi Ích | Impact |
|---------|--------|
| **Giảm thời gian launch campaign** | Từ 2-3 tuần → 2-3 ngày |
| **Tăng redemption rate** | Từ 40% → 70%+ (với better targeting) |
| **Giảm fraud** | Từ 15% → <5% (ML fraud detection) 🆕 |
| **Tăng ROI** | 30-50% improvement (optimized campaigns với A/B testing) 🆕 |

---

## 2. Mục Tiêu Kinh Doanh

### 2.1. Mục Tiêu Chính

1. **Digitalize campaign management**
   - Centralized platform thay thế Excel/email workflows
   - Real-time visibility cho campaign performance
   - Target: 100% campaigns trên platform trong 6 tháng

2. **Tăng hiệu quả sampling**
   - Tối ưu targeting với personalized recommendations 🆕
   - A/B testing để improve conversion 🆕
   - Target: 70%+ redemption rate (từ 40% baseline)

3. **Giảm fraud và abuse**
   - ML-based fraud detection 🆕
   - Real-time blocking của suspicious users
   - Target: <5% fraud rate (từ 15% baseline)

4. **Seamless integration**
   - Bi-directional sync với CRM systems
   - POS integration cho redemption tracking
   - Target: 95%+ data accuracy

### 2.2. Success Metrics

**System Metrics**: 🆕
- Tất cả 7 services deployed và stable 🆕
- 99.9% uptime per service 🆕
- < 200ms API response time 🆕

**Business Metrics**:
- 100K+ users/campaign
- 10K concurrent active campaigns 🆕
- 95%+ barcode tracking accuracy
- < 2s dashboard load time
- 90%+ user satisfaction (NPS > 50)

**Advanced Features**: 🆕
- Fraud detection: <5% false positives 🆕
- A/B testing: 95%+ statistical confidence 🆕
- Recommendations: >10% CTR 🆕

---

## 3. Phạm Vi Dự Án

### 3.1. Trong Phạm Vi

**Phương Pháp Kiến Trúc**: 🆕
- ✅ **Kiến trúc microservices** từ ngày đầu 🆕
- ✅ **7 services độc lập** (Campaign Management, Identity, Redemption, Analytics, Notification, Fraud, Intelligence) 🆕
- ✅ **Database per service** pattern 🆕
- ✅ **Event-driven communication** (RabbitMQ/Kafka) 🆕
- ✅ **Service mesh** (Istio) cho observability 🆕
- ✅ **Independent deployment** per service 🆕

**Phạm Vi Tính Năng**: 🆕

Tất cả 14 tính năng được phát triển đồng thời: 🆕

**1. Tính Năng Cốt Lõi** (6 tính năng):
- Campaign Management (CRUD, lifecycle, scheduling)
- Barcode Management (generation, import, pools)
- User Authentication & Authorization (JWT, RBAC - 6 roles)
- User Management (profiles, consent, portal) 🆕
- OTP Verification (SMS, Email với rate limiting)
- Ads Format Management (templates, assets, A/B variants) 🆕

**2. Tính Năng Vận Hành** (4 tính năng):
- Barcode Redemption (online/offline, POS integration)
- Real-time Analytics (dashboards, funnel metrics, advanced analytics) 🆕
- CRM Integration (HubSpot, Salesforce bi-directional sync)
- Notification System (SMS, Email, Push notifications) 🆕

**3. Tính Năng Nâng Cao** (1 tính năng): 🆕
- Fraud Detection (rules engine, ML scoring, device fingerprinting) 🆕

**4. Tính Năng Thông Minh** (3 tính năng): 🆕
- A/B Testing (experiments, statistical analysis, winner declaration) 🆕
- Recommendation Engine (personalized campaigns, collaborative filtering) 🆕
- Advanced Reporting (custom report builder, scheduled reports, multiple formats) 🆕

### 3.2. Ngoài Phạm Vi

- ❌ Chức năng E-commerce
- ❌ Payment processing
- ❌ Inventory management
- ❌ Social media integration (chỉ templates cho social posts)

---

## 4. Stakeholders

### 4.1. Internal Stakeholders

| Role | Trách Nhiệm | Quyết Định |
|------|-------------|-----------|
| **Business Owner** | Phê duyệt budget, timeline | Final approval |
| **Product Manager** | Định nghĩa requirements, prioritization | Feature decisions |
| **Technical Lead** | Architecture design, tech decisions | Technology stack |
| **Development Teams** 🆕 | Service implementation | Implementation details 🆕 |
| **QA Team** | Testing strategy, quality assurance | Test coverage |
| **DevOps Team** 🆕 | Infrastructure, CI/CD, monitoring 🆕 | Deployment strategy 🆕 |

### 4.2. External Stakeholders

| Role | Interest | Involvement |
|------|---------|-------------|
| **Brand Admins** | Campaign management, analytics | Daily users |
| **Brand Staff** | Campaign operations | Daily users |
| **Customers** | Barcode claiming, redemption | End users |
| **POS Staff** | Barcode redemption at stores | Daily users |
| **CRM Vendors** | Data integration | Technical integration |

---

## 5. Business Requirements

### 5.1. Tổng Quan Functional Requirements

**Tổng cộng**: 14 tính năng trên 7 microservices 🆕

Chi tiết đầy đủ trong **System_Feature_Tree_Grok.md** và **Part04 - Functional Requirements** của SRS.

### 5.2. User Roles

Hệ thống hỗ trợ 6 user roles:

1. **Platform Admin**
   - Quyền: Full system access, manage tất cả brands
   - Use cases: System configuration, brand onboarding, platform monitoring

2. **Brand Admin**
   - Quyền: Manage campaigns/users/settings của brand riêng
   - Use cases: Campaign creation, analytics review, staff management

3. **Brand Staff**
   - Quyền: View/edit campaigns (không delete/publish)
   - Use cases: Campaign updates, report generation

4. **Customer Account**
   - Quyền: Registered user với login credentials
   - Use cases: Claim multiple campaigns, view history

5. **Customer**
   - Quyền: Anonymous/guest user (passwordless)
   - Use cases: One-time barcode claim

6. **POS Staff**
   - Quyền: Redeem barcodes tại stores
   - Use cases: Offline redemption, daily reports

---

## 6. Non-Functional Requirements

### 6.1. Performance

**Targets**:
- API response time: < 200ms (95th percentile)
- Dashboard load time: < 2 giây
- Barcode generation: 100K codes trong < 30 giây
- Service-to-service latency: < 50ms 🆕

### 6.2. Scalability

**Mục Tiêu**: 🆕
- Hỗ trợ **100K-500K users/ngày** 🆕
- Horizontal scaling per service 🆕
- Auto-scaling dựa trên load (Kubernetes HPA) 🆕
- Xử lý **10K campaigns đồng thời active** 🆕
- Process **5M events/ngày** (analytics service) 🆕

**Scalability Strategy**: 🆕
- **Campaign Management Service**: Scale theo số campaigns (target: 10K active)
- **Identity Service**: Scale theo số users (target: 500K active users)
- **Redemption Service**: Scale theo redemption traffic (target: 50K redemptions/day)
- **Analytics Service**: Scale theo event volume (target: 5M events/day)
- **Fraud Service**: Scale theo fraud checks (target: 100K checks/day)
- **Intelligence Service**: Scale theo recommendations (target: 1M recommendations/day)

### 6.3. Availability

**Service-Level Targets**: 🆕
- **Uptime per service**: 99.9% 🆕
- **Fault isolation**: Failure của 1 service không làm sập toàn hệ thống 🆕
- **Graceful degradation**: Core services được ưu tiên 🆕

**Disaster Recovery**: 🆕
- **RTO (Recovery Time Objective)**: 1 giờ 🆕
- **RPO (Recovery Point Objective)**: 15 phút 🆕
- **Backup frequency**: Database backups mỗi 6 giờ 🆕

### 6.4. Security

**Requirements**:
- JWT-based authentication (access token + refresh token)
- RBAC với 6 roles và granular permissions
- Data encryption at rest (AES-256) và in transit (TLS 1.3)
- GDPR/PDPA compliance (data export, right to be forgotten)
- Service-to-service authentication (mTLS) 🆕
- API Gateway security (rate limiting, DDoS protection) 🆕

### 6.5. Compliance

**Regulations**:
- **GDPR** (General Data Protection Regulation - EU)
  - User consent management
  - Data portability (export)
  - Right to be forgotten (soft delete)
  
- **PDPA** (Personal Data Protection Act - VN)
  - Consent tracking
  - Data retention policies
  - Audit trails

---

## 7. Technical Requirements

### 7.1. Tổng Quan Kiến Trúc 🆕

**Kiến Trúc Microservices**: 🆕

7 services độc lập, mỗi service có: 🆕
- ✅ Repository riêng 🆕
- ✅ Database riêng 🆕
- ✅ CI/CD pipeline riêng 🆕
- ✅ Independent deployment 🆕

**Communication Patterns**: 🆕
- **Synchronous**: REST APIs cho service-to-service calls 🆕
- **Asynchronous**: Event Bus (RabbitMQ/Kafka) cho event-driven workflows 🆕
- **Service Discovery**: Kubernetes DNS + Service Mesh (Istio) 🆕

### 7.2. Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Backend Services** | Node.js 18+, TypeScript 5+ | Async I/O, strong typing, team expertise |
| **Databases** | PostgreSQL 15+ (transactional), MongoDB 7+ (analytics) | Polyglot persistence, best tool for job |
| **Cache** | Redis 7+ | Session storage, OTP codes, API cache |
| **Message Queue** 🆕 | RabbitMQ / Kafka 🆕 | Event-driven communication 🆕 |
| **Service Mesh** 🆕 | Istio 🆕 | Traffic management, observability 🆕 |
| **API Gateway** 🆕 | Kong 🆕 | Routing, rate limiting, authentication 🆕 |
| **Orchestration** 🆕 | Kubernetes 🆕 | Container orchestration, auto-scaling 🆕 |
| **CI/CD** 🆕 | GitHub Actions, ArgoCD 🆕 | Per-service pipelines, GitOps 🆕 |
| **Monitoring** 🆕 | Prometheus, Grafana, Jaeger 🆕 | Metrics, dashboards, distributed tracing 🆕 |

### 7.3. Database Strategy 🆕

**Database per Service Pattern**: 🆕

Mỗi service owns dữ liệu riêng: 🆕

| Service | Database | Type | Schema |
|---------|----------|------|--------|
| Campaign Management | campaigns_db | PostgreSQL | campaigns, barcodes, barcode_pools, ads_formats |
| Identity | identity_db | PostgreSQL | users, auth, sessions, roles, consent_history |
| Redemption | redemptions_db | PostgreSQL | redemptions (partitioned by month) |
| Analytics | analytics_db | MongoDB | events, user_journey, cohorts, aggregations |
| Notification | - | Redis (queue) | notification_queue, otp_codes (TTL) |
| Fraud | fraud_db | PostgreSQL | fraud_scores, device_fingerprints, fraud_rules |
| Intelligence | intelligence_db | PostgreSQL + MongoDB | experiments, variants, recommendations, interactions |

**Data Consistency Strategy**: 🆕
- **No shared database** giữa services 🆕
- **Data replication** qua events (Event Sourcing) 🆕
- **Eventual consistency** model 🆕
- **CQRS** cho read-heavy operations 🆕

### 7.4. Infrastructure 🆕

**Cloud Provider**: AWS (hoặc GCP) 🆕

**Kubernetes Setup**: 🆕
- **Namespaces**: Mỗi service có namespace riêng 🆕
- **Deployments**: 3+ replicas per service (high availability) 🆕
- **Services**: ClusterIP cho internal, LoadBalancer cho external 🆕
- **Ingress**: Nginx Ingress Controller 🆕
- **Auto-scaling**: HPA (Horizontal Pod Autoscaler) 🆕

**Service Mesh (Istio)**: 🆕
- Traffic management (routing, load balancing) 🆕
- Security (mTLS, authorization) 🆕
- Observability (metrics, logs, traces) 🆕

---

## 8. User Experience Requirements

### 8.1. Admin Dashboard

**Target Users**: Platform Admin, Brand Admin, Brand Staff

**Requirements**:
- Responsive design (desktop, tablet - không mobile)
- Real-time data updates (WebSocket cho live metrics)
- Intuitive navigation (sidebar menu, breadcrumbs)
- Dark mode support 🆕
- Multi-language (EN, VI) 🆕

**Key Screens**:
- Dashboard overview (campaign stats, recent activities)
- Campaign management (list, create, edit, analytics)
- Barcode management (pools, import, generation)
- User management (list, roles, permissions)
- Analytics (funnel metrics, cohort analysis, custom reports) 🆕
- Fraud detection dashboard (alerts, suspicious users) 🆕

### 8.2. Landing Pages

**Target Users**: Customers (end-users)

**Requirements**:
- Mobile-first design (90%+ traffic từ mobile)
- Fast load times (< 2s)
- Responsive forms (multi-step với progress indicators)
- SEO optimized
- A/B testing support (multiple variants) 🆕

**Key Screens**:
- Campaign landing page (campaign info, claim form)
- Registration form (email/phone, OTP verification)
- Success page (barcode display, redemption instructions)
- Error pages (404, 500, campaign expired)

### 8.3. User Portal 🆕

**Target Users**: Customer Account 🆕

**Requirements**: 🆕
- PWA (Progressive Web App) support 🆕
- Offline-first (works without internet) 🆕
- Responsive design (mobile + desktop) 🆕
- Push notifications 🆕

**Key Screens**: 🆕
- Portal dashboard (overview, active barcodes) 🆕
- My Barcodes (list, filter by status, QR display) 🆕
- Consent Management (marketing, data processing toggles) 🆕
- Profile Settings (edit info, change password) 🆕
- Data Export (GDPR compliance) 🆕

---

## 9. Integration Requirements

### 9.1. External Integrations

**CRM Systems**:
- **HubSpot** (primary)
  - Contacts sync (PSP users → HubSpot contacts)
  - Activities sync (redemptions → HubSpot timeline)
  - Bi-directional sync (profile updates)
  
- **Salesforce** (enterprise)
  - Same sync capabilities as HubSpot
  - Custom object mapping

**Communication Providers**:
- **Twilio** (SMS)
  - OTP delivery
  - Transactional notifications
  - Delivery status webhooks
  
- **SendGrid** (Email)
  - OTP fallback
  - Marketing emails (với consent)
  - Email templates
  
- **Firebase** 🆕 (Push Notifications)
  - In-app notifications 🆕
  - Campaign reminders 🆕

**POS Systems**:
- Custom APIs (REST)
- Real-time redemption confirmation
- Transaction ID tracking

### 9.2. Internal Service Integration 🆕

**Service-to-Service Communication**: 🆕

Services giao tiếp qua: 🆕
- **REST APIs**: Synchronous calls (e.g., Campaign → Identity để validate user) 🆕
- **Event Bus**: Asynchronous events (e.g., CampaignCreatedEvent → Analytics) 🆕
- **Service Mesh**: Traffic management, load balancing, circuit breaking 🆕

**API Gateway Pattern**: 🆕
- Centralized entry point (Kong) 🆕
- Authentication & authorization 🆕
- Rate limiting per client 🆕
- Request routing đến services 🆕

---

## 10. Constraints và Assumptions

### 10.1. Constraints

**Budget**:
- Development: [To be determined]
- Infrastructure: ~$5K-10K/tháng (AWS/GCP) 🆕
- Third-party services: ~$2K/tháng (Twilio, SendGrid, Firebase) 🆕

**Timeline**: 🆕
- **Development**: 6-9 tháng (parallel development) 🆕
- **Testing & Rollout**: 2-3 tháng 🆕
- **Total**: 8-12 tháng 🆕

**Team Size**: 🆕
- **3 development teams** (~15 developers total) 🆕
  - Team A: 5 developers (Campaign, Redemption)
  - Team B: 5 developers (Identity, Notification)
  - Team C: 5 developers (Analytics, Fraud, Intelligence)
- **QA**: 3 testers
- **DevOps**: 2 engineers 🆕
- **Product**: 1 PM, 1 designer

**Infrastructure**:
- Cloud-based (AWS hoặc GCP preferred)
- Kubernetes cluster available 🆕
- CI/CD tools (GitHub Actions) 🆕

### 10.2. Assumptions

**Business Assumptions**:
- Brands có existing CRM systems (HubSpot/Salesforce)
- POS locations có internet connectivity (cho real-time redemption)
- Users có smartphones (cho QR code scanning)
- Brands willing to migrate từ Excel workflows

**Technical Assumptions**: 🆕
- Kubernetes infrastructure available và được support 🆕
- DevOps team có experience với microservices 🆕
- Development teams familiar với Node.js/TypeScript 🆕
- Network latency giữa services < 50ms 🆕

---

## 11. Risks và Mitigation

### 11.1. Technical Risks

| Risk | Impact | Probability | Mitigation | Status 🆕 |
|------|--------|-------------|------------|----------|
| **Microservices complexity** 🆕 | High 🆕 | Medium 🆕 | Invest in service mesh, comprehensive monitoring, team training 🆕 | Mitigated 🆕 |
| **Data consistency across services** 🆕 | High 🆕 | Medium 🆕 | Event sourcing, saga pattern, eventual consistency model 🆕 | Mitigated 🆕 |
| **Service discovery failures** 🆕 | Medium 🆕 | Low 🆕 | Kubernetes DNS + health checks, circuit breakers 🆕 | Mitigated 🆕 |
| **Inter-service latency** 🆕 | Medium 🆕 | Low 🆕 | Service mesh optimization, caching, async patterns 🆕 | Mitigated 🆕 |
| Third-party API downtime | Medium | Medium | Retry logic, fallback mechanisms, queue-based processing | Mitigated |
| Database performance | High | Medium | Indexes optimization, caching layer (Redis), read replicas | Mitigated |
| Peak load (campaign launch) | High | High | Auto-scaling (Kubernetes HPA), load testing, CDN | Mitigated 🆕 |

### 11.2. Business Risks

| Risk | Impact | Probability | Mitigation | Status |
|------|--------|-------------|------------|--------|
| Low user adoption | High | Medium | User training, onboarding program, change management | Active |
| Brand reluctance (CRM migration) | Medium | Medium | Phased rollout, maintain backward compatibility | Active |
| Fraud evolution | Medium | High | Continuous ML model training, rule updates 🆕 | Ongoing 🆕 |
| Data privacy compliance | High | Low | Legal review, GDPR/PDPA compliance audit | Mitigated |

### 11.3. Project Risks 🆕

| Risk | Impact | Probability | Mitigation | Status 🆕 |
|------|--------|-------------|------------|----------|
| **Parallel development coordination** 🆕 | High 🆕 | Medium 🆕 | Daily standups, clear service contracts, integration tests 🆕 | Active 🆕 |
| **Service integration issues** 🆕 | High 🆕 | Medium 🆕 | Contract testing, mock services, early integration testing 🆕 | Active 🆕 |
| **Timeline slippage** 🆕 | High 🆕 | Medium 🆕 | Agile sprints, buffer time, prioritization 🆕 | Active 🆕 |

---

## 12. Success Criteria

### 12.1. System-Level Success 🆕

- ✅ Tất cả 7 services deployed to production successfully 🆕
- ✅ 99.9% uptime per service trong 3 tháng đầu 🆕
- ✅ < 200ms API response time (95th percentile) 🆕
- ✅ Zero downtime deployments achieved 🆕
- ✅ < 50ms service-to-service latency 🆕
- ✅ Successful load testing (500K users/day) 🆕

### 12.2. Business-Level Success

- ✅ 100K+ users onboarded (trong 6 tháng)
- ✅ 10K+ campaigns created (trong 1 năm) 🆕
- ✅ 95%+ barcode tracking accuracy
- ✅ < 2s dashboard load time
- ✅ Successful CRM integration (HubSpot + Salesforce)
- ✅ 90%+ user satisfaction (NPS > 50)

### 12.3. Advanced Features Success 🆕

- ✅ **Fraud Detection**: 🆕
  - <5% false positive rate 🆕
  - >90% fraud catch rate 🆕
  - <1s fraud check latency 🆕

- ✅ **A/B Testing**: 🆕
  - 95%+ statistical confidence 🆕
  - 50+ experiments run (trong 6 tháng) 🆕
  - 20%+ conversion improvement (average) 🆕

- ✅ **Recommendations**: 🆕
  - >10% click-through rate 🆕
  - >5% conversion rate 🆕
  - 80%+ user engagement 🆕

- ✅ **Advanced Reporting**: 🆕
  - 80%+ adoption bởi Brand Admins 🆕
  - 100+ custom reports created 🆕

---

## 13. Timeline và Milestones 🆕

### 13.1. High-Level Timeline 🆕

**Tổng Timeline**: 8-12 tháng 🆕

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| **Phase 1: Foundation** 🆕 | Tháng 1-2 🆕 | Infrastructure setup, CI/CD, shared libraries 🆕 |
| **Phase 2: Parallel Development** 🆕 | Tháng 2-6 🆕 | All 7 services developed by 3 teams 🆕 |
| **Phase 3: Integration** 🆕 | Tháng 6-7 🆕 | Cross-service integration, E2E testing 🆕 |
| **Phase 4: Testing** 🆕 | Tháng 7-8 🆕 | Load testing, security audit, UAT 🆕 |
| **Phase 5: Staged Rollout** 🆕 | Tháng 8-10 🆕 | Service-by-service production deployment 🆕 |
| **Phase 6: Stabilization** 🆕 | Tháng 10-12 🆕 | Bug fixes, performance tuning, documentation 🆕 |

### 13.2. Key Milestones 🆕

| Milestone | Date | Success Criteria |
|-----------|------|------------------|
| **M1: Infrastructure Ready** 🆕 | Cuối tháng 2 🆕 | Kubernetes cluster, CI/CD, monitoring setup 🆕 |
| **M2: Core Services Beta** 🆕 | Cuối tháng 4 🆕 | Campaign, Identity, Redemption services functional 🆕 |
| **M3: All Services Complete** 🆕 | Cuối tháng 6 🆕 | 7 services developed, unit tested 🆕 |
| **M4: Integration Done** 🆕 | Cuối tháng 7 🆕 | Cross-service integration verified 🆕 |
| **M5: Production Rollout Start** 🆕 | Cuối tháng 8 🆕 | First services deployed to production 🆕 |
| **M6: Full Production** 🆕 | Cuối tháng 10 🆕 | All 7 services in production, stable 🆕 |
| **M7: Business Metrics Achieved** 🆕 | Cuối tháng 12 🆕 | 100K+ users, 10K+ campaigns 🆕 |

---

## 14. Budget Estimate 🆕

### 14.1. Development Costs 🆕

| Item | Cost | Notes |
|------|------|-------|
| **Development Team** 🆕 | [TBD] 🆕 | 15 developers x 9 months 🆕 |
| **QA Team** 🆕 | [TBD] 🆕 | 3 testers x 6 months 🆕 |
| **DevOps Team** 🆕 | [TBD] 🆕 | 2 engineers x 9 months 🆕 |
| **Product & Design** 🆕 | [TBD] 🆕 | 1 PM + 1 designer x 9 months 🆕 |

### 14.2. Infrastructure Costs 🆕

| Item | Monthly Cost 🆕 | Annual Cost 🆕 |
|------|----------------|---------------|
| **AWS/GCP Infrastructure** 🆕 | $5K-10K 🆕 | $60K-120K 🆕 |
| - Kubernetes cluster (EKS/GKE) 🆕 | $2K-3K 🆕 | $24K-36K 🆕 |
| - Databases (RDS, MongoDB Atlas) 🆕 | $2K-4K 🆕 | $24K-48K 🆕 |
| - Load balancers, CDN 🆕 | $1K-2K 🆕 | $12K-24K 🆕 |
| - Monitoring (Datadog/New Relic) 🆕 | $500-1K 🆕 | $6K-12K 🆕 |

### 14.3. Third-Party Services 🆕

| Service | Monthly Cost 🆕 | Annual Cost 🆕 | Notes |
|---------|----------------|---------------|-------|
| **Twilio (SMS)** 🆕 | $1K-2K 🆕 | $12K-24K 🆕 | Based on 100K OTPs/month |
| **SendGrid (Email)** 🆕 | $500-1K 🆕 | $6K-12K 🆕 | 500K emails/month |
| **Firebase (Push)** 🆕 | $200-500 🆕 | $2.4K-6K 🆕 | Push notifications |
| **CRM APIs** 🆕 | Free-$500 🆕 | $0-6K 🆕 | HubSpot/Salesforce API calls |
| **ML Platform** 🆕 | $300-500 🆕 | $3.6K-6K 🆕 | Fraud detection, recommendations |
| **Total** 🆕 | **$2K-4.5K** 🆕 | **$24K-54K** 🆕 | |

### 14.4. Total Budget Estimate 🆕

| Category | Cost Range 🆕 |
|----------|--------------|
| **Development** (one-time) 🆕 | [TBD based on team rates] 🆕 |
| **Infrastructure** (annual) 🆕 | $60K-120K 🆕 |
| **Third-party Services** (annual) 🆕 | $24K-54K 🆕 |
| **Total Annual Operating Cost** 🆕 | **$84K-174K** 🆕 |

---

## 15. Dependencies

### 15.1. Internal Dependencies

**Teams**:
- **Development Teams (3)**: Service implementation 🆕
- **QA Team**: Testing strategy và execution
- **DevOps Team**: Infrastructure setup, CI/CD 🆕
- **Product Team**: Requirements clarification, prioritization
- **Design Team**: UI/UX design cho admin dashboard, landing pages, portal 🆕

**Systems**:
- Kubernetes cluster (AWS EKS hoặc GCP GKE) 🆕
- CI/CD platform (GitHub Actions)
- Monitoring platform (Prometheus, Grafana) 🆕

### 15.2. External Dependencies

**Third-party Services**:
- Twilio account và API access
- SendGrid account và API access
- Firebase project setup 🆕
- HubSpot/Salesforce API credentials

**Vendors**:
- CRM vendors (technical integration support)
- POS system vendors (API documentation)
- Cloud provider (AWS/GCP support)

---

## 16. Change Management

### 16.1. User Training

**Target Users**: Brand Admins, Brand Staff, POS Staff

**Training Plan**:
- **Documentation**: User manuals, video tutorials
- **Webinars**: Live training sessions (2-3 sessions)
- **Onboarding**: Hands-on workshops cho mỗi brand
- **Support**: Dedicated support team trong 3 tháng đầu

### 16.2. Migration Strategy

**From Excel/Email to PSP**:

**Phase 1: Pilot** (Tháng 1-2)
- Chọn 2-3 brands pilot
- Migrate existing campaigns
- Collect feedback, iterate

**Phase 2: Gradual Rollout** (Tháng 3-6)
- Onboard 10-20 brands/tháng
- Parallel run (Excel + PSP) trong 1 tháng
- Monitor adoption metrics

**Phase 3: Full Migration** (Tháng 6+)
- All brands trên PSP
- Deprecate Excel workflows
- 100% campaign management via platform

---

## 17. Quality Assurance

### 17.1. Testing Strategy

**Test Levels**:

1. **Unit Testing**
   - Target: >80% code coverage per service 🆕
   - Tools: Jest, Mocha
   - Responsibility: Development teams

2. **Integration Testing**
   - Target: All service-to-service interactions tested 🆕
   - Tools: Postman, Supertest
   - Responsibility: Development teams + QA

3. **End-to-End Testing**
   - Target: All critical user flows automated
   - Tools: Playwright, Cypress
   - Responsibility: QA team

4. **Load Testing** 🆕
   - Target: 500K users/day, 10K concurrent campaigns 🆕
   - Tools: k6, JMeter 🆕
   - Responsibility: DevOps + QA 🆕

5. **Security Testing**
   - Target: Zero critical vulnerabilities
   - Tools: OWASP ZAP, Snyk
   - Responsibility: External security firm

### 17.2. Quality Gates

Mỗi service phải pass các gates trước khi deploy production: 🆕

- ✅ >80% unit test coverage 🆕
- ✅ Zero critical bugs
- ✅ All integration tests pass 🆕
- ✅ Performance benchmarks met (<200ms API response) 🆕
- ✅ Security scan pass (no critical vulnerabilities)
- ✅ Code review approved (2+ reviewers)

---

## 18. Monitoring và Maintenance

### 18.1. Monitoring Strategy 🆕

**Infrastructure Monitoring** (Prometheus + Grafana): 🆕
- CPU, memory, disk usage per service 🆕
- Network latency between services 🆕
- Pod health, restart counts 🆕

**Application Monitoring** (APM): 🆕
- API response times per endpoint 🆕
- Error rates per service 🆕
- Database query performance 🆕

**Business Metrics** (Custom dashboards):
- Active campaigns count
- Daily user registrations
- Redemption rates
- Fraud detection alerts 🆕
- A/B test results 🆕

**Distributed Tracing** (Jaeger): 🆕
- End-to-end request tracing across services 🆕
- Latency analysis 🆕
- Bottleneck identification 🆕

**Logging** (ELK Stack): 🆕
- Centralized logging từ tất cả services 🆕
- Log aggregation và search 🆕
- Error tracking và alerting 🆕

### 18.2. Alerting

**Critical Alerts** (PagerDuty/Opsgenie): 🆕
- Service down (health check failed) 🆕
- Database connection errors 🆕
- High error rates (>5% trong 5 phút) 🆕
- API response time >500ms 🆕

**Warning Alerts** (Slack):
- High CPU/memory usage (>80%)
- Slow queries (>1s)
- Queue backlog (>1000 messages)
- Failed fraud checks spike 🆕

### 18.3. Maintenance Plan

**Regular Maintenance**:
- **Weekly**: Dependency updates (security patches)
- **Monthly**: Database optimization (index rebuild, vacuum)
- **Quarterly**: Infrastructure review, cost optimization 🆕
- **Annually**: Security audit, penetration testing

**On-demand Maintenance**:
- Hotfix deployments (critical bugs)
- Scaling adjustments (traffic spikes)
- Schema migrations 🆕

---

## 19. Documentation

### 19.1. Technical Documentation

**Required Documents**:
- ✅ **System Architecture Document** (Part06 của SRS) 🆕
- ✅ **API Documentation** (OpenAPI specs per service) 🆕
- ✅ **Database Schema Documentation** (Part07 của SRS)
- ✅ **Deployment Guides** (Kubernetes manifests, CI/CD) 🆕
- ✅ **Runbooks** (troubleshooting guides per service) 🆕
- ✅ **ADRs** (Architecture Decision Records) 🆕

### 19.2. User Documentation

**Required Documents**:
- User Manuals (per role: Platform Admin, Brand Admin, Brand Staff, POS Staff)
- Video Tutorials (campaign creation, analytics, redemption)
- FAQ (common questions và troubleshooting)
- API Documentation (cho external integrations)

### 19.3. Business Documentation

**Required Documents**:
- **BRD** (Business Requirements Document - this document)
- **SRS** (Software Requirements Specification)
- **Test Plans** (QA strategy, test cases)
- **Training Materials** (onboarding decks, workshops)

---

## 20. Approval

### 20.1. Sign-off Requirements

Document này requires approval từ các stakeholders sau:

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Business Owner** | [Name] | _________ | _____ |
| **Product Manager** | [Name] | _________ | _____ |
| **Technical Lead** | [Name] | _________ | _____ |
| **QA Lead** | [Name] | _________ | _____ |
| **DevOps Lead** 🆕 | [Name] 🆕 | _________ 🆕 | _____ 🆕 |
| **Security Lead** | [Name] | _________ | _____ |

### 20.2. Change Control

Mọi thay đổi major đối với scope, timeline hoặc budget phải được approved bởi Business Owner và documented trong Change Log.

**Change Request Process**: 🆕
1. Submit change request (CR) với rationale
2. Impact analysis (scope, timeline, cost)
3. Stakeholder review
4. Approval/rejection decision
5. Update documents nếu approved

---

## 21. Glossary

| Thuật Ngữ | Định Nghĩa |
|-----------|------------|
| **Microservices** 🆕 | Kiến trúc software với nhiều services độc lập, loosely coupled 🆕 |
| **Service Mesh** 🆕 | Infrastructure layer quản lý service-to-service communication 🆕 |
| **Event Bus** 🆕 | Message broker cho asynchronous event-driven communication 🆕 |
| **Polyglot Persistence** 🆕 | Sử dụng nhiều loại database khác nhau cho different services 🆕 |
| **CQRS** 🆕 | Command Query Responsibility Segregation - pattern tách read/write operations 🆕 |
| **Campaign** | Chương trình sampling được tạo bởi brands |
| **Barcode** | Mã unique (QR/Code128/DataMatrix) issued cho users |
| **Redemption** | Hành động sử dụng barcode tại POS để claim product sample |
| **OTP** | One-Time Password cho email/phone verification |
| **RBAC** | Role-Based Access Control |
| **Fraud Score** 🆕 | ML-generated score (0-100) indicating fraud likelihood 🆕 |
| **A/B Test** 🆕 | Experiment comparing campaign variants 🆕 |
| **Recommendation** 🆕 | ML-generated campaign suggestions 🆕 |
| **Ads Format** 🆕 | Templates cho campaign assets 🆕 |

---

## 22. Appendices

### Appendix A: Service Catalog 🆕

Chi tiết đầy đủ về 7 services trong **System_Feature_Tree_Grok.md**.

### Appendix B: User Stories

Chi tiết đầy đủ user stories cho 14 tính năng trong **Part04 - Functional Requirements** của SRS.

### Appendix C: Wireframes

UI/UX designs trong **Part10 - UI/UX Design** của SRS.

### Appendix D: API Specifications

OpenAPI specs cho mỗi service trong **Part08 - API Design** của SRS.

### Appendix E: Database Schema 🆕

ERD và detailed schemas trong **Part07 - Database Design** của SRS.

---

## 23. References

**Internal Documents**:
- System_Feature_Tree_Grok.md (Version 2.0) 🆕
- 02-SRS-V2.md (Software Requirements Specification)
- Access_Control_Tree_Grok.md (RBAC roles & permissions)
- Problem.md (Problem statement & solution overview)

**External References**:
- Microservices Architecture Patterns (Martin Fowler) 🆕
- Domain-Driven Design (Eric Evans) 🆕
- Kubernetes Documentation (kubernetes.io) 🆕
- Istio Service Mesh Documentation (istio.io) 🆕
- GDPR Compliance Guidelines
- PDPA Compliance Guidelines (Vietnam)

---

## 24. Document Control

**Document Information**:
- **Title**: Business Requirements Document - PSP Platform
- **Version**: 2.0 - Microservices Architecture 🆕
- **Status**: Đã phê duyệt
- **Created**: 15/09/2025
- **Last Updated**: 20/10/2025 🆕
- **Next Review**: 20/11/2025 🆕

**Distribution List**:
- Business Owner
- Product Manager
- Technical Lead
- Development Teams (3) 🆕
- QA Team
- DevOps Team 🆕
- Design Team

**Version Control**:
- Stored in: [Git repository URL]
- Change tracking: Git commits
- Review cycle: Monthly

---

## 25. Contact Information

**Document Owner**:
- **Name**: Product Manager
- **Email**: pm@psp.vn
- **Phone**: [Phone number]

**Technical Contact**:
- **Name**: Technical Lead
- **Email**: techlead@psp.vn
- **Phone**: [Phone number]

**Business Contact**:
- **Name**: Business Owner
- **Email**: business@psp.vn
- **Phone**: [Phone number]

**Support**:
- **Email**: support@psp.vn
- **Slack**: #psp-project 🆕
- **Project Management**: [Jira/Asana URL]

---

**KẾT THÚC BUSINESS REQUIREMENTS DOCUMENT**

**Phiên bản**: 2.0 - Kiến trúc Microservices 🆕
**Tổng Số Trang**: [Auto-generated]
**Tổng Số Services**: 7 microservices 🆕
**Tổng Số Tính Năng**: 14 features 🆕
**Timeline**: 6-9 tháng development 🆕

---

© 2025 PSP Platform. All rights reserved.
