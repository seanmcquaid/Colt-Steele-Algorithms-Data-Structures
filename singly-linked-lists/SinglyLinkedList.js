// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

// bad way to represent linked list

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// console.log(first)

class SinglyLinkedList{

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return undefined
        }
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        // console.log(current.val)
        // console.log(newTail)
        return current
    }

    shift(){
        if(!this.head){
            return undefined
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
        return current
    }

    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true
        } else {
            return false
        }
    }

    insert(index,val){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length){
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let temp = prev.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop()
        }
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this
    }
}

let list = new SinglyLinkedList
list.push("Hello")
list.push("Goodbye")
list.push("!")
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.unshift("stuff"))
// console.log(list.get(0))
// list.set(0,"yogurt")
// console.log(list.get(0))
// list.insert(1,38)
console.log(list.reverse())

// list.traverse()
// Pushing 
// add a new to the end of the list

// the function should accept a value
// create a node using the value to the function
// if there is no head property on the list, set the head and tail to be the newly created node
// otherwise set the next property on the tail to be the new node and set the tail property on the
// list to be the newly created node
// increment the length by one

// Popping
// removing a node from the end of the linked list

// pseudocode
// if there are nodes in the list, return undefined
// loop through the entire list until you reach the tail
// set the next property of the 2nd to last node to be null
// set the tail to be the 2nd to last node
// subtract 1 from the length
// return the value of the node removed

// shifting

// removes a node from the beginning of the linked list

// pseudocode
// if there are no nodes, return undefined
// store the current head property in a variable
// set the head property to be the current head's next property
// decrement the length by 1 
// return the value of the node removed

// unshifting

// adding a new node to the beginning of the linked list

// functions accepts a value
// create a new node using the value passed to the function;
// if there is no head property on the list, set the head and tail to be the newly created node
// otherwise set the newly created node's next property to be the current head property on the list
// set the head property on the list to be that newly created node
// increment the length by 1 
// return the linked list

// Get 

// retrieving a node by it's position in the linked list

// pseudocode
// function should accept an index
// if the index is less than zero or greater than or equal to the length of the list, return null
// loop through the list until you reach the index and return the node at that specific index;

// Set

// changing the value of a node based on it's position in the linked list

// Pseudocode
// function should accept index and a value
// use your get function to find the specific node
// if node is not found, return false
// if node is found, set the value of that node to be the value passed to the functiuon and return true;

// Insert

// adding a node to the linked list at a specific position

// pseudocode
// function takes index and value
// if the index is less than zero or grater than the length, return false
// if the index is the same as the length, push a node to the end of the list
// if the index is 0, use unshift
// otherwise, use the get method, access the node at the index - 1
// set the next property on that node to be the new node
// set the next property of the new node to the old next old
// increment the length
// return true

// remove 

// removing a node from the linked list at a specific position

// pseudocode 

// if the index is less than zero or greater than or equal length, return undefined
// if the index is the same as the length-1 - pop
// if the index is 0, shift
// otherwise, use get method to access the node at index -1 
// set the next prop in that node to be the next of the next node
// decrement the length
// return the value of the node removed

// reverse

// reversing the linked list in place!

// pseudocode

// swap the head and tail
// create a var called next
// created a var called prev
// create a variable called node or current and initialize to start the head
// loop through the list
// set the next property on whatever the current node is
// set the next property on whatever the pre is 
// set prev to be val of node var
// srt the node var to be the value of the next var

// Big O of Singly Linked Lists
// insertion - O(1)
// Removal - It depends.... O(1) or O(N)
// Searching - O(N)
// Access - O(N)

// recape

// SLL are an excellent alt to arrays when insertion and deeletion at the beginning are freq required
// arrays contian a built in index whereas linked lists do not

// the idea of a list DS that consists of nodes is the foundation for other data structures