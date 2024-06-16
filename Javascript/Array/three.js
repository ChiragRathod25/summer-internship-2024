// .map() : creates new array populated with the result of calling function
// .pop() : to remove last element      
// .push() : to push multiple or single elemets into the array 
// .reduce() : to make sum with initial,accumulator and index values
// .reverse() : to reverse array 
// .shift() : to remove first Element of array , it will change original array 
// .slice() : to make separate array from defined range or number 
// .some() : to test whether at least one element in the array passes the test implemented by the provided funcion 
// .sort() 
// splice() : to change the contents of an array by removing or replacing existing elements and or add new elements 
// .toLocaleString() : returns a string representing the elements of the array 
// .unshift() : add elements at the beggining of the array 
// .value() : returns a new iterator Object, that iterates the value of each item 
// .with() : changes the value of given index and returs a new array 

//now this is some methods which doesn't change main array but it creates a new array from it
// .toReversed()
// .toSorted()
// .toSpliced()
// .toString()





// .slice()
const collegues=["Chirag","Mahek","Himanshu","Srishti","Ayush","utsav"]
console.log(collegues.slice(1))
console.log(collegues.slice(1,4))

// .some()
const array=[1,2,3,4,5]
const odd=(element)=>element%2!==0
console.log(array.some(odd))

// to check value exist in a array or not 
function checkAvailability(arr,val){
    return arr.some((element)=>element===val)
}
console.log(checkAvailability(collegues,"Dakshil"))
console.log(checkAvailability(collegues,"Mahek"))


// .sort()
const numbers = [3, 1, 4, 1, 5];
// console.log(numbers.sort())
// console.log(numbers.sort((a,b)=>a-b))  //ascending
// console.log(numbers.sort((a,b)=>-a+b))  //descending


// .splice() 
console.log(collegues)
collegues.splice(1,0,"Chandresh")   // insert one element at first index
console.log(collegues)
collegues.splice(4,1,"Chirag")   //replace 1 element starting from 4th index  
console.log(collegues)
collegues.splice(4,0,"Nisharg")   //insert 1 element starting from 4th index  
console.log(collegues)
collegues.splice(collegues.length,1,"At last")
console.log(collegues);


// .toLocaleString()
console.log(collegues.toLocaleString())

// .value()
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// .with()
console.log(array)
console.log(array.with(2,"chirag"))