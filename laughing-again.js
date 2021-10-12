let laugh = function(ha) {
  sound = ""
  for (let i = 1; i <= ha; i++) {
    sound += "ha"
  }
  return sound + "!"
}
console.log(laugh(3))