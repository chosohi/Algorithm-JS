// 전위 순회 : 부모 -> 왼 -> 오
// 중위 순회 : 왼 ->부모 -> 오
// 후위 순회 : 왼 -> 오 -> 부모

// 전위 순회
function solution(v) {
  let answer = [];
  function DFS(v) {
    // return 시킬 조건
    if (v > 7) return;
    else {
      answer.push(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));

// 중위 순회
function solution(v) {
  let answer = [];
  function DFS(v) {
    // return 시킬 조건
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer.push(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}
// 후위 순회
function solution(v) {
  let answer = [];
  function DFS(v) {
    // return 시킬 조건
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer.push(v);
    }
  }
  DFS(v);
  return answer;
}
