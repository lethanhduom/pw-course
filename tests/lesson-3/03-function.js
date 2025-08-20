//1
function multiply(a, b) {
  return a * b;
}
multiply(8, 7);
multiply(9, 10);
//2
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}
console.log("giá trị min là: ", findMin(4, 4, 4));
console.log("giá trị min là: ", findMin(10, -4, 9));
//3
function getStopStudents(students, threshold) {
  const nameArray = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      nameArray.push(students[i].name);
    }
  }
  return nameArray;
}
const students = [
  { name: "An", score: 8.5 },
  { name: "Bình", score: 9.2 },
  { name: "Chi", score: 7.8 },
  { name: "Dũng", score: 8.8 },
  { name: "Hà", score: 9.5 },
];
const nameStudentArray = getStopStudents(students, 9.0);
console.log(nameStudentArray);
//4
function calculateInterest(principal, rate, years) {
  return principal + (principal * rate * years) / 100;
}
console.log(calculateInterest(5000000, 5, 2));
