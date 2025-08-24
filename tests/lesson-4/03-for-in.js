const student = { name: "Alex", age: 10, salary: 20 };
//3.1
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
//3.2
let sum = 0;
for (const key in student) {
  if (typeof student[key] === "number") {
    sum += student[key];
  }
}
//3.3
const keyArray = [];
for (const key in student) {
  keyArray.push(key);
}
