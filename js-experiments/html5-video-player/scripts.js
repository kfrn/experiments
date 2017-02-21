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

function toggleFullScreen() {
  if (!fullScreenVideo) {
    ['mozRequestFullScreen',
     'msRequestFullscreen',
     'webkitRequestFullScreen'].forEach(req => {
       fullScreenVideo = fullScreenVideo || player[req]
     })
    fullScreenVideo.call(player)
  } else {
    console.log("exit fullscreen here - but how?");
    // fullScreenVideo.exitFullscreen()
    // player.exitFullscreen() /* Console message -- Uncaught TypeError: player.exitFullscreen is not a function at HTMLButtonElement.toggleFullScreen */
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
