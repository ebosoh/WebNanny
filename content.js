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
  