// Math Expression

// https://www.testdome.com/questions/javascript/math-expression/114941

// You are working on a calculator application where users can input a mathematical expression such as: (35) (2-4).
// Tags
// καναίετιμε Αν Code leview
// To correctly evaluate this expression, the application needs to validate the expression and ensure that the parentheses are balanced. The balanced porentheses are for determining the order of operations and evaluating the expression correctly.
// Data Structures New
// Public Baby
// You have used an Al assistant to generate the following furiction to check if the parentheses in an expression are balanced
function isBalanced(parentheses) {
let stack =[];
let opening =new Set('[', '(','{');
let closing =new Set('}',')', ']');
let pairs={
')':'(',
']':'[',
'}':'{'
}
for (let c of parentheses) {

    if(opening.has(c))
        stack.push(c)
else if (closing.has(c)) {
    
    if (stack.length===0 || stack[stack.length-1] !== pairs[c])
        return false;
    stack.pop();
}
}
return stack.length===0;
}

console.log(isBalanced("(3+5)*(2-4)"));