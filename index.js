/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const first = parseInt(time.split(":")[0]);
  if (first < 12) {
    return "Good Morning";
  } else if (first >= 12 && first <= 17) {
    return "Good Afternoon";
  } else if (first > 17) {
    return "Good Evening";
  } else return "TEST";
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  if (message) document.querySelector("#greeting").innerText = message;
  else document.querySelector("#greeting").innerText = "TEST";
}
