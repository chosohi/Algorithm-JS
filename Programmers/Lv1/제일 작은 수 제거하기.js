function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = arr[0];
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  arr.splice(idx, 1);
  return arr;
}

console.log(solution([4, 3, 2, 1]));

// tc1 4ms -> 1.88ms
