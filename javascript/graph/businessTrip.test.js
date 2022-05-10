'use strict';

const Graph = require('./graph');
const businessTrip = require('./businessTrip');

const connectionMap = new Graph();

describe('Business Trip Calculator Tests', () => {
  const pandora = connectionMap.addNode('Pandora');
  const arendelle = connectionMap.addNode('Arendelle');
  const metroville = connectionMap.addNode('Metroville');
  const monstropolis = connectionMap.addNode('Monstropolis');
  const narnia = connectionMap.addNode('Narnia');
  const naboo = connectionMap.addNode('Naboo');

  connectionMap.addEdge(pandora, arendelle, 150);
  connectionMap.addEdge(pandora, metroville, 82);
  connectionMap.addEdge(arendelle, metroville, 99);
  connectionMap.addEdge(arendelle, monstropolis, 42);
  connectionMap.addEdge(metroville, narnia, 37);
  connectionMap.addEdge(metroville, naboo, 26);
  connectionMap.addEdge(metroville, monstropolis, 105);
  connectionMap.addEdge(monstropolis, naboo, 73);
  connectionMap.addEdge(narnia, naboo, 250);

  test('the function should return null if a trip cannot be made directly', () => {
    let itinerary = ['Pandora', 'Monstropolis'];
    let cost = businessTrip(connectionMap, itinerary);

    expect(cost).toBe(null);
  });

  test('the function should return the cost of a direct trip to an adjacent airport', () => {
    let itinerary = ['Pandora', 'Metroville'];
    let cost = businessTrip(connectionMap, itinerary);

    expect(cost).toBe(82);
  });

  test('the function should return the cost of a trip visiting three connected airports', () => {
    let itinerary = ['Pandora', 'Metroville', 'Monstropolis'];
    let cost = businessTrip(connectionMap, itinerary);

    expect(cost).toBe(187);
  });
});
