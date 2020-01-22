/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str){
  str = str.split(":");
  str = parseInt(str[0]);
  if (str < 12){
    return "Good Morning";
  }else if (str < 17){
    return "Good Afternoon";
  }else{
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.querySelector("#greeting").innerText = str
}