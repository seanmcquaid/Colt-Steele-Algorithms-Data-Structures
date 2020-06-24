// define a function that accepts a list of numbers
// figure out how many digits the largest number has

// loop from k = 0 up to the largest number of digits
// for each iteration of the loop:
    // create buckets for each digit (0-9) (empty arrays)
    // place each in the corresponding bucket based on its kth digit
// replace our existing arry with values in buckets starting 0 and going up to 9
// return list at the end


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

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length : 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i])
        }
        // console.log(...digitBuckets)
        nums = [].concat(...digitBuckets)
        // console.log(nums)
    }
    return nums
}

console.log(radixSort([23,245,34444,64434,2]))

// big o
// best, avg, worst - O(nk)
// n - length of the array
// k - numbers of digits (avg)