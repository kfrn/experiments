const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('nav.top')

function handleEnter() {
  this.classList.add('trigger-enter')
  setTimeout( () => { // with an arrow functi, the value of 'this' is inherited from the parent function.
    this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')
  }, 150) // So that you don't get tripped up the 150ms offset. Add will never run unless 'trigger-enter' is in the classlist.
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown') // Need to find dropdown that exists inside of thing that got hovered.
  const dropdownCoords = dropdown.getBoundingClientRect() // Where on the page is that actual item.
  const navCoords = nav.getBoundingClientRect()

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // Account for placement of nav
    left: dropdownCoords.left - navCoords.left
  }

  background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
