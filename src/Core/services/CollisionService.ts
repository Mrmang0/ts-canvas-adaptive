import ICollider from "../interfaces/ICollider";
import Point from "../objects/Point";
import Vector from "../objects/Vector";

export default class CollisionService implements IService{
  colliders: Array<ICollider>;
  name: String = "Collision";
  constuctor() {}

  CheckCollision() {
    this.colliders.forEach(currentCollider => {
      this.colliders.forEach(collider => {
        this.checkPointToPoint(currentCollider as Point, collider as Point);
      });
    });
  }

  checkPointToPoint = (fp: Point, sp: Point) => fp === sp;
  checkPointToLine = (point:Point,line:Vector) => {
      const sameXFloatY = point.x === line.endPoind.x;
      return;
  };
  pushCollider = (colider: ICollider) => this.colliders.push(colider);
}
