function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0){
        return newArr
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr
}

let array = [1,2,3,5];

console.log(collectOddValues(array))

// tips!

// for arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them