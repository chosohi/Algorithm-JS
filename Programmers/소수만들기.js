const nums = [1, 2, 3, 4];

function isPel(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // console.log(nums[i], nums[j], nums[k]);
        const value = nums[i] + nums[j] + nums[k];
        // console.log(value);
        if (isPel(value)) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}

solution([1, 2, 3, 4]);
