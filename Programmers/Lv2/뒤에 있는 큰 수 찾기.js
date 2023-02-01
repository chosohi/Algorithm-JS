// 투포인터로 푸니, 마지막 문제들이 시간초과남
function solution(arr) {
  let answer = [],
    lt = 0,
    rt = 1;
  while (lt < rt) {
    if (lt === arr.length - 1) {
      answer.push(-1);
      break;
    }
    // lt보다 큰 숫자가 없으면 -1 넣고 그 다음 숫자 체크
    if (rt === arr.length) {
      answer.push(-1);
      lt++;
      rt = lt + 1;
      continue;
    }
    if (arr[lt] < arr[rt]) {
      answer.push(arr[rt]);
      lt++;
      rt = lt + 1;
    } else {
      rt++;
    }
  }
  return answer;
}
console.log(solution([9, 1, 5, 3, 6, 2]));
console.log(solution([2, 3, 3, 5]));
