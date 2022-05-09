# Graphs


## Challenge
Implement a graph data structure.

## Approach & Efficiency

The basic functions of the graph are provided through three classes: 
  * the `Node` class, which contains a `value` we wish to store in the graph.
  * the `Edge` class, which maintains each instance of node-to-node connection (and an optional `weight` cost).
  * the `Graph` contains a hashmap which holds an array of adjacent (ie. connected via an edge) nodes for each node key.

Operations listed below are performed in *O(1)* time.

## API
* `add node`
  * Arguments: value
  * Returns: The added node
  * Add a node to the graph
* `add edge`
  * Arguments: 2 nodes to be connected by the edge, weight (optional)
  * Returns: nothing
  * Adds a new edge between two nodes in the graph
  * If specified, assign a weight to the edge
  * Both nodes should already be in the Graph
* `get nodes`
  * Arguments: none
  * Returns all of the nodes in the graph as a collection (set, list, or similar)
* `get neighbors`
  * Arguments: node
  * Returns a collection of edges connected to the given node
  * Include the weight of the connection in the returned collection
* `size`
  * Arguments: none
  * Returns the total number of nodes in the graph
