const numbers = [1, 2, 3];
//1.1
numbers.forEach((number) => {
  console.log(number);
});
//1.2
let sum = 0;
let max = numbers[0];
let min = numbers[0];
numbers.forEach((number) => {
  sum += number;
  if (max < number) {
    max = number;
  }
  if (min > number) {
    min = number;
  }
});
//1.3
let doubleNumbers = [];
numbers.forEach((number) => {
  doubleNumbers.push(number * 2);
});
