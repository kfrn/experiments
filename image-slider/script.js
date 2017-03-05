const links = document.querySelectorAll(".itemLinks")
const wrapper = document.querySelector("#wrapper")
let activeLink = 0 // Stores position of content that is currently displayed

function setClickedItem(e) {
    removeActiveLinks()
    const clickedLink = e.target
    activeLink = clickedLink.itemID
    changePosition(clickedLink)
}

function removeActiveLinks() {
  links.forEach(link => link.classList.remove('active'))
}

function changePosition(link) {
    var position = link.getAttribute("data-pos")

    var translateValue = "translate3d(" + position + ", 0px, 0)"
    wrapper.style.transform = translateValue

    link.classList.add("active")
}

// Add event listeners
links.forEach( (link, idx) => {
  link.addEventListener('click', setClickedItem, false)
  link.itemID = idx
})

links[activeLink].classList.add("active")
