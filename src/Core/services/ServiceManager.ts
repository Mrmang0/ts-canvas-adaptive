import MouseService from "./MouseService";
import RenderService from "./RenderService";
import CollisionService from "./CollisionService";
import { type } from "os";
import { filter } from "minimatch";
import LiveService from "./LiveService";

const ServiceArray = new Array<IService>(
  new MouseService(),
  new RenderService(),
  new CollisionService(),
  new LiveService()
);

export default abstract class ServiceManager {
  static services: Array<IService> = ServiceArray;

  static push = (service: IService) => ServiceManager.services.push(service);

  static remove = (service: IService) =>
    ServiceManager.services.splice(ServiceManager.services.indexOf(service), 1);

  static get = <T extends IService>(typeT: new () => T):T => {
    return  ServiceManager.services.filter(service =>  service instanceof typeT)[0] as T;
  };

   
};
