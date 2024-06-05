function addTwo(num:number):number{
    //num.toUpperCase();   //not possible
    // return "Hello";
    return num+2
}
console.log(addTwo(5))



function getUpper(val:string){
    return val.toUpperCase();
}
console.log(getUpper("4"))


function signUpUser(name:string,email:string,isPaid:boolean){
    return "Hello";
}
console.log(signUpUser("chirag","chiku@chirag.com",true));

let loginUser=(name:string,age:number=20)=>{
}
// loginUser("Chirag"); //error before default value
loginUser("Chirag"); //no error after default value

function getValue(myVal:number):boolean|string{
    if(myVal >5){
        return true;
    }
    return "200 OK";
}
const getHello=(s:string):string=>{
    return s;
}
console.log(getHello("5"))

//it mean that it is not returning anything, returns void
function consoleError(err:string):void{
    console.log(err);
}

//it'll never return value, used to throw and exception or to terminates the execution of program
function handleError(err:string):never{
    throw new Error(err);
}

consoleError("this is error")
handleError("Error message by system")




export{}