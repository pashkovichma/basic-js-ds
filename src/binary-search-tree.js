const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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

  add(data){
     
  }

  has(data) {
    return this.find(data) == true;
  }

  find(data) {
    let node = this._root;
    while(node) {
      if (data < node.data){
        node = node.left;
      } else if (data > node.data){
        node = node.right;
      } else {
        return node;
      }
    }
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