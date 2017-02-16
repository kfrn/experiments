const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55' // default colour when drawing
ctx.lineJoin = 'round' // Rounded-edge joins
ctx.lineCap = 'round' // Stroke rounded off at end

let isDrawing = false // flag for mousedown/up
let lastX = 0
let lastY = 0

function draw(e) {
  if (!isDrawing) return
  console.log(e)
  ctx.beginPath()
  ctx.moveTo(lastX, lastY) // start from here
  ctx.lineTo(e.offsetX, e.offsetY) // go to here
  ctx.stroke()
  // With just the above, super-cool radial effect
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false) // if you move mouse off canvas
