
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "escapeChrome") {
      chrome.windows.getCurrent(function(window) {
        chrome.windows.remove(window.id);
      });
    }
  });