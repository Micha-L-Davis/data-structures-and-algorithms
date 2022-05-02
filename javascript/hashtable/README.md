# Hashtables
This is an implementation of the hashtable data structure in Javascript.

## Approach & Efficiency
Hashing algorithm is very simple, based on the ascii sum of the key characters. Collisions are handled via a linked list in each bucket.

Search/Insert/Delete time complexity is *O(n)*.

## API

* set
  * Arguments: key, value
  * Returns: nothing
  * This method will hash the key, and set the key and value pair in the table, handling collisions as needed.
  * Should a given key already exist, replace its value from the value argument given to this method.
* get
  * Arguments: key
  * Returns: Value associated with that key in the table
* contains
  * Arguments: key
  * Returns: Boolean, indicating if the key exists in the table already.
* keys
  * Returns: Collection of keys
* hash
  Arguments: key
  Returns: Index in the collection for that key
