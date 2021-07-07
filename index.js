/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input){
  const newInput = parseInt(input);
  if(newInput < 12){
    return `Good Morning`;
  }else if (newInput >= 12 && newInput <=17){
    return `Good Afternoon`;
  }else{
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message){
  const heading = document.querySelector("#greeting").innerText = message;
}