# 📋 REQUIREMENTS LAYER — OVERVIEW & TRACEABILITY MAP

> **Purpose:**  
> Thư mục `01-requirements/` là **nền tảng cốt lõi** của toàn bộ dự án **Product Sampling System**.  
> Đây là nơi chuyển hóa **tầm nhìn và chiến lược (Vision & Strategy)** thành **yêu cầu cụ thể có thể triển khai được** cho đội phát triển, QA, thiết kế và vận hành.  

---

## 🧭 Relationship with Previous Layers (00-vision/)

Các tài liệu trong `01-requirements/` **không tồn tại độc lập**, mà kế thừa và chiếu xạ từ các tài liệu chiến lược cấp cao ở thư mục `00-vision/`:

| Vision Layer File | Mối quan hệ / Dữ liệu được kế thừa | Cách sử dụng trong Requirements |
|--------------------|------------------------------------|--------------------------------|
| **00-vision/Vision_Strategy_Document.md** | Cung cấp tầm nhìn, sứ mệnh, thị trường mục tiêu, lợi thế cạnh tranh, định hướng sản phẩm. | Trích xuất phần *Product Vision Statement* và *Strategic Goals* để đưa vào phần *Executive Summary* của BRD. |
| **00-vision/Investor_Summary_Deck.pptx** | Định hướng kỳ vọng của nhà đầu tư, các KPI tài chính, thị trường đích. | Sử dụng để xác định *Business Objective* và *Success Metrics* trong BRD. |
| **00-vision/KPI_Financials.md** & **.xlsx** | Cung cấp mô hình KPI, forecast doanh thu và chi phí. | Dùng để lập bảng *Business Metrics & KPIs* trong BRD, và xác định các *Non-Functional Requirements (NFRs)* trong SRS (ví dụ: uptime, performance, scalability). |

→ **Kết luận:** Mỗi tài liệu trong thư mục `01-requirements/` phải **tham chiếu ngược (back-reference)** đến các nguồn ở `00-vision/` để đảm bảo mọi yêu cầu đều “traceable lên chiến lược cấp cao”.

---

## 🗂️ File Overview & Detailed Responsibilities

### 1️⃣ **01-BRD.md — Business Requirements Document**
**Owner:** Product Owner / BA Lead  
**Purpose:** Mô tả bức tranh tổng thể “vì sao hệ thống này cần tồn tại”.  
Đây là tài liệu **nói ngôn ngữ kinh doanh**, không đi sâu kỹ thuật.

**Phần nội dung chính:**
1. Executive Summary (mục tiêu & bối cảnh)
2. Business Goals & Objectives (đồng bộ với `Vision_Strategy_Document.md`)
3. Market Pain Points & Opportunity Analysis
4. Stakeholders & Roles
5. Business Scope / Out of Scope
6. Business Process Flows (mô tả nghiệp vụ: phát quà, thu thập data, xác thực, báo cáo)
7. Success Metrics & KPIs (liên kết với `KPI_Financials.md`)
8. Dependencies (ví dụ: cần API CRM, SMS gateway)
9. Risks & Mitigation

**Deliverable:** BRD v1.0 được duyệt trước khi chuyển sang phân tích kỹ thuật (SRS).  
**References:** `Vision_Strategy_Document.md`, `KPI_Financials.xlsx`, `Market_Analysis.md`.

---

### 2️⃣ **02-SRS.md — System Requirements Specification**
**Owner:** Solution Architect / System Analyst  
**Purpose:** Biến các yêu cầu kinh doanh trong BRD thành **yêu cầu hệ thống cụ thể và có thể code được**.  
Tài liệu theo chuẩn IEEE 830.

**Phần nội dung chính:**
1. Introduction (mục đích, phạm vi)
2. Overall Description (context diagram, actor overview)
3. Functional Requirements  
   - Module: Campaign Management  
   - Module: Barcode Management  
   - Module: User Verification (OTP)  
   - Module: CRM/Ad Integration  
   - Module: Reporting Dashboard
4. Non-Functional Requirements  
   - Performance, Scalability, Uptime  
   - Data Security, Compliance (refer → `07-security/`)
5. System Interfaces  
   - API endpoints (refer → `02-architecture/05-API-Specification.yaml`)  
   - External Systems (POS, CRM)
6. Data Requirements (refer → `02-architecture/02-Database-Design-ERD.md`)
7. Use Case Diagram, Sequence Diagrams (refer → `02-architecture/03-System-Diagrams.md`)

**Deliverable:** SRS v1.0 approved by technical team.  
**References:** BRD, Vision files, early architecture drafts.

---

### 3️⃣ **03-User-Stories.md — Agile User Stories**
**Owner:** Product Manager / BA Team  
**Purpose:** Diễn tả hành vi người dùng cụ thể, dùng làm input trực tiếp cho Sprint Planning.

**Phần nội dung chính:**
1. **Grouping by Role:**  
   - End User (người nhận quà)  
   - Brand Owner (nhãn hàng)  
   - Admin (quản lý hệ thống)  
   - Super Admin (toàn quyền hệ thống)  
2. **Format:**  
   `As a [role], I want [action/goal] so that [business value]`
3. **Acceptance Criteria:** cụ thể và testable.  
4. **Priority:** P0 (Critical), P1 (High), P2 (Medium).  
5. **Linking:** Mỗi User Story phải link về:
   - 1 requirement trong SRS (`REQ-###`)  
   - 1 mục tiêu trong BRD (`OBJ-###`)
6. **Output:** File `.csv` hoặc `.json` importable sang Jira / Trello.

**Deliverable:** Full backlog (100+ stories) được duyệt và sẵn sàng triển khai.  
**References:** BRD, SRS, Vision documents.

---

## ✅ CHECKLIST — Requirement Phase Deliverables

| Milestone | Task | Input | Output | Responsible |
|------------|------|--------|---------|--------------|
| **M1** | Soạn thảo & duyệt BRD | Vision Layer | BRD v1.0 | Product Owner |
| **M2** | Phân tích hệ thống, soạn SRS | BRD | SRS v1.0 | System Analyst |
| **M3** | Viết User Stories & Acceptance Criteria | SRS | User-Stories v1.0 | Product Manager |
| **M4** | Review chéo Dev/QA/Product | BRD + SRS + Stories | Approval | PM / QA Lead |
| **M5** | Import backlog vào Jira / Trello | User-Stories | Sprint backlog | PM |
| **M6** | Freeze Requirements (baseline) | Approved docs | Locked BRD/SRS | Product Owner |

---

## 🧭 Traceability Matrix (BRD ↔ SRS ↔ Stories)

| BRD Objective | SRS Module | User Story Ref | Status |
|----------------|-------------|----------------|--------|
| OBJ-01 Collect verified user data | REQ-01 OTP Verification | US-01, US-02 | Approved |
| OBJ-02 Manage campaign efficiently | REQ-02 Campaign CRUD | US-10 → US-25 | In Review |
| OBJ-03 Provide brand reporting | REQ-05 Reporting Module | US-60 → US-70 | Draft |
| OBJ-04 Integrate CRM/Ad APIs | REQ-07 External Integrations | US-90 → US-100 | Planned |

---

## 🧠 Best Practices & Notes

- Luôn cập nhật **header version** trong mỗi file (`Version`, `Last Updated`, `Author`).
- Khi có thay đổi business logic → cập nhật BRD → liên kết cascade xuống SRS & User Stories.
- Sử dụng **Notion / Confluence / GitHub Wiki** để đồng bộ tài liệu.
- Sau khi phase này hoàn tất, toàn bộ thông tin sẽ được sử dụng để xây dựng:
  - `02-architecture/` (System Design, API)
  - `03-project-management/` (Sprint Planning)
  - `04-development/` (Coding Conventions, Environment)
  - `05-testing/` (QA Plan)

---

**👉 Next Step:** Sau khi hoàn thành toàn bộ tài liệu `01-requirements/`, hãy tổ chức một buổi **Requirement Review Meeting** với các nhóm (Product, Dev, QA, Marketing, CRM Integration).  
Buổi họp này nhằm thống nhất **“We build the right thing”** trước khi chuyển sang phase **Architecture Design**.

---
