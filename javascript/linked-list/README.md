# Singly Linked List

Implementation of a singly linked list in JavaScript

## Challenge

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Create a Linked List class
* Within the Linked List class, include a head property.
* Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency

Operations are consistent with a standard singly linked list.

Time Complexity:
  * Access: O(n)
  * Search: O(n)
  * Insertion: O(1)

Space Complexity: O(n)

## API

### Basic functionality

The class contains the following methods:
* `insert`
  * Arguments: value
  * Returns: nothing
  * Adds a new node with that value to the head of the list.
* `includes`
  * Arguments: value
  * Returns: Boolean
  * Indicates whether that value exists as a Node’s value somewhere within the list.
* `toString`
  * Arguments: none
  * Returns: a string representing all the values in the Linked List, formatted as:
  * `"[ a ] -> [ b ] -> [ c ] -> NULL"`
* `kthFromEnd`
  * Arguments: k
  * Returns: the value of the node found k nodes from the end of the list.


### Insertions

* `append`
  * arguments: new value
  * adds a new node with the given `value` to the end of the list.
* `insertBefore`
  * arguments: value, new value
  * adds a new node with the given `newValue` to the list immediately before the first node that has the `value` specified
* `insertAfter`
  * arguments: value, new value
  * adds a new node with the given  `new value` to the list immediately after the first node that has the `value` specified
