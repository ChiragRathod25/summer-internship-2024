function avg (...arg){
    //console.log(arg);
    let sum=0;
    for(args of arg){
        sum+=args;
    }
    return (sum/arg.length);
}

console.log(avg(4,5,6,7))


//function declaration using arrow
const average=(...arg)=>{
    let sum=0;
    for(const args of arg){
        sum+=args;
    }
    // console.log(arg.length)
    return sum/arg.length;
}

const q1=average(14,15,16);
console.log(q1);

//without return statement for one line
const sum=(a,b,c)=> a+b+c;
console.log(sum(45,18,7));

//function declaration and calling immediately
(function (...arg){
    let sum=0;
    for(args of arg){
        sum+=args;
    }
    console.log((sum/arg.length).toFixed(2))
    // return sum/arg.length;
})(45,18,7);
