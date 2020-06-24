class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else {
            let current = this.root;
            while(true){
                if(newNode.value === current.value){
                    return undefined;
                }

                if(newNode.value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(newNode.value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        if(this.root === null){
            return false;
        }
        let current = this.root;
        let found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found){
            return undefined;
        }
        return current;
    }

    breadthFirstSearch(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return data;
    }

    depthFirstSearchPreOrder(){
        let data = [];

        const traverse = node => {
            data.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        };
        traverse(this.root);
        return data;

    }

    depthFirstSearchPostOrder(){
        let data = [];

        const traverse = node => {
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            data.push(node.value);
        };
        traverse(this.root);
        return data;

    }

    depthFirstSearchInOrder(){
        let data = [];

        const traverse = node => {
            if(node.left){
                traverse(node.left);
            }
            data.push(node.value);
            if(node.right){
                traverse(node.right);
            }
        };
        traverse(this.root);
        return data;

    }

}