import './styles/style.css'
import knightIconJPG from './knight-icon.jpg'

// const chessKnightImage = new Image();
// chessKnightImage.src = knightIconJPG;

//import { Graph } from "./gameboard";

// gameboard can make divs, or use template divs. assigns nodes to the divs. does onclick on each div.
// knight receives onclick coordinates
// travail button takes knight info and returns graph results 
// must click on Knight button first. then place knight. then destination. 
// need a reset button

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
// you can target with, in our case, e.g. dataset.array
// https://github.com/marc714/odin-todo/blob/main/src/modules/taskExpandEdit.js


const resetBtn = document.querySelector('#reset')
const knightBtn = document.querySelector("#knight")
const travailBtn = document.querySelector("#travail")
const display = document.querySelector("#display")
const msg = document.querySelector("#message")
const gameBoardCtn = document.querySelector("#gameboard")
const gameBoardBlocks = document.querySelectorAll(".block")
knightBtn.addEventListener("click", knight)
travailBtn.addEventListener("click", traverse)
gameBoardCtn.addEventListener("click", gameBoardOff)
resetBtn.addEventListener("click", reset)
let moves = [];

function reset() {
    // moves = [];
    // displayMoves("")
    // message("Press Knight button")
    location.reload();
}

function traverse() {
    if(moves.length == 0) {
        message("First place starting Knight")
    } else if (moves.length == 1) {
        message("Place where you want your knight to go")
    } else if (moves.length == 2) {
        console.log(moves[0] + moves[1])
        let results = chessGraph.breadthFirstTraversal(moves[0], moves[1])
        message("")
        displayMoves("Congrats! The shortest path is: " + results.reverse())
        // highlight shortest path: 
        // results.forEach(el => {
        //     gameBoardBlocks.forEach(block => {
        //         if(el == block.dataset.array) {
        //             block.style.borderColor = "red"
        //         }
        //     })
        // })
        results.forEach(el => {
            highlight(el);
        })
    }

}

function highlight(shortestPathString) {
    gameBoardBlocks.forEach(block => {
        if(shortestPathString == block.dataset.array) {
            block.style.borderColor = "red"
            block.style.borderWidth = "thick"
        }
    })
}

// clicking on Knight button turns on gameBoard()
const gameBoard = () => {
    // placing this inside so that we can turn it on/off   
    const squares = document.querySelectorAll(".block")
    squares.forEach(el => {
        // el.addEventListener("click", function(e) {
        //     console.log(e.target.getAttribute("data-array"))
        //     moves.push(e.target.dataset.array)
        //     displayScreen(e.target.dataset.array)
        //     if (moves[1] == null) {
        //         message("Place where you want the knight to go")
        //     }
        //     if (moves[1] != null) {
        //         message("Click on Traverse!")
        //         el.removeEventListener("click")
        //     }
        // })

        // this doesn't work because this isn't dynamic. you have to run gameBoard() again.
        // if (moves.length >= 2) {
        //     el.removeEventListener("click", getTile)
        // }

        // if (moves.length == 0 || moves.length == 1) {
        //     el.addEventListener("click", getTile)
        // }

        // doesn't work since it looks at conditional statement once at inception
        // if ( moves.length >= 2) {
        //             gameBoardOff()
        //         } 
        el.addEventListener("click", getTile)  
        el.addEventListener("click", knightIcon)            
    })
};

// display knight icon
function knightIcon(e) {
    //let square = e.target    
    e.target.style.backgroundColor = "red"
    // all styles https://www.w3schools.com/jsref/dom_obj_style.asp
    //e.target.style.backgroundImage = "url('http://java2s.com/style/demo/border.png')"
    // e.target.style.backgroundImage = "url('knight-icon.jpg')"
    e.target.style.backgroundImage = "url('knight-icon.jpg')"
    e.target.style.backgroundSize = 'contain';

}

// remove all event listeners to prevent more than 2 knights
function gameBoardOff() {
    if (moves.length == 2) {
        const squares = document.querySelectorAll(".block");
        squares.forEach(el => {
            el.removeEventListener("click", getTile)
        })
    }
}

// on click, get tile's data-array e.g. div "a1"
function getTile(e) {
    console.log(e.target.getAttribute("data-array"))
    let chessSquare = stringToNode(e.target.dataset.array)
    moves.push(chessSquare)
    displayMoves(e.target.dataset.array)
    if (moves[1] == null) {
        message("Place where you want the knight to go")
    }
    if (moves[1] != null) {
        message("Click on Traverse!")
    }
}

// helper function for getTile() 
// why can't stringToNode return a value (don't use forEach to return values).
function stringToNode(datasetArray) {
    const temp = chessBoardSquares.find(el => el.value == datasetArray);
    return temp;
}

// click on knight btn (activates gameboard), then click on square 1, then square 2, sends coordinates to knight(). click on Traverse takes knight data.
function knight() {
    console.log("hello")
    message("Place your knight")
    gameBoard(); // activate game board
};

function message(message) {
    msg.innerText = message
}

function displayMoves(tile) {
    display.innerText = tile.toString()
}

class Node {
    constructor(value) {
        this.value = value
        this.edgesList = []
    }

    connect(node) {  // connects both directions, but since we are using the adjList{} above...
        this.edgesList.push(node)
        node.edgesList.push(this)
    }

    getAdjacentNodes() {
        return this.edgesList
    }

    isConnected(node) {
        return !!this.edgesList.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes]  // const graph = new Graph(["a1", "a2", "a3"])
    }

    addToGraph(node) {
        this.nodes.push(node)
    }

    reconstructPath(visitedNodes, startNode, endNode) {
        let currentNode = endNode;
        const shortestPath = [];

        while(currentNode != null) {
            shortestPath.push(currentNode.value)
            currentNode = visitedNodes[currentNode.value]
            console.log(currentNode)
        }
        console.log(`Congrats. The path from ${startNode.value} to ${endNode.value} is: ` + shortestPath.reverse())
        //console.log(shortestPath.reverse())
        return shortestPath.reverse();
    }

    // 15:07 add the end node to find something
    // bFT(startObject, endObject) - so use object.values in code
    breadthFirstTraversal(start, end) {
        const queue = [start];

        const visitedNodes = {}
        // for the while(currentNode != null) loop below. We add the start node to the visitedNodes property (to show it's been visited) with a value of null to say it has no parent/pointer to a parent.
        visitedNodes[start.value] = null  // eg   visitedNodes { a1: null, a2: b2}

        while(queue.length > 0) {
            const node = queue.shift();

            if(node.value === end.value) {
                return this.reconstructPath(visitedNodes, start, end)
            }

            for (const adjacency of node.edgesList) {
                if(!visitedNodes.hasOwnProperty(adjacency.value)) {
                    visitedNodes[adjacency.value] = node; // keep track by setting a pointer from node on all all it's adjacencies
                    queue.push(adjacency)
                }
            }
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
    c3: [b1, a2, a4, b5, d5, e4, e2, d1],
    c4: [b2, a3, a5, b6, d6, e5, e3, d2],
    c5: [b3, a4, a6, b7, d7, e6, e4, d3],
    c6: [b4, a5, a7, b8, d8, e7, e5, d4],
    c7: [b5, a6, a8, e8, e6, d5],
    c8: [b6, a7, e7, d6],
    d1: [b2, c3, e3, f2],
    d2: [b1, b3, c4, e4, f3, f1],
    d3: [c1, b2, b4, c5, e5, f4, f2, e1],
    d4: [c2, b3, b5, c6, e6, f5, f3, e2],
    d5: [c3, b4, b6, c7, e7, f6, f4, e3],
    d6: [c4, b5, b7, c8, e8, f7, f5, e4],
    d7: [c5, b6, b8, f8, f6, e5],
    d8: [c6, b7, f7, e6],
    e1: [c2, d3, f3, g2],
    e2: [c1, c3, d4, f4, g3, g1],
    e3: [d1, c2, c4, d5, f5, g4, g2, f1],
    e4: [d2, c3, c5, d6, f6, g5, g3, f2],
    e5: [d3, c4, c6, d7, f7, g6, g4, f3],
    e6: [d4, c5, c7, d8, f8, g7, g5, f4],
    e7: [d5, c6, c8, g8, g6, f5],
    e8: [d6, c7, g7, f6],
    f1: [d2, e3, g3, h2],
    f2: [d1, d3, e4, g4, h3, h1],
    f3: [e1, d2, d4, e5, g5, h4, h2, g1],
    f4: [e2, d3, d5, e6, g6, h5, h3, g2],
    f5: [e3, d4, d6, e7, g7, h6, h4, g3],
    f6: [e4, d5, d7, e8, g8, h7, h5, g4],
    f7: [e5, d6, d8, h8, h6, g5],
    f8: [e6, d7, h7, g6],
    g1: [e2, f3, h3],
    g2: [e1, e3, f4, h4],
    g3: [f1, e2, e4, f5, h5, h1],
    g4: [f2, e3, e5, f6, h6, h2],
    g5: [f3, e4, e6, f7, h7, h3],
    g6: [f4, e5, e7, f8, h8, h4],
    g7: [f5, e6, e8, h5],
    g8: [f6, e7, h6],
    h1: [f2, g3],
    h2: [f1, f3, g4],
    h3: [g1, f2, f4, g5],
    h4: [g2, f3, f5, g6],
    h5: [g3, f4, f6, g7],
    h6: [g4, f5, f7, g8],
    h7: [g5, f6, f8],
    h8: [g6, f7]
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
d1.edgesList = adjList2["d1"];
d2.edgesList = adjList2["d2"];
d3.edgesList = adjList2["d3"];
d4.edgesList = adjList2["d4"];
d5.edgesList = adjList2["d5"];
d6.edgesList = adjList2["d6"];
d7.edgesList = adjList2["d7"];
d8.edgesList = adjList2["d8"];
e1.edgesList = adjList2["e1"];
e2.edgesList = adjList2["e2"];
e3.edgesList = adjList2["e3"];
e4.edgesList = adjList2["e4"];
e5.edgesList = adjList2["e5"];
e6.edgesList = adjList2["e6"];
e7.edgesList = adjList2["e7"];
e8.edgesList = adjList2["e8"];
f1.edgesList = adjList2["f1"];
f2.edgesList = adjList2["f2"];
f3.edgesList = adjList2["f3"];
f4.edgesList = adjList2["f4"];
f5.edgesList = adjList2["f5"];
f6.edgesList = adjList2["f6"];
f7.edgesList = adjList2["f7"];
f8.edgesList = adjList2["f8"];
g1.edgesList = adjList2["g1"];
g2.edgesList = adjList2["g2"];
g3.edgesList = adjList2["g3"];
g4.edgesList = adjList2["g4"];
g5.edgesList = adjList2["g5"];
g6.edgesList = adjList2["g6"];
g7.edgesList = adjList2["g7"];
g8.edgesList = adjList2["g8"];
h1.edgesList = adjList2["h1"];
h2.edgesList = adjList2["h2"];
h3.edgesList = adjList2["h3"];
h4.edgesList = adjList2["h4"];
h5.edgesList = adjList2["h5"];
h6.edgesList = adjList2["h6"];
h7.edgesList = adjList2["h7"];
h8.edgesList = adjList2["h8"];

// remember, below array elements are objects, not strings. Array is for stringToNode()
const chessBoardSquares = [ a1, a2, a3, a4, a5, a6, a7, a8,
                            b1, b2, b3, b4, b5, b6, b7, b8, 
                            c1, c2, c3, c4, c5, c6, c7, c8,
                            d1, d2, d3, d4, d5, d6, d7, d8,
                            e1, e2, e3, e4, e5, e6, e7, e8,
                            f1, f2, f3, f4, f5, f6, f7, f8,
                            g1, g2, g3, g4, g5, g6, g7, g8,
                            h1, h2, h3, h4, h5, h6, h7, h8 ]

const chessGraph = new Graph([a1, a2, a3, a4, a5, a6, a7, a8,
                              b1, b2, b3, b4, b5, b6, b7, b8, 
                              c1, c2, c3, c4, c5, c6, c7, c8,
                              d1, d2, d3, d4, d5, d6, d7, d8,
                              e1, e2, e3, e4, e5, e6, e7, e8,
                              f1, f2, f3, f4, f5, f6, f7, f8,
                              g1, g2, g3, g4, g5, g6, g7, g8,
                              h1, h2, h3, h4, h5, h6, h7, h8]);
// bst.breadthFirstTraversal(a1, a5)

/*
let myNode;
const test = [a1, a2, a3]
test.forEach((el) => {
    console.log(el)
    if(el.value == "a1") console.log("yes");
    if(el.value == "a1") {
        myNode = el;
    }
})
*/

