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
    for(let char of string){
        // this will map each letter to the corresponding position in the alphabet
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % lengthOfArray;
    }
    return total;
};

hash("pink", 8);