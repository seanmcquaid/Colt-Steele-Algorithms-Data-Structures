// Graph Traversal Use Cases

// Peer to peer networking
// Web crawlers
// finding closest matches/recommendations
// Shortest path problems 
// GPS Navigation, Solving Mazes and AI (Shortest path to win a game)

// Depth First
// Explore as far down one track before backtracking

// Recursive DFS
// DFS(vertex)
// if vertex is empty - return this
// add vertex to results list
// mark vertex as visited
// for each neighbor in vertex neighbors : 
// if neighbor is not visited
// recursively call dfs on neighbor

// Iterative DFS
// Let S be a stack
// s.push(start)
// while s is not empty
// vertex = s.pop()
// if vertex is not labeled as discovered : 
// visit vertex and add to result list
// label vertex as discovered
// for each vertex of neighbors, push onto stack

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

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex){
            if(!vertex){
                return null;
            }

            result.push(vertex);
            visited[vertex] = true;

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });

        }

        dfs(start);

        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }
}