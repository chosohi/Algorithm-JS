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
