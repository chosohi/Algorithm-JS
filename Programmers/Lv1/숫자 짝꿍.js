function solution(X, Y) {
  // 1. 짝꿍이 없으면 -1
  // 2. 짝꿍이 있으면
  // 2-1. 짝꿍이 0으로만 구성되면 0 반환
  // 2-2. 짝꿍을 다 찾아서 높은숫자로 만들어 반환
  const numObj = {};
  // X 각 숫자들을 키로하여 +1씩함
  for (let i = 0; i < X.length; i++) {
    let letter = X[i];
    numObj[letter] ? numObj[letter]++ : (numObj[letter] = 1);
  }
  // Y를 순회하며 자신의 숫자에 1이상의 값이 있다면 -1 씩 함 그리고 배열에 넣음
  const answer = [];
  for (let i = 0; i < Y.length; i++) {
    let letter = Y[i];
    if (numObj[letter]) {
      numObj[letter]--;
      answer.push(letter);
    }
  }

  // 배열을 기준으로 결과 반환
  if (answer.length === 0) {
    return "-1";
  } else {
    answer.sort((a, b) => b - a);
    const zeroArr = answer.slice();
    if ([...new Set(zeroArr)][0] === "0") {
      return "0";
    } else {
      return answer.join("");
    }
  }
}

console.log(solution("100", "123450"));
