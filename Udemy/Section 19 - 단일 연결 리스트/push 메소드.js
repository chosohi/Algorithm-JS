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
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
