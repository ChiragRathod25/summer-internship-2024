"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase();   //not possible
    // return "Hello";
    return num + 2;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("4"));
function signUpUser(name, email, isPaid) {
    return "Hello";
}
console.log(signUpUser("chirag", "chiku@chirag.com", true));
var loginUser = function (name, age) {
    if (age === void 0) { age = 20; }
};
// loginUser("Chirag"); //error before default value
loginUser("Chirag"); //no error after default value
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return s;
};
console.log(getHello("5"));
//it mean that it is not returning anything, returns void
function consoleError(err) {
    console.log(err);
}
//it'll never return value, used to throw and exception or to terminates the execution of program
function handleError(err) {
    throw new Error(err);
}
consoleError("this is error");
handleError("Error message by system");
