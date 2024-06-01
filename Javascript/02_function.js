// //recursive function
// const charsInBody=(function counter(elm){

    
//     if(elm.nodeType===3){
//         console.log(elm.nodeValue);
//         return elm.nodeValue.length;
//     }
//     let count=0;;
//     for(let i=0,child;(child=elm.childNodes[i]);i++){
//         count+=counter(child);
//     }
//     console.log(count)
//     return count;

// })(document.body);




//nesting of function
(function parent(){
    console.log(`this is parent function`);
    const a=5;
    function children(){
        console.log(`This is child function`);
        const b=10;
        console.log(a+b);
    }
    console.log(a);
    children();
})()