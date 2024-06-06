abstract class TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    
    //made it abstract so need to define it here, but class which extends this , it have to define it
    abstract getSepia():void
    getReelCount():void{
        console.log(5)
    }
}
class instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    //abstract method defination
    getSepia(): void {
        console.log("sepia");
    }
    getReelCount(): void {
        console.log(100)
    }
    // overwriting parent methhod
}
//not possible
// const chirag = new TakePhoto("chirag@google.com",'filter1')

//using instagram because TakePhoto is abstract , we can't create object from it , we just extends other classes from it
const chirag = new instagram("chirag@google.com",'filter1',5)
chirag.getReelCount()
export{}