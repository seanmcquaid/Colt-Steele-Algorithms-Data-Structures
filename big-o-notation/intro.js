// Big O notation

// used to determine "best" solution to an algorithm

// suppose we want to write a function that calculates the sum of all numbers from 1 up to n

// function addUpTo(n){
//     let total = 0;
//     for(let i =0; i <=n; i++){
//         total+= i;
//     }
//     return total
// }

function addUpTo(n){
    return n * (n+1) /2;
}

// which is better?

// Faster?
// Less memory intensive?
// More readable?

// can use performance.now() before and after function to time results
// speed is not always precise

// count the number of simple operations to check efficiency

// Big O allows us to talk formally about how the runtime of an algorithm
// grows as the inputs grow

// we only care about the broad trends

// Definition of Big O

// an algorithm is O(f(n)) if the number of simple operations the computer
// has to do is eventually less than a constant times f(n) as n increases

// linear = f(n) = n = number of operations is always bounded by a multiple of n = O(n)

// quadatric = f(n) = n ^ 2 = nested loops = O(n * n) = 0(n^2)

// constant = f(n) = 1; - always a certain amount of operations so O(1)

// could be different but this is the most basic def


// rules of thumb for big O:
// 1) Constants don't matter - 
// O(2n) > O(n)
// O(500) > O(1)
// O(13 n ^ 2) > O(n^2)
// 2) arithmetic operations are constant
// 3) variable assignment is constant
// 4) accessing elements in an array or an object by key is also constant
// 5) in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

// space complexity - amount of memory taken up
// does not include space taken up by inputs

// rules of thumb
// 1) Most primitives (booleans,numbers,undefined,null) are constant space
// 2) Strings require O(n) space where n is the string length
// 3) References types are generally O(n), where n is the length (for arrays) or the number of keys(for objects)

// logarithms
// definition: inverse of exponents
// the log of a number roughly measures by the number of times you can divide that number 2 before you get a value
// that's less than or equal to one
// O(log n) complexity is GREAT, it's right above constant

// searching algs have log complexity
// sorting algs have log complexity
// recursion involves log complexity