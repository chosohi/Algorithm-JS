function solution(elements) {
  // 세는 단위 : 1 ~ elements.length
  let sum = new Set();
  for (let cnt = 1; cnt <= elements.length; cnt++) {
    let tmp = [];
    for (let i = 0; i < elements.length; i++) {
      if (i + cnt > elements.length) {
        tmp = [
          ...elements.slice(i),
          ...elements.slice(0, i + cnt - elements.length),
        ];
      } else {
        tmp = elements.slice(i, i + cnt);
      }

      let res = tmp.reduce((acc, val) => acc + val, 0);
      sum.add(res);
    }
  }

  return sum.size;
}

solution([7, 9, 1, 1, 4]);
