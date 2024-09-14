/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2752                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: chosohi <boj.kr/u/chosohi>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2752                           #+#        #+#      #+#    */
/*   Solved: 2024/09/14 14:42:34 by chosohi       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const arr = input.map(Number);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
}

selectionSort(arr);

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}

console.log(answer);
