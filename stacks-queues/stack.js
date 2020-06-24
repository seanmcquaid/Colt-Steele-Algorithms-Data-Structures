// let stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");

// stack.pop();

// stack.unshift("google");
// stack.unshift("instagram");
// stack.unshift("youtube");

// stack.shift();

// Linked List Implementation

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);

        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.size++;

        return this.size;
    }

    pop(){
        if(this.size === 0){
            return null;
        }

        const temp = this.first;
        
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}