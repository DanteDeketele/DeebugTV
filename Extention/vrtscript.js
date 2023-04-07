console.log("DeebugTV Loaded.");

window.addEventListener('load', function () {


    

    // Check if there are any x-row tags on the page
const rows = document.querySelectorAll('section');

if (rows.length === 0) {

//not main page
console.log("no rows");

} else {
  var styleElement = document.createElement('style');
  styleElement.id = 'remove-scroll-style';
  styleElement.textContent =
      'html::-webkit-scrollbar{display:none !important}' +
      'body::-webkit-scrollbar{display:none !important}';
  document.getElementsByTagName('body')[0].appendChild(styleElement);

// Get all the x-row tags on the page
const rows = document.getElementsByTagName('section');

// Set the index of the currently active row to 0
let activeRowIndex = 3;

// Set the index of the currently active link within the row to 0
let activeLinkIndex = 0;
// Add an event listener to the document to listen for arrow key presses
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // Move the active row up one position
    activeRowIndex = (activeRowIndex - 1 + rows.length) % rows.length;
    // Set the active link index to 0 when moving to a new row
    if (rows[activeRowIndex].getElementsByTagName('a')[activeLinkIndex] == null){
        activeLinkIndex = 0;
    }
    event.preventDefault();
  } else if (event.key === 'ArrowDown') {
    // Move the active row down one position
    activeRowIndex = (activeRowIndex + 1) % rows.length;
    // Set the active link index to 0 when moving to a new row
    if (rows[activeRowIndex].getElementsByTagName('a')[activeLinkIndex] == null){
        activeLinkIndex = 0;
    }
    event.preventDefault();
  } else if (event.key === 'ArrowLeft') {
    // Move the active link within the row to the left
    activeLinkIndex = (activeLinkIndex - 1 + rows[activeRowIndex].getElementsByTagName('a').length) % rows[activeRowIndex].getElementsByTagName('a').length;
    event.preventDefault();
  } else if (event.key === 'ArrowRight') {
    // Move the active link within the row to the right
    activeLinkIndex = (activeLinkIndex + 1) % rows[activeRowIndex].getElementsByTagName('a').length;
    event.preventDefault();
  }

  // Move the mouse over the active row and link
  rows[activeRowIndex].getElementsByTagName('a')[activeLinkIndex].focus();
});

}

})

var styleElement = document.createElement('style');
    styleElement.id = 'remove-scroll-style';
    styleElement.textContent =
        'html::-webkit-scrollbar{display:none !important}' +
        'body::-webkit-scrollbar{display:none !important}';
    document.getElementsByTagName('body')[0].appendChild(styleElement);