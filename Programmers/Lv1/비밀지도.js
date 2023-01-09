function fillZero(n, number) {
  number = "0".repeat(n - number.length) + number;
  return number;
}
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let num1 = arr1[i].toString(2);
    let num2 = arr2[i].toString(2);
    if (num1.length < n) {
      num1 = fillZero(n, num1);
    }
    if (num2.length < n) {
      num2 = fillZero(n, num2);
    }

    let tmp = "";
    for (let j = 0; j < n; j++) {
      if (num1[j] === "0" && num2[j] === "0") {
        tmp += " ";
      } else {
        tmp += "#";
      }
    }
    answer.push(tmp);
  }

  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// [ '######', '###  #', '#  ###', '#### #', '######', '## ###' ]
// 〉	["######", "###  #", "##  ##", " #### ", " #####", "### # "]
