A collection of exercises from the tutorial series [JS 30](https://javascript30.com/) by Wes Bos.  
The reason for adding them here is as a record of my learning, and a handy reference.

List of the projects, and main takeaways from each:

01. [Drum kit](./js-drumkit/) - playing audio, using `transitionend` event
02. [Clock](./clock/) - JS date object, creating shapes directly with CSS
03. [CSS variables](./css-vars/) - different to SASS!
04. [Array cardio I](./array-cardio-i/) - revision of `map`, `filter`, `reduce`, `sort`
05. [Flex panels image gallery](./flex-panels/) - CSS transitions and flexbox. Really nice tricks!
06. [AJAX](./ajax-ahead/) - using `fetch`, live search possibilities, highlight search term within results
07. [Array cardio II](./array-cardio-ii/) - more Array methods revis. `sum`, `every`, `find`, `findIndex`
08. [HTML5 canvas fun](./html5-canvas/) - drawing with the mouse, changing colour
09. Dev tools tricks (see below)
10. [Hold shift to check multiples boxes](./checkboxes/) - just as it says
11. [Custom HTML5 video player](./html5-video-player/) - progress bar, skip, speed, volume, fullscreen. SUPER COOL!
12. [Key sequence detection](./key-detection/) - add a ~_secret code_~ to webpage!
13. [Images slide in on scroll](./slide-in-on-scroll/) - gimmicky effect, but interesting logic. Using `window` properties like `scrollY` and element properties like `offsetTop`, etc.
14. [Objects and arrays - references & copies](./objects-arrays-ref-copy/) - strings/numbers v. objects/arrays. Spread operator, `Array.from`, `Object.assign`. But not deep copies so beware!
15. [Using localstorage; event delegation](./local-storage-event-delegation/) - local storage and persisting items
16. [Mouse move shadow](./mouse-move-shadow/) - getting mouse position
17. [Sorting names without articles](./sort-without-articles/) - so handy! Use a remove article FN to sort originals.
18. [Sum times with `reduce`](./sum-times-with-reduce/) - summing time with `map` and `reduce`
19. [Webcam fun](./webcam/) - piping webcam to canvas; making snapshots; video filtering!
20. [Native speech recognition](./native-speech-recognition/) - using the `speechRecognition` API (currently experimental)
21. Geolocation - didn't do, Mac only
22. [Follow along links](./follow-along-links/) - a highlight box that follows you as you move mouse over the page. Using `get BoundingClientRect()` and applying it to inline style.
23. [Speech synthesis](./speech-synthesis/) - `speechSynthesis` API, range inputs, `function.bind()`
24. [Sticky nav](./sticky-nav/) - Nav bar stays at the top, even as you scroll down. Useful
25. [Event capture, propagation, bubbling](./event-capture/) - eventListeners and nested elements!
26. [Follow-along dropdown menu](./followalong-nav/) - Making an auto-resizing dropdown div for each menu item. This is really cool
27. [Click and drag to scroll](./click-drag-scroll/) - the 'hand tool' effect. Using `.pageX`, `.offsetLeft`, and `scrollLeft`
28. [Video speed controller](./video-speed-controller/) - a speed slider for your video.
29. [Countdown clock](./countdown-clock/) - time in JS, `this.dataSet` to work with data attributes
30. [Whack-a-mole game](./whackamole-game/) - game logic; `isTrusted` on events - can't fake clicks.

#### Dev tools tricks

* use `%c` to style console logs
* `console.warn`: Adds warning symbol
* `console.error`: display as error - with stack trace
* `console.info`: adds info symbol
* `console.dir`: gives methods etc of DOM element
* `console.group`/`groupCollapsed` & `console.groupEnd` - groups logs
* `console.time` and `console.timeEnd` - how long things are taking
* `console.table` - for arrays!
