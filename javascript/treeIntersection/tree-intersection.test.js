'use strict';

const treeIntersection = require('./tree-intersection');
const { Node, BinaryTree } = require('../trees/trees');
const { it } = require('eslint/lib/rule-tester/rule-tester');

let tree1 = new BinaryTree();
let tree2 = new BinaryTree();



describe('Tree Intersection Tests', () => {
  it('should handle completely empty trees', () => {
    let array = treeIntersection(tree1, tree2);

    expect(array.length).toEqual(0);
  });

  it('should return an empty array if there are no duplicate values', () => {
    tree1.root = new Node(150);
    tree2.root = new Node(42);
    let array = treeIntersection(tree1, tree2);

    expect(array.length).toEqual(0);
  });

  it('should return an array of duplicate values', () => {

    tree1.root.left = new Node(100);
    tree1.root.left.left = new Node(75);
    tree1.root.left.right = new Node(160);
    tree1.root.left.right.left = new Node(125);
    tree1.root.left.right.right = new Node(175);
    tree1.root.right = new Node(250);
    tree1.root.right.left = new Node(200);
    tree1.root.right.right = new Node(350);
    tree1.root.right.right.left = new Node(300);
    tree1.root.right.right.right = new Node(500);

    tree2.root.left = new Node(100);
    tree2.root.left.left = new Node(15);
    tree2.root.left.right = new Node(160);
    tree2.root.left.right.left = new Node(125);
    tree2.root.left.right.right = new Node(175);
    tree2.root.right = new Node(600);
    tree2.root.right.left = new Node(200);
    tree2.root.right.right = new Node(350);
    tree2.root.right.right.left = new Node(4);
    tree2.root.right.right.right = new Node(500);

    let array = treeIntersection(tree1, tree2);
    let solution = ['100', '160', '125', '175', '200', '350', '500'];
    for (let i = 0; i < solution.length; i++) {
      expect(array.includes(solution[i])).toBeTruthy();
    }
  });

});
