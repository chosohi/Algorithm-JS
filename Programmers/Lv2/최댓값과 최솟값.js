// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  let arr = s.split(" ").map((a) => Number(a));
  console.log(arr);
  var answer = "";
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  answer += min;
  answer += " ";
  answer += max;
  return answer;
}

console.log(solution("-1 -2 -3 -4"));

// 다른 사람 풀이

function solution(s) {
  var arr = s.split(" ");
  arr.sort((a, b) => a - b);

  var answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}
