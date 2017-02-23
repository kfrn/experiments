/* start with strings, numbers and booleans */
let age = 27
let age2 = age
console.log(age, age2) // 100, 100
age = 200
console.log(age, age2) // 200, 100

let name = "Kat"
let name2 = name
console.log(name, name2) // Kat Kat
name = "Katherine"
console.log(name, name2) // Katherine Kat

// For strings & numbers, changing the original doesn't update the other one.

/* Let's say we have an array */
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

/* and we want to make a copy of it. */
const team = players
console.log(players, team) // ["Wes", "Sarah", "Ryan", "Poppy"] ["Wes", "Sarah", "Ryan", "Poppy"]

/* You might think we can just do something like this: */
team[3] = "Billy"

// team: ["Wes", "Sarah", "Ryan", "Billy"]
// players: ["Wes", "Sarah", "Ryan", "Billy"]

/* Team is not the array - it's a reference to the original array, players.
however what happens when we update that array?
now here is the problem!
oh no - we have edited the original array too!
Why? It's because that is an array reference, not an array copy. They both point to the same array! */

/* So, how do we fix this? We take a copy instead! */
const team2 = players.slice() // if you pass slice nothing, it will make a copy of the actual array
team2[0] = "First"

// team2: ["First", "Sarah", "Ryan", "Billy"]
// players: ["Wes", "Sarah", "Ryan", "Billy"]

/* Create a new array and concat the old one in */
const team3 = [].concat(players)
// team3: ["Wes", "Sarah", "Ryan", "Billy"]

/* Or use the new ES6 Spread.
Now when we update it, the original one isn't changed */
const team4 = [...players]
team4[1] = "second"
// team4: ["Wes", "second", "Ryan", "Billy"]

/* Or use Array.from */
const team5 = Array.from(players)
team5[2] = "third"
// team5: ["Wes", "Sarah", "third", "Billy"] // orig intact

/* The same thing goes for objects, let's say we have a person object. */
const person = {
  name: "Kath",
  age: 99
}

/* How do we take a copy? */
const person2 = Object.assign({}, person, {age: 88, number: 99})
console.log(person) // {name: "Kath", age: 99}
console.log(person2) // {name: "Kath", age: 88, number: 99}

/* We will hopefully soon see the object ...spread. */

/* Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it. */
