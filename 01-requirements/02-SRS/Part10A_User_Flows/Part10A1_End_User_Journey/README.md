# 📱 **Part10A1 - Hành trình Khách hàng cuối (End User Journey)**

*Mô tả luồng từ quét mã QR đến nhận sản phẩm mẫu tại cửa hàng*

---

## **10A1.1 - Phân tích nhóm người dùng và tiêu chí thành công**

**Mục đích**: Xác định đối tượng khách hàng mục tiêu và thước đo thành công  
**Ý nghĩa**: Nền tảng cho tất cả quyết định thiết kế giao diện/trải nghiệm, đảm bảo thiết kế phù hợp với hành vi người dùng  
**Cách làm**: Phân tích dữ liệu nhân khẩu học, tạo nhóm người dùng mẫu, định nghĩa chỉ số đo lường thành công

**Nội dung cần có**:
- 3 nhóm người dùng chính: Người trẻ khám phá (18-28), Cha mẹ bận rộn (28-40), Người mua sắm thông thái (35-50)
- Giao diện nhân khẩu học với tuổi, địa điểm, thu nhập, giáo dục
- Tiêu chí thành công: Thời gian tạo mã vạch ≤60 giây, hoàn thành biểu mẫu ≥90%, thành công OTP ≥95%
- Mô hình hành vi và điểm đau cho từng nhóm
- Sở thích sử dụng thiết bị và mức độ thoải mái với công nghệ

**Tài liệu tham khảo**:
- **Đầu vào từ**: `01-BRD.md` Mục 2.2 (Đối tượng mục tiêu: 18-45 tuổi, người dùng điện thoại thông minh)
- **Đầu vào từ**: `Tài liệu Tầm nhìn và Chiến lược Phân phối Sản phẩm` Mục 3.1 (Phân khúc khách hàng)
- **Thể hiện yêu cầu**: Part03.2.1 (Tiêu chí sản phẩm tối thiểu khả thi: tỷ lệ hoàn thành biểu mẫu 90%)
- **Kết nối với**: 10A1.2 (Thiết kế luồng hành trình), 10A1.6 (Nguyên tắc trải nghiệm người dùng)

**Kích thước ước tính**: 1000-1200 từ

---

## **10A1.2 - Luồng hành trình người dùng hoàn chỉnh với sơ đồ Mermaid**

**Mục đích**: Trực quan hóa toàn bộ hành trình khách hàng từ nhận biết đến đổi quà  
**Ý nghĩa**: Bản thiết kế cho phát triển giao diện người dùng, xác định điểm đau và cơ hội cải thiện  
**Cách làm**: Tạo biểu đồ luồng chi tiết các bước, điểm quyết định, tình huống lỗi

**Nội dung cần có**:
- Sơ đồ Mermaid hoàn chỉnh: Quét QR → Trang đích → Biểu mẫu → OTP → Mã vạch → Đổi quà tại điểm bán
- Điểm tương tác chính với tỷ lệ thành công/lỗi
- Điểm quyết định và luồng thay thế
- Điểm tích hợp với dịch vụ phía sau
- Xử lý lỗi và đường dẫn phục hồi
- Chuẩn mực hiệu suất cho từng bước

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-003 (Trang đích và biểu mẫu), FR-004 (Xác thực OTP)
- **Kết nối với**: Part09 UC-003 (Trường hợp sử dụng hành trình người dùng)
- **Đầu vào từ**: `Cây Chức năng Hệ thống.md` Mục 1.3 (Luồng trang đích)
- **Đầu ra cho**: 10B2 (Triển khai khung giao diện di động)

**Kích thước ước tính**: 1800-2200 từ

---

## **10A1.3 - Thiết kế giao diện di động và xác thực biểu mẫu**

**Mục đích**: Thiết kế giao diện ưu tiên di động với quy tắc xác thực rõ ràng  
**Ý nghĩa**: Đảm bảo trải nghiệm tối ưu trên di động (thiết bị chính), giảm tỷ lệ bỏ biểu mẫu  
**Cách làm**: Hiển thị tiến tiến, xác thực trong dòng, thông báo lỗi rõ ràng, thiết kế thân thiện với cảm ứng

**Nội dung cần có**:
- Nguyên tắc thiết kế ưu tiên di động với mục tiêu cảm ứng ≥44px
- Giao diện trường biểu mẫu với trạng thái xác thực
- Chiến lược xác thực thời gian thực (khi mất tiêu điểm, khi nhập, khi gửi)
- Cơ chế phục hồi lỗi và đề xuất hữu ích
- Tuân thủ khả năng tiếp cận cho trình đọc màn hình
- Tự động hoàn thành và tính năng nhập thông minh

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part05 NFR-U01 (Thiết kế ưu tiên di động), NFR-U02 (Hoàn thành biểu mẫu >90%)
- **Đầu vào từ**: 10A1.1 (Tiêu chí thành công: 60 giây để có mã vạch)
- **Kết nối với**: 10C1 (Thư viện thành phần cho các phần tử biểu mẫu)

**Kích thước ước tính**: 1400-1600 từ

---

## **10A1.4 - Cải tiến dần dần và tính năng Ứng dụng Web Tiến bộ**

**Mục đích**: Đảm bảo chức năng trong điều kiện mạng không ổn định  
**Ý nghĩa**: Cải thiện trải nghiệm người dùng tại các địa điểm bán lẻ với kết nối kém  
**Cách làm**: Công nhân dịch vụ, bộ nhớ đệm ngoại tuyến, suy giảm duyên dáng, trải nghiệm giống ứng dụng

**Nội dung cần có**:
- Cấu hình bản kê khai Ứng dụng Web Tiến bộ với hành vi giống ứng dụng
- Chiến lược công nhân dịch vụ cho chức năng ngoại tuyến
- Chính sách bộ nhớ đệm cho tài sản tĩnh và phản hồi giao diện lập trình ứng dụng
- Đồng bộ nền cho gửi biểu mẫu
- Thiết lập thông báo đẩy cho cập nhật chiến dịch
- Lời nhắc cài đặt và phím tắt ứng dụng

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part05 NFR-R02 (Dung sai lỗi), Part06.3.2 (Khả năng ngoại tuyến)
- **Đầu vào từ**: Part02.4.2 (Giả định: Internet không ổn định tại các điểm)
- **Kết nối với**: Part14.1 (Cấu hình triển khai Ứng dụng Web Tiến bộ)

**Kích thước ước tính**: 1200-1400 từ

---

## **10A1.5 - Tình huống lỗi và trải nghiệm phát hiện gian lận**

**Mục đích**: Xử lý duyên dáng các trường hợp lỗi và hoạt động đáng ngờ  
**Ý nghĩa**: Duy trì niềm tin của người dùng đồng thời bảo vệ bảo mật hệ thống  
**Cách làm**: Thông báo lỗi rõ ràng, đường dẫn phục hồi hữu ích, thông báo gian lận không cáo buộc

**Nội dung cần có**:
- Phân loại lỗi: Lỗi hệ thống, lỗi người dùng, lỗi mạng, lỗi bảo mật
- Thông báo lỗi thân thiện với người dùng và hướng dẫn khắc phục
- Cơ chế phát hiện gian lận không xâm phạm (velocity checks, pattern analysis)
- Luồng xử lý tài khoản bị tạm khóa với tùy chọn khiếu nại
- Ghi nhật ký bảo mật và báo cáo cho nhóm giám sát
- Fallback graceful khi dịch vụ bên thứ ba không khả dụng

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-011 (Phát hiện gian lận), Part11.5.2 (Giám sát bảo mật)
- **Đầu vào từ**: `01-BRD.md` Mục 4.3 (Mục tiêu: Gian lận ≤ 5%)
- **Kết nối với**: Part09 UC-003.3 (Tình huống xử lý ngoại lệ)

**Kích thước ước tính**: 1300-1500 từ

---

## **10A1.6 - Nguyên tắc trải nghiệm người dùng và tiêu chuẩn khả năng tiếp cận**

**Mục đích**: Đảm bảo thiết kế tuân thủ các nguyên tắc trải nghiệm người dùng và tiêu chuẩn khả năng tiếp cận  
**Ý nghĩa**: Thiết kế bao trùm, tuân thủ pháp lý, tỷ lệ chuyển đổi tốt hơn  
**Cách làm**: Tuân thủ Hướng dẫn Khả năng tiếp cận Nội dung Web 2.1 mức AA, ngân sách hiệu suất, nguyên tắc khả dụng

**Nội dung cần có**:
- Nguyên tắc thiết kế cốt lõi: Tốc độ, Đơn giản, Tin cậy, Bảo mật, Khả năng tiếp cận
- Tuân thủ Hướng dẫn Khả năng tiếp cận Nội dung Web 2.1 mức AA (tương phản màu, điều hướng bàn phím, nhãn màn hình)
- Ngân sách hiệu suất: Tải trang <2 giây, tương tác <100ms
- Hỗ trợ đa trình duyệt và thiết bị (iOS 14+, Android 8+)
- Thiết kế đáp ứng với điểm ngắt rõ ràng
- Nguyên tắc nội dung: Ngôn ngữ rõ ràng, thông tin cần thiết, hành động rõ ràng

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part05 NFR-U03 (Tuân thủ Hướng dẫn Khả năng tiếp cận Nội dung Web 2.1 mức AA)
- **Kết nối với**: 10D1 (Chi tiết triển khai khả năng tiếp cận)
- **Đầu ra cho**: 10E1 (Đo lường chỉ số trải nghiệm người dùng)

**Kích thước ước tính**: 1100-1300 từ

---

## **📊 TỔNG KẾT PART10A1**

**Tổng kích thước ước tính**: 8,800-10,200 từ  
**Số lượng mục**: 6 mục  
**Độ phức tạp**: Trung bình đến cao (foundation cho toàn bộ UX)  
**Thời gian ước tính**: 4-6 giờ để hoàn thành tất cả

**Phụ thuộc chính**:
- Cần hoàn thành trước khi làm 10B2 (Mobile wireframes)
- Input quan trọng cho 10C1 (Component library)
- Foundation cho 10E1 (UX metrics)

**Khuyến nghị thứ tự thực hiện**:
1. 10A1.1 (Personas & Success criteria) - Foundation
2. 10A1.2 (User journey flow) - Core flow
3. 10A1.3 (Mobile interface) - Implementation focus
4. 10A1.6 (UX principles) - Standards
5. 10A1.4 (PWA features) - Enhancement
6. 10A1.5 (Error handling) - Edge cases
