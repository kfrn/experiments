const slider = document.querySelector('.items')
let isDown = false // flag variable
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  // Capture variables at time of mousedown
  startX = e.pageX - slider.offsetLeft // accounts for margin of slider div
  scrollLeft = slider.scrollLeft // use scrollLeft not offsetLeft!
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  // Reference variables on mouse move
  const x = e.pageX - slider.offsetLeft // recalculate pos everytime mouse is moved.
  const walk = (x - startX) * 3 // how far have we moved from initial place. Times three to make it easier to use.
  slider.scrollLeft = scrollLeft - walk
})
