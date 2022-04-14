'use strict';

class Node {
  constructor(value) {
    this.children = [];
    this.value = value;
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let inserted = false;

    let insertChild = (parent) => {
      if (parent.children.length < this.k) {
        parent.children.push(new Node(value));
        inserted = true;
      }
      for (let i = 0; i < this.k; i++) {
        if (inserted) {
          break;
        }
        insertChild(parent.children[i]);
      }
    };

    insertChild(this.root);
  }

  fizzBuzzTree() {
    let results = new KaryTree(this.k);

    let traverse = (parent) => {
      results.add(fizzBuzz(parent.value));
      for (let child of parent.children) {
        if (child.children.length > 0) {
          traverse(child);
        } else {
          results.add(fizzBuzz(child.value));
        }
      }
    };

    let fizzBuzz = (value) => {
      if (value % 15 === 0) {
        return 'fizzbuzz';
      }
      else if (value % 3 === 0) {
        return 'fizz';
      }
      else if (value % 5 === 0) {
        return 'buzz';
      }
      else {
        return value;
      }
    };

    traverse(this.root);
    return results;
  }

}

module.exports = {
  Node,
  KaryTree,
};
