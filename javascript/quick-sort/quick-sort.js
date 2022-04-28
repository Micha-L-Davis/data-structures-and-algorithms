'use strict';

function quickSort(array, leftIndex, rightIndex) {
  if (leftIndex < rightIndex) {
    let lastPosition = partition(array, leftIndex, rightIndex);

    quickSort(array, leftIndex, lastPosition - 1);
    quickSort(array, lastPosition + 1, rightIndex);
  }
}

function partition(array, leftIndex, rightIndex) {
  let pivot = array[rightIndex];
  let latestLow = leftIndex - 1;

  for (let i = leftIndex; i < rightIndex; i++) {
    if (array[i] <= pivot) {
      latestLow++;
      swap(array, i, latestLow);
    }
  }

  swap(array, rightIndex, latestLow + 1);
  return latestLow + 1;
}

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

module.exports = quickSort;
