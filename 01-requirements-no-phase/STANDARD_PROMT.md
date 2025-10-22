### Guideline Hoàn Hảo Cho Mỗi Node Trong SRS (Full Extended SRS/SDS Hybrid - Combined Version)

1️⃣ **References / Tham chiếu**  
→ Liệt kê tài liệu nguồn (e.g., BRD.md Section 1, System_Feature_Tree.md Section 2, STANDARD_PROMPT.md). Ít nhất 3 references, ưu tiên internal như BRD, Feature Tree, Vision Document, và external standards (IEEE 830 cho structure, GeeksforGeeks cho format).

2️⃣ **Purpose / Ý nghĩa / Cách làm**  
→ **Mục đích**: Tại sao có phần này, thuộc module/service nào (e.g., Introduction Module), mục tiêu business & kỹ thuật (e.g., giới thiệu tổng quan PSP với QR integration).  
→ **Ý nghĩa**: Làm cầu nối BA ↔ Dev/QA, đảm bảo unambiguous, traceable (từ GeeksforGeeks), hỗ trợ validate mà không hỏi lại.  
→ **Cách làm**: Sử dụng markdown với headings/tables/Mermaid, tổ chức theo 16 Parts, tích hợp microservices/RBAC/QR details; ngắn gọn (200-300 từ cho overview nodes), explicit/self-contained (từ IEEE: Avoid vague).

3️⃣ **Specifications / Main Content / Nội dung chính**  
Tùy loại node, merge requirement + design:  
- **Nội dung cần có**: Mô tả sản phẩm, tính năng chính (e.g., CRUD Campaign, QR issuance), kiến trúc (Mermaid diagram).  
- Ví dụ cho Overview nodes: High-level description, key features list, architecture diagram.  
- Functional: Input/Output, Business Rules, State Diagram.  
- UI: Wireframes, Component Breakdown, Interaction Flow.  
- Architecture: High-level Diagram, Integration Points.  
- Database: ER Diagram, Field Constraints.  
- Pattern: Type (Repository/CQRS), Code Snippets.  
Từ IEEE: Complete, verifiable; GeeksforGeeks: Measurable.

4️⃣ **Traceability Links / Liên kết truy xuất**  
- Đầu vào từ: (e.g., BRD.md Section 1, System_Feature_Tree.md Section 3).  
- Thể hiện yêu cầu: (e.g., FR-001 Campaign Management, NFR-001 Performance).  
- Kết nối với: (e.g., Part02_System_Overview).  
- **Tài liệu tham chiếu**: Variant để liệt kê specific sources như System_Feature_Tree.md (14 features).  
Từ IEEE: Trace to higher-level reqs.

5️⃣ **Assumptions / Constraints / Giả định & Ràng buộc**  
- Giả định: (e.g., microservices với polyglot persistence, users có smartphone cho QR).  
- Ràng buộc: (e.g., 99.9% uptime, GDPR/PDPA compliance, cost <0.4 USD/lead).  
Từ GeeksforGeeks: Verifiable; IEEE: Avoid ambiguity.

6️⃣ **Dependencies / Risks / Mitigation / Phụ thuộc & Rủi ro**  
- Dependencies: (e.g., Part02 cho architecture details, external APIs như Twilio).  
- Risks & Mitigation: (e.g., Risk: Hiểu sai tính năng → Mitigation: Validate với BRD; Risk: Latency QR scan → Mitigation: Auto-scaling).  
Từ IEEE: Hỗ trợ risk management.

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
Từ IEEE: Formalize approval.

9️⃣ **Design Extension Section / Phần mở rộng thiết kế**  
- **UML Class Diagram / Abstract Interfaces**: (e.g., Define interfaces cho Campaign/Barcode/Identity services).  
- **Sequence Diagram**: (e.g., Quy trình Campaign Creation → Barcode Issuance → Redemption, pseudocode or Mermaid).  
- **API Endpoint Stubs / Contracts**: (e.g., REST endpoints cho /campaign, /barcode, /user - OpenAPI format).  
- **Reusable Design Pattern Implementation Notes**: (e.g., Repository pattern cho DB access, CQRS cho Analytics service).  

- **Mục đích của node này**: Tóm tắt ngắn gọn vai trò node (e.g., Giới thiệu tổng quan PSP).  
Từ guideline gốc: Hybrid SDS, giúp dev code ngay; thêm ví dụ từ node như Mermaid architecture.
