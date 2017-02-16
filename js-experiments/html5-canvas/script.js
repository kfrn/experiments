const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d') // You draw on the context, not the canvas itself.

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55' // default colour when drawing
ctx.lineJoin = 'round' // Rounded-edge joins
ctx.lineCap = 'round' // Stroke rounded off at end
ctx.lineWidth = 20

let isDrawing = false // flag for mousedown/up
let lastX = 0
let lastY = 0
let hue = 0

function draw(e) {
  if (!isDrawing) return
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` // HSL goes 0-360 but also wraps around
  ctx.beginPath()
  ctx.moveTo(lastX, lastY) // start from here
  ctx.lineTo(e.offsetX, e.offsetY) // go to here
  ctx.stroke()
  // With just the above, super-cool radial effect
  lastX = e.offsetX
  lastY = e.offsetY
  hue++
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false) // if you move mouse off canvas
