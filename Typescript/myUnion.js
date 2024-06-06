"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
var chirag = {
    //for user
    name: "chirag",
    id: 123
};
console.log(chirag);
chirag = {
    //for admin
    username: "CR",
    id: 132
};
console.log(chirag);
// function getDbId(id:number|string){
//     //making some API calls
//     console.log(`DB id is : ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        console.log(id.toLocaleLowerCase());
    }
    else {
        id.toFixed(2);
    }
}
//arry defined only for number
var data = [12, 465, 6];
var data1 = ['chirag', 'asmi', 'ru'];
console.log(data);
console.log(data1);
//not allowed
// const data3:string[]|number[]= [1,2,"3"]
//to allow both
var data4 = [1, 2, "3"];
console.log(data4);
