// Listen for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.active && tab.url.includes("youtube.com/watch")) {
      // Send a message to the content script
      chrome.tabs.sendMessage(tabId, { action: "videoStarted" });
    }
  });
  