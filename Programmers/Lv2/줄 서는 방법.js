// 순열을 구하여 k번째 배열을 반환하는 문제

// 시간 초과 ,,
function solution(n, k) {
  let answer = [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const visited = Array(n).fill(false);

  function permute(current) {
    if (current.length === n) {
      answer.push(current.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true; // 방문 표시
        current.push(numbers[i]);
        permute(current);
        current.pop(); // 재귀 호출 후, 현재 배열에서 선택한 숫자 제거
        visited[i] = false;
      }
    }
  }

  permute([]);
  return answer[k - 1];
}

console.log(solution(3, 5));
