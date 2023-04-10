document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
      chrome.runtime.sendMessage({action: "escapeChrome"});
    }
  });