// 관심사 분리를 고려하여 다시 풀기
// 객체로 풀어보기

// Head, Number, Tail
// number는 5자리를 넘을 수 없다.
// head가 같다면 number로 오름차순
// head, number가 같다면 입력 들어온 순서대로 정렬
// head는 대소문자 구분 안함

// 1. head, number, tail로 분리
// 2. 쪼갠

function solution(files) {
  let answer = files.sort(function (a, b) {
    let firstStr = "",
      secondStr = "";
    let firstNum = "",
      secondNum = "";
    for (let i = 0; i < a.length; i++) {
      const element = a[i];

      if (
        firstNum.length === 0 &&
        !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)
      ) {
        firstStr += element;
      } else if (
        firstStr &&
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element) &&
        firstNum.length < 5
      ) {
        firstNum += element;
      } else if (firstNum && firstStr) {
        break;
      }
    }

    for (let i = 0; i < b.length; i++) {
      const element = b[i];

      if (
        secondNum.length === 0 &&
        !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)
      ) {
        secondStr += element;
      } else if (
        secondStr &&
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element) &&
        secondNum.length < 5
      ) {
        secondNum += element;
      } else if (secondNum && secondStr) {
        break;
      }
    }
    firstStr = firstStr.toLowerCase();
    secondStr = secondStr.toLowerCase();

    if (firstStr !== secondStr) {
      return firstStr.localeCompare(secondStr);
    } else {
      return Number(firstNum) < Number(secondNum)
        ? -1
        : Number(firstNum) === Number(secondNum)
        ? 0
        : 1;
    }
  });
  return answer;
}
console.log(solution(["F---                  B 5 tt", "F---------- .A 5 tt"]));
// [ABC12, AbC12, aBc12]; // [ABC12,AbC12,aBc12]
