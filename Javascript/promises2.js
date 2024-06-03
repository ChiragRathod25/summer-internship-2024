//get data from internet using API
async function getAllUsers(){
    try{

        const responce=await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(responce);
        const data=await responce.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
// getAllUsers()


// get data using .then and .catch
fetch("https://jsonplaceholder.typicode.com/users").then((responce)=>{
    console.log(responce)
    return responce.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})