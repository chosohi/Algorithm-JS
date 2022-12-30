// 정렬되어 있는 정수 배열에서 두 숫자의 평균값이 일치하는지 여부를 체크하는 함수 averagePair
// 해당 숫자쌍은 1개 이상일 수도 있음
// 1개 이하의 배열은 무조건 false

// 목표 시간복잡도 O(n), 공간복잡도 O(1)

// My solution

function averagePair(arr, num) {
  let answer = false;
  let start = 0;
  let end = 1;

  if (arr.length < 2) {
    return answer;
  }

  let summation = 0;
  while (start < arr.length - 1) {
    if (start === arr.length - 1) {
      break;
    }
    summation += arr[start] + arr[end];
    // console.log(arr[start], arr[end]);
    if (summation / 2 === num) {
      answer = true;
      break;
    } else {
      end += 1;
      if (end === arr.length) {
        start += 1;
        end = start + 1;
      }
      summation = 0;
    }
  }

  return answer;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
