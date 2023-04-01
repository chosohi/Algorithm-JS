// 버블 정렬
// 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
// 선택정렬과 다르게, 제일 뒷자리(오름차순 기준 제일 큰 수)가 먼저 정해진다.
// 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환한다.

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(arr);
  }
}

console.log(solution([13, 5, 11, 7, 23, 15]));
