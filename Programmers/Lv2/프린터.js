function solution(priorities, location) {
  const find = [location + 1, priorities[location]];
  priorities = priorities.map((data, i) => [i + 1, data]);

  const printer = [];
  while (priorities.length) {
    const J = priorities.shift(); // [index+1, value]
    if (priorities.length === 0) {
      printer.push(J);
      break;
    }
    let flag = false;
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i][1] > J[1]) {
        priorities.push(J);
        flag = true;
        break;
      }
    }

    if (flag) continue;
    printer.push(J);
  }

  for (let i = 0; i < printer.length; i++) {
    if (printer[i][0] === find[0]) return i + 1;
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
