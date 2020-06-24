// selection sort

// similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// moving beginning to end
// sorted data happens in the beginning

[5,3,4,1,2]
// min is now 3 if comparing 5 and 3 
// now comparing 5 and 4, min is still 3 
// now comparing 5 and 1 , min is NOW 1
// now comparing 5 and 2, min is still 1 
// now we put that smallest item into the slot of that first item and swap

[1,3,4,5,2]

// pseudocode 
// store the fire element as the smallest value you've seen so far
// compare the item to the next item in the array until you find the smallest number 
// if a smaller number is found, designate the smaller number to be new minimum and continue until end of array
// if minimum minimum is not the value you initially began with, swap the two values
// repeat this with the next element until the array is sorted