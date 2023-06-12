// background.js

// Log a message when the extension is installed or updated
chrome.runtime.onInstalled.addListener(details => {
    //console.log('Extension installed or updated:', details.reason);
});

// Add a listener for the extension icon click event
chrome.action.onClicked.addListener(tab => {
    //console.log('Extension icon clicked');
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: simulateKeyCombination,
    });
});

// Simulate the key combination
function simulateKeyCombination() {
    //console.log('Simulating key combination');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Alt' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Alt' }));
}
