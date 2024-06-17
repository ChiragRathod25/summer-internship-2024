const date=new Date()
console.log(date);
console.log("Day : ",date.getDay()); //day of the week, sunday=0,monday=1,...
console.log("Date : ",date.getDate());
console.log("Month : ",date.getMonth());
console.log("Year : ",date.getFullYear());
console.log("Hours : ",date.getHours());
console.log("Minute : ",date.getMinutes());
console.log("Second : ",date.getSeconds());
console.log("Mili Seconds : ",date.getMilliseconds());  //returs milli seconds according to local time
console.log("Milli Seconds : ",date.getTime())  //millisecond count from 1 Jan,1970

console.log("TimeZone Offset : ",date.getTimezoneOffset())  //differece in minutes in local time and UTC time


console.log("UTC Date : ",date.getUTCDate())
console.log("UTC Day : ",date.getUTCDay()) //day of the week as per UTC
console.log("UTC Year :",date.getUTCFullYear())
console.log("UTC Hour :",date.getUTCHours())
console.log("UTC Minutes :",date.getUTCMinutes())
console.log("UTC Month :",date.getUTCMonth())
console.log("UTC Second :",date.getUTCSeconds())
console.log("UTC MS :",date.getUTCMilliseconds())


const date1=new Date("2004-11-25")  //initialization for month : 10
console.log(date1)
console.log(date1.getDate())
console.log(date1.getMonth())

const date2 = new Date("October 25, 2004 01:30:00 UTC");
console.log(date2)
console.log(date2.getTimezoneOffset())

const date3=new Date(2007,8,2,5,30,26,726)
console.log(date3);