// 정규표현식을 활용하여 문제를 푼다.

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/[.]+/g, ".")
    // 조건 중 or 이 있는 경우, |를 넣어서 체크한다.
    .replace(/^[.]|\[.]$/g, "")
    // 빈문자열 여부 체크
    .replace(/^$/g, "a")
    .substr(0, 15)
    .replace(/[.]$/, "");

  if (answer.length <= 2) {
    answer += answer[answer.length - 1].repeat(3 - answer.length);
  }

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("=.="));
console.log(solution("z-+.^."));
console.log(solution("./././././abcd/././././."));
