/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 18870                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/18870                          #+#        #+#      #+#    */
/*   Solved: 2024/09/14 15:55:06 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[N], arr] = input;

const sorted = [...new Set([...arr].sort((a, b) => a - b))];

const map = new Map();
sorted.map((num, index) => {
  map[num] = index;
});

let answer = "";

arr.map((num) => {
  answer += map[num] + " ";
});

console.log(answer);
