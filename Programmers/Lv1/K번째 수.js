function solution(array, commands) {
  let answer = [];

  commands.forEach((command) => {
    const [i, j, k] = command;

    const sliced = array.slice(i - 1, j).sort((a, b) => a - b);

    answer.push(sliced[k - 1]);
  });
  return answer;
}
