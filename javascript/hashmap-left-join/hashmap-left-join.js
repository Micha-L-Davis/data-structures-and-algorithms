'use strict';

function leftJoin(map1, map2) {
  let result = {};
  map1.forEach((value, key) => {
    let joined = [];
    if (map2.has(key)) {
      joined.push(value);
      joined.push(map2.get(key));
    } else {
      joined.push(value);
      joined.push(null);
    }
    result[key] = joined;
  });
  return result;
}

module.exports = leftJoin;
