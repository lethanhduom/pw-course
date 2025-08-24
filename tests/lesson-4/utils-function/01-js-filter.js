const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//2.1
const scoreGreaterThan80 = scores.filter((score) => score > 80);
console.log(scoreGreaterThan80);
//2.2
const ageGreaterThan18 = ages.filter((age) => age >= 18);
console.log(ageGreaterThan18);
//2.3
const wordGreaterThan5 = words.filter((word) => word.length > 5);
console.log(wordGreaterThan5);
