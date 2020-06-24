// a sorting algorithm where the largest values BUBBLE up to the top 
// example of the bubbling eff
// [5,3,4,1,2]
// [3,5,4,1,2]
// [3,4,5,1,2]
// [3,4,1,5,2]
// [3,4,1,2,5]

// before we sort, we must swap!

// ES5
// function swap(arr,idx1,idx2){
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// ES6
// this seems a little unclear to me but is clearly more concise
// const swap = (arr,idx1,idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }


// pseudocode
// start looping the end of the array towards the beginning with a var called i
// start an inner loop called j from the beginning until i-1
// if arr[j] is greater than arr[j+1] , swap!
// return the sort array

// upoptimized

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// based off pseudo code
// this way the code runs less comparisons! if you start from the end, the window gets smaller


// function bubbleSort(arr){
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }


// solution using updated swap from ES6

// function bubbleSort(arr){
//     const swap = (arr,idx1,idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j< arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 swap(arr,j, j+1)
//             }
//         }
//     }
//     return arr
// }

// optimized fully
// this prevents going through an array that's already sorted 

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                // swap
                noSwaps = false;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(noSwaps){
            break
        }
    }
    return arr
}

// time complexity is generaly O(n ^2)
// if data is nearly sorted - it's more like linear time

console.log(bubbleSort([37,45,29,8]))