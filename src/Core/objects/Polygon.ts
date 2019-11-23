import Vector from "./Vector";
import ICollider from "../interfaces/ICollider";
import { ColliderType } from "../enums/Collision";
import Rectangle from "./Rectangle";
import Point from "./Point";
import { getDistance } from "../extensions/GeneralFunctions";

export default class Polygon implements ICollider {
  public type: ColliderType;
  public points: Array<Point>;
  public lines: Array<Vector>;

  constructor(points: Array<Point>) {
    this.type = ColliderType.polygon;
    this.points = points;
    this.lines = new Array<Vector>();
    points.reduce((prev: Point, current: Point) => {
      // if (!prev) 
      console.log(prev);
      
      this.lines.push(new Vector(prev, current));
      return current;
    });
    this.lines.push(new Vector(points[points.length-1],points[0]));
  }

  wrapToRectangle() {
    let minX = Number.MAX_SAFE_INTEGER,
      minY = Number.MAX_SAFE_INTEGER,
      maxX = Number.MIN_SAFE_INTEGER,
      maxY = Number.MIN_SAFE_INTEGER;

    this.points.forEach((point: Point) => {
      minX = point.x < minX ? point.x : minX;
      minY = point.y < minY ? point.y : minY;
      maxX = point.x > maxX ? point.x : maxX;
      maxY = point.y > minY ? point.y : minY;
    });

    return new Rectangle(
      new Point(minX, minY),
      new Point(maxX-minX, maxY-minY)
    );
  }
}
