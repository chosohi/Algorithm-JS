// 내가 예상하지 못하는 상황으로 조건문 안 로직이 실행될 수 있으니
// else if 로 분명하게 조건을 구분하여 처리한다

// "a"와 같은 특이 케이스의 경우, 예외처리로 끝내고, 나머지 경우에 대해 인덱스를 설정하여 푼다.

function solution(s) {
  if (s.length === 1) return 1;

  let answer = 0;

  let same = 1;
  let diff = 0;
  let start = s[0];
  for (let i = 1; i < s.length; i++) {
    if (same === diff) {
      answer++;
      start = s[i];
      same = 1;
      diff = 0;
    } else if (start === s[i]) {
      same++;
    } else if (start !== s[i]) {
      diff++;
    }
    console.log(start, s[i], same, diff);

    if (i === s.length - 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("a"));
