function solution(plans) {
  const answer = [];

  // 1. 시작 시간 기준으로 오름차순 정렬
  // 2. 다음 요소의 시작 시간이 될 때까지 시간 마이너스
  // 3-1. 만약 시간이 0이면 answer에 push, 진행 시간 플러스
  //      요소까지 남은 시간이 있으면 stack의 최근 요소를 꺼내어 시간 마이너스
  // 3-2. 시간이 남아있으면 stack에 이름과 남은 시간을 넣어, 진행 시간 플러스

  const sortedPlans = plans
    .sort((a, b) => {
      const [aH, aM] = a[1].split(":");
      const [bH, bM] = b[1].split(":");
      if (aH !== bH) return aH - bH;
      else return aM - bM;
    })
    .map((plan) => {
      const [hour, minute] = plan[1].split(":");
      const time = +hour * 60 + +minute;
      const newArr = [plan[0], time, +plan[2]];
      return newArr;
    });

  let idx = 0;
  const stack = [];

  while (idx < sortedPlans.length - 1) {
    const range = sortedPlans[idx + 1][1] - sortedPlans[idx][1];

    let time = sortedPlans[idx][2] - range;

    if (time > 0) stack.push([sortedPlans[idx][0], time]);
    else if (time < 0) {
      // time이 0이 될때까지 더해주면서 stack의 요소들에 시간을 빼준다
      answer.push(sortedPlans[idx][0]);
      time = Math.abs(time);

      for (let i = stack.length - 1; i >= 0; i--) {
        const rest = stack[i][1] - time;

        if (rest > 0) {
          stack[i][1] = rest;
          // console.log(stack);
          break;
        } else if (rest < 0) {
          time = Math.abs(rest);
          answer.push(stack.pop()[0]);
        } else {
          answer.push(stack.pop()[0]);
          break;
        }
      }
    } else {
      answer.push(sortedPlans[idx][0]);
    }

    idx += 1;
    if (idx === sortedPlans.length - 1) {
      answer.push(sortedPlans[idx][0]);
      if (stack.length) {
        for (let i = stack.length - 1; i >= 0; i--) {
          answer.push(stack[i][0]);
        }
      }
    }
  }
  return answer;
}

console.log(
  solution([
    ["1", "00:00", "30"],
    ["2", "00:10", "10"],
    ["3", "00:30", "10"],
    ["4", "00:50", "10"],
  ])
);
console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
// [("korean", "english", "math")];

console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
// ["science", "history", "computer", "music"];

console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
