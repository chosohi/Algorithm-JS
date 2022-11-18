// 헬퍼 메소드 재귀는 일종의 결과를 컴파일할 때 흔히 사용되는 패턴이다.
// 결과는 보통 배열이나, 배열과 비슷한 다른 형태 데이터 구조이다.

// 즉 외부 함수에 저장하고 싶은 결과값을 초기화한 후, 해당 함수 내 재귀 함수를 사용하여 실제 로직을 적용하는 것이다.
// 이는 단일 함수 내에서는 결과값이 매번 초기화되기 때문에, 특정 로직에 대한 결과값을 저장하여 사용하기 위해서 헬퍼 메소드를 사용하는 것이다.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // 첫번째 항목 제외한 나머지 재귀
    helper(helperInput.slice(1));
  }
  // heler method
  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));
