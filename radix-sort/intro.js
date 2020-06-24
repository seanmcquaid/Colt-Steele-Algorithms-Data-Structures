// comparison sorts - comparing two things
// average time complexity 
// bubble, insertion , selection - O(n^2)
// quick,merge - O(n log n)

// can we do better?
// yes but not by making comparisons

// prime example - radix sort
// sorting data in a different way

// radix sort

// works on lists of numbers
// usually used with binary numbers
// it never makes comparisons between two elements

// it exploits the fact that information about the size of a number is encoded in the number of digits
// more digits means a bigger number

// how does it work?

// take a list of numbers
// create 10 different buckets 0 - 9
// go through entire list of numbers
// look at first digit from the right side
// based off that number, group into buckets
// ex 86, 4386 in same bucket
// 902 in own bucket
// form back into a list keep their order

// go to 2nd digit from the right and make buckets based off that

// continue this on the 3rd digit

