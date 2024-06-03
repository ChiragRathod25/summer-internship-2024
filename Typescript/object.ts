function sum(obj:{x:number,y:number}):number{
    return obj.x+obj.y;
}
console.log(sum({x:4,y:5}))

function printMe(obj:{x:number,y?:string}){
    if(obj.y!==undefined){
        console.log(`Number is ${obj.x} , string is : ${obj.y} `)
    }
    else{
        console.log(`Number is ${obj.x} `);
    }
}
printMe({x:4,y:"Chirag"});
printMe({x:14});