// 투포인터로 합이 num2가 되는 부분수열의 갯수를 구한다.
// rt는 sum보다 작을때마다 증가시킨다.
// lt는 sum이 num2보다 커지면 증가시킨다.
// num2와 sum을 매번 확인하여, 같으면 lt를 증가시킨다.(왜냐하면 rt를 증가시키면 sum의 값이 커지므로 num2가 될 수 없음)

function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    console.log(sum);
    if (sum === m) answer++;
    while (sum >= m) {
      // lt에 해당하는 값을 빼고, lt 증가
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

function myCode(num1, num2, arr) {
  let cnt = 0;
  let lt = 0,
    rt = 0;
  let sum = arr[rt];

  while (lt <= rt && rt < num1) {
    if (sum === num2) {
      cnt++;
      sum -= arr[lt];
      lt++;
    } else if (sum > num2) {
      sum -= arr[lt];
      lt++;
    } else {
      rt++;
      sum += arr[rt];
    }
  }

  return cnt;
}

console.log(myCode(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
