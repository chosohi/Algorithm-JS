/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1920                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1920                           #+#        #+#      #+#    */
/*   Solved: 2024/06/15 21:30:02 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [, refNums, , nums] = input.map((el) => el.split(" ").map(Number));
const result = [];

refNums.sort((a, b) => a - b);

nums.forEach((num, index) => {
  let start = 0;
  let end = refNums.length - 1;
  let flag = false;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (refNums[mid] > num) {
      end = mid - 1;
    } else if (refNums[mid] < num) {
      start = mid + 1;
    } else {
      flag = true;
      break;
    }

    if (flag) result.push(1);
    else result.push(0);
  }

  console.log(result.join("\n"));
});
