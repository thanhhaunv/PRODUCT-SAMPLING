# 📋 Requirements Layer — Overview & Workflow

> **Purpose:**  
> Thư mục `01-requirements/` tập trung toàn bộ tài liệu mô tả yêu cầu nghiệp vụ (Business Requirements), yêu cầu hệ thống (System Requirements), và các User Stories chi tiết cho toàn bộ dự án **Product Sampling System**.  
> Đây là nền tảng để đội ngũ BA, Product, UX, Dev, QA và Stakeholder hiểu thống nhất về **“What to build”** trước khi bàn đến **“How to build”**.

---

## 🗂️ File Structure & Responsibilities

| File Name | Description | Owner | Output / Action Items |
|------------|--------------|--------|------------------------|
| **01-BRD.md** | 📘 **Business Requirements Document** – mô tả bức tranh tổng thể của dự án, lý do tồn tại, mục tiêu kinh doanh, đối tượng người dùng, quy trình nghiệp vụ chính, và phạm vi (scope). | Product Owner / BA Lead | - Xác định vấn đề & cơ hội thị trường.<br>- Ghi rõ business goal & success metrics.<br>- Duyệt bởi CEO/Stakeholder trước khi sang giai đoạn phân tích kỹ thuật. |
| **02-SRS.md** | ⚙️ **System Requirements Specification** – dịch BRD thành các yêu cầu hệ thống, mô tả chức năng chi tiết, nghiệp vụ từng module, ràng buộc kỹ thuật, luồng dữ liệu, luồng giao tiếp giữa các thành phần. | Solution Architect / System Analyst | - Làm cơ sở cho đội dev & QA.<br>- Đảm bảo tính khả thi kỹ thuật của BRD.<br>- Chuẩn hóa với format IEEE 830. |
| **03-User-Stories.md** | 🧩 **Agile User Stories** – mô tả chi tiết hành vi người dùng dưới dạng “As a [role], I want [goal] so that [benefit]”. Phân chia theo nhóm: Brand, End-User, Admin, và System Owner. | Product Manager / BA Team | - Cụ thể hóa từng chức năng trong SRS thành backlog items.<br>- Gắn nhãn priority (P0/P1/P2).<br>- Đưa vào công cụ quản lý sprint (Jira/Trello). |

---

## ✅ Checklist for Requirement Phase

| Step | Task | Responsible | Output |
|------|------|--------------|---------|
| 1️⃣ | Thu thập yêu cầu nghiệp vụ từ stakeholder (Brand, Admin, User) | BA | Bản nháp BRD v0.1 |
| 2️⃣ | Xác định mục tiêu, phạm vi, KPI, và các quy trình chính | PO / CEO | BRD v1.0 hoàn chỉnh |
| 3️⃣ | Phân tích hệ thống: xác định entity, data flow, API cần có | System Analyst | Draft SRS |
| 4️⃣ | Viết chi tiết yêu cầu hệ thống (functional & non-functional) | BA / Architect | SRS v1.0 |
| 5️⃣ | Xây dựng danh sách User Stories, Acceptance Criteria | Product Manager / BA | User Stories v1.0 |
| 6️⃣ | Review chéo giữa đội Dev - QA - Product | PM / QA Lead | Approved Requirements |
| 7️⃣ | Import toàn bộ User Stories vào Jira / Trello / Notion | PM | Sprint Backlog Ready |

---

## 🧭 Best Practices

- ✅ **BRD trước – SRS sau – User Stories cuối:** đảm bảo đi đúng hướng từ chiến lược đến chi tiết.  
- ✅ **Traceability Matrix:** mỗi yêu cầu trong BRD phải có ít nhất một liên kết đến yêu cầu kỹ thuật (SRS) hoặc User Story tương ứng.  
- ✅ **Versioning:** duy trì version trong header từng file (`v1.0`, `v1.1`, …) để dễ tracking thay đổi.  
- ✅ **Stakeholder Review:** sau mỗi lần cập nhật BRD hoặc SRS, cần có biên bản xác nhận từ Product Owner/CEO.  
- ✅ **Lưu ý ngôn ngữ:** sử dụng song ngữ (Anh – Việt) cho phần mô tả chính nếu tài liệu dùng cho nhiều đối tác quốc tế.

---

## 📌 Output of This Phase

Khi hoàn tất `01-requirements/`, bạn cần có:
1. ✅ **BRD được duyệt** (v1.0 hoặc cao hơn)  
2. ✅ **SRS được Technical Team phê duyệt**  
3. ✅ **Danh sách User Stories đầy đủ và được nhập vào công cụ quản lý dự án**  
4. ✅ **Checklist Review** hoàn thành 100%

---

## 🧠 Notes for New Members
- Tất cả tài liệu trong thư mục này **phải hoàn thiện trước khi bắt đầu sprint đầu tiên.**
- Nếu có bất kỳ thay đổi nào từ phía khách hàng hoặc stakeholder, hãy ghi lại trong **Change Log** ở cuối mỗi file.
- Nếu bạn là **developer hoặc tester mới**, đọc file **User-Stories.md** trước, rồi quay lại **SRS.md** để hiểu logic hệ thống.

---

**→ Next step:** Khi thư mục này được hoàn tất và duyệt, nhóm kiến trúc sẽ bắt đầu soạn thảo thư mục `02-architecture/`.
