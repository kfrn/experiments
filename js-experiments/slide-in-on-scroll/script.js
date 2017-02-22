// Debounce will run all the time when we scroll, but the funtion 'checkSlide' (passed in) will only run every 20 milliseconds.
function debounce(func, wait = 20, immediate = true) {
  var timeout
  return function() {
    var context = this, args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    };
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  // Loop over ever image and figure out when it should be shown (= at 50% of height visible).
  sliderImages.forEach(sliderImage => {
    // console.log(window.scrollY) // tells how much you are scrolled down from the top of the page
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2) // image should slide in when it's 50% visible
    const imageBottom = sliderImage.offsetTop + sliderImage.height // pixel level of how far down the image is, plus the height of the image
    const isHalfShown = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
    console.log(slideInAt);
  })
}

window.addEventListener('scroll', debounce(checkSlide))
