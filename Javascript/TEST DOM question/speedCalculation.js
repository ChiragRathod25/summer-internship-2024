//https://www.testdome.com/questions/javascript/game-platform/116858

function calculateFinalSpeed(initialSpeed, inclinations) {
    // Your code goes here
    let speed=initialSpeed;
    inclinations.forEach((sp)=>{
        if(sp>0) {speed-=sp
            if(speed<0) speed=0;
          }
        else {
            speed+=(-1*sp)
        }
     //console.log(speed)
    })
    return speed;
  }
  
  console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));