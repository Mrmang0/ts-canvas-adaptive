export default class RepatableFunction{
    
    private args :Object;
    private funcToExecute:Function;
    private checkStopCondition: Function;

    constructor(args:Object,functionBody:Function,stopCondition:Function) {
        this.args = args;
        this.funcToExecute = functionBody;
        this.checkStopCondition = stopCondition;
    }

    execute(serviceArgs:any){
        const args = {...this.args, ...serviceArgs};
        this.funcToExecute(args);
        const stoped = this.checkStopCondition(args); 
        Object.keys(args).forEach(key=>{
            (this.args as any)[key] = args[key];
        })
        return stoped;
    }

    setArgs(args:Object){
        this.args = args;
    }
}