function writeToDisplay(element) {
  document.getElementById("display").value += element;
}
function showResult() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
function deleteDisplay() {
  document.getElementById("display").placeholder = "0";
  document.getElementById("display").value = "";
}

// non capisco come scrivere la condizione di errore, come traduco in codice il fatto che se si usa ** o // o ++ è un errore?
// function errore() {
//   let result = eval(document.getElementById("display").value);
//   if ((document.getElementById("display").value = result)) {
//     return true;
//   } else {
//     document.getElementById("display").placeholder = "errore";
//   }
// }

try {
  document.getElementById("display").value = result;
} catch (error) {
  document.getElementById("display").placeholder = "Error";
}
