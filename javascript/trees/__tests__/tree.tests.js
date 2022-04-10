'use strict';

const { BinarySearchTree } = require('../trees.js');

let searchTree = new BinarySearchTree();

describe('Binary tree tests', () => {
  console.error = jest.fn();

  it('Can successfully instantiate an empty tree', () => {
    expect(searchTree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    searchTree.add(7);

    expect(searchTree.root.value).toEqual(7);
  });

  it('Can reject a value that is already present in the tree', () => {
    searchTree.add(7);

    expect(console.error).toHaveBeenCalledWith('Cannot add: value already exists in the tree');
  });

  it('Can successfully add a left child and right child properly to a node', () => {
    searchTree.add(5);
    searchTree.add(9);

    expect(searchTree.root.left.value).toEqual(5);
    expect(searchTree.root.right.value).toEqual(9);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    searchTree.add(4);
    searchTree.add(6);
    searchTree.add(8);
    searchTree.add(10);
    let preOrder = searchTree.preOrderToArray();

    expect(preOrder).toEqual([7, 5, 4, 6, 9, 8, 10]);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    let inOrder = searchTree.inOrderToArray();

    expect(inOrder).toEqual([4, 5, 6, 7, 8, 9, 10]);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let postOrder = searchTree.postOrderToArray();

    expect(postOrder).toEqual([4, 6, 5, 8, 10, 9, 7]);
  });

  it('Returns true or false for the contains method, given an existing or non-existing node value', () => {
    let trueResult = searchTree.contains(4);
    let falseResult = searchTree.contains(11);
    let emptyTree = new BinarySearchTree();
    emptyTree.contains(4);

    expect(trueResult).toEqual(true);
    expect(falseResult).toEqual(false);
    expect(console.error).toHaveBeenCalledWith('The tree is empty!');
  });
});
