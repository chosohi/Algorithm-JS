// 2번째 코드
// 시작점+롤러 너비를 기준으로 다음 빈벽의 인덱스가 해당 값보다 작으면 넘김
// 굳이 1부터 체크할 필요가 없이, 빈벽이 시작되는 그 순간을 시작점으로 하여 계산
function solution(n, m, section) {
  let answer = 0;
  let width = 0;
  for (const el of section) {
    if (el < width) continue;
    answer++;
    width = el + m;
  }
  return answer;
}
console.log(solution(8, 4, [2, 3, 6]));

// 1번째 통과한 코드
// 시간이 오래걸리고, 불필요한 반복문이 있음
function solution1(n, m, section) {
  let answer = 0;
  let wall = new Array(n + 1).fill(true);
  section.forEach((idx) => {
    wall[idx] = false;
  });

  for (let i = 1; i < n - m + 2; i++) {
    if (wall[i] === false) {
      for (let j = i; j < i + m; j++) {
        wall[j] = true;
      }
      answer += 1;
    }
  }

  // 마지막 범위에서 남은거 있는지 여부 체크
  for (let i = n - m + 1; i < n + 1; i++) {
    if (wall[i] === false) {
      answer += 1;
      break;
    }
  }

  //   console.log(answer);

  return answer;
}
