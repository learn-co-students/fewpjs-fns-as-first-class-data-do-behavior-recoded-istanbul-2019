/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(input) {
  const numberTime = parseInt(input);
  if(numberTime<12) {
    return `Good Morning`
  } else
  if (numberTime>=12 && numberTime<=17) {
    return `Good Afternoon`
  }else  {
    return `Good Evening`
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
const heading = document.querySelector("#greeting").innerText = message;
}