function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let sum=0;
    let num=membershipId;
    while(num.length>=2){
       for(let i=0;i<num.length;i++){
        sum=Number(num[i])+sum;
        }
       num=String(sum);
       sum=0;
     }
    return num;
  }
  
  console.log(createCheckDigit("55555"));