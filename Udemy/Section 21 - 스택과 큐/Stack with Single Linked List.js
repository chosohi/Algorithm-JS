class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let tmp = this.first;
    // stack에 노드가 한개만 있다면 last를 null로 바꿔서 this.first.next가 null이 되도록 함
    if (this.first === this.last) {
      this.last = null;
    }
    // this.last === this.first.next
    this.first = this.first.next;
    this.size--;
    return tmp.value;
  }
}
