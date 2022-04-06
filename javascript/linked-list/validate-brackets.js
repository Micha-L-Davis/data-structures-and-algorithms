'use strict';

const { Stack } = require('.');

function validateBrackets(string) {
  let brackets = ['[', '(', '{', ']', ')', '}'];
  let stack = new Stack();

  for (let char of string) {
    if (brackets.includes(char)) {

      if (stack.isEmpty()) {
        stack.push(char);
      } else {

        if (
          char === ']' && stack.peek() === '[' ||
          char === ')' && stack.peek() === '(' ||
          char === '}' && stack.peek() === '{'
        ) {
          stack.pop();
        } else {
          stack.push(char);
        }

      }

    }
  }
  console.log(stack);
  return stack.isEmpty();
}

module.exports = validateBrackets;
