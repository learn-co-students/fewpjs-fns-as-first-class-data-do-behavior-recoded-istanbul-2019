/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {

 let dt = time.split(':');
 dt[0] = parseInt(dt[0]);

 console.log(dt);
  

  if (dt[0] < 12) {
    return "Good Morning";
  } else if (dt[0] >= 12 && dt[0] <= 17) {
    return "Good Afternoon";
  } else if (dt[0] > 17 && dt[0] <= 24) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(testContent) {
  document.getElementById("greeting").innerText = testContent;
  

}

