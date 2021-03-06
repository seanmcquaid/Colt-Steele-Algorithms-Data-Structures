// Graphs

// A graph data structure consists of a finite set of nodes, together with a set of unordered pairs
// for an undirected graph or a set of ordered pairs for a directed graph

// Uses for Graphs
// Social Networks
// Location / Mapping
// Routing Algorithms
// Visual hierarchy
// file system structure

// Types of Graphs
// Vertex - a node
// Edge - Connection between nodes
// Undirected - no polarity to the edges - two way connections
// Directed - represented with arrows - polarity with each edge - one way connections
// Weighted - has value for each edge
// Unweighted - has no value for each edge

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }
}