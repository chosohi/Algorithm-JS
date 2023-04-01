// lt : 최소 간격 시작값으로 최소 1
// rt : 최대 간격 시작값으로 최대 가장 큰 좌표

function count(arr, distance) {
  let cnt = 1,
    endPoint = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - endPoint >= distance) {
      endPoint = arr[i];
      cnt++;
    }
  }
  return cnt;
}
function solution(horses, arr) {
  let answer = 0;

  arr.sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    // 간격
    const mid = parseInt((lt + rt) / 2);

    // horses마리 이상이 되어야함
    if (count(arr, mid) >= horses) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
