// 정수 배열과 숫자가 주어지면 함수 에 전달된 숫자의 길이와 하위 배열의 최대 합을 찾는 maxSubarraySum 이라는 함수를 작성
// 하위 배열은 원래 배열 의 연속 요소로 구성되어야 한다.

// Sliding Window 방법 적용

// 목표 시간복잡도 O(n) / 공간복잡도 O(1)

function maxSubarraySum(arr, num) {
  let summation = 0;
  let maximum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maximum += arr[i];
  }

  summation = maximum;

  for (let i = num; i < arr.length; i++) {
    summation = summation - arr[i - num] + arr[i];
    maximum = Math.max(summation, maximum);
  }
  return maximum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
