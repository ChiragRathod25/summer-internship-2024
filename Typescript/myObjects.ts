const User={
    name:"Chirag",
    email:"Chiku@chirag.com",
    isActive:true
}
function createUser(obj:{name:string,isPaid:boolean}){
    // return true;

    console.log(obj)
    // return obj
}
console.log(createUser({name:"chirag",isPaid:true}))


function createCourse():{name:string,price:number}{
    return {name:"myCourse",price:399}
}



//bad behaviour of typescript

// createUser({name:"Chirag",isPaid:false,email:"chiea@ku.com"}) //it gives error

// but if 
let userdetailes={name:"Chirag",isPaid:false,email:"chiea@ku.com"}
createUser(userdetailes) //it will not give me error

export{}