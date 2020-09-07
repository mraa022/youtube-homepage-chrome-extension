window.onload = function() {
    chrome.runtime.sendMessage({action: "show_screen_shot"}, function(response) {
        document.querySelector('#screenshot').src = response.screen_shot_url
    });
};
