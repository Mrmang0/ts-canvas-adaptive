import Rectangle from "../objects/Rectangle";
import RepatableFunction from "../extensions/RepeatebleFunction";
import ServiceManager from "./ServiceManager";

export default class RenderService implements IService {
  public name: String = "render";
  private context: CanvasRenderingContext2D;
  private renderLoop: Array<RepatableFunction>;
  private canvas: HTMLCanvasElement;

  constructor() {}

  init(width: number, height: number, parent: HTMLElement = document.body) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    parent.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.renderLoop = [];
    return this;
  }

  initial(initFunc: Function) {
    initFunc(this.context, this.canvas);
    return this;
  }

  render() {
    this.renderLoop.forEach(func => {
      this.context.save();
      if (func.execute({ context: this.context, canvas: this.canvas }))
        this.removeFromLoop(func);
      this.context.restore();
    });

    requestAnimationFrame(this.render.bind(this));
    return this;
  }

  pushToLoop(func: RepatableFunction): RenderService {
    this.renderLoop.push(func);
    return this;
  }

  removeFromLoop(func: RepatableFunction): RenderService {
    this.renderLoop.splice(this.renderLoop.indexOf(func), 1);
    return this;
  }
}
