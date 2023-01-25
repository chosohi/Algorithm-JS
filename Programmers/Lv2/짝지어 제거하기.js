function solution(arr) {
  let answer = 0;
  lt = 0;
  rt = 1;
  while (true) {
    if (arr.length === 0) {
      break;
    }
    if (rt > arr.length - 1 || lt > arr.length - 1) {
      break;
    }
    if (arr[lt] === arr[rt]) {
      arr = arr.slice(0, lt) + arr.slice(rt + 1);
      lt = 0;
      rt = 1;
      answer++;
    } else {
      lt++;
      rt++;
    }
  }
  if (arr.length === 0) {
    return 1;
  }
  return answer;
}

console.log(solution("baabaa"));
console.log(solution("baba"));
