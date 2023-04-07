const apiURL = "https://raw.githubusercontent.com/MrDeeGames/DeebugTV/main/api.json";

// Load the API data and update the page
function loadAPI() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      // Update the banner
      const banner = document.querySelector(".banner");
      banner.style.backgroundImage = `url(${data.BackgroundUrl})`;
      banner.querySelector(".title").textContent = data.Title;
      banner.querySelector(".info").textContent = data.Version + " | by " + data.Creator;
      banner.querySelector(".info").href = data.Github;
      banner.querySelector(".logo").src = data.LogoUrl;

      // Create the channel list
      const channelList = document.querySelector(".channel-list");
      data.Channels.forEach(channel => {
        const link = document.createElement("a");
        link.href = channel.url;
        link.classList.add("channel");
        link.classList.add("item");
        const logo = document.createElement("img");
        logo.src = channel.logoUrl;
        logo.alt = channel.name;
        link.appendChild(logo);
        channelList.appendChild(link);
      });

      // Create the channel list
      const StreamingList = document.querySelector(".streaming-list");
      data.StreamingServices.forEach(channel => {
        const link = document.createElement("a");
        link.href = channel.url;
        link.classList.add("streaming");
        link.classList.add("item");
        const logo = document.createElement("img");
        logo.src = channel.logoUrl;
        logo.alt = channel.name;
        link.appendChild(logo);
        StreamingList.appendChild(link);
      });

      // Create the series list
      const seriesList = document.querySelector(".series-list");
      data.Series.forEach(series => {
        const link = document.createElement("a");
        link.href = series.url;
        link.classList.add("series");
        link.classList.add("item");
        const logo = document.createElement("img");
        logo.src = series.logoUrl;
        logo.alt = series.name;
        link.appendChild(logo);
        seriesList.appendChild(link);
      });


      const lists = document.querySelectorAll('.list');

      let selectedRow = 0;
      let selectedCol = 0;
      
      function highlight() {
        // Remove highlight from all items
        document.querySelectorAll('.item').forEach(item => {
          item.classList.remove('selected');
        });
      
        // Add highlight to selected item
        const selectedItem = lists[selectedRow].querySelectorAll('.item')[selectedCol];
        selectedItem.classList.add('selected');
      }
      
      function navigateRow(e) {
        const key = e.keyCode;
      
        if (key === 38 && selectedRow > 0) { // up arrow
          e.preventDefault();
          selectedRow--;
        } else if (key === 40 && selectedRow < lists.length - 1) { // down arrow
          e.preventDefault();
          selectedRow++;
        }

        if (selectedRow === 0) {
          // Scroll to the top of the page when the first row is selected
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        } else {
          // Scroll to the selected row
          lists[selectedRow].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      
        highlight();
      }
      
      function navigateCol(e) {
        const key = e.keyCode;
        const currentList = lists[selectedRow];
        const items = currentList.querySelectorAll('.item');
      
        if (key === 37 && selectedCol > 0) { // left arrow
          selectedCol--;
        } else if (key === 39 && selectedCol < items.length - 1) { // right arrow
          selectedCol++;
        }
      
        highlight();
      }
      
      function openLink() {
        const currentList = lists[selectedRow];
        const selectedItem = currentList.querySelectorAll('.item')[selectedCol];
        const link = selectedItem.getAttribute('href');
      
        window.location.href = link;
      }
      
      // Add event listeners
      document.addEventListener('keydown', e => {
        if (e.keyCode === 38 || e.keyCode === 40) {
          navigateRow(e);
        } else if (e.keyCode === 37 || e.keyCode === 39) {
          navigateCol(e);
        } else if (e.keyCode === 13) {
          openLink();
        }
      });
      
      // Initialize highlight on first item
      highlight();

    })
    .catch(error => console.error(error));
}

loadAPI();





