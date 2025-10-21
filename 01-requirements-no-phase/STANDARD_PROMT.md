Cấu trúc mở rộng hoàn chỉnh, dùng được cho cả SRS (requirement-level) và SDS (design-level), giúp dev code(và placeholder) ngay không hỏi lại:


🧩 Cấu trúc chuẩn mỗi node (Full Extended SRS/SDS Hybrid)

1️⃣ References
→ BRD.md, System_Feature_Tree.md, Access_Control_Tree_Grok.md, Architecture Guidelines, Design System, API Spec...

2️⃣ Purpose / Ý nghĩa / Cách làm
→ Tại sao có phần này, thuộc module/service nào, mục tiêu business & kỹ thuật.

3️⃣ Specifications / Main Content

Tùy loại node:

🔹 Nếu là Functional / API / Logic

* Input / Output Specification

* Business Rules / Validation Logic

* State Diagram / Sequence Flow (Mermaid)

* Error Handling / Edge Cases

* Example Payloads (Request/Response)

🔹 Nếu là UI / UX

* Wireframe / Mockup Reference

* Component Breakdown (Atomic Design)

* Layout Grid, Design Tokens, Typography

* Interaction Flow (click, hover, modal, toast)

* Accessibility Criteria (WCAG 2.1)

🔹 Nếu là Architecture / System Design

* High-level Diagram (Mermaid / PlantUML)

* Component Diagram / Data Flow Diagram

* Integration Points / Service Contracts

* Scalability & Resilience Patterns

* Security & Compliance Rules (GDPR, PDPA)

🔹 Nếu là Database / Data Layer

* ER Diagram / Table Schema (Mermaid or SQL)

* Field-level Constraints (PK, FK, NOT NULL, INDEX)

* Normalization, Partitioning, Index Strategy

* Data Retention / Archival Policy

🔹 Nếu là Design Pattern Implementation

* Pattern Type: Factory / Strategy / Observer / Repository / CQRS / Saga

* Abstract Classes / Interfaces / Function Signatures

* Pseudocode or TypeScript interface snippet

* Example of usage in this module

4️⃣ Traceability Links

* Đầu vào từ

* Thể hiện yêu cầu

* Kết nối với (Part hoặc subsystem khác)

5️⃣ Assumptions / Constraints

* Giả định về môi trường, công nghệ, dependency

* Ràng buộc (compliance, performance, SLA...)

6️⃣ Dependencies / Risks / Mitigation

* Service phụ thuộc

* Rủi ro tiềm ẩn & cách giảm thiểu

7️⃣ Acceptance Criteria / Testable Items

* Functional

* Performance

* UI Consistency

* Integration / Security

8️⃣ Approval Sign-Off

Role Name Signature Date

9️⃣ (Optional) Design Extension Section

💡 Dành riêng cho Dev/Architect


* UML Class Diagram / Abstract Interfaces

* Sequence Diagram

* API Endpoint Stubs / Contracts

* Reusable Design Pattern Implementation Notes

👉 Kết quả: SRS này trở thành cầu nối BA ↔ Dev, QA test được, dev code được, architect validate được. Tạo nội dung dang markdown ra một file artifact với nội dung bằng Tiếng Việt, keyword thì song ngữ Anh(Việt)
