function checkNum(num) {
  if (num % 2) {
    return parseInt((num + 1) / 2);
  } else {
    return parseInt(num / 2);
  }
}

function solution(n, a, b) {
  var answer = 1;
  let max, min;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  while (true) {
    if (max % 2 === 0 && max - min === 1) {
      break;
    }

    max = checkNum(max);
    min = checkNum(min);
    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 5));

// 다른 사람 풀이
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
