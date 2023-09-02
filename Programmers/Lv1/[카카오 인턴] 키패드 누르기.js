function solution(numbers, hand) {
  let answer = "";
  let leftHand = "*",
    rightHand = "#";
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  function getPos(number) {
    const leftDistance =
      Math.abs(pos[leftHand][0] - pos[number][0]) +
      Math.abs(pos[leftHand][1] - pos[number][1]);
    const rightDistance =
      Math.abs(pos[rightHand][0] - pos[number][0]) +
      Math.abs(pos[rightHand][1] - pos[number][1]);

    if (leftDistance === rightDistance) return hand;
    else if (leftDistance < rightDistance) return "left";
    else return "right";
  }

  numbers.forEach((number) => {
    if (number % 3 === 1) {
      answer += "L";
      leftHand = number;
    } else if (number !== 0 && number % 3 === 0) {
      answer += "R";
      rightHand = number;
    } else {
      const hand = getPos(number);

      if (hand === "left") {
        answer += "L";
        leftHand = number;
      } else {
        answer += "R";
        rightHand = number;
      }
    }
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
/*
접근 순서
1. 키패드에 대한 x,y 좌표를 설정한다.
2. numbers를 순회
2-1. 해당 숫자가 3으로 나누었을 때 나머지 1 이라면, answer+="L" (1,4,7)
2-2. 해당 숫자가 0이 아니거나 3으로 나누었을 때 나누어 떨어진다면, answer+="R" (3,6,9)
2-3. 나머지 숫자(2,5,8,0)에 대한 접근해야할 손가락을 반환하는 함수 getPos 실행하여 반환받은 손잡이를 해당 숫자로 갱신한다. answer += "반환받은 손잡이"

위의 과정에서 각각의 leftHand와 rightHand의 숫자 저장

getPos
1. 접근해야할 숫자를 매개변수로 받는다. 
2. 접근해야할 숫자와 leftHand 및 접근해야할 숫자와 rightHand의 거리를 구한다. 
*위치가 반대일 수도 있으므로, 절댓값으로 거리르 구한다*
3. 각 거리가 같다면 손잡이를 반환 
4. 다르다면 거리가 가까운 손잡이를 바환
*/
