const nav = document.querySelector('#main')
const topofNav = nav.offsetTop

function fixNav() {
  // Figure out how far to scroll to hit nav bar
  // if (topofNav >= window.scrollY) {
  //   console.log("topofNav >= window.scrollY");
  // }
  if (window.scrollY >= topofNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px' // this gives the height of the nav and sets it as padding. Gets rid of the jump
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav)
