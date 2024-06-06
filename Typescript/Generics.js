"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function identityOne(val) {
    return val; //here we have to typecheck for either number or boolean and for all other
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("Three");
identityThree(3);
function identityFour(val) {
    // console.log(val.length) //e.g. type number doesn't have this so it gives error
    return val;
}
console.log(identityFour({ brand: "chirag", type: 5 }));
//generics for array 
function getSearchProdutcs(val) {
    // console.log(val.length) //no error for array
    var myIndex = 3;
    return val[myIndex];
}
//arrow function for the same
var getMoreSearchProducts = function (val) {
    //do some database operation
    var myIndex = 4;
    return val[myIndex];
};
//Generic Classes in Typescript
function anotherFunction(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
anotherFunction(12, 43);
function myFunction(val, val2) {
    return {
        val: val,
        val2: val2
    };
}
console.log(myFunction("chirag", { connection: "connected", username: "chiku", password: "here" }));
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
var bye = { courseCode: "191", author: "aakar" };
console.log(typeof bye);
var myClass = new Sellable;
myClass.addToCart("Hi");
myClass.cart = ["chirag", "asmi"];
myClass.addToCart("Bye");
console.log(myClass);
console.log(myClass.cart);
