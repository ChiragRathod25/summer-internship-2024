function printId(id:string|number){
    if(typeof id==="string"){
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(32);
printId("37chirag");


//another example
function welcomeMessage(x:string[]|string){
    if(Array.isArray(x)){
        console.log(`x is an array`);
        console.log(x);
    }
    else{
        console.log(`x is string`)
        console.log(x.toLowerCase());
    }
}
welcomeMessage(['chirag','asmi'])
welcomeMessage('CHIRAG')