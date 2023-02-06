// 각 인덱스를 돌아
// tmp = []
// for j=1 => j=index
// tmp.push(arr[i]+j의 단어)
// for tmp
// skip.include(tmp[i])
// 해당 단어 제거 filter
// lastVal = tmp.at(-1)
// for index-tmp.length
// tmp.push(lastVal+1)
// lastVal++
// for tmp
// 각 범위가 알파벳 범위보다 벗어나면 (해당 범위 - 95 + 65)
// "aukks"	"wbqd"	5	"happy"
function solution(s, skip, index) {
  var answer = "";
  for (let j = 0; j < s.length; j++) {
    const data = s[j];
    let arr = [];
    console.log(data);

    for (let i = 1; i <= index; i++) {
      arr.push(data);
    }
    console.log(arr);
    arr = arr.filter((item) => !skip.includes(item));
    console.log(arr);
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
