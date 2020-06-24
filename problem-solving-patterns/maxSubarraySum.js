// given an array of integers and a number, write a function called
// maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function

// Note that a subarray must consist of consecutive elements from the original
// array. 

function maxSubarraySum(array,num){
    let tempSum = 0;
    let maxSum = 0;
    if(array.length < num){
        return null
    }
    for(let i = 0; i < num; i++){
        maxSum += array[i];
    }
    // console.log(maxSum)
    tempSum = maxSum
    for(let i = num; i < array.length; i++){
        tempSum = tempSum - array[i - num] + array[i];
        if(maxSum < tempSum){
            maxSum = tempSum
        }
    }
    return maxSum
}

let array = [100,200,300,400]

let num = 2;

console.log(maxSubarraySum(array,num))