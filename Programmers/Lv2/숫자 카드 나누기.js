// 1번째 조건
// 2번째 조건
// 순서만 다를뿐 로직은 같다 -> 함수로 만들기
// 2부터 numList1의 최솟값까지의 수 중, numList1 둘 다 나누어지는 수 객체에 담기
// numList2에 나누어지는 수가 있으면 0 리턴
// 없으면 ableNum의 최댓값 반환

function getNum(numList1, numList2) {
  const minimum = Math.min(...numList1);

  const ableObj = {};
  for (const num of numList1) {
    for (let i = 2; i <= minimum; i++) {
      if (num % i === 0) {
        ableObj[i] ? ableObj[i]++ : (ableObj[i] = 1);
      }
    }
  }
  // numList1의 모든 숫자들에게 나누어지는 숫자들 필터링, numList2의 최솟값보다 작거나 같아야함
  const filteredNums = Object.entries(ableObj)
    .filter((data) => data[1] === numList1.length)
    .map((data) => +data[0])
    .sort((a, b) => b - a);

  let summation = 0;
  for (const num of filteredNums) {
    for (const data of numList2) {
      if (data % num) {
        summation++;
      }
    }
    if (summation === numList2.length) {
      return num;
    } else {
      summation = 0;
    }
  }
  if (summation === 0) {
    return 0;
  }
}
function solution(arrayA, arrayB) {
  var answer = 0;
  answer = getNum(arrayA, arrayB);
  return answer;
}
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
