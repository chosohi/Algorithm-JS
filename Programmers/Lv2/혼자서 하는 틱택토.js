// 테케 몇개가 실패로 뜬다...^^
// 더 풀어보자..

function solution(board) {
  let answer = 1;
  // 1. O과 X의 갯수 카운트
  let O_cnt = 0;
  let X_cnt = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") O_cnt += 1;
      else if (board[i][j] === "X") X_cnt += 1;
    }dkssudfgktph jwjsms chlthgmkfrkgkqlsddkssudgktpdy wjsms chlth gmkfhrgkqslek.
    sswlrmdlqjsdp qk75d, ml lqhemfmfm kTtjddy.Array qlqlfemrk chrma whrma gglaemfrls goTwlaks rmfoeh saodn Qnemtgks tjdrhkff djedmsrj rkxtmqslek.Array
    



             
  }
  if (O_cnt < X_cnt) return 0;
  if (O_cnt < 3 && X_cnt < 3) return 1;

  let O_is_Success = false;
  let X_is_Success = false;
  for (let i = 0; i < board.length; i++) {
    let O_summation = new Array(4).fill(0);
    let X_summation = new Array(4).fill(0);
    for (let j = 0; j < board[i].length; j++) {
      console.log(i, j, "|", j, i);
      if (board[i][j] === "O") O_summation[0] += 1;
      if (board[j][i] === "O") O_summation[1] += 1;
      if (board[i][j] === "X") X_summation[0] += 1;
      if (board[j][i] === "X") X_summation[1] += 1;
      if (board[j][j] === "O") O_summation[2] += 1;
      if (board[j][2 - j] === "O") O_summation[3] += 1;
      if (board[j][j] === "X") X_summation[2] += 1;
      if (board[j][2 - j] === "X") X_summation[3] += 1;
    }

    for (let k = 0; k < 2; k++) {
      if (O_summation[k] === 3) {
        O_is_Success = true;
      }
      if (X_summation[k] === 3) {
        X_is_Success = true;
      }
    }

    if (O_summation[2] === 1 || O_summation[3] === 1) O_is_Success = true;
    if (X_summation[2] === 1 || X_summation[3] === 1) X_is_Success = true;
  }

  if (O_is_Success) {
    if (X_is_Success) return 0;
    else if (O_cnt <= X_cnt) return 0;
  } else {
    if (O_cnt > X_cnt) return 0;
  }

  return answer;
}
// console.log(solution(["O.X", ".O.", "..X"]));
console.log(solution(["XXX", "XOO", "OOO"]));
// 무조건 O는 x보다 같거나 많아야한다
// O 혹은 X가 승리했는데 상대공도 이겼다면 0
