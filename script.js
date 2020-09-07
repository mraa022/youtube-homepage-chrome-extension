var current_window_link = window.location.href

$(document).on('click', function(e){
		
		
		if (current_window_link == "https://www.youtube.com/"){
			
			chrome.runtime.sendMessage({action: "take_screen_shot"}, function(response) {
				console.log('ScreenShot Taken')
			});
		}
		current_window_link = window.location.href

});
