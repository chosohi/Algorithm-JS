function solution(survey, choices) {
  var answer = "";
  let surveyObj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let score = [0, 3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      const type = survey[i][1];
      surveyObj[type] += score[choices[i]];
    } else if (choices[i] < 4) {
      const type = survey[i][0];
      surveyObj[type] += score[choices[i]];
    }
  }
  let type = Object.keys(surveyObj);

  for (let i = 0; i < type.length; i += 2) {
    // console.log(type[i], type[i + 1]);
    // R T
    // 0 3
    // C F
    // 1 0
    // J M
    // 0 2
    // A N
    // 1 1

    answer +=
      surveyObj[type[i]] >= surveyObj[type[i + 1]] ? type[i] : type[i + 1];
  }
  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

// 다른 사람 풀이

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    // 절대값으로 점수 구하기
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
