


/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}




// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won


const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}


const g = function(x){
  return x.split("");
};

let sum =0;

function getTotalPoints(str){
    g(str).forEach ((item)=>{
    sum +=RESULT_VALUES[item];
});

  return sum;
}



/* let getTotalPoints = function (wins, draws, losses){
  return totalPointsWon; 
};
*/ 


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"


const orderTeams = function(...arg){
  arg.forEach( function( arg){
    console.log(`${arg.name}:${getTotalPoints(arg.results)}`);
  }
  )
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);




// should log the following to the console:
// Sounders: 7
// Galaxy: 4




