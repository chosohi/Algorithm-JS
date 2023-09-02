function solution(s) {
  var answer = "";
  let arr = s.split(" ");

  const regex = /[a-z]/;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      answer += " ";
      continue;
    }
    if (i > 0) answer += " ";

    if (regex.test(arr[i][0])) {
      answer += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    } else {
      answer += arr[i][0] + arr[i].slice(1).toLowerCase();
    }
  }

  return answer;
}
console.log(solution("3people unFollowed me"));
console.log(solution("3people  unFollowed me"));
console.log(solution("ABC 212e hi baBY"));
// const regex = /^[a-z|A-Z]+$/;
// /^[a-z|A-Z]+$/는 소문자 또는 대문자 알파벳 1개 이상을 의미

// 다른 사람 풀이
function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      if (word === "") return;
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
}
