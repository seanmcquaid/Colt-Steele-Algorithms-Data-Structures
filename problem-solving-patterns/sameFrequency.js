// write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits

// your solution must be time complexity of O(N)

function sameFrequency(num1,num2){
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    let splitNum1Arr = num1Str.split("");
    let splitNum2Arr = num2Str.split("");

    if(splitNum1Arr.length !== splitNum2Arr.length){
        return false;
    }
    
    let counterOne = {};
    let counterTwo = {};

    for(let i = 0; i < splitNum1Arr.length; i++){
        let number = splitNum1Arr[i];
        counterOne[number] = (counterOne[number] || 0) + 1;
    }

    for(let i = 0; i < splitNum2Arr.length; i++){
        let number = splitNum2Arr[i];
        counterTwo[number] = (counterTwo[number] || 0) + 1;
    }

    for(let key in counterOne){
        if(counterOne[key] !== counterTwo[key]){
            return false
        }
    }
    return true
}

console.log(sameFrequency(123,3214))