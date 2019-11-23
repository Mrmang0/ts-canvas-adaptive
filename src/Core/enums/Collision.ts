export enum ColliderType{
    polygon,
    vector,
    point,
    circle,
    rectangle,
}

export enum CollisionType{
    pointToPoint,
    pointToVector,
    pointToPolygon,
    vectorToPoint,
    vectorToVector,
    vectorToPolygon,
    PolygonToPoint,
    PolygonToVector,
    PolygonToPolygon,
}