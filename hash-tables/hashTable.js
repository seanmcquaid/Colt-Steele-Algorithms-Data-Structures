class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            // this will map each letter to the corresponding position in the alphabet
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weirdPrime + value) % lengthOfArray;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return index;
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

// set
// accepts a key/value pasir
//  hashes the key
// stores the key value pair in the hash table via seperate chaining

// get
// accept a key
// hashes the key

// keys
// loops through the hash table aray and return an array of keys in the table

// values
// loops through the hash table array and returns an array of values in the table