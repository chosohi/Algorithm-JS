function solution(arr) {
  const table = new Array(72).fill(0);

  arr.forEach((el) => {
    for (let i = el[0]; i < el[1]; i++) {
      table[i] += 1;
    }
  });
  return Math.max(...table);
}
console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

// 입장과 퇴장시간을 문자열과 함께 저장
// s이면 +1
// e이면 퇴장했으니 -1
function secondSolution(arr) {
  let answer = 0;

  const table = [];
  for (const t of arr) {
    table.push([t[0], "s"]);
    table.push([t[1], "e"]);
  }

  // 입장, 퇴장 시간 기준 정렬 후, s,e정렬
  // 문자열은 아스키코드로 바꿔서 비교해줘야함
  table.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (const t of table) {
    if (t[1] === "s") cnt++;
    else cnt--;
    if (cnt > answer) answer = cnt;
  }

  return answer;
}

console.log(
  secondSolution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
