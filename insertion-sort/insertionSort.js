function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
        console.log(i,j)
        console.log(arr)
    }
    return arr
}

console.log(insertionSort([2,1,9,76,4]))

// time complexity - o(n^2)
// if you need a sorting algorithm that takes in data as it comes in,
// this is a good option