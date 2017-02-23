Learning points:

* For strings & numbers, changing the original doesn't update the other one.
* For arrays, any updates/changes will always reference back to original. Can't just create a copy by making new variable equal to the original array - this points to the original array, it's not a copy.
* `.slice` and `concat` to make a copy of an array
* Better way: spread operator or `Array.from`
* For objects: using `Object.assign`
* *Note*: these are all shallow copies. They will copy all levels, but then if you reassign a sub property, it will affect the original.
* Use `deepclone` module
* Workaround: `const copy = JSON.parse(JSON.stringify(original))`. The "poor man's deep clone"
* React has an object spread!!!
