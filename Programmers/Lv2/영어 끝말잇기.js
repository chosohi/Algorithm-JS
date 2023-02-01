// 번호, 차례
function solution(n, words) {
  let turn = 1,
    order = 1;

  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (
      arr.includes(words[i]) ||
      (i && words[i][0] !== [words[i - 1][words[i - 1].length - 1]][0])
    ) {
      return [turn, order];
    }

    arr.push(words[i]);
    if (turn < n) {
      turn++;
    } else {
      turn = 1;
      order++;
    }
  }

  return [0, 0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);

// 다른 사람 풀이
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
