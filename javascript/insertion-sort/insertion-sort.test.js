`use strict`;

const { it } = require('eslint/lib/rule-tester/rule-tester');
const insertionSort = require('./insertion-sort');

describe('Insertion Sort tests', () => {
  it('should sort an array of cursed numbers', () => {
    let sortedArray = insertionSort([8, 4, 23, 42, 16, 15]);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort an array of numbers in reverse sort order', () => {
    let sortedArray = insertionSort([20, 18, 12, 8, 5, -2]);

    expect(sortedArray).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('should sort an array with few unique numbers', () => {
    let sortedArray = insertionSort([5, 12, 7, 5, 5, 7]);

    expect(sortedArray).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('should sort a nearly sorted array', () => {
    let sortedArray = insertionSort([2, 3, 5, 7, 13, 11]);

    expect(sortedArray).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
