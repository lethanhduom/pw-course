# Playwright - Lesson 02
## Verson Control System (VCS)
1. **Định nghĩa:** Hệ thống quản lý phiên bản
2. **Loại VCS:**
    - **Local:** lưu ở máy cá nhân
    - **Centralize:** lưu ở một máy chủ tập trung.
    - **Distributed:** lưu ở nhiều
máy khác nhau
## Git
1. **Git:** 
    - Hệ thống quản lý phiên bản phân tán, do Linus Torvalds viết.
    - Là từ viết sai chính tả (có chủ đích) của get 
    - Dùng git do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau
2. **So sánh với VCS khác:** Miễn phí, nhanh, phổ biến, hỗ trợ branching.
3. **Git & GitHub:**
    - **Git:** là phần mềm, cài trên máy, quản lý phiên bản.
    - **GitHub:** dịch vụ web lưu repo, có giao diện.
4. **Git - 3 trạng thái:**
    - **Working Directory:** có file mới hoặc file thay đổi
    - **Staging:** các file được đưa vào vùng chuẩn bị commit
    - **Repository:** Các commit
5. **Các lệnh cơ bản:**
    - **git init:** Khởi tạo repo
    - **git add <fileName>, git add .:** thêm file vào staging
    - **git status:** xem trạng thái
    - **git commit -m"message":** tạo commit
    - **git log:** xem lịch sử commit
    - **git config user.name "Name":** cấu hình tên user ở repo hiện tại
    - **git config user.email "mail@gmail.com":** cấu hình email ở repo hiện tại
6. **Git - Commit convention**
  - Cú pháp: <type>: <short_description>
    - chore: thay đổi nhỏ.
    - feat: thêm tính năng mới.
    - fix: sửa lỗi.
## Javascript basic
1. **Javascript là gì?**
    - Là một ngôn ngữ lập trình. Ra đời năm 1995 bởi Brendan Eich.
2. **Variable, constant**
    - var, let: biến có thể gán lại => ưu tiên dùng let
    - const: hằng số không gán lại
    - Quy tắc đặt tên: bắt đầu bằng chữ/có thể là _ hoặc $, không có dấu cách, không dùng từ khóa (ví dụ: let, var, for,...).
3. **Data types**
    - Có 8 loại kiểu dữ liệu: String, Number Bigint, Boolean, Undefined, Null, Symbol, Object. => quan tâm đến String, Number và Boolean
4. **Comparison operator**
    - Dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false).
    - So sánh hơn, kém: >, <
    - So sánh bằng: ==, ===, !==, !=, >=, <=
    - Quan tâm đến >, <, ===, !==, >=, <=
5. **Arithmetic operator:** +, -, *, /
6. **Conditional:**
    - Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code
7. **Unary:** toán tử một ngôi i++, i--
8. **Loops:**
    - Dùng để thực hiện một đoạn logic một số lần nhất định
    - Cú pháp: for(<khởi tạo>; <điều kiện chạy>; <điều kiện tăng>) {// code }