/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */



function greet(input) {
  let inputTime = parseInt(input);

  if (inputTime < 12) {
    return 'Good Morning'
  }
   else if (inputTime >= 12 && inputTime <= 17) {
    return 'Good Afternoon'
  }
  else {
    return 'Good Evening'
  }

  }

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = document.getElementById('greeting').innerText = message;
}




//[12:00]