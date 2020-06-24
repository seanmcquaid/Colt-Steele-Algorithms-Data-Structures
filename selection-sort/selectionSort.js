// attempted solution

// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let lowest = i;
//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let temp = array[i];
//             array[i] = array[lowest];
//             array[lowest] = temp;
//         }
//     }
//     return array
// }

function selectionSort(arr){
    const swap = (arr,index1, index2)=>{
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])
    }

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest){
            swap(arr,i,lowest)
        }
    }
    return arr
}

let array = [34,22,10,19,17]

console.log(selectionSort(array));

// time complexity : O(n^2)
// if you want to minimize number of swaps, this is a good solution