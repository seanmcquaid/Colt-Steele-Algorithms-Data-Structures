// combination of merging and sorting
// exploits the that arrays of arrays of 0 or 1 elements are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 element and then building up a newly sorted array

[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3 , 5, 4] [7, 6, 1 ,2]

[8,3] [5,4] [7,6] [1,2]

[8] [3] [5] [4] [7] [6] [1] [2]

[3,8] [4,5] [6,7] [1,2]

[3,4,5,8] [1,2,6,7]

[1,2,3,4,5,6,7,8]