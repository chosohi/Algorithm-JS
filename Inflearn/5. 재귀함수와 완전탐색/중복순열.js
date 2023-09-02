function solution(n, m) {
  // m 은 재귀 마지막 레벨
  // n * m 만큼 경우의 수가 나옴
  let answer = [];
  let tmp = Array(m).fill(0);
  function DFS(level) {
    if (level === m) {
      // tmp로 넣으면 참조값을 넣기 때문에 모두 같은 숫자로 담겨진 요소들로 나옴
      // 그래서 스프레드연산자 혹은 slice()를 통해 배열을 복사해서 넣어줌
      answer.push([...tmp]);
      return;
    }
    for (let i = 1; i <= n; i++) {
      tmp[level] = i;
      DFS(level + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(4, 3));
