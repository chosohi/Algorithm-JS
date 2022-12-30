function solution(arr) {
  let answer = [];
  const summation = arr.reduce((sum, cur) => {
    return sum + cur;
  }, 0);
  const avg = summation / 3;
  if (!Number.isInteger(avg)) return 0;
  console.log(avg);
  const pigs = Array(3).fill(0);

  function backTracking(arr, pigs, avg, idx, start) {
    if (idx === 3) {
      console.log(pigs);
      return answer.push([...pigs]);
    }

    for (let i = start; i < arr.length; i++) {
      console.log(pigs[idx], arr[i]);
      if (pigs[idx] + arr[i] < avg) {
        pigs[idx] += arr[i];
        backTracking(arr, pigs, avg, idx, i + 1);
      } else {
        backTracking(arr, pigs, avg, idx + 1, i + 1);
      }
    }
  }

  backTracking(arr, pigs, avg, 0, 0);

  return answer;
}

console.log(solution([1, 2, 3, 0, 3]));
