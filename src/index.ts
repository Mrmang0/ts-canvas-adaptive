import Point from "./Core/objects/Point";
import RenderService from "./Core/services/RenderService";
import MouseService from "./Core/services/MouseService";
import ServiceManager from "./Core/services/ServiceManager";
import LiveService from "./Core/services/LiveService";
import { clear, center, vertical, horizontal, tng } from "./functions/drawFunctions";

const args =  { x: 1.5, y: 1.5, zoom: 0.1, divider: 500, pointsPerPixel: 1 };

horizontal.setArgs(args);
vertical.setArgs(args);
center.setArgs(args);
tng.setArgs(args);
ServiceManager
.get<LiveService>(LiveService)
.init(args)
.createHTML();



ServiceManager.get<RenderService>(RenderService)
  .init(window.innerWidth-40, window.innerHeight-40)
  .initial((context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    context.strokeStyle = "rgba(255,255,255,1)";
    context.fillStyle = "rgba(0,0,0,1)";
    context.translate(canvas.width / 2, canvas.height / 2);
    const service = ServiceManager.get<MouseService>(MouseService)
      .init()
      .setElement(canvas);
    const bounds = canvas.getBoundingClientRect();
    const point = service
      .withOffset(new Point(600, 500))
      .withOffset(new Point(bounds.left, bounds.top));
  })
  .pushToLoop(clear)
  .pushToLoop(vertical)
  .pushToLoop(horizontal) 
  .pushToLoop(center)
  .pushToLoop(tng)
  .render();

function think(p1: Point, p2: Point): Point {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  let vx, vy;
  let dist = Math.sqrt(dx * dx + dy * dy);
  // interaction
  if (dist < 30) {
    let angle = Math.atan2(dy, dx);
    let tx = p1.x + Math.cos(angle) * 30;
    let ty = p1.y + Math.sin(angle) * 30;
    return new Point(tx, ty);
  }


  return p1;
}
