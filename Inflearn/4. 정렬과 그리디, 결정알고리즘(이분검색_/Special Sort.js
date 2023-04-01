// 버블 정렬처럼 인접한 두 요소를 비교하며 -는 앞으로 보낸다.
// 양수들을 뒤로 보내고, 음수들을 앞으로 보내는 로직

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
