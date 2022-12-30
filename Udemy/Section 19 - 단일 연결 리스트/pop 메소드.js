// 리스트가 비어있을 경우, undefined 반환
// 비어있지 않을 경우, 테일에 이를 때까지 전체 리스트를 따라가면 된다.
// 동시에, 이전 노드가 어떤 것이었는지를 항상 추하하고 있어야한다.
// 마지막에서 두번째 노드의 next를 null로 설정
// tail값을 마지막에서 두 번째 노드로 업데이트
// 길이를 하나 감소시킨 다음, 방금 제거한 노드를 반환

// 두 변수 current, newTail은 첫 노드에서 시작
// current는 현재 노드의 next가 비어있는지 여부 체크
// newTail은 마지막에서 두번째 인덱스 저장을 위한 변수

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

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
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
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.pop();
