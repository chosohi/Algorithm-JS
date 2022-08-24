const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9];

// 1. Set 생성자로 중복 제거하기
const res = [...new Set(nums)];
console.log(res);

const uniqueNums = nums.filter((item, idx) => {
  return nums.indexOf(item) === idx;
});
console.log(uniqueNums);
