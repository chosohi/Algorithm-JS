function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    if (n < a) break;
    const cnt = Math.floor(n / a);
    answer += cnt * b;
    n = (n % a) + cnt * b;
  }
  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
console.log(solution(5, 3, 21));
