//1
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
//2
for (let i = 2; i <= 9; i++) {
  console.log(`Cuu chuong ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("================");
}
//3
let oddNumberArray = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    oddNumberArray.push(i);
  }
}
console.log(oddNumberArray);
//4
let userName = "user";
let domain = "example.com";
for (let i = 1; i <= 10; i++) {
  console.log(`${userName}${i}@${domain}`);
}
//5
let revenueArray = [
  {
    month: 2,
    total: 100,
  },
  {
    month: 3,
    total: 100,
  },
  {
    month: 4,
    total: 100,
  },
];
let sumRevenue = 0;
for (let i = 0; i < revenueArray.length; i++) {
  sumRevenue += revenueArray[i].total;
}
console.log(`tong doanh thu la ${sumRevenue}`);
