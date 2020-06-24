// this pattern involves creating a window which can either be an array or a number from one position to another

// depending on a certain condition, the window either increases or closes and a new window is created

// very useful for keeping track of a subset of data in an array/string, etc


// naive solution

// function maxSubarraySum(arr, num){
//     if(num > arr.length){
//         return null;
//     }
//     let max = -Infinity;
//     for(let i = 0; i <arr.length - num + 1; i++){
//         let temp = 0;
//         for(let j = 0; j < num; j++){
//             temp+= arr[i + j];
//         }
//         if(temp > max){
//             max = temp
//         }
//     }
//     return max
// }

let array = [2,6,9,2,1,8,5,6,3]
let num = 3;

// more efficient solution

function maxSubarraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num){
        return null
    }
    for(let i =0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum= maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSubarraySum(array, num));