import Point from "./Point";
import { ColliderType } from "../enums/Collision";
import ICollider from "../interfaces/ICollider";

export default class Rectangle implements ICollider {
  public type: ColliderType;
  public point: Point;
  public width: number;
  public height: number;
  constructor(point: Point, size: Point) {
    this.type = ColliderType.rectangle;
    this.point = point;
    this.width = size.x;
    this.height = size.y;
  }

  get center():Point {
    return new Point(this.point.x+this.width/2,this.point.y+this.height/2);
  }
  
}
