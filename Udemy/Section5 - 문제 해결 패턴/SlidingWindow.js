// arr에서 num의 길이만큼 연결된 수의 합 중, 최댓값을 반환하는 maxSubarraySum
// Sliding Window 접근법으로 시간 복잡도를 O(n)으로 처리

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // 앞에 더한 첫번째 숫자를 빼고, 뒤에 있는 숫자를 더한다.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
