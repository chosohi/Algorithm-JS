let alphabet = {};
for (let i = 65; i < 91; i++) {
  alphabet[String.fromCharCode(i)] = i - 64;
}

console.log(alphabet);

// Array.from 메서드를 활용하여 유사배열로 초기화방법
// 첫번째 인자가 유사배열(26개의 인자를 가진 배열 초기화)
// 두번째 인자는 각 배열 내 인자들을 어떻게 저장할 것인지 처리하는 함수
let secondAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);

console.log(secondAlphabet);
