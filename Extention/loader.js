document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      chrome.runtime.sendMessage({action: "escapeChrome"});
    }
  });