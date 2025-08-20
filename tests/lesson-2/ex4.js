// a.
let height = 170;
// b.
let temp = 0;
if (height > 100) {
  temp = height % 100;
  console.log(
    "can nang ly tuong la: " +
      (temp * 9) / 10 +
      " kg" +
      ", can nang toi da la: " +
      temp +
      " kg" +
      ", can nang toi thieu la: " +
      (temp * 8) / 10 +
      " kg"
  );
}
if (height <= 100) {
  console.log("Chiều cao phải > 100cm để áp dụng công thức trong đề.");
}
