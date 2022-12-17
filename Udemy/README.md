## 10강 검색 알고리즘

### 선형탐색

#### 시간 복잡도

O(n)

### 이진탐색

분류된 배열에서만 제대로 작동한다.

#### 시간 복잡도

- Worst and Average Case => O(log n)
- Best Case => O(1)

### 나이브문자열탐색(Naive String Search)

긴 문자열에서 부분 문자열(subString)을 검색하는것과 관련된다.

- Loop over the longer string
- Loop over the shorter string
- if the characters don't match, break out of the inner loop
- if the characters do match, keep going
- if you complete the inner loop and find a match, increment the count of matches
- Return the count

## 11~17강 정렬 알고리즘

### 왜 우리는 정렬을 배워야하는가?

1. 정렬은 프로그래밍에서 정말로 흔하게 사용되기 때문이다.
2. 데이터를 정렬할 수 있는 방법은 많고, 우리가 살표볼 각 알고리즘에는 장단점이 있다. 몇몇 알고리즘이 객관적으로 나머지보다 빠르기는 하지만, 특정 상황에서는 어떤 알고리즘이 두각을 보인다.
   예를 들어, 비교적 균일하게 정렬된 배열 중 정렬이 안된 데이터가 몇 개 있고, 그 데이터가 가능한 한 빨리 정렬되게 하고 싶다고 해보자.
   그 상황에서는 빠르게 작동하지 않을 내장 알고리즘을 사용하는 대신 우리만의 정렬 알고리즘을 구현하는 것이 나을 수도 있다.
   참고할만한 사이트 : https://www.toptal.com/developers/sorting-algorithms

### 자바스크립트 내장 정렬 메소드

자바스크립트의 내장 정렬 메소드인 선택사항으로 비교함수을 받는다.
해당 비교함수를 통해 원하는 방식으로 정렬을 할 수 있다.
비교함수는 두 요소(a,b)를 보고 리턴값을 기준으로 정렬 순서를 결정한다.

- 만약 음수가 반환되면, a는 b앞에 온다.
- 만약 양수가 반환되면, a는 b뒤에 온다.
- 만약 0이 반환되면, a와 b는 동일하게 취곱되어 한꺼번에 정렬하는데 상관이 없다.

```javascript
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// 4,5,10,15

// 짧은 단어순으로 정렬
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
```

### 버블 정렬

#### 동작순서

1. 변수 i로, 배열의 처음부터 끝까지 순회한다.
2. 변수 j로, 내부 반복문을 만들어, 처음부터 i-1까지 순회한다.
3. 만약 arr[j]> arr[j+1]이면, 두 값을 교체한다(swap).
4. 정렬된 배열을 반환한다.
