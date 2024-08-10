const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9];

// 1. Set 생성자로 중복 제거하기
const res = [...new Set(nums)];
const res2 = new Set([...nums]);
console.log(res);

// 2. filter
const uniqueNums = nums.filter((item, idx) => {
  return nums.indexOf(item) === idx;
});
console.log(uniqueNums);

// 3. reduce
let reducedNum = nums.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);
