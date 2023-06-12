const gameBoard = (()=> {

})();

// Representing a graph with adjacency lists combines adjacency matrices with edge lists. For each vertex store an array of the vertices adjacent to it.
const adjList = { 
    a1: ["c2", "b3"], 
    a2: ["c1", "c3", "b4"],
    a3: ["b1", "c2", "c4", "b5"], 
    a4: ["b2", "c3", "c5", "b6"], 
    a5: ["b3", "c4", "c6", "b7"],
    a6: ["b4", "c5", "c7", "b8"],
    a7: ["b5", "c6", "c8"],
    a8: ["b6", "c7"],
    b1: ["a3", "c3", "d2"],
    b2: ["a4", "c4", "d3", "d1"],
    b3: ["a5", "c5", "d4", "d2", "c1", "a1"],
    b4: ["a6", "c6", "d5", "d3", "c2", "a2"],
    b5: ["a7", "c7", "d6", "d4", "c3", "a3"],
    b6: ["a8", "c8", "d7", "d5", "c4", "a4"],
    b7: ["d8", "d6", "c5", "a5"],
    b8: ["d7", "c6", "a6" ],
    c1: ["a2", "b3", "d3", "e2"],
    c2: ["a1", "a3", "b4", "d4", "e3", "e1"],
    c3: ["a2", "a4", "b5", "d5", "e4", "e2"],
    c4: ["a3", "a5", "b6", "d6", "e5", "e3"],
    c5: ["a4", "a6", "b7", "d7", "e6", "e4"],
    c6: ["a5", "a7", "b8", "d8", "e7", "e5"],
    c7: ["a6", "a8", "e8", "e6"],
    c8: ["a7", "e7", "d6", "b6"],
    d1: [],
    d2: [],
    d3: [],
    d4: [],
    d5: [],
    d6: [],
    d7: [],
    d8: [],
    e1: [],
    e2: [],
    e3: [],
    e4: [],
    e5: [],
    e6: [],
    e7: [],
    e8: [],
    f1: [],
    f2: [],
    f3: [],
    f4: [],
    f5: [],
    f6: [],
    f7: [],
    f8: [],
    g1: [],
    g2: [],
    g3: [],
    g4: [],
    g5: [],
    g6: [],
    g7: [],
    g8: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    h7: [],
    h8: []
};



// A1 - B3 - A5/C5 - B7
////// test A1 to A5,  a1-b3-a5


class Node {
    constructor (value) {
        this.value = value
        this.edgesList = []
    }

    connect (node) {  // connects both directions, but since we are using the adjList{} above...
        this.edgesList.push(node)
        node.edgesList.push(this)
    }

    getAdjacentNodes () {
        return this.edgesList
    }

    isConnected (node) {
        return !!this.edgesList.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor (nodes) {
        this.nodes = [...nodes]  // const graph = new Graph("a1", "a2", "a3")
    }

    addToGraph (node) {
        this.nodes.push(node)
    }

    // 15:07 add the end node to find something
    // bFT(startObject, endObject) - so use object.values in code
    breadthFirstTraversal(start, end) {
        const queue = [start];

        // // avoid repeating nodes
        // const visitedNodes = new Set(); // The Set object lets you store unique values of any type
        // visitedNodes.add(start)

        // // for while loop track back
        // start.parentNode = null;

        const visitedNodes = {}
        visitedNodes[start.value] = null  // eg   visitedNodes { a1: null, a2: b2}

        while(queue.length > 0) {
            // pull node queue (to visit)
            // add its adjacencies to the queue
            const node = queue.shift();

            // once 'end' is found. got to use value since you can't do if(object variable == object variable)
            if(node.value === end.value) {
                // trackback path, so use values, not entire node objects
                const path = [];
                let currentNode = end;

                // while(currentNode.parentNode != null) {
                //     path.push(currentNode.parentNode.value)
                //     currentNode = currentNode.parentNode
                // }

                while(currentNode != null) {
                    path.push(currentNode.value)
                    currentNode = visitedNodes[currentNode.value]
                    console.log(currentNode)
                }

                //console.log(`Congrats. The path from ${start.value} to ${end.value} is: ` + path)
                console.log(`Congrats. The path from ${start.value} to ${end.value} is: ` + path.reverse())
                return "congrats you found your path" 
            }

            // adjacency i.e., neighbor nodes
            for (const adjacency of node.edgesList) {
                if(!visitedNodes.hasOwnProperty(adjacency.value)) {
                    queue.push(adjacency)
                    visitedNodes[adjacency.value] = node; // keep track by setting a pointer from node on all all it's adjacencies

                    // visitedNodes.add(adjacency)
                    // // can't do this if you plan to use the graphi multiple times since your mutating the objects
                    // // adjacency.parentNode = node;  // asign an object (not the object.value) so that it can be jumped to later in the trackback path.
                    

                }
            }
            //console.log(node.value)
        }

    }
}

const a1 = new Node("a1")
const a2 = new Node("a2")
const a3 = new Node("a3")
const a4 = new Node("a4")
const a5 = new Node("a5")
const a6 = new Node("a6")
const a7 = new Node("a7")
const a8 = new Node("a8")
const b1 = new Node("b1")
const b2 = new Node("b2")
const b3 = new Node("b3")
const b4 = new Node("b4")
const b5 = new Node("b5")
const b6 = new Node("b6")
const b7 = new Node("b7")
const b8 = new Node("b8")
const c1 = new Node("c1")
const c2 = new Node("c2")
const c3 = new Node("c3")
const c4 = new Node("c4")
const c5 = new Node("c5")
const c6 = new Node("c6")
const c7 = new Node("c7")
const c8 = new Node("c8")
const d1 = new Node("d1")
const d2 = new Node("d2")
const d3 = new Node("d3")
const d4 = new Node("d4")
const d5 = new Node("d5")
const d6 = new Node("d6")
const d7 = new Node("d7")
const d8 = new Node("d8")
const e1 = new Node("e1")
const e2 = new Node("e2")
const e3 = new Node("e3")
const e4 = new Node("e4")
const e5 = new Node("e5")
const e6 = new Node("e6")
const e7 = new Node("e7")
const e8 = new Node("e8")
const f1 = new Node("f1")
const f2 = new Node("f2")
const f3 = new Node("f3")
const f4 = new Node("f4")
const f5 = new Node("f5")
const f6 = new Node("f6")
const f7 = new Node("f7")
const f8 = new Node("f8")
const g1 = new Node("g1")
const g2 = new Node("g2")
const g3 = new Node("g3")
const g4 = new Node("g4")
const g5 = new Node("g5")
const g6 = new Node("g6")
const g7 = new Node("g7")
const g8 = new Node("g8")
const h1 = new Node("h1")
const h2 = new Node("h2")
const h3 = new Node("h3")
const h4 = new Node("h4")
const h5 = new Node("h5")
const h6 = new Node("h6")
const h7 = new Node("h7")
const h8 = new Node("h8")

const adjList2 = { 
    a1: [c2, b3], 
    a2: [c1, c3, b4],
    a3: [b1, c2, c4, b5], 
    a4: [b2, c3, c5, b6], 
    a5: [b3, c4, c6, b7],
    a6: [b4, c5, c7, b8],
    a7: [b5, c6, c8],
    a8: [b6, c7],
    b1: [a3, c3, d2],
    b2: [a4, c4, d3, d1],
    b3: [a5, c5, d4, d2, c1, a1],
    b4: [a6, c6, d5, d3, c2, a2],
    b5: [a7, c7, d6, d4, c3, a3],
    b6: [a8, c8, d7, d5, c4, a4],
    b7: [d8, d6, c5, a5],
    b8: [d7, c6, a6],
    c1: [a2, b3, d3, e2],
    c2: [a1, a3, b4, d4, e3, e1],
    c3: [a2, a4, b5, d5, e4, e2],
    c4: [a3, a5, b6, d6, e5, e3],
    c5: [a4, a6, b7, d7, e6, e4],
    c6: [a5, a7, b8, d8, e7, e5],
    c7: [a6, a8, e8, e6],
    c8: [a7, e7, d6, b6]
}

a1.edgesList = adjList2["a1"];
a2.edgesList = adjList2["a2"];
a3.edgesList = adjList2["a3"];
a4.edgesList = adjList2["a4"];
a5.edgesList = adjList2["a5"];
a6.edgesList = adjList2["a6"];
a7.edgesList = adjList2["a7"];
a8.edgesList = adjList2["a8"];
b1.edgesList = adjList2["b1"];
b2.edgesList = adjList2["b2"];
b3.edgesList = adjList2["b3"];
b4.edgesList = adjList2["b4"];
b5.edgesList = adjList2["b5"];
b6.edgesList = adjList2["b6"];
b7.edgesList = adjList2["b7"];
b8.edgesList = adjList2["b8"];
c1.edgesList = adjList2["c1"];
c2.edgesList = adjList2["c2"];
c3.edgesList = adjList2["c3"];
c4.edgesList = adjList2["c4"];
c5.edgesList = adjList2["c5"];
c6.edgesList = adjList2["c6"];
c7.edgesList = adjList2["c7"];
c8.edgesList = adjList2["c8"];




// for (const key in adjList2) {
//     // const key = new Node(key)
//     // key.edgesList = adjList.key
//     //console.log(`adjList2.${key}`)
//     //const key = `new Node("${key}")`
//     console.log(`${key}`)
//     const key = adjList2.key
// }

// let testList = [z1, z2, z3]
// testList.forEach(el => {
//     const el = "hello"
//     console.log(el)
// })


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

const bst = new Graph([a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8]);
bst.breadthFirstTraversal(a1, a5)