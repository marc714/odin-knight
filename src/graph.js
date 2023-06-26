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

    reconstructPath (visitedNodes, startNode, endNode) {
        let currentNode = endNode;
        const shortestPath = [];

        while(currentNode != null) {
            shortestPath.push(currentNode.value)
            currentNode = visitedNodes[currentNode.value]
            console.log(currentNode)
        }
        console.log(`Congrats. The path from ${startNode.value} to ${endNode.value} is: ` + shortestPath.reverse())
        console.log(shortestPath.reverse())
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

export { Node, Graph }