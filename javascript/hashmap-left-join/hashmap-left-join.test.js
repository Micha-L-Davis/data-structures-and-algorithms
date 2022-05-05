'use strict';

const leftJoin = require('./hashmap-left-join');

describe('Hashmap Left-Join tests', () => {
  it('should join two hashmaps with identical keys', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('diligent', 'employed');
    map2.set('diligent', 'idle');
    map1.set('fond', 'enamoured');
    map2.set('fond', 'averse');

    let result = leftJoin(map1, map2);

    expect(result.diligent).toEqual(['employed', 'idle']);
    expect(result.fond).toEqual(['enamoured', 'averse']);
  });

  it('should join two hashmaps with completely different keys', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('diligent', 'employed');
    map2.set('vertical', 'horizontal');
    map1.set('fond', 'enamoured');
    map2.set('raise', 'lower');

    let result = leftJoin(map1, map2);

    expect(result.diligent).toEqual(['employed', null]);
    expect(result.fond).toEqual(['enamoured', null]);
  });

  it('should join two hashmaps with a mixture of alike and different keys', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('diligent', 'employed');
    map2.set('diligent', 'idle');
    map1.set('fond', 'enamoured');
    map2.set('raise', 'lower');

    let result = leftJoin(map1, map2);

    expect(result.diligent).toEqual(['employed', 'idle']);
    expect(result.fond).toEqual(['enamoured', null]);
  });
});
