// solution으로 풀어봤는데 시간초과남
// dp 공부하고 다시 풀기..

function check(x, y, n, cnt, answer) {
  if (x === y) {
    answer.push(cnt);
    // console.log(answer);
    return;
  } else if (x > y) {
    return;
  }
  check(x, y - n, n, cnt + 1, answer);
  check(x, y / 2, n, cnt + 1, answer);
  check(x, y / 3, n, cnt + 1, answer);
}
function solution(x, y, n) {
  let answer = [];
  check(x, y, n, 0, answer);
  return Math.min(...answer);
}

function solution1(x, y, n) {
  let dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;
  for (let i = x; i < y + 1; i++) {
    // console.log(i);
    if (i + n <= y) {
      console.log(i);
      dp[i + n] = dp[i + n] === Infinity ? 1 : Math.min(dp[i + n], dp[i] + 1);
    }
    if (i * 2 <= y) {
      console.log(i * 2);
      dp[i * 2] = dp[i * 2] === Infinity ? 1 : Math.min(dp[i * 2], dp[i] + 1);
    }
    if (i * 3 <= y) {
      console.log(i * 3);
      dp[i * 3] = dp[i * 3] === Infinity ? 1 : Math.min(dp[i * 3], dp[i] + 1);
    }
  }
  console.log(dp);
  return dp[y];
}
console.log(solution(10, 40, 5));
