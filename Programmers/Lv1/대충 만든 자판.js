function solution(keymap, targets) {
  var answer = [];
  for (const target of targets) {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      const chr = target[i];
      let cnt = 1000000;
      for (let j = 0; j < keymap.length; j++) {
        if (keymap[j].includes(chr)) {
          cnt =
            cnt > keymap[j].indexOf(chr) + 1 ? keymap[j].indexOf(chr) + 1 : cnt;
        }
      }

      sum += cnt;
    }
    if (sum >= 1000000) {
      answer.push(-1);
    } else {
      answer.push(sum);
    }
  }
  return answer;
}

// 타겟을 누르기 위해서 최소 몇번을 쳐야하는지
// targets을 순회해
// target이 keymap 의 0~ keymap.length-1까지 한번씩 클릭해서 가장 횟수가 적은 것을 카운트
// 그 카운트를 배열에 추가

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));

// [(9, 4)][-1][(4, 6)];

// 다른 사람 풀이

function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split('')
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split('').reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
