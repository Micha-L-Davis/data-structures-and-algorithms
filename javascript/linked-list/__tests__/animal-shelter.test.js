'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const { AnimalShelter, Dog, Cat } = require('../animal-shelter');

let animalShelter = new AnimalShelter();

describe('Animal Shelter Tests', () => {

  console.log = jest.fn();

  it('should refuse to queue a non-Animal object', () => {
    let object = { not: 'an animal' };
    animalShelter.enqueue(object);

    expect(animalShelter.count).toEqual(0);
    expect(console.log).toHaveBeenCalledWith('Only animals can be boarded in this shelter!');
  });

  it('should add a cat to the cat queue', () => {
    let cat = new Cat();
    animalShelter.enqueue(cat);

    expect(animalShelter.count).toEqual(1);
    expect(animalShelter.catQueue.peek().type).toEqual('cat');
  });

  it('should dequeue a cat on request', () => {
    let cat = animalShelter.dequeue('cat');

    expect(animalShelter.count).toEqual(0);
    expect(cat.type).toEqual('cat');
  });

  it('should add a dog to the dog queue', () => {
    let dog = new Dog();
    animalShelter.enqueue(dog);

    expect(animalShelter.count).toEqual(1);
    expect(animalShelter.dogQueue.peek().type).toEqual('dog');
  });

  it('should dequeue a dog on request', () => {
    let dog = animalShelter.dequeue('dog');

    expect(animalShelter.count).toEqual(0);
    expect(dog.type).toEqual('dog');
  });

  it('should return null if we try to dequeue a bird', () => {
    let nullReturn = animalShelter.dequeue('bird');

    expect(nullReturn).toEqual(null);
  });
});
