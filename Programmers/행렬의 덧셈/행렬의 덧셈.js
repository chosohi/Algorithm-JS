const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  let answer = [[]];
  for (let index = 0; index < array.length; index++) {
    answer[index].push(arr1[index] + arr2[index]);
  }
  return answer;
}

solution();
