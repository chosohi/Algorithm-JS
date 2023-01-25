function solution(msg) {
  // A~Z -> 65~90
  // 사전순 -> charCodeAt - 64
  var answer = [];
  let dict = {};
  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = i - 64;
  }

  let start = msg[0];
  let prior = "";
  let idx = 0;

  while (idx < msg.length) {
    console.log(start);
    if (start in dict) {
      answer.push(dict[start]);
      idx++;
      if (idx === msg.length) break;

      prior = start;
      start += msg[idx];
    }
    let lastVal = Object.values(dict).slice(-1)[0];
    dict[start] = ++lastVal;
    console.log("no dict", start);
    answer.push(dict[start]);
    idx++;
    start += msg[idx];
    start = start.slice(1);
    prior = start.slice(0);
    console.log("prior", prior);
    // console.log(start);
  }

  return answer;
}

console.log(solution("KAKAO"));

// while
// 현재 들어온 단어가 사전에 있으면 그다음단어랑 합쳐
// 해당 단어도 사전에 있으면 그 다음 단어랑 합쳐

// KAKAO[(11, 1, 27, 15)];
// TOBEORNOTTOBEORTOBEORNOT[
//   (20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34)
// ];
// ABABABABABABABAB[(1, 2, 27, 29, 28, 31, 30)];

// 색인 번호	1	2	3	...	24	25	26
// 단어	A	B	C	...	X	Y	Z
// 예를 들어 입력으로 KAKAO가 들어온다고 하자.

// 현재 사전에는 KAKAO의 첫 글자 K는 등록되어 있으나, 두 번째 글자까지인 KA는 없으므로, 첫 글자 K에 해당하는 색인 번호 11을 출력하고, 다음 글자인 A를 포함한 KA를 사전에 27 번째로 등록한다.
// 두 번째 글자 A는 사전에 있으나, 세 번째 글자까지인 AK는 사전에 없으므로, A의 색인 번호 1을 출력하고, AK를 사전에 28 번째로 등록한다.
// 세 번째 글자에서 시작하는 KA가 사전에 있으므로, KA에 해당하는 색인 번호 27을 출력하고, 다음 글자 O를 포함한 KAO를 29 번째로 등록한다.
// 마지막으로 처리되지 않은 글자 O에 해당하는 색인 번호 15를 출력한다.
// 현재 입력(w)	다음 글자(c)	출력	사전 추가(w+c)
// K	A	11	27: KA
// A	K	1	28: AK
// KA	O	27	29: KAO
// O		15
