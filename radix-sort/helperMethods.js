// in order to implement radix sort, it's helpful to build a few helper functions first
// getDigit(num, place) - returns digit in num and the given place value

// 12345 - 0 position = 5

// function getDigit(num, i){
//     return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
// }

// function getDigit(num, i){
//     let numString = num.toString().split("")
//     if(i > numString.length){
//         return 0
//     }
//     let returnIndex = numString.length - i - 1;
//     let number = parseInt(numString[returnIndex])
//     return number
// }

// console.log(getDigit(7423,1))

// // need to find out how many digits are in a number
// // how many times do we need to sort into buckets

// function digitCount(num){
//     let numString = num.toString().split("");
//     return numString.length
// }

// // console.log(digitCount(2000))

// // need to make a function to see what the most digits we need to check is 

// function mostDigits(arr){
//     let highestDigitCount = 0;
//     for(let i = 0; i < arr.length; i++){
//         let digitAmount = digitCount(arr[i])
//         if(digitAmount > highestDigitCount){
//             highestDigitCount = digitAmount
//         }
//     }
//     return highestDigitCount
// }

console.log(mostDigits([1,3,111,33444]))


function getDigit(num, i){
    let numString = num.toString().split("")
    if(i >= numString.length){
        return 0
    }
    let returnIndex = numString.length - i - 1;
    let number = parseInt(numString[returnIndex])
    return number
}

function digitCount(num){
    let numString = num.toString().split("");
    return numString.length
}

function mostDigits(arr){
    let highestDigitCount = 0;
    for(let i = 0; i < arr.length; i++){
        let digitAmount = digitCount(arr[i])
        if(digitAmount > highestDigitCount){
            highestDigitCount = digitAmount
        }
    }
    return highestDigitCount
}