// 재귀함수
// 자기가 자기 자신을 호출한다.

// 스택 프레임
// 자바스크립트의 콜스택을 구성하고 있는 스택 프레임들은 대기하고 호출되는 형태로 구성된다. 각 스택 프레임들은 1. 매개변수와 2. 지역변수 3. 복귀할주소 를 가지고 있다.
// 예를 들어, DFS(2)의 스택 프레임에는 2라는 매개변수와 해당 함수 내 지역변수, 그리고 DFS(3)의 주소(복귀주소)를 가지고 있다.

function solution(num) {
  const answer = [];

  function DFS(level) {
    if (level === 0) return;
    else {
      // console.log(level) 3, 2, 1 -> DFS(3)에서 DFS(2)로 넘어가기 전 콘솔을 찍으므로 3, 2, 1순으로 출력된다.
      DFS(level - 1);
      console.log(level); // 1, 2, 3
    }
  }
  DFS(num);
}

solution(3);
