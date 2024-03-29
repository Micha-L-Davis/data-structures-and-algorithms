'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrderToArray() {
    let results = [];

    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    if (this.root) traverse(this.root);
    return results;
  }

  inOrderToArray() {
    let results = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrderToArray() {
    let results = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }

  breadthFirstToArray() {
    let results = [];
    let currentNode = this.root;
    let childNodes = [currentNode];

    while (childNodes.length) {
      currentNode = childNodes.pop();
      results.push(currentNode.value);
      if (currentNode.left) childNodes.unshift(currentNode.left);
      if (currentNode.right) childNodes.unshift(currentNode.right);
    }

    return results;
  }

  getMaxValue() {
    let values = this.inOrderToArray();
    return Math.max(...values);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let search = (node) => {
      if (node.value === value) {
        console.error('Cannot add: value already exists in the tree');
      }
      if (value < node.value) {
        if (node.left) { search(node.left); }
        else { node.left = new Node(value); }
      }
      if (value > node.value) {
        if (node.right) { search(node.right); }
        else { node.right = new Node(value); }
      }
    };

    search(this.root);
  }

  contains(value) {
    if (!this.root) {
      console.error('The tree is empty!');
      return;
    }

    let result = false;

    let search = (node) => {
      if (value === node.value) {
        result = true;
      }
      if (value < node.value) {
        if (node.left) { search(node.left); }
      }
      if (value > node.value) {
        if (node.right) { search(node.right); }
      }
    };

    search(this.root);
    return result;
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree,
  Node
};
