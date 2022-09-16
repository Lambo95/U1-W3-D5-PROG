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

let text;
let values;
let result;

function writeToDisplay(element) {
  text = document.getElementById("display").value += element;
  return text;
}

function operation(text) {
  //   let values;
  //   let result;
  if ((values = text.split("+"))) {
    result = parseFloat(values[0]) + parseFloat(values[1]);
    return result;
  } else if ((values = text.split("-"))) {
    result = parseFloat(values[0]) - parseFloat(values[1]);
    return result;
  } else if ((values = text.split("*"))) {
    result = parseFloat(values[0]) * parseFloat(values[1]);
    return result;
  } else if ((values = text.split("/"))) {
    result = parseFloat(values[0]) / parseFloat(values[1]);
    return result;
  }
}

function showResult(result) {
  result = operation(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
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
