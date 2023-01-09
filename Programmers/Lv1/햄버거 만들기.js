function solution(ingredient) {
  let answer = 0;
  // 스택에 숫자를 쌓아
  // 4개 이상일때부터 뒤에서 4개를 1,3,2,1로 느는지 확인해
  // 맞으면 4개 pop

  let stack = [];
  const hamburger = [1, 2, 3, 1];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4) {
      let cnt = 0;
      for (let j = 0; j < 4; j++) {
        if (hamburger[j] === stack[stack.length - 4 + j]) {
          cnt++;
        }
      }
      if (cnt === 4) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
