// 나의 코드 -> 시간 초과
// 모든 숫자들을 2진수로 바꾸는 과정에서 시간이 많이 들고, 최대숫자가 10^15이므로, 큰 숫자일수록 시간이 오래걸림
// 그래서 2번째 방법으로 접근

// 나의 코드
// 배열을 순회하면서
// 해당 숫자의 비트를 저장
// 각 넘버의 1을 증가한 숫자의 비트와 비교하면서 다른지점이 2 이하이다? 그럼 스탑하고 그거를 answer에 담는다
function solution(numbers) {
  let answer = [];

  numbers.forEach((num) => {
    const numBit = num.toString(2).split('').reverse().join('');
    let res = num;
    while (true) {
      const newNum = res + 1;
      const newNumNit = newNum.toString(2).split('').reverse().join('');
      let cnt = 0;
      for (let i = 0; i < newNumNit.length; i++) {
        try {
          if (numBit[i] != newNumNit[i]) {
            cnt += 1;
          }
        } catch (error) {
          cnt += 1;
          break;
        }
      }
      res = newNum;
      if (cnt <= 2) break;
    }

    answer.push(res);
  });
  return answer;
}

console.log(solution([2, 7]));
// [(3, 11)];

// 2번째 방법
// 짝수는 무조건 마지막 비트가 0이다.
// 그러므로 마지막 비트를 1로 더한 값이 답이 된다.
// 홀수는 비트에서 마지막 0을 1로 바꾸고 해당 비트 기준 오른쪽에서 처음으로 마주한 0을 1로 바꾸어 그만큼 값을 줌으로써, 최대한 적게 더하고 최대한 많이 빼서 가장 가까운 큰수를 구한다.
// 홀수는 마지막 비트가 무조건 1이므로 위의 로직이 성립한다.
function solution2(numbers) {
  let answer = [];
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      answer.push(num + 1);
    } else {
      let bit = num.toString(2).split('');
      bit.unshift('0');
      const lastZeroIdx = bit.lastIndexOf('0');
      bit[lastZeroIdx] = '1';
      bit[bit.indexOf('1', lastZeroIdx + 1)] = '0';
      answer.push(parseInt(Number(bit.join('')), 2));
    }
  });
  return answer;
}

console.log(solution2([2, 7]));
