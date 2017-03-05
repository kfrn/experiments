const links = document.querySelectorAll(".itemLinks")
const wrapper = document.querySelector("#wrapper")
let activeLink = 0 // Stores position of content that is currently displayed

function setClickedItem(e) {
    removeActiveLinks()

    var clickedLink = e.target
    activeLink = clickedLink.itemID

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active")
    }
}

function changePosition(link) {
    var position = link.getAttribute("data-pos")

    var translateValue = "translate3d(" + position + ", 0px, 0)"
    wrapper.style.transform = translateValue

    link.classList.add("active")
}

// Add event listeners
for (var i = 0; i < links.length; i++) {
    var link = links[i]
    link.addEventListener('click', setClickedItem, false);
    link.itemID = i
}

links[activeLink].classList.add("active")


// links.forEach(link => link.addEventListener('click', ADDFN))
