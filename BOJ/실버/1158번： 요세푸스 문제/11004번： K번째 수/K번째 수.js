/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11004                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11004                          #+#        #+#      #+#    */
/*   Solved: 2024/09/14 14:59:02 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[N, K], arr] = input;

arr.sort((a, b) => a - b);

console.log(arr[K - 1]);
