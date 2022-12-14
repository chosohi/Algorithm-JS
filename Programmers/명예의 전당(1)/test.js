function solution(k, score) {
  answer = [];
  const king = [];
  for (const s of score) {
    if (king.length < k) {
      king.push(s);
    } else {
      for (let i = 0; i < king.length; i++) {
        if (s >= king[i]) {
          king.push(s);
          king.sort((a, b) => b - a);
          king.splice(k);
          break;
        }
      }
    }

    king.sort((a, b) => b - a);
    answer.push(king[king.length - 1]);
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
