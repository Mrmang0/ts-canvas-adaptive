import Point from "./Point";
import ICollider from "../interfaces/ICollider";
import { ColliderType } from "../enums/Collision";

export default class Vector implements ICollider{
    public type:ColliderType
    public startPoint:Point;
    public endPoind:Point;
    
    constructor(startPoint:Point,endPoint:Point) {
        this.type = ColliderType.vector
        this.startPoint = startPoint;
        this.endPoind = endPoint;
    }
}