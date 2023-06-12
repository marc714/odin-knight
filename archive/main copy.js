/* 
https://www.geeksforgeeks.org/implementation-graph-javascript/
https://www.youtube.com/watch?v=tWVWeAqZ0WU&ab_channel=freeCodeCamp.org

Find the smallest distance between two nodes: https://youtu.be/nKnlhhz2huE?t=1105



1: click to place Knight on game board starting square
2: click to place ending square
3: click traverse button to move knight 

Make the adjList
-how do we make the connection for two points off adjList
-on traverse button click:
-- we need to make a tree from start to end
-- we need to build a dfs/bfs tree
-- binary search tree's don't work because each 'node' or gameboard square can be connected to more than two
-- "For this project, you’ll need to use a data structure that’s similar (but not identical) to a binary tree."
----- as said above, don't use BST. Use a graph.
-- "Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board."

*/



const gameBoard = (()=> {

})();

// Representing a graph with adjacency lists combines adjacency matrices with edge lists. For each vertex store an array of the vertices adjacent to it.
const adjList = [ 
    /* a1 */ ["c2", "b3"], 
    /* a2 */ ["c1", "c3", "b4"],
    /* a3 */ ["b1", "c2", "c4", "b5"], 
    /* a4 */ ["b2", "c3", "c5", "b6"], 
    /* a5 */ ["b3", "c4", "c6", "b7"],
    /* a6 */ ["b4", "c5", "c7", "b8"],
    /* a7 */ ["b5", "c6", "c8"],
    /* a8 */ ["b6", "c7"],
    /* b1 */ ["a3", "c3", "d2"],
    /* b2 */ ["a4", "c4", "d3", "d1"],
    /* b3 */ ["a5", "c5", "d4", "d2", "c1", "a1"],
    /* b4 */ ["a6", "c6", "d5", "d3", "c2", "a2"],
    /* b5 */ ["a7", "c7", "d6", "d4", "c3", "a3"],
    /* b6 */ ["a8", "c8", "d7", "d5", "c4", "a4"],
    /* b7 */ ["d8", "d6", "c5", "a5"],
    /* b8 */ ["d7", "c6", "a6" ],
];

const legend = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
                "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
]

// let's test start at A1, end at B7
// A1 - B3 - A5/C5 - B7

////// test A1 to A5,  a1-b3-a5

// list all possible moves as children of a1 as a tree (remember not bst)
// looks like BFS is best since we need to store the kids moves
// a1: c2, b3   -- c2, b3 goes into queue
// 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
// Map is different from Object. See above. 
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        // initialize the adjacent list with a null array
        // set(key, value)
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        // get the list for vertex v and put the vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
        // since graph is undreicted, reverse
        //this.AdjList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys) {
            // get the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list concatenate the values into a string
            for (var j of get_values) {
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
            }
        }
    }
}


function knightMoves(start, end) {
    let log = [];
    let queue = [start];
    
    while(queue.length > 0) {
        let current = queue.shift();
        let i = legend.indexOf(current)


        if(adjList[i].includes(end)) {
            return `you made it in x moves. Here's your path:` 
        } else {
            adjList[i].forEach(el => {
                queue.push(el)
                
            })
        }
    }
}



var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');