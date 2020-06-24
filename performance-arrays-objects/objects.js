let instructor = {
    firstName : "Kelly",
    isInstructor: true,
    favoriteNumbers : [1,2,3,4]
}

// unordered, key value pairs

// when to use objects:
// when you dont need order
// when you need fast access/insertion and removal

// insertion = O(1)
// removal = O(1)
// searching = O(N)
// access = O(1)

// Object.keys = O(N)
// object.values = O(N)
// object.entries = O(N)
// hasOwnProperty - O(1)

console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(Object.entries(instructor))
console.log(instructor.hasOwnProperty("firstName"))