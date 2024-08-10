/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1018                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1018                           #+#        #+#      #+#    */
/*   Solved: 2024/06/15 17:03:49 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const { get } = require("http");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const list = input.slice(1).map((el) => el.split(""));

const handleMakeChessBoard = (list, y, x) => {
  const chessBoard = Array.from({ length: 8 }, (_, i) => {
    return list[y + i].slice(x, x + 8);
  });

  return chessBoard;
};

const getSquareCount = (chessBoard, startColor) => {
  let count = 0;
  const otherColor = startColor === "W" ? "B" : "W";

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const expect = (i + j) % 2 === 0 ? startColor : otherColor;

      if (chessBoard[i][j] !== expect) {
        count++;
      }
    }
  }

  return count;
};

const handleCheckList = (list) => {
  let result = 2500;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      const chessBoard = handleMakeChessBoard(list, i, j);
      const B = getSquareCount(chessBoard, "B");
      const W = getSquareCount(chessBoard, "W");

      result = Math.min(B, W, result);
    }
  }

  return result;
};

console.log(handleCheckList(list));
