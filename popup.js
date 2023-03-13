// Get the current user's identity
chrome.identity.getProfileUserInfo(function(userInfo) {
    // Update the user-info div with the user's email address
    document.getElementById('user-info').innerHTML = 'Logged in as: ' + userInfo.email;
  });
  
  // Get the list of allowed websites from storage
  chrome.storage.sync.get('allowedWebsites', function(data) {
    // Update the allowed-websites div with the list of allowed websites
    var websitesList = '';
    if (data.allowedWebsites) {
      for (var i = 0; i < data.allowedWebsites.length; i++) {
        websitesList += '<li>' + data.allowedWebsites[i] + '</li>';
      }
    } else {
      websitesList = '<li>No websites allowed</li>';
    }
    document.getElementById('allowed-websites').innerHTML = '<ul>' + websitesList + '</ul>';
  });
  
  // Get the current tab's ID
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var tabId = tabs[0].id;
  // Send a message to the content script
  chrome.tabs.sendMessage(tabId, { message: 'blockWebsite' }, function(response) {
    console.log(response.message);
  });
});
