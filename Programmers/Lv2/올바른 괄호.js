function solution(s) {
  var answer = true;

  let stack = [];

  for (const iterator of s) {
    if (iterator === ")" && stack && stack[stack.length - 1] === "(") {
      stack.pop();
      // )에 대응하는 (이 스택에 없다면 false
    } else if (iterator === ")" && stack.length === 0) {
      return false;
    } else {
      stack.push(iterator);
    }
  }
  if (stack.length) {
    return false;
  }
  return answer;
}

console.log(solution("()()"));

// 다른 사람 풀이
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    // ")"이 먼저 들어온 경우
    if (cum < 0) {
      return false;
    }
  }
  // () 짝이 잘 맞아서 합이 0이 됐을 때
  return cum === 0 ? true : false;
}
