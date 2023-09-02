// 원본을 제외한 최대 더할 수 있는 숫자는 (n/2)+1 까지

// 카운트 함수
// 들어온 숫자가 n보다 작으면 + 들어온숫자+1
// 들어온 숫자가 n이랑 같으면 return trueimage.png
// 들어온 숫자가 n보다 크면 return false
function solution(n) {
  var answer = 0;
  let limit = n % 2 ? parseInt(n / 2) + 1 : parseInt(n / 2);

  for (let i = 1; i < limit; i++) {
    let flag = false;
    let sum = i;
    let start = i;
    while (!flag) {
      if (sum > n) break;
      if (sum === n) {
        flag = true;
      }
      if (sum < n) {
        start++;
        sum += start;
      }
    }
    if (flag) answer++;
  }
  // 원본 숫자 더하기
  answer++;

  return answer;
}
function countNum(num, sum, n) {
  if (sum < n) {
    return countNum(num + 1, sum + num + 1, n);
  } else if (n === sum) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(15));
