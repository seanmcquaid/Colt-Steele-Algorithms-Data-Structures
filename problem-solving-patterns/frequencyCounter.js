// this pattern uses objects or sets to collect values/frequencies of values

// this can often avoid the need for nested loops or O(N^2) operations with arrays/strings

// this is usually O(N) time

// example : write a function called same that accepts two arrays
// the function should return true if every value in the array has it's correspding value squared in the second array
// the frequency of values must be the same

// same([1,2,3], [4,1,9]) = true

// "naive" solution

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i =0 ; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let counterOne = {};
    let counterTwo = {};
    for(let val of arr1){
        counterOne[val] = (counterOne[val] || 0) + 1;
    }
    for(let val of arr2){
        counterTwo[val] = (counterTwo[val] || 0) + 1;
    }
    for(let key in counterOne){
        if(!(key ** 2 in counterTwo)){
            return false
        }
        if(counterTwo[key ** 2] !== counterOne[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,4], [1,4,16]))