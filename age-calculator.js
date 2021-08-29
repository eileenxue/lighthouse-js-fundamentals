// Create a function to determine someone's age
// The function "ageCalculator" needs to have three parameters: name, yearOfBirth, currentYear

const ageCalculator = function (name, yearOfBirth, currentYear){
  const currentAge = currentYear - yearOfBirth;
  return name + " is " + currentAge + " years old.";
}

// Console Log Tests
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));