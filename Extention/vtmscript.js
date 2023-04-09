var styleElement = document.createElement('style');
    styleElement.id = 'remove-scroll-style';
    styleElement.textContent =
        'html::-webkit-scrollbar{display:none !important}' +
        'body::-webkit-scrollbar{display:none !important}';
    document.getElementsByTagName('body')[0].appendChild(styleElement);
    
    // Check if there are any row classes on the page
const rows = document.querySelectorAll('.header, x-row, .page__back, .detail__masthead, .player, .list__item, .detail__grid, .detail__tabs-nav');

if (rows.length === 0) {
  console.log('No rows found on the page');
} else {
  // Set the index of the currently active row to 0
  let activeRowIndex = 0;

  // Set the index of the currently active link within the row to 0
  let activeLinkIndex = 0;
  rows[activeRowIndex].querySelectorAll('a:not(.media__link')[activeLinkIndex].focus();
  // Add an event listener to the document to listen for arrow key presses
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      // Move the active row up one position
      activeRowIndex = (activeRowIndex - 1 + rows.length) % rows.length;
      // Set the active link index to 0 when moving to a new row
      activeLinkIndex %= rows[activeRowIndex].querySelectorAll('a:not(.media__link)').length;
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      // Move the active row down one position
      activeRowIndex = (activeRowIndex + 1) % rows.length;
      // Set the active link index to 0 when moving to a new row
      activeLinkIndex %= rows[activeRowIndex].querySelectorAll('a:not(.media__link)').length;
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
    console.log(rows[activeRowIndex]);


  });
}


