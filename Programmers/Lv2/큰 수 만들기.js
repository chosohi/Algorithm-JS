//
function solution(number, k) {
  var answer = "";
  answer += number[0];
  let high = number[0];
  let lastIdx;
  for (let i = 1; i < number.length; i++) {
    if (number[i] < high) {
      k--;
    } else if (number[i] > high) {
      answer = number[i];
      high = number[i];
    } else {
      answer += number[i];
    }
    if (k === 0) {
      lastIdx = i + 1;
      break;
    }
  }
  answer += number.substring(lastIdx);

  return answer;
}

console.log(solution("4177242841", 4));
