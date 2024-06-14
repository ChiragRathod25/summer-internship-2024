// Object.create()
//object.entries()
// Object.defineProperties()
// Object.defineProperty() 
// Object.groupBy()
// Object.assign()
// using null protoType Object



console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
// const obj={
//     __proto__,

// }
const chirag = "hi";
console.dir(chirag.__proto__);
// console.dir(obj.__proto__)

var theProtoObj = {}; // assuming this is defined somewhere
var handler = {}; // assuming this is defined somewhere

const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};

const myobj = new Object({ name: "asmi" });
console.log(myobj.name);
myobj.name = "chirag";
console.log(myobj);

Object.defineProperty(myobj, "age", { value: 20 });
console.log(Object.getOwnPropertyDescriptor(myobj, "age"));
console.log(Object.getOwnPropertyDescriptor(myobj, "name"));

const obj1 = {};
const obj2 = Object.create(null);
console.log(`normal object is ${obj1}`);
// console.log(`null object is ${obj2}`)
obj1.valueOf();
// obj2.valueOf()   //error null prototype

// ++++++++++++++++++++++++++++
const ages = { chirag: 21, asmi: 15 };

function getAge(name) {
  return ages[name];
}
function hasAge(name) {
  return name in ages;
}

console.log(hasAge("hasOwnProperty"));
console.log(getAge("toString"));

// +++++++++++++++++++++++++++++
// using null protoType Object
const nullObject = Object.create(null, {
  chirag: { value: 21 },
  asmi: { value: 17 },
});

function nullGetAge(name) {
  return nullObject[name];
}
function nullHasAge(name) {
  return name in nullObject;
}
console.log(nullHasAge("hasOwnProperty"));
console.log(nullGetAge("toString"));

//++++++++++++++++++++++++
// Object.groupBy()
//it supported by browser but not available in node environment
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  // const groupBydata=Object.groupBy(inventory,({type})=>type)


///////////////////
// Object.assign()
const one={a:1,b:3}
const two={c:3,d:4}
const three={
   obj1:{
    e:5,
    f:6
   },
  obj2: {
    g:7,
    h:8
   }
}
console.log(one)
console.log(two)
console.log(three)
Object.assign(one,two,three)   
console.log(one.obj1)



/////////////////////
// Object.create()
function shape(){
    this.x=0;
    this.y=0;
}
function Rectangle(){
    shape.call(this);
}
Rectangle.prototype=Object.create(shape,{
    constructor:{
        value:Rectangle,
        Writable:true,
        enumerable:false,
    }
})
const rect=new Rectangle()
const sh=new shape()
console.log(rect instanceof Rectangle)
console.log(rect instanceof shape)
console.log(sh instanceof shape)
console.log(sh)


////////////////////
// Object.defineProperties() //for multiple properties
// defineProperties("<objectName>",{"propertyName":{<properti defination>},"anotherPropertyName":{}})


// Object.defineProperty()  //for single property - syntax difference between both
// defineProperty("<Objectname>","<propertyName>","<{property defination}>")

// value: 'chirag',
// writable: true,
// enumerable: true,
// configurable: true ==> the property descriptor type can be changed and the property can be deleted from the object. If false, the property cannot be deleted or configured.


// +++++++++++++++++++++++
// Object.entries() -- converts to array, which contains sub array with key and value
console.log(one)
console.log(Object.entries(one))
for(const [key,value] of Object.entries(one))
    console.log(`Key : ${key} , value : ${value}`)

console.log(Object.entries("chirag"))

// ==>Object to map conversation
const newMap=new Map(Object.entries(one))
console.log(newMap)

Object.entries(one).forEach(([key,value])=>{
    console.log(`Key : ${key} , value : ${value}`)
})


