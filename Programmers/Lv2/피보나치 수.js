function fibo(n) {
  if (n < 3) return 1;
  console.log(n);
  return fibo(n - 1) + fibo(n - 2);
}

function solution(n) {
  let answer = 0;
  answer = fibo(n);
  return answer;
}

console.log(fibo(3));
