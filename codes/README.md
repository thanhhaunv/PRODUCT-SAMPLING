# 🎯 1. Sơ đồ Quan Hệ Giữa 6 Sub-Projects

```mermaid
graph TB
    subgraph "SHARED DATABASE"
        DB[(Central Database)]
        Redis[(Redis Cache)]
    end
    
    subgraph "Sub-Project 1: Identity & Auth"
        P1[Identity Service]
        P1API[Auth APIs + RBAC]
    end
    
    subgraph "Sub-Project 2: Campaign & QR"
        P2[Campaign Service]
        P2QR[QR Generation + Tracking]
    end
    
    subgraph "Sub-Project 3: Redemption & Fraud"
        P3[Redemption Service]
        P3ML[Fraud Detection ML]
    end
    
    subgraph "Sub-Project 4: Analytics & Intelligence"
        P4[Analytics Service]
        P4ML[A/B Testing + Recommendations]
    end
    
    subgraph "Sub-Project 5: Integration & Infrastructure"
        P5Gateway[API Gateway]
        P5Event[Event Bus]
        P5Notify[Notification Service]
        P5CRM[CRM Connectors]
        P5Infra[K8s + Monitoring]
    end
    
    subgraph "Sub-Project 6: PSP Unified Portal"
        P6Frontend[React Frontend App]
        P6Admin[Admin Portal]
        P6Brand[Brand Portal]
        P6POS[POS Portal]
        P6User[User Portal]
    end
    
    %% Database Connections
    P1 --> DB
    P2 --> DB
    P3 --> DB
    P4 --> DB
    P5Notify --> DB
    
    %% Cache Connections
    P1 --> Redis
    P3 --> Redis
    P5Gateway --> Redis
    
    %% Service Dependencies
    P2 -.->|"Get User Info"| P1
    P3 -.->|"Validate QR"| P2
    P3 -.->|"Check User"| P1
    P4 -.->|"Get Campaign Data"| P2
    P4 -.->|"Get User Behavior"| P1
    
    %% Event-Driven Communication
    P1 -.->|"User Events"| P5Event
    P2 -.->|"Campaign Events"| P5Event
    P3 -.->|"Redemption Events"| P5Event
    P5Event -.-> P4
    P5Event -.-> P5Notify
    
    %% Frontend to Backend Communication
    P6Frontend --> P5Gateway
    P6Admin -.->|"API Calls"| P1
    P6Admin -.->|"API Calls"| P4
    P6Brand -.->|"API Calls"| P2
    P6Brand -.->|"API Calls"| P4
    P6POS -.->|"API Calls"| P3
    P6POS -.->|"API Calls"| P1
    P6User -.->|"API Calls"| P1
    P6User -.->|"API Calls"| P2
    
    %% External Integrations
    P5CRM -.->|"Bi-directional Sync"| P2
    P5Notify -.->|"SMS/Email/Push"| P1
    
    %% Portal Internal Structure
    P6Admin --> P6Frontend
    P6Brand --> P6Frontend
    P6POS --> P6Frontend
    P6User --> P6Frontend
```

---

# 🎯 2. Mapping Chi Tiết Với SRS Document

## **Sub-Project 1: Identity & Authentication Service**

### **SRS Mapping:**
```bash
├── Part04 - Functional Requirements
│   ├── FR-003: User Authentication ✅
│   ├── FR-004: User Management ✅
│   └── FR-005: OTP Verification ✅
├── Part06 - Architecture Design
│   ├── 06.2.2: Identity Service ✅
│   └── 06B.2.1.1: IAuthService ✅
├── Part07 - Database Design
│   ├── 07.2.1: User Table ✅
│   ├── 07.2.2: Role Table ✅
│   └── 07.2.3: Session Table ✅
├── Part08 - API Design
│   ├── 08.1.1: Authentication APIs ✅
│   └── 08.1.2: User Management APIs ✅
```

### **Features Covered:**
- **6 RBAC Roles**: Platform Admin, Brand Admin, Brand Staff, Customer Account, Customer Guest, POS Staff
- **JWT + OTP**: Complete authentication flow
- **GDPR Compliance**: Data export/delete
- **Backend-only**: APIs cho Portal consumption

---

## **Sub-Project 2: Campaign & QR Management Service**

### **SRS Mapping:**
```bash
├── Part04 - Functional Requirements
│   ├── FR-001: Campaign Management ✅
│   ├── FR-002: Barcode Management ✅
│   └── FR-006: Ads Format Management ✅
├── Part06 - Architecture Design
│   ├── 06.2.2: Campaign Service ✅
│   └── 06B.2.1.2: ICampaignService ✅
├── Part07 - Database Design
│   ├── 07.3.1: Campaign Table ✅
│   ├── 07.3.2: Barcode Table ✅
│   └── 07.3.3: Ads_Format Table ✅
├── Part08 - API Design
│   ├── 08.2.1: Campaign APIs ✅
│   └── 08.2.2: Barcode APIs ✅
```

### **Features Covered:**
- **Campaign CRUD**: Complete lifecycle management
- **QR Generation**: với UTM tracking integration
- **Ads Format Templates**: Landing pages, banners, emails
- **Backend-only**: APIs cho Portal consumption

---

## **Sub-Project 3: Redemption & Fraud Detection Service**

### **SRS Mapping:**
```bash
├── Part04 - Functional Requirements
│   ├── FR-007: Barcode Redemption ✅
│   └── FR-011: Fraud Detection ✅
├── Part06 - Architecture Design
│   ├── 06.2.2: Redemption Service ✅
│   ├── 06.2.2: Fraud Service ✅
│   └── 06B.2.1.3: IRedemptionService ✅
├── Part07 - Database Design
│   ├── 07.4.1: Redemption Table ✅
│   ├── 07.4.2: Fraud_Score Table ✅
│   └── 07.4.3: Device_Fingerprint Table ✅
├── Part08 - API Design
│   ├── 08.3.1: Redemption APIs ✅
│   └── 08.3.2: Fraud Detection APIs ✅
├── Part09 - Integration
│   └── 09.2.1: Scandit SDK Integration ✅
```

### **Features Covered:**
- **Online/Offline Redemption**: Complete flow
- **Scandit SDK**: QR scanning capability
- **ML Fraud Detection**: Rules engine + scoring (0-100)
- **Device Fingerprinting**: Abuse prevention
- **Backend-only**: APIs cho Portal consumption

---

## **Sub-Project 4: Analytics & Intelligence Service**

### **SRS Mapping:**
```bash
├── Part04 - Functional Requirements
│   ├── FR-008: Real Time Analytics ✅
│   ├── FR-012: A/B Testing ✅
│   ├── FR-013: Recommendation Engine ✅
│   └── FR-014: Advanced Reporting ✅
├── Part06 - Architecture Design
│   ├── 06.2.2: Analytics Service ✅
│   ├── 06.2.2: Intelligence Service ✅
│   └── 06B.2.1.4: IAnalyticsService ✅
├── Part07 - Database Design
│   ├── 07.5.1: Analytics_Event Table ✅
│   ├── 07.5.2: AB_Test Table ✅
│   └── 07.5.3: Recommendation Table ✅
├── Part08 - API Design
│   ├── 08.4.1: Analytics APIs ✅
│   ├── 08.4.2: A/B Testing APIs ✅
│   └── 08.4.3: Recommendation APIs ✅
```

### **Features Covered:**
- **Real-time Dashboards**: Live metrics
- **A/B Testing Framework**: Statistical analysis
- **ML Recommendations**: Collaborative filtering
- **Custom Reporting**: Drag-and-drop builder
- **Backend-only**: APIs cho Portal consumption

---

## **Sub-Project 5: Integration & Infrastructure Service**

### **SRS Mapping:**
```bash
├── Part04 - Functional Requirements
│   ├── FR-009: CRM Integration ✅
│   └── FR-010: Notification System ✅
├── Part06 - Architecture Design
│   ├── 06.1.1: API Gateway ✅
│   ├── 06.1.2: Event Bus ✅
│   ├── 06.2.2: Notification Service ✅
│   └── 06B.2.1.5: INotificationService ✅
├── Part08 - API Design
│   ├── 08.5.1: Notification APIs ✅
│   └── 08.5.2: CRM Integration APIs ✅
├── Part09 - Integration
│   ├── 09.1.1: Twilio Integration ✅
│   ├── 09.1.2: HubSpot Integration ✅
│   └── 09.1.3: Salesforce Integration ✅
├── Part14 - Deployment Architecture
│   ├── 14.1: Kubernetes Setup ✅
│   ├── 14.2: Service Mesh (Istio) ✅
│   └── 14.3: Monitoring Stack ✅
├── Part15 - Infrastructure
│   ├── 15.1: Container Orchestration ✅
│   └── 15.2: CI/CD Pipelines ✅
```

### **Features Covered:**
- **API Gateway**: Kong/Express routing
- **Event Bus**: RabbitMQ/Kafka
- **Multi-channel Notifications**: SMS/Email/Push
- **CRM Bi-directional Sync**: HubSpot/Salesforce
- **Full Infrastructure**: K8s + Istio + Monitoring

---

## **Sub-Project 6: PSP Unified Portal** ⭐ NEW

### **SRS Mapping:**
```bash
├── Part10 - User Interface
│   ├── 10.1: Design System Foundation ✅
│   ├── 10.2: Admin Interface ✅
│   ├── 10.3: Admin Portal (User Management) ✅
│   ├── 10.4: Brand Portal (Campaign Management) ✅
│   ├── 10.5: User Portal (Customer Dashboard) ✅
│   ├── 10.6: Analytics Dashboard ✅
│   └── 10.8: UI Components ✅
├── Part02 - Technical Requirements
│   └── 02.8: Frontend Technology Stack ✅
├── Part05 - Security Requirements
│   └── 05.3: Frontend Security (XSS, CSRF) ✅
├── Part13 - Testing Strategy
│   ├── 13.2.1: Unit Testing (Components) ✅
│   ├── 13.2.2: Integration Testing (API) ✅
│   └── 13.2.3: E2E Testing (Workflows) ✅
```

### **Features Covered:**
- **4 Portal Applications**: Admin, Brand, POS, User interfaces
- **Unified Design System**: Consistent UI/UX across all portals
- **50+ UI Components**: Complete component library
- **Modern React Stack**: React 18 + TypeScript + Vite + Tailwind
- **API Integration**: RTK Query với 5 backend services
- **RBAC Frontend**: Role-based route và component protection
- **Real-time Features**: WebSocket integration cho live updates
- **PWA Support**: Mobile-optimized, installable application

---

# 🎯 3. Updated SRS Coverage Summary

## **100% Feature Coverage:**
| SRS Part | Coverage | Sub-Projects |
|----------|----------|-------------|
| **Part04 - Functional Requirements** | ✅ 14/14 Features | Projects 1-5 (Backend) |
| **Part06 - Architecture Design** | ✅ 7/7 Services | Projects 1-5 (Backend) |
| **Part07 - Database Design** | ✅ All tables | Shared DB strategy |
| **Part08 - API Design** | ✅ All endpoints | Projects 1-5 (Backend) |
| **Part09 - Integration** | ✅ All external APIs | Project 5 |
| **Part10 - User Interface** | ✅ All portals | **Project 6 (Frontend)** |
| **Part14 - Deployment** | ✅ Full K8s setup | Project 5 |

## **Architecture Benefits:**

### **🔄 Separation of Concerns:**
- **Backend (Projects 1-5)**: Pure API services, no UI concerns
- **Frontend (Project 6)**: Pure UI/UX, no business logic
- **Clear contracts**: RESTful APIs với OpenAPI specs

### **🚀 Development Benefits:**
- **Independent teams**: Backend vs Frontend teams
- **Faster development**: Parallel development possible
- **Technology flexibility**: Backend/Frontend tech stacks independent
- **Easier testing**: Separate test strategies
- **Better scaling**: Frontend và Backend scale independently

### **💼 Business Benefits:**
- **Consistent UX**: Single design system across all portals
- **Faster feature delivery**: Shared component library
- **Lower maintenance cost**: One frontend codebase vs 4 separate UIs
- **Better user adoption**: Professional, unified experience

## **Independent Testing Strategy:**
- **Project 1**: Mock external services, test auth flows
- **Project 2**: Mock auth service, test campaign workflows  
- **Project 3**: Mock campaign + auth, test redemption + fraud
- **Project 4**: Mock all services, test analytics + ML
- **Project 5**: Integration testing all services
- **Project 6**: Mock all backend APIs, test UI workflows + E2E

## **Development Timeline:**
```bash
Phase 1 (Parallel): Projects 1-5 Backend Development (8-12 weeks)
Phase 2 (Dependent): Project 6 Frontend Development (13-19 weeks)
Phase 3 (Integration): Full system integration testing (2-3 weeks)
Total Timeline: 15-22 weeks (4-6 months)
```

**Perfect enterprise microservices architecture! 6 independent sub-projects với clear separation, complete SRS coverage, và professional deployment strategy! 🚀**
