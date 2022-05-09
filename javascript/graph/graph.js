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

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    let current = null;

    while (queue.length) {
      current = queue.pop();

      if (cb) cb(current.value);

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.node)) {
          visited.add(edge.node);
          queue.unshift(edge.node);
        }
      }
    }

    return Array.from(visited.keys()).map((node) => node.value);
  }
}

module.exports = Graph;
