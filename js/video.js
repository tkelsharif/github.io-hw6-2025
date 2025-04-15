window.addEventListener("load", function() {
    console.log("Good job opening the window");
});


const video = document.getElementById('player1');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const slowerButton = document.getElementById('slower');
const fasterButton = document.getElementById('faster');
const skipButton = document.getElementById('skip');
const muteButton = document.getElementById('mute');
const volSlider = document.getElementById('slider');
const volumeDisplay = document.getElementById('volume');
const vintageButton = document.getElementById('vintage');
const originalButton = document.getElementById('orig');


playButton.addEventListener('click', function() {
    video.play();
    console.log("Play Video");
    let currentVolume = Math.round(video.volume * 100);
    volumeDisplay.textContent = currentVolume + "%";
});

pauseButton.addEventListener('click', function() {
    video.pause();
    console.log("Pause Video");
});


slowerButton.addEventListener('click', function() {
    video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
    console.log("Slow Video");
});


fasterButton.addEventListener('click', function() {
    video.playbackRate += 0.1; 
    console.log("Speed Video");
});


skipButton.addEventListener('click', function() {
    video.currentTime += 10; 
    console.log("Skip Video");
});

muteButton.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute"; 
        console.log("Unmuted Video");
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute"; 
        console.log("Muted Video");
    }
});


volSlider.addEventListener('input', function () {
    let volumeValue = volSlider.value;
    video.volume = volumeValue / 100;
    volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
    volSlider.value = video.volume * 100;
    console.log('Volume set to', volumeValue + "%");
});

vintageButton.addEventListener('click', function() {
    video.classList.add('oldSchool');
    console.log("Old School mode on");
});

originalButton.addEventListener('click', function() {
    video.classList.remove('oldSchool');
    console.log("Original style restored");
});
