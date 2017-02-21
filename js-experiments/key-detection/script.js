const pressed = []
const secretCode = 'katkat'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length) // this will keep the length to that of the secret code, pushing out array elements from the beginning as new ones are added.
  if (pressed.join('').includes(secretCode)) {
    console.log("YOU WIN!!!!!")
    cornify_add()
  }
  // console.log(pressed)
})
