// answer에 값을 갱신할 필요 없이, 스택 내부에서 값을 연산 처리하여 넣어주면 된다.
// 피연산자 순서 유의하며 계산 필요

function solution(str) {
  const numStack = [];

  for (let i = 0; i < str.length; i++) {
    // number일 경우
    if (!isNaN(str[i])) numStack.push(Number(str[i]));
    else {
      const operator = str[i];
      let rt = numStack.pop();
      let lt = numStack.pop();
      switch (operator) {
        case "+":
          numStack.push(lt + rt);
          break;
        case "-":
          numStack.push(lt - rt);
          break;
        case "*":
          numStack.push(lt * rt);
          break;
        case "/":
          numStack.push(lt / rt);
          break;
      }
    }
  }

  return numStack.at(-1);
}

console.log(solution("352+*9-"));
