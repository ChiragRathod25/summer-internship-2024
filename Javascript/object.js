const a=["chirag","Himanahu","Milan"];
a[100]="Prerna";
// console.log(a);
// console.log(a.length);
// console.log(a[21]);
// console.log(typeof a[21]);


a.push({name:"chirag",friend:"Yuvi"});
console.log(a[101].name);
console.log(a.length);

const babies=["dogs","cats","peocock"];
const baby=babies.map((name)=>`baby ${name}`);
console.log(babies)
console.log(baby)