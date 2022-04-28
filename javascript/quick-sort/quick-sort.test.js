`use strict`;

const quickSort = require('./quick-sort');

describe('Merge Sort tests', () => {
  it('should sort an array of cursed numbers', () => {
    let testArray = [8, 4, 23, 42, 16, 15];
    quickSort(testArray, 0, 5);
    expect(testArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort an array of numbers in reverse sort order', () => {
    let testArray = [20, 18, 12, 8, 5, -2];
    quickSort(testArray, 0, 5);
    expect(testArray).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('should sort an array with few unique numbers', () => {
    let testArray = [5, 12, 7, 5, 5, 7];
    quickSort(testArray, 0, 5);
    expect(testArray).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('should sort a nearly sorted array', () => {
    let testArray = [2, 3, 5, 7, 13, 11];
    quickSort(testArray, 0, 5);
    expect(testArray).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
