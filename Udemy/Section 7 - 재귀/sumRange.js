// 특정 숫자부터 1까지의 수를 합한 값을 반환하는 함수

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
