const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
  let inBetween = false
  if (e.shiftKey && this.checked) { // if shift key is down and they are checking the box
    // Loop over every checkbox and see where checks start and end
    checkBoxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween // to allow both directions
        console.log("starting/ending check");
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)) // Click event will fire even if you use your keyboard
