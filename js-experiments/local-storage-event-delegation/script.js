const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []
const deleteButton = document.querySelector('.delete-all')
const checkAllButton = document.querySelector('.check-all')
const uncheckAllButton = document.querySelector('.uncheck-all')

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text: text, // ES6: just 'text'
    done: false
  }
  items.push(item)
  populateList(items, itemsList)

  // Set items array into localStorage
  // localStorage is key-value: strings only
  localStorage.setItem('items', JSON.stringify(items))

  this.reset() // 'this' = form element - have a method reset().
}

function populateList(items = [], itemsList) { // default value of empty array
  itemsList.innerHTML = items.map((item, i) => {
    return`
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
        <label for="item${i}">${item.text}</label>
      </li>
    `
  }).join('') // Map returns array, but we just want one big string.
}

function toggleDone(e) {
  const el = e.target
  if (!el.matches('input')) return // Skip unless it's an input
  // console.log(el.dataset.index) // Gives index of item in array
  const idx = el.dataset.index
  items[idx].done = !items[idx].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

function clearList(e) {
  e.preventDefault()
  localStorage.removeItem('items')
  populateList(items, itemsList)
  itemsList.innerHTML = ''
}

function checkAll(e) {
  e.preventDefault()
  if (items.length !== 0) {
    checkClearAll = items.map(item => item.done = true)
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  }
}

function uncheckAll(e) {
  e.preventDefault()
  if (items.length !== 0) {
    checkClearAll = items.map(item => item.done = false)
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  }
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
deleteButton.addEventListener('click', clearList)
checkAllButton.addEventListener('click',checkAll)
uncheckAllButton.addEventListener('click', uncheckAll)

populateList(items, itemsList)
