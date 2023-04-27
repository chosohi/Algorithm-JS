// 부분집합 문제
// 바둑이를 트럭에 태운다(1), 태우지 않는다(2)의 경우의 수를 구하면 됨

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);

  return answer;
}

const c = 259;
const arr = [81, 58, 42, 33, 61];
console.log(solution(c, arr));
