chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      chrome.tabs.captureVisibleTab({format:"png"},function(screenshotUrl) {
   			sendResponse({screen_shot_url: screenshotUrl});
		});
  return true;
  });