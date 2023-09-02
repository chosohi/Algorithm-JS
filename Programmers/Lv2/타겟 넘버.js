// 배운점
// 1. ++와 + 1의 차이점
// i++는 변수 i의 값을 1 증가시킴. 하지만 i++ 자체는 바로 증가되지 않는다. 같은 블럭 내에서는 동일하게 i++은 0이라는 값으로 계속 재귀호출을 하게되는거임
// i+1은 현재 i값에 1을 더한 값을 쓰겠다는 의미, 그 다음 재귀호출시, 더한값으로 넘어감
// 2. 변수 혼동
// cnt를 더해주는 값과 혼동해서 계속 cnt - 1을 했었는데, 그게아니라 더한 숫자의 갯수이므로 변수에 대한 기억을 잘 하고 짜자
function solution(numbers, target) {
  let answer = 0;

  function DFS(sum, cnt) {
    console.log("cnt", cnt);
    if (cnt === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    DFS(sum + numbers[cnt], cnt + 1);
    DFS(sum - numbers[cnt], cnt + 1);
  }
  DFS(0, 0);

  return answer;
}
// 최초 오답 코드
// function solution(numbers, target) {
//   let answer = 0;

//   function DFS(sum, cnt) {
//     console.log("cnt", cnt);
//     if (cnt === numbers.length) {
//       if (sum === target) answer++;
//       return;
//     }

//     DFS(sum + numbers[cnt], cnt++);
//     DFS(sum - numbers[cnt], cnt--);
//   }
//   DFS(0, 0);

//   return answer;
// }
console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
