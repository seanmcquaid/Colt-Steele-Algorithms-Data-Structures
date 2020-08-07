// Dynamic Programming
// "A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

// It only works on problems with 
// OPTIMAL SUBSTRUCTURE    &
// OVERLAPPING SUBPROBLEMS

// OVERLAPPING
// SUBPROBLEMS
// A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

// FIBONACCI SEQUENCE
// "Every number after the first two is the sum of the two preceding ones"

// OPTIMAL SUBSTRUCTURE
// A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

// MEMOIZATION
// Storing the results of expensive function calls and returning the cached result when the same inputs occur again

// TABULATION
// Storing the result of a previous result in a "table" (usually an array)
// Usually done using iteration
// Better space complexity can be achieved using tabulation

// MEMOIZATION
// Storing the result of an expensive function
// Usually done using recursion

// TABULATION
// Storing the result of a previous result in a "table" (usually an array)
// Usually done using iteration
// Better space complexity can be achieved using tabulation

// WHERE IS THIS ACTUALLY USED?
// Artificial Intelligence
// Speech Recognition
// Caching
// Image Processing
// Shortest Path Algorithms
// Much, much more!

// GREEDY ALGORITHMS
// A greedy algorithm is an algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.

// WHAT?
// An algorithm that makes the best guess about what the right answer is and tries to solve it that way as quickly as possible!

// WHERE ARE THEY USED?
// You've seen one already!
// Remember how Dijkstra's Algorithm works!

// RECAP
// Dynamic Programming is the idea of breaking down a problem into smaller subproblems - it's hard
// Optimal substructure is required to use dynamic program and involves figuring out the correct expression to consistently solve subproblems
// Overlapping subproblems is the second essential part of dynamic programming 
// Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
// Backtracking is quite useful when solving for restrictive conditions with unknown possibilities