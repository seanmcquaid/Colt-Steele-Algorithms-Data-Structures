// insertion sort

// builds up sort by gradually creating a larger left half which is always sorted

[5,3,4,1,2]
[3,5,4,1,2]
[3,4,5,1,2]
[1,3,4,5,2]
[1,2,3,4,5]

// pseudocode

// start by picking the second element in the array
// now compare the second element with the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order,
// iterate through the sorted portion (ie the left side)  to place the element in the 
// correct place
// repeat until the array is sorted