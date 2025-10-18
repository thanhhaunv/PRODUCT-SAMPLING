## Cấu trúc
```
Part10_UI_UX_Design/
│
├── Part10A_User_Flows/
│   │
│   ├── Part10A1_End_User_Journey/
│   │   ├── ...
│   │
│   ├── Part10A2_Brand_Admin_Journey/
│   │   │
│   │   ├── Part10A2-1_Overview_Dashboard/
│   │   │   ├── ...
│   │   │
│   │   ├── Part10A2-2_Campaign_Creation/
│   │   │   ├── 10A2-2.1_Wizard_Overview_Progress.md
│   │   │   ├── 10A2-2.2_Step1_Basic_Information.md
│   │   │   ├── 10A2-2.3_Step2_Schedule_Timezone.md
│   │   │   ├── 10A2-2.4_Step3_Location_Selection.md
│   │   │   ├── 10A2-2.5_Step4_Barcode_Import.md
│   │   │   ├── 10A2-2.6_Draft_Management_Autosave.md
│   │   │   └── 10A2-2.7_Success_Metrics_Tracking.md
```
# 🚀 **Part10A2-2 - Tạo Chiến dịch (Campaign Creation)**

*Thuật sĩ 4 bước để tạo chiến dịch mới*

---

## **10A2-2.1 - Tổng quan thuật sĩ và tiến trình bước**

**Mục đích**: Mô hình tinh thần rõ ràng về quy trình tạo chiến dịch với hướng dẫn từng bước  
**Ý nghĩa**: Giảm tỷ lệ bỏ dở, cải thiện tỷ lệ hoàn thành, đảm bảo thu thập dữ liệu đầy đủ  
**Cách làm**: Thiết kế thuật sĩ tuyến tính với chỉ báo tiến trình, xác thực từng bước, khả năng lưu bản thảo

**Nội dung cần có**:
- Giao diện thuật sĩ với 4 bước rõ ràng: Thông tin cơ bản → Lịch trình → Địa điểm → Mã vạch
- Thanh tiến trình với trạng thái hoàn thành, đang thực hiện, chưa bắt đầu
- Cơ chế xác thực từng bước với thông báo lỗi cụ thể
- Điều hướng linh hoạt (Tiếp theo/Quay lại) với bảo vệ dữ liệu
- Tóm tắt dữ liệu đã nhập ở bước cuối cùng
- Khả năng thoát và tiếp tục sau với lưu bản thảo tự động

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-001 (Quản lý chiến dịch CRUD)
- **Đầu vào từ**: `Cây Chức năng Hệ thống.md` Mục 1.1 (Quản lý chiến dịch với workflow)
- **Kết nối với**: Part09 UC-001 (Trường hợp sử dụng tạo chiến dịch)

**Kích thước ước tính**: 1400-1600 từ

---

## **10A2-2.2 - Bước 1: Thu thập thông tin cơ bản**

**Mục đích**: Thu thập siêu dữ liệu chiến dịch thiết yếu và thông tin sản phẩm  
**Ý nghĩa**: Dữ liệu nền tảng quyết định cấu hình tất cả các bước tiếp theo  
**Cách làm**: Thiết kế biểu mẫu trực quan, quy tắc xác thực thông minh, văn bản trợ giúp ngữ cảnh

**Nội dung cần có**:
- Biểu mẫu thông tin chiến dịch: Tên, mô tả, mục tiêu, ngân sách ước tính
- Thông tin sản phẩm: Tên, danh mục, hình ảnh, mô tả chi tiết
- Cấu hình mục tiêu: Số lượng mẫu, nhóm đối tượng, khu vực địa lý
- Tải lên và quản lý hình ảnh sản phẩm với xem trước
- Trường tùy chỉnh cho metadata bổ sung theo ngành
- Tích hợp với thư viện sản phẩm hiện có

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-001.1 (Yêu cầu thông tin cơ bản chiến dịch)
- **Kết nối với**: 10A2-2.1 (Tiến trình thuật sĩ), 10C2 (Thành phần biểu mẫu chuẩn)

**Kích thước ước tính**: 1300-1500 từ

---

## **10A2-2.3 - Bước 2: Lịch trình và xử lý múi giờ**

**Mục đích**: Cấu hình thời gian chiến dịch chính xác cho hoạt động đa khu vực  
**Ý nghĩa**: Thời gian chiến dịch ảnh hưởng trực tiếp đến thành công kinh doanh và trải nghiệm khách hàng  
**Cách làm**: Bộ chọn ngày/giờ thông minh, chuyển đổi múi giờ tự động, phát hiện xung đột lịch trình

**Nội dung cần có**:
- Bộ chọn ngày bắt đầu/kết thúc với lịch trực quan
- Quản lý múi giờ với chuyển đổi tự động theo vị trí
- Cảnh báo xung đột với chiến dịch khác của cùng thương hiệu
- Cài đặt giờ hoạt động hàng ngày (ví dụ: 9:00 - 21:00)
- Tính năng lập lịch theo mùa hoặc sự kiện đặc biệt
- Ước tính tác động dựa trên thời gian chạy

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-001.2 (Lập lịch chiến dịch với timezone)
- **Đầu vào từ**: `01-BRD.md` Mục 1.2 (Phạm vi đa khu vực: VN → SEA expansion)

**Kích thước ước tính**: 1200-1400 từ

---

## **10A2-2.4 - Bước 3: Giao diện lựa chọn địa điểm**

**Mục đích**: Nhắm mục tiêu địa điểm linh hoạt với các thao tác hàng loạt hiệu quả  
**Ý nghĩa**: Hiệu quả quy mô cho các chiến dịch lớn với hàng trăm/nghìn điểm bán  
**Cách làm**: Giao diện bản đồ tương tác, tìm kiếm/lọc nâng cao, nhập hàng loạt, nhóm địa lý

**Nội dung cần có**:
- Bản đồ tương tác với các điểm bán được đánh dấu
- Công cụ tìm kiếm địa điểm theo tên, địa chỉ, loại cửa hàng
- Lọc nâng cao theo khu vực, loại hình, doanh thu, footfall
- Chức năng chọn hàng loạt theo vùng địa lý hoặc tiêu chí
- Nhập danh sách địa điểm từ tệp CSV/Excel
- Xem trước phân bố địa lý và ước tính tác động

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-001.3 (Gán địa điểm với targeting)
- **Kết nối với**: 10A2-5.2 (Phân tích hiệu suất địa điểm)

**Kích thước ước tính**: 1500-1700 từ

---

## **10A2-2.5 - Bước 4: Nhập mã vạch và xác thực**

**Mục đích**: Quản lý nhóm mã vạch an toàn và chính xác với kiểm soát chất lượng  
**Ý nghĩa**: Độ chính xác hàng tồn kho là yếu tố quyết định thành công chiến dịch  
**Cách làm**: Tải lên tệp thông minh, xác thực định dạng, phát hiện trùng lặp, đối chiếu tự động

**Nội dung cần có**:
- Tải lên tệp CSV/Excel với mẫu chuẩn và hướng dẫn
- Xác thực định dạng mã vạch (mã số, ngày hết hạn, giá trị)
- Phát hiện và xử lý mã vạch trùng lặp
- Preview dữ liệu đã nhập với khả năng chỉnh sửa inline
- Tính toán tự động: tổng số mã, phân bổ theo địa điểm
- Tích hợp với hệ thống quản lý kho của đối tác

**Tài liệu tham khảo**:
- **Thể hiện yêu cầu**: Part04 FR-002 (Quản lý mã vạch), Part07.3.1 (Bộ sưu tập mã vạch MongoDB)
- **Đầu vào từ**: `Cây Chức năng Hệ thống.md` Mục 1.2 (Luồng nhập mã vạch với validation)

**Kích thước ước tính**: 1400-1600 từ

---

## **10A2-2.6 - Quản lý bản thảo và tự động lưu**

**Mục đích**: Ngăn chặn mất dữ liệu trong các phiên tạo chiến dịch dài  
**Ý nghĩa**: Cải thiện niềm tin của người dùng, giảm thất vọng, tăng tỷ lệ hoàn thành  
**Cách làm**: Khoảng thời gian tự động lưu thông minh, khôi phục bản thảo, quản lý phiên bản

**Nội dung cần có**:
- Tự động lưu dữ liệu mỗi 30 giây hoặc khi thay đổi quan trọng
- Giao diện quản lý bản thảo với danh sách và khôi phục
- Phát hiện và xử lý xung đột khi nhiều người chỉnh sửa
- Đồng bộ hóa dữ liệu giữa các tab/thiết bị
- Cảnh báo khi có thay đổi chưa lưu
- Lịch sử thay đổi với khả năng hoàn tác/làm lại

**Tài liệu tham khảo**:
- **Đầu vào từ**: 10A2-2.1 (Yêu cầu tiến trình thuật sĩ)
- **Kết nối với**: 10A2-6.2 (Hệ thống lịch sử phiên bản tổng thể)

**Kích thước ước tính**: 1100-1300 từ

---

## **10A2-2.7 - Chỉ số thành công và theo dõi hoàn thành**

**Mục đích**: Đo lường và tối ưu hóa trải nghiệm tạo chiến dịch  
**Ý nghĩa**: Cải thiện liên tục quy trình tạo chiến dịch dựa trên dữ liệu thực tế  
**Cách làm**: Theo dõi thời gian, tỷ lệ hoàn thành từng bước, phân tích điểm bỏ dở

**Nội dung cần có**:
- Theo d
