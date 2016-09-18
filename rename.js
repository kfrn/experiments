/*********************************
Script mimicking file renaming
Proof-of-concept/practice exercise
*********************************/

/* Naming schema:
[magazineName][VolumeNumber]-[YEAR]-[MONTH]
e.g.: variety86-1927-03 */

/* Files currently named as: "CenT_No55_##"
Therefore my target is: "cinemaentheater55-1922_##" */

/* Operating on just one string */
// Original file name
var magTitle = "CenT_No55_01";
// regex for finding number in filename
var issueNo = /[0-9]{2}/;
// Set variables
var title = "cinemaentheater"
var issue = magTitle.match(issueNo);
var separator1 = "-";
var year = 1922;
var separator2 = "_"
var numbering = magTitle.substr(magTitle.length - 2);

// Create renamed title in new variable
var newTitle = title + issue + separator1 + year + separator2 + numbering; // -> "cinemaentheater55-1922_01"

// Function that uses the above pattern to create new array

var filenames = ["CenT_No55_01", "CenT_No55_02", "CenT_No55_03", "CenT_No55_04", "CenT_No55_05", "CenT_No55_06", "CenT_No55_07", "CenT_No55_08", "CenT_No55_09", "CenT_No55_10", "CenT_No55_11", "CenT_No55_12"];

var newArray = [];

function rename(array, year) {
  // Set general variables
  var title = "cinemaentheater"
  // Get numbering from first element in array (since it's the same in all the elements)
  var issueNo = /[0-9]{2}/; // Set regex
  var numbering = array[0].match(issueNo); // Actually pull out number
  var separator1 = "-";
  var separator2 = "_"
  // Construct elements of newArray from old
  for (var i = 0; i < array.length; i++) {
    var newElement = title + numbering + separator1 + year + separator2 + array[i].substr(array[i].length - 2);
    console.log(newElement); // Just for checking
    // Add to newArray
    newArray.push(newElement);
  }
  // return newArray;
  console.log(newArray);
}
