let data = ["가", "나", "다"];
let arr = [];
let N = 3,
  M = 3;
let visited = new Array(N + 10).fill(false);

function recur(cur) {
  // 기저
  if (cur === N) {
    console.log(arr);
    return;
  }

  for (let i = 0; i < M; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    arr.push(data[i]);
    recur(cur + 1);
    arr.pop();
    visited[i] = false;
  }
}

recur(0);
