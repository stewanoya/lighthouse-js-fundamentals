const chorus = "Can't stop, won't stop";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*")
  }
  console.log(chorus);
  repeat++
}
console.log("gamestop");