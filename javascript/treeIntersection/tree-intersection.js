'use strict';

const Table = require('../hashtable');

function treeIntersection(tree1, tree2) {
  let table = new Table(1024);
  let tree1Values = tree1.preOrderToArray();
  let tree2Values = tree2.preOrderToArray();

  while (tree2Values.length) {
    let v1 = tree1Values.pop();
    let v2 = tree2Values.pop();

    if (v1 === v2) table.set(v1, true);
    else {
      table.set(v1, false);
      table.set(v2, false);
    }
  }

  return table.keys(true);
}

module.exports = treeIntersection;
