// write a function called averagePair

// given a sorted array of integers and a target average, determine if there is 
// a pair of values in the array where the average of the pair equals
// the target average. There may be more than one pair that matches the target

// time : O(N)
// space : O(1)

function averagePair(array, targetAvg){
    let start = 0;
    let end = array.length - 1;
    
    while (start < end){
        const num1 = array[start];
        const num2 = array[end];
        let pairAvg = (num1 + num2) / 2;
        if(pairAvg === targetAvg){
            return true
        } else if(pairAvg < targetAvg){
            start++;
        } else {
            end--;
        }
    }
    return false
}

console.log(averagePair([1,2,3], 2.5))