function solution(elements) {
  let answer = new Set();
  let length = elements.length;
  for (let cnt = 1; cnt < length + 1; cnt++) {
    for (let j = 0; j < elements.length; j++) {
      let res = calculate(j, 1, elements[j], cnt);
      console.log(res);
    }
  }

  function calculate(start, n, sum, cnt) {
    if (n === cnt) return sum;
    calculate(start + 1, n + 1, sum + elements[start + 1]);
  }

  return answer;
}
console.log(solution([7, 9, 1, 1, 4]));
