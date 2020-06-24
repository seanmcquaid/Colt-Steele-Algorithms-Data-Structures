// assume arrays are sorted and return the combo of those two sorted arrays

// in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays

// given two arrays which are sorted, this helper function should create a new array which is also sorted and 
// consists of all the elements in the two new input arrays

// this function should run O(n + m) time and space and shouls NOT modify the parameters push to it 

// pseudo code 
// create an empty array, take a look at the smallest values in each input array
// use while loops for this
// j and i both start at 0
// if the value in the first array is smaller than the value in the second array, push the value in the first array
// into our results and move on to the next value in the first array
// once we exhaust one array, we push the remaining values from the other array

function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results
}

console.log(merge([1,10,50], [2,14,99,100]))

// [1,10,50] [2,14,99,100]
// [1,2,10,14,50,99,100]