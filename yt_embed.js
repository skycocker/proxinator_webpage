var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer;
function onYouTubePlayerAPIReady() {
  ytPlayer = new YT.Player('ytIframe', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(e) {
  var overlay = document.querySelector('#video_overlay');

  overlay.style.display = "block";
  overlay.onclick = function(e) { e.target.style.display = "none"; ytPlayer.playVideo(); };
}

