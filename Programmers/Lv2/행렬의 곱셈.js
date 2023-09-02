// 행렬의 arr1의 열의 갯수와 arr2의 행의 갯수가 같아야지 곱이 가능해지는 구조이다.
// 행렬의 전체 크기는 arr1의 행의 갯수 * arr2의 열의 갯수
// k = arr1의 열의 갯수이자 arr2의 행의 갯수
// n = arr1의 행의 갯수
// m = arr2의 열의 갯수

function solution(arr1, arr2) {
  let answer = new Array(arr1.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(arr2[0].length);
  }

  for (let n = 0; n < arr1.length; n++) {
    for (let m = 0; m < arr2[0].length; m++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[n][k] * arr2[k][m];
      }
      answer[n][m] = sum;
    }
  }
  // console.log(answer);
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
