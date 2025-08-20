// 1
const car = {
  make: "toyota",
  model: "Corolla",
  year: 2021,
};
console.log(`year: ${car.year}`);
//2
const person = {
  name: "Dilys",
  address: {
    street: "Street 1",
    city: "City 1",
    country: "Country 1",
  },
};
console.log(`street name: ${person.address.street}`);
//3
const student = {
  name: "Dilys",
  grades: {
    math: 8,
    english: 8,
  },
};
console.log(`math: ${student["grades"]["math"]}`);
//4
const settings = {
  volume: 50,
  brightness: 20,
};
settings.volume = 60;
console.log(settings);
//5
const bike = {};
bike.color = "pink";
//6
const employee = {
  name: "Dilys",
  age: 20,
};
delete employee.age;
//7
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
