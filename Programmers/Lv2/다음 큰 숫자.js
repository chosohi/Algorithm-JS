function solution(n) {
  let answer = 0;
  let cnt = n
    .toString(2)
    .split("")
    .filter((a) => a === "1").length;

  let start = n + 1;

  while (true) {
    if (
      start
        .toString(2)
        .split("")
        .filter((a) => a === "1").length === cnt
    ) {
      answer = start;
      break;
    }
    start++;
  }

  return answer;
}

solution(78);
solution(15);

// 다른 사람 풀이

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
