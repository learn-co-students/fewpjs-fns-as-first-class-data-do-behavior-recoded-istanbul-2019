/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(x){
  //let timeValue = document.getElementById('time').value;
  // let spiltTime = timeValue.split(':');
  //let newTime = paresInt(time);

  if(parseInt(x) < 12){
    return `Good Morning`;
  } else if(parseInt(x) >= 12 && parseInt(x) <= 17){
    return `Good Afternoon`;
  } else {
  return`Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let timeString = document.getElementById('greeting');
      timeString.innerText = message;
}

console.log(greet("8:40"));