chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command === 'shutdown') {
      chrome.permissions.request({permissions: ['system.power']}, function(granted) {
        if (granted) {
          chrome.system.power.shutdown();
          sendResponse({result: 'success'});
        } else {
          console.error('Permission denied.');
          sendResponse({result: 'failure'});
        }
      });
    }
  });