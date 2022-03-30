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
    this.count = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    this.count++;
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

  append(value) {
    let newNode = new Node(value);
    this.count++;
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    this.count++;
    let currentNode = this.head;

    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    this.count++;
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let target = this.count - k;
    if (k > this.count || k < 0) {
      return null;
    }
    if (k === 1) {
      return this.head.value;
    }
    while (target) {
      currentNode = currentNode.next;
      target--;
    }
    return currentNode.value;
  }

  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;

    while (this.count < (list1.count + list2.count)) {
      this.append(current1.value);
      this.append(current2.value);

      current1 = current1.next;
      current2 = current2.next;
    }
  }
}

module.exports = LinkedList;
