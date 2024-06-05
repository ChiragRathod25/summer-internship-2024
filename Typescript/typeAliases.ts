type User={
    name:string,
    Age:number,
    email:string,
    isActive:boolean
}

//rename default data types
type mystring=string;

function createUser(myuser:User){
    console.log(myuser)
    return myuser
}
createUser({name:"Chirag",Age:10,email:"hci@ca.com",isActive:false})

//bad behaviour
let me={name:"Chirag",Age:10,email:"hci@ca.com",isActive:false,fname:""}
createUser(me)  //not give error

export{}