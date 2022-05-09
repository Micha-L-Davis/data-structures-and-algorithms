'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight = 1) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const node = new Node(value);
    this.adjacencyList.set(node, []);

    return node;
  }

  addEdge(firstNode, secondNode, weight = 1) {
    const firstNeighbors = this.getNeighbors(firstNode);
    const secondNeighbors = this.getNeighbors(secondNode);

    firstNeighbors.push(new Edge(secondNode, weight));
    if (secondNeighbors) secondNeighbors.push(new Edge(firstNode, weight));
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }

  size() {
    return this.getNodes().length;
  }
}

module.exports = Graph;
