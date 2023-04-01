// 나의 접근 방법
// sum에 arr[rt]를 더한다.
// 만약 lt부터 rt까지의 갯수가 k라면, sum과 max를 비교한다.
// sum이 크면 max를 변경시킨다.
// 조건문이 끝나고 lt를 증가시킨다.
// rt는 while문이 도는 동안 계속 증가시킨다.
function mysolution(n, k, arr) {
  let lt = 0;
  let rt = 0;
  let max = 0;
  let sum = 0;
  while (rt <= arr.length - 1) {
    sum += arr[rt];
    if (rt - lt + 1 === k) {
      if (sum > max) {
        max = sum;
      }
      sum -= arr[lt++];
    }
    rt++;
  }
  return max;
}
console.log(mysolution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// 강사님 코드 -> 슬라이딩 윈도우
// 슬라이딩 윈도우 : 특정 범위를 하나의 창문으로 만들어서 옆으로 밀어나가는 로직
function solution(k, arr) {
  let answer,
    sum = 0;

  // 첫번째 윈도우 생성
  for (let i = 0; i < k; i++) sum += arr[i];
  // 초기화
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    // 앞에거 빼고, 뒤에거 더함
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
