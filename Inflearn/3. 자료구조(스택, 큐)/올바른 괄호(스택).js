function solution(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      if (stack.at(-1) === "(") stack.pop();
      else break;
    }
  }

  if (stack.length) return "NO";
  else return "YES";
}

console.log(solution("(()(()))(()"));
