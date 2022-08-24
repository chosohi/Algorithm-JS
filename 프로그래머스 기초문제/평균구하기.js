function solution(arr) {
  return arr.reduce((acc, current) => (acc += current)) / arr.length;
  return answer;
}

// reduce함수는 콜백함수를 인자로 받는다.
// 콜백함수의 첫번째 argument는 이전 arr의 reduce 메서드의 반환값, 즉 누적값이고
// 두 번째 인자는 현재 값을 의미한다
// 세번째 인자는 index를 받는다
