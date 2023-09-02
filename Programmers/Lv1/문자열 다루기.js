function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  // 모든 요소가 숫자인지 검사하는 정규표현식
  const regex = /^\d+$/;
  return regex.test(s);
}

console.log(solution("1234"));
