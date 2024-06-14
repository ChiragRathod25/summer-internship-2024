console.log("hi");
const btns = document.querySelectorAll(".btn");
let expression;
let previousexpression;
let expressionAnswer;
let answer;
let expressionHistory = new Map();
let historyContainer = document.querySelector(".historyContainerTable");
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
    if (!expressionHistory[expression]) {
      answer = eval(expression);
      console.log(typeof answer);
      if (typeof answer === "number") {
        expressionAnswerField.innerHTML = answer.toFixed(2);
        console.log(expressionAnswerField.innerHTML);
        expressionHistory[expression] = answer;
        console.log(expressionHistory);
        updateHistory()
        expression = undefined;
      }
    } else {
      answer = expressionHistory[expression];
      expressionAnswerField.innerHTML = answer.toFixed(2);
      expression = undefined;
    }
  } catch (error) {
    expressionAnswerField.innerHTML = "Enter valid expression";
    expression = undefined;
    answer = undefined;
  }
  console.log(answer);
}

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
    } else if (value === "⨞") {
      try {
        let temp = expression.substring(0, expression.length - 1);
        expression = temp;
        if (expression) expressionField.innerHTML = expression;
        else expressionField.innerHTML = 0;
        console.log(`Expression : ${expression}`);
      } catch (error) {
        console.log(error);
      }
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

function updateHistory() {
  console.log(expressionHistory);
  const temmpNode=document.createTextNode=`<tr class="expressionValue">
                                  <th class="expression">Expression</th>
                                  <th class="exValue">Answer</th>
                                </tr>`
  historyContainer.innerHTML=temmpNode
  console.log(
    Object.entries(expressionHistory).forEach(([key, value]) => {
      const exVal = document.createElement("tr");
      exVal.setAttribute("class", "expressionValue");

      const expre = document.createElement("td");
      expre.setAttribute("class", "expression");
      expre.innerHTML = `${key}`;

      const val = document.createElement("td");
      val.setAttribute("class", "exValue");
      val.innerHTML = `${value.toFixed(2)}`;

      console.log(expre);
      console.log(val);
      exVal.appendChild(expre);
      exVal.appendChild(val);
      console.log(exVal);

      historyContainer.appendChild(exVal);
    })
  );
}


