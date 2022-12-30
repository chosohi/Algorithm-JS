// 양의 정수 배열과 양의 정수라는 두 개의 매개변수를 받는 minSubArrayLen 함수를 작성
// 합계가 함수에 전달된 정수보다 크거나 같은 연속 하위 배열의 최소 길이를 반환해야한다.
// 하나도 없으면 0을 반환한다.

// 목표 시간복잡도 O(n) / 공간복잡도 O(1)

// My solution
// 정렬하여 큰수부터 summation 배열에 더하고, 해당 summation이 num보다 크거나 같으면 해당 인덱스+1 반환
// summation이 슷지버디 직으면 0 반환

function minSubArrayLen(arr, num) {
  arr.sort((a, b) => b - a);
  console.log(arr);
}
minSubArrayLen([2, 1, 3, 4, 0], 1);
