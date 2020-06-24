// what is recursion?

// a process or a function that calls itself

// why use it? - IT'S EVERYWHERE

// JSON.parse / JSON.stringify - RECURSIVE
// document.getElementByID and DOM traversal algorithms - RECURSIVE
// Object traversal
// we will see it with more complex data structures
// its sometimes a cleaner alternative to iteration

// but first lets talk about functions

// in almost ALL programming languages, there is a built in data steructure that manages what happens when
// functions are invoked
// it's called the call stack!

// it's a stack data structure 
// any time a function is invoked it is placed on top of the call stack (push)
// when JS sees the return keyword or the function ends, the compiler will remove (pop)

// why do I care?
// You're used to function being pushed on the call stack and popped off when they are done
// when we write recursive functions,we keep pushing new functions onto the call stack! (the same function)

// where things go wrong

// no base case
// no different input
// no return statement
// stack overflow - maximum call size exceeded