'use strict';

const validateBrackets = require('../validate-brackets');

describe('Validate Brackets Tests', () => {
  it('should return true if given the string \'{}\'', () => {
    let trueReturn = validateBrackets('{}');

    expect(trueReturn).toEqual(true);
  });

  it('should ignore non-bracket characters', () => {
    let trueReturn = validateBrackets('()[[Extra Characters]]');

    expect(trueReturn).toEqual(true);
  });

  it('should return false if given the string \'{(})\'', () => {
    let falseReturn = validateBrackets('{(})');

    expect(falseReturn).toEqual(false);
  });
});
