
//JavaScript to dynamically embed the YouTube videos
(function($) {
  $(function() {
    function embedYouTubeVideo(container, videoId) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '315');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      container.append(iframe);
    }

    // Extract video ID from the paragraph content and embed videos
    $('.youtube-link p').each(function() {
      var videoId = $(this).text().match(/(?:v=)([\w-]+)/)[1];
      var container = $(this).closest('.lay-col12-xs-12').find('.youtube-video');
      embedYouTubeVideo(container, videoId);
    });
  });
})(jQuery);

