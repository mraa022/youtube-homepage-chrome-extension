
var current_window_link = window.location.href

$(document).on('click', function(e){
		
		
		if (window.location.href.includes('search_query')){ // if the user used the search tab (might not have pressed the search icon). get the current url
			current_window_link = window.location.href;
		}

		if (current_window_link == "https://www.youtube.com/"){
			chrome.runtime.sendMessage({action: "take_screen_shot"}, function(response) {
				console.log('ScreenShot Taken')
			});
		}
		current_window_link = window.location.href

});



