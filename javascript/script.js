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
