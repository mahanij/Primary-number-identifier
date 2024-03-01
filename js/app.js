let entredNumber = Number(prompt("Hello please enter the number"));
let exept = 0;
for (let i = 2; i < entredNumber; i++) {
  if (entredNumber % i != 0) {
    exept++;
  } else {
    console.log(1)
    console.log(i);
    console.log(entredNumber)
  }
}
if (exept == 0) {
  alert("this number is primary number");
} else {
  console.log("this number is not primary number");
}
