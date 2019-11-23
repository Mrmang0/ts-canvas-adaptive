import ICollider from "../interfaces/ICollider";
import { ColliderType } from "../enums/Collision";

export default class Point implements ICollider {
  public type: ColliderType;
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.type = ColliderType.point;
    this.x = x;
    this.y = y;
  }

  withOffset = (offset: Point) =>
    new Point(this.x - offset.x, this.y - offset.y);
}
