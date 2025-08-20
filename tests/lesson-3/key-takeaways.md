# Lesson 3: Javascript basic (continue)
## Git
1. **Undo actions**
    - git commit --amend: Dùng để chỉnh sửa commit cuối cùng (Git mở editor)
    - git commit --amend -m”<message>: Sửa commit message ngay trong dòng lệnh, không cần mở editor.
    - git restore --staged <file>: đưa file từ staging về working director
    - git reset HEAD~1: hủy commit gần nhất(uncommit) (đưa file từ repository trỏw về working directory)
2. **Branching model**
    - Branch = nhánh, tạo môi trường làm việc riêng.
    - git branch <ten_branch>
    - git checkout <ten_branch> hoặc git -b <ten_branch>
- Lưu ý: Luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet
3. **.gitignore**
    - Bỏ qua file/thư mục không cần git theo dõi.
## Javascript
1. **Convention**
    - snake_case: chưa dùng.
    - kebab-case: tên file.
    - camelCase: tên biến.
    - PascalCase: tên class.
2. **console.log**
    - In ra giá trị với ', ", hoặc kết hợp với `` template string ${}.
3. **Object**
    - Object = đối tượng, dùng để lưu trữ tập
hợp các giá trị vào cùng một biến hoặc
hằng số
    - let/const <ten_object> = { <thuoc_tinh>: <gia_tri>,}
    - Ví dụ: let user = {"name": "Dilys", "age: 20, "email": "dilys@gmail.com"}
    - Truy xuất bằng object.key hoặc object["key"].
    - Có thể thay đổi/gán lại giá trị
4. **Logical operators**
    - &&: cả hai đúng.
    - ||: một trong hai đúng.
    - !: phủ định.
5. **Array**
    - Mảng chứa nhiều phần tử.
    - Độ dài mảng: length
    - Truy xuất bằng index
6. **Function**
    - Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
    - Khai báo function <nameFunction>() { // code }
    - Ví dụ: function sum(a,b) { 
        return a+b
     }

