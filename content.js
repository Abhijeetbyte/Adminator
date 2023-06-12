// content.js

// Create a MutationObserver to watch for changes in the player container
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (
            mutation.attributeName === 'aria-label' &&
            mutation.target.getAttribute('aria-label').startsWith('Play')
        ) {
            //console.log('Video started playing');
            chrome.runtime.sendMessage({ action: 'videoStarted' });
        }
    });
});

// Find the player container element
const playerContainer = document.getElementById('player-container');

// Start observing mutations in the player container
observer.observe(playerContainer, { attributes: true });

// Log a message when the content script is loaded
//console.log('Content script loaded');
