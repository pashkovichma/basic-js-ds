const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (){
    this._root= null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
        this._root = newNode;
    } else {
        this.insertNode(this._root, newNode);
    }
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data) {
    return !!this.find(data) ;
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
    return null;
  }

  remove(data, node = this._root) {
    if (node === null) {
      return null;
    } else if (data < node.data) {// данные для удаления меньше, переходим влево
        node.left = this.remove(data, node.left);
      return node;
    } else if (data > node.data) {//данные для удаления больше, переходим вправа
        node.right = this.remove(data, node.right);
      return node;
    } else {//данные равны корню, удаляем узел
        if (node.right === null && node.left === null){//у узла нет потомков
          node = null;
          return node;
        }
        if (node.left === null){//у узла один потомок
          node = node.right;
          return node;
        } else if (node.right === null){
          node = node.left;
          return node;
        }
        let newNode = this.min(node.right);//у узла 2 потомка
        node.data = newNode;
        node.right = this.remove(newNode, node.right);
        return node;
    }
  }

  min(node = this._root) {
    if (node.left === null){
      return node.data;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this._root) {
    if (node.right === null){
      return node.data;
    } else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};