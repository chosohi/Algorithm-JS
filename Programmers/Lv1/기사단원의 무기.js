function solution(number, limit, power) {
  var answer = 0;
  // number까지의 각 약수를 담은 배열
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    // 약수는 본래 값을 제외하고 n/2보다 클 수 없다. 예: 4의 약수: 1,2,4 (4/2 = 2)
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    // 본래 값을 추가해야하기 때문에, +1
    arr.push(cnt + 1);
  }

  arr.forEach((num) => {
    // if (num > limit) {
    //   answer += power;
    // } else {
    //   answer += num;
    // }
    answer += num > limit ? power : num;
  });

  return answer;
}

console.log(solution(10, 3, 2));
