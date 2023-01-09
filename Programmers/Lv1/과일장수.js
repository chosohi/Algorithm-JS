// k = 사과의 최대 점수
// m = 한 상자에 들어가는 사과의 수
// score = 사과들의 점수

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  const cnt = Math.floor(score.length / m);
  if (cnt <= 0) return 0;

  let idx = 0;
  for (let i = 0; i < cnt; i++) {
    let minimum = score[idx];
    for (let j = idx; j < idx + m; j++) {
      if (minimum > score[j]) minimum = score[j];
    }
    answer += minimum * m;
    idx += m;
  }

  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

// 다른 사람 풀이

function solution(k, m, score) {
  let answer = 0;
  // 살릴 사과들만 slice로 가져옴, 나머지 연산자로 버릴 사과들 제외한 인덱스부터 복사
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);

  // m갯수 단위로 값을 찍으면 해당 박스에서 최저 점수 사과에 해당
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
