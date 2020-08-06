// Djikstra's Algorithm
// Uses Graphs + Priority Queues with Binary Heap
// One of the most famous and widely used algorithm around

// Finds the shortest path between two vertices on a graph

// Why is it useful?
// GPS - finding fastest route
// Network routing - finds open shortest path for data
// Biology - used to model sthe spread of a virus between humans
// airlines - same principle as GPS

// Pseudocode
// Should accept starting and ending vertex
// create an object and set each key to be every vertex in the adjacency list with a val of infinity except for the starting vertex which should have a value of 0
// after seeing a value in the distances object, add each vertex with a priority of infinity to the priority queue except the starting vertex
// create another object called previos and set each key to be every vertex in the adjancey list with a val of null
// start looping as long there is anything in the priority queue
// dequeue a vertex from the priority queue
// if that vertex is the same as the ending vertex, we're done
// otherwise loop through each value in the adjacency list at that vertex
// calc the distance to that vertex from the starting vertex
// if the distance is less than what is currently stored in the distance object
// update the distances object with new lower distance
// update the previous ob to c ontain that vertex
// enqueue the vertex with the total distance from the starting node