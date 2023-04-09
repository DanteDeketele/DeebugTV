
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openMenuPage") {
      chrome.tabs.update({ url: chrome.runtime.getURL("index.html") });
    }
  });