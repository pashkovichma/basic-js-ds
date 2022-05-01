const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(key, value){
    var currentNode;

		if (this._root == null) {
			this._root = new Node(key, value);
		} else {
			currentNode = this._root;
		}
			
		while (currentNode) {
			if (currentNode.key > key) {
				if (currentNode._left != null) 
					currentNode = currentNode._left;
				else {
					currentNode._left = new Node(key, value);
					break;	
				}
			} else if (currentNode.key < key) {
				if (currentNode._right != null) 
					currentNode = currentNode._right;
				else {
					currentNode._right = new Node(key, value);
					break;
				}
			} else break;	
		}
		return this;
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};