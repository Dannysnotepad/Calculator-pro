/*
*Calculator Pro
*from
*Dannysnotepad
*/

/*
let result = document.getElementById('inputDispay').value

function display (val) {
  result += val
  return val
}

document.querySelector('equal').addEventListener('click', () => {
  let x = result
  let y = eval(x)
  result.value = y
  return y
})


document.getElementById('ac').addEventListener('click', () => {
  result.value = ''
})

document.getElementById('del').addEventListener('click', () => {
  alert('    >_<   \ This feature is under development')
})
*/

let result = "";
let screen = document.getElementById('inputDisplay')
// your issue was that you didnt define the result value before trying to parse in value to it

// Function to add characters to the input display
function addToDisplay(val) {
  result += val;
  //now to the empty result value i'll add the value that is clicked 
  screen.value = result;
  //Now i populate the input display to the vaue clicked as well
}

// Function to evaluate and display the result
document.querySelector('#equal').addEventListener('click', () => {
  let x = result;
  let y = eval(x);
  screen.value = y;
});

// Function to clear the input display by setting the entire value in the display to ''
document.getElementById('ac').addEventListener('click', () => {
  result = '';
  screen.value = '';
});

// Function to delete characters (under development)
document.getElementById('del').addEventListener('click', () => {
  alert('     >_<     \ This feature is under development');
});