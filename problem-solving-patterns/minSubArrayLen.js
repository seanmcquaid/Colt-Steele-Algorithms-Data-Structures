// write a function called minSubArrayLen which accepts two parameters - an array
// of positive integers and a positive integer

// this function return the minimal length of a continguous subarray
// of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead

const array = [2,3,1,2,4,3];
const sum = 7

function minSubArrayLen(array,sum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length){
        // if current window doesn't add up to the given sum then move the window to the right
        if(total < sum && end < array.length){
            total += array[end];
            end++;
        }
        // if current window adds up to at least the sum given, then we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, (end-start))
            total -= array[start];
            start++;
        }
        // current total less than required but we reach the end, so we need to break this
        // otherwise, it'd be infinite
        else{
            break
        }
    }
    return minLen === Infinity ? 0 : minLen;

}

console.log(minSubArrayLen(array,sum))