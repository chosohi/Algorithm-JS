// 카운트 다운 함수

function countDown(num) {
  if (num <= 0) return;
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
