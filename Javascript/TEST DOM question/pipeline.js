// https://www.testdome.com/questions/javascript/pipeline/110582

function pipeline(...funcs) {

    // console.log(funcs[0]);
    return (arg) => {
      for(const func of funcs){
        // console.log(func(arg));
        arg= func(arg);
      }
      return arg;
    }
  }
  
  let fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
  console.log(fun(3)); // Should print 5