let x:[string,number];
x=["chirag",12]
// x=[12,"chirag"]  //gives error

// console.log(x[0].charAt(5));
// console.log(x[1].charAt(2)) //it'll give error because it is type of number

// console.log(x[2]); //gives error because access outside tuple

let tUser:[string,number,boolean];
tUser=['chirag',12,true]

type user=[string,number]
let chirag:user=['chirag@ra.com',32]
let asmi:user=['asmi@a.com',21]
asmi.push('65')
asmi[0]="asmi";
console.log(chirag)
console.log(asmi[0])
// console.log(asmi[2])// it gives error that we can't access it , although we can push user types into asmi
// asmi.push(true)  