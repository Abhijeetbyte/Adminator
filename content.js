// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "videoStarted") {
    // Automatically trigger keyboard shortcuts
    simulateKeyboardShortcut("Alt+Left");
    simulateKeyboardShortcut("Alt+Right");
  }
});

// Simulate a keyboard shortcut
function simulateKeyboardShortcut(shortcut) {
  chrome.tabs.executeScript({
    code: `document.dispatchEvent(new KeyboardEvent('keydown', { key: '${shortcut}', code: '${shortcut}', altKey: true }));`
  });
}
