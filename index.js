/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(strTime){
  let time= strTime.split(':');
  let hour= parseInt(time[0],10);
  let minute= parseInt(time[1],10);
  if(hour<= 12){
    return 'Good Morning';
  }
  else if(hour>12 && hour<17 ){
    return 'Good Afternoon';
  }  
  else {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  let h1= document.getElementById('greeting');
  h1.innerText= message;
}

