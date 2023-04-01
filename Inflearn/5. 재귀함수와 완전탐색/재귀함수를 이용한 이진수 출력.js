// 몫이 0이 될때까지 나눈다.

function solution(n) {
  let answer = "";
  function DFS(l) {
    if (l === 0) return;
    else {
      const val = l % 2;
      l = parseInt(l / 2);
      DFS(l);
      answer += val;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
