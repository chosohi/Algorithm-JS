const num = 6;

function solution(num) {
  tmp = -1;
  for (let index = 0; index < 500; index++) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num /= 2;
    }
    tmp = num;
  }
  console.log(tmp);

  return answer;
}

solution();
