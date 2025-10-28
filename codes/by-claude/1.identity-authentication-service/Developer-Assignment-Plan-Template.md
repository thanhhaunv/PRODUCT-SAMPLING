# 🤖 DEVELOPER PROMPT TEMPLATE - SUB-PROJECT 1: IDENTITY & USER DOMAIN

## 📋 **YOUR ASSIGNMENT**

**Role**: `[DEVELOPER_ROLE]` (thay thế cho từng dev)  
**Timeline**: 6-8 weeks (Phase-based development)

---

## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**

### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
```

### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: Developer-Assignment-Plan-SubProject1.md
Mô tả: Phân công chi tiết 147 files cho 10 developers
Hướng dẫn: Tìm section có tên role của bạn, xem list files được assign
```

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Mô tả: Implementation roadmap với file mapping table
Bảng quan trọng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"

Cách sử dụng:
1. Tìm file bạn cần implement trong cột "File Path"
2. Đọc cột "SRS Reference" → Biết phần nào trong SRS-Grok-V2.md cần đọc
3. Đọc cột "Business Purpose" → Hiểu mục đích business của file đó
4. Implement file theo đúng SRS requirements
```

---

## 🏗️ **QUY ĐỊNH KIẾN TRÚC**

### **Clean Architecture - BẮT BUỘC**
```bash
Dependency Direction:
Domain ← Application ← Infrastructure
Domain ← Application ← Presentation

❌ FORBIDDEN: Domain layer import từ outer layers
❌ FORBIDDEN: Application layer import từ Infrastructure/Presentation  
❌ FORBIDDEN: Concrete dependencies trong constructors

✅ REQUIRED: Interface-based dependency injection
✅ REQUIRED: Result<T> pattern cho error handling
✅ REQUIRED: Domain events cho entity state changes
```

### **TypeScript Standards**
```typescript
// Naming conventions
export interface IUserRepository { }      // Infrastructure contracts
export class User { }                     // Domain entities
export class CreateUserUseCase { }        // Use cases

// Error handling pattern
public static create(data: UserData): Result<User> {
  if (invalid) return Result.fail('Error message');
  return Result.ok(new User(...));
}

// Dependency injection
constructor(
  private userRepository: IUserRepository,  // Interface only
  private emailService: IEmailService     // Interface only
) {}
```

---

## 🔄 **WORKFLOW IMPLEMENTATION**

### **Step 1: Đọc Documents**
```bash
1. Mở SRS-Grok-V2.md → Đọc tổng quan project
2. Mở Developer-Assignment-Plan-SubProject1.md → Tìm section role của bạn
3. Mở 1.prod-structure-other-structure.md → Study bảng mapping
```

### **Step 2: Implementation Loop** 
```bash
Với mỗi file được assign:
1. Tìm file trong "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
2. Đọc cột "SRS Reference" → Mở section tương ứng trong SRS-Grok-V2.md
3. Đọc hoàn toàn SRS section đó → Hiểu business requirements
4. Code file theo đúng requirements + architecture rules
5. Write tests theo coverage requirements
6. Repeat cho file tiếp theo
```

### **Step 3: Integration**
```bash
1. Ensure interfaces stable cho dependent developers
2. Coordinate với team về breaking changes
3. Test integration với other layers
```

---

## ✅ **QUALITY REQUIREMENTS**

### **Test Coverage**
- Domain Layer: 95%+
- Application Layer: 90%+  
- Infrastructure Layer: 80%+
- Presentation Layer: 85%+

### **Code Quality**
- [ ] SRS requirements implemented hoàn toàn
- [ ] Clean Architecture rules followed
- [ ] TypeScript strict mode passed
- [ ] All tests passing
- [ ] No breaking changes to other developers

---

## 💬 **COORDINATION**

### **Communication Protocol**
- **Interface changes**: Alert dependent developers immediately
- **SRS questions**: Escalate to tech lead
- **Blocking issues**: Communicate early với affected developers

### **Dependencies** (specific cho từng developer)
```bash
# Sẽ được điền cụ thể cho từng DEV-X
DEV-1: No dependencies (foundation)
DEV-2: Depends on DEV-1
DEV-4: Depends on DEV-1,2,3
...
```

---

**🎯 TÓM TẮT: Đọc SRS-Grok-V2.md, xem assignment của bạn, dùng mapping table để navigate đến đúng requirements, code theo architecture rules.**
