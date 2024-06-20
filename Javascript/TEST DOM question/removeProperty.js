// https://www.testdome.com/questions/javascript/remove-property/76546

function removeProperty(obj, prop) {
    if(obj.hasOwnProperty(prop)){
        delete obj[prop]
        return true;
    } 
    return false;
   
  }
