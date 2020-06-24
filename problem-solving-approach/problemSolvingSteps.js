// What is an algorithm?
// a process or set of steps to accomplish a certain task

// almost everything you in programming involves some kind of algorithm
// it's the foundation of being a successful problem solver and developer

// 1) Devise a plan for solving problems
// 2) Master common problem solving patterns

// Problem solving steps:
// 1) Understand the problem
// 2) Explore concreate examples
// 3) Break it down
// 4) Solve/simplify
// 5) look back and refactor

// 1) Under the problem

// - can you restate the problem in my own words?
// - what are the inputs that go into the problems?
// what are the outputs that should come from the solution of the problem?
// can the outputs be determined from the inputs? in other words, do I have enough info to solve the problem? 
// it's okay if not! this is still early in the process
// how should I label the important pieces of data that are part of the problem?

// ex problem:
// write a function that takes two numbers and returns their sum
// - add two numbers 
// - inputs : ints? floats?
// string for large num?
// outputs : ints? floats? string for large num?
// label: add func, num1, num2, sum

// 2) explore concrete examples
// coming up with examples can help you understand the problem better
// example provide sanity checks that your eventual solution works how it should!

// start with simple examples with input and output
// progress to more complex examples
// explore examples with empty inputs
// explore examples with invalid inputs

// write a function that takes in a stirng returns counts of each character in the string

//should return {a:4}

// 3) BREAK IT DOWN!
// explicitly write out the steps you need to take


// 4) Solve/simplify
// if you can solve, go for it! otherwise, simplify the problem
// find the core difficult 
// ignore the difficulty
// write a simplified solution
// then incorporate the difficulty

// 5) look back and refactor!
// congrats on solving it but you need to go back and refactor!

// can you check the result?
// can you derive the result differently?
// can you understand it at a glance?
// can you use the result or method for some other problem?
// can you improve the performance of your solution?
// can you imrprove the performance of your solution?
// can you think of other ways to refactor?
// how have other people solved this problem?

let string = "aaaa try";

// function charCount(string){
//     // return an object with keys that are lowercase alphanumeric char in the string with counts of each

//     // make object to return at end
//     let result = {}
//     // loop over string for each character
//     // if char is a key in object, add one to count
//     // otherwise, add it and set value to one
//     // if char is something else, space, period, etc - don't do anything

//     for(let i = 0; i < string.length; i++){
//         let char = string[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             if(result[char] > 0){
//                 result[char]++
//             } else {
//                 result[char] = 1
//             }
//         }
//     }

//     return(result)

//     // return object at end

// }; 

function charCount(string){
    let result = {}
    for(let char of string){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result
}; 

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
    ){
        return false
    } else {
        return true
    }
}

console.log(charCount(string))