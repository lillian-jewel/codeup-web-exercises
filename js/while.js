"use strict";

var i = 0;
var z = 1
while (i < 16) {
    var z = z * 2
    console.log("While loop iteration #" + z);
    i++;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var cones = Math.floor(Math.random() * 5) + 1;
var soldCones = 0

do {
    if (cones > (allCones - soldCones)) {
        console.log("I only have " + (allCones - soldCones) + " cones left.")
        continue;
    } if (soldCones += cones) {
        console.log("I have " + (allCones - soldCones) + " cones left.")
    } if ((allCones - soldCones) == 0) {
        console.log("I sold them all!")
    }
} while (soldCones < allCones);