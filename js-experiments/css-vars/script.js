const inputs = document.querySelectorAll('.controls input') // Returns nodelist (not array)

function handleUpdate() {
  const suffix = this.dataset.sizing || ""// .dataset gets data attributes (own attributes that are prefixed with data)

  // Need to update variable
  // Select entire document (root), then set property of base, spacing, or blur
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
