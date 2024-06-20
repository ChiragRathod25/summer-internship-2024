// https://www.testdome.com/questions/javascript/loop/110578
function appendChildren(decorateDiv) {
    console.log("hi");
    var allDivs = document.querySelectorAll("div");
    console.log(allDivs);
    console.log(allDivs.length);
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDiv(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id="a">
    <div id="b">
    </div>
  </div>`;
//   appendChildren()
  appendChildren(function(div) {});
  console.log(document.body.innerHTML);
  