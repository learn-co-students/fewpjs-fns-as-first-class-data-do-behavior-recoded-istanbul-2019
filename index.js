/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let timeArray = timeString.split(":"); //=> ['HH', 'MM']
  let hourString = timeArray[0];
  let hour = parseInt(hourString, 10);
  
  if (hour < 12) {
    return "Good Morning";
  } 
  else if (hour < 17) {
    return "Good Afternoon";
  }
  else { 
    return "Good Evening";
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let timeText = document.getElementById("greeting");
  timeText.innerText = message;
}