// 정렬된 배열에서
// 배열 내 unique value 갯수를 센다 (중복 제거)
// while 문이 아닌 for문으로 two Pointer 적용

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 4]));

// 코드 순회 상세 분석

// j = 1, arr[i] === arr[j] (1,1)
arr = [1, 1, 2, 2, 3, 4];
// j = 2, arr[1] !== arr[j] (1,2) => i++, arr[i] = arr[j]
arr = [1, 2, 2, 2, 3, 4];
//j = 3,  arr[i] === arr[j] (2,2)
arr = [1, 2, 2, 2, 3, 4];
// j = 4, arr[1] !== arr[j] (2,3) => i++, arr[i] = arr[j]
arr = [1, 2, 3, 2, 3, 4];
// j = 5, arr[1] !== arr[j] (3,4) => i++, arr[i] = arr[j]
arr = [1, 2, 3, 4, 3, 4];
