const videoPlayer = document.getElementById("jsVideoPlayer");
const video = document.getElementById("jsVideo");
const playBtn = document.getElementById("jsPlayBtn");
const fullScreenBtn = document.getElementById("jsFullScreenBtn");

//volume
const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeRange = document.getElementById("jsVolumeRange");
const volumeBar = document.getElementById("jsVolumeRangeBar");
//Time
const cTime = document.getElementById("jsCurrentTime");
const dTime = document.getElementById("jsDurationTime");
const playerJuice = document.getElementById("jsPlayerJuice");
const playerBottle = document.getElementById("jsPlayerBottle");

let drag = false;
let percentage;

function handleVideoPlay() {
  if (video.paused === true) {
    video.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function videoFinished() {
  if (video.paused === true) {
    playBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
    playBtn.addEventListener("click", () => {
      video.play();
    });
  }
}

function handleVolumeMute() {
  if (video.muted === true) {
    video.muted = false;
    volumeBar.style.width = video.volume * 100 + "%";
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    video.muted = true;
    volumeBar.style.width = 0 + "%";
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function handleVolumeDown(e) {
  drag = true;
  updateBar(e.offsetX);
}

function handleVolumeDrag(e) {
  if (drag) {
    updateBar(e.offsetX);
  }
}

function handleVolumeUp() {
  drag = false;
}

function updateBar(x) {
  if (x) {
    const position = x;
    percentage = (100 * position) / volumeRange.clientWidth;
  }
  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  volumeBar.style.width = percentage + "%";
  video.volume = percentage / 100;
}

function getVideoTime() {
  dTime.innerHTML = formatData(video.duration);
  setInterval(getCurrentTime, 1000);
}

function getCurrentTime() {
  cTime.innerHTML = formatData(video.currentTime);
}
let resultPercentage;

function mommyCanIGetJuice() {
  let ct = video.currentTime;
  let dt = video.duration;
  resultPercentage = (100 / dt) * ct;
  playerJuice.style.width = resultPercentage + "%";
}

function handlePlayerBarDown(e) {
  updateJuiceBar(e.offsetX);
}

function updateJuiceBar(x) {
  let juicePosition = (x * 100) / playerBottle.clientWidth;
  playerJuice.style.width = juicePosition + "%";
}

function formatData(seconds) {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor(secondsNumber / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
}
function exitFullScreen() {
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenBtn.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

function goFullScreen() {
  videoPlayer.webkitRequestFullscreen();
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.removeEventListener("click", goFullScreen);
  fullScreenBtn.addEventListener("click", exitFullScreen);
}

function init() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === "Space") {
      if (video.paused === true) {
        video.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === "ArrowUp") {
      if (video) {
        video.volume += 0.1;
        let bar = video.volume;
        volumeBar.style.width = bar * 100 + "%";
      } else {
        console.log("There is no video");
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === "ArrowDown") {
      if (video) {
        video.volume -= 0.1;
        let bar = video.volume;
        volumeBar.style.width = bar * 100 + "%";
      } else {
        console.log("There is no video");
      }
    }
  });
  video.addEventListener("click", handleVideoPlay);
  playBtn.addEventListener("click", handleVideoPlay);
  volumeBtn.addEventListener("click", handleVolumeMute);
  volumeRange.addEventListener("mousedown", handleVolumeDown);
  volumeRange.addEventListener("mousemove", handleVolumeDrag);
  document.addEventListener("mouseup", handleVolumeUp);
  video.addEventListener("loadedmetadata", getVideoTime);
  video.addEventListener("timeupdate", mommyCanIGetJuice);
  video.addEventListener("ended", videoFinished);
  playerBottle.addEventListener("mousedown", handlePlayerBarDown);
  fullScreenBtn.addEventListener("click", goFullScreen);
}

if (videoPlayer) {
  video.volume = 0.5;
  volumeBar.style.width = video.volume * 100 + "%";
  playerJuice.style.width = 0 + "%";
  init();
}
