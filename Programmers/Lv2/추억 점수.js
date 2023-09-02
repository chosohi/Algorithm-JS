function solution(name, yearning, photo) {
  // var answer = [];
  const obj = name.reduce((acc, key, index) => {
    return { ...acc, [key]: yearning[index] };
  }, {});

  // 아래 return 문과 동일한 로직
  // photo.forEach((el) => {
  //   let sum = 0;
  //   el.forEach((val) => {
  //     if (obj[val]) {
  //       sum += obj[val];
  //     }
  //   });
  //   answer.push(sum);
  // });
  // return answer;

  return photo.map((names) => names.reduce((acc, n) => acc + (obj[n] || 0), 0));
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
