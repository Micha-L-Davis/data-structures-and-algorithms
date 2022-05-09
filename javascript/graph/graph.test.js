'use strict';

const Graph = require('./graph');

const graph = new Graph();

describe('Graph Tests', () => {
  const A = graph.addNode('A');
  const B = graph.addNode('B');
  const C = graph.addNode('C');
  const D = graph.addNode('D');

  graph.addEdge(A, B);
  graph.addEdge(A, C, 1.5);
  graph.addEdge(A, D, 2);
  graph.addEdge(C, D);

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toBe(4);
  });


  test('An edge can be successfully added to the graph', () => {
    let aNeighbors = graph.getNeighbors(A);

    expect(aNeighbors[0].node.value).toEqual(B.value);
  });


  test('A collection of all nodes can be properly retrieved from the graph', () => {

    let nodes = graph.getNodes();

    expect(nodes).toEqual([A, B, C, D]);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    let aNeighbors = graph.getNeighbors(A);
    let cNeighbors = graph.getNeighbors(C);

    expect(aNeighbors.length).toBe(3);
    expect(cNeighbors.length).toBe(2);
    expect(aNeighbors[0].weight).toBe(1);
    expect(aNeighbors[1].weight).toBe(1.5);
    expect(aNeighbors[2].weight).toBe(2);
    expect(cNeighbors[0].weight).toBe(1.5);
    expect(cNeighbors[1].weight).toBe(1);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    const E = graph.addNode('E');
    graph.addEdge(E);

    let nodes = graph.getNodes();
    let neighbors = graph.getNeighbors(nodes[0]);

    expect(nodes).toEqual([E]);
    expect(neighbors.length).toEqual(1);
  });

  test('Should return a collection of all nodes connected to a given node, breadth first', () => {
    let array = graph.breadthFirst(A);

    expect(array).toEqual(['B', 'C', 'D', 'A']);
  });
});


