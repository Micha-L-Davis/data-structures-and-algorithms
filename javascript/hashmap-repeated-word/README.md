# Hashmap: Repeated Word

## Challenge

Find the first repeated word in a book.

### Stretch Goals

* Modify your function to return a count of each of the words in the provided string
* Modify your function to return a list of the words most frequently used in the provided string

## Approach & Efficiency

By using the JavaScript Map object, we can read the input string word by word, store each word as a "key" with its value beginning at "1," and increment the value for each instance of the key found in the input string. This will satisfy either of the stretch goals.  If we were just focused on the primary goal, the only difference in implementation would be setting the value to any truthy expression and simply verifying that if the key already exists in the map, then return that word.

Operations for this function scale linearly ( i.e. *O(n)*).

## API

* `repeatedWord`
  * Arguments: a string
  * Returns: an object with a count of each of the words in the provided string
