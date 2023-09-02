function solution(wallpaper) {
  let answer = [0, 0, 0, 0];
  let lx = 51,
    ly = 51,
    rx = -1,
    ry = -1;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        lx = Math.min(i, lx);
        ly = Math.min(j, ly);
        rx = Math.max(i, rx);
        ry = Math.max(j, ry);
      }
    }
  }
  answer = [lx, ly, rx + 1, ry + 1];
  return answer;
}

// 시작점의 y은 가장 y가 작은 위치
// 시작점의 x는 가장 x가 작은 위치
// 종료점의 y는 가장 y가 큰 위치 + 1
// 종료점의 x는 가장 x가 큰 위치 + 1
// console.log(solution([".#...", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);
