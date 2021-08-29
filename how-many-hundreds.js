// Assignment: How Many Hundreds

function howManyHundreds (num){
  return (num - (num % 100)) / 100;
}

// Console Log Tests
console.log(howManyHundreds(896));
console.log(howManyHundreds(1000));
console.log(howManyHundreds(99));