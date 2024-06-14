//==> object.freeze() -- we can freeze of to be changes,delete,update , also applies for instance of object like array,function,etc
//==> Object.isFrozen()
//==> deepfreeze()
// ==>The Object.fromEntries() static method transforms a list of key-value pairs into an object.
// ==> Object.getOwnPropertyDescriptor()
// ==> Object.getOwnPropertyDescriptors() : object
// ==> Object.getOwnPropertyNames(object1) 
// ==> Object.getOwnPropertySymbols() - return all symbol properties in form of array
// ==> Object.getPrototypeOf()  -- returns protoType of given object
// ==> Object.groupBy()  : to group object in some group by condition
// ==> The Object.hasOwn() : returns true if the specified object has the indicated property as its own property. 
const user={
    name:{
        fname:"Chirag",
        lname:"Rathod"
    },
    age:21
}
Object.freeze(user)
user.age=20; //doesn't give error, but not modified
// console.log(user)
user.name.fname="Sristi"  //it modifies properties of inside obejct and function, to prevent this behaviour of JS we have to use deepfreeze
// console.log(user)

// Object.deepfreeze(user)
function deepfreeze(object){
    const objKeys=Object.keys(user);

    for(const name of objKeys){
        const value =object[name]
        if((value && typeof value=="object")||(value && typeof value=="function")){
            deepfreeze(value)
        }
    }
    return Object.freeze(object);
}


deepfreeze(user)
user.name.fname="chirag" //it doesn't give error, but bcs it is deepfreeze it can't be modifies
// console.log(user)


// ++++++++++++++++++++++++++/////////////////
//  Object.fromEntries() 
const arr=[[54,79],[35,12]]

const newMap=new Map(arr)

// console.log(newMap)
// console.log(Object.keys(arr))
const obj=Object.fromEntries(arr)
// console.log(obj)

const object1={a:1,b:2,c:3}
// console.log(Object.entries(object1))
// console.log(object1)
// const object2=Object.fromEntries(
    // Object.entries(object1).map(([key,value])=>[key,value*2])
// )
// console.log(Array.isArray(Object.entries(object1).map(([key,value])=>[key,value*2])))
// console.log(Object.entries(object1).map(([key,value])=>[key,value*2]))
// console.log(object2)


// +++++++++++++++++++++++++++++++++
// Object.getOwnPropertyDescriptor(objname,propName) : object
console.log(Object.keys(Object.getOwnPropertyDescriptors(object1)))
console.log(Object.getOwnPropertyNames((Object.getOwnPropertyDescriptors(object1))))
console.log(Object.getOwnPropertyNames("chirag"))


// ++++++++++++++++++++++++++++
// Object.getOwnPropertyNames(object1)  -- > it will also return enumerable: false
// keys -- > don't return enumerable: false,
const myObj2=Object.create({},{name:{value:"Chirag", enumerable: false,},age:{value:21,enumerable:true}})
console.log(Object.getOwnPropertyNames(myObj2))
console.log(Object.keys(myObj2))

// get only non enumerable properties
function getNotenumerableProperties(obj){
    const all=Object.getOwnPropertyNames(obj)
    const onlyEnumerable=Object.keys(obj)
    let onlyNotEnumerable=new Array();
    all.forEach((item)=>{
        if(!onlyEnumerable.includes(item)) onlyNotEnumerable.push(item)
    })
    console.log(onlyNotEnumerable)
}
getNotenumerableProperties(myObj2)


// **************************

console.log((Object.getPrototypeOf(myObj2)))



// ++++++++++++++++++++
// `hasOwn` will only return true for direct properties:
// The Object.hasOwn() 
const example={} ;
example.prop = "exists";
console.log(Object.hasOwn(example,"prop"))
console.log(Object.hasOwnProperty(example,"toString"))
// in operator 
console.log("prop" in example)
console.log("toString" in example)
console.log("hasOwnProperty" in example)

// --check for array index exist or not 
console.log(arr)
console.log(Object.hasOwn(arr,3))
console.log(Object.hasOwn(arr,0))

const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); // true - works irrespective of how the object is created.
}


