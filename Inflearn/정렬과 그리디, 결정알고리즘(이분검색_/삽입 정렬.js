// 삽입 정렬
// i는 1번째부터 시작한다.
// j(i-1 ~ 0)까지 역행으로  arr[i]의 자리를 찾아간다. (tmp 에 arr[i] 저장)
// arr[i] < arr[j] 이면 arr[j+1] = arr[j]로 복사한다.
// arr[i] > arr[j]이면 j+1자리가 자신의 자리이게 되므로, arr[j+1] = tmp로 삽입한다.

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i];
    let idx;
    for (let j = i - 1; j > -1; j--) {
      idx = j;
      console.log(j);
      if (arr[i] < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    console.log(arr, idx);
    arr[idx + 1] = tmp;
  }
  console.log(arr);
}
console.log(solution([11, 7, 5, 6, 10, 9]));
