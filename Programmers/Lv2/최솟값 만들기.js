// 첫번째 배열은 오름차순
// 두번째 배열은 내림차순
// 서로 곱하여 더함

function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));

// 다른 사람 풀이

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
