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

## 18강 자료 구조 소개

### ES2015 클래스 구문 개요

#### 클래스란?

사전에 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 청사진과 같다.
자바스크립트는 기본적으로 객체 지향적이지 않으며, 단지 프로토타입 기반 상속자 혹은 프로토타이핑으로 불리는 무엇인가를 이용하는 것이다.

### 클래스 키워드

생성자(constructor)는 새로운 Student 인스턴스를 인스턴스화시킬때 사용되는 특별한 메소드

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstNAme;
    this.lastName = lastName;
  }
}
```

new 키워드를 통해 클래스로부터 새로운 객체를 인스턴스화

```javascript
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

#### this

this 키워드는 상황에 따라 의미가 조금씩 다르다. 여기서 생성자 함수에 쓰이는 this는 개별 클래스 인스턴스, 즉 개별 Student 인스턴스를 지징하게 된다.

키워드 this는 개별 클래스로부터 생성된 객체, 즉 실제 인스턴스를 참조한다.

#### constructor

new 연산자로 제공된 데이터는 기본적으로 생성자(constructor)로 전달되고, 새로운 클래스 인스턴스가 생성될 때, 이 생성자가 동작하게 된다.

### Instance 메소드 추가하기

- 각 인스턴스에 종속적인 메소드들 만들기

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // 지각
    this.late = 0;
    this.score = [];
  }

  marklate() {
    this.late++;
    if (this.late >= 3) {
      return `${this.firstName} ${this.lastName} is out`;
    }
    return `${this.firstName} ${this.lastName} is late ${this.late} time(s)`;
  }
  pushScore(score) {
    this.score.push(score);
    return this.score;
  }
  calculateAverage() {
    let sum = this.score.reduce((a, b) => a + b);
    return sum / this.score.length;
  }
}
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
firstStudent.marklate();
```

### class 메소드 추가하기

#### static 키워드

static 키워드는 클래스에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메소드 혹은 기능들을 생성해준다.
클래스의 인스턴스화 없이도 호출될 수 있으며, 클래스 인스턴스를 통해서는 호출될 수 없다.

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2);
// 7.0710678118654755;
```

### class 총정리

- 클래스들은 인스턴스로 알려진 객체를 생성하기 위한 청사진이며,
- 이런 클래스들은 "new"키워드를 통해 생성되거나 인스턴스화된다.
- 컨스트럭터 함수는 클래스가 인스턴스화될 때, 동작하는 특별한 함수이다.
- "new"를 통해 "Student" 클래스를 인턴턴화 시키게 되면, "Student"의 컨스트럭터가 먼저 동작하게 된다.
- 인스턴스 메소드는 메소드 혹은 객체와 유사한 방식으로 클래스에 추가될 수 있으며, 클래스 메소드는"static"키워드와 함께 추가될 수 있다.

## 19강 단일 연결 리스트

### 배열과 연결리스트의 차이

#### 연결 리스트

- 인덱스가 없다.(각 항목과 일치하는 인덱스가 없다.)
- next 포인터로 노드들이 연결되어 있다.("이것이 첫 노드이다"를 의미하는 변수인 헤드 포인터를 가진다.)
- 랜덤한 접근이 불가능하다.(10번째 노드 얻어내기가 불가능, 순서대로 따라가야함)
- 새로운 항목을 삽입 및 제거하기 쉽다.
- 특히 임의 접근이 필요지지 않은 아주 긴 데이터 세트나 많은 정보에 대여여 작업할 경우, 혹은 그냥 리스트에 저장만 하면 될 경우, 연결 리스트를 사용하는 것이 바람직하다.

#### 배열

- 순서에 따른 인덱스가 있다.
- 삽입과 삭제행위가 비싸다.
- 특정 인덱스에 빠르게 접근 능능하다.
