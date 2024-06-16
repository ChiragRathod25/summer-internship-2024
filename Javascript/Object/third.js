// ==> Object.isExtensible() : static method determines if an object is extensible
// ==> Object.preventExtensions() : to prevent extensible 
// ==> Object.isFrozen() : check object is not frozen or not 
// ==> Object.is() : method determines whether two values are same or not
// ==> Object.setPrototypeOf() : to set protorype of one object to another object 



// console.log(Object.is(null,null))
// console.log(Object.is(undefined,undefined))
// console.log(Object.is(true,true))
// console.log(Object.is(false,false))

// console.log(Object.is({},{})) //false 
// const obj1={}
// const obj4=obj1
// const obj2={}
// const obj3={name:"chirag"}
// console.log(Object.is(obj1,obj2))  //false
// console.log (Object.is(obj3,{name:"chirag"}))  //false  
// console.log (Object.is(obj1,obj4))  //true --> bcs of  same referance

// console.log(Object.is("chirag","chirag"))
// console.log(Object.is(NaN,NaN))
// console.log(Object.is(-0,0))



// ==> Object.isExtensible() : static method determines if an object is extensible
// ==> Object.preventExtensions() : to prevent extensible  
// if we prevent isExtensible then we can't add prototype ot that funciton 
// Sealed objects are by definition non-extensible.
// Frozen objects are also by definition non-extensible.
// Object.seal();
// isSealed - not extensible, propertied are non-configurable and therefore non-removable(doesn't mean non-writable)

// Object.freeze();
const two={
    name:"chirag"
}
console.log(Object.isExtensible(two))
Object.preventExtensions(two)
console.log(Object.isExtensible(two))


// Object.isFrozen() - check if object is frozen or  not : refer documentation for this
// frozen means all properties are not configurable and all data properties are not writable 
// if we prevent extensible then object is fronzen
const one={
    name:'chirag'
}
console.log(Object.isFrozen(one))
Object.freeze(one)
console.log(Object.isFrozen(one))
