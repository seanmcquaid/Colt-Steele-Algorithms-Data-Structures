// linear search algorithm

// given an array, the simplest way to search for a value is to look at every element in the array
// and check to see if it's the value we want

// javascript has search!

// many different search methods for an array : 
// indexOf
// includes
// find
// findIndex

// but how do these functions work? - they each check every element, one at a time

// linear search

// let's search for 12

let array = [5,8,1,100,12,3,12];

// linear search pseudo code
// function accepts an array and a value
// loop through the array to see if they current value is equal to the value passed in
// if it is, return the index at which the element is found
// if the value is never found, return -1

function linearSearch(array,value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

// console.log(linearSearch(array,12))

// binary search

// significant improvement on libear search
// much much faster!
// rather than eliminating one element at a time you can eliminate HALF of the remaining elemnts at a time
// only works on sorted arrays

// divide and conquer

// split the array in two pieces, pick a pivot point. then check each side to see which half it'd be

let array2 = [1,3,4,6,8,9,11,12,15,16,17,18,19];

// binary search pseudocode

// this function accepts a sorted array and a value
// create a left pointer at the start of the array and a right pointer at the end of the array
//  while the left pointer comes before the right pointer:
// create a pointer in the middle
// if you find the value you want, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right point down
// if you never find the value, return -1

// my attempted solution

function binarySearch(array, value){
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer){
        let middlePointer = Math.round((leftPointer + rightPointer) / 2);
        if(array[middlePointer] === value){
            return middlePointer;
        } else if (array[middlePointer] < value){
            leftPointer = middlePointer;
        } else if(array[middlePointer] > value){
            rightPointer = middlePointer;
        }
    }
    return - 1
}

console.log(binarySearch(array2,16))