// https://www.testdome.com/questions/javascript/closest-relative/110586


/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */
function closestRelative(parent, relativeName) {
    
    let queue=Array.from(parent.children);
    while(queue.length>0){
        let current=queue.shift() ;//first element
        if(current.tagName.toUpperCase()===relativeName.toUpperCase()){
            return current;
        }
        queue.push(...Array.from(current.children))
    }
    return null;
  }

// Example case
document.body.innerHTML =
  "<James>" +
  "<Dave></Dave>" +
  "<Mike>" +
  "<chirag>" +
  "</chirag>" +
  "</Mike>" +
  "<Sarah></Sarah>" +
  "</James>";

let parent = document.getElementsByTagName("James")[0];

let relative = closestRelative(parent, "Mike");
console.log(relative && relative.tagName); // prints MIKE
