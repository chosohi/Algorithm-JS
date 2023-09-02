function solution(N, stages) {
  var answer = [];

  const obj = {};
  for (let i = 1; i < N + 1; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    const num = stages[i];
    if (num > N) continue;
    obj[num] += 1;
  }

  let parent = stages.length;

  Object.entries(obj).forEach((el) => {
    const [key, value] = el;
    obj[key] = value / parent;
    parent -= value;
  });

  Object.entries(obj)
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    })
    .map((el) => {
      answer.push(+el[0]);
    });

  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
