const hero = document.querySelector('.hero')
const heroText = document.querySelector('h1')
const shadowStretch = 100 // 100px

function moveShadow(e) {
  const width = hero.offsetWidth
  const height = hero.offsetHeight
  // const { offsetWidth: width, offsetHeight: height } = hero // ES6 destructuring
  let { offsetX: x, offsetY: y } = e
  // console.log(x, y); // When hovering over <h1>, getting 0,0 at top left. Even though we're listening for mousemoves on the hero, if there are children inside the hero, it's going to give them the x and y for those elements. To compensate:
  if (this !== e.target) { // 'This' is the <div class="here">. 'e.target' is the thing that event is triggered on
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }
  const xWalk = Math.round((x / width * shadowStretch) - (shadowStretch / 2)) // Range of -50 to 50
  const yWalk = Math.round((y / width * shadowStretch) - (shadowStretch / 2))

  heroText.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(200,200,200,0.8),
  ${xWalk * -1}px ${yWalk}px 0 rgba(200,0,200,0.8),
  ${xWalk * 2}px ${yWalk}px 0 rgba(200,200,0,0.8)
  `
}

hero.addEventListener('mousemove', moveShadow)
