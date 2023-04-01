// 레이저와 쇠막대기를 구분해서 처리해야한다.
// stack에는 여는괄호만 넣어, 닫는 괄호와의 영역을 구분한다.

// 만약 stack.pop()을 변수에 저장해서 로직에 활용하게 되면, 두번째 else문인 "닫는 괄호일 경우"에 대한 조건에 부합할 경우가 없어지게 되므로, str[i-1]로 접근하여 처리한다.

function solution(str) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      stack.pop();
      if (str[i - 1] === "(") {
        // 레이저일 때
        answer += stack.length;
      } else {
        // 막대기의 끝 일 때
        answer += 1;
      }
    }
  }

  return answer;
}
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
