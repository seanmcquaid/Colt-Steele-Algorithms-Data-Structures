// how recursive functions work

// invoke the same function with a different input until you reach your base case
// base case = the condition when the recursion ends
// kind of like a while loop in that there needs to be something that stops it

// two things needed for recursive function: 
// 1) base case
// 2) different input

// recursive

function countDown(num){
    if(num <= 0){
        // this is our base case
        console.log("all done")
        return
    }
    console.log(num);
    num--;
    // this created a different input!
    countDown(num);
}

// iteratively

// function countDown(num){
//     for(let i = num; i > 0; i--){
//         console.log(i)
//     }
//     console.log("all done")
// }

countDown(5)