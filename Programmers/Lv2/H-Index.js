function solution(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // 제일 많이 남겨진 갯수와 현재 값이 그 갯수보다 크거나 같으면 해당되는거니까 리턴
    // 즉 최초로 h 이상인 순간(이떄, h는 최댓값이 됨, i가 작을거니까)
    if (arr[i] >= arr.length - i) return arr.length - i;
  }
  return 0;
}

function solution1(arr) {
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i + 1);
    if (arr[i] <= i + 1) return i + 1;
  }
  return arr.length;
}

console.log(solution1([0, 0, 0, 0, 0]));
console.log(solution1([3, 0, 6, 1, 5]));
console.log(solution1([24]));

// 파이썬
// def solution(citations):
//     citations.sort()
//     ans = 0
//     for i in range(len(citations)):
// 현재 숫자랑 현재숫자까지를 제외한 나머지 숫자를 비교해(그게 h회 있어야함)
// 그게 같으면 (즉 현재 숫자 === )
// h가 len(citaions)-i가 되는거임 그래서 h 이상에 해당되는 첫순간 리턴
//         if citations[i] >= len(citations) - i:
//             return len(citations) - i
// 아무 만족도 안되면
//     return ans

// 다른 사람 풀이

function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while (i + 1 <= citations[i]) {
    console.log(i + 1, citations[i]);
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}
