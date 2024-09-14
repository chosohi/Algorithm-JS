/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2750                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2750                           #+#        #+#      #+#    */
/*   Solved: 2024/09/14 14:52:51 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

arr.sort((a, b) => a - b);
arr.map((num) => console.log(num));
