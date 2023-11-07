document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("clickButton").addEventListener("click", () => {
      // Send a message to the background script to perform the action
      chrome.runtime.sendMessage({ action: "navigate" });
    });
  });
  
