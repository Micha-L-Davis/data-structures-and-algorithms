'use strict';

const Hashtable = require('../');

let table = new Hashtable(1024);

describe('Hashtable Tests', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.set('test key', 'test value');

    let truelyContains = table.contains('test key');

    expect(truelyContains).toBeTruthy();
  });

  test('Retrieving based on a key returns the value stored', () => {
    let value = table.get('test key');

    expect(value).toEqual('test value');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let value = table.get('heffalump');
    let falselyContains = table.contains('heffalump');

    expect(value).toEqual(null);
    expect(falselyContains).toBeFalsy();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    table.set('also test key', 'also test value');

    let keys = table.keys();
    expect(keys).toEqual(['also test key', 'test key']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    table.set('000', 'a value'); //Hashes to 240
    table.set('@P', 'also a value'); //Also hashes to 240
    expect(table.buckets[240].head.next.value['000']).toBeTruthy();
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let value1 = table.get('000');
    let value2 = table.get('@P');

    expect(value1).toEqual('a value');
    expect(value2).toEqual('also a value');
  });

  test('Successfully hash a key to an in-range value', () => {
    let hash = table.hash('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');

    expect(hash <= 1024).toBeTruthy();
  });
});
