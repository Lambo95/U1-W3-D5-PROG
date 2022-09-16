//METODO CON EVAL VISTO IN CLASSE

// function writeToDisplay(element) {
//   document.getElementById("display").value += element;
// }

// function showResult() {
//   let result = eval(document.getElementById("display").value);
//   document.getElementById("display").value = result;
// }

function deleteDisplay() {
  document.getElementById("display").placeholder = "0"; // Da ora in poi, placeholder è '0'
  document.getElementById("display").value = ""; // Stringa vuota
}

//METODO SENZA EVAL

//PROVA PRIMO METODO (NON FUNZIONA)

//let text;
// let values;
// let result;

// function writeToDisplay(element) {
//   text = document.getElementById("display").value += element;
//   return text;
// }

// function operation(text) {
//   let values;
//   let result;
//   if (values === text.split("+")) {
//     result = parseFloat(values[0]) + parseFloat(values[1]);
//     return result;
//   } else if (values === text.split("-")) {
//     result = parseFloat(values[0]) - parseFloat(values[1]);
//     return result;
//   } else if (values === text.split("*")) {
//     result = parseFloat(values[0]) * parseFloat(values[1]);
//     return result;
//   } else if (values === text.split("/")) {
//     result = parseFloat(values[0]) / parseFloat(values[1]);
//     return result;
//   }
// }

// function showResult(result) {
//   result = operation(document.getElementById("display").value);
//   document.getElementById("display").value = result;
// }

//PROVA SECONDO METODO (NON FUNZIONA)

// function operationSum(text) {
//   let values;
//   if ((values = text.split("+"))) {
//     let result = parseFloat(values[0]) + parseFloat(values[1]);
//     return result;
//   }
// }
// function operationSub(text) {
//   let values;
//   if ((values = text.split("-"))) {
//     let result = parseFloat(values[0]) - parseFloat(values[1]);
//     return result;
//   }
// }
// function operationDiv(text) {
//   let values;
//   if ((values = text.split("/"))) {
//     let result = parseFloat(values[0]) / parseFloat(values[1]);
//     return result;
//   }
// }
// function operationMol(text) {
//   let values;
//   if ((values = text.split("*"))) {
//     let result = parseFloat(values[0]) * parseFloat(values[1]);
//     return result;
//   }
// }

// function showResult(result) {
//   result = operationSum(document.getElementById("display").value);
//   document.getElementById("display").value = result;
//   result = operationSub(document.getElementById("display").value);
//   document.getElementById("display").value = result;
//   result = operationDiv(document.getElementById("display").value);
//   document.getElementById("display").value = result;
//   result = operationMol(document.getElementById("display").value);
//   document.getElementById("display").value = result;
// }

//PROVA TERZO METODO (NON FUNZIONA)

// let result;
// let operator = document.getElementsByClassName("operator");
// let number = document.getElementsByClassName("number");

// function writeToDisplay(number) {
//   text = document.getElementById("display").value += number;
//   return text;
// }

// function operation(number, operator) {
//   let result;
//   if (operator === "+") {
//     result = parseFloat(number[0]) + parseFloat(number[1]);
//     return result;
//   } else if (operator === "-") {
//     result = parseFloat(number[0]) - parseFloat(number[1]);
//     return result;
//   } else if (operator === "*") {
//     result = parseFloat(number[0]) * parseFloat(number[1]);
//     return result;
//   } else if (operator === "/") {
//     result = parseFloat(number[0]) / parseFloat(number[1]);
//     return result;
//   }
// }

// function operation(number1, operator, number2)
// function operation(text) {
//   let result = "";
//   if (operator === text.split("+")) {
//     result = parseFloat(number1[0]) + parseFloat(number2[1]);
//     console.log(result);
//     return result;
//   } else if (operator === text.split("-")) {
//     result = parseFloat(number1[0]) - parseFloat(number2[1]);
//     return result;
//   } else if (operator === text.split("*")) {
//     result = parseFloat(number1[0]) * parseFloat(number2[1]);
//     return result;
//   } else if (operator === text.split("/")) {
//     result = parseFloat(number1[0]) / parseFloat(number2[1]);
//     return result;
//   }
//   return result;
// }

// function showResult(result) {
//   result = operation(document.getElementById("display").value);
//   document.getElementById("display").value = result;
// }
