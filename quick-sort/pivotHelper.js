// might be called partition or pivot

// given an array, this helper function should designate an element as the pivot
// it should then rearrange elements in the array so that the values less than the pivot are moved to the left of the pivot and all values greater than
// are moved to right of the pivot
// the order on either side doesn't matter
// the helper should do this IN PLACE and should not create a new array
// when complete, the helper should return the index of the pivot

// the runtime of quick sort depends in part on how one selects the pivot
// ideally, the pivot would be the median
// for simplicity, we will choose the pivot to be the first element

// pivot helper example

// let arr = [5,2,1,8,4,7,6,3];

// pivot(arr) = 4 (index)
// any of the following are acceptable mutations:
// [2,1,4,3,5,8,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,8,7]

// there are other acceptable mutations too!

// pseudocode
// it will help to accept three arguments, an array, a start index and an end index (these can default to 0 and the array length -1 respectively)
// grab the pivot from the start of the array
// store the current pivot index in a varialbe( this will keep track of where the pivot index shold end up)
// if the pivot is greater than the current element, indrement the pivot index variable and then swap the current element with the element at the pivot index
// swap the starting element with the pivot index
// return the pivot index

function pivot(arr,start = 0, end = arr.length + 1){
    const swap = (arr,index1,index2) => {
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])
    }
    let pivot = arr[start];
    let swapIndex = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex, i)
            console.log(arr)
        }
    }
    swap(arr,start,swapIndex)
    console.log(arr)
    return swapIndex;
}
// should return index of 3
let arr = [4,8,2,1,5,7,6,3]

// example swapping
// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]

// [3,2,1,4,5,7,6,8]


console.log(pivot(arr))