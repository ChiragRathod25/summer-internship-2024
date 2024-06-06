type User={
    readonly _id:number,
    name:string,
    email:string,
    isActive:boolean,
     credicartDetails?:number  //marked optional using ?
}
let myUser:User={
    _id : 123,
    name:"chirag",
    email : "chirag.com",
    isActive:false,
}
myUser.name ="srishti"
// myUser._id=21 //error



//combination of type
type cardNumber={
    cardnumber:number
}
type cardDate={
    cardDate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}

let cardDetail :cardDetails={
    cardnumber :133465789465,
    cardDate:"12/05/1670",
    cvv:465,
}
function getcardDetails(cd:cardDetails){
    console.log(cd)
}
getcardDetails(cardDetail)

export{}