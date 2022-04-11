# Trees

A data structure which contains values in nodes which have a reference to 0 or more child nodes, forming a hierarchy of nodes extending from the root node.

## Challenge

To create Binary Tree and Binary Search Tree classes capable of depth-first search and ordered insertion.

## Approach and Efficiency

Depth first search is done recursively with O(log n) efficiency.

## API

* `preOrderToArray` - arguments: none, returns: an array of tree values in pre-order.
* `inOrderToArray` - arguments: none, returns: an array of tree values in order.
* `postOrderToArray` - arguments: none, returns: an array of tree values in post-order.
* `getMaxValue` - arguments: none, returns: the value of the highest number in the tree.
* `contains` - (binary search tree only) arguments: a value to search for, returns: true if value present.
* `add` - (binary search tree only) arguments: a value to insert, returns: undefined.
