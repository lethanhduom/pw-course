const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";
//1
const replacePhoneNumber = phoneNumber.replace(/ /g, ".");
console.log(replacePhoneNumber);
//2
const replaceReport = report.replace(/lỗi/g, "bug");
console.log(replaceReport);
//3
const replaceNumbersStr = numbersStr.replace(/,/g, ".");
console.log(replaceNumbersStr);
