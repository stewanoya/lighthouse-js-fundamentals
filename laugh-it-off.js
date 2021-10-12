let haS = ""
function laugh(num) {
  for (i = 0; i < num; i++) {
    haS += "ha";
  }
  haS += "!";
  return haS;
}

console.log(laugh(3));