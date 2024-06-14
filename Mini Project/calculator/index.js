console.log("hi");
const btns = document.querySelectorAll(".btn");
let expression;
let previousexpression;
let expressionAnswer;
let answer;
let expressionHistory = new Map();
let expressionField = document.querySelector(".expression");
let expressionAnswerField = document.querySelector(".answer");

console.log(expressionField);
console.log(expressionAnswerField);

function resetExpression() {
  expression = undefined;
  expressionField.innerHTML = 0;
  expressionAnswerField.innerHTML = 0;
}
function updateExpressionField() {
  try {
    if(!expressionHistory[expression]){
        answer = eval(expression);
        console.log(typeof answer);
        if (typeof answer === "number") {
            expressionAnswerField.innerHTML = answer.toFixed(2);
            console.log(expressionAnswerField.innerHTML);
            expressionHistory[expression] = answer;
            console.log(expressionHistory)
            expression=undefined
        }
    }
    else{
        answer=expressionHistory[expression]
        expressionAnswerField.innerHTML = answer.toFixed(2);
        expression=undefined
    }
  } catch (error) {
    expressionAnswerField.innerHTML = "Enter valid expression";
    expression = undefined;
    answer = undefined;
  }
  console.log(answer);
}

function getHistory() {}

for (const buttons of btns) {
  buttons.addEventListener("click", function (e) {
    const value = buttons.getAttribute("value");
    // console.log(e)
    console.log(value);
    if (value === "=") {
        // console.log(expression)
    
      updateExpressionField();
    } else if (value === "reset") {
      resetExpression();
      console.log(`Expression : ${expression}`);
    } else {
      if (!expression) {
        expression = value;
      } else {
        expression += value;
      }
      expressionField.innerHTML = expression;
      console.log(`Expression : ${expression}`);
    }
  });
}
