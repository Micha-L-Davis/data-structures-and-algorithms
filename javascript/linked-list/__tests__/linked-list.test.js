'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List Tests', () => {
  let linkedList = new LinkedList();

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
