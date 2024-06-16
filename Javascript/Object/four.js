// ==> Object.prototype.isPrototypeOf() : object instace checks if this object exists in another object's prototype chain

// ==> Object.prototype.propertyIsEnumerable() :  checks property is enumerable or not 

// ==> Object.getOwnPropertyDescriptor() : get enumerable,writable,value,configurable values 

// ==> Object.prototype.hasOwnProperty() : returns false if it is inherited
// `hasOwnProperty` will only return true for direct properties

// ==> Object.prototype.toLocaleString() : returns a string representation of object

const example={}
example.prp="exists"

// console.log(example.hasOwnProperty('prp'))
// console.log(example.hasOwnProperty('toString'))

//we can change by re-implementing it
// const foo={
//     hasOwnProperty(){
//         return false;
//     },
//     prp:"hi"
// }
// console.log(foo.hasOwnProperty('prp'))
// we can call it from object using .call() function
// console.log(Object.prototype.hasOwnProperty.call(foo,'prp'))



//isPrototypeof() : from documentation
class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true

