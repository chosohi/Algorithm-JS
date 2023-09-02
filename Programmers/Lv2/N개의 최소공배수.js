function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
function getlcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let tmp = getlcm(arr[i], arr[i + 1]);
    arr[i + 1] = tmp;
  }
  return arr.at(-1);
}

console.log(solution([2, 6, 8, 14]));

// 다른 사람 풀이
var gcd = (a, b) => (b % a === 0 ? a : gcd(b % a, a));
var lcm = (a, b) => (a * b) / gcd(a, b);
var nlcm = (num) => num.sort().reduce((a, b) => lcm(a, b));

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2, 6, 8, 14]));
