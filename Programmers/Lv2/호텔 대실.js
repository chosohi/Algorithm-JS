//  손님의 입실 시간이 ROOM1의 마지막 손님의 퇴실시간보다 10분 더 크면 넣어 아니면 새로운 방에서 똑같이 체크

function solution(book_time) {
  let answer = 0;
  // book_time.sort((a, b) => {
  //   const [HH, MM] = a[0].split(":");
  //   const [bHH, bMM] = b[0].split(":");
  //   if (MM - bMM === 0) return HH - bHH;
  //   return MM - bMM;
  // });
  book_time = book_time
    .map((data, i) => {
      const [h, m] = data[0].split(":");
      if (i === 0) return h * 60 + m;
      return h * 60 + m + 10;
    })
    .sort((a, b) => a[0] - b[0]);
  console.log(book_time);
  return answer;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
