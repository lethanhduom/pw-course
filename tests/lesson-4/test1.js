let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K17";
const crew = ["StudentA", "StudentB", "StudentC"];
//1
function launchShip(arr) {
  console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${arr} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}`);
}
launchShip(crew);
//2
function calculateDistance(speed, time) {
  console.log(`khoảng cách: ${speed * time}`);
}
calculateDistance(1000, 24);
//3
function convertTimeToHex(time) {
  console.log(`thời gian sang thập lục phân là: ${time.toString(16)}`);
}
convertTimeToHex(120);
//4
function decryptCode(code) {
  let result = "";
  for (const c of code) {
    if (c === " ") {
      result += " ";
    } else if (c.toUpperCase() === c) {
      result += c.toLowerCase();
    } else {
      result += c.toUpperCase();
    }
  }
  return result;
}
console.log(decryptCode("K17 Challenge"));
//5
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
