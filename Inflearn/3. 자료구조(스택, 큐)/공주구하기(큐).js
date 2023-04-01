// num까지의 숫자로 정렬된 배열을 만든다.
// 앞에서부터 k-1까지 반복문을 돌며 뒤에 넣어줌
// k 순서인 것은 삭제
function solution(num, k) {
  const queue = new Array(num).fill(0).map((_, idx) => idx + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      const val = queue.shift();
      queue.push(val);
    }
    queue.shift();
  }
  return queue[0];
}

console.log(solution(8, 3));
