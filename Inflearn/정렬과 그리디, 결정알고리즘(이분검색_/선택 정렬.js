// 선택 정렬
// 주어진 배열 중에서 최솟값을 찾는다.
// 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
// 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
// 하나의 원소만 남을 때까지 위의 1~3 과정을 반복한다.

function solution(arr) {
  // 마지막 요소는 자동으로 정렬되므로 그 전까지 반복한다.
  // i부터 맨끝까지 중 제일 작은 원소를 i자리로 옮긴다.
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        idx = j;
      }
    }
    // 가장 작은 숫자가 자기 자신이면 다음턴
    if (idx === i) continue;

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
