function sumRange(num){
    if(num === 1){
        return 1
    } else {
        return num + sumRange(num-1)
    }
}

console.log(sumRange(3))

// sumRange(3)
// return 3 + sumRange(2)
//                  return 2 + sumRange(1)
//                                  return 1 

// return 3 + return 2 + return 1 

// can you spot the base case? 
// base cases usually involve a conditional
// if num === 1 > return 1 


// did you notice the different input?
// num - 1

// what would happen if we didn't return?