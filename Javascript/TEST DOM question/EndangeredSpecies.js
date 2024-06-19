// https://www.testdome.com/questions/javascript/endangered-species/114587

function endangeredSpecies(continent) {
    // Your code goes here
    const tag=document.querySelectorAll('li')
    const newMap=new Map();
    let tags=Object.entries(tag)
    tags.forEach(([key,value])=>{newMap[value.getAttribute("data-continent")]=value.innerHTML})
      return newMap[continent]
  }
  
  // Example case
  document.body.innerHTML =
  `<div>
      <ul>
          <li data-continent="North America">California condor</li>
          <li data-continent="Europe">Cave bear</li>
      </ul>
  </div>`;
  
  console.log(endangeredSpecies("North America")); // should print 'California condor'