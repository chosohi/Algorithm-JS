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
