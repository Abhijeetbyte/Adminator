chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "navigate") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs[0]) {
          const tab = tabs[0];
          // Navigate back and forward
          chrome.tabs.update(tab.id, { url: 'about:blank' }, () => {
            setTimeout(() => {
              chrome.tabs.update(tab.id, { url: tab.url });
            }, 500);
          });
        }
      });
    }
  });
  
