// Array.of() : create array from arguments 
// Array.from() : create array from iterable object like array 

const fruits = [];
fruits.push("banana", "apple", "peach");
// console.log(fruits.length); 
// fruits[5] = "mango";
// console.log(Object.keys(fruits))
// fruits.length=10;
// console.log(fruits)
// fruits.length=2;
// console.log(fruits)
// console.log(fruits.length)

const colors = ["red", "yellow", "blue"];
colors[6]="white"
// console.log(colors)
// console.log(colors.length)
// colors.reverse()
// console.log(colors)

//Array methods
// ==> Array.from() : create array from iterable or array-like object
console.log(Array.from("chirag"))
console.log(Array.from([2,4,6],(item)=>(item/2)))


//from set to Array
const newSet=new Set(["Chirag","asmi",37,21])
console.log(newSet)
console.log(Array.from(newSet))

//from Map to Array
const newMap=new Map([
    [21,43],
    [21,54],
    [12,43],
    [423,54]
])
console.log(newMap)
console.log(Array.from(newMap))
console.log(Array.from(newMap.keys()))
console.log(Array.from(newMap.values()))


//array from nodelist
// const img=document.querySelector('.img')
// const sources=Array.from(img,(images)=>images.src)

// Array from an array like Object 
function makeArray(){
    return Array.from(arguments);
}
console.log(makeArray(21,37,41))


//generate ABCD into array
const range=(start,stop,steps)=>{
    return Array.from({length:(stop-start)/steps+1},(v,i)=>start+i*steps)
}
console.log(range(20,50,1))
console.log(range("A".charCodeAt(0),"Z".charCodeAt(0),1).map((x)=>String.fromCharCode(x)))


//Array.fromAsync() -- handles async iterable object
const asyncIterable=(async function*(){
    for(let i=0;i<5;i++){
        await new Promise((resolve)=>setTimeout(resolve,10*i))

    }
})()

Array.fromAsync(asyncIterable).then((array)=>console.log(array))


