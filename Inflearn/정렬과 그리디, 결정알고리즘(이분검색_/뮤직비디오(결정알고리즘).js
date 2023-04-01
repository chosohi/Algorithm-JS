// 최소값은 배열 중 제일 큰 수
// 최대값은 배열 전체 합
// 이분 검색으로 최적의 크기를 찾아나간다.

function solution(maxLength, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);

  let lt = arr.at(-1);
  let rt = arr.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    // 최초 시작할 때, 한개의 dvd 계산
    let cnt = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        sum = arr[i];
        cnt += 1;
      } else sum += arr[i];
    }

    // 최소값을 찾기 위해 같은때 계속 줄여나간다
    if (cnt <= maxLength) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
