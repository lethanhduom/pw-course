const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//3.1
const firstScoreGreaterThan80 = scores.find((score) => score > 80);
console.log(firstScoreGreaterThan80);
//3.2
const firstAgeGreaterThan20 = ages.find((age) => age > 20);
console.log(firstAgeGreaterThan20);
//3.3
const firstWordGreaterThan5 = words.find((word) => word.length > 5);
console.log(firstWordGreaterThan5);
