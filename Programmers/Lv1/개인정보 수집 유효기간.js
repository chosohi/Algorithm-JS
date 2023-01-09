function solution(today, terms, privacies) {
  var answer = [];
  let splitedDay = today.split(".").map((a) => Number(a));

  let typeObj = {};
  terms.forEach((data) => {
    let tmp = data.split(" ");
    let type = tmp[0];
    let period = Number(tmp[1]);
    typeObj[type] = period;
  });

  for (let i = 0; i < privacies.length; i++) {
    let data = privacies[i];
    let date = data
      .substr(0, 10)
      .split(".")
      .map((a) => Number(a));
    let type = data.substr(-1);
    let bool = checkDate(splitedDay, date, type, typeObj);
    if (bool) {
      answer.push(i + 1);
    }
  }
  console.log(answer);
  return answer;
}
function checkDate(today, date, type, typeObj) {
  let period = typeObj[type];
  date[1] += period;
  date[2] -= 1;

  if (date[2] === 0) {
    date[1] -= 1;
    date[2] = 28;
  }
  while (date[1] > 12) {
    date[0] += 1;
    date[1] -= 12;
  }

  console.log(today, date);
  for (let i = 0; i < today.length; i++) {
    if (today[0] > date[0]) {
      return true;
    } else if (today[0] === date[0] && today[1] > date[1]) {
      return true;
    } else if (
      today[0] === date[0] &&
      today[1] === date[1] &&
      today[2] > date[2]
    ) {
      return true;
    } else {
      return false;
    }
  }
  // 년
  // 월
  // 일
}
solution(
  "2022.05.19",
  ["A 6", "B 20", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);

// solution(
//   "2020.01.01",
//   ["Z 3", "D 5"],
//   [
//     "2019.01.01 D",
//     "2019.11.15 Z",
//     "2019.08.02 D",
//     "2019.07.01 D",
//     "2018.12.28 Z",
//   ]
// );
