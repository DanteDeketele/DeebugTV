console.log("DeebugTV Loaded.");
var isFullscreen = false;
document.addEventListener('keydown', (event) => {
if (event.keyCode === 70) { // F key
      var player = document.querySelector('.theoplayer');
      if (player == null) return;
      if (!isFullscreen) { // If not already fullscreen
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen(); // Firefox
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen(); // Chrome, Safari & Opera
        } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen(); // Edge
        }
        isFullscreen = true;
      } else { // If already fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen(); // Firefox
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen(); // Chrome, Safari & Opera
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen(); // Edge
        }
        isFullscreen = false;
      }
    }
  });


// Check if there are any row classes on the page
const rows = document.querySelectorAll('.flickity-slider, .theoplayer, .hero-video__actions, .hero__actions, .header, .banner');



if (rows.length === 0) {
  console.log('No rows found on the page');
} else {
  // Set the index of the currently active row to 0
  let activeRowIndex = 0;

  // Set the index of the currently active link within the row to 0
  let activeLinkIndex = 0;
  rows[activeRowIndex].querySelectorAll('a:not(.media__link)')[activeLinkIndex].focus();
  // Add an event listener to the document to listen for arrow key presses
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      // Move the active row up one position
      activeRowIndex = (activeRowIndex - 1 + rows.length) % rows.length;
      // Set the active link index to 0 when moving to a new row
      activeLinkIndex =0;
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      // Move the active row down one position
      activeRowIndex = (activeRowIndex + 1) % rows.length;
      // Set the active link index to 0 when moving to a new row
      activeLinkIndex =0;
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      // Move the active link within the row to the left
      activeLinkIndex = (activeLinkIndex - 1 + rows[activeRowIndex].querySelectorAll('a:not(.media__link)').length) % rows[activeRowIndex].querySelectorAll('a:not(.media__link)').length;
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      // Move the active link within the row to the right
      activeLinkIndex = (activeLinkIndex + 1) % rows[activeRowIndex].querySelectorAll('a:not(.media__link)').length;
      event.preventDefault();
    }

    // Move the mouse over the active row and link
    const activeLink = rows[activeRowIndex].querySelectorAll('a:not(.media__link)')[activeLinkIndex];
    activeLink.focus();
    rows[activeRowIndex].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    console.log(activeLink);
    activeLink.focus();
  });
}