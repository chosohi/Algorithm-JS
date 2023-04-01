function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  // 첫 시작 방 1카운트

  let cnt = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    e = arr[i][1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] >= e) {
        e = arr[j][0];
        cnt += 1;
      }
    }

    if (cnt > answer) answer = cnt;
    cnt = 0;
  }
  return answer;
}
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
