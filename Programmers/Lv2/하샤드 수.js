function solution(x) {
  var answer = true;

  let sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  return x % sum === 0 ? true : false;
}

console.log(solution(10));
