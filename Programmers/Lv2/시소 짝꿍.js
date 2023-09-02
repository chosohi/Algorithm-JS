function solution(weights) {
  let answer = 0;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const range = [2, 3, 4];
  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      const num = lcm(weights[i], weights[j]);

      if (
        range.includes(Math.floor(num / weights[i])) &&
        range.includes(Math.floor(num / weights[j]))
      ) {
        console.log(num, weights[i], weights[j]);
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
