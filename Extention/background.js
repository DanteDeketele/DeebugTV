chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.update({ url: "chrome-extension://" + chrome.runtime.id + "/index.html" });
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openMenuPage") {
      chrome.tabs.update({ url: chrome.runtime.getURL("index.html") });
    }
  });