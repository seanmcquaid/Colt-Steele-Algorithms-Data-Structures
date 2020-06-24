// this is the bane of colt's existence

// same assumption as merge sort -easiest to solve with recursion

// like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted

// works by selecting on element called the pivot and finding the index where the pivot should end up in the sorted array

// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

[5,2,1,8,4,7,6,3]
// pivot = 5
// we know 5 will have an index of 4

[3,2,1,4, 5, 7,6,8]
// pivot is now 3
[1,2, 3,4,5,7,6,8]
// left side is done, now we need to do the right
// pivot is now 7
[1,2,3,4,5,6,7,8]