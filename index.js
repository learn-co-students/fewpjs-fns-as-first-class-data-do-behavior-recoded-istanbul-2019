/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(inputTime) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  // https://stackoverflow.com/questions/8232776/javascript-split-string-to-array-of-int
  let parsedTime = parseInt(inputTime.split(":"));   
  
  if(parsedTime < 12){
    return "Good Morning";  
  }

  else if(parsedTime >= 12 && parsedTime <= 17){
    return "Good Afternoon";  
  }

  else if(parsedTime > 17){
    return "Good Evening";  
  }
}

/* Write your implementation of displayMessage() */

// https://www.w3schools.com/jsref/prop_node_innertext.asp
// https://www.w3schools.com/jsref/jsref_return.asp
function displayMessage(greetMessage) {
 document.getElementById("greeting").innerText = greetMessage
}
displayMessage(greetMessage)