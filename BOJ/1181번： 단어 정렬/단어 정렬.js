/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1181                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1181                           #+#        #+#      #+#    */
/*   Solved: 2024/06/15 20:27:57 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

// 1. 배열 요소를 set으로 변환하여 중복 제거
// 2. set을 배열로 변환하여 길이 순으로 정렬
// 3. 길이가 같은 경우 사전 순으로 정렬

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const words = [...new Set(input.slice(1))].filter((el) => el !== "");

const sortedWords = words.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }

  return a.length - b.length;
});

sortedWords.map((el) => console.log(el));
