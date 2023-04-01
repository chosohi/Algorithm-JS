function setQueue(queue, val) {
  if (queue.includes(val)) {
    queue = queue
      .slice(0, queue.indexOf(val))
      .concat(queue.slice(queue.indexOf(val) + 1));
    queue.unshift(val);
  } else {
    queue.pop();
    queue.unshift(val);
  }
  return queue;
}

function solution(s, n, arr) {
  let queue = new Array(s).fill(0);

  for (const val of arr) {
    if (queue.length === s) {
      queue = setQueue(queue, val);
    } else {
      queue = setQueue(queue, val);
    }
  }
  return queue.join(" ");
}

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
// 10000
// 21000
// 32100
// 23100
// 62310
// 26310
// 32610
// 53261
// 75326
