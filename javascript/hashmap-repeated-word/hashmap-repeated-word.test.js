'use strict';

const repeatedWord = require('./hashmap-repeated-word');

describe('Hashmap: Repeated Word tests', () => {
  it('should return a count of each of the words in the provided string', () => {
    let test1 = repeatedWord('Once upon a time, there was a brave princess who');
    let test2 = repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only');
    let test3 = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York');

    expect(test1['a']).toEqual(2);
    expect(test1['time']).toEqual(1);
    expect(test1['grommet']).toBeFalsy();

    expect(test2['it']).toEqual(10);
    expect(test2['was']).toEqual(11);
    expect(test2['grommet']).toBeFalsy();

    expect(test3['summer']).toEqual(2);
    expect(test3['i']).toEqual(2);
    expect(test3['grommet']).toBeFalsy();
  });
});
