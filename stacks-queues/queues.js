// const q = [];

// q.push("first");
// q.push("second");
// q.push("third");

// q.shift();
// q.shift();
// q.shift();

// q.unshift("first");
// q.unshift("second");
// q.unshift("third");

// q.pop();
// q.pop();
// q.pop();

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue(){
        if(!this.first){
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