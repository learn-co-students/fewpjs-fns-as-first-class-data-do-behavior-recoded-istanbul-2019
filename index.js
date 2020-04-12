/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(currentTime) {
  var splitted = currentTime.split(":")
  var hourString = splitted[0]
  var hour = parseInt(hourString)
  if (hour < 12) {
    return `Good Morning`
  }
  else if (hour < 17) {
    return `Good Afternoon`
  }
  else {
    return `Good Evening`
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}

