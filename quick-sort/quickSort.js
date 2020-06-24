// pseudocode

// call the pivot helper on the array
// recursively call quicksort on left and right side
// when the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index 
// and that subarray of the right of that index

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
            // console.log(arr)
        }
    }
    swap(arr,start,swapIndex)
    return swapIndex;
}

function quickSort(arr,left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr,left,right);
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr,pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))

// best / avg - O(N log n)
// worst - O(n^2)