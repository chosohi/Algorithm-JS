function solution(cacheSize, cities) {
  // hit : 참조하고자 하는 메모리가 캐시에 존재할 때
  // miss : 참조하고자 하는 메모리가 캐시에 존재하지 않을 때
  let answer = 0;
  // cacheSize -> 메모리 사이즈
  let memory = [];
  cities = cities.map((city) => city.toLowerCase());

  cities.forEach((city) => {
    if (memory.length && memory.length < cacheSize) {
      // hit
      if (memory.includes(city)) {
        memory = memory.filter((val) => val !== city);
        answer += 1;
      } else {
        // miss
        answer += 5;
      }
    } else {
      // hit: 포함하면 해당 요소 위치만 변경 및 1 추가

      if (memory.includes(city)) {
        // 예외: cacheSize가 0인데, 같은 요소들로만 데이터가 들어오면?
        if (cacheSize === 0) {
          memory.pop();
          answer += 5;
        } else {
          memory = memory.filter((val) => val !== city);
          answer += 1;
        }
      } else {
        // miss: 포함안하면 맨 뒤에 요소 빼고 앞에 city 추가
        memory.pop();
        answer += 5;
      }
    }
    memory.unshift(city);
  });

  return answer;
}

function solution2(cacheSize, cities) {
  const MISS = 5;
  const HIT = 1;
  if (cacheSize === 0) return MISS * cities.length;

  cities = cities.map((city) => city.toLowerCase());
  const memory = [];
  let answer = 0;
  cities.forEach((city) => {
    const hitIdx = memory.indexOf(city);
    if (hitIdx >= 0) {
      memory.splice(hitIdx, 1);
      answer += HIT;
    } else {
      if (memory.length >= cacheSize) memory.pop();
      answer += MISS;
    }
    memory.unshift(city);
  });

  return answer;
}

console.log(
  solution2(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(solution2(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));

console.log(solution2(0, ["LA", "LA"]));

// J 5
// P J 10
// S P J 15
// N S P 20
// L N S 25
// J L N 30
// P J L 35
// S P J 40
// N S P 45
// L N S 50

{
  /*
 리팩토링
 1. 코드 구조
 solution 함수는 조건문이 복잡하게 중첩되어 있습니다. 캐시 크기에 따라서 다양한 경우를 처리하고 있습니다. 또한, if (memory.length && memory.length < cacheSize) 부분에서 캐시에 데이터가 있을 때와 없을 때를 동시에 처리하고 있습니다.
 solution2 함수는 if (cacheSize === 0) 예외를 제외하면 좀 더 단순한 구조를 가지고 있습니다. if (cacheSize === 0) 예외 처리를 단순히 함수 시작 부분에서 처리하고 나머지는 비교적 간결한 구조를 가지고 있습니다.

 2. 예외 처리:
 solution 함수는 if (cacheSize === 0) 일 때의 예외를 처리하는 부분이 중첩된 구조 안에 있습니다. 캐시 크기가 0인 경우에는 특별한 처리가 필요합니다. 이 부분은 다른 부분과 복잡하게 섞여 있습니다.
 solution2 함수는 캐시 크기가 0인 경우를 함수 시작 부분에서 처리하고 있습니다. 이로써 이후의 로직은 더 간결하게 유지되며, 이 예외 상황에 대한 처리가 분리되어 있습니다.

 3. 상수 정의:
 solution2 함수에서는 const MISS와 const HIT이라는 상수를 사용하여 가독성을 높였습니다. 이로써 코드에서 사용하는 매직 넘버의 역할을 명확하게 표현할 수 있습니다.
 */
}
