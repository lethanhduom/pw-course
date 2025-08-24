const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//5.1
const checkScoreGreaterThan80 = scores.some((score) => score > 80);
console.log(checkScoreGreaterThan80);
//5.2
const checkAgeSmallerThan18 = ages.some((age) => age < 18);
console.log(checkAgeSmallerThan18);
//5.3
const checkWordGreaterThan5 = words.some((word) => word.length > 5);
console.log(checkWordGreaterThan5);
