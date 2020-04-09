/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(input) {
  const inputnew = parseInt(input);
  if(inputnew<12) {
    return `Good Morning`
  } else
  if (inputnew>=12 && inputnew<=17) {
    return `Good Afternoon`
  }else  {
    return `Good Evening`
  }
}
/* Write your implementation of greet() */
function displayMessage(message) {
  const heading = document.querySelector("#greeting").innerText = message;
  }
/* Write your implementation of displayMessage() */
