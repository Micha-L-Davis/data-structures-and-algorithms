'use strict';

const { it, describe } = require('eslint/lib/rule-tester/rule-tester');

const { Queue } = require('../index');

let queue = new Queue();

describe('Queue Tests', () => {
  it('can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(newQueue.count).toEqual(0);
    expect(newQueue.front).toEqual(null);
  });

  it('can successfully enqueue into a queue', () => {
    queue.enqueue('1st');

    expect(queue.front.value).toEqual('1st');
  });

  it('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('2nd');
    queue.enqueue('3rd');
    queue.enqueue('4th');

    expect(queue.front.value).toEqual('1st');
    expect(queue.front.next.value).toEqual('2nd');
    expect(queue.rear.value).toEqual('4th');
    expect(queue.count).toEqual(4);
  });

  it('can successfully dequeue ot of a queue', () => {
    let dequeuedValue = queue.dequeue();

    expect(dequeuedValue).toEqual('1st');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let dequeued2nd = queue.dequeue();
    let dequeued3rd = queue.dequeue();
    let dequeued4th = queue.dequeue();

    expect(dequeued2nd).toEqual('2nd');
    expect(dequeued3rd).toEqual('3rd');
    expect(dequeued4th).toEqual('4th');
    expect(queue.count).toEqual(0);
  });

  it('can successfully peek', () => {
    queue.enqueue('peek');

    expect(queue.peek()).toEqual('peek');
  });
});
