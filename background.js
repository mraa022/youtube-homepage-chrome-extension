var screen_shot_url
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	  if(request.action == 'take_screen_shot'){

	  	  	chrome.tabs.captureVisibleTab({format:"png"},function(screenshotUrl) {
	  	  		screen_shot_url = screenshotUrl;
	   			sendResponse({status:'200'});
			});

  	  }
  	  else if(request.action == 'show_screen_shot'){
  	  		sendResponse({screen_shot_url:screen_shot_url});
  	  }
  	 
  return true;
  });


