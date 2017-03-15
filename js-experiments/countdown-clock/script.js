let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
const timeInput = document.customForm // uses the name attribute

function timer(seconds) {
  clearInterval(countdown)// need to clear any existing timers

  const now = Date.now()
  const then = now + (seconds * 1000)
  displayTimeLeft(seconds) // run immediately, so there isn't the one-second gap.
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }

    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  let remSeconds = String(seconds % 60)
  // if (remSeconds < 10) remSeconds = `0${remSeconds}`
  const display = `${minutes}:${remSeconds < 10 ? '0' : ''}${remSeconds}`
  document.title = display
  timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  let hour = end.getHours()
  if (hour > 12) hour = hour - 12 // 18:00 -> 6:00pm, etc
  const minutes = end.getMinutes()
  if (minutes < 10) minutes = `0${minutes}`
  endTime.textContent = `Be back at ${hour}:${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
timeInput.addEventListener('submit', function (e) {
  e.preventDefault() // to not reload the page
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})
