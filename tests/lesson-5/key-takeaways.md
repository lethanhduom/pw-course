# Lesson 5 - DOM terminology Playwright basic
1. **Functions advance**
- Anonymous functions:
    - Hàm không có tên 
    - Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác 
    - Cú pháp: 
Function (parameters) { 
 // Code here 
}
- Lambda function (Arrow function):
    - Sử dụng dấu => thay vì từ khoá function 
    - Cú pháp: 
(parameters) => { 
 // Code here 
}
2. **DOM**
- Viết tắc của: Document Object Model 
- Thẻ mở: <>
- Thẻ đóng: </>
- Text: Nội dung giữa các thẻ.
- Thẻ tự đóng: ví dụ <img/>
3. **Thẻ HTML thường gặp**
- <div>: chia bố cục.
- <h1> - <h6>: tiêu đề.
- <form>: chứa form nhập liệu.
- <input>: text, email, radio, checkbox, file, color, range, date.
- <textarea>: ô nhập liệu nhiều dòng.
- <button>: nút bấm.
- <table>: <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>.
- <iframe>: hiển thị trang web khác bên trong trang hiện tại.
4. **Selector**
- Dùng để xác định phần tử trên trang web để thao tác.
- Các loại selector:
    - XPath
    - CSS
    - Playwright selector
5. **Xpath**
- XPath tuyệt đối: bắt đầu bằng /, đi từ root node.
- XPath tương đối: bắt đầu bằng //, thường dùng hơn.
- Ví dụ: //button[@id='add-task']
6. **Basic Actions trong Playwright**
- Điều hướng: await page.goto('https://example.com')
- Click: await page.locator("//button[@id='add-task']").click()
- Nhập liệu (Fill): await page.locator("//input[@id='search']").fill('Playwright VN');
- Nhập từng ký tự: await page.locator("//input[@id='search']").pressSequentially('Text', { delay: 100 });
- Select option: await page.selectOption("//select[]", "value");
- Upload file: await page.locator("//input[]").setInputFiles("filePath");
- Check/Uncheck: await page.locator("//input").setChecked(true/false);
