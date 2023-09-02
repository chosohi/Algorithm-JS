function solution(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // 제일 많이 남겨진 갯수와 현재 값이 그 갯수보다 크거나 같으면 해당되는거니까 리턴
    // 즉 최초로 h 이상인 순간(이떄, h는 최댓값이 됨, i가 작을거니까)
    if (arr[i] >= arr.length - i) return arr.length - i;
  }
  return 0;
}
