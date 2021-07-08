/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timestr){
  let hours = parseInt(timestr.split(":"));
  let msg='';
  if(hours <12){
    msg = "Good Morning"
    return msg;
    }
    else if(hours==12 || hours < 17 ){
      msg="Good Afternoon";
      return msg;
    }
    else{
        msg="Good Evening";
        return msg;
    }
}
function displayMessage(message){
    document.getElementById("greeting").innerText = message;
}