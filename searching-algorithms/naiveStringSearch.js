// searching for substring occurence within longer string

let longString = "wowomgzomg";
let shortString = "omg";

// pseudocode
// loop over the longer string
// loop over the short string
// if the char dont match, break out of the inner loop
// if the char match, keep going
// complete the inner loop and find a match, increment count of matches
// return the count

function naiveSearch(long,short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            } else if (j === short.length-1) {
                count++;
            }
        }
    }
    return count;
}
console.log(naiveSearch(longString, shortString));