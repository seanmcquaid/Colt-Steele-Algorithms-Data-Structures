class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0; i < Math.min(string.length, 100); i++){
            // this will map each letter to the corresponding position in the alphabet
            let char = string[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weirdPrime + value) % lengthOfArray;
        }
        return total;
    }
}