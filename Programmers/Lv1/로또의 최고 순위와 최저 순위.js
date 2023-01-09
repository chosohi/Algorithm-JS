function filterRank(num) {
  let rank = 6;
  switch (num) {
    case 6:
      rank = 1;
      break;
    case 5:
      rank = 2;
      break;
    case 4:
      rank = 3;
      break;
    case 3:
      rank = 4;
      break;
    case 2:
      rank = 5;
      break;
  }
  return rank;
}

function solution(lottos, win_nums) {
  const lowList = win_nums.filter((num) => lottos.includes(num));
  console.log(lowList);
  let zero =
    lottos.filter((num) => num === 0).length -
    lowList.filter((num) => num === 0).length;
  console.log(lowList, zero);
  // filterRank
  // let maximum = minimum + zero;
  return [filterRank(lowList.length + zero), filterRank(lowList.length)];
}

console.log(solution([0, 0, 0, 0, 0, 6], [0, 0, 0, 6, 11, 12]));
