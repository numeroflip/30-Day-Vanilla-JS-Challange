//  GET ELEMENTS
const video = document.querySelector('.player__video');
const timeBtn = Array.from(document.querySelectorAll('.player__timeButton'));
const playBtn = document.querySelector('button[title="Toggle Play"]');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

init();


// MAKE THE FUNCTIONS-----------------------
function init() {
    volumeSlider.value = video.volume;
    playbackRate.value = video.playbackRate;
}

function changePlayback() {
    video.playbackRate = this.value;
}

async function playVideo() {
    try {
        await video.play();
    } catch {
        console.log('FUCK YOU')
    } 
}

function handlePlay() {
    if (video.paused) {
        playVideo();
        playBtn.innerHTML = '⏸';
    } else {
        video.pause()
        playBtn.innerHTML = '►';
    }
}

function changeVolume() {
    video.volume = this.value;
}

function handleTime() {
    video.currentTime += parseInt(this.dataset.skip);
}

function handleProgress(e) {
    const percent = (e.layerX / video.videoWidth) * 100;
    progressBar.style.flexBasis = percent + '%';
    video.currentTime = video.duration * (percent / 100);
        
}

function progressUpdate() {
    progressBar.style.flexBasis = ((video.currentTime / video.duration) * 100) + '%';
}

// EVENT LISTENERS---------------------------------

timeBtn.forEach(btn =>{
    btn.addEventListener('click', handleTime)
} )
volumeSlider.addEventListener('change', changeVolume);
playbackRate.addEventListener('change', changePlayback);

playBtn.addEventListener('click', handlePlay);
video.addEventListener('click', handlePlay);

let mouseDown = false;
video.addEventListener('timeupdate', progressUpdate);
progress.addEventListener('click', handleProgress);
progress.addEventListener('mousedown', function() {mouseDown = true});
progress.addEventListener('mouseup', function() {mouseDown = false});
progress.addEventListener('mousemove', () => mouseDown && progressUpdate);

