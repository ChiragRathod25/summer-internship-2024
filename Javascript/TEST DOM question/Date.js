// https://www.testdome.com/questions/javascript/date/76471 

function formatDate(userDate) {
  const mydate = new Date(userDate);
  const year = mydate.getFullYear();
  const month = mydate.getMonth() + 1;
  const date = mydate.getDate();
  const arg=year.toString()+month.toString().padStart(2,"0")+date.toString().padStart(2,"0");
  return arg;
}

console.log(formatDate("12/5/2014"));
