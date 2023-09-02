function solution(skill, skill_trees) {
  var answer = 0;

  skill_trees.map((trees) => {
    let word = "";
    trees.split("").map((el) => {
      if (skill.includes(el)) word += el;
    });
    let res = true;
    word.split("").map((el, index) => {
      if (el !== skill[index]) res = false;
    });
    if (res) answer++;
  });
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

// 정규식 및 startsWith 메서드 활용 풀이
function solution(skill, skill_trees) {
  // [^...]는 대괄호 안에 포함된 문자를 제외한 모든 문자와 매치하는 정규식 패턴
  // g 플래그는 전역 검색, i플래그는 대소문자 구분하지 않는 검색
  const restRemoveRegex = new RegExp("[^" + skill + "]", "gi");
  return skill_trees.filter((v) => {
    const tempSkill = v.replace(restRemoveRegex, "");
    return skill.startsWith(tempSkill);
  }).length;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
