// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// 가변적인 길이의 인자 받기
function areThereDuplicates(...arr) {
  let left = 0;
  let right = 1;
  let answer = false;
  while (left < arr.length && right < arr.length) {
    if (left === arr.length - 1) {
      return (answer = false);
    }
    if (arr[left] === arr[right]) {
      return (answer = true);
    }
    if (arr[left] !== arr[right]) {
      right += 1;
      if (right === arr.length) {
        left += 1;
        right = left + 1;
      }
    }
  }
  return answer;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// 강의 solution
// 1. 빈도 수 세기
function areThereDuplicates() {
  let collection = {};

  for (const val in arguments) {
    // console.log(val, arguments);
    // 0 [Arguments] { '0': 1, '1': 2, '2': 4 }
    // 1 [Arguments] { '0': 1, '1': 2, '2': 4 }
    // 2 [Arguments] { '0': 1, '1': 2, '2': 4 }
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

areThereDuplicates(1, 2, 4);

// 2. 투포인터
function areThereDuplicatesPointer(...args) {
  args.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicatesPointer(1, 2, 3, 4, 2, 2));

// 3. one liner 솔루션
function areThereDuplicatesOneLiner() {
  // console.log(new Set(arguments));
  // console.log(new Set(arguments).size);
  // console.log(arguments.length);
  // Set(4) { 1, 2, 3, 4 }
  // 4
  // 5

  // set을 하면 중복된 숫자가 1개로 줄어드는 로직으로 참/거짓 반환
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicatesOneLiner(1, 2, 3, 4, 2);
