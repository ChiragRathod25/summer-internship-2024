// .concat() : take parameters and returns a new array 
// .at() : take index as value and returns value at that index else undefined
// .copyWithin() : to copy from one index to another or to shift array, paramteres : target,start,end
// .entries() : returns array iterator object which contains key/value pair for each index of array
// .every() : to check every entry of an array pass the test of given function : returns true or false
// .fill() : changes all elements within a range of  indices
// .filter() : filter elements that passes test given by function 
// .find() : returns first element that finds in array else return `undefined`
// .findIndex() : returns index of first element of array that satisfies given function condition 
// similarly .findLast() and .findLastIndex() methods of array
// .flat() : flate sub array to main array upto defined level 
// .flatMap() : similar to .map(...).flat() , short hand for defined heirarchy for falt level 1
// .forEach() : iterate through all the elements of array 
// .includes() : to check array includes certain value or not 
// .indexOf() : returns the first index at which a given element can be found
// .join() : create and returns a new string by concating all of the elements in the array  



const arr=[21,312,5612]
// console.log(arr.at(-4))

// console.log(arr.copyWithin(2))  //shift right 2 positions
// console.log(arr)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5,21,54].copyWithin(0, 3, 5));


//.entries()
const iterator1=arr.entries()
console.log(iterator1.next())
console.log(iterator1.next().value)

for(const element of arr.entries()){
    console.log((element));
}

//.every()
const everyFun=function (num){
    
    return num>=21?num:null
}
console.log(arr.every(everyFun))

// check one array is subset of another
const checkSub=(array1,array2)=>(array2.every((element) => array1.includes(element))) //checks array2 is subset of array1 or not

console.log(checkSub([12,34,43],[43,12]))
console.log(checkSub([12,34,43],[43,12,54]))

//.fill() - mutating method
const array1=[4,1,53,13,21]
console.log(array1.fill(2))
console.log(array1.fill(67,2))  //fill with 67 starting from index 2
console.log(array1.fill(37,2,4)) //fill withb 37 from index 2 to 4
console.log(array1)

// create matrix of all 1
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
    // console.log(arr[i])
  }
  console.log(arr)

// .filter() 
function isBigEnough(num){
    return num>25;
}
console.log(array1.filter(isBigEnough))

// search through array using .filter()
const fruit=["apple","banana","mango","watermelon","grapes"]
function filterElements(arr,query){
    return arr.filter(el=>(el.toLowerCase().includes(query.toLowerCase())))
}
console.log(filterElements(fruit,"ap"))


// .find() -- find object in array by one of it's property
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
console.log((inventory.find((item)=>item.name==="apples")))

// .findIndex() : 
console.log([1, , 3].findIndex((x) => x === undefined));


//.flatMap()
const fname=["Chirag Ranjitsinh Rathod","Asmita Ranjitsinh Rathod"]
console.log(fname.map((x)=>x.split(" ")))
console.log(fname.map((x)=>x.split(" ")).flat())
console.log(fname.flatMap((x)=>x.split(" ")))


// .join() 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

console.log(matrix.join())
console.log(matrix.join('||'))