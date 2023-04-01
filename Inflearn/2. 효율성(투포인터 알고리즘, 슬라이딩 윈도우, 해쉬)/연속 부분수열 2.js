function mycode(len, m, arr) {
  let lt = 0;
  let rt = 0;
  let cnt = 0;
  let sum = arr[0];
  while (lt <= rt && rt <= arr.length - 1) {
    if (sum <= m) {
      // 마지막 인덱스를 기준으로 연속 부분수열 갯수 더하기
      cnt += rt - lt + 1;

      // rt를 1 증가시킨 값의 인덱스를 넣는다
      sum += arr[++rt];
    } else if (sum > m) {
      sum -= arr[lt++];
    }
  }
  return cnt;
}

// 강사님 코드
function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    // 일단 더한 값이 기준보다 큰 상황에서는
    while (sum > m) {
      // lt에 해당하는 값을 빼고, lt 증가
      sum -= arr[lt++];
    }

    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
