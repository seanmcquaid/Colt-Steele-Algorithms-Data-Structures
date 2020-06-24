// implement a function called, areThereDuplicates which accepts
// a variable number of arguments and checks whether there are any duplicates
// among the arguments passed in

// this can be solved with either the frequency counter pattern or 
// the multiple pointers pattern

// frequency counter

// function areThereDuplicates(){
//     // console.log(arguments)
//     let counter = {};
//     for (let i = 0; i < arguments.length; i++){
//         let argument = arguments[i];
//         counter[argument] = (counter[argument] || 0) + 1;
//     }
//     for(let key in counter){
//         if(counter[key] > 1){
//             return true
//         }
//     }
//     return false
// }

// multiple pointers

function areThereDuplicates(...args){
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++;
        next++;
    }
    return false
}

console.log(areThereDuplicates(1,3,5))