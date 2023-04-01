// stack이 비어있으면 단어를 answer에 추가할거임

function solution(str) {
  const stack = [];
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    const val = str[i];
    if (val === "(") stack.push(val);
    else if (val === ")") {
      if (stack.at(-1) === "(") stack.pop();
    } else if (!stack.length) {
      answer += val;
    }
  }

  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
