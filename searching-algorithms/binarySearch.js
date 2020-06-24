// colt solution

function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle
    } else {
        return - 1
    }
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28))

// worst and avg case - O(log n)
// best - O(1)

// 16 elements - 4 steps