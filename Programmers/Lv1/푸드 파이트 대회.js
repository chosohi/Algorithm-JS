function solution(food) {
  var answer = "";
  let foodList = food.splice(1);

  let tmp = "";
  for (let i = 0; i < foodList.length; i++) {
    let cnt = parseInt(foodList[i] / 2);
    for (let j = 0; j < cnt; j++) {
      tmp += i + 1;
    }
  }

  console.log(tmp);
  answer = tmp + "0" + tmp.split("").reverse().join("");
  return answer;
}

console.log(solution([1, 3, 4, 6]));

// 다른 사람의 직관적 코드
function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      repeat = Math.floor(food[i] / 2);
      for (let j = 0; j < repeat; j++) player1.push(i);
      for (let k = 0; k < repeat; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}
// 다른 사람의 짧은 코드

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
