// used to store key value pairs
// keys are not ordered
// fast for all operations

// Python - dictionaries
// JS - Object and Maps
// Java, Go and Scala have Maps
// Ruby has Hashes

// To implement a has table, we'll use an array
// We'll need a way to converts keys to valid array indices
// called a hash function

// What makes a good hash ? 
// Fast, doesn't cluster options at specific indices but distributes uniformly
// Same input yields same output

function hash(string, lengthOfArray){
    let total = 0;
    let weirdPrime = 31;
    for(let i = 0; i < Math.min(string.length, 100); i++){
        // this will map each letter to the corresponding position in the alphabet
        let char = string[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * weirdPrime + value) % lengthOfArray;
    }
    return total;
};

hash("pink", 8);

// dealing with collisons
// even with a large array and a great has function, collisions are inevitable

// linear probing, when we find a collision, we search throug the array for the next empty slot