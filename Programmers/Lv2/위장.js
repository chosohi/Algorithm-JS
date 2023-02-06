// 같은 종류의 옷은 2번 이상 입을 수 없음
// 각 종류마다 갯수 체크 후 조합 구하되, 아무것도 안입는 경우는 제외해야하니 -1
function solution(arr) {
  let answer = 0;
  let obj = {};
  arr.forEach((element) => {
    const [names, kind] = element;
    obj[kind] = obj[kind] ? obj[kind] + 1 : 1;
  });
  answer = Object.values(obj).reduce((acc, cur) => {
    return acc * (cur + 1);
  }, 1);

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
