function checkNumber() {
  let num = document.getElementById("numberInput").value;
  let result = document.getElementById("result");

  if (num === "") {
    result.innerHTML = "Please enter a number!";
  } 
  else if (num % 2 == 0) {
    result.innerHTML = num + " is an Even number.";
  } 
  else {
    result.innerHTML = num + " is an Odd number.";
  }
}