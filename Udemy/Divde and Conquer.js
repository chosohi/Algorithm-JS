// 선형 탐색(Linear Search) , 시간복잡도 O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// 이분 탐색(Binary Search), 시간복잡도 Log(n)
function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (val < currentElement) {
      max = middle - 1;
    } else if (val > currentElement) {
      min = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch([1, 4, 6, 7, 8, 10], 4));
