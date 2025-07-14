window.onload = function () {
  document.getElementById("photo").addEventListener("click", borderFunc);
  document.getElementById("photo1").addEventListener("click", borderFunc1);
  document.getElementById("photo2").addEventListener("click", borderFunc2);
};

function borderFunc() {
  document.getElementById("photo").style.border = "10px solid black";
}
function borderFunc1() {
  document.getElementById("photo1").style.border = "10px solid black";
}
function borderFunc2() {
  document.getElementById("photo2").style.border = "10px solid black";
}