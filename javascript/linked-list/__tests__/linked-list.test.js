'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
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
});
