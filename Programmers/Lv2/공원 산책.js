// X만 못가는 곳임!

const direction = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

function solution(park, routes) {
  const answer = [];
  routes = routes.map((el) => el.split(" "));

  let startX;
  let startY;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        startX = i;
        startY = j;
        break;
      }
    }
  }
  function checkX(sx, sy, dir, n) {
    let nx;
    let ny;

    // 해당 방향으로 n번만큼 이동하면서 한 번이라도 못가는 구역이 발생하면 이동 취소
    for (let i = 0; i < n; i++) {
      nx = sx + dir[0];
      ny = sy + dir[1];

      if (
        nx >= 0 &&
        nx < park.length &&
        ny >= 0 &&
        ny < park[0].length &&
        park[nx][ny] !== "X"
      ) {
        sx = nx;
        sy = ny;
      } else {
        return [sx, sy, false];
      }
    }
    return [nx, ny, true];
  }
  for (let i = 0; i < routes.length; i++) {
    const [op, n] = routes[i];
    const dir = direction[op].map((el) => el);
    console.log(dir);
    const res = checkX(startX, startY, dir, n);

    if (res[2]) {
      startX = res[0];
      startY = res[1];
    }
  }

  return [startX, startY];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
