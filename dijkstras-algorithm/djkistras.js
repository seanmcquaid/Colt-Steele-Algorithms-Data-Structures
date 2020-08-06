class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node : vertex2, weight});
        this.adjacencyList[vertex2].push({node : vertex1, weight});
    }

    djikstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        
        for(let vertex in this.adjacencyList){
             if(vertex === start){
                 distances[vertex] = 0;
                 nodes.enqueue(vertex, 0);
             } else {
                 distances[vertex] = Infinity;
                 nodes.enqueue(vertex, Infinity);
             }
             previous[vertex] = null;
        }
    }
}