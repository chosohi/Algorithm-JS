function solution(t, p) {
  let answer = 0;
  const range = p.length;

  for (let i = 0; i < t.length - range + 1; i++) {
    const tmp = t.slice(i, i + range);
    if (+tmp <= +p) answer += 1;
  }
  return answer;
}

const t = "500220839878";
const p = "7";

console.log(solution(t, p));
