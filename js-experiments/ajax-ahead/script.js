const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// fetch(endpoint) returns a promise
fetch(endpoint)
  .then(result => result.json())
  // .then(data => cities.push(data)) // This makes a nested array
  .then(data => cities.push(...data)) // use spread operator

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

// findMatches("York", cities)

function numberWithCommas(num) {
  return num.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
  // Whenever type in - run function, find matches
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}
      </li>
    `
  }).join('') // From array to string
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches) // change event only fires when you go off that input

searchInput.addEventListener('keyup', displayMatches) // Listen for keyup event
