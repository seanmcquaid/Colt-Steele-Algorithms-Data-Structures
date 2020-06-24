// colt solution
function linearSearch(array,value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

linearSearch([34,56,1,2], 1)

// this is O(N) complexity

// best case : O(1)
// worst case : O(N)

// this is the best we can do with an unsorted piece of data