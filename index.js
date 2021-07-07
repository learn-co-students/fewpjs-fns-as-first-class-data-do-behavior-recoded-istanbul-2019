/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(argu) {
  if (parseInt(argu) < 12) {
    return `Good Morning`;
  }else if (parseInt(argu) >= 12 && parseInt(argu) < 17) {
    return `Good Afternoon`;
  }else if (parseInt(argu) >= 17) {
    return `Good Evening`;
  }

}
greet('8:20');


/* Write your implementation of displayMessage() */
function displayMessage(testContent) {
  
  document.getElementById("greeting").innerText = testContent;

}
displayMessage("TEST");