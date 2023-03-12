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
  