import Point from "../objects/Point";
import { throws } from "assert";

export default class MouseService implements IService {
  name: String = "Mouse";
  currentElement: HTMLElement;
  point: Point;
  self: any = this;

  constructor() {}

  init() {
    this.setElement(document.body)
    this.point = new Point(0,0);
    return this;
  }

  withOffset = (offset: Point): Point => this.point.withOffset(offset);

  public setElement(element: HTMLElement) {
    if (element == this.currentElement) return;
    else {
      if(this.currentElement)
      this.currentElement.removeEventListener("mousemove",this.mouseMove);
      this.currentElement = element;
      this.currentElement.addEventListener("mousemove",this.mouseMove.bind(this));
    }
    return this;
  }

  private mouseMove(evt: MouseEvent) {
    
    this.point.x = evt.clientX;
    this.point.y = evt.clientY;
  }
}
