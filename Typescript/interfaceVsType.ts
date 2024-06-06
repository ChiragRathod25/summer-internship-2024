interface User{
    readonly dbId:number,
    name:string,
    age:number,
    googleId?:string,
    startTrial():string 
    // startTrial:()=>string     //another syntax for same
    getCoupen(coupenName:string):string
}
interface User{
    githubToken:string
}
const chirag:User={dbId:65,name:"chirag",age:21,startTrial:()=>{return "hi"},getCoupen:(name:"coupen1")=>{return name},githubToken:"This is github token"}

console.log(chirag.startTrial())
console.log(chirag.getCoupen(""))


interface Admin extends User{
    role:"admin" | "ta" | "learner"
}
const asmi:Admin={dbId:65,name:"asmi",age:15,startTrial:()=>{return "bye"},getCoupen:(name:"coupen2")=>{return name},githubToken:"This is github token 2",role:"admin"}
console.log(asmi)

export{}