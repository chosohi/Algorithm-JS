// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(first, second) {
  let numObj = {};
  // 숫자에 "을 더해 문자로 만들고, split을 사용하여 배열로 만든다.
  let firstArr = (first + "").split("");
  let secondArr = (second + "").split("");

  if (firstArr.length !== secondArr.length) {
    return false;
  }

  // firstArr의 숫자를 키로 하여 갯수 카운트
  for (const num of firstArr) {
    numObj[num] = numObj[num] ? numObj[num] + 1 : 1;
  }

  // 길이는 같지만 숫자가 없거나 갯수가 다르면 false
  for (const num of secondArr) {
    if (!(num in numObj)) {
      return false;
    }
    if (num in numObj) {
      if (numObj[num] <= 0) {
        return false;
      }
      numObj[num] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

// 강의 solution
function sameFrequencySol(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
