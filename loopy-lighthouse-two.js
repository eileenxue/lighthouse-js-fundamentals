/*
- range should be an array of 2 numbers representing the start and end values for the loop.
- multiples should be an array of 2 numbers representing the multiples you want to replace with words.
- words should be an array of 2 strings representing the words that will replace the multiples.
*/

function loopyLighthouse(range, multiples, words){
  for (let x = range[0]; x <= range[1]; x++){
    if (x % multiples[0] === 0 && x % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if (x % multiples[0] === 0){
      console.log(words[0]);
    } else if (x % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(x);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);