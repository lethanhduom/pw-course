const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//2.1
for (let character of str) {
  console.log(character);
}
//2.2
const reverseStr = [];
for (let character of str) {
  reverseStr.unshift(character);
}
//2.3
let firstIndex = -1;
let lastIndex = -1;
let i = 0;
for (let num of arr) {
  if (num === 3) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
  i++;
}
console.log(`first index: ${firstIndex}, last index ${lastIndex}`);
//2.4
const unique = [];
for (let num of dupArr) {
  if (dupArr.indexOf(num) === dupArr.lastIndexOf(num)) {
    unique.push(num);
  }
}
console.log(unique);
