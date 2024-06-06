const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val:number|boolean):boolean|number{
    return val //here we have to typecheck for either number or boolean and for all other
}
function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val;
}
identityThree("Three")
identityThree(3)


function identityFour<T>(val:T):T{
    // console.log(val.length) //e.g. type number doesn't have this so it gives error
    return val
}
interface Bootle{
    brand:string,
    type:number
}

console.log(identityFour<Bootle>({brand:"chirag",type:5}))


//generics for array 
function getSearchProdutcs<T>(val:T[]):T{
    // console.log(val.length) //no error for array
    const myIndex=3
    return val[myIndex]
}
//arrow function for the same
const getMoreSearchProducts=<T>(val:Array<T>):T=>{
    //do some database operation
    const myIndex=4
    return val[myIndex]
}


//Generic Classes in Typescript
function anotherFunction<T,U extends number>(val1:T,val2:U):object{
    return {
        val1,
        val2    
    }
}

anotherFunction(12,43)
// anotherFunction(12,"43") //error

interface database{
    connection:string,
    username:string,
    password:string
}
function myFunction<T,U extends database>(val:T,val2:U):object{
    return {
        val,
        val2
    }
}
console.log(myFunction("chirag",{connection:"connected",username:"chiku",password:"here"}))


//
interface Quiz{
    name:string,
    type:string
}
interface course{
    courseCode:string
    author:string
}
class Sellable <T>{
    public cart:T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }
}
const bye:course={courseCode:"191",author:"aakar"}
console.log(typeof bye)
const myClass=new Sellable;
myClass.addToCart("Hi")
myClass.cart=["chirag","asmi"]
myClass.addToCart("Bye")
console.log(myClass)
console.log(myClass.cart)
export{}