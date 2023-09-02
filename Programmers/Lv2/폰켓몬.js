// nums 길이는 무조건 짝수로 들어오므로, parseInt 할 필요 없음

// 2번째 접근 방법
// 구해야하는 갯수는 n/2
// 종류가 n/2보다 같거나 많으면 n/2 반환
// 종류가 n/2보다 적으면 종류의 갯수 반환

function solution(nums) {
  let answer = 0;
  const uniqueArr = [...new Set(nums)];

  if (uniqueArr.length >= nums.length / 2) answer = nums.length / 2;
  else answer = uniqueArr.length;

  return answer;
}

function rafactor(nums) {
  const len = nums.length / 2;
  const uniqueArr = [...new Set(nums)];

  return uniqueArr.length >= len ? len : uniqueArr.length;
}

// 1번째 접근 방법  ==> 시간초과
// 조합
// nCm n = 전체갯수 m = n/2
// m 노드길이까지 조합을 구한 다음 종류 개수를 카운트하여 최댓값 비교하여 갱신
function combiSolution(nums) {
  let answer = 0;
  function DFS(i, arr) {
    if (i === nums.length) {
      if (arr.length === nums.length / 2) {
        const uniqueArr = [...new Set(arr)];
        answer = Math.max(answer, uniqueArr.length);
      }
      return;
    } else {
      DFS(i + 1, arr.concat([nums[i]]));
      DFS(i + 1, arr);
    }
  }
  DFS(0, []);
  return answer;
}

console.log(solution([3, 1, 2, 3]));
