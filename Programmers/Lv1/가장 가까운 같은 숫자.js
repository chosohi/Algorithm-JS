// 17:46 시작 // 17.54 해결

// s를 받아
// s를 순회해
// 투포인터
// 시작 = 0, 순회 시작 인덱스 = 시작 -1
// 만약 시작인덱스가 -1이면 그 순서에서는 -1을 답안에 넣어
// 아니면, 시작인덱스가 0이될때까지 순회해
// 시작이랑 같은 단어를 찾았으면 시작 - 시작 인덱스 룰 답안에 넣어
function solution(s) {
  let answer = [];
  let arr = s.split("");
  start = 0;
  checkIdx = start - 1;
  while (start <= arr.length - 1) {
    if (checkIdx < 0) {
      answer.push(-1);
      start++;
      checkIdx = start - 1;
      continue;
    }
    if (arr[start] === arr[checkIdx]) {
      answer.push(start - checkIdx);
      start++;
      checkIdx = start - 1;
    } else {
      checkIdx--;
    }
  }
  return answer;
}

console.log(solution("foobar"));
