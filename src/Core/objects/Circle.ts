import Point from "./Point";
import ICollider from "../interfaces/ICollider";
import { ColliderType } from "../enums/Collision";
import { getDistance } from "../extensions/GeneralFunctions";

export default class Circle implements ICollider {
  type: ColliderType;
  center: Point;
  radius: Number;
  constructor(center: Point, radius: Number) {
    this.type = ColliderType.circle;
    this.center = center;
    this.radius = radius;
  }
}
