const promiseOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve()
        console.log("this is promise 1")
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise one resolved");
})


promiseTwo=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve()
        console.log("this is promise 2")
    }, 1000);
}).then(function(){
    console.log("promise two resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("this is promise 3")
        resolve({username:"Chirag",Age:10})
    }, 1000);
}).then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username)
})

//resolve and reject based on conditional error
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("this is promise 4");
        let error=true;
        if(!error){
            resolve({
                username:"chirga",
                Age:10,
            })
        }
        else{
            reject("Error : Something went wrong")
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise 4 completed")
})


//handling using try catch and async await
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("this is promise 5");
        let error=false;
        if(!error){
            resolve({
                username:"chirag",
                Age:18,
            })
        }
        else{
            reject("Error : Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const responce=await promiseFive;
        console.log(responce);
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive();



