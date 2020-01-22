/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
var a = document.getElementById('time').value ; //why does this have to be a global variable 




function greet(a) {

var b = a.split(':');
var c = parseInt(b[0]);
 
  if (c<12) {
    greeting = 'Good Morning';
  } 
  else if  (c>12 && c<17) {
    greeting = 'Good Afternoon';
  }

  else  {
    greeting = 'Good Evening';
  }
  
  return greeting;

}

/* Write your implementation of displayMessage() */

function displayMessage(greeting) {

document.getElementById("greeting").innerText = greeting
  
}

