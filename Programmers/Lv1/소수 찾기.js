function solution(n) {
  var answer = 0;
  const tmp = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (tmp[i]) answer += 1;
    for (let j = i * i; j <= n; j += i) {
      tmp[j] = false;
    }
  }
  return answer;
}

console.log(solution(10));
console.log(solution(5));

// 에라토스테네스의 체 알고리즘으로 시간 복잡도를 줄이는 것이 핵심
