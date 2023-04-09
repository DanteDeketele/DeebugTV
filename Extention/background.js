chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.update({ url: "chrome-extension://" + chrome.runtime.id + "/menu.html" });
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openMenuPage") {
      chrome.tabs.update({ url: chrome.runtime.getURL("menu.html") });
    }
  });

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
      if (activeTabs.length > 0) {
        chrome.tabs.update(activeTabs[0].id, { active: true });
      }
    });
  });
  