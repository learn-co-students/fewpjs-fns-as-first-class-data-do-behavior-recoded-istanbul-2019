/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// const input = document.getElementById("time").value
function greet(String){
  let str = String.split(":")
  if (parseInt(str[0]) < 12  ){
    return "Good Morning";
  }else if ( parseInt(str[0]) < 17)  {
    return "Good Afternoon";
  }else{
    return "Good Evening";
  }
}




/* Write your implementation of displayMessage() */
function displayMessage(String='TEST'){
	
  	document.getElementById("greeting").innerText = String;
}


