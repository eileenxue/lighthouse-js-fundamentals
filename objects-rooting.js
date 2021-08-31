// Assignment: Objects - We're Rooting For You! 

// Proposed steps:
// 1. Loop through the vegetables
// 2. Use if statements to determine the metric and compare
// 3. Return name of the winner

// New Solution
const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function(a, b){
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter;
}


// Old solution that wasn't working properly
/* const judgeVegetable = function (vegetables, metric) {
  let winningPoints = 0;
  let winner;
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > winningPoints){
      winningPoints = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
    return winner;
  }
} */


// Testing 
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));