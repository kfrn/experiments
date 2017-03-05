const divs = document.querySelectorAll('div')

function logText(e) {
  console.log(this.classList.value) // if clicking on centre div, this will log the class names of all three divs.
  e.stopPropagation() // stops event bubbling up
}

// divs.forEach(div => div.addEventListener('click', logText))
// divs.forEach(div => div.addEventListener('click', logText, {capture: true})) // function will not be run on the bubble-up; it'll get run on the capture down. Default is false: on bubble-up.
divs.forEach(div => div.addEventListener('click', logText, {
  capture: true,
  once: true // will unbind itself after being clicked.
}))
