"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Chirag",
    email: "Chiku@chirag.com",
    isActive: true
};
function createUser(obj) {
    // return true;
    console.log(obj);
    // return obj
}
console.log(createUser({ name: "chirag", isPaid: true }));
function createCourse() {
    return { name: "myCourse", price: 399 };
}
//bad behaviour of typescript
// createUser({name:"Chirag",isPaid:false,email:"chiea@ku.com"}) //it gives error
// but if 
var userdetailes = { name: "Chirag", isPaid: false, email: "chiea@ku.com" };
createUser(userdetailes); //it will not give me error
