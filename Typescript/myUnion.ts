let score : string | number = 33;

type User ={
    name:string,
    id:number
}
type Admin  ={
    username:string,
    id:number
}

let chirag:User|Admin={

    //for user
    name:"chirag",
    id:123
}
console.log(chirag)
chirag ={
    //for admin
    username : "CR",
    id:132
}
console.log(chirag)


// function getDbId(id:number|string){
//     //making some API calls
//     console.log(`DB id is : ${id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id:number|string){
    if(typeof id==="string"){
        console.log(id.toLocaleLowerCase())
    }
    else {
        id.toFixed(2);
    }
}

//arry defined only for number
const data:number[]=[12,465,6]
const data1:string[]=['chirag','asmi','ru']
console.log(data)
console.log(data1)

//not allowed
// const data3:string[]|number[]= [1,2,"3"]

//to allow both
const data4:(string|number)[]=[1,2,"3"]
console.log(data4)

//literall type of assignment
let pi:3.14=3.14
// pi = 3.145 //error

//usefull case scenario
let seatAllotment:"aisle" | "middle" | "window"
seatAllotment ="aisle"  //true
// seatAllotment = "crew"   //false, it gives error



export{}