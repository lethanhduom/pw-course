const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//6.1
const totalScore = scores.reduce((sum, score) => {
  return sum + score;
});
console.log(totalScore);
//6.2
const mulNumber = numbers.reduce((mul, number) => {
  return mul * number;
});
console.log(mulNumber);
//6.3
const totalExpense = expenses.reduce((sum, expense) => {
  return sum + expense;
});
console.log(totalExpense);
