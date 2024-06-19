// https://www.testdome.com/questions/javascript/customer-list/110585

function showCustomers(customers, targetList) {
    // Your code goes here
    for(const customer of customers){
        const li=document.createElement('li');
        const p1=document.createElement('p');
        const p2=document.createElement('p');
        p1.innerHTML=customer.name;
        p2.innerHTML=customer.email;
        li.appendChild(p1)

        p1.addEventListener('click',function(){
            // console.log(p1.innerHTML)
            p1.nextElementSibling
            if(!p1.nextElementSibling) {
                li.appendChild(p2)
            }
            else{
                li.removeChild(p2)
            }
        })
        targetList.appendChild(li)
    }
  }
  
  document.body.innerHTML = `
  <div>
    <ul id="customers">
    </ul>
  </div>
  `;
  let customers = [{name: "John", email: "john@example.com"},
                   {name: "Mary", email: "mary@example.com"}];
  showCustomers(customers, document.getElementById("customers"));
  
  let customerParagraph = document.querySelectorAll("li > p")[0];
  if(customerParagraph) {
    // console.log('clicking')
    // console.log(customerParagraph)
    customerParagraph.click();
  }
  console.log(document.body.innerHTML);