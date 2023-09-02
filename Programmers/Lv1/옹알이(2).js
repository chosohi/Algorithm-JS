const pro = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let i = 0; i < pro.length; i++) {
      if (word.includes(pro[i].repeat(2))) break;

      word = word.split(pro[i]).join(" ");
    }
    if (word.split(" ").join("").length === 0) answer++;
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
/*
예외 : 연속 발음 안됨

babbling을 순회하면서 각 소리들을 탐색함
만약 각 소리에서 pro의 요소 중 하나를 2번 연속 발음한 것이 확인되면 다음 턴(발음 x)

babbling을 pro[i]로 split한 후 join을 한다
합칠때, 공백을 두고 합쳐서 분리 
*/
