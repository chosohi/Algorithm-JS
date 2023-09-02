function solution(s) {
  let answer = 0;
  const brackets = [
    ["(", "{", "["],
    [")", "}", "]"],
  ];
  s = s.split("");

  if (s.length % 2 === 1) return answer;

  for (let i = 0; i < s.length; i++) {
    const front = s.shift();
    s.push(front);
    const stack = [];

    for (let j = 0; j < s.length; j++) {
      if (j === 0 && brackets[1].includes(s[j])) {
        stack.push(s[j]);
        break;
      }
      // 여는 괄호 stack에 넣기
      if (brackets[0].includes(s[j])) stack.push(s[j]);
      else {
        // 닫는 괄호 짝 없는 경우
        if (!stack.length) {
          stack.push(s[j]);
          break;
          // 짝이 맞는 경우
        } else if (
          brackets[1].indexOf(s[j]) ===
          brackets[0].indexOf(stack[stack.length - 1])
        ) {
          stack.pop();
          // 짝이 안맞는 경우
        } else {
          break;
        }
      }
    }
    if (stack.length === 0) answer++;
  }
  return answer;
}

console.log(solution("[](){}"));

console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
