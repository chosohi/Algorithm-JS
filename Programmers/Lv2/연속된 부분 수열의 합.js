function solution(sequence, k) {
  let arr = [];

  for (let i = 0; i < sequence.length; i++) {
    let tmp = 0;
    for (let j = i; j < sequence.length; j++) {
      tmp += sequence[j];
      if (tmp === k) {
        arr.push([i, j]);
        break;
      }
    }
  }

  if (arr.length === 1) return arr[0];

  // 인덱스 갯수
  let cnt = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i][1] - arr[i][0];
    if (tmp < cnt) {
      answer = arr[i];
      cnt = tmp;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));
// [1, 2, 3, 4, 5]	7	[2, 3]
// [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
// [2, 2, 2, 2, 2]	6	[0, 2]
