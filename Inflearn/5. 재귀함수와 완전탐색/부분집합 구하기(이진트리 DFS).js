function solution(n) {
  let answer = [];
  let ch = Array(n + 1).fill(0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      // 공집합 제외
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 해당 숫자를 포함시킨다
      ch[v] = 1;
      // 그다음 숫자를 넘겨서 재귀 호출
      DFS(v + 1);
      // 돌아오면 해당 숫자 미포함시킨다.
      ch[v] = 0;
      DFS(v + 1);
      // 그다음 숫자를 넘겨서 재귀 호출
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
