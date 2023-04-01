// moves의 위치를 중심으로 손잡이를 내리면 된다.

function solution(boards, moves) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    const pos = moves[i] - 1;
    for (let j = 0; j < boards.length; j++) {
      if (boards[j][pos]) {
        if (stack[stack.length - 1] === boards[j][pos]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(boards[j][pos]);
        }

        boards[j][pos] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
