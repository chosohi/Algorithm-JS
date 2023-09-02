function solution(data, col, row_begin, row_end) {
  var answer = 0;
  // col 기준 오름차순 정렬, 근데 값이 같으면 기본키 기준 내림차순
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin - 1; i < row_end; i++) {
    let S_i = 0;
    for (let j = 0; j < data[i].length; j++) {
      S_i += data[i][j] % (i + 1);
    }
    answer ^= S_i;
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [7, 7, 7, 7],
    ],
    2,
    2,
    3
  )
);
console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
