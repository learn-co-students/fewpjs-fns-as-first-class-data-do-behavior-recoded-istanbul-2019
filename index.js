/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {

  let timeArray = timeString.split(/[.:]/);
  timeString = timeArray[0] + timeArray[1];
  let timeInt = parseInt(timeString);
  
  if (timeInt < 1200) {
    return "Good Morning";
  }
  else if ( timeInt >= 1200 && timeInt <= 1700 ) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  document.getElementById("greeting").innerText = greet;
}
