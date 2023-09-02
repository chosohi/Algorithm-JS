function solution(str) {
  let cnt = 0;
  let zeroCnt = 0;
  function DFS(str) {
    if (str === "1") {
      return;
    }
    // 전체 문자열 탐색하면서 0을 빈스트링으로 교체
    let newStr = str.replace(/0/g, "");

    cnt += 1;
    zeroCnt += str.length - newStr.length;

    DFS(newStr.length.toString(2));
  }
  DFS(str);

  return [cnt, zeroCnt];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));

// [3, 8];
// '01110'[(3, 3)];
// '1111111'[(4, 1)];
