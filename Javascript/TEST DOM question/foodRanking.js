
  
function setup() {
    const btns = document.querySelectorAll('button');

    btns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const listItem = btn.parentNode;
            const list = listItem.parentNode;
            console.log(listItem)
            console.log(typeof listItem)
            console.log(list)
            console.log(typeof  list)

            if(btn.getAttribute("class") === "up") {
                const prevItem = listItem.previousElementSibling;
                if(prevItem) {
                    list.insertBefore(listItem, prevItem);
                }
            } else if(btn.getAttribute("class") === "down") {
                const nextItem = listItem.nextElementSibling;
                if(nextItem) {
                    const nextNextItem = nextItem.nextElementSibling;
                    if(nextNextItem) {
                        list.insertBefore(listItem, nextNextItem);
                    } else {
                        list.appendChild(listItem);
                    }
                }
            }
        });
    });
}
  
  // Example case
 document.body.innerHTML=`
  <ol>
    <li><button class="up">Up!</button>Taco<button class="down">Down!</button></li>
    <li><button class="up">Up!</button>Pizza<button class="down">Down!</button></li>
    <li><button class="up">Up!</button>Eggs<button class="down">Down!</button></li>
  </ol>`;
  
  setup();

//   document.getElementsByTagName('button')[2].click();
  console.log(document.body.innerHTML)
