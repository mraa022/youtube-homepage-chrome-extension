document.addEventListener('scroll',function(ev){
	chrome.runtime.sendMessage({action: "take_screen_shot"}, function(response) {
  		console.log('scrolled')
	});
});




 