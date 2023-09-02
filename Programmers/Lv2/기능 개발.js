function solution(progresses, speeds) {
  var answer = [];
  const days = [];

  // 남은날들 계산
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let checkDay = 1;
  let comparedDay = days[0];

  for (let i = 1; i < progresses.length; i++) {
    if (comparedDay >= days[i]) checkDay++;
    else {
      answer.push(checkDay);
      comparedDay = days[i];
      checkDay = 1;
    }
  }
  answer.push(checkDay);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

// 다른사람 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
