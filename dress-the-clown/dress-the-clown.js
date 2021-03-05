  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Declare global variables

var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0
var bodyParts = ["shoes" , "body", "head"]
var relevantIndex = [shoesIndex, bodyIndex, headIndex]
var bodyPartIndex = 2

// detect key presses

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 37:
      change("down"); // left
      break;
    case 38:
      changeBodyPartIndex("up"); // up
      break;
    case 39:
      change("up"); // right
      break;
    case 40:
      changeBodyPartIndex("down"); // down
      break;
  }
});

// Change the body part index

function changeBodyPartIndex (direction) {
  if (direction == "up") {
    if (bodyPartIndex === 2) {
      bodyPartIndex = 0
    } else {
      bodyPartIndex ++
    }
  } else if (direction == "down") {
    if (bodyPartIndex === 0) {
      bodyPartIndex = 2
    } else {
      bodyPartIndex --
    }
  }
  let image = document.getElementById("arrow")
  image.src = "images/arrow" + bodyPartIndex + ".png"
}

// change any body part

function change (direction) {
  if (direction == "up") {
    if (relevantIndex[bodyPartIndex] == 5) {
      relevantIndex[bodyPartIndex] = 0
    } else {
      relevantIndex[bodyPartIndex] ++
    }
  } else if (direction == "down") {
    if (relevantIndex[bodyPartIndex] == 0) {
      relevantIndex[bodyPartIndex] = 5
    } else {
      relevantIndex[bodyPartIndex] --
    }
  }
  let image = document.getElementById(bodyParts[bodyPartIndex])
  image.src = "images/" + bodyParts[bodyPartIndex] + relevantIndex[bodyPartIndex] + ".png"
}

console.log("Dress The Clown!")

