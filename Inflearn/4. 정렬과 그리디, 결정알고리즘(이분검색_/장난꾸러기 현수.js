// 이웃한 두 요소를 비교하여 왼쪽이 오른쪽보다 클때의 인덱스를 저장(짝꿍자리)하고, 해당 요소값을 현수키로 저장
// 현수키가 있다면 현수키보다 큰 인덱스를 찾아나감
// 해당 인덱스-1이 현수의 자리

function solution(arr) {
  // 깊은 복사
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer.join(" ");
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
