import RepatableFunction from "../Core/extensions/RepeatebleFunction";
import { hsl } from "../Core/extensions/GeneralFunctions";




export const horizontal = new RepatableFunction(
  {},
  (args: any) => {
    const context: CanvasRenderingContext2D = args.context;
    const canvas: HTMLCanvasElement = args.canvas;
    const bounds = canvas.getBoundingClientRect();

    for (let x = -canvas.width / 2; x < canvas.width; x += 1 / args.pointsPerPixel) {

      const y = 150 * Math.cos(Math.log(x ** 2 * args.zoom))**2  * Math.sin(Math.PI * args.zoom + x);
      context.fillStyle = hsl(x % 250, 50, 50);

      context.fillRect(y, x, args.x, args.y);
      context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;
  },
  (args: any) => false
);

export const vertical = new RepatableFunction(
  {},
  (args: any) => {
    const context: CanvasRenderingContext2D = args.context;
    const canvas: HTMLCanvasElement = args.canvas;
    const bounds = canvas.getBoundingClientRect();

    for (let x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {

      const y = 150 * Math.cos(Math.log(x ** 2 * args.zoom))**2 * Math.sin(Math.PI * args.zoom + x);
      context.fillStyle = hsl(y%360, 50, 50);

      context.fillRect(x, y, args.x, args.y);
      context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;

  },
  (args: any) => false
);

export const center = new RepatableFunction(
  {},
  (args: any) => {
    const context: CanvasRenderingContext2D = args.context;
    const canvas: HTMLCanvasElement = args.canvas;
    const bounds = canvas.getBoundingClientRect();

    for (let x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {
      const modX = 300 * Math.sin(Math.log(x ** 2 * args.zoom))**2 * Math.cos(Math.PI * args.zoom + x)**1/4;
      const y = 300 * Math.cos(Math.log(x ** 2 / args.zoom))**2 * Math.sin(Math.PI * args.zoom + x)**1/4;
      context.fillStyle = hsl(y % 360, 50, 50);
      context.fillRect(modX, y, args.x, args.y);
      context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;

  },
  (args: any) => false
);

export const clear = new RepatableFunction(
  {},
  (args: any) => {
    const context: CanvasRenderingContext2D = args.context;
    const canvas: HTMLCanvasElement = args.canvas;
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
  },
  (args: any) => false
);


export const tng = new RepatableFunction(
  {},
  (args: any) => {
    const context: CanvasRenderingContext2D = args.context;
    const canvas: HTMLCanvasElement = args.canvas;
    const bounds = canvas.getBoundingClientRect();

    for (let x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {

      const y = 150 * Math.tan(Math.log(x ** 2 / args.zoom)) *  Math.sin(Math.PI * args.zoom * x);
      context.fillStyle = hsl(y%360, 50, 50);

      context.fillRect(x, y, args.x, args.y);
      context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;

  },
  (args: any) => false
);
