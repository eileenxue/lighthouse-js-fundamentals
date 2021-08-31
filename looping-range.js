// Define a function called range with 3 integer parameters (start, end, step)
// The function should return an array of numbers from start to end counting by step

function range (start, end, step){
  let array = [];
  if (start < end && step > 0){
    //array.push(start);
    for (var i = start; i <= end; i+= step){
      array.push(i);
    }
  }
  return array;
}


// Console Log Tests
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));