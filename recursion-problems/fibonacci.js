// write a recursive function called fib that accepts a number and returns the nth number in the fibonacci sequence

function fib(num){
    if(num <= 2){
        return 1
    }
    return fib(num-1) + fib(num-2)
}

console.log(fib(6))
// fib seq: 1,1,2,3,5,8
// fib(4)
// fib(3) + fib(2)
// (fib(2) + fib(1)) +fib(2)


// fib(6)
// fib(5) + fib(4)