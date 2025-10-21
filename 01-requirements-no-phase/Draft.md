
HỆ THỐNG QUẢN LÝ PHÂN PHỐI PRODUCT SAMPLING

1️⃣ MỤC TIÊU
- Quản lý, phân phối sản phẩm dùng thử (sampling) tại các điểm bán lẻ như Circle K, Mini Stop, siêu thị, booth sự kiện.
- Thu thập thông tin khách hàng: Họ Tên, Email, Số điện thoại.
- Xác thực khách hàng bằng Email OTP hoặc SMS OTP để chống spam.
- Cấp phát mã barcode/voucher duy nhất cho mỗi khách.
- Quản lý và đo lường toàn bộ quá trình: QR scan → form submit → verify → cấp mã → đổi sản phẩm.
- Phục vụ remarketing & kết nối CRM.

2️⃣ TÍNH NĂNG CHÍNH

A. Quản lý Barcode
- Import barcode từ hệ thống khách hàng (file CSV/Excel/API).
- Dữ liệu barcode gồm: barcode, product_name, expiry_date, value (nếu là voucher), batch_code.
- Quản lý trạng thái barcode: Chưa phát / Đã phát / Đã redeem / Hết hạn.
- Cho phép import lại file barcode để đối soát barcode phát tay hoặc phát sinh ngoài luồng.
- Hỗ trợ API push/pull đồng bộ barcode với ERP/CRM.

B. Quản lý Chiến dịch (Campaign)
- Tạo nhiều Campaign Sampling, mỗi chiến dịch có:
  + Tên chiến dịch
  + Mô tả
  + Thời gian bắt đầu/kết thúc
  + Danh sách barcode riêng
  + Danh sách sản phẩm
  + Danh sách điểm phát sampling (location/shop)
- Mỗi Campaign quản lý tập barcode và Ads Format riêng.
- Landing page gắn Campaign ID để tracking.

C. Quản lý Ads Format
- Mỗi Campaign có nhiều Ads Format.
- Mỗi Ads Format có: Tên, kích thước, số lượng in, QR code/short link riêng, thông tin tracking: campaign_id, ads_format_id, location_id, UTM tag.
- Mỗi Ads Format phải upload:
  + File thiết kế (PNG/JPG/PDF, tối thiểu 300 DPI)
  + Logo thương hiệu (nếu chưa có)
  + Kích thước in (cm/mm hoặc pixel)
  + Vị trí QR code (zone hoặc tọa độ)
  + Kích thước QR code tối thiểu & safe zone
- Danh sách Ads Format đề xuất:
  1. Flyer (A5/A6) – phát tay
  2. Poster (A3/A2) – dán tường, cửa kính
  3. Shelf Talker – treo kệ hàng
  4. Wobbler – treo trước sản phẩm
  5. Standee/Rollup Banner – trước cửa shop
  6. Tent Card/Table Talker – quầy thu ngân
  7. Dangler – treo lối đi
  8. Voucher Card – phát kèm sản phẩm
  9. Sticker QR – dán trực tiếp pack sampling
  10. Receipt Ads – in kèm hóa đơn POS
  11. Email Signature QR – chữ ký email
  12. Digital Ads Banner – chạy online
  13. Event Backdrop – booth roadshow

D. Landing Page & Form
- Hiển thị nội dung sản phẩm sampling, quyền lợi khách hàng.
- Form nhập: Họ Tên, Email, SĐT, tick đồng ý điều khoản/marketing.
- Xác thực: Email verify (link/OTP) hoặc SMS OTP.
- Giới hạn retry OTP, timeout, CAPTCHA.

E. Cấp phát Barcode
- Sau verify thành công, gán 1 barcode chưa phát.
- Mỗi khách 1 barcode duy nhất.
- Log: user_id, campaign_id, ads_format_id, location_id, timestamp.
- Hiển thị barcode để khách lưu (PDF hoặc ví điện tử).

F. Đổi Sampling & Tích hợp POS
- Shop staff đổi sampling có thể dùng web/app scan do hệ thống cung cấp HOẶC công cụ scan POS Circle K/shop.
- Cần review thiết bị/ứng dụng POS tại điểm bán:
  + Kiểm tra khả năng trả log redeem.
  + Làm rõ cách tích hợp API hoặc xuất file redeem.
- Hệ thống nhận log redeem từ Circle K/điểm bán để update trạng thái barcode.
- Có thể tích hợp webhook API real-time HOẶC import batch CSV log redeem.

G. Import trạng thái Redeem
- Sau chiến dịch, đối tác/cửa hàng gửi log redeem.
- Hệ thống so barcode redeem → update trạng thái barcode Đã redeem.
- Dữ liệu log redeem: barcode, redeem_date, location/shop, staff_id (nếu có).

H. Báo cáo & Analytics
- Dashboard realtime:
  + Theo Campaign: QR scan, form submit, verify, barcode phát, barcode redeem.
  + Theo Ads Format: scan/submit/verify/redeem riêng.
  + Theo Location: điểm bán, booth.
  + Theo Thời gian.
- Xuất CSV/Excel, API push CRM.

I. Phân quyền

1) Admin
- Toàn quyền hệ thống: quản lý Campaign, Barcode, Ads, Landing Page.
- Tạo/Sửa/Xoá Campaign.
- Import/Export barcode.
- Quản lý User & phân quyền.
- Cài đặt API, POS, CRM.
- Xem toàn bộ báo cáo.

2) Group Admin
- Quản lý nhiều Customer Account trong cùng Group.
- Tạo/Quản lý Campaign trong Group.
- Import barcode, Ads Format cho Group.
- Xem báo cáo tổng hợp Group.
- Không xoá Campaign Global.

3) Customer Account
- Xem & quản lý Campaign riêng.
- Import barcode cho Campaign của mình.
- Tạo/Upload Ads Format.
- Xem Landing Page preview.
- Xem báo cáo Campaign của mình.
- Xuất data khách Sampling.

4) Serving Account
- Dùng Redeem Tool (web/app scan).
- Scan barcode & đổi sampling.
- Không quản lý barcode, Campaign, Ads.
- Không xuất data khách hàng.

3️⃣ FLOW VẬN HÀNH

1. Import barcode → gán vào Campaign.
2. Tạo Campaign, Ads Format, QR riêng.
3. In ấn, phát tại Circle K/booth.
4. Khách scan QR → form → verify.
5. Hệ thống cấp barcode.
6. Khách mang barcode đổi sampling.
7. Shop staff scan bằng web/app hoặc tool POS.
8. POS gửi log redeem → hệ thống update barcode redeem.
9. Dashboard đo lường realtime.

4️⃣ YÊU CẦU KỸ THUẬT BỔ SUNG
- Log scan, submit, verify, redeem đều gắn campaign_id, ads_format_id, location_id.
- QR bảo mật, có hạn dùng.
- Chống spam OTP.
- Log đầy đủ.
- API đồng bộ CRM/ERP/POS.
- Tracking GA/Meta Pixel.

5️⃣ MỞ RỘNG
- Gamification.
- Tích điểm.
- QR unique theo flyer.
- Push data Email Automation.
