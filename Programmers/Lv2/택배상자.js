// 보조 벨트에 넣고 맞으면 꺼내기

function solution(order) {
  let stack = [];

  let idx = 0;
  for (let i = 1; i < order.length + 1; i++) {
    stack.push(i);
    while (stack.length > 0 && order[idx] === stack[stack.length - 1]) {
      stack.pop();
      idx++;
    }
  }
  return idx;
}

// 1 => stack [1] => 2 => stack [1] => 3 => stack.pop() , stack[3]=>  4 pop => stack.pop(), 3 pop => stack [5] => 6 pop => stack.pop ,5 pop => stack[7] => 8 pop => stack.pop 7 pop
console.log(solution([2, 1, 4, 3, 6, 5, 8, 7, 10, 9])); //10
console.log(solution([2, 1, 6, 7, 5, 8, 4, 9, 3, 10])); //10
