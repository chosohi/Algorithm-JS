// 처음에는 stack.at(-1)으로 접근하였는데, 이로 인해 효율성 1번 문제가 시간초과가 걸림
// stack[stack.length-1]로 접근하여 시간초과 해결
function solution(arr) {
  let answer = 0;
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (stack.length) {
      if (stack[stack.length - 1] === arr[i]) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    } else {
      stack.push(arr[i]);
    }

    answer = stack.length ? 0 : 1;
  }
  return answer;
}

console.log(solution("baabaa"));
