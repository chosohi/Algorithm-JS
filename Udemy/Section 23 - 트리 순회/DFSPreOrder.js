class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // 동일한 값이 있다면
        if (value === current.value) return undefined;
        // 루트보다 값이 작다면
        if (value < current.value) {
          // 루트의 왼쪽 노드가 없다면
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    // 10
    let current = this.root,
      found = false;

    while (current && !found) {
      // value = 2, current.value = 10
      if (value < current.value) {
        // 왼쪽 노드로 이동
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // 값을 찾음
        found = true;
      }
    }
    if (!found) return undefined;
    // found가 true일때
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    // 10
    let current = this.root,
      found = false;

    while (current && !found) {
      // value = 2, current.value = 10
      if (value < current.value) {
        // 왼쪽 노드로 이동
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // 값을 찾음
        return true;
      }
    }
    // left 나 right 가 없으면 current가 null로 할당되면서 while문에서 나옴
    return false;
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log(tree.DFSPreOrder());
