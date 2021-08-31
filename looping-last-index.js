// Create a function that determines the last index of an item in an array
function lastIndexOf(array, num){
  var result = 0;
  var match = false;
  for (var i = array.length; i >= 0; i--){
    if(num === array[i]){
      result = i;
      match = true;
      break;
    }
  }
  if (match){
    return result;
  } else {
    return -1;
  }
}


// Console Log Tests 
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);