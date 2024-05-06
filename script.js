function playVideo() {
    var videoOverlay = document.querySelector('.video-overlay');
    var video = document.getElementById('miVideo');

    videoOverlay.style.display = 'none';
    video.play();
}