function swapElements(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function initialize() {
  const buttons = document.querySelectorAll("button");
  //   console.log(buttons);
  //   const arrayOfBtns = Array.from(buttons);
  //   console.log(arrayOfBtns);
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const task = event.srcElement.parentElement.children[0].innerHTML;
      //   console.log(toDo.indexOf(task));

      const classofBtn = event.srcElement.getAttribute("class");

      let temp = toDo.indexOf(task);
      if (classofBtn === "upButton") {
        if (temp > 0) {
          try {
            swapElements(toDo, temp, temp - 1);
          } catch (error) {
            console.log(`Error while swaping for Up Button`);
          }
        }
      } else {
        if (temp < toDo.length) {
          try {
            swapElements(toDo, temp, temp + 1);
          } catch (error) {
            console.log(`Error while swaping for Down Button`);
          }
        }
      }
      reArrange();
    });
  });
}

let toDo = ["Prepare presentation", "Read emails", "Monthly report","Mail to Milan bhai"];
function reArrange() {
  document.querySelector("body").innerHTML = "";
  for (const DO of toDo) {
    let divParent = document.createElement("div");

    //upBtn creation
    const upBtn = document.createElement("button");
    upBtn.setAttribute("class", "upButton");
    upBtn.setAttribute("type", "button");
    upBtn.innerHTML = "&uarr;";

    //downBtn creation
    const downBtn = document.createElement("button");
    downBtn.setAttribute("class", "downButton");
    downBtn.setAttribute("type", "button");
    downBtn.innerHTML = "&darr;";

    let span = document.createElement("span");
    span.innerHTML = DO;
    divParent.appendChild(span);
    let index = toDo.indexOf(DO);
    // console.log(DO);
    // console.log(index);
    if (index === 0) {
      divParent.appendChild(downBtn);
      // console.log(divParent)
    } else if (index === toDo.length - 1) {
      divParent.appendChild(upBtn);
      //   console.log(divParent)
    } else {
      divParent.appendChild(upBtn);
      divParent.appendChild(downBtn);
    }
    document.querySelector("body").appendChild(divParent);
  }
  initialize();
}
reArrange();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

//   console.log(document.body.innerHTML);
