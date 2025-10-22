### 🧩 Guideline Hoàn Hảo Cho Mỗi Node Trong SRS (Full Extended SRS/SDS Hybrid - Combined Version)

Guideline này áp dụng cho mọi node: Sử dụng markdown, tiếng Việt chính với keyword song ngữ Anh/Việt, đảm bảo traceable (liên kết FR/NFR IDs), testable (acceptance criteria cụ thể), và hybrid SRS/SDS (requirement + design extension để dev code ngay). Làm cho node tự chứa, không cần hỏi lại.

1️⃣ **References / Tham chiếu**  
→ Liệt kê các tài liệu nguồn chính (e.g., BRD.md Section 1-2, System_Feature_Tree.md Overview, Access_Control_Tree_Grok.md, Architecture Guidelines, Design System, API Spec). Bao gồm ít nhất 3 references để đảm bảo traceability, ưu tiên tài liệu nội bộ và external standards như IEEE 830 (cho structure), GeeksforGeeks (cho SRS format). Từ IEEE: Tham chiếu đến business docs để align product perspective.

2️⃣ **Purpose / Ý nghĩa / Cách làm** 
→ **Mục đích**: Tại sao có phần này, thuộc module/service nào (e.g., Campaign Management Service), mục tiêu business & kỹ thuật (e.g., hỗ trợ sampling giá thấp ~1 USD để collect data qua QR).  
→ **Ý nghĩa**: Làm cầu nối BA ↔ Dev/QA, đảm bảo node rõ ràng, chi tiết, traceable, hỗ trợ dev code và architect validate mà không cần hỏi lại (từ GeeksforGeeks: SRS phải unambiguous và traceable).  
→ **Cách làm**: Sử dụng markdown với headings/tables/Mermaid, tổ chức theo 16 Parts (~320 nodes), tích hợp microservices/RBAC/business/technical reqs từ tài liệu liên quan; viết ngắn gọn (200-300 từ cho overview nodes như Product_Overview), explicit/self-contained (từ IEEE: Avoid vague language).

3️⃣ **Specifications / Main Content / Nội dung chính**  
Tùy loại node (merge từ STANDARD_PROMPT.md, thêm ví dụ từ guideline mới cho flexibility):  
- **Nếu là Functional / API / Logic** (e.g., Campaign Management): Input/Output Specification (e.g., request/response payloads); Business Rules/Validation Logic (e.g., tên campaign unique); State Diagram/Sequence Flow (Mermaid); Error Handling/Edge Cases (e.g., invalid QR scan); Example Payloads (JSON for API).  
- **Nếu là UI / UX** (e.g., User Portal): Wireframe/Mockup Reference; Component Breakdown (Atomic Design); Layout Grid, Design Tokens, Typography; Interaction Flow (click, hover, modal, toast); Accessibility Criteria (WCAG 2.1).  
- **Nếu là Architecture / System Design** (e.g., Microservices Overview): High-level Diagram (Mermaid/PlantUML); Component Diagram/Data Flow Diagram; Integration Points/Service Contracts; Scalability & Resilience Patterns (e.g., circuit breaker); Security & Compliance Rules (GDPR/PDPA).  
- **Nếu là Database / Data Layer** (e.g., DB Schema): ER Diagram/Table Schema (Mermaid or SQL); Field-level Constraints (PK, FK, NOT NULL, INDEX); Normalization, Partitioning, Index Strategy; Data Retention/Archival Policy.  
- **Nếu là Design Pattern Implementation** (e.g., Repository in Service): Pattern Type (Factory/Strategy/Observer/Repository/CQRS/Saga); Abstract Classes/Interfaces/Function Signatures (TypeScript snippet); Pseudocode or example usage in module.  
Từ GeeksforGeeks: Giữ specifications complete, verifiable; Từ IEEE: Bao gồm product functions, user classes nếu relevant.

4️⃣ **Traceability Links / Liên kết truy xuất**  
- Đầu vào từ: (e.g., BRD.md Section 1-5, System_Feature_Tree.md Section 1-4).  
- Thể hiện yêu cầu: (e.g., FR-001 Campaign Management, NFR-001 Performance).  
- Kết nối với: (e.g., Part hoặc subsystem khác như Part04_Functional_Requirements).  
Từ IEEE: Đảm bảo traceable đến higher-level reqs; Không bỏ vì đây là core cho verification.

5️⃣ **Assumptions / Constraints / Giả định & Ràng buộc**  
- Giả định về môi trường, công nghệ, dependency (e.g., users có smartphone cho QR scan, dev sử dụng Node.js/TypeScript).  
- Ràng buộc (compliance, performance, SLA, e.g., tuân thủ GDPR/PDPA, <200ms API response, cost per verified user <0.4 USD).  
Từ GeeksforGeeks: Làm SRS verifiable; Từ IEEE: Bao gồm assumptions để avoid ambiguity.

6️⃣ **Dependencies / Risks / Mitigation / Phụ thuộc & Rủi ro**  
- Dependencies: Service phụ thuộc (e.g., Campaign phụ thuộc Identity), external APIs (Twilio cho OTP).  
- Risks tiềm ẩn & cách giảm thiểu (e.g., Risk: Latency cao khi scale → Mitigation: Auto-scaling; Risk: Dữ liệu giả mạo → Mitigation: OTP/ML fraud detection; Risk: Compliance violation → Mitigation: AES encryption/immutable audits).  
Từ IEEE: Bao gồm trong Overall Description; Không bỏ vì hỗ trợ risk management.

7️⃣ **Acceptance Criteria / Testable Items / Tiêu chí chấp nhận**  
- Functional: (e.g., SRS cover 100% tính năng, overview cover key features như QR).  
- Performance: (e.g., System hỗ trợ 100K redemptions/day, <200ms latency).  
- UI Consistency: (e.g., Wireframes tuân thủ WCAG 2.1).  
- Integration / Security: (e.g., Test cases cover 100% reqs, zero data leakage).  
Từ GeeksforGeeks: SRS phải testable/measurable; Từ IEEE: Specific, verifiable criteria.

8️⃣ **Approval Sign-Off / Phê duyệt**  
| Role / Vai trò | Name / Tên | Signature / Chữ ký | Date / Ngày |  
|----------------|------------|---------------------|-------------|  
| Product Manager | [TBD] | - | - |  
| Technical Lead | [TBD] | - | - |  
| QA Lead | [TBD] | - | - |  
Từ IEEE: Bao gồm approval để formalize; Thêm QA Lead từ guideline mới cho completeness.

9️⃣ **Design Extension Section / Phần mở rộng thiết kế**  
- **UML Class Diagram / Abstract Interfaces**: (e.g., Define interfaces cho Campaign/Barcode/Identity services).  
- **Sequence Diagram**: (e.g., Quy trình Campaign Creation → Barcode Issuance → Redemption, pseudocode or Mermaid).  
- **API Endpoint Stubs / Contracts**: (e.g., REST endpoints cho /campaign, /barcode, /user - OpenAPI format).  
- **Reusable Design Pattern Implementation Notes**: (e.g., Repository pattern cho DB access, CQRS cho Analytics service).  
Từ guideline mới: Thêm ví dụ cho overview nodes (e.g., high-level flow); Không bỏ vì đây là phần hybrid SDS, giúp dev code ngay.
