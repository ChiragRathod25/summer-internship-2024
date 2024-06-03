function sum(obj) {
    return obj.x + obj.y;
}
console.log(sum({ x: 4, y: 5 }));
function printMe(obj) {
    if (obj.y !== undefined) {
        console.log("Number is ".concat(obj.x, " , string is : ").concat(obj.y, " "));
    }
    else {
        console.log("Number is ".concat(obj.x, " "));
    }
}
printMe({ x: 4, y: "Chirag" });
printMe({ x: 14 });
