/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(mTime){

  let parsedTime = parseInt(mTime.split(':'));
  if(parsedTime < 12){
    return ('Good Morning');
  }
  
  else if( 12<= parsedTime && parsedTime <=17){
    return ('Good Afternoon');
  }
  
  else {
    return ('Good Evening');
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
   document.getElementById('greeting').innerText = greet ;
  
}

