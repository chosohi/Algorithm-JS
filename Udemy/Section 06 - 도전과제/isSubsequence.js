// 2 strings를 받아 첫번째 string이 두번째 string에 순서가 바뀌지 않은채 들어있는지 확인하는 함수
//isSubsequence
// 여기서 두번째 문장에 꼭 붙어있지 않아도 됨, 순서만 보장

// 목표 시간복잡도 O(N+M) , 공간복잡도O(1)

function isSubsequence(first, second) {
  let firstIdx = 0;
  let secondIdx = 0;
  if (!first) return true;
  while (secondIdx < second.length) {
    console.log(second[secondIdx], first[firstIdx]);
    if (second[secondIdx] === first[firstIdx]) firstIdx++;
    if (firstIdx === first.length) return true;
    secondIdx++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello orld")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadara")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

// 재귀 솔루션
// 첫번째 단어부터 일치하면 한단어씩 소거하여 모든 단어가 포함되어 str1의 길이가 0이면 true 반환

function isSubsequenceRecur(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0])
    return isSubsequenceRecur(str1.slice(1), str2.slice(1));
  return isSubsequenceRecur(str1, str2.slice(1));
}
console.log(isSubsequenceRecur("hello", "hel hello orld")); // true
console.log(isSubsequenceRecur("sing", "sting")); // true
console.log(isSubsequenceRecur("abc", "abracadara")); // true
console.log(isSubsequenceRecur("abc", "acb")); // false (order matters)
