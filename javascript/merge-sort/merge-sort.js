'use strict';

function mergeSort(array) {
  const length = array.length;
  const mid = length / 2;

  if (length < 2) return array;

  const left = array.splice(0, mid);
  return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

module.exports = mergeSort;
