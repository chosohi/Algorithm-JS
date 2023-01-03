// Node 초기화
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    // head 에 아무것도 없다면? -> 현재 길이가 0이니 head, tail 모두다 newNode로 채움
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 현재의 테일을 리스트의 맨 끝으로 추가하고, 테일의 마커를 마지막 노드를 가리키도록 이동
      // this.tail은 현재 이전 newNode임 그것의 다음 노드로 새로 들어온 노드를 연결
      this.tail.next = newNode;
      // 꼬리를 새로운 노드로 변경
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // Hello GoodBye !
    //              current
    //       newTail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // console.log(current.val);
    // console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // 만약 남은 하나의 노드도 삭제하여 길이가 0일 경우 처리
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // 헤드가 없는 경우, 헤드와 테일 모두 새로운 노드를 가리키도록 설정
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 노드가 이미 있는 경우, 새롭게 생성된 노드의 다음을 현재의 헤드로 설정하여 연결 후
      newNode.next = this.head;
      // 헤드를 새롭게 생성된 노드를 가리키도록 한다.
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    // push 메소드가 리스트를 반환하니, 여기에 더블!을 하면 !(not)!(not) 이중 부정, 즉 불리언으로 변환해줌
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let prev = this.get(index - 1);
    let newNode = new Node(value);
    let tmp = prev.next;
    prev.next = newNode;
    newNode.next = tmp;
    this.length++;
    return true;
  }
}
