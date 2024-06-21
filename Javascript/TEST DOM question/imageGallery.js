// https://www.testdome.com/questions/javascript/image-gallery/76533

function setup() {
    // Write your code here.
    const btns=document.getElementsByClassName('remove');
    for(const btn of btns){
        btn.addEventListener('click',function(){
            // console.log(btn.parentElement);
            // console.log("hi");
            btn.parentElement.remove();
        });
    }

  }
  
  // Example case. 
  document.body.innerHTML = `
  <div class="image">
    <img src="https://bit.ly/3lmYVna" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
  setup();
  
  document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);