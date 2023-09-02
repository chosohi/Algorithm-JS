// 집합에서 가장 많이 나오는 숫자 순으로 정렬

function solution(n) {
  let ans = 0;
  let regex = /[^0-9]/g;
  let num = n.replace(regex, "");

  let numObj = {};
  [...num].forEach((v) => (numObj[v] = ++numObj[v] || 1));
  console.log(numObj);
  return ans;
}

console.log(solution("{{20,111},{111}}"));

// "{{2},{2,1},{2,1,3},{2,1,3,4}}"[(2, 1, 3, 4)];
// "{{1,2,3},{2,1},{1,2,4,3},{2}}"[(2, 1, 3, 4)];
// "{{20,111},{111}}"[(111, 20)];
// "{{123}}"[123];
// "{{4,2,3},{3},{2,3,4,1},{2,3}}"[(3, 2, 4, 1)];
