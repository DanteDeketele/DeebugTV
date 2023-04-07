chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.update({ url: "chrome-extension://" + chrome.runtime.id + "/index.html" });
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openMenuPage") {
      chrome.tabs.update({ url: chrome.runtime.getURL("index.html") });
    }
  });

  // Listen for when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(function() {
    // Focus on the HTML
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: "document.body.focus();" }
      );
    });
  });