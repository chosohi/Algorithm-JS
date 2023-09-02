function solution(n) {
  var answer = "";
  while (n > 0) {
    const share = Math.floor(n / 3);
    const remainder = n % 3;

    // 나머지 없이 몫이 잘 떨어질 경우(3의 배수)에는 해당 몫이 또 돌면 안되기 때문에, -1을 해야함
    n = remainder === 0 ? share - 1 : share;

    if (remainder === 0) answer += "4";
    else answer += remainder;
    if (n === 0) break;
  }

  return answer.split("").reverse().join("");
}

// 숫자를 3으로 나눈다.
// 나눈 몫과 나머지중 나머지는 제일 끝 자리 수
// 몫을 3으로 또 나눈다.
// 나머지는 그 다음 끝 자리수
// 몫이 3보다 크거나 같을 때 동안 계속 반복

// 여기서 나머지가 0일 경우, 해당 값이 4 이므로 몫-1을 함

// 3
// 3 을나누면 몫:1 나머지:0
// 일의 자리는 4
// 십의 자리는 없어야 된다.
// 몫 - 1 = 0 반복문 stop
// 4

// 6
// 6을 나누면 몫:2 나머지:0
// 일의 자리는 4
// 십의 자리는 있어야 된다.
// 몫 - 1 = 1 반복문 start
// 1을 나누면 몫:0 나머지:1
// 십의 자리는 1
// 14

// 12
// 12를 나누면 몫:4 나머지:0
// 일의 자리는 4
// 십의 자리 필요
// 몫 - 1 = 3 반복문 start
// 3을 나누면 몫:1 나머지:0
// 십의자리는 4
// 몫 - 1 = 0 반복문 stop
// 44

console.log(solution(1));
console.log(solution(4));
console.log(solution(10));
console.log(solution(13));
