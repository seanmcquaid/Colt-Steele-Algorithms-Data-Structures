function outer(input){
    let outerScopedVariable = [];
    function helper(helperInput){
        helper(helperInput--);
    }
    helper(input)

    return outerScopedVariable
}

// two functions
// outer function and then recursive function
// this is just a pattern
// commonly done when we need to compile something like an array

// example

function collectOddValues(arr){
    let result = [];

// result is out of scope of helper so it wont reset

    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        console.log(helperInput)
        
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOddValues([1,2,4,5]))