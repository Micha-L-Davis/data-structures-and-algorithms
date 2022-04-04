'use strict';

const { it, describe } = require('eslint/lib/rule-tester/rule-tester');

const { PseudoQueue } = require('../index');

let pseudoQueue = new PseudoQueue();

describe('Queue Tests', () => {
  it('can successfully instantiate an empty pseudo-queue', () => {
    let newPseudoQueue = new PseudoQueue();

    expect(newPseudoQueue.count).toEqual(0);
    expect(newPseudoQueue.front).toEqual(null);
  });

  it('can successfully enqueue into a pseudo-queue', () => {
    pseudoQueue.enqueue('1st');

    expect(pseudoQueue.front.value).toEqual('1st');
  });

  it('can successfully enqueue multiple values into a pseudo-queue', () => {
    pseudoQueue.enqueue('2nd');
    pseudoQueue.enqueue('3rd');
    pseudoQueue.enqueue('4th');

    expect(pseudoQueue.front.value).toEqual('1st');
    expect(pseudoQueue.front.next.value).toEqual('2nd');
    expect(pseudoQueue.count).toEqual(4);
  });

  it('can successfully dequeue ot of a queue', () => {
    let dequeuedValue = pseudoQueue.dequeue();

    expect(dequeuedValue).toEqual('1st');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let dequeued2nd = pseudoQueue.dequeue();
    let dequeued3rd = pseudoQueue.dequeue();
    let dequeued4th = pseudoQueue.dequeue();

    expect(dequeued2nd).toEqual('2nd');
    expect(dequeued3rd).toEqual('3rd');
    expect(dequeued4th).toEqual('4th');
    expect(pseudoQueue.count).toEqual(0);
  });

  it('can successfully peek', () => {
    pseudoQueue.enqueue('peek');

    expect(pseudoQueue.peek()).toEqual('peek');
  });
});
