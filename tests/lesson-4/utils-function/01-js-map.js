const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
//4.1
const newScoresArray = [];
scores.map((score) => {
  if (score < 90) {
    newScoresArray.push(score + score * 0.1);
  } else {
    newScoresArray.push(score - score * 0.05);
  }
});
console.log(newScoresArray);
//4.2
const numberToStringArray = [];
numbers.map((number) => {
  numberToStringArray.push(number.toString());
});
console.log(numberToStringArray);
//4.3
const doubleNumberArray = [];
numbers.map((number) => {
  doubleNumberArray.push(number * 2);
});
console.log(doubleNumberArray);
