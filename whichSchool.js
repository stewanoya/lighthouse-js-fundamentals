const whichSchool  = function (age) {

  if (age < 13) {
    return("Elementary School"); // if persons age is below 13, they will be told to choose elem school
  } else if (age >= 13 && age <= 18) {
    return("Secondary School"); // if age is 13 to 18 including being exactly 13 and 18, they will choose sec. school 
  } else {
    return("Lighthouse Labs");
  }

}

console.log(whichSchool(12));