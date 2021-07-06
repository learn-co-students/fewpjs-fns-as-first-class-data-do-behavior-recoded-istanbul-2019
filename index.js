/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  
  const h = parseInt(time);
  if ( h < 12) return "Good Morning"
  if ( h > 17) return "Good Evening"
 else { return "Good Afternoon"}
}
function displayMessage(t) {
  document.getElementById("greeting").innerText =t;
}