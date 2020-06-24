// implement a function called countUniqueValues which accepts a sorted array,
// and counts the unique values in the array, there can be negative numbers
// but they will always be sorted

function countUniqueValues(array){
    if(array.length === 0){
        return 0
    }
    let i = 0;
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j];
        } 
    }
    return i + 1;
}

let array = [1,1,1,2,2,3,4,5,5,5,6,7]

console.log(countUniqueValues(array));