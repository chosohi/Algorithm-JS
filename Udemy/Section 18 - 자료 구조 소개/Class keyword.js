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
