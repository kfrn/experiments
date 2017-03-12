const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function handleMove(e) {
  const y = e.pageY - this.offsetTop // where are you within the speed bar (which is 410 tall)
  const percent = y / this.offsetHeight // this.offsetHeight = 410
  const height = Math.round(percent * 100) + '%'

  const min = 0.5
  const max = 4
  const playbackRate = percent * (max - min) + min

  bar.style.height = height
  bar.textContent = `${playbackRate.toFixed(1)}x`

  video.playbackRate = playbackRate
}

speed.addEventListener('mousemove', handleMove)
