const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";
//1
const subStringFullName = fullName.substring(0, 6);
console.log(subStringFullName);
//2
const subStringDate = date.substring(0, 4);
console.log(subStringDate);
//3
const subStringEmail = email.substring(email.indexOf("@") + 1, email.length);
console.log(subStringEmail);
