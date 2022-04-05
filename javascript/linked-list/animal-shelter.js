'use strict';

const { Queue } = require('./index');

class AnimalShelter {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
    this.count = 0;
  }

  enqueue(animal) {
    if (animal instanceof Animal !== true) {
      console.log('Only animals can be boarded in this shelter!');
    }

    if (animal instanceof Cat) {
      this.catQueue.enqueue(animal);
      this.count++;
    }

    if (animal instanceof Dog) {
      this.dogQueue.enqueue(animal);
      this.count++;
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      this.count--;
      return this.catQueue.dequeue();
    }

    if (pref === 'dog') {
      this.count--;
      return this.dogQueue.dequeue();
    }

    return null;
  }
}


class Animal {
  constructor() { }
}

class Dog extends Animal {
  constructor() {
    super();
    this.type = 'dog';
  }
}

class Cat extends Animal {
  constructor() {
    super();
    this.type = 'cat';
  }
}

module.exports = {
  AnimalShelter,
  Animal,
  Cat,
  Dog,
};
