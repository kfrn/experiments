/* ELEMENTS */
let player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenButton = player.querySelector('.fullscreen-button')
let fullScreenVideo = player.requestFullscreen


/* FUNCTIONS */

function togglePlay() {
  // if (video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }

  // More concise way :
  const controlVideo = video.paused ? 'play' : 'pause'
  video[controlVideo]()
}

// Listen to video - if paused, update button.
function updateButton() {
  const icon = this.paused ? '►' : '❚❚'
  toggle.textContent = icon
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  // this.name = 'volume' or 'playbackRate'
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100 // get percentage
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

/* From https://developers.google.com/web/fundamentals/native-hardware/fullscreen/ */
function toggleFullScreen() {
  var doc = window.document;

  var requestFullScreen = player.requestFullscreen || player.mozRequestFullScreen || player.webkitRequestFullScreen || player.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(player);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

/* EVENT LISTENERS */

document.body.onkeyup = (e) => { // spacebar to toggle play/pause
  if (e.keyCode === 32) togglePlay()
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

fullscreenButton.addEventListener('click', toggleFullScreen)
