function solution(essential, plan) {
  essential = essential.split("");

  for (let i = 0; i < plan.length; i++) {
    if (essential.includes(plan[i]) && essential[0] === plan[i]) {
      essential.shift();
    }
  }
  if (essential.length) return "NO";
  else return "YES";
}

console.log(solution("CBA", "CBDAGE"));
