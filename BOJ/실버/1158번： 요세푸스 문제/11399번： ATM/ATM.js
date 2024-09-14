/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11399                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11399                          #+#        #+#      #+#    */
/*   Solved: 2024/09/14 16:41:52 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[N], arr] = input;

12334;
const sorted = arr.sort((a, b) => a - b);

// let answer = 0;

// for (let i = 0; i < arr.length; i++) {
//   let acc = 0;
//   for (let j = 0; j <= i; j++) {
//     acc += arr[j];
//   }
//   answer += acc;
// }

let answer = 0; // 누적값
let cur = 0;
for (let j = 0; j < arr.length; j++) {
  cur += arr[j];
  answer += cur;
}

console.log(answer);
