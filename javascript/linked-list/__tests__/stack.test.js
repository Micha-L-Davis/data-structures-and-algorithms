'use strict';

const { it, describe } = require('eslint/lib/rule-tester/rule-tester');

const { Stack } = require('../index');

let stack = new Stack();

describe('Stack Tests', () => {
  it('can successfully instantiate an empty stack', () => {
    let newStack = new Stack();

    expect(newStack.count).toEqual(0);
    expect(newStack.top).toEqual(null);
  });

  it('can successfully push onto a stack', () => {
    stack.push('1st');

    expect(stack.top.value).toEqual('1st');
  });

  it('can successfully push multiple values onto a stack', () => {
    stack.push('2nd');
    stack.push('3rd');
    stack.push('4th');

    expect(stack.top.value).toEqual('4th');
    expect(stack.top.next.value).toEqual('3rd');
    expect(stack.count).toEqual(4);
  });

  it('can successfully pop off the stack', () => {
    let poppedValue = stack.pop();

    expect(poppedValue).toEqual('4th');
  });

  it('can successfully empty a stack after multiple pops', () => {
    let popped3rd = stack.pop();
    let popped2nd = stack.pop();
    let popped1st = stack.pop();

    expect(popped3rd).toEqual('3rd');
    expect(popped2nd).toEqual('2nd');
    expect(popped1st).toEqual('1st');
    expect(stack.count).toEqual(0);
  });

  it('can successfully peek', () => {
    stack.push('peek');

    expect(stack.peek()).toEqual('peek');
  });
});
