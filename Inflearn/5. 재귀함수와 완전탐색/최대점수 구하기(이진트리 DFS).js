// 문제의 점수와 시간의 인덱스가 동일한 것을 이용하여 DFS로 부분집합을 구하고 그 최댓값을 구하는 방법으로 진행한다.

function solution(maxTime, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(L, sum, time) {
    if (maxTime < time) return;
    if (L === ps.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

const maxTime = 20;
const ps = [10, 25, 15, 6, 7];
const pt = [5, 12, 8, 3, 4];
console.log(solution(maxTime, ps, pt));
