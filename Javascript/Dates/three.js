const event=new Date('February 25,2009 23:49:06:264')
console.log(event)

event.setDate(34)
console.log(event.getDate())


event.setMonth(8)
console.log(event.getMonth())

event.setFullYear(2015)
console.log(event)

event.setHours(10)
console.log(event);

event.setMilliseconds(239)
console.log(event);

event.setMinutes(49)
console.log(event);

event.setSeconds(58)
console.log(event);

const tenMinutes=10*60*1000
event.setTime(event.getTime()+tenMinutes)
console.log(event);


console.log("UTC")
event.setUTCFullYear(2016)
console.log(event) 

event.setUTCHours(11)
console.log(event) 

event.setUTCMilliseconds(165)
console.log(event) 

event.setUTCMonth(5)
console.log(event) 

event.setUTCSeconds(5)
console.log(event) 
