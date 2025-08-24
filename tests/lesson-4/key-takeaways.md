# Lesson 4 - JavaScript (Continue)
1. **Phạm vi của biến (Scope) & Hoisting**
    - Global: biến dùng được ở mọi nơi.
    - Scope: {} biến chỉ có hiệu lực trong block.
    => var là biến có phạm vi Global, let có phạm vi Scope
    - var: có thể truy cập trước khi khai báo (giá trị undefined).

    - let: không thể truy cập trước khi khai báo.
2. **Câu điều kiện nâng cao**
    - if ... else
    - ví dụ: if (score >= 90) {console.log("Xuất sắc"); } else {console.log("Trung bình"); }
    - if ... else if ... else
    - ví dụ: if (score >= 90) { console.log("Xuất sắc"); } else if (score >= 70) { console.log("Khá"); } else { console.log("Trung bình");}
    - switch ... case ... default
    - ví dụ: switch (day) {
  case 1: console.log("Thứ Hai"); break;
  case 2: console.log("Thứ Ba"); break;
  default: console.log("Ngày khác");}
3. **Toán tử so sánh**
    - == và !=: so sánh lỏng lẻo, có chuyển đổi giá trị
    - === và !==: so sánh tuyệt đối, so sánh về giá trị và kiểu dữ liệu
4. **Vòng lặp nâng cao**
    - for...in: for (let i in arr) {
  console.log("index:", i, "value:", arr[i]);
}
    - forEach:arr.forEach((value, index) => {
  console.log(index, value);
});
    - for...of:  for (let value of arr) {
  console.log("value:", value);
}
=> object: dùng for...in, arr: dùng cả 3
5. **Utils functions (hàm tiện ích)**
    - String utils:
        - Trim(): loại bỏ khoảng trắng đầu/cuối.
        - toLowerCase() / toUpperCase(): chuyển chữ thường / in hoa.
        - includes(): kiểm tra chuỗi con.
        - replace(): thay thế chuỗi.
        - split(): tách chuỗi thành mảng.
        - substring(): trích xuất chuỗi con.- indexOf(): tìm vị trí xuất hiện đầu tiên.
    - Array utils:
        - map(): cho phép tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc
        - filter(): lọc các phần tử thỏa điều kiện.
        - find(): tìm phần tử đầu tiên thỏa điều kiện.
        - reduce(): một phương thức mảng mạnh mẽ được sử dụng để giảm một mảng thành một giá trị duy nhất
        - some(): trả về true nếu ít nhất một phần tử đúng.
        - every(): trả về true nếu tất cả phần tử đúng.
        - push(): thêm phần tử vào cuối.
        - shift(): bỏ phần tử đầu.
        sort():sắp xếp.



