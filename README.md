# youtube-homepage-chrome-extension
While scrolling through your YouTube feed, have you ever clicked on a link, and when you came back to the homepage you couldn't find a video you just saw before clicking on the link. This simple chrome extension tackles that problem, and this is how. while in the YouTube homepage, every time the user clicks somewhere, it takes a screenshot.the user can access the screenshot by clicking on the extension icon


# limitations!!!
 - if the user does not take new screenshots for a while, the connection between the content/popup scripts and the background script closes.which results in the screenshots being cleared (Long-lived connections are not used). a future commit will fix this
