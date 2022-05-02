'use strict';

const { LinkedList } = require('../linked-list');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % 1024;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.insert(data);
    } else {
      let bucket = new LinkedList();
      bucket.insert(data);

      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let node = this.searchInBucket(bucket, key);
      let value = node.value[key];
      return value;
    }
    return null;
  }

  contains(key) {
    let result = false;
    let position = this.hash(key);
    if (this.buckets[position]) {
      result = true;
    }
    return result;
  }

  keys() {
    let result = [];
    this.buckets.map((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          let keys = Object.keys(current.value);
          result = [...result, ...keys];
          current = current.next;
        }
      }
    });

    return result;
  }

  searchInBucket(bucket, key) {
    let current = bucket.head;
    while (current) {
      if (current.value[key])
        return current;
      current = current.next;
    }
  }

}

module.exports = Hashtable;
