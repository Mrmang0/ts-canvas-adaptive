import { rgba } from "../extensions/GeneralFunctions";
import ServiceManager from "./ServiceManager";
import { setInterval } from "timers";

export default class LiveService implements IService {
  name: String = "Live";
  args: object;
  argsElement: Array<HTMLElement>;

  constructor() { }

  init(args: object) {
    this.args = args;
    this.argsElement = new Array<HTMLElement>();
    return this;
  }

  createHTML() {
    const mainblock: HTMLElement = document.createElement("div");
    mainblock.classList.add("live__container");
    mainblock.style.position = "fixed";
    mainblock.style.left = "1%";
    mainblock.style.height = "100px";
    mainblock.style.width = "200px";
    mainblock.style.padding = "10px"
    mainblock.style.color = "white"
    mainblock.style.backgroundColor = "#212121"
    mainblock.style.borderRadius = "4%"

    const toggler: HTMLElement = document.createElement('button');
    const propBlock = document.createElement('div');

    (toggler as any).toggled = true;
    toggler.style.height = "10px";
    toggler.style.width = "100%";
    toggler.addEventListener('click', (evt) => {
      if ((toggler as any).toggled) {
        toggler.parentElement.style.height = toggler.style.height;
        (toggler as any).toggled = false;
        propBlock.style.display = "none";
      } 
      else {
        toggler.parentElement.style.height = `${18 + 30 * this.argsElement.length}px`;
        (toggler as any).toggled = true;
        propBlock.style.display = "block";


      }
    })
    mainblock.appendChild(toggler);

    Object.keys(this.args).forEach(key => {
      const elem = document.createElement("div");
      elem.style.display = "flex";
      elem.style.width = "100%";

      const name = document.createElement("label");
      name.style.paddingRight = "10px";
      name.textContent = key;
      name.style.margin = "6px 0"

      const input = document.createElement("input");
      input.style.width = "100%";
      input.style.padding = "4px"
      input.style.margin = "2px 0"
      input.style.borderRadius = "5px"

      input.value = (this.args as any)[key];
      input.addEventListener("input", this.updateValue);
      (input as any).propertyKey = key;
      this.argsElement.push(input);

      elem.appendChild(name);
      elem.appendChild(input);
      propBlock.appendChild(elem);
    });
    mainblock.style.height = `${18 + 30 * this.argsElement.length}px`
    mainblock.appendChild(propBlock);
    document.body.appendChild(mainblock);
    this.valuesUpdater();

  }

  private updateValue(evt: any) {
    const args = ServiceManager.get<LiveService>(LiveService).args as any;
    args[(this as any).propertyKey] = new Number((this as any).value);
  }

  public valuesUpdater() {
    setInterval(() => {
      const args = ServiceManager.get<LiveService>(LiveService).args as any;
      this.argsElement.forEach((el: any) => {
        if (document.activeElement !== el)
          el.value = new Number(args[el.propertyKey]);
      })
    }, 100);

  }
}
