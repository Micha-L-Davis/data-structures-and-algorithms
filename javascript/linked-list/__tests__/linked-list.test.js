'use strict';

const { it, describe } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation
const LinkedList = require('../index');

let linkedList = new LinkedList();

describe('Linked List Tests', () => {


  it('should create an empty linked list', () => {
    expect(linkedList.head).toEqual(null);
  });

  it('should insert a value into the list at the head', () => {
    linkedList.insert('C');
    expect(linkedList.head.value).toEqual('C');
  });

  it('should insert multiple values and return true or false if a value appears in the list', () => {
    linkedList.insert('B');
    linkedList.insert('A');

    expect(linkedList.includes('B')).toEqual(true);
    expect(linkedList.includes('D')).toEqual(false);
  });

  it('should return a collection of all the values in the list', () => {
    expect(linkedList.toString()).toEqual('[A] -> [B] -> [C] -> NULL');
  });

  it('should append a value to the end of the list', () => {
    linkedList.append('D');
    let currentNode = linkedList.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(linkedList.toString()).toEqual('[A] -> [B] -> [C] -> [D] -> NULL');
  });

  it('should append multiple values to the end of the list', () => {
    linkedList.append('F');
    linkedList.append('G');
  });

  it('should insert a value before a given node\'s value', () => {
    linkedList.insertBefore('F', 'E');

    expect(linkedList.toString()).toEqual('[A] -> [B] -> [C] -> [D] -> [E] -> [F] -> [G] -> NULL');
  });

  it('should insert a value after a given node\'s value', () => {
    linkedList.insertAfter('G', 'A');

    expect(linkedList.toString())
      .toEqual('[A] -> [B] -> [C] -> [D] -> [E] -> [F] -> [G] -> [A] -> NULL');
  });
});

describe('kthFromEnd tests', () => {
  it('should return null if k is greater than the length of the list', () => {
    let testResult = linkedList.kthFromEnd(9);

    expect(testResult).toEqual(null);
  });

  it('should return the last node value if k and the count of the list are the same', () => {
    let testResult = linkedList.kthFromEnd(8);

    expect(testResult).toEqual('A');
  });

  it('should return null if k is not a positive integer', () => {
    let testResult = linkedList.kthFromEnd(-1);

    expect(testResult).toEqual(null);
  });

  it('should return the head if the list has a count of 1', () => {
    let testResult = linkedList.kthFromEnd(1);

    expect(testResult).toEqual(linkedList.head.value);
  });

  it('should navigate to the middle of the list', () => {
    let testResult = linkedList.kthFromEnd(4);

    expect(testResult).toEqual('E');
  });

});
