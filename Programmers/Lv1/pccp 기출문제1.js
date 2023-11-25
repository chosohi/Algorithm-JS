function solution(bandage, health, attacks) {
  // attacks의 마지막 요소의 0번째 인덱스시간까지 반복문으로 매번 체크
  const lastTime = attacks[attacks.length - 1][0];
  let life = health;
  let cnt = 0;

  attackedList = new Array(lastTime + 1).fill(0);

  attacks.forEach((attack) => {
    attackedList[attack[0]] -= attack[1];
  });

  for (let i = 0; i < attackedList.length; i++) {
    const attack = attackedList[i];

    if (i === 0) continue;

    // 공격이 없으면
    if (attack === 0) {
      if (life >= health) {
        life = health;
        continue;
      }
      life += bandage[1];
      cnt += 1;
      if (cnt === bandage[0]) {
        life += bandage[2];
        cnt = 0;
      }
      continue;
    }
    // 공격이 있으면
    life += attack;
    cnt = 0;
    if (life <= 0) {
      return -1;
    }
  }

  return life;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);

console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
