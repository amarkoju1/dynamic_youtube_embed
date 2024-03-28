window.onload = function() {
    // Get the element with class "yt-link"
    var ytLink = document.querySelector('.yt-link');

    // Get the YouTube link text content
    var youtubeLink = ytLink.textContent.trim();

    // Extract video ID from the YouTube link
    var videoID = youtubeLink.split('v=')[1];
    var ampersandPosition = videoID.indexOf('&');
    if (ampersandPosition !== -1) {
        videoID = videoID.substring(0, ampersandPosition);
    }

    // Construct the iframe HTML
    var iframeHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoID + '" frameborder="0" allowfullscreen></iframe>';

    // Insert the iframe HTML into the div with class "yt-video"
    var ytVideoDiv = document.querySelector('.yt-video');
    ytVideoDiv.innerHTML = iframeHTML;
}
