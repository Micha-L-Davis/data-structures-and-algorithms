'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += `[${currentNode.value}] -> `;
      currentNode = currentNode.next;
    }
    result += 'NULL';
    return result;
  }

}

module.exports = LinkedList;
