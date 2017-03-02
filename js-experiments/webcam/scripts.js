const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      // Take video and set source to the local media stream
      // But it needs to be converted into a url
      video.src = window.URL.createObjectURL(localMediaStream)
      video.play()
    })
    .catch(err => { // If they don't allow access to the webcam
      console.error("OH NO!", err)
    })
}

function paintToCanvas() {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height

  return setInterval( () => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    // console.log(pixels) // Massive arrays listing RGBA values in turn

    // Mess with the pixels
    // pixels = redEffect(pixels)
    // pixels = rgbSplit(pixels)
    // ctx.globalAlpha = 0.2 // creates ghosting effect: 10% of current image overlaid.
    pixels = greenScreen(pixels)

    // Put them back
    ctx.putImageData(pixels, 0, 0)

  }, 16) // Update every 16ms
}

function redEffect(pixels) {
  // Loop over every single pixel
  for (let i = 0; i < pixels.data.length; i += 4) { // can't use map as it's not a real array
    pixels.data[i + 0] = pixels.data[i + 0] + 50 // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50 // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5 // blue
  }
  return pixels
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) { // can't use map as it's not a real array
  // += 4 because it's for every 4 values: r, g, b, a
    pixels.data[i - 150] = pixels.data[i + 0] // red. 150 pixels back, set to current colour
    pixels.data[i + 100] = pixels.data[i + 1] // green. 100 pixels forward
    pixels.data[i - 550] = pixels.data[i + 2] // blue
  }
  return pixels
}

function greenScreen(pixels) {
  const levels = {} // will hold minimum and maximum greens

  document.querySelectorAll('.rgb input').forEach((input) => { // getting all six of the sliders
    levels[input.name] = input.value
  })

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0 // sets alpha pixel to 0, i.e. transparent
    }
  }

  return pixels
}

function takePhoto() {
  // Plays the sound
  snap.currentTime = 0
  snap.play()

  // Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg')
  // console.log(data) // text-based representation of the picture
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome') // sets name as handsome.jpeg

  // Makes it downloadable
  // link.textContent = 'Download image'

  // Or, show the image on the page
  link.innerHTML = `<img src="${data}" alt="looking good">`

  strip.insertBefore(link, strip.firstChild)
}

getVideo()

video.addEventListener('canplay', paintToCanvas) // Once the webcam video is playing, it will emit an event called canplay
