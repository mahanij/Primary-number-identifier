let entredNumber = Number(prompt("Hello please enter the number"));
let leftOver = 0;
for (let i = 2; i < entredNumber; i++) {
  if (entredNumber % i == 0) {
    leftOver += entredNumber;
    console.log(i);
  } else if (entredNumber % i != 0) {
    leftOver--;
  }
}
if (leftOver < 0 || entredNumber == 2) {
  alert("this number is primary number");
  console.log("this number is primary number")
} else if (leftOver > 0) {
  alert("this number is not primary number");
  console.log("this number is not primary number")
} else if (leftOver == 0) {
  alert("what you entered is not allowed");
  console.log("what you entered is not allowed")
}
