// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수 구하기
// 대소문자 구분

// setHash로 중복되는 로직 함수로 처리
// compareHashes로 연산 처리 분리

function setHash(el, hash) {
  if (hash.has(el)) hash.set(el, hash.get(el) + 1);
  else hash.set(el, 1);
  return;
}

function compareHashes(hash1, hash2) {
  if (hash1.size !== hash2.size) return false;
  for (const [key, value] of hash1) {
    if (!hash2.has(key) || hash2.get(key) !== value) return false;
  }
  return true;
}

function myCode(S, T) {
  let answer = 0;
  let SHash = new Map();
  let THash = new Map();

  for (let i = 0; i < T.length; i++) {
    setHash(T[i], THash);
  }
  for (let i = 0; i < T.length - 1; i++) {
    setHash(S[i], SHash);
  }
  let lt = 0;
  let rt = T.length - 1;
  while (rt < S.length) {
    setHash(S[rt], SHash);

    // console.log(lt, rt);
    // console.log(SHash, THash);
    if (compareHashes(SHash, THash)) answer++;
    SHash.set(S[lt], SHash.get(S[lt]) - 1);
    if (SHash.get(S[lt]) === 0) SHash.delete(S[lt]);
    lt += 1;
    rt += 1;
  }
  return answer;
}

// SHash, THash를 구조화한다.
// SHash는 T.length-1 만큼만 채운다.
// 1중 for 문을 돌건데, SHash의 마지막을 채우면서 시작한다. 즉, 시작 인덱스가 T.length-1
// SHash.size === T.length 이면 각 요소의 갯수 비교하기
// lt가 가리키는 곳을 빼고, 해당 요소가 0이면 delete
// rt + 1이 가리키는 곳을 더한다.

// rt가 증가해서 추가하고 난 후 비교한다.

// 슬라이딩 윈도우로 확인하므로 S.length(N)+T.length(M)의 시간복잡도를 가짐

console.log(myCode("bacaAacba", "abc"));

// 강사님 코드
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (const x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareHashes(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc"));
