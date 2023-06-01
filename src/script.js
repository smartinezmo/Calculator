let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons");
let numberInitial;
let operationSign;
buttons.addEventListener("click", function (event) {
  const text = event.target.innerText;
  if (!Number.isNaN(+text)) {
    processNumber(text);
  } else {
    processOperation(text);
  }
});

function processNumber(number) {
  if (display.innerText == 0) {
    display.innerText = number;
  } else {
    display.innerText = `${display.innerText}${number}`;
  }
}

function processOperation(operation) {
  switch (operation) {
    case "+":
      processAritmeticOperation(operation);
      break;
    case "-":
      processAritmeticOperation(operation);
      break;
    case "*":
      processAritmeticOperation(operation);
      break;
    case "/":
      processAritmeticOperation(operation);
      break;
    case "C":
      clean(operation);
      break;
    case "<-":
      clean(operation);
      break;
    case "=":
      let numberFinal = +display.innerText;
      let result = executeOperation(numberInitial, operationSign, numberFinal);
      display.innerText = result;
      numberInitial = undefined;
      operationSign = undefined;
      break;
    default:
      break;
  }
}

function processAritmeticOperation(operation) {
  if (numberInitial != undefined) {
    numberInitial = executeOperation(
      numberInitial,
      operationSign,
      +display.innerText
    );
  } else {
    numberInitial = +display.innerText;
  }
  operationSign = operation;
  display.innerText = 0;
}

function executeOperation(numberInitial, operation, numberFinal) {
  switch (operation) {
    case "+":
      return plus(numberInitial, numberFinal);
      break;
    case "-":
      return minus(numberInitial, numberFinal);
    case "*":
      return multiplication(numberInitial, numberFinal);
    case "/":
      return division(numberInitial, numberFinal);
    default:
      break;
  }
}

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function clean(operationDelete) {
  if (operationDelete == "C") {
    display.innerText = 0;
    numberInitial = undefined;
    operationSign = undefined;
  } else if (operationDelete == "<-") {
    let text = display.innerText;
    text = text.substr(0, text.length - 1);
    if (text.length == 0) {
      display.innerText = 0;
    } else {
      display.innerText = text;
    }
  }
}
