'use strict';

const { KaryTree } = require('../kary-tree');

let tree = new KaryTree(3);

describe('k-ary Tree Tests', () => {

  it('Should instantiate an empty tree', () => {
    expect(tree.root).toEqual(null);
  });

  it('Should place a node at the root if the root is null', () => {
    tree.add(1);

    expect(tree.root.value).toEqual(1);
  });

  it('Should add up to k values to the root\'s child array', () => {
    tree.add(2);
    tree.add(3);
    tree.add(4);

    expect(tree.root.children.length).toEqual(3);
  });

  it('Should add values to the leftmost available child\'s children array if the parent\'s child array has k elements', () => {
    tree.add(5);

    expect(tree.root.children[0].children[0].value).toEqual(5);
    expect(tree.root.children[1].children.length).toEqual(0);
  });

  it('Should be able to fizz-buzz the values of a tree into a new tree', () => {
    tree.add(15);
    console.log(tree.root);
    console.log(tree.root.children[0]);
    console.log(tree.root.children[1]);
    console.log(tree.root.children[2]);

    let fizzBuzzTree = tree.fizzBuzzTree();
    console.log(fizzBuzzTree.root);
    console.log(fizzBuzzTree.root.children[0]);
    console.log(fizzBuzzTree.root.children[1]);
    console.log(fizzBuzzTree.root.children[2]);

    expect(fizzBuzzTree.root.value).toEqual(1);
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual('buzz');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('fizzbuzz');
    expect(fizzBuzzTree.root.children[1].value).toEqual('fizz');
  });
});
