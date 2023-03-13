// Define a function to save the list of allowed websites
function saveAllowedWebsites(websitesList) {
  chrome.storage.sync.set({ allowedWebsites: websitesList }, function() {
    console.log('Allowed websites saved: ' + websitesList);
  });
}

// Call the saveAllowedWebsites function to store the list of allowed websites
saveAllowedWebsites(['example.com', 'google.com', 'facebook.com']);









