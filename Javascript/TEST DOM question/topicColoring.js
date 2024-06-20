// https://www.testdome.com/questions/javascript/topic-coloring/110576

function newMessage(topicName) {
    const tag=document.querySelectorAll('p');
    const arrTag=Array.from(tag)
    for(const ele of arrTag){
        const target=ele.getAttribute("data-topic-name")
        if(target==topicName){
            console.log(target)
            ele.setAttribute("style","background-color:red;")
        }
    }
    
  }
  
  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);