// 자바스크립트의 해시맵 자료구조를 활용하여 문제 풀기

function solution(arr) {
  let arrMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (arrMap.has(el)) {
      arrMap.set(el, arrMap.get(el) + 1);
    } else {
      arrMap.set(el, 1);
    }
  }
  let num = 0;
  let answer = "";
  for (let [key, val] of arrMap) {
    if (num < val) {
      answer = key;
      num = val;
    }
  }

  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
