class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    print(){
        for (const vertex in this.adjacencyList) {
            console.log(vertex + " --> " + [...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) &&  this.adjacencyList[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return null
        }
        for (const adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(adjacentVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A','B')
graph.addEdge('A','C')
console.log(graph);
graph.print()
console.log(graph.hasEdge('A','B'))
console.log(graph.hasEdge('C','B'))
//graph.removeEdge('A','B')
//graph.print()
graph.removeVertex('B')
graph.print()


