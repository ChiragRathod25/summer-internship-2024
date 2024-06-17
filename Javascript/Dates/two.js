const start=Date.now()
// setInterval(() => {
//     console.log(Date.now())
//     console.log(Math.floor((Date.now()-start)/1000))
// }, 2000);


// Date.parse() : parse strinf representation of date, returns timestamps
console.log(Date.parse("25 October,2004 12:30:00 "))


//.Date.UTC()
const date=new Date(Date.UTC(9,2,5,10,30,45))
console.log(date);
console.log(date.toUTCString())

