import Point from "../objects/Point";

export const getDistance = (pointA: Point, pointB : Point) => Math.sqrt((pointA.x-pointB.x)**2 + (pointA.y-pointB.y)**2);

export const hsl = (h:number,s:number,l:number): string => `hsl(${h%360},${s}%,${l}%)`;
export const rgba = (r:number,g:number,b:number,a:number) => `rgba(${r%255},${g%255},${b%255},${a})`