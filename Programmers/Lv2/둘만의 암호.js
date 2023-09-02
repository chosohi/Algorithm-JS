function solution(s, skip, index) {
  var answer = "";
  skip = [...skip].map((data) => data.charCodeAt(0));
  const real = [...s].map((val) => {
    const tmp = [];
    for (let i = 1; i < index + 1; i++) {
      const num = ((val.charCodeAt(0) - 97 + i) % 26) + 97;

      tmp.push(num);
    }
    const newArr = [];
    tmp.forEach((data) => {
      if (!skip.includes(data)) {
        newArr.push(data);
      }
    });
    console.log(tmp);

    if (newArr.length < s.length) {
      for (let i = 0; i < s.length - newArr.length + 1; i++) {
        let newNum = newArr.at(-1) + 1;
        newNum = ((newNum - 97) % 26) + 97;
        newArr.push(newNum);
      }
    }

    return String.fromCharCode(newArr[index - 1]);
  });

  return real.join("");
}

console.log(solution("aukks", "wbqd", 5));

// 1. s의 각 알파벳을 index만큼 뒤로 보낸다.
// 근데 만약 z를 넘어서면 a로 돌린다.
// 2 만들어진 배열을 순회하며 skip에 있으면 소개한다.
// 3. 배열의 길이가 s의 길이보다 작으면 마지막 단어 기준으로 알파벳들을 추가한다.
