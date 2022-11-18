// 순수 재귀 : 중첩 함수가 아닌, 필요한 모든 코드가 함수 자체에 포함되며 재귀적인 함수

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// 코드 내부 설명
// newArr = newArr.concat(collectOddValues(arr.slice(1)));

// 1. 0번째 항목이 홀수여서 newArr에 들어감
// 2. 해당 항목 뒤에 홀수인 항목들과 함께 합침 (재귀적)
// [1].concat(collectOddValues(arr.slice(1)))
// 위의 과정이 길이가 0이될때까지 반복
