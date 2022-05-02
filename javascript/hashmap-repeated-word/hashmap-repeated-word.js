'use strict';

module.exports = function repeatedWord(string) {
  let map = new Map();

  let words = string.toLowerCase().match(/\w+/gm);
  words.map((word) => {
    if (map.has(word)) {
      let value = map.get(word) + 1;
      map.set(word, value);
    } else {
      map.set(word, 1);
    }
  });

  return Object.fromEntries(map);
};
