let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// ordered lists

// use them when you need order
// when you need fast access/sertion and removal (sort of )

// Big O of Arrays
// insertion - it depends
// removal - it depends
// searching - O(n)
// access - O(1)

// inserting and removing at the end of an array is fine, at the beginning is WAY less efficient
// inserting and removing at beginning - O(n)

// Big O of Array Operations
// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(N * log N)
// forEach, map, filter, reduce, etc - O(N)