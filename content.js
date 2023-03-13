// Get the list of allowed websites from storage
chrome.storage.sync.get('allowedWebsites', function(data) {
    var allowedWebsites = data.allowedWebsites;
    // Check if the current website is in the list of allowed websites
    var isAllowed = false;
    if (allowedWebsites) {
      for (var i = 0; i < allowedWebsites.length; i++) {
        if (window.location.href.indexOf(allowedWebsites[i]) !== -1) {
          isAllowed = true;
          break;
        }
      }
    }
    // If the current website is not allowed, redirect to a blocked page
    if (!isAllowed) {
      window.location.replace(chrome.extension.getURL('blocked.html'));
    }
  });

  // Listen for messages from the popup window
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'blockWebsite') {
    // Block the website here
    sendResponse({ message: 'Website blocked' });
  }
});

// Listen for changes in the active tab
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Get the list of allowed websites from storage
  chrome.storage.sync.get('allowedWebsites', function(data) {
    var allowedWebsites = data.allowedWebsites;
    // Check if the current website is in the list of allowed websites
    var isAllowed = false;
    if (allowedWebsites) {
      for (var i = 0; i < allowedWebsites.length; i++) {
        if (tab.url.indexOf(allowedWebsites[i]) !== -1) {
          isAllowed = true;
          break;
        }
      }
    }
    // If the current website is not allowed, block the tab
    if (!isAllowed) {
      chrome.tabs.update(tabId, {url: chrome.extension.getURL('blocked.html')});
    }
  });
});


  