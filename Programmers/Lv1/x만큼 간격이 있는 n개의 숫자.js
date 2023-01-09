// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
  var answer = [];
  for (i = 1; i < n + 1; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 다른 사람 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// 1. fill()로 각 자리를  채운다.
const grid = Array(10).fill();
// [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
// 2. map()으로 각 자리 index에 해당하는 값을 할당한다.
