function solution(cards1, cards2, goal) {
  let answer = "Yes";

  for (const word of goal) {
    if (cards1.length && word === cards1[0]) {
      cards1.shift();
    } else if (cards2.length && word === cards2[0]) {
      cards2.shift();
    } else {
      // 현재 시점에 두 카드 뭉치에 다 해당하는 단어가 없다면
      return "No";
    }
  }

  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
