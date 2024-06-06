//another Production way to declare this
// class User{
//     constructor(
//         public email:string,
//         public  name:string,
//         public city:string="anand"
//     ){
//     }
// }

class User{
    public email:string
    private name:string
    readonly city:string="Anand";
    private _courseCount:number=1;
    protected semesterCount:number = 1;
    constructor(email:string,name:string,city:string="anand"){
        this.email=email
        this.name=name
        this.city=city
    }
    private deleteTOken(){
        console.log("TOken Deleted");
    }
    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNumber:number){
        //no return type for it, not even void or never
        if(courseNumber<=1){
            throw new Error("course count is less than one")
        }
        this._courseCount=courseNumber;
    }

    get getEmail():string{
        return `Email${this.email}`
    }

}

class subUser extends User{
    isFamily : boolean =true;
    changeCourseCount(){
        this.semesterCount=5;
    }   
    get getsemesterCount():number{
        return this.semesterCount;
    } 
}
    

const chirag=new User("chirag@google.com","Chirag Rathod")
console.log(chirag)

const chirag2=new subUser("chirag@google.com","Rathod Chirag","Vallabh Vidyanagar")
console.log(chirag2)
console.log(chirag2.getsemesterCount)
chirag2.changeCourseCount()
console.log(chirag2.getsemesterCount)
export{}