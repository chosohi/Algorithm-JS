// 앞에서 부터 계산하면 뒤에 경우의 수를 다 구해서 해야하므로 비 효울적
// 뒤에서 점프 || 순간이동 구분
function solution(n) {
  let answer = 0;
  while (n) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n -= 1;
      answer++;
    }
  }
  return answer;
}

console.log(solution(5));
