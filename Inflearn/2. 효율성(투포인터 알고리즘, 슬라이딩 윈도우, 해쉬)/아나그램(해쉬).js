function solution(arr1, arr2) {
  let answer = "NO";
  let hashmap = new Map();

  if (arr1.length !== arr2.length) return answer;

  for (const x of arr1) {
    if (hashmap.has(x)) hashmap.set(x, hashmap.get(x) + 1);
    else hashmap.set(x, 1);
  }

  for (const x of arr2) {
    if (!hashmap.has(x) || hashmap.get(x) === 0) return answer;
    hashmap.set(x, hashmap.get(x) - 1);
  }

  answer = "YES";
  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
