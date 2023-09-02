function solution(msg) {
  // A~Z -> 65~90
  // 사전순 -> charCodeAt - 64
  var answer = [];
  let dict = {};
  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = i - 64;
  }

  // for
  // 새로운단어를 붙여
  // 만약 붙여진 새로운 단어가 dict 에 없다면
  // dict 에 해당 단어 : 마지막 value+1
  // answer.push(처음부터 마지막-1까지의 단어에 대한 value)
  // 있다면
  let newMsg = "";
  for (let i = 0; i < msg.length; i++) {
    newMsg += msg[i];
    if (newMsg.length > 1) {
      if (!(newMsg in dict)) {
        answer.push(dict[newMsg.substring(0, newMsg.length - 1)]);

        let values = Object.values(dict);
        let lastValue = values[values.length - 1] + 1;

        dict[newMsg] = lastValue;
        newMsg = newMsg[newMsg.length - 1];
      }
    }
  }
  console.log(newMsg);
  if (newMsg) answer.push(dict[newMsg]);
  return answer;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
