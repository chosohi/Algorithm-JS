// 팩토리얼 함수 구현

function factorial(num) {
  if (num <= 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// 반복문 팩토리얼 함수

function fatorialFor(num) {
  let summation = 1;
  for (let i = num; i > 1; i--) {
    summation *= i;
  }
  return summation;
}

console.log(fatorialFor(5));
