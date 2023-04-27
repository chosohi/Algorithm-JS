function solution(arr) {
  const total = arr.reduce((a, b) => (a += b), 0);
  const n = arr.length;

  let flag = 0,
    answer = "NO";
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
}

console.log(solution([1, 3, 5, 6, 7, 10]));
