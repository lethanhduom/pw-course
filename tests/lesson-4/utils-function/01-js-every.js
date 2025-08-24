const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//1.1
let isGreaterThan70 = scores.every((score) => score > 70);
console.log(isGreaterThan70);
//1.2
let isGreaterThan15 = ages.every((age) => age > 15);
console.log(isGreaterThan15);
//1.3
let isGreaterThan3 = words.every((word) => word.length > 3);
console.log(isGreaterThan3);
