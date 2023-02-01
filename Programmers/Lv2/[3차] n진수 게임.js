// 입출력 예제
// n	t	m	p	result
// 2	4	2	1	"0111"
// 16	16	2	1	"02468ACE11111111"
// 16	16	2	2	"13579BDF01234567"
function solution(n, t, m, p) {
  let answer = "";
  // 전체 문자열 str
  let str = "";
  for (let i = 0; i < m * t; i++) {
    str += i.toString(n);
  }

  for (let i = p - 1; i < str.length; i += m) {
    if (isNaN(str[i])) {
      answer += str[i].toUpperCase();
    } else {
      answer += str[i];
    }
    if (answer.length === t) return answer;
  }
  return answer;
}

console.log(solution(16, 16, 2, 2));
