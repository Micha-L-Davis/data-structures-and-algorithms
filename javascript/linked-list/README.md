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

### Other Methods

* `kthFromEnd`
  * Arguments: k
  * Returns: the value of the node found k nodes from the end of the list.
* `zipLists`
  * Arguments: list1, list2
  * edits `this` list to contain the values of the provided lists, alternating between them each loop.

  ![zipLists diagram](./assets/brave_49gQOo7xWP.png)


### Stack

* `push`
  * Arguments: value
  * Adds the value to a new node in the stack.

* `pop`
  * Arguments: none
  * Returns: removes the top node from the stack and returns its value.

* `peek`
  * Arguments: none
  * Returns: the value of the top node of the stack.

### Queue

* `enqueue`
  * Arguments: value
  * Adds the value to a new node and places it at the rear of the queue.

* `dequeue`
  * Arguments: none
  * Returns: removes the first node from the queue and returns its value.

* `peek`
  * Arguments: none
  * Returns: the value of the first node of the queue.


![](./assets/Stack-and-Queue-Insertion.png)
![](./assets/Stack-and-Queue-Extraction.png)

### Pseudo-Queue

An implementation of a queue using two stacks. Same methods Queue (above).

![](./assets/Pseudo-Queue.png)

### Animal Shelter

This is a version of the usual queue, but with the added functionality of type-checking the elements to be added.  The `enqueue` method operates as normal, but will only accept objects made with the Animal constructor of either the Cat or Dog subtype. Two queues are maintained, one for each animal type. The `dequeue` method now requires a `pref` argument, which is a string of either 'cat' or 'dog', indicating which queue should be dequeued.

### Bracket Validation

![](./assets/bracket-validation.png)
