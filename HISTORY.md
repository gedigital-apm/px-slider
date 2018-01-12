v2.2.0
==================
* Reduced slider margin now that space is not needed since redesign.
* Removed dist and transpiled ES6 code

v2.1.1
==================
* fix simple demo (#21)

v2.1.0
==================
* Polymer 1.x/2.x hybrid support

v2.0.5
==================
* add device flags

v2.0.4
==================
* fix comment for analyzer

v2.0.3
==================
* runtime theming for demo

v2.0.2
==================
* fix display issues in all browsers

v2.0.1
==================
* fix css vars and pick up label color fix from theme

v2.0.0
==================
* merge and rebuild css, fix variables for theming
* add hover/pressed state for progressbar, css transition
* component redesign

v1.0.3
==================
* Adding polygit import to fix codepen

v1.0.2
==================
* Improved accessibility
* Updated demo dependency

v1.0.1
==================
* Simplify sass build

v1.0.0
==================
* Refactored code
* Leverage d3 for calc scales and some other methods
* Leverage SVG for slider pieces for versatility and control
* Added ability to specify different logs
* Added power scale and what kind of power scale
* Added optional min and max labels
* Added Validation errors on input boxes
* Added ability to use ESC to reset invalid input box entries
* Clicking on blue progress bar now jumps closest handle with ranged slider
* Fixes various bugs
* Many stability improvements
* Updated demo

v0.8.5
==================
* fixed spacing per design feedback

v0.8.4
==================
* Updating so px-demo-snippet and px-api-viewer get new grays

v0.8.3
==================
* Update colors design to pick up new colors

v0.8.2
==================
* changing ghp.sh to account for Alpha releases

v0.8.1
==================
* merge PR #10 for log slider

v0.8.0
==================
* Updated dependencies

v0.7.8
==================
* changing browser in wct testing from safari 8 to safari 10 on elcapitan

v0.7.7
==================
* updated style for css variable   --px-handle-background-color--hover

v0.7.6
==================
* changing all devDeps to ^

v0.7.5
==================
* Update px-theme to 2.0.1 and update test fixtures

v0.7.4
==================
* removing px-theme style call


v0.7.3
==================
* changing Gruntfile.js to gulpfile.js

v0.7.2
==================
* changed css variable names to match BEM

v0.7.1
==================
* bower updating px-demo-snippet

v0.7.0
=================
* fixed display issue with multi-handle
* added property for hide-inputs per #7

v0.6.7
=================
* added style variables for theming
* fixed dependencies

v0.6.3
=================
* Made positioning work with shadow DOM
* made value default to min if not init; removed throw error
* added check to flip max and min if max < min

v0.6.2
=================
* added support for negative values

v0.6.1
=================
* made it so disabled actually does something
* added unit tests
* fixed issues in demo (description, resize)
* cleaned up and simplified code (comments, reflect, public to private API, event complexity)

v0.6.0
=================
* uprev

v0.5.9
=================
* added codepen

v0.5.8
=================
* fixed demo bugs

v0.5.7
=================
* updated mega demo styles and bower px-demo-snippet to ^

v0.5.6
=================
* updated demos-snippets

v0.5.5
=================
* removed broken example

v0.5.4
=================
* added image to readme, removed watch, added view on github

v0.5.3
=================
* updated gh-pages script to vulcanize demo

v0.5.2
=================
* Enabled api viewer

v0.5.1
=================
* Updated to new demo

v0.5.0
=================
* Upgrade to Polymer 1.5.0

v0.4.3
=================
* added oss_notice to bower ignore

v0.4.2
=================
* added pull request test for travis and updated OSS Notice

v0.4.1
=================
* added auto github pages functionality

v0.4.0
=================
* Upgrade to Polymer 1.4.0

v0.3.2
=================
* updated README and put a link to full API on the GH-pages.

v0.3.1
=================
* edited readme

v0.3.0
=================
* implemented the iron-resizable-behavior behavior

v0.2.4
==================
* Updated License

v0.2.3
==================
* fixed a bug where sometimes, moving a multihandle to match the value of the other handle caused the other handle to jump
* removed obsolete "demo bugs" from the demo page.
==================
v0.2.2
==================
* fixed a bug in Firefox which allowed the user to drag the image of the handle instead of the handle
* fixed a bug in IE where ClassList (which is called by Polymer in toggleClass) cannot be used on an SVG element.
==================
v0.2.1
==================
* implemented redesign of the multi-slider to prevent overlapping handles
* fixed a strange rounding error when floating point numbers that caused value to flicker in input box
* improved displayed rounding in input box to match number of decimals in the step attr
==================
v0.0.1
==================
* Initial release
