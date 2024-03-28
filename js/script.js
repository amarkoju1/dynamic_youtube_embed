window.onload = function() {
    // Get all elements with class "yt-link"
    var ytLinks = document.querySelectorAll('.yt-link');

    // Loop through each element and embed the YouTube video
    ytLinks.forEach(function(ytLink) {
        // Get the YouTube link text content
        var youtubeLink = ytLink.textContent.trim();

        // Extract video ID from the YouTube link
        var videoID = youtubeLink.split('v=')[1];
        var ampersandPosition = videoID.indexOf('&');
        if (ampersandPosition !== -1) {
            videoID = videoID.substring(0, ampersandPosition);
        }

        // Construct the iframe HTML
        var iframeHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoID + '?rel=0" frameborder="0" allowfullscreen></iframe>';

        // Insert the iframe HTML into the parent of the element with class "yt-link"
        var ytVideoParent = ytLink.parentElement;
        ytVideoParent.innerHTML = iframeHTML;
    });
}
